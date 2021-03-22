"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.mergeLayers = mergeLayers;
exports.insertLayerAtRightOrder = insertLayerAtRightOrder;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateColumn = validateColumn;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayerWithData = validateLayerWithData;
exports.isValidMerger = isValidMerger;
exports.VIS_STATE_MERGERS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.isequal"));

var _lodash4 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("../utils/utils");

var _filterUtils = require("../utils/filter-utils");

var _splitMapUtils = require("../utils/split-map-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _defaultSettings = require("../constants/default-settings");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeFilters}
 */
function mergeFilters(state, filtersToMerge) {
  var merged = [];
  var unmerged = [];
  var datasets = state.datasets;
  var updatedDatasets = datasets;

  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  } // merge filters


  filtersToMerge.forEach(function (filter) {
    // we can only look for datasets define in the filter dataId
    var datasetIds = (0, _utils.toArray)(filter.dataId); // we can merge a filter only if all datasets in filter.dataId are loaded

    if (datasetIds.every(function (d) {
      return datasets[d];
    })) {
      // all datasetIds in filter must be present the state datasets
      var _datasetIds$reduce = datasetIds.reduce(function (acc, datasetId) {
        var dataset = updatedDatasets[datasetId];
        var layers = state.layers.filter(function (l) {
          return l.config.dataId === dataset.id;
        });

        var _validateFilterWithDa = (0, _filterUtils.validateFilterWithData)(acc.augmentedDatasets[datasetId] || dataset, filter, layers),
            updatedFilter = _validateFilterWithDa.filter,
            updatedDataset = _validateFilterWithDa.dataset;

        if (updatedFilter) {
          return _objectSpread(_objectSpread({}, acc), {}, {
            // merge filter props
            filter: acc.filter ? _objectSpread(_objectSpread({}, acc.filter), (0, _filterUtils.mergeFilterDomainStep)(acc, updatedFilter)) : updatedFilter,
            applyToDatasets: [].concat((0, _toConsumableArray2["default"])(acc.applyToDatasets), [datasetId]),
            augmentedDatasets: _objectSpread(_objectSpread({}, acc.augmentedDatasets), {}, (0, _defineProperty2["default"])({}, datasetId, updatedDataset))
          });
        }

        return acc;
      }, {
        filter: null,
        applyToDatasets: [],
        augmentedDatasets: {}
      }),
          validatedFilter = _datasetIds$reduce.filter,
          applyToDatasets = _datasetIds$reduce.applyToDatasets,
          augmentedDatasets = _datasetIds$reduce.augmentedDatasets;

      if (validatedFilter && (0, _lodash3["default"])(datasetIds, applyToDatasets)) {
        merged.push(validatedFilter);
        updatedDatasets = _objectSpread(_objectSpread({}, updatedDatasets), augmentedDatasets);
      }
    } else {
      unmerged.push(filter);
    }
  }); // merge filter with existing

  var updatedFilters = [].concat((0, _toConsumableArray2["default"])(state.filters || []), merged);
  updatedFilters = (0, _gpuFilterUtils.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _gpuFilterUtils.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash4["default"])(merged.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _filterUtils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: updatedFilters,
    datasets: filtered,
    filterToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.filterToBeMerged), unmerged)
  });
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeLayers}
 */


function mergeLayers(state, layersToMerge, fromConfig) {
  var preserveLayerOrder = fromConfig ? layersToMerge.map(function (l) {
    return l.id;
  }) : state.preserveLayerOrder;
  var mergedLayer = [];
  var unmerged = [];
  var datasets = state.datasets;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }

  layersToMerge.forEach(function (layer) {
    var validateLayer;

    if (datasets[layer.config.dataId]) {
      // datasets are already loaded
      validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, state.layerClasses);
    }

    if (validateLayer) {
      mergedLayer.push(validateLayer);
    } else {
      // datasets not yet loaded
      unmerged.push(layer);
    }
  }); // put new layers in front of current layers

  var _insertLayerAtRightOr = insertLayerAtRightOrder(state.layers, mergedLayer, state.layerOrder, preserveLayerOrder),
      newLayerOrder = _insertLayerAtRightOr.newLayerOrder,
      newLayers = _insertLayerAtRightOr.newLayers;

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerOrder: newLayerOrder,
    preserveLayerOrder: preserveLayerOrder,
    layerToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.layerToBeMerged), unmerged)
  });
}

function insertLayerAtRightOrder(currentLayers, layersToInsert, currentOrder) {
  var preservedOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // perservedOrder ['a', 'b', 'c'];
  // layerOrder [1, 0, 3]
  // layerOrderMap ['a', 'c']
  var layerOrderQueue = currentOrder.map(function (i) {
    return currentLayers[i].id;
  });
  var newLayers = currentLayers;

  var _iterator = _createForOfIteratorHelper(layersToInsert),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var newLayer = _step.value;
      // find where to insert it
      var expectedIdx = preservedOrder.indexOf(newLayer.id); // if cant find place to insert, insert at the font

      var insertAt = 0;

      if (expectedIdx > 0) {
        // look for layer to insert after
        var i = expectedIdx + 1;
        var preceedIdx = null;

        while (i-- > 0 && preceedIdx === null) {
          var preceedLayer = preservedOrder[expectedIdx - 1];
          preceedIdx = layerOrderQueue.indexOf(preceedLayer);
        }

        if (preceedIdx > -1) {
          insertAt = preceedIdx + 1;
        }
      }

      layerOrderQueue = (0, _utils.arrayInsert)(layerOrderQueue, insertAt, newLayer.id);
      newLayers = newLayers.concat(newLayer);
    } // reconstruct layerOrder after insert

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newLayerOrder = layerOrderQueue.map(function (id) {
    return newLayers.findIndex(function (l) {
      return l.id === id;
    });
  });
  return {
    newLayerOrder: newLayerOrder,
    newLayers: newLayers
  };
}
/**
 * Merge interactions with saved config
 *
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeInteractions(state, interactionToBeMerged) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = state.interactionConfig[key].config;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, ["enabled"]);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread(_objectSpread({}, currentConfig.fieldsToShow), mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: enabled
          };
        }
      }

      merged[key] = _objectSpread(_objectSpread({}, state.interactionConfig[key]), {}, {
        enabled: enabled
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread(_objectSpread({}, currentConfig), configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: _objectSpread(_objectSpread({}, state.interactionConfig), merged),
    interactionToBeMerged: unmerged
  });
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    Object.entries(sm.layers).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          id = _ref3[0],
          value = _ref3[1];

      // check if layer exists
      var pushTo = state.layers.find(function (l) {
        return l.id === id;
      }) ? merged : unmerged; // create map panel if current map is not split

      pushTo[i] = pushTo[i] || {
        layers: pushTo === merged ? (0, _splitMapUtils.getInitialMapLayersForSplitMap)(state.layers) : []
      };
      pushTo[i].layers = _objectSpread(_objectSpread({}, pushTo[i].layers), {}, (0, _defineProperty2["default"])({}, id, value));
    });
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: merged,
    splitMapsToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.splitMapsToBeMerged), unmerged)
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param {object} state
 * @param {object} tooltipConfig
 * @return {object} - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (field) {
          return allFields.includes(field.name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 * @type {typeof import('./vis-state-merger').mergeLayerBlending}
 */


function mergeLayerBlending(state, layerBlending) {
  if (layerBlending && _defaultSettings.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 * @type {typeof import('./vis-state-merger').mergeAnimationConfig}
 */


function mergeAnimationConfig(state, animation) {
  if (animation && animation.currentTime) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread(_objectSpread({}, state.animationConfig), animation), {}, {
        domain: null
      })
    });
  }

  return state;
}
/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {Object} savedCols
 * @param {Object} emptyCols
 * @return {null | Object} - validated columns or null
 */


function validateSavedLayerColumns(fields) {
  var savedCols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emptyCols = arguments.length > 2 ? arguments[2] : undefined;
  // Prepare columns for the validator
  var columns = {};

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    columns[key] = _objectSpread({}, emptyCols[key]);
    var saved = savedCols[key];

    if (saved) {
      var fieldIdx = fields.findIndex(function (_ref4) {
        var name = _ref4.name;
        return name === saved;
      });

      if (fieldIdx > -1) {
        // update found columns
        columns[key].fieldIdx = fieldIdx;
        columns[key].value = saved;
      }
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(emptyCols); _i < _Object$keys.length; _i++) {
    _loop();
  } // find actual column fieldIdx, in case it has changed


  var allColFound = Object.keys(columns).every(function (key) {
    return validateColumn(columns[key], columns, fields);
  });

  if (allColFound) {
    return columns;
  }

  return null;
}

function validateColumn(column, columns, allFields) {
  if (column.optional || column.value) {
    return true;
  }

  if (column.validator) {
    return column.validator(column, columns, allFields);
  }

  return false;
}
/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} newLayer
 * @param {Object} savedLayer
 * @return {Object} - newLayer
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config[field]) {
      foundField = fields.find(function (fd) {
        return Object.keys(savedLayer.config[field]).every(function (prop) {
          return savedLayer.config[field][prop] === fd[prop];
        });
      });
    }

    var foundChannel = _objectSpread(_objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}), savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

    if (Object.keys(foundChannel).length) {
      newLayer.updateLayerConfig(foundChannel);
      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 * @type {typeof import('./vis-state-merger').validateLayerWithData}
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!layerClasses.hasOwnProperty(type) || !savedLayer.config || !savedLayer.config.columns) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden
  }); // find column fieldIdx

  var columnConfig = newLayer.getLayerColumns();

  if (Object.keys(columnConfig).length) {
    var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, columnConfig);

    if (columns) {
      newLayer.updateLayerConfig({
        columns: columns
      });
    } else if (!options.allowEmptyColumn) {
      return null;
    }
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}

function isValidMerger(merger) {
  return (0, _utils.isObject)(merger) && typeof merger.merge === 'function' && typeof merger.prop === 'string';
}

var VIS_STATE_MERGERS = [{
  merge: mergeLayers,
  prop: 'layers',
  toMergeProp: 'layerToBeMerged'
}, {
  merge: mergeFilters,
  prop: 'filters',
  toMergeProp: 'filterToBeMerged'
}, {
  merge: mergeInteractions,
  prop: 'interactionConfig',
  toMergeProp: 'interactionToBeMerged'
}, {
  merge: mergeLayerBlending,
  prop: 'layerBlending'
}, {
  merge: mergeSplitMaps,
  prop: 'splitMaps',
  toMergeProp: 'splitMapsToBeMerged'
}, {
  merge: mergeAnimationConfig,
  prop: 'animationConfig'
}];
exports.VIS_STATE_MERGERS = VIS_STATE_MERGERS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyLmpzIl0sIm5hbWVzIjpbIm1lcmdlRmlsdGVycyIsInN0YXRlIiwiZmlsdGVyc1RvTWVyZ2UiLCJtZXJnZWQiLCJ1bm1lcmdlZCIsImRhdGFzZXRzIiwidXBkYXRlZERhdGFzZXRzIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbHRlciIsImRhdGFzZXRJZHMiLCJkYXRhSWQiLCJldmVyeSIsImQiLCJyZWR1Y2UiLCJhY2MiLCJkYXRhc2V0SWQiLCJkYXRhc2V0IiwibGF5ZXJzIiwibCIsImNvbmZpZyIsImlkIiwiYXVnbWVudGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVyIiwidXBkYXRlZERhdGFzZXQiLCJhcHBseVRvRGF0YXNldHMiLCJ2YWxpZGF0ZWRGaWx0ZXIiLCJwdXNoIiwidXBkYXRlZEZpbHRlcnMiLCJmaWx0ZXJzIiwiZGF0YXNldHNUb0ZpbHRlciIsIm1hcCIsImYiLCJmaWx0ZXJlZCIsImZpbHRlclRvQmVNZXJnZWQiLCJtZXJnZUxheWVycyIsImxheWVyc1RvTWVyZ2UiLCJmcm9tQ29uZmlnIiwicHJlc2VydmVMYXllck9yZGVyIiwibWVyZ2VkTGF5ZXIiLCJsYXllciIsInZhbGlkYXRlTGF5ZXIiLCJ2YWxpZGF0ZUxheWVyV2l0aERhdGEiLCJsYXllckNsYXNzZXMiLCJpbnNlcnRMYXllckF0UmlnaHRPcmRlciIsImxheWVyT3JkZXIiLCJuZXdMYXllck9yZGVyIiwibmV3TGF5ZXJzIiwibGF5ZXJUb0JlTWVyZ2VkIiwiY3VycmVudExheWVycyIsImxheWVyc1RvSW5zZXJ0IiwiY3VycmVudE9yZGVyIiwicHJlc2VydmVkT3JkZXIiLCJsYXllck9yZGVyUXVldWUiLCJpIiwibmV3TGF5ZXIiLCJleHBlY3RlZElkeCIsImluZGV4T2YiLCJpbnNlcnRBdCIsInByZWNlZWRJZHgiLCJwcmVjZWVkTGF5ZXIiLCJjb25jYXQiLCJmaW5kSW5kZXgiLCJtZXJnZUludGVyYWN0aW9ucyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImN1cnJlbnRDb25maWciLCJlbmFibGVkIiwiY29uZmlnU2F2ZWQiLCJjb25maWdUb01lcmdlIiwibWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWciLCJtZXJnZWRUb29sdGlwIiwidW5tZXJnZWRUb29sdGlwIiwiZmllbGRzVG9TaG93IiwidG9vbHRpcCIsIm1lcmdlU3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic20iLCJlbnRyaWVzIiwidmFsdWUiLCJwdXNoVG8iLCJmaW5kIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsInRvb2x0aXBDb25maWciLCJhbGxGaWVsZHMiLCJmaWVsZHMiLCJuYW1lIiwiZm91bmRGaWVsZHNUb1Nob3ciLCJmaWVsZCIsImluY2x1ZGVzIiwibWVyZ2VMYXllckJsZW5kaW5nIiwibGF5ZXJCbGVuZGluZyIsIkxBWUVSX0JMRU5ESU5HUyIsIm1lcmdlQW5pbWF0aW9uQ29uZmlnIiwiYW5pbWF0aW9uIiwiY3VycmVudFRpbWUiLCJhbmltYXRpb25Db25maWciLCJkb21haW4iLCJ2YWxpZGF0ZVNhdmVkTGF5ZXJDb2x1bW5zIiwic2F2ZWRDb2xzIiwiZW1wdHlDb2xzIiwiY29sdW1ucyIsInNhdmVkIiwiZmllbGRJZHgiLCJhbGxDb2xGb3VuZCIsInZhbGlkYXRlQ29sdW1uIiwiY29sdW1uIiwib3B0aW9uYWwiLCJ2YWxpZGF0b3IiLCJ2YWxpZGF0ZVNhdmVkVGV4dExhYmVsIiwic2F2ZWRUZXh0TGFiZWwiLCJsYXllclRleHRMYWJlbCIsInNhdmVkVGV4dExhYmVscyIsInRleHRMYWJlbCIsImZkIiwiYWNjdSIsInZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVscyIsInNhdmVkTGF5ZXIiLCJ2YWx1ZXMiLCJ2aXN1YWxDaGFubmVscyIsInNjYWxlIiwiZm91bmRGaWVsZCIsInByb3AiLCJmb3VuZENoYW5uZWwiLCJ1cGRhdGVMYXllckNvbmZpZyIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsIm9wdGlvbnMiLCJ0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiaGlkZGVuIiwiY29sdW1uQ29uZmlnIiwiZ2V0TGF5ZXJDb2x1bW5zIiwiYWxsb3dFbXB0eUNvbHVtbiIsInZpc0NvbmZpZyIsImNvcHlMYXllckNvbmZpZyIsInNoYWxsb3dDb3B5IiwiaXNWYWxpZE1lcmdlciIsIm1lcmdlciIsIm1lcmdlIiwiVklTX1NUQVRFX01FUkdFUlMiLCJ0b01lcmdlUHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLGNBQTdCLEVBQTZDO0FBQ2xELE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBRmtELE1BRzNDQyxRQUgyQyxHQUcvQkosS0FIK0IsQ0FHM0NJLFFBSDJDO0FBSWxELE1BQUlDLGVBQWUsR0FBR0QsUUFBdEI7O0FBRUEsTUFBSSxDQUFDRSxLQUFLLENBQUNDLE9BQU4sQ0FBY04sY0FBZCxDQUFELElBQWtDLENBQUNBLGNBQWMsQ0FBQ08sTUFBdEQsRUFBOEQ7QUFDNUQsV0FBT1IsS0FBUDtBQUNELEdBUmlELENBVWxEOzs7QUFDQUMsRUFBQUEsY0FBYyxDQUFDUSxPQUFmLENBQXVCLFVBQUFDLE1BQU0sRUFBSTtBQUMvQjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxvQkFBUUQsTUFBTSxDQUFDRSxNQUFmLENBQW5CLENBRitCLENBSS9COztBQUNBLFFBQUlELFVBQVUsQ0FBQ0UsS0FBWCxDQUFpQixVQUFBQyxDQUFDO0FBQUEsYUFBSVYsUUFBUSxDQUFDVSxDQUFELENBQVo7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MjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcbmltcG9ydCBmbGF0dGVuRGVlcCBmcm9tICdsb2Rhc2guZmxhdHRlbmRlZXAnO1xuaW1wb3J0IHt0b0FycmF5LCBpc09iamVjdCwgYXJyYXlJbnNlcnR9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyxcbiAgbWVyZ2VGaWx0ZXJEb21haW5TdGVwLFxuICB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhXG59IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmltcG9ydCB7Z2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwfSBmcm9tICd1dGlscy9zcGxpdC1tYXAtdXRpbHMnO1xuaW1wb3J0IHtyZXNldEZpbHRlckdwdU1vZGUsIGFzc2lnbkdwdUNoYW5uZWxzfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcblxuaW1wb3J0IHtMQVlFUl9CTEVORElOR1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuLyoqXG4gKiBNZXJnZSBsb2FkZWQgZmlsdGVycyB3aXRoIGN1cnJlbnQgc3RhdGUsIGlmIG5vIGZpZWxkcyBvciBkYXRhIGFyZSBsb2FkZWRcbiAqIHNhdmUgaXQgZm9yIGxhdGVyXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlRmlsdGVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRmlsdGVycyhzdGF0ZSwgZmlsdGVyc1RvTWVyZ2UpIHtcbiAgY29uc3QgbWVyZ2VkID0gW107XG4gIGNvbnN0IHVubWVyZ2VkID0gW107XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcbiAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IGRhdGFzZXRzO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJzVG9NZXJnZSkgfHwgIWZpbHRlcnNUb01lcmdlLmxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8vIG1lcmdlIGZpbHRlcnNcbiAgZmlsdGVyc1RvTWVyZ2UuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgIC8vIHdlIGNhbiBvbmx5IGxvb2sgZm9yIGRhdGFzZXRzIGRlZmluZSBpbiB0aGUgZmlsdGVyIGRhdGFJZFxuICAgIGNvbnN0IGRhdGFzZXRJZHMgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xuXG4gICAgLy8gd2UgY2FuIG1lcmdlIGEgZmlsdGVyIG9ubHkgaWYgYWxsIGRhdGFzZXRzIGluIGZpbHRlci5kYXRhSWQgYXJlIGxvYWRlZFxuICAgIGlmIChkYXRhc2V0SWRzLmV2ZXJ5KGQgPT4gZGF0YXNldHNbZF0pKSB7XG4gICAgICAvLyBhbGwgZGF0YXNldElkcyBpbiBmaWx0ZXIgbXVzdCBiZSBwcmVzZW50IHRoZSBzdGF0ZSBkYXRhc2V0c1xuICAgICAgY29uc3Qge2ZpbHRlcjogdmFsaWRhdGVkRmlsdGVyLCBhcHBseVRvRGF0YXNldHMsIGF1Z21lbnRlZERhdGFzZXRzfSA9IGRhdGFzZXRJZHMucmVkdWNlKFxuICAgICAgICAoYWNjLCBkYXRhc2V0SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gdXBkYXRlZERhdGFzZXRzW2RhdGFzZXRJZF07XG4gICAgICAgICAgY29uc3QgbGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCA9PT0gZGF0YXNldC5pZCk7XG4gICAgICAgICAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogdXBkYXRlZERhdGFzZXR9ID0gdmFsaWRhdGVGaWx0ZXJXaXRoRGF0YShcbiAgICAgICAgICAgIGFjYy5hdWdtZW50ZWREYXRhc2V0c1tkYXRhc2V0SWRdIHx8IGRhdGFzZXQsXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBsYXllcnNcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHVwZGF0ZWRGaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgZmlsdGVyIHByb3BzXG4gICAgICAgICAgICAgIGZpbHRlcjogYWNjLmZpbHRlclxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAuLi5hY2MuZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAuLi5tZXJnZUZpbHRlckRvbWFpblN0ZXAoYWNjLCB1cGRhdGVkRmlsdGVyKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogdXBkYXRlZEZpbHRlcixcblxuICAgICAgICAgICAgICBhcHBseVRvRGF0YXNldHM6IFsuLi5hY2MuYXBwbHlUb0RhdGFzZXRzLCBkYXRhc2V0SWRdLFxuXG4gICAgICAgICAgICAgIGF1Z21lbnRlZERhdGFzZXRzOiB7XG4gICAgICAgICAgICAgICAgLi4uYWNjLmF1Z21lbnRlZERhdGFzZXRzLFxuICAgICAgICAgICAgICAgIFtkYXRhc2V0SWRdOiB1cGRhdGVkRGF0YXNldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXI6IG51bGwsXG4gICAgICAgICAgYXBwbHlUb0RhdGFzZXRzOiBbXSxcbiAgICAgICAgICBhdWdtZW50ZWREYXRhc2V0czoge31cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKHZhbGlkYXRlZEZpbHRlciAmJiBpc0VxdWFsKGRhdGFzZXRJZHMsIGFwcGx5VG9EYXRhc2V0cykpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2godmFsaWRhdGVkRmlsdGVyKTtcbiAgICAgICAgdXBkYXRlZERhdGFzZXRzID0ge1xuICAgICAgICAgIC4uLnVwZGF0ZWREYXRhc2V0cyxcbiAgICAgICAgICAuLi5hdWdtZW50ZWREYXRhc2V0c1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1bm1lcmdlZC5wdXNoKGZpbHRlcik7XG4gICAgfVxuICB9KTtcblxuICAvLyBtZXJnZSBmaWx0ZXIgd2l0aCBleGlzdGluZ1xuICBsZXQgdXBkYXRlZEZpbHRlcnMgPSBbLi4uKHN0YXRlLmZpbHRlcnMgfHwgW10pLCAuLi5tZXJnZWRdO1xuICB1cGRhdGVkRmlsdGVycyA9IHJlc2V0RmlsdGVyR3B1TW9kZSh1cGRhdGVkRmlsdGVycyk7XG4gIHVwZGF0ZWRGaWx0ZXJzID0gYXNzaWduR3B1Q2hhbm5lbHModXBkYXRlZEZpbHRlcnMpO1xuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBkYXRhc2V0c1RvRmlsdGVyID0gdW5pcShmbGF0dGVuRGVlcChtZXJnZWQubWFwKGYgPT4gZi5kYXRhSWQpKSk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKFxuICAgIGRhdGFzZXRzVG9GaWx0ZXIsXG4gICAgdXBkYXRlZERhdGFzZXRzLFxuICAgIHVwZGF0ZWRGaWx0ZXJzLFxuICAgIHN0YXRlLmxheWVyc1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogdXBkYXRlZEZpbHRlcnMsXG4gICAgZGF0YXNldHM6IGZpbHRlcmVkLFxuICAgIGZpbHRlclRvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5maWx0ZXJUb0JlTWVyZ2VkLCAuLi51bm1lcmdlZF1cbiAgfTtcbn1cblxuLyoqXG4gKiBNZXJnZSBsYXllcnMgZnJvbSBkZS1zZXJpYWxpemVkIHN0YXRlLCBpZiBubyBmaWVsZHMgb3IgZGF0YSBhcmUgbG9hZGVkXG4gKiBzYXZlIGl0IGZvciBsYXRlclxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1tZXJnZXInKS5tZXJnZUxheWVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJzKHN0YXRlLCBsYXllcnNUb01lcmdlLCBmcm9tQ29uZmlnKSB7XG4gIGNvbnN0IHByZXNlcnZlTGF5ZXJPcmRlciA9IGZyb21Db25maWcgPyBsYXllcnNUb01lcmdlLm1hcChsID0+IGwuaWQpIDogc3RhdGUucHJlc2VydmVMYXllck9yZGVyO1xuXG4gIGNvbnN0IG1lcmdlZExheWVyID0gW107XG4gIGNvbnN0IHVubWVyZ2VkID0gW107XG5cbiAgY29uc3Qge2RhdGFzZXRzfSA9IHN0YXRlO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShsYXllcnNUb01lcmdlKSB8fCAhbGF5ZXJzVG9NZXJnZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBsYXllcnNUb01lcmdlLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgIGxldCB2YWxpZGF0ZUxheWVyO1xuICAgIGlmIChkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSkge1xuICAgICAgLy8gZGF0YXNldHMgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgICB2YWxpZGF0ZUxheWVyID0gdmFsaWRhdGVMYXllcldpdGhEYXRhKFxuICAgICAgICBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSxcbiAgICAgICAgbGF5ZXIsXG4gICAgICAgIHN0YXRlLmxheWVyQ2xhc3Nlc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVMYXllcikge1xuICAgICAgbWVyZ2VkTGF5ZXIucHVzaCh2YWxpZGF0ZUxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGF0YXNldHMgbm90IHlldCBsb2FkZWRcbiAgICAgIHVubWVyZ2VkLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcHV0IG5ldyBsYXllcnMgaW4gZnJvbnQgb2YgY3VycmVudCBsYXllcnNcbiAgY29uc3Qge25ld0xheWVyT3JkZXIsIG5ld0xheWVyc30gPSBpbnNlcnRMYXllckF0UmlnaHRPcmRlcihcbiAgICBzdGF0ZS5sYXllcnMsXG4gICAgbWVyZ2VkTGF5ZXIsXG4gICAgc3RhdGUubGF5ZXJPcmRlcixcbiAgICBwcmVzZXJ2ZUxheWVyT3JkZXJcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBsYXllck9yZGVyOiBuZXdMYXllck9yZGVyLFxuICAgIHByZXNlcnZlTGF5ZXJPcmRlcixcbiAgICBsYXllclRvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5sYXllclRvQmVNZXJnZWQsIC4uLnVubWVyZ2VkXVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0TGF5ZXJBdFJpZ2h0T3JkZXIoXG4gIGN1cnJlbnRMYXllcnMsXG4gIGxheWVyc1RvSW5zZXJ0LFxuICBjdXJyZW50T3JkZXIsXG4gIHByZXNlcnZlZE9yZGVyID0gW11cbikge1xuICAvLyBwZXJzZXJ2ZWRPcmRlciBbJ2EnLCAnYicsICdjJ107XG4gIC8vIGxheWVyT3JkZXIgWzEsIDAsIDNdXG4gIC8vIGxheWVyT3JkZXJNYXAgWydhJywgJ2MnXVxuICBsZXQgbGF5ZXJPcmRlclF1ZXVlID0gY3VycmVudE9yZGVyLm1hcChpID0+IGN1cnJlbnRMYXllcnNbaV0uaWQpO1xuICBsZXQgbmV3TGF5ZXJzID0gY3VycmVudExheWVycztcblxuICBmb3IgKGNvbnN0IG5ld0xheWVyIG9mIGxheWVyc1RvSW5zZXJ0KSB7XG4gICAgLy8gZmluZCB3aGVyZSB0byBpbnNlcnQgaXRcbiAgICBjb25zdCBleHBlY3RlZElkeCA9IHByZXNlcnZlZE9yZGVyLmluZGV4T2YobmV3TGF5ZXIuaWQpO1xuICAgIC8vIGlmIGNhbnQgZmluZCBwbGFjZSB0byBpbnNlcnQsIGluc2VydCBhdCB0aGUgZm9udFxuICAgIGxldCBpbnNlcnRBdCA9IDA7XG5cbiAgICBpZiAoZXhwZWN0ZWRJZHggPiAwKSB7XG4gICAgICAvLyBsb29rIGZvciBsYXllciB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgIGxldCBpID0gZXhwZWN0ZWRJZHggKyAxO1xuICAgICAgbGV0IHByZWNlZWRJZHggPSBudWxsO1xuICAgICAgd2hpbGUgKGktLSA+IDAgJiYgcHJlY2VlZElkeCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcmVjZWVkTGF5ZXIgPSBwcmVzZXJ2ZWRPcmRlcltleHBlY3RlZElkeCAtIDFdO1xuICAgICAgICBwcmVjZWVkSWR4ID0gbGF5ZXJPcmRlclF1ZXVlLmluZGV4T2YocHJlY2VlZExheWVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWNlZWRJZHggPiAtMSkge1xuICAgICAgICBpbnNlcnRBdCA9IHByZWNlZWRJZHggKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxheWVyT3JkZXJRdWV1ZSA9IGFycmF5SW5zZXJ0KGxheWVyT3JkZXJRdWV1ZSwgaW5zZXJ0QXQsIG5ld0xheWVyLmlkKTtcbiAgICBuZXdMYXllcnMgPSBuZXdMYXllcnMuY29uY2F0KG5ld0xheWVyKTtcbiAgfVxuXG4gIC8vIHJlY29uc3RydWN0IGxheWVyT3JkZXIgYWZ0ZXIgaW5zZXJ0XG4gIGNvbnN0IG5ld0xheWVyT3JkZXIgPSBsYXllck9yZGVyUXVldWUubWFwKGlkID0+IG5ld0xheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBpZCkpO1xuXG4gIHJldHVybiB7XG4gICAgbmV3TGF5ZXJPcmRlcixcbiAgICBuZXdMYXllcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBNZXJnZSBpbnRlcmFjdGlvbnMgd2l0aCBzYXZlZCBjb25maWdcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VJbnRlcmFjdGlvbnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVyYWN0aW9ucyhzdGF0ZSwgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkKSB7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuICBjb25zdCB1bm1lcmdlZCA9IHt9O1xuXG4gIGlmIChpbnRlcmFjdGlvblRvQmVNZXJnZWQpIHtcbiAgICBPYmplY3Qua2V5cyhpbnRlcmFjdGlvblRvQmVNZXJnZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZztcblxuICAgICAgY29uc3Qge2VuYWJsZWQsIC4uLmNvbmZpZ1NhdmVkfSA9IGludGVyYWN0aW9uVG9CZU1lcmdlZFtrZXldIHx8IHt9O1xuICAgICAgbGV0IGNvbmZpZ1RvTWVyZ2UgPSBjb25maWdTYXZlZDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIGNvbnN0IHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9ID0gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoc3RhdGUsIGNvbmZpZ1NhdmVkKTtcblxuICAgICAgICAvLyBtZXJnZSBuZXcgZGF0YXNldCB0b29sdGlwcyB3aXRoIG9yaWdpbmFsIGRhdGFzZXQgdG9vbHRpcHNcbiAgICAgICAgY29uZmlnVG9NZXJnZSA9IHtcbiAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRDb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgLi4ubWVyZ2VkVG9vbHRpcFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXModW5tZXJnZWRUb29sdGlwKS5sZW5ndGgpIHtcbiAgICAgICAgICB1bm1lcmdlZC50b29sdGlwID0ge2ZpZWxkc1RvU2hvdzogdW5tZXJnZWRUb29sdGlwLCBlbmFibGVkfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZXJnZWRba2V5XSA9IHtcbiAgICAgICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XSxcbiAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgLi4uKGN1cnJlbnRDb25maWdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgY29uZmlnOiBwaWNrKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICAgICAgICAgICAgICAuLi5jb25maWdUb01lcmdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgIC4uLm1lcmdlZFxuICAgIH0sXG4gICAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bm1lcmdlZFxuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIHNwbGl0TWFwcyBjb25maWcgd2l0aCBjdXJyZW50IHZpc1N0ZXRlLlxuICogMS4gaWYgY3VycmVudCBtYXAgaXMgc3BsaXQsIGJ1dCBzcGxpdE1hcCBET0VTTk9UIGNvbnRhaW4gbWFwc1xuICogICAgOiBkb24ndCBtZXJnZSBhbnl0aGluZ1xuICogMi4gaWYgY3VycmVudCBtYXAgaXMgTk9UIHNwbGl0LCBidXQgc3BsaXRNYXBzIGNvbnRhaW4gbWFwc1xuICogICAgOiBhZGQgdG8gc3BsaXRNYXBzLCBhbmQgYWRkIGN1cnJlbnQgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlSW50ZXJhY3Rpb25zfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTcGxpdE1hcHMoc3RhdGUsIHNwbGl0TWFwcyA9IFtdKSB7XG4gIGNvbnN0IG1lcmdlZCA9IFsuLi5zdGF0ZS5zcGxpdE1hcHNdO1xuICBjb25zdCB1bm1lcmdlZCA9IFtdO1xuICBzcGxpdE1hcHMuZm9yRWFjaCgoc20sIGkpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhzbS5sYXllcnMpLmZvckVhY2goKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBsYXllciBleGlzdHNcbiAgICAgIGNvbnN0IHB1c2hUbyA9IHN0YXRlLmxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gaWQpID8gbWVyZ2VkIDogdW5tZXJnZWQ7XG5cbiAgICAgIC8vIGNyZWF0ZSBtYXAgcGFuZWwgaWYgY3VycmVudCBtYXAgaXMgbm90IHNwbGl0XG4gICAgICBwdXNoVG9baV0gPSBwdXNoVG9baV0gfHwge1xuICAgICAgICBsYXllcnM6IHB1c2hUbyA9PT0gbWVyZ2VkID8gZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwKHN0YXRlLmxheWVycykgOiBbXVxuICAgICAgfTtcbiAgICAgIHB1c2hUb1tpXS5sYXllcnMgPSB7XG4gICAgICAgIC4uLnB1c2hUb1tpXS5sYXllcnMsXG4gICAgICAgIFtpZF06IHZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogbWVyZ2VkLFxuICAgIHNwbGl0TWFwc1RvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5zcGxpdE1hcHNUb0JlTWVyZ2VkLCAuLi51bm1lcmdlZF1cbiAgfTtcbn1cblxuLyoqXG4gKiBNZXJnZSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwIHdpdGggc2F2ZWQgY29uZmlnLFxuICogdmFsaWRhdGUgZmllbGRzVG9TaG93XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gdG9vbHRpcENvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSAtIHttZXJnZWRUb29sdGlwOiB7fSwgdW5tZXJnZWRUb29sdGlwOiB7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnKHN0YXRlLCB0b29sdGlwQ29uZmlnID0ge30pIHtcbiAgY29uc3QgdW5tZXJnZWRUb29sdGlwID0ge307XG4gIGNvbnN0IG1lcmdlZFRvb2x0aXAgPSB7fTtcblxuICBpZiAoIXRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93IHx8ICFPYmplY3Qua2V5cyh0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9O1xuICB9XG5cbiAgZm9yIChjb25zdCBkYXRhSWQgaW4gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cpIHtcbiAgICBpZiAoIXN0YXRlLmRhdGFzZXRzW2RhdGFJZF0pIHtcbiAgICAgIC8vIGlzIG5vdCB5ZXQgbG9hZGVkXG4gICAgICB1bm1lcmdlZFRvb2x0aXBbZGF0YUlkXSA9IHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGRhdGFzZXQgaXMgbG9hZGVkXG4gICAgICBjb25zdCBhbGxGaWVsZHMgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdLmZpZWxkcy5tYXAoZCA9PiBkLm5hbWUpO1xuICAgICAgY29uc3QgZm91bmRGaWVsZHNUb1Nob3cgPSB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdLmZpbHRlcihmaWVsZCA9PlxuICAgICAgICBhbGxGaWVsZHMuaW5jbHVkZXMoZmllbGQubmFtZSlcbiAgICAgICk7XG5cbiAgICAgIG1lcmdlZFRvb2x0aXBbZGF0YUlkXSA9IGZvdW5kRmllbGRzVG9TaG93O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7bWVyZ2VkVG9vbHRpcCwgdW5tZXJnZWRUb29sdGlwfTtcbn1cbi8qKlxuICogTWVyZ2UgbGF5ZXJCbGVuZGluZyB3aXRoIHNhdmVkXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlTGF5ZXJCbGVuZGluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJCbGVuZGluZyhzdGF0ZSwgbGF5ZXJCbGVuZGluZykge1xuICBpZiAobGF5ZXJCbGVuZGluZyAmJiBMQVlFUl9CTEVORElOR1NbbGF5ZXJCbGVuZGluZ10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllckJsZW5kaW5nXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBNZXJnZSBhbmltYXRpb24gY29uZmlnXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VBbmltYXRpb25Db25maWd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFuaW1hdGlvbkNvbmZpZyhzdGF0ZSwgYW5pbWF0aW9uKSB7XG4gIGlmIChhbmltYXRpb24gJiYgYW5pbWF0aW9uLmN1cnJlbnRUaW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgICAgLi4uYW5pbWF0aW9uLFxuICAgICAgICBkb21haW46IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIGxheWVyIGNvbHVtbnMgd2l0aCBuZXcgZGF0YSxcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZENvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbXB0eUNvbHNcbiAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IC0gdmFsaWRhdGVkIGNvbHVtbnMgb3IgbnVsbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkTGF5ZXJDb2x1bW5zKGZpZWxkcywgc2F2ZWRDb2xzID0ge30sIGVtcHR5Q29scykge1xuICAvLyBQcmVwYXJlIGNvbHVtbnMgZm9yIHRoZSB2YWxpZGF0b3JcbiAgY29uc3QgY29sdW1ucyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhlbXB0eUNvbHMpKSB7XG4gICAgY29sdW1uc1trZXldID0gey4uLmVtcHR5Q29sc1trZXldfTtcblxuICAgIGNvbnN0IHNhdmVkID0gc2F2ZWRDb2xzW2tleV07XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICBjb25zdCBmaWVsZElkeCA9IGZpZWxkcy5maW5kSW5kZXgoKHtuYW1lfSkgPT4gbmFtZSA9PT0gc2F2ZWQpO1xuXG4gICAgICBpZiAoZmllbGRJZHggPiAtMSkge1xuICAgICAgICAvLyB1cGRhdGUgZm91bmQgY29sdW1uc1xuICAgICAgICBjb2x1bW5zW2tleV0uZmllbGRJZHggPSBmaWVsZElkeDtcbiAgICAgICAgY29sdW1uc1trZXldLnZhbHVlID0gc2F2ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhY3R1YWwgY29sdW1uIGZpZWxkSWR4LCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXG4gIGNvbnN0IGFsbENvbEZvdW5kID0gT2JqZWN0LmtleXMoY29sdW1ucykuZXZlcnkoa2V5ID0+XG4gICAgdmFsaWRhdGVDb2x1bW4oY29sdW1uc1trZXldLCBjb2x1bW5zLCBmaWVsZHMpXG4gICk7XG5cbiAgaWYgKGFsbENvbEZvdW5kKSB7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgY29sdW1ucywgYWxsRmllbGRzKSB7XG4gIGlmIChjb2x1bW4ub3B0aW9uYWwgfHwgY29sdW1uLnZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGNvbHVtbi52YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gY29sdW1uLnZhbGlkYXRvcihjb2x1bW4sIGNvbHVtbnMsIGFsbEZpZWxkcyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIHRleHQgbGFiZWwgY29uZmlnIHdpdGggbmV3IGRhdGFcbiAqIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVGV4dExhYmVsU2NoZW1hVjFcbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkVGV4dExhYmVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdmFsaWRhdGVkIHRleHRsYWJlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIFtsYXllclRleHRMYWJlbF0sIHNhdmVkVGV4dExhYmVsKSB7XG4gIGNvbnN0IHNhdmVkVGV4dExhYmVscyA9IEFycmF5LmlzQXJyYXkoc2F2ZWRUZXh0TGFiZWwpID8gc2F2ZWRUZXh0TGFiZWwgOiBbc2F2ZWRUZXh0TGFiZWxdO1xuXG4gIC8vIHZhbGlkYXRlIGZpZWxkXG4gIHJldHVybiBzYXZlZFRleHRMYWJlbHMubWFwKHRleHRMYWJlbCA9PiB7XG4gICAgY29uc3QgZmllbGQgPSB0ZXh0TGFiZWwuZmllbGRcbiAgICAgID8gZmllbGRzLmZpbmQoZmQgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyh0ZXh0TGFiZWwuZmllbGQpLmV2ZXJ5KGtleSA9PiB0ZXh0TGFiZWwuZmllbGRba2V5XSA9PT0gZmRba2V5XSlcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxheWVyVGV4dExhYmVsKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XToga2V5ID09PSAnZmllbGQnID8gZmllbGQgOiB0ZXh0TGFiZWxba2V5XSB8fCBsYXllclRleHRMYWJlbFtrZXldXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgdmlzdWFsIGNoYW5uZWxzIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IG5ld0xheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gc2F2ZWRMYXllclxuICogQHJldHVybiB7T2JqZWN0fSAtIG5ld0xheWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMoZmllbGRzLCBuZXdMYXllciwgc2F2ZWRMYXllcikge1xuICBPYmplY3QudmFsdWVzKG5ld0xheWVyLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKCh7ZmllbGQsIHNjYWxlLCBrZXl9KSA9PiB7XG4gICAgbGV0IGZvdW5kRmllbGQ7XG4gICAgaWYgKHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXSkge1xuICAgICAgZm91bmRGaWVsZCA9IGZpZWxkcy5maW5kKGZkID0+XG4gICAgICAgIE9iamVjdC5rZXlzKHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXSkuZXZlcnkoXG4gICAgICAgICAgcHJvcCA9PiBzYXZlZExheWVyLmNvbmZpZ1tmaWVsZF1bcHJvcF0gPT09IGZkW3Byb3BdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZm91bmRDaGFubmVsID0ge1xuICAgICAgLi4uKGZvdW5kRmllbGQgPyB7W2ZpZWxkXTogZm91bmRGaWVsZH0gOiB7fSksXG4gICAgICAuLi4oc2F2ZWRMYXllci5jb25maWdbc2NhbGVdID8ge1tzY2FsZV06IHNhdmVkTGF5ZXIuY29uZmlnW3NjYWxlXX0gOiB7fSlcbiAgICB9O1xuICAgIGlmIChPYmplY3Qua2V5cyhmb3VuZENoYW5uZWwpLmxlbmd0aCkge1xuICAgICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoZm91bmRDaGFubmVsKTtcbiAgICAgIG5ld0xheWVyLnZhbGlkYXRlVmlzdWFsQ2hhbm5lbChrZXkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdMYXllcjtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBzYXZlZCBsYXllciBjb25maWcgd2l0aCBuZXcgZGF0YSxcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykudmFsaWRhdGVMYXllcldpdGhEYXRhfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMYXllcldpdGhEYXRhKFxuICB7ZmllbGRzLCBpZDogZGF0YUlkfSxcbiAgc2F2ZWRMYXllcixcbiAgbGF5ZXJDbGFzc2VzLFxuICBvcHRpb25zID0ge31cbikge1xuICBjb25zdCB7dHlwZX0gPSBzYXZlZExheWVyO1xuICAvLyBsYXllciBkb2VzbnQgaGF2ZSBhIHZhbGlkIHR5cGVcbiAgaWYgKCFsYXllckNsYXNzZXMuaGFzT3duUHJvcGVydHkodHlwZSkgfHwgIXNhdmVkTGF5ZXIuY29uZmlnIHx8ICFzYXZlZExheWVyLmNvbmZpZy5jb2x1bW5zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbmV3TGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW3R5cGVdKHtcbiAgICBpZDogc2F2ZWRMYXllci5pZCxcbiAgICBkYXRhSWQsXG4gICAgbGFiZWw6IHNhdmVkTGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgIGNvbG9yOiBzYXZlZExheWVyLmNvbmZpZy5jb2xvcixcbiAgICBpc1Zpc2libGU6IHNhdmVkTGF5ZXIuY29uZmlnLmlzVmlzaWJsZSxcbiAgICBoaWRkZW46IHNhdmVkTGF5ZXIuY29uZmlnLmhpZGRlblxuICB9KTtcblxuICAvLyBmaW5kIGNvbHVtbiBmaWVsZElkeFxuICBjb25zdCBjb2x1bW5Db25maWcgPSBuZXdMYXllci5nZXRMYXllckNvbHVtbnMoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNvbHVtbkNvbmZpZykubGVuZ3RoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMoZmllbGRzLCBzYXZlZExheWVyLmNvbmZpZy5jb2x1bW5zLCBjb2x1bW5Db25maWcpO1xuICAgIGlmIChjb2x1bW5zKSB7XG4gICAgICBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyh7Y29sdW1uc30pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuYWxsb3dFbXB0eUNvbHVtbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gdmlzdWFsIGNoYW5uZWwgZmllbGQgaXMgc2F2ZWQgdG8gYmUge25hbWUsIHR5cGV9XG4gIC8vIGZpbmQgdmlzdWFsIGNoYW5uZWwgZmllbGQgYnkgbWF0Y2hpbmcgYm90aCBuYW1lIGFuZCB0eXBlXG4gIC8vIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gIG5ld0xheWVyID0gdmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzKGZpZWxkcywgbmV3TGF5ZXIsIHNhdmVkTGF5ZXIpO1xuXG4gIGNvbnN0IHRleHRMYWJlbCA9XG4gICAgc2F2ZWRMYXllci5jb25maWcudGV4dExhYmVsICYmIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWxcbiAgICAgID8gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWwsIHNhdmVkTGF5ZXIuY29uZmlnLnRleHRMYWJlbClcbiAgICAgIDogbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbDtcblxuICAvLyBjb3B5IHZpc0NvbmZpZyBvdmVyIHRvIGVtcHR5TGF5ZXIgdG8gbWFrZSBzdXJlIGl0IGhhcyBhbGwgdGhlIHByb3BzXG4gIGNvbnN0IHZpc0NvbmZpZyA9IG5ld0xheWVyLmNvcHlMYXllckNvbmZpZyhcbiAgICBuZXdMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZyB8fCB7fSxcbiAgICB7c2hhbGxvd0NvcHk6IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ119XG4gICk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgIHZpc0NvbmZpZyxcbiAgICB0ZXh0TGFiZWxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZE1lcmdlcihtZXJnZXIpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG1lcmdlcikgJiYgdHlwZW9mIG1lcmdlci5tZXJnZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgbWVyZ2VyLnByb3AgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgY29uc3QgVklTX1NUQVRFX01FUkdFUlMgPSBbXG4gIHttZXJnZTogbWVyZ2VMYXllcnMsIHByb3A6ICdsYXllcnMnLCB0b01lcmdlUHJvcDogJ2xheWVyVG9CZU1lcmdlZCd9LFxuICB7bWVyZ2U6IG1lcmdlRmlsdGVycywgcHJvcDogJ2ZpbHRlcnMnLCB0b01lcmdlUHJvcDogJ2ZpbHRlclRvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUludGVyYWN0aW9ucywgcHJvcDogJ2ludGVyYWN0aW9uQ29uZmlnJywgdG9NZXJnZVByb3A6ICdpbnRlcmFjdGlvblRvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUxheWVyQmxlbmRpbmcsIHByb3A6ICdsYXllckJsZW5kaW5nJ30sXG4gIHttZXJnZTogbWVyZ2VTcGxpdE1hcHMsIHByb3A6ICdzcGxpdE1hcHMnLCB0b01lcmdlUHJvcDogJ3NwbGl0TWFwc1RvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUFuaW1hdGlvbkNvbmZpZywgcHJvcDogJ2FuaW1hdGlvbkNvbmZpZyd9XG5dO1xuIl19