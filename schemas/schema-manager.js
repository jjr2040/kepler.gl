"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.KeplerGLSchema = exports.reducerSchema = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _window = require("global/window");

var _visStateSchema = _interopRequireDefault(require("./vis-state-schema"));

var _datasetSchema = _interopRequireDefault(require("./dataset-schema"));

var _mapStyleSchema = _interopRequireDefault(require("./map-style-schema"));

var _mapStateSchema = _interopRequireDefault(require("./map-state-schema"));

var _versions = require("./versions");

var _utils = require("../utils/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducerSchema = {
  visState: _visStateSchema["default"],
  mapState: _mapStateSchema["default"],
  mapStyle: _mapStyleSchema["default"]
};
/** @type {typeof import('./schema-manager').KeplerGLSchema} */

exports.reducerSchema = reducerSchema;

var KeplerGLSchema = /*#__PURE__*/function () {
  function KeplerGLSchema() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$reducers = _ref.reducers,
        reducers = _ref$reducers === void 0 ? reducerSchema : _ref$reducers,
        _ref$datasets = _ref.datasets,
        datasets = _ref$datasets === void 0 ? _datasetSchema["default"] : _ref$datasets,
        _ref$validVersions = _ref.validVersions,
        validVersions = _ref$validVersions === void 0 ? _versions.VERSIONS : _ref$validVersions,
        _ref$version = _ref.version,
        version = _ref$version === void 0 ? _versions.CURRENT_VERSION : _ref$version;

    (0, _classCallCheck2["default"])(this, KeplerGLSchema);
    this._validVersions = validVersions;
    this._version = version;
    this._reducerSchemas = reducers;
    this._datasetSchema = datasets;
    this._datasetLastSaved = null;
    this._savedDataset = null;
  }
  /**
   * stateToSave = {
   *   datasets: [
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     },
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     }
   *   ],
   *   config: {
   *     version: 'v0',
   *     config: {}
   *   },
   *   info: {
   *     app: 'kepler.gl',
   *     create_at: 'Mon May 28 2018 21:04:46 GMT-0700 (PDT)'
   *   }
   * }
   *
   * Get config and data of current map to save
   * @param state
   * @returns app state to save
   */


  (0, _createClass2["default"])(KeplerGLSchema, [{
    key: "save",
    value: function save(state) {
      return {
        datasets: this.getDatasetToSave(state),
        config: this.getConfigToSave(state),
        info: _objectSpread({
          app: 'kepler.gl',
          created_at: new Date().toString()
        }, this.getMapInfo(state))
      };
    }
  }, {
    key: "getMapInfo",
    value: function getMapInfo(state) {
      return state.visState.mapInfo;
    }
    /**
     *  Load saved map, argument can be (datasets, config) or ({datasets, config})
     * @param savedDatasets
     * @param savedConfig
     */

  }, {
    key: "load",
    value: function load(savedDatasets, savedConfig) {
      // if pass dataset and config in as a single object
      if (arguments.length === 1 && (0, _utils.isPlainObject)(arguments[0]) && (Array.isArray(arguments[0].datasets) || (0, _utils.isPlainObject)(arguments[0].config))) {
        return this.load(arguments[0].datasets, arguments[0].config);
      }

      return _objectSpread(_objectSpread({}, Array.isArray(savedDatasets) ? {
        datasets: this.parseSavedData(savedDatasets)
      } : {}), savedConfig ? {
        config: this.parseSavedConfig(savedConfig)
      } : {});
    }
    /**
     * Get data to save
     * @param state - app state
     * @returns - dataset to save
     */

  }, {
    key: "getDatasetToSave",
    value: function getDatasetToSave(state) {
      var _this = this;

      var dataChangedSinceLastSave = this.hasDataChanged(state);

      if (!dataChangedSinceLastSave) {
        return this._savedDataset;
      }

      var visState = state.visState;
      var datasets = Object.values(visState.datasets).map(function (ds) {
        return {
          version: _this._version,
          data: _this._datasetSchema[_this._version].save(ds)
        };
      }); // keep a copy of formatted datasets to save

      this._datasetLastSaved = visState.datasets;
      this._savedDataset = datasets;
      return datasets;
    }
    /**
     * Get App config to save
     * @param {Object} state - app state
     * @returns {{version: String, config: Object}} - config to save
     */

  }, {
    key: "getConfigToSave",
    value: function getConfigToSave(state) {
      var _this2 = this;

      var config = Object.keys(this._reducerSchemas).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), state[key] ? _this2._reducerSchemas[key][_this2._version].save(state[key]) : {});
      }, {});
      return {
        version: this._version,
        config: config
      };
    }
    /**
     * Parse saved data
     * @param datasets
     * @returns - dataset to pass to addDataToMap
     */

  }, {
    key: "parseSavedData",
    value: function parseSavedData(datasets) {
      var _this3 = this;

      return datasets.reduce(function (accu, ds) {
        var validVersion = _this3.validateVersion(ds.version);

        if (!validVersion) {
          return accu;
        }

        accu.push(_this3._datasetSchema[validVersion].load(ds.data));
        return accu;
      }, []);
    }
    /**
     * Parse saved App config
     */

  }, {
    key: "parseSavedConfig",
    value: function parseSavedConfig(_ref2) {
      var _this4 = this;

      var version = _ref2.version,
          config = _ref2.config;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var validVersion = this.validateVersion(version);

      if (!validVersion) {
        return null;
      }

      return Object.keys(config).reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), key in _this4._reducerSchemas ? _this4._reducerSchemas[key][validVersion].load(config[key]) : {});
      }, {});
    }
    /**
     * Validate version
     * @param version
     * @returns validVersion
     */

  }, {
    key: "validateVersion",
    value: function validateVersion(version) {
      if (!version) {
        _window.console.error('There is no version number associated with this saved map');

        return null;
      }

      if (!this._validVersions[version]) {
        _window.console.error("".concat(version, " is not a valid version"));

        return null;
      }

      return version;
    }
    /**
     * Check if data has changed since last save
     * @param state
     * @returns - whether data has changed or not
     */

  }, {
    key: "hasDataChanged",
    value: function hasDataChanged(state) {
      return this._datasetLastSaved !== state.visState.datasets;
    }
  }]);
  return KeplerGLSchema;
}();

exports.KeplerGLSchema = KeplerGLSchema;
var KeplerGLSchemaManager = new KeplerGLSchema();
var _default = KeplerGLSchemaManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbInJlZHVjZXJTY2hlbWEiLCJ2aXNTdGF0ZSIsInZpc1N0YXRlU2NoZW1hIiwibWFwU3RhdGUiLCJtYXBTdGF0ZVNjaGVtYSIsIm1hcFN0eWxlIiwibWFwU3R5bGVTY2hlbWEiLCJLZXBsZXJHTFNjaGVtYSIsInJlZHVjZXJzIiwiZGF0YXNldHMiLCJkYXRhc2V0U2NoZW1hIiwidmFsaWRWZXJzaW9ucyIsIlZFUlNJT05TIiwidmVyc2lvbiIsIkNVUlJFTlRfVkVSU0lPTiIsIl92YWxpZFZlcnNpb25zIiwiX3ZlcnNpb24iLCJfcmVkdWNlclNjaGVtYXMiLCJfZGF0YXNldFNjaGVtYSIsIl9kYXRhc2V0TGFzdFNhdmVkIiwiX3NhdmVkRGF0YXNldCIsInN0YXRlIiwiZ2V0RGF0YXNldFRvU2F2ZSIsImNvbmZpZyIsImdldENvbmZpZ1RvU2F2ZSIsImluZm8iLCJhcHAiLCJjcmVhdGVkX2F0IiwiRGF0ZSIsInRvU3RyaW5nIiwiZ2V0TWFwSW5mbyIsIm1hcEluZm8iLCJzYXZlZERhdGFzZXRzIiwic2F2ZWRDb25maWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJsb2FkIiwicGFyc2VTYXZlZERhdGEiLCJwYXJzZVNhdmVkQ29uZmlnIiwiZGF0YUNoYW5nZWRTaW5jZUxhc3RTYXZlIiwiaGFzRGF0YUNoYW5nZWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJkcyIsImRhdGEiLCJzYXZlIiwia2V5cyIsInJlZHVjZSIsImFjY3UiLCJrZXkiLCJ2YWxpZFZlcnNpb24iLCJ2YWxpZGF0ZVZlcnNpb24iLCJwdXNoIiwiQ29uc29sZSIsImVycm9yIiwiS2VwbGVyR0xTY2hlbWFNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGFB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LEVBQW1DO0FBQ2pDMkMsd0JBQVFDLEtBQVIsV0FBaUI1QyxPQUFqQjs7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPQSxPQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O21DQUNpQlEsSyxFQUFPO0FBQ3BCLGFBQU8sS0FBS0YsaUJBQUwsS0FBMkJFLEtBQUssQ0FBQ3BCLFFBQU4sQ0FBZVEsUUFBakQ7QUFDRDs7Ozs7O0FBR0gsSUFBTWlELHFCQUFxQixHQUFHLElBQUluRCxjQUFKLEVBQTlCO2VBRWVtRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IHZpc1N0YXRlU2NoZW1hIGZyb20gJy4vdmlzLXN0YXRlLXNjaGVtYSc7XG5pbXBvcnQgZGF0YXNldFNjaGVtYSBmcm9tICcuL2RhdGFzZXQtc2NoZW1hJztcbmltcG9ydCBtYXBTdHlsZVNjaGVtYSBmcm9tICcuL21hcC1zdHlsZS1zY2hlbWEnO1xuaW1wb3J0IG1hcFN0YXRlU2NoZW1hIGZyb20gJy4vbWFwLXN0YXRlLXNjaGVtYSc7XG5cbmltcG9ydCB7Q1VSUkVOVF9WRVJTSU9OLCBWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQge2lzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJTY2hlbWEgPSB7XG4gIHZpc1N0YXRlOiB2aXNTdGF0ZVNjaGVtYSxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlU2NoZW1hLFxuICBtYXBTdHlsZTogbWFwU3R5bGVTY2hlbWFcbn07XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9zY2hlbWEtbWFuYWdlcicpLktlcGxlckdMU2NoZW1hfSAqL1xuZXhwb3J0IGNsYXNzIEtlcGxlckdMU2NoZW1hIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHJlZHVjZXJzID0gcmVkdWNlclNjaGVtYSxcbiAgICBkYXRhc2V0cyA9IGRhdGFzZXRTY2hlbWEsXG4gICAgdmFsaWRWZXJzaW9ucyA9IFZFUlNJT05TLFxuICAgIHZlcnNpb24gPSBDVVJSRU5UX1ZFUlNJT05cbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5fdmFsaWRWZXJzaW9ucyA9IHZhbGlkVmVyc2lvbnM7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5fcmVkdWNlclNjaGVtYXMgPSByZWR1Y2VycztcbiAgICB0aGlzLl9kYXRhc2V0U2NoZW1hID0gZGF0YXNldHM7XG5cbiAgICB0aGlzLl9kYXRhc2V0TGFzdFNhdmVkID0gbnVsbDtcbiAgICB0aGlzLl9zYXZlZERhdGFzZXQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YXRlVG9TYXZlID0ge1xuICAgKiAgIGRhdGFzZXRzOiBbXG4gICAqICAgICB7XG4gICAqICAgICAgIHZlcnNpb246ICd2MCcsXG4gICAqICAgICAgIGRhdGE6IHtpZCwgbGFiZWwsIGNvbG9yLCBhbGxEYXRhLCBmaWVsZHN9XG4gICAqICAgICB9LFxuICAgKiAgICAge1xuICAgKiAgICAgICB2ZXJzaW9uOiAndjAnLFxuICAgKiAgICAgICBkYXRhOiB7aWQsIGxhYmVsLCBjb2xvciwgYWxsRGF0YSwgZmllbGRzfVxuICAgKiAgICAgfVxuICAgKiAgIF0sXG4gICAqICAgY29uZmlnOiB7XG4gICAqICAgICB2ZXJzaW9uOiAndjAnLFxuICAgKiAgICAgY29uZmlnOiB7fVxuICAgKiAgIH0sXG4gICAqICAgaW5mbzoge1xuICAgKiAgICAgYXBwOiAna2VwbGVyLmdsJyxcbiAgICogICAgIGNyZWF0ZV9hdDogJ01vbiBNYXkgMjggMjAxOCAyMTowNDo0NiBHTVQtMDcwMCAoUERUKSdcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogR2V0IGNvbmZpZyBhbmQgZGF0YSBvZiBjdXJyZW50IG1hcCB0byBzYXZlXG4gICAqIEBwYXJhbSBzdGF0ZVxuICAgKiBAcmV0dXJucyBhcHAgc3RhdGUgdG8gc2F2ZVxuICAgKi9cbiAgc2F2ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhc2V0czogdGhpcy5nZXREYXRhc2V0VG9TYXZlKHN0YXRlKSxcbiAgICAgIGNvbmZpZzogdGhpcy5nZXRDb25maWdUb1NhdmUoc3RhdGUpLFxuICAgICAgaW5mbzoge1xuICAgICAgICBhcHA6ICdrZXBsZXIuZ2wnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgICAgIC4uLnRoaXMuZ2V0TWFwSW5mbyhzdGF0ZSlcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0TWFwSW5mbyhzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS52aXNTdGF0ZS5tYXBJbmZvO1xuICB9XG4gIC8qKlxuICAgKiAgTG9hZCBzYXZlZCBtYXAsIGFyZ3VtZW50IGNhbiBiZSAoZGF0YXNldHMsIGNvbmZpZykgb3IgKHtkYXRhc2V0cywgY29uZmlnfSlcbiAgICogQHBhcmFtIHNhdmVkRGF0YXNldHNcbiAgICogQHBhcmFtIHNhdmVkQ29uZmlnXG4gICAqL1xuICBsb2FkKHNhdmVkRGF0YXNldHMsIHNhdmVkQ29uZmlnKSB7XG4gICAgLy8gaWYgcGFzcyBkYXRhc2V0IGFuZCBjb25maWcgaW4gYXMgYSBzaW5nbGUgb2JqZWN0XG4gICAgaWYgKFxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0pICYmXG4gICAgICAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0uZGF0YXNldHMpIHx8IGlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdLmNvbmZpZykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkKGFyZ3VtZW50c1swXS5kYXRhc2V0cywgYXJndW1lbnRzWzBdLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLihBcnJheS5pc0FycmF5KHNhdmVkRGF0YXNldHMpID8ge2RhdGFzZXRzOiB0aGlzLnBhcnNlU2F2ZWREYXRhKHNhdmVkRGF0YXNldHMpfSA6IHt9KSxcbiAgICAgIC4uLihzYXZlZENvbmZpZyA/IHtjb25maWc6IHRoaXMucGFyc2VTYXZlZENvbmZpZyhzYXZlZENvbmZpZyl9IDoge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSB0byBzYXZlXG4gICAqIEBwYXJhbSBzdGF0ZSAtIGFwcCBzdGF0ZVxuICAgKiBAcmV0dXJucyAtIGRhdGFzZXQgdG8gc2F2ZVxuICAgKi9cbiAgZ2V0RGF0YXNldFRvU2F2ZShzdGF0ZSkge1xuICAgIGNvbnN0IGRhdGFDaGFuZ2VkU2luY2VMYXN0U2F2ZSA9IHRoaXMuaGFzRGF0YUNoYW5nZWQoc3RhdGUpO1xuICAgIGlmICghZGF0YUNoYW5nZWRTaW5jZUxhc3RTYXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2F2ZWREYXRhc2V0O1xuICAgIH1cblxuICAgIGNvbnN0IHt2aXNTdGF0ZX0gPSBzdGF0ZTtcblxuICAgIGNvbnN0IGRhdGFzZXRzID0gT2JqZWN0LnZhbHVlcyh2aXNTdGF0ZS5kYXRhc2V0cykubWFwKGRzID0+ICh7XG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgZGF0YTogdGhpcy5fZGF0YXNldFNjaGVtYVt0aGlzLl92ZXJzaW9uXS5zYXZlKGRzKVxuICAgIH0pKTtcblxuICAgIC8vIGtlZXAgYSBjb3B5IG9mIGZvcm1hdHRlZCBkYXRhc2V0cyB0byBzYXZlXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IHZpc1N0YXRlLmRhdGFzZXRzO1xuICAgIHRoaXMuX3NhdmVkRGF0YXNldCA9IGRhdGFzZXRzO1xuXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBcHAgY29uZmlnIHRvIHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gYXBwIHN0YXRlXG4gICAqIEByZXR1cm5zIHt7dmVyc2lvbjogU3RyaW5nLCBjb25maWc6IE9iamVjdH19IC0gY29uZmlnIHRvIHNhdmVcbiAgICovXG4gIGdldENvbmZpZ1RvU2F2ZShzdGF0ZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZHVjZXJTY2hlbWFzKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi4oc3RhdGVba2V5XSA/IHRoaXMuX3JlZHVjZXJTY2hlbWFzW2tleV1bdGhpcy5fdmVyc2lvbl0uc2F2ZShzdGF0ZVtrZXldKSA6IHt9KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIGNvbmZpZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2Ugc2F2ZWQgZGF0YVxuICAgKiBAcGFyYW0gZGF0YXNldHNcbiAgICogQHJldHVybnMgLSBkYXRhc2V0IHRvIHBhc3MgdG8gYWRkRGF0YVRvTWFwXG4gICAqL1xuICBwYXJzZVNhdmVkRGF0YShkYXRhc2V0cykge1xuICAgIHJldHVybiBkYXRhc2V0cy5yZWR1Y2UoKGFjY3UsIGRzKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZFZlcnNpb24gPSB0aGlzLnZhbGlkYXRlVmVyc2lvbihkcy52ZXJzaW9uKTtcbiAgICAgIGlmICghdmFsaWRWZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgfVxuICAgICAgYWNjdS5wdXNoKHRoaXMuX2RhdGFzZXRTY2hlbWFbdmFsaWRWZXJzaW9uXS5sb2FkKGRzLmRhdGEpKTtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBzYXZlZCBBcHAgY29uZmlnXG4gICAqL1xuICBwYXJzZVNhdmVkQ29uZmlnKHt2ZXJzaW9uLCBjb25maWd9LCBzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgdmFsaWRWZXJzaW9uID0gdGhpcy52YWxpZGF0ZVZlcnNpb24odmVyc2lvbik7XG4gICAgaWYgKCF2YWxpZFZlcnNpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIC4uLihrZXkgaW4gdGhpcy5fcmVkdWNlclNjaGVtYXNcbiAgICAgICAgICA/IHRoaXMuX3JlZHVjZXJTY2hlbWFzW2tleV1bdmFsaWRWZXJzaW9uXS5sb2FkKGNvbmZpZ1trZXldKVxuICAgICAgICAgIDoge30pXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2ZXJzaW9uXG4gICAqIEBwYXJhbSB2ZXJzaW9uXG4gICAqIEByZXR1cm5zIHZhbGlkVmVyc2lvblxuICAgKi9cbiAgdmFsaWRhdGVWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBpZiAoIXZlcnNpb24pIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoJ1RoZXJlIGlzIG5vIHZlcnNpb24gbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHNhdmVkIG1hcCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl92YWxpZFZlcnNpb25zW3ZlcnNpb25dKSB7XG4gICAgICBDb25zb2xlLmVycm9yKGAke3ZlcnNpb259IGlzIG5vdCBhIHZhbGlkIHZlcnNpb25gKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGRhdGEgaGFzIGNoYW5nZWQgc2luY2UgbGFzdCBzYXZlXG4gICAqIEBwYXJhbSBzdGF0ZVxuICAgKiBAcmV0dXJucyAtIHdoZXRoZXIgZGF0YSBoYXMgY2hhbmdlZCBvciBub3RcbiAgICovXG4gIGhhc0RhdGFDaGFuZ2VkKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFzZXRMYXN0U2F2ZWQgIT09IHN0YXRlLnZpc1N0YXRlLmRhdGFzZXRzO1xuICB9XG59XG5cbmNvbnN0IEtlcGxlckdMU2NoZW1hTWFuYWdlciA9IG5ldyBLZXBsZXJHTFNjaGVtYSgpO1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHTFNjaGVtYU1hbmFnZXI7XG4iXX0=