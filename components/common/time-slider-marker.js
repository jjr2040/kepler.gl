"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  overflow: visible;\n\n  .axis text {\n    font-size: ", ";\n    fill: ", ";\n  }\n\n  .axis line,\n  .axis path {\n    fill: none;\n    stroke: ", ";\n    shape-rendering: crispEdges;\n    stroke-width: 2;\n  }\n\n  .axis .domain {\n    display: none;\n  }\n\n  .value {\n    fill: ", ";\n    font-size: ", ";\n\n    &.start {\n      text-anchor: start;\n    }\n\n    &.end {\n      text-anchor: end;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MIN_TICK_WIDTH_LARGE = 80;
var MIN_TICK_WIDTH_SMALL = 50;
var HEIGHT = 30;

var TimeSliderContainer = _styledComponents["default"].svg(_templateObject(), function (props) {
  return props.theme.axisFontSize;
}, function (props) {
  return props.theme.axisFontColor;
}, function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.axisFontColor;
}, function (props) {
  return props.theme.axisFontSize;
});

function TimeSliderMarkerFactory() {
  function updateAxis(scale, width, xAxisRef, isEnlarged) {
    if (!scale) {
      return;
    } // TODO: pass in ticks if interval is defined


    var ticks = Math.floor(width / (isEnlarged ? MIN_TICK_WIDTH_LARGE : MIN_TICK_WIDTH_SMALL));
    var xAxis = (0, _d3Axis.axisBottom)(scale).ticks(ticks).tickSize(0).tickPadding(12);
    (0, _d3Selection.select)(xAxisRef.current).call(xAxis);
  }

  var TimeSliderMarker = function TimeSliderMarker(_ref) {
    var width = _ref.width,
        domain = _ref.domain,
        _ref$isEnlarged = _ref.isEnlarged,
        isEnlarged = _ref$isEnlarged === void 0 ? true : _ref$isEnlarged,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? HEIGHT : _ref$height;
    var xAxisRef = (0, _react.useRef)();
    var scale = (0, _react.useMemo)(function () {
      return Array.isArray(domain) ? (0, _d3Scale.scaleUtc)().domain(domain).range([0, width]) : null;
    }, [domain, width]);
    (0, _react.useEffect)(function () {
      updateAxis(scale, width, xAxisRef, isEnlarged);
    }, [scale, width, xAxisRef, isEnlarged]);
    return /*#__PURE__*/_react["default"].createElement(TimeSliderContainer, {
      className: "time-slider-marker",
      width: width,
      height: height
    }, /*#__PURE__*/_react["default"].createElement("g", {
      className: "x axis",
      ref: xAxisRef,
      transform: "translate(0, 0)"
    }));
  };

  TimeSliderMarker.propTypes = {
    domain: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    width: _propTypes["default"].number.isRequired
  };
  return TimeSliderMarker;
}

var _default = TimeSliderMarkerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXIuanMiXSwibmFtZXMiOlsiTUlOX1RJQ0tfV0lEVEhfTEFSR0UiLCJNSU5fVElDS19XSURUSF9TTUFMTCIsIkhFSUdIVCIsIlRpbWVTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJzdmciLCJwcm9wcyIsInRoZW1lIiwiYXhpc0ZvbnRTaXplIiwiYXhpc0ZvbnRDb2xvciIsInNsaWRlckJhckJnZCIsIlRpbWVTbGlkZXJNYXJrZXJGYWN0b3J5IiwidXBkYXRlQXhpcyIsInNjYWxlIiwid2lkdGgiLCJ4QXhpc1JlZiIsImlzRW5sYXJnZWQiLCJ0aWNrcyIsIk1hdGgiLCJmbG9vciIsInhBeGlzIiwidGlja1NpemUiLCJ0aWNrUGFkZGluZyIsImN1cnJlbnQiLCJjYWxsIiwiVGltZVNsaWRlck1hcmtlciIsImRvbWFpbiIsImhlaWdodCIsIkFycmF5IiwiaXNBcnJheSIsInJhbmdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsImlzUmVxdWlyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHLEVBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsRUFBN0I7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBT1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBUEcsRUFRYixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGFBQWhCO0FBQUEsQ0FSUSxFQWNYLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBaEI7QUFBQSxDQWRNLEVBd0JiLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsYUFBaEI7QUFBQSxDQXhCUSxFQXlCUixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWhCO0FBQUEsQ0F6QkcsQ0FBekI7O0FBcUNBLFNBQVNHLHVCQUFULEdBQW1DO0FBQ2pDLFdBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxLQUEzQixFQUFrQ0MsUUFBbEMsRUFBNENDLFVBQTVDLEVBQXdEO0FBQ3RELFFBQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1Y7QUFDRCxLQUhxRCxDQUt0RDs7O0FBQ0EsUUFBTUksS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsS0FBSyxJQUFJRSxVQUFVLEdBQUdoQixvQkFBSCxHQUEwQkMsb0JBQXhDLENBQWhCLENBQWQ7QUFFQSxRQUFNbUIsS0FBSyxHQUFHLHdCQUFXUCxLQUFYLEVBQ1hJLEtBRFcsQ0FDTEEsS0FESyxFQUVYSSxRQUZXLENBRUYsQ0FGRSxFQUdYQyxXQUhXLENBR0MsRUFIRCxDQUFkO0FBS0EsNkJBQU9QLFFBQVEsQ0FBQ1EsT0FBaEIsRUFBeUJDLElBQXpCLENBQThCSixLQUE5QjtBQUNEOztBQUVELE1BQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUQ7QUFBQSxRQUF2RFgsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsUUFBaERZLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLCtCQUF4Q1YsVUFBd0M7QUFBQSxRQUF4Q0EsVUFBd0MsZ0NBQTNCLElBQTJCO0FBQUEsMkJBQXJCVyxNQUFxQjtBQUFBLFFBQXJCQSxNQUFxQiw0QkFBWnpCLE1BQVk7QUFDaEYsUUFBTWEsUUFBUSxHQUFHLG9CQUFqQjtBQUNBLFFBQU1GLEtBQUssR0FBRyxvQkFDWjtBQUFBLGFBQ0VlLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLElBQ0kseUJBQ0dBLE1BREgsQ0FDVUEsTUFEVixFQUVHSSxLQUZILENBRVMsQ0FBQyxDQUFELEVBQUloQixLQUFKLENBRlQsQ0FESixHQUlJLElBTE47QUFBQSxLQURZLEVBT1osQ0FBQ1ksTUFBRCxFQUFTWixLQUFULENBUFksQ0FBZDtBQVVBLDBCQUFVLFlBQU07QUFDZEYsTUFBQUEsVUFBVSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZUMsUUFBZixFQUF5QkMsVUFBekIsQ0FBVjtBQUNELEtBRkQsRUFFRyxDQUFDSCxLQUFELEVBQVFDLEtBQVIsRUFBZUMsUUFBZixFQUF5QkMsVUFBekIsQ0FGSDtBQUdBLHdCQUNFLGdDQUFDLG1CQUFEO0FBQXFCLE1BQUEsU0FBUyxFQUFDLG9CQUEvQjtBQUFvRCxNQUFBLEtBQUssRUFBRUYsS0FBM0Q7QUFBa0UsTUFBQSxNQUFNLEVBQUVhO0FBQTFFLG9CQUNFO0FBQUcsTUFBQSxTQUFTLEVBQUMsUUFBYjtBQUFzQixNQUFBLEdBQUcsRUFBRVosUUFBM0I7QUFBcUMsTUFBQSxTQUFTLEVBQUM7QUFBL0MsTUFERixDQURGO0FBS0QsR0FwQkQ7O0FBc0JBVSxFQUFBQSxnQkFBZ0IsQ0FBQ00sU0FBakIsR0FBNkI7QUFDM0JMLElBQUFBLE1BQU0sRUFBRU0sc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixFQUFpQ0MsVUFEZDtBQUUzQnJCLElBQUFBLEtBQUssRUFBRWtCLHNCQUFVSSxNQUFWLENBQWlCRDtBQUZHLEdBQTdCO0FBS0EsU0FBT1YsZ0JBQVA7QUFDRDs7ZUFFY2QsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7c2NhbGVVdGN9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtheGlzQm90dG9tfSBmcm9tICdkMy1heGlzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBNSU5fVElDS19XSURUSF9MQVJHRSA9IDgwO1xuY29uc3QgTUlOX1RJQ0tfV0lEVEhfU01BTEwgPSA1MDtcbmNvbnN0IEhFSUdIVCA9IDMwO1xuXG5jb25zdCBUaW1lU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLnN2Z2BcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAuYXhpcyB0ZXh0IHtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYXhpc0ZvbnRTaXplfTtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmF4aXNGb250Q29sb3J9O1xuICB9XG5cbiAgLmF4aXMgbGluZSxcbiAgLmF4aXMgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmF4aXMgLmRvbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5heGlzRm9udENvbG9yfTtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYXhpc0ZvbnRTaXplfTtcblxuICAgICYuc3RhcnQge1xuICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRleHQtYW5jaG9yOiBlbmQ7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBUaW1lU2xpZGVyTWFya2VyRmFjdG9yeSgpIHtcbiAgZnVuY3Rpb24gdXBkYXRlQXhpcyhzY2FsZSwgd2lkdGgsIHhBeGlzUmVmLCBpc0VubGFyZ2VkKSB7XG4gICAgaWYgKCFzY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHBhc3MgaW4gdGlja3MgaWYgaW50ZXJ2YWwgaXMgZGVmaW5lZFxuICAgIGNvbnN0IHRpY2tzID0gTWF0aC5mbG9vcih3aWR0aCAvIChpc0VubGFyZ2VkID8gTUlOX1RJQ0tfV0lEVEhfTEFSR0UgOiBNSU5fVElDS19XSURUSF9TTUFMTCkpO1xuXG4gICAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHNjYWxlKVxuICAgICAgLnRpY2tzKHRpY2tzKVxuICAgICAgLnRpY2tTaXplKDApXG4gICAgICAudGlja1BhZGRpbmcoMTIpO1xuXG4gICAgc2VsZWN0KHhBeGlzUmVmLmN1cnJlbnQpLmNhbGwoeEF4aXMpO1xuICB9XG5cbiAgY29uc3QgVGltZVNsaWRlck1hcmtlciA9ICh7d2lkdGgsIGRvbWFpbiwgaXNFbmxhcmdlZCA9IHRydWUsIGhlaWdodCA9IEhFSUdIVH0pID0+IHtcbiAgICBjb25zdCB4QXhpc1JlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHNjYWxlID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIEFycmF5LmlzQXJyYXkoZG9tYWluKVxuICAgICAgICAgID8gc2NhbGVVdGMoKVxuICAgICAgICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgW2RvbWFpbiwgd2lkdGhdXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVBeGlzKHNjYWxlLCB3aWR0aCwgeEF4aXNSZWYsIGlzRW5sYXJnZWQpO1xuICAgIH0sIFtzY2FsZSwgd2lkdGgsIHhBeGlzUmVmLCBpc0VubGFyZ2VkXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cInRpbWUtc2xpZGVyLW1hcmtlclwiIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJ4IGF4aXNcIiByZWY9e3hBeGlzUmVmfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgMClcIiAvPlxuICAgICAgPC9UaW1lU2xpZGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgVGltZVNsaWRlck1hcmtlci5wcm9wVHlwZXMgPSB7XG4gICAgZG9tYWluOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZXR1cm4gVGltZVNsaWRlck1hcmtlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVNsaWRlck1hcmtlckZhY3Rvcnk7XG4iXX0=