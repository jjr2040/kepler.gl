"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _exportUtils = require("../utils/export-utils");

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

var _dataUtils = require("../utils/data-utils");

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right,\n  .mapbox-attribution-container {\n    display: none;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CLASS_FILTER = ['mapboxgl-control-container', 'attrition-link', 'attrition-logo'];

var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  return !CLASS_FILTER.includes(node.className);
};

var OUT_OF_SCREEN_POSITION = -9999;
var propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  exportImageSetting: _propTypes["default"].object.isRequired,
  addNotification: _propTypes["default"].func.isRequired,
  mapFields: _propTypes["default"].object.isRequired,
  setExportImageSetting: _propTypes["default"].object.isRequired,
  setExportImageDataUri: _propTypes["default"].func.isRequired,
  setExportImageError: _propTypes["default"].func.isRequired,
  splitMaps: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
PlotContainerFactory.deps = [_mapContainer["default"]]; // Remove mapbox logo in exported map, because it contains non-ascii characters

var StyledPlotContainer = _styledComponents["default"].div(_templateObject(), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);

var StyledMapContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var deckGlProps = {
  glOptions: {
    preserveDrawingBuffer: true,
    useDevicePixels: false
  }
};

function PlotContainerFactory(MapContainer) {
  var PlotContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    var _super = _createSuper(PlotContainer);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "plottingAreaRef", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapScaleSelector", function (props) {
        var imageSize = props.exportImageSetting.imageSize;
        var mapState = props.mapFields.mapState;

        if (imageSize.scale) {
          return imageSize.scale;
        }

        var scale = (0, _exportUtils.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
        return scale > 0 ? scale : 1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.mapScaleSelector, function (mapStyle, scale) {
        return _objectSpread(_objectSpread({}, mapStyle), {}, {
          bottomMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
          topMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef.current) {
          (0, _exportUtils.convertToPng)(_this.plottingAreaRef.current, {
            filter: DOM_FILTER_FUNC
          }).then(_this.props.setExportImageDataUri)["catch"](function (err) {
            _this.props.setExportImageError(err);

            if (_this.props.enableErrorNotification) {
              _this.props.addNotification((0, _notificationsUtils.exportImageError)({
                err: err
              }));
            }
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      _this._retrieveNewScreenshot = (0, _lodash["default"])(_this._retrieveNewScreenshot, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.setExportImageSetting({
          processing: true
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== prevProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this.props.setExportImageSetting({
            processing: true
          });

          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields,
            splitMaps = _this$props.splitMaps;
        var _exportImageSetting$i = exportImageSetting.imageSize,
            imageSize = _exportImageSetting$i === void 0 ? {} : _exportImageSetting$i,
            legend = exportImageSetting.legend;
        var mapState = mapFields.mapState;
        var isSplit = splitMaps && splitMaps.length > 1;
        var size = {
          width: imageSize.imageW || 1,
          height: imageSize.imageH || 1
        };
        var bounds = (0, _dataUtils.findMapBounds)(mapFields.layers);
        var width = size.width / (isSplit ? 2 : 1);
        var height = size.height;
        var scale = this.mapScaleSelector(this.props);

        var newMapState = _objectSpread(_objectSpread({}, mapState), {}, {
          width: width,
          height: height,
          zoom: mapState.zoom + (Math.log2(scale) || 0)
        });

        if (exportImageSetting.center) {
          var getViewport = function getViewport(shouldCenter) {
            if (shouldCenter) {
              var _geoViewport$viewport = _geoViewport["default"].viewport(bounds, [width, height]),
                  _zoom = _geoViewport$viewport.zoom; // center being calculated by geo-vieweport.viewport has a complex logic that
              // projects and then unprojects the coordinates to determine the center
              // Calculating a simple average instead as that is the expected behavior in most of cases


              var _center = [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];
              return {
                center: _center,
                zoom: _zoom
              };
            }

            return {
              center: [mapState.longitude, mapState.latitude],
              zoom: mapState.zoom
            };
          };

          var _getViewport = getViewport(exportImageSetting.center),
              center = _getViewport.center,
              zoom = _getViewport.zoom;

          newMapState.longitude = center[0];
          newMapState.latitude = center[1];
          newMapState.zoom = zoom + Number(Math.log2(scale) || 0);
        }

        var mapProps = _objectSpread(_objectSpread({}, mapFields), {}, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: newMapState,
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap,
          onMapRender: this._onMapRender,
          isExport: true,
          deckGlProps: deckGlProps
        });

        var mapContainers = !isSplit ? /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0
        }, mapProps)) : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapProps, {
            mapLayers: splitMaps[index].layers
          }));
        });
        return /*#__PURE__*/_react["default"].createElement(StyledPlotContainer, {
          className: "export-map-instance"
        }, /*#__PURE__*/_react["default"].createElement(StyledMapContainer, {
          ref: this.plottingAreaRef,
          width: size.width,
          height: size.height
        }, mapContainers));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  PlotContainer.propsTypes = propTypes;
  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3Bsb3QtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNMQVNTX0ZJTFRFUiIsIkRPTV9GSUxURVJfRlVOQyIsIm5vZGUiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIk9VVF9PRl9TQ1JFRU5fUE9TSVRJT04iLCJwcm9wVHlwZXMiLCJ3aWR0aCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJoZWlnaHQiLCJleHBvcnRJbWFnZVNldHRpbmciLCJvYmplY3QiLCJhZGROb3RpZmljYXRpb24iLCJmdW5jIiwibWFwRmllbGRzIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsInNwbGl0TWFwcyIsImFycmF5T2YiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiU3R5bGVkUGxvdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZE1hcENvbnRhaW5lciIsInByb3BzIiwiZGVja0dsUHJvcHMiLCJnbE9wdGlvbnMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJ1c2VEZXZpY2VQaXhlbHMiLCJNYXBDb250YWluZXIiLCJQbG90Q29udGFpbmVyIiwibWFwU3R5bGUiLCJpbWFnZVNpemUiLCJtYXBTdGF0ZSIsInNjYWxlIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaXNTcGxpdCIsIm1hcFN0eWxlU2VsZWN0b3IiLCJtYXBTY2FsZVNlbGVjdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJ0b3BNYXBTdHlsZSIsIm1hcCIsImlzU3R5bGVMb2FkZWQiLCJfcmV0cmlldmVOZXdTY3JlZW5zaG90IiwicGxvdHRpbmdBcmVhUmVmIiwiY3VycmVudCIsImZpbHRlciIsInRoZW4iLCJlcnIiLCJlbmFibGVFcnJvck5vdGlmaWNhdGlvbiIsIl9vbk1hcFJlbmRlciIsInByb2Nlc3NpbmciLCJwcmV2UHJvcHMiLCJjaGVja3MiLCJzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QiLCJzb21lIiwiaXRlbSIsImxlZ2VuZCIsImxlbmd0aCIsInNpemUiLCJib3VuZHMiLCJsYXllcnMiLCJuZXdNYXBTdGF0ZSIsInpvb20iLCJNYXRoIiwibG9nMiIsImNlbnRlciIsImdldFZpZXdwb3J0Iiwic2hvdWxkQ2VudGVyIiwiZ2VvVmlld3BvcnQiLCJ2aWV3cG9ydCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiTnVtYmVyIiwibWFwUHJvcHMiLCJzY2FsZWRNYXBTdHlsZVNlbGVjdG9yIiwibWFwQ29udHJvbHMiLCJtYXBMZWdlbmQiLCJzaG93IiwiYWN0aXZlIiwiTWFwQ29tcG9uZW50IiwiU3RhdGljTWFwIiwib25NYXBSZW5kZXIiLCJpc0V4cG9ydCIsIm1hcENvbnRhaW5lcnMiLCJzZXR0aW5ncyIsImluZGV4IiwiQ29tcG9uZW50IiwicHJvcHNUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxDQUFDLDRCQUFELEVBQStCLGdCQUEvQixFQUFpRCxnQkFBakQsQ0FBckI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxJQUFJO0FBQUEsU0FBSSxDQUFDRixZQUFZLENBQUNHLFFBQWIsQ0FBc0JELElBQUksQ0FBQ0UsU0FBM0IsQ0FBTDtBQUFBLENBQTVCOztBQUNBLElBQU1DLHNCQUFzQixHQUFHLENBQUMsSUFBaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLE1BQU0sRUFBRUgsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlQ7QUFHaEJF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QUFDLGtCQUFEO0FBQW9CLFVBQUEsR0FBRyxFQUFFLEtBQUtqQixlQUE5QjtBQUErQyxVQUFBLEtBQUssRUFBRWUsSUFBSSxDQUFDMUQsS0FBM0Q7QUFBa0UsVUFBQSxNQUFNLEVBQUUwRCxJQUFJLENBQUN0RDtBQUEvRSxXQUNHK0UsYUFESCxDQURGLENBREY7QUFPRDtBQTNKc0Q7QUFBQTtBQUFBLElBQzdCRyxnQkFENkI7O0FBOEp6RDFELEVBQUFBLGFBQWEsQ0FBQzJELFVBQWQsR0FBMkJ4RixTQUEzQjtBQUNBLFNBQU82QixhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyBsaWJyYXJpZXNcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1N0YXRpY01hcH0gZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHtleHBvcnRJbWFnZUVycm9yfSBmcm9tICd1dGlscy9ub3RpZmljYXRpb25zLXV0aWxzJztcbmltcG9ydCBNYXBDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XG5pbXBvcnQge2NvbnZlcnRUb1BuZ30gZnJvbSAndXRpbHMvZXhwb3J0LXV0aWxzJztcbmltcG9ydCB7c2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbn0gZnJvbSAndXRpbHMvbWFwLXN0eWxlLXV0aWxzL21hcGJveC1nbC1zdHlsZS1lZGl0b3InO1xuaW1wb3J0IHtnZXRTY2FsZUZyb21JbWFnZVNpemV9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XG5pbXBvcnQge2ZpbmRNYXBCb3VuZHN9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IGdlb1ZpZXdwb3J0IGZyb20gJ0BtYXBib3gvZ2VvLXZpZXdwb3J0JztcblxuY29uc3QgQ0xBU1NfRklMVEVSID0gWydtYXBib3hnbC1jb250cm9sLWNvbnRhaW5lcicsICdhdHRyaXRpb24tbGluaycsICdhdHRyaXRpb24tbG9nbyddO1xuY29uc3QgRE9NX0ZJTFRFUl9GVU5DID0gbm9kZSA9PiAhQ0xBU1NfRklMVEVSLmluY2x1ZGVzKG5vZGUuY2xhc3NOYW1lKTtcbmNvbnN0IE9VVF9PRl9TQ1JFRU5fUE9TSVRJT04gPSAtOTk5OTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXhwb3J0SW1hZ2VTZXR0aW5nOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFkZE5vdGlmaWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWFwRmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNldEV4cG9ydEltYWdlU2V0dGluZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXRFeHBvcnRJbWFnZURhdGFVcmk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldEV4cG9ydEltYWdlRXJyb3I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNwbGl0TWFwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn07XG5cblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeV07XG5cbi8vIFJlbW92ZSBtYXBib3ggbG9nbyBpbiBleHBvcnRlZCBtYXAsIGJlY2F1c2UgaXQgY29udGFpbnMgbm9uLWFzY2lpIGNoYXJhY3RlcnNcbmNvbnN0IFN0eWxlZFBsb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCxcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG4gIGxlZnQ6ICR7T1VUX09GX1NDUkVFTl9QT1NJVElPTn1weDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgZGVja0dsUHJvcHMgPSB7XG4gIGdsT3B0aW9uczoge1xuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICB1c2VEZXZpY2VQaXhlbHM6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsb3RDb250YWluZXJGYWN0b3J5KE1hcENvbnRhaW5lcikge1xuICBjbGFzcyBQbG90Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5fb25NYXBSZW5kZXIgPSBkZWJvdW5jZSh0aGlzLl9vbk1hcFJlbmRlciwgNTAwKTtcbiAgICAgIHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCA9IGRlYm91bmNlKHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCwgNTAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nKHtwcm9jZXNzaW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gcmUtZmV0Y2ggdGhlIG5ldyBzY3JlZW5zaG90IG9ubHkgd2hlbiByYXRpbyBsZWdlbmQgb3IgcmVzb2x1dGlvbiBjaGFuZ2VzXG4gICAgICBjb25zdCBjaGVja3MgPSBbJ3JhdGlvJywgJ3Jlc29sdXRpb24nLCAnbGVnZW5kJ107XG4gICAgICBjb25zdCBzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QgPSBjaGVja3Muc29tZShcbiAgICAgICAgaXRlbSA9PiB0aGlzLnByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXSAhPT0gcHJldlByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXVxuICAgICAgKTtcbiAgICAgIGlmIChzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBvcnRJbWFnZVNldHRpbmcoe3Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxvdHRpbmdBcmVhUmVmID0gY3JlYXRlUmVmKCk7XG5cbiAgICBtYXBTdHlsZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwRmllbGRzLm1hcFN0eWxlO1xuICAgIG1hcFNjYWxlU2VsZWN0b3IgPSBwcm9wcyA9PiB7XG4gICAgICBjb25zdCB7aW1hZ2VTaXplfSA9IHByb3BzLmV4cG9ydEltYWdlU2V0dGluZztcbiAgICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBwcm9wcy5tYXBGaWVsZHM7XG4gICAgICBpZiAoaW1hZ2VTaXplLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZVNpemUuc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBtYXBTdGF0ZS53aWR0aCAqIChtYXBTdGF0ZS5pc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzY2FsZSA+IDAgPyBzY2FsZSA6IDE7XG4gICAgfTtcblxuICAgIHNjYWxlZE1hcFN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubWFwU3R5bGVTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwU2NhbGVTZWxlY3RvcixcbiAgICAgIChtYXBTdHlsZSwgc2NhbGUpID0+ICh7XG4gICAgICAgIC4uLm1hcFN0eWxlLFxuICAgICAgICBib3R0b21NYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSwgc2NhbGUpLFxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfb25NYXBSZW5kZXIgPSBtYXAgPT4ge1xuICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCwge2ZpbHRlcjogRE9NX0ZJTFRFUl9GVU5DfSlcbiAgICAgICAgICAudGhlbih0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRGF0YVVyaSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VFcnJvcihlcnIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlRXJyb3JOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGROb3RpZmljYXRpb24oZXhwb3J0SW1hZ2VFcnJvcih7ZXJyfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHMsIHNwbGl0TWFwc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ltYWdlU2l6ZSA9IHt9LCBsZWdlbmR9ID0gZXhwb3J0SW1hZ2VTZXR0aW5nO1xuICAgICAgY29uc3Qge21hcFN0YXRlfSA9IG1hcEZpZWxkcztcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG5cbiAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBpbWFnZVNpemUuaW1hZ2VXIHx8IDEsXG4gICAgICAgIGhlaWdodDogaW1hZ2VTaXplLmltYWdlSCB8fCAxXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBib3VuZHMgPSBmaW5kTWFwQm91bmRzKG1hcEZpZWxkcy5sYXllcnMpO1xuICAgICAgY29uc3Qgd2lkdGggPSBzaXplLndpZHRoIC8gKGlzU3BsaXQgPyAyIDogMSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5tYXBTY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbmV3TWFwU3RhdGUgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB6b29tOiBtYXBTdGF0ZS56b29tICsgKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgIH07XG5cbiAgICAgIGlmIChleHBvcnRJbWFnZVNldHRpbmcuY2VudGVyKSB7XG4gICAgICAgIGNvbnN0IGdldFZpZXdwb3J0ID0gc2hvdWxkQ2VudGVyID0+IHtcbiAgICAgICAgICBpZiAoc2hvdWxkQ2VudGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7em9vbX0gPSBnZW9WaWV3cG9ydC52aWV3cG9ydChib3VuZHMsIFt3aWR0aCwgaGVpZ2h0XSk7XG4gICAgICAgICAgICAvLyBjZW50ZXIgYmVpbmcgY2FsY3VsYXRlZCBieSBnZW8tdmlld2Vwb3J0LnZpZXdwb3J0IGhhcyBhIGNvbXBsZXggbG9naWMgdGhhdFxuICAgICAgICAgICAgLy8gcHJvamVjdHMgYW5kIHRoZW4gdW5wcm9qZWN0cyB0aGUgY29vcmRpbmF0ZXMgdG8gZGV0ZXJtaW5lIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGEgc2ltcGxlIGF2ZXJhZ2UgaW5zdGVhZCBhcyB0aGF0IGlzIHRoZSBleHBlY3RlZCBiZWhhdmlvciBpbiBtb3N0IG9mIGNhc2VzXG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBbKGJvdW5kc1swXSArIGJvdW5kc1syXSkgLyAyLCAoYm91bmRzWzFdICsgYm91bmRzWzNdKSAvIDJdO1xuICAgICAgICAgICAgcmV0dXJuIHtjZW50ZXIsIHpvb219O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7Y2VudGVyOiBbbWFwU3RhdGUubG9uZ2l0dWRlLCBtYXBTdGF0ZS5sYXRpdHVkZV0sIHpvb206IG1hcFN0YXRlLnpvb219O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHtjZW50ZXIsIHpvb219ID0gZ2V0Vmlld3BvcnQoZXhwb3J0SW1hZ2VTZXR0aW5nLmNlbnRlcik7XG5cbiAgICAgICAgbmV3TWFwU3RhdGUubG9uZ2l0dWRlID0gY2VudGVyWzBdO1xuICAgICAgICBuZXdNYXBTdGF0ZS5sYXRpdHVkZSA9IGNlbnRlclsxXTtcbiAgICAgICAgbmV3TWFwU3RhdGUuem9vbSA9IHpvb20gKyBOdW1iZXIoTWF0aC5sb2cyKHNjYWxlKSB8fCAwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcEZpZWxkcyxcbiAgICAgICAgbWFwU3R5bGU6IHRoaXMuc2NhbGVkTWFwU3R5bGVTZWxlY3Rvcih0aGlzLnByb3BzKSxcblxuICAgICAgICAvLyBvdmVycmlkZSB2aWV3cG9ydCBiYXNlZCBvbiBleHBvcnQgc2V0dGluZ3NcbiAgICAgICAgbWFwU3RhdGU6IG5ld01hcFN0YXRlLFxuICAgICAgICBtYXBDb250cm9sczoge1xuICAgICAgICAgIC8vIG92ZXJyaWRlIG1hcCBsZWdlbmQgdmlzaWJpbGl0eVxuICAgICAgICAgIG1hcExlZ2VuZDoge1xuICAgICAgICAgICAgc2hvdzogbGVnZW5kLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNYXBDb21wb25lbnQ6IFN0YXRpY01hcCxcbiAgICAgICAgb25NYXBSZW5kZXI6IHRoaXMuX29uTWFwUmVuZGVyLFxuICAgICAgICBpc0V4cG9ydDogdHJ1ZSxcbiAgICAgICAgZGVja0dsUHJvcHNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdCA/IChcbiAgICAgICAgPE1hcENvbnRhaW5lciBpbmRleD17MH0gey4uLm1hcFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgc3BsaXRNYXBzLm1hcCgoc2V0dGluZ3MsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIG1hcExheWVycz17c3BsaXRNYXBzW2luZGV4XS5sYXllcnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQbG90Q29udGFpbmVyIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtaW5zdGFuY2VcIj5cbiAgICAgICAgICA8U3R5bGVkTWFwQ29udGFpbmVyIHJlZj17dGhpcy5wbG90dGluZ0FyZWFSZWZ9IHdpZHRoPXtzaXplLndpZHRofSBoZWlnaHQ9e3NpemUuaGVpZ2h0fT5cbiAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxuICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICA8L1N0eWxlZFBsb3RDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFBsb3RDb250YWluZXIucHJvcHNUeXBlcyA9IHByb3BUeXBlcztcbiAgcmV0dXJuIFBsb3RDb250YWluZXI7XG59XG4iXX0=