"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filterUtils = require("../../utils/filter-utils");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot {\n    /* important for rendering hint */\n    position: relative;\n  }\n  .rv-xy-plot__inner {\n    /* important to show axis */\n    overflow: visible;\n  }\n\n  .rv-xy-plot__grid-lines__line {\n    stroke: ", ";\n    stroke-dasharray: 1px 4px;\n  }\n\n  .rv-xy-plot__axis__tick__text {\n    font-size: 9px;\n    fill: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LineChartWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.textColor;
});

var StyledHint = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      format = _ref.format;
  return /*#__PURE__*/_react["default"].createElement(StyledHint, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, y));
};

var MARGIN = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

function LineChartFactory() {
  var LineChart = function LineChart(_ref2) {
    var brushComponent = _ref2.brushComponent,
        brushing = _ref2.brushing,
        color = _ref2.color,
        enableChartHover = _ref2.enableChartHover,
        height = _ref2.height,
        hoveredDP = _ref2.hoveredDP,
        isEnlarged = _ref2.isEnlarged,
        lineChart = _ref2.lineChart,
        margin = _ref2.margin,
        onMouseMove = _ref2.onMouseMove,
        width = _ref2.width;
    var xDomain = lineChart.xDomain,
        series = lineChart.series,
        yDomain = lineChart.yDomain;
    var hintFormatter = (0, _react.useMemo)(function () {
      return (0, _filterUtils.getTimeWidgetHintFormatter)(xDomain);
    }, [xDomain]);
    var brushData = (0, _react.useMemo)(function () {
      return [{
        x: series[0].x,
        y: yDomain[1],
        customComponent: function customComponent() {
          return brushComponent;
        }
      }];
    }, [series, yDomain, brushComponent]);
    return /*#__PURE__*/_react["default"].createElement(LineChartWrapper, {
      style: {
        marginTop: "".concat(margin.top, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.XYPlot, {
      xType: "time",
      width: width,
      height: height,
      margin: MARGIN,
      onMouseLeave: function onMouseLeave() {
        onMouseMove(null);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.HorizontalGridLines, {
      tickTotal: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.LineSeries, {
      style: {
        fill: 'none'
      },
      strokeWidth: 2,
      color: color,
      data: series,
      onNearestX: enableChartHover ? onMouseMove : null
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.MarkSeries, {
      data: hoveredDP ? [hoveredDP] : [],
      color: color,
      size: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.CustomSVGSeries, {
      data: brushData
    }), isEnlarged && /*#__PURE__*/_react["default"].createElement(_reactVis.YAxis, {
      tickTotal: 3
    }), hoveredDP && enableChartHover && !brushing ? /*#__PURE__*/_react["default"].createElement(_reactVis.Hint, {
      value: hoveredDP
    }, /*#__PURE__*/_react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
      format: function format(val) {
        return _moment["default"].utc(val).format(hintFormatter);
      }
    }))) : null));
  };

  return LineChart;
}

var _default = LineChartFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9saW5lLWNoYXJ0LmpzIl0sIm5hbWVzIjpbIkxpbmVDaGFydFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiaGlzdG9ncmFtRmlsbE91dFJhbmdlIiwidGV4dENvbG9yIiwiU3R5bGVkSGludCIsInRleHRDb2xvckxUIiwiSGludENvbnRlbnQiLCJ4IiwieSIsImZvcm1hdCIsIk1BUkdJTiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIkxpbmVDaGFydEZhY3RvcnkiLCJMaW5lQ2hhcnQiLCJicnVzaENvbXBvbmVudCIsImJydXNoaW5nIiwiY29sb3IiLCJlbmFibGVDaGFydEhvdmVyIiwiaGVpZ2h0IiwiaG92ZXJlZERQIiwiaXNFbmxhcmdlZCIsImxpbmVDaGFydCIsIm1hcmdpbiIsIm9uTW91c2VNb3ZlIiwid2lkdGgiLCJ4RG9tYWluIiwic2VyaWVzIiwieURvbWFpbiIsImhpbnRGb3JtYXR0ZXIiLCJicnVzaERhdGEiLCJjdXN0b21Db21wb25lbnQiLCJtYXJnaW5Ub3AiLCJmaWxsIiwidmFsIiwibW9tZW50IiwidXRjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsNkJBQU9DLEdBQVYsb0JBV1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxxQkFBaEI7QUFBQSxDQVhHLEVBaUJWLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBaEI7QUFBQSxDQWpCSyxDQUF0Qjs7QUFxQkEsSUFBTUMsVUFBVSxHQUFHTiw2QkFBT0MsR0FBVixxQkFHTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLFdBQWhCO0FBQUEsQ0FIQSxD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aUI7QUFML0MsTUFWRixlQWlCRSxnQ0FBQyxvQkFBRDtBQUFZLE1BQUEsSUFBSSxFQUFFSixTQUFTLEdBQUcsQ0FBQ0EsU0FBRCxDQUFILEdBQWlCLEVBQTVDO0FBQWdELE1BQUEsS0FBSyxFQUFFSCxLQUF2RDtBQUE4RCxNQUFBLElBQUksRUFBRTtBQUFwRSxNQWpCRixlQWtCRSxnQ0FBQyx5QkFBRDtBQUFpQixNQUFBLElBQUksRUFBRWE7QUFBdkIsTUFsQkYsRUFtQkdULFVBQVUsaUJBQUksZ0NBQUMsZUFBRDtBQUFPLE1BQUEsU0FBUyxFQUFFO0FBQWxCLE1BbkJqQixFQW9CR0QsU0FBUyxJQUFJRixnQkFBYixJQUFpQyxDQUFDRixRQUFsQyxnQkFDQyxnQ0FBQyxjQUFEO0FBQU0sTUFBQSxLQUFLLEVBQUVJO0FBQWIsb0JBQ0UsZ0NBQUMsV0FBRCxnQ0FBaUJBLFNBQWpCO0FBQTRCLE1BQUEsTUFBTSxFQUFFLGdCQUFBYyxHQUFHO0FBQUEsZUFBSUMsbUJBQU9DLEdBQVAsQ0FBV0YsR0FBWCxFQUFnQjNCLE1BQWhCLENBQXVCc0IsYUFBdkIsQ0FBSjtBQUFBO0FBQXZDLE9BREYsQ0FERCxHQUlHLElBeEJOLENBREYsQ0FERjtBQThCRCxHQXBERDs7QUFxREEsU0FBT2YsU0FBUDtBQUNEOztlQUVjRCxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7XG4gIEhvcml6b250YWxHcmlkTGluZXMsXG4gIExpbmVTZXJpZXMsXG4gIFhZUGxvdCxcbiAgQ3VzdG9tU1ZHU2VyaWVzLFxuICBIaW50LFxuICBZQXhpcyxcbiAgTWFya1Nlcmllc1xufSBmcm9tICdyZWFjdC12aXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2dldFRpbWVXaWRnZXRIaW50Rm9ybWF0dGVyfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xuXG5jb25zdCBMaW5lQ2hhcnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLnJ2LXh5LXBsb3Qge1xuICAgIC8qIGltcG9ydGFudCBmb3IgcmVuZGVyaW5nIGhpbnQgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnJ2LXh5LXBsb3RfX2lubmVyIHtcbiAgICAvKiBpbXBvcnRhbnQgdG8gc2hvdyBheGlzICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAucnYteHktcGxvdF9fZ3JpZC1saW5lc19fbGluZSB7XG4gICAgc3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhpc3RvZ3JhbUZpbGxPdXRSYW5nZX07XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMXB4IDRweDtcbiAgfVxuXG4gIC5ydi14eS1wbG90X19heGlzX190aWNrX190ZXh0IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEhpbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkOGUwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBIaW50Q29udGVudCA9ICh7eCwgeSwgZm9ybWF0fSkgPT4gKFxuICA8U3R5bGVkSGludD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpbnQtLXhcIj57Zm9ybWF0KHgpfTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3l9PC9kaXY+XG4gIDwvU3R5bGVkSGludD5cbik7XG5cbmNvbnN0IE1BUkdJTiA9IHt0b3A6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDB9O1xuZnVuY3Rpb24gTGluZUNoYXJ0RmFjdG9yeSgpIHtcbiAgY29uc3QgTGluZUNoYXJ0ID0gKHtcbiAgICBicnVzaENvbXBvbmVudCxcbiAgICBicnVzaGluZyxcbiAgICBjb2xvcixcbiAgICBlbmFibGVDaGFydEhvdmVyLFxuICAgIGhlaWdodCxcbiAgICBob3ZlcmVkRFAsXG4gICAgaXNFbmxhcmdlZCxcbiAgICBsaW5lQ2hhcnQsXG4gICAgbWFyZ2luLFxuICAgIG9uTW91c2VNb3ZlLFxuICAgIHdpZHRoXG4gIH0pID0+IHtcbiAgICBjb25zdCB7eERvbWFpbiwgc2VyaWVzLCB5RG9tYWlufSA9IGxpbmVDaGFydDtcbiAgICBjb25zdCBoaW50Rm9ybWF0dGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIoeERvbWFpbik7XG4gICAgfSwgW3hEb21haW5dKTtcblxuICAgIGNvbnN0IGJydXNoRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIFt7eDogc2VyaWVzWzBdLngsIHk6IHlEb21haW5bMV0sIGN1c3RvbUNvbXBvbmVudDogKCkgPT4gYnJ1c2hDb21wb25lbnR9XTtcbiAgICB9LCBbc2VyaWVzLCB5RG9tYWluLCBicnVzaENvbXBvbmVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5lQ2hhcnRXcmFwcGVyIHN0eWxlPXt7bWFyZ2luVG9wOiBgJHttYXJnaW4udG9wfXB4YH19PlxuICAgICAgICA8WFlQbG90XG4gICAgICAgICAgeFR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgbWFyZ2luPXtNQVJHSU59XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZShudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXMgdGlja1RvdGFsPXszfSAvPlxuICAgICAgICAgIDxMaW5lU2VyaWVzXG4gICAgICAgICAgICBzdHlsZT17e2ZpbGw6ICdub25lJ319XG4gICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIGRhdGE9e3Nlcmllc31cbiAgICAgICAgICAgIG9uTmVhcmVzdFg9e2VuYWJsZUNoYXJ0SG92ZXIgPyBvbk1vdXNlTW92ZSA6IG51bGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWFya1NlcmllcyBkYXRhPXtob3ZlcmVkRFAgPyBbaG92ZXJlZERQXSA6IFtdfSBjb2xvcj17Y29sb3J9IHNpemU9ezN9IC8+XG4gICAgICAgICAgPEN1c3RvbVNWR1NlcmllcyBkYXRhPXticnVzaERhdGF9IC8+XG4gICAgICAgICAge2lzRW5sYXJnZWQgJiYgPFlBeGlzIHRpY2tUb3RhbD17M30gLz59XG4gICAgICAgICAge2hvdmVyZWREUCAmJiBlbmFibGVDaGFydEhvdmVyICYmICFicnVzaGluZyA/IChcbiAgICAgICAgICAgIDxIaW50IHZhbHVlPXtob3ZlcmVkRFB9PlxuICAgICAgICAgICAgICA8SGludENvbnRlbnQgey4uLmhvdmVyZWREUH0gZm9ybWF0PXt2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChoaW50Rm9ybWF0dGVyKX0gLz5cbiAgICAgICAgICAgIDwvSGludD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9YWVBsb3Q+XG4gICAgICA8L0xpbmVDaGFydFdyYXBwZXI+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIExpbmVDaGFydDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0RmFjdG9yeTtcbiJdfQ==