"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapLegendPanelFactory = MapLegendPanelFactory;
exports.SplitMapButtonFactory = SplitMapButtonFactory;
exports.Toggle3dButtonFactory = Toggle3dButtonFactory;
exports.MapDrawPanelFactory = MapDrawPanelFactory;
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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../localization");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

var _verticalToolbar = _interopRequireDefault(require("../common/vertical-toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _defaultSettings = require("../../constants/default-settings");

var _locales = require("../../localization/locales");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  min-width: ", "px;\n  overflow: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  padding: ", "px;\n  z-index: 10;\n  margin-top: ", "px;\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControl = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top || 0;
});

var StyledMapControlAction = _styledComponents["default"].div(_templateObject2());

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-content'
})(_templateObject4(), function (props) {
  return props.theme.dropdownScrollBar;
}, function (props) {
  return props.theme.mapControl.width;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-header'
})(_templateObject5(), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});

var ActionPanel = function ActionPanel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlAction, {
    className: className
  }, children);
};

ActionPanel.displayName = 'ActionPanel';

var MapControlTooltip = /*#__PURE__*/_react["default"].memo(function (_ref2) {
  var id = _ref2.id,
      message = _ref2.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: message
  })));
});

MapControlTooltip.displayName = 'MapControlTooltip';

var MapLegendTooltip = function MapLegendTooltip(_ref3) {
  var id = _ref3.id,
      message = _ref3.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: message
  })));
};

var LayerSelectorPanel = /*#__PURE__*/_react["default"].memo(function (_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "toggle-layer",
    message: isActive ? 'tooltip.hideLayerPanel' : 'tooltip.showLayerPanel'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    header: "header.visibleLayers",
    onClick: toggleMenuPanel
  }, /*#__PURE__*/_react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
});

LayerSelectorPanel.displayName = 'LayerSelectorPanel';

var MapControlPanel = /*#__PURE__*/_react["default"].memo(function (_ref5) {
  var children = _ref5.children,
      header = _ref5.header,
      onClick = _ref5.onClick,
      _ref5$scale = _ref5.scale,
      scale = _ref5$scale === void 0 ? 1 : _ref5$scale,
      isExport = _ref5.isExport,
      _ref5$disableClose = _ref5.disableClose,
      disableClose = _ref5$disableClose === void 0 ? false : _ref5$disableClose,
      logoComponent = _ref5.logoComponent;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ")"),
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeader, null, isExport && logoComponent ? logoComponent : header ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: header
  })) : null, isExport ? null : /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, {
    className: "close-map-control-item",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    height: "16px"
  }))), /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelContent, null, children));
});

MapControlPanel.displayName = 'MapControlPanel';
MapLegendPanelFactory.deps = [];

function MapLegendPanelFactory() {
  var defaultActionIcons = {
    legend: _icons.Legend
  };

  var MapLegendPanel = function MapLegendPanel(_ref6) {
    var layers = _ref6.layers,
        isActive = _ref6.isActive,
        scale = _ref6.scale,
        onToggleMenuPanel = _ref6.onToggleMenuPanel,
        isExport = _ref6.isExport,
        disableClose = _ref6.disableClose,
        logoComponent = _ref6.logoComponent,
        _ref6$actionIcons = _ref6.actionIcons,
        actionIcons = _ref6$actionIcons === void 0 ? defaultActionIcons : _ref6$actionIcons;
    return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      key: 2,
      "data-tip": true,
      "data-for": "show-legend",
      className: "map-control-button show-legend",
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleMenuPanel();
      }
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.legend, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapLegendTooltip, {
      id: "show-legend",
      message: 'tooltip.showLegend'
    })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
      scale: scale,
      header: 'header.layerLegend',
      onClick: onToggleMenuPanel,
      isExport: isExport,
      disableClose: disableClose,
      logoComponent: logoComponent
    }, /*#__PURE__*/_react["default"].createElement(_mapLegend["default"], {
      layers: layers
    }));
  };

  MapLegendPanel.displayName = 'MapControlPanel';
  return MapLegendPanel;
}

SplitMapButtonFactory.deps = [];

function SplitMapButtonFactory() {
  var defaultActionIcons = {
    "delete": _icons.Delete,
    split: _icons.Split
  };

  var SplitMapButton = /*#__PURE__*/_react["default"].memo(function (_ref7) {
    var isSplit = _ref7.isSplit,
        mapIndex = _ref7.mapIndex,
        onToggleSplitMap = _ref7.onToggleSplitMap,
        _ref7$actionIcons = _ref7.actionIcons,
        actionIcons = _ref7$actionIcons === void 0 ? defaultActionIcons : _ref7$actionIcons;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      active: isSplit,
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleSplitMap(isSplit ? mapIndex : undefined);
      },
      key: "split-".concat(isSplit),
      className: (0, _classnames["default"])('map-control-button', 'split-map', {
        'close-map': isSplit
      }),
      "data-tip": true,
      "data-for": "action-toggle"
    }, isSplit ? /*#__PURE__*/_react["default"].createElement(actionIcons["delete"], {
      height: "18px"
    }) : /*#__PURE__*/_react["default"].createElement(actionIcons.split, {
      height: "18px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "action-toggle",
      message: isSplit ? 'tooltip.closePanel' : 'tooltip.switchToDualView'
    }));
  });

  SplitMapButton.displayName = 'SplitMapButton';
  return SplitMapButton;
}

Toggle3dButtonFactory.deps = [];

function Toggle3dButtonFactory() {
  var defaultActionIcons = {
    cube: _icons.Cube3d
  };

  var Toggle3dButton = /*#__PURE__*/_react["default"].memo(function (_ref8) {
    var dragRotate = _ref8.dragRotate,
        onTogglePerspective = _ref8.onTogglePerspective,
        _ref8$actionIcons = _ref8.actionIcons,
        actionIcons = _ref8$actionIcons === void 0 ? defaultActionIcons : _ref8$actionIcons;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      onClick: function onClick(e) {
        e.preventDefault();
        onTogglePerspective();
      },
      active: dragRotate,
      "data-tip": true,
      "data-for": "action-3d"
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.cube, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "action-3d",
      message: dragRotate ? 'tooltip.disable3DMap' : 'tooltip.3DMap'
    }));
  });

  Toggle3dButton.displayName = 'Toggle3dButton';
  return Toggle3dButton;
}

var StyledToolbar = (0, _styledComponents["default"])(_verticalToolbar["default"])(_templateObject6());
MapDrawPanelFactory.deps = [];

function MapDrawPanelFactory() {
  var defaultActionIcons = {
    visible: _icons.EyeSeen,
    hidden: _icons.EyeUnseen,
    polygon: _icons.DrawPolygon,
    cursor: _icons.CursorClick,
    innerPolygon: _icons.Polygon,
    rectangle: _icons.Rectangle
  };

  var MapDrawPanel = /*#__PURE__*/_react["default"].memo(function (_ref9) {
    var editor = _ref9.editor,
        isActive = _ref9.isActive,
        onToggleMenuPanel = _ref9.onToggleMenuPanel,
        onSetEditorMode = _ref9.onSetEditorMode,
        onToggleEditorVisibility = _ref9.onToggleEditorVisibility,
        _ref9$actionIcons = _ref9.actionIcons,
        actionIcons = _ref9$actionIcons === void 0 ? defaultActionIcons : _ref9$actionIcons;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-draw-controls",
      style: {
        position: 'relative'
      }
    }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: isActive
    }, /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "edit-feature",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.EDIT);
      },
      label: "toolbar.select",
      iconHeight: "22px",
      icon: actionIcons.cursor,
      active: editor.mode === _defaultSettings.EDITOR_MODES.EDIT
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-feature",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_POLYGON);
      },
      label: "toolbar.polygon",
      iconHeight: "22px",
      icon: actionIcons.innerPolygon,
      active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_POLYGON
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-rectangle",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_RECTANGLE);
      },
      label: "toolbar.rectangle",
      iconHeight: "22px",
      icon: actionIcons.rectangle,
      active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_RECTANGLE
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "toggle-features",
      onClick: onToggleEditorVisibility,
      label: editor.visible ? 'toolbar.hide' : 'toolbar.show',
      iconHeight: "22px",
      icon: editor.visible ? actionIcons.visible : actionIcons.hidden
    })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleMenuPanel();
      },
      active: isActive,
      "data-tip": true,
      "data-for": "map-draw"
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.polygon, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "map-draw",
      message: "tooltip.DrawOnMap"
    })));
  });

  MapDrawPanel.displayName = 'MapDrawPanel';
  return MapDrawPanel;
}

var LocalePanel = /*#__PURE__*/_react["default"].memo(function (_ref10) {
  var availableLocales = _ref10.availableLocales,
      isActive = _ref10.isActive,
      onToggleMenuPanel = _ref10.onToggleMenuPanel,
      onSetLocale = _ref10.onSetLocale,
      activeLocale = _ref10.activeLocale;
  var onClickItem = (0, _react.useCallback)(function (locale) {
    onSetLocale(locale);
  }, [onSetLocale]);
  var onClickButton = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    onToggleMenuPanel();
  }, [onToggleMenuPanel]);
  var getLabel = (0, _react.useCallback)(function (locale) {
    return "toolbar.".concat(locale);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
    show: isActive
  }, availableLocales.map(function (locale) {
    return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      key: locale,
      onClick: function onClick() {
        return onClickItem(locale);
      },
      label: getLabel(locale),
      active: activeLocale === locale
    });
  })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: onClickButton,
    active: isActive,
    "data-tip": true,
    "data-for": "locale"
  }, activeLocale.toUpperCase(), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "locale",
    message: "tooltip.selectLocale"
  })));
});

LocalePanel.displayName = 'LocalePanel';

var LegendLogo = /*#__PURE__*/_react["default"].createElement(_logo["default"], {
  version: false,
  appName: "kepler.gl"
});

MapControlFactory.deps = [MapDrawPanelFactory, Toggle3dButtonFactory, SplitMapButtonFactory, MapLegendPanelFactory];

function MapControlFactory(MapDrawPanel, Toggle3dButton, SplitMapButton, MapLegendPanel) {
  var MapControl = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapControl, _Component);

    var _super = _createSuper(MapControl);

    function MapControl() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerPanelItemsSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(function (l) {
          return l.config.isVisible;
        }).map(function (layer) {
          return {
            id: layer.id,
            name: layer.config.label,
            // layer
            isVisible: layersToRender[layer.id]
          };
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(MapControl, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            dragRotate = _this$props.dragRotate,
            layers = _this$props.layers,
            layersToRender = _this$props.layersToRender,
            isSplit = _this$props.isSplit,
            isExport = _this$props.isExport,
            mapIndex = _this$props.mapIndex,
            mapControls = _this$props.mapControls,
            onTogglePerspective = _this$props.onTogglePerspective,
            onToggleSplitMap = _this$props.onToggleSplitMap,
            onMapToggleLayer = _this$props.onMapToggleLayer,
            onToggleMapControl = _this$props.onToggleMapControl,
            editor = _this$props.editor,
            scale = _this$props.scale,
            readOnly = _this$props.readOnly,
            locale = _this$props.locale,
            top = _this$props.top,
            logoComponent = _this$props.logoComponent;
        var _mapControls$visibleL = mapControls.visibleLayers,
            visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
            _mapControls$mapLegen = mapControls.mapLegend,
            mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
            _mapControls$toggle3d = mapControls.toggle3d,
            toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
            _mapControls$splitMap = mapControls.splitMap,
            splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap,
            _mapControls$mapDraw = mapControls.mapDraw,
            mapDraw = _mapControls$mapDraw === void 0 ? {} : _mapControls$mapDraw,
            _mapControls$mapLocal = mapControls.mapLocale,
            mapLocale = _mapControls$mapLocal === void 0 ? {} : _mapControls$mapLocal;
        return /*#__PURE__*/_react["default"].createElement(StyledMapControl, {
          className: "map-control",
          top: top
        }, splitMap.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "split-map",
          key: 0
        }, /*#__PURE__*/_react["default"].createElement(SplitMapButton, {
          isSplit: isSplit,
          mapIndex: mapIndex,
          onToggleSplitMap: onToggleSplitMap
        })) : null, isSplit && visibleLayers.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "map-layers",
          key: 1
        }, /*#__PURE__*/_react["default"].createElement(LayerSelectorPanel, {
          items: this.layerPanelItemsSelector(this.props),
          onMapToggleLayer: onMapToggleLayer,
          isActive: visibleLayers.active,
          toggleMenuPanel: function toggleMenuPanel() {
            return onToggleMapControl('visibleLayers');
          }
        })) : null, toggle3d.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "toggle-3d",
          key: 2
        }, /*#__PURE__*/_react["default"].createElement(Toggle3dButton, {
          dragRotate: dragRotate,
          onTogglePerspective: onTogglePerspective
        })) : null, mapLegend.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "show-legend",
          key: 3
        }, /*#__PURE__*/_react["default"].createElement(MapLegendPanel, {
          layers: layers.filter(function (l) {
            return layersToRender[l.id];
          }),
          scale: scale,
          isExport: isExport,
          onMapToggleLayer: onMapToggleLayer,
          isActive: mapLegend.active,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLegend');
          },
          disableClose: mapLegend.disableClose,
          logoComponent: logoComponent
        })) : null, mapDraw.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 4
        }, /*#__PURE__*/_react["default"].createElement(MapDrawPanel, {
          isActive: mapDraw.active && mapDraw.activeMapIndex === mapIndex,
          editor: editor,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapDraw');
          },
          onSetEditorMode: this.props.onSetEditorMode,
          onToggleEditorVisibility: this.props.onToggleEditorVisibility
        })) : null, mapLocale.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 5
        }, /*#__PURE__*/_react["default"].createElement(LocalePanel, {
          isActive: mapLocale.active,
          activeLocale: locale,
          availableLocales: Object.keys(_locales.LOCALE_CODES),
          onSetLocale: this.props.onSetLocale,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLocale');
          }
        })) : null);
      }
    }]);
    return MapControl;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapControl, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    dragRotate: _propTypes["default"].bool.isRequired,
    isSplit: _propTypes["default"].bool.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
    layersToRender: _propTypes["default"].object.isRequired,
    mapIndex: _propTypes["default"].number.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    onTogglePerspective: _propTypes["default"].func.isRequired,
    onToggleSplitMap: _propTypes["default"].func.isRequired,
    onToggleMapControl: _propTypes["default"].func.isRequired,
    onSetEditorMode: _propTypes["default"].func.isRequired,
    onToggleEditorVisibility: _propTypes["default"].func.isRequired,
    top: _propTypes["default"].number.isRequired,
    onSetLocale: _propTypes["default"].func.isRequired,
    locale: _propTypes["default"].string.isRequired,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    // optional
    readOnly: _propTypes["default"].bool,
    scale: _propTypes["default"].number,
    mapLayers: _propTypes["default"].object,
    editor: _propTypes["default"].object
  });
  (0, _defineProperty2["default"])(MapControl, "defaultProps", {
    isSplit: false,
    top: 0,
    mapIndex: 0,
    logoComponent: LegendLogo
  });
  MapControl.displayName = 'MapControl';
  return MapControl;
}

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwidG9wIiwiU3R5bGVkTWFwQ29udHJvbEFjdGlvbiIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbCIsIm1hcFBhbmVsQmFja2dyb3VuZENvbG9yIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiZHJvcGRvd25TY3JvbGxCYXIiLCJ3aWR0aCIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciIsIm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yIiwidGl0bGVUZXh0Q29sb3IiLCJBY3Rpb25QYW5lbCIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiLCJNYXBDb250cm9sVG9vbHRpcCIsIlJlYWN0IiwibWVtbyIsImlkIiwibWVzc2FnZSIsIk1hcExlZ2VuZFRvb2x0aXAiLCJMYXllclNlbGVjdG9yUGFuZWwiLCJpdGVtcyIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJpc0FjdGl2ZSIsInRvZ2dsZU1lbnVQYW5lbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1hcENvbnRyb2xQYW5lbCIsImhlYWRlciIsIm9uQ2xpY2siLCJzY2FsZSIsImlzRXhwb3J0IiwiZGlzYWJsZUNsb3NlIiwibG9nb0NvbXBvbmVudCIsInRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbEZhY3RvcnkiLCJkZXBzIiwiZGVmYXVsdEFjdGlvbkljb25zIiwibGVnZW5kIiwiTGVnZW5kIiwiTWFwTGVnZW5kUGFuZWwiLCJsYXllcnMiLCJvblRvZ2dsZU1lbnVQYW5lbCIsImFjdGlvbkljb25zIiwiU3BsaXRNYXBCdXR0b25GYWN0b3J5IiwiRGVsZXRlIiwic3BsaXQiLCJTcGxpdCIsIlNwbGl0TWFwQnV0dG9uIiwiaXNTcGxpdCIsIm1hcEluZGV4Iiwib25Ub2dnbGVTcGxpdE1hcCIsInVuZGVmaW5lZCIsIlRvZ2dsZTNkQnV0dG9uRmFjdG9yeSIsImN1YmUiLCJDdWJlM2QiLCJUb2dnbGUzZEJ1dHRvbiIsImRyYWdSb3RhdGUiLCJvblRvZ2dsZVBlcnNwZWN0aXZlIiwiU3R5bGVkVG9vbGJhciIsIlZlcnRpY2FsVG9vbGJhciIsIk1hcERyYXdQYW5lbEZhY3RvcnkiLCJ2aXNpYmxlIiwiRXllU2VlbiIsImhpZGRlbiIsIkV5ZVVuc2VlbiIsInBvbHlnb24iLCJEcmF3UG9seWdvbiIsImN1cnNvciIsIkN1cnNvckNsaWNrIiwiaW5uZXJQb2x5Z29uIiwiUG9seWdvbiIsInJlY3RhbmdsZSIsIlJlY3RhbmdsZSIsIk1hcERyYXdQYW5lbCIsImVkaXRvciIsIm9uU2V0RWRpdG9yTW9kZSIsIm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiRURJVE9SX01PREVTIiwiRURJVCIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJEUkFXX1JFQ1RBTkdMRSIsIkxvY2FsZVBhbmVsIiwiYXZhaWxhYmxlTG9jYWxlcyIsIm9uU2V0TG9jYWxlIiwiYWN0aXZlTG9jYWxlIiwib25DbGlja0l0ZW0iLCJsb2NhbGUiLCJvbkNsaWNrQnV0dG9uIiwiZ2V0TGFiZWwiLCJtYXAiLCJ0b1VwcGVyQ2FzZSIsIkxlZ2VuZExvZ28iLCJNYXBDb250cm9sRmFjdG9yeSIsIk1hcENvbnRyb2wiLCJsYXllcnNUb1JlbmRlciIsImxheWVyU2VsZWN0b3IiLCJsYXllcnNUb1JlbmRlclNlbGVjdG9yIiwiZmlsdGVyIiwibCIsImNvbmZpZyIsImlzVmlzaWJsZSIsImxheWVyIiwibmFtZSIsImxhYmVsIiwibWFwQ29udHJvbHMiLCJvblRvZ2dsZU1hcENvbnRyb2wiLCJyZWFkT25seSIsInZpc2libGVMYXllcnMiLCJtYXBMZWdlbmQiLCJ0b2dnbGUzZCIsInNwbGl0TWFwIiwibWFwRHJhdyIsIm1hcExvY2FsZSIsInNob3ciLCJsYXllclBhbmVsSXRlbXNTZWxlY3RvciIsImFjdGl2ZSIsImFjdGl2ZU1hcEluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIkxPQ0FMRV9DT0RFUyIsIkNvbXBvbmVudCIsImRhdGFzZXRzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheU9mIiwibnVtYmVyIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsR0FBVixvQkFFVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJDLE9BQTNCO0FBQUEsQ0FGSSxFQUlOLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLEdBQU4sSUFBYSxDQUFqQjtBQUFBLENBSkMsQ0FBdEI7O0FBUUEsSUFBTUMsc0JBQXNCLEdBQUdQLDZCQUFPQyxHQUFWLG9CQUE1Qjs7QUFNQSxJQUFNTyxxQkFBcUIsR0FBR1IsNkJBQU9DLEdBQVYscUJBQ0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSx1QkFBaEI7QUFBQSxDQURBLENBQTNCOztBQVNBLElBQU1DLDRCQUE0QixHQUFHViw2QkFBT0MsR0FBUCxDQUFXVSxLQUFYLENBQWlCO0FBQ3BEQyxFQUFBQSxTQUFTLEVBQUU7QUFEeUMsQ0FBakIsQ0FBSCxxQkFHOUIsVUFBQVYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxpQkFBaEI7QUFBQSxDQUh5QixFQU1uQixVQUFBWCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJVLEtBQTNCO0FBQUEsQ0FOYyxDQUFsQzs7QUFVQSxJQUFNQywyQkFBMkIsR0FBR2YsNkJBQU9DLEdBQVAsQ0FBV1UsS0FBWCxDQUFpQjtBQUNuREMsRUFBQUEsU0FBUyxFQUFFO0FBRHdDLENBQWpCLENBQUgscUJBS1gsVUFBQVYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZYSw2QkFBaEI7QUFBQSxDQUxNLEVBU3RCLFVBQUFkLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWWMsY0FBaEI7QUFBQSxDQVRpQixDQUFqQzs7QUFrQkEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFFTixTQUFGLFFBQUVBLFNBQUY7QUFBQSxNQUFhTyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxzQkFDbEIsZ0NBQUMsc0JBQUQ7QUFBd0IsSUFBQSxTQUFTLEVBQUVQO0FBQW5DLEtBQStDTyxRQUEvQyxDQURrQjtBQUFBLENBQXBCOztBQUlBRCxXQUFXLENBQUNFLFdBQVosR0FBMEIsYUFBMUI7O0FBRUEsSUFBTUMsaUJBQWlCLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsTUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsTUFBTUMsT0FBTixTQUFNQSxPQUFOO0FBQUEsc0JBQ25DLGdDQUFDLDBCQUFEO0FBQVMsSUFBQSxFQUFFLEVBQUVELEVBQWI7QUFBaUIsSUFBQSxLQUFLLEVBQUMsTUFBdkI7QUFBOEIsSUFBQSxNQUFNLEVBQUM7QUFBckMsa0JBQ0UsMkRBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVDO0FBQXRCLElBREYsQ0FERixDQURtQztBQUFBLENBQVgsQ0FBMUI7O0FBUUFKLGlCQUFpQixDQUFDRCxXQUFsQixHQUFnQyxtQkFBaEM7O0FBRUEsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVGLEVBQUYsU0FBRUEsRUFBRjtBQUFBLE1BQU1DLE9BQU4sU0FBTUEsT0FBTjtBQUFBLHNCQUN2QixnQ0FBQywwQkFBRDtBQUFTLElBQUEsRUFBRSxFQUFFRCxFQUFiO0FBQWlCLElBQUEsS0FBSyxFQUFDLE1BQXZCO0FBQThCLElBQUEsTUFBTSxFQUFDO0FBQXJDLGtCQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFQztBQUF0QixJQURGLENBREYsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFRQSxJQUFNRSxrQkFBa0IsZ0JBQUdMLGtCQUFNQyxJQUFOLENBQVc7QUFBQSxNQUFFSyxLQUFGLFNBQUVBLEtBQUY7QUFBQSxNQUFTQyxnQkFBVCxTQUFTQSxnQkFBVDtBQUFBLE1BQTJCQyxRQUEzQixTQUEyQkEsUUFBM0I7QUFBQSxNQUFxQ0MsZUFBckMsU0FBcUNBLGVBQXJDO0FBQUEsU0FDcEMsQ0FBQ0QsUUFBRCxnQkFDRSxnQ0FBQyxtQ0FBRDtBQUNFLElBQUEsR0FBRyxFQUFFLENBRFA7QUFFRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUUsQ0FBQyxFQUFJO0FBQ1pBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBRixNQUFBQSxlQUFlO0FBQ2hCLEtBTEg7QUFNRSxJQUFBLFNBQVMsRUFBQyxpQ0FOWjtBQU9FLG9CQVBGO0FBUUUsZ0JBQVM7QUFSWCxrQkFVRSxnQ0FBQyxhQUFEO0FBQVEsSUFBQSxNQUFNLEVBQUM7QUFBZixJQVZGLGVBV0UsZ0NBQUMsaUJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxjQURMO0FBRUUsSUFBQSxPQUFPLEVBQUVELFFBQVEsR0FBRyx3QkFBSCxHQUE4QjtBQUZqRCxJQVhGLENBREYsZ0JBa0JFLGdDQUFDLGVBQUQ7QUFBaUIsSUFBQSxNQUFNLEVBQUMsc0JBQXhCO0FBQStDLElBQUEsT0FBTyxFQUFFQztBQUF4RCxrQkFDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLE1BQU0sRUFBRUgsS0FBMUI7QUFBaUMsSUFBQSxnQkFBZ0IsRUFBRUM7QUFBbkQsSUFERixDQW5Ca0M7QUFBQSxDQUFYLENBQTNCOztBQXlCQUYsa0JBQWtCLENBQUNQLFdBQW5CLEdBQWlDLG9CQUFqQzs7QUFFQSxJQUFNYyxlQUFlLGdCQUFHWixrQkFBTUMsSUFBTixDQUN0QjtBQUFBLE1BQUVKLFFBQUYsU0FBRUEsUUFBRjtBQUFBLE1BQVlnQixNQUFaLFNBQVlBLE1BQVo7QUFBQSxNQUFvQkMsT0FBcEIsU0FBb0JBLE9BQXBCO0FBQUEsMEJBQTZCQyxLQUE3QjtBQUFBLE1BQTZCQSxLQUE3Qiw0QkFBcUMsQ0FBckM7QUFBQSxNQUF3Q0MsUUFBeEMsU0FBd0NBLFFBQXhDO0FBQUEsaUNBQWtEQyxZQUFsRDtBQUFBLE1BQWtEQSxZQUFsRCxtQ0FBaUUsS0FBakU7QUFBQSxNQUF3RUMsYUFBeEUsU0FBd0VBLGFBQXhFO0FBQUEsc0JBQ0UsZ0NBQUMscUJBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxTQUFTLGtCQUFXSixLQUFYLE1BREo7QUFFTEssTUFBQUEsWUFBWSxFQUFFO0FBRlQ7QUFEVCxrQkFNRSxnQ0FBQywyQkFBRCxRQUNHSixRQUFRLElBQUlFLGFBQVosR0FDQ0EsYUFERCxHQUVHTCxNQUFNLGdCQUNSO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBQ1EsTUFBQUEsYUFBYSxFQUFFO0FBQWhCO0FBQWIsa0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVSO0FBQXRCLElBREYsQ0FEUSxHQUlOLElBUE4sRUFRR0csUUFBUSxHQUFHLElBQUgsZ0JBQ1AsZ0NBQUMsaUNBQUQ7QUFBZ0IsSUFBQSxTQUFTLEVBQUMsd0JBQTFCO0FBQW1ELElBQUEsT0FBTyxFQUFFRjtBQUE1RCxrQkFDRSxnQ0FBQyxZQUFEO0FBQU8sSUFBQSxNQUFNLEVBQUM7QUFBZCxJQURGLENBVEosQ0FORixlQW9CRSxnQ0FBQyw0QkFBRCxRQUErQmpCLFFBQS9CLENBcEJGLENBREY7QUFBQSxDQURzQixDQUF4Qjs7QUEyQkFlLGVBQWUsQ0FBQ2QsV0FBaEIsR0FBOEIsaUJBQTlCO0FBRUF3QixxQkFBcUIsQ0FBQ0MsSUFBdEIsR0FBNkIsRUFBN0I7O0FBQ08sU0FBU0QscUJBQVQsR0FBaUM7QUFDdEMsTUFBTUUsa0JBQWtCLEdBQUc7QUFDekJDLElBQUFBLE1BQU0sRUFBRUM7QUFEaUIsR0FBM0I7O0FBR0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFFBQ3JCQyxNQURxQixTQUNyQkEsTUFEcUI7QUFBQSxRQUVyQnBCLFFBRnFCLFNBRXJCQSxRQUZxQjtBQUFBLFFBR3JCTyxLQUhxQixTQUdyQkEsS0FIcUI7QUFBQSxRQUlyQmMsaUJBSnFCLFNBSXJCQSxpQkFKcUI7QUFBQSxRQUtyQmIsUUFMcUIsU0FLckJBLFFBTHFCO0FBQUEsUUFNckJDLFlBTnFCLFNBTXJCQSxZQU5xQjtBQUFBLFFBT3JCQyxhQVBxQixTQU9yQkEsYUFQcUI7QUFBQSxrQ0FRckJZLFdBUnFCO0FBQUEsUUFRckJBLFdBUnFCLGtDQVFQTixrQkFSTztBQUFBLFdBVXJCLENBQUNoQixRQUFELGdCQUNFLGdDQUFDLG1DQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUUsQ0FEUDtBQUVFLHNCQUZGO0FBR0Usa0JBQVMsYUFIWDtBQUlFLE1BQUEsU0FBUyxFQUFDLGdDQUpaO0FBS0UsTUFBQSxPQUFPLEVBQUUsaUJBQUFFLENBQUMsRUFBSTtBQUNaQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQWtCLFFBQUFBLGlCQUFpQjtBQUNsQjtBQVJILG9CQVVFLGdDQUFDLFdBQUQsQ0FBYSxNQUFiO0FBQW9CLE1BQUEsTUFBTSxFQUFDO0FBQTNCLE1BVkYsZUFXRSxnQ0FBQyxnQkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBQyxhQUFyQjtBQUFtQyxNQUFBLE9BQU8sRUFBRTtBQUE1QyxNQVhGLENBREYsZ0JBZUUsZ0NBQUMsZUFBRDtBQUNFLE1BQUEsS0FBSyxFQUFFZCxLQURUO0FBRUUsTUFBQSxNQUFNLEVBQUUsb0JBRlY7QUFHRSxNQUFBLE9BQU8sRUFBRWMsaUJBSFg7QUFJRSxNQUFBLFFBQVEsRUFBRWIsUUFKWjtBQUtFLE1BQUEsWUFBWSxFQUFFQyxZQUxoQjtBQU1FLE1BQUEsYUFBYSxFQUFFQztBQU5qQixvQkFRRSxnQ0FBQyxxQkFBRDtBQUFXLE1BQUEsTUFBTSxFQUFFVTtBQUFuQixNQVJGLENBekJtQjtBQUFBLEdBQXZCOztBQXFDQUQsRUFBQUEsY0FBYyxDQUFDN0IsV0FBZixHQUE2QixpQkFBN0I7QUFDQSxTQUFPNkIsY0FBUDtBQUNEOztBQUNESSxxQkFBcUIsQ0FBQ1IsSUFBdEIsR0FBNkIsRUFBN0I7O0FBQ08sU0FBU1EscUJBQVQsR0FBaUM7QUFDdEMsTUFBTVAsa0JBQWtCLEdBQUc7QUFDekIsY0FBUVEsYUFEaUI7QUFFekJDLElBQUFBLEtBQUssRUFBRUM7QUFGa0IsR0FBM0I7O0FBSUEsTUFBTUMsY0FBYyxnQkFBR25DLGtCQUFNQyxJQUFOLENBQ3JCO0FBQUEsUUFBRW1DLE9BQUYsU0FBRUEsT0FBRjtBQUFBLFFBQVdDLFFBQVgsU0FBV0EsUUFBWDtBQUFBLFFBQXFCQyxnQkFBckIsU0FBcUJBLGdCQUFyQjtBQUFBLGtDQUF1Q1IsV0FBdkM7QUFBQSxRQUF1Q0EsV0FBdkMsa0NBQXFETixrQkFBckQ7QUFBQSx3QkFDRSxnQ0FBQyxtQ0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFWSxPQURWO0FBRUUsTUFBQSxPQUFPLEVBQUUsaUJBQUExQixDQUFDLEVBQUk7QUFDWkEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EyQixRQUFBQSxnQkFBZ0IsQ0FBQ0YsT0FBTyxHQUFHQyxRQUFILEdBQWNFLFNBQXRCLENBQWhCO0FBQ0QsT0FMSDtBQU1FLE1BQUEsR0FBRyxrQkFBV0gsT0FBWCxDQU5MO0FBT0UsTUFBQSxTQUFTLEVBQUUsNEJBQVcsb0JBQVgsRUFBaUMsV0FBakMsRUFBOEM7QUFBQyxxQkFBYUE7QUFBZCxPQUE5QyxDQVBiO0FBUUUsc0JBUkY7QUFTRSxrQkFBUztBQVRYLE9BV0dBLE9BQU8sZ0JBQUcsZ0NBQUMsV0FBRDtBQUFvQixNQUFBLE1BQU0sRUFBQztBQUEzQixNQUFILGdCQUEwQyxnQ0FBQyxXQUFELENBQWEsS0FBYjtBQUFtQixNQUFBLE1BQU0sRUFBQztBQUExQixNQVhwRCxlQVlFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUMsZUFETDtBQUVFLE1BQUEsT0FBTyxFQUFFQSxPQUFPLEdBQUcsb0JBQUgsR0FBMEI7QUFGNUMsTUFaRixDQURGO0FBQUEsR0FEcUIsQ0FBdkI7O0FBc0JBRCxFQUFBQSxjQUFjLENBQUNyQyxXQUFmLEdBQTZCLGdCQUE3QjtBQUNBLFNBQU9xQyxjQUFQO0FBQ0Q7O0FBQ0RLLHFCQUFxQixDQUFDakIsSUFBdEIsR0FBNkIsRUFBN0I7O0FBQ08sU0FBU2lCLHFCQUFULEdBQWlDO0FBQ3RDLE1BQU1oQixrQkFBa0IsR0FBRztBQUN6QmlCLElBQUFBLElBQUksRUFBRUM7QUFEbUIsR0FBM0I7O0FBR0EsTUFBTUMsY0FBYyxnQkFBRzNDLGtCQUFNQyxJQUFOLENBQ3JCO0FBQUEsUUFBRTJDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLFFBQWNDLG1CQUFkLFNBQWNBLG1CQUFkO0FBQUEsa0NBQW1DZixXQUFuQztBQUFBLFFBQW1DQSxXQUFuQyxrQ0FBaUROLGtCQUFqRDtBQUFBLHdCQUNFLGdDQUFDLG1DQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUUsaUJBQUFkLENBQUMsRUFBSTtBQUNaQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQWtDLFFBQUFBLG1CQUFtQjtBQUNwQixPQUpIO0FBS0UsTUFBQSxNQUFNLEVBQUVELFVBTFY7QUFNRSxzQkFORjtBQU9FLGtCQUFTO0FBUFgsb0JBU0UsZ0NBQUMsV0FBRCxDQUFhLElBQWI7QUFBa0IsTUFBQSxNQUFNLEVBQUM7QUFBekIsTUFURixlQVVFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUMsV0FETDtBQUVFLE1BQUEsT0FBTyxFQUFFQSxVQUFVLEdBQUcsc0JBQUgsR0FBNEI7QUFGakQsTUFWRixDQURGO0FBQUEsR0FEcUIsQ0FBdkI7O0FBb0JBRCxFQUFBQSxjQUFjLENBQUM3QyxXQUFmLEdBQTZCLGdCQUE3QjtBQUNBLFNBQU82QyxjQUFQO0FBQ0Q7O0FBQ0QsSUFBTUcsYUFBYSxHQUFHLGtDQUFPQywyQkFBUCxDQUFILG9CQUFuQjtBQUtBQyxtQkFBbUIsQ0FBQ3pCLElBQXBCLEdBQTJCLEVBQTNCOztBQUNPLFNBQVN5QixtQkFBVCxHQUErQjtBQUNwQyxNQUFNeEIsa0JBQWtCLEdBQUc7QUFDekJ5QixJQUFBQSxPQUFPLEVBQUVDLGNBRGdCO0FBRXpCQyxJQUFBQSxNQUFNLEVBQUVDLGdCQUZpQjtBQUd6QkMsSUFBQUEsT0FBTyxFQUFFQyxrQkFIZ0I7QUFJekJDLElBQUFBLE1BQU0sRUFBRUMsa0JBSmlCO0FBS3pCQyxJQUFBQSxZQUFZLEVBQUVDLGNBTFc7QUFNekJDLElBQUFBLFNBQVMsRUFBRUM7QUFOYyxHQUEzQjs7QUFRQSxNQUFNQyxZQUFZLGdCQUFHN0Qsa0JBQU1DLElBQU4sQ0FDbkIsaUJBT007QUFBQSxRQU5KNkQsTUFNSSxTQU5KQSxNQU1JO0FBQUEsUUFMSnRELFFBS0ksU0FMSkEsUUFLSTtBQUFBLFFBSkpxQixpQkFJSSxTQUpKQSxpQkFJSTtBQUFBLFFBSEprQyxlQUdJLFNBSEpBLGVBR0k7QUFBQSxRQUZKQyx3QkFFSSxTQUZKQSx3QkFFSTtBQUFBLGtDQURKbEMsV0FDSTtBQUFBLFFBREpBLFdBQ0ksa0NBRFVOLGtCQUNWO0FBQ0osd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQyxtQkFBZjtBQUFtQyxNQUFBLEtBQUssRUFBRTtBQUFDeUMsUUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFBMUMsT0FDR3pELFFBQVEsZ0JBQ1AsZ0NBQUMsYUFBRDtBQUFlLE1BQUEsSUFBSSxFQUFFQTtBQUFyQixvQkFDRSxnQ0FBQyx1QkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLGNBRFo7QUFFRSxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU11RCxlQUFlLENBQUNHLDhCQUFhQyxJQUFkLENBQXJCO0FBQUEsT0FGWDtBQUdFLE1BQUEsS0FBSyxFQUFDLGdCQUhSO0FBSUUsTUFBQSxVQUFVLEVBQUMsTUFKYjtBQUtFLE1BQUEsSUFBSSxFQUFFckMsV0FBVyxDQUFDeUIsTUFMcEI7QUFNRSxNQUFBLE1BQU0sRUFBRU8sTUFBTSxDQUFDTSxJQUFQLEtBQWdCRiw4QkFBYUM7QUFOdkMsTUFERixlQVNFLGdDQUFDLHVCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsY0FEWjtBQUVFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTUosZUFBZSxDQUFDRyw4QkFBYUcsWUFBZCxDQUFyQjtBQUFBLE9BRlg7QUFHRSxNQUFBLEtBQUssRUFBQyxpQkFIUjtBQUlFLE1BQUEsVUFBVSxFQUFDLE1BSmI7QUFLRSxNQUFBLElBQUksRUFBRXZDLFdBQVcsQ0FBQzJCLFlBTHBCO0FBTUUsTUFBQSxNQUFNLEVBQUVLLE1BQU0sQ0FBQ00sSUFBUCxLQUFnQkYsOEJBQWFHO0FBTnZDLE1BVEYsZUFpQkUsZ0NBQUMsdUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBQyxnQkFEWjtBQUVFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTU4sZUFBZSxDQUFDRyw4QkFBYUksY0FBZCxDQUFyQjtBQUFBLE9BRlg7QUFHRSxNQUFBLEtBQUssRUFBQyxtQkFIUjtBQUlFLE1BQUEsVUFBVSxFQUFDLE1BSmI7QUFLRSxNQUFBLElBQUksRUFBRXhDLFdBQVcsQ0FBQzZCLFNBTHBCO0FBTUUsTUFBQSxNQUFNLEVBQUVHLE1BQU0sQ0FBQ00sSUFBUCxLQUFnQkYsOEJBQWFJO0FBTnZDLE1BakJGLGVBeUJFLGdDQUFDLHVCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsaUJBRFo7QUFFRSxNQUFBLE9BQU8sRUFBRU4sd0JBRlg7QUFHRSxNQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDYixPQUFQLEdBQWlCLGNBQWpCLEdBQWtDLGNBSDNDO0FBSUUsTUFBQSxVQUFVLEVBQUMsTUFKYjtBQUtFLE1BQUEsSUFBSSxFQUFFYSxNQUFNLENBQUNiLE9BQVAsR0FBaUJuQixXQUFXLENBQUNtQixPQUE3QixHQUF1Q25CLFdBQVcsQ0FBQ3FCO0FBTDNELE1BekJGLENBRE8sR0FrQ0wsSUFuQ04sZUFvQ0UsZ0NBQUMsbUNBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRSxpQkFBQXpDLENBQUMsRUFBSTtBQUNaQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQWtCLFFBQUFBLGlCQUFpQjtBQUNsQixPQUpIO0FBS0UsTUFBQSxNQUFNLEVBQUVyQixRQUxWO0FBTUUsc0JBTkY7QUFPRSxrQkFBUztBQVBYLG9CQVNFLGdDQUFDLFdBQUQsQ0FBYSxPQUFiO0FBQXFCLE1BQUEsTUFBTSxFQUFDO0FBQTVCLE1BVEYsZUFVRSxnQ0FBQyxpQkFBRDtBQUFtQixNQUFBLEVBQUUsRUFBQyxVQUF0QjtBQUFpQyxNQUFBLE9BQU8sRUFBQztBQUF6QyxNQVZGLENBcENGLENBREY7QUFtREQsR0E1RGtCLENBQXJCOztBQStEQXFELEVBQUFBLFlBQVksQ0FBQy9ELFdBQWIsR0FBMkIsY0FBM0I7QUFDQSxTQUFPK0QsWUFBUDtBQUNEOztBQUVELElBQU1VLFdBQVcsZ0JBQUd2RSxrQkFBTUMsSUFBTixDQUNsQixrQkFBZ0Y7QUFBQSxNQUE5RXVFLGdCQUE4RSxVQUE5RUEsZ0JBQThFO0FBQUEsTUFBNURoRSxRQUE0RCxVQUE1REEsUUFBNEQ7QUFBQSxNQUFsRHFCLGlCQUFrRCxVQUFsREEsaUJBQWtEO0FBQUEsTUFBL0I0QyxXQUErQixVQUEvQkEsV0FBK0I7QUFBQSxNQUFsQkMsWUFBa0IsVUFBbEJBLFlBQWtCO0FBQzlFLE1BQU1DLFdBQVcsR0FBRyx3QkFDbEIsVUFBQUMsTUFBTSxFQUFJO0FBQ1JILElBQUFBLFdBQVcsQ0FBQ0csTUFBRCxDQUFYO0FBQ0QsR0FIaUIsRUFJbEIsQ0FBQ0gsV0FBRCxDQUprQixDQUFwQjtBQU9BLE1BQU1JLGFBQWEsR0FBRyx3QkFDcEIsVUFBQW5FLENBQUMsRUFBSTtBQUNIQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQWtCLElBQUFBLGlCQUFpQjtBQUNsQixHQUptQixFQUtwQixDQUFDQSxpQkFBRCxDQUxvQixDQUF0QjtBQU9BLE1BQU1pRCxRQUFRLEdBQUcsd0JBQVksVUFBQUYsTUFBTTtBQUFBLDZCQUFlQSxNQUFmO0FBQUEsR0FBbEIsRUFBMkMsRUFBM0MsQ0FBakI7QUFFQSxzQkFDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUNYLE1BQUFBLFFBQVEsRUFBRTtBQUFYO0FBQVosS0FDR3pELFFBQVEsZ0JBQ1AsZ0NBQUMsYUFBRDtBQUFlLElBQUEsSUFBSSxFQUFFQTtBQUFyQixLQUNHZ0UsZ0JBQWdCLENBQUNPLEdBQWpCLENBQXFCLFVBQUFILE1BQU07QUFBQSx3QkFDMUIsZ0NBQUMsdUJBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRUEsTUFEUDtBQUVFLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTUQsV0FBVyxDQUFDQyxNQUFELENBQWpCO0FBQUEsT0FGWDtBQUdFLE1BQUEsS0FBSyxFQUFFRSxRQUFRLENBQUNGLE1BQUQsQ0FIakI7QUFJRSxNQUFBLE1BQU0sRUFBRUYsWUFBWSxLQUFLRTtBQUozQixNQUQwQjtBQUFBLEdBQTNCLENBREgsQ0FETyxHQVdMLElBWk4sZUFhRSxnQ0FBQyxtQ0FBRDtBQUFrQixJQUFBLE9BQU8sRUFBRUMsYUFBM0I7QUFBMEMsSUFBQSxNQUFNLEVBQUVyRSxRQUFsRDtBQUE0RCxvQkFBNUQ7QUFBcUUsZ0JBQVM7QUFBOUUsS0FDR2tFLFlBQVksQ0FBQ00sV0FBYixFQURILGVBRUUsZ0NBQUMsaUJBQUQ7QUFBbUIsSUFBQSxFQUFFLEVBQUMsUUFBdEI7QUFBK0IsSUFBQSxPQUFPLEVBQUM7QUFBdkMsSUFGRixDQWJGLENBREY7QUFvQkQsQ0F0Q2lCLENBQXBCOztBQXlDQVQsV0FBVyxDQUFDekUsV0FBWixHQUEwQixhQUExQjs7QUFFQSxJQUFNbUYsVUFBVSxnQkFBRyxnQ0FBQyxnQkFBRDtBQUFjLEVBQUEsT0FBTyxFQUFFLEtBQXZCO0FBQThCLEVBQUEsT0FBTyxFQUFDO0FBQXRDLEVBQW5COztBQUNBQyxpQkFBaUIsQ0FBQzNELElBQWxCLEdBQXlCLENBQ3ZCeUIsbUJBRHVCLEVBRXZCUixxQkFGdUIsRUFHdkJULHFCQUh1QixFQUl2QlQscUJBSnVCLENBQXpCOztBQU1BLFNBQVM0RCxpQkFBVCxDQUEyQnJCLFlBQTNCLEVBQXlDbEIsY0FBekMsRUFBeURSLGNBQXpELEVBQXlFUixjQUF6RSxFQUF5RjtBQUFBLE1BQ2pGd0QsVUFEaUY7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdHQWtDckUsVUFBQXZHLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNnRCxNQUFWO0FBQUEsT0FsQ2dFO0FBQUEsaUhBbUM1RCxVQUFBaEQsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ3dHLGNBQVY7QUFBQSxPQW5DdUQ7QUFBQSxrSEFvQzNELDhCQUN4QixNQUFLQyxhQURtQixFQUV4QixNQUFLQyxzQkFGbUIsRUFHeEIsVUFBQzFELE1BQUQsRUFBU3dELGNBQVQ7QUFBQSxlQUNFeEQsTUFBTSxDQUNIMkQsTUFESCxDQUNVLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQWI7QUFBQSxTQURYLEVBRUdYLEdBRkgsQ0FFTyxVQUFBWSxLQUFLO0FBQUEsaUJBQUs7QUFDYnpGLFlBQUFBLEVBQUUsRUFBRXlGLEtBQUssQ0FBQ3pGLEVBREc7QUFFYjBGLFlBQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDRixNQUFOLENBQWFJLEtBRk47QUFHYjtBQUNBSCxZQUFBQSxTQUFTLEVBQUVOLGNBQWMsQ0FBQ08sS0FBSyxDQUFDekYsRUFBUDtBQUpaLFdBQUw7QUFBQSxTQUZaLENBREY7QUFBQSxPQUh3QixDQXBDMkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFrRDVFO0FBQUEsMEJBbUJILEtBQUt0QixLQW5CRjtBQUFBLFlBRUxnRSxVQUZLLGVBRUxBLFVBRks7QUFBQSxZQUdMaEIsTUFISyxlQUdMQSxNQUhLO0FBQUEsWUFJTHdELGNBSkssZUFJTEEsY0FKSztBQUFBLFlBS0xoRCxPQUxLLGVBS0xBLE9BTEs7QUFBQSxZQU1McEIsUUFOSyxlQU1MQSxRQU5LO0FBQUEsWUFPTHFCLFFBUEssZUFPTEEsUUFQSztBQUFBLFlBUUx5RCxXQVJLLGVBUUxBLFdBUks7QUFBQSxZQVNMakQsbUJBVEssZUFTTEEsbUJBVEs7QUFBQSxZQVVMUCxnQkFWSyxlQVVMQSxnQkFWSztBQUFBLFlBV0wvQixnQkFYSyxlQVdMQSxnQkFYSztBQUFBLFlBWUx3RixrQkFaSyxlQVlMQSxrQkFaSztBQUFBLFlBYUxqQyxNQWJLLGVBYUxBLE1BYks7QUFBQSxZQWNML0MsS0FkSyxlQWNMQSxLQWRLO0FBQUEsWUFlTGlGLFFBZkssZUFlTEEsUUFmSztBQUFBLFlBZ0JMcEIsTUFoQkssZUFnQkxBLE1BaEJLO0FBQUEsWUFpQkw1RixHQWpCSyxlQWlCTEEsR0FqQks7QUFBQSxZQWtCTGtDLGFBbEJLLGVBa0JMQSxhQWxCSztBQUFBLG9DQTRCSDRFLFdBNUJHLENBc0JMRyxhQXRCSztBQUFBLFlBc0JMQSxhQXRCSyxzQ0FzQlcsRUF0Qlg7QUFBQSxvQ0E0QkhILFdBNUJHLENBdUJMSSxTQXZCSztBQUFBLFlBdUJMQSxTQXZCSyxzQ0F1Qk8sRUF2QlA7QUFBQSxvQ0E0QkhKLFdBNUJHLENBd0JMSyxRQXhCSztBQUFBLFlBd0JMQSxRQXhCSyxzQ0F3Qk0sRUF4Qk47QUFBQSxvQ0E0QkhMLFdBNUJHLENBeUJMTSxRQXpCSztBQUFBLFlBeUJMQSxRQXpCSyxzQ0F5Qk0sRUF6Qk47QUFBQSxtQ0E0QkhOLFdBNUJHLENBMEJMTyxPQTFCSztBQUFBLFlBMEJMQSxPQTFCSyxxQ0EwQkssRUExQkw7QUFBQSxvQ0E0QkhQLFdBNUJHLENBMkJMUSxTQTNCSztBQUFBLFlBMkJMQSxTQTNCSyxzQ0EyQk8sRUEzQlA7QUE4QlAsNEJBQ0UsZ0NBQUMsZ0JBQUQ7QUFBa0IsVUFBQSxTQUFTLEVBQUMsYUFBNUI7QUFBMEMsVUFBQSxHQUFHLEVBQUV0SDtBQUEvQyxXQUVHb0gsUUFBUSxDQUFDRyxJQUFULElBQWlCUCxRQUFRLEtBQUssSUFBOUIsZ0JBQ0MsZ0NBQUMsV0FBRDtBQUFhLFVBQUEsU0FBUyxFQUFDLFdBQXZCO0FBQW1DLFVBQUEsR0FBRyxFQUFFO0FBQXhDLHdCQUNFLGdDQUFDLGNBQUQ7QUFDRSxVQUFBLE9BQU8sRUFBRTVELE9BRFg7QUFFRSxVQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLFVBQUEsZ0JBQWdCLEVBQUVDO0FBSHBCLFVBREYsQ0FERCxHQVFHLElBVk4sRUFhR0YsT0FBTyxJQUFJNkQsYUFBYSxDQUFDTSxJQUF6QixJQUFpQ1AsUUFBUSxLQUFLLElBQTlDLGdCQUNDLGdDQUFDLFdBQUQ7QUFBYSxVQUFBLFNBQVMsRUFBQyxZQUF2QjtBQUFvQyxVQUFBLEdBQUcsRUFBRTtBQUF6Qyx3QkFDRSxnQ0FBQyxrQkFBRDtBQUNFLFVBQUEsS0FBSyxFQUFFLEtBQUtRLHVCQUFMLENBQTZCLEtBQUs1SCxLQUFsQyxDQURUO0FBRUUsVUFBQSxnQkFBZ0IsRUFBRTJCLGdCQUZwQjtBQUdFLFVBQUEsUUFBUSxFQUFFMEYsYUFBYSxDQUFDUSxNQUgxQjtBQUlFLFVBQUEsZUFBZSxFQUFFO0FBQUEsbUJBQU1WLGtCQUFrQixDQUFDLGVBQUQsQ0FBeEI7QUFBQTtBQUpuQixVQURGLENBREQsR0FTRyxJQXRCTixFQXlCR0ksUUFBUSxDQUFDSSxJQUFULGdCQUNDLGdDQUFDLFdBQUQ7QUFBYSxVQUFBLFNBQVMsRUFBQyxXQUF2QjtBQUFtQyxVQUFBLEdBQUcsRUFBRTtBQUF4Qyx3QkFDRSxnQ0FBQyxjQUFEO0FBQWdCLFVBQUEsVUFBVSxFQUFFM0QsVUFBNUI7QUFBd0MsVUFBQSxtQkFBbUIsRUFBRUM7QUFBN0QsVUFERixDQURELEdBSUcsSUE3Qk4sRUFnQ0dxRCxTQUFTLENBQUNLLElBQVYsZ0JBQ0MsZ0NBQUMsV0FBRDtBQUFhLFVBQUEsU0FBUyxFQUFDLGFBQXZCO0FBQXFDLFVBQUEsR0FBRyxFQUFFO0FBQTFDLHdCQUNFLGdDQUFDLGNBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBRTNFLE1BQU0sQ0FBQzJELE1BQVAsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsbUJBQUlKLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDdEYsRUFBSCxDQUFsQjtBQUFBLFdBQWYsQ0FEVjtBQUVFLFVBQUEsS0FBSyxFQUFFYSxLQUZUO0FBR0UsVUFBQSxRQUFRLEVBQUVDLFFBSFo7QUFJRSxVQUFBLGdCQUFnQixFQUFFVCxnQkFKcEI7QUFLRSxVQUFBLFFBQVEsRUFBRTJGLFNBQVMsQ0FBQ08sTUFMdEI7QUFNRSxVQUFBLGlCQUFpQixFQUFFO0FBQUEsbUJBQU1WLGtCQUFrQixDQUFDLFdBQUQsQ0FBeEI7QUFBQSxXQU5yQjtBQU9FLFVBQUEsWUFBWSxFQUFFRyxTQUFTLENBQUNqRixZQVAxQjtBQVFFLFVBQUEsYUFBYSxFQUFFQztBQVJqQixVQURGLENBREQsR0FhRyxJQTdDTixFQStDR21GLE9BQU8sQ0FBQ0UsSUFBUixnQkFDQyxnQ0FBQyxXQUFEO0FBQWEsVUFBQSxHQUFHLEVBQUU7QUFBbEIsd0JBQ0UsZ0NBQUMsWUFBRDtBQUNFLFVBQUEsUUFBUSxFQUFFRixPQUFPLENBQUNJLE1BQVIsSUFBa0JKLE9BQU8sQ0FBQ0ssY0FBUixLQUEyQnJFLFFBRHpEO0FBRUUsVUFBQSxNQUFNLEVBQUV5QixNQUZWO0FBR0UsVUFBQSxpQkFBaUIsRUFBRTtBQUFBLG1CQUFNaUMsa0JBQWtCLENBQUMsU0FBRCxDQUF4QjtBQUFBLFdBSHJCO0FBSUUsVUFBQSxlQUFlLEVBQUUsS0FBS25ILEtBQUwsQ0FBV21GLGVBSjlCO0FBS0UsVUFBQSx3QkFBd0IsRUFBRSxLQUFLbkYsS0FBTCxDQUFXb0Y7QUFMdkMsVUFERixDQURELEdBVUcsSUF6RE4sRUEyREdzQyxTQUFTLENBQUNDLElBQVYsZ0JBQ0MsZ0NBQUMsV0FBRDtBQUFhLFVBQUEsR0FBRyxFQUFFO0FBQWxCLHdCQUNFLGdDQUFDLFdBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRUQsU0FBUyxDQUFDRyxNQUR0QjtBQUVFLFVBQUEsWUFBWSxFQUFFN0IsTUFGaEI7QUFHRSxVQUFBLGdCQUFnQixFQUFFK0IsTUFBTSxDQUFDQyxJQUFQLENBQVlDLHFCQUFaLENBSHBCO0FBSUUsVUFBQSxXQUFXLEVBQUUsS0FBS2pJLEtBQUwsQ0FBVzZGLFdBSjFCO0FBS0UsVUFBQSxpQkFBaUIsRUFBRTtBQUFBLG1CQUFNc0Isa0JBQWtCLENBQUMsV0FBRCxDQUF4QjtBQUFBO0FBTHJCLFVBREYsQ0FERCxHQVVHLElBckVOLENBREY7QUF5RUQ7QUF6Sm9GO0FBQUE7QUFBQSxJQUM5RGUsZ0JBRDhEOztBQUFBLG1DQUNqRjNCLFVBRGlGLGVBRWxFO0FBQ2pCNEIsSUFBQUEsUUFBUSxFQUFFQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVqQnRFLElBQUFBLFVBQVUsRUFBRW9FLHNCQUFVRyxJQUFWLENBQWVELFVBRlY7QUFHakI5RSxJQUFBQSxPQUFPLEVBQUU0RSxzQkFBVUcsSUFBVixDQUFlRCxVQUhQO0FBSWpCdEYsSUFBQUEsTUFBTSxFQUFFb0Ysc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVQyxNQUE1QixDQUpTO0FBS2pCN0IsSUFBQUEsY0FBYyxFQUFFNEIsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBTGhCO0FBTWpCN0UsSUFBQUEsUUFBUSxFQUFFMkUsc0JBQVVLLE1BQVYsQ0FBaUJILFVBTlY7QUFPakJwQixJQUFBQSxXQUFXLEVBQUVrQixzQkFBVUMsTUFBVixDQUFpQkMsVUFQYjtBQVFqQnJFLElBQUFBLG1CQUFtQixFQUFFbUUsc0JBQVVNLElBQVYsQ0FBZUosVUFSbkI7QUFTakI1RSxJQUFBQSxnQkFBZ0IsRUFBRTBFLHNCQUFVTSxJQUFWLENBQWVKLFVBVGhCO0FBVWpCbkIsSUFBQUEsa0JBQWtCLEVBQUVpQixzQkFBVU0sSUFBVixDQUFlSixVQVZsQjtBQVdqQm5ELElBQUFBLGVBQWUsRUFBRWlELHNCQUFVTSxJQUFWLENBQWVKLFVBWGY7QUFZakJsRCxJQUFBQSx3QkFBd0IsRUFBRWdELHNCQUFVTSxJQUFWLENBQWVKLFVBWnhCO0FBYWpCbEksSUFBQUEsR0FBRyxFQUFFZ0ksc0JBQVVLLE1BQVYsQ0FBaUJILFVBYkw7QUFjakJ6QyxJQUFBQSxXQUFXLEVBQUV1QyxzQkFBVU0sSUFBVixDQUFlSixVQWRYO0FBZWpCdEMsSUFBQUEsTUFBTSxFQUFFb0Msc0JBQVVPLE1BQVYsQ0FBaUJMLFVBZlI7QUFnQmpCaEcsSUFBQUEsYUFBYSxFQUFFOEYsc0JBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1Isc0JBQVVTLE9BQVgsRUFBb0JULHNCQUFVTSxJQUE5QixDQUFwQixDQWhCRTtBQWtCakI7QUFDQXRCLElBQUFBLFFBQVEsRUFBRWdCLHNCQUFVRyxJQW5CSDtBQW9CakJwRyxJQUFBQSxLQUFLLEVBQUVpRyxzQkFBVUssTUFwQkE7QUFxQmpCSyxJQUFBQSxTQUFTLEVBQUVWLHNCQUFVQyxNQXJCSjtBQXNCakJuRCxJQUFBQSxNQUFNLEVBQUVrRCxzQkFBVUM7QUF0QkQsR0FGa0U7QUFBQSxtQ0FDakY5QixVQURpRixrQkEyQi9EO0FBQ3BCL0MsSUFBQUEsT0FBTyxFQUFFLEtBRFc7QUFFcEJwRCxJQUFBQSxHQUFHLEVBQUUsQ0FGZTtBQUdwQnFELElBQUFBLFFBQVEsRUFBRSxDQUhVO0FBSXBCbkIsSUFBQUEsYUFBYSxFQUFFK0Q7QUFKSyxHQTNCK0Q7QUE0SnZGRSxFQUFBQSxVQUFVLENBQUNyRixXQUFYLEdBQXlCLFlBQXpCO0FBRUEsU0FBT3FGLFVBQVA7QUFDRDs7ZUFFY0QsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHtJY29uUm91bmRTbWFsbCwgTWFwQ29udHJvbEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbWFwLWxheWVyLXNlbGVjdG9yJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQge1xuICBDbG9zZSxcbiAgQ3ViZTNkLFxuICBDdXJzb3JDbGljayxcbiAgRGVsZXRlLFxuICBEcmF3UG9seWdvbixcbiAgRXllU2VlbixcbiAgRXllVW5zZWVuLFxuICBMYXllcnMsXG4gIExlZ2VuZCxcbiAgUG9seWdvbixcbiAgUmVjdGFuZ2xlLFxuICBTcGxpdFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgVmVydGljYWxUb29sYmFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3ZlcnRpY2FsLXRvb2xiYXInO1xuaW1wb3J0IFRvb2xiYXJJdGVtIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3Rvb2xiYXItaXRlbSc7XG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ2xvY2FsaXphdGlvbi9sb2NhbGVzJztcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbCA9IHN0eWxlZC5kaXZgXG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wIHx8IDB9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2xfX3BhbmVsLWNvbnRlbnQnXG59KWBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn07XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wud2lkdGh9cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ21hcC1jb250cm9sX19wYW5lbC1oZWFkZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yfTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuYDtcblxuY29uc3QgQWN0aW9uUGFuZWwgPSAoe2NsYXNzTmFtZSwgY2hpbGRyZW59KSA9PiAoXG4gIDxTdHlsZWRNYXBDb250cm9sQWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9TdHlsZWRNYXBDb250cm9sQWN0aW9uPlxuKTtcblxuQWN0aW9uUGFuZWwuZGlzcGxheU5hbWUgPSAnQWN0aW9uUGFuZWwnO1xuXG5jb25zdCBNYXBDb250cm9sVG9vbHRpcCA9IFJlYWN0Lm1lbW8oKHtpZCwgbWVzc2FnZX0pID0+IChcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgIDxzcGFuPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21lc3NhZ2V9IC8+XG4gICAgPC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pKTtcblxuTWFwQ29udHJvbFRvb2x0aXAuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFRvb2x0aXAnO1xuXG5jb25zdCBNYXBMZWdlbmRUb29sdGlwID0gKHtpZCwgbWVzc2FnZX0pID0+IChcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgIDxzcGFuPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21lc3NhZ2V9IC8+XG4gICAgPC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pO1xuXG5jb25zdCBMYXllclNlbGVjdG9yUGFuZWwgPSBSZWFjdC5tZW1vKCh7aXRlbXMsIG9uTWFwVG9nZ2xlTGF5ZXIsIGlzQWN0aXZlLCB0b2dnbGVNZW51UGFuZWx9KSA9PlxuICAhaXNBY3RpdmUgPyAoXG4gICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgIGtleT17MX1cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiB0b2dnbGUtbGF5ZXJcIlxuICAgICAgZGF0YS10aXBcbiAgICAgIGRhdGEtZm9yPVwidG9nZ2xlLWxheWVyXCJcbiAgICA+XG4gICAgICA8TGF5ZXJzIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcbiAgICAgICAgbWVzc2FnZT17aXNBY3RpdmUgPyAndG9vbHRpcC5oaWRlTGF5ZXJQYW5lbCcgOiAndG9vbHRpcC5zaG93TGF5ZXJQYW5lbCd9XG4gICAgICAvPlxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgKSA6IChcbiAgICA8TWFwQ29udHJvbFBhbmVsIGhlYWRlcj1cImhlYWRlci52aXNpYmxlTGF5ZXJzXCIgb25DbGljaz17dG9nZ2xlTWVudVBhbmVsfT5cbiAgICAgIDxNYXBMYXllclNlbGVjdG9yIGxheWVycz17aXRlbXN9IG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9IC8+XG4gICAgPC9NYXBDb250cm9sUGFuZWw+XG4gIClcbik7XG5cbkxheWVyU2VsZWN0b3JQYW5lbC5kaXNwbGF5TmFtZSA9ICdMYXllclNlbGVjdG9yUGFuZWwnO1xuXG5jb25zdCBNYXBDb250cm9sUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAoe2NoaWxkcmVuLCBoZWFkZXIsIG9uQ2xpY2ssIHNjYWxlID0gMSwgaXNFeHBvcnQsIGRpc2FibGVDbG9zZSA9IGZhbHNlLCBsb2dvQ29tcG9uZW50fSkgPT4gKFxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KWAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCdcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cbiAgICAgICAge2lzRXhwb3J0ICYmIGxvZ29Db21wb25lbnQgPyAoXG4gICAgICAgICAgbG9nb0NvbXBvbmVudFxuICAgICAgICApIDogaGVhZGVyID8gKFxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtoZWFkZXJ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2lzRXhwb3J0ID8gbnVsbCA6IChcbiAgICAgICAgICA8SWNvblJvdW5kU21hbGwgY2xhc3NOYW1lPVwiY2xvc2UtbWFwLWNvbnRyb2wtaXRlbVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgPENsb3NlIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgIDwvSWNvblJvdW5kU21hbGw+XG4gICAgICAgICl9XG4gICAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cbiAgICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+XG4gICAgPC9TdHlsZWRNYXBDb250cm9sUGFuZWw+XG4gIClcbik7XG5cbk1hcENvbnRyb2xQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sUGFuZWwnO1xuXG5NYXBMZWdlbmRQYW5lbEZhY3RvcnkuZGVwcyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIE1hcExlZ2VuZFBhbmVsRmFjdG9yeSgpIHtcbiAgY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICAgIGxlZ2VuZDogTGVnZW5kXG4gIH07XG4gIGNvbnN0IE1hcExlZ2VuZFBhbmVsID0gKHtcbiAgICBsYXllcnMsXG4gICAgaXNBY3RpdmUsXG4gICAgc2NhbGUsXG4gICAgb25Ub2dnbGVNZW51UGFuZWwsXG4gICAgaXNFeHBvcnQsXG4gICAgZGlzYWJsZUNsb3NlLFxuICAgIGxvZ29Db21wb25lbnQsXG4gICAgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnNcbiAgfSkgPT5cbiAgICAhaXNBY3RpdmUgPyAoXG4gICAgICA8TWFwQ29udHJvbEJ1dHRvblxuICAgICAgICBrZXk9ezJ9XG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPVwic2hvdy1sZWdlbmRcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc2hvdy1sZWdlbmRcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWwoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGFjdGlvbkljb25zLmxlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgPE1hcExlZ2VuZFRvb2x0aXAgaWQ9XCJzaG93LWxlZ2VuZFwiIG1lc3NhZ2U9eyd0b29sdGlwLnNob3dMZWdlbmQnfSAvPlxuICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgICkgOiAoXG4gICAgICA8TWFwQ29udHJvbFBhbmVsXG4gICAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgICAgaGVhZGVyPXsnaGVhZGVyLmxheWVyTGVnZW5kJ31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVNZW51UGFuZWx9XG4gICAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICAgICAgZGlzYWJsZUNsb3NlPXtkaXNhYmxlQ2xvc2V9XG4gICAgICAgIGxvZ29Db21wb25lbnQ9e2xvZ29Db21wb25lbnR9XG4gICAgICA+XG4gICAgICAgIDxNYXBMZWdlbmQgbGF5ZXJzPXtsYXllcnN9IC8+XG4gICAgICA8L01hcENvbnRyb2xQYW5lbD5cbiAgICApO1xuXG4gIE1hcExlZ2VuZFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XG4gIHJldHVybiBNYXBMZWdlbmRQYW5lbDtcbn1cblNwbGl0TWFwQnV0dG9uRmFjdG9yeS5kZXBzID0gW107XG5leHBvcnQgZnVuY3Rpb24gU3BsaXRNYXBCdXR0b25GYWN0b3J5KCkge1xuICBjb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gICAgZGVsZXRlOiBEZWxldGUsXG4gICAgc3BsaXQ6IFNwbGl0XG4gIH07XG4gIGNvbnN0IFNwbGl0TWFwQnV0dG9uID0gUmVhY3QubWVtbyhcbiAgICAoe2lzU3BsaXQsIG1hcEluZGV4LCBvblRvZ2dsZVNwbGl0TWFwLCBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc30pID0+IChcbiAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgIGFjdGl2ZT17aXNTcGxpdH1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXAoaXNTcGxpdCA/IG1hcEluZGV4IDogdW5kZWZpbmVkKTtcbiAgICAgICAgfX1cbiAgICAgICAga2V5PXtgc3BsaXQtJHtpc1NwbGl0fWB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWNvbnRyb2wtYnV0dG9uJywgJ3NwbGl0LW1hcCcsIHsnY2xvc2UtbWFwJzogaXNTcGxpdH0pfVxuICAgICAgICBkYXRhLXRpcFxuICAgICAgICBkYXRhLWZvcj1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgPlxuICAgICAgICB7aXNTcGxpdCA/IDxhY3Rpb25JY29ucy5kZWxldGUgaGVpZ2h0PVwiMThweFwiIC8+IDogPGFjdGlvbkljb25zLnNwbGl0IGhlaWdodD1cIjE4cHhcIiAvPn1cbiAgICAgICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICAgICAgaWQ9XCJhY3Rpb24tdG9nZ2xlXCJcbiAgICAgICAgICBtZXNzYWdlPXtpc1NwbGl0ID8gJ3Rvb2x0aXAuY2xvc2VQYW5lbCcgOiAndG9vbHRpcC5zd2l0Y2hUb0R1YWxWaWV3J31cbiAgICAgICAgLz5cbiAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICApXG4gICk7XG5cbiAgU3BsaXRNYXBCdXR0b24uZGlzcGxheU5hbWUgPSAnU3BsaXRNYXBCdXR0b24nO1xuICByZXR1cm4gU3BsaXRNYXBCdXR0b247XG59XG5Ub2dnbGUzZEJ1dHRvbkZhY3RvcnkuZGVwcyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZTNkQnV0dG9uRmFjdG9yeSgpIHtcbiAgY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICAgIGN1YmU6IEN1YmUzZFxuICB9O1xuICBjb25zdCBUb2dnbGUzZEJ1dHRvbiA9IFJlYWN0Lm1lbW8oXG4gICAgKHtkcmFnUm90YXRlLCBvblRvZ2dsZVBlcnNwZWN0aXZlLCBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc30pID0+IChcbiAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlKCk7XG4gICAgICAgIH19XG4gICAgICAgIGFjdGl2ZT17ZHJhZ1JvdGF0ZX1cbiAgICAgICAgZGF0YS10aXBcbiAgICAgICAgZGF0YS1mb3I9XCJhY3Rpb24tM2RcIlxuICAgICAgPlxuICAgICAgICA8YWN0aW9uSWNvbnMuY3ViZSBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICAgICAgaWQ9XCJhY3Rpb24tM2RcIlxuICAgICAgICAgIG1lc3NhZ2U9e2RyYWdSb3RhdGUgPyAndG9vbHRpcC5kaXNhYmxlM0RNYXAnIDogJ3Rvb2x0aXAuM0RNYXAnfVxuICAgICAgICAvPlxuICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgIClcbiAgKTtcblxuICBUb2dnbGUzZEJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdUb2dnbGUzZEJ1dHRvbic7XG4gIHJldHVybiBUb2dnbGUzZEJ1dHRvbjtcbn1cbmNvbnN0IFN0eWxlZFRvb2xiYXIgPSBzdHlsZWQoVmVydGljYWxUb29sYmFyKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzJweDtcbmA7XG5cbk1hcERyYXdQYW5lbEZhY3RvcnkuZGVwcyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIE1hcERyYXdQYW5lbEZhY3RvcnkoKSB7XG4gIGNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgICB2aXNpYmxlOiBFeWVTZWVuLFxuICAgIGhpZGRlbjogRXllVW5zZWVuLFxuICAgIHBvbHlnb246IERyYXdQb2x5Z29uLFxuICAgIGN1cnNvcjogQ3Vyc29yQ2xpY2ssXG4gICAgaW5uZXJQb2x5Z29uOiBQb2x5Z29uLFxuICAgIHJlY3RhbmdsZTogUmVjdGFuZ2xlXG4gIH07XG4gIGNvbnN0IE1hcERyYXdQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICAgKHtcbiAgICAgIGVkaXRvcixcbiAgICAgIGlzQWN0aXZlLFxuICAgICAgb25Ub2dnbGVNZW51UGFuZWwsXG4gICAgICBvblNldEVkaXRvck1vZGUsXG4gICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHksXG4gICAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICAgIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWRyYXctY29udHJvbHNcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17aXNBY3RpdmV9PlxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWZlYXR1cmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRURJVCl9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnNlbGVjdFwiXG4gICAgICAgICAgICAgICAgaWNvbkhlaWdodD1cIjIycHhcIlxuICAgICAgICAgICAgICAgIGljb249e2FjdGlvbkljb25zLmN1cnNvcn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRURJVH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1mZWF0dXJlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTil9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnBvbHlnb25cIlxuICAgICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICBpY29uPXthY3Rpb25JY29ucy5pbm5lclBvbHlnb259XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRFJBV19SRUNUQU5HTEUpfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICBpY29uPXthY3Rpb25JY29ucy5yZWN0YW5nbGV9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkRSQVdfUkVDVEFOR0xFfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGUtZmVhdHVyZXNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAgICAgICBsYWJlbD17ZWRpdG9yLnZpc2libGUgPyAndG9vbGJhci5oaWRlJyA6ICd0b29sYmFyLnNob3cnfVxuICAgICAgICAgICAgICAgIGljb25IZWlnaHQ9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICBpY29uPXtlZGl0b3IudmlzaWJsZSA/IGFjdGlvbkljb25zLnZpc2libGUgOiBhY3Rpb25JY29ucy5oaWRkZW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1N0eWxlZFRvb2xiYXI+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgICBkYXRhLWZvcj1cIm1hcC1kcmF3XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWN0aW9uSWNvbnMucG9seWdvbiBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cIm1hcC1kcmF3XCIgbWVzc2FnZT1cInRvb2x0aXAuRHJhd09uTWFwXCIgLz5cbiAgICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgTWFwRHJhd1BhbmVsLmRpc3BsYXlOYW1lID0gJ01hcERyYXdQYW5lbCc7XG4gIHJldHVybiBNYXBEcmF3UGFuZWw7XG59XG5cbmNvbnN0IExvY2FsZVBhbmVsID0gUmVhY3QubWVtbyhcbiAgKHthdmFpbGFibGVMb2NhbGVzLCBpc0FjdGl2ZSwgb25Ub2dnbGVNZW51UGFuZWwsIG9uU2V0TG9jYWxlLCBhY3RpdmVMb2NhbGV9KSA9PiB7XG4gICAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAgIGxvY2FsZSA9PiB7XG4gICAgICAgIG9uU2V0TG9jYWxlKGxvY2FsZSk7XG4gICAgICB9LFxuICAgICAgW29uU2V0TG9jYWxlXVxuICAgICk7XG5cbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soXG4gICAgICBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgfSxcbiAgICAgIFtvblRvZ2dsZU1lbnVQYW5lbF1cbiAgICApO1xuICAgIGNvbnN0IGdldExhYmVsID0gdXNlQ2FsbGJhY2sobG9jYWxlID0+IGB0b29sYmFyLiR7bG9jYWxlfWAsIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgIDxTdHlsZWRUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cbiAgICAgICAgICAgIHthdmFpbGFibGVMb2NhbGVzLm1hcChsb2NhbGUgPT4gKFxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSXRlbShsb2NhbGUpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRMYWJlbChsb2NhbGUpfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlTG9jYWxlID09PSBsb2NhbGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0eWxlZFRvb2xiYXI+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8TWFwQ29udHJvbEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufSBhY3RpdmU9e2lzQWN0aXZlfSBkYXRhLXRpcCBkYXRhLWZvcj1cImxvY2FsZVwiPlxuICAgICAgICAgIHthY3RpdmVMb2NhbGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXAgaWQ9XCJsb2NhbGVcIiBtZXNzYWdlPVwidG9vbHRpcC5zZWxlY3RMb2NhbGVcIiAvPlxuICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5Mb2NhbGVQYW5lbC5kaXNwbGF5TmFtZSA9ICdMb2NhbGVQYW5lbCc7XG5cbmNvbnN0IExlZ2VuZExvZ28gPSA8S2VwbGVyR2xMb2dvIHZlcnNpb249e2ZhbHNlfSBhcHBOYW1lPVwia2VwbGVyLmdsXCIgLz47XG5NYXBDb250cm9sRmFjdG9yeS5kZXBzID0gW1xuICBNYXBEcmF3UGFuZWxGYWN0b3J5LFxuICBUb2dnbGUzZEJ1dHRvbkZhY3RvcnksXG4gIFNwbGl0TWFwQnV0dG9uRmFjdG9yeSxcbiAgTWFwTGVnZW5kUGFuZWxGYWN0b3J5XG5dO1xuZnVuY3Rpb24gTWFwQ29udHJvbEZhY3RvcnkoTWFwRHJhd1BhbmVsLCBUb2dnbGUzZEJ1dHRvbiwgU3BsaXRNYXBCdXR0b24sIE1hcExlZ2VuZFBhbmVsKSB7XG4gIGNsYXNzIE1hcENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgZHJhZ1JvdGF0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGlzU3BsaXQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgbGF5ZXJzVG9SZW5kZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBtYXBDb250cm9sczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlU3BsaXRNYXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblRvZ2dsZU1hcENvbnRyb2w6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblNldEVkaXRvck1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG9uU2V0TG9jYWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsb2dvQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgICAgLy8gb3B0aW9uYWxcbiAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFwTGF5ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZWRpdG9yOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBpc1NwbGl0OiBmYWxzZSxcbiAgICAgIHRvcDogMCxcbiAgICAgIG1hcEluZGV4OiAwLFxuICAgICAgbG9nb0NvbXBvbmVudDogTGVnZW5kTG9nb1xuICAgIH07XG5cbiAgICBsYXllclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzO1xuICAgIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnNUb1JlbmRlcjtcbiAgICBsYXllclBhbmVsSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllclNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxuICAgICAgKGxheWVycywgbGF5ZXJzVG9SZW5kZXIpID0+XG4gICAgICAgIGxheWVyc1xuICAgICAgICAgIC5maWx0ZXIobCA9PiBsLmNvbmZpZy5pc1Zpc2libGUpXG4gICAgICAgICAgLm1hcChsYXllciA9PiAoe1xuICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgbmFtZTogbGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgICAgICAgICAgLy8gbGF5ZXJcbiAgICAgICAgICAgIGlzVmlzaWJsZTogbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdXG4gICAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZHJhZ1JvdGF0ZSxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllcnNUb1JlbmRlcixcbiAgICAgICAgaXNTcGxpdCxcbiAgICAgICAgaXNFeHBvcnQsXG4gICAgICAgIG1hcEluZGV4LFxuICAgICAgICBtYXBDb250cm9scyxcbiAgICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSxcbiAgICAgICAgb25Ub2dnbGVTcGxpdE1hcCxcbiAgICAgICAgb25NYXBUb2dnbGVMYXllcixcbiAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sLFxuICAgICAgICBlZGl0b3IsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICB0b3AsXG4gICAgICAgIGxvZ29Db21wb25lbnRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpc2libGVMYXllcnMgPSB7fSxcbiAgICAgICAgbWFwTGVnZW5kID0ge30sXG4gICAgICAgIHRvZ2dsZTNkID0ge30sXG4gICAgICAgIHNwbGl0TWFwID0ge30sXG4gICAgICAgIG1hcERyYXcgPSB7fSxcbiAgICAgICAgbWFwTG9jYWxlID0ge31cbiAgICAgIH0gPSBtYXBDb250cm9scztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1hcENvbnRyb2wgY2xhc3NOYW1lPVwibWFwLWNvbnRyb2xcIiB0b3A9e3RvcH0+XG4gICAgICAgICAgey8qIFNwbGl0IE1hcCAqL31cbiAgICAgICAgICB7c3BsaXRNYXAuc2hvdyAmJiByZWFkT25seSAhPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJzcGxpdC1tYXBcIiBrZXk9ezB9PlxuICAgICAgICAgICAgICA8U3BsaXRNYXBCdXR0b25cbiAgICAgICAgICAgICAgICBpc1NwbGl0PXtpc1NwbGl0fVxuICAgICAgICAgICAgICAgIG1hcEluZGV4PXttYXBJbmRleH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwPXtvblRvZ2dsZVNwbGl0TWFwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBNYXAgTGF5ZXJzICovfVxuICAgICAgICAgIHtpc1NwbGl0ICYmIHZpc2libGVMYXllcnMuc2hvdyAmJiByZWFkT25seSAhPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJtYXAtbGF5ZXJzXCIga2V5PXsxfT5cbiAgICAgICAgICAgICAgPExheWVyU2VsZWN0b3JQYW5lbFxuICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLmxheWVyUGFuZWxJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3Zpc2libGVMYXllcnMuYWN0aXZlfVxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCd2aXNpYmxlTGF5ZXJzJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIDNEIE1hcCAqL31cbiAgICAgICAgICB7dG9nZ2xlM2Quc2hvdyA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJ0b2dnbGUtM2RcIiBrZXk9ezJ9PlxuICAgICAgICAgICAgICA8VG9nZ2xlM2RCdXR0b24gZHJhZ1JvdGF0ZT17ZHJhZ1JvdGF0ZX0gb25Ub2dnbGVQZXJzcGVjdGl2ZT17b25Ub2dnbGVQZXJzcGVjdGl2ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogTWFwIExlZ2VuZCAqL31cbiAgICAgICAgICB7bWFwTGVnZW5kLnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwic2hvdy1sZWdlbmRcIiBrZXk9ezN9PlxuICAgICAgICAgICAgICA8TWFwTGVnZW5kUGFuZWxcbiAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVycy5maWx0ZXIobCA9PiBsYXllcnNUb1JlbmRlcltsLmlkXSl9XG4gICAgICAgICAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICAgICAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBMZWdlbmQuYWN0aXZlfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExlZ2VuZCcpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVDbG9zZT17bWFwTGVnZW5kLmRpc2FibGVDbG9zZX1cbiAgICAgICAgICAgICAgICBsb2dvQ29tcG9uZW50PXtsb2dvQ29tcG9uZW50fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHttYXBEcmF3LnNob3cgPyAoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXs0fT5cbiAgICAgICAgICAgICAgPE1hcERyYXdQYW5lbFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBEcmF3LmFjdGl2ZSAmJiBtYXBEcmF3LmFjdGl2ZU1hcEluZGV4ID09PSBtYXBJbmRleH1cbiAgICAgICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCdtYXBEcmF3Jyl9XG4gICAgICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt0aGlzLnByb3BzLm9uU2V0RWRpdG9yTW9kZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk9e3RoaXMucHJvcHMub25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHttYXBMb2NhbGUuc2hvdyA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBrZXk9ezV9PlxuICAgICAgICAgICAgICA8TG9jYWxlUGFuZWxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17bWFwTG9jYWxlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICBhY3RpdmVMb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICBhdmFpbGFibGVMb2NhbGVzPXtPYmplY3Qua2V5cyhMT0NBTEVfQ09ERVMpfVxuICAgICAgICAgICAgICAgIG9uU2V0TG9jYWxlPXt0aGlzLnByb3BzLm9uU2V0TG9jYWxlfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExvY2FsZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRNYXBDb250cm9sPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBNYXBDb250cm9sLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2wnO1xuXG4gIHJldHVybiBNYXBDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sRmFjdG9yeTtcbiJdfQ==