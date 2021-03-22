"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n\n  &.dragging {\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PanelWrapper = _styledComponents["default"].div(_templateObject());

LayerPanelFactory.deps = [_layerConfigurator["default"], _layerPanelHeader["default"]];

function LayerPanelFactory(LayerConfigurator, LayerPanelHeader) {
  var LayerPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    var _super = _createSuper(LayerPanel);

    function LayerPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerColorUI", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerColorUIChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props2;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$props2 = _this.props).layerTextLabelChange.apply(_this$props2, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            layer = _this$props3.layer,
            datasets = _this$props3.datasets,
            layerTypeOptions = _this$props3.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;
        return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, /*#__PURE__*/_react["default"].createElement(LayerPanelHeader, {
          isConfigActive: isConfigActive,
          layerId: layer.id,
          isVisible: config.isVisible,
          label: config.label,
          labelRCGColorValues: config.dataId ? datasets[config.dataId].color : null,
          layerType: layer.type,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer
        }), isConfigActive && /*#__PURE__*/_react["default"].createElement(LayerConfigurator, {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerColorUI: this.updateLayerColorUI,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerPanel, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    idx: _propTypes["default"].number.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    onCloseConfig: _propTypes["default"].func,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    setLayerAnimationTime: _propTypes["default"].func,
    updateLayerAnimationSpeed: _propTypes["default"].func
  });
  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJMYXllckNvbmZpZ3VyYXRvciIsIkxheWVyUGFuZWxIZWFkZXIiLCJMYXllclBhbmVsIiwibmV3UHJvcCIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1R5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImFyZ3MiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllclR5cGVPcHRpb25zIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hTdGFydCIsImlkIiwiZGF0YUlkIiwiY29sb3IiLCJ0eXBlIiwiX3RvZ2dsZUVuYWJsZUNvbmZpZyIsIl90b2dnbGVWaXNpYmlsaXR5IiwiX3VwZGF0ZUxheWVyTGFiZWwiLCJfcmVtb3ZlTGF5ZXIiLCJvcGVuTW9kYWwiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWciLCJ1cGRhdGVMYXllclR5cGUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbkNsb3NlQ29uZmlnIiwiYXJyYXlPZiIsImFueSIsInNldExheWVyQW5pbWF0aW9uVGltZSIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVYsbUJBQWxCOztBQVdBQyxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FBQ0MsNkJBQUQsRUFBMkJDLDRCQUEzQixDQUF6Qjs7QUFFQSxTQUFTSCxpQkFBVCxDQUEyQkksaUJBQTNCLEVBQThDQyxnQkFBOUMsRUFBZ0U7QUFBQSxNQUN4REMsVUFEd0Q7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRHQW1CeEMsVUFBQUMsT0FBTyxFQUFJO0FBQzdCLGNBQUtDLEtBQUwsQ0FBV0MsaUJBQVgsQ0FBNkIsTUFBS0QsS0FBTCxDQUFXRSxLQUF4QyxFQUErQ0gsT0FBL0M7QUFDRCxPQXJCMkQ7QUFBQSwwR0F1QjFDLFVBQUFJLE9BQU8sRUFBSTtBQUMzQixjQUFLSCxLQUFMLENBQVdJLGVBQVgsQ0FBMkIsTUFBS0osS0FBTCxDQUFXRSxLQUF0QyxFQUE2Q0MsT0FBN0M7QUFDRCxPQXpCMkQ7QUFBQSwrR0EyQnJDLFVBQUFFLFlBQVksRUFBSTtBQUNyQyxjQUFLTCxLQUFMLENBQVdNLG9CQUFYLENBQWdDLE1BQUtOLEtBQUwsQ0FBV0UsS0FBM0MsRUFBa0RHLFlBQWxEO0FBQ0QsT0E3QjJEO0FBQUEsNkdBK0J2QyxZQUFhO0FBQUE7O0FBQUEsMkNBQVRFLElBQVM7QUFBVEEsVUFBQUEsSUFBUztBQUFBOztBQUNoQyw2QkFBS1As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QUFlRixVQU5UO0FBT2pCekIsSUFBQUEsV0FBVyxFQUFFdUIsc0JBQVVJLElBQVYsQ0FBZUYsVUFQWDtBQVFqQkcsSUFBQUEsYUFBYSxFQUFFTCxzQkFBVUksSUFSUjtBQVNqQnhCLElBQUFBLGdCQUFnQixFQUFFb0Isc0JBQVVNLE9BQVYsQ0FBa0JOLHNCQUFVTyxHQUE1QixDQVREO0FBVWpCL0MsSUFBQUEsb0JBQW9CLEVBQUV3QyxzQkFBVUksSUFBVixDQUFlRixVQVZwQjtBQVdqQm5DLElBQUFBLDhCQUE4QixFQUFFaUMsc0JBQVVJLElBQVYsQ0FBZUYsVUFYOUI7QUFZakJ4QyxJQUFBQSxrQkFBa0IsRUFBRXNDLHNCQUFVSSxJQUFWLENBQWVGLFVBWmxCO0FBYWpCTSxJQUFBQSxxQkFBcUIsRUFBRVIsc0JBQVVJLElBYmhCO0FBY2pCSyxJQUFBQSx5QkFBeUIsRUFBRVQsc0JBQVVJO0FBZHBCLEdBRnlDO0FBZ0g5RCxTQUFPcEQsVUFBUDtBQUNEOztlQUVjTixpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IGZyb20gJy4vbGF5ZXItY29uZmlndXJhdG9yJztcbmltcG9ydCBMYXllclBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsLWhlYWRlcic7XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5gO1xuXG5MYXllclBhbmVsRmFjdG9yeS5kZXBzID0gW0xheWVyQ29uZmlndXJhdG9yRmFjdG9yeSwgTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnldO1xuXG5mdW5jdGlvbiBMYXllclBhbmVsRmFjdG9yeShMYXllckNvbmZpZ3VyYXRvciwgTGF5ZXJQYW5lbEhlYWRlcikge1xuICBjbGFzcyBMYXllclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBpZHg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVtb3ZlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvbkNsb3NlQ29uZmlnOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzZXRMYXllckFuaW1hdGlvblRpbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb25maWcgPSBuZXdQcm9wID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3UHJvcCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVHlwZSA9IG5ld1R5cGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VHlwZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnID0gbmV3VmlzQ29uZmlnID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VmlzQ29uZmlnKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb2xvclVJID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb2xvclVJQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclRleHRMYWJlbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSk7XG4gICAgfTtcblxuICAgIF91cGRhdGVMYXllckxhYmVsID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtsYWJlbDogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZVZpc2liaWxpdHkgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpc1Zpc2libGUgPSAhdGhpcy5wcm9wcy5sYXllci5jb25maWcuaXNWaXNpYmxlO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNWaXNpYmxlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVFbmFibGVDb25maWcgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxheWVyOiB7XG4gICAgICAgICAgY29uZmlnOiB7aXNDb25maWdBY3RpdmV9XG4gICAgICAgIH1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNDb25maWdBY3RpdmU6ICFpc0NvbmZpZ0FjdGl2ZX0pO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlTGF5ZXIgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyKHRoaXMucHJvcHMuaWR4KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgbGF5ZXJUeXBlT3B0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICAgIGNvbnN0IHtpc0NvbmZpZ0FjdGl2ZX0gPSBjb25maWc7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbFdyYXBwZXJcbiAgICAgICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGxheWVyLXBhbmVsICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH1cbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5vbk1vdXNlRG93bn1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgPExheWVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgIGlzQ29uZmlnQWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgICAgIGxheWVySWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgaXNWaXNpYmxlPXtjb25maWcuaXNWaXNpYmxlfVxuICAgICAgICAgICAgbGFiZWw9e2NvbmZpZy5sYWJlbH1cbiAgICAgICAgICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXM9e2NvbmZpZy5kYXRhSWQgPyBkYXRhc2V0c1tjb25maWcuZGF0YUlkXS5jb2xvciA6IG51bGx9XG4gICAgICAgICAgICBsYXllclR5cGU9e2xheWVyLnR5cGV9XG4gICAgICAgICAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZz17dGhpcy5fdG9nZ2xlRW5hYmxlQ29uZmlnfVxuICAgICAgICAgICAgb25Ub2dnbGVWaXNpYmlsaXR5PXt0aGlzLl90b2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgICAgb25VcGRhdGVMYXllckxhYmVsPXt0aGlzLl91cGRhdGVMYXllckxhYmVsfVxuICAgICAgICAgICAgb25SZW1vdmVMYXllcj17dGhpcy5fcmVtb3ZlTGF5ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXNDb25maWdBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPExheWVyQ29uZmlndXJhdG9yXG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICBvcGVuTW9kYWw9e3RoaXMucHJvcHMub3Blbk1vZGFsfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbG9yVUk9e3RoaXMudXBkYXRlTGF5ZXJDb2xvclVJfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dGhpcy51cGRhdGVMYXllckNvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUeXBlPXt0aGlzLnVwZGF0ZUxheWVyVHlwZX1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmVsV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExheWVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxGYWN0b3J5O1xuIl19