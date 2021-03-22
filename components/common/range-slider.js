"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _reselect = require("reselect");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  margin-left: ", "px;\n  font-size: ", "; // 10px // 12px;\n  padding: ", "; // 4px 6px; // 6px 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : props.size === 'tiny' ? 12 : 18;
}, function (props) {
  return props.theme.sliderInputFontSize;
}, function (props) {
  return props.theme.sliderInputPadding;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return !props.isRanged && props.showInput ? 'center' : 'flex-start';
});

var RangeInputWrapper = _styledComponents["default"].div(_templateObject3());

RangeSliderFactory.deps = [_rangePlot["default"]];

function RangeSliderFactory(RangePlot) {
  var RangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeSlider, _Component);

    var _super = _createSuper(RangeSlider);

    function RangeSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        value0: 0,
        value1: 1,
        prevValue0: 0,
        prevValue1: 1,
        width: 288
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainer", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue0", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue1", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value0Selector", function (props) {
        return props.value0;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value1Selector", function (props) {
        return props.value1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterValueSelector", (0, _reselect.createSelector)(_this.value0Selector, _this.value1Selector, function (value0, value1) {
        return [value0, value1];
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
        var _this$props = _this.props,
            value1 = _this$props.value1,
            range = _this$props.range;
        return Boolean(val >= range[0] && val <= value1);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
        var _this$props2 = _this.props,
            range = _this$props2.range,
            value0 = _this$props2.value0;
        return Boolean(val <= range[1] && val >= value0);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
        var _this$props3 = _this.props,
            range = _this$props3.range,
            step = _this$props3.step;
        return (0, _dataUtils.roundValToStep)(range[0], step, val);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
        var _this$props4 = _this.props,
            value0 = _this$props4.value0,
            onChange = _this$props4.onChange;
        var val1 = Number(val);

        if (_this._isVal1InRange(val1)) {
          onChange([value0, _this._roundValToStep(val1)]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
        var _this$props5 = _this.props,
            value1 = _this$props5.value1,
            onChange = _this$props5.onChange;
        var val0 = Number(val);

        if (_this._isVal0InRange(val0)) {
          onChange([_this._roundValToStep(val0), value1]);
          return true;
        }

        return false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        _this.setState((0, _defineProperty2["default"])({}, key, e.target.value));
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._resize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        this._resize();
      }
    }, {
      key: "_resize",
      value: function _resize() {
        var width = this.sliderContainer.current.offsetWidth;

        if (width !== this.state.width) {
          this.setState({
            width: width
          });
        }
      }
    }, {
      key: "_renderInput",
      value: function _renderInput(key) {
        var _this2 = this;

        var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;
        var ref = key === 'value0' ? this.inputValue0 : this.inputValue1;

        var update = function update(e) {
          if (!setRange(e.target.value)) {
            _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
          }
        };

        var onChange = this._onChangeInput.bind(this, key);

        return /*#__PURE__*/_react["default"].createElement(SliderInput, {
          className: "kg-range-slider__input",
          type: "number",
          ref: ref,
          id: "slider-input-".concat(key),
          key: key,
          value: this.state[key],
          onChange: onChange,
          onKeyPress: function onKeyPress(e) {
            if (e.key === 'Enter') {
              update(e);
              ref.current.blur();
            }
          },
          onBlur: update,
          flush: key === 'value0',
          size: this.props.inputSize,
          secondary: this.props.inputTheme === 'secondary'
        });
      } // eslint-disable-next-line complexity

    }, {
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            isRanged = _this$props6.isRanged,
            showInput = _this$props6.showInput,
            histogram = _this$props6.histogram,
            lineChart = _this$props6.lineChart,
            range = _this$props6.range,
            onChange = _this$props6.onChange,
            sliderHandleWidth = _this$props6.sliderHandleWidth,
            step = _this$props6.step;
        var width = this.state.width;
        var plotWidth = Math.max(width - sliderHandleWidth, 0);
        var renderPlot = histogram && histogram.length || lineChart;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "kg-range-slider",
          style: {
            width: '100%',
            padding: "0 ".concat(sliderHandleWidth / 2, "px")
          },
          ref: this.sliderContainer
        }, renderPlot ? /*#__PURE__*/_react["default"].createElement(RangePlot, {
          histogram: histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: this.props.isEnlarged,
          onBrush: function onBrush(val0, val1) {
            return onChange([val0, val1]);
          },
          marks: this.props.marks,
          range: range,
          value: this.props.plotValue || this.filterValueSelector(this.props),
          width: plotWidth,
          isRanged: isRanged,
          step: step
        }) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
          className: "kg-range-slider__slider",
          isRanged: isRanged,
          showInput: showInput
        }, this.props.xAxis ? /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            height: '30px'
          }
        }, /*#__PURE__*/_react["default"].createElement(this.props.xAxis, {
          width: plotWidth,
          domain: range,
          isEnlarged: this.props.isEnlarged
        })) : null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          marks: this.props.marks,
          showValues: false,
          isRanged: isRanged,
          minValue: range[0],
          maxValue: range[1],
          value0: this.props.value0,
          value1: this.props.value1,
          step: step,
          handleWidth: sliderHandleWidth,
          onSlider0Change: this._setRangeVal0,
          onSlider1Change: this._setRangeVal1,
          onSliderBarChange: function onSliderBarChange(val0, val1) {
            onChange([val0, val1]);
          },
          enableBarDrag: true
        }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? /*#__PURE__*/_react["default"].createElement(RangeInputWrapper, {
          className: "range-slider__input-group"
        }, this._renderInput('value0'), this._renderInput('value1')) : null);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var update = null;
        var value0 = props.value0,
            value1 = props.value1;

        if (props.value0 !== state.prevValue0 && !isNaN(value0)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value0: value0,
            prevValue0: value0
          });
        }

        if (props.value1 !== state.prevValue1 && !isNaN(value1)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value1: value1,
            prevValue1: value1
          });
        }

        return update;
      }
    }]);
    return RangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeSlider, "propTypes", {
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value0: _propTypes["default"].number.isRequired,
    value1: _propTypes["default"].number.isRequired,
    onChange: _propTypes["default"].func.isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    isRanged: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    showInput: _propTypes["default"].bool,
    inputTheme: _propTypes["default"].string,
    inputSize: _propTypes["default"].string,
    step: _propTypes["default"].number,
    sliderHandleWidth: _propTypes["default"].number,
    xAxis: _propTypes["default"].func
  });
  (0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
    isEnlarged: false,
    isRanged: true,
    showInput: true,
    sliderHandleWidth: 12,
    inputTheme: '',
    inputSize: 'small',
    onChange: function onChange() {}
  });
  (0, _reactLifecyclesCompat.polyfill)(RangeSlider);
  return RangeSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJJbnB1dCIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJJbnB1dFdpZHRoIiwiZmx1c2giLCJzaXplIiwic2xpZGVySW5wdXRGb250U2l6ZSIsInNsaWRlcklucHV0UGFkZGluZyIsIlNsaWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJpc1JhbmdlZCIsInNob3dJbnB1dCIsIlJhbmdlSW5wdXRXcmFwcGVyIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlUGxvdEZhY3RvcnkiLCJSYW5nZVBsb3QiLCJSYW5nZVNsaWRlciIsInZhbHVlMCIsInZhbHVlMSIsInByZXZWYWx1ZTAiLCJwcmV2VmFsdWUxIiwid2lkdGgiLCJ2YWx1ZTBTZWxlY3RvciIsInZhbHVlMVNlbGVjdG9yIiwidmFsIiwicmFuZ2UiLCJCb29sZWFuIiwic3RlcCIsIm9uQ2hhbmdlIiwidmFsMSIsIk51bWJlciIsIl9pc1ZhbDFJblJhbmdlIiwiX3JvdW5kVmFsVG9TdGVwIiwidmFsMCIsIl9pc1ZhbDBJblJhbmdlIiwia2V5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJfcmVzaXplIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2xpZGVyQ29udGFpbmVyIiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwic3RhdGUiLCJzZXRSYW5nZSIsIl9zZXRSYW5nZVZhbDAiLCJfc2V0UmFuZ2VWYWwxIiwicmVmIiwiaW5wdXRWYWx1ZTAiLCJpbnB1dFZhbHVlMSIsInVwZGF0ZSIsIl9vbkNoYW5nZUlucHV0IiwiYmluZCIsImJsdXIiLCJpbnB1dFNpemUiLCJpbnB1dFRoZW1lIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0Iiwic2xpZGVySGFuZGxlV2lkdGgiLCJwbG90V2lkdGgiLCJNYXRoIiwibWF4IiwicmVuZGVyUGxvdCIsImxlbmd0aCIsInBhZGRpbmciLCJwbG90VHlwZSIsImlzRW5sYXJnZWQiLCJtYXJrcyIsInBsb3RWYWx1ZSIsImZpbHRlclZhbHVlU2VsZWN0b3IiLCJ4QXhpcyIsImhlaWdodCIsIl9yZW5kZXJJbnB1dCIsImlzTmFOIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYW55IiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLGtDQUFPQyx3QkFBUCxDQUFILG9CQUNOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQWhCO0FBQUEsQ0FEQyxFQUVBLFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLEtBQU4sR0FBYyxDQUFkLEdBQWtCSCxLQUFLLENBQUNJLElBQU4sS0FBZSxNQUFmLEdBQXdCLEVBQXhCLEdBQTZCLEVBQXBEO0FBQUEsQ0FGTCxFQUdGLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksbUJBQWhCO0FBQUEsQ0FISCxFQUlKLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssa0JBQWhCO0FBQUEsQ0FKRCxDQUFqQjs7QUFPQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLHFCQUdGLFVBQUFULEtBQUs7QUFBQSxTQUFLLENBQUNBLEtBQUssQ0FBQ1UsUUFBUCxJQUFtQlYsS0FBSyxDQUFDVyxTQUF6QixHQUFxQyxRQUFyQyxHQUFnRCxZQUFyRDtBQUFBLENBSEgsQ0FBbkI7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUdKLDZCQUFPQyxHQUFWLG9CQUF2Qjs7QUFNQUksa0JBQWtCLENBQUNDLElBQW5CLEdBQTBCLENBQUNDLHFCQUFELENBQTFCOztBQUVlLFNBQVNGLGtCQUFULENBQTRCRyxTQUE1QixFQUF1QztBQUFBLE1BQzlDQyxXQUQ4QztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0dBd0MxQztBQUNOQyxRQUFBQSxNQUFNLEVBQUUsQ0FERjtBQUVOQyxRQUFBQSxNQUFNLEVBQUUsQ0FGRjtBQUdOQyxRQUFBQSxVQUFVLEVBQUUsQ0FITjtBQUlOQyxRQUFBQSxVQUFVLEVBQUUsQ0FKTjtBQUtOQyxRQUFBQSxLQUFLLEVBQUU7QUFMRCxPQXhDMEM7QUFBQSx1SEF3RGhDLHVCQXhEZ0M7QUFBQSxtSEF5RHBDLHVCQXpEb0M7QUFBQSxtSEEwRHBDLHVCQTFEb0M7QUFBQSx5R0EyRGpDLFVBQUF0QixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDa0IsTUFBVjtBQUFBLE9BM0Q0QjtBQUFBLHlHQTREakMsVUFBQWxCLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNtQixNQUFWO0FBQUEsT0E1RDRCO0FBQUEsOEdBNkQ1Qiw4QkFDcEIsTUFBS0ksY0FEZSxFQUVwQixNQUFLQyxjQUZlLEVBR3BCLFVBQUNOLE1BQUQsRUFBU0MsTUFBVDtBQUFBLGVBQW9CLENBQUNELE1BQUQsRUFBU0MsTUFBVCxDQUFwQjtBQUFBLE9BSG9CLENBN0Q0QjtBQUFBLHlHQW1FakMsVUFBQU0sR0FBRyxFQUFJO0FBQUEsMEJBQ0UsTUFBS3pCLEtBRFA7QUFBQSxZQUNmbUIsTUFEZSxlQUNmQSxNQURlO0FBQUEsWUFDUE8sS0FETyxlQUNQQSxLQURPO0FBR3RCLGVBQU9DLE9BQU8sQ0FBQ0YsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBRCxDQUFaLElBQW1CRCxHQUFHLElBQUlOLE1BQTNCLENBQWQ7QUFDRCxPQXZFaUQ7QUFBQSx5R0F5RWpDLFVBQUFNLEdBQUcsRUFBSTtBQUFBLDJCQUNFLE1BQUt6QixLQURQO0FBQUEsWUFDZjBCLEtBRGUsZ0JBQ2ZBLEtBRGU7QUFBQSxZQUNSUixNQURRLGdCQUNSQSxNQURRO0FBR3RCLGVBQU9TLE9BQU8sQ0FBQ0YsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBRCxDQUFaLElBQW1CRCxHQUFHLElBQUlQLE1BQTNCLENBQWQ7QUFDRCxPQTdFaUQ7QUFBQSwwR0ErRWhDLFVBQUFPLEdBQUcsRUFBSTtBQUFBLDJCQUNELE1BQUt6QixLQURKO0FBQUEsWUFDaEIwQixLQURnQixnQkFDaEJBLEtBRGdCO0FBQUEsWUFDVEUsSUFEUyxnQkFDVEEsSUFEUztBQUd2QixlQUFPLCtCQUFlRixLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QkUsSUFBekIsRUFBK0JILEdBQS9CLENBQVA7QUFDRCxPQW5GaUQ7QUFBQSx3R0FxRmxDLFVBQUFBLEdBQUcsRUFBSTtBQUFBLDJCQUNNLE1BQUt6QixLQURYO0FBQUEsWUFDZGtCLE1BRGMsZ0JBQ2RBLE1BRGM7QUFBQSxZQUNOVyxRQURNLGdCQUNOQSxRQURNO0FBRXJCLFlBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDTixHQUFELENBQW5COztBQUNBLFlBQUksTUFBS08sY0FBTCxDQUFvQkYsSUFBcEIsQ0FBSixFQUErQjtBQUM3QkQsVUFBQUEsUUFBUSxDQUFDLENBQUNYLE1BQUQsRUFBUyxNQUFLZSxlQUFMLENBQXFCSCxJQUFyQixDQUFULENBQUQsQ0FBUjtBQUNBLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxlQUFPLEtBQVA7QUFDRCxPQTdGaUQ7QUFBQSx3R0ErRmxDLFVBQUFMLEdBQUcsRUFBSTtBQUFBLDJCQUNNLE1BQUt6QixLQURYO0FBQUEsWUFDZG1CLE1BRGMsZ0JBQ2RBLE1BRGM7QUFBQSxZQUNOVSxRQURNLGdCQUNOQSxRQURNO0FBRXJCLFlBQU1LLElBQUksR0FBR0gsTUFBTSxDQUFDTixHQUFELENBQW5COztBQUVBLFlBQUksTUFBS1UsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBSixFQUErQjtBQUM3QkwsVUFBQUEsUUFBUSxDQUFDLENBQUMsTUFBS0ksZUFBTCxDQUFxQkMsSUFBckIsQ0FBRCxFQUE2QmYsTUFBN0IsQ0FBRCxDQUFSO0FBQ0EsaUJBQU8sSUFBUDtBQUNEOztBQUNELGVBQU8sS0FBUDtBQUNELE9BeEdpRDtBQUFBLHlHQWdIakMsVUFBQ2lCLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQzNCLGNBQUtDLFFBQUwsc0NBQWdCRixHQUFoQixFQUFzQkMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQS9CO0FBQ0QsT0FsSGlEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBZ0Q5QjtBQUNsQixhQUFLQyxPQUFMO0FBQ0Q7QUFsRGlEO0FBQUE7QUFBQSx5Q0FvRC9CQyxTQXBEK0IsRUFvRHBCQyxTQXBEb0IsRUFvRFQ7QUFDdkMsYUFBS0YsT0FBTDtBQUNEO0FBdERpRDtBQUFBO0FBQUEsZ0NBMEd4QztBQUNSLFlBQU1uQixLQUFLLEdBQUcsS0FBS3NCLGVBQUwsQ0FBcUJDLE9BQXJCLENBQTZCQyxXQUEzQzs7QUFDQSxZQUFJeEIsS0FBSyxLQUFLLEtBQUt5QixLQUFMLENBQVd6QixLQUF6QixFQUFnQztBQUM5QixlQUFLZ0IsUUFBTCxDQUFjO0FBQUNoQixZQUFBQSxLQUFLLEVBQUxBO0FBQUQsV0FBZDtBQUNEO0FBQ0Y7QUEvR2lEO0FBQUE7QUFBQSxtQ0FvSHJDYyxHQXBIcUMsRUFvSGhDO0FBQUE7O0FBQ2hCLFlBQU1ZLFFBQVEsR0FBR1osR0FBRyxLQUFLLFFBQVIsR0FBbUIsS0FBS2EsYUFBeEIsR0FBd0MsS0FBS0MsYUFBOUQ7QUFDQSxZQUFNQyxHQUFHLEdBQUdmLEdBQUcsS0FBSyxRQUFSLEdBQW1CLEtBQUtnQixXQUF4QixHQUFzQyxLQUFLQyxXQUF2RDs7QUFDQSxZQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBakIsQ0FBQyxFQUFJO0FBQ2xCLGNBQUksQ0FBQ1csUUFBUSxDQUFDWCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFiLEVBQStCO0FBQzdCLFlBQUEsTUFBSSxDQUFDRixRQUFMLHNDQUFnQkYsR0FBaEIsRUFBc0IsTUFBSSxDQUFDVyxLQUFMLENBQVdYLEdBQVgsQ0FBdEI7QUFDRDtBQUNGLFNBSkQ7O0FBTUEsWUFBTVAsUUFBUSxHQUFHLEtBQUswQixjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQnBCLEdBQS9CLENBQWpCOztBQUVBLDRCQUNFLGdDQUFDLFdBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyx3QkFEWjtBQUVFLFVBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxVQUFBLEdBQUcsRUFBRWUsR0FIUDtBQUlFLFVBQUEsRUFBRSx5QkFBa0JmLEdBQWxCLENBSko7QUFLRSxVQUFBLEdBQUcsRUFBRUEsR0FMUDtBQU1FLFVBQUEsS0FBSyxFQUFFLEtBQUtXLEtBQUwsQ0FBV1gsR0FBWCxDQU5UO0FBT0UsVUFBQSxRQUFRLEVBQUVQLFFBUFo7QUFRRSxVQUFBLFVBQVUsRUFBRSxvQkFBQVEsQ0FBQyxFQUFJO0FBQ2YsZ0JBQUlBLENBQUMsQ0FBQ0QsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJrQixjQUFBQSxNQUFNLENBQUNqQixDQUFELENBQU47QUFDQWMsY0FBQUEsR0FBRyxDQUFDTixPQUFKLENBQVlZLElBQVo7QUFDRDtBQUNGLFdBYkg7QUFjRSxVQUFBLE1BQU0sRUFBRUgsTUFkVjtBQWVFLFVBQUEsS0FBSyxFQUFFbEIsR0FBRyxLQUFLLFFBZmpCO0FBZ0JFLFVBQUEsSUFBSSxFQUFFLEtBQUtwQyxLQUFMLENBQVcwRCxTQWhCbkI7QUFpQkUsVUFBQSxTQUFTLEVBQUUsS0FBSzFELEtBQUwsQ0FBVzJELFVBQVgsS0FBMEI7QUFqQnZDLFVBREY7QUFxQkQsT0FwSmlELENBc0psRDs7QUF0SmtEO0FBQUE7QUFBQSwrQkF1SnpDO0FBQUEsMkJBVUgsS0FBSzNELEtBVkY7QUFBQSxZQUVMVSxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsWUFHTEMsU0FISyxnQkFHTEEsU0FISztBQUFBLFlBSUxpRCxTQUpLLGdCQUlMQSxTQUpLO0FBQUEsWUFLTEMsU0FMSyxnQkFLTEEsU0FMSztBQUFBLFlBTUxuQyxLQU5LLGdCQU1MQSxLQU5LO0FBQUEsWUFPTEcsUUFQSyxnQkFPTEEsUUFQSztBQUFBLFlBUUxpQyxpQkFSSyxnQkFRTEEsaUJBUks7QUFBQSxZQVNMbEMsSUFUSyxnQkFTTEEsSUFUSztBQUFBLFlBWUFOLEtBWkEsR0FZUyxLQUFLeUIsS0FaZCxDQVlBekIsS0FaQTtBQWFQLFlBQU15QyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTM0MsS0FBSyxHQUFHd0MsaUJBQWpCLEVBQW9DLENBQXBDLENBQWxCO0FBQ0EsWUFBTUksVUFBVSxHQUFJTixTQUFTLElBQUlBLFNBQVMsQ0FBQ08sTUFBeEIsSUFBbUNOLFNBQXREO0FBRUEsNEJBQ0U7QUFDRSxVQUFBLFNBQVMsRUFBQyxpQkFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQUN2QyxZQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQjhDLFlBQUFBLE9BQU8sY0FBT04saUJBQWlCLEdBQUcsQ0FBM0I7QUFBdkIsV0FGVDtBQUdFLFVBQUEsR0FBRyxFQUFFLEtBQUtsQjtBQUhaLFdBS0dzQixVQUFVLGdCQUNULGdDQUFDLFNBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBRU4sU0FEYjtBQUVFLFVBQUEsU0FBUyxFQUFFLEtBQUs1RCxLQUFMLENBQVc2RCxTQUZ4QjtBQUdFLFVBQUEsUUFBUSxFQUFFLEtBQUs3RCxLQUFMLENBQVdxRSxRQUh2QjtBQUlFLFVBQUEsVUFBVSxFQUFFLEtBQUtyRSxLQUFMLENBQVdzRSxVQUp6QjtBQUtFLFVBQUEsT0FBTyxFQUFFLGlCQUFDcEMsSUFBRCxFQUFPSixJQUFQO0FBQUEsbUJBQWdCRCxRQUFRLENBQUMsQ0FBQ0ssSUFBRCxFQUFPSixJQUFQLENBQUQsQ0FBeEI7QUFBQSxXQUxYO0FBTUUsVUFBQSxLQUFLLEVBQUUsS0FBSzlCLEtBQUwsQ0FBV3VFLEtBTnBCO0FBT0UsVUFBQSxLQUFLLEVBQUU3QyxLQVBUO0FBUUUsVUFBQSxLQUFLLEVBQUUsS0FBSzFCLEtBQUwsQ0FBV3dFLFNBQVgsSUFBd0IsS0FBS0MsbUJBQUwsQ0FBeUIsS0FBS3pFLEtBQTlCLENBUmpDO0FBU0UsVUFBQSxLQUFLLEVBQUUrRCxTQVRUO0FBVUUsVUFBQSxRQUFRLEVBQUVyRCxRQVZaO0FBV0UsVUFBQSxJQUFJLEVBQUVrQjtBQVhSLFVBRFMsR0FjUCxJQW5CTixlQW9CRSxnQ0FBQyxhQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMseUJBRFo7QUFFRSxVQUFBLFFBQVEsRUFBRWxCLFFBRlo7QUFHRSxVQUFBLFNBQVMsRUFBRUM7QUFIYixXQUtHLEtBQUtYLEtBQUwsQ0FBVzBFLEtBQVgsZ0JBQ0M7QUFBSyxVQUFBLEtBQUssRUFBRTtBQUFDQyxZQUFBQSxNQUFNLEVBQUU7QUFBVDtBQUFaLHdCQUNFLHFDQUFNLEtBQU4sQ0FBWSxLQUFaO0FBQ0UsVUFBQSxLQUFLLEVBQUVaLFNBRFQ7QUFFRSxVQUFBLE1BQU0sRUFBRXJDLEtBRlY7QUFHRSxVQUFBLFVBQVUsRUFBRSxLQUFLMUIsS0FBTCxDQUFXc0U7QUFIekIsVUFERixDQURELEdBUUcsSUFiTixlQWNFLGdDQUFDLGtCQUFEO0FBQ0UsVUFBQSxLQUFLLEVBQUUsS0FBS3RFLEtBQUwsQ0FBV3VFLEtBRHBCO0FBRUUsVUFBQSxVQUFVLEVBQUUsS0FGZDtBQUdFLFVBQUEsUUFBUSxFQUFFN0QsUUFIWjtBQUlFLFVBQUEsUUFBUSxFQUFFZ0IsS0FBSyxDQUFDLENBQUQsQ0FKakI7QUFLRSxVQUFBLFFBQVEsRUFBRUEsS0FBSyxDQUFDLENBQUQsQ0FMakI7QUFNRSxVQUFBLE1BQU0sRUFBRSxLQUFLMUIsS0FBTCxDQUFXa0IsTUFOckI7QUFPRSxVQUFBLE1BQU0sRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUIsTUFQckI7QUFRRSxVQUFBLElBQUksRUFBRVMsSUFSUjtBQVNFLFVBQUEsV0FBVyxFQUFFa0MsaUJBVGY7QUFVRSxVQUFBLGVBQWUsRUFBRSxLQUFLYixhQVZ4QjtBQVdFLFVBQUEsZUFBZSxFQUFFLEtBQUtDLGFBWHhCO0FBWUUsVUFBQSxpQkFBaUIsRUFBRSwyQkFBQ2hCLElBQUQsRUFBT0osSUFBUCxFQUFnQjtBQUNqQ0QsWUFBQUEsUUFBUSxDQUFDLENBQUNLLElBQUQsRUFBT0osSUFBUCxDQUFELENBQVI7QUFDRCxXQWRIO0FBZUUsVUFBQSxhQUFhO0FBZmYsVUFkRixFQStCRyxDQUFDcEIsUUFBRCxJQUFhQyxTQUFiLEdBQXlCLEtBQUtpRSxZQUFMLENBQWtCLFFBQWxCLENBQXpCLEdBQXVELElBL0IxRCxDQXBCRixFQXFER2xFLFFBQVEsSUFBSUMsU0FBWixnQkFDQyxnQ0FBQyxpQkFBRDtBQUFtQixVQUFBLFNBQVMsRUFBQztBQUE3QixXQUNHLEtBQUtpRSxZQUFMLENBQWtCLFFBQWxCLENBREgsRUFFRyxLQUFLQSxZQUFMLENBQWtCLFFBQWxCLENBRkgsQ0FERCxHQUtHLElBMUROLENBREY7QUE4REQ7QUFyT2lEO0FBQUE7QUFBQSwrQ0E0QmxCNUUsS0E1QmtCLEVBNEJYK0MsS0E1QlcsRUE0Qko7QUFDNUMsWUFBSU8sTUFBTSxHQUFHLElBQWI7QUFENEMsWUFFckNwQyxNQUZxQyxHQUVuQmxCLEtBRm1CLENBRXJDa0IsTUFGcUM7QUFBQSxZQUU3QkMsTUFGNkIsR0FFbkJuQixLQUZtQixDQUU3Qm1CLE1BRjZCOztBQUc1QyxZQUFJbkIsS0FBSyxDQUFDa0IsTUFBTixLQUFpQjZCLEtBQUssQ0FBQzNCLFVBQXZCLElBQXFDLENBQUN5RCxLQUFLLENBQUMzRCxNQUFELENBQS9DLEVBQXlEO0FBQ3ZEb0MsVUFBQUEsTUFBTSxtQ0FBUUEsTUFBTSxJQUFJLEVBQWxCO0FBQXVCcEMsWUFBQUEsTUFBTSxFQUFOQSxNQUF2QjtBQUErQkUsWUFBQUEsVUFBVSxFQUFFRjtBQUEzQyxZQUFOO0FBQ0Q7O0FBQ0QsWUFBSWxCLEtBQUssQ0FBQ21CLE1BQU4sS0FBaUI0QixLQUFLLENBQUMxQixVQUF2QixJQUFxQyxDQUFDd0QsS0FBSyxDQUFDMUQsTUFBRCxDQUEvQyxFQUF5RDtBQUN2RG1DLFVBQUFBLE1BQU0sbUNBQVFBLE1BQU0sSUFBSSxFQUFsQjtBQUF1Qm5DLFlBQUFBLE1BQU0sRUFBTkEsTUFBdkI7QUFBK0JFLFlBQUFBLFVBQVUsRUFBRUY7QUFBM0MsWUFBTjtBQUNEOztBQUNELGVBQU9tQyxNQUFQO0FBQ0Q7QUF0Q2lEO0FBQUE7QUFBQSxJQUMxQndCLGdCQUQwQjs7QUFBQSxtQ0FDOUM3RCxXQUQ4QyxlQUUvQjtBQUNqQlMsSUFBQUEsS0FBSyxFQUFFcUQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QixFQUFvQ0MsVUFEMUI7QUFFakJoRSxJQUFBQSxNQUFNLEVBQUU2RCxzQkFBVUUsTUFBVixDQUFpQkMsVUFGUjtBQUdqQi9ELElBQUFBLE1BQU0sRUFBRTRELHNCQUFVRSxNQUFWLENBQWlCQyxVQUhSO0FBSWpCckQsSUFBQUEsUUFBUSxFQUFFa0Qsc0JBQVVJLElBQVYsQ0FBZUQsVUFKUjtBQUtqQnRCLElBQUFBLFNBQVMsRUFBRW1CLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUssR0FBNUIsQ0FMTTtBQU1qQjFFLElBQUFBLFFBQVEsRUFBRXFFLHNCQUFVTSxJQU5IO0FBT2pCZixJQUFBQSxVQUFVLEVBQUVTLHNCQUFVTSxJQVBMO0FBUWpCMUUsSUFBQUEsU0FBUyxFQUFFb0Usc0JBQVVNLElBUko7QUFTakIxQixJQUFBQSxVQUFVLEVBQUVvQixzQkFBVU8sTUFUTDtBQVVqQjVCLElBQUFBLFNBQVMsRUFBRXFCLHNCQUFVTyxNQVZKO0FBV2pCMUQsSUFBQUEsSUFBSSxFQUFFbUQsc0JBQVVFLE1BWEM7QUFZakJuQixJQUFBQSxpQkFBaUIsRUFBRWlCLHNCQUFVRSxNQVpaO0FBYWpCUCxJQUFBQSxLQUFLLEVBQUVLLHNCQUFVSTtBQWJBLEdBRitCO0FBQUEsbUNBQzlDbEUsV0FEOEMsa0JBa0I1QjtBQUNwQnFELElBQUFBLFVBQVUsRUFBRSxLQURRO0FBRXBCNUQsSUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJDLElBQUFBLFNBQVMsRUFBRSxJQUhTO0FBSXBCbUQsSUFBQUEsaUJBQWlCLEVBQUUsRUFKQztBQUtwQkgsSUFBQUEsVUFBVSxFQUFFLEVBTFE7QUFNcEJELElBQUFBLFNBQVMsRUFBRSxPQU5TO0FBT3BCN0IsSUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFQRSxHQWxCNEI7QUF3T3BELHVDQUFTWixXQUFUO0FBRUEsU0FBT0EsV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSYW5nZVBsb3RGYWN0b3J5IGZyb20gJy4vcmFuZ2UtcGxvdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge3JvdW5kVmFsVG9TdGVwfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgU2xpZGVySW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJJbnB1dFdpZHRofXB4O1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuZmx1c2ggPyAwIDogcHJvcHMuc2l6ZSA9PT0gJ3RpbnknID8gMTIgOiAxOCl9cHg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJJbnB1dEZvbnRTaXplfTsgLy8gMTBweCAvLyAxMnB4O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlcklucHV0UGFkZGluZ307IC8vIDRweCA2cHg7IC8vIDZweCAxMnB4O1xuYDtcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6ICR7cHJvcHMgPT4gKCFwcm9wcy5pc1JhbmdlZCAmJiBwcm9wcy5zaG93SW5wdXQgPyAnY2VudGVyJyA6ICdmbGV4LXN0YXJ0Jyl9O1xuYDtcblxuY29uc3QgUmFuZ2VJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5SYW5nZVNsaWRlckZhY3RvcnkuZGVwcyA9IFtSYW5nZVBsb3RGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VTbGlkZXJGYWN0b3J5KFJhbmdlUGxvdCkge1xuICBjbGFzcyBSYW5nZVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHJhbmdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWUwOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgaGlzdG9ncmFtOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRW5sYXJnZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2hvd0lucHV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpbnB1dFNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB4QXhpczogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGlzRW5sYXJnZWQ6IGZhbHNlLFxuICAgICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgICBzaG93SW5wdXQ6IHRydWUsXG4gICAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgICBpbnB1dFRoZW1lOiAnJyxcbiAgICAgIGlucHV0U2l6ZTogJ3NtYWxsJyxcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7fVxuICAgIH07XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgbGV0IHVwZGF0ZSA9IG51bGw7XG4gICAgICBjb25zdCB7dmFsdWUwLCB2YWx1ZTF9ID0gcHJvcHM7XG4gICAgICBpZiAocHJvcHMudmFsdWUwICE9PSBzdGF0ZS5wcmV2VmFsdWUwICYmICFpc05hTih2YWx1ZTApKSB7XG4gICAgICAgIHVwZGF0ZSA9IHsuLi4odXBkYXRlIHx8IHt9KSwgdmFsdWUwLCBwcmV2VmFsdWUwOiB2YWx1ZTB9O1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnZhbHVlMSAhPT0gc3RhdGUucHJldlZhbHVlMSAmJiAhaXNOYU4odmFsdWUxKSkge1xuICAgICAgICB1cGRhdGUgPSB7Li4uKHVwZGF0ZSB8fCB7fSksIHZhbHVlMSwgcHJldlZhbHVlMTogdmFsdWUxfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICB2YWx1ZTA6IDAsXG4gICAgICB2YWx1ZTE6IDEsXG4gICAgICBwcmV2VmFsdWUwOiAwLFxuICAgICAgcHJldlZhbHVlMTogMSxcbiAgICAgIHdpZHRoOiAyODhcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9yZXNpemUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICAgIH1cblxuICAgIHNsaWRlckNvbnRhaW5lciA9IGNyZWF0ZVJlZigpO1xuICAgIGlucHV0VmFsdWUwID0gY3JlYXRlUmVmKCk7XG4gICAgaW5wdXRWYWx1ZTEgPSBjcmVhdGVSZWYoKTtcbiAgICB2YWx1ZTBTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlMDtcbiAgICB2YWx1ZTFTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlMTtcbiAgICBmaWx0ZXJWYWx1ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLnZhbHVlMFNlbGVjdG9yLFxuICAgICAgdGhpcy52YWx1ZTFTZWxlY3RvcixcbiAgICAgICh2YWx1ZTAsIHZhbHVlMSkgPT4gW3ZhbHVlMCwgdmFsdWUxXVxuICAgICk7XG5cbiAgICBfaXNWYWwwSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB7dmFsdWUxLCByYW5nZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbih2YWwgPj0gcmFuZ2VbMF0gJiYgdmFsIDw9IHZhbHVlMSk7XG4gICAgfTtcblxuICAgIF9pc1ZhbDFJblJhbmdlID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHtyYW5nZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBCb29sZWFuKHZhbCA8PSByYW5nZVsxXSAmJiB2YWwgPj0gdmFsdWUwKTtcbiAgICB9O1xuXG4gICAgX3JvdW5kVmFsVG9TdGVwID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHtyYW5nZSwgc3RlcH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gcm91bmRWYWxUb1N0ZXAocmFuZ2VbMF0sIHN0ZXAsIHZhbCk7XG4gICAgfTtcblxuICAgIF9zZXRSYW5nZVZhbDEgPSB2YWwgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlMCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHZhbDEgPSBOdW1iZXIodmFsKTtcbiAgICAgIGlmICh0aGlzLl9pc1ZhbDFJblJhbmdlKHZhbDEpKSB7XG4gICAgICAgIG9uQ2hhbmdlKFt2YWx1ZTAsIHRoaXMuX3JvdW5kVmFsVG9TdGVwKHZhbDEpXSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBfc2V0UmFuZ2VWYWwwID0gdmFsID0+IHtcbiAgICAgIGNvbnN0IHt2YWx1ZTEsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB2YWwwID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1ZhbDBJblJhbmdlKHZhbDApKSB7XG4gICAgICAgIG9uQ2hhbmdlKFt0aGlzLl9yb3VuZFZhbFRvU3RlcCh2YWwwKSwgdmFsdWUxXSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBfcmVzaXplKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNsaWRlckNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9vbkNoYW5nZUlucHV0ID0gKGtleSwgZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleV06IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIF9yZW5kZXJJbnB1dChrZXkpIHtcbiAgICAgIGNvbnN0IHNldFJhbmdlID0ga2V5ID09PSAndmFsdWUwJyA/IHRoaXMuX3NldFJhbmdlVmFsMCA6IHRoaXMuX3NldFJhbmdlVmFsMTtcbiAgICAgIGNvbnN0IHJlZiA9IGtleSA9PT0gJ3ZhbHVlMCcgPyB0aGlzLmlucHV0VmFsdWUwIDogdGhpcy5pbnB1dFZhbHVlMTtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGUgPT4ge1xuICAgICAgICBpZiAoIXNldFJhbmdlKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1trZXldOiB0aGlzLnN0YXRlW2tleV19KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZUlucHV0LmJpbmQodGhpcywga2V5KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNsaWRlcklucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgaWQ9e2BzbGlkZXItaW5wdXQtJHtrZXl9YH1cbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZVtrZXldfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICB1cGRhdGUoZSk7XG4gICAgICAgICAgICAgIHJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17dXBkYXRlfVxuICAgICAgICAgIGZsdXNoPXtrZXkgPT09ICd2YWx1ZTAnfVxuICAgICAgICAgIHNpemU9e3RoaXMucHJvcHMuaW5wdXRTaXplfVxuICAgICAgICAgIHNlY29uZGFyeT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5J31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzUmFuZ2VkLFxuICAgICAgICBzaG93SW5wdXQsXG4gICAgICAgIGhpc3RvZ3JhbSxcbiAgICAgICAgbGluZUNoYXJ0LFxuICAgICAgICByYW5nZSxcbiAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxuICAgICAgICBzdGVwXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge3dpZHRofSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwbG90V2lkdGggPSBNYXRoLm1heCh3aWR0aCAtIHNsaWRlckhhbmRsZVdpZHRoLCAwKTtcbiAgICAgIGNvbnN0IHJlbmRlclBsb3QgPSAoaGlzdG9ncmFtICYmIGhpc3RvZ3JhbS5sZW5ndGgpIHx8IGxpbmVDaGFydDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlclwiXG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiBgMCAke3NsaWRlckhhbmRsZVdpZHRoIC8gMn1weGB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zbGlkZXJDb250YWluZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyUGxvdCA/IChcbiAgICAgICAgICAgIDxSYW5nZVBsb3RcbiAgICAgICAgICAgICAgaGlzdG9ncmFtPXtoaXN0b2dyYW19XG4gICAgICAgICAgICAgIGxpbmVDaGFydD17dGhpcy5wcm9wcy5saW5lQ2hhcnR9XG4gICAgICAgICAgICAgIHBsb3RUeXBlPXt0aGlzLnByb3BzLnBsb3RUeXBlfVxuICAgICAgICAgICAgICBpc0VubGFyZ2VkPXt0aGlzLnByb3BzLmlzRW5sYXJnZWR9XG4gICAgICAgICAgICAgIG9uQnJ1c2g9eyh2YWwwLCB2YWwxKSA9PiBvbkNoYW5nZShbdmFsMCwgdmFsMV0pfVxuICAgICAgICAgICAgICBtYXJrcz17dGhpcy5wcm9wcy5tYXJrc31cbiAgICAgICAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wbG90VmFsdWUgfHwgdGhpcy5maWx0ZXJWYWx1ZVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICB3aWR0aD17cGxvdFdpZHRofVxuICAgICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxTbGlkZXJXcmFwcGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX3NsaWRlclwiXG4gICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICBzaG93SW5wdXQ9e3Nob3dJbnB1dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy54QXhpcyA/IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzMwcHgnfX0+XG4gICAgICAgICAgICAgICAgPHRoaXMucHJvcHMueEF4aXNcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtwbG90V2lkdGh9XG4gICAgICAgICAgICAgICAgICBkb21haW49e3JhbmdlfVxuICAgICAgICAgICAgICAgICAgaXNFbmxhcmdlZD17dGhpcy5wcm9wcy5pc0VubGFyZ2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgIG1hcmtzPXt0aGlzLnByb3BzLm1hcmtzfVxuICAgICAgICAgICAgICBzaG93VmFsdWVzPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgICBtaW5WYWx1ZT17cmFuZ2VbMF19XG4gICAgICAgICAgICAgIG1heFZhbHVlPXtyYW5nZVsxXX1cbiAgICAgICAgICAgICAgdmFsdWUwPXt0aGlzLnByb3BzLnZhbHVlMH1cbiAgICAgICAgICAgICAgdmFsdWUxPXt0aGlzLnByb3BzLnZhbHVlMX1cbiAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgaGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgICBvblNsaWRlcjBDaGFuZ2U9e3RoaXMuX3NldFJhbmdlVmFsMH1cbiAgICAgICAgICAgICAgb25TbGlkZXIxQ2hhbmdlPXt0aGlzLl9zZXRSYW5nZVZhbDF9XG4gICAgICAgICAgICAgIG9uU2xpZGVyQmFyQ2hhbmdlPXsodmFsMCwgdmFsMSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFt2YWwwLCB2YWwxXSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGVuYWJsZUJhckRyYWdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWlzUmFuZ2VkICYmIHNob3dJbnB1dCA/IHRoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTEnKSA6IG51bGx9XG4gICAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgICAgIHtpc1JhbmdlZCAmJiBzaG93SW5wdXQgPyAoXG4gICAgICAgICAgICA8UmFuZ2VJbnB1dFdyYXBwZXIgY2xhc3NOYW1lPVwicmFuZ2Utc2xpZGVyX19pbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMCcpfVxuICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMScpfVxuICAgICAgICAgICAgPC9SYW5nZUlucHV0V3JhcHBlcj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHBvbHlmaWxsKFJhbmdlU2xpZGVyKTtcblxuICByZXR1cm4gUmFuZ2VTbGlkZXI7XG59XG4iXX0=