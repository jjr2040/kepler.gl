"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateWithLayerAndData = updateStateWithLayerAndData;
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerDataIdChangeUpdater = layerDataIdChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterAnimationTimeUpdater = setFilterAnimationTimeUpdater;
exports.setFilterAnimationWindowUpdater = setFilterAnimationWindowUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.loadFileStepSuccessUpdater = loadFileStepSuccessUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.processFileContentUpdater = processFileContentUpdater;
exports.parseProgress = parseProgress;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.initialFileLoadingProgress = initialFileLoadingProgress;
exports.updateFileLoadingProgressUpdater = updateFileLoadingProgressUpdater;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.nextFileBatchUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.setLayerAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleLayerAnimationUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _dataUtils = require("../utils/data-utils");

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

var _composerHelpers = require("./composer-helpers");

var _schemas = _interopRequireWildcard(require("../schemas"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// type imports

/** @typedef {import('./vis-state-updaters').Field} Field */

/** @typedef {import('./vis-state-updaters').Filter} Filter */

/** @typedef {import('./vis-state-updaters').Dataset} Dataset */

/** @typedef {import('./vis-state-updaters').VisState} VisState */

/** @typedef {import('./vis-state-updaters').Datasets} Datasets */

/** @typedef {import('./vis-state-updaters').AnimationConfig} AnimationConfig */

/** @typedef {import('./vis-state-updaters').Editor} Editor */
// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/** @type {AnimationConfig} */

var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1,
  isAnimating: false
};
/** @type {Editor} */

exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {VisState}
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  splitMapsToBeMerged: [],
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR,
  fileLoading: false,
  fileLoadingProgress: {},
  loaders: [],
  loadOptions: {},
  // visStateMergers
  mergers: _visStateMerger.VIS_STATE_MERGERS,
  schema: _schemas["default"]
};
/**
 * Update state with updated layer and layerData
 * @type {typeof import('./vis-state-updaters').updateStateWithLayerAndData}
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerConfigChangeUpdater}
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);

  if (typeof action.newConfig.dataId === 'string') {
    var _action$newConfig = action.newConfig,
        dataId = _action$newConfig.dataId,
        restConfig = (0, _objectWithoutProperties2["default"])(_action$newConfig, ["dataId"]);
    var stateWithDataId = layerDataIdChangeUpdater(state, {
      oldLayer: oldLayer,
      newConfig: {
        dataId: dataId
      }
    });
    var nextLayer = stateWithDataId.layers.find(function (l) {
      return l.id === oldLayer.id;
    });
    return layerConfigChangeUpdater(state, {
      oldLayer: nextLayer,
      newConfig: restConfig
    });
  }

  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread(_objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL), {}, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread(_objectSpread({}, tl), {}, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTextLabelChangeUpdater}
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}

function validateExistingLayerWithData(dataset, layerClasses, layer) {
  var newLayer = layer;

  var savedVisState = _schemas.visStateSchema[_schemas.CURRENT_VERSION].save({
    layers: [newLayer],
    layerOrder: [0]
  }).visState;

  var loadedLayer = _schemas.visStateSchema[_schemas.CURRENT_VERSION].load(savedVisState).visState.layers[0];

  newLayer = (0, _visStateMerger.validateLayerWithData)(dataset, loadedLayer, layerClasses, {
    allowEmptyColumn: true
  });
  return newLayer;
}
/**
 * Update layer config dataId
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerDataIdChangeUpdater}
 * @returns nextState
 */


function layerDataIdChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig;
  var dataId = newConfig.dataId;

  if (!oldLayer || !state.datasets[dataId]) {
    return state;
  }

  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig({
    dataId: dataId
  }); // this may happen when a layer is new (type: null and no columns) but it's not ready to be saved

  if (newLayer.isValidToSave()) {
    newLayer = validateExistingLayerWithData(state.datasets[dataId], state.layerClasses, newLayer); // if cant validate it with data create a new one

    if (!newLayer) {
      newLayer = new state.layerClasses[oldLayer.type]({
        dataId: dataId,
        id: oldLayer.id
      });
    }
  }

  newLayer = newLayer.updateLayerConfig({
    isVisible: oldLayer.config.isVisible,
    isConfigActive: true
  });
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state, undefined),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTypeChangeUpdater}
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings);
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, newState), {}, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread(_objectSpread({}, settings), {}, {
          layers: _objectSpread(_objectSpread({}, otherLayers), {}, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisualChannelChangeUpdater}
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData3.layerData,
      layer = _calculateLayerData3.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisConfigChangeUpdater}
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread(_objectSpread({}, oldLayer.config.visConfig), action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData4.layerData,
        layer = _calculateLayerData4.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationTimeUpdater}
 * @public
 */


function setFilterAnimationTimeUpdater(state, action) {
  return setFilterUpdater(state, action);
}
/**
 * Update filter animation window
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationWindowUpdater}
 * @public
 */


function setFilterAnimationWindowUpdater(state, _ref2) {
  var id = _ref2.id,
      animationWindow = _ref2.animationWindow;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f) {
      return f.id === id ? _objectSpread(_objectSpread({}, f), {}, {
        animationWindow: animationWindow
      }) : f;
    })
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterUpdater}
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];
  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread(_objectSpread({}, newFilter), {}, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterPlotUpdater}
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref3) {
  var idx = _ref3.idx,
      newProp = _ref3.newProp,
      _ref3$valueIndex = _ref3.valueIndex,
      valueIndex = _ref3$valueIndex === void 0 ? 0 : _ref3$valueIndex;

  var newFilter = _objectSpread(_objectSpread({}, state.filters[idx]), newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread(_objectSpread(_objectSpread({}, newFilter), (0, _filterUtils.getFilterPlot)(_objectSpread(_objectSpread({}, newFilter), {}, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]].allData)), {}, {
        plotType: plotType
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addFilterUpdater}
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread(_objectSpread({}, state), {}, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerColorUIChangeUpdater}
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref4) {
  var oldLayer = _ref4.oldLayer,
      prop = _ref4.prop,
      newConfig = _ref4.newConfig;
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);

  if (prop === 'colorRange') {
    return layerVisConfigChangeUpdater(state, {
      oldLayer: oldLayer,
      newVisConfig: newLayer.config.visConfig
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterAnimationUpdater}
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerAnimationUpdater}
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var toggleLayerAnimationUpdater = function toggleLayerAnimationUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      isAnimating: !state.animationConfig.isAnimating
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateFilterAnimationSpeedUpdater}
 * @public
 */


exports.toggleLayerAnimationUpdater = toggleLayerAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setLayerAnimationTimeUpdater}
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var setLayerAnimationTimeUpdater = function setLayerAnimationTimeUpdater(state, _ref5) {
  var value = _ref5.value;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerAnimationSpeedUpdater}
 * @public
 *
 */


exports.setLayerAnimationTimeUpdater = setLayerAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref6) {
  var speed = _ref6.speed;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').enlargeFilterUpdater}
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        enlarged: !f.enlarged
      }) : f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterFeatureUpdater}
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread(_objectSpread({}, filter), {}, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: Object.assign((0, _toConsumableArray2["default"])(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeFilterUpdater}
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread(_objectSpread({}, state.editor), {}, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addLayerUpdater}
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var defaultDataset = Object.keys(state.datasets)[0];
  var newLayer = new _layers.Layer(_objectSpread({
    isVisible: true,
    isConfigActive: true,
    dataId: defaultDataset
  }, action.props));
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [{}]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeLayerUpdater}
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref7) {
  var idx = _ref7.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').reorderLayerUpdater}
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref8) {
  var order = _ref8.order;
  return _objectSpread(_objectSpread({}, state), {}, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeDatasetUpdater}
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref9, idx) {
    var currentState = _ref9.newState,
        indexCounter = _ref9.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread(_objectSpread({}, state), {}, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, tooltip), {}, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread(_objectSpread({}, newState), {}, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerBlendingUpdater}
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').showDatasetTableUpdater}
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref10) {
  var _ref10$payload = _ref10.payload,
      _ref10$payload$config = _ref10$payload.config,
      config = _ref10$payload$config === void 0 ? {} : _ref10$payload$config,
      _ref10$payload$option = _ref10$payload.options,
      options = _ref10$payload$option === void 0 ? {} : _ref10$payload$option;

  if (!config.visState) {
    return state;
  }

  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;

  var _iterator = _createForOfIteratorHelper(state.mergers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var merger = _step.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && config.visState[merger.prop]) {
        mergedState = merger.merge(mergedState, config.visState[merger.prop], true);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerHoverUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    hoverInfo: action.info
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').interactionConfigChangeUpdater}
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread(_objectSpread({}, state.interactionConfig), (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread(_objectSpread({}, interactionConfig[k]), {}, {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerClickUpdater}
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread(_objectSpread({}, state.mousePos), {}, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mapClickUpdater}
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mouseMoveUpdater}
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref11) {
  var evt = _ref11.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread(_objectSpread({}, state), {}, {
      mousePos: _objectSpread(_objectSpread({}, state.mousePos), {}, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread(_objectSpread({}, state), {}, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerForMapUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref12) {
  var mapIndex = _ref12.mapIndex,
      layerId = _ref12.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread(_objectSpread({}, splitMaps[i]), {}, {
        layers: _objectSpread(_objectSpread({}, splitMaps[i].layers), {}, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateVisDataUpdater}
 * @public
 */

/* eslint-disable max-statements */
// eslint-disable-next-line complexity


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu) {
    var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref13$info = _ref13.info,
        info = _ref13$info === void 0 ? {} : _ref13$info,
        data = _ref13.data,
        metadata = _ref13.metadata;

    return _objectSpread(_objectSpread({}, accu), (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data,
      metadata: metadata
    }, state.datasets) || {});
  }, {});
  var dataEmpty = Object.keys(newDataEntries).length < 1; // apply config if passed from action

  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var mergedState = _objectSpread(_objectSpread({}, previousState), {}, {
    datasets: _objectSpread(_objectSpread({}, previousState.datasets), newDataEntries)
  }); // merge state with config to be merged


  var _iterator2 = _createForOfIteratorHelper(mergedState.mergers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var merger = _step2.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && merger.toMergeProp && mergedState[merger.toMergeProp]) {
        var toMerge = mergedState[merger.toMergeProp];
        mergedState[merger.toMergeProp] = INITIAL_VIS_STATE[merger.toMergeProp];
        mergedState = merger.merge(mergedState, toMerge);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var newLayers = !dataEmpty ? mergedState.layers.filter(function (l) {
    return l.config.dataId in newDataEntries;
  }) : [];

  if (!newLayers.length && (options || {}).autoCreateLayers !== false) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread(_objectSpread({}, mergedState), {}, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // if no tooltips merged add default tooltips


  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, dataEmpty ? Object.keys(mergedState.datasets) : Object.keys(newDataEntries), undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesUpdater}
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _visStateActions.loadFilesSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileLoadingProgress = Array.from(files).reduce(function (accu, f, i) {
    return (0, _composerHelpers.merge_)(initialFileLoadingProgress(f, i))(accu);
  }, {});
  var fileLoading = {
    fileCache: [],
    filesToLoad: files,
    onFinish: onFinish
  };
  var nextState = (0, _composerHelpers.merge_)({
    fileLoadingProgress: fileLoadingProgress,
    fileLoading: fileLoading
  })(state);
  return loadNextFileUpdater(nextState);
};
/**
 * Sucessfully loaded one file, move on to the next one
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFileStepSuccessUpdater}
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

function loadFileStepSuccessUpdater(state, action) {
  if (!state.fileLoading) {
    return state;
  }

  var fileName = action.fileName,
      fileCache = action.fileCache;
  var _state$fileLoading = state.fileLoading,
      filesToLoad = _state$fileLoading.filesToLoad,
      onFinish = _state$fileLoading.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      percent: 1,
      message: 'Done'
    }
  }); // save processed file to fileCache

  var stateWithCache = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    fileCache: fileCache
  }))(stateWithProgress);
  return (0, _tasks.withTask)(stateWithCache, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
} // withTask<T>(state: T, task: any): T

/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadNextFileUpdater}
 * @public
 */


function loadNextFileUpdater(state) {
  if (!state.fileLoading) {
    return state;
  }

  var filesToLoad = state.fileLoading.filesToLoad;

  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1); // save filesToLoad to state


  var nextState = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    filesToLoad: remainingFilesToLoad
  }))(state);
  var stateWithProgress = updateFileLoadingProgressUpdater(nextState, {
    fileName: file.name,
    progress: {
      percent: 0,
      message: 'loading...'
    }
  });
  var loaders = state.loaders,
      loadOptions = state.loadOptions;
  return (0, _tasks.withTask)(stateWithProgress, makeLoadFileTask(file, nextState.fileLoading.fileCache, loaders, loadOptions));
}

function makeLoadFileTask(file, fileCache) {
  var loaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  }).bimap( // prettier ignore
  // success
  function (gen) {
    return (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: file.name,
      onFinish: function onFinish(result) {
        return (0, _visStateActions.processFileContent)({
          content: result,
          fileCache: fileCache
        });
      }
    });
  }, // error
  function (err) {
    return (0, _visStateActions.loadFilesErr)(file.name, err);
  });
}
/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').processFileContentUpdater}
 * @public
 */


function processFileContentUpdater(state, action) {
  var _action$payload = action.payload,
      content = _action$payload.content,
      fileCache = _action$payload.fileCache;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: content.fileName,
    progress: {
      percent: 1,
      message: 'processing...'
    }
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.PROCESS_FILE_DATA)({
    content: content,
    fileCache: fileCache
  }).bimap(function (result) {
    return (0, _visStateActions.loadFileStepSuccess)({
      fileName: content.fileName,
      fileCache: result
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(content.fileName, err);
  }));
}

function parseProgress() {
  var prevProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var progress = arguments.length > 1 ? arguments[1] : undefined;

  // This happens when receiving query metadata or other cases we don't
  // have an update for the user.
  if (!progress || !progress.percent) {
    return {};
  }

  return {
    percent: progress.percent
  };
}
/**
 * gets called with payload = AsyncGenerator<???>
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').nextFileBatchUpdater}
 * @public
 */


var nextFileBatchUpdater = function nextFileBatchUpdater(state, _ref14) {
  var _ref14$payload = _ref14.payload,
      gen = _ref14$payload.gen,
      fileName = _ref14$payload.fileName,
      progress = _ref14$payload.progress,
      accumulated = _ref14$payload.accumulated,
      onFinish = _ref14$payload.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: parseProgress(state.fileLoadingProgress[fileName], progress)
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.UNWRAP_TASK)(gen.next()).bimap(function (_ref15) {
    var value = _ref15.value,
        done = _ref15.done;
    return done ? onFinish(accumulated) : (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: fileName,
      progress: value.progress,
      accumulated: value,
      onFinish: onFinish
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(fileName, err);
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.nextFileBatchUpdater = nextFileBatchUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref16) {
  var error = _ref16.error,
      fileName = _ref16.fileName;

  // update ui with error message
  _window.console.warn(error);

  if (!state.fileLoading) {
    return state;
  }

  var _state$fileLoading2 = state.fileLoading,
      filesToLoad = _state$fileLoading2.filesToLoad,
      onFinish = _state$fileLoading2.onFinish,
      fileCache = _state$fileLoading2.fileCache;
  var nextState = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      error: error
    }
  }); // kick off next file or finish

  return (0, _tasks.withTask)(nextState, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').applyCPUFilterUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref17) {
  var dataId = _ref17.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setMapInfoUpdater}
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapInfo: _objectSpread(_objectSpread({}, state.mapInfo), action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @type {typeof import('./vis-state-updaters').addDefaultLayers}
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  /** @type {Layer[]} */
  var empty = [];
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    var foundLayers = (0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses);
    return foundLayers && foundLayers.length ? accu.concat(foundLayers) : accu;
  }, empty);
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread(_objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow), tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}

function initialFileLoadingProgress(file, index) {
  var fileName = file.name || "Untitled File ".concat(index);
  return (0, _defineProperty2["default"])({}, fileName, {
    // percent of current file
    percent: 0,
    message: '',
    fileName: fileName,
    error: null
  });
}

function updateFileLoadingProgressUpdater(state, _ref19) {
  var fileName = _ref19.fileName,
      progress = _ref19.progress;
  return (0, _composerHelpers.pick_)('fileLoadingProgress')((0, _composerHelpers.pick_)(fileName)((0, _composerHelpers.merge_)(progress)))(state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @type {typeof import('./vis-state-updaters').updateAllLayerDomainData}
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData5 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData5.layerData,
          layer = _calculateLayerData5.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: DEFAULT_ANIMATION_CONFIG
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setEditorModeUpdater}
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref20) {
  var mode = _ref20.mode;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFeaturesUpdater}
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref21) {
  var _ref21$features = _ref21.features,
      features = _ref21$features === void 0 ? [] : _ref21$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @type {typeof import('./vis-state-updaters').setSelectedFeatureUpdater}
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref22) {
  var feature = _ref22.feature;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').deleteFeatureUpdater}
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref23) {
  var feature = _ref23.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread(_objectSpread({}, state.editor), {}, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setPolygonFilterLayerUpdater}
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread(_objectSpread({}, feature), {}, {
        properties: _objectSpread(_objectSpread({}, feature.properties), {}, {
          filterId: null
        })
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        editor: _objectSpread(_objectSpread({}, state.editor), {}, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread(_objectSpread({}, state), {}, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread(_objectSpread({}, state.editor), {}, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').sortTableColumnUpdater}
 * @public
 */


function sortTableColumnUpdater(state, _ref24) {
  var dataId = _ref24.dataId,
      column = _ref24.column,
      mode = _ref24.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  if (!mode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]);
    mode = currentMode ? Object.keys(_defaultSettings.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _defaultSettings.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _datasetUtils.sortDatasetByColumn)(dataset, column, mode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').pinTableColumnUpdater}
 * @public
 */


function pinTableColumnUpdater(state, _ref25) {
  var dataId = _ref25.dataId,
      column = _ref25.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var field = dataset.fields.find(function (f) {
    return f.name === column;
  });

  if (!field) {
    return state;
  }

  var pinnedColumns;

  if (Array.isArray(dataset.pinnedColumns) && dataset.pinnedColumns.includes(field.name)) {
    // unpin it
    pinnedColumns = dataset.pinnedColumns.filter(function (co) {
      return co !== field.name;
    });
  } else {
    pinnedColumns = (dataset.pinnedColumns || []).concat(field.name);
  }

  return (0, _utils.set)(['datasets', dataId, 'pinnedColumns'], pinnedColumns, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').copyTableColumnUpdater}
 * @public
 */


function copyTableColumnUpdater(state, _ref26) {
  var dataId = _ref26.dataId,
      column = _ref26.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.allData.map(function (d) {
    return (0, _dataUtils.parseFieldValue)(d[fieldIdx], type);
  }).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').toggleEditorVisibilityUpdater}
 */


function toggleEditorVisibilityUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      visible: !state.editor.visible
    })
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJpc0FuaW1hdGluZyIsIkRFRkFVTFRfRURJVE9SIiwibW9kZSIsIkVESVRPUl9NT0RFUyIsIkRSQVdfUE9MWUdPTiIsImZlYXR1cmVzIiwic2VsZWN0ZWRGZWF0dXJlIiwidmlzaWJsZSIsIklOSVRJQUxfVklTX1NUQVRFIiwibWFwSW5mbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsYXllcnMiLCJsYXllckRhdGEiLCJsYXllclRvQmVNZXJnZWQiLCJsYXllck9yZGVyIiwiZmlsdGVycyIsImZpbHRlclRvQmVNZXJnZWQiLCJkYXRhc2V0cyIsImVkaXRpbmdEYXRhc2V0IiwidW5kZWZpbmVkIiwiaW50ZXJhY3Rpb25Db25maWciLCJpbnRlcmFjdGlvblRvQmVNZXJnZWQiLCJsYXllckJsZW5kaW5nIiwiaG92ZXJJbmZvIiwiY2xpY2tlZCIsIm1vdXNlUG9zIiwic3BsaXRNYXBzIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsImxheWVyQ2xhc3NlcyIsIkxheWVyQ2xhc3NlcyIsImFuaW1hdGlvbkNvbmZpZyIsImVkaXRvciIsImZpbGVMb2FkaW5nIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsImxvYWRlcnMiLCJsb2FkT3B0aW9ucyIsIm1lcmdlcnMiLCJWSVNfU1RBVEVfTUVSR0VSUyIsInNjaGVtYSIsIktlcGxlckdMU2NoZW1hIiwidXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhIiwic3RhdGUiLCJsYXllciIsImlkeCIsIm1hcCIsImx5ciIsImkiLCJkIiwidXBkYXRlU3RhdGVPbkxheWVyVmlzaWJpbGl0eUNoYW5nZSIsIm5ld1N0YXRlIiwibGVuZ3RoIiwiY29uZmlnIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uIiwiZW5hYmxlZCIsInVwZGF0ZUFuaW1hdGlvbkRvbWFpbiIsImxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlciIsImFjdGlvbiIsIm9sZExheWVyIiwiZmluZEluZGV4IiwibCIsImlkIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwibmV3Q29uZmlnIiwiZGF0YUlkIiwicmVzdENvbmZpZyIsInN0YXRlV2l0aERhdGFJZCIsImxheWVyRGF0YUlkQ2hhbmdlVXBkYXRlciIsIm5leHRMYXllciIsImZpbmQiLCJuZXdMYXllciIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhIiwib2xkTGF5ZXJEYXRhIiwidXBkYXRlTGF5ZXJEYXRhUmVzdWx0IiwiYWRkT3JSZW1vdmVUZXh0TGFiZWxzIiwibmV3RmllbGRzIiwidGV4dExhYmVsIiwibmV3VGV4dExhYmVsIiwic2xpY2UiLCJjdXJyZW50RmllbGRzIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJhZGRGaWVsZHMiLCJmIiwiaW5jbHVkZXMiLCJkZWxldGVGaWVsZHMiLCJmZCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImFmIiwidXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlIiwicHJvcCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzcGxpY2UiLCJsYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIiLCJ2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YSIsImRhdGFzZXQiLCJzYXZlZFZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJDVVJSRU5UX1ZFUlNJT04iLCJzYXZlIiwidmlzU3RhdGUiLCJsb2FkZWRMYXllciIsImxvYWQiLCJhbGxvd0VtcHR5Q29sdW1uIiwiaXNWYWxpZFRvU2F2ZSIsInR5cGUiLCJpc0NvbmZpZ0FjdGl2ZSIsInVwZGF0ZUxheWVyRG9tYWluIiwibGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciIsIm5ld1R5cGUiLCJvbGRJZCIsIkNvbnNvbGUiLCJlcnJvciIsImFzc2lnbkNvbmZpZ1RvTGF5ZXIiLCJ2aXNDb25maWdTZXR0aW5ncyIsInNldHRpbmdzIiwib2xkTGF5ZXJNYXAiLCJvdGhlckxheWVycyIsImxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIiLCJjaGFubmVsIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsIiwibGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyIiwibmV3VmlzQ29uZmlnIiwidmlzQ29uZmlnIiwic2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXIiLCJzZXRGaWx0ZXJVcGRhdGVyIiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93VXBkYXRlciIsImFuaW1hdGlvbldpbmRvdyIsInZhbHVlSW5kZXgiLCJvbGRGaWx0ZXIiLCJuZXdGaWx0ZXIiLCJkYXRhc2V0SWRzIiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhc2V0SWQiLCJtZXJnZURvbWFpbiIsInVwZGF0ZWRGaWx0ZXIiLCJuZXdEYXRhc2V0IiwiZ3B1IiwibGF5ZXJJZCIsImxheWVySWREaWZmZXJlbmNlIiwibGF5ZXJEYXRhSWRzIiwibGlkIiwibmV3RGF0YUlkcyIsImVubGFyZ2VkRmlsdGVyIiwiZW5sYXJnZWQiLCJkYXRhc2V0SWRzVG9GaWx0ZXIiLCJMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFMiLCJmaWx0ZXJlZERhdGFzZXRzIiwidXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIiwic2V0RmlsdGVyUGxvdFVwZGF0ZXIiLCJuZXdQcm9wIiwicGxvdFR5cGUiLCJhbGxEYXRhIiwiYWRkRmlsdGVyVXBkYXRlciIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwidG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyIiwidXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiZW5sYXJnZUZpbHRlclVwZGF0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciIsImFzc2lnbiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwibmV3RWRpdG9yIiwiYWRkTGF5ZXJVcGRhdGVyIiwiZGVmYXVsdERhdGFzZXQiLCJMYXllciIsInJlbW92ZUxheWVyVXBkYXRlciIsImxheWVyVG9SZW1vdmUiLCJuZXdNYXBzIiwicGlkIiwiaXNMYXllckhvdmVyZWQiLCJyZW9yZGVyTGF5ZXJVcGRhdGVyIiwib3JkZXIiLCJyZW1vdmVEYXRhc2V0VXBkYXRlciIsImRhdGFzZXRLZXkiLCJuZXdEYXRhc2V0cyIsImluZGV4ZXMiLCJyZWR1Y2UiLCJsaXN0T2ZJbmRleGVzIiwiaW5kZXgiLCJwdXNoIiwiY3VycmVudFN0YXRlIiwiaW5kZXhDb3VudGVyIiwiY3VycmVudEluZGV4IiwidG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJyZXNldE1hcENvbmZpZ1VwZGF0ZXIiLCJpbml0aWFsU3RhdGUiLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsInBheWxvYWQiLCJvcHRpb25zIiwia2VlcEV4aXN0aW5nQ29uZmlnIiwibWVyZ2VkU3RhdGUiLCJtZXJnZXIiLCJtZXJnZSIsImxheWVySG92ZXJVcGRhdGVyIiwiaW5mbyIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlciIsImNvbnRyYWRpY3QiLCJmb3JFYWNoIiwiayIsImxheWVyQ2xpY2tVcGRhdGVyIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsInBpY2tlZCIsIm1hcENsaWNrVXBkYXRlciIsIm1vdXNlTW92ZVVwZGF0ZXIiLCJldnQiLCJ2YWx1ZXMiLCJzb21lIiwibW91c2VQb3NpdGlvbiIsInBvaW50IiwibG5nTGF0IiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIiLCJtYXBJbmRleCIsInNtIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJuZXdEYXRhRW50cmllcyIsImFjY3UiLCJkYXRhIiwibWV0YWRhdGEiLCJkYXRhRW1wdHkiLCJwcmV2aW91c1N0YXRlIiwidG9NZXJnZVByb3AiLCJ0b01lcmdlIiwibmV3TGF5ZXJzIiwiYXV0b0NyZWF0ZUxheWVycyIsInJlc3VsdCIsImFkZERlZmF1bHRMYXllcnMiLCJ0b29sdGlwRmllbGRzIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRkRGVmYXVsdFRvb2x0aXBzIiwidXBkYXRlZFN0YXRlIiwiaW5kZXhUb1JldHJpZXZlIiwibWFwTGF5ZXJzIiwibG9hZEZpbGVzVXBkYXRlciIsImZpbGVzIiwib25GaW5pc2giLCJsb2FkRmlsZXNTdWNjZXNzIiwiZnJvbSIsImluaXRpYWxGaWxlTG9hZGluZ1Byb2dyZXNzIiwiZmlsZUNhY2hlIiwiZmlsZXNUb0xvYWQiLCJuZXh0U3RhdGUiLCJsb2FkTmV4dEZpbGVVcGRhdGVyIiwibG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXIiLCJmaWxlTmFtZSIsInN0YXRlV2l0aFByb2dyZXNzIiwidXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIiLCJwcm9ncmVzcyIsInBlcmNlbnQiLCJtZXNzYWdlIiwic3RhdGVXaXRoQ2FjaGUiLCJsb2FkTmV4dEZpbGUiLCJmaWxlIiwicmVtYWluaW5nRmlsZXNUb0xvYWQiLCJtYWtlTG9hZEZpbGVUYXNrIiwiYmltYXAiLCJnZW4iLCJjb250ZW50IiwiZXJyIiwicHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlciIsInBhcnNlUHJvZ3Jlc3MiLCJwcmV2UHJvZ3Jlc3MiLCJuZXh0RmlsZUJhdGNoVXBkYXRlciIsImFjY3VtdWxhdGVkIiwibmV4dCIsImRvbmUiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwid2FybiIsImFwcGx5Q1BVRmlsdGVyVXBkYXRlciIsImRhdGFJZHMiLCJzZXRNYXBJbmZvVXBkYXRlciIsImVtcHR5IiwiZGVmYXVsdExheWVycyIsImZvdW5kTGF5ZXJzIiwiY29uY2F0IiwiXyIsIm1lcmdlZCIsIm5ld0xheWVyRGF0YSIsImZpeGVkRG9tYWluIiwiYW5pbWF0YWJsZUxheWVycyIsImFuaW1hdGlvbkRvbWFpbiIsIm1lcmdlZERvbWFpbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJJbmZpbml0eSIsInNldEVkaXRvck1vZGVVcGRhdGVyIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwibGFzdEZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiaXNDbG9zZWQiLCJFRElUIiwiZmVhdHVyZSIsImZpbHRlcklkIiwiZmVhdHVyZVZhbHVlIiwiZmlsdGVySWR4IiwiZmlsIiwic2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciIsImRlbGV0ZUZlYXR1cmVVcGRhdGVyIiwic2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlciIsIm5ld0xheWVySWQiLCJub25lRmlsdGVyRmVhdHVyZSIsImlzTGF5ZXJJbmNsdWRlZCIsInNvcnRUYWJsZUNvbHVtblVwZGF0ZXIiLCJjb2x1bW4iLCJjdXJyZW50TW9kZSIsIlNPUlRfT1JERVIiLCJtIiwiQVNDRU5ESU5HIiwic29ydGVkIiwicGluVGFibGVDb2x1bW5VcGRhdGVyIiwicGlubmVkQ29sdW1ucyIsImNvIiwiY29weVRhYmxlQ29sdW1uVXBkYXRlciIsImZpZWxkSWR4IiwidGV4dCIsImpvaW4iLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVFBOztBQUNBOztBQWVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7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QUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVN1Uyw2QkFBVCxDQUF1Q3ZTLEtBQXZDLEVBQThDO0FBQ25ELHlDQUNLQSxLQURMO0FBRUVWLElBQUFBLE1BQU0sa0NBQ0RVLEtBQUssQ0FBQ1YsTUFETDtBQUVKekIsTUFBQUEsT0FBTyxFQUFFLENBQUNtQyxLQUFLLENBQUNWLE1BQU4sQ0FBYXpCO0FBRm5CO0FBRlI7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7ZGlzYWJsZVN0YWNrQ2FwdHVyaW5nLCB3aXRoVGFza30gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCB4b3IgZnJvbSAnbG9kYXNoLnhvcic7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQge3BhcnNlRmllbGRWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG4vLyBUYXNrc1xuaW1wb3J0IHtMT0FEX0ZJTEVfVEFTSywgVU5XUkFQX1RBU0ssIFBST0NFU1NfRklMRV9EQVRBLCBERUxBWV9UQVNLfSBmcm9tICd0YXNrcy90YXNrcyc7XG4vLyBBY3Rpb25zXG5pbXBvcnQge1xuICBsb2FkRmlsZXNFcnIsXG4gIGxvYWRGaWxlc1N1Y2Nlc3MsXG4gIGxvYWRGaWxlU3RlcFN1Y2Nlc3MsXG4gIGxvYWROZXh0RmlsZSxcbiAgbmV4dEZpbGVCYXRjaFxufSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbi8vIFV0aWxzXG5pbXBvcnQge2ZpbmRGaWVsZHNUb1Nob3csIGdldERlZmF1bHRJbnRlcmFjdGlvbn0gZnJvbSAndXRpbHMvaW50ZXJhY3Rpb24tdXRpbHMnO1xuaW1wb3J0IHtcbiAgYXBwbHlGaWx0ZXJGaWVsZE5hbWUsXG4gIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMsXG4gIGZlYXR1cmVUb0ZpbHRlclZhbHVlLFxuICBGSUxURVJfVVBEQVRFUl9QUk9QUyxcbiAgZmlsdGVyRGF0YXNldENQVSxcbiAgZ2VuZXJhdGVQb2x5Z29uRmlsdGVyLFxuICBnZXREZWZhdWx0RmlsdGVyLFxuICBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUsXG4gIGdldEZpbHRlcklkSW5GZWF0dXJlLFxuICBnZXRGaWx0ZXJQbG90LFxuICBpc0luUmFuZ2UsXG4gIExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyxcbiAgdXBkYXRlRmlsdGVyRGF0YUlkXG59IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge2Fzc2lnbkdwdUNoYW5uZWwsIHNldEZpbHRlckdwdU1vZGV9IGZyb20gJ3V0aWxzL2dwdS1maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVOZXdEYXRhRW50cnksIHNvcnREYXRhc2V0QnlDb2x1bW59IGZyb20gJ3V0aWxzL2RhdGFzZXQtdXRpbHMnO1xuaW1wb3J0IHtzZXQsIHRvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtjYWxjdWxhdGVMYXllckRhdGEsIGZpbmREZWZhdWx0TGF5ZXJ9IGZyb20gJ3V0aWxzL2xheWVyLXV0aWxzJztcblxuaW1wb3J0IHtpc1ZhbGlkTWVyZ2VyLCBWSVNfU1RBVEVfTUVSR0VSUywgdmFsaWRhdGVMYXllcldpdGhEYXRhfSBmcm9tICcuL3Zpcy1zdGF0ZS1tZXJnZXInO1xuXG5pbXBvcnQge1xuICBhZGROZXdMYXllcnNUb1NwbGl0TWFwLFxuICBjb21wdXRlU3BsaXRNYXBMYXllcnMsXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwc1xufSBmcm9tICd1dGlscy9zcGxpdC1tYXAtdXRpbHMnO1xuXG5pbXBvcnQge0xheWVyLCBMYXllckNsYXNzZXN9IGZyb20gJ2xheWVycyc7XG5pbXBvcnQge0RFRkFVTFRfVEVYVF9MQUJFTH0gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IHtFRElUT1JfTU9ERVMsIFNPUlRfT1JERVJ9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7cGlja18sIG1lcmdlX30gZnJvbSAnLi9jb21wb3Nlci1oZWxwZXJzJztcbmltcG9ydCB7cHJvY2Vzc0ZpbGVDb250ZW50fSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcblxuaW1wb3J0IEtlcGxlckdMU2NoZW1hLCB7Q1VSUkVOVF9WRVJTSU9OLCB2aXNTdGF0ZVNjaGVtYX0gZnJvbSAnc2NoZW1hcyc7XG5cbi8vIHR5cGUgaW1wb3J0c1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRmllbGR9IEZpZWxkICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5GaWx0ZXJ9IEZpbHRlciAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRGF0YXNldH0gRGF0YXNldCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuVmlzU3RhdGV9IFZpc1N0YXRlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5EYXRhc2V0c30gRGF0YXNldHMgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkFuaW1hdGlvbkNvbmZpZ30gQW5pbWF0aW9uQ29uZmlnICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5FZGl0b3J9IEVkaXRvciAqL1xuXG4vLyByZWFjdC1wYWxtXG4vLyBkaXNhYmxlIGNhcHR1cmUgZXhjZXB0aW9uIGZvciByZWFjdC1wYWxtIGNhbGwgdG8gd2l0aFRhc2tcbmRpc2FibGVTdGFja0NhcHR1cmluZygpO1xuXG4vKipcbiAqIFVwZGF0ZXJzIGZvciBgdmlzU3RhdGVgIHJlZHVjZXIuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxuICpcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge3Zpc1N0YXRlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICBjYXNlICdDTElDS19CVVRUT04nOlxuICogICAgICByZXR1cm4ge1xuICogICAgICAgIC4uLnN0YXRlLFxuICogICAgICAgIGtlcGxlckdsOiB7XG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcbiAqICAgICAgICAgIGZvbzoge1xuICogICAgICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wuZm9vLFxuICogICAgICAgICAgICAgdmlzU3RhdGU6IHZpc1N0YXRlVXBkYXRlcnMuZW5sYXJnZUZpbHRlclVwZGF0ZXIoXG4gKiAgICAgICAgICAgICAgIHN0YXRlLmtlcGxlckdsLmZvby52aXNTdGF0ZSxcbiAqICAgICAgICAgICAgICAge2lkeDogMH1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdmlzU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKiBAdHlwZSB7QW5pbWF0aW9uQ29uZmlnfSAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyA9IHtcbiAgZG9tYWluOiBudWxsLFxuICBjdXJyZW50VGltZTogbnVsbCxcbiAgc3BlZWQ6IDEsXG4gIGlzQW5pbWF0aW5nOiBmYWxzZVxufTtcblxuLyoqIEB0eXBlIHtFZGl0b3J9ICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1IgPSB7XG4gIG1vZGU6IEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04sXG4gIGZlYXR1cmVzOiBbXSxcbiAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxuICB2aXNpYmxlOiB0cnVlXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7VmlzU3RhdGV9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJTklUSUFMX1ZJU19TVEFURSA9IHtcbiAgLy8gbWFwIGluZm9cbiAgbWFwSW5mbzoge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSxcbiAgLy8gbGF5ZXJzXG4gIGxheWVyczogW10sXG4gIGxheWVyRGF0YTogW10sXG4gIGxheWVyVG9CZU1lcmdlZDogW10sXG4gIGxheWVyT3JkZXI6IFtdLFxuXG4gIC8vIGZpbHRlcnNcbiAgZmlsdGVyczogW10sXG4gIGZpbHRlclRvQmVNZXJnZWQ6IFtdLFxuXG4gIC8vIGEgY29sbGVjdGlvbiBvZiBtdWx0aXBsZSBkYXRhc2V0XG4gIGRhdGFzZXRzOiB7fSxcbiAgZWRpdGluZ0RhdGFzZXQ6IHVuZGVmaW5lZCxcblxuICBpbnRlcmFjdGlvbkNvbmZpZzogZ2V0RGVmYXVsdEludGVyYWN0aW9uKCksXG4gIGludGVyYWN0aW9uVG9CZU1lcmdlZDogdW5kZWZpbmVkLFxuXG4gIGxheWVyQmxlbmRpbmc6ICdub3JtYWwnLFxuICBob3ZlckluZm86IHVuZGVmaW5lZCxcbiAgY2xpY2tlZDogdW5kZWZpbmVkLFxuICBtb3VzZVBvczoge30sXG5cbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXG4gIHNwbGl0TWFwczogW1xuICAgIC8vIHRoaXMgd2lsbCBjb250YWluIGEgbGlzdCBvZiBvYmplY3RzIHRvXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgICBsYXllcnM6IHtsYXllcl9pZDogdHJ1ZSB8IGZhbHNlfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgXSxcbiAgc3BsaXRNYXBzVG9CZU1lcmdlZDogW10sXG5cbiAgLy8gZGVmYXVsdHMgbGF5ZXIgY2xhc3Nlc1xuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3NlcyxcblxuICAvLyBkZWZhdWx0IGFuaW1hdGlvblxuICAvLyB0aW1lIGluIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpICh0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2gpXG4gIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHLFxuXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1IsXG5cbiAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICBmaWxlTG9hZGluZ1Byb2dyZXNzOiB7fSxcblxuICBsb2FkZXJzOiBbXSxcbiAgbG9hZE9wdGlvbnM6IHt9LFxuXG4gIC8vIHZpc1N0YXRlTWVyZ2Vyc1xuICBtZXJnZXJzOiBWSVNfU1RBVEVfTUVSR0VSUyxcblxuICBzY2hlbWE6IEtlcGxlckdMU2NoZW1hXG59O1xuXG4vKipcbiAqIFVwZGF0ZSBzdGF0ZSB3aXRoIHVwZGF0ZWQgbGF5ZXIgYW5kIGxheWVyRGF0YVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAoKGx5ciwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyIDogbHlyKSksXG4gICAgbGF5ZXJEYXRhOiBsYXllckRhdGFcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxuICAgICAgOiBzdGF0ZS5sYXllckRhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIGxheWVyKSB7XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICBpZiAoc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGxheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgICAgPyBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3Q29uZmlnKTtcbiAgaWYgKHR5cGVvZiBhY3Rpb24ubmV3Q29uZmlnLmRhdGFJZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB7ZGF0YUlkLCAuLi5yZXN0Q29uZmlnfSA9IGFjdGlvbi5uZXdDb25maWc7XG4gICAgY29uc3Qgc3RhdGVXaXRoRGF0YUlkID0gbGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgICBvbGRMYXllcixcbiAgICAgIG5ld0NvbmZpZzoge2RhdGFJZH1cbiAgICB9KTtcbiAgICBjb25zdCBuZXh0TGF5ZXIgPSBzdGF0ZVdpdGhEYXRhSWQubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gICAgcmV0dXJuIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge29sZExheWVyOiBuZXh0TGF5ZXIsIG5ld0NvbmZpZzogcmVzdENvbmZpZ30pO1xuICB9XG5cbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoYWN0aW9uLm5ld0NvbmZpZyk7XG5cbiAgbGV0IGxheWVyRGF0YTtcblxuICAvLyBsZXQgbmV3TGF5ZXI7XG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gICAgY29uc3QgdXBkYXRlTGF5ZXJEYXRhUmVzdWx0ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcblxuICAgIGxheWVyRGF0YSA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllckRhdGE7XG4gICAgbmV3TGF5ZXIgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXI7XG4gIH1cblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgaWYgKCdpc1Zpc2libGUnIGluIGFjdGlvbi5uZXdDb25maWcpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIG5ld0xheWVyKTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEobmV3U3RhdGUsIHtcbiAgICBsYXllcjogbmV3TGF5ZXIsXG4gICAgbGF5ZXJEYXRhLFxuICAgIGlkeFxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKG5ld0ZpZWxkcywgdGV4dExhYmVsKSB7XG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcblxuICBjb25zdCBjdXJyZW50RmllbGRzID0gdGV4dExhYmVsLm1hcCh0bCA9PiB0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKS5maWx0ZXIoZCA9PiBkKTtcblxuICBjb25zdCBhZGRGaWVsZHMgPSBuZXdGaWVsZHMuZmlsdGVyKGYgPT4gIWN1cnJlbnRGaWVsZHMuaW5jbHVkZXMoZi5uYW1lKSk7XG4gIGNvbnN0IGRlbGV0ZUZpZWxkcyA9IGN1cnJlbnRGaWVsZHMuZmlsdGVyKGYgPT4gIW5ld0ZpZWxkcy5maW5kKGZkID0+IGZkLm5hbWUgPT09IGYpKTtcblxuICAvLyBkZWxldGVcbiAgbmV3VGV4dExhYmVsID0gbmV3VGV4dExhYmVsLmZpbHRlcih0bCA9PiB0bC5maWVsZCAmJiAhZGVsZXRlRmllbGRzLmluY2x1ZGVzKHRsLmZpZWxkLm5hbWUpKTtcbiAgbmV3VGV4dExhYmVsID0gIW5ld1RleHRMYWJlbC5sZW5ndGggPyBbREVGQVVMVF9URVhUX0xBQkVMXSA6IG5ld1RleHRMYWJlbDtcblxuICAvLyBhZGRcbiAgbmV3VGV4dExhYmVsID0gW1xuICAgIC4uLm5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQpLFxuICAgIC4uLmFkZEZpZWxkcy5tYXAoYWYgPT4gKHtcbiAgICAgIC4uLkRFRkFVTFRfVEVYVF9MQUJFTCxcbiAgICAgIGZpZWxkOiBhZlxuICAgIH0pKVxuICBdO1xuXG4gIHJldHVybiBuZXdUZXh0TGFiZWw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZShpZHgsIHByb3AsIHZhbHVlLCB0ZXh0TGFiZWwpIHtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHJldHVybiB0ZXh0TGFiZWw7XG4gIH1cblxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG5cbiAgaWYgKHByb3AgJiYgKHZhbHVlIHx8IHRleHRMYWJlbC5sZW5ndGggPT09IDEpKSB7XG4gICAgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLm1hcCgodGwsIGkpID0+IChpID09PSBpZHggPyB7Li4udGwsIFtwcm9wXTogdmFsdWV9IDogdGwpKTtcbiAgfSBlbHNlIGlmIChwcm9wID09PSAnZmllbGQnICYmIHZhbHVlID09PSBudWxsICYmIHRleHRMYWJlbC5sZW5ndGggPiAxKSB7XG4gICAgLy8gcmVtb3ZlIGxhYmVsIHdoZW4gZmllbGQgdmFsdWUgaXMgc2V0IHRvIG51bGxcbiAgICBuZXdUZXh0TGFiZWwuc3BsaWNlKGlkeCwgMSk7XG4gIH1cblxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBiYXNlIGNvbmZpZzogZGF0YUlkLCBsYWJlbCwgY29sdW1uLCBpc1Zpc2libGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJ9XG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgaWR4LCBwcm9wLCB2YWx1ZX0gPSBhY3Rpb247XG4gIGNvbnN0IHt0ZXh0TGFiZWx9ID0gb2xkTGF5ZXIuY29uZmlnO1xuXG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XSAmJiBpZHggPT09IHRleHRMYWJlbC5sZW5ndGgpIHtcbiAgICAvLyBpZiBpZHggaXMgc2V0IHRvIGxlbmd0aCwgYWRkIGVtcHR5IHRleHQgbGFiZWxcbiAgICBuZXdUZXh0TGFiZWwgPSBbLi4udGV4dExhYmVsLCBERUZBVUxUX1RFWFRfTEFCRUxdO1xuICB9XG5cbiAgaWYgKGlkeCA9PT0gJ2FsbCcgJiYgcHJvcCA9PT0gJ2ZpZWxkcycpIHtcbiAgICBuZXdUZXh0TGFiZWwgPSBhZGRPclJlbW92ZVRleHRMYWJlbHModmFsdWUsIHRleHRMYWJlbCk7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGV4dExhYmVsID0gdXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlKGlkeCwgcHJvcCwgdmFsdWUsIG5ld1RleHRMYWJlbCk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGV4dCBsYWJlbCBwcm9wIGFuZCB2YWx1ZVxuICByZXR1cm4gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnOiB7dGV4dExhYmVsOiBuZXdUZXh0TGFiZWx9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YShkYXRhc2V0LCBsYXllckNsYXNzZXMsIGxheWVyKSB7XG4gIGxldCBuZXdMYXllciA9IGxheWVyO1xuXG4gIGNvbnN0IHNhdmVkVmlzU3RhdGUgPSB2aXNTdGF0ZVNjaGVtYVtDVVJSRU5UX1ZFUlNJT05dLnNhdmUoe1xuICAgIGxheWVyczogW25ld0xheWVyXSxcbiAgICBsYXllck9yZGVyOiBbMF1cbiAgfSkudmlzU3RhdGU7XG4gIGNvbnN0IGxvYWRlZExheWVyID0gdmlzU3RhdGVTY2hlbWFbQ1VSUkVOVF9WRVJTSU9OXS5sb2FkKHNhdmVkVmlzU3RhdGUpLnZpc1N0YXRlLmxheWVyc1swXTtcbiAgbmV3TGF5ZXIgPSB2YWxpZGF0ZUxheWVyV2l0aERhdGEoZGF0YXNldCwgbG9hZGVkTGF5ZXIsIGxheWVyQ2xhc3Nlcywge1xuICAgIGFsbG93RW1wdHlDb2x1bW46IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBjb25maWcgZGF0YUlkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckRhdGFJZENoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld0NvbmZpZ30gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhSWR9ID0gbmV3Q29uZmlnO1xuXG4gIGlmICghb2xkTGF5ZXIgfHwgIXN0YXRlLmRhdGFzZXRzW2RhdGFJZF0pIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcblxuICBsZXQgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyh7ZGF0YUlkfSk7XG4gIC8vIHRoaXMgbWF5IGhhcHBlbiB3aGVuIGEgbGF5ZXIgaXMgbmV3ICh0eXBlOiBudWxsIGFuZCBubyBjb2x1bW5zKSBidXQgaXQncyBub3QgcmVhZHkgdG8gYmUgc2F2ZWRcbiAgaWYgKG5ld0xheWVyLmlzVmFsaWRUb1NhdmUoKSkge1xuICAgIG5ld0xheWVyID0gdmFsaWRhdGVFeGlzdGluZ0xheWVyV2l0aERhdGEoc3RhdGUuZGF0YXNldHNbZGF0YUlkXSwgc3RhdGUubGF5ZXJDbGFzc2VzLCBuZXdMYXllcik7XG4gICAgLy8gaWYgY2FudCB2YWxpZGF0ZSBpdCB3aXRoIGRhdGEgY3JlYXRlIGEgbmV3IG9uZVxuICAgIGlmICghbmV3TGF5ZXIpIHtcbiAgICAgIG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tvbGRMYXllci50eXBlXSh7ZGF0YUlkLCBpZDogb2xkTGF5ZXIuaWR9KTtcbiAgICB9XG4gIH1cblxuICBuZXdMYXllciA9IG5ld0xheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICBpc1Zpc2libGU6IG9sZExheWVyLmNvbmZpZy5pc1Zpc2libGUsXG4gICAgaXNDb25maWdBY3RpdmU6IHRydWVcbiAgfSk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMpO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCB1bmRlZmluZWQpO1xuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdHlwZS4gUHJldmlld3MgbGF5ZXIgY29uZmlnIHdpbGwgYmUgY29waWVkIGlmIGFwcGxpY2FibGUuXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld1R5cGV9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IG9sZElkID0gb2xkTGF5ZXIuaWQ7XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XG5cbiAgaWYgKCFzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0pIHtcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBnZXQgYSBtaW50IGxheWVyLCB3aXRoIG5ldyBpZCBhbmQgdHlwZVxuICAvLyBiZWNhdXNlIGRlY2suZ2wgdXNlcyBpZCB0byBtYXRjaCBiZXR3ZWVuIG5ldyBhbmQgb2xkIGxheWVyLlxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0oKTtcblxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSk7XG4gIGxldCBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgfHwgb2xkTGF5ZXIuY29uZmlnLmFuaW1hdGlvbi5lbmFibGVkKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4obmV3U3RhdGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNwbGl0TWFwIGxheWVyIGlkXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogbmV3U3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XG4gICAgICAgIGNvbnN0IHtbb2xkSWRdOiBvbGRMYXllck1hcCwgLi4ub3RoZXJMYXllcnN9ID0gc2V0dGluZ3MubGF5ZXJzO1xuICAgICAgICByZXR1cm4gb2xkSWQgaW4gc2V0dGluZ3MubGF5ZXJzXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgICAgICAuLi5vdGhlckxheWVycyxcbiAgICAgICAgICAgICAgICBbbGF5ZXIuaWRdOiBvbGRMYXllck1hcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBzZXR0aW5ncztcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdmlzdWFsIGNoYW5uZWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWx9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyLmNvbmZpZy5kYXRhSWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW29sZExheWVyLmNvbmZpZy5kYXRhSWRdO1xuXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKTtcblxuICBuZXdMYXllci51cGRhdGVMYXllclZpc3VhbENoYW5uZWwoZGF0YXNldCwgY2hhbm5lbCk7XG5cbiAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBgdmlzQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld1Zpc0NvbmZpZyk7XG4gIGNvbnN0IG5ld1Zpc0NvbmZpZyA9IHtcbiAgICAuLi5vbGRMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIC4uLmFjdGlvbi5uZXdWaXNDb25maWdcbiAgfTtcblxuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHt2aXNDb25maWc6IG5ld1Zpc0NvbmZpZ30pO1xuXG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gICAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBmaWx0ZXIgYW5pbWF0aW9uIHdpbmRvd1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3dVcGRhdGVyKHN0YXRlLCB7aWQsIGFuaW1hdGlvbldpbmRvd30pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChmID0+XG4gICAgICBmLmlkID09PSBpZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmYsXG4gICAgICAgICAgICBhbmltYXRpb25XaW5kb3dcbiAgICAgICAgICB9XG4gICAgICAgIDogZlxuICAgIClcbiAgfTtcbn1cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcblxuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XG5cbiAgLy8gRW5zdXJpbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICBzd2l0Y2ggKHByb3ApIHtcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXG4gICAgLy8gMi4gQWRkIGEgbmV3IGRhdGFzZXQgaWRcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWU6XG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xuICAgICAgLy8gd2UgYXJlIGdvbm5hIHVzZSBwYWlyIG9mIGRhdGFzZXRzIGFuZCBmaWVsZElkeCB0byB1cGRhdGUgdGhlIGZpbHRlclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgICAgIG5ld0ZpbHRlcixcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XG4gICAgICApO1xuICAgICAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcblxuICAgICAgaWYgKG5ld0ZpbHRlci5ncHUpIHtcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XG5cbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubGF5ZXJJZDpcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxuICAgICAgLy8gaWYgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiBsYXllcklkcywgZG9uJ3QgZG8gYW55IGZpbHRlcmluZ1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcblxuICAgICAgY29uc3QgbGF5ZXJEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgZGF0YXNldHNJZHNcbiAgICAgIGRhdGFzZXRJZHMgPSBsYXllckRhdGFJZHM7XG5cbiAgICAgIC8vIFVwZGF0ZSBuZXdGaWx0ZXIgZGF0YUlkc1xuICAgICAgY29uc3QgbmV3RGF0YUlkcyA9IHVuaXEoXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXG4gICAgICAgICAgLm1hcChsaWQgPT5cbiAgICAgICAgICAgIGdldChcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxuICAgICAgICAgICAgICBbJ2NvbmZpZycsICdkYXRhSWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICAgICk7XG5cbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGVubGFyZ2VkRmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGYgPT4gZi5lbmxhcmdlZCk7XG5cbiAgaWYgKGVubGFyZ2VkRmlsdGVyICYmIGVubGFyZ2VkRmlsdGVyLmlkICE9PSBuZXdGaWx0ZXIuaWQpIHtcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXG4gIG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycycsIGlkeF0sIG5ld0ZpbHRlciwgbmV3U3RhdGUpO1xuXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxuICAvLyBkYXRhc2V0IHdlIHdpbGwgcGFzcyBvbmx5IHRoZSBjdXJyZW50IGRhdGFzZXQgdG8gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyBhbmRcbiAgLy8gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIG90aGVyd2lzZSB3ZSBwYXNzIHRoZSBhbGwgbGlzdCBvZiBkYXRhc2V0cyBhcyBkZWZpbmVkIGluIGRhdGFJZFxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cbiAgICA/IFtkYXRhc2V0SWRzW3ZhbHVlSW5kZXhdXVxuICAgIDogZGF0YXNldElkcztcblxuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXG4gICAgbmV3U3RhdGUuZGF0YXNldHMsXG4gICAgbmV3U3RhdGUuZmlsdGVycyxcbiAgICBuZXdTdGF0ZS5sYXllcnNcbiAgKTtcblxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcbiAgLy8gZGF0YUlkIGlzIGFuIGFycmF5XG4gIC8vIHBhc3Mgb25seSB0aGUgZGF0YXNldCB3ZSBuZWVkIHRvIHVwZGF0ZVxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRGaWx0ZXJQbG90VXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZpbHRlclBsb3RVcGRhdGVyID0gKHN0YXRlLCB7aWR4LCBuZXdQcm9wLCB2YWx1ZUluZGV4ID0gMH0pID0+IHtcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xuICBjb25zdCBwcm9wID0gT2JqZWN0LmtleXMobmV3UHJvcClbMF07XG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcbiAgICAvLyBUT0RPOiBwbG90IGlzIG5vdCBzdXBwb3J0ZWQgaW4gbXVsdGkgZGF0YXNldCBmaWx0ZXIgZm9yIG5vd1xuICAgIGlmIChwbG90VHlwZSkge1xuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3QoXG4gICAgICAgICAgey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LFxuICAgICAgICAgIHN0YXRlLmRhdGFzZXRzW25ld0ZpbHRlci5kYXRhSWRbdmFsdWVJbmRleF1dLmFsbERhdGFcbiAgICAgICAgKSxcbiAgICAgICAgcGxvdFR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGlkeCA/IG5ld0ZpbHRlciA6IGYpKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgIWFjdGlvbi5kYXRhSWRcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgZ2V0RGVmYXVsdEZpbHRlcihhY3Rpb24uZGF0YUlkKV1cbiAgICAgIH07XG5cbi8qKlxuICogU2V0IGxheWVyIGNvbG9yIHBhbGV0dGUgdWkgc3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwge29sZExheWVyLCBwcm9wLCBuZXdDb25maWd9KSA9PiB7XG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZyk7XG4gIGlmIChwcm9wID09PSAnY29sb3JSYW5nZScpIHtcbiAgICByZXR1cm4gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7b2xkTGF5ZXIsIG5ld1Zpc0NvbmZpZzogbmV3TGF5ZXIuY29uZmlnLnZpc0NvbmZpZ30pO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKGwgPT4gKGwuaWQgPT09IG9sZExheWVyLmlkID8gbmV3TGF5ZXIgOiBsKSlcbiAgfTtcbn07XG5cbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBpc0FuaW1hdGluZzogIWYuaXNBbmltYXRpbmd9IDogZikpXG59KTtcblxuLyoqXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICBpc0FuaW1hdGluZzogIXN0YXRlLmFuaW1hdGlvbkNvbmZpZy5pc0FuaW1hdGluZ1xuICB9XG59KTtcbi8qKlxuICogQ2hhbmdlIGZpbHRlciBhbmltYXRpb24gc3BlZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBzcGVlZDogYWN0aW9uLnNwZWVkfSA6IGYpKVxufSk7XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uIGNvbmZpZyBjdXJyZW50IHRpbWUgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRMYXllckFuaW1hdGlvblRpbWVVcGRhdGVyfVxuICogQHB1YmxpY1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHNldExheWVyQW5pbWF0aW9uVGltZVVwZGF0ZXIgPSAoc3RhdGUsIHt2YWx1ZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBhbmltYXRpb25Db25maWc6IHtcbiAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgY3VycmVudFRpbWU6IHZhbHVlXG4gIH1cbn0pO1xuXG4vKipcbiAqIFVwZGF0ZSBhbmltYXRpb24gc3BlZWQgd2l0aCB0aGUgdmVydGljYWwgc3BlZWQgc2xpZGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIHtzcGVlZH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIHNwZWVkXG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuZW5sYXJnZUZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBlbmxhcmdlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+XG4gICAgICBpID09PSBhY3Rpb24uaWR4XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZixcbiAgICAgICAgICAgIGVubGFyZ2VkOiAhZi5lbmxhcmdlZFxuICAgICAgICAgIH1cbiAgICAgICAgOiBmXG4gICAgKVxuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGVzIGZpbHRlciBmZWF0dXJlIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckZlYXR1cmVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XTtcbiAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddKTtcbiAgY29uc3QgbmV3RmlsdGVyID0ge1xuICAgIC4uLmZpbHRlcixcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmlsdGVyLnZhbHVlLCBmaWx0ZXIuaWQsIHtcbiAgICAgIGlzVmlzaWJsZTogIWlzVmlzaWJsZVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBPYmplY3QuYXNzaWduKFsuLi5zdGF0ZS5maWx0ZXJzXSwge1thY3Rpb24uaWR4XTogbmV3RmlsdGVyfSlcbiAgfTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7aWR4fSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFJZCwgaWR9ID0gc3RhdGUuZmlsdGVyc1tpZHhdO1xuXG4gIGNvbnN0IG5ld0ZpbHRlcnMgPSBbXG4gICAgLi4uc3RhdGUuZmlsdGVycy5zbGljZSgwLCBpZHgpLFxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoaWR4ICsgMSwgc3RhdGUuZmlsdGVycy5sZW5ndGgpXG4gIF07XG5cbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YUlkLCBzdGF0ZS5kYXRhc2V0cywgbmV3RmlsdGVycywgc3RhdGUubGF5ZXJzKTtcbiAgY29uc3QgbmV3RWRpdG9yID1cbiAgICBnZXRGaWx0ZXJJZEluRmVhdHVyZShzdGF0ZS5lZGl0b3Iuc2VsZWN0ZWRGZWF0dXJlKSA9PT0gaWRcbiAgICAgID8ge1xuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICAgICAgfVxuICAgICAgOiBzdGF0ZS5lZGl0b3I7XG5cbiAgbGV0IG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycyddLCBuZXdGaWx0ZXJzLCBzdGF0ZSk7XG4gIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnXSwgZmlsdGVyZWREYXRhc2V0cywgbmV3U3RhdGUpO1xuICBuZXdTdGF0ZSA9IHNldChbJ2VkaXRvciddLCBuZXdFZGl0b3IsIG5ld1N0YXRlKTtcblxuICByZXR1cm4gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKG5ld1N0YXRlLCBkYXRhSWQsIHVuZGVmaW5lZCk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG5ldyBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmFkZExheWVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZExheWVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBMYXllcih7XG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxuICAgIGRhdGFJZDogZGVmYXVsdERhdGFzZXQsXG4gICAgLi4uYWN0aW9uLnByb3BzXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXG4gICAgbGF5ZXJEYXRhOiBbLi4uc3RhdGUubGF5ZXJEYXRhLCB7fV0sXG4gICAgbGF5ZXJPcmRlcjogWy4uLnN0YXRlLmxheWVyT3JkZXIsIHN0YXRlLmxheWVyT3JkZXIubGVuZ3RoXSxcbiAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcilcbiAgfTtcbn07XG5cbi8qKlxuICogcmVtb3ZlIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCB7aWR4fSkgPT4ge1xuICBjb25zdCB7bGF5ZXJzLCBsYXllckRhdGEsIGNsaWNrZWQsIGhvdmVySW5mb30gPSBzdGF0ZTtcbiAgY29uc3QgbGF5ZXJUb1JlbW92ZSA9IHN0YXRlLmxheWVyc1tpZHhdO1xuICBjb25zdCBuZXdNYXBzID0gcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXJUb1JlbW92ZSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4ubGF5ZXJzLnNsaWNlKDAsIGlkeCksIC4uLmxheWVycy5zbGljZShpZHggKyAxLCBsYXllcnMubGVuZ3RoKV0sXG4gICAgbGF5ZXJEYXRhOiBbLi4ubGF5ZXJEYXRhLnNsaWNlKDAsIGlkeCksIC4uLmxheWVyRGF0YS5zbGljZShpZHggKyAxLCBsYXllckRhdGEubGVuZ3RoKV0sXG4gICAgbGF5ZXJPcmRlcjogc3RhdGUubGF5ZXJPcmRlci5maWx0ZXIoaSA9PiBpICE9PSBpZHgpLm1hcChwaWQgPT4gKHBpZCA+IGlkeCA/IHBpZCAtIDEgOiBwaWQpKSxcbiAgICBjbGlja2VkOiBsYXllclRvUmVtb3ZlLmlzTGF5ZXJIb3ZlcmVkKGNsaWNrZWQpID8gdW5kZWZpbmVkIDogY2xpY2tlZCxcbiAgICBob3ZlckluZm86IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoaG92ZXJJbmZvKSA/IHVuZGVmaW5lZCA6IGhvdmVySW5mbyxcbiAgICBzcGxpdE1hcHM6IG5ld01hcHNcbiAgICAvLyBUT0RPOiB1cGRhdGUgZmlsdGVycywgY3JlYXRlIGhlbHBlciB0byByZW1vdmUgbGF5ZXIgZm9ybSBmaWx0ZXIgKHJlbW92ZSBsYXllcmlkIGFuZCBkYXRhaWQpIGlmIG1hcHBlZFxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVBbmltYXRpb25Eb21haW4obmV3U3RhdGUpO1xufTtcblxuLyoqXG4gKiBSZW9yZGVyIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVvcmRlckxheWVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlb3JkZXJMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtvcmRlcn0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBsYXllck9yZGVyOiBvcmRlclxufSk7XG5cbi8qKlxuICogUmVtb3ZlIGEgZGF0YXNldCBhbmQgYWxsIGxheWVycywgZmlsdGVycywgdG9vbHRpcCBjb25maWdzIHRoYXQgYmFzZWQgb24gaXRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVEYXRhc2V0VXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZURhdGFzZXRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gZXh0cmFjdCBkYXRhc2V0IGtleVxuICBjb25zdCB7ZGF0YUlkOiBkYXRhc2V0S2V5fSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFzZXRzfSA9IHN0YXRlO1xuXG4gIC8vIGNoZWNrIGlmIGRhdGFzZXQgaXMgcHJlc2VudFxuICBpZiAoIWRhdGFzZXRzW2RhdGFzZXRLZXldKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgY29uc3Qge1xuICAgIGxheWVycyxcbiAgICBkYXRhc2V0czoge1tkYXRhc2V0S2V5XTogZGF0YXNldCwgLi4ubmV3RGF0YXNldHN9XG4gIH0gPSBzdGF0ZTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4gIGNvbnN0IGluZGV4ZXMgPSBsYXllcnMucmVkdWNlKChsaXN0T2ZJbmRleGVzLCBsYXllciwgaW5kZXgpID0+IHtcbiAgICBpZiAobGF5ZXIuY29uZmlnLmRhdGFJZCA9PT0gZGF0YXNldEtleSkge1xuICAgICAgbGlzdE9mSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RPZkluZGV4ZXM7XG4gIH0sIFtdKTtcblxuICAvLyByZW1vdmUgbGF5ZXJzIGFuZCBkYXRhc2V0c1xuICBjb25zdCB7bmV3U3RhdGV9ID0gaW5kZXhlcy5yZWR1Y2UoXG4gICAgKHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGlkeCAtIGluZGV4Q291bnRlcjtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IHJlbW92ZUxheWVyVXBkYXRlcihjdXJyZW50U3RhdGUsIHtpZHg6IGN1cnJlbnRJbmRleH0pO1xuICAgICAgaW5kZXhDb3VudGVyKys7XG4gICAgICByZXR1cm4ge25ld1N0YXRlOiBjdXJyZW50U3RhdGUsIGluZGV4Q291bnRlcn07XG4gICAgfSxcbiAgICB7bmV3U3RhdGU6IHsuLi5zdGF0ZSwgZGF0YXNldHM6IG5ld0RhdGFzZXRzfSwgaW5kZXhDb3VudGVyOiAwfVxuICApO1xuXG4gIC8vIHJlbW92ZSBmaWx0ZXJzXG4gIGNvbnN0IGZpbHRlcnMgPSBzdGF0ZS5maWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gIWZpbHRlci5kYXRhSWQuaW5jbHVkZXMoZGF0YXNldEtleSkpO1xuXG4gIC8vIHVwZGF0ZSBpbnRlcmFjdGlvbkNvbmZpZ1xuICBsZXQge2ludGVyYWN0aW9uQ29uZmlnfSA9IHN0YXRlO1xuICBjb25zdCB7dG9vbHRpcH0gPSBpbnRlcmFjdGlvbkNvbmZpZztcbiAgaWYgKHRvb2x0aXApIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRvb2x0aXA7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7W2RhdGFzZXRLZXldOiBmaWVsZHMsIC4uLmZpZWxkc1RvU2hvd30gPSBjb25maWcuZmllbGRzVG9TaG93O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBpbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgdG9vbHRpcDogey4uLnRvb2x0aXAsIGNvbmZpZzogey4uLmNvbmZpZywgZmllbGRzVG9TaG93fX1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsuLi5uZXdTdGF0ZSwgZmlsdGVycywgaW50ZXJhY3Rpb25Db25maWd9O1xufTtcblxuLyoqXG4gKiB1cGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyQmxlbmRpbmc6IGFjdGlvbi5tb2RlXG59KTtcblxuLyoqXG4gKiBEaXNwbGF5IGRhdGFzZXQgdGFibGUgaW4gYSBtb2RhbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNob3dEYXRhc2V0VGFibGVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRpbmdEYXRhc2V0OiBhY3Rpb24uZGF0YUlkXG4gIH07XG59O1xuXG4vKipcbiAqIHJlc2V0IHZpc1N0YXRlIHRvIGluaXRpYWwgU3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZXNldE1hcENvbmZpZ1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZ1VwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5JTklUSUFMX1ZJU19TVEFURSxcbiAgLi4uc3RhdGUuaW5pdGlhbFN0YXRlLFxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxufSk7XG5cbi8qKlxuICogUHJvcGFnYXRlIGB2aXNTdGF0ZWAgcmVkdWNlciB3aXRoIGEgbmV3IGNvbmZpZ3VyYXRpb24uIEN1cnJlbnQgY29uZmlnIHdpbGwgYmUgb3ZlcnJpZGUuXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWQ6IHtjb25maWcgPSB7fSwgb3B0aW9ucyA9IHt9fX0pID0+IHtcbiAgaWYgKCFjb25maWcudmlzU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7a2VlcEV4aXN0aW5nQ29uZmlnfSA9IG9wdGlvbnM7XG5cbiAgLy8gcmVzZXQgY29uZmlnIGlmIGtlZXBFeGlzdGluZ0NvbmZpZyBpcyBmYWxzeVxuICBsZXQgbWVyZ2VkU3RhdGUgPSAha2VlcEV4aXN0aW5nQ29uZmlnID8gcmVzZXRNYXBDb25maWdVcGRhdGVyKHN0YXRlKSA6IHN0YXRlO1xuICBmb3IgKGNvbnN0IG1lcmdlciBvZiBzdGF0ZS5tZXJnZXJzKSB7XG4gICAgaWYgKGlzVmFsaWRNZXJnZXIobWVyZ2VyKSAmJiBjb25maWcudmlzU3RhdGVbbWVyZ2VyLnByb3BdKSB7XG4gICAgICBtZXJnZWRTdGF0ZSA9IG1lcmdlci5tZXJnZShtZXJnZWRTdGF0ZSwgY29uZmlnLnZpc1N0YXRlW21lcmdlci5wcm9wXSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZFN0YXRlO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGxheWVyIGhvdmVyIGV2ZW50IHdpdGggaG92ZXJlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckhvdmVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVySG92ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBob3ZlckluZm86IGFjdGlvbi5pbmZvXG59KTtcblxuLyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb247XG5cbiAgY29uc3QgaW50ZXJhY3Rpb25Db25maWcgPSB7XG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcsXG4gICAgLi4ue1tjb25maWcuaWRdOiBjb25maWd9XG4gIH07XG5cbiAgLy8gRG9uJ3QgZW5hYmxlIHRvb2x0aXAgYW5kIGJydXNoIGF0IHRoZSBzYW1lIHRpbWVcbiAgLy8gYnV0IGNvb3JkaW5hdGVzIGNhbiBiZSBzaG93biBhdCBhbGwgdGltZVxuICBjb25zdCBjb250cmFkaWN0ID0gWydicnVzaCcsICd0b29sdGlwJ107XG5cbiAgaWYgKFxuICAgIGNvbnRyYWRpY3QuaW5jbHVkZXMoY29uZmlnLmlkKSAmJlxuICAgIGNvbmZpZy5lbmFibGVkICYmXG4gICAgIXN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2NvbmZpZy5pZF0uZW5hYmxlZFxuICApIHtcbiAgICAvLyBvbmx5IGVuYWJsZSBvbmUgaW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgY29udHJhZGljdC5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWYgKGsgIT09IGNvbmZpZy5pZCkge1xuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZ1trXSA9IHsuLi5pbnRlcmFjdGlvbkNvbmZpZ1trXSwgZW5hYmxlZDogZmFsc2V9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWdcbiAgfTtcblxuICBpZiAoY29uZmlnLmlkID09PSAnZ2VvY29kZXInICYmICFjb25maWcuZW5hYmxlZCkge1xuICAgIHJldHVybiByZW1vdmVEYXRhc2V0VXBkYXRlcihuZXdTdGF0ZSwge2RhdGFJZDogJ2dlb2NvZGVyX2RhdGFzZXQnfSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBjbGljayBldmVudCB3aXRoIGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJDbGlja1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckNsaWNrVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbW91c2VQb3M6IHN0YXRlLmludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZFxuICAgID8ge1xuICAgICAgICAuLi5zdGF0ZS5tb3VzZVBvcyxcbiAgICAgICAgcGlubmVkOiBzdGF0ZS5tb3VzZVBvcy5waW5uZWQgPyBudWxsIDogY2xvbmVEZWVwKHN0YXRlLm1vdXNlUG9zKVxuICAgICAgfVxuICAgIDogc3RhdGUubW91c2VQb3MsXG4gIGNsaWNrZWQ6IGFjdGlvbi5pbmZvICYmIGFjdGlvbi5pbmZvLnBpY2tlZCA/IGFjdGlvbi5pbmZvIDogbnVsbFxufSk7XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubWFwQ2xpY2tVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwQ2xpY2tVcGRhdGVyID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNsaWNrZWQ6IG51bGxcbiAgfTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgbW92ZSBldmVudFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm1vdXNlTW92ZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBtb3VzZU1vdmVVcGRhdGVyID0gKHN0YXRlLCB7ZXZ0fSkgPT4ge1xuICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZykuc29tZShjb25maWcgPT4gY29uZmlnLmVuYWJsZWQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXG4gICAgICAgIG1vdXNlUG9zaXRpb246IFsuLi5ldnQucG9pbnRdLFxuICAgICAgICBjb29yZGluYXRlOiBbLi4uZXZ0LmxuZ0xhdF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBmb3IgYSBzcGxpdCBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVTcGxpdE1hcFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgc3RhdGUuc3BsaXRNYXBzICYmIHN0YXRlLnNwbGl0TWFwcy5sZW5ndGggPT09IDBcbiAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vIG1heWJlIHdlIHNob3VsZCB1c2UgYW4gYXJyYXkgdG8gc3RvcmUgc3RhdGUgZm9yIGEgc2luZ2xlIG1hcCBhcyB3ZWxsXG4gICAgICAgIC8vIGlmIGN1cnJlbnQgbWFwcyBsZW5ndGggaXMgZXF1YWwgdG8gMCBpdCBtZWFucyB0aGF0IHdlIGFyZSBhYm91dCB0byBzcGxpdCB0aGUgdmlld1xuICAgICAgICBzcGxpdE1hcHM6IGNvbXB1dGVTcGxpdE1hcExheWVycyhzdGF0ZS5sYXllcnMpXG4gICAgICB9XG4gICAgOiBjbG9zZVNwZWNpZmljTWFwQXRJbmRleChzdGF0ZSwgYWN0aW9uKTtcblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyID0gKHN0YXRlLCB7bWFwSW5kZXgsIGxheWVySWR9KSA9PiB7XG4gIGNvbnN0IHtzcGxpdE1hcHN9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBzcGxpdE1hcHM6IHNwbGl0TWFwcy5tYXAoKHNtLCBpKSA9PlxuICAgICAgaSA9PT0gbWFwSW5kZXhcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5zcGxpdE1hcHNbaV0sXG4gICAgICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLmxheWVycyxcbiAgICAgICAgICAgICAgLy8gaWYgbGF5ZXJJZCBub3QgaW4gbGF5ZXJzLCBzZXQgaXQgdG8gdmlzaWJsZVxuICAgICAgICAgICAgICBbbGF5ZXJJZF06ICFzcGxpdE1hcHNbaV0ubGF5ZXJzW2xheWVySWRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA6IHNtXG4gICAgKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IGRhdGFzZXQgdG8gYHZpc1N0YXRlYCwgd2l0aCBvcHRpb24gdG8gbG9hZCBhIG1hcCBjb25maWcgYWxvbmcgd2l0aCB0aGUgZGF0YXNldHNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVWaXNEYXRhVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5leHBvcnQgY29uc3QgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBkYXRhc2V0cyBjYW4gYmUgYSBzaW5nbGUgZGF0YSBlbnRyaWVzIG9yIGFuIGFycmF5IG9mIG11bHRpcGxlIGRhdGEgZW50cmllc1xuICBjb25zdCB7Y29uZmlnLCBvcHRpb25zfSA9IGFjdGlvbjtcbiAgY29uc3QgZGF0YXNldHMgPSB0b0FycmF5KGFjdGlvbi5kYXRhc2V0cyk7XG5cbiAgY29uc3QgbmV3RGF0YUVudHJpZXMgPSBkYXRhc2V0cy5yZWR1Y2UoXG4gICAgKGFjY3UsIHtpbmZvID0ge30sIGRhdGEsIG1ldGFkYXRhfSA9IHt9KSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC4uLihjcmVhdGVOZXdEYXRhRW50cnkoe2luZm8sIGRhdGEsIG1ldGFkYXRhfSwgc3RhdGUuZGF0YXNldHMpIHx8IHt9KVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc3QgZGF0YUVtcHR5ID0gT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmxlbmd0aCA8IDE7XG5cbiAgLy8gYXBwbHkgY29uZmlnIGlmIHBhc3NlZCBmcm9tIGFjdGlvblxuICBjb25zdCBwcmV2aW91c1N0YXRlID0gY29uZmlnXG4gICAgPyByZWNlaXZlTWFwQ29uZmlnVXBkYXRlcihzdGF0ZSwge1xuICAgICAgICBwYXlsb2FkOiB7Y29uZmlnLCBvcHRpb25zfVxuICAgICAgfSlcbiAgICA6IHN0YXRlO1xuXG4gIGxldCBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgIGRhdGFzZXRzOiB7XG4gICAgICAuLi5wcmV2aW91c1N0YXRlLmRhdGFzZXRzLFxuICAgICAgLi4ubmV3RGF0YUVudHJpZXNcbiAgICB9XG4gIH07XG5cbiAgLy8gbWVyZ2Ugc3RhdGUgd2l0aCBjb25maWcgdG8gYmUgbWVyZ2VkXG4gIGZvciAoY29uc3QgbWVyZ2VyIG9mIG1lcmdlZFN0YXRlLm1lcmdlcnMpIHtcbiAgICBpZiAoaXNWYWxpZE1lcmdlcihtZXJnZXIpICYmIG1lcmdlci50b01lcmdlUHJvcCAmJiBtZXJnZWRTdGF0ZVttZXJnZXIudG9NZXJnZVByb3BdKSB7XG4gICAgICBjb25zdCB0b01lcmdlID0gbWVyZ2VkU3RhdGVbbWVyZ2VyLnRvTWVyZ2VQcm9wXTtcbiAgICAgIG1lcmdlZFN0YXRlW21lcmdlci50b01lcmdlUHJvcF0gPSBJTklUSUFMX1ZJU19TVEFURVttZXJnZXIudG9NZXJnZVByb3BdO1xuICAgICAgbWVyZ2VkU3RhdGUgPSBtZXJnZXIubWVyZ2UobWVyZ2VkU3RhdGUsIHRvTWVyZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdMYXllcnMgPSAhZGF0YUVtcHR5XG4gICAgPyBtZXJnZWRTdGF0ZS5sYXllcnMuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkIGluIG5ld0RhdGFFbnRyaWVzKVxuICAgIDogW107XG5cbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoICYmIChvcHRpb25zIHx8IHt9KS5hdXRvQ3JlYXRlTGF5ZXJzICE9PSBmYWxzZSkge1xuICAgIC8vIG5vIGxheWVyIG1lcmdlZCwgZmluZCBkZWZhdWx0c1xuICAgIGNvbnN0IHJlc3VsdCA9IGFkZERlZmF1bHRMYXllcnMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzKTtcbiAgICBtZXJnZWRTdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcbiAgICBuZXdMYXllcnMgPSByZXN1bHQubmV3TGF5ZXJzO1xuICB9XG5cbiAgaWYgKG1lcmdlZFN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAvLyBpZiBtYXAgaXMgc3BsaXQsIGFkZCBuZXcgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICAgIG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgaW4gbmV3RGF0YUVudHJpZXMpO1xuICAgIG1lcmdlZFN0YXRlID0ge1xuICAgICAgLi4ubWVyZ2VkU3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcnMpXG4gICAgfTtcbiAgfVxuXG4gIC8vIGlmIG5vIHRvb2x0aXBzIG1lcmdlZCBhZGQgZGVmYXVsdCB0b29sdGlwc1xuICBPYmplY3Qua2V5cyhuZXdEYXRhRW50cmllcykuZm9yRWFjaChkYXRhSWQgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXBGaWVsZHMgPSBtZXJnZWRTdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodG9vbHRpcEZpZWxkcykgfHwgIXRvb2x0aXBGaWVsZHMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTdGF0ZSA9IGFkZERlZmF1bHRUb29sdGlwcyhtZXJnZWRTdGF0ZSwgbmV3RGF0YUVudHJpZXNbZGF0YUlkXSk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgdXBkYXRlZFN0YXRlID0gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKFxuICAgIG1lcmdlZFN0YXRlLFxuICAgIGRhdGFFbXB0eSA/IE9iamVjdC5rZXlzKG1lcmdlZFN0YXRlLmRhdGFzZXRzKSA6IE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKSxcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICAvLyByZWdpc3RlciBsYXllciBhbmltYXRpb24gZG9tYWluLFxuICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBsYXllciBkYXRhIGlzIGNhbGN1bGF0ZWRcbiAgdXBkYXRlZFN0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHVwZGF0ZWRTdGF0ZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogV2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBzcGVjaWZpYyBtYXAgY2xvc2luZyBpY29uXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcbiAqIFRPRE86IGkgdGhpbmsgaW4gdGhlIGZ1dHVyZSB0aGlzIGFjdGlvbiBzaG91bGQgYmUgY2FsbGVkIG1lcmdlIG1hcCBsYXllcnMgd2l0aCBnbG9iYWwgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gcmV0cmlldmUgbGF5ZXJzIG1ldGEgZGF0YSBmcm9tIHRoZSByZW1haW5pbmcgbWFwIHRoYXQgd2UgbmVlZCB0byBrZWVwXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3QgbWFwTGF5ZXJzID0gc3RhdGUuc3BsaXRNYXBzW2luZGV4VG9SZXRyaWV2ZV0ubGF5ZXJzO1xuICBjb25zdCB7bGF5ZXJzfSA9IHN0YXRlO1xuXG4gIC8vIHVwZGF0ZSBsYXllciB2aXNpYmlsaXR5XG4gIGNvbnN0IG5ld0xheWVycyA9IGxheWVycy5tYXAobGF5ZXIgPT5cbiAgICAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgICAvLyBpZiBsYXllci5pZCBpcyBub3QgaW4gbWFwTGF5ZXJzLCBpdCBzaG91bGQgYmUgaW5WaXNpYmxlXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgOiBsYXllclxuICApO1xuXG4gIC8vIGRlbGV0ZSBtYXBcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBzcGxpdE1hcHM6IFtdXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7ZmlsZXMsIG9uRmluaXNoID0gbG9hZEZpbGVzU3VjY2Vzc30gPSBhY3Rpb247XG4gIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgZmlsZUxvYWRpbmdQcm9ncmVzcyA9IEFycmF5LmZyb20oZmlsZXMpLnJlZHVjZShcbiAgICAoYWNjdSwgZiwgaSkgPT4gbWVyZ2VfKGluaXRpYWxGaWxlTG9hZGluZ1Byb2dyZXNzKGYsIGkpKShhY2N1KSxcbiAgICB7fVxuICApO1xuXG4gIGNvbnN0IGZpbGVMb2FkaW5nID0ge1xuICAgIGZpbGVDYWNoZTogW10sXG4gICAgZmlsZXNUb0xvYWQ6IGZpbGVzLFxuICAgIG9uRmluaXNoXG4gIH07XG5cbiAgY29uc3QgbmV4dFN0YXRlID0gbWVyZ2VfKHtmaWxlTG9hZGluZ1Byb2dyZXNzLCBmaWxlTG9hZGluZ30pKHN0YXRlKTtcblxuICByZXR1cm4gbG9hZE5leHRGaWxlVXBkYXRlcihuZXh0U3RhdGUpO1xufTtcblxuLyoqXG4gKiBTdWNlc3NmdWxseSBsb2FkZWQgb25lIGZpbGUsIG1vdmUgb24gdG8gdGhlIG5leHQgb25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVOYW1lLCBmaWxlQ2FjaGV9ID0gYWN0aW9uO1xuICBjb25zdCB7ZmlsZXNUb0xvYWQsIG9uRmluaXNofSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAxLCBtZXNzYWdlOiAnRG9uZSd9XG4gIH0pO1xuXG4gIC8vIHNhdmUgcHJvY2Vzc2VkIGZpbGUgdG8gZmlsZUNhY2hlXG4gIGNvbnN0IHN0YXRlV2l0aENhY2hlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlQ2FjaGV9KSkoc3RhdGVXaXRoUHJvZ3Jlc3MpO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhDYWNoZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59XG5cbi8vIHdpdGhUYXNrPFQ+KHN0YXRlOiBULCB0YXNrOiBhbnkpOiBUXG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkTmV4dEZpbGVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5leHRGaWxlVXBkYXRlcihzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZH0gPSBzdGF0ZS5maWxlTG9hZGluZztcbiAgY29uc3QgW2ZpbGUsIC4uLnJlbWFpbmluZ0ZpbGVzVG9Mb2FkXSA9IGZpbGVzVG9Mb2FkO1xuXG4gIC8vIHNhdmUgZmlsZXNUb0xvYWQgdG8gc3RhdGVcbiAgY29uc3QgbmV4dFN0YXRlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlc1RvTG9hZDogcmVtYWluaW5nRmlsZXNUb0xvYWR9KSkoc3RhdGUpO1xuXG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIobmV4dFN0YXRlLCB7XG4gICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICBwcm9ncmVzczoge3BlcmNlbnQ6IDAsIG1lc3NhZ2U6ICdsb2FkaW5nLi4uJ31cbiAgfSk7XG5cbiAgY29uc3Qge2xvYWRlcnMsIGxvYWRPcHRpb25zfSA9IHN0YXRlO1xuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgbWFrZUxvYWRGaWxlVGFzayhmaWxlLCBuZXh0U3RhdGUuZmlsZUxvYWRpbmcuZmlsZUNhY2hlLCBsb2FkZXJzLCBsb2FkT3B0aW9ucylcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2soZmlsZSwgZmlsZUNhY2hlLCBsb2FkZXJzID0gW10sIGxvYWRPcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIExPQURfRklMRV9UQVNLKHtmaWxlLCBmaWxlQ2FjaGUsIGxvYWRlcnMsIGxvYWRPcHRpb25zfSkuYmltYXAoXG4gICAgLy8gcHJldHRpZXIgaWdub3JlXG4gICAgLy8gc3VjY2Vzc1xuICAgIGdlbiA9PlxuICAgICAgbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgIGdlbixcbiAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgb25GaW5pc2g6IHJlc3VsdCA9PlxuICAgICAgICAgIHByb2Nlc3NGaWxlQ29udGVudCh7XG4gICAgICAgICAgICBjb250ZW50OiByZXN1bHQsXG4gICAgICAgICAgICBmaWxlQ2FjaGVcbiAgICAgICAgICB9KVxuICAgICAgfSksXG5cbiAgICAvLyBlcnJvclxuICAgIGVyciA9PiBsb2FkRmlsZXNFcnIoZmlsZS5uYW1lLCBlcnIpXG4gICk7XG59XG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5wcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtjb250ZW50LCBmaWxlQ2FjaGV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3Qgc3RhdGVXaXRoUHJvZ3Jlc3MgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7cGVyY2VudDogMSwgbWVzc2FnZTogJ3Byb2Nlc3NpbmcuLi4nfVxuICB9KTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgUFJPQ0VTU19GSUxFX0RBVEEoe2NvbnRlbnQsIGZpbGVDYWNoZX0pLmJpbWFwKFxuICAgICAgcmVzdWx0ID0+IGxvYWRGaWxlU3RlcFN1Y2Nlc3Moe2ZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLCBmaWxlQ2FjaGU6IHJlc3VsdH0pLFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0Vycihjb250ZW50LmZpbGVOYW1lLCBlcnIpXG4gICAgKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmVzcyhwcmV2UHJvZ3Jlc3MgPSB7fSwgcHJvZ3Jlc3MpIHtcbiAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gcmVjZWl2aW5nIHF1ZXJ5IG1ldGFkYXRhIG9yIG90aGVyIGNhc2VzIHdlIGRvbid0XG4gIC8vIGhhdmUgYW4gdXBkYXRlIGZvciB0aGUgdXNlci5cbiAgaWYgKCFwcm9ncmVzcyB8fCAhcHJvZ3Jlc3MucGVyY2VudCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGVyY2VudDogcHJvZ3Jlc3MucGVyY2VudFxuICB9O1xufVxuXG4vKipcbiAqIGdldHMgY2FsbGVkIHdpdGggcGF5bG9hZCA9IEFzeW5jR2VuZXJhdG9yPD8/Pz5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5uZXh0RmlsZUJhdGNoVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG5leHRGaWxlQmF0Y2hVcGRhdGVyID0gKFxuICBzdGF0ZSxcbiAge3BheWxvYWQ6IHtnZW4sIGZpbGVOYW1lLCBwcm9ncmVzcywgYWNjdW11bGF0ZWQsIG9uRmluaXNofX1cbikgPT4ge1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHBhcnNlUHJvZ3Jlc3Moc3RhdGUuZmlsZUxvYWRpbmdQcm9ncmVzc1tmaWxlTmFtZV0sIHByb2dyZXNzKVxuICB9KTtcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aFByb2dyZXNzLFxuICAgIFVOV1JBUF9UQVNLKGdlbi5uZXh0KCkpLmJpbWFwKFxuICAgICAgKHt2YWx1ZSwgZG9uZX0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRvbmVcbiAgICAgICAgICA/IG9uRmluaXNoKGFjY3VtdWxhdGVkKVxuICAgICAgICAgIDogbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgICAgICAgIGdlbixcbiAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgIHByb2dyZXNzOiB2YWx1ZS5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgYWNjdW11bGF0ZWQ6IHZhbHVlLFxuICAgICAgICAgICAgICBvbkZpbmlzaFxuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0VycihmaWxlTmFtZSwgZXJyKVxuICAgIClcbiAgKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZXNFcnJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yLCBmaWxlTmFtZX0pID0+IHtcbiAgLy8gdXBkYXRlIHVpIHdpdGggZXJyb3IgbWVzc2FnZVxuICBDb25zb2xlLndhcm4oZXJyb3IpO1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZCwgb25GaW5pc2gsIGZpbGVDYWNoZX0gPSBzdGF0ZS5maWxlTG9hZGluZztcblxuICBjb25zdCBuZXh0U3RhdGUgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7ZXJyb3J9XG4gIH0pO1xuXG4gIC8vIGtpY2sgb2ZmIG5leHQgZmlsZSBvciBmaW5pc2hcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5leHRTdGF0ZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59O1xuXG4vKipcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYXBwbHlDUFVGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCB7ZGF0YUlkfSkgPT4ge1xuICAvLyBhcHBseSBjcHVGaWx0ZXJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICByZXR1cm4gZGF0YUlkcy5yZWR1Y2UoKGFjY3UsIGlkKSA9PiBmaWx0ZXJEYXRhc2V0Q1BVKGFjY3UsIGlkKSwgc3RhdGUpO1xufTtcblxuLyoqXG4gKiBVc2VyIGlucHV0IHRvIHVwZGF0ZSB0aGUgaW5mbyBvZiB0aGUgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0TWFwSW5mb1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwSW5mbzoge1xuICAgIC4uLnN0YXRlLm1hcEluZm8sXG4gICAgLi4uYWN0aW9uLmluZm9cbiAgfVxufSk7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgQWxsIGxheWVyIGRvbWFpbiBhbmQgbGF5ZXIgZGF0YSBvZiBzdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRGVmYXVsdExheWVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoc3RhdGUsIGRhdGFzZXRzKSB7XG4gIC8qKiBAdHlwZSB7TGF5ZXJbXX0gKi9cbiAgY29uc3QgZW1wdHkgPSBbXTtcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZSgoYWNjdSwgZGF0YXNldCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kTGF5ZXJzID0gZmluZERlZmF1bHRMYXllcihkYXRhc2V0LCBzdGF0ZS5sYXllckNsYXNzZXMpO1xuICAgIHJldHVybiBmb3VuZExheWVycyAmJiBmb3VuZExheWVycy5sZW5ndGggPyBhY2N1LmNvbmNhdChmb3VuZExheWVycykgOiBhY2N1O1xuICB9LCBlbXB0eSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIC4uLmRlZmF1bHRMYXllcnNdLFxuICAgICAgbGF5ZXJPcmRlcjogW1xuICAgICAgICAvLyBwdXQgbmV3IGxheWVycyBvbiB0b3Agb2Ygb2xkIG9uZXNcbiAgICAgICAgLi4uZGVmYXVsdExheWVycy5tYXAoKF8sIGkpID0+IHN0YXRlLmxheWVycy5sZW5ndGggKyBpKSxcbiAgICAgICAgLi4uc3RhdGUubGF5ZXJPcmRlclxuICAgICAgXVxuICAgIH0sXG4gICAgbmV3TGF5ZXJzOiBkZWZhdWx0TGF5ZXJzXG4gIH07XG59XG5cbi8qKlxuICogaGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgZGVmYXVsdCB0b29sdGlwc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VG9vbHRpcHMoc3RhdGUsIGRhdGFzZXQpIHtcbiAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IGZpbmRGaWVsZHNUb1Nob3coZGF0YXNldCk7XG4gIGNvbnN0IG1lcmdlZCA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3csXG4gICAgLi4udG9vbHRpcEZpZWxkc1xuICB9O1xuXG4gIHJldHVybiBzZXQoWydpbnRlcmFjdGlvbkNvbmZpZycsICd0b29sdGlwJywgJ2NvbmZpZycsICdmaWVsZHNUb1Nob3cnXSwgbWVyZ2VkLCBzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyhmaWxlLCBpbmRleCkge1xuICBjb25zdCBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCBgVW50aXRsZWQgRmlsZSAke2luZGV4fWA7XG4gIHJldHVybiB7XG4gICAgW2ZpbGVOYW1lXToge1xuICAgICAgLy8gcGVyY2VudCBvZiBjdXJyZW50IGZpbGVcbiAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge2ZpbGVOYW1lLCBwcm9ncmVzc30pIHtcbiAgcmV0dXJuIHBpY2tfKCdmaWxlTG9hZGluZ1Byb2dyZXNzJykocGlja18oZmlsZU5hbWUpKG1lcmdlXyhwcm9ncmVzcykpKShzdGF0ZSk7XG59XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgbGF5ZXIgZG9tYWlucyBmb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUFsbExheWVyRG9tYWluRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShzdGF0ZSwgZGF0YUlkLCB1cGRhdGVkRmlsdGVyKSB7XG4gIGNvbnN0IGRhdGFJZHMgPSB0eXBlb2YgZGF0YUlkID09PSAnc3RyaW5nJyA/IFtkYXRhSWRdIDogZGF0YUlkO1xuICBjb25zdCBuZXdMYXllcnMgPSBbXTtcbiAgY29uc3QgbmV3TGF5ZXJEYXRhID0gW107XG5cbiAgc3RhdGUubGF5ZXJzLmZvckVhY2goKG9sZExheWVyLCBpKSA9PiB7XG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cbiAgICAgIGNvbnN0IG5ld0xheWVyID1cbiAgICAgICAgdXBkYXRlZEZpbHRlciAmJiB1cGRhdGVkRmlsdGVyLmZpeGVkRG9tYWluXG4gICAgICAgICAgPyBvbGRMYXllclxuICAgICAgICAgIDogb2xkTGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMsIHVwZGF0ZWRGaWx0ZXIpO1xuXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBzdGF0ZS5sYXllckRhdGFbaV0pO1xuXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChsYXllckRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChzdGF0ZS5sYXllckRhdGFbaV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpIHtcbiAgLy8gbWVyZ2UgYWxsIGFuaW1hdGFibGUgbGF5ZXIgZG9tYWluIGFuZCB1cGRhdGUgZ2xvYmFsIGNvbmZpZ1xuICBjb25zdCBhbmltYXRhYmxlTGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICBsID0+XG4gICAgICBsLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIGwuY29uZmlnLmFuaW1hdGlvbiAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXG4gICk7XG5cbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1lcmdlZERvbWFpbiA9IGFuaW1hdGFibGVMYXllcnMucmVkdWNlKFxuICAgIChhY2N1LCBsYXllcikgPT4gW1xuICAgICAgTWF0aC5taW4oYWNjdVswXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzBdKSxcbiAgICAgIE1hdGgubWF4KGFjY3VbMV0sIGxheWVyLmFuaW1hdGlvbkRvbWFpblsxXSlcbiAgICBdLFxuICAgIFtOdW1iZXIoSW5maW5pdHkpLCAtSW5maW5pdHldXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIGN1cnJlbnRUaW1lOiBpc0luUmFuZ2Uoc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lLCBtZXJnZWREb21haW4pXG4gICAgICAgID8gc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lXG4gICAgICAgIDogbWVyZ2VkRG9tYWluWzBdLFxuICAgICAgZG9tYWluOiBtZXJnZWREb21haW5cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIGVkaXRvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEVkaXRvck1vZGVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0RWRpdG9yTW9kZVVwZGF0ZXIgPSAoc3RhdGUsIHttb2RlfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGVkaXRvcjoge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9XG59KTtcblxuLy8gY29uc3QgZmVhdHVyZVRvRmlsdGVyVmFsdWUgPSAoZmVhdHVyZSkgPT4gKHsuLi5mZWF0dXJlLCBpZDogZmVhdHVyZS5pZH0pO1xuLyoqXG4gKiBVcGRhdGUgZWRpdG9yIGZlYXR1cmVzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmVhdHVyZXNVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmVhdHVyZXNVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZXMgPSBbXX0pIHtcbiAgY29uc3QgbGFzdEZlYXR1cmUgPSBmZWF0dXJlcy5sZW5ndGggJiYgZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAvLyBvbmx5IHNhdmUgbm9uZSBmaWx0ZXIgZmVhdHVyZXMgdG8gZWRpdG9yXG4gICAgICBmZWF0dXJlczogZmVhdHVyZXMuZmlsdGVyKGYgPT4gIWdldEZpbHRlcklkSW5GZWF0dXJlKGYpKSxcbiAgICAgIG1vZGU6IGxhc3RGZWF0dXJlICYmIGxhc3RGZWF0dXJlLnByb3BlcnRpZXMuaXNDbG9zZWQgPyBFRElUT1JfTU9ERVMuRURJVCA6IHN0YXRlLmVkaXRvci5tb2RlXG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIGZlYXR1cmVcbiAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSBzdGF0ZS5lZGl0b3I7XG5cbiAgLy8gSWYgbm8gZmVhdHVyZSBpcyBzZWxlY3RlZCB3ZSBjYW4gc2ltcGx5IHJldHVybiBzaW5jZSBubyBvcGVyYXRpb25zXG4gIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGZlYXR1cmUgaGFzIGNoYW5nZWRcbiAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmUuaWQpO1xuXG4gIC8vIGlmIGZlYXR1cmUgaXMgcGFydCBvZiBhIGZpbHRlclxuICBjb25zdCBmaWx0ZXJJZCA9IGZlYXR1cmUgJiYgZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XG4gIGlmIChmaWx0ZXJJZCAmJiBmZWF0dXJlKSB7XG4gICAgY29uc3QgZmVhdHVyZVZhbHVlID0gZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVySWQpO1xuICAgIGNvbnN0IGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGZpbCA9PiBmaWwuaWQgPT09IGZpbHRlcklkKTtcbiAgICByZXR1cm4gc2V0RmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge1xuICAgICAgaWR4OiBmaWx0ZXJJZHgsXG4gICAgICBwcm9wOiAndmFsdWUnLFxuICAgICAgdmFsdWU6IGZlYXR1cmVWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzZWxlY3RlZCBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciA9IChzdGF0ZSwge2ZlYXR1cmV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZWRpdG9yOiB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogZmVhdHVyZVxuICB9XG59KTtcblxuLyoqXG4gKiBEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSBmcm9tIGZpbHRlcnNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5kZWxldGVGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZlYXR1cmVVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZX0pIHtcbiAgaWYgKCFmZWF0dXJlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgaWYgKGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKSB7XG4gICAgY29uc3QgZmlsdGVySWR4ID0gbmV3U3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVySWR4ID4gLTEgPyByZW1vdmVGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7aWR4OiBmaWx0ZXJJZHh9KSA6IG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gbW9kaWZ5IGVkaXRvciBvYmplY3RcbiAgY29uc3QgbmV3RWRpdG9yID0ge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiBuZXdFZGl0b3JcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgZmVhdHVyZSBhcyBsYXllciBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcihzdGF0ZSwgcGF5bG9hZCkge1xuICBjb25zdCB7bGF5ZXIsIGZlYXR1cmV9ID0gcGF5bG9hZDtcbiAgY29uc3QgZmlsdGVySWQgPSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKTtcblxuICAvLyBsZXQgbmV3RmlsdGVyID0gbnVsbDtcbiAgbGV0IGZpbHRlcklkeDtcbiAgbGV0IG5ld0xheWVySWQgPSBbbGF5ZXIuaWRdO1xuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgLy8gSWYgcG9seWdvbiBmaWx0ZXIgYWxyZWFkeSBleGlzdHMsIHdlIG5lZWQgdG8gZmluZCBvdXQgaWYgdGhlIGN1cnJlbnQgbGF5ZXIgaXMgYWxyZWFkeSBpbmNsdWRlZFxuICBpZiAoZmlsdGVySWQpIHtcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGZpbHRlcklkKTtcblxuICAgIGlmICghc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdKSB7XG4gICAgICAvLyB3aGF0IGlmIGZpbHRlciBkb2Vzbid0IGV4aXN0Py4uLiBub3QgcG9zc2libGUuXG4gICAgICAvLyBiZWNhdXNlIGZlYXR1cmVzIGluIHRoZSBlZGl0b3IgaXMgcGFzc2VkIGluIGZyb20gZmlsdGVycyBhbmQgZWRpdG9ycy5cbiAgICAgIC8vIGJ1dCB3ZSB3aWxsIG1vdmUgdGhpcyBmZWF0dXJlIGJhY2sgdG8gZWRpdG9yIGp1c3QgaW4gY2FzZVxuICAgICAgY29uc3Qgbm9uZUZpbHRlckZlYXR1cmUgPSB7XG4gICAgICAgIC4uLmZlYXR1cmUsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAuLi5mZWF0dXJlLnByb3BlcnRpZXMsXG4gICAgICAgICAgZmlsdGVySWQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgICBmZWF0dXJlczogWy4uLnN0YXRlLmVkaXRvci5mZWF0dXJlcywgbm9uZUZpbHRlckZlYXR1cmVdLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbm9uZUZpbHRlckZlYXR1cmVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdO1xuICAgIGNvbnN0IHtsYXllcklkID0gW119ID0gZmlsdGVyO1xuICAgIGNvbnN0IGlzTGF5ZXJJbmNsdWRlZCA9IGxheWVySWQuaW5jbHVkZXMobGF5ZXIuaWQpO1xuXG4gICAgbmV3TGF5ZXJJZCA9IGlzTGF5ZXJJbmNsdWRlZFxuICAgICAgPyAvLyBpZiBsYXllciBpcyBpbmNsdWRlZCwgcmVtb3ZlIGl0XG4gICAgICAgIGxheWVySWQuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIuaWQpXG4gICAgICA6IFsuLi5sYXllcklkLCBsYXllci5pZF07XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgd2UgaGF2ZW4ndCBjcmVhdGUgdGhlIHBvbHlnb24gZmlsdGVyLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdGaWx0ZXIgPSBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIoW10sIGZlYXR1cmUpO1xuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGZlYXR1cmUsIHJlbW92ZSBmZWF0dXJlIGZyb20gZWlkdG9yXG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBuZXdGaWx0ZXJdLFxuICAgICAgZWRpdG9yOiB7XG4gICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgZmVhdHVyZXM6IHN0YXRlLmVkaXRvci5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmLmlkICE9PSBmZWF0dXJlLmlkKSxcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBuZXdGaWx0ZXIudmFsdWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtcbiAgICBpZHg6IGZpbHRlcklkeCxcbiAgICBwcm9wOiAnbGF5ZXJJZCcsXG4gICAgdmFsdWU6IG5ld0xheWVySWRcbiAgfSk7XG59XG5cbi8qKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNvcnRUYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGVDb2x1bW5VcGRhdGVyKHN0YXRlLCB7ZGF0YUlkLCBjb2x1bW4sIG1vZGV9KSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgaWYgKCFtb2RlKSB7XG4gICAgY29uc3QgY3VycmVudE1vZGUgPSBnZXQoZGF0YXNldCwgWydzb3J0Q29sdW1uJywgY29sdW1uXSk7XG4gICAgbW9kZSA9IGN1cnJlbnRNb2RlXG4gICAgICA/IE9iamVjdC5rZXlzKFNPUlRfT1JERVIpLmZpbmQobSA9PiBtICE9PSBjdXJyZW50TW9kZSlcbiAgICAgIDogU09SVF9PUkRFUi5BU0NFTkRJTkc7XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBzb3J0RGF0YXNldEJ5Q29sdW1uKGRhdGFzZXQsIGNvbHVtbiwgbW9kZSk7XG4gIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIHNvcnRlZCwgc3RhdGUpO1xufVxuXG4vKipcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5waW5UYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaW5UYWJsZUNvbHVtblVwZGF0ZXIoc3RhdGUsIHtkYXRhSWQsIGNvbHVtbn0pIHtcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBmaWVsZCA9IGRhdGFzZXQuZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XG4gIGlmICghZmllbGQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBsZXQgcGlubmVkQ29sdW1ucztcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YXNldC5waW5uZWRDb2x1bW5zKSAmJiBkYXRhc2V0LnBpbm5lZENvbHVtbnMuaW5jbHVkZXMoZmllbGQubmFtZSkpIHtcbiAgICAvLyB1bnBpbiBpdFxuICAgIHBpbm5lZENvbHVtbnMgPSBkYXRhc2V0LnBpbm5lZENvbHVtbnMuZmlsdGVyKGNvID0+IGNvICE9PSBmaWVsZC5uYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBwaW5uZWRDb2x1bW5zID0gKGRhdGFzZXQucGlubmVkQ29sdW1ucyB8fCBbXSkuY29uY2F0KGZpZWxkLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkLCAncGlubmVkQ29sdW1ucyddLCBwaW5uZWRDb2x1bW5zLCBzdGF0ZSk7XG59XG5cbi8qKlxuICogQ29weSBjb2x1bW4gY29udGVudCBhcyBzdHJpbmdzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuY29weVRhYmxlQ29sdW1uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUYWJsZUNvbHVtblVwZGF0ZXIoc3RhdGUsIHtkYXRhSWQsIGNvbHVtbn0pIHtcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBmaWVsZElkeCA9IGRhdGFzZXQuZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gY29sdW1uKTtcbiAgaWYgKGZpZWxkSWR4IDwgMCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB7dHlwZX0gPSBkYXRhc2V0LmZpZWxkc1tmaWVsZElkeF07XG4gIGNvbnN0IHRleHQgPSBkYXRhc2V0LmFsbERhdGEubWFwKGQgPT4gcGFyc2VGaWVsZFZhbHVlKGRbZmllbGRJZHhdLCB0eXBlKSkuam9pbignXFxuJyk7XG5cbiAgY29weSh0ZXh0KTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGVkaXRvclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlcihzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgdmlzaWJsZTogIXN0YXRlLmVkaXRvci52aXNpYmxlXG4gICAgfVxuICB9O1xufVxuIl19