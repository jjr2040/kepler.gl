"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _extensions = require("@deck.gl/extensions");

var _core = require("@deck.gl/core");

var _layers = require("@deck.gl/layers");

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _layerUpdate = require("./layer-update");

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _dataScaleUtils = require("../utils/data-scale-utils");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var MAX_SAMPLE_SIZE = 5000;
var dataFilterExtension = new _extensions.DataFilterExtension({
  filterSize: _defaultSettings.MAX_GPU_FILTERS
});

var identity = function identity(d) {
  return d;
};

var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return d[field.tableFieldIndex - 1];
};

var Layer = /*#__PURE__*/function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(6); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {};
    this.config = this.getDefaultLayerConfig(_objectSpread({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        hidden: props.hidden || false,
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: _defaultSettings.SCALE_TYPES.quantile,
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: _defaultSettings.SCALE_TYPES.linear,
        sizeField: null,
        visConfig: {},
        textLabel: [_layerFactory.DEFAULT_TEXT_LABEL],
        colorUI: {
          color: _layerFactory.DEFAULT_COLOR_UI,
          colorRange: _layerFactory.DEFAULT_COLOR_UI
        },
        animation: {
          enabled: false
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.tableFieldIndex - 1
      } : {
        value: null,
        fieldIdx: -1
      };
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, this.config.columns[key]), update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _objectSpread3;

      if (!this.columnPairs || !this.columnPairs[key]) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = this.columnPairs[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;
      var partnerFieldPairKey = this.columnPairs[partnerKey].fieldPairKey;
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
     * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
     * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
     * @param mapState
     * @param mapState.zoom - actual zoom
     * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      // don't deep merge color range, reversed: is not a key by default
      var shallowCopy = ['colorRange', 'strokeColorRange'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.field;
      })); // don't copy over domain and animation

      var notToCopy = ['animation'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      })); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        shallowCopy: shallowCopy,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} shallowCopy - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$shallowCopy = _ref3.shallowCopy,
          shallowCopy = _ref3$shallowCopy === void 0 ? [] : _ref3$shallowCopy,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !shallowCopy.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            shallowCopy: shallowCopy,
            notToCopy: notToCopy
          });
        } else if ((0, _dataUtils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item].hasOwnProperty(p);
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var columnValidators = this.columnValidators || {};
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, columnValidators[key] ? {
          value: null,
          fieldIdx: -1,
          validator: columnValidators[key]
        } : {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return _objectSpread(_objectSpread({}, required), optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = _objectSpread(_objectSpread({}, this.config), newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = _objectSpread(_objectSpread({}, this.config.visConfig), newVisConfig);
      return this;
    }
  }, {
    key: "updateLayerColorUI",
    value: function updateLayerColorUI(prop, newConfig) {
      var _this$config = this.config,
          previous = _this$config.colorUI,
          visConfig = _this$config.visConfig;

      if (!(0, _utils.isPlainObject)(newConfig) || typeof prop !== 'string') {
        return this;
      }

      var colorUIProp = Object.entries(newConfig).reduce(function (accu, _ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(accu[key]) && (0, _utils.isPlainObject)(value) ? _objectSpread(_objectSpread({}, accu[key]), value) : value));
      }, previous[prop] || _layerFactory.DEFAULT_COLOR_UI);

      var colorUI = _objectSpread(_objectSpread({}, previous), {}, (0, _defineProperty2["default"])({}, prop, colorUIProp));

      this.updateLayerConfig({
        colorUI: colorUI
      }); // if colorUI[prop] is colorRange

      var isColorRange = visConfig[prop] && visConfig[prop].colors;

      if (isColorRange) {
        this.updateColorUIByColorRange(newConfig, prop);
        this.updateColorRangeByColorUI(newConfig, previous, prop);
        this.updateCustomPalette(newConfig, previous, prop);
      }

      return this;
    }
  }, {
    key: "updateCustomPalette",
    value: function updateCustomPalette(newConfig, previous, prop) {
      if (!newConfig.colorRangeConfig || !newConfig.colorRangeConfig.custom) {
        return;
      }

      var _this$config2 = this.config,
          colorUI = _this$config2.colorUI,
          visConfig = _this$config2.visConfig;
      if (!visConfig[prop]) return;
      var colors = visConfig[prop].colors;

      var customPalette = _objectSpread(_objectSpread({}, colorUI[prop].customPalette), {}, {
        name: 'Custom Palette',
        colors: (0, _toConsumableArray2["default"])(colors)
      });

      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          customPalette: customPalette
        })))
      });
    }
    /**
     * if open dropdown and prop is color range
     * Automatically set colorRangeConfig's step and reversed
     * @param {*} newConfig
     * @param {*} prop
     */

  }, {
    key: "updateColorUIByColorRange",
    value: function updateColorUIByColorRange(newConfig, prop) {
      if (typeof newConfig.showDropdown !== 'number') return;
      var _this$config3 = this.config,
          colorUI = _this$config3.colorUI,
          visConfig = _this$config3.visConfig;
      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          colorRangeConfig: _objectSpread(_objectSpread({}, colorUI[prop].colorRangeConfig), {}, {
            steps: visConfig[prop].colors.length,
            reversed: Boolean(visConfig[prop].reversed)
          })
        })))
      });
    }
  }, {
    key: "updateColorRangeByColorUI",
    value: function updateColorRangeByColorUI(newConfig, previous, prop) {
      // only update colorRange if changes in UI is made to 'reversed', 'steps' or steps
      var shouldUpdate = newConfig.colorRangeConfig && ['reversed', 'steps'].some(function (key) {
        return newConfig.colorRangeConfig.hasOwnProperty(key) && newConfig.colorRangeConfig[key] !== (previous[prop] || _layerFactory.DEFAULT_COLOR_UI).colorRangeConfig[key];
      });
      if (!shouldUpdate) return;
      var _this$config4 = this.config,
          colorUI = _this$config4.colorUI,
          visConfig = _this$config4.visConfig;
      var _colorUI$prop$colorRa = colorUI[prop].colorRangeConfig,
          steps = _colorUI$prop$colorRa.steps,
          reversed = _colorUI$prop$colorRa.reversed;
      var colorRange = visConfig[prop]; // find based on step or reversed

      var update;

      if (newConfig.colorRangeConfig.hasOwnProperty('steps')) {
        var group = (0, _colorUtils.getColorGroupByName)(colorRange);

        if (group) {
          var sameGroup = _colorRanges.COLOR_RANGES.filter(function (cr) {
            return (0, _colorUtils.getColorGroupByName)(cr) === group;
          });

          update = sameGroup.find(function (cr) {
            return cr.colors.length === steps;
          });

          if (update && colorRange.reversed) {
            update = (0, _colorUtils.reverseColorRange)(true, update);
          }
        }
      }

      if (newConfig.colorRangeConfig.hasOwnProperty('reversed')) {
        update = (0, _colorUtils.reverseColorRange)(reversed, update || colorRange);
      }

      if (update) {
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, prop, update));
      }
    }
    /**
     * Check whether layer has all columns
     *
     * @param {object} layer
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {object} layer
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.config.isVisible && this.hasAllColumns() && this.hasLayerData(data) && typeof this.renderLayer === 'function';
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData) {
      var getPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getChangedTriggers",
    value: function getChangedTriggers(dataUpdateTriggers) {
      var triggerChanged = (0, _layerUpdate.diffUpdateTriggers)(dataUpdateTriggers, this._oldDataUpdateTriggers);
      this._oldDataUpdateTriggers = dataUpdateTriggers;
      return triggerChanged;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var nullValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);

      if (!(0, _dataUtils.notNullorUndefined)(value)) {
        return nullValue;
      }

      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!(0, _dataUtils.notNullorUndefined)(attributeValue)) {
        attributeValue = nullValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = _objectSpread(_objectSpread({}, this.meta), meta);
    }
  }, {
    key: "getDataUpdateTriggers",
    value: function getDataUpdateTriggers(_ref6) {
      var filteredIndex = _ref6.filteredIndex,
          id = _ref6.id;
      var columns = this.config.columns;
      return _objectSpread({
        getData: {
          datasetId: id,
          columns: columns,
          filteredIndex: filteredIndex
        },
        getMeta: {
          datasetId: id,
          columns: columns
        }
      }, (this.config.textLabel || []).reduce(function (accu, tl, i) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, "getLabelCharacterSet-".concat(i), tl.field ? tl.field.name : null));
      }, {}));
    }
  }, {
    key: "updateData",
    value: function updateData(datasets, oldLayerData) {
      var layerDataset = datasets[this.config.dataId];
      var allData = datasets[this.config.dataId].allData;
      var getPosition = this.getPositionAccessor();
      var dataUpdateTriggers = this.getDataUpdateTriggers(layerDataset);
      var triggerChanged = this.getChangedTriggers(dataUpdateTriggers);

      if (triggerChanged.getMeta) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = [];

      if (!triggerChanged.getData) {
        // same data
        data = oldLayerData.data;
      } else {
        data = this.calculateDataAttribute(layerDataset, getPosition);
      }

      return {
        data: data,
        triggerChanged: triggerChanged
      };
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} dataset
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      var _this4 = this;

      var dataset = this.getDataset(datasets);

      if (!dataset) {
        return this;
      }

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this4.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this4.calculateLayerDomain(dataset, channel);

          _this4.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
  }, {
    key: "getDataset",
    value: function getDataset(datasets) {
      return datasets[this.config.dataId];
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var allData = dataset.allData,
          filteredIndexForDomain = dataset.filteredIndexForDomain;
      var defaultDomain = [0, 1];
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _window.console.error("scale type ".concat(scaleType, " not supported"));

        return defaultDomain;
      } // TODO: refactor to add valueAccessor to field


      var fieldIdx = field.tableFieldIndex - 1;
      var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

      var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.log:
          return (0, _dataScaleUtils.getLogDomain)(filteredIndexForDomain, indexValueAccessor);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      return objectInfo && objectInfo.layer && objectInfo.picked && objectInfo.layer.props.id === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius;
      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this5 = this;

      return props.some(function (p) {
        return !_this5.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "getBrushingExtensionProps",
    value: function getBrushingExtensionProps(interactionConfig, brushingTarget) {
      var brush = interactionConfig.brush;
      return {
        // brushing
        autoHighlight: !brush.enabled,
        brushingRadius: brush.config.size * 1000,
        brushingTarget: brushingTarget || 'source',
        brushingEnabled: brush.enabled
      };
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(_ref7) {
      var idx = _ref7.idx,
          gpuFilter = _ref7.gpuFilter,
          mapState = _ref7.mapState;
      return {
        id: this.id,
        idx: idx,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT,
        pickable: true,
        wrapLongitude: true,
        parameters: {
          depthTest: Boolean(mapState.dragRotate || this.config.visConfig.enable3d)
        },
        hidden: this.config.hidden,
        // visconfig
        opacity: this.config.visConfig.opacity,
        highlightColor: this.config.highlightColor,
        // data filtering
        extensions: [dataFilterExtension],
        filterRange: gpuFilter ? gpuFilter.filterRange : undefined
      };
    }
  }, {
    key: "getDefaultHoverLayerProps",
    value: function getDefaultHoverLayerProps() {
      return {
        id: "".concat(this.id, "-hovered"),
        pickable: false,
        wrapLongitude: true,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT
      };
    }
  }, {
    key: "renderTextLabelLayer",
    value: function renderTextLabelLayer(_ref8, renderOpts) {
      var _this6 = this;

      var getPosition = _ref8.getPosition,
          getPixelOffset = _ref8.getPixelOffset,
          updateTriggers = _ref8.updateTriggers,
          sharedProps = _ref8.sharedProps;
      var data = renderOpts.data,
          mapState = renderOpts.mapState;
      var textLabel = this.config.textLabel;
      return data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          accu.push(new _layers.TextLayer(_objectSpread(_objectSpread({}, sharedProps), {}, {
            id: "".concat(_this6.id, "-label-").concat(textLabel[i].field.name),
            data: data.data,
            getText: d.getText,
            getPosition: getPosition,
            characterSet: d.characterSet,
            getPixelOffset: getPixelOffset(textLabel[i]),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            getFilterValue: data.getFilterValue,
            updateTriggers: _objectSpread(_objectSpread({}, updateTriggers), {}, {
              getText: textLabel[i].field.name,
              getPixelOffset: _objectSpread(_objectSpread({}, updateTriggers.getRadius), {}, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            })
          })));
        }

        return accu;
      }, []);
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible', 'hidden'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically find props to create layer based on it
     * and return the props and previous found layers.
     * By default, no layers will be found
     */

  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(dataset, foundLayers) {
      return {
        props: [],
        foundLayers: foundLayers
      };
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.tableFieldIndex - 1
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

exports["default"] = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTUFYX1NBTVBMRV9TSVpFIiwiZGF0YUZpbHRlckV4dGVuc2lvbiIsIkRhdGFGaWx0ZXJFeHRlbnNpb24iLCJmaWx0ZXJTaXplIiwiTUFYX0dQVV9GSUxURVJTIiwiaWRlbnRpdHkiLCJkIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJ0YWJsZUZpZWxkSW5kZXgiLCJMYXllciIsInByb3BzIiwiaWQiLCJtZXRhIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJjb25maWciLCJnZXREZWZhdWx0TGF5ZXJDb25maWciLCJjb2x1bW5zIiwiZ2V0TGF5ZXJDb2x1bW5zIiwiZGF0YUlkIiwibGFiZWwiLCJjb2xvciIsIm5leHQiLCJ2YWx1ZSIsImlzVmlzaWJsZSIsImlzQ29uZmlnQWN0aXZlIiwiaGlnaGxpZ2h0Q29sb3IiLCJoaWRkZW4iLCJjb2xvckZpZWxkIiwiY29sb3JEb21haW4iLCJjb2xvclNjYWxlIiwiU0NBTEVfVFlQRVMiLCJxdWFudGlsZSIsInNpemVEb21haW4iLCJzaXplU2NhbGUiLCJsaW5lYXIiLCJzaXplRmllbGQiLCJ2aXNDb25maWciLCJ0ZXh0TGFiZWwiLCJERUZBVUxUX1RFWFRfTEFCRUwiLCJjb2xvclVJIiwiREVGQVVMVF9DT0xPUl9VSSIsImNvbG9yUmFuZ2UiLCJhbmltYXRpb24iLCJlbmFibGVkIiwia2V5IiwidmlzdWFsQ2hhbm5lbHMiLCJyYW5nZSIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsInBhaXIiLCJjb2x1bW5QYWlycyIsInBhcnRuZXJLZXkiLCJmaWVsZFBhaXJLZXkiLCJwYXJ0bmVyRmllbGRQYWlyS2V5Iiwiem9vbSIsInpvb21PZmZzZXQiLCJNYXRoIiwicG93IiwibWF4IiwiZGF0YXNldHMiLCJmaWx0ZXJlZEluZGV4Iiwib2JqZWN0IiwiZGF0YSIsImNvbmZpZ1RvQ29weSIsInNoYWxsb3dDb3B5IiwiY29uY2F0IiwidiIsIm5vdFRvQ29weSIsImRvbWFpbiIsImZvckVhY2giLCJncm91cCIsInB1c2giLCJjdXJyZW50Q29uZmlnIiwiY29waWVkIiwiY29weUxheWVyQ29uZmlnIiwidXBkYXRlTGF5ZXJDb25maWciLCJrZXlzIiwiY2hhbm5lbCIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImluY2x1ZGVzIiwibGF5ZXJWaXNDb25maWdzIiwiaXRlbSIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiZXZlcnkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJjb2x1bW5WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJyZXF1aXJlZExheWVyQ29sdW1ucyIsInJlZHVjZSIsImFjY3UiLCJ2YWxpZGF0b3IiLCJvcHRpb25hbCIsIm9wdGlvbmFsQ29sdW1ucyIsIm5ld0NvbmZpZyIsIm5ld1Zpc0NvbmZpZyIsInByb3AiLCJwcmV2aW91cyIsImNvbG9yVUlQcm9wIiwiZW50cmllcyIsImlzQ29sb3JSYW5nZSIsImNvbG9ycyIsInVwZGF0ZUNvbG9yVUlCeUNvbG9yUmFuZ2UiLCJ1cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJIiwidXBkYXRlQ3VzdG9tUGFsZXR0ZSIsImNvbG9yUmFuZ2VDb25maWciLCJjdXN0b20iLCJjdXN0b21QYWxldHRlIiwic2hvd0Ryb3Bkb3duIiwic3RlcHMiLCJyZXZlcnNlZCIsIkJvb2xlYW4iLCJzaG91bGRVcGRhdGUiLCJzb21lIiwic2FtZUdyb3VwIiwiQ09MT1JfUkFOR0VTIiwiZmlsdGVyIiwiY3IiLCJmaW5kIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJsYXllckRhdGEiLCJ0eXBlIiwiaGFzQWxsQ29sdW1ucyIsImhhc0xheWVyRGF0YSIsInJlbmRlckxheWVyIiwic2NhbGUiLCJmaXhlZCIsIlNDQUxFX0ZVTkMiLCJhbGxEYXRhIiwiZ2V0UG9zaXRpb24iLCJzYW1wbGVEYXRhIiwicG9pbnRzIiwibGF0Qm91bmRzIiwibG5nQm91bmRzIiwiZGF0YVVwZGF0ZVRyaWdnZXJzIiwidHJpZ2dlckNoYW5nZWQiLCJfb2xkRGF0YVVwZGF0ZVRyaWdnZXJzIiwibnVsbFZhbHVlIiwiTk9fVkFMVUVfQ09MT1IiLCJnZXRWYWx1ZSIsImF0dHJpYnV0ZVZhbHVlIiwiQUxMX0ZJRUxEX1RZUEVTIiwidGltZXN0YW1wIiwiRGF0ZSIsImdldERhdGEiLCJkYXRhc2V0SWQiLCJnZXRNZXRhIiwidGwiLCJpIiwib2xkTGF5ZXJEYXRhIiwibGF5ZXJEYXRhc2V0IiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImdldERhdGFVcGRhdGVUcmlnZ2VycyIsImdldENoYW5nZWRUcmlnZ2VycyIsInVwZGF0ZUxheWVyTWV0YSIsImNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUiLCJuZXdGaWx0ZXIiLCJkYXRhc2V0IiwiZ2V0RGF0YXNldCIsInNjYWxlVHlwZSIsIm9yZGluYWwiLCJ1cGRhdGVkRG9tYWluIiwiY2FsY3VsYXRlTGF5ZXJEb21haW4iLCJ2YWxpZGF0ZUZpZWxkVHlwZSIsInZhbGlkYXRlU2NhbGUiLCJ2aXN1YWxDaGFubmVsIiwiY2hhbm5lbFNjYWxlVHlwZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsInNjYWxlT3B0aW9ucyIsImdldFNjYWxlT3B0aW9ucyIsIkZJRUxEX09QVFMiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZGVmYXVsdERvbWFpbiIsIkNvbnNvbGUiLCJlcnJvciIsImlzVGltZSIsInZhbHVlQWNjZXNzb3IiLCJtYXliZVRvRGF0ZSIsImJpbmQiLCJmb3JtYXQiLCJpbmRleFZhbHVlQWNjZXNzb3IiLCJzb3J0RnVuY3Rpb24iLCJwb2ludCIsImxvZyIsInF1YW50aXplIiwic3FydCIsIm9iamVjdEluZm8iLCJsYXllciIsInBpY2tlZCIsIm1hcFN0YXRlIiwiZml4ZWRSYWRpdXMiLCJyYWRpdXNDaGFubmVsIiwidmMiLCJwcm9wZXJ0eSIsInVuZGVmaW5lZCIsInJhZGl1cyIsImdldFpvb21GYWN0b3IiLCJub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImJydXNoaW5nVGFyZ2V0IiwiYnJ1c2giLCJhdXRvSGlnaGxpZ2h0IiwiYnJ1c2hpbmdSYWRpdXMiLCJzaXplIiwiYnJ1c2hpbmdFbmFibGVkIiwiaWR4IiwiZ3B1RmlsdGVyIiwiY29vcmRpbmF0ZVN5c3RlbSIsIkNPT1JESU5BVEVfU1lTVEVNIiwiTE5HTEFUIiwicGlja2FibGUiLCJ3cmFwTG9uZ2l0dWRlIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsImRyYWdSb3RhdGUiLCJlbmFibGUzZCIsIm9wYWNpdHkiLCJleHRlbnNpb25zIiwiZmlsdGVyUmFuZ2UiLCJyZW5kZXJPcHRzIiwiZ2V0UGl4ZWxPZmZzZXQiLCJ1cGRhdGVUcmlnZ2VycyIsInNoYXJlZFByb3BzIiwidGV4dExhYmVscyIsImdldFRleHQiLCJUZXh0TGF5ZXIiLCJjaGFyYWN0ZXJTZXQiLCJnZXRTaXplIiwiZ2V0VGV4dEFuY2hvciIsImFuY2hvciIsImdldEFsaWdubWVudEJhc2VsaW5lIiwiYWxpZ25tZW50IiwiZ2V0Q29sb3IiLCJnZXRGaWx0ZXJWYWx1ZSIsImdldFJhZGl1cyIsIkRlZmF1bHRMYXllckljb24iLCJDSEFOTkVMX1NDQUxFUyIsImxhdCIsImxuZyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJmb3VuZExheWVycyIsImRlZmF1bHRGaWVsZHMiLCJhbGxGaWVsZHMiLCJyZXF1aXJlZENvbHVtbnMiLCJwcmV2IiwicmVxdWlyZWRGaWVsZHMiLCJmIiwiZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyIsImFsbEtleXMiLCJwb2ludGVycyIsImsiLCJjb3VudFBlcktleSIsInBhaXJzIiwiaW5jcmVtZW50UG9pbnRlcnMiLCJuZXdQYWlyIiwiY3V1ciIsInB0cyIsImNvdW50cyIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFRQTs7QUFNQTs7Ozs7O3dEQWdCVUEsYTs7QUFkVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLElBQUlDLCtCQUFKLENBQXdCO0FBQUNDLEVBQUFBLFVBQVUsRUFBRUM7QUFBYixDQUF4QixDQUE1Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBSjtBQUFBLENBQWxCOztBQUVPLElBQU1DLFlBQVksR0FBRywyQkFBVTtBQUNwQ0MsRUFBQUEsTUFBTSxFQUFFLElBRDRCO0FBRXBDQyxFQUFBQSxRQUFRLEVBQUU7QUFGMEIsQ0FBVixDQUFyQjs7QUFLQSxJQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQ0FBZCxFQUE2QkMsR0FBN0IsQ0FBaUNDLG9CQUFqQyxDQUFwQjs7O0FBQ1AsU0FBVWhCLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01pQixVQUFBQSxLQUROLEdBQ2MsQ0FEZDs7QUFBQTtBQUFBLGdCQUVTQSxLQUFLLEdBQUdOLFdBQVcsQ0FBQ08sTUFBWixHQUFxQixDQUZ0QztBQUFBO0FBQUE7QUFBQTs7QUFHSSxjQUFJRCxLQUFLLEtBQUtOLFdBQVcsQ0FBQ08sTUFBMUIsRUFBa0M7QUFDaENELFlBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBTEw7QUFNSSxpQkFBTU4sV0FBVyxDQUFDTSxLQUFLLEVBQU4s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USxpQkFBaUIsQ0FBQ0csR0FBRCxFQUFNQyxNQUFOLEVBQWN2USxLQUFLLEdBQUcsQ0FBdEIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPa1EsS0FBUDtBQUNEOzs7NkJBRWVNLEMsRUFBRztBQUNqQixhQUFPLDBCQUFTQSxDQUFULENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCBrZXltaXJyb3IgZnJvbSAna2V5bWlycm9yJztcbmltcG9ydCB7RGF0YUZpbHRlckV4dGVuc2lvbn0gZnJvbSAnQGRlY2suZ2wvZXh0ZW5zaW9ucyc7XG5pbXBvcnQge0NPT1JESU5BVEVfU1lTVEVNfSBmcm9tICdAZGVjay5nbC9jb3JlJztcbmltcG9ydCB7VGV4dExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuXG5pbXBvcnQgRGVmYXVsdExheWVySWNvbiBmcm9tICcuL2RlZmF1bHQtbGF5ZXItaWNvbic7XG5pbXBvcnQge2RpZmZVcGRhdGVUcmlnZ2Vyc30gZnJvbSAnLi9sYXllci11cGRhdGUnO1xuXG5pbXBvcnQge1xuICBBTExfRklFTERfVFlQRVMsXG4gIE5PX1ZBTFVFX0NPTE9SLFxuICBTQ0FMRV9UWVBFUyxcbiAgQ0hBTk5FTF9TQ0FMRVMsXG4gIEZJRUxEX09QVFMsXG4gIFNDQUxFX0ZVTkMsXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyxcbiAgTUFYX0dQVV9GSUxURVJTXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Q09MT1JfUkFOR0VTfSBmcm9tICdjb25zdGFudHMvY29sb3ItcmFuZ2VzJztcbmltcG9ydCB7RGF0YVZpekNvbG9yc30gZnJvbSAnY29uc3RhbnRzL2N1c3RvbS1jb2xvci1yYW5nZXMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHUywgREVGQVVMVF9URVhUX0xBQkVMLCBERUZBVUxUX0NPTE9SX1VJfSBmcm9tICcuL2xheWVyLWZhY3RvcnknO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7XG4gIGdldFNhbXBsZURhdGEsXG4gIGdldExhdExuZ0JvdW5kcyxcbiAgbWF5YmVUb0RhdGUsXG4gIGdldFNvcnRpbmdGdW5jdGlvbixcbiAgbm90TnVsbG9yVW5kZWZpbmVkXG59IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5pbXBvcnQge1xuICBnZXRRdWFudGlsZURvbWFpbixcbiAgZ2V0T3JkaW5hbERvbWFpbixcbiAgZ2V0TG9nRG9tYWluLFxuICBnZXRMaW5lYXJEb21haW5cbn0gZnJvbSAndXRpbHMvZGF0YS1zY2FsZS11dGlscyc7XG5pbXBvcnQge2hleFRvUmdiLCBnZXRDb2xvckdyb3VwQnlOYW1lLCByZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG4vKipcbiAqIEFwcHJveC4gbnVtYmVyIG9mIHBvaW50cyB0byBzYW1wbGUgaW4gYSBsYXJnZSBkYXRhIHNldFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgTUFYX1NBTVBMRV9TSVpFID0gNTAwMDtcbmNvbnN0IGRhdGFGaWx0ZXJFeHRlbnNpb24gPSBuZXcgRGF0YUZpbHRlckV4dGVuc2lvbih7ZmlsdGVyU2l6ZTogTUFYX0dQVV9GSUxURVJTfSk7XG5jb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcblxuZXhwb3J0IGNvbnN0IE9WRVJMQVlfVFlQRSA9IGtleW1pcnJvcih7XG4gIGRlY2tnbDogbnVsbCxcbiAgbWFwYm94Z2w6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvcnMgPSBPYmplY3QudmFsdWVzKERhdGFWaXpDb2xvcnMpLm1hcChoZXhUb1JnYik7XG5mdW5jdGlvbiogZ2VuZXJhdGVDb2xvcigpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKGluZGV4IDwgbGF5ZXJDb2xvcnMubGVuZ3RoICsgMSkge1xuICAgIGlmIChpbmRleCA9PT0gbGF5ZXJDb2xvcnMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHlpZWxkIGxheWVyQ29sb3JzW2luZGV4KytdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvck1ha2VyID0gZ2VuZXJhdGVDb2xvcigpO1xuY29uc3QgZGVmYXVsdEdldEZpZWxkVmFsdWUgPSAoZmllbGQsIGQpID0+IGRbZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHRoaXMuaWQgPSBwcm9wcy5pZCB8fCBnZW5lcmF0ZUhhc2hJZCg2KTtcblxuICAgIC8vIG1ldGFcbiAgICB0aGlzLm1ldGEgPSB7fTtcblxuICAgIC8vIHZpc0NvbmZpZ1NldHRpbmdzXG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncyA9IHt9O1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmdldERlZmF1bHRMYXllckNvbmZpZyh7XG4gICAgICBjb2x1bW5zOiB0aGlzLmdldExheWVyQ29sdW1ucygpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIERlZmF1bHRMYXllckljb247XG4gIH1cblxuICBnZXQgb3ZlcmxheVR5cGUoKSB7XG4gICAgcmV0dXJuIE9WRVJMQVlfVFlQRS5kZWNrZ2w7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQgb3B0aW9uYWxDb2x1bW5zKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldCBub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMoKSB7XG4gICAgcmV0dXJuIFsnbGFiZWwnLCAnb3BhY2l0eScsICd0aGlja25lc3MnLCAnaXNWaXNpYmxlJywgJ2hpZGRlbiddO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdjb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBwcm9wZXJ0eTogJ3NpemUnLFxuICAgICAgICBmaWVsZDogJ3NpemVGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc2l6ZVJhbmdlJyxcbiAgICAgICAga2V5OiAnc2l6ZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogQ29sdW1uIHBhaXJzIG1hcHMgbGF5ZXIgY29sdW1uIHRvIGEgc3BlY2lmaWMgZmllbGQgcGFpcnMsXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBudWxsXG4gICAqL1xuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBEZWZhdWx0IHBvaW50IGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIHBvaW50IGJhc2VkIGxheWVyczogcG9pbnQsIGljb24gZXRjLlxuICAgKi9cbiAgZ2V0IGRlZmF1bHRQb2ludENvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXQ6IHtwYWlyOiAnbG5nJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmc6IHtwYWlyOiAnbGF0JywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogRGVmYXVsdCBsaW5rIGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIGxpbmsgYmFzZWQgbGF5ZXJzOiBhcmMsIGxpbmUgZXRjXG4gICAqL1xuICBnZXQgZGVmYXVsdExpbmtDb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF0MDoge3BhaXI6ICdsbmcwJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmcwOiB7cGFpcjogJ2xhdDAnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfSxcbiAgICAgIGxhdDE6IHtwYWlyOiAnbG5nMScsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxuICAgICAgbG5nMToge3BhaXI6ICdsYXQxJywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFJlYWN0IGNvbXBvbmVudCBmb3IgdG8gcmVuZGVyIGxheWVyIGluc3RydWN0aW9ucyBpbiBhIG1vZGFsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gYW4gb2JqZWN0XG4gICAqIEBleGFtcGxlXG4gICAqICByZXR1cm4ge1xuICAgKiAgICBpZDogJ2ljb25JbmZvJyxcbiAgICogICAgdGVtcGxhdGU6IEljb25JbmZvTW9kYWwsXG4gICAqICAgIG1vZGFsUHJvcHM6IHtcbiAgICogICAgICB0aXRsZTogJ0hvdyB0byBkcmF3IGljb25zJ1xuICAgKiAgIH07XG4gICAqIH1cbiAgICovXG4gIGdldCBsYXllckluZm9Nb2RhbCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKlxuICAgKiBHaXZlbiBhIGRhdGFzZXQsIGF1dG9tYXRpY2FsbHkgZmluZCBwcm9wcyB0byBjcmVhdGUgbGF5ZXIgYmFzZWQgb24gaXRcbiAgICogYW5kIHJldHVybiB0aGUgcHJvcHMgYW5kIHByZXZpb3VzIGZvdW5kIGxheWVycy5cbiAgICogQnkgZGVmYXVsdCwgbm8gbGF5ZXJzIHdpbGwgYmUgZm91bmRcbiAgICovXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoZGF0YXNldCwgZm91bmRMYXllcnMpIHtcbiAgICByZXR1cm4ge3Byb3BzOiBbXSwgZm91bmRMYXllcnN9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgYXJyYXkgb2YgcHJlc2V0IHJlcXVpcmVkIGNvbHVtbiBuYW1lc1xuICAgKiBmb3VuZCBmaWVsZCB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIHRvIHNldCBhcyBsYXllciBjb2x1bW5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRGaWVsZHNcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gYWxsRmllbGRzXG4gICAqIEByZXR1cm5zIHtvYmplY3RbXSB8IG51bGx9IGFsbCBwb3NzaWJsZSByZXF1aXJlZCBsYXllciBjb2x1bW4gcGFpcnNcbiAgICovXG4gIHN0YXRpYyBmaW5kRGVmYXVsdENvbHVtbkZpZWxkKGRlZmF1bHRGaWVsZHMsIGFsbEZpZWxkcykge1xuICAgIC8vIGZpbmQgYWxsIG1hdGNoZWQgZmllbGRzIGZvciBlYWNoIHJlcXVpcmVkIGNvbFxuICAgIGNvbnN0IHJlcXVpcmVkQ29sdW1ucyA9IE9iamVjdC5rZXlzKGRlZmF1bHRGaWVsZHMpLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IGFsbEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIGYgPT4gZi5uYW1lID09PSBkZWZhdWx0RmllbGRzW2tleV0gfHwgZGVmYXVsdEZpZWxkc1trZXldLmluY2x1ZGVzKGYubmFtZSlcbiAgICAgICk7XG5cbiAgICAgIHByZXZba2V5XSA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aFxuICAgICAgICA/IHJlcXVpcmVkRmllbGRzLm1hcChmID0+ICh7XG4gICAgICAgICAgICB2YWx1ZTogZi5uYW1lLFxuICAgICAgICAgICAgZmllbGRJZHg6IGYudGFibGVGaWVsZEluZGV4IC0gMVxuICAgICAgICAgIH0pKVxuICAgICAgICA6IG51bGw7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAoIU9iamVjdC52YWx1ZXMocmVxdWlyZWRDb2x1bW5zKS5ldmVyeShCb29sZWFuKSkge1xuICAgICAgLy8gaWYgYW55IGZpZWxkIG1pc3NpbmcsIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzKHJlcXVpcmVkQ29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyhyZXF1aXJlZENvbHVtbnMpIHtcbiAgICAvLyBmb3IgbXVsdGlwbGUgbWF0Y2hlZCBmaWVsZCBmb3Igb25lIHJlcXVpcmVkIGNvbHVtbiwgcmV0dXJuIG11bHRpcGxlXG4gICAgLy8gY29tYmluYXRpb25zLCBlLiBnLiBpZiBjb2x1bW4gYSBoYXMgMiBtYXRjaGVkLCBjb2x1bW4gYiBoYXMgMyBtYXRjaGVkXG4gICAgLy8gNiBwb3NzaWJsZSBjb2x1bW4gcGFpcnMgd2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZENvbHVtbnMpO1xuICAgIGNvbnN0IHBvaW50ZXJzID0gYWxsS2V5cy5tYXAoKGssIGkpID0+IChpID09PSBhbGxLZXlzLmxlbmd0aCAtIDEgPyAtMSA6IDApKTtcbiAgICBjb25zdCBjb3VudFBlcktleSA9IGFsbEtleXMubWFwKGsgPT4gcmVxdWlyZWRDb2x1bW5zW2tdLmxlbmd0aCk7XG4gICAgY29uc3QgcGFpcnMgPSBbXTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuICAgIHdoaWxlIChpbmNyZW1lbnRQb2ludGVycyhwb2ludGVycywgY291bnRQZXJLZXksIHBvaW50ZXJzLmxlbmd0aCAtIDEpKSB7XG4gICAgICBjb25zdCBuZXdQYWlyID0gcG9pbnRlcnMucmVkdWNlKChwcmV2LCBjdXVyLCBpKSA9PiB7XG4gICAgICAgIHByZXZbYWxsS2V5c1tpXV0gPSByZXF1aXJlZENvbHVtbnNbYWxsS2V5c1tpXV1bY3V1cl07XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge30pO1xuXG4gICAgICBwYWlycy5wdXNoKG5ld1BhaXIpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG4gICAgLy8gcmVjdXJzaXZlbHkgaW5jcmVtZW50IHBvaW50ZXJzXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50UG9pbnRlcnMocHRzLCBjb3VudHMsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IDAgJiYgcHRzWzBdID09PSBjb3VudHNbMF0gLSAxKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gaW5jcmVtZW50XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHB0c1tpbmRleF0gKyAxIDwgY291bnRzW2luZGV4XSkge1xuICAgICAgICBwdHNbaW5kZXhdID0gcHRzW2luZGV4XSArIDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwdHNbaW5kZXhdID0gMDtcbiAgICAgIHJldHVybiBpbmNyZW1lbnRQb2ludGVycyhwdHMsIGNvdW50cywgaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFpcnM7XG4gIH1cblxuICBzdGF0aWMgaGV4VG9SZ2IoYykge1xuICAgIHJldHVybiBoZXhUb1JnYihjKTtcbiAgfVxuXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFJZDogcHJvcHMuZGF0YUlkIHx8IG51bGwsXG4gICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgJ25ldyBsYXllcicsXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IgfHwgY29sb3JNYWtlci5uZXh0KCkudmFsdWUsXG4gICAgICBjb2x1bW5zOiBwcm9wcy5jb2x1bW5zIHx8IG51bGwsXG4gICAgICBpc1Zpc2libGU6IHByb3BzLmlzVmlzaWJsZSB8fCBmYWxzZSxcbiAgICAgIGlzQ29uZmlnQWN0aXZlOiBwcm9wcy5pc0NvbmZpZ0FjdGl2ZSB8fCBmYWxzZSxcbiAgICAgIGhpZ2hsaWdodENvbG9yOiBwcm9wcy5oaWdobGlnaHRDb2xvciB8fCBbMjUyLCAyNDIsIDI2LCAyNTVdLFxuICAgICAgaGlkZGVuOiBwcm9wcy5oaWRkZW4gfHwgZmFsc2UsXG5cbiAgICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgaW50byBzZXBhcmF0ZSB2aXN1YWwgQ2hhbm5lbCBjb25maWdcbiAgICAgIC8vIGNvbG9yIGJ5IGZpZWxkLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBjb2xvckZpZWxkOiBudWxsLFxuICAgICAgY29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIGNvbG9yU2NhbGU6IFNDQUxFX1RZUEVTLnF1YW50aWxlLFxuXG4gICAgICAvLyBjb2xvciBieSBzaXplLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBzaXplRG9tYWluOiBbMCwgMV0sXG4gICAgICBzaXplU2NhbGU6IFNDQUxFX1RZUEVTLmxpbmVhcixcbiAgICAgIHNpemVGaWVsZDogbnVsbCxcblxuICAgICAgdmlzQ29uZmlnOiB7fSxcblxuICAgICAgdGV4dExhYmVsOiBbREVGQVVMVF9URVhUX0xBQkVMXSxcblxuICAgICAgY29sb3JVSToge1xuICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUl9VSSxcbiAgICAgICAgY29sb3JSYW5nZTogREVGQVVMVF9DT0xPUl9VSVxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge2VuYWJsZWQ6IGZhbHNlfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpc3VhbENoYW5uZWwgY29uZmlnXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMge3tsYWJlbDogc3RyaW5nLCBtZWFzdXJlOiAoc3RyaW5nfHN0cmluZyl9fVxuICAgKi9cbiAgZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKGtleSkge1xuICAgIC8vIGUuZy4gbGFiZWw6IENvbG9yLCBtZWFzdXJlOiBWZWhpY2xlIFR5cGVcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLnJhbmdlXS5sYWJlbCxcbiAgICAgIG1lYXN1cmU6IHRoaXMuY29uZmlnW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgPyB0aGlzLmNvbmZpZ1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdLm5hbWVcbiAgICAgICAgOiB0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZGVmYXVsdE1lYXN1cmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHRvIGxheWVyIGNvbHVtbiwgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIGZpZWxkIC0gU2VsZWN0ZWQgZmllbGRcbiAgICogQHJldHVybnMge3t9fSAtIENvbHVtbiBjb25maWdcbiAgICovXG4gIGFzc2lnbkNvbHVtbihrZXksIGZpZWxkKSB7XG4gICAgLy8gZmllbGQgdmFsdWUgY291bGQgYmUgbnVsbCBmb3Igb3B0aW9uYWwgY29sdW1uc1xuICAgIGNvbnN0IHVwZGF0ZSA9IGZpZWxkXG4gICAgICA/IHtcbiAgICAgICAgICB2YWx1ZTogZmllbGQubmFtZSxcbiAgICAgICAgICBmaWVsZElkeDogZmllbGQudGFibGVGaWVsZEluZGV4IC0gMVxuICAgICAgICB9XG4gICAgICA6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgW2tleV06IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcuY29sdW1uc1trZXldLFxuICAgICAgICAuLi51cGRhdGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHBhaXIgdG8gY29sdW1uIGNvbmZpZywgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIHBhaXIgLSBmaWVsZCBQYWlyXG4gICAqIEByZXR1cm5zIHt7fX0gLSBDb2x1bW4gY29uZmlnXG4gICAqL1xuICBhc3NpZ25Db2x1bW5QYWlycyhrZXksIHBhaXIpIHtcbiAgICBpZiAoIXRoaXMuY29sdW1uUGFpcnMgfHwgIXRoaXMuY29sdW1uUGFpcnNba2V5XSkge1xuICAgICAgLy8gc2hvdWxkIG5vdCBlbmQgaW4gdGhpcyBzdGF0ZVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3Qge3BhaXI6IHBhcnRuZXJLZXksIGZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW2tleV07XG4gICAgY29uc3Qge2ZpZWxkUGFpcktleTogcGFydG5lckZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzW3BhcnRuZXJLZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XTogcGFpcltmaWVsZFBhaXJLZXldLFxuICAgICAgW3BhcnRuZXJLZXldOiBwYWlyW3BhcnRuZXJGaWVsZFBhaXJLZXldXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYSByYWRpdXMgem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIG1hcFN0YXRlXG4gICAqIEBwYXJhbSBtYXBTdGF0ZS56b29tIC0gYWN0dWFsIHpvb21cbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb21PZmZzZXQgLSB6b29tT2Zmc2V0IHdoZW4gcmVuZGVyIGluIHRoZSBwbG90IGNvbnRhaW5lciBmb3IgZXhwb3J0IGltYWdlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRab29tRmFjdG9yKHt6b29tLCB6b29tT2Zmc2V0ID0gMH0pIHtcbiAgICByZXR1cm4gTWF0aC5wb3coMiwgTWF0aC5tYXgoMTQgLSB6b29tICsgem9vbU9mZnNldCwgMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhIGVsZXZhdGlvbiB6b29tIG11bHRpcGxpZXIgdG8gcmVuZGVyIHBvaW50cywgc28gdGhleSBhcmUgdmlzaWJsZSBpbiBhbGwgem9vbSBsZXZlbFxuICAgKiBAcGFyYW0gbWFwU3RhdGVcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb20gLSBhY3R1YWwgem9vbVxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEVsZXZhdGlvblpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCg4IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgZmlsdGVyZWRJbmRleCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldEhvdmVyRGF0YShvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIGJ5IGRlZmF1bHQsIGVhY2ggZW50cnkgb2YgbGF5ZXJEYXRhIHNob3VsZCBoYXZlIGEgZGF0YSBwcm9wZXJ0eSBwb2ludHNcbiAgICAvLyB0byB0aGUgb3JpZ2luYWwgaXRlbSBpbiB0aGUgYWxsRGF0YSBhcnJheVxuICAgIC8vIGVhY2ggbGF5ZXIgY2FuIGltcGxlbWVudCBpdHMgb3duIGdldEhvdmVyRGF0YSBtZXRob2RcbiAgICByZXR1cm4gb2JqZWN0LmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBjaGFuZ2UgbGF5ZXIgdHlwZSwgdHJ5IHRvIGNvcHkgb3ZlciBsYXllciBjb25maWdzIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgICogQHBhcmFtIGNvbmZpZ1RvQ29weSAtIGNvbmZpZyB0byBjb3B5IG92ZXJcbiAgICogQHBhcmFtIHZpc0NvbmZpZ1NldHRpbmdzIC0gdmlzQ29uZmlnIHNldHRpbmdzIG9mIGNvbmZpZyB0byBjb3B5XG4gICAqL1xuICBhc3NpZ25Db25maWdUb0xheWVyKGNvbmZpZ1RvQ29weSwgdmlzQ29uZmlnU2V0dGluZ3MpIHtcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIHZpc3VhbENoYW5uZWwgZmllbGRcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIGNvbG9yIHJhbmdlLCByZXZlcnNlZDogaXMgbm90IGEga2V5IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBzaGFsbG93Q29weSA9IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ10uY29uY2F0KFxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmZpZWxkKVxuICAgICk7XG5cbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgZG9tYWluIGFuZCBhbmltYXRpb25cbiAgICBjb25zdCBub3RUb0NvcHkgPSBbJ2FuaW1hdGlvbiddLmNvbmNhdChPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLm1hcCh2ID0+IHYuZG9tYWluKSk7XG4gICAgLy8gaWYgcmFuZ2UgaXMgZm9yIHRoZSBzYW1lIHByb3BlcnR5IGdyb3VwIGNvcHkgaXQsIG90aGVyd2lzZSwgbm90IHRvIGNvcHlcbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2godiA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbmZpZ1RvQ29weS52aXNDb25maWdbdi5yYW5nZV0gJiZcbiAgICAgICAgdmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXAgIT09IHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXBcbiAgICAgICkge1xuICAgICAgICBub3RUb0NvcHkucHVzaCh2LnJhbmdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGRvbid0IGNvcHkgb3ZlciB2aXN1YWxDaGFubmVsIHJhbmdlXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNvcGllZCA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWcsIGNvbmZpZ1RvQ29weSwge1xuICAgICAgc2hhbGxvd0NvcHksXG4gICAgICBub3RUb0NvcHlcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoY29waWVkKTtcbiAgICAvLyB2YWxpZGF0ZSB2aXN1YWxDaGFubmVsIGZpZWxkIHR5cGUgYW5kIHNjYWxlIHR5cGVzXG4gICAgT2JqZWN0LmtleXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogUmVjdXJzaXZlbHkgY29weSBjb25maWcgb3ZlciB0byBhbiBlbXB0eSBsYXllclxuICAgKiB3aGVuIHJlY2VpdmVkIHNhdmVkIGNvbmZpZywgb3IgY29weSBjb25maWcgb3ZlciBmcm9tIGEgZGlmZmVyZW50IGxheWVyIHR5cGVcbiAgICogbWFrZSBzdXJlIHRvIG9ubHkgY29weSBvdmVyIHZhbHVlIHRvIGV4aXN0aW5nIGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRDb25maWcgLSBleGlzdGluZyBjb25maWcgdG8gYmUgb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1RvQ29weSAtIG5ldyBDb25maWcgdG8gY29weSBvdmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWxsb3dDb3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyB0byBub3QgdG8gYmUgZGVlcCBjb3BpZWRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbm90VG9Db3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyBub3QgdG8gY29weVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIGNvcGllZCBjb25maWdcbiAgICovXG4gIGNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtzaGFsbG93Q29weSA9IFtdLCBub3RUb0NvcHkgPSBbXX0gPSB7fSkge1xuICAgIGNvbnN0IGNvcGllZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNQbGFpbk9iamVjdChjdXJyZW50Q29uZmlnW2tleV0pICYmXG4gICAgICAgIGlzUGxhaW5PYmplY3QoY29uZmlnVG9Db3B5W2tleV0pICYmXG4gICAgICAgICFzaGFsbG93Q29weS5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGFzc2lnbiBvYmplY3QgdmFsdWVcbiAgICAgICAgY29waWVkW2tleV0gPSB0aGlzLmNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnW2tleV0sIGNvbmZpZ1RvQ29weVtrZXldLCB7XG4gICAgICAgICAgc2hhbGxvd0NvcHksXG4gICAgICAgICAgbm90VG9Db3B5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChub3ROdWxsb3JVbmRlZmluZWQoY29uZmlnVG9Db3B5W2tleV0pICYmICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAvLyBjb3B5XG4gICAgICAgIGNvcGllZFtrZXldID0gY29uZmlnVG9Db3B5W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBrZWVwIGV4aXN0aW5nXG4gICAgICAgIGNvcGllZFtrZXldID0gY3VycmVudENvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcGllZDtcbiAgfVxuXG4gIHJlZ2lzdGVyVmlzQ29uZmlnKGxheWVyVmlzQ29uZmlncykge1xuICAgIE9iamVjdC5rZXlzKGxheWVyVmlzQ29uZmlncykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXSkge1xuICAgICAgICAvLyBpZiBhc3NpZ25lZCBvbmUgb2YgZGVmYXVsdCBMQVlFUl9DT05GSUdTXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW2l0ZW1dID0gTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXTtcbiAgICAgIH0gZWxzZSBpZiAoWyd0eXBlJywgJ2RlZmF1bHRWYWx1ZSddLmV2ZXJ5KHAgPT4gbGF5ZXJWaXNDb25maWdzW2l0ZW1dLmhhc093blByb3BlcnR5KHApKSkge1xuICAgICAgICAvLyBpZiBwcm92aWRlZCBjdXN0b21pemVkIHZpc0NvbmZpZywgYW5kIGhhcyB0eXBlICYmIGRlZmF1bHRWYWx1ZVxuICAgICAgICAvLyBUT0RPOiBmdXJ0aGVyIGNoZWNrIGlmIGN1c3RvbWl6ZWQgdmlzQ29uZmlnIGlzIHZhbGlkXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IGxheWVyVmlzQ29uZmlnc1tpdGVtXS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXllckNvbHVtbnMoKSB7XG4gICAgY29uc3QgY29sdW1uVmFsaWRhdG9ycyA9IHRoaXMuY29sdW1uVmFsaWRhdG9ycyB8fCB7fTtcbiAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMucmVxdWlyZWRMYXllckNvbHVtbnMucmVkdWNlKFxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IGNvbHVtblZhbGlkYXRvcnNba2V5XVxuICAgICAgICAgID8ge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIHZhbGlkYXRvcjogY29sdW1uVmFsaWRhdG9yc1trZXldfVxuICAgICAgICAgIDoge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTF9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgICBjb25zdCBvcHRpb25hbCA9IHRoaXMub3B0aW9uYWxDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMSwgb3B0aW9uYWw6IHRydWV9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICAgIHJldHVybiB7Li4ucmVxdWlyZWQsIC4uLm9wdGlvbmFsfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5uZXdDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJWaXNDb25maWcobmV3VmlzQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcudmlzQ29uZmlnID0gey4uLnRoaXMuY29uZmlnLnZpc0NvbmZpZywgLi4ubmV3VmlzQ29uZmlnfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZUxheWVyQ29sb3JVSShwcm9wLCBuZXdDb25maWcpIHtcbiAgICBjb25zdCB7Y29sb3JVSTogcHJldmlvdXMsIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcblxuICAgIGlmICghaXNQbGFpbk9iamVjdChuZXdDb25maWcpIHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JVSVByb3AgPSBPYmplY3QuZW50cmllcyhuZXdDb25maWcpLnJlZHVjZSgoYWNjdSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XTogaXNQbGFpbk9iamVjdChhY2N1W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsdWUpID8gey4uLmFjY3Vba2V5XSwgLi4udmFsdWV9IDogdmFsdWVcbiAgICAgIH07XG4gICAgfSwgcHJldmlvdXNbcHJvcF0gfHwgREVGQVVMVF9DT0xPUl9VSSk7XG5cbiAgICBjb25zdCBjb2xvclVJID0ge1xuICAgICAgLi4ucHJldmlvdXMsXG4gICAgICBbcHJvcF06IGNvbG9yVUlQcm9wXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2NvbG9yVUl9KTtcbiAgICAvLyBpZiBjb2xvclVJW3Byb3BdIGlzIGNvbG9yUmFuZ2VcbiAgICBjb25zdCBpc0NvbG9yUmFuZ2UgPSB2aXNDb25maWdbcHJvcF0gJiYgdmlzQ29uZmlnW3Byb3BdLmNvbG9ycztcblxuICAgIGlmIChpc0NvbG9yUmFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JVSUJ5Q29sb3JSYW5nZShuZXdDb25maWcsIHByb3ApO1xuICAgICAgdGhpcy51cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApO1xuICAgICAgdGhpcy51cGRhdGVDdXN0b21QYWxldHRlKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlQ3VzdG9tUGFsZXR0ZShuZXdDb25maWcsIHByZXZpb3VzLCBwcm9wKSB7XG4gICAgaWYgKCFuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZyB8fCAhbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuY3VzdG9tKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcblxuICAgIGlmICghdmlzQ29uZmlnW3Byb3BdKSByZXR1cm47XG4gICAgY29uc3Qge2NvbG9yc30gPSB2aXNDb25maWdbcHJvcF07XG4gICAgY29uc3QgY3VzdG9tUGFsZXR0ZSA9IHtcbiAgICAgIC4uLmNvbG9yVUlbcHJvcF0uY3VzdG9tUGFsZXR0ZSxcbiAgICAgIG5hbWU6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgICBjb2xvcnM6IFsuLi5jb2xvcnNdXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgIGNvbG9yVUk6IHtcbiAgICAgICAgLi4uY29sb3JVSSxcbiAgICAgICAgW3Byb3BdOiB7XG4gICAgICAgICAgLi4uY29sb3JVSVtwcm9wXSxcbiAgICAgICAgICBjdXN0b21QYWxldHRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogaWYgb3BlbiBkcm9wZG93biBhbmQgcHJvcCBpcyBjb2xvciByYW5nZVxuICAgKiBBdXRvbWF0aWNhbGx5IHNldCBjb2xvclJhbmdlQ29uZmlnJ3Mgc3RlcCBhbmQgcmV2ZXJzZWRcbiAgICogQHBhcmFtIHsqfSBuZXdDb25maWdcbiAgICogQHBhcmFtIHsqfSBwcm9wXG4gICAqL1xuICB1cGRhdGVDb2xvclVJQnlDb2xvclJhbmdlKG5ld0NvbmZpZywgcHJvcCkge1xuICAgIGlmICh0eXBlb2YgbmV3Q29uZmlnLnNob3dEcm9wZG93biAhPT0gJ251bWJlcicpIHJldHVybjtcblxuICAgIGNvbnN0IHtjb2xvclVJLCB2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7XG4gICAgICBjb2xvclVJOiB7XG4gICAgICAgIC4uLmNvbG9yVUksXG4gICAgICAgIFtwcm9wXToge1xuICAgICAgICAgIC4uLmNvbG9yVUlbcHJvcF0sXG4gICAgICAgICAgY29sb3JSYW5nZUNvbmZpZzoge1xuICAgICAgICAgICAgLi4uY29sb3JVSVtwcm9wXS5jb2xvclJhbmdlQ29uZmlnLFxuICAgICAgICAgICAgc3RlcHM6IHZpc0NvbmZpZ1twcm9wXS5jb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgcmV2ZXJzZWQ6IEJvb2xlYW4odmlzQ29uZmlnW3Byb3BdLnJldmVyc2VkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ29sb3JSYW5nZUJ5Q29sb3JVSShuZXdDb25maWcsIHByZXZpb3VzLCBwcm9wKSB7XG4gICAgLy8gb25seSB1cGRhdGUgY29sb3JSYW5nZSBpZiBjaGFuZ2VzIGluIFVJIGlzIG1hZGUgdG8gJ3JldmVyc2VkJywgJ3N0ZXBzJyBvciBzdGVwc1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZyAmJlxuICAgICAgWydyZXZlcnNlZCcsICdzdGVwcyddLnNvbWUoXG4gICAgICAgIGtleSA9PlxuICAgICAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZ1trZXldICE9PVxuICAgICAgICAgICAgKHByZXZpb3VzW3Byb3BdIHx8IERFRkFVTFRfQ09MT1JfVUkpLmNvbG9yUmFuZ2VDb25maWdba2V5XVxuICAgICAgKTtcbiAgICBpZiAoIXNob3VsZFVwZGF0ZSkgcmV0dXJuO1xuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCB7c3RlcHMsIHJldmVyc2VkfSA9IGNvbG9yVUlbcHJvcF0uY29sb3JSYW5nZUNvbmZpZztcbiAgICBjb25zdCBjb2xvclJhbmdlID0gdmlzQ29uZmlnW3Byb3BdO1xuICAgIC8vIGZpbmQgYmFzZWQgb24gc3RlcCBvciByZXZlcnNlZFxuICAgIGxldCB1cGRhdGU7XG4gICAgaWYgKG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnLmhhc093blByb3BlcnR5KCdzdGVwcycpKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdldENvbG9yR3JvdXBCeU5hbWUoY29sb3JSYW5nZSk7XG5cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBjb25zdCBzYW1lR3JvdXAgPSBDT0xPUl9SQU5HRVMuZmlsdGVyKGNyID0+IGdldENvbG9yR3JvdXBCeU5hbWUoY3IpID09PSBncm91cCk7XG5cbiAgICAgICAgdXBkYXRlID0gc2FtZUdyb3VwLmZpbmQoY3IgPT4gY3IuY29sb3JzLmxlbmd0aCA9PT0gc3RlcHMpO1xuXG4gICAgICAgIGlmICh1cGRhdGUgJiYgY29sb3JSYW5nZS5yZXZlcnNlZCkge1xuICAgICAgICAgIHVwZGF0ZSA9IHJldmVyc2VDb2xvclJhbmdlKHRydWUsIHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3JldmVyc2VkJykpIHtcbiAgICAgIHVwZGF0ZSA9IHJldmVyc2VDb2xvclJhbmdlKHJldmVyc2VkLCB1cGRhdGUgfHwgY29sb3JSYW5nZSk7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVMYXllclZpc0NvbmZpZyh7W3Byb3BdOiB1cGRhdGV9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgYWxsIGNvbHVtbnNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGxheWVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cbiAgICovXG4gIGhhc0FsbENvbHVtbnMoKSB7XG4gICAgY29uc3Qge2NvbHVtbnN9ID0gdGhpcy5jb25maWc7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbHVtbnMgJiZcbiAgICAgIE9iamVjdC52YWx1ZXMoY29sdW1ucykuZXZlcnkodiA9PiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHYub3B0aW9uYWwgfHwgKHYudmFsdWUgJiYgdi5maWVsZElkeCA+IC0xKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbGF5ZXJcbiAgICogQHBhcmFtIHtBcnJheSB8IE9iamVjdH0gbGF5ZXJEYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cbiAgICovXG4gIGhhc0xheWVyRGF0YShsYXllckRhdGEpIHtcbiAgICBpZiAoIWxheWVyRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBCb29sZWFuKGxheWVyRGF0YS5kYXRhICYmIGxheWVyRGF0YS5kYXRhLmxlbmd0aCk7XG4gIH1cblxuICBpc1ZhbGlkVG9TYXZlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgJiYgdGhpcy5oYXNBbGxDb2x1bW5zKCk7XG4gIH1cblxuICBzaG91bGRSZW5kZXJMYXllcihkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMudHlwZSAmJlxuICAgICAgdGhpcy5jb25maWcuaXNWaXNpYmxlICYmXG4gICAgICB0aGlzLmhhc0FsbENvbHVtbnMoKSAmJlxuICAgICAgdGhpcy5oYXNMYXllckRhdGEoZGF0YSkgJiZcbiAgICAgIHR5cGVvZiB0aGlzLnJlbmRlckxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgKTtcbiAgfVxuXG4gIGdldFZpc0NoYW5uZWxTY2FsZShzY2FsZSwgZG9tYWluLCByYW5nZSwgZml4ZWQpIHtcbiAgICByZXR1cm4gU0NBTEVfRlVOQ1tmaXhlZCA/ICdsaW5lYXInIDogc2NhbGVdKClcbiAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgLnJhbmdlKGZpeGVkID8gZG9tYWluIDogcmFuZ2UpO1xuICB9XG5cbiAgZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGdldFBvc2l0aW9uID0gaWRlbnRpdHkpIHtcbiAgICAvLyBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCB0aGUgZW50aXJlIGRhdGFzZXRcbiAgICAvLyBnZXQgYSBzYW1wbGUgb2YgZGF0YSB0byBjYWxjdWxhdGUgYm91bmRzXG4gICAgY29uc3Qgc2FtcGxlRGF0YSA9XG4gICAgICBhbGxEYXRhLmxlbmd0aCA+IE1BWF9TQU1QTEVfU0laRSA/IGdldFNhbXBsZURhdGEoYWxsRGF0YSwgTUFYX1NBTVBMRV9TSVpFKSA6IGFsbERhdGE7XG4gICAgY29uc3QgcG9pbnRzID0gc2FtcGxlRGF0YS5tYXAoZ2V0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgbGF0Qm91bmRzID0gZ2V0TGF0TG5nQm91bmRzKHBvaW50cywgMSwgWy05MCwgOTBdKTtcbiAgICBjb25zdCBsbmdCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAwLCBbLTE4MCwgMTgwXSk7XG5cbiAgICBpZiAoIWxhdEJvdW5kcyB8fCAhbG5nQm91bmRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2xuZ0JvdW5kc1swXSwgbGF0Qm91bmRzWzBdLCBsbmdCb3VuZHNbMV0sIGxhdEJvdW5kc1sxXV07XG4gIH1cblxuICBnZXRDaGFuZ2VkVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzKSB7XG4gICAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSBkaWZmVXBkYXRlVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzLCB0aGlzLl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMpO1xuICAgIHRoaXMuX29sZERhdGFVcGRhdGVUcmlnZ2VycyA9IGRhdGFVcGRhdGVUcmlnZ2VycztcblxuICAgIHJldHVybiB0cmlnZ2VyQ2hhbmdlZDtcbiAgfVxuXG4gIGdldEVuY29kZWRDaGFubmVsVmFsdWUoXG4gICAgc2NhbGUsXG4gICAgZGF0YSxcbiAgICBmaWVsZCxcbiAgICBudWxsVmFsdWUgPSBOT19WQUxVRV9DT0xPUixcbiAgICBnZXRWYWx1ZSA9IGRlZmF1bHRHZXRGaWVsZFZhbHVlXG4gICkge1xuICAgIGNvbnN0IHt0eXBlfSA9IGZpZWxkO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZmllbGQsIGRhdGEpO1xuXG4gICAgaWYgKCFub3ROdWxsb3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xuICAgICAgLy8gc2hvdWxkbid0IG5lZWQgdG8gY29udmVydCBoZXJlXG4gICAgICAvLyBzY2FsZSBGdW5jdGlvbiBzaG91bGQgdGFrZSBjYXJlIG9mIGl0XG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKG5ldyBEYXRlKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc2NhbGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKGF0dHJpYnV0ZVZhbHVlKSkge1xuICAgICAgYXR0cmlidXRlVmFsdWUgPSBudWxsVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgdXBkYXRlTWV0YShtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gey4uLnRoaXMubWV0YSwgLi4ubWV0YX07XG4gIH1cblxuICBnZXREYXRhVXBkYXRlVHJpZ2dlcnMoe2ZpbHRlcmVkSW5kZXgsIGlkfSkge1xuICAgIGNvbnN0IHtjb2x1bW5zfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldERhdGE6IHtkYXRhc2V0SWQ6IGlkLCBjb2x1bW5zLCBmaWx0ZXJlZEluZGV4fSxcbiAgICAgIGdldE1ldGE6IHtkYXRhc2V0SWQ6IGlkLCBjb2x1bW5zfSxcbiAgICAgIC4uLih0aGlzLmNvbmZpZy50ZXh0TGFiZWwgfHwgW10pLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIHRsLCBpKSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW2BnZXRMYWJlbENoYXJhY3RlclNldC0ke2l9YF06IHRsLmZpZWxkID8gdGwuZmllbGQubmFtZSA6IG51bGxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xuICAgIGNvbnN0IGxheWVyRGF0YXNldCA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gICAgY29uc3Qge2FsbERhdGF9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG4gICAgY29uc3QgZGF0YVVwZGF0ZVRyaWdnZXJzID0gdGhpcy5nZXREYXRhVXBkYXRlVHJpZ2dlcnMobGF5ZXJEYXRhc2V0KTtcbiAgICBjb25zdCB0cmlnZ2VyQ2hhbmdlZCA9IHRoaXMuZ2V0Q2hhbmdlZFRyaWdnZXJzKGRhdGFVcGRhdGVUcmlnZ2Vycyk7XG5cbiAgICBpZiAodHJpZ2dlckNoYW5nZWQuZ2V0TWV0YSkge1xuICAgICAgdGhpcy51cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG4gICAgaWYgKCF0cmlnZ2VyQ2hhbmdlZC5nZXREYXRhKSB7XG4gICAgICAvLyBzYW1lIGRhdGFcbiAgICAgIGRhdGEgPSBvbGRMYXllckRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRoaXMuY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZShsYXllckRhdGFzZXQsIGdldFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2RhdGEsIHRyaWdnZXJDaGFuZ2VkfTtcbiAgfVxuICAvKipcbiAgICogaGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvbmUgbGF5ZXIgZG9tYWluIHdoZW4gc3RhdGUuZGF0YSBjaGFuZ2VkXG4gICAqIGlmIHN0YXRlLmRhdGEgY2hhbmdlIGlzIGR1ZSBvdCB1cGRhdGUgZmlsdGVyLCBuZXdGaWxlciB3aWxsIGJlIHBhc3NlZFxuICAgKiBjYWxsZWQgYnkgdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdGaWx0ZXJcbiAgICogQHJldHVybnMge29iamVjdH0gbGF5ZXJcbiAgICovXG4gIHVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXRzLCBuZXdGaWx0ZXIpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5nZXREYXRhc2V0KGRhdGFzZXRzKTtcbiAgICBpZiAoIWRhdGFzZXQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICBjb25zdCB7c2NhbGV9ID0gY2hhbm5lbDtcbiAgICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcbiAgICAgIC8vIG9yZGluYWwgZG9tYWluIGlzIGJhc2VkIG9uIGFsbERhdGEsIGlmIG9ubHkgZmlsdGVyIGNoYW5nZWRcbiAgICAgIC8vIG5vIG5lZWQgdG8gdXBkYXRlIG9yZGluYWwgZG9tYWluXG4gICAgICBpZiAoIW5ld0ZpbHRlciB8fCBzY2FsZVR5cGUgIT09IFNDQUxFX1RZUEVTLm9yZGluYWwpIHtcbiAgICAgICAgY29uc3Qge2RvbWFpbn0gPSBjaGFubmVsO1xuICAgICAgICBjb25zdCB1cGRhdGVkRG9tYWluID0gdGhpcy5jYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCBjaGFubmVsKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXREYXRhc2V0KGRhdGFzZXRzKSB7XG4gICAgcmV0dXJuIGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmlzdWFsIGNoYW5uZWwgZmllbGQgYW5kIHNjYWxlcyBiYXNlZCBvbiBzdXBwb3J0ZWQgZmllbGQgJiBzY2FsZSB0eXBlXG4gICAqIEBwYXJhbSBjaGFubmVsXG4gICAqL1xuICB2YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCkge1xuICAgIHRoaXMudmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCk7XG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGZpZWxkIHR5cGUgYmFzZWQgb24gY2hhbm5lbFNjYWxlVHlwZVxuICAgKi9cbiAgdmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgY2hhbm5lbFNjYWxlVHlwZSwgc3VwcG9ydGVkRmllbGRUeXBlc30gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnW2ZpZWxkXSkge1xuICAgICAgLy8gaWYgZmllbGQgaXMgc2VsZWN0ZWQsIGNoZWNrIGlmIGZpZWxkIHR5cGUgaXMgc3VwcG9ydGVkXG4gICAgICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xuXG4gICAgICBpZiAoIWNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHRoaXMuY29uZmlnW2ZpZWxkXS50eXBlKSkge1xuICAgICAgICAvLyBmaWVsZCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQsIHNldCBpdCBiYWNrIHRvIG51bGxcbiAgICAgICAgLy8gc2V0IHNjYWxlIGJhY2sgdG8gZGVmYXVsdFxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZmllbGRdOiBudWxsfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHNjYWxlIHR5cGUgYmFzZWQgb24gYWdncmVnYXRpb25cbiAgICovXG4gIHZhbGlkYXRlU2NhbGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtzY2FsZX0gPSB2aXN1YWxDaGFubmVsO1xuICAgIGlmICghc2NhbGUpIHtcbiAgICAgIC8vIHZpc3VhbENoYW5uZWwgZG9lc24ndCBoYXZlIHNjYWxlXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IHRoaXMuZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwpO1xuICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgc2VsZWN0ZWQgc2NhbGUgaXNcbiAgICAvLyBzdXBwb3J0ZWQsIGlmIG5vdCwgY2hhbmdlIHRvIGRlZmF1bHRcbiAgICBpZiAoIXNjYWxlT3B0aW9ucy5pbmNsdWRlcyh0aGlzLmNvbmZpZ1tzY2FsZV0pKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbc2NhbGVdOiBzY2FsZU9wdGlvbnNbMF19KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgc2NhbGUsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tmaWVsZF1cbiAgICAgID8gRklFTERfT1BUU1t0aGlzLmNvbmZpZ1tmaWVsZF0udHlwZV0uc2NhbGVbY2hhbm5lbFNjYWxlVHlwZV1cbiAgICAgIDogW3RoaXMuZ2V0RGVmYXVsdExheWVyQ29uZmlnKClbc2NhbGVdXTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gICAgLy8gY2FsY3VsYXRlIGxheWVyIGNoYW5uZWwgZG9tYWluXG4gICAgY29uc3QgdXBkYXRlZERvbWFpbiA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCk7XG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W3Zpc3VhbENoYW5uZWwuZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICB9XG5cbiAgY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCkge1xuICAgIGNvbnN0IHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4Rm9yRG9tYWlufSA9IGRhdGFzZXQ7XG4gICAgY29uc3QgZGVmYXVsdERvbWFpbiA9IFswLCAxXTtcbiAgICBjb25zdCB7c2NhbGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBjb25zdCBzY2FsZVR5cGUgPSB0aGlzLmNvbmZpZ1tzY2FsZV07XG5cbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnW3Zpc3VhbENoYW5uZWwuZmllbGRdO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIC8vIGlmIGNvbG9yRmllbGQgb3Igc2l6ZUZpZWxkIHdlcmUgc2V0IGJhY2sgdG8gbnVsbFxuICAgICAgcmV0dXJuIGRlZmF1bHREb21haW47XG4gICAgfVxuXG4gICAgaWYgKCFTQ0FMRV9UWVBFU1tzY2FsZVR5cGVdKSB7XG4gICAgICBDb25zb2xlLmVycm9yKGBzY2FsZSB0eXBlICR7c2NhbGVUeXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm4gZGVmYXVsdERvbWFpbjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZWZhY3RvciB0byBhZGQgdmFsdWVBY2Nlc3NvciB0byBmaWVsZFxuICAgIGNvbnN0IGZpZWxkSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcbiAgICBjb25zdCBpc1RpbWUgPSBmaWVsZC50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wO1xuICAgIGNvbnN0IHZhbHVlQWNjZXNzb3IgPSBtYXliZVRvRGF0ZS5iaW5kKG51bGwsIGlzVGltZSwgZmllbGRJZHgsIGZpZWxkLmZvcm1hdCk7XG4gICAgY29uc3QgaW5kZXhWYWx1ZUFjY2Vzc29yID0gaSA9PiB2YWx1ZUFjY2Vzc29yKGFsbERhdGFbaV0pO1xuXG4gICAgY29uc3Qgc29ydEZ1bmN0aW9uID0gZ2V0U29ydGluZ0Z1bmN0aW9uKGZpZWxkLnR5cGUpO1xuXG4gICAgc3dpdGNoIChzY2FsZVR5cGUpIHtcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMub3JkaW5hbDpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucG9pbnQ6XG4gICAgICAgIC8vIGRvIG5vdCByZWNhbGN1bGF0ZSBvcmRpbmFsIGRvbWFpbiBiYXNlZCBvbiBmaWx0ZXJlZCBkYXRhXG4gICAgICAgIC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIG9yZGluYWwgZG9tYWluIGV2ZXJ5IHRpbWVcbiAgICAgICAgcmV0dXJuIGdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucXVhbnRpbGU6XG4gICAgICAgIHJldHVybiBnZXRRdWFudGlsZURvbWFpbihmaWx0ZXJlZEluZGV4Rm9yRG9tYWluLCBpbmRleFZhbHVlQWNjZXNzb3IsIHNvcnRGdW5jdGlvbik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMubG9nOlxuICAgICAgICByZXR1cm4gZ2V0TG9nRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvcik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucXVhbnRpemU6XG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLmxpbmVhcjpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMuc3FydDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRMaW5lYXJEb21haW4oZmlsdGVyZWRJbmRleEZvckRvbWFpbiwgaW5kZXhWYWx1ZUFjY2Vzc29yKTtcbiAgICB9XG4gIH1cblxuICBpc0xheWVySG92ZXJlZChvYmplY3RJbmZvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG9iamVjdEluZm8gJiYgb2JqZWN0SW5mby5sYXllciAmJiBvYmplY3RJbmZvLnBpY2tlZCAmJiBvYmplY3RJbmZvLmxheWVyLnByb3BzLmlkID09PSB0aGlzLmlkXG4gICAgKTtcbiAgfVxuXG4gIGdldFJhZGl1c1NjYWxlQnlab29tKG1hcFN0YXRlLCBmaXhlZFJhZGl1cykge1xuICAgIGNvbnN0IHJhZGl1c0NoYW5uZWwgPSBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZpbmQodmMgPT4gdmMucHJvcGVydHkgPT09ICdyYWRpdXMnKTtcblxuICAgIGlmICghcmFkaXVzQ2hhbm5lbCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSByYWRpdXNDaGFubmVsLmZpZWxkO1xuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRSYWRpdXMgPT09IHVuZGVmaW5lZCA/IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA6IGZpeGVkUmFkaXVzO1xuICAgIGNvbnN0IHtyYWRpdXN9ID0gdGhpcy5jb25maWcudmlzQ29uZmlnO1xuXG4gICAgcmV0dXJuIGZpeGVkID8gMSA6ICh0aGlzLmNvbmZpZ1tmaWVsZF0gPyAxIDogcmFkaXVzKSAqIHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XG4gIH1cblxuICBzaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuc29tZShwID0+ICF0aGlzLm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcy5pbmNsdWRlcyhwKSk7XG4gIH1cblxuICBnZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzKGludGVyYWN0aW9uQ29uZmlnLCBicnVzaGluZ1RhcmdldCkge1xuICAgIGNvbnN0IHticnVzaH0gPSBpbnRlcmFjdGlvbkNvbmZpZztcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBicnVzaGluZ1xuICAgICAgYXV0b0hpZ2hsaWdodDogIWJydXNoLmVuYWJsZWQsXG4gICAgICBicnVzaGluZ1JhZGl1czogYnJ1c2guY29uZmlnLnNpemUgKiAxMDAwLFxuICAgICAgYnJ1c2hpbmdUYXJnZXQ6IGJydXNoaW5nVGFyZ2V0IHx8ICdzb3VyY2UnLFxuICAgICAgYnJ1c2hpbmdFbmFibGVkOiBicnVzaC5lbmFibGVkXG4gICAgfTtcbiAgfVxuXG4gIGdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyh7aWR4LCBncHVGaWx0ZXIsIG1hcFN0YXRlfSkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIGlkeCxcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IENPT1JESU5BVEVfU1lTVEVNLkxOR0xBVCxcbiAgICAgIHBpY2thYmxlOiB0cnVlLFxuICAgICAgd3JhcExvbmdpdHVkZTogdHJ1ZSxcbiAgICAgIHBhcmFtZXRlcnM6IHtkZXB0aFRlc3Q6IEJvb2xlYW4obWFwU3RhdGUuZHJhZ1JvdGF0ZSB8fCB0aGlzLmNvbmZpZy52aXNDb25maWcuZW5hYmxlM2QpfSxcbiAgICAgIGhpZGRlbjogdGhpcy5jb25maWcuaGlkZGVuLFxuICAgICAgLy8gdmlzY29uZmlnXG4gICAgICBvcGFjaXR5OiB0aGlzLmNvbmZpZy52aXNDb25maWcub3BhY2l0eSxcbiAgICAgIGhpZ2hsaWdodENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgIC8vIGRhdGEgZmlsdGVyaW5nXG4gICAgICBleHRlbnNpb25zOiBbZGF0YUZpbHRlckV4dGVuc2lvbl0sXG4gICAgICBmaWx0ZXJSYW5nZTogZ3B1RmlsdGVyID8gZ3B1RmlsdGVyLmZpbHRlclJhbmdlIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIGdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBgJHt0aGlzLmlkfS1ob3ZlcmVkYCxcbiAgICAgIHBpY2thYmxlOiBmYWxzZSxcbiAgICAgIHdyYXBMb25naXR1ZGU6IHRydWUsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiBDT09SRElOQVRFX1NZU1RFTS5MTkdMQVRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyVGV4dExhYmVsTGF5ZXIoe2dldFBvc2l0aW9uLCBnZXRQaXhlbE9mZnNldCwgdXBkYXRlVHJpZ2dlcnMsIHNoYXJlZFByb3BzfSwgcmVuZGVyT3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBtYXBTdGF0ZX0gPSByZW5kZXJPcHRzO1xuICAgIGNvbnN0IHt0ZXh0TGFiZWx9ID0gdGhpcy5jb25maWc7XG5cbiAgICByZXR1cm4gZGF0YS50ZXh0TGFiZWxzLnJlZHVjZSgoYWNjdSwgZCwgaSkgPT4ge1xuICAgICAgaWYgKGQuZ2V0VGV4dCkge1xuICAgICAgICBhY2N1LnB1c2goXG4gICAgICAgICAgbmV3IFRleHRMYXllcih7XG4gICAgICAgICAgICAuLi5zaGFyZWRQcm9wcyxcbiAgICAgICAgICAgIGlkOiBgJHt0aGlzLmlkfS1sYWJlbC0ke3RleHRMYWJlbFtpXS5maWVsZC5uYW1lfWAsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICAgICAgICBnZXRUZXh0OiBkLmdldFRleHQsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGNoYXJhY3RlclNldDogZC5jaGFyYWN0ZXJTZXQsXG4gICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogZ2V0UGl4ZWxPZmZzZXQodGV4dExhYmVsW2ldKSxcbiAgICAgICAgICAgIGdldFNpemU6IDEsXG4gICAgICAgICAgICBzaXplU2NhbGU6IHRleHRMYWJlbFtpXS5zaXplLFxuICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGV4dExhYmVsW2ldLmFuY2hvcixcbiAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvcixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgLy8gdGV4dCB3aWxsIGFsd2F5cyBzaG93IG9uIHRvcCBvZiBhbGwgbGF5ZXJzXG4gICAgICAgICAgICAgIGRlcHRoVGVzdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEZpbHRlclZhbHVlOiBkYXRhLmdldEZpbHRlclZhbHVlLFxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgLi4udXBkYXRlVHJpZ2dlcnMsXG4gICAgICAgICAgICAgIGdldFRleHQ6IHRleHRMYWJlbFtpXS5maWVsZC5uYW1lLFxuICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDoge1xuICAgICAgICAgICAgICAgIC4uLnVwZGF0ZVRyaWdnZXJzLmdldFJhZGl1cyxcbiAgICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgICBhbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgICAgYWxpZ25tZW50OiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldFRleHRBbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgICBnZXRDb2xvcjogdGV4dExhYmVsW2ldLmNvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sIFtdKTtcbiAgfVxufVxuIl19