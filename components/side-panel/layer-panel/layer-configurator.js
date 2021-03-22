"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.ChannelByValueSelectorFactory = ChannelByValueSelectorFactory;
exports.AggregationTypeSelector = exports.AggrScaleSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

var _types = require("../../../layers/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: ", ";\n  padding: ", ";\n  border-left: ", " dashed\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject(), function (props) {
  return props.theme.layerConfiguratorMargin;
}, function (props) {
  return props.theme.layerConfiguratorPadding;
}, function (props) {
  return props.theme.layerConfiguratorBorder;
}, function (props) {
  return props.theme.layerConfiguratorBorderColor;
});

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2());

var getLayerFields = function getLayerFields(datasets, layer) {
  return datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"], _visConfigSlider["default"], _textLabelPanel["default"], _layerConfigGroup["default"], ChannelByValueSelectorFactory, _layerColumnConfig["default"], _layerTypeSelector["default"], _visConfigSwitch["default"]];

function LayerConfiguratorFactory(SourceDataSelector, VisConfigSlider, TextLabelPanel, LayerConfigGroup, ChannelByValueSelector, LayerColumnConfig, LayerTypeSelector, VisConfigSwitch) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled || {
          label: 'layer.color'
        }, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _types.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(TextLabelPanel, {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel,
          colorPalette: visConfiguratorProps.colorPalette,
          setColorPaletteUI: visConfiguratorProps.setColorPaletteUI
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius'
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'layer.elevationByDescription';
        var colorByDescription = 'layer.colorByDescription';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))));
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.trailLength",
          description: "layer.trailLengthDescription"
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModel',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModelOptions',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.elevationScale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            fieldPairs = _ref11.fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(HowToButton, {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(LayerTypeSelector, {
          datasets: datasets,
          layer: layer,
          layerTypeOptions: layerTypeOptions,
          onSelect: updateLayerType
        }), Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          dataId: config.dataId,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(LayerColumnConfig, {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer),
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig,
          updateLayerType: this.props.updateLayerType
        })), this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    openModal: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    updateLayerType: _propTypes["default"].func.isRequired,
    updateLayerVisConfig: _propTypes["default"].func.isRequired,
    updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired,
    updateLayerColorUI: _propTypes["default"].func.isRequired
  });
  return LayerConfigurator;
}
/*
 * Componentize config component into pure functional components
 */


var StyledHowToButton = _styledComponents["default"].div(_templateObject3());

var HowToButton = function HowToButton(_ref12) {
  var onClick = _ref12.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledHowToButton, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layerConfiguration.howTo'
  })));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChange = _ref13.onChange,
      label = _ref13.label,
      selectedColor = _ref13.selectedColor,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref14) {
  var layer = _ref14.layer,
      onChangeConfig = _ref14.onChangeConfig,
      onChangeVisConfig = _ref14.onChangeVisConfig,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'color' : _ref14$property,
      _setColorUI2 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange,
      _ref15$property = _ref15.property,
      property = _ref15$property === void 0 ? 'colorRange' : _ref15$property,
      _setColorUI3 = _ref15.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;
ChannelByValueSelectorFactory.deps = [_visConfigByFieldSelector["default"]];

function ChannelByValueSelectorFactory(VisConfigByFieldSelector) {
  var ChannelByValueSelector = function ChannelByValueSelector(_ref16) {
    var layer = _ref16.layer,
        channel = _ref16.channel,
        onChange = _ref16.onChange,
        fields = _ref16.fields,
        description = _ref16.description;
    var channelScaleType = channel.channelScaleType,
        domain = channel.domain,
        field = channel.field,
        key = channel.key,
        property = channel.property,
        range = channel.range,
        scale = channel.scale,
        defaultMeasure = channel.defaultMeasure,
        supportedFieldTypes = channel.supportedFieldTypes;
    var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
    var supportedFields = fields.filter(function (_ref17) {
      var type = _ref17.type;
      return channelSupportedFieldTypes.includes(type);
    });
    var scaleOptions = layer.getScaleOptions(channel.key);
    var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
    var defaultDescription = 'layerConfiguration.defaultDescription';
    return /*#__PURE__*/_react["default"].createElement(VisConfigByFieldSelector, {
      channel: channel.key,
      description: description || defaultDescription,
      domain: layer.config[domain],
      fields: supportedFields,
      id: layer.id,
      key: "".concat(key, "-channel-selector"),
      property: property,
      placeholder: defaultMeasure || 'placeholder.selectField',
      range: layer.config.visConfig[range],
      scaleOptions: scaleOptions,
      scaleType: scale ? layer.config[scale] : null,
      selectedField: layer.config[field],
      showScale: showScale,
      updateField: function updateField(val) {
        return onChange((0, _defineProperty2["default"])({}, field, val), key);
      },
      updateScale: function updateScale(val) {
        return onChange((0, _defineProperty2["default"])({}, scale, val), key);
      }
    });
  };

  return ChannelByValueSelector;
}

var AggrScaleSelector = function AggrScaleSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      onChange = _ref18.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggrScaleSelector = AggrScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref19) {
  var layer = _ref19.layer,
      channel = _ref19.channel,
      _onChange6 = _ref19.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layer.aggregateBy',
    values: {
      field: selectedField.name
    }
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread(_objectSpread({}, layer.config.visConfig), {}, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwibGF5ZXJDb25maWd1cmF0b3JNYXJnaW4iLCJsYXllckNvbmZpZ3VyYXRvclBhZGRpbmciLCJsYXllckNvbmZpZ3VyYXRvckJvcmRlciIsImxheWVyQ29uZmlndXJhdG9yQm9yZGVyQ29sb3IiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJvbkNoYW5nZSIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2V0Q29sb3JVSSIsInVwZGF0ZUxheWVyQ29sb3JVSSIsImdldFZpc0NvbmZpZ3VyYXRvclByb3BzIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsIkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeSIsImRlcHMiLCJTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IiwiVmlzQ29uZmlnU2xpZGVyRmFjdG9yeSIsIlRleHRMYWJlbFBhbmVsRmFjdG9yeSIsIkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5IiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkiLCJMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkiLCJMYXllclR5cGVTZWxlY3RvckZhY3RvcnkiLCJWaXNDb25maWdTd2l0Y2hGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yIiwiVmlzQ29uZmlnU2xpZGVyIiwiVGV4dExhYmVsUGFuZWwiLCJMYXllckNvbmZpZ0dyb3VwIiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciIsIkxheWVyQ29sdW1uQ29uZmlnIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJWaXNDb25maWdTd2l0Y2giLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImxhYmVsIiwiY29sb3JGaWVsZCIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJjb2xvclBhbGV0dGUiLCJzZXRDb2xvclBhbGV0dGVVSSIsImNvbG9yQWdncmVnYXRpb24iLCJjb25kaXRpb24iLCJjbHVzdGVyUmFkaXVzIiwid2VpZ2h0IiwiX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWciLCJlbmFibGUzZCIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJwZXJjZW50aWxlIiwid29ybGRVbml0U2l6ZSIsImNvdmVyYWdlIiwiZWxldmF0aW9uU2NhbGUiLCJzaXplUmFuZ2UiLCJzaXplQWdncmVnYXRpb24iLCJlbGV2YXRpb25QZXJjZW50aWxlIiwiY292ZXJhZ2VGaWVsZCIsImNvdmVyYWdlUmFuZ2UiLCJhcmdzIiwiX3JlbmRlckxpbmVMYXllckNvbmZpZyIsIm1ldGEiLCJmZWF0dXJlVHlwZXMiLCJwb2x5Z29uIiwic3Ryb2tlZCIsInRyYWlsTGVuZ3RoIiwic3Ryb2tlT3BhY2l0eSIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZSIsInRhcmdldCIsImZpbGVzIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2NlbmVncmFwaCIsInNpemVTY2FsZSIsImFuZ2xlWCIsImFuZ2xlWSIsImFuZ2xlWiIsImhlaWdodFJhbmdlIiwibGF5ZXJUeXBlT3B0aW9ucyIsInVwZGF0ZUxheWVyVHlwZSIsImZpZWxkUGFpcnMiLCJyZW5kZXJUZW1wbGF0ZSIsImxheWVySW5mb01vZGFsIiwib3Blbk1vZGFsIiwiaGFzQWxsQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpZCIsInZhbHVlIiwiY29sdW1uUGFpcnMiLCJjb2x1bW5zIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJiaW5kIiwiYXNzaWduQ29sdW1uIiwiY29sdW1uTGFiZWxzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiU3R5bGVkSG93VG9CdXR0b24iLCJIb3dUb0J1dHRvbiIsIm9uQ2xpY2siLCJMYXllckNvbG9yU2VsZWN0b3IiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiY29sb3JVSSIsIm5ld0NvbmZpZyIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkxheWVyQ29sb3JSYW5nZVNlbGVjdG9yIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5IiwiVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMvQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRG9DLENBQWpCLENBQUgsb0JBSWIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyx1QkFBaEI7QUFBQSxDQUpRLEVBS2hCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsd0JBQWhCO0FBQUEsQ0FMVyxFQU1aLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsdUJBQWhCO0FBQUEsQ0FOTyxFQU92QixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLDRC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SUFBQSxFQUFFLEVBQUUsbUJBQXRCO0FBQTJDLElBQUEsTUFBTSxFQUFFO0FBQUNELE1BQUFBLEtBQUssRUFBRXNCLGFBQWEsQ0FBQ0c7QUFBdEI7QUFBbkQsSUFERixDQURGLGVBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRTlILFNBQVMsQ0FBQzBILFdBQUQsQ0FEMUI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsa0JBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBNUQsS0FBSztBQUFBLGFBQ2IzRyxVQUFRLENBQ047QUFDRTJDLFFBQUFBLFNBQVMsa0NBQ0poRCxLQUFLLENBQUNDLE1BQU4sQ0FBYStDLFNBRFQsNENBRU4wSCxXQUZNLEVBRVExRCxLQUZSO0FBRFgsT0FETSxFQU9OaUMsT0FBTyxDQUFDSyxHQVBGLENBREs7QUFBQTtBQUxqQixJQUpGLENBREY7QUF3QkQsQ0FoQ007QUFpQ1AiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgUGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuXG5pbXBvcnQgVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3Zpcy1jb25maWctYnktZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IExheWVyQ29sdW1uQ29uZmlnRmFjdG9yeSBmcm9tICcuL2xheWVyLWNvbHVtbi1jb25maWcnO1xuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL2xheWVyLXR5cGUtc2VsZWN0b3InO1xuaW1wb3J0IERpbWVuc2lvblNjYWxlU2VsZWN0b3IgZnJvbSAnLi9kaW1lbnNpb24tc2NhbGUtc2VsZWN0b3InO1xuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBWaXNDb25maWdTd2l0Y2hGYWN0b3J5IGZyb20gJy4vdmlzLWNvbmZpZy1zd2l0Y2gnO1xuaW1wb3J0IFZpc0NvbmZpZ1NsaWRlckZhY3RvcnkgZnJvbSAnLi92aXMtY29uZmlnLXNsaWRlcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cEZhY3RvcnksIHtDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudH0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xuaW1wb3J0IFRleHRMYWJlbFBhbmVsRmFjdG9yeSBmcm9tICcuL3RleHQtbGFiZWwtcGFuZWwnO1xuXG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQge0NIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtMQVlFUl9UWVBFU30gZnJvbSAnbGF5ZXJzL3R5cGVzJztcblxuY29uc3QgU3R5bGVkTGF5ZXJDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZydcbn0pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWd1cmF0b3JNYXJnaW59O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yUGFkZGluZ307XG4gIGJvcmRlci1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yQm9yZGVyfSBkYXNoZWRcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yQm9yZGVyQ29sb3J9O1xuYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZ19fdmlzdWFsQy1jb25maWcnXG59KWBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRMYXllckZpZWxkcyA9IChkYXRhc2V0cywgbGF5ZXIpID0+XG4gIGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdID8gZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0uZmllbGRzIDogW107XG5cbmV4cG9ydCBjb25zdCBnZXRMYXllckNvbmZpZ3VyYXRvclByb3BzID0gcHJvcHMgPT4gKHtcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllckNvbmZpZyxcbiAgc2V0Q29sb3JVSTogcHJvcHMudXBkYXRlTGF5ZXJDb2xvclVJXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFZpc0NvbmZpZ3VyYXRvclByb3BzID0gcHJvcHMgPT4gKHtcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllclZpc0NvbmZpZyxcbiAgc2V0Q29sb3JVSTogcHJvcHMudXBkYXRlTGF5ZXJDb2xvclVJXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0gcHJvcHMgPT4gKHtcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWdcbn0pO1xuXG5MYXllckNvbmZpZ3VyYXRvckZhY3RvcnkuZGVwcyA9IFtcbiAgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSxcbiAgVmlzQ29uZmlnU2xpZGVyRmFjdG9yeSxcbiAgVGV4dExhYmVsUGFuZWxGYWN0b3J5LFxuICBMYXllckNvbmZpZ0dyb3VwRmFjdG9yeSxcbiAgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnksXG4gIExheWVyQ29sdW1uQ29uZmlnRmFjdG9yeSxcbiAgTGF5ZXJUeXBlU2VsZWN0b3JGYWN0b3J5LFxuICBWaXNDb25maWdTd2l0Y2hGYWN0b3J5XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXllckNvbmZpZ3VyYXRvckZhY3RvcnkoXG4gIFNvdXJjZURhdGFTZWxlY3RvcixcbiAgVmlzQ29uZmlnU2xpZGVyLFxuICBUZXh0TGFiZWxQYW5lbCxcbiAgTGF5ZXJDb25maWdHcm91cCxcbiAgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvcixcbiAgTGF5ZXJDb2x1bW5Db25maWcsXG4gIExheWVyVHlwZVNlbGVjdG9yLFxuICBWaXNDb25maWdTd2l0Y2hcbikge1xuICBjbGFzcyBMYXllckNvbmZpZ3VyYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJUeXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJWaXNDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllckNvbG9yVUk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX3JlbmRlclBvaW50TGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVySWNvbkxheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogRmlsbCBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLihsYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWQgfHwge2xhYmVsOiAnbGF5ZXIuY29sb3InfSl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7Lyogb3V0bGluZSBjb2xvciAqL31cbiAgICAgICAgICB7bGF5ZXIudHlwZSA9PT0gTEFZRVJfVFlQRVMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3V0bGluZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gcHJvcGVydHk9XCJzdHJva2VDb2xvclJhbmdlXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgeyFsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGxheWVyLmNvbmZpZy5zaXplRmllbGQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCB8fCBsYXllci5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaFxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpeGVkUmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogdGV4dCBsYWJlbCAqL31cbiAgICAgICAgICA8VGV4dExhYmVsUGFuZWxcbiAgICAgICAgICAgIGZpZWxkcz17dmlzQ29uZmlndXJhdG9yUHJvcHMuZmllbGRzfVxuICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XG4gICAgICAgICAgICB0ZXh0TGFiZWw9e2xheWVyLmNvbmZpZy50ZXh0TGFiZWx9XG4gICAgICAgICAgICBjb2xvclBhbGV0dGU9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLmNvbG9yUGFsZXR0ZX1cbiAgICAgICAgICAgIHNldENvbG9yUGFsZXR0ZVVJPXt2aXNDb25maWd1cmF0b3JQcm9wcy5zZXRDb2xvclBhbGV0dGVVSX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQ2x1c3RlckxheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9IC8+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENsdXN0ZXIgUmFkaXVzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jbHVzdGVyUmFkaXVzfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckhlYXRtYXBMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgey8qIFdlaWdodCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLndlaWdodCd9PlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMud2VpZ2h0fVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckdyaWRMYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlzQ29uZmlnOiB7ZW5hYmxlM2R9XG4gICAgICB9ID0gY29uZmlnO1xuICAgICAgY29uc3QgZWxldmF0aW9uQnlEZXNjcmlwdGlvbiA9ICdsYXllci5lbGV2YXRpb25CeURlc2NyaXB0aW9uJztcbiAgICAgIGNvbnN0IGNvbG9yQnlEZXNjcmlwdGlvbiA9ICdsYXllci5jb2xvckJ5RGVzY3JpcHRpb24nO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9IC8+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbG9yQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZSAmJlxuICAgICAgICAgICAgICBsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDZWxsIHNpemUgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndvcmxkVW5pdFNpemV9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIEVsZXZhdGlvbiAqL31cbiAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2QgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsZXZhdGlvbkJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZTNkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogU2hhbiBtb3ZlIHRoZXNlIGludG8gbGF5ZXIgY2xhc3NcbiAgICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDb3ZlcmFnZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvdmVyYWdlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5jb3ZlcmFnZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY292ZXJhZ2V9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuaGVpZ2h0UmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJBcmNMYXllckNvbmZpZyhhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xuICAgIH1cblxuICAgIF9yZW5kZXJMaW5lTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEFyY0xheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICBzZXRDb2xvclVJPXtsYXllckNvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yVUl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VWaXNDb25maWc9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIHRoaWNrbmVzcyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnN0cm9rZSd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlclRyaXBMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCIgY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBUcmFpbCBMZW5ndGgqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLihmZWF0dXJlVHlwZXMucG9seWdvbiA/IGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWQgOiB7fSl9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnRyYWlsTGVuZ3RoXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwibGF5ZXIudHJhaWxMZW5ndGhEZXNjcmlwdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudHJhaWxMZW5ndGh9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJHZW9qc29uTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWV0YToge2ZlYXR1cmVUeXBlcyA9IHt9fSxcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxuICAgICAgfSA9IGxheWVyO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uIHx8IGZlYXR1cmVUeXBlcy5wb2ludCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJsYXllci5maWxsQ29sb3JcIlxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIHN0cm9rZSBjb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VXaWR0aFwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2ggey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud2lyZWZyYW1lfSAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgICAgeyFsYXllci5jb25maWcucmFkaXVzRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyM0RMYXllckNvbmZpZyh7bGF5ZXIsIHZpc0NvbmZpZ3VyYXRvclByb3BzfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuM0RNb2RlbCd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiLmdsYiwuZ2x0ZlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2Uoe3NjZW5lZ3JhcGg6IHVybH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuM0RNb2RlbE9wdGlvbnMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVTY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVYfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5hbmdsZVl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmFuZ2xlWn1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlclMyTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxuICAgICAgfSA9IGxheWVyO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5maWxsQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCIgY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmVsZXZhdGlvblNjYWxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuaGVpZ2h0UmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmhlaWdodFJhbmdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53aXJlZnJhbWV9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgdXBkYXRlTGF5ZXJDb25maWcsIGxheWVyVHlwZU9wdGlvbnMsIHVwZGF0ZUxheWVyVHlwZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ZpZWxkcyA9IFtdLCBmaWVsZFBhaXJzfSA9IGxheWVyLmNvbmZpZy5kYXRhSWQgPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA6IHt9O1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcblxuICAgICAgY29uc3QgdmlzQ29uZmlndXJhdG9yUHJvcHMgPSBnZXRWaXNDb25maWd1cmF0b3JQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGxheWVyQ29uZmlndXJhdG9yUHJvcHMgPSBnZXRMYXllckNvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgcmVuZGVyVGVtcGxhdGUgPSBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxuICAgICAgICAgICAgPEhvd1RvQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbk1vZGFsKGxheWVyLmxheWVySW5mb01vZGFsKX0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmJhc2ljJ30gY29sbGFwc2libGUgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9PlxuICAgICAgICAgICAgPExheWVyVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17Y29uZmlnLmRhdGFJZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4gdXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TGF5ZXJDb2x1bW5Db25maWdcbiAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxuICAgICAgICAgICAgICBjb2x1bW5zPXtsYXllci5jb25maWcuY29sdW1uc31cbiAgICAgICAgICAgICAgYXNzaWduQ29sdW1uUGFpcnM9e2xheWVyLmFzc2lnbkNvbHVtblBhaXJzLmJpbmQobGF5ZXIpfVxuICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgY29sdW1uTGFiZWxzPXtsYXllci5jb2x1bW5MYWJlbHN9XG4gICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy5wcm9wcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7dGhpc1tyZW5kZXJUZW1wbGF0ZV0gJiZcbiAgICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdKHtcbiAgICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgICAgICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICAgICAgICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBMYXllckNvbmZpZ3VyYXRvcjtcbn1cbi8qXG4gKiBDb21wb25lbnRpemUgY29uZmlnIGNvbXBvbmVudCBpbnRvIHB1cmUgZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gKi9cblxuY29uc3QgU3R5bGVkSG93VG9CdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IC00cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSG93VG9CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cbiAgICA8QnV0dG9uIGxpbmsgc21hbGwgb25DbGljaz17b25DbGlja30+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2xheWVyQ29uZmlndXJhdGlvbi5ob3dUbyd9IC8+XG4gICAgPC9CdXR0b24+XG4gIDwvU3R5bGVkSG93VG9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclNlbGVjdG9yID0gKHtcbiAgbGF5ZXIsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgc2VsZWN0ZWRDb2xvcixcbiAgcHJvcGVydHkgPSAnY29sb3InLFxuICBzZXRDb2xvclVJXG59KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHNlbGVjdGVkQ29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogcmdiVmFsdWV9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZUNvbmZpZyxcbiAgb25DaGFuZ2VWaXNDb25maWcsXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcbiAgc2V0Q29sb3JVSVxufSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZVZpc0NvbmZpZyh7dGFyZ2V0Q29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclJhbmdlU2VsZWN0b3IgPSAoe2xheWVyLCBvbkNoYW5nZSwgcHJvcGVydHkgPSAnY29sb3JSYW5nZScsIHNldENvbG9yVUl9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldLFxuICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgc2V0Q29sb3I6IGNvbG9yUmFuZ2UgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGNvbG9yUmFuZ2V9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcbmV4cG9ydCBmdW5jdGlvbiBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeShWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IpIHtcbiAgY29uc3QgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciA9ICh7bGF5ZXIsIGNoYW5uZWwsIG9uQ2hhbmdlLCBmaWVsZHMsIGRlc2NyaXB0aW9ufSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5uZWxTY2FsZVR5cGUsXG4gICAgICBkb21haW4sXG4gICAgICBmaWVsZCxcbiAgICAgIGtleSxcbiAgICAgIHByb3BlcnR5LFxuICAgICAgcmFuZ2UsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlZmF1bHRNZWFzdXJlLFxuICAgICAgc3VwcG9ydGVkRmllbGRUeXBlc1xuICAgIH0gPSBjaGFubmVsO1xuICAgIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID1cbiAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xuICAgIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT4gY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModHlwZSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucyhjaGFubmVsLmtleSk7XG4gICAgY29uc3Qgc2hvd1NjYWxlID0gIWxheWVyLmlzQWdncmVnYXRlZCAmJiBsYXllci5jb25maWdbc2NhbGVdICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxO1xuICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9ICdsYXllckNvbmZpZ3VyYXRpb24uZGVmYXVsdERlc2NyaXB0aW9uJztcblxuICAgIHJldHVybiAoXG4gICAgICA8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yXG4gICAgICAgIGNoYW5uZWw9e2NoYW5uZWwua2V5fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgICAgICBkb21haW49e2xheWVyLmNvbmZpZ1tkb21haW5dfVxuICAgICAgICBmaWVsZHM9e3N1cHBvcnRlZEZpZWxkc31cbiAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICBrZXk9e2Ake2tleX0tY2hhbm5lbC1zZWxlY3RvcmB9XG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZWFzdXJlIHx8ICdwbGFjZWhvbGRlci5zZWxlY3RGaWVsZCd9XG4gICAgICAgIHJhbmdlPXtsYXllci5jb25maWcudmlzQ29uZmlnW3JhbmdlXX1cbiAgICAgICAgc2NhbGVPcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cbiAgICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cbiAgICAgICAgc2hvd1NjYWxlPXtzaG93U2NhbGV9XG4gICAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XG4gICAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENoYW5uZWxCeVZhbHVlU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBBZ2dyU2NhbGVTZWxlY3RvciA9ICh7Y2hhbm5lbCwgbGF5ZXIsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCB7c2NhbGUsIGtleX0gPSBjaGFubmVsO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoa2V5KTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShzY2FsZU9wdGlvbnMpICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxID8gKFxuICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXG4gICAgICBsYWJlbD17YCR7a2V5fSBTY2FsZWB9XG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZ1tzY2FsZV19XG4gICAgICBvblNlbGVjdD17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgIC8+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yID0gKHtsYXllciwgY2hhbm5lbCwgb25DaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IHtmaWVsZCwgYWdncmVnYXRpb24sIGtleX0gPSBjaGFubmVsO1xuICBjb25zdCBzZWxlY3RlZEZpZWxkID0gbGF5ZXIuY29uZmlnW2ZpZWxkXTtcbiAgY29uc3Qge3Zpc0NvbmZpZ30gPSBsYXllci5jb25maWc7XG5cbiAgLy8gYWdncmVnYXRpb24gc2hvdWxkIG9ubHkgYmUgc2VsZWN0YWJsZSB3aGVuIGZpZWxkIGlzIHNlbGVjdGVkXG4gIGNvbnN0IGFnZ3JlZ2F0aW9uT3B0aW9ucyA9IGxheWVyLmdldEFnZ3JlZ2F0aW9uT3B0aW9ucyhrZXkpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllci5hZ2dyZWdhdGVCeSd9IHZhbHVlcz17e2ZpZWxkOiBzZWxlY3RlZEZpZWxkLm5hbWV9fSAvPlxuICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFubmVsLmtleVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4iXX0=