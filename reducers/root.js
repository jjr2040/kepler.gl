"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideInitialState = provideInitialState;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var _actionWrapper = require("../actions/action-wrapper");

var _actions = require("../actions/actions");

var _core = require("./core");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// INITIAL_STATE
var initialCoreState = {};

function provideInitialState(initialState) {
  var coreReducer = (0, _core.coreReducerFactory)(initialState);

  var handleRegisterEntry = function handleRegisterEntry(state, _ref) {
    var _ref$payload = _ref.payload,
        id = _ref$payload.id,
        mint = _ref$payload.mint,
        mapboxApiAccessToken = _ref$payload.mapboxApiAccessToken,
        mapboxApiUrl = _ref$payload.mapboxApiUrl,
        mapStylesReplaceDefault = _ref$payload.mapStylesReplaceDefault,
        initialUiState = _ref$payload.initialUiState;
    // by default, always create a mint state even if the same id already exist
    // if state.id exist and mint=false, keep the existing state
    var previousState = state[id] && mint === false ? state[id] : undefined;
    return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, id, coreReducer(previousState, (0, _actions.keplerGlInit)({
      mapboxApiAccessToken: mapboxApiAccessToken,
      mapboxApiUrl: mapboxApiUrl,
      mapStylesReplaceDefault: mapStylesReplaceDefault,
      initialUiState: initialUiState
    }))));
  };

  var handleDeleteEntry = function handleDeleteEntry(state, _ref2) {
    var id = _ref2.payload;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), curr === id ? {} : (0, _defineProperty2["default"])({}, curr, state[curr]));
    }, {});
  };

  var handleRenameEntry = function handleRenameEntry(state, _ref4) {
    var _ref4$payload = _ref4.payload,
        oldId = _ref4$payload.oldId,
        newId = _ref4$payload.newId;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), (0, _defineProperty2["default"])({}, curr === oldId ? newId : curr, state[curr]));
    }, {});
  };

  return function () {
    var _handleActions;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCoreState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // update child states
    Object.keys(state).forEach(function (id) {
      var updateItemState = coreReducer(state[id], (0, _actionWrapper._actionFor)(id, action));
      state = (0, _actionWrapper._updateProperty)(state, id, updateItemState);
    }); // perform additional state reducing (e.g. switch action.type etc...)

    return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].REGISTER_ENTRY, handleRegisterEntry), (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].DELETE_ENTRY, handleDeleteEntry), (0, _defineProperty2["default"])(_handleActions, _actionTypes["default"].RENAME_ENTRY, handleRenameEntry), _handleActions), initialCoreState)(state, action);
  };
}

var _keplerGlReducer = provideInitialState();

function mergeInitialState() {
  var saved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var provided = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = ['mapState', 'mapStyle', 'visState', 'uiState']; // shallow merge each reducer

  return keys.reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), saved[key] && provided[key] ? (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, saved[key]), provided[key])) : (0, _defineProperty2["default"])({}, key, saved[key] || provided[key] || {}));
  }, {});
}

function decorate(target) {
  var savedInitialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var targetInitialState = savedInitialState;
  /**
   * Returns a kepler.gl reducer that will also pass each action through additional reducers spiecified.
   * The parameter should be either a reducer map or a reducer function.
   * The state passed into the additional action handler is the instance state.
   * It will include all the subreducers `visState`, `uiState`, `mapState` and `mapStyle`.
   * `.plugin` is only meant to be called once when mounting the keplerGlReducer to the store.
   * **Note** This is an advanced option to give you more freedom to modify the internal state of the kepler.gl instance.
   * You should only use this to adding additional actions instead of replacing default actions.
   *
   * @mixin keplerGlReducer.plugin
   * @memberof keplerGlReducer
   * @param {Object|Function} customReducer - A reducer map or a reducer
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .plugin({
   *    // 1. as reducer map
   *    HIDE_AND_SHOW_SIDE_PANEL: (state, action) => ({
   *      ...state,
   *      uiState: {
   *        ...state.uiState,
   *        readOnly: !state.uiState.readOnly
   *      }
   *    })
   *  })
   * .plugin(handleActions({
   *   // 2. as reducer
   *   'HIDE_MAP_CONTROLS': (state, action) => ({
   *     ...state,
   *     uiState: {
   *       ...state.uiState,
   *       mapControls: hiddenMapControl
   *     }
   *   })
   * }, {}));
   */

  target.plugin = function plugin(customReducer) {
    var _this = this;

    if ((0, _typeof2["default"])(customReducer) === 'object') {
      // if only provided a reducerMap, wrap it in a reducer
      customReducer = (0, _reduxActions.handleActions)(customReducer, {});
    } // use 'function' keyword to enable 'this'


    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var nextState = _this(state, action); // for each entry in the staten


      Object.keys(nextState).forEach(function (id) {
        // update child states
        nextState = (0, _actionWrapper._updateProperty)(nextState, id, customReducer(nextState[id], (0, _actionWrapper._actionFor)(id, action)));
      });
      return nextState;
    });
  };
  /**
   * Return a reducer that initiated with custom initial state.
   * The parameter should be an object mapping from `subreducer` name to custom subreducer state,
   * which will be shallow **merged** with default initial state.
   *
   * Default subreducer state:
   *  - [`visState`](./vis-state.md#INITIAL_VIS_STATE)
   *  - [`mapState`](./map-state.md#INITIAL_MAP_STATE)
   *  - [`mapStyle`](./map-style.md#INITIAL_MAP_STYLE)
   *  - [`uiState`](./ui-state.md#INITIAL_UI_STATE)
   * @mixin keplerGlReducer.initialState
   * @memberof keplerGlReducer
   * @param {Object} iniSt - custom state to be merged with default initial state
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .initialState({
   *    uiState: {readOnly: true}
   *  });
   */


  target.initialState = function initialState(iniSt) {
    var merged = mergeInitialState(targetInitialState, iniSt);
    var targetReducer = provideInitialState(merged);
    return decorate(targetReducer, merged);
  };

  return target;
}
/**
 * Kepler.gl reducer to be mounted to your store. You can mount `keplerGlReducer` at property `keplerGl`, if you choose
 * to mount it at another address e.g. `foo` you will need to specify it when you mount `KeplerGl` component in your app with `getState: state => state.foo`
 * @public
 * @example
 * import keplerGlReducer from 'kepler.gl/reducers';
 * import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
 * import {taskMiddleware} from 'react-palm/tasks';
 *
 * const initialState = {};
 * const reducers = combineReducers({
 *   // <-- mount kepler.gl reducer in your app
 *   keplerGl: keplerGlReducer,
 *
 *   // Your other reducers here
 *   app: appReducer
 * });
 *
 * // using createStore
 * export default createStore(reducer, initialState, applyMiddleware(taskMiddleware));
 */


var keplerGlReducer = decorate(_keplerGlReducer);
var _default = keplerGlReducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yb290LmpzIl0sIm5hbWVzIjpbImluaXRpYWxDb3JlU3RhdGUiLCJwcm92aWRlSW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiY29yZVJlZHVjZXIiLCJoYW5kbGVSZWdpc3RlckVudHJ5Iiwic3RhdGUiLCJwYXlsb2FkIiwiaWQiLCJtaW50IiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCIsImluaXRpYWxVaVN0YXRlIiwicHJldmlvdXNTdGF0ZSIsInVuZGVmaW5lZCIsImhhbmRsZURlbGV0ZUVudHJ5IiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjY3UiLCJjdXJyIiwiaGFuZGxlUmVuYW1lRW50cnkiLCJvbGRJZCIsIm5ld0lkIiwiYWN0aW9uIiwiZm9yRWFjaCIsInVwZGF0ZUl0ZW1TdGF0ZSIsIkFjdGlvblR5cGVzIiwiUkVHSVNURVJfRU5UUlkiLCJERUxFVEVfRU5UUlkiLCJSRU5BTUVfRU5UUlkiLCJfa2VwbGVyR2xSZWR1Y2VyIiwibWVyZ2VJbml0aWFsU3RhdGUiLCJzYXZlZCIsInByb3ZpZGVkIiwia2V5IiwiZGVjb3JhdGUiLCJ0YXJnZXQiLCJzYXZlZEluaXRpYWxTdGF0ZSIsInRhcmdldEluaXRpYWxTdGF0ZSIsInBsdWdpbiIsImN1c3RvbVJlZHVjZXIiLCJuZXh0U3RhdGUiLCJpbmlTdCIsIm1lcmdlZCIsInRhcmdldFJlZHVjZXIiLCJrZXBsZXJHbFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHLEVBQXpCOztBQUVPLFNBQVNDLG1CQUFULENBQTZCQyxZQUE3QixFQUEyQztBQUNoRCxNQUFNQyxXQUFXLEdBQUcsOEJBQW1CRCxZQUFuQixDQUFwQjs7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxT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R1YsUUFBUSxDQUFDTCxnQkFBRCxDQUFoQztlQUNlZSxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcblxuaW1wb3J0IHtfYWN0aW9uRm9yLCBfdXBkYXRlUHJvcGVydHl9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXdyYXBwZXInO1xuaW1wb3J0IHtrZXBsZXJHbEluaXR9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9ucyc7XG5pbXBvcnQge2NvcmVSZWR1Y2VyRmFjdG9yeX0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuLy8gSU5JVElBTF9TVEFURVxuY29uc3QgaW5pdGlhbENvcmVTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3QgY29yZVJlZHVjZXIgPSBjb3JlUmVkdWNlckZhY3RvcnkoaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBoYW5kbGVSZWdpc3RlckVudHJ5ID0gKFxuICAgIHN0YXRlLFxuICAgIHtcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG1pbnQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0LFxuICAgICAgICBpbml0aWFsVWlTdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgKSA9PiB7XG4gICAgLy8gYnkgZGVmYXVsdCwgYWx3YXlzIGNyZWF0ZSBhIG1pbnQgc3RhdGUgZXZlbiBpZiB0aGUgc2FtZSBpZCBhbHJlYWR5IGV4aXN0XG4gICAgLy8gaWYgc3RhdGUuaWQgZXhpc3QgYW5kIG1pbnQ9ZmFsc2UsIGtlZXAgdGhlIGV4aXN0aW5nIHN0YXRlXG4gICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHN0YXRlW2lkXSAmJiBtaW50ID09PSBmYWxzZSA/IHN0YXRlW2lkXSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICAvLyByZWdpc3RlciBlbnRyeSB0byBrZXBsZXIuZ2wgcGFzc2luZyBpbiBtYXBib3ggY29uZmlnIHRvIG1hcFN0eWxlXG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtpZF06IGNvcmVSZWR1Y2VyKFxuICAgICAgICBwcmV2aW91c1N0YXRlLFxuICAgICAgICBrZXBsZXJHbEluaXQoe21hcGJveEFwaUFjY2Vzc1Rva2VuLCBtYXBib3hBcGlVcmwsIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0LCBpbml0aWFsVWlTdGF0ZX0pXG4gICAgICApXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVFbnRyeSA9IChzdGF0ZSwge3BheWxvYWQ6IGlkfSkgPT5cbiAgICBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKFxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIC4uLihjdXJyID09PSBpZCA/IHt9IDoge1tjdXJyXTogc3RhdGVbY3Vycl19KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgY29uc3QgaGFuZGxlUmVuYW1lRW50cnkgPSAoc3RhdGUsIHtwYXlsb2FkOiB7b2xkSWQsIG5ld0lkfX0pID0+XG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShcbiAgICAgIChhY2N1LCBjdXJyKSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi57W2N1cnIgPT09IG9sZElkID8gbmV3SWQgOiBjdXJyXTogc3RhdGVbY3Vycl19XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICByZXR1cm4gKHN0YXRlID0gaW5pdGlhbENvcmVTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gdXBkYXRlIGNoaWxkIHN0YXRlc1xuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZUl0ZW1TdGF0ZSA9IGNvcmVSZWR1Y2VyKHN0YXRlW2lkXSwgX2FjdGlvbkZvcihpZCwgYWN0aW9uKSk7XG4gICAgICBzdGF0ZSA9IF91cGRhdGVQcm9wZXJ0eShzdGF0ZSwgaWQsIHVwZGF0ZUl0ZW1TdGF0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBwZXJmb3JtIGFkZGl0aW9uYWwgc3RhdGUgcmVkdWNpbmcgKGUuZy4gc3dpdGNoIGFjdGlvbi50eXBlIGV0Yy4uLilcbiAgICByZXR1cm4gaGFuZGxlQWN0aW9ucyhcbiAgICAgIHtcbiAgICAgICAgW0FjdGlvblR5cGVzLlJFR0lTVEVSX0VOVFJZXTogaGFuZGxlUmVnaXN0ZXJFbnRyeSxcbiAgICAgICAgW0FjdGlvblR5cGVzLkRFTEVURV9FTlRSWV06IGhhbmRsZURlbGV0ZUVudHJ5LFxuICAgICAgICBbQWN0aW9uVHlwZXMuUkVOQU1FX0VOVFJZXTogaGFuZGxlUmVuYW1lRW50cnlcbiAgICAgIH0sXG4gICAgICBpbml0aWFsQ29yZVN0YXRlXG4gICAgKShzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuY29uc3QgX2tlcGxlckdsUmVkdWNlciA9IHByb3ZpZGVJbml0aWFsU3RhdGUoKTtcblxuZnVuY3Rpb24gbWVyZ2VJbml0aWFsU3RhdGUoc2F2ZWQgPSB7fSwgcHJvdmlkZWQgPSB7fSkge1xuICBjb25zdCBrZXlzID0gWydtYXBTdGF0ZScsICdtYXBTdHlsZScsICd2aXNTdGF0ZScsICd1aVN0YXRlJ107XG5cbiAgLy8gc2hhbGxvdyBtZXJnZSBlYWNoIHJlZHVjZXJcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKHNhdmVkW2tleV0gJiYgcHJvdmlkZWRba2V5XVxuICAgICAgICA/IHtba2V5XTogey4uLnNhdmVkW2tleV0sIC4uLnByb3ZpZGVkW2tleV19fVxuICAgICAgICA6IHtba2V5XTogc2F2ZWRba2V5XSB8fCBwcm92aWRlZFtrZXldIHx8IHt9fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xufVxuXG5mdW5jdGlvbiBkZWNvcmF0ZSh0YXJnZXQsIHNhdmVkSW5pdGlhbFN0YXRlID0ge30pIHtcbiAgY29uc3QgdGFyZ2V0SW5pdGlhbFN0YXRlID0gc2F2ZWRJbml0aWFsU3RhdGU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBrZXBsZXIuZ2wgcmVkdWNlciB0aGF0IHdpbGwgYWxzbyBwYXNzIGVhY2ggYWN0aW9uIHRocm91Z2ggYWRkaXRpb25hbCByZWR1Y2VycyBzcGllY2lmaWVkLlxuICAgKiBUaGUgcGFyYW1ldGVyIHNob3VsZCBiZSBlaXRoZXIgYSByZWR1Y2VyIG1hcCBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gICAqIFRoZSBzdGF0ZSBwYXNzZWQgaW50byB0aGUgYWRkaXRpb25hbCBhY3Rpb24gaGFuZGxlciBpcyB0aGUgaW5zdGFuY2Ugc3RhdGUuXG4gICAqIEl0IHdpbGwgaW5jbHVkZSBhbGwgdGhlIHN1YnJlZHVjZXJzIGB2aXNTdGF0ZWAsIGB1aVN0YXRlYCwgYG1hcFN0YXRlYCBhbmQgYG1hcFN0eWxlYC5cbiAgICogYC5wbHVnaW5gIGlzIG9ubHkgbWVhbnQgdG8gYmUgY2FsbGVkIG9uY2Ugd2hlbiBtb3VudGluZyB0aGUga2VwbGVyR2xSZWR1Y2VyIHRvIHRoZSBzdG9yZS5cbiAgICogKipOb3RlKiogVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24gdG8gZ2l2ZSB5b3UgbW9yZSBmcmVlZG9tIHRvIG1vZGlmeSB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGtlcGxlci5nbCBpbnN0YW5jZS5cbiAgICogWW91IHNob3VsZCBvbmx5IHVzZSB0aGlzIHRvIGFkZGluZyBhZGRpdGlvbmFsIGFjdGlvbnMgaW5zdGVhZCBvZiByZXBsYWNpbmcgZGVmYXVsdCBhY3Rpb25zLlxuICAgKlxuICAgKiBAbWl4aW4ga2VwbGVyR2xSZWR1Y2VyLnBsdWdpblxuICAgKiBAbWVtYmVyb2Yga2VwbGVyR2xSZWR1Y2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBjdXN0b21SZWR1Y2VyIC0gQSByZWR1Y2VyIG1hcCBvciBhIHJlZHVjZXJcbiAgICogQHB1YmxpY1xuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBteUtlcGxlckdsUmVkdWNlciA9IGtlcGxlckdsUmVkdWNlclxuICAgKiAgLnBsdWdpbih7XG4gICAqICAgIC8vIDEuIGFzIHJlZHVjZXIgbWFwXG4gICAqICAgIEhJREVfQU5EX1NIT1dfU0lERV9QQU5FTDogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAqICAgICAgLi4uc3RhdGUsXG4gICAqICAgICAgdWlTdGF0ZToge1xuICAgKiAgICAgICAgLi4uc3RhdGUudWlTdGF0ZSxcbiAgICogICAgICAgIHJlYWRPbmx5OiAhc3RhdGUudWlTdGF0ZS5yZWFkT25seVxuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICogIH0pXG4gICAqIC5wbHVnaW4oaGFuZGxlQWN0aW9ucyh7XG4gICAqICAgLy8gMi4gYXMgcmVkdWNlclxuICAgKiAgICdISURFX01BUF9DT05UUk9MUyc6IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgKiAgICAgLi4uc3RhdGUsXG4gICAqICAgICB1aVN0YXRlOiB7XG4gICAqICAgICAgIC4uLnN0YXRlLnVpU3RhdGUsXG4gICAqICAgICAgIG1hcENvbnRyb2xzOiBoaWRkZW5NYXBDb250cm9sXG4gICAqICAgICB9XG4gICAqICAgfSlcbiAgICogfSwge30pKTtcbiAgICovXG4gIHRhcmdldC5wbHVnaW4gPSBmdW5jdGlvbiBwbHVnaW4oY3VzdG9tUmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgY3VzdG9tUmVkdWNlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGlmIG9ubHkgcHJvdmlkZWQgYSByZWR1Y2VyTWFwLCB3cmFwIGl0IGluIGEgcmVkdWNlclxuICAgICAgY3VzdG9tUmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoY3VzdG9tUmVkdWNlciwge30pO1xuICAgIH1cblxuICAgIC8vIHVzZSAnZnVuY3Rpb24nIGtleXdvcmQgdG8gZW5hYmxlICd0aGlzJ1xuICAgIHJldHVybiBkZWNvcmF0ZSgoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pID0+IHtcbiAgICAgIGxldCBuZXh0U3RhdGUgPSB0aGlzKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAvLyBmb3IgZWFjaCBlbnRyeSBpbiB0aGUgc3RhdGVuXG4gICAgICBPYmplY3Qua2V5cyhuZXh0U3RhdGUpLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgY2hpbGQgc3RhdGVzXG4gICAgICAgIG5leHRTdGF0ZSA9IF91cGRhdGVQcm9wZXJ0eShcbiAgICAgICAgICBuZXh0U3RhdGUsXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgY3VzdG9tUmVkdWNlcihuZXh0U3RhdGVbaWRdLCBfYWN0aW9uRm9yKGlkLCBhY3Rpb24pKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJlZHVjZXIgdGhhdCBpbml0aWF0ZWQgd2l0aCBjdXN0b20gaW5pdGlhbCBzdGF0ZS5cbiAgICogVGhlIHBhcmFtZXRlciBzaG91bGQgYmUgYW4gb2JqZWN0IG1hcHBpbmcgZnJvbSBgc3VicmVkdWNlcmAgbmFtZSB0byBjdXN0b20gc3VicmVkdWNlciBzdGF0ZSxcbiAgICogd2hpY2ggd2lsbCBiZSBzaGFsbG93ICoqbWVyZ2VkKiogd2l0aCBkZWZhdWx0IGluaXRpYWwgc3RhdGUuXG4gICAqXG4gICAqIERlZmF1bHQgc3VicmVkdWNlciBzdGF0ZTpcbiAgICogIC0gW2B2aXNTdGF0ZWBdKC4vdmlzLXN0YXRlLm1kI0lOSVRJQUxfVklTX1NUQVRFKVxuICAgKiAgLSBbYG1hcFN0YXRlYF0oLi9tYXAtc3RhdGUubWQjSU5JVElBTF9NQVBfU1RBVEUpXG4gICAqICAtIFtgbWFwU3R5bGVgXSguL21hcC1zdHlsZS5tZCNJTklUSUFMX01BUF9TVFlMRSlcbiAgICogIC0gW2B1aVN0YXRlYF0oLi91aS1zdGF0ZS5tZCNJTklUSUFMX1VJX1NUQVRFKVxuICAgKiBAbWl4aW4ga2VwbGVyR2xSZWR1Y2VyLmluaXRpYWxTdGF0ZVxuICAgKiBAbWVtYmVyb2Yga2VwbGVyR2xSZWR1Y2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbmlTdCAtIGN1c3RvbSBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBkZWZhdWx0IGluaXRpYWwgc3RhdGVcbiAgICogQHB1YmxpY1xuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBteUtlcGxlckdsUmVkdWNlciA9IGtlcGxlckdsUmVkdWNlclxuICAgKiAgLmluaXRpYWxTdGF0ZSh7XG4gICAqICAgIHVpU3RhdGU6IHtyZWFkT25seTogdHJ1ZX1cbiAgICogIH0pO1xuICAgKi9cbiAgdGFyZ2V0LmluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGluaXRpYWxTdGF0ZShpbmlTdCkge1xuICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlSW5pdGlhbFN0YXRlKHRhcmdldEluaXRpYWxTdGF0ZSwgaW5pU3QpO1xuICAgIGNvbnN0IHRhcmdldFJlZHVjZXIgPSBwcm92aWRlSW5pdGlhbFN0YXRlKG1lcmdlZCk7XG5cbiAgICByZXR1cm4gZGVjb3JhdGUodGFyZ2V0UmVkdWNlciwgbWVyZ2VkKTtcbiAgfTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIEtlcGxlci5nbCByZWR1Y2VyIHRvIGJlIG1vdW50ZWQgdG8geW91ciBzdG9yZS4gWW91IGNhbiBtb3VudCBga2VwbGVyR2xSZWR1Y2VyYCBhdCBwcm9wZXJ0eSBga2VwbGVyR2xgLCBpZiB5b3UgY2hvb3NlXG4gKiB0byBtb3VudCBpdCBhdCBhbm90aGVyIGFkZHJlc3MgZS5nLiBgZm9vYCB5b3Ugd2lsbCBuZWVkIHRvIHNwZWNpZnkgaXQgd2hlbiB5b3UgbW91bnQgYEtlcGxlckdsYCBjb21wb25lbnQgaW4geW91ciBhcHAgd2l0aCBgZ2V0U3RhdGU6IHN0YXRlID0+IHN0YXRlLmZvb2BcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyIGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiBpbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xuICogaW1wb3J0IHt0YXNrTWlkZGxld2FyZX0gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG4gKlxuICogY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAgIC8vIDwtLSBtb3VudCBrZXBsZXIuZ2wgcmVkdWNlciBpbiB5b3VyIGFwcFxuICogICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICpcbiAqICAgLy8gWW91ciBvdGhlciByZWR1Y2VycyBoZXJlXG4gKiAgIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogLy8gdXNpbmcgY3JlYXRlU3RvcmVcbiAqIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRhc2tNaWRkbGV3YXJlKSk7XG4gKi9cbmNvbnN0IGtlcGxlckdsUmVkdWNlciA9IGRlY29yYXRlKF9rZXBsZXJHbFJlZHVjZXIpO1xuZXhwb3J0IGRlZmF1bHQga2VwbGVyR2xSZWR1Y2VyO1xuIl19