"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDefaultLayer = findDefaultLayer;
exports.calculateLayerData = calculateLayerData;
exports.getLayerHoverProp = getLayerHoverProp;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2021 Uber Technologies, Inc.
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

/**
 * Find default layers from fields
 * @type {typeof import('./layer-utils').findDefaultLayer}
 */
function findDefaultLayer(dataset, layerClasses) {
  if (!dataset) {
    return [];
  }

  var layerProps = Object.keys(layerClasses).reduce(function (previous, lc) {
    var result = typeof layerClasses[lc].findDefaultLayerProps === 'function' ? layerClasses[lc].findDefaultLayerProps(dataset, previous) : {
      props: []
    };
    var props = Array.isArray(result) ? result : result.props || [];
    var foundLayers = result.foundLayers || previous;
    return foundLayers.concat(props.map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        type: lc,
        dataId: dataset.id
      });
    }));
  }, []); // go through all layerProps to create layer

  return layerProps.map(function (props) {
    var layer = new layerClasses[props.type](props);
    return typeof layer.setInitialLayerConfig === 'function' && Array.isArray(dataset.allData) ? layer.setInitialLayerConfig(dataset.allData) : layer;
  });
}
/**
 * calculate layer data based on layer type, col Config,
 * return updated layer if colorDomain, dataMap has changed
 * @type {typeof import('./layer-utils').calculateLayerData}
 */


function calculateLayerData(layer, state, oldLayerData) {
  var type = layer.type;

  if (!type || !layer.hasAllColumns() || !layer.config.dataId) {
    return {
      layer: layer,
      layerData: {}
    };
  }

  var layerData = layer.formatLayerData(state.datasets, oldLayerData);
  return {
    layerData: layerData,
    layer: layer
  };
}
/**
 * Calculate props passed to LayerHoverInfo
 * @type {typeof import('./layer-utils').getLayerHoverProp}
 */


function getLayerHoverProp(_ref) {
  var interactionConfig = _ref.interactionConfig,
      hoverInfo = _ref.hoverInfo,
      layers = _ref.layers,
      layersToRender = _ref.layersToRender,
      datasets = _ref.datasets;

  if (interactionConfig.tooltip.enabled && hoverInfo && hoverInfo.picked) {
    // if anything hovered
    var object = hoverInfo.object,
        overlay = hoverInfo.layer; // deckgl layer to kepler-gl layer

    var layer = layers[overlay.props.idx];

    if (layer.getHoverData && layersToRender[layer.id]) {
      // if layer is visible and have hovered data
      var dataId = layer.config.dataId;
      var _datasets$dataId = datasets[dataId],
          allData = _datasets$dataId.allData,
          fields = _datasets$dataId.fields;
      var data = layer.getHoverData(object, allData);
      var fieldsToShow = interactionConfig.tooltip.config.fieldsToShow[dataId];
      return {
        data: data,
        fields: fields,
        fieldsToShow: fieldsToShow,
        layer: layer
      };
    }
  }

  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sYXllci11dGlscy5qcyJdLCJuYW1lcyI6WyJmaW5kRGVmYXVsdExheWVyIiwiZGF0YXNldCIsImxheWVyQ2xhc3NlcyIsImxheWVyUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJldmlvdXMiLCJsYyIsInJlc3VsdCIsImZpbmREZWZhdWx0TGF5ZXJQcm9wcyIsInByb3BzIiwiQXJyYXkiLCJpc0FycmF5IiwiZm91bmRMYXllcnMiLCJjb25jYXQiLCJtYXAiLCJwIiwidHlwZSIsImRhdGFJZCIsImlkIiwibGF5ZXIiLCJzZXRJbml0aWFsTGF5ZXJDb25maWciLCJhbGxEYXRhIiwiY2FsY3VsYXRlTGF5ZXJEYXRhIiwic3RhdGUiLCJvbGRMYXllckRhdGEiLCJoYXNBbGxDb2x1bW5zIiwiY29uZmlnIiwibGF5ZXJEYXRhIiwiZm9ybWF0TGF5ZXJEYXRhIiwiZGF0YXNldHMiLCJnZXRMYXllckhvdmVyUHJvcCIsImludGVyYWN0aW9uQ29uZmlnIiwiaG92ZXJJbmZvIiwibGF5ZXJzIiwibGF5ZXJzVG9SZW5kZXIiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInBpY2tlZCIsIm9iamVjdCIsIm92ZXJsYXkiLCJpZHgiLCJnZXRIb3ZlckRhdGEiLCJmaWVsZHMiLCJkYXRhIiwiZmllbGRzVG9TaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DQyxZQUFuQyxFQUFpRDtBQUN0RCxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQU1FLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILFlBQVos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YytCLEdBQWYsQ0FBcEI7O0FBRUEsUUFBSXJCLEtBQUssQ0FBQ3NCLFlBQU4sSUFBc0JQLGNBQWMsQ0FBQ2YsS0FBSyxDQUFDRCxFQUFQLENBQXhDLEVBQW9EO0FBQ2xEO0FBRGtELFVBR3ZDRCxNQUh1QyxHQUk5Q0UsS0FKOEMsQ0FHaERPLE1BSGdELENBR3ZDVCxNQUh1QztBQUFBLDZCQUt4QlksUUFBUSxDQUFDWixNQUFELENBTGdCO0FBQUEsVUFLM0NJLE9BTDJDLG9CQUszQ0EsT0FMMkM7QUFBQSxVQUtsQ3FCLE1BTGtDLG9CQUtsQ0EsTUFMa0M7QUFNbEQsVUFBTUMsSUFBSSxHQUFHeEIsS0FBSyxDQUFDc0IsWUFBTixDQUFtQkgsTUFBbkIsRUFBMkJqQixPQUEzQixDQUFiO0FBQ0EsVUFBTXVCLFlBQVksR0FBR2IsaUJBQWlCLENBQUNJLE9BQWxCLENBQTBCVCxNQUExQixDQUFpQ2tCLFlBQWpDLENBQThDM0IsTUFBOUMsQ0FBckI7QUFFQSxhQUFPO0FBQ0wwQixRQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTEQsUUFBQUEsTUFBTSxFQUFOQSxNQUZLO0FBR0xFLFFBQUFBLFlBQVksRUFBWkEsWUFISztBQUlMekIsUUFBQUEsS0FBSyxFQUFMQTtBQUpLLE9BQVA7QUFNRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyoqXG4gKiBGaW5kIGRlZmF1bHQgbGF5ZXJzIGZyb20gZmllbGRzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9sYXllci11dGlscycpLmZpbmREZWZhdWx0TGF5ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGVmYXVsdExheWVyKGRhdGFzZXQsIGxheWVyQ2xhc3Nlcykge1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgbGF5ZXJQcm9wcyA9IE9iamVjdC5rZXlzKGxheWVyQ2xhc3NlcykucmVkdWNlKChwcmV2aW91cywgbGMpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgdHlwZW9mIGxheWVyQ2xhc3Nlc1tsY10uZmluZERlZmF1bHRMYXllclByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gbGF5ZXJDbGFzc2VzW2xjXS5maW5kRGVmYXVsdExheWVyUHJvcHMoZGF0YXNldCwgcHJldmlvdXMpXG4gICAgICAgIDoge3Byb3BzOiBbXX07XG5cbiAgICBjb25zdCBwcm9wcyA9IEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdC5wcm9wcyB8fCBbXTtcbiAgICBjb25zdCBmb3VuZExheWVycyA9IHJlc3VsdC5mb3VuZExheWVycyB8fCBwcmV2aW91cztcblxuICAgIHJldHVybiBmb3VuZExheWVycy5jb25jYXQoXG4gICAgICBwcm9wcy5tYXAocCA9PiAoe1xuICAgICAgICAuLi5wLFxuICAgICAgICB0eXBlOiBsYyxcbiAgICAgICAgZGF0YUlkOiBkYXRhc2V0LmlkXG4gICAgICB9KSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgLy8gZ28gdGhyb3VnaCBhbGwgbGF5ZXJQcm9wcyB0byBjcmVhdGUgbGF5ZXJcbiAgcmV0dXJuIGxheWVyUHJvcHMubWFwKHByb3BzID0+IHtcbiAgICBjb25zdCBsYXllciA9IG5ldyBsYXllckNsYXNzZXNbcHJvcHMudHlwZV0ocHJvcHMpO1xuICAgIHJldHVybiB0eXBlb2YgbGF5ZXIuc2V0SW5pdGlhbExheWVyQ29uZmlnID09PSAnZnVuY3Rpb24nICYmIEFycmF5LmlzQXJyYXkoZGF0YXNldC5hbGxEYXRhKVxuICAgICAgPyBsYXllci5zZXRJbml0aWFsTGF5ZXJDb25maWcoZGF0YXNldC5hbGxEYXRhKVxuICAgICAgOiBsYXllcjtcbiAgfSk7XG59XG5cbi8qKlxuICogY2FsY3VsYXRlIGxheWVyIGRhdGEgYmFzZWQgb24gbGF5ZXIgdHlwZSwgY29sIENvbmZpZyxcbiAqIHJldHVybiB1cGRhdGVkIGxheWVyIGlmIGNvbG9yRG9tYWluLCBkYXRhTWFwIGhhcyBjaGFuZ2VkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9sYXllci11dGlscycpLmNhbGN1bGF0ZUxheWVyRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUxheWVyRGF0YShsYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSkge1xuICBjb25zdCB7dHlwZX0gPSBsYXllcjtcblxuICBpZiAoIXR5cGUgfHwgIWxheWVyLmhhc0FsbENvbHVtbnMoKSB8fCAhbGF5ZXIuY29uZmlnLmRhdGFJZCkge1xuICAgIHJldHVybiB7bGF5ZXIsIGxheWVyRGF0YToge319O1xuICB9XG5cbiAgY29uc3QgbGF5ZXJEYXRhID0gbGF5ZXIuZm9ybWF0TGF5ZXJEYXRhKHN0YXRlLmRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xuICByZXR1cm4ge2xheWVyRGF0YSwgbGF5ZXJ9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcm9wcyBwYXNzZWQgdG8gTGF5ZXJIb3ZlckluZm9cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2xheWVyLXV0aWxzJykuZ2V0TGF5ZXJIb3ZlclByb3B9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXllckhvdmVyUHJvcCh7XG4gIGludGVyYWN0aW9uQ29uZmlnLFxuICBob3ZlckluZm8sXG4gIGxheWVycyxcbiAgbGF5ZXJzVG9SZW5kZXIsXG4gIGRhdGFzZXRzXG59KSB7XG4gIGlmIChpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmVuYWJsZWQgJiYgaG92ZXJJbmZvICYmIGhvdmVySW5mby5waWNrZWQpIHtcbiAgICAvLyBpZiBhbnl0aGluZyBob3ZlcmVkXG4gICAgY29uc3Qge29iamVjdCwgbGF5ZXI6IG92ZXJsYXl9ID0gaG92ZXJJbmZvO1xuXG4gICAgLy8gZGVja2dsIGxheWVyIHRvIGtlcGxlci1nbCBsYXllclxuICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW292ZXJsYXkucHJvcHMuaWR4XTtcblxuICAgIGlmIChsYXllci5nZXRIb3ZlckRhdGEgJiYgbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdKSB7XG4gICAgICAvLyBpZiBsYXllciBpcyB2aXNpYmxlIGFuZCBoYXZlIGhvdmVyZWQgZGF0YVxuICAgICAgY29uc3Qge1xuICAgICAgICBjb25maWc6IHtkYXRhSWR9XG4gICAgICB9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7YWxsRGF0YSwgZmllbGRzfSA9IGRhdGFzZXRzW2RhdGFJZF07XG4gICAgICBjb25zdCBkYXRhID0gbGF5ZXIuZ2V0SG92ZXJEYXRhKG9iamVjdCwgYWxsRGF0YSk7XG4gICAgICBjb25zdCBmaWVsZHNUb1Nob3cgPSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBmaWVsZHNUb1Nob3csXG4gICAgICAgIGxheWVyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIl19