"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _window = require("global/window");

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("../connect/keplergl-connect");

var _reactIntl = require("react-intl");

var _localization = require("../localization");

var _context = require("./context");

var VisStateActions = _interopRequireWildcard(require("../actions/vis-state-actions"));

var MapStateActions = _interopRequireWildcard(require("../actions/map-state-actions"));

var MapStyleActions = _interopRequireWildcard(require("../actions/map-style-actions"));

var UIStateActions = _interopRequireWildcard(require("../actions/ui-state-actions"));

var ProviderActions = _interopRequireWildcard(require("../actions/provider-actions"));

var _defaultSettings = require("../constants/default-settings");

var _userFeedbacks = require("../constants/user-feedbacks");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _geocoderPanel = _interopRequireDefault(require("./geocoder-panel"));

var _utils = require("../utils/utils");

var _mapboxUtils = require("../utils/mapbox-utils");

var _localeUtils = require("../utils/locale-utils");

var _base = require("../styles/base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  .mapboxgl-ctrl .mapboxgl-ctrl-logo {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget["default"], _geocoderPanel["default"], _mapContainer["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"]];

function KeplerGlFactory(BottomWidget, GeoCoderPanel, MapContainer, ModalContainer, SidePanel, PlotContainer, NotificationPanel) {
  /** @typedef {import('./kepler-gl').KeplerGlProps} KeplerGlProps */

  /** @augments React.Component<KeplerGlProps> */
  var KeplerGL = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    var _super = _createSuper(KeplerGL);

    function KeplerGL() {
      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? _objectSpread(_objectSpread({}, _base.theme), theme) : theme === _defaultSettings.THEME.light ? _base.themeLT : theme === _defaultSettings.THEME.base ? _base.themeBS : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableProviders", (0, _reselect.createSelector)(function (props) {
        return props.cloudProviders;
      }, function (providers) {
        return Array.isArray(providers) && providers.length ? {
          hasStorage: providers.some(function (p) {
            return p.hasPrivateStorage();
          }),
          hasShare: providers.some(function (p) {
            return p.hasSharingUrl();
          })
        } : {};
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "localeMessagesSelector", (0, _reselect.createSelector)(function (props) {
        return props.localeMessages;
      }, function (customMessages) {
        return customMessages ? (0, _localeUtils.mergeMessages)(_localization.messages, customMessages) : _localization.messages;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return _objectSpread(_objectSpread({}, ms), {}, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          var hasStyleObject = style.style && (0, _typeof2["default"])(style.style) === 'object';
          accu[hasStyleObject ? 'toLoad' : 'toRequest'][style.id] = style;
          return accu;
        }, {
          toLoad: {},
          toRequest: {}
        });

        _this.props.mapStyleActions.loadMapStyles(allStyles.toLoad);

        _this.props.mapStyleActions.requestMapStyles(allStyles.toRequest);
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._validateMapboxToken();

        this._loadMapStyle(this.props.mapStyles);

        this._handleResize(this.props);

        if (typeof this.props.onKeplerGlInitialized === 'function') {
          this.props.onKeplerGlInitialized();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if ( // if dimension props has changed
        this.props.height !== prevProps.height || this.props.width !== prevProps.width || // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        this.props.height !== this.props.mapState.height) {
          this._handleResize(this.props);
        }
      }
    }, {
      key: "_validateMapboxToken",

      /* private methods */
      value: function _validateMapboxToken() {
        var mapboxApiAccessToken = this.props.mapboxApiAccessToken;

        if (!(0, _mapboxUtils.validateToken)(mapboxApiAccessToken)) {
          _window.console.warn(_userFeedbacks.MISSING_MAPBOX_TOKEN);
        }
      }
    }, {
      key: "_handleResize",
      value: function _handleResize(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');

          return;
        }

        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            appName = _this$props.appName,
            version = _this$props.version,
            appWebsite = _this$props.appWebsite,
            onSaveMap = _this$props.onSaveMap,
            onViewStateChange = _this$props.onViewStateChange,
            onDeckInitialized = _this$props.onDeckInitialized,
            width = _this$props.width,
            height = _this$props.height,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            getMapboxRef = _this$props.getMapboxRef,
            deckGlProps = _this$props.deckGlProps,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            providerState = _this$props.providerState,
            visStateActions = _this$props.visStateActions,
            mapStateActions = _this$props.mapStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            providerActions = _this$props.providerActions,
            readOnly = _this$props.readOnly;
        var availableProviders = this.availableProviders(this.props);
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked,
            mousePos = visState.mousePos,
            animationConfig = visState.animationConfig,
            mapInfo = visState.mapInfo;
        var notificationPanelFields = {
          removeNotification: uiStateActions.removeNotification,
          notifications: uiState.notifications
        };
        var sideFields = {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          mapInfo: mapInfo,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: this.props.sidePanelWidth,
          availableProviders: availableProviders,
          mapSaved: providerState.mapSaved
        };
        var mapFields = {
          datasets: datasets,
          getMapboxRef: getMapboxRef,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapState: mapState,
          uiState: uiState,
          editor: visState.editor,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          filters: filters,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          mousePos: mousePos,
          readOnly: uiState.readOnly,
          onDeckInitialized: onDeckInitialized,
          onViewStateChange: onViewStateChange,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions,
          animationConfig: animationConfig,
          deckGlProps: deckGlProps
        };
        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);
        var mapContainers = !isSplit ? [/*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: null
        }))] : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });
        var isExportingImage = uiState.exportImage.exporting;
        var theme = this.availableThemeSelector(this.props);
        var localeMessages = this.localeMessagesSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Provider, {
          value: this.root
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
          locale: uiState.locale,
          messages: localeMessages[uiState.locale]
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/_react["default"].createElement(GlobalStyle, {
          width: width,
          height: height,
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          ref: this.root
        }, /*#__PURE__*/_react["default"].createElement(NotificationPanel, notificationPanelFields), !uiState.readOnly && !readOnly && /*#__PURE__*/_react["default"].createElement(SidePanel, sideFields), /*#__PURE__*/_react["default"].createElement("div", {
          className: "maps",
          style: {
            display: 'flex'
          }
        }, mapContainers), isExportingImage && /*#__PURE__*/_react["default"].createElement(PlotContainer, {
          width: width,
          height: height,
          exportImageSetting: uiState.exportImage,
          mapFields: mapFields,
          addNotification: uiStateActions.addNotification,
          setExportImageSetting: uiStateActions.setExportImageSetting,
          setExportImageDataUri: uiStateActions.setExportImageDataUri,
          setExportImageError: uiStateActions.setExportImageError,
          splitMaps: splitMaps
        }), interactionConfig.geocoder.enabled && /*#__PURE__*/_react["default"].createElement(GeoCoderPanel, {
          isGeocoderEnabled: interactionConfig.geocoder.enabled,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          updateVisData: visStateActions.updateVisData,
          removeDataset: visStateActions.removeDataset,
          updateMap: mapStateActions.updateMap
        }), /*#__PURE__*/_react["default"].createElement(BottomWidget, {
          filters: filters,
          datasets: datasets,
          uiState: uiState,
          layers: layers,
          animationConfig: animationConfig,
          visStateActions: visStateActions,
          sidePanelWidth: uiState.readOnly ? 0 : this.props.sidePanelWidth + theme.sidePanel.margin.left,
          containerW: containerW
        }), /*#__PURE__*/_react["default"].createElement(ModalContainer, {
          mapStyle: mapStyle,
          visState: visState,
          mapState: mapState,
          uiState: uiState,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          mapStyleActions: mapStyleActions,
          providerActions: providerActions,
          rootNode: this.root.current,
          containerW: containerW,
          containerH: mapState.height,
          providerState: this.props.providerState // User defined cloud provider props
          ,
          cloudProviders: this.props.cloudProviders,
          onExportToCloudSuccess: this.props.onExportToCloudSuccess,
          onLoadCloudMapSuccess: this.props.onLoadCloudMapSuccess,
          onLoadCloudMapError: this.props.onLoadCloudMapError,
          onExportToCloudError: this.props.onExportToCloudError
        })))));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", {
    mapStyles: [],
    mapStylesReplaceDefault: false,
    mapboxApiUrl: _defaultSettings.DEFAULT_MAPBOX_API_URL,
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width,
    theme: {},
    cloudProviders: [],
    readOnly: false
  });
  (0, _defineProperty2["default"])(KeplerGL, "contextType", _context.RootContext);
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = arguments.length > 1 ? arguments[1] : undefined;
  return _objectSpread(_objectSpread({}, props), {}, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState,
    providerState: state.providerState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};

function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions, ProviderActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 5),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3],
        providerActions = _map2[4];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      providerActions: providerActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return _objectSpread(_objectSpread({}, groupedActionCreators), {}, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return _objectSpread(_objectSpread({}, actions), overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIkdlb0NvZGVyUGFuZWxGYWN0b3J5IiwiTWFwQ29udGFpbmVyRmFjdG9yeSIsIk1vZGFsQ29udGFpbmVyRmFjdG9yeSIsIlNpZGVQYW5lbEZhY3RvcnkiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsIk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSIsIkJvdHRvbVdpZGdldCIsIkdlb0NvZGVyUGFuZWwiLCJNYXBDb250YWluZXIiLCJNb2RhbENvbnRhaW5lciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJOb3RpZmljYXRpb25QYW5lbCIsIktlcGxlckdMIiwidGhlbWVTZWxlY3RvciIsImJhc2ljVGhlbWUiLCJUSEVNRSIsImxpZ2h0IiwidGhlbWVMVCIsImJhc2UiLCJ0aGVtZUJTIiwiY2xvdWRQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJoYXNTdG9yYWdlIiwic29tZSIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJlIiwiaGFzU2hhcmluZ1VybCIsImxvY2FsZU1lc3NhZ2VzIiwiY3VzdG9tTWVzc2FnZXMiLCJtZXNzYWdlcyIsImRlZmF1bHRTdHlsZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXBTdHlsZSIsIm1hcFN0eWxlcyIsImN1c3RvbVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJhbGxTdHlsZXMiLCJyZWR1Y2UiLCJhY2N1Iiwic3R5bGUiLCJoYXNTdHlsZU9iamVjdCIsInRvTG9hZCIsInRvUmVxdWVzdCIsIm1hcFN0eWxlQWN0aW9ucyIsImxvYWRNYXBTdHlsZXMiLCJyZXF1ZXN0TWFwU3R5bGVzIiwiX3ZhbGlkYXRlTWFwYm94VG9rZW4iLCJfbG9hZE1hcFN0eWxlIiwiX2hhbmRsZVJlc2l6ZSIsIm9uS2VwbGVyR2xJbml0aWFsaXplZCIsInByZXZQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIkNvbnNvbGUiLCJ3YXJuIiwiTUlTU0lOR19NQVBCT1hfVE9LRU4iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcFN0YXRlQWN0aW9ucyIsInVwZGF0ZU1hcCIsImlzU3BsaXQiLCJhcHBOYW1lIiwidmVyc2lvbiIsImFwcFdlYnNpdGUiLCJvblNhdmVNYXAiLCJvblZpZXdTdGF0ZUNoYW5nZSIsIm9uRGVja0luaXRpYWxpemVkIiwibWFwYm94QXBpVXJsIiwiZ2V0TWFwYm94UmVmIiwiZGVja0dsUHJvcHMiLCJ1aVN0YXRlIiwidmlzU3RhdGUiLCJwcm92aWRlclN0YXRlIiwidmlzU3RhdGVBY3Rpb25zIiwidWlTdGF0ZUFjdGlvbnMiLCJwcm92aWRlckFjdGlvbnMiLCJyZWFkT25seSIsImF2YWlsYWJsZVByb3ZpZGVycyIsImZpbHRlcnMiLCJsYXllcnMiLCJzcGxpdE1hcHMiLCJsYXllck9yZGVyIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJsYXllckRhdGEiLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJhbmltYXRpb25Db25maWciLCJtYXBJbmZvIiwibm90aWZpY2F0aW9uUGFuZWxGaWVsZHMiLCJyZW1vdmVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwic2lkZUZpZWxkcyIsInNpZGVQYW5lbFdpZHRoIiwibWFwU2F2ZWQiLCJtYXBGaWVsZHMiLCJlZGl0b3IiLCJtYXBDb250cm9scyIsImNvbnRhaW5lclciLCJtYXBDb250YWluZXJzIiwic2V0dGluZ3MiLCJpbmRleCIsImlzRXhwb3J0aW5nSW1hZ2UiLCJleHBvcnRJbWFnZSIsImV4cG9ydGluZyIsImF2YWlsYWJsZVRoZW1lU2VsZWN0b3IiLCJsb2NhbGVNZXNzYWdlc1NlbGVjdG9yIiwicm9vdCIsImxvY2FsZSIsImRpc3BsYXkiLCJhZGROb3RpZmljYXRpb24iLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yIiwiZ2VvY29kZXIiLCJlbmFibGVkIiwidXBkYXRlVmlzRGF0YSIsInJlbW92ZURhdGFzZXQiLCJzaWRlUGFuZWwiLCJtYXJnaW4iLCJsZWZ0IiwiY3VycmVudCIsIm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcEVycm9yIiwib25FeHBvcnRUb0Nsb3VkRXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCIsIkRFRkFVTFRfTUFQQk9YX0FQSV9VUkwiLCJLRVBMRVJfR0xfTkFNRSIsIktFUExFUl9HTF9WRVJTSU9OIiwiRElNRU5TSU9OUyIsIlJvb3RDb250ZXh0IiwibWFwU3RhdGVUb1Byb3BzIiwibWFrZU1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlIiwiZGVmYXVsdFVzZXJBY3Rpb25zIiwiZ2V0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImdldFVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1ha2VHZXRBY3Rpb25DcmVhdG9ycyIsInVzZXJBY3Rpb25zIiwiVmlzU3RhdGVBY3Rpb25zIiwiTWFwU3RhdGVBY3Rpb25zIiwiTWFwU3R5bGVBY3Rpb25zIiwiVUlTdGF0ZUFjdGlvbnMiLCJQcm92aWRlckFjdGlvbnMiLCJtZXJnZUFjdGlvbnMiLCJnZXRBY3Rpb25DcmVhdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm93blByb3BzIiwiZ3JvdXBlZEFjdGlvbkNyZWF0b3JzIiwib3ZlcnJpZGVzIiwia2V5IiwiaGFzT3duUHJvcGVydHki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QVgsQ0FBL0M7QUFFQSwyQ0FDS0MscUJBREw7QUFFRWQsTUFBQUEsUUFBUSxFQUFSQTtBQUZGO0FBSUQsR0FQRDs7QUFTQSxTQUFPWSxrQkFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRixZQUFULENBQXNCUixPQUF0QixFQUErQkUsV0FBL0IsRUFBNEM7QUFDMUMsTUFBTVcsU0FBUyxHQUFHLEVBQWxCOztBQUNBLE9BQUssSUFBTUMsR0FBWCxJQUFrQlosV0FBbEIsRUFBK0I7QUFDN0IsUUFBSUEsV0FBVyxDQUFDYSxjQUFaLENBQTJCRCxHQUEzQixLQUFtQ2QsT0FBTyxDQUFDZSxjQUFSLENBQXVCRCxHQUF2QixDQUF2QyxFQUFvRTtBQUNsRUQsTUFBQUEsU0FBUyxDQUFDQyxHQUFELENBQVQsR0FBaUJaLFdBQVcsQ0FBQ1ksR0FBRCxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQseUNBQVdkLE9BQVgsR0FBdUJhLFNBQXZCO0FBQ0Q7O2VBRWN6SyxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlciwgd2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge2Nvbm5lY3QgYXMga2VwbGVyR2xDb25uZWN0fSBmcm9tICdjb25uZWN0L2tlcGxlcmdsLWNvbm5lY3QnO1xuaW1wb3J0IHtJbnRsUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi4vbG9jYWxpemF0aW9uJztcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dCc7XG5cbmltcG9ydCAqIGFzIFZpc1N0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVJU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBQcm92aWRlckFjdGlvbnMgZnJvbSAnYWN0aW9ucy9wcm92aWRlci1hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgRElNRU5TSU9OUyxcbiAgS0VQTEVSX0dMX05BTUUsXG4gIEtFUExFUl9HTF9WRVJTSU9OLFxuICBUSEVNRSxcbiAgREVGQVVMVF9NQVBCT1hfQVBJX1VSTFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge01JU1NJTkdfTUFQQk9YX1RPS0VOfSBmcm9tICdjb25zdGFudHMvdXNlci1mZWVkYmFja3MnO1xuXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQbG90Q29udGFpbmVyRmFjdG9yeSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcbmltcG9ydCBOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwnO1xuaW1wb3J0IEdlb0NvZGVyUGFuZWxGYWN0b3J5IGZyb20gJy4vZ2VvY29kZXItcGFuZWwnO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge3ZhbGlkYXRlVG9rZW59IGZyb20gJ3V0aWxzL21hcGJveC11dGlscyc7XG5pbXBvcnQge21lcmdlTWVzc2FnZXN9IGZyb20gJ3V0aWxzL2xvY2FsZS11dGlscyc7XG5cbmltcG9ydCB7dGhlbWUgYXMgYmFzaWNUaGVtZSwgdGhlbWVMVCwgdGhlbWVCU30gZnJvbSAnc3R5bGVzL2Jhc2UnO1xuXG4vLyBNYXliZSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgZXhwb3J0aW5nIHRoaXMgb3IgY3JlYXRpbmcgYSB2YXJpYWJsZVxuLy8gYXMgcGFydCBvZiB0aGUgYmFzZS5qcyB0aGVtZVxuY29uc3QgR2xvYmFsU3R5bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHR9O1xuXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICB9XG5cbiAgLm1hcGJveGdsLWN0cmwgLm1hcGJveGdsLWN0cmwtbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIEdlb0NvZGVyUGFuZWxGYWN0b3J5LFxuICBNYXBDb250YWluZXJGYWN0b3J5LFxuICBNb2RhbENvbnRhaW5lckZhY3RvcnksXG4gIFNpZGVQYW5lbEZhY3RvcnksXG4gIFBsb3RDb250YWluZXJGYWN0b3J5LFxuICBOb3RpZmljYXRpb25QYW5lbEZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIEtlcGxlckdsRmFjdG9yeShcbiAgQm90dG9tV2lkZ2V0LFxuICBHZW9Db2RlclBhbmVsLFxuICBNYXBDb250YWluZXIsXG4gIE1vZGFsQ29udGFpbmVyLFxuICBTaWRlUGFuZWwsXG4gIFBsb3RDb250YWluZXIsXG4gIE5vdGlmaWNhdGlvblBhbmVsXG4pIHtcbiAgLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4va2VwbGVyLWdsJykuS2VwbGVyR2xQcm9wc30gS2VwbGVyR2xQcm9wcyAqL1xuICAvKiogQGF1Z21lbnRzIFJlYWN0LkNvbXBvbmVudDxLZXBsZXJHbFByb3BzPiAqL1xuICBjbGFzcyBLZXBsZXJHTCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIG1hcFN0eWxlczogW10sXG4gICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdDogZmFsc2UsXG4gICAgICBtYXBib3hBcGlVcmw6IERFRkFVTFRfTUFQQk9YX0FQSV9VUkwsXG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICBhcHBOYW1lOiBLRVBMRVJfR0xfTkFNRSxcbiAgICAgIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxuICAgICAgc2lkZVBhbmVsV2lkdGg6IERJTUVOU0lPTlMuc2lkZVBhbmVsLndpZHRoLFxuICAgICAgdGhlbWU6IHt9LFxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdmFsaWRhdGVNYXBib3hUb2tlbigpO1xuICAgICAgdGhpcy5fbG9hZE1hcFN0eWxlKHRoaXMucHJvcHMubWFwU3R5bGVzKTtcbiAgICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbktlcGxlckdsSW5pdGlhbGl6ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbktlcGxlckdsSW5pdGlhbGl6ZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIGRpbWVuc2lvbiBwcm9wcyBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gcHJldlByb3BzLmhlaWdodCB8fFxuICAgICAgICB0aGlzLnByb3BzLndpZHRoICE9PSBwcmV2UHJvcHMud2lkdGggfHxcbiAgICAgICAgLy8gcmVhY3QtbWFwLWdsIHdpbGwgZGlzcGF0Y2ggdXBkYXRlVmlld3BvcnQgYWZ0ZXIgdGhpcy5faGFuZGxlUmVzaXplIGlzIGNhbGxlZFxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcbiAgICAgICAgdGhpcy5wcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QgPSBjcmVhdGVSZWYoKTtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBSb290Q29udGV4dDtcblxuICAgIC8qIHNlbGVjdG9ycyAqL1xuICAgIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcbiAgICBhdmFpbGFibGVUaGVtZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy50aGVtZVNlbGVjdG9yLCB0aGVtZSA9PlxuICAgICAgdHlwZW9mIHRoZW1lID09PSAnb2JqZWN0J1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmJhc2ljVGhlbWUsXG4gICAgICAgICAgICAuLi50aGVtZVxuICAgICAgICAgIH1cbiAgICAgICAgOiB0aGVtZSA9PT0gVEhFTUUubGlnaHRcbiAgICAgICAgPyB0aGVtZUxUXG4gICAgICAgIDogdGhlbWUgPT09IFRIRU1FLmJhc2VcbiAgICAgICAgPyB0aGVtZUJTXG4gICAgICAgIDogdGhlbWVcbiAgICApO1xuXG4gICAgYXZhaWxhYmxlUHJvdmlkZXJzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICBwcm9wcyA9PiBwcm9wcy5jbG91ZFByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVycyA9PlxuICAgICAgICBBcnJheS5pc0FycmF5KHByb3ZpZGVycykgJiYgcHJvdmlkZXJzLmxlbmd0aFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBoYXNTdG9yYWdlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSksXG4gICAgICAgICAgICAgIGhhc1NoYXJlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICApO1xuXG4gICAgbG9jYWxlTWVzc2FnZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgcHJvcHMgPT4gcHJvcHMubG9jYWxlTWVzc2FnZXMsXG4gICAgICBjdXN0b21NZXNzYWdlcyA9PiAoY3VzdG9tTWVzc2FnZXMgPyBtZXJnZU1lc3NhZ2VzKG1lc3NhZ2VzLCBjdXN0b21NZXNzYWdlcykgOiBtZXNzYWdlcylcbiAgICApO1xuXG4gICAgLyogcHJpdmF0ZSBtZXRob2RzICovXG4gICAgX3ZhbGlkYXRlTWFwYm94VG9rZW4oKSB7XG4gICAgICBjb25zdCB7bWFwYm94QXBpQWNjZXNzVG9rZW59ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghdmFsaWRhdGVUb2tlbihtYXBib3hBcGlBY2Nlc3NUb2tlbikpIHtcbiAgICAgICAgQ29uc29sZS53YXJuKE1JU1NJTkdfTUFQQk9YX1RPS0VOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlUmVzaXplKHt3aWR0aCwgaGVpZ2h0fSkge1xuICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUod2lkdGgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoaGVpZ2h0KSkge1xuICAgICAgICBDb25zb2xlLndhcm4oJ3dpZHRoIGFuZCBoZWlnaHQgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKHtcbiAgICAgICAgd2lkdGg6IHdpZHRoIC8gKDEgKyBOdW1iZXIodGhpcy5wcm9wcy5tYXBTdGF0ZS5pc1NwbGl0KSksXG4gICAgICAgIGhlaWdodFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2xvYWRNYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHRTdHlsZXMgPSBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMubWFwU3R5bGUubWFwU3R5bGVzKTtcbiAgICAgIC8vIGFkZCBpZCB0byBjdXN0b20gbWFwIHN0eWxlcyBpZiBub3QgZ2l2ZW5cbiAgICAgIGNvbnN0IGN1c3RvbVN0eWxlcyA9ICh0aGlzLnByb3BzLm1hcFN0eWxlcyB8fCBbXSkubWFwKG1zID0+ICh7XG4gICAgICAgIC4uLm1zLFxuICAgICAgICBpZDogbXMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKVxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCBhbGxTdHlsZXMgPSBbLi4uY3VzdG9tU3R5bGVzLCAuLi5kZWZhdWx0U3R5bGVzXS5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBzdHlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhhc1N0eWxlT2JqZWN0ID0gc3R5bGUuc3R5bGUgJiYgdHlwZW9mIHN0eWxlLnN0eWxlID09PSAnb2JqZWN0JztcbiAgICAgICAgICBhY2N1W2hhc1N0eWxlT2JqZWN0ID8gJ3RvTG9hZCcgOiAndG9SZXF1ZXN0J11bc3R5bGUuaWRdID0gc3R5bGU7XG5cbiAgICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgICAgfSxcbiAgICAgICAge3RvTG9hZDoge30sIHRvUmVxdWVzdDoge319XG4gICAgICApO1xuXG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkTWFwU3R5bGVzKGFsbFN0eWxlcy50b0xvYWQpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMucmVxdWVzdE1hcFN0eWxlcyhhbGxTdHlsZXMudG9SZXF1ZXN0KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyBwcm9wc1xuICAgICAgICBpZCxcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYXBwV2Vic2l0ZSxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICBvblZpZXdTdGF0ZUNoYW5nZSxcbiAgICAgICAgb25EZWNrSW5pdGlhbGl6ZWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIGdldE1hcGJveFJlZixcbiAgICAgICAgZGVja0dsUHJvcHMsXG5cbiAgICAgICAgLy8gcmVkdXggc3RhdGVcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcHJvdmlkZXJTdGF0ZSxcblxuICAgICAgICAvLyBhY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgcHJvdmlkZXJBY3Rpb25zLFxuXG4gICAgICAgIC8vIHJlYWRPbmx5IG92ZXJyaWRlXG4gICAgICAgIHJlYWRPbmx5XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgYXZhaWxhYmxlUHJvdmlkZXJzID0gdGhpcy5hdmFpbGFibGVQcm92aWRlcnModGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBzcGxpdE1hcHMsIC8vIHRoaXMgd2lsbCBzdG9yZSBzdXBwb3J0IGZvciBzcGxpdCBtYXAgdmlldyBpcyBuZWNlc3NhcnlcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBtb3VzZVBvcyxcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICBtYXBJbmZvXG4gICAgICB9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBhbmVsRmllbGRzID0ge1xuICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IHVpU3RhdGVBY3Rpb25zLnJlbW92ZU5vdGlmaWNhdGlvbixcbiAgICAgICAgbm90aWZpY2F0aW9uczogdWlTdGF0ZS5ub3RpZmljYXRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzaWRlRmllbGRzID0ge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwSW5mbyxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpZGVQYW5lbFdpZHRoLFxuICAgICAgICBhdmFpbGFibGVQcm92aWRlcnMsXG4gICAgICAgIG1hcFNhdmVkOiBwcm92aWRlclN0YXRlLm1hcFNhdmVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBGaWVsZHMgPSB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBnZXRNYXBib3hSZWYsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBlZGl0b3I6IHZpc1N0YXRlLmVkaXRvcixcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcENvbnRyb2xzOiB1aVN0YXRlLm1hcENvbnRyb2xzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgbW91c2VQb3MsXG4gICAgICAgIHJlYWRPbmx5OiB1aVN0YXRlLnJlYWRPbmx5LFxuICAgICAgICBvbkRlY2tJbml0aWFsaXplZCxcbiAgICAgICAgb25WaWV3U3RhdGVDaGFuZ2UsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICBkZWNrR2xQcm9wc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNTcGxpdCA9IHNwbGl0TWFwcyAmJiBzcGxpdE1hcHMubGVuZ3RoID4gMTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclcgPSBtYXBTdGF0ZS53aWR0aCAqIChOdW1iZXIoaXNTcGxpdCkgKyAxKTtcblxuICAgICAgY29uc3QgbWFwQ29udGFpbmVycyA9ICFpc1NwbGl0XG4gICAgICAgID8gWzxNYXBDb250YWluZXIga2V5PXswfSBpbmRleD17MH0gey4uLm1hcEZpZWxkc30gbWFwTGF5ZXJzPXtudWxsfSAvPl1cbiAgICAgICAgOiBzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgICBtYXBMYXllcnM9e3NwbGl0TWFwc1tpbmRleF0ubGF5ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKTtcblxuICAgICAgY29uc3QgaXNFeHBvcnRpbmdJbWFnZSA9IHVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nO1xuICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLmF2YWlsYWJsZVRoZW1lU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBsb2NhbGVNZXNzYWdlcyA9IHRoaXMubG9jYWxlTWVzc2FnZXNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvb3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnJvb3R9PlxuICAgICAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXt1aVN0YXRlLmxvY2FsZX0gbWVzc2FnZXM9e2xvY2FsZU1lc3NhZ2VzW3VpU3RhdGUubG9jYWxlXX0+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICA8R2xvYmFsU3R5bGVcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2VwbGVyLWdsXCJcbiAgICAgICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yb290fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblBhbmVsIHsuLi5ub3RpZmljYXRpb25QYW5lbEZpZWxkc30gLz5cbiAgICAgICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgIXJlYWRPbmx5ICYmIDxTaWRlUGFuZWwgey4uLnNpZGVGaWVsZHN9IC8+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwc1wiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXNFeHBvcnRpbmdJbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8UGxvdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBleHBvcnRJbWFnZVNldHRpbmc9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICBhZGROb3RpZmljYXRpb249e3VpU3RhdGVBY3Rpb25zLmFkZE5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxuICAgICAgICAgICAgICAgICAgICBzZXRFeHBvcnRJbWFnZUVycm9yPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICBzcGxpdE1hcHM9e3NwbGl0TWFwc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8R2VvQ29kZXJQYW5lbFxuICAgICAgICAgICAgICAgICAgICBpc0dlb2NvZGVyRW5hYmxlZD17aW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e21hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgICAgICBtYXBTdGF0ZT17bWFwU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpc0RhdGE9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVWaXNEYXRhfVxuICAgICAgICAgICAgICAgICAgICByZW1vdmVEYXRhc2V0PXt2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRGF0YXNldH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFwPXttYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxCb3R0b21XaWRnZXRcbiAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxuICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgc2lkZVBhbmVsV2lkdGg9e1xuICAgICAgICAgICAgICAgICAgICB1aVN0YXRlLnJlYWRPbmx5ID8gMCA6IHRoaXMucHJvcHMuc2lkZVBhbmVsV2lkdGggKyB0aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TW9kYWxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlPXt2aXNTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgICBtYXBib3hBcGlVcmw9e21hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgdWlTdGF0ZUFjdGlvbnM9e3VpU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgbWFwU3R5bGVBY3Rpb25zPXttYXBTdHlsZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlckFjdGlvbnM9e3Byb3ZpZGVyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgIHJvb3ROb2RlPXt0aGlzLnJvb3QuY3VycmVudH1cbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgICBjb250YWluZXJIPXttYXBTdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlclN0YXRlPXt0aGlzLnByb3BzLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBVc2VyIGRlZmluZWQgY2xvdWQgcHJvdmlkZXIgcHJvcHNcbiAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgICAgICAgICAgb25FeHBvcnRUb0Nsb3VkU3VjY2Vzcz17dGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRTdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzPXt0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwU3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwRXJyb3I9e3RoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9uRXhwb3J0VG9DbG91ZEVycm9yPXt0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZEVycm9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICAgIDwvUm9vdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBrZXBsZXJHbENvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoVGhlbWUoS2VwbGVyR0wpKTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlID0ge30sIHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgdmlzU3RhdGU6IHN0YXRlLnZpc1N0YXRlLFxuICAgIG1hcFN0eWxlOiBzdGF0ZS5tYXBTdHlsZSxcbiAgICBtYXBTdGF0ZTogc3RhdGUubWFwU3RhdGUsXG4gICAgdWlTdGF0ZTogc3RhdGUudWlTdGF0ZSxcbiAgICBwcm92aWRlclN0YXRlOiBzdGF0ZS5wcm92aWRlclN0YXRlXG4gIH07XG59XG5cbmNvbnN0IGRlZmF1bHRVc2VyQWN0aW9ucyA9IHt9O1xuY29uc3QgZ2V0RGlzcGF0Y2ggPSBkaXNwYXRjaCA9PiBkaXNwYXRjaDtcbmNvbnN0IGdldFVzZXJBY3Rpb25zID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gcHJvcHMuYWN0aW9ucyB8fCBkZWZhdWx0VXNlckFjdGlvbnM7XG5cbmZ1bmN0aW9uIG1ha2VHZXRBY3Rpb25DcmVhdG9ycygpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFtnZXREaXNwYXRjaCwgZ2V0VXNlckFjdGlvbnNdLCAoZGlzcGF0Y2gsIHVzZXJBY3Rpb25zKSA9PiB7XG4gICAgY29uc3QgW3Zpc1N0YXRlQWN0aW9ucywgbWFwU3RhdGVBY3Rpb25zLCBtYXBTdHlsZUFjdGlvbnMsIHVpU3RhdGVBY3Rpb25zLCBwcm92aWRlckFjdGlvbnNdID0gW1xuICAgICAgVmlzU3RhdGVBY3Rpb25zLFxuICAgICAgTWFwU3RhdGVBY3Rpb25zLFxuICAgICAgTWFwU3R5bGVBY3Rpb25zLFxuICAgICAgVUlTdGF0ZUFjdGlvbnMsXG4gICAgICBQcm92aWRlckFjdGlvbnNcbiAgICBdLm1hcChhY3Rpb25zID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhtZXJnZUFjdGlvbnMoYWN0aW9ucywgdXNlckFjdGlvbnMpLCBkaXNwYXRjaCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgcHJvdmlkZXJBY3Rpb25zLFxuICAgICAgZGlzcGF0Y2hcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZU1hcERpc3BhdGNoVG9Qcm9wcygpIHtcbiAgY29uc3QgZ2V0QWN0aW9uQ3JlYXRvcnMgPSBtYWtlR2V0QWN0aW9uQ3JlYXRvcnMoKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdyb3VwZWRBY3Rpb25DcmVhdG9ycyA9IGdldEFjdGlvbkNyZWF0b3JzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZ3JvdXBlZEFjdGlvbkNyZWF0b3JzLFxuICAgICAgZGlzcGF0Y2hcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHM7XG59XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCBrZXBsZXIuZ2wgYWN0aW9ucyB3aXRoIHVzZXIgZGVmaW5lZCBhY3Rpb25zIHVzaW5nIHRoZSBzYW1lIGtleVxuICovXG5mdW5jdGlvbiBtZXJnZUFjdGlvbnMoYWN0aW9ucywgdXNlckFjdGlvbnMpIHtcbiAgY29uc3Qgb3ZlcnJpZGVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHVzZXJBY3Rpb25zKSB7XG4gICAgaWYgKHVzZXJBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkgJiYgYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvdmVycmlkZXNba2V5XSA9IHVzZXJBY3Rpb25zW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsuLi5hY3Rpb25zLCAuLi5vdmVycmlkZXN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbEZhY3Rvcnk7XG4iXX0=