"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateSchema = exports.visStateSchemaV1 = exports.visStateSchemaV0 = exports.propertiesV1 = exports.propertiesV0 = exports.filterPropsV1 = exports.SplitMapsSchema = exports.DimensionFieldSchema = exports.filterPropsV0 = exports.InteractionSchemaV1 = exports.FilterSchemaV0 = exports.LayerSchemaV0 = exports.layerPropsV1 = exports.layerPropsV0 = exports.dimensionPropsV0 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _versions = require("./versions");

var _filterUtils = require("../utils/filter-utils");

var _layerFactory = require("../layers/layer-factory");

var _schema = _interopRequireDefault(require("./schema"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _dataUtils = require("../utils/data-utils");

var _visStateSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * V0 Schema
 */
var dimensionPropsV0 = ['name', 'type']; // in v0 geojson there is only sizeField
// in v1 geojson
// stroke base on -> sizeField
// height based on -> heightField
// radius based on -> radiusField
// here we make our wiredst guess on which channel sizeField belongs to

exports.dimensionPropsV0 = dimensionPropsV0;

function geojsonSizeFieldV0ToV1(config) {
  var defaultRaiuds = 10;
  var defaultRadiusRange = [0, 50]; // if extruded, sizeField is most likely used for height

  if (config.visConfig.extruded) {
    return 'heightField';
  } // if show stroke enabled, sizeField is most likely used for stroke


  if (config.visConfig.stroked) {
    return 'sizeField';
  } // if radius changed, or radius Range Changed, sizeField is most likely used for radius
  // this is the most unreliable guess, that's why we put it in the end


  if (config.visConfig.radius !== defaultRaiuds || config.visConfig.radiusRange.some(function (d, i) {
    return d !== defaultRadiusRange[i];
  })) {
    return 'radiusField';
  }

  return 'sizeField';
} // convert v0 to v1 layer config


var DimensionFieldSchemaV0 = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(DimensionFieldSchemaV0, _Schema);

  var _super = _createSuper(DimensionFieldSchemaV0);

  function DimensionFieldSchemaV0() {
    var _this;

    (0, _classCallCheck2["default"])(this, DimensionFieldSchemaV0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v0);
    return _this;
  }

  (0, _createClass2["default"])(DimensionFieldSchemaV0, [{
    key: "save",
    value: function save(field) {
      // should not be called anymore
      return (0, _defineProperty2["default"])({}, this.key, field !== null ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field, parents, accumulated) {
      var _parents$slice = parents.slice(-1),
          _parents$slice2 = (0, _slicedToArray2["default"])(_parents$slice, 1),
          config = _parents$slice2[0];

      var fieldName = this.key;

      if (config.type === 'geojson' && this.key === 'sizeField' && field) {
        fieldName = geojsonSizeFieldV0ToV1(config);
      } // fold into visualChannels to be load by VisualChannelSchemaV1


      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, fieldName, field))
      };
    }
  }]);
  return DimensionFieldSchemaV0;
}(_schema["default"]);

var DimensionScaleSchemaV0 = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DimensionScaleSchemaV0, _Schema2);

  var _super2 = _createSuper(DimensionScaleSchemaV0);

  function DimensionScaleSchemaV0() {
    var _this2;

    (0, _classCallCheck2["default"])(this, DimensionScaleSchemaV0);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "version", _versions.VERSIONS.v0);
    return _this2;
  }

  (0, _createClass2["default"])(DimensionScaleSchemaV0, [{
    key: "save",
    value: function save(scale) {
      return (0, _defineProperty2["default"])({}, this.key, scale);
    }
  }, {
    key: "load",
    value: function load(scale, parents, accumulated) {
      var _parents$slice3 = parents.slice(-1),
          _parents$slice4 = (0, _slicedToArray2["default"])(_parents$slice3, 1),
          config = _parents$slice4[0]; // fold into visualChannels to be load by VisualChannelSchemaV1


      if (this.key === 'sizeScale' && config.type === 'geojson') {
        // sizeScale now split into radiusScale, heightScale
        // no user customization, just use default
        return {};
      }

      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, this.key, scale))
      };
    }
  }]);
  return DimensionScaleSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config


var LayerConfigSchemaV0 = /*#__PURE__*/function (_Schema3) {
  (0, _inherits2["default"])(LayerConfigSchemaV0, _Schema3);

  var _super3 = _createSuper(LayerConfigSchemaV0);

  function LayerConfigSchemaV0() {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaV0);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "version", _versions.VERSIONS.v0);
    return _this3;
  }

  (0, _createClass2["default"])(LayerConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
      };
    }
  }]);
  return LayerConfigSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer columns
// only return column value for each column


var LayerColumnsSchemaV0 = /*#__PURE__*/function (_Schema4) {
  (0, _inherits2["default"])(LayerColumnsSchemaV0, _Schema4);

  var _super4 = _createSuper(LayerColumnsSchemaV0);

  function LayerColumnsSchemaV0() {
    var _this4;

    (0, _classCallCheck2["default"])(this, LayerColumnsSchemaV0);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "version", _versions.VERSIONS.v0);
    return _this4;
  }

  (0, _createClass2["default"])(LayerColumnsSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key, flatten columns
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, {
          columns: Object.keys(saved).reduce(function (accu, key) {
            return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, saved[key].value));
          }, {})
        })
      };
    }
  }]);
  return LayerColumnsSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config.visConfig


var LayerConfigToVisConfigSchemaV0 = /*#__PURE__*/function (_Schema5) {
  (0, _inherits2["default"])(LayerConfigToVisConfigSchemaV0, _Schema5);

  var _super5 = _createSuper(LayerConfigToVisConfigSchemaV0);

  function LayerConfigToVisConfigSchemaV0() {
    var _this5;

    (0, _classCallCheck2["default"])(this, LayerConfigToVisConfigSchemaV0);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "version", _versions.VERSIONS.v0);
    return _this5;
  }

  (0, _createClass2["default"])(LayerConfigToVisConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.visConfig
      var accumulatedConfig = accumulated.config || {};
      return {
        config: _objectSpread(_objectSpread({}, accumulatedConfig), {}, {
          visConfig: _objectSpread(_objectSpread({}, accumulatedConfig.visConfig || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
        })
      };
    }
  }]);
  return LayerConfigToVisConfigSchemaV0;
}(_schema["default"]);

var LayerVisConfigSchemaV0 = /*#__PURE__*/function (_Schema6) {
  (0, _inherits2["default"])(LayerVisConfigSchemaV0, _Schema6);

  var _super6 = _createSuper(LayerVisConfigSchemaV0);

  function LayerVisConfigSchemaV0() {
    var _this6;

    (0, _classCallCheck2["default"])(this, LayerVisConfigSchemaV0);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "version", _versions.VERSIONS.v0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "key", 'visConfig');
    return _this6;
  }

  (0, _createClass2["default"])(LayerVisConfigSchemaV0, [{
    key: "load",
    value: function load(visConfig, parents, accumulator) {
      var _parents$slice5 = parents.slice(-1),
          _parents$slice6 = (0, _slicedToArray2["default"])(_parents$slice5, 1),
          config = _parents$slice6[0];

      var rename = {
        geojson: {
          extruded: 'enable3d',
          elevationRange: 'heightRange'
        }
      };

      if (config.type in rename) {
        var propToRename = rename[config.type];
        return {
          config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
            visConfig: Object.keys(visConfig).reduce(function (accu, key) {
              return _objectSpread(_objectSpread({}, accu), propToRename[key] ? (0, _defineProperty2["default"])({}, propToRename[key], visConfig[key]) : (0, _defineProperty2["default"])({}, key, visConfig[key]));
            }, {})
          })
        };
      }

      return {
        config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
          visConfig: visConfig
        })
      };
    }
  }]);
  return LayerVisConfigSchemaV0;
}(_schema["default"]);

var LayerConfigSchemaDeleteV0 = /*#__PURE__*/function (_Schema7) {
  (0, _inherits2["default"])(LayerConfigSchemaDeleteV0, _Schema7);

  var _super7 = _createSuper(LayerConfigSchemaDeleteV0);

  function LayerConfigSchemaDeleteV0() {
    var _this7;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaDeleteV0);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this7 = _super7.call.apply(_super7, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "version", _versions.VERSIONS.v0);
    return _this7;
  }

  (0, _createClass2["default"])(LayerConfigSchemaDeleteV0, [{
    key: "load",
    value: function load(value) {
      return {};
    }
  }]);
  return LayerConfigSchemaDeleteV0;
}(_schema["default"]);
/**
 * V0 -> V1 Changes
 * - layer is now a class
 * - config saved in a config object
 * - id, type, isAggregated is outside layer.config
 * - visualChannels is outside config, it defines available visual channel and
 *   property names for field, scale, domain and range of each visual chanel.
 * - enable3d, colorAggregation and sizeAggregation are moved into visConfig
 * - GeojsonLayer - added height, radius specific properties
 */


var layerPropsV0 = {
  id: null,
  type: null,
  // move into layer.config
  dataId: new LayerConfigSchemaV0({
    key: 'dataId'
  }),
  label: new LayerConfigSchemaV0({
    key: 'label'
  }),
  color: new LayerConfigSchemaV0({
    key: 'color'
  }),
  isVisible: new LayerConfigSchemaV0({
    key: 'isVisible'
  }),
  hidden: new LayerConfigSchemaV0({
    key: 'hidden'
  }),
  // convert visConfig
  visConfig: new LayerVisConfigSchemaV0({
    key: 'visConfig'
  }),
  // move into layer.config
  // flatten
  columns: new LayerColumnsSchemaV0(),
  // save into visualChannels
  colorField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'colorField'
  }),
  colorScale: new DimensionScaleSchemaV0({
    key: 'colorScale'
  }),
  sizeField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'sizeField'
  }),
  sizeScale: new DimensionScaleSchemaV0({
    key: 'sizeScale'
  }),
  // move into config.visConfig
  enable3d: new LayerConfigToVisConfigSchemaV0({
    key: 'enable3d'
  }),
  colorAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'colorAggregation'
  }),
  sizeAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'sizeAggregation'
  }),
  // delete
  isAggregated: new LayerConfigSchemaDeleteV0()
};
/**
 * V1 Schema
 */

exports.layerPropsV0 = layerPropsV0;

var ColumnSchemaV1 = /*#__PURE__*/function (_Schema8) {
  (0, _inherits2["default"])(ColumnSchemaV1, _Schema8);

  var _super8 = _createSuper(ColumnSchemaV1);

  function ColumnSchemaV1() {
    (0, _classCallCheck2["default"])(this, ColumnSchemaV1);
    return _super8.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColumnSchemaV1, [{
    key: "save",
    value: function save(columns, state) {
      // starting from v1, only save column value
      // fieldIdx will be calculated during merge
      return (0, _defineProperty2["default"])({}, this.key, Object.keys(columns).reduce(function (accu, ckey) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, ckey, columns[ckey].value));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(columns) {
      return {
        columns: columns
      };
    }
  }]);
  return ColumnSchemaV1;
}(_schema["default"]);

var TextLabelSchemaV1 = /*#__PURE__*/function (_Schema9) {
  (0, _inherits2["default"])(TextLabelSchemaV1, _Schema9);

  var _super9 = _createSuper(TextLabelSchemaV1);

  function TextLabelSchemaV1() {
    (0, _classCallCheck2["default"])(this, TextLabelSchemaV1);
    return _super9.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLabelSchemaV1, [{
    key: "save",
    value: function save(textLabel) {
      return (0, _defineProperty2["default"])({}, this.key, textLabel.map(function (tl) {
        return _objectSpread(_objectSpread({}, tl), {}, {
          field: tl.field ? (0, _lodash["default"])(tl.field, ['name', 'type']) : null
        });
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: Array.isArray(textLabel) ? textLabel : [textLabel]
      };
    }
  }]);
  return TextLabelSchemaV1;
}(_schema["default"]);

var visualChannelModificationV1 = {
  point: function point(vc, parents, accumulator) {
    var _parents$slice7 = parents.slice(-1),
        _parents$slice8 = (0, _slicedToArray2["default"])(_parents$slice7, 1),
        layer = _parents$slice8[0];

    if (layer.config.visConfig.outline && vc.colorField && !vc.hasOwnProperty('strokeColorField')) {
      // point layer now supports both outline and fill
      // for older schema where filled has not been added to point layer
      // copy colorField, colorScale to strokeColorField, and strokeColorScale
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale,
        colorField: null,
        colorScale: 'quantile'
      };
    }

    return {};
  },
  geojson: function geojson(vc, parents, accumulator) {
    var _parents$slice9 = parents.slice(-1),
        _parents$slice10 = (0, _slicedToArray2["default"])(_parents$slice9, 1),
        layer = _parents$slice10[0];

    var isOld = !vc.hasOwnProperty('strokeColorField'); // make our best guess if this geojson layer contains point

    var isPoint = vc.radiusField || layer.config.visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld && !isPoint && layer.config.visConfig.stroked) {
      // if stroked is true, copy color config to stroke color config
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale
      };
    }

    return {};
  }
};
/**
 * V1: save [field]: {name, type}, [scale]: '' for each channel
 */

var VisualChannelSchemaV1 = /*#__PURE__*/function (_Schema10) {
  (0, _inherits2["default"])(VisualChannelSchemaV1, _Schema10);

  var _super10 = _createSuper(VisualChannelSchemaV1);

  function VisualChannelSchemaV1() {
    (0, _classCallCheck2["default"])(this, VisualChannelSchemaV1);
    return _super10.apply(this, arguments);
  }

  (0, _createClass2["default"])(VisualChannelSchemaV1, [{
    key: "save",
    value: function save(visualChannels, parents) {
      // only save field and scale of each channel
      var _parents$slice11 = parents.slice(-1),
          _parents$slice12 = (0, _slicedToArray2["default"])(_parents$slice11, 1),
          layer = _parents$slice12[0];

      return (0, _defineProperty2["default"])({}, this.key, Object.keys(visualChannels).reduce( //  save channel to null if didn't select any field
      function (accu, key) {
        var _objectSpread8;

        return _objectSpread(_objectSpread({}, accu), {}, (_objectSpread8 = {}, (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].field, layer.config[visualChannels[key].field] ? (0, _lodash["default"])(layer.config[visualChannels[key].field], ['name', 'type']) : null), (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].scale, layer.config[visualChannels[key].scale]), _objectSpread8));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(vc, parents, accumulator) {
      // fold channels into config
      var _parents$slice13 = parents.slice(-1),
          _parents$slice14 = (0, _slicedToArray2["default"])(_parents$slice13, 1),
          layer = _parents$slice14[0];

      var modified = visualChannelModificationV1[layer.type] ? visualChannelModificationV1[layer.type](vc, parents, accumulator) : {};
      return _objectSpread(_objectSpread({}, accumulator), {}, {
        config: _objectSpread(_objectSpread(_objectSpread({}, accumulator.config || {}), vc), modified)
      });
    }
  }]);
  return VisualChannelSchemaV1;
}(_schema["default"]);

var visConfigModificationV1 = {
  point: function point(visConfig, parents, accumulated) {
    var modified = {};

    var _parents$slice15 = parents.slice(-2, -1),
        _parents$slice16 = (0, _slicedToArray2["default"])(_parents$slice15, 1),
        layer = _parents$slice16[0];

    var isOld = !visConfig.hasOwnProperty('filled') && !visConfig.strokeColor && !visConfig.strokeColorRange;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (visConfig.outline) {
        // point layer now supports both outline and fill
        // for older schema where filled has not been added to point layer
        // set it to false
        modified.filled = false;
      }
    }

    return modified;
  },
  geojson: function geojson(visConfig, parents, accumulated) {
    // is points?
    var modified = {};

    var _parents$slice17 = parents.slice(-2, -1),
        _parents$slice18 = (0, _slicedToArray2["default"])(_parents$slice17, 1),
        layer = _parents$slice18[0];

    var isOld = layer.visualChannels && !layer.visualChannels.hasOwnProperty('strokeColorField') && !visConfig.strokeColor && !visConfig.strokeColorRange; // make our best guess if this geojson layer contains point

    var isPoint = layer.visualChannels && layer.visualChannels.radiusField || visConfig && visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (isPoint) {
        // if is point, set stroke to false
        modified.filled = true;
        modified.stroked = false;
      }
    }

    return modified;
  }
};

var VisConfigSchemaV1 = /*#__PURE__*/function (_Schema11) {
  (0, _inherits2["default"])(VisConfigSchemaV1, _Schema11);

  var _super11 = _createSuper(VisConfigSchemaV1);

  function VisConfigSchemaV1() {
    var _this8;

    (0, _classCallCheck2["default"])(this, VisConfigSchemaV1);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this8 = _super11.call.apply(_super11, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "key", 'visConfig');
    return _this8;
  }

  (0, _createClass2["default"])(VisConfigSchemaV1, [{
    key: "load",
    value: function load(visConfig, parents, accumulated) {
      var _parents$slice19 = parents.slice(-2, -1),
          _parents$slice20 = (0, _slicedToArray2["default"])(_parents$slice19, 1),
          layer = _parents$slice20[0];

      var modified = visConfigModificationV1[layer.type] ? visConfigModificationV1[layer.type](visConfig, parents, accumulated) : {};
      return {
        visConfig: _objectSpread(_objectSpread({}, visConfig), modified)
      };
    }
  }]);
  return VisConfigSchemaV1;
}(_schema["default"]);

var layerPropsV1 = {
  id: null,
  type: null,
  config: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    key: 'config',
    properties: {
      dataId: null,
      label: null,
      color: null,
      columns: new ColumnSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'columns'
      }),
      isVisible: null,
      visConfig: new VisConfigSchemaV1({
        version: _versions.VERSIONS.v1
      }),
      hidden: null,
      textLabel: new TextLabelSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'textLabel'
      })
    }
  }),
  visualChannels: new VisualChannelSchemaV1({
    version: _versions.VERSIONS.v1,
    key: 'visualChannels'
  })
};
exports.layerPropsV1 = layerPropsV1;

var LayerSchemaV0 = /*#__PURE__*/function (_Schema12) {
  (0, _inherits2["default"])(LayerSchemaV0, _Schema12);

  var _super12 = _createSuper(LayerSchemaV0);

  function LayerSchemaV0() {
    var _this9;

    (0, _classCallCheck2["default"])(this, LayerSchemaV0);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this9 = _super12.call.apply(_super12, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "key", 'layers');
    return _this9;
  }

  (0, _createClass2["default"])(LayerSchemaV0, [{
    key: "save",
    value: function save(layers, parents) {
      var _this10 = this;

      var _parents$slice21 = parents.slice(-1),
          _parents$slice22 = (0, _slicedToArray2["default"])(_parents$slice21, 1),
          visState = _parents$slice22[0];

      return (0, _defineProperty2["default"])({}, this.key, visState.layerOrder.reduce(function (saved, index) {
        // save layers according to their rendering order
        var layer = layers[index];

        if (layer.isValidToSave()) {
          saved.push(_this10.savePropertiesOrApplySchema(layer).layers);
        }

        return saved;
      }, []));
    }
  }, {
    key: "load",
    value: function load(layers) {
      var _this11 = this;

      return (0, _defineProperty2["default"])({}, this.key, layers.map(function (layer) {
        return _this11.loadPropertiesOrApplySchema(layer, layers).layers;
      }));
    }
  }]);
  return LayerSchemaV0;
}(_schema["default"]);

exports.LayerSchemaV0 = LayerSchemaV0;

var FilterSchemaV0 = /*#__PURE__*/function (_Schema13) {
  (0, _inherits2["default"])(FilterSchemaV0, _Schema13);

  var _super13 = _createSuper(FilterSchemaV0);

  function FilterSchemaV0() {
    var _this12;

    (0, _classCallCheck2["default"])(this, FilterSchemaV0);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this12 = _super13.call.apply(_super13, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "key", 'filters');
    return _this12;
  }

  (0, _createClass2["default"])(FilterSchemaV0, [{
    key: "save",
    value: function save(filters) {
      var _this13 = this;

      return {
        filters: filters.filter(_filterUtils.isValidFilterValue).map(function (filter) {
          return _this13.savePropertiesOrApplySchema(filter).filters;
        })
      };
    }
  }, {
    key: "load",
    value: function load(filters) {
      return {
        filters: filters
      };
    }
  }]);
  return FilterSchemaV0;
}(_schema["default"]);

exports.FilterSchemaV0 = FilterSchemaV0;
var interactionPropsV0 = ['tooltip', 'brush'];

var InteractionSchemaV0 = /*#__PURE__*/function (_Schema14) {
  (0, _inherits2["default"])(InteractionSchemaV0, _Schema14);

  var _super14 = _createSuper(InteractionSchemaV0);

  function InteractionSchemaV0() {
    var _this14;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV0);

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    _this14 = _super14.call.apply(_super14, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "key", 'interactionConfig');
    return _this14;
  }

  (0, _createClass2["default"])(InteractionSchemaV0, [{
    key: "save",
    value: function save(interactionConfig) {
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), interactionConfig[key].enabled ? (0, _defineProperty2["default"])({}, key, interactionConfig[key].config) : {});
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      // convert v0 -> v1
      // return enabled: false if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key] || {}), {}, {
          enabled: Boolean(interactionConfig[key])
        })));
      }, {})) : {};
    }
  }]);
  return InteractionSchemaV0;
}(_schema["default"]);

var interactionPropsV1 = [].concat(interactionPropsV0, ['geocoder', 'coordinate']);

var InteractionSchemaV1 = /*#__PURE__*/function (_Schema15) {
  (0, _inherits2["default"])(InteractionSchemaV1, _Schema15);

  var _super15 = _createSuper(InteractionSchemaV1);

  function InteractionSchemaV1() {
    var _this15;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV1);

    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    _this15 = _super15.call.apply(_super15, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this15), "key", 'interactionConfig');
    return _this15;
  }

  (0, _createClass2["default"])(InteractionSchemaV1, [{
    key: "save",
    value: function save(interactionConfig) {
      // save config even if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key].config), {}, {
          enabled: interactionConfig[key].enabled
        })));
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      var _this16 = this;

      var modifiedConfig = interactionConfig;
      Object.keys(interactionConfig).forEach(function (configType) {
        if (configType === 'tooltip') {
          var fieldsToShow = modifiedConfig[configType].fieldsToShow;

          if (!(0, _dataUtils.notNullorUndefined)(fieldsToShow)) {
            return (0, _defineProperty2["default"])({}, _this16.key, modifiedConfig);
          }

          Object.keys(fieldsToShow).forEach(function (key) {
            fieldsToShow[key] = fieldsToShow[key].map(function (fieldData) {
              if (!fieldData.name) {
                return {
                  name: fieldData,
                  format: null
                };
              }

              return fieldData;
            });
          });
        }

        return;
      });
      return (0, _defineProperty2["default"])({}, this.key, modifiedConfig);
    }
  }]);
  return InteractionSchemaV1;
}(_schema["default"]);

exports.InteractionSchemaV1 = InteractionSchemaV1;
var filterPropsV0 = {
  dataId: null,
  id: null,
  name: null,
  type: null,
  value: null,
  enlarged: null
};
exports.filterPropsV0 = filterPropsV0;

var DimensionFieldSchema = /*#__PURE__*/function (_Schema16) {
  (0, _inherits2["default"])(DimensionFieldSchema, _Schema16);

  var _super16 = _createSuper(DimensionFieldSchema);

  function DimensionFieldSchema() {
    (0, _classCallCheck2["default"])(this, DimensionFieldSchema);
    return _super16.apply(this, arguments);
  }

  (0, _createClass2["default"])(DimensionFieldSchema, [{
    key: "save",
    value: function save(field) {
      return (0, _defineProperty2["default"])({}, this.key, field ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field) {
      return (0, _defineProperty2["default"])({}, this.key, field);
    }
  }]);
  return DimensionFieldSchema;
}(_schema["default"]);

exports.DimensionFieldSchema = DimensionFieldSchema;

var SplitMapsSchema = /*#__PURE__*/function (_Schema17) {
  (0, _inherits2["default"])(SplitMapsSchema, _Schema17);

  var _super17 = _createSuper(SplitMapsSchema);

  function SplitMapsSchema() {
    (0, _classCallCheck2["default"])(this, SplitMapsSchema);
    return _super17.apply(this, arguments);
  }

  (0, _createClass2["default"])(SplitMapsSchema, [{
    key: "convertLayerSettings",
    value: function convertLayerSettings(accu, _ref18) {
      var _ref19 = (0, _slicedToArray2["default"])(_ref18, 2),
          key = _ref19[0],
          value = _ref19[1];

      if (typeof value === 'boolean') {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, value));
      } else if (value && (0, _typeof2["default"])(value) === 'object' && value.isAvailable) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, Boolean(value.isVisible)));
      }

      return accu;
    }
  }, {
    key: "load",
    value: function load(splitMaps) {
      var _this17 = this;

      // previous splitMaps Schema {layers: {layerId: {isVisible, isAvailable}}}
      if (!Array.isArray(splitMaps) || !splitMaps.length) {
        return {
          splitMaps: []
        };
      }

      return {
        splitMaps: splitMaps.map(function (settings) {
          return _objectSpread(_objectSpread({}, settings), {}, {
            layers: Object.entries(settings.layers || {}).reduce(_this17.convertLayerSettings, {})
          });
        })
      };
    }
  }]);
  return SplitMapsSchema;
}(_schema["default"]);

exports.SplitMapsSchema = SplitMapsSchema;

var filterPropsV1 = _objectSpread(_objectSpread({}, filterPropsV0), {}, {
  plotType: null,
  animationWindow: null,
  yAxis: new DimensionFieldSchema({
    version: _versions.VERSIONS.v1,
    key: 'yAxis',
    properties: {
      name: null,
      type: null
    }
  }),
  // polygon filter properties
  layerId: null
});

exports.filterPropsV1 = filterPropsV1;
var propertiesV0 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: filterPropsV0
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: layerPropsV0
  }),
  interactionConfig: new InteractionSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: interactionPropsV0
  }),
  layerBlending: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: filterPropsV1
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: layerPropsV1
  }),
  interactionConfig: new InteractionSchemaV1({
    version: _versions.VERSIONS.v1,
    properties: interactionPropsV1
  }),
  layerBlending: null,
  splitMaps: new SplitMapsSchema({
    key: 'splitMaps',
    version: _versions.VERSIONS.v1
  }),
  animationConfig: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    properties: {
      currentTime: null,
      speed: null
    },
    key: 'animationConfig'
  })
};
exports.propertiesV1 = propertiesV1;
var visStateSchemaV0 = new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'visState'
});
exports.visStateSchemaV0 = visStateSchemaV0;
var visStateSchemaV1 = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'visState'
});
exports.visStateSchemaV1 = visStateSchemaV1;
var visStateSchema = (_visStateSchema = {}, (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v0, {
  save: function save(toSave) {
    return visStateSchemaV0.save(toSave);
  },
  load: function load(toLoad) {
    return visStateSchemaV1.load(visStateSchemaV0.load(toLoad).visState);
  }
}), (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v1, visStateSchemaV1), _visStateSchema); // test load v0

exports.visStateSchema = visStateSchema;
var _default = visStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiaGlkZGVuIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwicG9pbnQiLCJ2YyIsImxheWVyIiwib3V0bGluZSIsImhhc093blByb3BlcnR5Iiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yU2NhbGUiLCJpc09sZCIsImlzUG9pbnQiLCJyYWRpdXNGaWVsZCIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJpbnRlcmFjdGlvblByb3BzVjEiLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwibW9kaWZpZWRDb25maWciLCJmb3JFYWNoIiwiY29uZmlnVHlwZSIsImZpZWxkc1RvU2hvdyIsImZpZWxkRGF0YSIsIm5hbWUiLCJmb3JtYXQiLCJmaWx0ZXJQcm9wc1YwIiwiZW5sYXJnZWQiLCJEaW1lbnNpb25GaWVsZFNjaGVtYSIsIlNwbGl0TWFwc1NjaGVtYSIsImlzQXZhaWxhYmxlIiwic3BsaXRNYXBzIiwibGVuZ3RoIiwic2V0dGluZ3MiLCJlbnRyaWVzIiwiY29udmVydExheWVyU2V0dGluZ3MiLCJmaWx0ZXJQcm9wc1YxIiwicGxvdFR5cGUiLCJhbmltYXRpb25XaW5kb3ciLCJ5QXhpcyIsImxheWVySWQiLCJwcm9wZXJ0aWVzVjAiLCJsYXllckJsZW5kaW5nIiwicHJvcGVydGllc1YxIiwiYW5pbWF0aW9uQ29uZmlnIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInZpc1N0YXRlU2NoZW1hVjAiLCJ2aXNTdGF0ZVNjaGVtYVYxIiwidmlzU3RhdGVTY2hlbWEiLCJzYXZlIiwidG9TYXZlIiwibG9hZCIsInRvTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULENBQXpCLEMsQ0FFUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxTQUFTQyxzQkFBVCxDQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUEzQixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFJRixNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLFFBQXJCLEVBQStCO0FBQzdCLFdBQU8sYUFBUDtBQUNELEdBUHFDLENBU3RDOzs7QUFDQSxNQUFJSixNQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sV0FBUDtBQUNELEdBWnFDLENBY3RDO0FBQ0E7OztBQUNBLE1BQ0VMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsTUFBakIsS0FBNEJMLGFBQTVCLElBQ0FELE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkksV0FBakIsQ0FBNkJDLElBQTdCLENBQWtDLFVBQUNDLENBQUQs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Q2VDLGMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gucGljayc7XG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcbmltcG9ydCB7aXNWYWxpZEZpbHRlclZhbHVlfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG4vKipcbiAqIFYwIFNjaGVtYVxuICovXG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb25Qcm9wc1YwID0gWyduYW1lJywgJ3R5cGUnXTtcblxuLy8gaW4gdjAgZ2VvanNvbiB0aGVyZSBpcyBvbmx5IHNpemVGaWVsZFxuXG4vLyBpbiB2MSBnZW9qc29uXG4vLyBzdHJva2UgYmFzZSBvbiAtPiBzaXplRmllbGRcbi8vIGhlaWdodCBiYXNlZCBvbiAtPiBoZWlnaHRGaWVsZFxuLy8gcmFkaXVzIGJhc2VkIG9uIC0+IHJhZGl1c0ZpZWxkXG4vLyBoZXJlIHdlIG1ha2Ugb3VyIHdpcmVkc3QgZ3Vlc3Mgb24gd2hpY2ggY2hhbm5lbCBzaXplRmllbGQgYmVsb25ncyB0b1xuZnVuY3Rpb24gZ2VvanNvblNpemVGaWVsZFYwVG9WMShjb25maWcpIHtcbiAgY29uc3QgZGVmYXVsdFJhaXVkcyA9IDEwO1xuICBjb25zdCBkZWZhdWx0UmFkaXVzUmFuZ2UgPSBbMCwgNTBdO1xuXG4gIC8vIGlmIGV4dHJ1ZGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3IgaGVpZ2h0XG4gIGlmIChjb25maWcudmlzQ29uZmlnLmV4dHJ1ZGVkKSB7XG4gICAgcmV0dXJuICdoZWlnaHRGaWVsZCc7XG4gIH1cblxuICAvLyBpZiBzaG93IHN0cm9rZSBlbmFibGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3Igc3Ryb2tlXG4gIGlmIChjb25maWcudmlzQ29uZmlnLnN0cm9rZWQpIHtcbiAgICByZXR1cm4gJ3NpemVGaWVsZCc7XG4gIH1cblxuICAvLyBpZiByYWRpdXMgY2hhbmdlZCwgb3IgcmFkaXVzIFJhbmdlIENoYW5nZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciByYWRpdXNcbiAgLy8gdGhpcyBpcyB0aGUgbW9zdCB1bnJlbGlhYmxlIGd1ZXNzLCB0aGF0J3Mgd2h5IHdlIHB1dCBpdCBpbiB0aGUgZW5kXG4gIGlmIChcbiAgICBjb25maWcudmlzQ29uZmlnLnJhZGl1cyAhPT0gZGVmYXVsdFJhaXVkcyB8fFxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzUmFuZ2Uuc29tZSgoZCwgaSkgPT4gZCAhPT0gZGVmYXVsdFJhZGl1c1JhbmdlW2ldKVxuICApIHtcbiAgICByZXR1cm4gJ3JhZGl1c0ZpZWxkJztcbiAgfVxuXG4gIHJldHVybiAnc2l6ZUZpZWxkJztcbn1cblxuLy8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWdcbmNsYXNzIERpbWVuc2lvbkZpZWxkU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIHNhdmUoZmllbGQpIHtcbiAgICAvLyBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnltb3JlXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkICE9PSBudWxsID8gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmllbGQpW3RoaXMua2V5XSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbG9hZChmaWVsZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGxldCBmaWVsZE5hbWUgPSB0aGlzLmtleTtcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdnZW9qc29uJyAmJiB0aGlzLmtleSA9PT0gJ3NpemVGaWVsZCcgJiYgZmllbGQpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGdlb2pzb25TaXplRmllbGRWMFRvVjEoY29uZmlnKTtcbiAgICB9XG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc3VhbENoYW5uZWxzOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC52aXN1YWxDaGFubmVscyB8fCB7fSksXG4gICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgc2F2ZShzY2FsZSkge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogc2NhbGV9O1xuICB9XG4gIGxvYWQoc2NhbGUsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICAvLyBmb2xkIGludG8gdmlzdWFsQ2hhbm5lbHMgdG8gYmUgbG9hZCBieSBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAgICBpZiAodGhpcy5rZXkgPT09ICdzaXplU2NhbGUnICYmIGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicpIHtcbiAgICAgIC8vIHNpemVTY2FsZSBub3cgc3BsaXQgaW50byByYWRpdXNTY2FsZSwgaGVpZ2h0U2NhbGVcbiAgICAgIC8vIG5vIHVzZXIgY3VzdG9taXphdGlvbiwganVzdCB1c2UgZGVmYXVsdFxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2aXN1YWxDaGFubmVsczoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQudmlzdWFsQ2hhbm5lbHMgfHwge30pLFxuICAgICAgICBbdGhpcy5rZXldOiBzY2FsZVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLmtleVxuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIFt0aGlzLmtleV06IHNhdmVkXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29sdW1uc1xuLy8gb25seSByZXR1cm4gY29sdW1uIHZhbHVlIGZvciBlYWNoIGNvbHVtblxuY2xhc3MgTGF5ZXJDb2x1bW5zU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy5rZXksIGZsYXR0ZW4gY29sdW1uc1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIGNvbHVtbnM6IE9iamVjdC5rZXlzKHNhdmVkKS5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICBba2V5XTogc2F2ZWRba2V5XS52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWcudmlzQ29uZmlnXG5jbGFzcyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy52aXNDb25maWdcbiAgICBjb25zdCBhY2N1bXVsYXRlZENvbmZpZyA9IGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLmFjY3VtdWxhdGVkQ29uZmlnLFxuICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAuLi4oYWNjdW11bGF0ZWRDb25maWcudmlzQ29uZmlnIHx8IHt9KSxcbiAgICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBMYXllclZpc0NvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0b3IpIHtcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IHJlbmFtZSA9IHtcbiAgICAgIGdlb2pzb246IHtcbiAgICAgICAgZXh0cnVkZWQ6ICdlbmFibGUzZCcsXG4gICAgICAgIGVsZXZhdGlvblJhbmdlOiAnaGVpZ2h0UmFuZ2UnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcudHlwZSBpbiByZW5hbWUpIHtcbiAgICAgIGNvbnN0IHByb3BUb1JlbmFtZSA9IHJlbmFtZVtjb25maWcudHlwZV07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAuLi4oYWNjdW11bGF0b3IuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgICB2aXNDb25maWc6IE9iamVjdC5rZXlzKHZpc0NvbmZpZykucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgLi4uKHByb3BUb1JlbmFtZVtrZXldXG4gICAgICAgICAgICAgICAgPyB7W3Byb3BUb1JlbmFtZVtrZXldXTogdmlzQ29uZmlnW2tleV19XG4gICAgICAgICAgICAgICAgOiB7W2tleV06IHZpc0NvbmZpZ1trZXldfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAge31cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi4oYWNjdW11bGF0b3IuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgdmlzQ29uZmlnXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbi8qKlxuICogVjAgLT4gVjEgQ2hhbmdlc1xuICogLSBsYXllciBpcyBub3cgYSBjbGFzc1xuICogLSBjb25maWcgc2F2ZWQgaW4gYSBjb25maWcgb2JqZWN0XG4gKiAtIGlkLCB0eXBlLCBpc0FnZ3JlZ2F0ZWQgaXMgb3V0c2lkZSBsYXllci5jb25maWdcbiAqIC0gdmlzdWFsQ2hhbm5lbHMgaXMgb3V0c2lkZSBjb25maWcsIGl0IGRlZmluZXMgYXZhaWxhYmxlIHZpc3VhbCBjaGFubmVsIGFuZFxuICogICBwcm9wZXJ0eSBuYW1lcyBmb3IgZmllbGQsIHNjYWxlLCBkb21haW4gYW5kIHJhbmdlIG9mIGVhY2ggdmlzdWFsIGNoYW5lbC5cbiAqIC0gZW5hYmxlM2QsIGNvbG9yQWdncmVnYXRpb24gYW5kIHNpemVBZ2dyZWdhdGlvbiBhcmUgbW92ZWQgaW50byB2aXNDb25maWdcbiAqIC0gR2VvanNvbkxheWVyIC0gYWRkZWQgaGVpZ2h0LCByYWRpdXMgc3BlY2lmaWMgcHJvcGVydGllc1xuICovXG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjAgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuXG4gIC8vIG1vdmUgaW50byBsYXllci5jb25maWdcbiAgZGF0YUlkOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnZGF0YUlkJ30pLFxuICBsYWJlbDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2xhYmVsJ30pLFxuICBjb2xvcjogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2NvbG9yJ30pLFxuICBpc1Zpc2libGU6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdpc1Zpc2libGUnfSksXG4gIGhpZGRlbjogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2hpZGRlbid9KSxcblxuICAvLyBjb252ZXJ0IHZpc0NvbmZpZ1xuICB2aXNDb25maWc6IG5ldyBMYXllclZpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICd2aXNDb25maWcnfSksXG5cbiAgLy8gbW92ZSBpbnRvIGxheWVyLmNvbmZpZ1xuICAvLyBmbGF0dGVuXG4gIGNvbHVtbnM6IG5ldyBMYXllckNvbHVtbnNTY2hlbWFWMCgpLFxuXG4gIC8vIHNhdmUgaW50byB2aXN1YWxDaGFubmVsc1xuICBjb2xvckZpZWxkOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWFWMCh7XG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcbiAgICBrZXk6ICdjb2xvckZpZWxkJ1xuICB9KSxcbiAgY29sb3JTY2FsZTogbmV3IERpbWVuc2lvblNjYWxlU2NoZW1hVjAoe1xuICAgIGtleTogJ2NvbG9yU2NhbGUnXG4gIH0pLFxuICBzaXplRmllbGQ6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwKHtcbiAgICBwcm9wZXJ0aWVzOiBkaW1lbnNpb25Qcm9wc1YwLFxuICAgIGtleTogJ3NpemVGaWVsZCdcbiAgfSksXG4gIHNpemVTY2FsZTogbmV3IERpbWVuc2lvblNjYWxlU2NoZW1hVjAoe1xuICAgIGtleTogJ3NpemVTY2FsZSdcbiAgfSksXG5cbiAgLy8gbW92ZSBpbnRvIGNvbmZpZy52aXNDb25maWdcbiAgZW5hYmxlM2Q6IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ2VuYWJsZTNkJ30pLFxuICBjb2xvckFnZ3JlZ2F0aW9uOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtcbiAgICBrZXk6ICdjb2xvckFnZ3JlZ2F0aW9uJ1xuICB9KSxcbiAgc2l6ZUFnZ3JlZ2F0aW9uOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICdzaXplQWdncmVnYXRpb24nfSksXG5cbiAgLy8gZGVsZXRlXG4gIGlzQWdncmVnYXRlZDogbmV3IExheWVyQ29uZmlnU2NoZW1hRGVsZXRlVjAoKVxufTtcblxuLyoqXG4gKiBWMSBTY2hlbWFcbiAqL1xuY2xhc3MgQ29sdW1uU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKGNvbHVtbnMsIHN0YXRlKSB7XG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MSwgb25seSBzYXZlIGNvbHVtbiB2YWx1ZVxuICAgIC8vIGZpZWxkSWR4IHdpbGwgYmUgY2FsY3VsYXRlZCBkdXJpbmcgbWVyZ2VcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogT2JqZWN0LmtleXMoY29sdW1ucykucmVkdWNlKFxuICAgICAgICAoYWNjdSwgY2tleSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIFtja2V5XTogY29sdW1uc1tja2V5XS52YWx1ZVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgbG9hZChjb2x1bW5zKSB7XG4gICAgcmV0dXJuIHtjb2x1bW5zfTtcbiAgfVxufVxuXG5jbGFzcyBUZXh0TGFiZWxTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIHNhdmUodGV4dExhYmVsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRleHRMYWJlbC5tYXAodGwgPT4gKHtcbiAgICAgICAgLi4udGwsXG4gICAgICAgIGZpZWxkOiB0bC5maWVsZCA/IHBpY2sodGwuZmllbGQsIFsnbmFtZScsICd0eXBlJ10pIDogbnVsbFxuICAgICAgfSkpXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQodGV4dExhYmVsKSB7XG4gICAgcmV0dXJuIHt0ZXh0TGFiZWw6IEFycmF5LmlzQXJyYXkodGV4dExhYmVsKSA/IHRleHRMYWJlbCA6IFt0ZXh0TGFiZWxdfTtcbiAgfVxufVxuXG5jb25zdCB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjEgPSB7XG4gIHBvaW50OiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuXG4gICAgaWYgKGxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZSAmJiB2Yy5jb2xvckZpZWxkICYmICF2Yy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpKSB7XG4gICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAvLyBmb3Igb2xkZXIgc2NoZW1hIHdoZXJlIGZpbGxlZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gcG9pbnQgbGF5ZXJcbiAgICAgIC8vIGNvcHkgY29sb3JGaWVsZCwgY29sb3JTY2FsZSB0byBzdHJva2VDb2xvckZpZWxkLCBhbmQgc3Ryb2tlQ29sb3JTY2FsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogdmMuY29sb3JGaWVsZCxcbiAgICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogdmMuY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JGaWVsZDogbnVsbCxcbiAgICAgICAgY29sb3JTY2FsZTogJ3F1YW50aWxlJ1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBnZW9qc29uOiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJyk7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIHZjLnJhZGl1c0ZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBMQVlFUl9WSVNfQ09ORklHUy5yYWRpdXMuZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKGlzT2xkICYmICFpc1BvaW50ICYmIGxheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgICAgLy8gaWYgc3Ryb2tlZCBpcyB0cnVlLCBjb3B5IGNvbG9yIGNvbmZpZyB0byBzdHJva2UgY29sb3IgY29uZmlnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG4vKipcbiAqIFYxOiBzYXZlIFtmaWVsZF06IHtuYW1lLCB0eXBlfSwgW3NjYWxlXTogJycgZm9yIGVhY2ggY2hhbm5lbFxuICovXG5jbGFzcyBWaXN1YWxDaGFubmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHZpc3VhbENoYW5uZWxzLCBwYXJlbnRzKSB7XG4gICAgLy8gb25seSBzYXZlIGZpZWxkIGFuZCBzY2FsZSBvZiBlYWNoIGNoYW5uZWxcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKHZpc3VhbENoYW5uZWxzKS5yZWR1Y2UoXG4gICAgICAgIC8vICBzYXZlIGNoYW5uZWwgdG8gbnVsbCBpZiBkaWRuJ3Qgc2VsZWN0IGFueSBmaWVsZFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgICAgID8gcGljayhsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0sIFsnbmFtZScsICd0eXBlJ10pXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5zY2FsZV1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikge1xuICAgIC8vIGZvbGQgY2hhbm5lbHMgaW50byBjb25maWdcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcilcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjdW11bGF0b3IsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIC4uLnZjLFxuICAgICAgICAuLi5tb2RpZmllZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxID0ge1xuICBwb2ludDogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgIXZpc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZmlsbGVkJykgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvciAmJiAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgaWYgKGlzT2xkKSB7XG4gICAgICAvLyBjb2xvciBjb2xvciAmIGNvbG9yIHJhbmdlIHRvIHN0cm9rZSBjb2xvclxuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3IgPSBsYXllci5jb25maWcuY29sb3I7XG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvclJhbmdlID0gY2xvbmVEZWVwKHZpc0NvbmZpZy5jb2xvclJhbmdlKTtcbiAgICAgIGlmICh2aXNDb25maWcub3V0bGluZSkge1xuICAgICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxuICAgICAgICAvLyBzZXQgaXQgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xuICB9LFxuICBnZW9qc29uOiAodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkgPT4ge1xuICAgIC8vIGlzIHBvaW50cz9cbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgbGF5ZXIudmlzdWFsQ2hhbm5lbHMgJiZcbiAgICAgICFsYXllci52aXN1YWxDaGFubmVscy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIChsYXllci52aXN1YWxDaGFubmVscyAmJiBsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXNGaWVsZCkgfHxcbiAgICAgICh2aXNDb25maWcgJiYgdmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZSk7XG5cbiAgICBpZiAoaXNPbGQpIHtcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xuICAgICAgaWYgKGlzUG9pbnQpIHtcbiAgICAgICAgLy8gaWYgaXMgcG9pbnQsIHNldCBzdHJva2UgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kaWZpZWQuc3Ryb2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZDtcbiAgfVxufTtcblxuY2xhc3MgVmlzQ29uZmlnU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV0odmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZClcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIC4uLnZpc0NvbmZpZyxcbiAgICAgICAgLi4ubW9kaWZpZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjEgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICBjb25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ2NvbmZpZycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZGF0YUlkOiBudWxsLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBjb2xvcjogbnVsbCxcbiAgICAgIGNvbHVtbnM6IG5ldyBDb2x1bW5TY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgICAgICBrZXk6ICdjb2x1bW5zJ1xuICAgICAgfSksXG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNDb25maWc6IG5ldyBWaXNDb25maWdTY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gICAgICB9KSxcbiAgICAgIGhpZGRlbjogbnVsbCxcbiAgICAgIHRleHRMYWJlbDogbmV3IFRleHRMYWJlbFNjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgICAgIGtleTogJ3RleHRMYWJlbCdcbiAgICAgIH0pXG4gICAgfVxuICB9KSxcbiAgdmlzdWFsQ2hhbm5lbHM6IG5ldyBWaXN1YWxDaGFubmVsU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3Zpc3VhbENoYW5uZWxzJ1xuICB9KVxufTtcblxuZXhwb3J0IGNsYXNzIExheWVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnbGF5ZXJzJztcblxuICBzYXZlKGxheWVycywgcGFyZW50cykge1xuICAgIGNvbnN0IFt2aXNTdGF0ZV0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcblxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB2aXNTdGF0ZS5sYXllck9yZGVyLnJlZHVjZSgoc2F2ZWQsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIHNhdmUgbGF5ZXJzIGFjY29yZGluZyB0byB0aGVpciByZW5kZXJpbmcgb3JkZXJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbaW5kZXhdO1xuICAgICAgICBpZiAobGF5ZXIuaXNWYWxpZFRvU2F2ZSgpKSB7XG4gICAgICAgICAgc2F2ZWQucHVzaCh0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllcikubGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2F2ZWQ7XG4gICAgICB9LCBbXSlcbiAgICB9O1xuICB9XG5cbiAgbG9hZChsYXllcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogbGF5ZXJzLm1hcChsYXllciA9PiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllciwgbGF5ZXJzKS5sYXllcnMpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnZmlsdGVycyc7XG4gIHNhdmUoZmlsdGVycykge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEZpbHRlclZhbHVlKVxuICAgICAgICAubWFwKGZpbHRlciA9PiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWx0ZXIpLmZpbHRlcnMpXG4gICAgfTtcbiAgfVxuICBsb2FkKGZpbHRlcnMpIHtcbiAgICByZXR1cm4ge2ZpbHRlcnN9O1xuICB9XG59XG5cbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMCA9IFsndG9vbHRpcCcsICdicnVzaCddO1xuXG5jbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wZXJ0aWVzKVxuICAgICAgPyB7XG4gICAgICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzLnJlZHVjZShcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIC4uLihpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWQgPyB7W2tleV06IGludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnfSA6IHt9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gY29udmVydCB2MCAtPiB2MVxuICAgIC8vIHJldHVybiBlbmFibGVkOiBmYWxzZSBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BlcnRpZXMpXG4gICAgICA/IHtcbiAgICAgICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAgICAgICAuLi4oaW50ZXJhY3Rpb25Db25maWdba2V5XSB8fCB7fSksXG4gICAgICAgICAgICAgICAgICBlbmFibGVkOiBCb29sZWFuKGludGVyYWN0aW9uQ29uZmlnW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IHt9O1xuICB9XG59XG5cbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMSA9IFsuLi5pbnRlcmFjdGlvblByb3BzVjAsICdnZW9jb2RlcicsICdjb29yZGluYXRlJ107XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gc2F2ZSBjb25maWcgZXZlbiBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BlcnRpZXMpXG4gICAgICA/IHtcbiAgICAgICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgY29uc3QgbW9kaWZpZWRDb25maWcgPSBpbnRlcmFjdGlvbkNvbmZpZztcbiAgICBPYmplY3Qua2V5cyhpbnRlcmFjdGlvbkNvbmZpZykuZm9yRWFjaChjb25maWdUeXBlID0+IHtcbiAgICAgIGlmIChjb25maWdUeXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgY29uc3QgZmllbGRzVG9TaG93ID0gbW9kaWZpZWRDb25maWdbY29uZmlnVHlwZV0uZmllbGRzVG9TaG93O1xuICAgICAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZChmaWVsZHNUb1Nob3cpKSB7XG4gICAgICAgICAgcmV0dXJuIHtbdGhpcy5rZXldOiBtb2RpZmllZENvbmZpZ307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzVG9TaG93KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZmllbGRzVG9TaG93W2tleV0gPSBmaWVsZHNUb1Nob3dba2V5XS5tYXAoZmllbGREYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGREYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZERhdGEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBudWxsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmllbGREYXRhO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IG1vZGlmaWVkQ29uZmlnfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMCA9IHtcbiAgZGF0YUlkOiBudWxsLFxuICBpZDogbnVsbCxcbiAgbmFtZTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIGVubGFyZ2VkOiBudWxsXG59O1xuXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkID8gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmllbGQpW3RoaXMua2V5XSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbG9hZChmaWVsZCkge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogZmllbGR9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdE1hcHNTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBjb252ZXJ0TGF5ZXJTZXR0aW5ncyhhY2N1LCBba2V5LCB2YWx1ZV0pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuaXNBdmFpbGFibGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiBCb29sZWFuKHZhbHVlLmlzVmlzaWJsZSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhY2N1O1xuICB9XG5cbiAgbG9hZChzcGxpdE1hcHMpIHtcbiAgICAvLyBwcmV2aW91cyBzcGxpdE1hcHMgU2NoZW1hIHtsYXllcnM6IHtsYXllcklkOiB7aXNWaXNpYmxlLCBpc0F2YWlsYWJsZX19fVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNwbGl0TWFwcykgfHwgIXNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7c3BsaXRNYXBzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiAoe1xuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICAgICAgbGF5ZXJzOiBPYmplY3QuZW50cmllcyhzZXR0aW5ncy5sYXllcnMgfHwge30pLnJlZHVjZSh0aGlzLmNvbnZlcnRMYXllclNldHRpbmdzLCB7fSlcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlclByb3BzVjEgPSB7XG4gIC4uLmZpbHRlclByb3BzVjAsXG4gIHBsb3RUeXBlOiBudWxsLFxuICBhbmltYXRpb25XaW5kb3c6IG51bGwsXG4gIHlBeGlzOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3lBeGlzJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdHlwZTogbnVsbFxuICAgIH1cbiAgfSksXG5cbiAgLy8gcG9seWdvbiBmaWx0ZXIgcHJvcGVydGllc1xuICBsYXllcklkOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YwID0ge1xuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGZpbHRlclByb3BzVjBcbiAgfSksXG4gIGxheWVyczogbmV3IExheWVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMFxuICB9KSxcbiAgaW50ZXJhY3Rpb25Db25maWc6IG5ldyBJbnRlcmFjdGlvblNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBpbnRlcmFjdGlvblByb3BzVjBcbiAgfSksXG4gIGxheWVyQmxlbmRpbmc6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjEgPSB7XG4gIGZpbHRlcnM6IG5ldyBGaWx0ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogZmlsdGVyUHJvcHNWMVxuICB9KSxcbiAgbGF5ZXJzOiBuZXcgTGF5ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogbGF5ZXJQcm9wc1YxXG4gIH0pLFxuICBpbnRlcmFjdGlvbkNvbmZpZzogbmV3IEludGVyYWN0aW9uU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGludGVyYWN0aW9uUHJvcHNWMVxuICB9KSxcbiAgbGF5ZXJCbGVuZGluZzogbnVsbCxcbiAgc3BsaXRNYXBzOiBuZXcgU3BsaXRNYXBzU2NoZW1hKHtcbiAgICBrZXk6ICdzcGxpdE1hcHMnLFxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gIH0pLFxuICBhbmltYXRpb25Db25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGN1cnJlbnRUaW1lOiBudWxsLFxuICAgICAgc3BlZWQ6IG51bGxcbiAgICB9LFxuICAgIGtleTogJ2FuaW1hdGlvbkNvbmZpZydcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYwID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYxID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjEsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYSA9IHtcbiAgW1ZFUlNJT05TLnYwXToge1xuICAgIHNhdmU6IHRvU2F2ZSA9PiB2aXNTdGF0ZVNjaGVtYVYwLnNhdmUodG9TYXZlKSxcbiAgICBsb2FkOiB0b0xvYWQgPT4gdmlzU3RhdGVTY2hlbWFWMS5sb2FkKHZpc1N0YXRlU2NoZW1hVjAubG9hZCh0b0xvYWQpLnZpc1N0YXRlKVxuICB9LFxuICBbVkVSU0lPTlMudjFdOiB2aXNTdGF0ZVNjaGVtYVYxXG59O1xuXG4vLyB0ZXN0IGxvYWQgdjBcbmV4cG9ydCBkZWZhdWx0IHZpc1N0YXRlU2NoZW1hO1xuIl19