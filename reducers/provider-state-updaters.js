"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSavedMapsErrorUpdater = exports.getSavedMapsSuccessUpdater = exports.getSavedMapsUpdater = exports.setCloudProviderUpdater = exports.resetProviderStatusUpdater = exports.loadCloudMapErrorUpdater = exports.loadCloudMapSuccessUpdater = exports.loadCloudMapUpdater = exports.exportFileErrorUpdater = exports.postSaveLoadSuccessUpdater = exports.exportFileSuccessUpdater = exports.exportFileToCloudUpdater = exports.INITIAL_PROVIDER_STATE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = require("react-palm/tasks");

var _console = _interopRequireDefault(require("global/console"));

var _utils = require("../utils/utils");

var _tasks2 = require("../tasks/tasks");

var _providerActions = require("../actions/provider-actions");

var _uiStateActions = require("../actions/ui-state-actions");

var _actions = require("../actions/actions");

var _defaultSettings = require("../constants/default-settings");

var _cloudProviders = require("../cloud-providers");

var _dataProcessor = require("../processors/data-processor");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var INITIAL_PROVIDER_STATE = {
  isProviderLoading: false,
  isCloudMapLoading: false,
  providerError: null,
  currentProvider: null,
  successInfo: {},
  mapSaved: null,
  visualizations: []
};
exports.INITIAL_PROVIDER_STATE = INITIAL_PROVIDER_STATE;

function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _tasks2.ACTION_TASK)().map(function (_) {
      return action(payload);
    });
  }

  return null;
}

function _validateProvider(provider, method) {
  if (!provider) {
    _console["default"].error("provider is not defined");

    return false;
  }

  if (typeof provider[method] !== 'function') {
    _console["default"].error("".concat(method, " is not a function of Cloud provider: ").concat(provider.name));

    return false;
  }

  return true;
}
/**
 * @type {typeof import('./provider-state-updaters').createGlobalNotificationTasks}
 */


function createGlobalNotificationTasks(_ref) {
  var type = _ref.type,
      message = _ref.message,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? true : _ref$delayClose;
  var id = (0, _utils.generateHashId)();
  var successNote = {
    id: id,
    type: _defaultSettings.DEFAULT_NOTIFICATION_TYPES[type] || _defaultSettings.DEFAULT_NOTIFICATION_TYPES.success,
    topic: _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global,
    message: message
  };
  var task = (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.addNotification)(successNote);
  });
  return delayClose ? [task, (0, _tasks2.DELAY_TASK)(3000).map(function (_) {
    return (0, _uiStateActions.removeNotification)(id);
  })] : [task];
}
/**
 * This method will export the current kepler config file to the chosen cloud proder
 * add returns a share URL
 *
 * @type {typeof import('./provider-state-updaters').exportFileToCloudUpdater}
 */


var exportFileToCloudUpdater = function exportFileToCloudUpdater(state, action) {
  var _action$payload = action.payload,
      mapData = _action$payload.mapData,
      provider = _action$payload.provider,
      _action$payload$optio = _action$payload.options,
      options = _action$payload$optio === void 0 ? {} : _action$payload$optio,
      onSuccess = _action$payload.onSuccess,
      onError = _action$payload.onError,
      closeModal = _action$payload.closeModal;

  if (!_validateProvider(provider, 'uploadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    currentProvider: provider.name
  }); // payload called by provider.uploadMap


  var payload = {
    mapData: mapData,
    options: options
  };
  var uploadFileTask = (0, _tasks2.EXPORT_FILE_TO_CLOUD_TASK)({
    provider: provider,
    payload: payload
  }).bimap( // success
  function (response) {
    return (0, _providerActions.exportFileSuccess)({
      response: response,
      provider: provider,
      options: options,
      onSuccess: onSuccess,
      closeModal: closeModal
    });
  }, // error
  function (error) {
    return (0, _providerActions.exportFileError)({
      error: error,
      provider: provider,
      options: options,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').exportFileSuccessUpdater}
 */


exports.exportFileToCloudUpdater = exportFileToCloudUpdater;

var exportFileSuccessUpdater = function exportFileSuccessUpdater(state, action) {
  var _action$payload2 = action.payload,
      response = _action$payload2.response,
      provider = _action$payload2.provider,
      _action$payload2$opti = _action$payload2.options,
      options = _action$payload2$opti === void 0 ? {} : _action$payload2$opti,
      onSuccess = _action$payload2.onSuccess,
      closeModal = _action$payload2.closeModal;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    // TODO: do we always have to store this?
    successInfo: response
  }, !options.isPublic ? {
    mapSaved: provider.name
  } : {});

  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map saved to ".concat(state.currentProvider, "!"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 * Close modal on success and display notification
 * @type {typeof import('./provider-state-updaters').postSaveLoadSuccessUpdater}
 */


exports.exportFileSuccessUpdater = exportFileSuccessUpdater;

var postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || "Saved / Load to ".concat(state.currentProvider, " Success");
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _uiStateActions.toggleModal)(null);
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.resetProviderStatus)();
  })].concat((0, _toConsumableArray2["default"])(createGlobalNotificationTasks({
    message: message
  })));
  return (0, _tasks.withTask)(state, tasks);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').exportFileErrorUpdater}
 */


exports.postSaveLoadSuccessUpdater = postSaveLoadSuccessUpdater;

var exportFileErrorUpdater = function exportFileErrorUpdater(state, action) {
  var _action$payload3 = action.payload,
      error = _action$payload3.error,
      provider = _action$payload3.provider,
      onError = _action$payload3.onError;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false
  });

  if (isFileConflict(error)) {
    newState.mapSaved = provider.name;
    return (0, _tasks.withTask)(newState, [(0, _tasks2.ACTION_TASK)().map(function (_) {
      return (0, _uiStateActions.toggleModal)(_defaultSettings.OVERWRITE_MAP_ID);
    })]);
  }

  newState.providerError = (0, _utils.getError)(error);
  var task = createActionTask(onError, {
    error: error,
    provider: provider
  });
  return task ? (0, _tasks.withTask)(newState, task) : newState;
};

exports.exportFileErrorUpdater = exportFileErrorUpdater;

var loadCloudMapUpdater = function loadCloudMapUpdater(state, action) {
  var _action$payload4 = action.payload,
      loadParams = _action$payload4.loadParams,
      provider = _action$payload4.provider,
      onSuccess = _action$payload4.onSuccess,
      onError = _action$payload4.onError;

  if (!loadParams) {
    _console["default"].warn('load map error: loadParams is undefined');

    return state;
  }

  if (!_validateProvider(provider, 'downloadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    isCloudMapLoading: true
  }); // payload called by provider.downloadMap


  var uploadFileTask = (0, _tasks2.LOAD_CLOUD_MAP_TASK)({
    provider: provider,
    payload: loadParams
  }).bimap( // success
  function (response) {
    return (0, _providerActions.loadCloudMapSuccess)({
      response: response,
      loadParams: loadParams,
      provider: provider,
      onSuccess: onSuccess,
      onError: onError
    });
  }, // error
  function (error) {
    return (0, _providerActions.loadCloudMapError)({
      error: error,
      provider: provider,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};

exports.loadCloudMapUpdater = loadCloudMapUpdater;

function isFileConflict(error) {
  return error && error.message === _cloudProviders.FILE_CONFLICT_MSG;
}

function checkLoadMapResponseError(response) {
  if (!response || !(0, _utils.isPlainObject)(response)) {
    return new Error('Load map response is empty');
  }

  if (!(0, _utils.isPlainObject)(response.map)) {
    return new Error("Load map response should be an object property \"map\"");
  }

  if (!response.map.datasets || !response.map.config) {
    return new Error("Load map response.map should be an object with property datasets or config");
  }

  return null;
}

function getDatasetHandler(format) {
  var defaultHandler = _dataProcessor.DATASET_HANDLERS[_defaultSettings.DATASET_FORMATS.csv];

  if (!format) {
    _console["default"].warn('format is not provided in load map response, will use csv by default');

    return defaultHandler;
  }

  if (!_dataProcessor.DATASET_HANDLERS[format]) {
    var supportedFormat = Object.keys(_defaultSettings.DATASET_FORMATS).map(function (k) {
      return "'".concat(k, "'");
    }).join(', ');

    _console["default"].warn("unknown format ".concat(format, ". Please use one of ").concat(supportedFormat, ", will use csv by default"));

    return defaultHandler;
  }

  return _dataProcessor.DATASET_HANDLERS[format];
}

function parseLoadMapResponse(response, loadParams, provider) {
  var map = response.map,
      format = response.format;
  var processorMethod = getDatasetHandler(format);
  var parsedDatasets = (0, _utils.toArray)(map.datasets).map(function (ds, i) {
    if (format === _defaultSettings.DATASET_FORMATS.keplergl) {
      // no need to obtain id, directly pass them in
      return processorMethod(ds);
    }

    var info = ds && ds.info || {
      id: (0, _utils.generateHashId)(6)
    };
    var data = processorMethod(ds.data || ds);
    return {
      info: info,
      data: data
    };
  });

  var info = _objectSpread(_objectSpread({}, map.info), {}, {
    provider: provider.name,
    loadParams: loadParams
  });

  return _objectSpread({
    datasets: parsedDatasets,
    info: info
  }, map.config ? {
    config: map.config
  } : {});
}
/**
 *
 * @type {typeof import('./provider-state-updaters').loadCloudMapSuccessUpdater}
 */


var loadCloudMapSuccessUpdater = function loadCloudMapSuccessUpdater(state, action) {
  var _action$payload5 = action.payload,
      response = _action$payload5.response,
      loadParams = _action$payload5.loadParams,
      provider = _action$payload5.provider,
      onSuccess = _action$payload5.onSuccess,
      onError = _action$payload5.onError;
  var formatError = checkLoadMapResponseError(response);

  if (formatError) {
    // if response format is not correct
    return exportFileErrorUpdater(state, {
      payload: {
        error: formatError,
        provider: provider,
        onError: onError
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapSaved: provider.name,
    currentProvider: provider.name,
    isCloudMapLoading: false,
    isProviderLoading: false
  });

  var payload = parseLoadMapResponse(response, loadParams, provider);
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addDataToMap)(payload);
  }), createActionTask(onSuccess, {
    response: response,
    loadParams: loadParams,
    provider: provider
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _providerActions.postSaveLoadSuccess)("Map from ".concat(provider.name, " loaded"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 *
 * @type {typeof import('./provider-state-updaters').loadCloudMapErrorUpdater}
 */


exports.loadCloudMapSuccessUpdater = loadCloudMapSuccessUpdater;

var loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error loading saved map";

  _console["default"].warn(message);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    isCloudMapLoading: false,
    providerError: null
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};
/**
 *
 * @type {typeof import('./provider-state-updaters').resetProviderStatusUpdater}
 */


exports.loadCloudMapErrorUpdater = loadCloudMapErrorUpdater;

var resetProviderStatusUpdater = function resetProviderStatusUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    isCloudMapLoading: false,
    successInfo: {}
  });
};
/**
 * Set current cloudProvider
 * @type {typeof import('./provider-state-updaters').setCloudProviderUpdater}
 */


exports.resetProviderStatusUpdater = resetProviderStatusUpdater;

var setCloudProviderUpdater = function setCloudProviderUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    successInfo: {},
    currentProvider: action.payload
  });
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsUpdater}
 */


exports.setCloudProviderUpdater = setCloudProviderUpdater;

var getSavedMapsUpdater = function getSavedMapsUpdater(state, action) {
  var provider = action.payload;

  if (!_validateProvider(provider, 'listMaps')) {
    return state;
  }

  var getSavedMapsTask = (0, _tasks2.GET_SAVED_MAPS_TASK)(provider).bimap( // success
  function (visualizations) {
    return (0, _providerActions.getSavedMapsSuccess)({
      visualizations: visualizations,
      provider: provider
    });
  }, // error
  function (error) {
    return (0, _providerActions.getSavedMapsError)({
      error: error,
      provider: provider
    });
  });
  return (0, _tasks.withTask)(_objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true
  }), getSavedMapsTask);
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsSuccessUpdater}
 */


exports.getSavedMapsUpdater = getSavedMapsUpdater;

var getSavedMapsSuccessUpdater = function getSavedMapsSuccessUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    visualizations: action.payload.visualizations
  });
};
/**
 *
 * @type {typeof import('./provider-state-updaters').getSavedMapsErrorUpdater}
 */


exports.getSavedMapsSuccessUpdater = getSavedMapsSuccessUpdater;

var getSavedMapsErrorUpdater = function getSavedMapsErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error getting saved maps from ".concat(state.currentProvider);

  _console["default"].warn(action.payload.error);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    currentProvider: null,
    isProviderLoading: false
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};

exports.getSavedMapsErrorUpdater = getSavedMapsErrorUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcm92aWRlci1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJJTklUSUFMX1BST1ZJREVSX1NUQVRFIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc0Nsb3VkTWFwTG9hZGluZyIsInByb3ZpZGVyRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJzdWNjZXNzSW5mbyIsIm1hcFNhdmVkIiwidmlzdWFsaXphdGlvbnMiLCJjcmVhdGVBY3Rpb25UYXNrIiwiYWN0aW9uIiwicGF5bG9hZCIsIm1hcCIsIl8iLCJfdmFsaWRhdGVQcm92aWRlciIsInByb3ZpZGVyIiwibWV0aG9kIiwiQ29uc29sZSIsImVycm9yIiwibmFtZSIsImNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzIiwidHlwZSIsIm1lc3NhZ2UiLCJkZWxheUNsb3NlIiwiaWQiLCJzdWNjZXNzTm90ZSIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTIiwic3VjY2VzcyIsInRvcGljIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwidGFzayIsImV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciIsInN0YXRlIiwibWFwRGF0YSIsIm9wdGlvbnMiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY2xvc2VNb2RhbCIsIm5ld1N0YXRlIiwidXBsb2FkRmlsZVRhc2siLCJiaW1hcCIsInJlc3BvbnNlIiwiZXhwb3J0RmlsZVN1Y2Nlc3NVcGRhdGVyIiwiaXNQdWJsaWMiLCJ0YXNrcyIsImZpbHRlciIsImQiLCJsZW5ndGgiLCJwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciIsImV4cG9ydEZpbGVFcnJvclVwZGF0ZXIiLCJpc0ZpbGVDb25mbGljdCIsIk9WRVJXUklURV9NQVBfSUQiLCJsb2FkQ2xvdWRNYXBVcGRhdGVyIiwibG9hZFBhcmFtcyIsIndhcm4iLCJGSUxFX0NPTkZMSUNUX01TRyIsImNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IiLCJFcnJvciIsImRhdGFzZXRzIiwiY29uZmlnIiwiZ2V0RGF0YXNldEhhbmRsZXIiLCJmb3JtYXQiLCJkZWZhdWx0SGFuZGxlciIsIkRBVEFTRVRfSEFORExFUlMiLCJEQVRBU0VUX0ZPUk1BVFMiLCJjc3YiLCJzdXBwb3J0ZWRGb3JtYXQiLCJPYmplY3QiLCJrZXlzIiwiayIsImpvaW4iLCJwYXJzZUxvYWRNYXBSZXNwb25zZSIsInByb2Nlc3Nvck1ldGhvZCIsInBhcnNlZERhdGFzZXRzIiwiZHMiLCJpIiwia2VwbGVyZ2wiLCJpbmZvIiwiZGF0YSIsImxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyIiwiZm9ybWF0RXJyb3IiLCJsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIiLCJyZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlciIsInNldENsb3VkUHJvdmlkZXJVcGRhdGVyIiwiZ2V0U2F2ZWRNYXBzVXBkYXRlciIsImdldFNhdmVkTWFwc1Rhc2siLCJnZXRTYXZlZE1hcHNTdWNjZXNzVXBkYXRlciIsImdldFNhdmVkTWFwc0Vycm9yVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0JBQXNCLEdBQUc7QUFDcENDLEVBQUFBLGlCQUFpQixFQUFFLEtBRGlCO0FBRXBDQyxFQUFBQSxpQkFBaUIsRUFBRSxLQUZpQjtBQUdwQ0MsRUFBQUEsYUFBYSxFQUFFLElBSHFCO0FBSXBDQyxFQUFBQSxlQUFlLEVBQUUsSUFKbUI7QUFLcENDLEVBQUFBLFdBQVcsRUFBRSxFQUx1QjtBQU1wQ0MsRUFBQUEsUUFBUSxFQUFFLElBTjBCO0FBT3BDQyxFQUFBQSxjQUFjLEVBQUU7QUFQb0IsQ0FBL0I7OztBQVVQLFNBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQ0MsT0FBbEMsRUFBMkM7QUFDekMsTUFBSSxPQUFPRCxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDLFdBQU8s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QU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ3RELEtBQUQsRUFBUXZCLE1BQVI7QUFBQSx5Q0FDckN1QixLQURxQztBQUV4Qy9CLElBQUFBLGlCQUFpQixFQUFFLEtBRnFCO0FBR3hDTSxJQUFBQSxjQUFjLEVBQUVFLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSDtBQUhTO0FBQUEsQ0FBbkM7QUFNUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNZ0Ysd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDdkQsS0FBRCxFQUFRdkIsTUFBUixFQUFtQjtBQUN6RCxNQUFNWSxPQUFPLEdBQ1gscUJBQVNaLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTyxLQUF4Qiw2Q0FBbUVlLEtBQUssQ0FBQzVCLGVBQXpFLENBREY7O0FBR0FZLHNCQUFRc0MsSUFBUixDQUFhN0MsTUFBTSxDQUFDQyxPQUFQLENBQWVPLEtBQTVCOztBQUVBLE1BQU1xQixRQUFRLG1DQUNUTixLQURTO0FBRVo1QixJQUFBQSxlQUFlLEVBQUUsSUFGTDtBQUdaSCxJQUFBQSxpQkFBaUIsRUFBRTtBQUhQLElBQWQ7O0FBTUEsU0FBTyxxQkFDTHFDLFFBREssRUFFTG5CLDZCQUE2QixDQUFDO0FBQUNDLElBQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFBQSxPQUFPLEVBQVBBLE9BQWhCO0FBQXlCQyxJQUFBQSxVQUFVLEVBQUU7QUFBckMsR0FBRCxDQUZ4QixDQUFQO0FBSUQsQ0FoQk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge3dpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBnZXRFcnJvciwgaXNQbGFpbk9iamVjdH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyxcbiAgQUNUSU9OX1RBU0ssXG4gIERFTEFZX1RBU0ssXG4gIExPQURfQ0xPVURfTUFQX1RBU0ssXG4gIEdFVF9TQVZFRF9NQVBTX1RBU0tcbn0gZnJvbSAndGFza3MvdGFza3MnO1xuaW1wb3J0IHtcbiAgZXhwb3J0RmlsZVN1Y2Nlc3MsXG4gIGV4cG9ydEZpbGVFcnJvcixcbiAgcG9zdFNhdmVMb2FkU3VjY2VzcyxcbiAgbG9hZENsb3VkTWFwU3VjY2VzcyxcbiAgZ2V0U2F2ZWRNYXBzU3VjY2VzcyxcbiAgZ2V0U2F2ZWRNYXBzRXJyb3IsXG4gIGxvYWRDbG91ZE1hcEVycm9yLFxuICByZXNldFByb3ZpZGVyU3RhdHVzXG59IGZyb20gJ2FjdGlvbnMvcHJvdmlkZXItYWN0aW9ucyc7XG5pbXBvcnQge3JlbW92ZU5vdGlmaWNhdGlvbiwgdG9nZ2xlTW9kYWwsIGFkZE5vdGlmaWNhdGlvbn0gZnJvbSAnYWN0aW9ucy91aS1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdhY3Rpb25zL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMsXG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyxcbiAgREFUQVNFVF9GT1JNQVRTLFxuICBPVkVSV1JJVEVfTUFQX0lEXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtGSUxFX0NPTkZMSUNUX01TR30gZnJvbSAnY2xvdWQtcHJvdmlkZXJzJztcbmltcG9ydCB7REFUQVNFVF9IQU5ETEVSU30gZnJvbSAncHJvY2Vzc29ycy9kYXRhLXByb2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1BST1ZJREVSX1NUQVRFID0ge1xuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxuICBzdWNjZXNzSW5mbzoge30sXG4gIG1hcFNhdmVkOiBudWxsLFxuICB2aXN1YWxpemF0aW9uczogW11cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvblRhc2soYWN0aW9uLCBwYXlsb2FkKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWN0aW9uKHBheWxvYWQpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgbWV0aG9kKSB7XG4gIGlmICghcHJvdmlkZXIpIHtcbiAgICBDb25zb2xlLmVycm9yKGBwcm92aWRlciBpcyBub3QgZGVmaW5lZGApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvdmlkZXJbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIENvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBpcyBub3QgYSBmdW5jdGlvbiBvZiBDbG91ZCBwcm92aWRlcjogJHtwcm92aWRlci5uYW1lfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJykuY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3N9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlLCBtZXNzYWdlLCBkZWxheUNsb3NlID0gdHJ1ZX0pIHtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUhhc2hJZCgpO1xuICBjb25zdCBzdWNjZXNzTm90ZSA9IHtcbiAgICBpZCxcbiAgICB0eXBlOiBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFU1t0eXBlXSB8fCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUy5zdWNjZXNzLFxuICAgIHRvcGljOiBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MuZ2xvYmFsLFxuICAgIG1lc3NhZ2VcbiAgfTtcbiAgY29uc3QgdGFzayA9IEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkTm90aWZpY2F0aW9uKHN1Y2Nlc3NOb3RlKSk7XG4gIHJldHVybiBkZWxheUNsb3NlID8gW3Rhc2ssIERFTEFZX1RBU0soMzAwMCkubWFwKF8gPT4gcmVtb3ZlTm90aWZpY2F0aW9uKGlkKSldIDogW3Rhc2tdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlciBjb25maWcgZmlsZSB0byB0aGUgY2hvc2VuIGNsb3VkIHByb2RlclxuICogYWRkIHJldHVybnMgYSBzaGFyZSBVUkxcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVUb0Nsb3VkVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHttYXBEYXRhLCBwcm92aWRlciwgb3B0aW9ucyA9IHt9LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGNsb3NlTW9kYWx9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgaWYgKCFfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgJ3VwbG9hZE1hcCcpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWUsXG4gICAgY3VycmVudFByb3ZpZGVyOiBwcm92aWRlci5uYW1lXG4gIH07XG5cbiAgLy8gcGF5bG9hZCBjYWxsZWQgYnkgcHJvdmlkZXIudXBsb2FkTWFwXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgbWFwRGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG4gIGNvbnN0IHVwbG9hZEZpbGVUYXNrID0gRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyh7cHJvdmlkZXIsIHBheWxvYWR9KS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgcmVzcG9uc2UgPT4gZXhwb3J0RmlsZVN1Y2Nlc3Moe3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucywgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSksXG4gICAgLy8gZXJyb3JcbiAgICBlcnJvciA9PiBleHBvcnRGaWxlRXJyb3Ioe2Vycm9yLCBwcm92aWRlciwgb3B0aW9ucywgb25FcnJvcn0pXG4gICk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCB1cGxvYWRGaWxlVGFzayk7XG59O1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnMgPSB7fSwgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAvLyBUT0RPOiBkbyB3ZSBhbHdheXMgaGF2ZSB0byBzdG9yZSB0aGlzP1xuICAgIHN1Y2Nlc3NJbmZvOiByZXNwb25zZSxcbiAgICAuLi4oIW9wdGlvbnMuaXNQdWJsaWNcbiAgICAgID8ge1xuICAgICAgICAgIG1hcFNhdmVkOiBwcm92aWRlci5uYW1lXG4gICAgICAgIH1cbiAgICAgIDoge30pXG4gIH07XG5cbiAgY29uc3QgdGFza3MgPSBbXG4gICAgY3JlYXRlQWN0aW9uVGFzayhvblN1Y2Nlc3MsIHtyZXNwb25zZSwgcHJvdmlkZXIsIG9wdGlvbnN9KSxcbiAgICBjbG9zZU1vZGFsICYmXG4gICAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHBvc3RTYXZlTG9hZFN1Y2Nlc3MoYE1hcCBzYXZlZCB0byAke3N0YXRlLmN1cnJlbnRQcm92aWRlcn0hYCkpXG4gIF0uZmlsdGVyKGQgPT4gZCk7XG5cbiAgcmV0dXJuIHRhc2tzLmxlbmd0aCA/IHdpdGhUYXNrKG5ld1N0YXRlLCB0YXNrcykgOiBuZXdTdGF0ZTtcbn07XG5cbi8qKlxuICogQ2xvc2UgbW9kYWwgb24gc3VjY2VzcyBhbmQgZGlzcGxheSBub3RpZmljYXRpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJykucG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZCB8fCBgU2F2ZWQgLyBMb2FkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSBTdWNjZXNzYDtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHRvZ2dsZU1vZGFsKG51bGwpKSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHJlc2V0UHJvdmlkZXJTdGF0dXMoKSksXG4gICAgLi4uY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe21lc3NhZ2V9KVxuICBdO1xuXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgdGFza3MpO1xufTtcblxuLyoqXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5leHBvcnRGaWxlRXJyb3JVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZUVycm9yVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtlcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgaWYgKGlzRmlsZUNvbmZsaWN0KGVycm9yKSkge1xuICAgIG5ld1N0YXRlLm1hcFNhdmVkID0gcHJvdmlkZXIubmFtZTtcbiAgICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIFtBQ1RJT05fVEFTSygpLm1hcChfID0+IHRvZ2dsZU1vZGFsKE9WRVJXUklURV9NQVBfSUQpKV0pO1xuICB9XG5cbiAgbmV3U3RhdGUucHJvdmlkZXJFcnJvciA9IGdldEVycm9yKGVycm9yKTtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZUFjdGlvblRhc2sob25FcnJvciwge2Vycm9yLCBwcm92aWRlcn0pO1xuXG4gIHJldHVybiB0YXNrID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2spIDogbmV3U3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENsb3VkTWFwVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAoIWxvYWRQYXJhbXMpIHtcbiAgICBDb25zb2xlLndhcm4oJ2xvYWQgbWFwIGVycm9yOiBsb2FkUGFyYW1zIGlzIHVuZGVmaW5lZCcpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnZG93bmxvYWRNYXAnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiB0cnVlXG4gIH07XG5cbiAgLy8gcGF5bG9hZCBjYWxsZWQgYnkgcHJvdmlkZXIuZG93bmxvYWRNYXBcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBMT0FEX0NMT1VEX01BUF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZDogbG9hZFBhcmFtc30pLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICByZXNwb25zZSA9PiBsb2FkQ2xvdWRNYXBTdWNjZXNzKHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0pLFxuICAgIC8vIGVycm9yXG4gICAgZXJyb3IgPT4gbG9hZENsb3VkTWFwRXJyb3Ioe2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn0pXG4gICk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCB1cGxvYWRGaWxlVGFzayk7XG59O1xuXG5mdW5jdGlvbiBpc0ZpbGVDb25mbGljdChlcnJvcikge1xuICByZXR1cm4gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA9PT0gRklMRV9DT05GTElDVF9NU0c7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZSB8fCAhaXNQbGFpbk9iamVjdChyZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdMb2FkIG1hcCByZXNwb25zZSBpcyBlbXB0eScpO1xuICB9XG4gIGlmICghaXNQbGFpbk9iamVjdChyZXNwb25zZS5tYXApKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgTG9hZCBtYXAgcmVzcG9uc2Ugc2hvdWxkIGJlIGFuIG9iamVjdCBwcm9wZXJ0eSBcIm1hcFwiYCk7XG4gIH1cbiAgaWYgKCFyZXNwb25zZS5tYXAuZGF0YXNldHMgfHwgIXJlc3BvbnNlLm1hcC5jb25maWcpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZS5tYXAgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHByb3BlcnR5IGRhdGFzZXRzIG9yIGNvbmZpZ2ApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCkge1xuICBjb25zdCBkZWZhdWx0SGFuZGxlciA9IERBVEFTRVRfSEFORExFUlNbREFUQVNFVF9GT1JNQVRTLmNzdl07XG4gIGlmICghZm9ybWF0KSB7XG4gICAgQ29uc29sZS53YXJuKCdmb3JtYXQgaXMgbm90IHByb3ZpZGVkIGluIGxvYWQgbWFwIHJlc3BvbnNlLCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdCcpO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIGlmICghREFUQVNFVF9IQU5ETEVSU1tmb3JtYXRdKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkRm9ybWF0ID0gT2JqZWN0LmtleXMoREFUQVNFVF9GT1JNQVRTKVxuICAgICAgLm1hcChrID0+IGAnJHtrfSdgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgQ29uc29sZS53YXJuKFxuICAgICAgYHVua25vd24gZm9ybWF0ICR7Zm9ybWF0fS4gUGxlYXNlIHVzZSBvbmUgb2YgJHtzdXBwb3J0ZWRGb3JtYXR9LCB3aWxsIHVzZSBjc3YgYnkgZGVmYXVsdGBcbiAgICApO1xuICAgIHJldHVybiBkZWZhdWx0SGFuZGxlcjtcbiAgfVxuXG4gIHJldHVybiBEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF07XG59XG5cbmZ1bmN0aW9uIHBhcnNlTG9hZE1hcFJlc3BvbnNlKHJlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcikge1xuICBjb25zdCB7bWFwLCBmb3JtYXR9ID0gcmVzcG9uc2U7XG4gIGNvbnN0IHByb2Nlc3Nvck1ldGhvZCA9IGdldERhdGFzZXRIYW5kbGVyKGZvcm1hdCk7XG5cbiAgY29uc3QgcGFyc2VkRGF0YXNldHMgPSB0b0FycmF5KG1hcC5kYXRhc2V0cykubWFwKChkcywgaSkgPT4ge1xuICAgIGlmIChmb3JtYXQgPT09IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbCkge1xuICAgICAgLy8gbm8gbmVlZCB0byBvYnRhaW4gaWQsIGRpcmVjdGx5IHBhc3MgdGhlbSBpblxuICAgICAgcmV0dXJuIHByb2Nlc3Nvck1ldGhvZChkcyk7XG4gICAgfVxuICAgIGNvbnN0IGluZm8gPSAoZHMgJiYgZHMuaW5mbykgfHwge2lkOiBnZW5lcmF0ZUhhc2hJZCg2KX07XG4gICAgY29uc3QgZGF0YSA9IHByb2Nlc3Nvck1ldGhvZChkcy5kYXRhIHx8IGRzKTtcbiAgICByZXR1cm4ge2luZm8sIGRhdGF9O1xuICB9KTtcblxuICBjb25zdCBpbmZvID0ge1xuICAgIC4uLm1hcC5pbmZvLFxuICAgIHByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxuICAgIGxvYWRQYXJhbXNcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhc2V0czogcGFyc2VkRGF0YXNldHMsXG4gICAgaW5mbyxcbiAgICAuLi4obWFwLmNvbmZpZyA/IHtjb25maWc6IG1hcC5jb25maWd9IDoge30pXG4gIH07XG59XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Byb3ZpZGVyLXN0YXRlLXVwZGF0ZXJzJykubG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIsIG9uU3VjY2Vzcywgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBmb3JtYXRFcnJvciA9IGNoZWNrTG9hZE1hcFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpO1xuICBpZiAoZm9ybWF0RXJyb3IpIHtcbiAgICAvLyBpZiByZXNwb25zZSBmb3JtYXQgaXMgbm90IGNvcnJlY3RcbiAgICByZXR1cm4gZXhwb3J0RmlsZUVycm9yVXBkYXRlcihzdGF0ZSwge1xuICAgICAgcGF5bG9hZDoge2Vycm9yOiBmb3JtYXRFcnJvciwgcHJvdmlkZXIsIG9uRXJyb3J9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBtYXBTYXZlZDogcHJvdmlkZXIubmFtZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXG4gICAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0IHBheWxvYWQgPSBwYXJzZUxvYWRNYXBSZXNwb25zZShyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXIpO1xuXG4gIGNvbnN0IHRhc2tzID0gW1xuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkRGF0YVRvTWFwKHBheWxvYWQpKSxcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBsb2FkUGFyYW1zLCBwcm92aWRlcn0pLFxuICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIGZyb20gJHtwcm92aWRlci5uYW1lfSBsb2FkZWRgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuLyoqXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5sb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gZ2V0RXJyb3IoYWN0aW9uLnBheWxvYWQuZXJyb3IpIHx8IGBFcnJvciBsb2FkaW5nIHNhdmVkIG1hcGA7XG5cbiAgQ29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXG4gICAgcHJvdmlkZXJFcnJvcjogbnVsbFxuICB9O1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBuZXdTdGF0ZSxcbiAgICBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7dHlwZTogJ2Vycm9yJywgbWVzc2FnZSwgZGVsYXlDbG9zZTogZmFsc2V9KVxuICApO1xufTtcblxuLyoqXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5yZXNldFByb3ZpZGVyU3RhdHVzVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgc3VjY2Vzc0luZm86IHt9XG59KTtcblxuLyoqXG4gKiBTZXQgY3VycmVudCBjbG91ZFByb3ZpZGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLnNldENsb3VkUHJvdmlkZXJVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgc3VjY2Vzc0luZm86IHt9LFxuICBjdXJyZW50UHJvdmlkZXI6IGFjdGlvbi5wYXlsb2FkXG59KTtcblxuLyoqXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5nZXRTYXZlZE1hcHNVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gYWN0aW9uLnBheWxvYWQ7XG4gIGlmICghX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIsICdsaXN0TWFwcycpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgZ2V0U2F2ZWRNYXBzVGFzayA9IEdFVF9TQVZFRF9NQVBTX1RBU0socHJvdmlkZXIpLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICB2aXN1YWxpemF0aW9ucyA9PiBnZXRTYXZlZE1hcHNTdWNjZXNzKHt2aXN1YWxpemF0aW9ucywgcHJvdmlkZXJ9KSxcbiAgICAvLyBlcnJvclxuICAgIGVycm9yID0+IGdldFNhdmVkTWFwc0Vycm9yKHtlcnJvciwgcHJvdmlkZXJ9KVxuICApO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBnZXRTYXZlZE1hcHNUYXNrXG4gICk7XG59O1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycycpLmdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgdmlzdWFsaXphdGlvbnM6IGFjdGlvbi5wYXlsb2FkLnZpc3VhbGl6YXRpb25zXG59KTtcblxuLyoqXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMnKS5nZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBtZXNzYWdlID1cbiAgICBnZXRFcnJvcihhY3Rpb24ucGF5bG9hZC5lcnJvcikgfHwgYEVycm9yIGdldHRpbmcgc2F2ZWQgbWFwcyBmcm9tICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfWA7XG5cbiAgQ29uc29sZS53YXJuKGFjdGlvbi5wYXlsb2FkLmVycm9yKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5ld1N0YXRlLFxuICAgIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHt0eXBlOiAnZXJyb3InLCBtZXNzYWdlLCBkZWxheUNsb3NlOiBmYWxzZX0pXG4gICk7XG59O1xuIl19