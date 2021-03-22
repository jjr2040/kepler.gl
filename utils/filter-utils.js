"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultFilter = getDefaultFilter;
exports.shouldApplyFilter = shouldApplyFilter;
exports.validatePolygonFilter = validatePolygonFilter;
exports.validateFilter = validateFilter;
exports.validateFilterWithData = validateFilterWithData;
exports.getFilterProps = getFilterProps;
exports.getFieldDomain = getFieldDomain;
exports.getFilterFunction = getFilterFunction;
exports.updateFilterDataId = updateFilterDataId;
exports.filterDataset = filterDataset;
exports.filterDataByFilterTypes = filterDataByFilterTypes;
exports.getFilterRecord = getFilterRecord;
exports.diffFilters = diffFilters;
exports.adjustValueToFilterDomain = adjustValueToFilterDomain;
exports.getNumericFieldDomain = getNumericFieldDomain;
exports.getNumericStepSize = getNumericStepSize;
exports.getTimestampFieldDomain = getTimestampFieldDomain;
exports.histogramConstruct = histogramConstruct;
exports.getHistogram = getHistogram;
exports.formatNumberByStep = formatNumberByStep;
exports.isInRange = isInRange;
exports.isInPolygon = isInPolygon;
exports.getTimeWidgetTitleFormatter = getTimeWidgetTitleFormatter;
exports.getTimeWidgetHintFormatter = getTimeWidgetHintFormatter;
exports.isValidFilterValue = isValidFilterValue;
exports.getFilterPlot = getFilterPlot;
exports.getDefaultFilterPlotType = getDefaultFilterPlotType;
exports.applyFiltersToDatasets = applyFiltersToDatasets;
exports.applyFilterFieldName = applyFilterFieldName;
exports.mergeFilterDomainStep = mergeFilterDomainStep;
exports.generatePolygonFilter = generatePolygonFilter;
exports.filterDatasetCPU = filterDatasetCPU;
exports.getFilterIdInFeature = exports.featureToFilterValue = exports.getPolygonFilterFunctor = exports.LAYER_FILTERS = exports.FILTER_ID_LENGTH = exports.DEFAULT_FILTER_STRUCTURE = exports.FILTER_COMPONENTS = exports.LIMITED_FILTER_EFFECT_PROPS = exports.FILTER_UPDATER_PROPS = exports.PLOT_TYPES = exports.enlargedHistogramBins = exports.histogramBins = exports.TimestampStepMap = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Array = require("d3-array");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));

var _helpers = require("@turf/helpers");

var _decimal = require("decimal.js");

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var ScaleUtils = _interopRequireWildcard(require("./data-scale-utils"));

var _types = require("../layers/types");

var _utils = require("./utils");

var _gpuFilterUtils = require("./gpu-filter-utils");

var _h3Utils = require("../layers/h3-hexagon-layer/h3-utils");

var _FILTER_TYPES$timeRan, _FILTER_TYPES$range, _SupportedPlotType, _FILTER_COMPONENTS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TYPE

/** @typedef {import('../reducers/vis-state-updaters').FilterRecord} FilterRecord */

/** @typedef {import('./filter-utils').FilterResult} FilterResult */
var TimestampStepMap = [{
  max: 1,
  step: 0.05
}, {
  max: 10,
  step: 0.1
}, {
  max: 100,
  step: 1
}, {
  max: 500,
  step: 5
}, {
  max: 1000,
  step: 10
}, {
  max: 5000,
  step: 50
}, {
  max: Number.POSITIVE_INFINITY,
  step: 1000
}];
exports.TimestampStepMap = TimestampStepMap;
var histogramBins = 30;
exports.histogramBins = histogramBins;
var enlargedHistogramBins = 100;
exports.enlargedHistogramBins = enlargedHistogramBins;
var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationYear = durationDay * 365;
var PLOT_TYPES = (0, _keymirror["default"])({
  histogram: null,
  lineChart: null
});
exports.PLOT_TYPES = PLOT_TYPES;
var FILTER_UPDATER_PROPS = (0, _keymirror["default"])({
  dataId: null,
  name: null,
  layerId: null
});
exports.FILTER_UPDATER_PROPS = FILTER_UPDATER_PROPS;
var LIMITED_FILTER_EFFECT_PROPS = (0, _keymirror["default"])((0, _defineProperty2["default"])({}, FILTER_UPDATER_PROPS.name, null));
/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.LIMITED_FILTER_EFFECT_PROPS = LIMITED_FILTER_EFFECT_PROPS;
var SupportedPlotType = (_SupportedPlotType = {}, (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.timeRange, (_FILTER_TYPES$timeRan = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$timeRan)), (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.range, (_FILTER_TYPES$range = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$range)), _SupportedPlotType);
var FILTER_COMPONENTS = (_FILTER_COMPONENTS = {}, (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.select, 'SingleSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.multiSelect, 'MultiSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.timeRange, 'TimeRangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.range, 'RangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.polygon, 'PolygonFilter'), _FILTER_COMPONENTS);
exports.FILTER_COMPONENTS = FILTER_COMPONENTS;
var DEFAULT_FILTER_STRUCTURE = {
  dataId: [],
  // [string]
  freeze: false,
  id: null,
  // time range filter specific
  fixedDomain: false,
  enlarged: false,
  isAnimating: false,
  animationWindow: _defaultSettings.ANIMATION_WINDOW.free,
  speed: 1,
  // field specific
  name: [],
  // string
  type: null,
  fieldIdx: [],
  // [integer]
  domain: null,
  value: null,
  // plot
  plotType: PLOT_TYPES.histogram,
  yAxis: null,
  interval: null,
  // mode
  gpu: false
};
exports.DEFAULT_FILTER_STRUCTURE = DEFAULT_FILTER_STRUCTURE;
var FILTER_ID_LENGTH = 4;
exports.FILTER_ID_LENGTH = FILTER_ID_LENGTH;
var LAYER_FILTERS = [_defaultSettings.FILTER_TYPES.polygon];
/**
 * Generates a filter with a dataset id as dataId
 * @type {typeof import('./filter-utils').getDefaultFilter}
 */

exports.LAYER_FILTERS = LAYER_FILTERS;

function getDefaultFilter(dataId) {
  return _objectSpread(_objectSpread({}, DEFAULT_FILTER_STRUCTURE), {}, {
    // store it as dataId and it could be one or many
    dataId: (0, _utils.toArray)(dataId),
    id: (0, _utils.generateHashId)(FILTER_ID_LENGTH)
  });
}
/**
 * Check if a filter is valid based on the given dataId
 * @param  filter to validate
 * @param  datasetId id to validate filter against
 * @return true if a filter is valid, false otherwise
 * @type {typeof import('./filter-utils').shouldApplyFilter}
 */


function shouldApplyFilter(filter, datasetId) {
  var dataIds = (0, _utils.toArray)(filter.dataId);
  return dataIds.includes(datasetId) && filter.value !== null;
}
/**
 * Validates and modifies polygon filter structure
 * @param dataset
 * @param filter
 * @param layers
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validatePolygonFilter}
 */


function validatePolygonFilter(dataset, filter, layers) {
  var failed = {
    dataset: dataset,
    filter: null
  };
  var value = filter.value,
      layerId = filter.layerId,
      type = filter.type,
      dataId = filter.dataId;

  if (!layerId || !isValidFilterValue(type, value)) {
    return failed;
  }

  var isValidDataset = dataId.includes(dataset.id);

  if (!isValidDataset) {
    return failed;
  }

  var layer = layers.find(function (l) {
    return layerId.includes(l.id);
  });

  if (!layer) {
    return failed;
  }

  return {
    filter: _objectSpread(_objectSpread({}, filter), {}, {
      freeze: true,
      fieldIdx: []
    }),
    dataset: dataset
  };
}
/**
 * Custom filter validators
 */


var filterValidators = (0, _defineProperty2["default"])({}, _defaultSettings.FILTER_TYPES.polygon, validatePolygonFilter);
/**
 * Default validate filter function
 * @param dataset
 * @param filter
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validateFilter}
 */

function validateFilter(dataset, filter) {
  // match filter.dataId
  var failed = {
    dataset: dataset,
    filter: null
  };
  var filterDataId = (0, _utils.toArray)(filter.dataId);
  var filterDatasetIndex = filterDataId.indexOf(dataset.id);

  if (filterDatasetIndex < 0) {
    // the current filter is not mapped against the current dataset
    return failed;
  }

  var initializeFilter = _objectSpread(_objectSpread(_objectSpread({}, getDefaultFilter(filter.dataId)), filter), {}, {
    dataId: filterDataId,
    name: (0, _utils.toArray)(filter.name)
  });

  var fieldName = initializeFilter.name[filterDatasetIndex];

  var _applyFilterFieldName = applyFilterFieldName(initializeFilter, dataset, fieldName, filterDatasetIndex, {
    mergeDomain: true
  }),
      updatedFilter = _applyFilterFieldName.filter,
      updatedDataset = _applyFilterFieldName.dataset;

  if (!updatedFilter) {
    return failed;
  }

  updatedFilter.value = adjustValueToFilterDomain(filter.value, updatedFilter);
  updatedFilter.enlarged = typeof filter.enlarged === 'boolean' ? filter.enlarged : updatedFilter.enlarged;

  if (updatedFilter.value === null) {
    // cannot adjust saved value to filter
    return failed;
  }

  return {
    filter: validateFilterYAxis(updatedFilter, updatedDataset),
    dataset: updatedDataset
  };
}
/**
 * Validate saved filter config with new data,
 * calculate domain and fieldIdx based new fields and data
 *
 * @param dataset
 * @param filter - filter to be validate
 * @param layers - layers
 * @return validated filter
 * @type {typeof import('./filter-utils').validateFilterWithData}
 */


function validateFilterWithData(dataset, filter, layers) {
  // @ts-ignore
  return filterValidators.hasOwnProperty(filter.type) ? filterValidators[filter.type](dataset, filter, layers) : validateFilter(dataset, filter);
}
/**
 * Validate YAxis
 * @param filter
 * @param dataset
 * @return {*}
 */


function validateFilterYAxis(filter, dataset) {
  // TODO: validate yAxis against other datasets
  var fields = dataset.fields,
      allData = dataset.allData;
  var _filter = filter,
      yAxis = _filter.yAxis; // TODO: validate yAxis against other datasets

  if (yAxis) {
    var matchedAxis = fields.find(function (_ref) {
      var name = _ref.name,
          type = _ref.type;
      return name === yAxis.name && type === yAxis.type;
    });
    filter = matchedAxis ? _objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }, getFilterPlot(_objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }), allData)) : filter;
  }

  return filter;
}
/**
 * Get default filter prop based on field type
 *
 * @param allData
 * @param field
 * @returns default filter
 * @type {typeof import('./filter-utils').getFilterProps}
 */


function getFilterProps(allData, field) {
  var filterProps = _objectSpread(_objectSpread({}, getFieldDomain(allData, field)), {}, {
    fieldType: field.type
  });

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        value: filterProps.domain,
        type: _defaultSettings.FILTER_TYPES.range,
        typeOptions: [_defaultSettings.FILTER_TYPES.range],
        gpu: true
      });

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.select,
        value: true,
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.multiSelect,
        value: [],
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.timeRange,
        enlarged: true,
        fixedDomain: true,
        value: filterProps.domain,
        gpu: true
      });

    default:
      return {};
  }
}
/**
 * Calculate field domain based on field type and data
 *
 * @type {typeof import('./filter-utils').getFieldDomain}
 */


function getFieldDomain(allData, field) {
  var fieldIdx = field.tableFieldIndex - 1;
  var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

  var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

  var domain;

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      // calculate domain and step
      return getNumericFieldDomain(allData, valueAccessor);

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return {
        domain: [true, false]
      };

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      domain = ScaleUtils.getOrdinalDomain(allData, valueAccessor);
      return {
        domain: domain
      };

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return getTimestampFieldDomain(allData, valueAccessor);

    default:
      return {
        domain: ScaleUtils.getOrdinalDomain(allData, valueAccessor)
      };
  }
}

var getPolygonFilterFunctor = function getPolygonFilterFunctor(layer, filter) {
  var getPosition = layer.getPositionAccessor();

  switch (layer.type) {
    case _types.LAYER_TYPES.point:
    case _types.LAYER_TYPES.icon:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    case _types.LAYER_TYPES.arc:
    case _types.LAYER_TYPES.line:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && [[pos[0], pos[1]], [pos[3], pos[4]]].every(function (point) {
          return isInPolygon(point, filter.value);
        });
      };

    case _types.LAYER_TYPES.hexagonId:
      if (layer.dataToFeature && layer.dataToFeature.centroids) {
        return function (data, index) {
          // null or getCentroid({id})
          var centroid = layer.dataToFeature.centroids[index];
          return centroid && isInPolygon(centroid, filter.value);
        };
      }

      return function (data) {
        var id = getPosition({
          data: data
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return false;
        }

        var pos = (0, _h3Utils.getCentroid)({
          id: id
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    default:
      return function () {
        return true;
      };
  }
};
/**
 * @param field dataset Field
 * @param dataId Dataset id
 * @param filter Filter object
 * @param layers list of layers to filter upon
 * @return filterFunction
 * @type {typeof import('./filter-utils').getFilterFunction}
 */


exports.getPolygonFilterFunctor = getPolygonFilterFunctor;

function getFilterFunction(field, dataId, filter, layers) {
  // field could be null in polygon filter
  var valueAccessor = function valueAccessor(data) {
    return field ? data[field.tableFieldIndex - 1] : null;
  };

  var defaultFunc = function defaultFunc(d) {
    return true;
  };

  switch (filter.type) {
    case _defaultSettings.FILTER_TYPES.range:
      return function (data) {
        return isInRange(valueAccessor(data), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return function (data) {
        return filter.value.includes(valueAccessor(data));
      };

    case _defaultSettings.FILTER_TYPES.select:
      return function (data) {
        return valueAccessor(data) === filter.value;
      };

    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!field) {
        return defaultFunc;
      }

      var mappedValue = (0, _lodash["default"])(field, ['filterProps', 'mappedValue']);
      var accessor = Array.isArray(mappedValue) ? function (data, index) {
        return mappedValue[index];
      } : function (data) {
        return (0, _dataUtils.timeToUnixMilli)(valueAccessor(data), field.format);
      };
      return function (data, index) {
        return isInRange(accessor(data, index), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.polygon:
      if (!layers || !layers.length) {
        return defaultFunc;
      } // @ts-ignore


      var layerFilterFunctions = filter.layerId.map(function (id) {
        return layers.find(function (l) {
          return l.id === id;
        });
      }).filter(function (l) {
        return l && l.config.dataId === dataId;
      }).map(function (layer) {
        return getPolygonFilterFunctor(layer, filter);
      });
      return function (data, index) {
        return layerFilterFunctions.every(function (filterFunc) {
          return filterFunc(data, index);
        });
      };

    default:
      return defaultFunc;
  }
}

function updateFilterDataId(dataId) {
  return getDefaultFilter(dataId);
}
/**
 * Filter data based on an array of filters
 * @type {typeof import('./filter-utils').filterDataset}
 */


function filterDataset(dataset, filters, layers, opt) {
  var allData = dataset.allData,
      dataId = dataset.id,
      oldFilterRecord = dataset.filterRecord,
      fields = dataset.fields; // if there is no filters

  var filterRecord = getFilterRecord(dataId, filters, opt || {});
  var newDataset = (0, _utils.set)(['filterRecord'], filterRecord, dataset);

  if (!filters.length) {
    return _objectSpread(_objectSpread({}, newDataset), {}, {
      gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields),
      filteredIndex: dataset.allIndexes,
      filteredIndexForDomain: dataset.allIndexes
    });
  }

  var changedFilters = diffFilters(filterRecord, oldFilterRecord); // generate 2 sets of filter result
  // filteredIndex used to calculate layer data
  // filteredIndexForDomain used to calculate layer Domain

  var shouldCalDomain = Boolean(changedFilters.dynamicDomain);
  var shouldCalIndex = Boolean(changedFilters.cpu);
  var filterResult = {};

  if (shouldCalDomain || shouldCalIndex) {
    var dynamicDomainFilters = shouldCalDomain ? filterRecord.dynamicDomain : null;
    var cpuFilters = shouldCalIndex ? filterRecord.cpu : null;
    var filterFuncs = filters.reduce(function (acc, filter) {
      var fieldIndex = (0, _gpuFilterUtils.getDatasetFieldIndexForFilter)(dataset.id, filter);
      var field = fieldIndex !== -1 ? fields[fieldIndex] : null;
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, filter.id, getFilterFunction(field, dataset.id, filter, layers)));
    }, {});
    filterResult = filterDataByFilterTypes({
      dynamicDomainFilters: dynamicDomainFilters,
      cpuFilters: cpuFilters,
      filterFuncs: filterFuncs
    }, allData);
  }

  return _objectSpread(_objectSpread(_objectSpread({}, newDataset), filterResult), {}, {
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields)
  });
}
/**
 * @type {typeof import('./filter-utils').filterDataByFilterTypes}
 */


function filterDataByFilterTypes(_ref2, allData) {
  var dynamicDomainFilters = _ref2.dynamicDomainFilters,
      cpuFilters = _ref2.cpuFilters,
      filterFuncs = _ref2.filterFuncs;

  var result = _objectSpread(_objectSpread({}, dynamicDomainFilters ? {
    filteredIndexForDomain: []
  } : {}), cpuFilters ? {
    filteredIndex: []
  } : {});

  var _loop = function _loop(i) {
    var d = allData[i];
    var matchForDomain = dynamicDomainFilters && dynamicDomainFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForDomain) {
      // @ts-ignore
      result.filteredIndexForDomain.push(i);
    }

    var matchForRender = cpuFilters && cpuFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForRender) {
      // @ts-ignore
      result.filteredIndex.push(i);
    }
  };

  for (var i = 0; i < allData.length; i++) {
    _loop(i);
  }

  return result;
}
/**
 * Get a record of filters based on domain type and gpu / cpu
 * @type {typeof import('./filter-utils').getFilterRecord}
 */


function getFilterRecord(dataId, filters) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  /**
   * @type {FilterRecord}
   */
  var filterRecord = {
    dynamicDomain: [],
    fixedDomain: [],
    cpu: [],
    gpu: []
  };
  filters.forEach(function (f) {
    if (isValidFilterValue(f.type, f.value) && (0, _utils.toArray)(f.dataId).includes(dataId)) {
      (f.fixedDomain || opt.ignoreDomain ? filterRecord.fixedDomain : filterRecord.dynamicDomain).push(f);
      (f.gpu && !opt.cpuOnly ? filterRecord.gpu : filterRecord.cpu).push(f);
    }
  });
  return filterRecord;
}
/**
 * Compare filter records to get what has changed
 * @type {typeof import('./filter-utils').diffFilters}
 */


function diffFilters(filterRecord) {
  var oldFilterRecord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filterChanged = {};
  Object.entries(filterRecord).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        record = _ref4[0],
        items = _ref4[1];

    items.forEach(function (filter) {
      var oldFilter = (oldFilterRecord[record] || []).find(function (f) {
        return f.id === filter.id;
      });

      if (!oldFilter) {
        // added
        filterChanged = (0, _utils.set)([record, filter.id], 'added', filterChanged);
      } else {
        // check  what has changed
        ['name', 'value', 'dataId'].forEach(function (prop) {
          if (filter[prop] !== oldFilter[prop]) {
            filterChanged = (0, _utils.set)([record, filter.id], "".concat(prop, "_changed"), filterChanged);
          }
        });
      }
    });
    (oldFilterRecord[record] || []).forEach(function (oldFilter) {
      // deleted
      if (!items.find(function (f) {
        return f.id === oldFilter.id;
      })) {
        filterChanged = (0, _utils.set)([record, oldFilter.id], 'deleted', filterChanged);
      }
    });

    if (!filterChanged[record]) {
      filterChanged[record] = null;
    }
  }); // @ts-ignore

  return filterChanged;
}
/**
 * Call by parsing filters from URL
 * Check if value of filter within filter domain, if not adjust it to match
 * filter domain
 *
 * @type {typeof import('./filter-utils').adjustValueToFilterDomain}
 * @returns value - adjusted value to match filter or null to remove filter
 */

/* eslint-disable complexity */


function adjustValueToFilterDomain(value, _ref5) {
  var domain = _ref5.domain,
      type = _ref5.type;

  if (!domain || !type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!Array.isArray(value) || value.length !== 2) {
        return domain.map(function (d) {
          return d;
        });
      }

      return value.map(function (d, i) {
        return (0, _dataUtils.notNullorUndefined)(d) && isInRange(d, domain) ? d : domain[i];
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      if (!Array.isArray(value)) {
        return [];
      }

      var filteredValue = value.filter(function (d) {
        return domain.includes(d);
      });
      return filteredValue.length ? filteredValue : [];

    case _defaultSettings.FILTER_TYPES.select:
      return domain.includes(value) ? value : true;

    default:
      return null;
  }
}
/* eslint-enable complexity */

/**
 * Calculate numeric domain and suitable step
 *
 * @type {typeof import('./filter-utils').getNumericFieldDomain}
 */


function getNumericFieldDomain(data, valueAccessor) {
  var domain = [0, 1];
  var step = 0.1;
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];

  if (Array.isArray(data) && data.length > 1) {
    domain = ScaleUtils.getLinearDomain(mappedValue);
    var diff = domain[1] - domain[0]; // in case equal domain, [96, 96], which will break quantize scale

    if (!diff) {
      domain[1] = domain[0] + 1;
    }

    step = getNumericStepSize(diff) || step;
    domain[0] = formatNumberByStep(domain[0], step, 'floor');
    domain[1] = formatNumberByStep(domain[1], step, 'ceil');
  } // @ts-ignore


  var _getHistogram = getHistogram(domain, mappedValue),
      histogram = _getHistogram.histogram,
      enlargedHistogram = _getHistogram.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * Calculate step size for range and timerange filter
 *
 * @type {typeof import('./filter-utils').getNumericStepSize}
 */


function getNumericStepSize(diff) {
  diff = Math.abs(diff);

  if (diff > 100) {
    return 1;
  } else if (diff > 3) {
    return 0.01;
  } else if (diff > 1) {
    return 0.001;
  } // Try to get at least 1000 steps - and keep the step size below that of
  // the (diff > 1) case.


  var x = diff / 1000; // Find the exponent and truncate to 10 to the power of that exponent

  var exponentialForm = x.toExponential();
  var exponent = parseFloat(exponentialForm.split('e')[1]); // Getting ready for node 12
  // this is why we need decimal.js
  // Math.pow(10, -5) = 0.000009999999999999999
  // the above result shows in browser and node 10
  // node 12 behaves correctly

  return new _decimal.Decimal(10).pow(exponent).toNumber();
}
/**
 * Calculate timestamp domain and suitable step
 *
 * @type {typeof import('./filter-utils').getTimestampFieldDomain}
 */


function getTimestampFieldDomain(data, valueAccessor) {
  // to avoid converting string format time to epoch
  // every time we compare we store a value mapped to int in filter domain
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];
  var domain = ScaleUtils.getLinearDomain(mappedValue);
  var step = 0.01;
  var diff = domain[1] - domain[0];
  var entry = TimestampStepMap.find(function (f) {
    return f.max >= diff;
  });

  if (entry) {
    step = entry.step;
  }

  var _getHistogram2 = getHistogram(domain, mappedValue),
      histogram = _getHistogram2.histogram,
      enlargedHistogram = _getHistogram2.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    mappedValue: mappedValue,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 *
 * @type {typeof import('./filter-utils').histogramConstruct}
 */


function histogramConstruct(domain, mappedValue, bins) {
  return (0, _d3Array.histogram)().thresholds((0, _d3Array.ticks)(domain[0], domain[1], bins)).domain(domain)(mappedValue).map(function (bin) {
    return {
      count: bin.length,
      x0: bin.x0,
      x1: bin.x1
    };
  });
}
/**
 * Calculate histogram from domain and array of values
 *
 * @type {typeof import('./filter-utils').getHistogram}
 */


function getHistogram(domain, mappedValue) {
  var histogram = histogramConstruct(domain, mappedValue, histogramBins);
  var enlargedHistogram = histogramConstruct(domain, mappedValue, enlargedHistogramBins);
  return {
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * round number based on step
 *
 * @param {Number} val
 * @param {Number} step
 * @param {string} bound
 * @returns {Number} rounded number
 */


function formatNumberByStep(val, step, bound) {
  if (bound === 'floor') {
    return Math.floor(val * (1 / step)) / (1 / step);
  }

  return Math.ceil(val * (1 / step)) / (1 / step);
}
/**
 *
 * @type {typeof import('./filter-utils').isInRange}
 */


function isInRange(val, domain) {
  if (!Array.isArray(domain)) {
    return false;
  }

  return val >= domain[0] && val <= domain[1];
}
/**
 * Determines whether a point is within the provided polygon
 *
 * @param point as input search [lat, lng]
 * @param polygon Points must be within these (Multi)Polygon(s)
 * @return {boolean}
 */


function isInPolygon(point, polygon) {
  return (0, _booleanWithin["default"])((0, _helpers.point)(point), polygon);
}

function getTimeWidgetTitleFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationDay ? 'MM/DD/YY hh:mma' : 'MM/DD/YY hh:mm:ssa';
}

function getTimeWidgetHintFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationWeek ? 'MM/DD' : diff > durationDay ? 'MM/DD hha' : diff > durationHour ? 'hh:mma' : 'hh:mm:ssa';
}
/**
 * Sanity check on filters to prepare for save
 * @type {typeof import('./filter-utils').isValidFilterValue}
 */

/* eslint-disable complexity */


function isValidFilterValue(type, value) {
  if (!type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.select:
      return value === true || value === false;

    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      return Array.isArray(value) && value.every(function (v) {
        return v !== null && !isNaN(v);
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return Array.isArray(value) && Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.input:
      return Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.polygon:
      var coordinates = (0, _lodash["default"])(value, ['geometry', 'coordinates']);
      return Boolean(value && value.id && coordinates);

    default:
      return true;
  }
}
/**
 *
 * @type {typeof import('./filter-utils').getFilterPlot}
 */


function getFilterPlot(filter, allData) {
  if (filter.plotType === PLOT_TYPES.histogram || !filter.yAxis) {
    // histogram should be calculated when create filter
    return {};
  }

  var _filter$mappedValue = filter.mappedValue,
      mappedValue = _filter$mappedValue === void 0 ? [] : _filter$mappedValue;
  var yAxis = filter.yAxis; // return lineChart

  var series = allData.map(function (d, i) {
    return {
      x: mappedValue[i],
      y: d[yAxis.tableFieldIndex - 1]
    };
  }).filter(function (_ref6) {
    var x = _ref6.x,
        y = _ref6.y;
    return Number.isFinite(x) && Number.isFinite(y);
  }).sort(function (a, b) {
    return (0, _d3Array.ascending)(a.x, b.x);
  });
  var yDomain = (0, _d3Array.extent)(series, function (d) {
    return d.y;
  });
  var xDomain = [series[0].x, series[series.length - 1].x];
  return {
    lineChart: {
      series: series,
      yDomain: yDomain,
      xDomain: xDomain
    },
    yAxis: yAxis
  };
}

function getDefaultFilterPlotType(filter) {
  var filterPlotTypes = SupportedPlotType[filter.type];

  if (!filterPlotTypes) {
    return null;
  }

  if (!filter.yAxis) {
    return filterPlotTypes["default"];
  }

  return filterPlotTypes[filter.yAxis.type] || null;
}
/**
 *
 * @param datasetIds list of dataset ids to be filtered
 * @param datasets all datasets
 * @param filters all filters to be applied to datasets
 * @return datasets - new updated datasets
 * @type {typeof import('./filter-utils').applyFiltersToDatasets}
 */


function applyFiltersToDatasets(datasetIds, datasets, filters, layers) {
  var dataIds = (0, _utils.toArray)(datasetIds);
  return dataIds.reduce(function (acc, dataId) {
    var layersToFilter = (layers || []).filter(function (l) {
      return l.config.dataId === dataId;
    });
    var appliedFilters = filters.filter(function (d) {
      return shouldApplyFilter(d, dataId);
    });
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, dataId, filterDataset(datasets[dataId], appliedFilters, layersToFilter, {})));
  }, datasets);
}
/**
 * Applies a new field name value to fielter and update both filter and dataset
 * @param filter - to be applied the new field name on
 * @param dataset - dataset the field belongs to
 * @param fieldName - field.name
 * @param filterDatasetIndex - field.name
 * @param option
 * @return - {filter, datasets}
 * @type {typeof import('./filter-utils').applyFilterFieldName}
 */


function applyFilterFieldName(filter, dataset, fieldName) {
  var filterDatasetIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var option = arguments.length > 4 ? arguments[4] : undefined;
  // using filterDatasetIndex we can filter only the specified dataset
  var mergeDomain = option && option.hasOwnProperty('mergeDomain') ? option.mergeDomain : false;
  var fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === fieldName;
  }); // if no field with same name is found, move to the next datasets

  if (fieldIndex === -1) {
    // throw new Error(`fieldIndex not found. Dataset must contain a property with name: ${fieldName}`);
    return {
      filter: null,
      dataset: dataset
    };
  } // TODO: validate field type


  var field = fields[fieldIndex];
  var filterProps = field.hasOwnProperty('filterProps') ? field.filterProps : getFilterProps(allData, field);

  var newFilter = _objectSpread(_objectSpread({}, mergeDomain ? mergeFilterDomainStep(filter, filterProps) : _objectSpread(_objectSpread({}, filter), filterProps)), {}, {
    name: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.name)), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.name)),
    fieldIdx: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.fieldIdx)), (0, _defineProperty2["default"])({}, filterDatasetIndex, field.tableFieldIndex - 1)),
    // TODO, since we allow to add multiple fields to a filter we can no longer freeze the filter
    freeze: true
  });

  var fieldWithFilterProps = _objectSpread(_objectSpread({}, field), {}, {
    filterProps: filterProps
  });

  var newFields = Object.assign((0, _toConsumableArray2["default"])(fields), (0, _defineProperty2["default"])({}, fieldIndex, fieldWithFilterProps));
  return {
    filter: newFilter,
    dataset: _objectSpread(_objectSpread({}, dataset), {}, {
      fields: newFields
    })
  };
}
/**
 * Merge one filter with other filter prop domain
 * @type {typeof import('./filter-utils').mergeFilterDomainStep}
 */

/* eslint-disable complexity */


function mergeFilterDomainStep(filter, filterProps) {
  if (!filter) {
    return null;
  }

  if (!filterProps) {
    return filter;
  }

  if (filter.fieldType && filter.fieldType !== filterProps.fieldType || !filterProps.domain) {
    return filter;
  }

  var combinedDomain = !filter.domain ? filterProps.domain : [].concat((0, _toConsumableArray2["default"])(filter.domain || []), (0, _toConsumableArray2["default"])(filterProps.domain || [])).sort(function (a, b) {
    return a - b;
  });

  var newFilter = _objectSpread(_objectSpread(_objectSpread({}, filter), filterProps), {}, {
    domain: [combinedDomain[0], combinedDomain[combinedDomain.length - 1]]
  });

  switch (filterProps.fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        domain: (0, _dataUtils.unique)(combinedDomain).sort()
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      // @ts-ignore
      var step = filter.step < filterProps.step ? filter.step : filterProps.step;
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        step: step
      });

    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    default:
      return newFilter;
  }
}
/* eslint-enable complexity */

/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').featureToFilterValue}
 */


var featureToFilterValue = function featureToFilterValue(feature, filterId) {
  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread(_objectSpread({}, feature), {}, {
    id: feature.id,
    properties: _objectSpread(_objectSpread(_objectSpread({}, feature.properties), properties), {}, {
      filterId: filterId
    })
  });
};
/**
 * @type {typeof import('./filter-utils').getFilterIdInFeature}
 */


exports.featureToFilterValue = featureToFilterValue;

var getFilterIdInFeature = function getFilterIdInFeature(f) {
  return (0, _lodash["default"])(f, ['properties', 'filterId']);
};
/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').generatePolygonFilter}
 */


exports.getFilterIdInFeature = getFilterIdInFeature;

function generatePolygonFilter(layers, feature) {
  var dataId = layers.map(function (l) {
    return l.config.dataId;
  }).filter(function (d) {
    return d;
  });
  var layerId = layers.map(function (l) {
    return l.id;
  });
  var name = layers.map(function (l) {
    return l.config.label;
  }); // @ts-ignore

  var filter = getDefaultFilter(dataId);
  return _objectSpread(_objectSpread({}, filter), {}, {
    fixedDomain: true,
    type: _defaultSettings.FILTER_TYPES.polygon,
    name: name,
    layerId: layerId,
    value: featureToFilterValue(feature, filter.id, {
      isVisible: true
    })
  });
}
/**
 * Run filter entirely on CPU
 * @type {typeof import('./filter-utils').filterDatasetCPU}
 */


function filterDatasetCPU(state, dataId) {
  var datasetFilters = state.filters.filter(function (f) {
    return f.dataId.includes(dataId);
  });
  var selectedDataset = state.datasets[dataId];

  if (!selectedDataset) {
    return state;
  }

  var opt = {
    cpuOnly: true,
    ignoreDomain: true
  };

  if (!datasetFilters.length) {
    // no filter
    var _filtered = _objectSpread(_objectSpread({}, selectedDataset), {}, {
      filteredIdxCPU: selectedDataset.allIndexes,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered, state);
  } // no gpu filter


  if (!datasetFilters.find(function (f) {
    return f.gpu;
  })) {
    var _filtered2 = _objectSpread(_objectSpread({}, selectedDataset), {}, {
      filteredIdxCPU: selectedDataset.filteredIndex,
      filterRecordCPU: getFilterRecord(dataId, state.filters, opt)
    });

    return (0, _utils.set)(['datasets', dataId], _filtered2, state);
  } // make a copy for cpu filtering


  var copied = _objectSpread(_objectSpread({}, selectedDataset), {}, {
    filterRecord: selectedDataset.filterRecordCPU,
    filteredIndex: selectedDataset.filteredIdxCPU || []
  });

  var filtered = filterDataset(copied, state.filters, state.layers, opt);

  var cpuFilteredDataset = _objectSpread(_objectSpread({}, selectedDataset), {}, {
    filteredIdxCPU: filtered.filteredIndex,
    filterRecordCPU: filtered.filterRecord
  });

  return (0, _utils.set)(['datasets', dataId], cpuFilteredDataset, state);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWx0ZXItdXRpbHMuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wU3RlcE1hcCIsIm1heCIsInN0ZXAiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImhpc3RvZ3JhbUJpbnMiLCJlbmxhcmdlZEhpc3RvZ3JhbUJpbnMiLCJkdXJhdGlvblNlY29uZCIsImR1cmF0aW9uTWludXRlIiwiZHVyYXRpb25Ib3VyIiwiZHVyYXRpb25EYXkiLCJkdXJhdGlvbldlZWsiLCJkdXJhdGlvblllYXIiLCJQTE9UX1RZUEVTIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhSWQiLCJuYW1lIiwibGF5ZXJJZCIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsIlN1cHBvcnRlZFBsb3RUeXBlIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwiQUxMX0ZJRUxEX1RZUEVTIiwiaW50ZWdlciIsInJlYWwiLCJyYW5nZSIsIkZJTFRFUl9DT01QT05FTlRTIiwic2VsZWN0IiwibXVsdGlTZWxlY3QiLCJwb2x5Z29uIiwiREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFIiwiZnJlZXplIiwiaWQiLCJmaXhlZERvbWFpbiIsImVubGFyZ2VkIiwiaXNBbmltYXRpbmciLCJhbmltYXRpb25XaW5kb3ciLCJBTklNQVRJT05fV0lORE9XIiwiZnJlZSIsInNwZWVkIiwidHlwZSIsImZpZWxkSWR4IiwiZG9tYWluIiwidmFsdWUiLCJwbG90VHlwZSIsInlBeGlzIiwiaW50ZXJ2YWwiLCJncHUiLCJGSUxURVJfSURfTEVOR1RIIiwiTEFZRVJfRklMVEVSUyIsImdldERlZmF1bHRGaWx0ZXIiLCJzaG91bGRBcHBseUZpbHRlciIsImZpbHRlciIsImRhdGFzZXRJZCIsImRhdGFJZHMiLCJpbmNsdWRlcyIsInZhbGlkYXRlUG9seWdvbkZpbHRlciIsImRhdGFzZXQiLCJsYXllcnMiLCJmYWlsZWQiLCJpc1ZhbGlkRmlsdGVyVmFsdWUiLCJpc1ZhbGlkRGF0YXNldCIsImxheWVyIiwiZmluZCIsImwiLCJmaWx0ZXJWYWxpZGF0b3JzIiwidmFsaWRhdGVGaWx0ZXIiLCJmaWx0ZXJEYXRhSWQiLCJmaWx0ZXJEYXRhc2V0SW5kZXgiLCJpbmRleE9mIiwiaW5pdGlhbGl6ZUZpbHRlciIsImZpZWxkTmFtZSIsImFwcGx5RmlsdGVyRmllbGROYW1lIiwibWVyZ2VEb21haW4iLCJ1cGRhdGVkRmlsdGVyIiwidXBkYXRlZERhdGFzZXQiLCJhZGp1c3RWYWx1ZVRvRmlsdGVyRG9tYWluIiwidmFsaWRhdGVGaWx0ZXJZQXhpcyIsInZhbGlkYXRlRmlsdGVyV2l0aERhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsImZpZWxkcyIsImFsbERhdGEiLCJtYXRjaGVkQXhpcyIsImdldEZpbHRlclBsb3QiLCJnZXRGaWx0ZXJQcm9wcyIsImZpZWxkIiwiZmlsdGVyUHJvcHMiLCJnZXRGaWVsZERvbWFpbiIsImZpZWxkVHlwZSIsInR5cGVPcHRpb25zIiwic3RyaW5nIiwiZGF0ZSIsInRpbWVzdGFtcCIsInRhYmxlRmllbGRJbmRleCIsImlzVGltZSIsInZhbHVlQWNjZXNzb3IiLCJtYXliZVRvRGF0ZSIsImJpbmQiLCJmb3JtYXQiLCJnZXROdW1lcmljRmllbGREb21haW4iLCJTY2FsZVV0aWxzIiwiZ2V0T3JkaW5hbERvbWFpbiIsImdldFRpbWVzdGFtcEZpZWxkRG9tYWluIiwiZ2V0UG9seWdvbkZpbHRlckZ1bmN0b3IiLCJnZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaWNvbiIsImRhdGEiLCJwb3MiLCJldmVyeSIsImlzRmluaXRlIiwiaXNJblBvbHlnb24iLCJhcmMiLCJsaW5lIiwiaGV4YWdvbklkIiwiZGF0YVRvRmVhdHVyZSIsImNlbnRyb2lkcyIsImluZGV4IiwiY2VudHJvaWQiLCJnZXRGaWx0ZXJGdW5jdGlvbiIsImRlZmF1bHRGdW5jIiwiZCIsImlzSW5SYW5nZSIsIm1hcHBlZFZhbHVlIiwiYWNjZXNzb3IiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsYXllckZpbHRlckZ1bmN0aW9ucyIsIm1hcCIsImNvbmZpZyIsImZpbHRlckZ1bmMiLCJ1cGRhdGVGaWx0ZXJEYXRhSWQiLCJmaWx0ZXJEYXRhc2V0IiwiZmlsdGVycyIsIm9wdCIsIm9sZEZpbHRlclJlY29yZCIsImZpbHRlclJlY29yZCIsImdldEZpbHRlclJlY29yZCIsIm5ld0RhdGFzZXQiLCJncHVGaWx0ZXIiLCJmaWx0ZXJlZEluZGV4IiwiYWxsSW5kZXhlcyIsImZpbHRlcmVkSW5kZXhGb3JEb21haW4iLCJjaGFuZ2VkRmlsdGVycyIsImRpZmZGaWx0ZXJzIiwic2hvdWxkQ2FsRG9tYWluIiwiQm9vbGVhbiIsImR5bmFtaWNEb21haW4iLCJzaG91bGRDYWxJbmRleCIsImNwdSIsImZpbHRlclJlc3VsdCIsImR5bmFtaWNEb21haW5GaWx0ZXJzIiwiY3B1RmlsdGVycyIsImZpbHRlckZ1bmNzIiwicmVkdWNlIiwiYWNjIiwiZmllbGRJbmRleCIsImZpbHRlckRhdGFCeUZpbHRlclR5cGVzIiwicmVzdWx0IiwiaSIsIm1hdGNoRm9yRG9tYWluIiwicHVzaCIsIm1hdGNoRm9yUmVuZGVyIiwiZm9yRWFjaCIsImYiLCJpZ25vcmVEb21haW4iLCJjcHVPbmx5IiwiZmlsdGVyQ2hhbmdlZCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWNvcmQiLCJpdGVtcyIsIm9sZEZpbHRlciIsInByb3AiLCJmaWx0ZXJlZFZhbHVlIiwiZ2V0TGluZWFyRG9tYWluIiwiZGlmZiIsImdldE51bWVyaWNTdGVwU2l6ZSIsImZvcm1hdE51bWJlckJ5U3RlcCIsImdldEhpc3RvZ3JhbSIsImVubGFyZ2VkSGlzdG9ncmFtIiwiTWF0aCIsImFicyIsIngiLCJleHBvbmVudGlhbEZvcm0iLCJ0b0V4cG9uZW50aWFsIiwiZXhwb25lbnQiLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJEZWNpbWFsIiwicG93IiwidG9OdW1iZXIiLCJlbnRyeSIsImhpc3RvZ3JhbUNvbnN0cnVjdCIsImJpbnMiLCJ0aHJlc2hvbGRzIiwiYmluIiwiY291bnQiLCJ4MCIsIngxIiwidmFsIiwiYm91bmQiLCJmbG9vciIsImNlaWwiLCJnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIiLCJnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlciIsInYiLCJpc05hTiIsImlucHV0IiwiY29vcmRpbmF0ZXMiLCJzZXJpZXMiLCJ5Iiwic29ydCIsImEiLCJiIiwieURvbWFpbiIsInhEb21haW4iLCJnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUiLCJmaWx0ZXJQbG90VHlwZXMiLCJhcHBseUZpbHRlcnNUb0RhdGFzZXRzIiwiZGF0YXNldElkcyIsImRhdGFzZXRzIiwibGF5ZXJzVG9GaWx0ZXIiLCJhcHBsaWVkRmlsdGVycyIsIm9wdGlvbiIsImZpbmRJbmRleCIsIm5ld0ZpbHRlciIsIm1lcmdlRmlsdGVyRG9tYWluU3RlcCIsImFzc2lnbiIsImZpZWxkV2l0aEZpbHRlclByb3BzIiwibmV3RmllbGRzIiwiY29tYmluZWREb21haW4iLCJmZWF0dXJlVG9GaWx0ZXJWYWx1ZSIsImZlYXR1cmUiLCJmaWx0ZXJJZCIsInByb3BlcnRpZXMiLCJnZXRGaWx0ZXJJZEluRmVhdHVyZSIsImdlbmVyYXRlUG9seWdvbkZpbHRlciIsImxhYmVsIiwiaXNWaXNpYmxlIiwiZmlsdGVyRGF0YXNldENQVSIsInN0YXRlIiwiZGF0YXNldEZpbHRlcnMiLCJzZWxlY3RlZERhdGFzZXQiLCJmaWx0ZXJlZCIsImZpbHRlcmVkSWR4Q1BVIiwiZmlsdGVyUmVjb3JkQ1BVIiwiY29waWVkIiwiY3B1RmlsdGVyZWREYXRhc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBOztBQUNB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LENBQUMxTCxNQUE5QixFQUFzQytFLEdBQXRDLENBQTlCOztBQUVBLE1BQU1rSCxrQkFBa0IsbUNBQ25CTCxlQURtQjtBQUV0QkUsSUFBQUEsY0FBYyxFQUFFRCxRQUFRLENBQUN4RyxhQUZIO0FBR3RCMEcsSUFBQUEsZUFBZSxFQUFFRixRQUFRLENBQUM1RztBQUhKLElBQXhCOztBQU1BLFNBQU8sZ0JBQUksQ0FBQyxVQUFELEVBQWE1SCxNQUFiLENBQUosRUFBMEI0TyxrQkFBMUIsRUFBOENQLEtBQTlDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7YXNjZW5kaW5nLCBleHRlbnQsIGhpc3RvZ3JhbSBhcyBkM0hpc3RvZ3JhbSwgdGlja3N9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgYm9vbGVhbldpdGhpbiBmcm9tICdAdHVyZi9ib29sZWFuLXdpdGhpbic7XG5pbXBvcnQge3BvaW50IGFzIHR1cmZQb2ludH0gZnJvbSAnQHR1cmYvaGVscGVycyc7XG5pbXBvcnQge0RlY2ltYWx9IGZyb20gJ2RlY2ltYWwuanMnO1xuaW1wb3J0IHtBTExfRklFTERfVFlQRVMsIEZJTFRFUl9UWVBFUywgQU5JTUFUSU9OX1dJTkRPV30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHttYXliZVRvRGF0ZSwgbm90TnVsbG9yVW5kZWZpbmVkLCB1bmlxdWUsIHRpbWVUb1VuaXhNaWxsaX0gZnJvbSAnLi9kYXRhLXV0aWxzJztcbmltcG9ydCAqIGFzIFNjYWxlVXRpbHMgZnJvbSAnLi9kYXRhLXNjYWxlLXV0aWxzJztcbmltcG9ydCB7TEFZRVJfVFlQRVN9IGZyb20gJ2xheWVycy90eXBlcyc7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBzZXQsIHRvQXJyYXl9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtnZXRHcHVGaWx0ZXJQcm9wcywgZ2V0RGF0YXNldEZpZWxkSW5kZXhGb3JGaWx0ZXJ9IGZyb20gJy4vZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge2dldENlbnRyb2lkLCBoM0lzVmFsaWR9IGZyb20gJ2xheWVycy9oMy1oZXhhZ29uLWxheWVyL2gzLXV0aWxzJztcblxuLy8gVFlQRVxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3JlZHVjZXJzL3Zpcy1zdGF0ZS11cGRhdGVycycpLkZpbHRlclJlY29yZH0gRmlsdGVyUmVjb3JkICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5GaWx0ZXJSZXN1bHR9IEZpbHRlclJlc3VsdCAqL1xuXG5leHBvcnQgY29uc3QgVGltZXN0YW1wU3RlcE1hcCA9IFtcbiAge21heDogMSwgc3RlcDogMC4wNX0sXG4gIHttYXg6IDEwLCBzdGVwOiAwLjF9LFxuICB7bWF4OiAxMDAsIHN0ZXA6IDF9LFxuICB7bWF4OiA1MDAsIHN0ZXA6IDV9LFxuICB7bWF4OiAxMDAwLCBzdGVwOiAxMH0sXG4gIHttYXg6IDUwMDAsIHN0ZXA6IDUwfSxcbiAge21heDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBzdGVwOiAxMDAwfVxuXTtcblxuZXhwb3J0IGNvbnN0IGhpc3RvZ3JhbUJpbnMgPSAzMDtcbmV4cG9ydCBjb25zdCBlbmxhcmdlZEhpc3RvZ3JhbUJpbnMgPSAxMDA7XG5cbmNvbnN0IGR1cmF0aW9uU2Vjb25kID0gMTAwMDtcbmNvbnN0IGR1cmF0aW9uTWludXRlID0gZHVyYXRpb25TZWNvbmQgKiA2MDtcbmNvbnN0IGR1cmF0aW9uSG91ciA9IGR1cmF0aW9uTWludXRlICogNjA7XG5jb25zdCBkdXJhdGlvbkRheSA9IGR1cmF0aW9uSG91ciAqIDI0O1xuY29uc3QgZHVyYXRpb25XZWVrID0gZHVyYXRpb25EYXkgKiA3O1xuY29uc3QgZHVyYXRpb25ZZWFyID0gZHVyYXRpb25EYXkgKiAzNjU7XG5cbmV4cG9ydCBjb25zdCBQTE9UX1RZUEVTID0ga2V5TWlycm9yKHtcbiAgaGlzdG9ncmFtOiBudWxsLFxuICBsaW5lQ2hhcnQ6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgRklMVEVSX1VQREFURVJfUFJPUFMgPSBrZXlNaXJyb3Ioe1xuICBkYXRhSWQ6IG51bGwsXG4gIG5hbWU6IG51bGwsXG4gIGxheWVySWQ6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTID0ga2V5TWlycm9yKHtcbiAgW0ZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWVdOiBudWxsXG59KTtcbi8qKlxuICogTWF4IG51bWJlciBvZiBmaWx0ZXIgdmFsdWUgYnVmZmVycyB0aGF0IGRlY2suZ2wgcHJvdmlkZXNcbiAqL1xuXG5jb25zdCBTdXBwb3J0ZWRQbG90VHlwZSA9IHtcbiAgW0ZJTFRFUl9UWVBFUy50aW1lUmFuZ2VdOiB7XG4gICAgZGVmYXVsdDogJ2hpc3RvZ3JhbScsXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogJ2xpbmVDaGFydCdcbiAgfSxcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06IHtcbiAgICBkZWZhdWx0OiAnaGlzdG9ncmFtJyxcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiAnbGluZUNoYXJ0JyxcbiAgICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiAnbGluZUNoYXJ0J1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0NPTVBPTkVOVFMgPSB7XG4gIFtGSUxURVJfVFlQRVMuc2VsZWN0XTogJ1NpbmdsZVNlbGVjdEZpbHRlcicsXG4gIFtGSUxURVJfVFlQRVMubXVsdGlTZWxlY3RdOiAnTXVsdGlTZWxlY3RGaWx0ZXInLFxuICBbRklMVEVSX1RZUEVTLnRpbWVSYW5nZV06ICdUaW1lUmFuZ2VGaWx0ZXInLFxuICBbRklMVEVSX1RZUEVTLnJhbmdlXTogJ1JhbmdlRmlsdGVyJyxcbiAgW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTogJ1BvbHlnb25GaWx0ZXInXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFID0ge1xuICBkYXRhSWQ6IFtdLCAvLyBbc3RyaW5nXVxuICBmcmVlemU6IGZhbHNlLFxuICBpZDogbnVsbCxcblxuICAvLyB0aW1lIHJhbmdlIGZpbHRlciBzcGVjaWZpY1xuICBmaXhlZERvbWFpbjogZmFsc2UsXG4gIGVubGFyZ2VkOiBmYWxzZSxcbiAgaXNBbmltYXRpbmc6IGZhbHNlLFxuICBhbmltYXRpb25XaW5kb3c6IEFOSU1BVElPTl9XSU5ET1cuZnJlZSxcbiAgc3BlZWQ6IDEsXG5cbiAgLy8gZmllbGQgc3BlY2lmaWNcbiAgbmFtZTogW10sIC8vIHN0cmluZ1xuICB0eXBlOiBudWxsLFxuICBmaWVsZElkeDogW10sIC8vIFtpbnRlZ2VyXVxuICBkb21haW46IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuXG4gIC8vIHBsb3RcbiAgcGxvdFR5cGU6IFBMT1RfVFlQRVMuaGlzdG9ncmFtLFxuICB5QXhpczogbnVsbCxcbiAgaW50ZXJ2YWw6IG51bGwsXG5cbiAgLy8gbW9kZVxuICBncHU6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgRklMVEVSX0lEX0xFTkdUSCA9IDQ7XG5cbmV4cG9ydCBjb25zdCBMQVlFUl9GSUxURVJTID0gW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmaWx0ZXIgd2l0aCBhIGRhdGFzZXQgaWQgYXMgZGF0YUlkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXREZWZhdWx0RmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5ERUZBVUxUX0ZJTFRFUl9TVFJVQ1RVUkUsXG4gICAgLy8gc3RvcmUgaXQgYXMgZGF0YUlkIGFuZCBpdCBjb3VsZCBiZSBvbmUgb3IgbWFueVxuICAgIGRhdGFJZDogdG9BcnJheShkYXRhSWQpLFxuICAgIGlkOiBnZW5lcmF0ZUhhc2hJZChGSUxURVJfSURfTEVOR1RIKVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZmlsdGVyIGlzIHZhbGlkIGJhc2VkIG9uIHRoZSBnaXZlbiBkYXRhSWRcbiAqIEBwYXJhbSAgZmlsdGVyIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0gIGRhdGFzZXRJZCBpZCB0byB2YWxpZGF0ZSBmaWx0ZXIgYWdhaW5zdFxuICogQHJldHVybiB0cnVlIGlmIGEgZmlsdGVyIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLnNob3VsZEFwcGx5RmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkQXBwbHlGaWx0ZXIoZmlsdGVyLCBkYXRhc2V0SWQpIHtcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZmlsdGVyLmRhdGFJZCk7XG4gIHJldHVybiBkYXRhSWRzLmluY2x1ZGVzKGRhdGFzZXRJZCkgJiYgZmlsdGVyLnZhbHVlICE9PSBudWxsO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyBhbmQgbW9kaWZpZXMgcG9seWdvbiBmaWx0ZXIgc3RydWN0dXJlXG4gKiBAcGFyYW0gZGF0YXNldFxuICogQHBhcmFtIGZpbHRlclxuICogQHBhcmFtIGxheWVyc1xuICogQHJldHVybiAtIHtmaWx0ZXIsIGRhdGFzZXR9XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS52YWxpZGF0ZVBvbHlnb25GaWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBvbHlnb25GaWx0ZXIoZGF0YXNldCwgZmlsdGVyLCBsYXllcnMpIHtcbiAgY29uc3QgZmFpbGVkID0ge2RhdGFzZXQsIGZpbHRlcjogbnVsbH07XG4gIGNvbnN0IHt2YWx1ZSwgbGF5ZXJJZCwgdHlwZSwgZGF0YUlkfSA9IGZpbHRlcjtcblxuICBpZiAoIWxheWVySWQgfHwgIWlzVmFsaWRGaWx0ZXJWYWx1ZSh0eXBlLCB2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFpbGVkO1xuICB9XG5cbiAgY29uc3QgaXNWYWxpZERhdGFzZXQgPSBkYXRhSWQuaW5jbHVkZXMoZGF0YXNldC5pZCk7XG5cbiAgaWYgKCFpc1ZhbGlkRGF0YXNldCkge1xuICAgIHJldHVybiBmYWlsZWQ7XG4gIH1cblxuICBjb25zdCBsYXllciA9IGxheWVycy5maW5kKGwgPT4gbGF5ZXJJZC5pbmNsdWRlcyhsLmlkKSk7XG5cbiAgaWYgKCFsYXllcikge1xuICAgIHJldHVybiBmYWlsZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbHRlcjoge1xuICAgICAgLi4uZmlsdGVyLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgICAgZmllbGRJZHg6IFtdXG4gICAgfSxcbiAgICBkYXRhc2V0XG4gIH07XG59XG5cbi8qKlxuICogQ3VzdG9tIGZpbHRlciB2YWxpZGF0b3JzXG4gKi9cbmNvbnN0IGZpbHRlclZhbGlkYXRvcnMgPSB7XG4gIFtGSUxURVJfVFlQRVMucG9seWdvbl06IHZhbGlkYXRlUG9seWdvbkZpbHRlclxufTtcblxuLyoqXG4gKiBEZWZhdWx0IHZhbGlkYXRlIGZpbHRlciBmdW5jdGlvblxuICogQHBhcmFtIGRhdGFzZXRcbiAqIEBwYXJhbSBmaWx0ZXJcbiAqIEByZXR1cm4gLSB7ZmlsdGVyLCBkYXRhc2V0fVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykudmFsaWRhdGVGaWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcihkYXRhc2V0LCBmaWx0ZXIpIHtcbiAgLy8gbWF0Y2ggZmlsdGVyLmRhdGFJZFxuICBjb25zdCBmYWlsZWQgPSB7ZGF0YXNldCwgZmlsdGVyOiBudWxsfTtcbiAgY29uc3QgZmlsdGVyRGF0YUlkID0gdG9BcnJheShmaWx0ZXIuZGF0YUlkKTtcblxuICBjb25zdCBmaWx0ZXJEYXRhc2V0SW5kZXggPSBmaWx0ZXJEYXRhSWQuaW5kZXhPZihkYXRhc2V0LmlkKTtcbiAgaWYgKGZpbHRlckRhdGFzZXRJbmRleCA8IDApIHtcbiAgICAvLyB0aGUgY3VycmVudCBmaWx0ZXIgaXMgbm90IG1hcHBlZCBhZ2FpbnN0IHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICByZXR1cm4gZmFpbGVkO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUZpbHRlciA9IHtcbiAgICAuLi5nZXREZWZhdWx0RmlsdGVyKGZpbHRlci5kYXRhSWQpLFxuICAgIC4uLmZpbHRlcixcbiAgICBkYXRhSWQ6IGZpbHRlckRhdGFJZCxcbiAgICBuYW1lOiB0b0FycmF5KGZpbHRlci5uYW1lKVxuICB9O1xuXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGluaXRpYWxpemVGaWx0ZXIubmFtZVtmaWx0ZXJEYXRhc2V0SW5kZXhdO1xuICBjb25zdCB7ZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBkYXRhc2V0OiB1cGRhdGVkRGF0YXNldH0gPSBhcHBseUZpbHRlckZpZWxkTmFtZShcbiAgICBpbml0aWFsaXplRmlsdGVyLFxuICAgIGRhdGFzZXQsXG4gICAgZmllbGROYW1lLFxuICAgIGZpbHRlckRhdGFzZXRJbmRleCxcbiAgICB7bWVyZ2VEb21haW46IHRydWV9XG4gICk7XG5cbiAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZhaWxlZDtcbiAgfVxuXG4gIHVwZGF0ZWRGaWx0ZXIudmFsdWUgPSBhZGp1c3RWYWx1ZVRvRmlsdGVyRG9tYWluKGZpbHRlci52YWx1ZSwgdXBkYXRlZEZpbHRlcik7XG4gIHVwZGF0ZWRGaWx0ZXIuZW5sYXJnZWQgPVxuICAgIHR5cGVvZiBmaWx0ZXIuZW5sYXJnZWQgPT09ICdib29sZWFuJyA/IGZpbHRlci5lbmxhcmdlZCA6IHVwZGF0ZWRGaWx0ZXIuZW5sYXJnZWQ7XG5cbiAgaWYgKHVwZGF0ZWRGaWx0ZXIudmFsdWUgPT09IG51bGwpIHtcbiAgICAvLyBjYW5ub3QgYWRqdXN0IHNhdmVkIHZhbHVlIHRvIGZpbHRlclxuICAgIHJldHVybiBmYWlsZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbHRlcjogdmFsaWRhdGVGaWx0ZXJZQXhpcyh1cGRhdGVkRmlsdGVyLCB1cGRhdGVkRGF0YXNldCksXG4gICAgZGF0YXNldDogdXBkYXRlZERhdGFzZXRcbiAgfTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBzYXZlZCBmaWx0ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXG4gKiBjYWxjdWxhdGUgZG9tYWluIGFuZCBmaWVsZElkeCBiYXNlZCBuZXcgZmllbGRzIGFuZCBkYXRhXG4gKlxuICogQHBhcmFtIGRhdGFzZXRcbiAqIEBwYXJhbSBmaWx0ZXIgLSBmaWx0ZXIgdG8gYmUgdmFsaWRhdGVcbiAqIEBwYXJhbSBsYXllcnMgLSBsYXllcnNcbiAqIEByZXR1cm4gdmFsaWRhdGVkIGZpbHRlclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykudmFsaWRhdGVGaWx0ZXJXaXRoRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmlsdGVyV2l0aERhdGEoZGF0YXNldCwgZmlsdGVyLCBsYXllcnMpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZmlsdGVyVmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eShmaWx0ZXIudHlwZSlcbiAgICA/IGZpbHRlclZhbGlkYXRvcnNbZmlsdGVyLnR5cGVdKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKVxuICAgIDogdmFsaWRhdGVGaWx0ZXIoZGF0YXNldCwgZmlsdGVyKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBZQXhpc1xuICogQHBhcmFtIGZpbHRlclxuICogQHBhcmFtIGRhdGFzZXRcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRmlsdGVyWUF4aXMoZmlsdGVyLCBkYXRhc2V0KSB7XG4gIC8vIFRPRE86IHZhbGlkYXRlIHlBeGlzIGFnYWluc3Qgb3RoZXIgZGF0YXNldHNcblxuICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XG4gIGNvbnN0IHt5QXhpc30gPSBmaWx0ZXI7XG4gIC8vIFRPRE86IHZhbGlkYXRlIHlBeGlzIGFnYWluc3Qgb3RoZXIgZGF0YXNldHNcbiAgaWYgKHlBeGlzKSB7XG4gICAgY29uc3QgbWF0Y2hlZEF4aXMgPSBmaWVsZHMuZmluZCgoe25hbWUsIHR5cGV9KSA9PiBuYW1lID09PSB5QXhpcy5uYW1lICYmIHR5cGUgPT09IHlBeGlzLnR5cGUpO1xuXG4gICAgZmlsdGVyID0gbWF0Y2hlZEF4aXNcbiAgICAgID8ge1xuICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICB5QXhpczogbWF0Y2hlZEF4aXMsXG4gICAgICAgICAgLi4uZ2V0RmlsdGVyUGxvdCh7Li4uZmlsdGVyLCB5QXhpczogbWF0Y2hlZEF4aXN9LCBhbGxEYXRhKVxuICAgICAgICB9XG4gICAgICA6IGZpbHRlcjtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXI7XG59XG5cbi8qKlxuICogR2V0IGRlZmF1bHQgZmlsdGVyIHByb3AgYmFzZWQgb24gZmllbGQgdHlwZVxuICpcbiAqIEBwYXJhbSBhbGxEYXRhXG4gKiBAcGFyYW0gZmllbGRcbiAqIEByZXR1cm5zIGRlZmF1bHQgZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJQcm9wc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlclByb3BzKGFsbERhdGEsIGZpZWxkKSB7XG4gIGNvbnN0IGZpbHRlclByb3BzID0ge1xuICAgIC4uLmdldEZpZWxkRG9tYWluKGFsbERhdGEsIGZpZWxkKSxcbiAgICBmaWVsZFR5cGU6IGZpZWxkLnR5cGVcbiAgfTtcblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcbiAgICAgICAgdmFsdWU6IGZpbHRlclByb3BzLmRvbWFpbixcbiAgICAgICAgdHlwZTogRklMVEVSX1RZUEVTLnJhbmdlLFxuICAgICAgICB0eXBlT3B0aW9uczogW0ZJTFRFUl9UWVBFUy5yYW5nZV0sXG4gICAgICAgIGdwdTogdHJ1ZVxuICAgICAgfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5maWx0ZXJQcm9wcyxcbiAgICAgICAgdHlwZTogRklMVEVSX1RZUEVTLnNlbGVjdCxcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIGdwdTogZmFsc2VcbiAgICAgIH07XG5cbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc6XG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuZGF0ZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpbHRlclByb3BzLFxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3QsXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgZ3B1OiBmYWxzZVxuICAgICAgfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpbHRlclByb3BzLFxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMudGltZVJhbmdlLFxuICAgICAgICBlbmxhcmdlZDogdHJ1ZSxcbiAgICAgICAgZml4ZWREb21haW46IHRydWUsXG4gICAgICAgIHZhbHVlOiBmaWx0ZXJQcm9wcy5kb21haW4sXG4gICAgICAgIGdwdTogdHJ1ZVxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgZmllbGQgZG9tYWluIGJhc2VkIG9uIGZpZWxkIHR5cGUgYW5kIGRhdGFcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWVsZERvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkRG9tYWluKGFsbERhdGEsIGZpZWxkKSB7XG4gIGNvbnN0IGZpZWxkSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcbiAgY29uc3QgaXNUaW1lID0gZmllbGQudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDtcbiAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IG1heWJlVG9EYXRlLmJpbmQobnVsbCwgaXNUaW1lLCBmaWVsZElkeCwgZmllbGQuZm9ybWF0KTtcbiAgbGV0IGRvbWFpbjtcblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI6XG4gICAgICAvLyBjYWxjdWxhdGUgZG9tYWluIGFuZCBzdGVwXG4gICAgICByZXR1cm4gZ2V0TnVtZXJpY0ZpZWxkRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xuXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuYm9vbGVhbjpcbiAgICAgIHJldHVybiB7ZG9tYWluOiBbdHJ1ZSwgZmFsc2VdfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnN0cmluZzpcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5kYXRlOlxuICAgICAgZG9tYWluID0gU2NhbGVVdGlscy5nZXRPcmRpbmFsRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xuICAgICAgcmV0dXJuIHtkb21haW59O1xuXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wOlxuICAgICAgcmV0dXJuIGdldFRpbWVzdGFtcEZpZWxkRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7ZG9tYWluOiBTY2FsZVV0aWxzLmdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcil9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb2x5Z29uRmlsdGVyRnVuY3RvciA9IChsYXllciwgZmlsdGVyKSA9PiB7XG4gIGNvbnN0IGdldFBvc2l0aW9uID0gbGF5ZXIuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuXG4gIHN3aXRjaCAobGF5ZXIudHlwZSkge1xuICAgIGNhc2UgTEFZRVJfVFlQRVMucG9pbnQ6XG4gICAgY2FzZSBMQVlFUl9UWVBFUy5pY29uOlxuICAgICAgcmV0dXJuIGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YX0pO1xuICAgICAgICByZXR1cm4gcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiYgaXNJblBvbHlnb24ocG9zLCBmaWx0ZXIudmFsdWUpO1xuICAgICAgfTtcbiAgICBjYXNlIExBWUVSX1RZUEVTLmFyYzpcbiAgICBjYXNlIExBWUVSX1RZUEVTLmxpbmU6XG4gICAgICByZXR1cm4gZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiZcbiAgICAgICAgICBbXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV1dLFxuICAgICAgICAgICAgW3Bvc1szXSwgcG9zWzRdXVxuICAgICAgICAgIF0uZXZlcnkocG9pbnQgPT4gaXNJblBvbHlnb24ocG9pbnQsIGZpbHRlci52YWx1ZSkpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIGNhc2UgTEFZRVJfVFlQRVMuaGV4YWdvbklkOlxuICAgICAgaWYgKGxheWVyLmRhdGFUb0ZlYXR1cmUgJiYgbGF5ZXIuZGF0YVRvRmVhdHVyZS5jZW50cm9pZHMpIHtcbiAgICAgICAgcmV0dXJuIChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgIC8vIG51bGwgb3IgZ2V0Q2VudHJvaWQoe2lkfSlcbiAgICAgICAgICBjb25zdCBjZW50cm9pZCA9IGxheWVyLmRhdGFUb0ZlYXR1cmUuY2VudHJvaWRzW2luZGV4XTtcbiAgICAgICAgICByZXR1cm4gY2VudHJvaWQgJiYgaXNJblBvbHlnb24oY2VudHJvaWQsIGZpbHRlci52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZ2V0UG9zaXRpb24oe2RhdGF9KTtcbiAgICAgICAgaWYgKCFoM0lzVmFsaWQoaWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvcyA9IGdldENlbnRyb2lkKHtpZH0pO1xuICAgICAgICByZXR1cm4gcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiYgaXNJblBvbHlnb24ocG9zLCBmaWx0ZXIudmFsdWUpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICgpID0+IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIGZpZWxkIGRhdGFzZXQgRmllbGRcbiAqIEBwYXJhbSBkYXRhSWQgRGF0YXNldCBpZFxuICogQHBhcmFtIGZpbHRlciBGaWx0ZXIgb2JqZWN0XG4gKiBAcGFyYW0gbGF5ZXJzIGxpc3Qgb2YgbGF5ZXJzIHRvIGZpbHRlciB1cG9uXG4gKiBAcmV0dXJuIGZpbHRlckZ1bmN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlckZ1bmN0aW9uKGZpZWxkLCBkYXRhSWQsIGZpbHRlciwgbGF5ZXJzKSB7XG4gIC8vIGZpZWxkIGNvdWxkIGJlIG51bGwgaW4gcG9seWdvbiBmaWx0ZXJcbiAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IGRhdGEgPT4gKGZpZWxkID8gZGF0YVtmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXSA6IG51bGwpO1xuICBjb25zdCBkZWZhdWx0RnVuYyA9IGQgPT4gdHJ1ZTtcblxuICBzd2l0Y2ggKGZpbHRlci50eXBlKSB7XG4gICAgY2FzZSBGSUxURVJfVFlQRVMucmFuZ2U6XG4gICAgICByZXR1cm4gZGF0YSA9PiBpc0luUmFuZ2UodmFsdWVBY2Nlc3NvcihkYXRhKSwgZmlsdGVyLnZhbHVlKTtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdDpcbiAgICAgIHJldHVybiBkYXRhID0+IGZpbHRlci52YWx1ZS5pbmNsdWRlcyh2YWx1ZUFjY2Vzc29yKGRhdGEpKTtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5zZWxlY3Q6XG4gICAgICByZXR1cm4gZGF0YSA9PiB2YWx1ZUFjY2Vzc29yKGRhdGEpID09PSBmaWx0ZXIudmFsdWU7XG4gICAgY2FzZSBGSUxURVJfVFlQRVMudGltZVJhbmdlOlxuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdEZ1bmM7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXBwZWRWYWx1ZSA9IGdldChmaWVsZCwgWydmaWx0ZXJQcm9wcycsICdtYXBwZWRWYWx1ZSddKTtcbiAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXkuaXNBcnJheShtYXBwZWRWYWx1ZSlcbiAgICAgICAgPyAoZGF0YSwgaW5kZXgpID0+IG1hcHBlZFZhbHVlW2luZGV4XVxuICAgICAgICA6IGRhdGEgPT4gdGltZVRvVW5peE1pbGxpKHZhbHVlQWNjZXNzb3IoZGF0YSksIGZpZWxkLmZvcm1hdCk7XG4gICAgICByZXR1cm4gKGRhdGEsIGluZGV4KSA9PiBpc0luUmFuZ2UoYWNjZXNzb3IoZGF0YSwgaW5kZXgpLCBmaWx0ZXIudmFsdWUpO1xuICAgIGNhc2UgRklMVEVSX1RZUEVTLnBvbHlnb246XG4gICAgICBpZiAoIWxheWVycyB8fCAhbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdEZ1bmM7XG4gICAgICB9XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBsYXllckZpbHRlckZ1bmN0aW9ucyA9IGZpbHRlci5sYXllcklkXG4gICAgICAgIC5tYXAoaWQgPT4gbGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBpZCkpXG4gICAgICAgIC5maWx0ZXIobCA9PiBsICYmIGwuY29uZmlnLmRhdGFJZCA9PT0gZGF0YUlkKVxuICAgICAgICAubWFwKGxheWVyID0+IGdldFBvbHlnb25GaWx0ZXJGdW5jdG9yKGxheWVyLCBmaWx0ZXIpKTtcblxuICAgICAgcmV0dXJuIChkYXRhLCBpbmRleCkgPT4gbGF5ZXJGaWx0ZXJGdW5jdGlvbnMuZXZlcnkoZmlsdGVyRnVuYyA9PiBmaWx0ZXJGdW5jKGRhdGEsIGluZGV4KSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0RnVuYztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRmlsdGVyRGF0YUlkKGRhdGFJZCkge1xuICByZXR1cm4gZ2V0RGVmYXVsdEZpbHRlcihkYXRhSWQpO1xufVxuXG4vKipcbiAqIEZpbHRlciBkYXRhIGJhc2VkIG9uIGFuIGFycmF5IG9mIGZpbHRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmZpbHRlckRhdGFzZXR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhc2V0KGRhdGFzZXQsIGZpbHRlcnMsIGxheWVycywgb3B0KSB7XG4gIGNvbnN0IHthbGxEYXRhLCBpZDogZGF0YUlkLCBmaWx0ZXJSZWNvcmQ6IG9sZEZpbHRlclJlY29yZCwgZmllbGRzfSA9IGRhdGFzZXQ7XG5cbiAgLy8gaWYgdGhlcmUgaXMgbm8gZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJSZWNvcmQgPSBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBmaWx0ZXJzLCBvcHQgfHwge30pO1xuXG4gIGNvbnN0IG5ld0RhdGFzZXQgPSBzZXQoWydmaWx0ZXJSZWNvcmQnXSwgZmlsdGVyUmVjb3JkLCBkYXRhc2V0KTtcblxuICBpZiAoIWZpbHRlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm5ld0RhdGFzZXQsXG4gICAgICBncHVGaWx0ZXI6IGdldEdwdUZpbHRlclByb3BzKGZpbHRlcnMsIGRhdGFJZCwgZmllbGRzKSxcbiAgICAgIGZpbHRlcmVkSW5kZXg6IGRhdGFzZXQuYWxsSW5kZXhlcyxcbiAgICAgIGZpbHRlcmVkSW5kZXhGb3JEb21haW46IGRhdGFzZXQuYWxsSW5kZXhlc1xuICAgIH07XG4gIH1cblxuICBjb25zdCBjaGFuZ2VkRmlsdGVycyA9IGRpZmZGaWx0ZXJzKGZpbHRlclJlY29yZCwgb2xkRmlsdGVyUmVjb3JkKTtcblxuICAvLyBnZW5lcmF0ZSAyIHNldHMgb2YgZmlsdGVyIHJlc3VsdFxuICAvLyBmaWx0ZXJlZEluZGV4IHVzZWQgdG8gY2FsY3VsYXRlIGxheWVyIGRhdGFcbiAgLy8gZmlsdGVyZWRJbmRleEZvckRvbWFpbiB1c2VkIHRvIGNhbGN1bGF0ZSBsYXllciBEb21haW5cbiAgY29uc3Qgc2hvdWxkQ2FsRG9tYWluID0gQm9vbGVhbihjaGFuZ2VkRmlsdGVycy5keW5hbWljRG9tYWluKTtcbiAgY29uc3Qgc2hvdWxkQ2FsSW5kZXggPSBCb29sZWFuKGNoYW5nZWRGaWx0ZXJzLmNwdSk7XG5cbiAgbGV0IGZpbHRlclJlc3VsdCA9IHt9O1xuICBpZiAoc2hvdWxkQ2FsRG9tYWluIHx8IHNob3VsZENhbEluZGV4KSB7XG4gICAgY29uc3QgZHluYW1pY0RvbWFpbkZpbHRlcnMgPSBzaG91bGRDYWxEb21haW4gPyBmaWx0ZXJSZWNvcmQuZHluYW1pY0RvbWFpbiA6IG51bGw7XG4gICAgY29uc3QgY3B1RmlsdGVycyA9IHNob3VsZENhbEluZGV4ID8gZmlsdGVyUmVjb3JkLmNwdSA6IG51bGw7XG5cbiAgICBjb25zdCBmaWx0ZXJGdW5jcyA9IGZpbHRlcnMucmVkdWNlKChhY2MsIGZpbHRlcikgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbmRleCA9IGdldERhdGFzZXRGaWVsZEluZGV4Rm9yRmlsdGVyKGRhdGFzZXQuaWQsIGZpbHRlcik7XG4gICAgICBjb25zdCBmaWVsZCA9IGZpZWxkSW5kZXggIT09IC0xID8gZmllbGRzW2ZpZWxkSW5kZXhdIDogbnVsbDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbZmlsdGVyLmlkXTogZ2V0RmlsdGVyRnVuY3Rpb24oZmllbGQsIGRhdGFzZXQuaWQsIGZpbHRlciwgbGF5ZXJzKVxuICAgICAgfTtcbiAgICB9LCB7fSk7XG5cbiAgICBmaWx0ZXJSZXN1bHQgPSBmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyhcbiAgICAgIHtkeW5hbWljRG9tYWluRmlsdGVycywgY3B1RmlsdGVycywgZmlsdGVyRnVuY3N9LFxuICAgICAgYWxsRGF0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLm5ld0RhdGFzZXQsXG4gICAgLi4uZmlsdGVyUmVzdWx0LFxuICAgIGdwdUZpbHRlcjogZ2V0R3B1RmlsdGVyUHJvcHMoZmlsdGVycywgZGF0YUlkLCBmaWVsZHMpXG4gIH07XG59XG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmlsdGVyRGF0YUJ5RmlsdGVyVHlwZXN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyh7ZHluYW1pY0RvbWFpbkZpbHRlcnMsIGNwdUZpbHRlcnMsIGZpbHRlckZ1bmNzfSwgYWxsRGF0YSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgLi4uKGR5bmFtaWNEb21haW5GaWx0ZXJzID8ge2ZpbHRlcmVkSW5kZXhGb3JEb21haW46IFtdfSA6IHt9KSxcbiAgICAuLi4oY3B1RmlsdGVycyA/IHtmaWx0ZXJlZEluZGV4OiBbXX0gOiB7fSlcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkID0gYWxsRGF0YVtpXTtcblxuICAgIGNvbnN0IG1hdGNoRm9yRG9tYWluID1cbiAgICAgIGR5bmFtaWNEb21haW5GaWx0ZXJzICYmIGR5bmFtaWNEb21haW5GaWx0ZXJzLmV2ZXJ5KGZpbHRlciA9PiBmaWx0ZXJGdW5jc1tmaWx0ZXIuaWRdKGQsIGkpKTtcblxuICAgIGlmIChtYXRjaEZvckRvbWFpbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzdWx0LmZpbHRlcmVkSW5kZXhGb3JEb21haW4ucHVzaChpKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaEZvclJlbmRlciA9IGNwdUZpbHRlcnMgJiYgY3B1RmlsdGVycy5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyRnVuY3NbZmlsdGVyLmlkXShkLCBpKSk7XG5cbiAgICBpZiAobWF0Y2hGb3JSZW5kZXIpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJlc3VsdC5maWx0ZXJlZEluZGV4LnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgYSByZWNvcmQgb2YgZmlsdGVycyBiYXNlZCBvbiBkb21haW4gdHlwZSBhbmQgZ3B1IC8gY3B1XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJSZWNvcmR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBmaWx0ZXJzLCBvcHQgPSB7fSkge1xuICAvKipcbiAgICogQHR5cGUge0ZpbHRlclJlY29yZH1cbiAgICovXG4gIGNvbnN0IGZpbHRlclJlY29yZCA9IHtcbiAgICBkeW5hbWljRG9tYWluOiBbXSxcbiAgICBmaXhlZERvbWFpbjogW10sXG4gICAgY3B1OiBbXSxcbiAgICBncHU6IFtdXG4gIH07XG5cbiAgZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xuICAgIGlmIChpc1ZhbGlkRmlsdGVyVmFsdWUoZi50eXBlLCBmLnZhbHVlKSAmJiB0b0FycmF5KGYuZGF0YUlkKS5pbmNsdWRlcyhkYXRhSWQpKSB7XG4gICAgICAoZi5maXhlZERvbWFpbiB8fCBvcHQuaWdub3JlRG9tYWluXG4gICAgICAgID8gZmlsdGVyUmVjb3JkLmZpeGVkRG9tYWluXG4gICAgICAgIDogZmlsdGVyUmVjb3JkLmR5bmFtaWNEb21haW5cbiAgICAgICkucHVzaChmKTtcblxuICAgICAgKGYuZ3B1ICYmICFvcHQuY3B1T25seSA/IGZpbHRlclJlY29yZC5ncHUgOiBmaWx0ZXJSZWNvcmQuY3B1KS5wdXNoKGYpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlclJlY29yZDtcbn1cblxuLyoqXG4gKiBDb21wYXJlIGZpbHRlciByZWNvcmRzIHRvIGdldCB3aGF0IGhhcyBjaGFuZ2VkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5kaWZmRmlsdGVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZGaWx0ZXJzKGZpbHRlclJlY29yZCwgb2xkRmlsdGVyUmVjb3JkID0ge30pIHtcbiAgbGV0IGZpbHRlckNoYW5nZWQgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhmaWx0ZXJSZWNvcmQpLmZvckVhY2goKFtyZWNvcmQsIGl0ZW1zXSkgPT4ge1xuICAgIGl0ZW1zLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IG9sZEZpbHRlciA9IChvbGRGaWx0ZXJSZWNvcmRbcmVjb3JkXSB8fCBbXSkuZmluZChmID0+IGYuaWQgPT09IGZpbHRlci5pZCk7XG5cbiAgICAgIGlmICghb2xkRmlsdGVyKSB7XG4gICAgICAgIC8vIGFkZGVkXG4gICAgICAgIGZpbHRlckNoYW5nZWQgPSBzZXQoW3JlY29yZCwgZmlsdGVyLmlkXSwgJ2FkZGVkJywgZmlsdGVyQ2hhbmdlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjaGVjayAgd2hhdCBoYXMgY2hhbmdlZFxuICAgICAgICBbJ25hbWUnLCAndmFsdWUnLCAnZGF0YUlkJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyW3Byb3BdICE9PSBvbGRGaWx0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIGZpbHRlckNoYW5nZWQgPSBzZXQoW3JlY29yZCwgZmlsdGVyLmlkXSwgYCR7cHJvcH1fY2hhbmdlZGAsIGZpbHRlckNoYW5nZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAob2xkRmlsdGVyUmVjb3JkW3JlY29yZF0gfHwgW10pLmZvckVhY2gob2xkRmlsdGVyID0+IHtcbiAgICAgIC8vIGRlbGV0ZWRcbiAgICAgIGlmICghaXRlbXMuZmluZChmID0+IGYuaWQgPT09IG9sZEZpbHRlci5pZCkpIHtcbiAgICAgICAgZmlsdGVyQ2hhbmdlZCA9IHNldChbcmVjb3JkLCBvbGRGaWx0ZXIuaWRdLCAnZGVsZXRlZCcsIGZpbHRlckNoYW5nZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFmaWx0ZXJDaGFuZ2VkW3JlY29yZF0pIHtcbiAgICAgIGZpbHRlckNoYW5nZWRbcmVjb3JkXSA9IG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmaWx0ZXJDaGFuZ2VkO1xufVxuLyoqXG4gKiBDYWxsIGJ5IHBhcnNpbmcgZmlsdGVycyBmcm9tIFVSTFxuICogQ2hlY2sgaWYgdmFsdWUgb2YgZmlsdGVyIHdpdGhpbiBmaWx0ZXIgZG9tYWluLCBpZiBub3QgYWRqdXN0IGl0IHRvIG1hdGNoXG4gKiBmaWx0ZXIgZG9tYWluXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbn1cbiAqIEByZXR1cm5zIHZhbHVlIC0gYWRqdXN0ZWQgdmFsdWUgdG8gbWF0Y2ggZmlsdGVyIG9yIG51bGwgdG8gcmVtb3ZlIGZpbHRlclxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbih2YWx1ZSwge2RvbWFpbiwgdHlwZX0pIHtcbiAgaWYgKCFkb21haW4gfHwgIXR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5yYW5nZTpcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy50aW1lUmFuZ2U6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCAhPT0gMikge1xuICAgICAgICByZXR1cm4gZG9tYWluLm1hcChkID0+IGQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUubWFwKChkLCBpKSA9PiAobm90TnVsbG9yVW5kZWZpbmVkKGQpICYmIGlzSW5SYW5nZShkLCBkb21haW4pID8gZCA6IGRvbWFpbltpXSkpO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB2YWx1ZS5maWx0ZXIoZCA9PiBkb21haW4uaW5jbHVkZXMoZCkpO1xuICAgICAgcmV0dXJuIGZpbHRlcmVkVmFsdWUubGVuZ3RoID8gZmlsdGVyZWRWYWx1ZSA6IFtdO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxuICAgICAgcmV0dXJuIGRvbWFpbi5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIENhbGN1bGF0ZSBudW1lcmljIGRvbWFpbiBhbmQgc3VpdGFibGUgc3RlcFxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldE51bWVyaWNGaWVsZERvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWVyaWNGaWVsZERvbWFpbihkYXRhLCB2YWx1ZUFjY2Vzc29yKSB7XG4gIGxldCBkb21haW4gPSBbMCwgMV07XG4gIGxldCBzdGVwID0gMC4xO1xuXG4gIGNvbnN0IG1hcHBlZFZhbHVlID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKHZhbHVlQWNjZXNzb3IpIDogW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgZG9tYWluID0gU2NhbGVVdGlscy5nZXRMaW5lYXJEb21haW4obWFwcGVkVmFsdWUpO1xuICAgIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG5cbiAgICAvLyBpbiBjYXNlIGVxdWFsIGRvbWFpbiwgWzk2LCA5Nl0sIHdoaWNoIHdpbGwgYnJlYWsgcXVhbnRpemUgc2NhbGVcbiAgICBpZiAoIWRpZmYpIHtcbiAgICAgIGRvbWFpblsxXSA9IGRvbWFpblswXSArIDE7XG4gICAgfVxuXG4gICAgc3RlcCA9IGdldE51bWVyaWNTdGVwU2l6ZShkaWZmKSB8fCBzdGVwO1xuICAgIGRvbWFpblswXSA9IGZvcm1hdE51bWJlckJ5U3RlcChkb21haW5bMF0sIHN0ZXAsICdmbG9vcicpO1xuICAgIGRvbWFpblsxXSA9IGZvcm1hdE51bWJlckJ5U3RlcChkb21haW5bMV0sIHN0ZXAsICdjZWlsJyk7XG4gIH1cblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHtoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfSA9IGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKTtcblxuICByZXR1cm4ge2RvbWFpbiwgc3RlcCwgaGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHN0ZXAgc2l6ZSBmb3IgcmFuZ2UgYW5kIHRpbWVyYW5nZSBmaWx0ZXJcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXROdW1lcmljU3RlcFNpemV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljU3RlcFNpemUoZGlmZikge1xuICBkaWZmID0gTWF0aC5hYnMoZGlmZik7XG5cbiAgaWYgKGRpZmYgPiAxMDApIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMykge1xuICAgIHJldHVybiAwLjAxO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAxKSB7XG4gICAgcmV0dXJuIDAuMDAxO1xuICB9XG4gIC8vIFRyeSB0byBnZXQgYXQgbGVhc3QgMTAwMCBzdGVwcyAtIGFuZCBrZWVwIHRoZSBzdGVwIHNpemUgYmVsb3cgdGhhdCBvZlxuICAvLyB0aGUgKGRpZmYgPiAxKSBjYXNlLlxuICBjb25zdCB4ID0gZGlmZiAvIDEwMDA7XG4gIC8vIEZpbmQgdGhlIGV4cG9uZW50IGFuZCB0cnVuY2F0ZSB0byAxMCB0byB0aGUgcG93ZXIgb2YgdGhhdCBleHBvbmVudFxuXG4gIGNvbnN0IGV4cG9uZW50aWFsRm9ybSA9IHgudG9FeHBvbmVudGlhbCgpO1xuICBjb25zdCBleHBvbmVudCA9IHBhcnNlRmxvYXQoZXhwb25lbnRpYWxGb3JtLnNwbGl0KCdlJylbMV0pO1xuXG4gIC8vIEdldHRpbmcgcmVhZHkgZm9yIG5vZGUgMTJcbiAgLy8gdGhpcyBpcyB3aHkgd2UgbmVlZCBkZWNpbWFsLmpzXG4gIC8vIE1hdGgucG93KDEwLCAtNSkgPSAwLjAwMDAwOTk5OTk5OTk5OTk5OTk5OVxuICAvLyB0aGUgYWJvdmUgcmVzdWx0IHNob3dzIGluIGJyb3dzZXIgYW5kIG5vZGUgMTBcbiAgLy8gbm9kZSAxMiBiZWhhdmVzIGNvcnJlY3RseVxuICByZXR1cm4gbmV3IERlY2ltYWwoMTApLnBvdyhleHBvbmVudCkudG9OdW1iZXIoKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGltZXN0YW1wIGRvbWFpbiBhbmQgc3VpdGFibGUgc3RlcFxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldFRpbWVzdGFtcEZpZWxkRG9tYWlufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXN0YW1wRmllbGREb21haW4oZGF0YSwgdmFsdWVBY2Nlc3Nvcikge1xuICAvLyB0byBhdm9pZCBjb252ZXJ0aW5nIHN0cmluZyBmb3JtYXQgdGltZSB0byBlcG9jaFxuICAvLyBldmVyeSB0aW1lIHdlIGNvbXBhcmUgd2Ugc3RvcmUgYSB2YWx1ZSBtYXBwZWQgdG8gaW50IGluIGZpbHRlciBkb21haW5cblxuICBjb25zdCBtYXBwZWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLm1hcCh2YWx1ZUFjY2Vzc29yKSA6IFtdO1xuICBjb25zdCBkb21haW4gPSBTY2FsZVV0aWxzLmdldExpbmVhckRvbWFpbihtYXBwZWRWYWx1ZSk7XG4gIGxldCBzdGVwID0gMC4wMTtcblxuICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xuICBjb25zdCBlbnRyeSA9IFRpbWVzdGFtcFN0ZXBNYXAuZmluZChmID0+IGYubWF4ID49IGRpZmYpO1xuICBpZiAoZW50cnkpIHtcbiAgICBzdGVwID0gZW50cnkuc3RlcDtcbiAgfVxuXG4gIGNvbnN0IHtoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfSA9IGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKTtcblxuICByZXR1cm4ge2RvbWFpbiwgc3RlcCwgbWFwcGVkVmFsdWUsIGhpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19O1xufVxuXG4vKipcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5oaXN0b2dyYW1Db25zdHJ1Y3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaXN0b2dyYW1Db25zdHJ1Y3QoZG9tYWluLCBtYXBwZWRWYWx1ZSwgYmlucykge1xuICByZXR1cm4gZDNIaXN0b2dyYW0oKVxuICAgIC50aHJlc2hvbGRzKHRpY2tzKGRvbWFpblswXSwgZG9tYWluWzFdLCBiaW5zKSlcbiAgICAuZG9tYWluKGRvbWFpbikobWFwcGVkVmFsdWUpXG4gICAgLm1hcChiaW4gPT4gKHtcbiAgICAgIGNvdW50OiBiaW4ubGVuZ3RoLFxuICAgICAgeDA6IGJpbi54MCxcbiAgICAgIHgxOiBiaW4ueDFcbiAgICB9KSk7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBoaXN0b2dyYW0gZnJvbSBkb21haW4gYW5kIGFycmF5IG9mIHZhbHVlc1xuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEhpc3RvZ3JhbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKSB7XG4gIGNvbnN0IGhpc3RvZ3JhbSA9IGhpc3RvZ3JhbUNvbnN0cnVjdChkb21haW4sIG1hcHBlZFZhbHVlLCBoaXN0b2dyYW1CaW5zKTtcbiAgY29uc3QgZW5sYXJnZWRIaXN0b2dyYW0gPSBoaXN0b2dyYW1Db25zdHJ1Y3QoZG9tYWluLCBtYXBwZWRWYWx1ZSwgZW5sYXJnZWRIaXN0b2dyYW1CaW5zKTtcblxuICByZXR1cm4ge2hpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19O1xufVxuXG4vKipcbiAqIHJvdW5kIG51bWJlciBiYXNlZCBvbiBzdGVwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZFxuICogQHJldHVybnMge051bWJlcn0gcm91bmRlZCBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlckJ5U3RlcCh2YWwsIHN0ZXAsIGJvdW5kKSB7XG4gIGlmIChib3VuZCA9PT0gJ2Zsb29yJykge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCAqICgxIC8gc3RlcCkpIC8gKDEgLyBzdGVwKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLmNlaWwodmFsICogKDEgLyBzdGVwKSkgLyAoMSAvIHN0ZXApO1xufVxuXG4vKipcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5pc0luUmFuZ2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luUmFuZ2UodmFsLCBkb21haW4pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRvbWFpbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsID49IGRvbWFpblswXSAmJiB2YWwgPD0gZG9tYWluWzFdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHBvaW50IGlzIHdpdGhpbiB0aGUgcHJvdmlkZWQgcG9seWdvblxuICpcbiAqIEBwYXJhbSBwb2ludCBhcyBpbnB1dCBzZWFyY2ggW2xhdCwgbG5nXVxuICogQHBhcmFtIHBvbHlnb24gUG9pbnRzIG11c3QgYmUgd2l0aGluIHRoZXNlIChNdWx0aSlQb2x5Z29uKHMpXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJblBvbHlnb24ocG9pbnQsIHBvbHlnb24pIHtcbiAgcmV0dXJuIGJvb2xlYW5XaXRoaW4odHVyZlBvaW50KHBvaW50KSwgcG9seWdvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIoZG9tYWluKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkb21haW4pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZG9tYWluWzFdIC0gZG9tYWluWzBdO1xuICByZXR1cm4gZGlmZiA+IGR1cmF0aW9uWWVhclxuICAgID8gJ01NL0REL1lZJ1xuICAgIDogZGlmZiA+IGR1cmF0aW9uRGF5XG4gICAgPyAnTU0vREQvWVkgaGg6bW1hJ1xuICAgIDogJ01NL0REL1lZIGhoOm1tOnNzYSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRvbWFpbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG4gIHJldHVybiBkaWZmID4gZHVyYXRpb25ZZWFyXG4gICAgPyAnTU0vREQvWVknXG4gICAgOiBkaWZmID4gZHVyYXRpb25XZWVrXG4gICAgPyAnTU0vREQnXG4gICAgOiBkaWZmID4gZHVyYXRpb25EYXlcbiAgICA/ICdNTS9ERCBoaGEnXG4gICAgOiBkaWZmID4gZHVyYXRpb25Ib3VyXG4gICAgPyAnaGg6bW1hJ1xuICAgIDogJ2hoOm1tOnNzYSc7XG59XG5cbi8qKlxuICogU2FuaXR5IGNoZWNrIG9uIGZpbHRlcnMgdG8gcHJlcGFyZSBmb3Igc2F2ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuaXNWYWxpZEZpbHRlclZhbHVlfVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEZpbHRlclZhbHVlKHR5cGUsIHZhbHVlKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5zZWxlY3Q6XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMucmFuZ2U6XG4gICAgY2FzZSBGSUxURVJfVFlQRVMudGltZVJhbmdlOlxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KHYgPT4gdiAhPT0gbnVsbCAmJiAhaXNOYU4odikpO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQm9vbGVhbih2YWx1ZS5sZW5ndGgpO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuaW5wdXQ6XG4gICAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5sZW5ndGgpO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMucG9seWdvbjpcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0KHZhbHVlLCBbJ2dlb21ldHJ5JywgJ2Nvb3JkaW5hdGVzJ10pO1xuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUgJiYgdmFsdWUuaWQgJiYgY29vcmRpbmF0ZXMpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlclBsb3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJQbG90KGZpbHRlciwgYWxsRGF0YSkge1xuICBpZiAoZmlsdGVyLnBsb3RUeXBlID09PSBQTE9UX1RZUEVTLmhpc3RvZ3JhbSB8fCAhZmlsdGVyLnlBeGlzKSB7XG4gICAgLy8gaGlzdG9ncmFtIHNob3VsZCBiZSBjYWxjdWxhdGVkIHdoZW4gY3JlYXRlIGZpbHRlclxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IHttYXBwZWRWYWx1ZSA9IFtdfSA9IGZpbHRlcjtcbiAgY29uc3Qge3lBeGlzfSA9IGZpbHRlcjtcblxuICAvLyByZXR1cm4gbGluZUNoYXJ0XG4gIGNvbnN0IHNlcmllcyA9IGFsbERhdGFcbiAgICAubWFwKChkLCBpKSA9PiAoe1xuICAgICAgeDogbWFwcGVkVmFsdWVbaV0sXG4gICAgICB5OiBkW3lBeGlzLnRhYmxlRmllbGRJbmRleCAtIDFdXG4gICAgfSkpXG4gICAgLmZpbHRlcigoe3gsIHl9KSA9PiBOdW1iZXIuaXNGaW5pdGUoeCkgJiYgTnVtYmVyLmlzRmluaXRlKHkpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhc2NlbmRpbmcoYS54LCBiLngpKTtcblxuICBjb25zdCB5RG9tYWluID0gZXh0ZW50KHNlcmllcywgZCA9PiBkLnkpO1xuICBjb25zdCB4RG9tYWluID0gW3Nlcmllc1swXS54LCBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnhdO1xuXG4gIHJldHVybiB7bGluZUNoYXJ0OiB7c2VyaWVzLCB5RG9tYWluLCB4RG9tYWlufSwgeUF4aXN9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlKGZpbHRlcikge1xuICBjb25zdCBmaWx0ZXJQbG90VHlwZXMgPSBTdXBwb3J0ZWRQbG90VHlwZVtmaWx0ZXIudHlwZV07XG4gIGlmICghZmlsdGVyUGxvdFR5cGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWZpbHRlci55QXhpcykge1xuICAgIHJldHVybiBmaWx0ZXJQbG90VHlwZXMuZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJQbG90VHlwZXNbZmlsdGVyLnlBeGlzLnR5cGVdIHx8IG51bGw7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBkYXRhc2V0SWRzIGxpc3Qgb2YgZGF0YXNldCBpZHMgdG8gYmUgZmlsdGVyZWRcbiAqIEBwYXJhbSBkYXRhc2V0cyBhbGwgZGF0YXNldHNcbiAqIEBwYXJhbSBmaWx0ZXJzIGFsbCBmaWx0ZXJzIHRvIGJlIGFwcGxpZWQgdG8gZGF0YXNldHNcbiAqIEByZXR1cm4gZGF0YXNldHMgLSBuZXcgdXBkYXRlZCBkYXRhc2V0c1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuYXBwbHlGaWx0ZXJzVG9EYXRhc2V0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YXNldElkcywgZGF0YXNldHMsIGZpbHRlcnMsIGxheWVycykge1xuICBjb25zdCBkYXRhSWRzID0gdG9BcnJheShkYXRhc2V0SWRzKTtcbiAgcmV0dXJuIGRhdGFJZHMucmVkdWNlKChhY2MsIGRhdGFJZCkgPT4ge1xuICAgIGNvbnN0IGxheWVyc1RvRmlsdGVyID0gKGxheWVycyB8fCBbXSkuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkID09PSBkYXRhSWQpO1xuICAgIGNvbnN0IGFwcGxpZWRGaWx0ZXJzID0gZmlsdGVycy5maWx0ZXIoZCA9PiBzaG91bGRBcHBseUZpbHRlcihkLCBkYXRhSWQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICBbZGF0YUlkXTogZmlsdGVyRGF0YXNldChkYXRhc2V0c1tkYXRhSWRdLCBhcHBsaWVkRmlsdGVycywgbGF5ZXJzVG9GaWx0ZXIsIHt9KVxuICAgIH07XG4gIH0sIGRhdGFzZXRzKTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgbmV3IGZpZWxkIG5hbWUgdmFsdWUgdG8gZmllbHRlciBhbmQgdXBkYXRlIGJvdGggZmlsdGVyIGFuZCBkYXRhc2V0XG4gKiBAcGFyYW0gZmlsdGVyIC0gdG8gYmUgYXBwbGllZCB0aGUgbmV3IGZpZWxkIG5hbWUgb25cbiAqIEBwYXJhbSBkYXRhc2V0IC0gZGF0YXNldCB0aGUgZmllbGQgYmVsb25ncyB0b1xuICogQHBhcmFtIGZpZWxkTmFtZSAtIGZpZWxkLm5hbWVcbiAqIEBwYXJhbSBmaWx0ZXJEYXRhc2V0SW5kZXggLSBmaWVsZC5uYW1lXG4gKiBAcGFyYW0gb3B0aW9uXG4gKiBAcmV0dXJuIC0ge2ZpbHRlciwgZGF0YXNldHN9XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5hcHBseUZpbHRlckZpZWxkTmFtZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsdGVyRmllbGROYW1lKGZpbHRlciwgZGF0YXNldCwgZmllbGROYW1lLCBmaWx0ZXJEYXRhc2V0SW5kZXggPSAwLCBvcHRpb24pIHtcbiAgLy8gdXNpbmcgZmlsdGVyRGF0YXNldEluZGV4IHdlIGNhbiBmaWx0ZXIgb25seSB0aGUgc3BlY2lmaWVkIGRhdGFzZXRcbiAgY29uc3QgbWVyZ2VEb21haW4gPSBvcHRpb24gJiYgb3B0aW9uLmhhc093blByb3BlcnR5KCdtZXJnZURvbWFpbicpID8gb3B0aW9uLm1lcmdlRG9tYWluIDogZmFsc2U7XG4gIGNvbnN0IHtmaWVsZHMsIGFsbERhdGF9ID0gZGF0YXNldDtcblxuICBjb25zdCBmaWVsZEluZGV4ID0gZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcbiAgLy8gaWYgbm8gZmllbGQgd2l0aCBzYW1lIG5hbWUgaXMgZm91bmQsIG1vdmUgdG8gdGhlIG5leHQgZGF0YXNldHNcbiAgaWYgKGZpZWxkSW5kZXggPT09IC0xKSB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBmaWVsZEluZGV4IG5vdCBmb3VuZC4gRGF0YXNldCBtdXN0IGNvbnRhaW4gYSBwcm9wZXJ0eSB3aXRoIG5hbWU6ICR7ZmllbGROYW1lfWApO1xuICAgIHJldHVybiB7ZmlsdGVyOiBudWxsLCBkYXRhc2V0fTtcbiAgfVxuXG4gIC8vIFRPRE86IHZhbGlkYXRlIGZpZWxkIHR5cGVcbiAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGRJbmRleF07XG4gIGNvbnN0IGZpbHRlclByb3BzID0gZmllbGQuaGFzT3duUHJvcGVydHkoJ2ZpbHRlclByb3BzJylcbiAgICA/IGZpZWxkLmZpbHRlclByb3BzXG4gICAgOiBnZXRGaWx0ZXJQcm9wcyhhbGxEYXRhLCBmaWVsZCk7XG5cbiAgY29uc3QgbmV3RmlsdGVyID0ge1xuICAgIC4uLihtZXJnZURvbWFpbiA/IG1lcmdlRmlsdGVyRG9tYWluU3RlcChmaWx0ZXIsIGZpbHRlclByb3BzKSA6IHsuLi5maWx0ZXIsIC4uLmZpbHRlclByb3BzfSksXG4gICAgbmFtZTogT2JqZWN0LmFzc2lnbihbLi4udG9BcnJheShmaWx0ZXIubmFtZSldLCB7W2ZpbHRlckRhdGFzZXRJbmRleF06IGZpZWxkLm5hbWV9KSxcbiAgICBmaWVsZElkeDogT2JqZWN0LmFzc2lnbihbLi4udG9BcnJheShmaWx0ZXIuZmllbGRJZHgpXSwge1xuICAgICAgW2ZpbHRlckRhdGFzZXRJbmRleF06IGZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDFcbiAgICB9KSxcbiAgICAvLyBUT0RPLCBzaW5jZSB3ZSBhbGxvdyB0byBhZGQgbXVsdGlwbGUgZmllbGRzIHRvIGEgZmlsdGVyIHdlIGNhbiBubyBsb25nZXIgZnJlZXplIHRoZSBmaWx0ZXJcbiAgICBmcmVlemU6IHRydWVcbiAgfTtcblxuICBjb25zdCBmaWVsZFdpdGhGaWx0ZXJQcm9wcyA9IHtcbiAgICAuLi5maWVsZCxcbiAgICBmaWx0ZXJQcm9wc1xuICB9O1xuXG4gIGNvbnN0IG5ld0ZpZWxkcyA9IE9iamVjdC5hc3NpZ24oWy4uLmZpZWxkc10sIHtbZmllbGRJbmRleF06IGZpZWxkV2l0aEZpbHRlclByb3BzfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXI6IG5ld0ZpbHRlcixcbiAgICBkYXRhc2V0OiB7XG4gICAgICAuLi5kYXRhc2V0LFxuICAgICAgZmllbGRzOiBuZXdGaWVsZHNcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogTWVyZ2Ugb25lIGZpbHRlciB3aXRoIG90aGVyIGZpbHRlciBwcm9wIGRvbWFpblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykubWVyZ2VGaWx0ZXJEb21haW5TdGVwfVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGaWx0ZXJEb21haW5TdGVwKGZpbHRlciwgZmlsdGVyUHJvcHMpIHtcbiAgaWYgKCFmaWx0ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghZmlsdGVyUHJvcHMpIHtcbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG5cbiAgaWYgKChmaWx0ZXIuZmllbGRUeXBlICYmIGZpbHRlci5maWVsZFR5cGUgIT09IGZpbHRlclByb3BzLmZpZWxkVHlwZSkgfHwgIWZpbHRlclByb3BzLmRvbWFpbikge1xuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBjb25zdCBjb21iaW5lZERvbWFpbiA9ICFmaWx0ZXIuZG9tYWluXG4gICAgPyBmaWx0ZXJQcm9wcy5kb21haW5cbiAgICA6IFsuLi4oZmlsdGVyLmRvbWFpbiB8fCBbXSksIC4uLihmaWx0ZXJQcm9wcy5kb21haW4gfHwgW10pXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgY29uc3QgbmV3RmlsdGVyID0ge1xuICAgIC4uLmZpbHRlcixcbiAgICAuLi5maWx0ZXJQcm9wcyxcbiAgICBkb21haW46IFtjb21iaW5lZERvbWFpblswXSwgY29tYmluZWREb21haW5bY29tYmluZWREb21haW4ubGVuZ3RoIC0gMV1dXG4gIH07XG5cbiAgc3dpdGNoIChmaWx0ZXJQcm9wcy5maWVsZFR5cGUpIHtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc6XG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuZGF0ZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld0ZpbHRlcixcbiAgICAgICAgZG9tYWluOiB1bmlxdWUoY29tYmluZWREb21haW4pLnNvcnQoKVxuICAgICAgfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHN0ZXAgPSBmaWx0ZXIuc3RlcCA8IGZpbHRlclByb3BzLnN0ZXAgPyBmaWx0ZXIuc3RlcCA6IGZpbHRlclByb3BzLnN0ZXA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld0ZpbHRlcixcbiAgICAgICAgc3RlcFxuICAgICAgfTtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXdGaWx0ZXI7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIEdlbmVyYXRlcyBwb2x5Z29uIGZpbHRlclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmVhdHVyZVRvRmlsdGVyVmFsdWV9XG4gKi9cbmV4cG9ydCBjb25zdCBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSA9IChmZWF0dXJlLCBmaWx0ZXJJZCwgcHJvcGVydGllcyA9IHt9KSA9PiAoe1xuICAuLi5mZWF0dXJlLFxuICBpZDogZmVhdHVyZS5pZCxcbiAgcHJvcGVydGllczoge1xuICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcbiAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIGZpbHRlcklkXG4gIH1cbn0pO1xuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlcklkSW5GZWF0dXJlfVxuICovXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVySWRJbkZlYXR1cmUgPSBmID0+IGdldChmLCBbJ3Byb3BlcnRpZXMnLCAnZmlsdGVySWQnXSk7XG5cbi8qKlxuICogR2VuZXJhdGVzIHBvbHlnb24gZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZW5lcmF0ZVBvbHlnb25GaWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIobGF5ZXJzLCBmZWF0dXJlKSB7XG4gIGNvbnN0IGRhdGFJZCA9IGxheWVycy5tYXAobCA9PiBsLmNvbmZpZy5kYXRhSWQpLmZpbHRlcihkID0+IGQpO1xuICBjb25zdCBsYXllcklkID0gbGF5ZXJzLm1hcChsID0+IGwuaWQpO1xuICBjb25zdCBuYW1lID0gbGF5ZXJzLm1hcChsID0+IGwuY29uZmlnLmxhYmVsKTtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBmaWx0ZXIgPSBnZXREZWZhdWx0RmlsdGVyKGRhdGFJZCk7XG4gIHJldHVybiB7XG4gICAgLi4uZmlsdGVyLFxuICAgIGZpeGVkRG9tYWluOiB0cnVlLFxuICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5wb2x5Z29uLFxuICAgIG5hbWUsXG4gICAgbGF5ZXJJZCxcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVyLmlkLCB7aXNWaXNpYmxlOiB0cnVlfSlcbiAgfTtcbn1cblxuLyoqXG4gKiBSdW4gZmlsdGVyIGVudGlyZWx5IG9uIENQVVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmlsdGVyRGF0YXNldENQVX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRhdGFzZXRDUFUoc3RhdGUsIGRhdGFJZCkge1xuICBjb25zdCBkYXRhc2V0RmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGYgPT4gZi5kYXRhSWQuaW5jbHVkZXMoZGF0YUlkKSk7XG4gIGNvbnN0IHNlbGVjdGVkRGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG5cbiAgaWYgKCFzZWxlY3RlZERhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBvcHQgPSB7XG4gICAgY3B1T25seTogdHJ1ZSxcbiAgICBpZ25vcmVEb21haW46IHRydWVcbiAgfTtcblxuICBpZiAoIWRhdGFzZXRGaWx0ZXJzLmxlbmd0aCkge1xuICAgIC8vIG5vIGZpbHRlclxuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgLi4uc2VsZWN0ZWREYXRhc2V0LFxuICAgICAgZmlsdGVyZWRJZHhDUFU6IHNlbGVjdGVkRGF0YXNldC5hbGxJbmRleGVzLFxuICAgICAgZmlsdGVyUmVjb3JkQ1BVOiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBzdGF0ZS5maWx0ZXJzLCBvcHQpXG4gICAgfTtcblxuICAgIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIGZpbHRlcmVkLCBzdGF0ZSk7XG4gIH1cblxuICAvLyBubyBncHUgZmlsdGVyXG4gIGlmICghZGF0YXNldEZpbHRlcnMuZmluZChmID0+IGYuZ3B1KSkge1xuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgLi4uc2VsZWN0ZWREYXRhc2V0LFxuICAgICAgZmlsdGVyZWRJZHhDUFU6IHNlbGVjdGVkRGF0YXNldC5maWx0ZXJlZEluZGV4LFxuICAgICAgZmlsdGVyUmVjb3JkQ1BVOiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBzdGF0ZS5maWx0ZXJzLCBvcHQpXG4gICAgfTtcbiAgICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWRdLCBmaWx0ZXJlZCwgc3RhdGUpO1xuICB9XG5cbiAgLy8gbWFrZSBhIGNvcHkgZm9yIGNwdSBmaWx0ZXJpbmdcbiAgY29uc3QgY29waWVkID0ge1xuICAgIC4uLnNlbGVjdGVkRGF0YXNldCxcbiAgICBmaWx0ZXJSZWNvcmQ6IHNlbGVjdGVkRGF0YXNldC5maWx0ZXJSZWNvcmRDUFUsXG4gICAgZmlsdGVyZWRJbmRleDogc2VsZWN0ZWREYXRhc2V0LmZpbHRlcmVkSWR4Q1BVIHx8IFtdXG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJEYXRhc2V0KGNvcGllZCwgc3RhdGUuZmlsdGVycywgc3RhdGUubGF5ZXJzLCBvcHQpO1xuXG4gIGNvbnN0IGNwdUZpbHRlcmVkRGF0YXNldCA9IHtcbiAgICAuLi5zZWxlY3RlZERhdGFzZXQsXG4gICAgZmlsdGVyZWRJZHhDUFU6IGZpbHRlcmVkLmZpbHRlcmVkSW5kZXgsXG4gICAgZmlsdGVyUmVjb3JkQ1BVOiBmaWx0ZXJlZC5maWx0ZXJSZWNvcmRcbiAgfTtcblxuICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWRdLCBjcHVGaWx0ZXJlZERhdGFzZXQsIHN0YXRlKTtcbn1cbiJdfQ==