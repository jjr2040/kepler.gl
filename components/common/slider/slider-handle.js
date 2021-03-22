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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,\n  :after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  ", ": -", "px;\n\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  border-width: 1px;\n  border-radius: ", ";\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n\n  line-height: 10px;\n  font-size: 6px;\n  padding: 0 3px;\n  letter-spacing: 1px;\n  :after {\n    content: '", "';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSliderHandle = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.vertical ? 'margin-left' : 'margin-top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleTextColor;
}, function (props) {
  return props.theme.sliderBorderRadius;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderInactiveBorderColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
}, function (props) {
  return props.theme.sliderHandleAfterContent;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return /*#__PURE__*/_react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  var _super = _createSuper(SliderHandle);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? /*#__PURE__*/_react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])('kg-range-slider__handle', {
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        ref: this.ref,
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "propTypes", {
  sliderHandleWidth: _propTypes["default"].number,
  left: _propTypes["default"].string,
  display: _propTypes["default"].bool,
  valueListener: _propTypes["default"].func,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWhhbmRsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXJIYW5kbGUiLCJzdHlsZWQiLCJzcGFuIiwicHJvcHMiLCJ2ZXJ0aWNhbCIsInNsaWRlckhhbmRsZVdpZHRoIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVNoYWRvdyIsInNsaWRlckhhbmRsZUNvbG9yIiwic2xpZGVySGFuZGxlVGV4dENvbG9yIiwic2xpZGVyQm9yZGVyUmFkaXVzIiwiYWN0aXZlIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzbGlkZXJJbmFjdGl2ZUJvcmRlckNvbG9yIiwic2xpZGVySGFuZGxlSG92ZXJDb2xvciIsInNsaWRlckhhbmRsZUFmdGVyQ29udGVudCIsIlN0eWxlZFNsaWRlclRvb2x0aXAiLCJkaXYiLCJ0b29sdGlwQmciLCJ0b29sdGlwQ29sb3IiLCJTbGlkZXJUb29sdGlwIiwidmFsdWUiLCJmb3JtYXQiLCJ2YWwiLCJzdHlsZSIsIlNsaWRlckhhbmRsZSIsIm1vdXNlT3ZlciIsInNldFN0YXRlIiwic3RhdGUiLCJtb3VzZUV2ZW50IiwiTW91c2VFdmVudEhhbmRsZXIiLCJ2YWx1ZUxpc3RlbmVyIiwidG9nZ2xlTW91c2VPdmVyIiwidHJhY2siLCJsZWZ0IiwiZGlzcGxheSIsInNob3dUb29sdGlwIiwicmVmIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlVG91Y2hTdGFydCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwidmFsdWVMaXN0ZW5lckZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QztBQUMvQyw2Q0FBbUMsS0FBS08sS0FBTCxDQUFXRjtBQURDLFNBQXRDLENBRGI7QUFJRSxRQUFBLEdBQUcsRUFBRSxLQUFLVyxHQUpaO0FBS0UsUUFBQSxpQkFBaUIsRUFBRSxLQUFLdEMsS0FBTCxDQUFXRSxpQkFMaEM7QUFNRSxRQUFBLE1BQU0sRUFBRSxLQUFLMkIsS0FBTCxDQUFXRixTQU5yQjtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUszQixLQUFMLENBQVdDLFFBUHZCO0FBUUUsUUFBQSxLQUFLLEVBQUV3QixLQVJUO0FBU0UsUUFBQSxXQUFXLEVBQUUsS0FBS0ssVUFBTCxDQUFnQlMsZUFUL0I7QUFVRSxRQUFBLFlBQVksRUFBRSxLQUFLVCxVQUFMLENBQWdCVTtBQVZoQyxRQVJGLENBREY7QUF1QkQ7OztFQTlEdUNDLGdCOzs7aUNBQXJCZixZLGVBQ0E7QUFDakJ4QixFQUFBQSxpQkFBaUIsRUFBRXdDLHNCQUFVQyxNQURaO0FBRWpCUixFQUFBQSxJQUFJLEVBQUVPLHNCQUFVRSxNQUZDO0FBR2pCUixFQUFBQSxPQUFPLEVBQUVNLHNCQUFVRyxJQUhGO0FBSWpCYixFQUFBQSxhQUFhLEVBQUVVLHNCQUFVSSxJQUpSO0FBS2pCN0MsRUFBQUEsUUFBUSxFQUFFeUMsc0JBQVVHO0FBTEgsQztpQ0FEQW5CLFksa0JBU0c7QUFDcEJ4QixFQUFBQSxpQkFBaUIsRUFBRSxFQURDO0FBRXBCaUMsRUFBQUEsSUFBSSxFQUFFLEtBRmM7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRSxJQUhXO0FBSXBCbkMsRUFBQUEsUUFBUSxFQUFFLEtBSlU7QUFLcEIrQixFQUFBQSxhQUFhLEVBQUUsU0FBU2UsZUFBVCxHQUEyQixDQUFFLENBTHhCO0FBTXBCVixFQUFBQSxXQUFXLEVBQUU7QUFOTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vdXNlRXZlbnRIYW5kbGVyIGZyb20gJy4vbW91c2UtZXZlbnQnO1xuXG5jb25zdCBTdHlsZWRTbGlkZXJIYW5kbGUgPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgJHtwcm9wcyA9PiAocHJvcHMudmVydGljYWwgPyAnbWFyZ2luLWxlZnQnIDogJ21hcmdpbi10b3AnKX06IC0ke3Byb3BzID0+XG4gIChwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAtIHByb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodCkgLyAyfXB4O1xuXG4gIGhlaWdodDogJHtwcm9wcyA9PlxuICAgIE51bWJlci5pc0Zpbml0ZShwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aClcbiAgICAgID8gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGhcbiAgICAgIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlSGVpZ2h0fXB4O1xuICB3aWR0aDogJHtwcm9wcyA9PlxuICAgIE51bWJlci5pc0Zpbml0ZShwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aClcbiAgICAgID8gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGhcbiAgICAgIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlSGVpZ2h0fXB4O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZVNoYWRvd307XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQ29sb3J9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVUZXh0Q29sb3J9O1xuXG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJvcmRlclJhZGl1c307XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVySW5hY3RpdmVCb3JkZXJDb2xvcn07XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhvdmVyQ29sb3J9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDZweDtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQWZ0ZXJDb250ZW50fSc7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNsaWRlclRvb2x0aXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoICsgMTJ9cHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIHdpZHRoOiA1MHB4O1xuXG4gIDpiZWZvcmUsXG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIDpiZWZvcmUge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbGVmdDogLThweDtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIDphZnRlciB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDZweDtcbiAgfVxuYDtcblxuY29uc3QgU2xpZGVyVG9vbHRpcCA9ICh7dmFsdWUsIGZvcm1hdCA9IHZhbCA9PiB2YWwsIHN0eWxlLCBzbGlkZXJIYW5kbGVXaWR0aH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2xpZGVyVG9vbHRpcCBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Zm9ybWF0KHZhbHVlKX1cbiAgICA8L1N0eWxlZFNsaWRlclRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJIYW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWVMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgbGVmdDogJzUwJScsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgdmFsdWVMaXN0ZW5lcjogZnVuY3Rpb24gdmFsdWVMaXN0ZW5lckZuKCkge30sXG4gICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudEhhbmRsZXIoe1xuICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgdmFsdWVMaXN0ZW5lcjogcHJvcHMudmFsdWVMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXIsXG4gICAgICB0cmFjazogcHJvcHMudHJhY2tcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xuICByZWYgPSBjcmVhdGVSZWYoKTtcblxuICB0b2dnbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiAhdGhpcy5zdGF0ZS5tb3VzZU92ZXJ9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7W3RoaXMucHJvcHMudmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J106IHRoaXMucHJvcHMubGVmdH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgJiYgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXG4gICAgICAgICAgPFNsaWRlclRvb2x0aXBcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmFsdWU9e051bWJlci5pc0Zpbml0ZSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBudWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U3R5bGVkU2xpZGVySGFuZGxlXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZScsIHtcbiAgICAgICAgICAgICdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5tb3VzZU92ZXJcbiAgICAgICAgICB9KX1cbiAgICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=