"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _localization = require("../localization");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _customPanel = _interopRequireDefault(require("./side-panel/custom-panel"));

var _defaultSettings = require("../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  .side-panel__content__inner {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanelContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.sidePanelInnerPadding;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents["default"].div(_templateObject2(), function (props) {
    return props.theme.titleTextColor;
  }, function (props) {
    return props.theme.sidePanelTitleFontsize;
  }, function (props) {
    return props.theme.sidePanelTitleLineHeight;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"], _customPanel["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager, CustomPanels) {
  var customPanels = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'panels']) || [];

  var getCustomPanelProps = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'getProps']) || function () {
    return {};
  };

  var SidePanel = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    var _super = _createSuper(SidePanel);

    function SidePanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'predefined-filters');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);

        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportImage", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveToStorage", function () {
        return _this.props.uiStateActions.toggleModal(_this.props.mapSaved ? _defaultSettings.OVERWRITE_MAP_ID : _defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveAsToStorage", function () {
        // add (copy) to file name
        _this.props.visStateActions.setMapInfo({
          title: "".concat(_this.props.mapInfo.title || 'Kepler.gl', " (Copy)")
        });

        _this.props.uiStateActions.toggleModal(_defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickShareMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.SHARE_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      // eslint-disable-next-line complexity
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            availableProviders = _this$props.availableProviders;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var panels = [].concat((0, _toConsumableArray2["default"])(this.props.panels), (0, _toConsumableArray2["default"])(customPanels));
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerColorUIChange: visStateActions.layerColorUIChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset,
          openModal: uiStateActions.toggleModal
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleFilterAnimation,
          enlargeFilter: visStateActions.enlargeFilter,
          toggleFilterFeature: visStateActions.toggleFilterFeature
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          set3dBuildingColor: mapStyleActions.set3dBuildingColor,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, /*#__PURE__*/_react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "side-panel__content__inner"
        }, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: (panels.find(function (_ref) {
            var id = _ref.id;
            return id === activeSidePanel;
          }) || {}).label
        })), activeSidePanel === 'layer' && /*#__PURE__*/_react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          colorPalette: uiState.colorPalette
        })), activeSidePanel === 'filter' && /*#__PURE__*/_react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          layers: layers,
          filters: filters
        })), activeSidePanel === 'interaction' && /*#__PURE__*/_react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), (customPanels || []).find(function (p) {
          return p.id === activeSidePanel;
        }) ? /*#__PURE__*/_react["default"].createElement(CustomPanels, (0, _extends2["default"])({}, getCustomPanelProps(this.props), filterManagerActions, layerManagerActions, {
          layers: layers,
          datasets: datasets,
          activeSidePanel: activeSidePanel
        })) : null))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(SidePanel, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    availableProviders: _propTypes["default"].object,
    mapSaved: _propTypes["default"].string,
    panels: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  (0, _defineProperty2["default"])(SidePanel, "defaultProps", {
    panels: _defaultSettings.SIDEBAR_PANELS,
    uiState: {},
    visStateActions: {},
    mapStyleActions: {},
    uiStateActions: {},
    availableProviders: {}
  });
  return SidePanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwic2lkZVBhbmVsVGl0bGVGb250c2l6ZSIsInNpZGVQYW5lbFRpdGxlTGluZUhlaWdodCIsIlNpZGVQYW5lbEZhY3RvcnkiLCJkZXBzIiwiU2lkZWJhckZhY3RvcnkiLCJQYW5lbEhlYWRlckZhY3RvcnkiLCJQYW5lbFRvZ2dsZUZhY3RvcnkiLCJMYXllck1hbmFnZXJGYWN0b3J5IiwiRmlsdGVyTWFuYWdlckZhY3RvcnkiLCJJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IiwiTWFwTWFuYWdlckZhY3RvcnkiLCJDdXN0b21QYW5lbHNGYWN0b3J5IiwiU2lkZWJhciIsIlBhbmVsSGVhZGVyIiwiUGFuZWxUb2dnbGUiLCJQYW5lbFRpdGxlIiwiTGF5ZXJNYW5hZ2VyIiwiRmlsdGVyTWFuYWdlciIsIkludGVyYWN0aW9uTWFuYWdlciIsIk1hcE1hbmFnZXIiLCJDdXN0b21QYW5lbHMiLCJjdXN0b21QYW5lbHMiLCJnZXRDdXN0b21QYW5lbFByb3BzIiwiU2lkZVBhbmVsIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVTaWRlUGFuZWwiLCJ1aVN0YXRlIiwiYWN0aXZlU2lkZVBhbmVsIiwiZGF0YUlkIiwidmlzU3RhdGVBY3Rpb25zIiwic2hvd0RhdGFzZXRUYWJsZSIsInRvZ2dsZU1vZGFsIiwiREFUQV9UQUJMRV9JRCIsIkFERF9EQVRBX0lEIiwiQUREX01BUF9TVFlMRV9JRCIsImtleSIsIm9wZW5EZWxldGVNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsIkVYUE9SVF9EQVRBX0lEIiwiRVhQT1JUX01BUF9JRCIsIm1hcFNhdmVkIiwiT1ZFUldSSVRFX01BUF9JRCIsIlNBVkVfTUFQX0lEIiwic2V0TWFwSW5mbyIsInRpdGxlIiwibWFwSW5mbyIsIlNIQVJFX01BUF9JRCIsImFwcE5hbWUiLCJhcHBXZWJzaXRlIiwidmVyc2lvbiIsImRhdGFzZXRzIiwiZmlsdGVycyIsImxheWVycyIsImxheWVyQmxlbmRpbmciLCJsYXllckNsYXNzZXMiLCJsYXllck9yZGVyIiwiaW50ZXJhY3Rpb25Db25maWciLCJtYXBTdHlsZUFjdGlvbnMiLCJhdmFpbGFibGVQcm92aWRlcnMiLCJpc09wZW4iLCJCb29sZWFuIiwicGFuZWxzIiwibGF5ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZExheWVyIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsInVwZGF0ZUxheWVyT3JkZXIiLCJyZW9yZGVyTGF5ZXIiLCJfc2hvd0RhdGFzZXRUYWJsZSIsInNob3dBZGREYXRhTW9kYWwiLCJfc2hvd0FkZERhdGFNb2RhbCIsInJlbW92ZUxheWVyIiwicmVtb3ZlRGF0YXNldCIsIl9yZW1vdmVEYXRhc2V0Iiwib3Blbk1vZGFsIiwiZmlsdGVyTWFuYWdlckFjdGlvbnMiLCJhZGRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJlbmxhcmdlRmlsdGVyIiwidG9nZ2xlRmlsdGVyRmVhdHVyZSIsImludGVyYWN0aW9uTWFuYWdlckFjdGlvbnMiLCJvbkNvbmZpZ0NoYW5nZSIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlIiwibWFwTWFuYWdlckFjdGlvbnMiLCJhZGRNYXBTdHlsZVVybCIsIm1hcENvbmZpZ0NoYW5nZSIsIm9uU3R5bGVDaGFuZ2UiLCJtYXBTdHlsZUNoYW5nZSIsIm9uQnVpbGRpbmdDaGFuZ2UiLCJtYXBCdWlsZGluZ0NoYW5nZSIsInNldDNkQnVpbGRpbmdDb2xvciIsInNob3dBZGRNYXBTdHlsZU1vZGFsIiwiX3Nob3dBZGRNYXBTdHlsZU1vZGFsIiwid2lkdGgiLCJfb25PcGVuT3JDbG9zZSIsImZpbmQiLCJpZCIsImxhYmVsIiwiY29sb3JQYWxldHRlIiwicCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIm1hcFN0eWxlIiwibnVtYmVyIiwiU0lERUJBUl9QQU5FTFMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsR0FBVixvQkFDbEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxrQkFBaEI7QUFBQSxDQURhLEVBR1QsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxxQkFBaEI7QUFBQSxDQUhJLENBQXRCOztBQWNPLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNTiw2QkFBT0MsR0FBYixxQkFDdEIsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxjQUFoQjtBQUFBLEdBRGlCLEVBRWxCLFVBQUFMLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssc0JBQWhCO0FBQUEsR0FGYSxFQUdoQixVQUFBTixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLHdCQUFoQjtBQUFBLEdBSFc7QUFBQSxDQUExQjs7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QSxZQUFZLEVBQUV1RCxzQkFBVUksTUFBVixDQUFpQkQsVUFMZDtBQU1qQkcsSUFBQUEsUUFBUSxFQUFFTixzQkFBVUksTUFBVixDQUFpQkQsVUFOVjtBQU9qQlgsSUFBQUEsS0FBSyxFQUFFUSxzQkFBVU8sTUFBVixDQUFpQkosVUFQUDtBQVFqQjlELElBQUFBLFFBQVEsRUFBRTJELHNCQUFVSSxNQUFWLENBQWlCRCxVQVJWO0FBU2pCbkYsSUFBQUEsZUFBZSxFQUFFZ0Ysc0JBQVVJLE1BQVYsQ0FBaUJELFVBVGpCO0FBVWpCdkQsSUFBQUEsZUFBZSxFQUFFb0Qsc0JBQVVJLE1BQVYsQ0FBaUJELFVBVmpCO0FBV2pCdEQsSUFBQUEsa0JBQWtCLEVBQUVtRCxzQkFBVUksTUFYYjtBQVlqQnpFLElBQUFBLFFBQVEsRUFBRXFFLHNCQUFVSyxNQVpIO0FBYWpCckQsSUFBQUEsTUFBTSxFQUFFZ0Qsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVSSxNQUE1QjtBQWJTLEdBTHJCO0FBQUEsbUNBSU0xRixTQUpOLGtCQXFCd0I7QUFDcEJzQyxJQUFBQSxNQUFNLEVBQUV3RCwrQkFEWTtBQUVwQjNGLElBQUFBLE9BQU8sRUFBRSxFQUZXO0FBR3BCRyxJQUFBQSxlQUFlLEVBQUUsRUFIRztBQUlwQjRCLElBQUFBLGVBQWUsRUFBRSxFQUpHO0FBS3BCakMsSUFBQUEsY0FBYyxFQUFFLEVBTEk7QUFNcEJrQyxJQUFBQSxrQkFBa0IsRUFBRTtBQU5BLEdBckJ4QjtBQW1PQSxTQUFPbkMsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcblxuaW1wb3J0IFNpZGViYXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLWJhcic7XG5pbXBvcnQgUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXInO1xuaW1wb3J0IExheWVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2xheWVyLW1hbmFnZXInO1xuaW1wb3J0IEZpbHRlck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9maWx0ZXItbWFuYWdlcic7XG5pbXBvcnQgSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tbWFuYWdlcic7XG5pbXBvcnQgTWFwTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL21hcC1tYW5hZ2VyJztcbmltcG9ydCBQYW5lbFRvZ2dsZUZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLXRvZ2dsZSc7XG5pbXBvcnQgQ3VzdG9tUGFuZWxzRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvY3VzdG9tLXBhbmVsJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9EQVRBX0lELFxuICBFWFBPUlRfTUFQX0lELFxuICBTSEFSRV9NQVBfSUQsXG4gIFNJREVCQVJfUEFORUxTLFxuICBPVkVSV1JJVEVfTUFQX0lELFxuICBTQVZFX01BUF9JRCxcbiAgRVhQT1JUX0lNQUdFX0lEXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU2lkZVBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbElubmVyUGFkZGluZ31weDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgLnNpZGUtcGFuZWxfX2NvbnRlbnRfX2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxUaXRsZUZvbnRzaXplfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsVGl0bGVMaW5lSGVpZ2h0fTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cblNpZGVQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgU2lkZWJhckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgUGFuZWxUb2dnbGVGYWN0b3J5LFxuICBQYW5lbFRpdGxlRmFjdG9yeSxcbiAgTGF5ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgRmlsdGVyTWFuYWdlckZhY3RvcnksXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXG4gIE1hcE1hbmFnZXJGYWN0b3J5LFxuICBDdXN0b21QYW5lbHNGYWN0b3J5XG5dO1xuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBzaWRlYmFyIGNvbnRhaW5pbmcgaW5wdXQgY29tcG9uZW50cyBmb3IgdGhlIHJlbmRlcmluZyBsYXllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcbiAgU2lkZWJhcixcbiAgUGFuZWxIZWFkZXIsXG4gIFBhbmVsVG9nZ2xlLFxuICBQYW5lbFRpdGxlLFxuICBMYXllck1hbmFnZXIsXG4gIEZpbHRlck1hbmFnZXIsXG4gIEludGVyYWN0aW9uTWFuYWdlcixcbiAgTWFwTWFuYWdlcixcbiAgQ3VzdG9tUGFuZWxzXG4pIHtcbiAgY29uc3QgY3VzdG9tUGFuZWxzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAncGFuZWxzJ10pIHx8IFtdO1xuICBjb25zdCBnZXRDdXN0b21QYW5lbFByb3BzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAnZ2V0UHJvcHMnXSkgfHwgKCgpID0+ICh7fSkpO1xuXG4gIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGF2YWlsYWJsZVByb3ZpZGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG1hcFNhdmVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgcGFuZWxzOiBTSURFQkFSX1BBTkVMUyxcbiAgICAgIHVpU3RhdGU6IHt9LFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiB7fSxcbiAgICAgIG1hcFN0eWxlQWN0aW9uczoge30sXG4gICAgICB1aVN0YXRlQWN0aW9uczoge30sXG4gICAgICBhdmFpbGFibGVQcm92aWRlcnM6IHt9XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWwoXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5hY3RpdmVTaWRlUGFuZWwgPyBudWxsIDogJ3ByZWRlZmluZWQtZmlsdGVycydcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF9zaG93RGF0YXNldFRhYmxlID0gZGF0YUlkID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBvcGVuIGRhdGEgdGFibGUgbW9kYWxcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNob3dEYXRhc2V0VGFibGUoZGF0YUlkKTtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoREFUQV9UQUJMRV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkRGF0YU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChBRERfREFUQV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkTWFwU3R5bGVNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX01BUF9TVFlMRV9JRCk7XG4gICAgfTtcblxuICAgIF9yZW1vdmVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBzaG93IHRoZSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGlvblxuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5vcGVuRGVsZXRlTW9kYWwoa2V5KTtcbiAgICB9O1xuXG4gICAgX29uQ2xpY2tFeHBvcnRJbWFnZSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0lNQUdFX0lEKTtcblxuICAgIF9vbkNsaWNrRXhwb3J0RGF0YSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0RBVEFfSUQpO1xuXG4gICAgX29uQ2xpY2tFeHBvcnRNYXAgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9NQVBfSUQpO1xuXG4gICAgX29uQ2xpY2tTYXZlVG9TdG9yYWdlID0gKCkgPT5cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwodGhpcy5wcm9wcy5tYXBTYXZlZCA/IE9WRVJXUklURV9NQVBfSUQgOiBTQVZFX01BUF9JRCk7XG5cbiAgICBfb25DbGlja1NhdmVBc1RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIC8vIGFkZCAoY29weSkgdG8gZmlsZSBuYW1lXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvKHtcbiAgICAgICAgdGl0bGU6IGAke3RoaXMucHJvcHMubWFwSW5mby50aXRsZSB8fCAnS2VwbGVyLmdsJ30gKENvcHkpYFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoU0FWRV9NQVBfSUQpO1xuICAgIH07XG5cbiAgICBfb25DbGlja1NoYXJlTWFwID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChTSEFSRV9NQVBfSUQpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIGFwcFdlYnNpdGUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbH0gPSB1aVN0YXRlO1xuICAgICAgY29uc3QgaXNPcGVuID0gQm9vbGVhbihhY3RpdmVTaWRlUGFuZWwpO1xuICAgICAgY29uc3QgcGFuZWxzID0gWy4uLnRoaXMucHJvcHMucGFuZWxzLCAuLi5jdXN0b21QYW5lbHNdO1xuXG4gICAgICBjb25zdCBsYXllck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRMYXllcjogdmlzU3RhdGVBY3Rpb25zLmFkZExheWVyLFxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbG9yVUlDaGFuZ2UsXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUZXh0TGFiZWxDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUeXBlQ2hhbmdlLFxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiB2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZyxcbiAgICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogdmlzU3RhdGVBY3Rpb25zLnJlb3JkZXJMYXllcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVMYXllcixcbiAgICAgICAgcmVtb3ZlRGF0YXNldDogdGhpcy5fcmVtb3ZlRGF0YXNldCxcbiAgICAgICAgb3Blbk1vZGFsOiB1aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmFkZEZpbHRlcixcbiAgICAgICAgcmVtb3ZlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRmlsdGVyLFxuICAgICAgICBzZXRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvbjogdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUZpbHRlckFuaW1hdGlvbixcbiAgICAgICAgZW5sYXJnZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXIsXG4gICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU6IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVGaWx0ZXJGZWF0dXJlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTWFwU3R5bGVVcmw6IG1hcFN0eWxlQWN0aW9ucy5hZGRNYXBTdHlsZVVybCxcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBDb25maWdDaGFuZ2UsXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcbiAgICAgICAgb25CdWlsZGluZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcEJ1aWxkaW5nQ2hhbmdlLFxuICAgICAgICBzZXQzZEJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlQWN0aW9ucy5zZXQzZEJ1aWxkaW5nQ29sb3IsXG4gICAgICAgIHNob3dBZGRNYXBTdHlsZU1vZGFsOiB0aGlzLl9zaG93QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgIG1pbmlmaWVkV2lkdGg9ezB9XG4gICAgICAgICAgICBvbk9wZW5PckNsb3NlPXt0aGlzLl9vbk9wZW5PckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8UGFuZWxIZWFkZXJcbiAgICAgICAgICAgICAgYXBwTmFtZT17YXBwTmFtZX1cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgYXBwV2Vic2l0ZT17YXBwV2Vic2l0ZX1cbiAgICAgICAgICAgICAgdmlzaWJsZURyb3Bkb3duPXt1aVN0YXRlLnZpc2libGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5zaG93RXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIGhpZGVFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuaGlkZUV4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICBvbkV4cG9ydEltYWdlPXt0aGlzLl9vbkNsaWNrRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17dGhpcy5fb25DbGlja0V4cG9ydERhdGF9XG4gICAgICAgICAgICAgIG9uRXhwb3J0TWFwPXt0aGlzLl9vbkNsaWNrRXhwb3J0TWFwfVxuICAgICAgICAgICAgICBvblNhdmVNYXA9e3RoaXMucHJvcHMub25TYXZlTWFwfVxuICAgICAgICAgICAgICBvblNhdmVUb1N0b3JhZ2U9e2F2YWlsYWJsZVByb3ZpZGVycy5oYXNTdG9yYWdlID8gdGhpcy5fb25DbGlja1NhdmVUb1N0b3JhZ2UgOiBudWxsfVxuICAgICAgICAgICAgICBvblNhdmVBc1RvU3RvcmFnZT17XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlUHJvdmlkZXJzLmhhc1N0b3JhZ2UgJiYgdGhpcy5wcm9wcy5tYXBTYXZlZFxuICAgICAgICAgICAgICAgICAgPyB0aGlzLl9vbkNsaWNrU2F2ZUFzVG9TdG9yYWdlXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvblNoYXJlTWFwPXthdmFpbGFibGVQcm92aWRlcnMuaGFzU2hhcmUgPyB0aGlzLl9vbkNsaWNrU2hhcmVNYXAgOiBudWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lbFRvZ2dsZVxuICAgICAgICAgICAgICBwYW5lbHM9e3BhbmVsc31cbiAgICAgICAgICAgICAgYWN0aXZlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cbiAgICAgICAgICAgICAgdG9nZ2xlUGFuZWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbH1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFNpZGVQYW5lbENvbnRlbnQgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPFBhbmVsVGl0bGUgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPXsocGFuZWxzLmZpbmQoKHtpZH0pID0+IGlkID09PSBhY3RpdmVTaWRlUGFuZWwpIHx8IHt9KS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9QYW5lbFRpdGxlPlxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdsYXllcicgJiYgKFxuICAgICAgICAgICAgICAgICAgPExheWVyTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJDbGFzc2VzPXtsYXllckNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3JkZXI9e2xheWVyT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e2xheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yUGFsZXR0ZT17dWlTdGF0ZS5jb2xvclBhbGV0dGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2ZpbHRlcicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEZpbHRlck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpbHRlck1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdpbnRlcmFjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aW9uTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZz17aW50ZXJhY3Rpb25Db25maWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgey8qIHthY3RpdmVTaWRlUGFuZWwgPT09ICdtYXAnICYmIChcbiAgICAgICAgICAgICAgICAgIDxNYXBNYW5hZ2VyIHsuLi5tYXBNYW5hZ2VyQWN0aW9uc30gbWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgeyhjdXN0b21QYW5lbHMgfHwgW10pLmZpbmQocCA9PiBwLmlkID09PSBhY3RpdmVTaWRlUGFuZWwpID8gKFxuICAgICAgICAgICAgICAgICAgPEN1c3RvbVBhbmVsc1xuICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0Q3VzdG9tUGFuZWxQcm9wcyh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmZpbHRlck1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2lkZVBhbmVsPXthY3RpdmVTaWRlUGFuZWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2lkZVBhbmVsQ29udGVudD5cbiAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gU2lkZVBhbmVsO1xufVxuIl19