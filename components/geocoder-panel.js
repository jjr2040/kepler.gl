"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GeocoderPanelFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _processors = _interopRequireDefault(require("../processors"));

var _core = require("@deck.gl/core");

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

var _schemas = _interopRequireDefault(require("../schemas"));

var _geocoder = _interopRequireDefault(require("./geocoder/geocoder"));

var _defaultSettings = require("../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ICON_LAYER = {
  id: _defaultSettings.GEOCODER_LAYER_ID,
  type: 'icon',
  config: {
    label: 'Geocoder Layer',
    color: _defaultSettings.GEOCODER_ICON_COLOR,
    dataId: _defaultSettings.GEOCODER_DATASET_NAME,
    columns: {
      lat: 'lt',
      lng: 'ln',
      icon: 'icon',
      label: 'text'
    },
    isVisible: true,
    hidden: true,
    visConfig: {
      radius: _defaultSettings.GEOCODER_ICON_SIZE
    }
  }
};

var PARSED_CONFIG = _schemas["default"].parseSavedConfig({
  version: 'v1',
  config: {
    visState: {
      layers: [ICON_LAYER]
    }
  }
});

var StyledGeocoderPanel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.geocoderTop;
}, function (props) {
  return props.theme.geocoderRight;
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.boxShadow;
});

function generateGeocoderDataset(lat, lon, text) {
  return {
    data: _processors["default"].processRowObject([{
      lt: lat,
      ln: lon,
      icon: 'place',
      text: text
    }]),
    id: _defaultSettings.GEOCODER_DATASET_NAME,
    info: {
      hidden: true,
      id: _defaultSettings.GEOCODER_DATASET_NAME,
      label: _defaultSettings.GEOCODER_DATASET_NAME
    }
  };
}

function isValid(key) {
  return /pk\..*\..*/.test(key);
}

function GeocoderPanelFactory() {
  var GeocoderPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(GeocoderPanel, _Component);

    var _super = _createSuper(GeocoderPanel);

    function GeocoderPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, GeocoderPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelected", function () {
        var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var geoItem = arguments.length > 1 ? arguments[1] : undefined;

        var _geoItem$center = (0, _slicedToArray2["default"])(geoItem.center, 2),
            lon = _geoItem$center[0],
            lat = _geoItem$center[1],
            text = geoItem.text,
            bbox = geoItem.bbox;

        _this.removeGeocoderDataset();

        _this.props.updateVisData([generateGeocoderDataset(lat, lon, text)], {
          keepExistingConfig: true
        }, PARSED_CONFIG);

        var bounds = bbox || [lon - _defaultSettings.GEOCODER_GEO_OFFSET, lat - _defaultSettings.GEOCODER_GEO_OFFSET, lon + _defaultSettings.GEOCODER_GEO_OFFSET, lat + _defaultSettings.GEOCODER_GEO_OFFSET];

        var _geoViewport$viewport = _geoViewport["default"].viewport(bounds, [_this.props.mapState.width, _this.props.mapState.height]),
            zoom = _geoViewport$viewport.zoom; // center being calculated by geo-vieweport.viewport has a complex logic that
        // projects and then unprojects the coordinates to determine the center
        // Calculating a simple average instead as that is the expected behavior in most of cases


        var center = [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];

        _this.props.updateMap({
          latitude: center[1],
          longitude: center[0],
          zoom: zoom,
          pitch: 0,
          bearing: 0,
          transitionDuration: _this.props.transitionDuration,
          transitionInterpolator: new _core.FlyToInterpolator()
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeMarker", function () {
        _this.removeGeocoderDataset();
      });
      return _this;
    }

    (0, _createClass2["default"])(GeocoderPanel, [{
      key: "removeGeocoderDataset",
      value: function removeGeocoderDataset() {
        this.props.removeDataset(_defaultSettings.GEOCODER_DATASET_NAME);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isGeocoderEnabled = _this$props.isGeocoderEnabled,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            width = _this$props.width;
        return /*#__PURE__*/_react["default"].createElement(StyledGeocoderPanel, {
          className: "geocoder-panel",
          width: width,
          style: {
            display: isGeocoderEnabled ? 'block' : 'none'
          }
        }, isValid(mapboxApiAccessToken) && /*#__PURE__*/_react["default"].createElement(_geocoder["default"], {
          mapboxApiAccessToken: mapboxApiAccessToken,
          onSelected: this.onSelected,
          onDeleteMarker: this.removeMarker,
          width: width
        }));
      }
    }]);
    return GeocoderPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(GeocoderPanel, "propTypes", {
    isGeocoderEnabled: _propTypes["default"].bool.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapState: _propTypes["default"].object.isRequired,
    updateVisData: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    updateMap: _propTypes["default"].func.isRequired,
    transitionDuration: _propTypes["default"].number,
    width: _propTypes["default"].number
  });
  GeocoderPanel.defaultProps = {
    transitionDuration: 3000
  };
  return GeocoderPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2dlb2NvZGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIklDT05fTEFZRVIiLCJpZCIsIkdFT0NPREVSX0xBWUVSX0lEIiwidHlwZSIsImNvbmZpZyIsImxhYmVsIiwiY29sb3IiLCJHRU9DT0RFUl9JQ09OX0NPTE9SIiwiZGF0YUlkIiwiR0VPQ09ERVJfREFUQVNFVF9OQU1FIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImljb24iLCJpc1Zpc2libGUiLCJoaWRkZW4iLCJ2aXNDb25maWciLCJyYWRpdXMiLCJHRU9DT0RFUl9JQ09OX1NJWkUiLCJQQVJTRURfQ09ORklHIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwidmVyc2lvbiIsInZpc1N0YXRlIiwibGF5ZXJzIiwiU3R5bGVkR2VvY29kZXJQYW5lbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJnZW9jb2RlclRvcCIsImdlb2NvZGVyUmlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIndpZHRoIiwiZ2VvY29kZXJXaWR0aCIsImJveFNoYWRvdyIsImdlbmVyYXRlR2VvY29kZXJEYXRhc2V0IiwibG9uIiwidGV4dCIsImRhdGEiLCJQcm9jZXNzb3JzIiwicHJvY2Vzc1Jvd09iamVjdCIsImx0IiwibG4iLCJpbmZvIiwiaXNWYWxpZCIsImtleSIsInRlc3QiLCJHZW9jb2RlclBhbmVsRmFjdG9yeSIsIkdlb2NvZGVyUGFuZWwiLCJ2aWV3cG9ydCIsImdlb0l0ZW0iLCJjZW50ZXIiLCJiYm94IiwicmVtb3ZlR2VvY29kZXJEYXRhc2V0IiwidXBkYXRlVmlzRGF0YSIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImJvdW5kcyIsIkdFT0NPREVSX0dFT19PRkZTRVQiLCJnZW9WaWV3cG9ydCIsIm1hcFN0YXRlIiwiaGVpZ2h0Iiwiem9vbSIsInVwZGF0ZU1hcCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicGl0Y2giLCJiZWFyaW5nIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkludGVycG9sYXRvciIsIkZseVRvSW50ZXJwb2xhdG9yIiwicmVtb3ZlRGF0YXNldCIsImlzR2VvY29kZXJFbmFibGVkIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJkaXNwbGF5Iiwib25TZWxlY3RlZCIsInJlbW92ZU1hcmtlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib2JqZWN0IiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLEVBQUUsRUFBRUMsa0NBRGE7QUFFakJDLEVBQUFBLElBQUksRUFBRSxNQUZXO0FBR2pCQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFLGdCQUREO0FBRU5DLElBQUFBLEtBQUssRUFBRUMsb0NBRkQ7QUFHTkMsSUFBQUEsTUFBTSxFQUFFQyxzQ0FIRjtBQUlOQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsR0FBRyxFQUFFLElBREU7QUFFUEMsTUFBQUEsR0FBRyxFQUFFLElBRkU7QUFHUEMsTUFBQUEsSUFBSSxFQUFFLE1BSEM7QUFJUFIsTUFBQUEsS0FBSyxFQUFFO0FBSkEsS0FKSDtBQVVOUyxJQUFBQSxTQUFTLEVBQUUsSUFWTDtBQVdOQyxJQUFBQSxNQUFNLEVBQUUsSUFYRjtBQVlOQyxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsTUFBTSxFQUFFQztBQURDO0FBWkw7QUFIUyxDQUFuQjs7QUFxQkEsSUFBTUMsYUFBYSxHQUFHQyxvQkFBZUMsZ0JBQWYsQ0FBZ0M7QUFDcERDLEVBQUFBLE9BQU8sRUFBRSxJQUQyQztBQUVwRGxCLEVBQUFBLE1BQU0sRUFBRTtB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S0czQixPQUFPLENBQUM0QixvQkFBRCxDQUFQLGlCQUNDLGdDQUFDLG9CQUFEO0FBQ0UsVUFBQSxvQkFBb0IsRUFBRUEsb0JBRHhCO0FBRUUsVUFBQSxVQUFVLEVBQUUsS0FBS0UsVUFGbkI7QUFHRSxVQUFBLGNBQWMsRUFBRSxLQUFLQyxZQUh2QjtBQUlFLFVBQUEsS0FBSyxFQUFFM0M7QUFKVCxVQU5KLENBREY7QUFnQkQ7QUFoRjBDO0FBQUE7QUFBQSxJQUNqQjRDLGdCQURpQjs7QUFBQSxtQ0FDdkM1QixhQUR1QyxlQUV4QjtBQUNqQnVCLElBQUFBLGlCQUFpQixFQUFFTSxzQkFBVUMsSUFBVixDQUFlQyxVQURqQjtBQUVqQlAsSUFBQUEsb0JBQW9CLEVBQUVLLHNCQUFVRyxNQUFWLENBQWlCRCxVQUZ0QjtBQUdqQnBCLElBQUFBLFFBQVEsRUFBRWtCLHNCQUFVSSxNQUFWLENBQWlCRixVQUhWO0FBSWpCekIsSUFBQUEsYUFBYSxFQUFFdUIsc0JBQVVLLElBQVYsQ0FBZUgsVUFKYjtBQUtqQlQsSUFBQUEsYUFBYSxFQUFFTyxzQkFBVUssSUFBVixDQUFlSCxVQUxiO0FBTWpCakIsSUFBQUEsU0FBUyxFQUFFZSxzQkFBVUssSUFBVixDQUFlSCxVQU5UO0FBUWpCWixJQUFBQSxrQkFBa0IsRUFBRVUsc0JBQVVNLE1BUmI7QUFTakJuRCxJQUFBQSxLQUFLLEVBQUU2QyxzQkFBVU07QUFUQSxHQUZ3QjtBQW1GN0NuQyxFQUFBQSxhQUFhLENBQUNvQyxZQUFkLEdBQTZCO0FBQzNCakIsSUFBQUEsa0JBQWtCLEVBQUU7QUFETyxHQUE3QjtBQUlBLFNBQU9uQixhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9jZXNzb3JzIGZyb20gJ3Byb2Nlc3NvcnMnO1xuaW1wb3J0IHtGbHlUb0ludGVycG9sYXRvcn0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5pbXBvcnQgZ2VvVmlld3BvcnQgZnJvbSAnQG1hcGJveC9nZW8tdmlld3BvcnQnO1xuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xuXG5pbXBvcnQgR2VvY29kZXIgZnJvbSAnLi9nZW9jb2Rlci9nZW9jb2Rlcic7XG5pbXBvcnQge1xuICBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gIEdFT0NPREVSX0xBWUVSX0lELFxuICBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICBHRU9DT0RFUl9JQ09OX0NPTE9SLFxuICBHRU9DT0RFUl9JQ09OX1NJWkVcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBJQ09OX0xBWUVSID0ge1xuICBpZDogR0VPQ09ERVJfTEFZRVJfSUQsXG4gIHR5cGU6ICdpY29uJyxcbiAgY29uZmlnOiB7XG4gICAgbGFiZWw6ICdHZW9jb2RlciBMYXllcicsXG4gICAgY29sb3I6IEdFT0NPREVSX0lDT05fQ09MT1IsXG4gICAgZGF0YUlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gICAgY29sdW1uczoge1xuICAgICAgbGF0OiAnbHQnLFxuICAgICAgbG5nOiAnbG4nLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgbGFiZWw6ICd0ZXh0J1xuICAgIH0sXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB2aXNDb25maWc6IHtcbiAgICAgIHJhZGl1czogR0VPQ09ERVJfSUNPTl9TSVpFXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBQQVJTRURfQ09ORklHID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyh7XG4gIHZlcnNpb246ICd2MScsXG4gIGNvbmZpZzoge1xuICAgIHZpc1N0YXRlOiB7XG4gICAgICBsYXllcnM6IFtJQ09OX0xBWUVSXVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IFN0eWxlZEdlb2NvZGVyUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5nZW9jb2RlclRvcH1weDtcbiAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJSaWdodH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKE51bWJlci5pc0Zpbml0ZShwcm9wcy53aWR0aCkgPyBwcm9wcy53aWR0aCA6IHByb3BzLnRoZW1lLmdlb2NvZGVyV2lkdGgpfXB4O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XG4gIHotaW5kZXg6IDEwMDtcbmA7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgZGF0YTogUHJvY2Vzc29ycy5wcm9jZXNzUm93T2JqZWN0KFtcbiAgICAgIHtcbiAgICAgICAgbHQ6IGxhdCxcbiAgICAgICAgbG46IGxvbixcbiAgICAgICAgaWNvbjogJ3BsYWNlJyxcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIF0pLFxuICAgIGlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gICAgaW5mbzoge1xuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgaWQ6IEdFT0NPREVSX0RBVEFTRVRfTkFNRSxcbiAgICAgIGxhYmVsOiBHRU9DT0RFUl9EQVRBU0VUX05BTUVcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQoa2V5KSB7XG4gIHJldHVybiAvcGtcXC4uKlxcLi4qLy50ZXN0KGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlb2NvZGVyUGFuZWxGYWN0b3J5KCkge1xuICBjbGFzcyBHZW9jb2RlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgaXNHZW9jb2RlckVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZVZpc0RhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVEYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTWFwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICByZW1vdmVHZW9jb2RlckRhdGFzZXQoKSB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZURhdGFzZXQoR0VPQ09ERVJfREFUQVNFVF9OQU1FKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdGVkID0gKHZpZXdwb3J0ID0gbnVsbCwgZ2VvSXRlbSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjZW50ZXI6IFtsb24sIGxhdF0sXG4gICAgICAgIHRleHQsXG4gICAgICAgIGJib3hcbiAgICAgIH0gPSBnZW9JdGVtO1xuICAgICAgdGhpcy5yZW1vdmVHZW9jb2RlckRhdGFzZXQoKTtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVmlzRGF0YShcbiAgICAgICAgW2dlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KV0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZWVwRXhpc3RpbmdDb25maWc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgUEFSU0VEX0NPTkZJR1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGJib3ggfHwgW1xuICAgICAgICBsb24gLSBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsYXQgLSBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsb24gKyBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsYXQgKyBHRU9DT0RFUl9HRU9fT0ZGU0VUXG4gICAgICBdO1xuICAgICAgY29uc3Qge3pvb219ID0gZ2VvVmlld3BvcnQudmlld3BvcnQoYm91bmRzLCBbXG4gICAgICAgIHRoaXMucHJvcHMubWFwU3RhdGUud2lkdGgsXG4gICAgICAgIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0XG4gICAgICBdKTtcbiAgICAgIC8vIGNlbnRlciBiZWluZyBjYWxjdWxhdGVkIGJ5IGdlby12aWV3ZXBvcnQudmlld3BvcnQgaGFzIGEgY29tcGxleCBsb2dpYyB0aGF0XG4gICAgICAvLyBwcm9qZWN0cyBhbmQgdGhlbiB1bnByb2plY3RzIHRoZSBjb29yZGluYXRlcyB0byBkZXRlcm1pbmUgdGhlIGNlbnRlclxuICAgICAgLy8gQ2FsY3VsYXRpbmcgYSBzaW1wbGUgYXZlcmFnZSBpbnN0ZWFkIGFzIHRoYXQgaXMgdGhlIGV4cGVjdGVkIGJlaGF2aW9yIGluIG1vc3Qgb2YgY2FzZXNcbiAgICAgIGNvbnN0IGNlbnRlciA9IFsoYm91bmRzWzBdICsgYm91bmRzWzJdKSAvIDIsIChib3VuZHNbMV0gKyBib3VuZHNbM10pIC8gMl07XG5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlTWFwKHtcbiAgICAgICAgbGF0aXR1ZGU6IGNlbnRlclsxXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXJbMF0sXG4gICAgICAgIHpvb20sXG4gICAgICAgIHBpdGNoOiAwLFxuICAgICAgICBiZWFyaW5nOiAwLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMucHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICB0cmFuc2l0aW9uSW50ZXJwb2xhdG9yOiBuZXcgRmx5VG9JbnRlcnBvbGF0b3IoKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbW92ZU1hcmtlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlR2VvY29kZXJEYXRhc2V0KCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc0dlb2NvZGVyRW5hYmxlZCwgbWFwYm94QXBpQWNjZXNzVG9rZW4sIHdpZHRofSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkR2VvY29kZXJQYW5lbFxuICAgICAgICAgIGNsYXNzTmFtZT1cImdlb2NvZGVyLXBhbmVsXCJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBpc0dlb2NvZGVyRW5hYmxlZCA/ICdibG9jaycgOiAnbm9uZSd9fVxuICAgICAgICA+XG4gICAgICAgICAge2lzVmFsaWQobWFwYm94QXBpQWNjZXNzVG9rZW4pICYmIChcbiAgICAgICAgICAgIDxHZW9jb2RlclxuICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TZWxlY3RlZH1cbiAgICAgICAgICAgICAgb25EZWxldGVNYXJrZXI9e3RoaXMucmVtb3ZlTWFya2VyfVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3R5bGVkR2VvY29kZXJQYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgR2VvY29kZXJQYW5lbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDAwXG4gIH07XG5cbiAgcmV0dXJuIEdlb2NvZGVyUGFuZWw7XG59XG4iXX0=