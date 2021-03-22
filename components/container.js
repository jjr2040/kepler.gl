"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerFactory = ContainerFactory;
exports.injectComponents = injectComponents;
exports["default"] = exports.appInjector = exports.ERROR_MSG = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _window = require("global/window");

var _injector = require("./injector");

var _keplerGl = _interopRequireDefault(require("./kepler-gl"));

var _actionWrapper = require("../actions/action-wrapper");

var _identityActions = require("../actions/identity-actions");

var _dataUtils = require("../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ERROR_MSG = {
  noState: "kepler.gl state does not exist. " + "You might forget to mount keplerGlReducer in your root reducer." + "If it is not mounted as state.keplerGl by default, you need to provide getState as a prop"
};
exports.ERROR_MSG = ERROR_MSG;
ContainerFactory.deps = [_keplerGl["default"]];

function ContainerFactory(KeplerGl) {
  /** @lends KeplerGl */

  /**
    * Main Kepler.gl Component
    * @param {Object} props
    *
    * @param {string} props.id - _required_
    *
    * - Default: `map`
    * The id of this KeplerGl instance. `id` is required if you have multiple
    * KeplerGl instances in your app. It defines the prop name of the KeplerGl state that is
    * stored in the KeplerGl reducer. For example, the state of the KeplerGl component with id `foo` is
    * stored in `state.keplerGl.foo`.
    *
    * In case you create multiple kepler.gl instances using the same id, the kepler.gl state defined by the entry will be
    * overridden by the latest instance and reset to a blank state.
    * @param {string} props.mapboxApiAccessToken - _required_
    * @param {string} props.mapboxApiUrl - _optional_
    * @param {Boolean} props.mapStylesReplaceDefault - _optional_
    * @param {object} props.initialUiState - _optional_
     * You can create a free account at [www.mapbox.com](www.mapbox.com) and create a token at
    * [www.mapbox.com/account/access-tokens](www.mapbox.com/account/access-tokens)
    *
    *
    * @param {Number} props.width - _required_ Width of the KeplerGl UI.
    * @public
   */
  var Container = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Container, _Component);

    var _super = _createSuper(Container);

    // default id and address if not provided
    function Container(props, ctx) {
      var _this;

      (0, _classCallCheck2["default"])(this, Container);
      _this = _super.call(this, props, ctx);
      _this.getSelector = (0, _lodash["default"])(function (id, getState) {
        return function (state) {
          if (!getState(state)) {
            // log error
            _window.console.error(ERROR_MSG.noState);

            return null;
          }

          return getState(state)[id];
        };
      });
      _this.getDispatch = (0, _lodash["default"])(function (id, dispatch) {
        return (0, _actionWrapper.forwardTo)(id, dispatch);
      });
      return _this;
    }

    (0, _createClass2["default"])(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            id = _this$props.id,
            mint = _this$props.mint,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            mapStylesReplaceDefault = _this$props.mapStylesReplaceDefault,
            initialUiState = _this$props.initialUiState; // add a new entry to reducer

        this.props.dispatch((0, _identityActions.registerEntry)({
          id: id,
          mint: mint,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapStylesReplaceDefault: mapStylesReplaceDefault,
          initialUiState: initialUiState
        }));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // check if id has changed, if true, copy state over
        if ((0, _dataUtils.notNullorUndefined)(prevProps.id) && (0, _dataUtils.notNullorUndefined)(this.props.id) && prevProps.id !== this.props.id) {
          this.props.dispatch((0, _identityActions.renameEntry)(prevProps.id, this.props.id));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.mint !== false) {
          // delete entry in reducer
          this.props.dispatch((0, _identityActions.deleteEntry)(this.props.id));
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            id = _this$props2.id,
            getState = _this$props2.getState,
            dispatch = _this$props2.dispatch,
            state = _this$props2.state;
        var selector = this.getSelector(id, getState);

        if (!selector || !selector(state)) {
          // instance state hasn't been mounted yet
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        return /*#__PURE__*/_react["default"].createElement(KeplerGl, (0, _extends2["default"])({}, this.props, {
          id: id,
          selector: selector,
          dispatch: this.getDispatch(id, dispatch)
        }));
      }
    }]);
    return Container;
  }(_react.Component);

  (0, _defineProperty2["default"])(Container, "defaultProps", {
    id: 'map',
    getState: function getState(state) {
      return state.keplerGl;
    },
    mint: true
  });

  var mapStateToProps = function mapStateToProps(state, props) {
    return _objectSpread({
      state: state
    }, props);
  };

  var dispatchToProps = function dispatchToProps(dispatch) {
    return {
      dispatch: dispatch
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(Container);
}

var allDependencies = (0, _injector.flattenDeps)([], ContainerFactory); // provide all dependencies to appInjector

var appInjector = allDependencies.reduce(function (inj, factory) {
  return inj.provide(factory, factory);
}, (0, _injector.injector)()); // Helper to inject custom components and return kepler.gl container

exports.appInjector = appInjector;

function injectComponents() {
  var recipes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _injector.provideRecipesToInjector)(recipes, appInjector).get(ContainerFactory);
}

var InjectedContainer = appInjector.get(ContainerFactory);
var _default = InjectedContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJFUlJPUl9NU0ciLCJub1N0YXRlIiwiQ29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJLZXBsZXJHbEZhY3RvcnkiLCJLZXBsZXJHbCIsIkNvbnRhaW5lciIsInByb3BzIiwiY3R4IiwiZ2V0U2VsZWN0b3IiLCJpZCIsImdldFN0YXRlIiwic3RhdGUiLCJDb25zb2xlIiwiZXJyb3IiLCJnZXREaXNwYXRjaCIsImRpc3BhdGNoIiwibWludCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJpbml0aWFsVWlTdGF0ZSIsInByZXZQcm9wcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50Iiwia2VwbGVyR2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkaXNwYXRjaFRvUHJvcHMiLCJhbGxEZXBlbmRlbmNpZXMiLCJhcHBJbmplY3RvciIsInJlZHVjZSIsImluaiIsImZhY3RvcnkiLCJwcm92aWRlIiwiaW5qZWN0Q29tcG9uZW50cyIsInJlY2lwZXMiLCJnZXQiLCJJbmplY3RlZENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxPQUFPLEVBQ0w7QUFGcUIsQ0FBbEI7O0FBT1BDLGdCQUFnQixDQUFDQyxJQUFqQixHQUF3QixDQUFDQyxvQkFBRCxDQUF4Qjs7QUFFTyxTQUFTRixnQkFBVCxDQUEwQkcsUUFBMUIsRUFBb0M7QUFDekM7O0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUF6QixFQUFrQ04sV0FBbEMsRUFBK0NPLEdBQS9DLENBQW1EbEMsZ0JBQW5ELENBQVA7QUFDRDs7QUFFRCxJQUFNbUMsaUJBQWlCLEdBQUdSLFdBQVcsQ0FBQ08sR0FBWixDQUFnQmxDLGdCQUFoQixDQUExQjtlQUVlbUMsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtpbmplY3RvciwgcHJvdmlkZVJlY2lwZXNUb0luamVjdG9yLCBmbGF0dGVuRGVwc30gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgS2VwbGVyR2xGYWN0b3J5IGZyb20gJy4va2VwbGVyLWdsJztcbmltcG9ydCB7Zm9yd2FyZFRvfSBmcm9tICdhY3Rpb25zL2FjdGlvbi13cmFwcGVyJztcblxuaW1wb3J0IHtyZWdpc3RlckVudHJ5LCBkZWxldGVFbnRyeSwgcmVuYW1lRW50cnl9IGZyb20gJ2FjdGlvbnMvaWRlbnRpdHktYWN0aW9ucyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9NU0cgPSB7XG4gIG5vU3RhdGU6XG4gICAgYGtlcGxlci5nbCBzdGF0ZSBkb2VzIG5vdCBleGlzdC4gYCArXG4gICAgYFlvdSBtaWdodCBmb3JnZXQgdG8gbW91bnQga2VwbGVyR2xSZWR1Y2VyIGluIHlvdXIgcm9vdCByZWR1Y2VyLmAgK1xuICAgIGBJZiBpdCBpcyBub3QgbW91bnRlZCBhcyBzdGF0ZS5rZXBsZXJHbCBieSBkZWZhdWx0LCB5b3UgbmVlZCB0byBwcm92aWRlIGdldFN0YXRlIGFzIGEgcHJvcGBcbn07XG5cbkNvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtLZXBsZXJHbEZhY3RvcnldO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyRmFjdG9yeShLZXBsZXJHbCkge1xuICAvKiogQGxlbmRzIEtlcGxlckdsICovXG4gIC8qKlxuICAgICogTWFpbiBLZXBsZXIuZ2wgQ29tcG9uZW50XG4gICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaWQgLSBfcmVxdWlyZWRfXG4gICAgKlxuICAgICogLSBEZWZhdWx0OiBgbWFwYFxuICAgICogVGhlIGlkIG9mIHRoaXMgS2VwbGVyR2wgaW5zdGFuY2UuIGBpZGAgaXMgcmVxdWlyZWQgaWYgeW91IGhhdmUgbXVsdGlwbGVcbiAgICAqIEtlcGxlckdsIGluc3RhbmNlcyBpbiB5b3VyIGFwcC4gSXQgZGVmaW5lcyB0aGUgcHJvcCBuYW1lIG9mIHRoZSBLZXBsZXJHbCBzdGF0ZSB0aGF0IGlzXG4gICAgKiBzdG9yZWQgaW4gdGhlIEtlcGxlckdsIHJlZHVjZXIuIEZvciBleGFtcGxlLCB0aGUgc3RhdGUgb2YgdGhlIEtlcGxlckdsIGNvbXBvbmVudCB3aXRoIGlkIGBmb29gIGlzXG4gICAgKiBzdG9yZWQgaW4gYHN0YXRlLmtlcGxlckdsLmZvb2AuXG4gICAgKlxuICAgICogSW4gY2FzZSB5b3UgY3JlYXRlIG11bHRpcGxlIGtlcGxlci5nbCBpbnN0YW5jZXMgdXNpbmcgdGhlIHNhbWUgaWQsIHRoZSBrZXBsZXIuZ2wgc3RhdGUgZGVmaW5lZCBieSB0aGUgZW50cnkgd2lsbCBiZVxuICAgICogb3ZlcnJpZGRlbiBieSB0aGUgbGF0ZXN0IGluc3RhbmNlIGFuZCByZXNldCB0byBhIGJsYW5rIHN0YXRlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VuIC0gX3JlcXVpcmVkX1xuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm1hcGJveEFwaVVybCAtIF9vcHRpb25hbF9cbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgLSBfb3B0aW9uYWxfXG4gICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMuaW5pdGlhbFVpU3RhdGUgLSBfb3B0aW9uYWxfXG5cbiAgICAqIFlvdSBjYW4gY3JlYXRlIGEgZnJlZSBhY2NvdW50IGF0IFt3d3cubWFwYm94LmNvbV0od3d3Lm1hcGJveC5jb20pIGFuZCBjcmVhdGUgYSB0b2tlbiBhdFxuICAgICogW3d3dy5tYXBib3guY29tL2FjY291bnQvYWNjZXNzLXRva2Vuc10od3d3Lm1hcGJveC5jb20vYWNjb3VudC9hY2Nlc3MtdG9rZW5zKVxuICAgICpcbiAgICAqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gcHJvcHMud2lkdGggLSBfcmVxdWlyZWRfIFdpZHRoIG9mIHRoZSBLZXBsZXJHbCBVSS5cbiAgICAqIEBwdWJsaWNcbiAgICovXG4gIGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gZGVmYXVsdCBpZCBhbmQgYWRkcmVzcyBpZiBub3QgcHJvdmlkZWRcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaWQ6ICdtYXAnLFxuICAgICAgZ2V0U3RhdGU6IHN0YXRlID0+IHN0YXRlLmtlcGxlckdsLFxuICAgICAgbWludDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY3R4KSB7XG4gICAgICBzdXBlcihwcm9wcywgY3R4KTtcblxuICAgICAgdGhpcy5nZXRTZWxlY3RvciA9IG1lbW9pemUoKGlkLCBnZXRTdGF0ZSkgPT4gc3RhdGUgPT4ge1xuICAgICAgICBpZiAoIWdldFN0YXRlKHN0YXRlKSkge1xuICAgICAgICAgIC8vIGxvZyBlcnJvclxuICAgICAgICAgIENvbnNvbGUuZXJyb3IoRVJST1JfTVNHLm5vU3RhdGUpO1xuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKHN0YXRlKVtpZF07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0RGlzcGF0Y2ggPSBtZW1vaXplKChpZCwgZGlzcGF0Y2gpID0+IGZvcndhcmRUbyhpZCwgZGlzcGF0Y2gpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG1pbnQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0LFxuICAgICAgICBpbml0aWFsVWlTdGF0ZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIC8vIGFkZCBhIG5ldyBlbnRyeSB0byByZWR1Y2VyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICByZWdpc3RlckVudHJ5KHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBtaW50LFxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCxcbiAgICAgICAgICBpbml0aWFsVWlTdGF0ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyBjaGVjayBpZiBpZCBoYXMgY2hhbmdlZCwgaWYgdHJ1ZSwgY29weSBzdGF0ZSBvdmVyXG4gICAgICBpZiAoXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZChwcmV2UHJvcHMuaWQpICYmXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZCh0aGlzLnByb3BzLmlkKSAmJlxuICAgICAgICBwcmV2UHJvcHMuaWQgIT09IHRoaXMucHJvcHMuaWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbmFtZUVudHJ5KHByZXZQcm9wcy5pZCwgdGhpcy5wcm9wcy5pZCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubWludCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGVsZXRlIGVudHJ5IGluIHJlZHVjZXJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVFbnRyeSh0aGlzLnByb3BzLmlkKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lkLCBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3IoaWQsIGdldFN0YXRlKTtcblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCAhc2VsZWN0b3Ioc3RhdGUpKSB7XG4gICAgICAgIC8vIGluc3RhbmNlIHN0YXRlIGhhc24ndCBiZWVuIG1vdW50ZWQgeWV0XG4gICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8S2VwbGVyR2xcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgc2VsZWN0b3I9e3NlbGVjdG9yfVxuICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLmdldERpc3BhdGNoKGlkLCBkaXNwYXRjaCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7c3RhdGUsIC4uLnByb3BzfSk7XG4gIGNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7ZGlzcGF0Y2h9KTtcbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKENvbnRhaW5lcik7XG59XG5cbmNvbnN0IGFsbERlcGVuZGVuY2llcyA9IGZsYXR0ZW5EZXBzKFtdLCBDb250YWluZXJGYWN0b3J5KTtcblxuLy8gcHJvdmlkZSBhbGwgZGVwZW5kZW5jaWVzIHRvIGFwcEluamVjdG9yXG5leHBvcnQgY29uc3QgYXBwSW5qZWN0b3IgPSBhbGxEZXBlbmRlbmNpZXMucmVkdWNlKFxuICAoaW5qLCBmYWN0b3J5KSA9PiBpbmoucHJvdmlkZShmYWN0b3J5LCBmYWN0b3J5KSxcbiAgaW5qZWN0b3IoKVxuKTtcblxuLy8gSGVscGVyIHRvIGluamVjdCBjdXN0b20gY29tcG9uZW50cyBhbmQgcmV0dXJuIGtlcGxlci5nbCBjb250YWluZXJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RDb21wb25lbnRzKHJlY2lwZXMgPSBbXSkge1xuICByZXR1cm4gcHJvdmlkZVJlY2lwZXNUb0luamVjdG9yKHJlY2lwZXMsIGFwcEluamVjdG9yKS5nZXQoQ29udGFpbmVyRmFjdG9yeSk7XG59XG5cbmNvbnN0IEluamVjdGVkQ29udGFpbmVyID0gYXBwSW5qZWN0b3IuZ2V0KENvbnRhaW5lckZhY3RvcnkpO1xuXG5leHBvcnQgZGVmYXVsdCBJbmplY3RlZENvbnRhaW5lcjtcbiJdfQ==