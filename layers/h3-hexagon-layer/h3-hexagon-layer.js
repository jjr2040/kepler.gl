"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HexagonIdVisConfigs = exports.defaultCoverage = exports.defaultElevation = exports.hexIdAccessor = exports.hexIdRequiredColumns = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _geoLayers = require("@deck.gl/geo-layers");

var _enhancedColumnLayer = _interopRequireDefault(require("../../deckgl-layers/column-layer/enhanced-column-layer"));

var _h3Utils = require("./h3-utils");

var _h3HexagonLayerIcon = _interopRequireDefault(require("./h3-hexagon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _colorUtils = require("../../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_LINE_SCALE_VALUE = 8;
var hexIdRequiredColumns = ['hex_id'];
exports.hexIdRequiredColumns = hexIdRequiredColumns;

var hexIdAccessor = function hexIdAccessor(_ref) {
  var hex_id = _ref.hex_id;
  return function (d) {
    return d.data[hex_id.fieldIdx];
  };
};

exports.hexIdAccessor = hexIdAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultCoverage = 1;
exports.defaultCoverage = defaultCoverage;
var HexagonIdVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  coverage: 'coverage',
  enable3d: 'enable3d',
  sizeRange: 'elevationRange',
  coverageRange: 'coverageRange',
  elevationScale: 'elevationScale'
};
exports.HexagonIdVisConfigs = HexagonIdVisConfigs;

var HexagonIdLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(HexagonIdLayer, _Layer);

  var _super = _createSuper(HexagonIdLayer);

  function HexagonIdLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonIdLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(HexagonIdVisConfigs);

    _this.getPositionAccessor = function () {
      return hexIdAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(HexagonIdLayer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add height visual channel
        coverageField: null,
        coverageDomain: [0, 1],
        coverageScale: 'linear'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getHexId) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var id = getHexId({
          data: allData[index]
        });
        var centroid = this.dataToFeature.centroids[index];

        if (centroid) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            id: id,
            centroid: centroid
          });
        }
      }

      return data;
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          coverageField = _this$config.coverageField,
          coverageScale = _this$config.coverageScale,
          coverageDomain = _this$config.coverageDomain,
          _this$config$visConfi = _this$config.visConfig,
          sizeRange = _this$config$visConfi.sizeRange,
          colorRange = _this$config$visConfi.colorRange,
          coverageRange = _this$config$visConfi.coverageRange,
          enable3d = _this$config$visConfi.enable3d;
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getHexId = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data; // color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(function (c) {
        return (0, _colorUtils.hexToRgb)(c);
      })); // height

      var sScale = sizeField && enable3d && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange, 0); // coverage

      var coScale = coverageField && this.getVisChannelScale(coverageScale, coverageDomain, coverageRange, 0);
      var getElevation = sScale ? function (d) {
        return _this2.getEncodedChannelValue(sScale, d.data, sizeField, 0);
      } : defaultElevation;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getCoverage = coScale ? function (d) {
        return _this2.getEncodedChannelValue(coScale, d.data, coverageField, 0);
      } : defaultCoverage;
      return {
        data: data,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getHexId: getHexId,
        getCoverage: getCoverage,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getHexId) {
      var centroids = allData.map(function (d, index) {
        var id = getHexId({
          data: d
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return null;
        } // save a reference of centroids to dataToFeature
        // so we don't have to re calculate it again


        return (0, _h3Utils.getCentroid)({
          id: id
        });
      });
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;
      var h3HexagonLayerTriggers = {
        getFillColor: {
          color: config.color,
          colorField: config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: config.colorScale
        },
        getElevation: {
          sizeField: config.sizeField,
          sizeRange: visConfig.sizeRange,
          sizeScale: config.sizeScale,
          enable3d: visConfig.enable3d
        },
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var columnLayerTriggers = {
        getCoverage: {
          coverageField: config.coverageField,
          coverageRange: visConfig.coverageRange
        }
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      return [new _geoLayers.H3HexagonLayer(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), data), {}, {
        wrapLongitude: false,
        getHexagon: function getHexagon(x) {
          return x.id;
        },
        // coverage
        coverage: config.coverageField ? 1 : visConfig.coverage,
        // highlight
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        // render
        updateTriggers: h3HexagonLayerTriggers,
        _subLayerProps: {
          'hexagon-cell': {
            type: _enhancedColumnLayer["default"],
            getCoverage: data.getCoverage,
            updateTriggers: columnLayerTriggers
          }
        }
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !config.sizeField ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        data: [(0, _h3Utils.idToPolygonGeo)(objectHovered)],
        getLineColor: config.highlightColor,
        lineWidthScale: DEFAULT_LINE_SCALE_VALUE * zoomFactor,
        wrapLongitude: false
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'hexagonId';
    }
  }, {
    key: "name",
    get: function get() {
      return 'H3';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return hexIdRequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      // use hexagon layer icon for now
      return _h3HexagonLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this)), {}, {
        size: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this).size), {}, {
          property: 'height'
        }),
        coverage: {
          property: 'coverage',
          field: 'coverageField',
          scale: 'coverageScale',
          domain: 'coverageDomain',
          range: 'coverageRange',
          key: 'coverage',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields,
          _ref3$allData = _ref3.allData,
          allData = _ref3$allData === void 0 ? [] : _ref3$allData;
      var hexFields = (0, _h3Utils.getHexFields)(fields, allData);

      if (!hexFields.length) {
        return {
          props: []
        };
      }

      return {
        props: hexFields.map(function (f) {
          return {
            isVisible: true,
            label: f.displayName || f.name,
            columns: {
              hex_id: {
                value: f.name,
                fieldIdx: fields.findIndex(function (fid) {
                  return fid.name === f.name;
                })
              }
            }
          };
        })
      };
    }
  }]);
  return HexagonIdLayer;
}(_baseLayer["default"]);

exports["default"] = HexagonIdLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSIsImhleElkUmVxdWlyZWRDb2x1bW5zIiwiaGV4SWRBY2Nlc3NvciIsImhleF9pZCIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJkZWZhdWx0RWxldmF0aW9uIiwiZGVmYXVsdENvdmVyYWdlIiwiSGV4YWdvbklkVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwiY292ZXJhZ2UiLCJlbmFibGUzZCIsInNpemVSYW5nZSIsImNvdmVyYWdlUmFuZ2UiLCJlbGV2YXRpb25TY2FsZSIsIkhleGFnb25JZExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJjb25maWciLCJjb2x1bW5zIiwiY292ZXJhZ2VGaWVsZCIsImNvdmVyYWdlRG9tYWluIiwiY292ZXJhZ2VTY2FsZSIsImdldEhleElkIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJpIiwibGVuZ3RoIiwiaW5kZXgiLCJpZCIsImNlbnRyb2lkIiwiZGF0YVRvRmVhdHVyZSIsImNlbnRyb2lkcyIsInB1c2giLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsIm9wdCIsImNvbG9yU2NhbGUiLCJjb2xvckRvbWFpbiIsImNvbG9yRmllbGQiLCJjb2xvciIsInNpemVGaWVsZCIsInNpemVTY2FsZSIsInNpemVEb21haW4iLCJ2aXNDb25maWciLCJncHVGaWx0ZXIiLCJkYXRhSWQiLCJ1cGRhdGVEYXRhIiwiY1NjYWxlIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiY29sb3JzIiwibWFwIiwiYyIsInNTY2FsZSIsImNvU2NhbGUiLCJnZXRFbGV2YXRpb24iLCJnZXRFbmNvZGVkQ2hhbm5lbFZhbHVlIiwiZ2V0RmlsbENvbG9yIiwiZ2V0Q292ZXJhZ2UiLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlQWNjZXNzb3IiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwib3B0cyIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwiZWxlWm9vbUZhY3RvciIsImdldEVsZXZhdGlvblpvb21GYWN0b3IiLCJoM0hleGFnb25MYXllclRyaWdnZXJzIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsImNvbHVtbkxheWVyVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsIkgzSGV4YWdvbkxheWVyIiwid3JhcExvbmdpdHVkZSIsImdldEhleGFnb24iLCJ4IiwiYXV0b0hpZ2hsaWdodCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJleHRydWRlZCIsInVwZGF0ZVRyaWdnZXJzIiwiX3N1YkxheWVyUHJvcHMiLCJ0eXBlIiwiRW5oYW5jZWRDb2x1bW5MYXllciIsImlzTGF5ZXJIb3ZlcmVkIiwiR2VvSnNvbkxheWVyIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsImdldExpbmVDb2xvciIsImxpbmVXaWR0aFNjYWxlIiwiSDNIZXhhZ29uTGF5ZXJJY29uIiwic2l6ZSIsInByb3BlcnR5IiwiZmllbGQiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwicmFkaXVzIiwiZmllbGRzIiwiaGV4RmllbGRzIiwiZiIsImlzVmlzaWJsZSIsImxhYmVsIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwidmFsdWUiLCJmaW5kSW5kZXgiLCJmaWQiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHLENB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QyxNQUE0QjtBQUFBLFVBQTVCQSxNQUE0Qiw2QkFBbkIsRUFBbUI7QUFBQSxnQ0FBZmhGLE9BQWU7QUFBQSxVQUFmQSxPQUFlLDhCQUFMLEVBQUs7QUFDeEQsVUFBTWlGLFNBQVMsR0FBRywyQkFBYUQsTUFBYixFQUFxQmhGLE9BQXJCLENBQWxCOztBQUNBLFVBQUksQ0FBQ2lGLFNBQVMsQ0FBQzlFLE1BQWYsRUFBdUI7QUFDckIsZUFBTztBQUFDWixVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUNMQSxRQUFBQSxLQUFLLEVBQUUwRixTQUFTLENBQUN0RCxHQUFWLENBQWMsVUFBQXVELENBQUM7QUFBQSxpQkFBSztBQUN6QkMsWUFBQUEsU0FBUyxFQUFFLElBRGM7QUFFekJDLFlBQUFBLEtBQUssRUFBRUYsQ0FBQyxDQUFDRyxXQUFGLElBQWlCSCxDQUFDLENBQUNJLElBRkQ7QUFHekIzRixZQUFBQSxPQUFPLEVBQUU7QUFDUG5CLGNBQUFBLE1BQU0sRUFBRTtBQUNOK0csZ0JBQUFBLEtBQUssRUFBRUwsQ0FBQyxDQUFDSSxJQURIO0FBRU4zRyxnQkFBQUEsUUFBUSxFQUFFcUcsTUFBTSxDQUFDUSxTQUFQLENBQWlCLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDSCxJQUFKLEtBQWFKLENBQUMsQ0FBQ0ksSUFBbkI7QUFBQSxpQkFBcEI7QUFGSjtBQUREO0FBSGdCLFdBQUw7QUFBQSxTQUFmO0FBREYsT0FBUDtBQVlEOzs7RUE3RHlDSSxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCB7R2VvSnNvbkxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IHtIM0hleGFnb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvZ2VvLWxheWVycyc7XG5pbXBvcnQgRW5oYW5jZWRDb2x1bW5MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2NvbHVtbi1sYXllci9lbmhhbmNlZC1jb2x1bW4tbGF5ZXInO1xuaW1wb3J0IHtnZXRDZW50cm9pZCwgaWRUb1BvbHlnb25HZW8sIGgzSXNWYWxpZCwgZ2V0SGV4RmllbGRzfSBmcm9tICcuL2gzLXV0aWxzJztcbmltcG9ydCBIM0hleGFnb25MYXllckljb24gZnJvbSAnLi9oMy1oZXhhZ29uLWxheWVyLWljb24nO1xuaW1wb3J0IHtDSEFOTkVMX1NDQUxFUywgSElHSExJR0hfQ09MT1JfM0R9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcblxuY29uc3QgREVGQVVMVF9MSU5FX1NDQUxFX1ZBTFVFID0gODtcblxuZXhwb3J0IGNvbnN0IGhleElkUmVxdWlyZWRDb2x1bW5zID0gWydoZXhfaWQnXTtcbmV4cG9ydCBjb25zdCBoZXhJZEFjY2Vzc29yID0gKHtoZXhfaWR9KSA9PiBkID0+IGQuZGF0YVtoZXhfaWQuZmllbGRJZHhdO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbGV2YXRpb24gPSA1MDA7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvdmVyYWdlID0gMTtcblxuZXhwb3J0IGNvbnN0IEhleGFnb25JZFZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBjb3ZlcmFnZTogJ2NvdmVyYWdlJyxcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCcsXG4gIHNpemVSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcbiAgY292ZXJhZ2VSYW5nZTogJ2NvdmVyYWdlUmFuZ2UnLFxuICBlbGV2YXRpb25TY2FsZTogJ2VsZXZhdGlvblNjYWxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbklkTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoSGV4YWdvbklkVmlzQ29uZmlncyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gaGV4SWRBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaGV4YWdvbklkJztcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiAnSDMnO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xuICAgIHJldHVybiBoZXhJZFJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgLy8gdXNlIGhleGFnb24gbGF5ZXIgaWNvbiBmb3Igbm93XG4gICAgcmV0dXJuIEgzSGV4YWdvbkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMsXG4gICAgICBzaXplOiB7XG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0J1xuICAgICAgfSxcbiAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgIHByb3BlcnR5OiAnY292ZXJhZ2UnLFxuICAgICAgICBmaWVsZDogJ2NvdmVyYWdlRmllbGQnLFxuICAgICAgICBzY2FsZTogJ2NvdmVyYWdlU2NhbGUnLFxuICAgICAgICBkb21haW46ICdjb3ZlcmFnZURvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnY292ZXJhZ2VSYW5nZScsXG4gICAgICAgIGtleTogJ2NvdmVyYWdlJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkcyA9IFtdLCBhbGxEYXRhID0gW119KSB7XG4gICAgY29uc3QgaGV4RmllbGRzID0gZ2V0SGV4RmllbGRzKGZpZWxkcywgYWxsRGF0YSk7XG4gICAgaWYgKCFoZXhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBoZXhGaWVsZHMubWFwKGYgPT4gKHtcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICBsYWJlbDogZi5kaXNwbGF5TmFtZSB8fCBmLm5hbWUsXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICBoZXhfaWQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBmLm5hbWUsXG4gICAgICAgICAgICBmaWVsZElkeDogZmllbGRzLmZpbmRJbmRleChmaWQgPT4gZmlkLm5hbWUgPT09IGYubmFtZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgaGVpZ2h0IHZpc3VhbCBjaGFubmVsXG4gICAgICBjb3ZlcmFnZUZpZWxkOiBudWxsLFxuICAgICAgY292ZXJhZ2VEb21haW46IFswLCAxXSxcbiAgICAgIGNvdmVyYWdlU2NhbGU6ICdsaW5lYXInXG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRIZXhJZCkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgaWQgPSBnZXRIZXhJZCh7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcbiAgICAgIGNvbnN0IGNlbnRyb2lkID0gdGhpcy5kYXRhVG9GZWF0dXJlLmNlbnRyb2lkc1tpbmRleF07XG5cbiAgICAgIGlmIChjZW50cm9pZCkge1xuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGEgaW5kZXhcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjZW50cm9pZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yU2NhbGUsXG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIGNvbG9yRmllbGQsXG4gICAgICBjb2xvcixcbiAgICAgIHNpemVGaWVsZCxcbiAgICAgIHNpemVTY2FsZSxcbiAgICAgIHNpemVEb21haW4sXG4gICAgICBjb3ZlcmFnZUZpZWxkLFxuICAgICAgY292ZXJhZ2VTY2FsZSxcbiAgICAgIGNvdmVyYWdlRG9tYWluLFxuICAgICAgdmlzQ29uZmlnOiB7c2l6ZVJhbmdlLCBjb2xvclJhbmdlLCBjb3ZlcmFnZVJhbmdlLCBlbmFibGUzZH1cbiAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gICAgY29uc3QgZ2V0SGV4SWQgPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgLy8gY29sb3JcbiAgICBjb25zdCBjU2NhbGUgPVxuICAgICAgY29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIGNvbG9yU2NhbGUsXG4gICAgICAgIGNvbG9yRG9tYWluLFxuICAgICAgICBjb2xvclJhbmdlLmNvbG9ycy5tYXAoYyA9PiBoZXhUb1JnYihjKSlcbiAgICAgICk7XG4gICAgLy8gaGVpZ2h0XG4gICAgY29uc3Qgc1NjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJiBlbmFibGUzZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShzaXplU2NhbGUsIHNpemVEb21haW4sIHNpemVSYW5nZSwgMCk7XG5cbiAgICAvLyBjb3ZlcmFnZVxuICAgIGNvbnN0IGNvU2NhbGUgPVxuICAgICAgY292ZXJhZ2VGaWVsZCAmJiB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShjb3ZlcmFnZVNjYWxlLCBjb3ZlcmFnZURvbWFpbiwgY292ZXJhZ2VSYW5nZSwgMCk7XG5cbiAgICBjb25zdCBnZXRFbGV2YXRpb24gPSBzU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc1NjYWxlLCBkLmRhdGEsIHNpemVGaWVsZCwgMClcbiAgICAgIDogZGVmYXVsdEVsZXZhdGlvbjtcblxuICAgIGNvbnN0IGdldEZpbGxDb2xvciA9IGNTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZClcbiAgICAgIDogY29sb3I7XG5cbiAgICBjb25zdCBnZXRDb3ZlcmFnZSA9IGNvU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY29TY2FsZSwgZC5kYXRhLCBjb3ZlcmFnZUZpZWxkLCAwKVxuICAgICAgOiBkZWZhdWx0Q292ZXJhZ2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldEVsZXZhdGlvbixcbiAgICAgIGdldEZpbGxDb2xvcixcbiAgICAgIGdldEhleElkLFxuICAgICAgZ2V0Q292ZXJhZ2UsXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlQWNjZXNzb3IoKVxuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldEhleElkKSB7XG4gICAgY29uc3QgY2VudHJvaWRzID0gYWxsRGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGdldEhleElkKHtkYXRhOiBkfSk7XG4gICAgICBpZiAoIWgzSXNWYWxpZChpZCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBzYXZlIGEgcmVmZXJlbmNlIG9mIGNlbnRyb2lkcyB0byBkYXRhVG9GZWF0dXJlXG4gICAgICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIHJlIGNhbGN1bGF0ZSBpdCBhZ2FpblxuICAgICAgcmV0dXJuIGdldENlbnRyb2lkKHtpZH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoY2VudHJvaWRzKTtcbiAgICB0aGlzLmRhdGFUb0ZlYXR1cmUgPSB7Y2VudHJvaWRzfTtcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kc30pO1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIob3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XG5cbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRoaXM7XG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSBjb25maWc7XG5cbiAgICBjb25zdCBoM0hleGFnb25MYXllclRyaWdnZXJzID0ge1xuICAgICAgZ2V0RmlsbENvbG9yOiB7XG4gICAgICAgIGNvbG9yOiBjb25maWcuY29sb3IsXG4gICAgICAgIGNvbG9yRmllbGQ6IGNvbmZpZy5jb2xvckZpZWxkLFxuICAgICAgICBjb2xvclJhbmdlOiB2aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgY29sb3JTY2FsZTogY29uZmlnLmNvbG9yU2NhbGVcbiAgICAgIH0sXG4gICAgICBnZXRFbGV2YXRpb246IHtcbiAgICAgICAgc2l6ZUZpZWxkOiBjb25maWcuc2l6ZUZpZWxkLFxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2UsXG4gICAgICAgIHNpemVTY2FsZTogY29uZmlnLnNpemVTY2FsZSxcbiAgICAgICAgZW5hYmxlM2Q6IHZpc0NvbmZpZy5lbmFibGUzZFxuICAgICAgfSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xuICAgIH07XG5cbiAgICBjb25zdCBjb2x1bW5MYXllclRyaWdnZXJzID0ge1xuICAgICAgZ2V0Q292ZXJhZ2U6IHtcbiAgICAgICAgY292ZXJhZ2VGaWVsZDogY29uZmlnLmNvdmVyYWdlRmllbGQsXG4gICAgICAgIGNvdmVyYWdlUmFuZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZVJhbmdlXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEgzSGV4YWdvbkxheWVyKHtcbiAgICAgICAgLi4uZGVmYXVsdExheWVyUHJvcHMsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuXG4gICAgICAgIGdldEhleGFnb246IHggPT4geC5pZCxcblxuICAgICAgICAvLyBjb3ZlcmFnZVxuICAgICAgICBjb3ZlcmFnZTogY29uZmlnLmNvdmVyYWdlRmllbGQgPyAxIDogdmlzQ29uZmlnLmNvdmVyYWdlLFxuXG4gICAgICAgIC8vIGhpZ2hsaWdodFxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcblxuICAgICAgICAvLyBlbGV2YXRpb25cbiAgICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgICAgZWxldmF0aW9uU2NhbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25TY2FsZSAqIGVsZVpvb21GYWN0b3IsXG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiBoM0hleGFnb25MYXllclRyaWdnZXJzLFxuICAgICAgICBfc3ViTGF5ZXJQcm9wczoge1xuICAgICAgICAgICdoZXhhZ29uLWNlbGwnOiB7XG4gICAgICAgICAgICB0eXBlOiBFbmhhbmNlZENvbHVtbkxheWVyLFxuICAgICAgICAgICAgZ2V0Q292ZXJhZ2U6IGRhdGEuZ2V0Q292ZXJhZ2UsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyczogY29sdW1uTGF5ZXJUcmlnZ2Vyc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKSAmJiAhY29uZmlnLnNpemVGaWVsZFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIG5ldyBHZW9Kc29uTGF5ZXIoe1xuICAgICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSxcbiAgICAgICAgICAgICAgZGF0YTogW2lkVG9Qb2x5Z29uR2VvKG9iamVjdEhvdmVyZWQpXSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiBjb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aFNjYWxlOiBERUZBVUxUX0xJTkVfU0NBTEVfVkFMVUUgKiB6b29tRmFjdG9yLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19