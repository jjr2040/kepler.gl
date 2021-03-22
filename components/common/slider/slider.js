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

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _dataUtils = require("../../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2());

var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "track", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setAnchor", function (x) {
      // used to calculate delta
      _this._anchor = x;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;
      return Boolean(val >= minValue && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;
      return Boolean(val <= maxValue && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var val = _this._getValue(_this.props.minValue, x);

      if (_this._isVal0InRange(val)) {
        _this.props.onSlider0Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var val = _this._getValue(_this.props.minValue, x);

      if (_this._isVal1InRange(val)) {
        _this.props.onSlider1Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var _this$props3 = _this.props,
          minValue = _this$props3.minValue,
          maxValue = _this$props3.maxValue; // for slider bar, we use distance delta

      var anchor = _this._anchor;

      var val0 = _this._getValue(_this.props.value0, x - anchor);

      var val1 = _this._getValue(_this.props.value1, x - anchor);

      if (val0 >= minValue && val1 <= maxValue && val1 >= val0) {
        var deltaX = _this._getDeltaX(val0 - _this.props.value0);

        _this.props.onSliderBarChange(val0, val1); // update anchor


        _this._anchor = _this._anchor + deltaX;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_getBaseDistance",
    value: function _getBaseDistance() {
      return this.props.vertical ? this.ref.current.offsetHeight : this.ref.current.offsetWidth;
    }
  }, {
    key: "_getDeltaVal",
    value: function _getDeltaVal(x) {
      var percent = x / this._getBaseDistance();

      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "_getDeltaX",
    value: function _getDeltaX(v) {
      var percent = v / (this.props.maxValue - this.props.minValue);

      var maxDelta = this._getBaseDistance();

      return percent * maxDelta;
    }
  }, {
    key: "_getValue",
    value: function _getValue(baseV, offset) {
      // offset is the distance between slider handle and track left
      var rawValue = baseV + this._getDeltaVal(offset);

      return this._normalizeValue(rawValue);
    }
  }, {
    key: "_normalizeValue",
    value: function _normalizeValue(val) {
      var _this$props4 = this.props,
          minValue = _this$props4.minValue,
          step = _this$props4.step,
          marks = _this$props4.marks;
      return (0, _dataUtils.normalizeSliderValue)(val, minValue, step, marks);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classSet = _this$props5.classSet,
          disabled = _this$props5.disabled,
          isRanged = _this$props5.isRanged,
          maxValue = _this$props5.maxValue,
          minValue = _this$props5.minValue,
          value1 = _this$props5.value1,
          vertical = _this$props5.vertical,
          sliderHandleWidth = _this$props5.sliderHandleWidth,
          showTooltip = _this$props5.showTooltip;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread(_objectSpread({}, classSet), {}, {
          disabled: disabled
        })),
        ref: this.ref,
        isRanged: isRanged,
        vertical: vertical
      }, /*#__PURE__*/_react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical,
        ref: this.track
      }, /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical,
        track: this.track,
        setAnchor: this._setAnchor
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJTbGlkZXIiLCJ4IiwiX2FuY2hvciIsInZhbCIsInZhbHVlMSIsIm1pblZhbHVlIiwiQm9vbGVhbiIsIm1heFZhbHVlIiwidmFsdWUwIiwiX2dldFZhbHVlIiwiX2lzVmFsMEluUmFuZ2UiLCJvblNsaWRlcjBDaGFuZ2UiLCJfaXNWYWwxSW5SYW5nZSIsIm9uU2xpZGVyMUNoYW5nZSIsImFuY2hvciIsInZhbDAiLCJ2YWwxIiwiZGVsdGFYIiwiX2dldERlbHRhWCIsIm9uU2xpZGVyQmFyQ2hhbmdlIiwidyIsImwiLCJudW0iLCJzbGlkZXJIYW5kbGVXaWR0aCIsImlzUmFuZ2VkIiwicmVmIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicGVyY2VudCIsIl9nZXRCYXNlRGlzdGFuY2UiLCJtYXhEZWx0YSIsInYiLCJiYXNlViIsIm9mZnNldCIsInJhd1ZhbHVlIiwiX2dldERlbHRhVmFsIiwiX25vcm1hbGl6ZVZhbHVlIiwic3RlcCIsIm1hcmtzIiwiY2xhc3NTZXQiLCJkaXNhYmxlZCIsInNob3dUb29sdGlwIiwiY3VyclZhbERlbHRhIiwid2lkdGgiLCJ2MExlZnQiLCJ0cmFjayIsImNhbGNIYW5kbGVMZWZ0MCIsInNsaWRlMExpc3RlbmVyIiwiY2FsY0hhbmRsZUxlZnQxIiwic2xpZGUxTGlzdGVuZXIiLCJlbmFibGVCYXJEcmFnIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJfc2V0QW5jaG9yIiwiQ29tcG9uZW50IiwidGl0bGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uSW5wdXQwQ2hhbmdlIiwib25JbnB1dDFDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVsQixJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUQsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBRkosRUFHbkIsVUFBQUYsS0FBSztBQUFBLG1CQUFPQSxLQUFLLENBQUNHLFFBQU4sR0FBaUIsT0FBakIsR0FBMkIsUUFBbEMsZUFBK0NILEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxlQUEzRDtBQUFBLENBSGMsRUFJbkIsVUFBQUosS0FBSztBQUFBLG1CQUFPQSxLQUFLLENBQUNHLFFBQU4sR0FBaUIsUUFBakIsR0FBNEIsT0FBbkM7QUFBQSxDQUpjLENBQXZCOztBQU9BLElBQU1FLGFBQWEsR0FBR1AsNkJBQU9DLEdBQVYsb0JBQW5COztJQUlxQk8sTTs7Ozs7Ozs7Ozs7Ozs7O3lHQXVDYix1QjsyR0FDRSx1QjttR0FFSyxVQUFBQyxDQUFDLEVBQUk7QUFDaEI7QUFDQSxZQUFLQyxPQUFMLEdBQWVELENBQWY7QUFDRCxLO3VHQXdCZ0IsVUFBQUUsR0FBRyxFQUFJO0FBQUEsd0JBQ0ssTUFBS1QsS0FEVjtBQUFBLFVBQ2ZVLE1BRGUsZUFDZkEsTUFEZTtBQUFBLFVBQ1BDLFFBRE8sZUFDUEEsUUFETztBQUV0QixhQUFPQyxPQUFPLENBQUNILEdBQUcsSUFBSUUsUUFBUCxJQUFtQkYsR0FBRyxJQUFJQyxNQUEzQixDQUFkO0FBQ0QsSzt1R0FFZ0IsVUFBQUQsR0FBRyxFQUFJO0FBQUEseUJBQ0ssTUFBS1QsS0FEVjtBQUFBLFVBQ2ZhLFFBRGUsZ0JBQ2ZBLFFBRGU7QUFBQSxVQUNMQyxNQURLLGdCQUNMQSxNQURLO0FBRXRCLGFBQU9GLE9BQU8sQ0FBQ0gsR0FBRyxJQUFJSSxRQUFQLElBQW1CSixHQUFHLElBQUlLLE1BQTNCLENBQWQ7QUFDRCxLO3VHQU9nQixVQUFBUCxDQUFDLEVBQUk7QUFDcEIsVUFBTUUsR0FBRyxHQUFHLE1BQUtNLFNBQUwsQ0FBZSxNQUFLZixLQUFMLENBQVdXLFFBQTFCLEVBQW9DSixDQUFwQyxDQUFaOztBQUVBLFVBQUksTUFBS1MsY0FBTCxDQUFvQlAsR0FBcEIsQ0FBSixFQUE4QjtBQUM1QixjQUFLVCxLQUFMLENBQVdpQixlQUFYLENBQTJCUixHQUEzQjtBQUNEO0FBQ0YsSzt1R0FFZ0IsVUFBQUYsQ0FBQyxFQUFJO0FBQ3BCLFVBQU1FLEdBQUcsR0FBRyxNQUFLTSxTQUFMLENBQWUsTUFBS2YsS0FBTCxDQUFXVyxRQUExQixFQUFvQ0osQ0FBcEMsQ0FBWjs7QUFDQSxVQUFJLE1BQUtXLGNBQUwsQ0FBb0JULEdBQXBCLENBQUosRUFBOEI7QUFDNUIsY0FBS1QsS0FBTCxDQUFXbUIsZUFBWCxDQUEyQlYsR0FBM0I7QUFDRDtBQUNGLEs7MEdBRW1CLFVBQUFGLENBQUMsRUFBSTtBQUFBLHlCQUNNLE1BQUtQLEtBRFg7QUFBQSxVQUNoQlcsUUFEZ0IsZ0JBQ2hCQSxRQURnQjtBQUFBLFVBQ05FLFFBRE0sZ0JBQ05BLFFBRE0sRUFFdkI7O0FBQ0EsVUFBTU8sTUFBTSxHQUFHLE1BQUtaLE9BQXBCOztBQUNBLFVBQU1hLElBQUksR0FBRyxNQUFLTixTQUFMLENBQWUsTUFBS2YsS0FBTCxDQUFXYyxNQUExQixFQUFrQ1AsQ0FBQyxHQUFHYSxNQUF0QyxDQUFiOztBQUNBLFVBQU1FLElBQUksR0FBRyxNQUFLUCxTQUFMLENBQWUsTUFBS2YsS0FBTCxDQUFXVSxNQUExQixFQUFrQ0gsQ0FBQyxHQUFHYSxNQUF0QyxDQUFiOztBQUVBLFVBQUlDLElBQUksSUFBSVYsUUFBUixJQUFvQlcsSUFBSSxJQUFJVCxRQUE1QixJQUF3Q1MsSUFBSSxJQUFJRCxJQUFwRCxFQUEwRDtBQUN4RCxZQUFNRSxNQUFNLEdBQUcsTUFBS0MsVUFBTCxDQUFnQkgsSUFBSSxHQUFHLE1BQUtyQixLQUFMLENBQVdjLE1BQWxDLENBQWY7O0FBQ0EsY0FBS2QsS0FBTCxDQUFXeUIsaUJBQVgsQ0FBNkJKLElBQTdCLEVBQW1DQyxJQUFuQyxFQUZ3RCxDQUd4RDs7O0FBQ0EsY0FBS2QsT0FBTCxHQUFlLE1BQUtBLE9BQUwsR0FBZWUsTUFBOUI7QUFDRDtBQUNGLEs7d0dBRWlCLFVBQUNHLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxHQUFQLEVBQWU7QUFDL0IsYUFBT0YsQ0FBQyxLQUFLLENBQU4sa0JBQ0tDLENBREwsaUJBQ2EsTUFBSzNCLEtBQUwsQ0FBVzZCLGlCQUFYLEdBQStCLENBRDVDLDBCQUVLRixDQUZMLGlCQUVhLE1BQUszQixLQUFMLENBQVc2QixpQkFBWCxHQUErQixDQUY1QyxRQUFQO0FBR0QsSzt3R0FFaUIsVUFBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUIsYUFBTyxNQUFLM0IsS0FBTCxDQUFXOEIsUUFBWCxJQUF1QkosQ0FBQyxLQUFLLENBQTdCLGFBQ0FDLENBREEsd0JBRUtBLENBQUMsR0FBR0QsQ0FGVCxpQkFFaUIsTUFBSzFCLEtBQUwsQ0FBVzZCLGlCQUFYLEdBQStCLENBRmhELFFBQVA7QUFHRCxLOzs7Ozs7dUNBN0VrQjtBQUNqQixhQUFPLEtBQUs3QixLQUFMLENBQVdHLFFBQVgsR0FBc0IsS0FBSzRCLEdBQUwsQ0FBU0MsT0FBVCxDQUFpQkMsWUFBdkMsR0FBc0QsS0FBS0YsR0FBTCxDQUFTQyxPQUFULENBQWlCRSxXQUE5RTtBQUNEOzs7aUNBRVkzQixDLEVBQUc7QUFDZCxVQUFNNEIsT0FBTyxHQUFHNUIsQ0FBQyxHQUFHLEtBQUs2QixnQkFBTCxFQUFwQjs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS3JDLEtBQUwsQ0FBV2EsUUFBWCxHQUFzQixLQUFLYixLQUFMLENBQVdXLFFBQWxEO0FBQ0EsYUFBT3dCLE9BQU8sR0FBR0UsUUFBakI7QUFDRDs7OytCQUNVQyxDLEVBQUc7QUFDWixVQUFNSCxPQUFPLEdBQUdHLENBQUMsSUFBSSxLQUFLdEMsS0FBTCxDQUFXYSxRQUFYLEdBQXNCLEtBQUtiLEtBQUwsQ0FBV1csUUFBckMsQ0FBakI7O0FBQ0EsVUFBTTBCLFFBQVEsR0FBRyxLQUFLRCxnQkFBTCxFQUFqQjs7QUFDQSxhQUFPRCxPQUFPLEdBQUdFLFFBQWpCO0FBQ0Q7Ozs4QkFFU0UsSyxFQUFPQyxNLEVBQVE7QUFDdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUdGLEtBQUssR0FBRyxLQUFLRyxZQUFMLENBQWtCRixNQUFsQixDQUF6Qjs7QUFFQSxhQUFPLEtBQUtHLGVBQUwsQ0FBcUJGLFFBQXJCLENBQVA7QUFDRDs7O29DQVllaEMsRyxFQUFLO0FBQUEseUJBQ2EsS0FBS1QsS0FEbEI7QUFBQSxVQUNaVyxRQURZLGdCQUNaQSxRQURZO0FBQUEsVUFDRmlDLElBREUsZ0JBQ0ZBLElBREU7QUFBQSxVQUNJQyxLQURKLGdCQUNJQSxLQURKO0FBRW5CLGFBQU8scUNBQXFCcEMsR0FBckIsRUFBMEJFLFFBQTFCLEVBQW9DaUMsSUFBcEMsRUFBMENDLEtBQTFDLENBQVA7QUFDRDs7OzZCQTRDUTtBQUFBLHlCQVdILEtBQUs3QyxLQVhGO0FBQUEsVUFFTDhDLFFBRkssZ0JBRUxBLFFBRks7QUFBQSxVQUdMQyxRQUhLLGdCQUdMQSxRQUhLO0FBQUEsVUFJTGpCLFFBSkssZ0JBSUxBLFFBSks7QUFBQSxVQUtMakIsUUFMSyxnQkFLTEEsUUFMSztBQUFBLFVBTUxGLFFBTkssZ0JBTUxBLFFBTks7QUFBQSxVQU9MRCxNQVBLLGdCQU9MQSxNQVBLO0FBQUEsVUFRTFAsUUFSSyxnQkFRTEEsUUFSSztBQUFBLFVBU0wwQixpQkFUSyxnQkFTTEEsaUJBVEs7QUFBQSxVQVVMbUIsV0FWSyxnQkFVTEEsV0FWSztBQVlQLFVBQU1sQyxNQUFNLEdBQUcsQ0FBQ2dCLFFBQUQsSUFBYW5CLFFBQVEsR0FBRyxDQUF4QixHQUE0QkEsUUFBNUIsR0FBdUMsS0FBS1gsS0FBTCxDQUFXYyxNQUFqRTtBQUNBLFVBQU1tQyxZQUFZLEdBQUd2QyxNQUFNLEdBQUdJLE1BQTlCO0FBQ0EsVUFBTXVCLFFBQVEsR0FBR3hCLFFBQVEsR0FBR0YsUUFBNUI7QUFDQSxVQUFNdUMsS0FBSyxHQUFJRCxZQUFZLEdBQUdaLFFBQWhCLEdBQTRCLEdBQTFDO0FBRUEsVUFBTWMsTUFBTSxHQUFJLENBQUNyQyxNQUFNLEdBQUdILFFBQVYsSUFBc0IwQixRQUF2QixHQUFtQyxHQUFsRDtBQUVBLDBCQUNFLGdDQUFDLGFBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxXQUFYLGtDQUE0QlMsUUFBNUI7QUFBc0NDLFVBQUFBLFFBQVEsRUFBUkE7QUFBdEMsV0FEYjtBQUVFLFFBQUEsR0FBRyxFQUFFLEtBQUtoQixHQUZaO0FBR0UsUUFBQSxRQUFRLEVBQUVELFFBSFo7QUFJRSxRQUFBLFFBQVEsRUFBRTNCO0FBSlosc0JBTUUsZ0NBQUMsaUJBQUQ7QUFBbUIsUUFBQSxTQUFTLEVBQUMsaUJBQTdCO0FBQStDLFFBQUEsUUFBUSxFQUFFQSxRQUF6RDtBQUFtRSxRQUFBLEdBQUcsRUFBRSxLQUFLaUQ7QUFBN0Usc0JBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyx5QkFEWjtBQUVFLFFBQUEsSUFBSSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJILEtBQXJCLEVBQTRCQyxNQUE1QixDQUZSO0FBR0UsUUFBQSxhQUFhLEVBQUUsS0FBS0csY0FIdEI7QUFJRSxRQUFBLGlCQUFpQixFQUFFekIsaUJBSnJCO0FBS0UsUUFBQSxPQUFPLEVBQUVDLFFBTFg7QUFNRSxRQUFBLFFBQVEsRUFBRTNCLFFBTlo7QUFPRSxRQUFBLFdBQVcsRUFBRTZDLFdBUGY7QUFRRSxRQUFBLEtBQUssRUFBRSxLQUFLSTtBQVJkLFFBREYsZUFXRSxnQ0FBQyx3QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLHlCQURaO0FBRUUsUUFBQSxJQUFJLEVBQUUsS0FBS0csZUFBTCxDQUFxQkwsS0FBckIsRUFBNEJDLE1BQTVCLENBRlI7QUFHRSxRQUFBLGFBQWEsRUFBRSxLQUFLSyxjQUh0QjtBQUlFLFFBQUEsaUJBQWlCLEVBQUUzQixpQkFKckI7QUFLRSxRQUFBLFFBQVEsRUFBRTFCLFFBTFo7QUFNRSxRQUFBLEtBQUssRUFBRU8sTUFOVDtBQU9FLFFBQUEsV0FBVyxFQUFFc0MsV0FQZjtBQVFFLFFBQUEsS0FBSyxFQUFFLEtBQUtJO0FBUmQsUUFYRixlQXFCRSxnQ0FBQywyQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFFRixLQURUO0FBRUUsUUFBQSxNQUFNLEVBQUVDLE1BRlY7QUFHRSxRQUFBLGFBQWEsRUFBRSxLQUFLbkQsS0FBTCxDQUFXeUQsYUFINUI7QUFJRSxRQUFBLGlCQUFpQixFQUFFLEtBQUtDLGlCQUoxQjtBQUtFLFFBQUEsUUFBUSxFQUFFdkQsUUFMWjtBQU1FLFFBQUEsS0FBSyxFQUFFLEtBQUtpRCxLQU5kO0FBT0UsUUFBQSxTQUFTLEVBQUUsS0FBS087QUFQbEIsUUFyQkYsQ0FORixDQURGO0FBd0NEOzs7RUF6TGlDQyxnQjs7O2lDQUFmdEQsTSxlQUNBO0FBQ2pCdUQsRUFBQUEsS0FBSyxFQUFFQyxzQkFBVUMsTUFEQTtBQUVqQmpDLEVBQUFBLFFBQVEsRUFBRWdDLHNCQUFVRSxJQUZIO0FBR2pCbEQsRUFBQUEsTUFBTSxFQUFFZ0Qsc0JBQVVHLE1BSEQ7QUFJakJ2RCxFQUFBQSxNQUFNLEVBQUVvRCxzQkFBVUcsTUFKRDtBQUtqQnRELEVBQUFBLFFBQVEsRUFBRW1ELHNCQUFVRyxNQUxIO0FBTWpCcEQsRUFBQUEsUUFBUSxFQUFFaUQsc0JBQVVHLE1BTkg7QUFPakJwQyxFQUFBQSxpQkFBaUIsRUFBRWlDLHNCQUFVRyxNQVBaO0FBUWpCaEQsRUFBQUEsZUFBZSxFQUFFNkMsc0JBQVVJLElBUlY7QUFTakJDLEVBQUFBLGNBQWMsRUFBRUwsc0JBQVVJLElBVFQ7QUFVakIvQyxFQUFBQSxlQUFlLEVBQUUyQyxzQkFBVUksSUFWVjtBQVdqQkUsRUFBQUEsY0FBYyxFQUFFTixzQkFBVUksSUFYVDtBQVlqQnpDLEVBQUFBLGlCQUFpQixFQUFFcUMsc0JBQVVJLElBWlo7QUFhakJ0QixFQUFBQSxJQUFJLEVBQUVrQixzQkFBVUcsTUFiQztBQWNqQlIsRUFBQUEsYUFBYSxFQUFFSyxzQkFBVUUsSUFkUjtBQWVqQmhCLEVBQUFBLFdBQVcsRUFBRWMsc0JBQVVFO0FBZk4sQztpQ0FEQTFELE0sa0JBbUJHO0FBQ3BCdUQsRUFBQUEsS0FBSyxFQUFFLEVBRGE7QUFFcEIvQixFQUFBQSxRQUFRLEVBQUUsSUFGVTtBQUdwQmhCLEVBQUFBLE1BQU0sRUFBRSxDQUhZO0FBSXBCSixFQUFBQSxNQUFNLEVBQUUsR0FKWTtBQUtwQkMsRUFBQUEsUUFBUSxFQUFFLENBTFU7QUFNcEJFLEVBQUFBLFFBQVEsRUFBRSxHQU5VO0FBT3BCK0IsRUFBQUEsSUFBSSxFQUFFLENBUGM7QUFRcEJmLEVBQUFBLGlCQUFpQixFQUFFLEVBUkM7QUFTcEI0QixFQUFBQSxhQUFhLEVBQUUsS0FUSztBQVVwQnhDLEVBQUFBLGVBQWUsRUFBRXJCLElBVkc7QUFXcEJ1RSxFQUFBQSxjQUFjLEVBQUV2RSxJQVhJO0FBWXBCdUIsRUFBQUEsZUFBZSxFQUFFdkIsSUFaRztBQWFwQndFLEVBQUFBLGNBQWMsRUFBRXhFLElBYkk7QUFjcEI2QixFQUFBQSxpQkFBaUIsRUFBRTdCLElBZEM7QUFlcEJtRCxFQUFBQSxRQUFRLEVBQUUsS0FmVTtBQWdCcEI1QyxFQUFBQSxRQUFRLEVBQUUsS0FoQlU7QUFpQnBCNkMsRUFBQUEsV0FBVyxFQUFFO0FBakJPLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBTbGlkZXJIYW5kbGUgZnJvbSAnLi9zbGlkZXItaGFuZGxlJztcbmltcG9ydCBTbGlkZXJCYXJIYW5kbGUgZnJvbSAnLi9zbGlkZXItYmFyLWhhbmRsZSc7XG5pbXBvcnQge25vcm1hbGl6ZVNsaWRlclZhbHVlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmNvbnN0IFN0eWxlZFJhbmdlU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJhckJnZH07XG4gICR7cHJvcHMgPT4gYCR7cHJvcHMudmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCd9OiAke3Byb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodH1weGB9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnfTogMTAwJWB9O1xuYDtcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNSYW5nZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlMDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXJCYXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW5hYmxlQmFyRHJhZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1Rvb2x0aXA6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgdmFsdWUwOiAwLFxuICAgIHZhbHVlMTogMTAwLFxuICAgIG1pblZhbHVlOiAwLFxuICAgIG1heFZhbHVlOiAxMDAsXG4gICAgc3RlcDogMSxcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgZW5hYmxlQmFyRHJhZzogZmFsc2UsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBub29wLFxuICAgIG9uSW5wdXQwQ2hhbmdlOiBub29wLFxuICAgIG9uU2xpZGVyMUNoYW5nZTogbm9vcCxcbiAgICBvbklucHV0MUNoYW5nZTogbm9vcCxcbiAgICBvblNsaWRlckJhckNoYW5nZTogbm9vcCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICB9O1xuXG4gIHJlZiA9IGNyZWF0ZVJlZigpO1xuICB0cmFjayA9IGNyZWF0ZVJlZigpO1xuXG4gIF9zZXRBbmNob3IgPSB4ID0+IHtcbiAgICAvLyB1c2VkIHRvIGNhbGN1bGF0ZSBkZWx0YVxuICAgIHRoaXMuX2FuY2hvciA9IHg7XG4gIH07XG5cbiAgX2dldEJhc2VEaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IHRoaXMucmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IDogdGhpcy5yZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIF9nZXREZWx0YVZhbCh4KSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHggLyB0aGlzLl9nZXRCYXNlRGlzdGFuY2UoKTtcbiAgICBjb25zdCBtYXhEZWx0YSA9IHRoaXMucHJvcHMubWF4VmFsdWUgLSB0aGlzLnByb3BzLm1pblZhbHVlO1xuICAgIHJldHVybiBwZXJjZW50ICogbWF4RGVsdGE7XG4gIH1cbiAgX2dldERlbHRhWCh2KSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHYgLyAodGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWUpO1xuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5fZ2V0QmFzZURpc3RhbmNlKCk7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuXG4gIF9nZXRWYWx1ZShiYXNlViwgb2Zmc2V0KSB7XG4gICAgLy8gb2Zmc2V0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHNsaWRlciBoYW5kbGUgYW5kIHRyYWNrIGxlZnRcbiAgICBjb25zdCByYXdWYWx1ZSA9IGJhc2VWICsgdGhpcy5fZ2V0RGVsdGFWYWwob2Zmc2V0KTtcblxuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVWYWx1ZShyYXdWYWx1ZSk7XG4gIH1cblxuICBfaXNWYWwwSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgY29uc3Qge3ZhbHVlMSwgbWluVmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPj0gbWluVmFsdWUgJiYgdmFsIDw9IHZhbHVlMSk7XG4gIH07XG5cbiAgX2lzVmFsMUluUmFuZ2UgPSB2YWwgPT4ge1xuICAgIGNvbnN0IHttYXhWYWx1ZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsIDw9IG1heFZhbHVlICYmIHZhbCA+PSB2YWx1ZTApO1xuICB9O1xuXG4gIF9ub3JtYWxpemVWYWx1ZSh2YWwpIHtcbiAgICBjb25zdCB7bWluVmFsdWUsIHN0ZXAsIG1hcmtzfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVNsaWRlclZhbHVlKHZhbCwgbWluVmFsdWUsIHN0ZXAsIG1hcmtzKTtcbiAgfVxuXG4gIHNsaWRlMExpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy5taW5WYWx1ZSwgeCk7XG5cbiAgICBpZiAodGhpcy5faXNWYWwwSW5SYW5nZSh2YWwpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyMENoYW5nZSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICBzbGlkZTFMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMubWluVmFsdWUsIHgpO1xuICAgIGlmICh0aGlzLl9pc1ZhbDFJblJhbmdlKHZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXIxQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIHNsaWRlckJhckxpc3RlbmVyID0geCA9PiB7XG4gICAgY29uc3Qge21pblZhbHVlLCBtYXhWYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGZvciBzbGlkZXIgYmFyLCB3ZSB1c2UgZGlzdGFuY2UgZGVsdGFcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLl9hbmNob3I7XG4gICAgY29uc3QgdmFsMCA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMudmFsdWUwLCB4IC0gYW5jaG9yKTtcbiAgICBjb25zdCB2YWwxID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZTEsIHggLSBhbmNob3IpO1xuXG4gICAgaWYgKHZhbDAgPj0gbWluVmFsdWUgJiYgdmFsMSA8PSBtYXhWYWx1ZSAmJiB2YWwxID49IHZhbDApIHtcbiAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMuX2dldERlbHRhWCh2YWwwIC0gdGhpcy5wcm9wcy52YWx1ZTApO1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlckJhckNoYW5nZSh2YWwwLCB2YWwxKTtcbiAgICAgIC8vIHVwZGF0ZSBhbmNob3JcbiAgICAgIHRoaXMuX2FuY2hvciA9IHRoaXMuX2FuY2hvciArIGRlbHRhWDtcbiAgICB9XG4gIH07XG5cbiAgY2FsY0hhbmRsZUxlZnQwID0gKHcsIGwsIG51bSkgPT4ge1xuICAgIHJldHVybiB3ID09PSAwXG4gICAgICA/IGBjYWxjKCR7bH0lIC0gJHt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC8gMn1weClgXG4gICAgICA6IGBjYWxjKCR7bH0lIC0gJHt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC8gMn1weClgO1xuICB9O1xuXG4gIGNhbGNIYW5kbGVMZWZ0MSA9ICh3LCBsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNSYW5nZWQgJiYgdyA9PT0gMFxuICAgICAgPyBgJHtsfSVgXG4gICAgICA6IGBjYWxjKCR7bCArIHd9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NTZXQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzUmFuZ2VkLFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIHZhbHVlMSxcbiAgICAgIHZlcnRpY2FsLFxuICAgICAgc2xpZGVySGFuZGxlV2lkdGgsXG4gICAgICBzaG93VG9vbHRpcFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlMCA9ICFpc1JhbmdlZCAmJiBtaW5WYWx1ZSA+IDAgPyBtaW5WYWx1ZSA6IHRoaXMucHJvcHMudmFsdWUwO1xuICAgIGNvbnN0IGN1cnJWYWxEZWx0YSA9IHZhbHVlMSAtIHZhbHVlMDtcbiAgICBjb25zdCBtYXhEZWx0YSA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG4gICAgY29uc3Qgd2lkdGggPSAoY3VyclZhbERlbHRhIC8gbWF4RGVsdGEpICogMTAwO1xuXG4gICAgY29uc3QgdjBMZWZ0ID0gKCh2YWx1ZTAgLSBtaW5WYWx1ZSkgLyBtYXhEZWx0YSkgKiAxMDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlcldyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1zbGlkZXInLCB7Li4uY2xhc3NTZXQsIGRpc2FibGVkfSl9XG4gICAgICAgIHJlZj17dGhpcy5yZWZ9XG4gICAgICAgIGlzUmFuZ2VkPXtpc1JhbmdlZH1cbiAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkUmFuZ2VTbGlkZXIgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyXCIgdmVydGljYWw9e3ZlcnRpY2FsfSByZWY9e3RoaXMudHJhY2t9PlxuICAgICAgICAgIDxTbGlkZXJIYW5kbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faGFuZGxlXCJcbiAgICAgICAgICAgIGxlZnQ9e3RoaXMuY2FsY0hhbmRsZUxlZnQwKHdpZHRoLCB2MExlZnQpfVxuICAgICAgICAgICAgdmFsdWVMaXN0ZW5lcj17dGhpcy5zbGlkZTBMaXN0ZW5lcn1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIGRpc3BsYXk9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA9e3Nob3dUb29sdGlwfVxuICAgICAgICAgICAgdHJhY2s9e3RoaXMudHJhY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2xpZGVySGFuZGxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZVwiXG4gICAgICAgICAgICBsZWZ0PXt0aGlzLmNhbGNIYW5kbGVMZWZ0MSh3aWR0aCwgdjBMZWZ0KX1cbiAgICAgICAgICAgIHZhbHVlTGlzdGVuZXI9e3RoaXMuc2xpZGUxTGlzdGVuZXJ9XG4gICAgICAgICAgICBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUxfVxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA9e3Nob3dUb29sdGlwfVxuICAgICAgICAgICAgdHJhY2s9e3RoaXMudHJhY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2xpZGVyQmFySGFuZGxlXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICB2MExlZnQ9e3YwTGVmdH1cbiAgICAgICAgICAgIGVuYWJsZUJhckRyYWc9e3RoaXMucHJvcHMuZW5hYmxlQmFyRHJhZ31cbiAgICAgICAgICAgIHNsaWRlckJhckxpc3RlbmVyPXt0aGlzLnNsaWRlckJhckxpc3RlbmVyfVxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICAgICAgdHJhY2s9e3RoaXMudHJhY2t9XG4gICAgICAgICAgICBzZXRBbmNob3I9e3RoaXMuX3NldEFuY2hvcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZFJhbmdlU2xpZGVyPlxuICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==