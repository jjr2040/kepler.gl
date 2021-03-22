"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../localization");

var _styledComponents2 = require("../common/styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  margin-right: ", "px;\n  padding-bottom: ", "px;\n  width: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  panels: _propTypes["default"].arrayOf(_propTypes["default"].object),
  activePanel: _propTypes["default"].string,
  togglePanel: _propTypes["default"].func
};

var PanelHeaderBottom = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
}, function (props) {
  return props.theme.sidePanelHeaderBorder;
});

var PanelTab = _styledComponents["default"].div.attrs({
  className: 'side-panel__tab'
})(_templateObject2(), function (props) {
  return props.active ? props.theme.panelToggleBorderColor : 'transparent';
}, function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.panelTabColor;
}, function (props) {
  return props.theme.panelToggleMarginRight;
}, function (props) {
  return props.theme.panelToggleBottomPadding;
}, function (props) {
  return props.theme.panelTabWidth;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelToggleFactory = function PanelToggleFactory() {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return /*#__PURE__*/_react["default"].createElement(PanelTab, {
        key: panel.id,
        "data-tip": true,
        "data-for": "".concat(panel.id, "-nav"),
        active: activePanel === panel.id,
        onClick: function onClick() {
          return togglePanel(panel.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(panel.iconComponent, {
        height: "20px"
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(panel.id, "-nav"),
        effect: "solid",
        delayShow: 500,
        place: "bottom"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: panel.label || panel.id
      }))));
    }));
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
};

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJzaWRlUGFuZWxIZWFkZXJCb3JkZXIiLCJQYW5lbFRhYiIsImFjdGl2ZSIsInBhbmVsVG9nZ2xlQm9yZGVyQ29sb3IiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJwYW5lbFRhYkNvbG9yIiwicGFuZWxUb2dnbGVNYXJnaW5SaWdodCIsInBhbmVsVG9nZ2xlQm90dG9tUGFkZGluZyIsInBhbmVsVGFiV2lkdGgiLCJ0ZXh0Q29sb3JIbCIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIlBhbmVsVG9nZ2xlIiwibWFwIiwicGFuZWwiLCJpZCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRFE7QUFFaEJDLEVBQUFBLFdBQVcsRUFBRUgsc0JBQVVJLE1BRlA7QUFHaEJDLEVBQUFBLFdBQVcsRUFBRUwsc0JBQVVNO0FBSFAsQ0FBbEI7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILG9CQUdELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FISixFQUlNLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUscUJBQWhCO0FBQUEsQ0FKWCxDQUF2Qjs7QUFVQSxJQUFNQyxRQUFRLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDaENDLEVBQUFBLFNBQVMsRUFBRTtBQURxQixDQUFqQixDQUFILHFCQU1XLFVBQUFDLEtBQUs7QUFBQSxTQUMxQkEsS0FBSyxDQUFDSyxNQUFOLEdBQWVMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxzQkFBM0IsR0FBb0QsYUFEMUI7QUFBQSxDQU5oQixFQVFILFVBQUFOLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNLLE1BQU4sR0FBZUwsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGtCQUEzQixHQUFnRFAsS0FBSyxDQUFDQyxLQUFOLENBQVlPLGFBQWpFO0FBQUEsQ0FSRixFQVdJLFVBQUFSLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsc0JBQWhCO0FBQUEsQ0FYVCxFQVlNLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsd0JBQWhCO0FBQUEsQ0FaWCxFQWFILFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVUsYUFBaEI7QUFBQSxDQWJGLEVBaUJELFVBQUFYLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVcsV0FBaEI7QUFBQSxDQWpCSixDQUFkOztBQXFCQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFFM0IsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUksV0FBVixRQUFVQSxXQUFWO0FBQUEsUUFBdUJFLFdBQXZCLFFBQXVCQSxXQUF2QjtBQUFBLHdCQUNsQixnQ0FBQyxpQkFBRCxRQUNHTixNQUFNLENBQUM0QixHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDBCQUNmLGdDQUFDLFFBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURiO0FBRUUsd0JBRkY7QUFHRSw4QkFBYUQsS0FBSyxDQUFDQyxFQUFuQixTQUhGO0FBSUUsUUFBQSxNQUFNLEVBQUUxQixXQUFXLEtBQUt5QixLQUFLLENBQUNDLEVBSmhDO0FBS0UsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTXhCLFdBQVcsQ0FBQ3VCLEtBQUssQ0FBQ0MsRUFBUCxDQUFqQjtBQUFBO0FBTFgsc0JBT0UsZ0NBQUMsS0FBRCxDQUFPLGFBQVA7QUFBcUIsUUFBQSxNQUFNLEVBQUM7QUFBNUIsUUFQRixlQVFFLGdDQUFDLDBCQUFEO0FBQVMsUUFBQSxFQUFFLFlBQUtELEtBQUssQ0FBQ0MsRUFBWCxTQUFYO0FBQWdDLFFBQUEsTUFBTSxFQUFDLE9BQXZDO0FBQStDLFFBQUEsU0FBUyxFQUFFLEdBQTFEO0FBQStELFFBQUEsS0FBSyxFQUFDO0FBQXJFLHNCQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLFFBQUEsRUFBRSxFQUFFRCxLQUFLLENBQUNFLEtBQU4sSUFBZUYsS0FBSyxDQUFDQztBQUEzQyxRQURGLENBREYsQ0FSRixDQURlO0FBQUEsS0FBaEIsQ0FESCxDQURrQjtBQUFBLEdBQXBCOztBQXFCQUgsRUFBQUEsV0FBVyxDQUFDNUIsU0FBWixHQUF3QkEsU0FBeEI7QUFDQSxTQUFPNEIsV0FBUDtBQUNELENBeEJEOztlQTBCZUQsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgYWN0aXZlUGFuZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZVBhbmVsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgUGFuZWxIZWFkZXJCb3R0b20gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1zaWRlLXBhbmVsX19oZWFkZXJfX2JvdHRvbSdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsSGVhZGVyQm9yZGVyfTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuYDtcblxuY29uc3QgUGFuZWxUYWIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdGFiJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnBhbmVsVG9nZ2xlQm9yZGVyQ29sb3IgOiAndHJhbnNwYXJlbnQnfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZSA6IHByb3BzLnRoZW1lLnBhbmVsVGFiQ29sb3IpfTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbFRvZ2dsZU1hcmdpblJpZ2h0fXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbFRvZ2dsZUJvdHRvbVBhZGRpbmd9cHg7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsVGFiV2lkdGh9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgUGFuZWxUb2dnbGVGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBQYW5lbFRvZ2dsZSA9ICh7cGFuZWxzLCBhY3RpdmVQYW5lbCwgdG9nZ2xlUGFuZWx9KSA9PiAoXG4gICAgPFBhbmVsSGVhZGVyQm90dG9tPlxuICAgICAge3BhbmVscy5tYXAocGFuZWwgPT4gKFxuICAgICAgICA8UGFuZWxUYWJcbiAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3BhbmVsLmlkfS1uYXZgfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUGFuZWwgPT09IHBhbmVsLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhbmVsKHBhbmVsLmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYW5lbC5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHtwYW5lbC5pZH0tbmF2YH0gZWZmZWN0PVwic29saWRcIiBkZWxheVNob3c9ezUwMH0gcGxhY2U9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17cGFuZWwubGFiZWwgfHwgcGFuZWwuaWR9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1BhbmVsVGFiPlxuICAgICAgKSl9XG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cbiAgKTtcblxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBQYW5lbFRvZ2dsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsVG9nZ2xlRmFjdG9yeTtcbiJdfQ==