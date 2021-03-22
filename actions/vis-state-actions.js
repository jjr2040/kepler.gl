"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTextLabelChange = layerTextLabelChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.layerColorUIChange = layerColorUIChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.setFilterAnimationTime = setFilterAnimationTime;
exports.setFilterAnimationWindow = setFilterAnimationWindow;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.sortTableColumn = sortTableColumn;
exports.pinTableColumn = pinTableColumn;
exports.copyTableColumn = copyTableColumn;
exports.updateVisData = updateVisData;
exports.toggleFilterAnimation = toggleFilterAnimation;
exports.updateFilterAnimationSpeed = updateFilterAnimationSpeed;
exports.setLayerAnimationTime = setLayerAnimationTime;
exports.updateLayerAnimationSpeed = updateLayerAnimationSpeed;
exports.toggleLayerAnimation = toggleLayerAnimation;
exports.enlargeFilter = enlargeFilter;
exports.toggleFilterFeature = toggleFilterFeature;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.onMouseMove = onMouseMove;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setFilterPlot = setFilterPlot;
exports.setMapInfo = setMapInfo;
exports.loadFiles = loadFiles;
exports.loadNextFile = loadNextFile;
exports.loadFilesSuccess = loadFilesSuccess;
exports.loadFileStepSuccess = loadFileStepSuccess;
exports.loadFilesErr = loadFilesErr;
exports.setFeatures = setFeatures;
exports.setPolygonFilterLayer = setPolygonFilterLayer;
exports.setSelectedFeature = setSelectedFeature;
exports.deleteFeature = deleteFeature;
exports.setEditorMode = setEditorMode;
exports.applyCPUFilter = applyCPUFilter;
exports.toggleEditorVisibility = toggleEditorVisibility;
exports.nextFileBatch = nextFileBatch;
exports.processFileContent = processFileContent;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

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
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @param oldLayer - layer to be updated
 * @param newConfig - new config to be merged with old config
 * @returns action
 * @type {typeof import('./vis-state-actions').layerConfigChange}
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}
/**
 * Update layer text label
 * @param oldLayer - layer to be updated
 * @param idx -`idx` of text label to be updated
 * @param prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param value - new value
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTextLabelChange}
 * @public
 */


function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE,
    oldLayer: oldLayer,
    idx: idx,
    prop: prop,
    value: value
  };
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @param oldLayer - layer to be updated
 * @param newType - new type
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTypeChange}
 * @public
 */


function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}
/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newConfig - new visual channel config
 * @param channel - channel to be updated
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisualChannelConfigChange}
 * @public
 */


function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}
/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisConfigChange}
 * @public
 */


function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}
/**
 * Set the color palette ui for layer color
 * @memberOf visStateActions
 * @param oldLayer - layer to be updated
 * @param prop - which color prop
 * @param newConfig - to be merged
 * @returns action
 * @type {typeof import('./vis-state-actions').layerColorUIChange}
 * @public
 */


function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_COLOR_UI_CHANGE,
    oldLayer: oldLayer,
    prop: prop,
    newConfig: newConfig
  };
}
/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param mode one of `additive`, `normal` and `subtractive`
 * @returns action
 * @type {typeof import('./vis-state-actions').updateLayerBlending}
 * @public
 */


function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}
/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns action
 * @type {typeof import('./vis-state-actions').interactionConfigChange}
 * @public
 */


function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}
/**
 * Update filter property
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilter}
 * @public
 */


function setFilter(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Same as Update filter
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilterAnimationTime}
 * @public
 */


function setFilterAnimationTime(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_TIME,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Same as Update filter
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').setFilterAnimationWindow}
 * @public
 */


function setFilterAnimationWindow(_ref) {
  var id = _ref.id,
      animationWindow = _ref.animationWindow;
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_WINDOW,
    id: id,
    animationWindow: animationWindow
  };
}
/**
 * Add a new filter
 * @memberof visStateActions
 * @param dataId - dataset `id` this new filter is associated with
 * @returns action
 * @type {typeof import('./vis-state-actions').addFilter}
 * @public
 */


function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}
/**
 * Add a new layer
 * @memberof visStateActions
 * @param props - new layer props
 * @returns action
 * @type {typeof import('./vis-state-actions').addLayer}
 * @public
 */


function addLayer(props) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    props: props
  };
}
/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param order an array of layer indexes
 * @returns action
 * @type {typeof import('./vis-state-actions').reorderLayer}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */


function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}
/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param idx idx of filter to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeFilter}
 * @public
 */


function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}
/**
 * Remove a layer
 * @memberof visStateActions
 * @param idx idx of layer to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeLayer}
 * @public
 */


function removeLayer(idx) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    idx: idx
  };
}
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param dataId dataset id
 * @returns action
 * @type {typeof import('./vis-state-actions').removeDataset}
 * @public
 */


function removeDataset(dataId) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    dataId: dataId
  };
}
/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param dataId dataset id to show in table
 * @returns action
 * @type {typeof import('./vis-state-actions').showDatasetTable}
 * @public
 */


function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}
/**
 * Sort dataset column, for table display
 * @memberof visStateActions
 * @param dataId
 * @param column
 * @param mode
 * @returns action
 * @type {typeof import('./vis-state-actions').sortTableColumn}
 * @public
 */


function sortTableColumn(dataId, column, mode) {
  return {
    type: _actionTypes["default"].SORT_TABLE_COLUMN,
    dataId: dataId,
    column: column,
    mode: mode
  };
}
/**
 * Pin dataset column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').pinTableColumn}
 * @public
 */


function pinTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].PIN_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
}
/**
 * Copy column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').copyTableColumn}
 * @public
 */


function copyTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].COPY_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
} // * @param dataset.info -info of a dataset
// * @param dataset.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
// * @param dataset.info.label - A display name of this dataset
// * @param dataset.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
// * @param dataset.data.fields - ***required** Array of fields,
// * @param dataset.data.fields.name - ***required** Name of the field,
// * @param dataset.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {object} options
 * @param options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns action
 * @type {typeof import('./vis-state-actions').updateVisData}
 * @public
 */


function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}
/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx of filter
 * @type {typeof import('./vis-state-actions').toggleFilterAnimation}
 * @returns action
 * @public
 */


function toggleFilterAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}
/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param idx -  `idx` of filter
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateFilterAnimationSpeed}
 * @returns action
 * @public
 */


function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}
/**
 * Reset animation
 * @memberof visStateActions
 * @param value -  Current value of the slider
 * @type {typeof import('./vis-state-actions').setLayerAnimationTime}
 * @returns action
 * @public
 */


function setLayerAnimationTime(value) {
  return {
    type: _actionTypes["default"].SET_LAYER_ANIMATION_TIME,
    value: value
  };
}
/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateLayerAnimationSpeed}
 * @returns action
 * @public
 */


function updateLayerAnimationSpeed(speed) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED,
    speed: speed
  };
}

function toggleLayerAnimation() {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_ANIMATION
  };
}
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param idx - index of filter to enlarge
 * @type {typeof import('./vis-state-actions').enlargeFilter}
 * @returns action
 * @public
 */


function enlargeFilter(idx) {
  return {
    type: _actionTypes["default"].ENLARGE_FILTER,
    idx: idx
  };
}
/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param idx - index of filter feature to show/hide
 * @type {typeof import('./vis-state-actions').toggleFilterFeature}
 * @return action
 */


function toggleFilterFeature(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_FEATURE,
    idx: idx
  };
}
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param info - Object hovered, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerHover}
 * @returns action
 * @public
 */


function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param info - Object clicked, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerClick}
 * @returns action
 * @public
 */


function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').onMapClick}
 * @returns action
 * @public
 */


function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}
/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param evt - PointerEvent
 * @type {typeof import('./vis-state-actions').onMouseMove}
 * @returns action
 * @public
 */


function onMouseMove(evt) {
  return {
    type: _actionTypes["default"].MOUSE_MOVE,
    evt: evt
  };
}
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param mapIndex - index of the split map
 * @param layerId - id of the layer
 * @type {typeof import('./vis-state-actions').toggleLayerForMap}
 * @returns action
 * @public
 */


function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param idx
 * @param newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @param valueIndex dataId index
 * @type {typeof import('./vis-state-actions').setFilterPlot}
 * @returns action
 * @public
 */


function setFilterPlot(idx, newProp, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp,
    valueIndex: valueIndex
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param info
 * @type {typeof import('./vis-state-actions').setMapInfo}
 * @returns action
 * @public
 */


function setMapInfo(info) {
  return {
    type: _actionTypes["default"].SET_MAP_INFO,
    info: info
  };
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param files array of fileblob
 * @type {typeof import('./vis-state-actions').loadFiles}
 * @returns action
 * @public
 */


function loadFiles(files, onFinish) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files,
    onFinish: onFinish
  };
}
/**
 * Called with next file to load
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').loadNextFile}
 * @returns action
 * @public
 */


function loadNextFile() {
  return {
    type: _actionTypes["default"].LOAD_NEXT_FILE
  };
}
/**
 * called when all files are processed and loaded
 * @memberof visStateActions
 * @param result
 * @type {typeof import('./vis-state-actions').loadFilesSuccess}
 * @returns action
 */


function loadFilesSuccess(result) {
  return {
    type: _actionTypes["default"].LOAD_FILES_SUCCESS,
    result: result
  };
}
/**
 * called when successfully loaded one file, ready to move on to the next one
 * @memberof visStateActions
 * @param result
 * @type {typeof import('./vis-state-actions').loadFileStepSuccess}
 * @returns action
 */


function loadFileStepSuccess(_ref2) {
  var fileName = _ref2.fileName,
      fileCache = _ref2.fileCache;
  return {
    type: _actionTypes["default"].LOAD_FILE_STEP_SUCCESS,
    fileName: fileName,
    fileCache: fileCache
  };
}
/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param  error
 * @type {typeof import('./vis-state-actions').loadFilesErr}
 * @returns action
 * @public
 */


function loadFilesErr(fileName, error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    fileName: fileName,
    error: error
  };
}
/**
 * Store features to state
 * @memberof visStateActions
 * @param features
 * @type {typeof import('./vis-state-actions').setFeatures}
 * @returns action
 */


function setFeatures(features) {
  return {
    type: _actionTypes["default"].SET_FEATURES,
    features: features
  };
}
/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param layer
 * @param feature
 * @type {typeof import('./vis-state-actions').setPolygonFilterLayer}
 * @returns action
 */


function setPolygonFilterLayer(layer, feature) {
  return {
    type: _actionTypes["default"].SET_POLYGON_FILTER_LAYER,
    layer: layer,
    feature: feature
  };
}
/**
 * Set the current feature to be edited/deleted
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').setSelectedFeature}
 * @returns action
 */


function setSelectedFeature(feature) {
  return {
    type: _actionTypes["default"].SET_SELECTED_FEATURE,
    feature: feature
  };
}
/**
 * Delete the given feature
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').deleteFeature}
 * @returns action
 */


function deleteFeature(feature) {
  return {
    type: _actionTypes["default"].DELETE_FEATURE,
    feature: feature
  };
}
/** Set the map mode
 * @memberof visStateActions
 * @param mode one of EDITOR_MODES
 * @type {typeof import('./vis-state-actions').setEditorMode}
 * @returns action
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */


function setEditorMode(mode) {
  return {
    type: _actionTypes["default"].SET_EDITOR_MODE,
    mode: mode
  };
}
/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param dataId - single dataId or an array of dataIds
 * @type {typeof import('./vis-state-actions').applyCPUFilter}
 * @returns action
 * @public
 */


function applyCPUFilter(dataId) {
  return {
    type: _actionTypes["default"].APPLY_CPU_FILTER,
    dataId: dataId
  };
}
/**
 * Toggle editor layer visibility
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').toggleEditorVisibility}
 * @return action
 */


function toggleEditorVisibility() {
  return {
    type: _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY
  };
}
/**
 * Process the next file batch
 * @memberof visStateActions
 * @param payload - batch payload
 * @type {typeof import('./vis-state-actions').nextFileBatch}
 * @return action
 */


function nextFileBatch(payload) {
  return {
    type: _actionTypes["default"].NEXT_FILE_BATCH,
    payload: payload
  };
}
/**
 * Process the file content
 * @memberof visStateActions
 * @param payload - the file content
 * @type {typeof import('./vis-state-actions').processFileContent}
 * @return action
 */


function processFileContent(payload) {
  return {
    type: _actionTypes["default"].PROCESS_FILE_CONTENT,
    payload: payload
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJpZHgiLCJwcm9wIiwidmFsdWUiLCJMQVlFUl9URVhUX0xBQkVMX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwiTEFZRVJfQ09MT1JfVUlfQ0hBTkdFIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJzZXRGaWx0ZXIiLCJ2YWx1ZUluZGV4IiwiU0VUX0ZJTFRFUiIsInNldEZpbHRlckFuaW1hdGlvblRpbWUiLCJTRVRfRklMVEVSX0FOSU1BVElPTl9USU1FIiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwiaWQiLCJhbmltYXRpb25XaW5kb3ciLCJTRVRfRklMVEVSX0FOSU1BVElPTl9XSU5ET1ciLCJhZGRGaWx0ZXIiLCJkYXRhSWQiLCJBRERfRklMVEVSIiwiYWRkTGF5ZXIiLCJwcm9wcyIsIkFERF9MQVlFUiIsInJlb3JkZXJMYXllciIsIm9yZGVyIiwiUkVPUkRFUl9MQVlFUiIsInJlbW92ZUZpbHRlciIsIlJFTU9WRV9GSUxURVIiLCJyZW1vdmVMYXllciIsIlJFTU9WRV9MQVlFUiIsInJlbW92ZURhdGFzZXQiLCJSRU1PVkVfREFUQVNFVCIsInNob3dEYXRhc2V0VGFibGUiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJzb3J0VGFibGVDb2x1bW4iLCJjb2x1bW4iLCJTT1JUX1RBQkxFX0NPTFVNTiIsInBpblRhYmxlQ29sdW1uIiwiUElOX1RBQkxFX0NPTFVNTiIsImNvcHlUYWJsZUNvbHVtbiIsIkNPUFlfVEFCTEVfQ09MVU1OIiwidXBkYXRlVmlzRGF0YSIsImRhdGFzZXRzIiwib3B0aW9ucyIsIlVQREFURV9WSVNfREFUQSIsInRvZ2dsZUZpbHRlckFuaW1hdGlvbiIsIlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OIiwidXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsIlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVEIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lIiwiU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZCIsIlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQiLCJ0b2dnbGVMYXllckFuaW1hdGlvbiIsIlRPR0dMRV9MQVlFUl9BTklNQVRJT04iLCJlbmxhcmdlRmlsdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiVE9HR0xFX0ZJTFRFUl9GRUFUVVJFIiwib25MYXllckhvdmVyIiwiaW5mbyIsIkxBWUVSX0hPVkVSIiwib25MYXllckNsaWNrIiwiTEFZRVJfQ0xJQ0siLCJvbk1hcENsaWNrIiwiTUFQX0NMSUNLIiwib25Nb3VzZU1vdmUiLCJldnQiLCJNT1VTRV9NT1ZFIiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJtYXBJbmRleCIsImxheWVySWQiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsInNldEZpbHRlclBsb3QiLCJuZXdQcm9wIiwiU0VUX0ZJTFRFUl9QTE9UIiwic2V0TWFwSW5mbyIsIlNFVF9NQVBfSU5GTyIsImxvYWRGaWxlcyIsImZpbGVzIiwib25GaW5pc2giLCJMT0FEX0ZJTEVTIiwibG9hZE5leHRGaWxlIiwiTE9BRF9ORVhUX0ZJTEUiLCJsb2FkRmlsZXNTdWNjZXNzIiwicmVzdWx0IiwiTE9BRF9GSUxFU19TVUNDRVNTIiwibG9hZEZpbGVTdGVwU3VjY2VzcyIsImZpbGVOYW1lIiwiZmlsZUNhY2hlIiwiTE9BRF9GSUxFX1NURVBfU1VDQ0VTUyIsImxvYWRGaWxlc0VyciIsImVycm9yIiwiTE9BRF9GSUxFU19FUlIiLCJzZXRGZWF0dXJlcyIsImZlYXR1cmVzIiwiU0VUX0ZFQVRVUkVTIiwic2V0UG9seWdvbkZpbHRlckxheWVyIiwibGF5ZXIiLCJmZWF0dXJlIiwiU0VUX1BPTFlHT05fRklMVEVSX0xBWUVSIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwiU0VUX1NFTEVDVEVEX0ZFQVRVUkUiLCJkZWxldGVGZWF0dXJlIiwiREVMRVRFX0ZFQVRVUkUiLCJzZXRFZGl0b3JNb2RlIiwiU0VUX0VESVRPUl9NT0RFIiwiYXBwbHlDUFVGaWx0ZXIiLCJBUFBMWV9DUFVfRklMVEVSIiwidG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsIlRPR0dMRV9FRElUT1JfVklTSUJJTElUWSIsIm5leHRGaWxlQmF0Y2giLCJwYXlsb2FkIiwiTkVYVF9GSUxFX0JBVENIIiwicHJvY2Vzc0ZpbGVDb250ZW50IiwiUFJPQ0VTU19GSUxFX0NPTlRFTlQiLCJ2aXNTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQ0MsU0FBckMsRUFBZ0Q7QUFDckQs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LEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTNEYsc0JBQVQsR0FBa0M7QUFDdkMsU0FBTztBQUNML0gsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWStIO0FBRGIsR0FBUDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTGxJLElBQUFBLElBQUksRUFBRUMsd0JBQVlrSSxlQURiO0FBRUxELElBQUFBLE9BQU8sRUFBUEE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0Usa0JBQVQsQ0FBNEJGLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTGxJLElBQUFBLElBQUksRUFBRUMsd0JBQVlvSSxvQkFEYjtBQUVMSCxJQUFBQSxPQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUNBLElBQU1JLGVBQWUsR0FBRyxJQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gdmlzLXN0YXRlLXJlZHVjZXJcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gbmV3Q29uZmlnIC0gbmV3IGNvbmZpZyB0byBiZSBtZXJnZWQgd2l0aCBvbGQgY29uZmlnXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubGF5ZXJDb25maWdDaGFuZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09ORklHX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdGV4dCBsYWJlbFxuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgdGV4dCBsYWJlbCB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gcHJvcCAtIGBwcm9wYCBvZiB0ZXh0IGxhYmVsLCBlLGcsIGBhbmNob3JgLCBgYWxpZ25tZW50YCwgYGNvbG9yYCwgYHNpemVgLCBgZmllbGRgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclRleHRMYWJlbENoYW5nZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlKG9sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVEVYVF9MQUJFTF9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgaWR4LFxuICAgIHByb3AsXG4gICAgdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdHlwZS4gUHJldmlld3MgbGF5ZXIgY29uZmlnIHdpbGwgYmUgY29waWVkIGlmIGFwcGxpY2FibGUuXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gbmV3VHlwZSAtIG5ldyB0eXBlXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubGF5ZXJUeXBlQ2hhbmdlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlKG9sZExheWVyLCBuZXdUeXBlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VHlwZVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIG5ld0NvbmZpZyAtIG5ldyB2aXN1YWwgY2hhbm5lbCBjb25maWdcbiAqIEBwYXJhbSBjaGFubmVsIC0gY2hhbm5lbCB0byBiZSB1cGRhdGVkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnLFxuICAgIGNoYW5uZWxcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYHZpc0NvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdWaXNDb25maWcgLSBuZXcgdmlzQ29uZmlnIGFzIGEga2V5IHZhbHVlIG1hcDogZS5nLiBge29wYWNpdHk6IDAuOH1gXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubGF5ZXJWaXNDb25maWdDaGFuZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3VmlzQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VmlzQ29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb2xvciBwYWxldHRlIHVpIGZvciBsYXllciBjb2xvclxuICogQG1lbWJlck9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHByb3AgLSB3aGljaCBjb2xvciBwcm9wXG4gKiBAcGFyYW0gbmV3Q29uZmlnIC0gdG8gYmUgbWVyZ2VkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubGF5ZXJDb2xvclVJQ2hhbmdlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb2xvclVJQ2hhbmdlKG9sZExheWVyLCBwcm9wLCBuZXdDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT0xPUl9VSV9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgcHJvcCxcbiAgICBuZXdDb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG1vZGUgb25lIG9mIGBhZGRpdGl2ZWAsIGBub3JtYWxgIGFuZCBgc3VidHJhY3RpdmVgXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlTGF5ZXJCbGVuZGluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxheWVyQmxlbmRpbmcobW9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9CTEVORElORyxcbiAgICBtb2RlXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGBpbnRlcmFjdGlvbkNvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBjb25maWcgLSBuZXcgY29uZmlnIGFzIGtleSB2YWx1ZSBtYXA6IGB7dG9vbHRpcDoge2VuYWJsZWQ6IHRydWV9fWBcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UsXG4gICAgY29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIGZpbHRlciwgZSxnLCBgZGF0YUlkYCwgYG5hbWVgLCBgdmFsdWVgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZUluZGV4IC0gZGF0YUlkIGluZGV4XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmlsdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKGlkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSLFxuICAgIGlkeCxcbiAgICBwcm9wLFxuICAgIHZhbHVlLFxuICAgIHZhbHVlSW5kZXhcbiAgfTtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIFVwZGF0ZSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpZHggLWBpZHhgIG9mIGZpbHRlciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gcHJvcCAtIGBwcm9wYCBvZiBmaWx0ZXIsIGUsZywgYGRhdGFJZGAsIGBuYW1lYCwgYHZhbHVlYFxuICogQHBhcmFtIHZhbHVlIC0gbmV3IHZhbHVlXG4gKiBAcGFyYW0gdmFsdWVJbmRleCAtIGRhdGFJZCBpbmRleFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEZpbHRlckFuaW1hdGlvblRpbWV9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lKGlkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX0FOSU1BVElPTl9USU1FLFxuICAgIGlkeCxcbiAgICBwcm9wLFxuICAgIHZhbHVlLFxuICAgIHZhbHVlSW5kZXhcbiAgfTtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIFVwZGF0ZSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93KHtpZCwgYW5pbWF0aW9uV2luZG93fSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfQU5JTUFUSU9OX1dJTkRPVyxcbiAgICBpZCxcbiAgICBhbmltYXRpb25XaW5kb3dcbiAgfTtcbn1cbi8qKlxuICogQWRkIGEgbmV3IGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZCAtIGRhdGFzZXQgYGlkYCB0aGlzIG5ldyBmaWx0ZXIgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuYWRkRmlsdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRmlsdGVyKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9GSUxURVIsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcHJvcHMgLSBuZXcgbGF5ZXIgcHJvcHNcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5hZGRMYXllcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExheWVyKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0xBWUVSLFxuICAgIHByb3BzXG4gIH07XG59XG5cbi8qKlxuICogUmVvcmRlciBsYXllciwgb3JkZXIgaXMgYW4gYXJyYXkgb2YgbGF5ZXIgaW5kZXhlcywgaW5kZXggMCB3aWxsIGJlIHRoZSBvbmUgYXQgdGhlIGJvdHRvbVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9yZGVyIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXNcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW9yZGVyTGF5ZXJ9XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGJyaW5nIGBsYXllcnNbMV1gIGJlbG93IGBsYXllcnNbMF1gLCB0aGUgc2VxdWVuY2UgbGF5ZXJzIHdpbGwgYmUgcmVuZGVyZWQgaXMgYDFgLCBgMGAsIGAyYCwgYDNgLlxuICogLy8gYDFgIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSwgYDNgIHdpbGwgYmUgYXQgdGhlIHRvcC5cbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVvcmRlckxheWVyKFsxLCAwLCAyLCAzXSkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKG9yZGVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVPUkRFUl9MQVlFUixcbiAgICBvcmRlclxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZpbHRlciBmcm9tIGB2aXNTdGF0ZS5maWx0ZXJzYCwgb25jZSBhIGZpbHRlciBpcyByZW1vdmVkLCBkYXRhIHdpbGwgYmUgcmUtZmlsdGVyZWQgYW5kIGxheWVyIHdpbGwgYmUgdXBkYXRlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCBpZHggb2YgZmlsdGVyIHRvIGJlIHJlbW92ZWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW1vdmVGaWx0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCBpZHggb2YgbGF5ZXIgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnJlbW92ZUxheWVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRhdGFzZXQgYW5kIGFsbCBsYXllcnMsIGZpbHRlcnMsIHRvb2x0aXAgY29uZmlncyB0aGF0IGJhc2VkIG9uIGl0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIGRhdGFzZXQgaWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW1vdmVEYXRhc2V0fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGF0YXNldChkYXRhSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfREFUQVNFVCxcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGRhdGFzZXQgdGFibGUgaW4gYSBtb2RhbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZCBkYXRhc2V0IGlkIHRvIHNob3cgaW4gdGFibGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zaG93RGF0YXNldFRhYmxlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEUsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICogU29ydCBkYXRhc2V0IGNvbHVtbiwgZm9yIHRhYmxlIGRpc3BsYXlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWRcbiAqIEBwYXJhbSBjb2x1bW5cbiAqIEBwYXJhbSBtb2RlXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc29ydFRhYmxlQ29sdW1ufVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uLCBtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU09SVF9UQUJMRV9DT0xVTU4sXG4gICAgZGF0YUlkLFxuICAgIGNvbHVtbixcbiAgICBtb2RlXG4gIH07XG59XG5cbi8qKlxuICogUGluIGRhdGFzZXQgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxuICogQHBhcmFtIGRhdGFJZFxuICogQHBhcmFtIGNvbHVtblxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnBpblRhYmxlQ29sdW1ufVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGluVGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5QSU5fVEFCTEVfQ09MVU1OLFxuICAgIGRhdGFJZCxcbiAgICBjb2x1bW5cbiAgfTtcbn1cblxuLyoqXG4gKiBDb3B5IGNvbHVtbiwgZm9yIHRhYmxlIGRpc3BsYXlcbiAqIEBwYXJhbSBkYXRhSWRcbiAqIEBwYXJhbSBjb2x1bW5cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5jb3B5VGFibGVDb2x1bW59XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5DT1BZX1RBQkxFX0NPTFVNTixcbiAgICBkYXRhSWQsXG4gICAgY29sdW1uXG4gIH07XG59XG5cbi8vICogQHBhcmFtIGRhdGFzZXQuaW5mbyAtaW5mbyBvZiBhIGRhdGFzZXRcbi8vICogQHBhcmFtIGRhdGFzZXQuaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cbi8vICogQHBhcmFtIGRhdGFzZXQuaW5mby5sYWJlbCAtIEEgZGlzcGxheSBuYW1lIG9mIHRoaXMgZGF0YXNldFxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhIC0gKioqcmVxdWlyZWQqKiBUaGUgZGF0YSBvYmplY3QsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCAyIHByb3BlcnRpZXMgYGZpZWxkc2AgYW5kIGByb3dzYFxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcbi8vICogQHBhcmFtIGRhdGFzZXQuZGF0YS5yb3dzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiByb3dzLCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggYGZpZWxkc2AgYW5kIGByb3dzYFxuLyoqXG4gKiBBZGQgbmV3IGRhdGFzZXQgdG8gYHZpc1N0YXRlYCwgd2l0aCBvcHRpb24gdG8gbG9hZCBhIG1hcCBjb25maWcgYWxvbmcgd2l0aCB0aGUgZGF0YXNldHNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zLmNlbnRlck1hcCBgZGVmYXVsdDogdHJ1ZWAgaWYgYGNlbnRlck1hcGAgaXMgc2V0IHRvIGB0cnVlYCBrZXBsZXIuZ2wgd2lsbFxuICogcGxhY2UgdGhlIG1hcCB2aWV3IHdpdGhpbiB0aGUgZGF0YSBwb2ludHMgYm91bmRhcmllc1xuICogQHBhcmFtIG9wdGlvbnMucmVhZE9ubHkgYGRlZmF1bHQ6IGZhbHNlYCBpZiBgcmVhZE9ubHlgIGlzIHNldCB0byBgdHJ1ZWBcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cbiAqIEBwYXJhbSBjb25maWcgdGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBmdWxsIGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uIHttYXBTdGF0ZSwgbWFwU3R5bGUsIHZpc1N0YXRlfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnVwZGF0ZVZpc0RhdGF9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWaXNEYXRhKGRhdGFzZXRzLCBvcHRpb25zLCBjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEEsXG4gICAgZGF0YXNldHMsXG4gICAgb3B0aW9ucyxcbiAgICBjb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBTdGFydCBhbmQgZW5kIGZpbHRlciBhbmltYXRpb25cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggb2YgZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUZpbHRlckFuaW1hdGlvbn1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyQW5pbWF0aW9uKGlkeCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IC0gIGBpZHhgIG9mIGZpbHRlclxuICogQHBhcmFtIHNwZWVkIC0gYHNwZWVkYCB0byBjaGFuZ2UgaXQgdG8uIGBzcGVlZGAgaXMgYSBtdWx0aXBsaWVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZChpZHgsIHNwZWVkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgaWR4LFxuICAgIHNwZWVkXG4gIH07XG59XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gdmFsdWUgLSAgQ3VycmVudCB2YWx1ZSBvZiB0aGUgc2xpZGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldExheWVyQW5pbWF0aW9uVGltZX1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TGF5ZXJBbmltYXRpb25UaW1lKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FLFxuICAgIHZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogdXBkYXRlIHRyaXAgbGF5ZXIgYW5pbWF0aW9uIHNwZWVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gc3BlZWQgLSBgc3BlZWRgIHRvIGNoYW5nZSBpdCB0by4gYHNwZWVkYCBpcyBhIG11bHRpcGxpZXJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZH1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZChzcGVlZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgc3BlZWRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheWVyQW5pbWF0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9MQVlFUl9BTklNQVRJT05cbiAgfTtcbn1cblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IC0gaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuZW5sYXJnZUZpbHRlcn1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5sYXJnZUZpbHRlcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG93L2hpZGUgZmlsdGVyIGZlYXR1cmUgb24gbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IC0gaW5kZXggb2YgZmlsdGVyIGZlYXR1cmUgdG8gc2hvdy9oaWRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUZpbHRlckZlYXR1cmV9XG4gKiBAcmV0dXJuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRmlsdGVyRmVhdHVyZShpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0ZFQVRVUkUsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaW5mbyAtIE9iamVjdCBob3ZlcmVkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLm9uTGF5ZXJIb3Zlcn1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25MYXllckhvdmVyKGluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9IT1ZFUixcbiAgICBpbmZvXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBjbGljayBldmVudCB3aXRoIGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaW5mbyAtIE9iamVjdCBjbGlja2VkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLm9uTGF5ZXJDbGlja31cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25MYXllckNsaWNrKGluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DTElDSyxcbiAgICBpbmZvXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLm9uTWFwQ2xpY2t9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTWFwQ2xpY2soKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTUFQX0NMSUNLXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgbW91c2UgbW92ZWV2ZW50LCBwYXlsb2FkIHdvdWxkIGJlXG4gKiBSZWFjdC1tYXAtZ2wgUG9pbnRlckV2ZW50XG4gKiBodHRwczovL3ViZXIuZ2l0aHViLmlvL3JlYWN0LW1hcC1nbC8jL2RvY3VtZW50YXRpb24vYXBpLXJlZmVyZW5jZS9wb2ludGVyLWV2ZW50XG4gKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGV2dCAtIFBvaW50ZXJFdmVudFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbk1vdXNlTW92ZX1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZ0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9VU0VfTU9WRSxcbiAgICBldnRcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gbWFwSW5kZXggLSBpbmRleCBvZiB0aGUgc3BsaXQgbWFwXG4gKiBAcGFyYW0gbGF5ZXJJZCAtIGlkIG9mIHRoZSBsYXllclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS50b2dnbGVMYXllckZvck1hcH1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5ZXJGb3JNYXAobWFwSW5kZXgsIGxheWVySWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUCxcbiAgICBtYXBJbmRleCxcbiAgICBsYXllcklkXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4XG4gKiBAcGFyYW0gbmV3UHJvcCBrZXkgdmFsdWUgbWFwcGluZyBvZiBuZXcgcHJvcCBge3lBeGlzOiAnaGlzdG9ncmFtJ31gXG4gKiBAcGFyYW0gdmFsdWVJbmRleCBkYXRhSWQgaW5kZXhcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmlsdGVyUGxvdH1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyUGxvdChpZHgsIG5ld1Byb3AsIHZhbHVlSW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1QsXG4gICAgaWR4LFxuICAgIG5ld1Byb3AsXG4gICAgdmFsdWVJbmRleFxuICB9O1xufVxuXG4vKipcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGluZm9cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0TWFwSW5mb31cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TWFwSW5mbyhpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX01BUF9JTkZPLFxuICAgIGluZm9cbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBmaWxlcyBhcnJheSBvZiBmaWxlYmxvYlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZXN9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlcyhmaWxlcywgb25GaW5pc2gpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTLFxuICAgIGZpbGVzLFxuICAgIG9uRmluaXNoXG4gIH07XG59XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggbmV4dCBmaWxlIHRvIGxvYWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubG9hZE5leHRGaWxlfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTmV4dEZpbGUoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9ORVhUX0ZJTEVcbiAgfTtcbn1cblxuLyoqXG4gKiBjYWxsZWQgd2hlbiBhbGwgZmlsZXMgYXJlIHByb2Nlc3NlZCBhbmQgbG9hZGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcmVzdWx0XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxvYWRGaWxlc1N1Y2Nlc3N9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlc1N1Y2Nlc3MocmVzdWx0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19TVUNDRVNTLFxuICAgIHJlc3VsdFxuICB9O1xufVxuXG4vKipcbiAqIGNhbGxlZCB3aGVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQgb25lIGZpbGUsIHJlYWR5IHRvIG1vdmUgb24gdG8gdGhlIG5leHQgb25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcmVzdWx0XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxvYWRGaWxlU3RlcFN1Y2Nlc3N9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlU3RlcFN1Y2Nlc3Moe2ZpbGVOYW1lLCBmaWxlQ2FjaGV9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFX1NURVBfU1VDQ0VTUyxcbiAgICBmaWxlTmFtZSxcbiAgICBmaWxlQ2FjaGVcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGxvYWRpbmcgZmlsZSBlcnJvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtICBlcnJvclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZXNFcnJ9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlc0VycihmaWxlTmFtZSwgZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUixcbiAgICBmaWxlTmFtZSxcbiAgICBlcnJvclxuICB9O1xufVxuXG4vKipcbiAqIFN0b3JlIGZlYXR1cmVzIHRvIHN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZmVhdHVyZXNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmVhdHVyZXN9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZlYXR1cmVzKGZlYXR1cmVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZFQVRVUkVTLFxuICAgIGZlYXR1cmVzXG4gIH07XG59XG5cbi8qKlxuICogSXQgd2lsbCBhcHBseSB0aGUgcHJvdmlkZSBmZWF0dXJlIGFzIGZpbHRlciB0byB0aGUgZ2l2ZW4gbGF5ZXIuXG4gKiBJZiB0aGUgZ2l2ZW4gZmVhdHVyZSBpcyBhbHJlYWR5IGFwcGxpZWQgYXMgZmlsdGVyIHRvIHRoZSBsYXllciwgaXQgd2lsbCByZW1vdmUgdGhlIGxheWVyIGZyb20gdGhlIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGxheWVyXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFBvbHlnb25GaWx0ZXJMYXllcihsYXllciwgZmVhdHVyZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUixcbiAgICBsYXllcixcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IGZlYXR1cmUgdG8gYmUgZWRpdGVkL2RlbGV0ZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBmZWF0dXJlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldFNlbGVjdGVkRmVhdHVyZX1cbiAqIEByZXR1cm5zIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfU0VMRUNURURfRkVBVFVSRSxcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbi8qKlxuICogRGVsZXRlIHRoZSBnaXZlbiBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5kZWxldGVGZWF0dXJlfVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGZWF0dXJlKGZlYXR1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5ERUxFVEVfRkVBVFVSRSxcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbi8qKiBTZXQgdGhlIG1hcCBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gbW9kZSBvbmUgb2YgRURJVE9SX01PREVTXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEVkaXRvck1vZGV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3NldE1hcE1vZGV9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIGltcG9ydCB7RURJVE9SX01PREVTfSBmcm9tICdrZXBsZXIuZ2wvY29uc3RhbnRzJztcbiAqXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHNldE1hcE1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTikpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RWRpdG9yTW9kZShtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0VESVRPUl9NT0RFLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIENQVSBmaWx0ZXIgb2Ygc2VsZWN0ZWQgZGF0YXNldFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZCAtIHNpbmdsZSBkYXRhSWQgb3IgYW4gYXJyYXkgb2YgZGF0YUlkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5hcHBseUNQVUZpbHRlcn1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDUFVGaWx0ZXIoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQVBQTFlfQ1BVX0ZJTFRFUixcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgZWRpdG9yIGxheWVyIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAqIEByZXR1cm4gYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFZGl0b3JWaXNpYmlsaXR5KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9FRElUT1JfVklTSUJJTElUWVxuICB9O1xufVxuXG4vKipcbiAqIFByb2Nlc3MgdGhlIG5leHQgZmlsZSBiYXRjaFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHBheWxvYWQgLSBiYXRjaCBwYXlsb2FkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLm5leHRGaWxlQmF0Y2h9XG4gKiBAcmV0dXJuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dEZpbGVCYXRjaChwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTkVYVF9GSUxFX0JBVENILFxuICAgIHBheWxvYWRcbiAgfTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHRoZSBmaWxlIGNvbnRlbnRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBwYXlsb2FkIC0gdGhlIGZpbGUgY29udGVudFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5wcm9jZXNzRmlsZUNvbnRlbnR9XG4gKiBAcmV0dXJuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVDb250ZW50KHBheWxvYWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9DRVNTX0ZJTEVfQ09OVEVOVCxcbiAgICBwYXlsb2FkXG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXG4gKi9cbi8qKlxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSBgdmlzU3RhdGVgIHJlZHVjZXIuXG4gKiBUaGV5IG1hbmFnZSBob3cgZGF0YSBpcyBwcm9jZXNzZWQsIGZpbHRlcmVkIGFuZCBkaXNwbGF5ZWQgb24gdGhlIG1hcCBieSBvcGVyYXRlcyBvbiBsYXllcnMsXG4gKiBmaWx0ZXJzIGFuZCBpbnRlcmFjdGlvbiBzZXR0aW5ncy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCB2aXNTdGF0ZUFjdGlvbnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19