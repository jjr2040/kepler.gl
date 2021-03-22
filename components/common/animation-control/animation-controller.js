"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _constants = require("../../../constants");

var _console = _interopRequireDefault(require("global/console"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function AnimationControllerFactory() {
  /**
   * 4 Animation Window Types
   * 1. free
   *  |->  |->
   * Current time is a fixed range, animate a moving window that calls next animation frames continuously
   * The increment id based on domain / BASE_SPEED * SPEED
   *
   * 2. incremental
   * |    |->
   * Same as free, current time is a growing range, only the max value of range increment during animation.
   * The increment is also based on domain / BASE_SPEED * SPEED
   *
   * 3. point
   * o -> o
   * Current time is a point, animate a moving point calls next animation frame continuously
   * The increment is based on domain / BASE_SPEED * SPEED
   *
   * 4. interval
   * o ~> o
   * Current time is a point. An array of sorted time steps are provided,
   * animate a moving point jumps to the next step
   */
  var AnimationController = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationController, _Component);

    var _super = _createSuper(AnimationController);

    function AnimationController() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isAnimating: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_timer", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_animate", function (delay) {
        _this._startTime = new Date().getTime();

        var loop = function loop() {
          var current = new Date().getTime(); // @ts-ignore

          var delta = current - _this._startTime;

          if (delta >= delay) {
            _this._nextFrame();

            _this._startTime = new Date().getTime();
          } else {
            _this._timer = (0, _window.requestAnimationFrame)(loop);
          }
        };

        _this._timer = (0, _window.requestAnimationFrame)(loop);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimationByDomain", function () {
        var _this$props = _this.props,
            domain = _this$props.domain,
            value = _this$props.value,
            animationWindow = _this$props.animationWindow;

        if (Array.isArray(value)) {
          if (animationWindow === _constants.ANIMATION_WINDOW.incremental) {
            _this.props.updateAnimation([value[0], value[0] + 1]);
          } else {
            _this.props.updateAnimation([domain[0], domain[0] + value[1] - value[0]]);
          }
        } else {
          _this.props.updateAnimation(domain[0]);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimtionByTimeStep", function () {
        // go to the first steps
        _this.props.updateAnimation([_this.props.steps[0], 0]);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimation", function () {
        if (_this.props.animationWindow === _constants.ANIMATION_WINDOW.interval) {
          _this._resetAnimtionByTimeStep();
        } else {
          _this._resetAnimationByDomain();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        _this._pauseAnimation();

        if (_this.props.animationWindow === _constants.ANIMATION_WINDOW.interval) {
          // animate by interval
          // 30*600
          var _this$props2 = _this.props,
              steps = _this$props2.steps,
              speed = _this$props2.speed;

          if (!Array.isArray(steps) || !steps.length) {
            _console["default"].warn('animation steps should be an array');

            return;
          } // when speed = 1, animation should loop through 600 frames at 60 FPS
          // calculate delay based on # steps


          var delay = _constants.BASE_SPEED * (1000 / _constants.FPS) / steps.length / (speed || 1);

          _this._animate(delay);
        } else {
          _this._timer = (0, _window.requestAnimationFrame)(_this._nextFrame);
        }

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        if (_this._timer) {
          (0, _window.cancelAnimationFrame)(_this._timer);
          _this._timer = null;
        }

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._timer = null;
        var nextValue = _this.props.animationWindow === _constants.ANIMATION_WINDOW.interval ? _this._nextFrameByTimeStep() : _this._nextFrameByDomain();

        _this.props.updateAnimation(nextValue);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationController, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._timer) {
          (0, _window.cancelAnimationFrame)(this._timer);
        }
      }
    }, {
      key: "_startOrPauseAnimation",
      value: function _startOrPauseAnimation() {
        if (!this._timer && this.props.isAnimating) {
          this._startAnimation();
        } else if (this._timer && !this.props.isAnimating) {
          this._pauseAnimation();
        }
      }
    }, {
      key: "_nextFrameByDomain",
      value: function _nextFrameByDomain() {
        var _this$props3 = this.props,
            domain = _this$props3.domain,
            value = _this$props3.value,
            speed = _this$props3.speed,
            baseSpeed = _this$props3.baseSpeed,
            animationWindow = _this$props3.animationWindow;
        var delta = (domain[1] - domain[0]) / baseSpeed * speed; // loop when reaches the end
        // current time is a range

        if (Array.isArray(value)) {
          var value0;
          var value1;
          var readEnd = value[1] + delta > domain[1];

          if (animationWindow === _constants.ANIMATION_WINDOW.incremental) {
            value0 = value[0];
            value1 = readEnd ? value[0] + 1 : value[1] + delta;
          } else {
            value0 = readEnd ? domain[0] : value[0] + delta;
            value1 = value0 + value[1] - value[0];
          }

          return [value0, value1];
        } // current time is a point


        return value + delta > domain[1] ? domain[0] : value + delta;
      }
    }, {
      key: "_nextFrameByTimeStep",
      value: function _nextFrameByTimeStep() {
        var _this$props4 = this.props,
            steps = _this$props4.steps,
            value = _this$props4.value;
        var val = Array.isArray(value) ? value[0] : value;
        var index = (0, _d3Array.bisectLeft)(steps, val);
        var nextIdx = index >= steps.length - 1 ? 0 : index + 1;
        return [steps[nextIdx], nextIdx];
      }
    }, {
      key: "render",
      value: function render() {
        var isAnimating = this.state.isAnimating;
        var children = this.props.children;
        return typeof children === 'function' ? children({
          isAnimating: isAnimating,
          start: this._startAnimation,
          pause: this._pauseAnimation,
          reset: this._resetAnimation
        }) : null;
      }
    }]);
    return AnimationController;
  }(_react.Component);

  (0, _defineProperty2["default"])(AnimationController, "defaultProps", {
    baseSpeed: _constants.BASE_SPEED,
    speed: 1,
    steps: null,
    animationWindow: _constants.ANIMATION_WINDOW.free
  });
  return AnimationController;
}

var _default = AnimationControllerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSIsIkFuaW1hdGlvbkNvbnRyb2xsZXIiLCJpc0FuaW1hdGluZyIsImRlbGF5IiwiX3N0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibG9vcCIsImN1cnJlbnQiLCJkZWx0YSIsIl9uZXh0RnJhbWUiLCJfdGltZXIiLCJwcm9wcyIsImRvbWFpbiIsInZhbHVlIiwiYW5pbWF0aW9uV2luZG93IiwiQXJyYXkiLCJpc0FycmF5IiwiQU5JTUFUSU9OX1dJTkRPVyIsImluY3JlbWVudGFsIiwidXBkYXRlQW5pbWF0aW9uIiwic3RlcHMiLCJpbnRlcnZhbCIsIl9yZXNldEFuaW10aW9uQnlUaW1lU3RlcCIsIl9yZXNldEFuaW1hdGlvbkJ5RG9tYWluIiwiX3BhdXNlQW5pbWF0aW9uIiwic3BlZWQiLCJsZW5ndGgiLCJDb25zb2xlIiwid2FybiIsIkJBU0VfU1BFRUQiLCJGUFMiLCJfYW5pbWF0ZSIsInNldFN0YXRlIiwibmV4dFZhbHVlIiwiX25leHRGcmFtZUJ5VGltZVN0ZXAiLCJfbmV4dEZyYW1lQnlEb21haW4iLCJfc3RhcnRPclBhdXNlQW5pbWF0aW9uIiwiX3N0YXJ0QW5pbWF0aW9uIiwiYmFzZVNwZWVkIiwidmFsdWUwIiwidmFsdWUxIiwicmVhZEVuZCIsInZhbCIsImluZGV4IiwibmV4dElkeCIsInN0YXRlIiwiY2hpbGRyZW4iLCJzdGFydCIsInBhdXNlIiwicmVzZXQiLCJfcmVzZXRBbmltYXRpb24iLCJDb21wb25lbnQiLCJmcmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsMEJBQVQsR0FBc0M7QUFDcEM7QUFDRjtBQUNBO0FBQ0E7QUFD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UCxLQUFvQixVQUFwQixHQUNIQSxRQUFRLENBQUM7QUFDUDdDLFVBQUFBLFdBQVcsRUFBWEEsV0FETztBQUVQOEMsVUFBQUEsS0FBSyxFQUFFLEtBQUtWLGVBRkw7QUFHUFcsVUFBQUEsS0FBSyxFQUFFLEtBQUt4QixlQUhMO0FBSVB5QixVQUFBQSxLQUFLLEVBQUUsS0FBS0M7QUFKTCxTQUFELENBREwsR0FPSCxJQVBKO0FBUUQ7QUE3TGlDO0FBQUE7QUFBQSxJQXVCRkMsZ0JBdkJFOztBQUFBLG1DQXVCOUJuRCxtQkF2QjhCLGtCQXlCWjtBQUNwQnNDLElBQUFBLFNBQVMsRUFBRVQscUJBRFM7QUFFcEJKLElBQUFBLEtBQUssRUFBRSxDQUZhO0FBR3BCTCxJQUFBQSxLQUFLLEVBQUUsSUFIYTtBQUlwQk4sSUFBQUEsZUFBZSxFQUFFRyw0QkFBaUJtQztBQUpkLEdBekJZO0FBZ01wQyxTQUFPcEQsbUJBQVA7QUFDRDs7ZUFFY0QsMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtiaXNlY3RMZWZ0fSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQge3JlcXVlc3RBbmltYXRpb25GcmFtZSwgY2FuY2VsQW5pbWF0aW9uRnJhbWV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtCQVNFX1NQRUVELCBGUFMsIEFOSU1BVElPTl9XSU5ET1d9IGZyb20gJ2NvbnN0YW50cyc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5KCkge1xuICAvKipcbiAgICogNCBBbmltYXRpb24gV2luZG93IFR5cGVzXG4gICAqIDEuIGZyZWVcbiAgICogIHwtPiAgfC0+XG4gICAqIEN1cnJlbnQgdGltZSBpcyBhIGZpeGVkIHJhbmdlLCBhbmltYXRlIGEgbW92aW5nIHdpbmRvdyB0aGF0IGNhbGxzIG5leHQgYW5pbWF0aW9uIGZyYW1lcyBjb250aW51b3VzbHlcbiAgICogVGhlIGluY3JlbWVudCBpZCBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAgICpcbiAgICogMi4gaW5jcmVtZW50YWxcbiAgICogfCAgICB8LT5cbiAgICogU2FtZSBhcyBmcmVlLCBjdXJyZW50IHRpbWUgaXMgYSBncm93aW5nIHJhbmdlLCBvbmx5IHRoZSBtYXggdmFsdWUgb2YgcmFuZ2UgaW5jcmVtZW50IGR1cmluZyBhbmltYXRpb24uXG4gICAqIFRoZSBpbmNyZW1lbnQgaXMgYWxzbyBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAgICpcbiAgICogMy4gcG9pbnRcbiAgICogbyAtPiBvXG4gICAqIEN1cnJlbnQgdGltZSBpcyBhIHBvaW50LCBhbmltYXRlIGEgbW92aW5nIHBvaW50IGNhbGxzIG5leHQgYW5pbWF0aW9uIGZyYW1lIGNvbnRpbnVvdXNseVxuICAgKiBUaGUgaW5jcmVtZW50IGlzIGJhc2VkIG9uIGRvbWFpbiAvIEJBU0VfU1BFRUQgKiBTUEVFRFxuICAgKlxuICAgKiA0LiBpbnRlcnZhbFxuICAgKiBvIH4+IG9cbiAgICogQ3VycmVudCB0aW1lIGlzIGEgcG9pbnQuIEFuIGFycmF5IG9mIHNvcnRlZCB0aW1lIHN0ZXBzIGFyZSBwcm92aWRlZCxcbiAgICogYW5pbWF0ZSBhIG1vdmluZyBwb2ludCBqdW1wcyB0byB0aGUgbmV4dCBzdGVwXG4gICAqL1xuICBjbGFzcyBBbmltYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBUT0RPOiBjb252ZXJ0IHRoZSBlbnRpcmUgY29tcG9uZW50IHRvIHVzZSBob29rcyBpbiB0aGUgbmV4dCBQUlxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBiYXNlU3BlZWQ6IEJBU0VfU1BFRUQsXG4gICAgICBzcGVlZDogMSxcbiAgICAgIHN0ZXBzOiBudWxsLFxuICAgICAgYW5pbWF0aW9uV2luZG93OiBBTklNQVRJT05fV0lORE9XLmZyZWVcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBpc0FuaW1hdGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9zdGFydE9yUGF1c2VBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLl9zdGFydE9yUGF1c2VBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90aW1lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWVyID0gbnVsbDtcblxuICAgIF9zdGFydE9yUGF1c2VBbmltYXRpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuX3RpbWVyICYmIHRoaXMucHJvcHMuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdGltZXIgJiYgIXRoaXMucHJvcHMuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgdGhpcy5fcGF1c2VBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYW5pbWF0ZSA9IGRlbGF5ID0+IHtcbiAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjdXJyZW50IC0gdGhpcy5fc3RhcnRUaW1lO1xuXG4gICAgICAgIGlmIChkZWx0YSA+PSBkZWxheSkge1xuICAgICAgICAgIHRoaXMuX25leHRGcmFtZSgpO1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3RpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl90aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuXG4gICAgX3Jlc2V0QW5pbWF0aW9uQnlEb21haW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZSwgYW5pbWF0aW9uV2luZG93fSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbldpbmRvdyA9PT0gQU5JTUFUSU9OX1dJTkRPVy5pbmNyZW1lbnRhbCkge1xuICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uKFt2YWx1ZVswXSwgdmFsdWVbMF0gKyAxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb24oW2RvbWFpblswXSwgZG9tYWluWzBdICsgdmFsdWVbMV0gLSB2YWx1ZVswXV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvbihkb21haW5bMF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcmVzZXRBbmltdGlvbkJ5VGltZVN0ZXAgPSAoKSA9PiB7XG4gICAgICAvLyBnbyB0byB0aGUgZmlyc3Qgc3RlcHNcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uKFt0aGlzLnByb3BzLnN0ZXBzWzBdLCAwXSk7XG4gICAgfTtcblxuICAgIF9yZXNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbldpbmRvdyA9PT0gQU5JTUFUSU9OX1dJTkRPVy5pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9yZXNldEFuaW10aW9uQnlUaW1lU3RlcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzZXRBbmltYXRpb25CeURvbWFpbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc3RhcnRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXVzZUFuaW1hdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmludGVydmFsKSB7XG4gICAgICAgIC8vIGFuaW1hdGUgYnkgaW50ZXJ2YWxcbiAgICAgICAgLy8gMzAqNjAwXG4gICAgICAgIGNvbnN0IHtzdGVwcywgc3BlZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN0ZXBzKSB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgQ29uc29sZS53YXJuKCdhbmltYXRpb24gc3RlcHMgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdoZW4gc3BlZWQgPSAxLCBhbmltYXRpb24gc2hvdWxkIGxvb3AgdGhyb3VnaCA2MDAgZnJhbWVzIGF0IDYwIEZQU1xuICAgICAgICAvLyBjYWxjdWxhdGUgZGVsYXkgYmFzZWQgb24gIyBzdGVwc1xuICAgICAgICBjb25zdCBkZWxheSA9IChCQVNFX1NQRUVEICogKDEwMDAgLyBGUFMpKSAvIHN0ZXBzLmxlbmd0aCAvIChzcGVlZCB8fCAxKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZShkZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9uZXh0RnJhbWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0FuaW1hdGluZzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBfcGF1c2VBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fdGltZXIpO1xuICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0FuaW1hdGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgX25leHRGcmFtZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9XG4gICAgICAgIHRoaXMucHJvcHMuYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmludGVydmFsXG4gICAgICAgICAgPyB0aGlzLl9uZXh0RnJhbWVCeVRpbWVTdGVwKClcbiAgICAgICAgICA6IHRoaXMuX25leHRGcmFtZUJ5RG9tYWluKCk7XG5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uKG5leHRWYWx1ZSk7XG4gICAgfTtcblxuICAgIF9uZXh0RnJhbWVCeURvbWFpbigpIHtcbiAgICAgIGNvbnN0IHtkb21haW4sIHZhbHVlLCBzcGVlZCwgYmFzZVNwZWVkLCBhbmltYXRpb25XaW5kb3d9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRlbHRhID0gKChkb21haW5bMV0gLSBkb21haW5bMF0pIC8gYmFzZVNwZWVkKSAqIHNwZWVkO1xuXG4gICAgICAvLyBsb29wIHdoZW4gcmVhY2hlcyB0aGUgZW5kXG4gICAgICAvLyBjdXJyZW50IHRpbWUgaXMgYSByYW5nZVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCB2YWx1ZTA7XG4gICAgICAgIGxldCB2YWx1ZTE7XG4gICAgICAgIGNvbnN0IHJlYWRFbmQgPSB2YWx1ZVsxXSArIGRlbHRhID4gZG9tYWluWzFdO1xuICAgICAgICBpZiAoYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsKSB7XG4gICAgICAgICAgdmFsdWUwID0gdmFsdWVbMF07XG4gICAgICAgICAgdmFsdWUxID0gcmVhZEVuZCA/IHZhbHVlWzBdICsgMSA6IHZhbHVlWzFdICsgZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUwID0gcmVhZEVuZCA/IGRvbWFpblswXSA6IHZhbHVlWzBdICsgZGVsdGE7XG4gICAgICAgICAgdmFsdWUxID0gdmFsdWUwICsgdmFsdWVbMV0gLSB2YWx1ZVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ZhbHVlMCwgdmFsdWUxXTtcbiAgICAgIH1cblxuICAgICAgLy8gY3VycmVudCB0aW1lIGlzIGEgcG9pbnRcbiAgICAgIHJldHVybiB2YWx1ZSArIGRlbHRhID4gZG9tYWluWzFdID8gZG9tYWluWzBdIDogdmFsdWUgKyBkZWx0YTtcbiAgICB9XG5cbiAgICBfbmV4dEZyYW1lQnlUaW1lU3RlcCgpIHtcbiAgICAgIGNvbnN0IHtzdGVwcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHZhbCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gYmlzZWN0TGVmdChzdGVwcywgdmFsKTtcbiAgICAgIGNvbnN0IG5leHRJZHggPSBpbmRleCA+PSBzdGVwcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMTtcblxuICAgICAgcmV0dXJuIFtzdGVwc1tuZXh0SWR4XSwgbmV4dElkeF07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzQW5pbWF0aW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkcmVuKHtcbiAgICAgICAgICAgIGlzQW5pbWF0aW5nLFxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMuX3N0YXJ0QW5pbWF0aW9uLFxuICAgICAgICAgICAgcGF1c2U6IHRoaXMuX3BhdXNlQW5pbWF0aW9uLFxuICAgICAgICAgICAgcmVzZXQ6IHRoaXMuX3Jlc2V0QW5pbWF0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBBbmltYXRpb25Db250cm9sbGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeTtcbiJdfQ==