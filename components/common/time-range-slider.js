"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeRangeSliderFactory;

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

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _icons = require("./icons");

var _rangeSlider = _interopRequireDefault(require("./range-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

var _playbackControls = _interopRequireDefault(require("./animation-control/playback-controls"));

var _defaultSettings = require("../../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: ", ";\n  justify-content: ", ";\n\n  .horizontal-bar {\n    padding: 0 12px;\n    color: ", ";\n  }\n\n  .time-value {\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n\n    span {\n      color: ", ";\n    }\n  }\n\n  .time-value:last-child {\n    align-items: flex-end;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: ", "px;\n\n  .timeline-container .kg-slider {\n    display: none;\n  }\n\n  .playback-controls {\n    margin-left: 22px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationControlWidth = 176;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.isEnlarged ? 24 : 0;
});

TimeRangeSliderFactory.deps = [_playbackControls["default"], _rangeSlider["default"], _timeSliderMarker["default"]];

function TimeRangeSliderFactory(PlaybackControls, RangeSlider, TimeSliderMarker) {
  var TimeRangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeRangeSlider, _Component);

    var _super = _createSuper(TimeRangeSlider);

    function TimeRangeSlider(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeRangeSlider);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeSelector", function (props) {
        return props.currentTime;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatSelector", function (props) {
        return props.format;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayTimeSelector", (0, _reselect.createSelector)(_this.timeSelector, _this.formatSelector, function (currentTime, format) {
        var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
        return groupTime.reduce(function (accu, curr) {
          var displayDateTime = _moment["default"].utc(curr).format(format);

          var _displayDateTime$spli = displayDateTime.split(' '),
              _displayDateTime$spli2 = (0, _slicedToArray2["default"])(_displayDateTime$spli, 2),
              displayDate = _displayDateTime$spli2[0],
              displayTime = _displayDateTime$spli2[1];

          if (!accu.displayDate.includes(displayDate)) {
            accu.displayDate.push(displayDate);
          }

          accu.displayTime.push(displayTime);
          return accu;
        }, {
          displayDate: [],
          displayTime: []
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_sliderUpdate", function (args) {
        _this._sliderThrottle.cancel();

        _this._sliderThrottle(args);
      });
      _this._sliderThrottle = (0, _lodash["default"])(function () {
        var _this$props;

        return (_this$props = _this.props).onChange.apply(_this$props, arguments);
      }, 20);
      return _this;
    }

    (0, _createClass2["default"])(TimeRangeSlider, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            domain = _this$props2.domain,
            value = _this$props2.value,
            isEnlarged = _this$props2.isEnlarged,
            hideTimeTitle = _this$props2.hideTimeTitle,
            animationControlProps = _this$props2.animationControlProps;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "time-range-slider"
        }, !hideTimeTitle ? /*#__PURE__*/_react["default"].createElement(TimeTitle, {
          timeFormat: this.props.timeFormat,
          value: value,
          isEnlarged: isEnlarged
        }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderContainer, {
          className: "time-range-slider__container",
          isEnlarged: isEnlarged
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
          }
        }, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
          range: domain,
          value0: value[0],
          value1: value[1],
          histogram: this.props.histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: isEnlarged,
          showInput: false,
          step: this.props.step,
          onChange: this._sliderUpdate,
          xAxis: TimeSliderMarker
        })), isEnlarged ? /*#__PURE__*/_react["default"].createElement(PlaybackControls, {
          isAnimatable: this.props.isAnimatable,
          width: animationControlWidth,
          speed: this.props.speed,
          animationWindow: this.props.animationWindow,
          updateAnimationSpeed: this.props.updateAnimationSpeed,
          setFilterAnimationWindow: this.props.setFilterAnimationWindow,
          pauseAnimation: this.props.toggleAnimation,
          resetAnimation: animationControlProps.reset,
          isAnimating: animationControlProps.isAnimating,
          startAnimation: this.props.toggleAnimation
        }) : null));
      }
    }]);
    return TimeRangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(TimeRangeSlider, "propTypes", {
    onChange: _propTypes["default"].func.isRequired,
    domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    step: _propTypes["default"].number.isRequired,
    plotType: _propTypes["default"].string,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    lineChart: _propTypes["default"].object,
    toggleAnimation: _propTypes["default"].func.isRequired,
    isAnimatable: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    speed: _propTypes["default"].number,
    timeFormat: _propTypes["default"].string,
    hideTimeTitle: _propTypes["default"].bool
  });
  TimeRangeSlider.defaultProps = {
    timeFormat: _defaultSettings.DEFAULT_TIME_FORMAT
  };
  return TimeRangeSlider;
}

var TimeValueWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.timeTitleFontSize;
}, function (props) {
  return props.isEnlarged ? 'center' : 'space-between';
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.isEnlarged ? 'row' : 'column';
}, function (props) {
  return props.theme.textColor;
});

var TimeTitle = function TimeTitle(_ref) {
  var value = _ref.value,
      isEnlarged = _ref.isEnlarged,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? _defaultSettings.DEFAULT_TIME_FORMAT : _ref$timeFormat;
  return /*#__PURE__*/_react["default"].createElement(TimeValueWrapper, {
    isEnlarged: isEnlarged,
    className: "time-range-slider__time-title"
  }, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 0,
    value: _moment["default"].utc(value[0]).format(timeFormat),
    split: !isEnlarged
  }), isEnlarged ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "horizontal-bar"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
    height: "12px"
  })) : null, /*#__PURE__*/_react["default"].createElement(TimeValue, {
    key: 1,
    value: _moment["default"].utc(value[1]).format(timeFormat),
    split: !isEnlarged
  }));
};

var TimeValue = function TimeValue(_ref2) {
  var value = _ref2.value,
      split = _ref2.split;
  return (
    /*#__PURE__*/
    // render two lines if not enlarged
    _react["default"].createElement("div", {
      className: "time-value"
    }, split ? value.split(' ').map(function (v, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i
      }, i === 0 ? /*#__PURE__*/_react["default"].createElement("span", null, v) : /*#__PURE__*/_react["default"].createElement("span", null, v));
    }) : /*#__PURE__*/_react["default"].createElement("span", null, value))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25Db250cm9sV2lkdGgiLCJTdHlsZWRTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImlzRW5sYXJnZWQiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlBsYXliYWNrQ29udHJvbHNGYWN0b3J5IiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiVGltZVNsaWRlck1hcmtlckZhY3RvcnkiLCJQbGF5YmFja0NvbnRyb2xzIiwiUmFuZ2VTbGlkZXIiLCJUaW1lU2xpZGVyTWFya2VyIiwiVGltZVJhbmdlU2xpZGVyIiwiY3VycmVudFRpbWUiLCJmb3JtYXQiLCJ0aW1lU2VsZWN0b3IiLCJmb3JtYXRTZWxlY3RvciIsImdyb3VwVGltZSIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsImFjY3UiLCJjdXJyIiwiZGlzcGxheURhdGVUaW1lIiwibW9tZW50IiwidXRjIiwic3BsaXQiLCJkaXNwbGF5RGF0ZSIsImRpc3BsYXlUaW1lIiwiaW5jbHVkZXMiLCJwdXNoIiwiYXJncyIsIl9zbGlkZXJUaHJvdHRsZSIsImNhbmNlbCIsIm9uQ2hhbmdlIiwiZG9tYWluIiwidmFsdWUiLCJoaWRlVGltZVRpdGxlIiwiYW5pbWF0aW9uQ29udHJvbFByb3BzIiwidGltZUZvcm1hdCIsIndpZHRoIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJzdGVwIiwiX3NsaWRlclVwZGF0ZSIsImlzQW5pbWF0YWJsZSIsInNwZWVkIiwiYW5pbWF0aW9uV2luZG93IiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3ciLCJ0b2dnbGVBbmltYXRpb24iLCJyZXNldCIsImlzQW5pbWF0aW5nIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwibnVtYmVyIiwic3RyaW5nIiwiYW55Iiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIkRFRkFVTFRfVElNRV9GT1JNQVQiLCJUaW1lVmFsdWVXcmFwcGVyIiwidGhlbWUiLCJ0aW1lVGl0bGVGb250U2l6ZSIsInRleHRDb2xvciIsIlRpbWVUaXRsZSIsIlRpbWVWYWx1ZSIsIm1hcCIsInYiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxHQUE5Qjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBS1QsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQixFQUFuQixHQUF3QixDQUE3QjtBQUFBLENBTEksQ0FBM0I7O0FBZ0JBQyxzQkFBc0IsQ0FBQ0MsSUFBdkIsR0FBOEIsQ0FDNUJDLDRCQUQ0QixFQUU1QkMsdUJBRjRCLEVBRzVCQyw0QkFINEIsQ0FBOUI7O0FBTWUsU0FBU0osc0JBQVQsQ0FBZ0NLLGdCQUFoQyxFQUFrREMsV0FBbEQsRUFBK0RDLGdCQUEvRCxFQUFpRjtBQUFBLE1BQ3hGQyxlQUR3RjtBQUFBOztBQUFBOztBQWtCNUYsNkJBQVlWLE1BQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixnQ0FBTUEsTUFBTjtBQURpQix1R0FLSixVQUFBQSxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDVyxXQUFWO0FBQUEsT0FMRDtBQUFBLHlHQU1GLFVBQUFYLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNZLE1BQVY7QUFBQSxPQU5IO0FBQUEsOEdBT0csOEJBQ3BCLE1BQUtDLFlBRGUsRUFFcEIsTUFBS0MsY0FGZSxFQUdwQixVQUFDSCxXQUFELEVBQWNDLE1BQWQsRUFBeUI7QUFDdkIs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SSxnQkFLSiw4Q0FBT3JDLEtBQVAsQ0FOSjtBQUZnQjtBQUFBLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IHtNaW51c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFJhbmdlU2xpZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xuaW1wb3J0IFRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3RpbWUtc2xpZGVyLW1hcmtlcic7XG5pbXBvcnQgUGxheWJhY2tDb250cm9sc0ZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvcGxheWJhY2stY29udHJvbHMnO1xuXG5pbXBvcnQge0RFRkFVTFRfVElNRV9GT1JNQVR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgYW5pbWF0aW9uQ29udHJvbFdpZHRoID0gMTc2O1xuXG5jb25zdCBTdHlsZWRTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5pc0VubGFyZ2VkID8gMjQgOiAwKX1weDtcblxuICAudGltZWxpbmUtY29udGFpbmVyIC5rZy1zbGlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucGxheWJhY2stY29udHJvbHMge1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB9XG5gO1xuXG5UaW1lUmFuZ2VTbGlkZXJGYWN0b3J5LmRlcHMgPSBbXG4gIFBsYXliYWNrQ29udHJvbHNGYWN0b3J5LFxuICBSYW5nZVNsaWRlckZhY3RvcnksXG4gIFRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5KFBsYXliYWNrQ29udHJvbHMsIFJhbmdlU2xpZGVyLCBUaW1lU2xpZGVyTWFya2VyKSB7XG4gIGNsYXNzIFRpbWVSYW5nZVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZG9tYWluOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBwbG90VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgICBsaW5lQ2hhcnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICB0b2dnbGVBbmltYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBpc0FuaW1hdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaXNFbmxhcmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzcGVlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRpbWVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBoaWRlVGltZVRpdGxlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5fc2xpZGVyVGhyb3R0bGUgPSB0aHJvdHRsZSgoLi4udmFsdWUpID0+IHRoaXMucHJvcHMub25DaGFuZ2UoLi4udmFsdWUpLCAyMCk7XG4gICAgfVxuXG4gICAgdGltZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuY3VycmVudFRpbWU7XG4gICAgZm9ybWF0U2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5mb3JtYXQ7XG4gICAgZGlzcGxheVRpbWVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy50aW1lU2VsZWN0b3IsXG4gICAgICB0aGlzLmZvcm1hdFNlbGVjdG9yLFxuICAgICAgKGN1cnJlbnRUaW1lLCBmb3JtYXQpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBUaW1lID0gQXJyYXkuaXNBcnJheShjdXJyZW50VGltZSkgPyBjdXJyZW50VGltZSA6IFtjdXJyZW50VGltZV07XG4gICAgICAgIHJldHVybiBncm91cFRpbWUucmVkdWNlKFxuICAgICAgICAgIChhY2N1LCBjdXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5RGF0ZVRpbWUgPSBtb21lbnQudXRjKGN1cnIpLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICAgICAgY29uc3QgW2Rpc3BsYXlEYXRlLCBkaXNwbGF5VGltZV0gPSBkaXNwbGF5RGF0ZVRpbWUuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgaWYgKCFhY2N1LmRpc3BsYXlEYXRlLmluY2x1ZGVzKGRpc3BsYXlEYXRlKSkge1xuICAgICAgICAgICAgICBhY2N1LmRpc3BsYXlEYXRlLnB1c2goZGlzcGxheURhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjdS5kaXNwbGF5VGltZS5wdXNoKGRpc3BsYXlUaW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7ZGlzcGxheURhdGU6IFtdLCBkaXNwbGF5VGltZTogW119XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIF9zbGlkZXJVcGRhdGUgPSBhcmdzID0+IHtcbiAgICAgIHRoaXMuX3NsaWRlclRocm90dGxlLmNhbmNlbCgpO1xuICAgICAgdGhpcy5fc2xpZGVyVGhyb3R0bGUoYXJncyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtkb21haW4sIHZhbHVlLCBpc0VubGFyZ2VkLCBoaWRlVGltZVRpdGxlLCBhbmltYXRpb25Db250cm9sUHJvcHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlclwiPlxuICAgICAgICAgIHshaGlkZVRpbWVUaXRsZSA/IChcbiAgICAgICAgICAgIDxUaW1lVGl0bGUgdGltZUZvcm1hdD17dGhpcy5wcm9wcy50aW1lRm9ybWF0fSB2YWx1ZT17dmFsdWV9IGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFN0eWxlZFNsaWRlckNvbnRhaW5lciBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlcl9fY29udGFpbmVyXCIgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGlzRW5sYXJnZWQgPyBgY2FsYygxMDAlIC0gJHthbmltYXRpb25Db250cm9sV2lkdGh9cHgpYCA6ICcxMDAlJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgICAgICAgICByYW5nZT17ZG9tYWlufVxuICAgICAgICAgICAgICAgIHZhbHVlMD17dmFsdWVbMF19XG4gICAgICAgICAgICAgICAgdmFsdWUxPXt2YWx1ZVsxXX1cbiAgICAgICAgICAgICAgICBoaXN0b2dyYW09e3RoaXMucHJvcHMuaGlzdG9ncmFtfVxuICAgICAgICAgICAgICAgIGxpbmVDaGFydD17dGhpcy5wcm9wcy5saW5lQ2hhcnR9XG4gICAgICAgICAgICAgICAgcGxvdFR5cGU9e3RoaXMucHJvcHMucGxvdFR5cGV9XG4gICAgICAgICAgICAgICAgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH1cbiAgICAgICAgICAgICAgICBzaG93SW5wdXQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2xpZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgIHhBeGlzPXtUaW1lU2xpZGVyTWFya2VyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc0VubGFyZ2VkID8gKFxuICAgICAgICAgICAgICA8UGxheWJhY2tDb250cm9sc1xuICAgICAgICAgICAgICAgIGlzQW5pbWF0YWJsZT17dGhpcy5wcm9wcy5pc0FuaW1hdGFibGV9XG4gICAgICAgICAgICAgICAgd2lkdGg9e2FuaW1hdGlvbkNvbnRyb2xXaWR0aH1cbiAgICAgICAgICAgICAgICBzcGVlZD17dGhpcy5wcm9wcy5zcGVlZH1cbiAgICAgICAgICAgICAgICBhbmltYXRpb25XaW5kb3c9e3RoaXMucHJvcHMuYW5pbWF0aW9uV2luZG93fVxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblNwZWVkfVxuICAgICAgICAgICAgICAgIHNldEZpbHRlckFuaW1hdGlvbldpbmRvdz17dGhpcy5wcm9wcy5zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3d9XG4gICAgICAgICAgICAgICAgcGF1c2VBbmltYXRpb249e3RoaXMucHJvcHMudG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHJlc2V0QW5pbWF0aW9uPXthbmltYXRpb25Db250cm9sUHJvcHMucmVzZXR9XG4gICAgICAgICAgICAgICAgaXNBbmltYXRpbmc9e2FuaW1hdGlvbkNvbnRyb2xQcm9wcy5pc0FuaW1hdGluZ31cbiAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbj17dGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1N0eWxlZFNsaWRlckNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFRpbWVSYW5nZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGltZUZvcm1hdDogREVGQVVMVF9USU1FX0ZPUk1BVFxuICB9O1xuXG4gIHJldHVybiBUaW1lUmFuZ2VTbGlkZXI7XG59XG5cbmNvbnN0IFRpbWVWYWx1ZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGltZVRpdGxlRm9udFNpemV9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gKHByb3BzLmlzRW5sYXJnZWQgPyAnY2VudGVyJyA6ICdzcGFjZS1iZXR3ZWVuJyl9O1xuXG4gIC5ob3Jpem9udGFsLWJhciB7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cblxuICAudGltZS12YWx1ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiAocHJvcHMuaXNFbmxhcmdlZCA/ICdyb3cnIDogJ2NvbHVtbicpfTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cblxuICAudGltZS12YWx1ZTpsYXN0LWNoaWxkIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IFRpbWVUaXRsZSA9ICh7dmFsdWUsIGlzRW5sYXJnZWQsIHRpbWVGb3JtYXQgPSBERUZBVUxUX1RJTUVfRk9STUFUfSkgPT4gKFxuICA8VGltZVZhbHVlV3JhcHBlciBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfSBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlcl9fdGltZS10aXRsZVwiPlxuICAgIDxUaW1lVmFsdWUga2V5PXswfSB2YWx1ZT17bW9tZW50LnV0Yyh2YWx1ZVswXSkuZm9ybWF0KHRpbWVGb3JtYXQpfSBzcGxpdD17IWlzRW5sYXJnZWR9IC8+XG4gICAge2lzRW5sYXJnZWQgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWwtYmFyXCI+XG4gICAgICAgIDxNaW51cyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsfVxuICAgIDxUaW1lVmFsdWUga2V5PXsxfSB2YWx1ZT17bW9tZW50LnV0Yyh2YWx1ZVsxXSkuZm9ybWF0KHRpbWVGb3JtYXQpfSBzcGxpdD17IWlzRW5sYXJnZWR9IC8+XG4gIDwvVGltZVZhbHVlV3JhcHBlcj5cbik7XG5cbmNvbnN0IFRpbWVWYWx1ZSA9ICh7dmFsdWUsIHNwbGl0fSkgPT4gKFxuICAvLyByZW5kZXIgdHdvIGxpbmVzIGlmIG5vdCBlbmxhcmdlZFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtdmFsdWVcIj5cbiAgICB7c3BsaXQgPyAoXG4gICAgICB2YWx1ZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAubWFwKCh2LCBpKSA9PiA8ZGl2IGtleT17aX0+e2kgPT09IDAgPyA8c3Bhbj57dn08L3NwYW4+IDogPHNwYW4+e3Z9PC9zcGFuPn08L2Rpdj4pXG4gICAgKSA6IChcbiAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuIl19