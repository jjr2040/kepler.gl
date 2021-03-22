"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.toggleSplitMapUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.togglePerspectiveUpdater = exports.fitBoundsUpdater = exports.updateMapUpdater = exports.INITIAL_MAP_STATE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @typedef {import('./map-state-updaters').MapState} MapState */

/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore
var mapStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property pitch Default: `0`
 * @property bearing Default: `0`
 * @property latitude Default: `37.75043`
 * @property longitude Default: `-122.34679`
 * @property zoom Default: `9`
 * @property dragRotate Default: `false`
 * @property width Default: `800`
 * @property height Default: `800`
 * @property isSplit Default: `false`
 * @type {MapState}
 * @public
 */

var INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  isSplit: false
};
/* Updaters */

/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').updateMapUpdater}
 * @public
 */

exports.INITIAL_MAP_STATE = INITIAL_MAP_STATE;

var updateMapUpdater = function updateMapUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), action.payload || {});
};
/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').fitBoundsUpdater}
 * @public
 */


exports.updateMapUpdater = updateMapUpdater;

var fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var bounds = action.payload;

  var _geoViewport$viewport = _geoViewport["default"].viewport(bounds, [state.width, state.height]),
      zoom = _geoViewport$viewport.zoom; // center being calculated by geo-vieweport.viewport has a complex logic that
  // projects and then unprojects the coordinates to determine the center
  // Calculating a simple average instead as that is the expected behavior in most of cases


  var center = [(bounds[0] + bounds[2]) / 2, (bounds[1] + bounds[3]) / 2];
  return _objectSpread(_objectSpread({}, state), {}, {
    latitude: center[1],
    longitude: center[0],
    zoom: zoom
  });
};
/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').togglePerspectiveUpdater}
 * @public
 */


exports.fitBoundsUpdater = fitBoundsUpdater;

var togglePerspectiveUpdater = function togglePerspectiveUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }), {}, {
    dragRotate: !state.dragRotate
  });
};
/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.togglePerspectiveUpdater = togglePerspectiveUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
}; // consider case where you have a split map and user wants to reset

/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
      _ref$payload$config = _ref$payload.config,
      config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
      _ref$payload$options = _ref$payload.options,
      options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
      _ref$payload$bounds = _ref$payload.bounds,
      bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;

  var _ref2 = config || {},
      mapState = _ref2.mapState; // merged received mapstate with previous state


  var mergedState = _objectSpread(_objectSpread({}, state), mapState); // if center map
  // center map will override mapState config


  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  return _objectSpread(_objectSpread({}, mergedState), getMapDimForSplitMap(mergedState.isSplit, state));
};
/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isSplit: !state.isSplit
  }, getMapDimForSplitMap(!state.isSplit, state));
}; // Helpers


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }

  var width = state.isSplit && !isSplit ? // 3. state split: true - isSplit: false
  // double width
  state.width * 2 : // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUQVRFIiwicGl0Y2giLCJiZWFyaW5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwiZHJhZ1JvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNTcGxpdCIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaXRCb3VuZHNVcGRhdGVyIiwiYm91bmRzIiwiZ2VvVmlld3BvcnQiLCJ2aWV3cG9ydCIsImNlbnRlciIsInRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciIsInJlc2V0TWFwQ29uZmlnVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiY29uZmlnIiwib3B0aW9ucyIsIm1hcFN0YXRlIiwibWVyZ2VkU3RhdGUiLCJjZW50ZXJNYXAiLCJnZXRNYXBEaW1Gb3JTcGxpdE1hcCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxJQUF6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSxLQUFLLEVBQUUsQ0FE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b3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgZ2VvVmlld3BvcnQgZnJvbSAnQG1hcGJveC9nZW8tdmlld3BvcnQnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS5NYXBTdGF0ZX0gTWFwU3RhdGUgKi9cblxuLyoqXG4gKiBVcGRhdGVycyBmb3IgYG1hcFN0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge21hcFN0YXRlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gY2xvc2Ugc2lkZSBwYW5lbFxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIG1hcFN0YXRlOiBtYXBTdGF0ZVVwZGF0ZXJzLmZpdEJvdW5kc1VwZGF0ZXIoXG4gKiAgICAgICAgICAgICAgIG1hcFN0YXRlLCB7cGF5bG9hZDogWzEyNy4zNCwgMzEuMDksIDEyNy41NiwgMzEuNTldXX1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgbWFwU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogRGVmYXVsdCBpbml0aWFsIGBtYXBTdGF0ZWBcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSBwaXRjaCBEZWZhdWx0OiBgMGBcbiAqIEBwcm9wZXJ0eSBiZWFyaW5nIERlZmF1bHQ6IGAwYFxuICogQHByb3BlcnR5IGxhdGl0dWRlIERlZmF1bHQ6IGAzNy43NTA0M2BcbiAqIEBwcm9wZXJ0eSBsb25naXR1ZGUgRGVmYXVsdDogYC0xMjIuMzQ2NzlgXG4gKiBAcHJvcGVydHkgem9vbSBEZWZhdWx0OiBgOWBcbiAqIEBwcm9wZXJ0eSBkcmFnUm90YXRlIERlZmF1bHQ6IGBmYWxzZWBcbiAqIEBwcm9wZXJ0eSB3aWR0aCBEZWZhdWx0OiBgODAwYFxuICogQHByb3BlcnR5IGhlaWdodCBEZWZhdWx0OiBgODAwYFxuICogQHByb3BlcnR5IGlzU3BsaXQgRGVmYXVsdDogYGZhbHNlYFxuICogQHR5cGUge01hcFN0YXRlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9NQVBfU1RBVEUgPSB7XG4gIHBpdGNoOiAwLFxuICBiZWFyaW5nOiAwLFxuICBsYXRpdHVkZTogMzcuNzUwNDMsXG4gIGxvbmdpdHVkZTogLTEyMi4zNDY3OSxcbiAgem9vbTogOSxcbiAgZHJhZ1JvdGF0ZTogZmFsc2UsXG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogODAwLFxuICBpc1NwbGl0OiBmYWxzZVxufTtcblxuLyogVXBkYXRlcnMgKi9cbi8qKlxuICogVXBkYXRlIG1hcCB2aWV3cG9ydFxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZU1hcFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICAuLi4oYWN0aW9uLnBheWxvYWQgfHwge30pXG59KTtcblxuLyoqXG4gKiBGaXQgbWFwIHZpZXdwb3J0IHRvIGJvdW5kc1xuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdGF0ZS11cGRhdGVycycpLmZpdEJvdW5kc1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBmaXRCb3VuZHNVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgYm91bmRzID0gYWN0aW9uLnBheWxvYWQ7XG4gIGNvbnN0IHt6b29tfSA9IGdlb1ZpZXdwb3J0LnZpZXdwb3J0KGJvdW5kcywgW3N0YXRlLndpZHRoLCBzdGF0ZS5oZWlnaHRdKTtcbiAgLy8gY2VudGVyIGJlaW5nIGNhbGN1bGF0ZWQgYnkgZ2VvLXZpZXdlcG9ydC52aWV3cG9ydCBoYXMgYSBjb21wbGV4IGxvZ2ljIHRoYXRcbiAgLy8gcHJvamVjdHMgYW5kIHRoZW4gdW5wcm9qZWN0cyB0aGUgY29vcmRpbmF0ZXMgdG8gZGV0ZXJtaW5lIHRoZSBjZW50ZXJcbiAgLy8gQ2FsY3VsYXRpbmcgYSBzaW1wbGUgYXZlcmFnZSBpbnN0ZWFkIGFzIHRoYXQgaXMgdGhlIGV4cGVjdGVkIGJlaGF2aW9yIGluIG1vc3Qgb2YgY2FzZXNcbiAgY29uc3QgY2VudGVyID0gWyhib3VuZHNbMF0gKyBib3VuZHNbMl0pIC8gMiwgKGJvdW5kc1sxXSArIGJvdW5kc1szXSkgLyAyXTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxhdGl0dWRlOiBjZW50ZXJbMV0sXG4gICAgbG9uZ2l0dWRlOiBjZW50ZXJbMF0sXG4gICAgem9vbVxuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGUgYmV0d2VlbiAzZCBhbmQgMmQgbWFwLlxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICAuLi57XG4gICAgcGl0Y2g6IHN0YXRlLmRyYWdSb3RhdGUgPyAwIDogNTAsXG4gICAgYmVhcmluZzogc3RhdGUuZHJhZ1JvdGF0ZSA/IDAgOiAyNFxuICB9LFxuICBkcmFnUm90YXRlOiAhc3RhdGUuZHJhZ1JvdGF0ZVxufSk7XG5cbi8qKlxuICogcmVzZXQgbWFwU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdGF0ZS11cGRhdGVycycpLnJlc2V0TWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLklOSVRJQUxfTUFQX1NUQVRFLFxuICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXG4gIGluaXRpYWxTdGF0ZTogc3RhdGUuaW5pdGlhbFN0YXRlXG59KTtcblxuLy8gY29uc2lkZXIgY2FzZSB3aGVyZSB5b3UgaGF2ZSBhIHNwbGl0IG1hcCBhbmQgdXNlciB3YW50cyB0byByZXNldFxuLyoqXG4gKiBVcGRhdGUgYG1hcFN0YXRlYCB0byBwcm9wYWdhdGUgYSBuZXcgY29uZmlnXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykucmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChcbiAgc3RhdGUsXG4gIHtwYXlsb2FkOiB7Y29uZmlnID0ge30sIG9wdGlvbnMgPSB7fSwgYm91bmRzID0gbnVsbH19XG4pID0+IHtcbiAgY29uc3Qge21hcFN0YXRlfSA9IGNvbmZpZyB8fCB7fTtcblxuICAvLyBtZXJnZWQgcmVjZWl2ZWQgbWFwc3RhdGUgd2l0aCBwcmV2aW91cyBzdGF0ZVxuICBsZXQgbWVyZ2VkU3RhdGUgPSB7Li4uc3RhdGUsIC4uLm1hcFN0YXRlfTtcblxuICAvLyBpZiBjZW50ZXIgbWFwXG4gIC8vIGNlbnRlciBtYXAgd2lsbCBvdmVycmlkZSBtYXBTdGF0ZSBjb25maWdcbiAgaWYgKG9wdGlvbnMuY2VudGVyTWFwICYmIGJvdW5kcykge1xuICAgIG1lcmdlZFN0YXRlID0gZml0Qm91bmRzVXBkYXRlcihtZXJnZWRTdGF0ZSwge1xuICAgICAgcGF5bG9hZDogYm91bmRzXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLm1lcmdlZFN0YXRlLFxuICAgIC8vIHVwZGF0ZSB3aWR0aCBpZiBgaXNTcGxpdGAgaGFzIGNoYW5nZWRcbiAgICAuLi5nZXRNYXBEaW1Gb3JTcGxpdE1hcChtZXJnZWRTdGF0ZS5pc1NwbGl0LCBzdGF0ZSlcbiAgfTtcbn07XG5cbi8qKlxuICogVG9nZ2xlIGJldHdlZW4gb25lIG9yIHNwbGl0IG1hcHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVTcGxpdE1hcFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgaXNTcGxpdDogIXN0YXRlLmlzU3BsaXQsXG4gIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKCFzdGF0ZS5pc1NwbGl0LCBzdGF0ZSlcbn0pO1xuXG4vLyBIZWxwZXJzXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwRGltRm9yU3BsaXRNYXAoaXNTcGxpdCwgc3RhdGUpIHtcbiAgLy8gY2FzZXM6XG4gIC8vIDEuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogdHJ1ZVxuICAvLyBkbyBub3RoaW5nXG4gIC8vIDIuIHN0YXRlIHNwbGl0OiBmYWxzZSAtIGlzU3BsaXQ6IGZhbHNlXG4gIC8vIGRvIG5vdGhpbmdcbiAgaWYgKHN0YXRlLmlzU3BsaXQgPT09IGlzU3BsaXQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCB3aWR0aCA9XG4gICAgc3RhdGUuaXNTcGxpdCAmJiAhaXNTcGxpdFxuICAgICAgPyAvLyAzLiBzdGF0ZSBzcGxpdDogdHJ1ZSAtIGlzU3BsaXQ6IGZhbHNlXG4gICAgICAgIC8vIGRvdWJsZSB3aWR0aFxuICAgICAgICBzdGF0ZS53aWR0aCAqIDJcbiAgICAgIDogLy8gNC4gc3RhdGUgc3BsaXQ6IGZhbHNlIC0gaXNTcGxpdDogdHJ1ZVxuICAgICAgICAvLyBzcGxpdCB3aWR0aFxuICAgICAgICBzdGF0ZS53aWR0aCAvIDI7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aFxuICB9O1xufVxuIl19