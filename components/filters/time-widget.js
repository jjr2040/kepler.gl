"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _speedControl = _interopRequireDefault(require("../common/animation-control/speed-control"));

var _timeRangeSlider = _interopRequireDefault(require("../common/time-range-slider"));

var _floatingTimeDisplay = _interopRequireDefault(require("../common/animation-control/floating-time-display"));

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 6px 32px 24px 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TOP_SECTION_HEIGHT = '36px';
var TimeBottomWidgetInner = (0, _styledComponents["default"])(_styledComponents2.BottomWidgetInner)(_templateObject());

var TopSectionWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject3(), function (props) {
  return props.theme.textColor;
});
TimeWidgetFactory.deps = [_speedControl["default"], _timeRangeSlider["default"], _floatingTimeDisplay["default"], _fieldSelector["default"]];

function TimeWidgetFactory(SpeedControl, TimeRangeSlider, FloatingTimeDisplay, FieldSelector) {
  var TimeWidget = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeWidget, _Component);

    var _super = _createSuper(TimeWidget);

    function TimeWidget() {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeWidget);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
        return fields.filter(function (f) {
          return f.type === 'integer' || f.type === 'real';
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleAnimation", function () {
        return _this.props.toggleAnimation(_this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClose", function () {
        return _this.props.enlargeFilter(_this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setFilterPlotYAxis", function (value) {
        return _this.props.setFilterPlot(_this.props.index, {
          yAxis: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setFilterAnimationWindow", function (animationWindow) {
        _this.props.setFilterAnimationWindow({
          id: _this.props.filter.id,
          animationWindow: animationWindow
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(TimeWidget, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            filter = _this$props.filter,
            index = _this$props.index,
            readOnly = _this$props.readOnly,
            showTimeDisplay = _this$props.showTimeDisplay,
            setFilterAnimationTime = _this$props.setFilterAnimationTime,
            animationControlProps = _this$props.animationControlProps,
            isAnimatable = _this$props.isAnimatable;
        return /*#__PURE__*/_react["default"].createElement(TimeBottomWidgetInner, {
          className: "bottom-widget--inner"
        }, /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__field"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__y-axis"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "bottom-widget__field-select"
        }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
          fields: this.yAxisFieldsSelector(datasets[filter.dataId[0]]),
          placement: "top",
          id: "selected-time-widget-field",
          value: filter.yAxis ? filter.yAxis.name : null,
          onSelect: this._setFilterPlotYAxis,
          placeholder: "placeholder.yAxis",
          erasable: true,
          showToken: false
        }))), !readOnly ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
          height: "12px",
          onClick: this._onClose
        }))) : null), /*#__PURE__*/_react["default"].createElement(TimeRangeSlider, {
          id: filter.id,
          domain: filter.domain,
          bins: filter.bins,
          value: filter.value,
          plotType: filter.plotType,
          lineChart: filter.lineChart,
          step: filter.step,
          speed: filter.speed,
          histogram: filter.enlargedHistogram,
          onChange: function onChange(value) {
            return setFilterAnimationTime(index, 'value', value);
          },
          toggleAnimation: this._toggleAnimation,
          updateAnimationSpeed: this._updateAnimationSpeed,
          setFilterAnimationWindow: this._setFilterAnimationWindow,
          isEnlarged: filter.enlarged,
          animationWindow: filter.animationWindow,
          isAnimating: filter.isAnimating,
          hideTimeTitle: showTimeDisplay,
          animationControlProps: animationControlProps,
          isAnimatable: isAnimatable
        }), showTimeDisplay ? /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
          currentTime: filter.value
        }) : null);
      }
    }]);
    return TimeWidget;
  }(_react.Component);

  return TimeWidget;
}

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVGltZUJvdHRvbVdpZGdldElubmVyIiwiQm90dG9tV2lkZ2V0SW5uZXIiLCJUb3BTZWN0aW9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiU3R5bGVkVGl0bGUiLCJDZW50ZXJGbGV4Ym94IiwidGV4dENvbG9yIiwiVGltZVdpZGdldEZhY3RvcnkiLCJkZXBzIiwiU3BlZWRDb250cm9sRmFjdG9yeSIsIlRpbWVSYW5nZVNsaWRlckZhY3RvcnkiLCJGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeSIsIkZpZWxkU2VsZWN0b3JGYWN0b3J5IiwiU3BlZWRDb250cm9sIiwiVGltZVJhbmdlU2xpZGVyIiwiRmxvYXRpbmdUaW1lRGlzcGxheSIsIkZpZWxkU2VsZWN0b3IiLCJUaW1lV2lkZ2V0IiwiZmllbGRzIiwiZmllbGRTZWxlY3RvciIsImZpbHRlciIsImYiLCJ0eXBlIiwic3BlZWQiLCJ1cGRhdGVBbmltYXRpb25TcGVlZCIsImluZGV4IiwidG9nZ2xlQW5pbWF0aW9uIiwiZW5sYXJnZUZpbHRlciIsInZhbHVlIiwic2V0RmlsdGVyUGxvdCIsInlBeGlzIiwiYW5pbWF0aW9uV2luZG93Iiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwiaWQiLCJkYXRhc2V0cyIsInJlYWRPbmx5Iiwic2hvd1RpbWVEaXNwbGF5Iiwic2V0RmlsdGVyQW5pbWF0aW9uVGltZSIsImFuaW1hdGlvbkNvbnRyb2xQcm9wcyIsImlzQW5pbWF0YWJsZSIsIm5hbWUiLCJ5QXhpc0ZpZWxkc1NlbGVjdG9yIiwiZGF0YUlkIiwiX3NldEZpbHRlclBsb3RZQXhpcyIsIl9vbkNsb3NlIiwiZG9tYWluIiwiYmlucyIsInBsb3RUeXBlIiwibGluZUNoYXJ0Iiwic3RlcCIsImVubGFyZ2VkSGlzdG9ncmFtIiwiX3RvZ2dsZUFuaW1hdGlvbiIsIl91cGRhdGVBbmltYXRpb25TcGVlZCIsIl9zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3ciLCJlbmxhcmdlZCIsImlzQW5pbWF0aW5nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixHQUFHLE1BQTNCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsa0NBQU9DLG9DQUFQLENBQUgsbUJBQTNCOztBQUdBLElBQU1DLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixxQkFJWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FKTyxFQUtYUixrQkFMVyxFQW1DTixVQUFBTSxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDRyxVQUFOLEdBQW1CSCxLQUFLLENBQUNDLEtBQU4sQ0FBWUQsS0FBSyxDQUFDRyxVQUFsQixDQUFuQixHQUFtREgsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFdBRG5EO0FBQUEsQ0FuQ0MsQ0FBdkI7O0FBa0RBLElBQU1DLFdBQVcsR0FBRyxrQ0FBT0MsZ0NBQVAsQ0FBSCxxQkFFTixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFNBQWhCO0FBQUEsQ0FGQyxDQUFqQjtBQWFBQyxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FDdkJDLHdCQUR1QixFQUV2QkMsMkJBRnVCLEVBR3ZCQywrQkFIdUIsRUFJdkJDLHlCQUp1QixDQUF6Qjs7QUFNQSxTQUFTTCxpQkFBVCxDQUEyQk0sWUFBM0IsRUFBeUNDLGVBQXpDLEVBQTBEQyxtQkFBMUQsRUFBK0VDLGFBQS9FLEVBQThGO0FBQUEsTUFD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QUtDLHFCQVo3QjtBQWFFLFVBQUEsd0JBQXdCLEVBQUUsS0FBS0MseUJBYmpDO0FBY0UsVUFBQSxVQUFVLEVBQUVqQyxNQUFNLENBQUNrQyxRQWRyQjtBQWVFLFVBQUEsZUFBZSxFQUFFbEMsTUFBTSxDQUFDVyxlQWYxQjtBQWdCRSxVQUFBLFdBQVcsRUFBRVgsTUFBTSxDQUFDbUMsV0FoQnRCO0FBaUJFLFVBQUEsYUFBYSxFQUFFbkIsZUFqQmpCO0FBa0JFLFVBQUEscUJBQXFCLEVBQUVFLHFCQWxCekI7QUFtQkUsVUFBQSxZQUFZLEVBQUVDO0FBbkJoQixVQWpDRixFQXVER0gsZUFBZSxnQkFBRyxnQ0FBQyxtQkFBRDtBQUFxQixVQUFBLFdBQVcsRUFBRWhCLE1BQU0sQ0FBQ1E7QUFBekMsVUFBSCxHQUF3RCxJQXZEMUUsQ0FERjtBQTJERDtBQTFGeUY7QUFBQTtBQUFBLElBQ25FNEIsZ0JBRG1FOztBQTRGNUYsU0FBT3ZDLFVBQVA7QUFDRDs7ZUFFY1YsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQge1xuICBTZWxlY3RUZXh0Qm9sZCxcbiAgSWNvblJvdW5kU21hbGwsXG4gIENlbnRlckZsZXhib3gsXG4gIEJvdHRvbVdpZGdldElubmVyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Q2xvc2UsIENsb2NrLCBMaW5lQ2hhcnR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBTcGVlZENvbnRyb2xGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL3NwZWVkLWNvbnRyb2wnO1xuaW1wb3J0IFRpbWVSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vdGltZS1yYW5nZS1zbGlkZXInO1xuXG5pbXBvcnQgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvZmxvYXRpbmctdGltZS1kaXNwbGF5JztcbmltcG9ydCBGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuLi9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuXG5jb25zdCBUT1BfU0VDVElPTl9IRUlHSFQgPSAnMzZweCc7XG5cbmNvbnN0IFRpbWVCb3R0b21XaWRnZXRJbm5lciA9IHN0eWxlZChCb3R0b21XaWRnZXRJbm5lcilgXG4gIHBhZGRpbmc6IDZweCAzMnB4IDI0cHggMzJweDtcbmA7XG5jb25zdCBUb3BTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBoZWlnaHQ6ICR7VE9QX1NFQ1RJT05fSEVJR0hUfTtcblxuICAuYm90dG9tLXdpZGdldF9feS1heGlzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0IHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDRweDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIDphY3RpdmUsXG4gICAgICA6Zm9jdXMsXG4gICAgICAmLmZvY3VzLFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd25fX3ZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl0gOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1jb250cm9sIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xuXG4gICAgLmFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1zbGlkZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoMCUgLSA0OHB4KTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkKENlbnRlckZsZXhib3gpYFxuICBmbGV4LWdyb3c6IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAuYm90dG9tLXdpZGdldF9faWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24uc3BlZWQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuYDtcblxuVGltZVdpZGdldEZhY3RvcnkuZGVwcyA9IFtcbiAgU3BlZWRDb250cm9sRmFjdG9yeSxcbiAgVGltZVJhbmdlU2xpZGVyRmFjdG9yeSxcbiAgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnksXG4gIEZpZWxkU2VsZWN0b3JGYWN0b3J5XG5dO1xuZnVuY3Rpb24gVGltZVdpZGdldEZhY3RvcnkoU3BlZWRDb250cm9sLCBUaW1lUmFuZ2VTbGlkZXIsIEZsb2F0aW5nVGltZURpc3BsYXksIEZpZWxkU2VsZWN0b3IpIHtcbiAgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZmllbGRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgICB5QXhpc0ZpZWxkc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZFNlbGVjdG9yLCBmaWVsZHMgPT5cbiAgICAgIGZpZWxkcy5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdpbnRlZ2VyJyB8fCBmLnR5cGUgPT09ICdyZWFsJylcbiAgICApO1xuXG4gICAgX3VwZGF0ZUFuaW1hdGlvblNwZWVkID0gc3BlZWQgPT4gdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb25TcGVlZCh0aGlzLnByb3BzLmluZGV4LCBzcGVlZCk7XG5cbiAgICBfdG9nZ2xlQW5pbWF0aW9uID0gKCkgPT4gdGhpcy5wcm9wcy50b2dnbGVBbmltYXRpb24odGhpcy5wcm9wcy5pbmRleCk7XG5cbiAgICBfb25DbG9zZSA9ICgpID0+IHRoaXMucHJvcHMuZW5sYXJnZUZpbHRlcih0aGlzLnByb3BzLmluZGV4KTtcblxuICAgIF9zZXRGaWx0ZXJQbG90WUF4aXMgPSB2YWx1ZSA9PiB0aGlzLnByb3BzLnNldEZpbHRlclBsb3QodGhpcy5wcm9wcy5pbmRleCwge3lBeGlzOiB2YWx1ZX0pO1xuXG4gICAgX3NldEZpbHRlckFuaW1hdGlvbldpbmRvdyA9IGFuaW1hdGlvbldpbmRvdyA9PiB7XG4gICAgICB0aGlzLnByb3BzLnNldEZpbHRlckFuaW1hdGlvbldpbmRvdyh7aWQ6IHRoaXMucHJvcHMuZmlsdGVyLmlkLCBhbmltYXRpb25XaW5kb3d9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVyLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIHNob3dUaW1lRGlzcGxheSxcbiAgICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uVGltZSxcbiAgICAgICAgYW5pbWF0aW9uQ29udHJvbFByb3BzLFxuICAgICAgICBpc0FuaW1hdGFibGVcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGltZUJvdHRvbVdpZGdldElubmVyIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgICAgPFRvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8Q2xvY2sgaGVpZ2h0PVwiMTVweFwiIC8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICAgICAgPFNlbGVjdFRleHRCb2xkPntmaWx0ZXIubmFtZX08L1NlbGVjdFRleHRCb2xkPlxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgIDxTdHlsZWRUaXRsZSBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X195LWF4aXNcIj5cbiAgICAgICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvblwiPlxuICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgaGVpZ2h0PVwiMTVweFwiIC8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19maWVsZC1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgZmllbGRzPXt0aGlzLnlBeGlzRmllbGRzU2VsZWN0b3IoZGF0YXNldHNbZmlsdGVyLmRhdGFJZFswXV0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0ZWQtdGltZS13aWRnZXQtZmllbGRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlci55QXhpcyA/IGZpbHRlci55QXhpcy5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLl9zZXRGaWx0ZXJQbG90WUF4aXN9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyLnlBeGlzXCJcbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXG4gICAgICAgICAgICAgICAgICBzaG93VG9rZW49e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgIHshcmVhZE9ubHkgPyAoXG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICAgIDxJY29uUm91bmRTbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxDbG9zZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17dGhpcy5fb25DbG9zZX0gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgIDxUaW1lUmFuZ2VTbGlkZXJcbiAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XG4gICAgICAgICAgICBkb21haW49e2ZpbHRlci5kb21haW59XG4gICAgICAgICAgICBiaW5zPXtmaWx0ZXIuYmluc31cbiAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXIudmFsdWV9XG4gICAgICAgICAgICBwbG90VHlwZT17ZmlsdGVyLnBsb3RUeXBlfVxuICAgICAgICAgICAgbGluZUNoYXJ0PXtmaWx0ZXIubGluZUNoYXJ0fVxuICAgICAgICAgICAgc3RlcD17ZmlsdGVyLnN0ZXB9XG4gICAgICAgICAgICBzcGVlZD17ZmlsdGVyLnNwZWVkfVxuICAgICAgICAgICAgaGlzdG9ncmFtPXtmaWx0ZXIuZW5sYXJnZWRIaXN0b2dyYW19XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0RmlsdGVyQW5pbWF0aW9uVGltZShpbmRleCwgJ3ZhbHVlJywgdmFsdWUpfVxuICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt0aGlzLl90b2dnbGVBbmltYXRpb259XG4gICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dGhpcy5fdXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgICBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3c9e3RoaXMuX3NldEZpbHRlckFuaW1hdGlvbldpbmRvd31cbiAgICAgICAgICAgIGlzRW5sYXJnZWQ9e2ZpbHRlci5lbmxhcmdlZH1cbiAgICAgICAgICAgIGFuaW1hdGlvbldpbmRvdz17ZmlsdGVyLmFuaW1hdGlvbldpbmRvd31cbiAgICAgICAgICAgIGlzQW5pbWF0aW5nPXtmaWx0ZXIuaXNBbmltYXRpbmd9XG4gICAgICAgICAgICBoaWRlVGltZVRpdGxlPXtzaG93VGltZURpc3BsYXl9XG4gICAgICAgICAgICBhbmltYXRpb25Db250cm9sUHJvcHM9e2FuaW1hdGlvbkNvbnRyb2xQcm9wc31cbiAgICAgICAgICAgIGlzQW5pbWF0YWJsZT17aXNBbmltYXRhYmxlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7c2hvd1RpbWVEaXNwbGF5ID8gPEZsb2F0aW5nVGltZURpc3BsYXkgY3VycmVudFRpbWU9e2ZpbHRlci52YWx1ZX0gLz4gOiBudWxsfVxuICAgICAgICA8L1RpbWVCb3R0b21XaWRnZXRJbm5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBUaW1lV2lkZ2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lV2lkZ2V0RmFjdG9yeTtcbiJdfQ==