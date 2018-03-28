// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import Layer from '../base-layer';
import memoize from 'lodash.memoize';
import {ScatterplotLayer} from 'deck.gl';
import ScatterplotBrushingLayer from 'deckgl-layers/scatterplot-brushing-layer/scatterplot-brushing-layer';
import {hexToRgb} from 'utils/color-utils';
import PointLayerIcon from './point-layer-icon';

export const pointPosAccessor = ({lat, lng, altitude}) => d => [
  d.data[lng.fieldIdx],
  d.data[lat.fieldIdx],
  altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0
];

export const pointPosResolver = ({lat, lng, altitude}) =>
  `${lat.fieldIdx}-${lng.fieldIdx}-${altitude ? altitude.fieldIdx : 'z'}`;
export const pointRequiredColumns = ['lat', 'lng'];
export const pointOptionalColumns = ['altitude'];

export const pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  colorRange: 'colorRange',
  radiusRange: 'radiusRange',
  'hi-precision': 'hi-precision'
};

export default class PointLayer extends Layer {
  constructor(props) {
    super(props);

    this.registerVisConfig(pointVisConfigs);
    this.getPosition = memoize(pointPosAccessor, pointPosResolver);
  }

  get type() {
    return 'point';
  }

  get isAggregated() {
    return false;
  }

  get layerIcon() {
    return PointLayerIcon;
  }
  get requiredLayerColumns() {
    return pointRequiredColumns;
  }

  get optionalColumns() {
    return pointOptionalColumns;
  }

  get columnPairs() {
    return this.defaultPointColumnPairs;
  }

  get noneLayerDataAffectingProps() {
    return [...super.noneLayerDataAffectingProps, 'radius'];
  }

  get visualChannels() {
    return {
      ...super.visualChannels,
      size: {
        ...super.visualChannels.size,
        range: 'radiusRange',
        property: 'radius',
        channelScaleType: 'radius'
      }
    };
  }

  formatLayerData(_, allData, filteredIndex, oldLayerData, opt = {}) {
    const {
      colorScale,
      colorDomain,
      colorField,
      color,
      columns,
      sizeField,
      sizeScale,
      sizeDomain,
      visConfig: {radiusRange, fixedRadius, colorRange}
    } = this.config;

    // point color
    const cScale =
      colorField &&
      this.getVisChannelScale(
        colorScale,
        colorDomain,
        colorRange.colors.map(hexToRgb)
      );

    // point radius
    const rScale =
      sizeField &&
      this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);

    const getPosition = this.getPosition(columns);

    if (!oldLayerData || oldLayerData.getPosition !== getPosition) {
      this.updateLayerMeta(allData, getPosition);
    }

    let data;
    if (
      oldLayerData &&
      oldLayerData.data &&
      opt.sameData &&
      oldLayerData.getPosition === getPosition
    ) {
      data = oldLayerData.data;
    } else {
      data = filteredIndex.reduce((accu, index) => {
        const pos = getPosition({data: allData[index]});

        // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null
        if (!pos.every(Number.isFinite)) {
          return accu;
        }

        accu.push({
          data: allData[index]
        });

        return accu;
      }, []);
    }

    const getRadius = d =>
      rScale ? this.getEncodedChannelValue(rScale, d.data, sizeField) : 1;

    const getColor = d =>
      cScale ? this.getEncodedChannelValue(cScale, d.data, colorField) : color;

    return {
      data,
      getPosition,
      getColor,
      getRadius
    };
  }

  updateLayerMeta(allData, getPosition) {
    const bounds = this.getPointsBounds(allData, d => getPosition({data: d}));
    this.updateMeta({bounds});
  }

  renderLayer({
    data,
    idx,
    layerInteraction,
    objectHovered,
    mapState,
    interactionConfig
  }) {
    const layerProps = {
      outline: this.config.visConfig.outline,
      radiusMinPixels: 1,
      fp64: this.config.visConfig['hi-precision'],
      strokeWidth: this.config.visConfig.thickness,
      radiusScale: this.getRadiusScaleByZoom(mapState.zoom),
      ...(this.config.visConfig.fixedRadius ? {} : {radiusMaxPixels: 500})
    };

    const baseLayerProp = {
      ...layerProps,
      ...layerInteraction,
      ...data,
      idx,
      opacity: this.config.visConfig.opacity,
      pickable: true,
      updateTriggers: {
        getRadius: {
          sizeField: this.config.sizeField,
          radiusRange: this.config.visConfig.radiusRange,
          fixedRadius: this.config.visConfig.fixedRadius,
          sizeScale: this.config.sizeScale
        },
        getColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: this.config.visConfig.colorRange,
          colorScale: this.config.colorScale
        }
      }
    };

    return [
      // base layer
      interactionConfig.brush.enabled
        ? new ScatterplotBrushingLayer({
            ...baseLayerProp,
            id: `${this.id}-brush`,
            enableBrushing: true,
            brushRadius: interactionConfig.brush.config.size * 1000
          })
        : new ScatterplotLayer({
            id: this.id,
            ...baseLayerProp
          }),

      // hover layer
      ...(this.isLayerHovered(objectHovered)
        ? [
            new ScatterplotLayer({
              ...layerProps,
              id: `${this.id}-hovered`,
              data: [
                {
                  color: this.config.highlightColor,
                  position: data.getPosition(objectHovered.object),
                  radius: data.getRadius(objectHovered.object)
                }
              ],
              pickable: false
            })
          ]
        : [])
    ];
  }
}