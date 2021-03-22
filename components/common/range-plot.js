"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _histogramPlot = _interopRequireDefault(require("./histogram-plot"));

var _lineChart = _interopRequireDefault(require("./line-chart"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: ", "px;\n  display: flex;\n  position: 'relative';\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledRangePlot = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sliderBarHeight;
});

RangePlotFactory.deps = [_rangeBrush["default"], _histogramPlot["default"], _lineChart["default"]];

function RangePlotFactory(RangeBrush, HistogramPlot, LineChart) {
  var RangePlot = function RangePlot(_ref) {
    var onBrush = _ref.onBrush,
        range = _ref.range,
        value = _ref.value,
        width = _ref.width,
        plotType = _ref.plotType,
        lineChart = _ref.lineChart,
        histogram = _ref.histogram,
        isEnlarged = _ref.isEnlarged,
        isRanged = _ref.isRanged,
        theme = _ref.theme,
        chartProps = (0, _objectWithoutProperties2["default"])(_ref, ["onBrush", "range", "value", "width", "plotType", "lineChart", "histogram", "isEnlarged", "isRanged", "theme"]);

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        brushing = _useState2[0],
        setBrushing = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        hoveredDP = _useState4[0],
        onMouseMove = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        enableChartHover = _useState6[0],
        setEnableChartHover = _useState6[1];

    var height = isEnlarged ? theme.rangePlotHLarge : theme.rangePlotH;
    var onBrushStart = (0, _react.useCallback)(function () {
      setBrushing(true);
      onMouseMove(null);
      setEnableChartHover(false);
    }, [setBrushing, onMouseMove, setEnableChartHover]);
    var onBrushEnd = (0, _react.useCallback)(function () {
      setBrushing(false);
      setEnableChartHover(true);
    }, [setBrushing, setEnableChartHover]);
    var onMouseoverHandle = (0, _react.useCallback)(function () {
      onMouseMove(null);
      setEnableChartHover(false);
    }, [onMouseMove, setEnableChartHover]);
    var onMouseoutHandle = (0, _react.useCallback)(function () {
      setEnableChartHover(true);
    }, [setEnableChartHover]);

    var brushComponent = /*#__PURE__*/_react["default"].createElement(RangeBrush, (0, _extends2["default"])({
      onBrush: onBrush,
      onBrushStart: onBrushStart,
      onBrushEnd: onBrushEnd,
      range: range,
      value: value,
      width: width,
      height: height,
      isRanged: isRanged,
      onMouseoverHandle: onMouseoverHandle,
      onMouseoutHandle: onMouseoutHandle
    }, chartProps));

    var commonProps = _objectSpread({
      width: width,
      value: value,
      height: height,
      margin: isEnlarged ? theme.rangePlotMarginLarge : theme.rangePlotMargin,
      brushComponent: brushComponent,
      brushing: brushing,
      isEnlarged: isEnlarged,
      enableChartHover: enableChartHover,
      onMouseMove: onMouseMove,
      hoveredDP: hoveredDP,
      isRanged: isRanged
    }, chartProps);

    return /*#__PURE__*/_react["default"].createElement(StyledRangePlot, {
      style: {
        height: "".concat(isEnlarged ? theme.rangePlotContainerHLarge : theme.rangePlotContainerH, "px")
      },
      className: "kg-range-slider__plot"
    }, plotType === 'lineChart' && lineChart ? /*#__PURE__*/_react["default"].createElement(LineChart, (0, _extends2["default"])({
      lineChart: lineChart
    }, commonProps)) : /*#__PURE__*/_react["default"].createElement(HistogramPlot, (0, _extends2["default"])({
      histogram: histogram
    }, commonProps)));
  };

  RangePlot.propTypes = {
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      x0: _propTypes["default"].number,
      x1: _propTypes["default"].number
    })),
    lineChart: _propTypes["default"].object,
    plotType: _propTypes["default"].string,
    isEnlarged: _propTypes["default"].bool,
    onBlur: _propTypes["default"].func,
    width: _propTypes["default"].number.isRequired
  };
  return (0, _styledComponents.withTheme)(RangePlot);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbIlN0eWxlZFJhbmdlUGxvdCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJSYW5nZVBsb3RGYWN0b3J5IiwiZGVwcyIsIlJhbmdlQnJ1c2hGYWN0b3J5IiwiSGlzdG9ncmFtUGxvdEZhY3RvcnkiLCJMaW5lQ2hhcnRGYWN0b3J5IiwiUmFuZ2VCcnVzaCIsIkhpc3RvZ3JhbVBsb3QiLCJMaW5lQ2hhcnQiLCJSYW5nZVBsb3QiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJsaW5lQ2hhcnQiLCJoaXN0b2dyYW0iLCJpc0VubGFyZ2VkIiwiaXNSYW5nZWQiLCJjaGFydFByb3BzIiwiYnJ1c2hpbmciLCJzZXRCcnVzaGluZyIsImhvdmVyZWREUCIsIm9uTW91c2VNb3ZlIiwiZW5hYmxlQ2hhcnRIb3ZlciIsInNldEVuYWJsZUNoYXJ0SG92ZXIiLCJoZWlnaHQiLCJyYW5nZVBsb3RITGFyZ2UiLCJyYW5nZVBsb3RIIiwib25CcnVzaFN0YXJ0Iiwib25CcnVzaEVuZCIsIm9uTW91c2VvdmVySGFuZGxlIiwib25Nb3VzZW91dEhhbmRsZSIsImJydXNoQ29tcG9uZW50IiwiY29tbW9uUHJvcHMiLCJtYXJnaW4iLCJyYW5nZVBsb3RNYXJnaW5MYXJnZSIsInJhbmdlUGxvdE1hcmdpbiIsInJhbmdlUGxvdENvbnRhaW5lckhMYXJnZSIsInJhbmdlUGxvdENvbnRhaW5lckgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwieDAiLCJ4MSIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJvbkJsdXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QUNURCxzQkFBVUksS0FBVixDQUFnQjtBQUNkQyxNQUFBQSxFQUFFLEVBQUVMLHNCQUFVRSxNQURBO0FBRWRJLE1BQUFBLEVBQUUsRUFBRU4sc0JBQVVFO0FBRkEsS0FBaEIsQ0FEUyxDQUZTO0FBUXBCNUIsSUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVPLE1BUkQ7QUFTcEJsQyxJQUFBQSxRQUFRLEVBQUUyQixzQkFBVVEsTUFUQTtBQVVwQmhDLElBQUFBLFVBQVUsRUFBRXdCLHNCQUFVUyxJQVZGO0FBV3BCQyxJQUFBQSxNQUFNLEVBQUVWLHNCQUFVVyxJQVhFO0FBWXBCdkMsSUFBQUEsS0FBSyxFQUFFNEIsc0JBQVVFLE1BQVYsQ0FBaUJDO0FBWkosR0FBdEI7QUFjQSxTQUFPLGlDQUFVbkMsU0FBVixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VCcnVzaEZhY3RvcnkgZnJvbSAnLi9yYW5nZS1icnVzaCc7XG5pbXBvcnQgSGlzdG9ncmFtUGxvdEZhY3RvcnkgZnJvbSAnLi9oaXN0b2dyYW0tcGxvdCc7XG5pbXBvcnQgTGluZUNoYXJ0RmFjdG9yeSBmcm9tICcuL2xpbmUtY2hhcnQnO1xuXG5jb25zdCBTdHlsZWRSYW5nZVBsb3QgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSc7XG5gO1xuXG5SYW5nZVBsb3RGYWN0b3J5LmRlcHMgPSBbUmFuZ2VCcnVzaEZhY3RvcnksIEhpc3RvZ3JhbVBsb3RGYWN0b3J5LCBMaW5lQ2hhcnRGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VQbG90RmFjdG9yeShSYW5nZUJydXNoLCBIaXN0b2dyYW1QbG90LCBMaW5lQ2hhcnQpIHtcbiAgY29uc3QgUmFuZ2VQbG90ID0gKHtcbiAgICBvbkJydXNoLFxuICAgIHJhbmdlLFxuICAgIHZhbHVlLFxuICAgIHdpZHRoLFxuICAgIHBsb3RUeXBlLFxuICAgIGxpbmVDaGFydCxcbiAgICBoaXN0b2dyYW0sXG4gICAgaXNFbmxhcmdlZCxcbiAgICBpc1JhbmdlZCxcbiAgICB0aGVtZSxcbiAgICAuLi5jaGFydFByb3BzXG4gIH0pID0+IHtcbiAgICBjb25zdCBbYnJ1c2hpbmcsIHNldEJydXNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaG92ZXJlZERQLCBvbk1vdXNlTW92ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZW5hYmxlQ2hhcnRIb3Zlciwgc2V0RW5hYmxlQ2hhcnRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gaXNFbmxhcmdlZCA/IHRoZW1lLnJhbmdlUGxvdEhMYXJnZSA6IHRoZW1lLnJhbmdlUGxvdEg7XG5cbiAgICBjb25zdCBvbkJydXNoU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzZXRCcnVzaGluZyh0cnVlKTtcbiAgICAgIG9uTW91c2VNb3ZlKG51bGwpO1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3ZlcihmYWxzZSk7XG4gICAgfSwgW3NldEJydXNoaW5nLCBvbk1vdXNlTW92ZSwgc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgY29uc3Qgb25CcnVzaEVuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldEJydXNoaW5nKGZhbHNlKTtcbiAgICAgIHNldEVuYWJsZUNoYXJ0SG92ZXIodHJ1ZSk7XG4gICAgfSwgW3NldEJydXNoaW5nLCBzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICBjb25zdCBvbk1vdXNlb3ZlckhhbmRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIG9uTW91c2VNb3ZlKG51bGwpO1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3ZlcihmYWxzZSk7XG4gICAgfSwgW29uTW91c2VNb3ZlLCBzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICBjb25zdCBvbk1vdXNlb3V0SGFuZGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3Zlcih0cnVlKTtcbiAgICB9LCBbc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgY29uc3QgYnJ1c2hDb21wb25lbnQgPSAoXG4gICAgICA8UmFuZ2VCcnVzaFxuICAgICAgICBvbkJydXNoPXtvbkJydXNofVxuICAgICAgICBvbkJydXNoU3RhcnQ9e29uQnJ1c2hTdGFydH1cbiAgICAgICAgb25CcnVzaEVuZD17b25CcnVzaEVuZH1cbiAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlzUmFuZ2VkPXtpc1JhbmdlZH1cbiAgICAgICAgb25Nb3VzZW92ZXJIYW5kbGU9e29uTW91c2VvdmVySGFuZGxlfVxuICAgICAgICBvbk1vdXNlb3V0SGFuZGxlPXtvbk1vdXNlb3V0SGFuZGxlfVxuICAgICAgICB7Li4uY2hhcnRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgICAgd2lkdGgsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIG1hcmdpbjogaXNFbmxhcmdlZCA/IHRoZW1lLnJhbmdlUGxvdE1hcmdpbkxhcmdlIDogdGhlbWUucmFuZ2VQbG90TWFyZ2luLFxuICAgICAgYnJ1c2hDb21wb25lbnQsXG4gICAgICBicnVzaGluZyxcbiAgICAgIGlzRW5sYXJnZWQsXG4gICAgICBlbmFibGVDaGFydEhvdmVyLFxuICAgICAgb25Nb3VzZU1vdmUsXG4gICAgICBob3ZlcmVkRFAsXG4gICAgICBpc1JhbmdlZCxcbiAgICAgIC4uLmNoYXJ0UHJvcHNcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRSYW5nZVBsb3RcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IGAke2lzRW5sYXJnZWQgPyB0aGVtZS5yYW5nZVBsb3RDb250YWluZXJITGFyZ2UgOiB0aGVtZS5yYW5nZVBsb3RDb250YWluZXJIfXB4YFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX3Bsb3RcIlxuICAgICAgPlxuICAgICAgICB7cGxvdFR5cGUgPT09ICdsaW5lQ2hhcnQnICYmIGxpbmVDaGFydCA/IChcbiAgICAgICAgICA8TGluZUNoYXJ0IGxpbmVDaGFydD17bGluZUNoYXJ0fSB7Li4uY29tbW9uUHJvcHN9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEhpc3RvZ3JhbVBsb3QgaGlzdG9ncmFtPXtoaXN0b2dyYW19IHsuLi5jb21tb25Qcm9wc30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkUmFuZ2VQbG90PlxuICAgICk7XG4gIH07XG5cbiAgUmFuZ2VQbG90LnByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICBoaXN0b2dyYW06IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgeDA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHgxOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICB9KVxuICAgICksXG4gICAgbGluZUNoYXJ0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzRW5sYXJnZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuICByZXR1cm4gd2l0aFRoZW1lKFJhbmdlUGxvdCk7XG59XG4iXX0=