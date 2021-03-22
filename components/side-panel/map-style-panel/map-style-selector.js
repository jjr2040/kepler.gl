"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../../common/icons");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _styledComponents2 = require("../../common/styled-components");

var _localization = require("../../../localization");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapDropdown = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});
MapStyleSelectorFactory.deps = [_panelHeaderAction["default"]];

function MapStyleSelectorFactory(PanelHeaderAction) {
  var defaultActionIcons = {
    arrowDown: _icons.ArrowDown
  };

  var MapStyleSelector = function MapStyleSelector(_ref) {
    var mapStyle = _ref.mapStyle,
        onChange = _ref.onChange,
        toggleActive = _ref.toggleActive,
        isSelecting = _ref.isSelecting,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'mapManager.mapStyle'
    })), Object.keys(mapStyle.mapStyles).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(StyledMapDropdown, {
        className: (0, _classnames["default"])('map-dropdown-option', {
          collapsed: !isSelecting && mapStyle.styleType !== op
        }),
        key: op,
        onClick: isSelecting ? function () {
          return onChange(op);
        } : toggleActive
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
        className: "map-title-block"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "map-preview",
        src: mapStyle.mapStyles[op].icon
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, {
        className: "map-preview-name"
      }, mapStyle.mapStyles[op].label)), !isSelecting ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
        className: "map-dropdown-option__enable-config",
        id: "map-enable-config",
        IconComponent: actionIcons.arrowDown,
        tooltip: 'tooltip.selectBaseMapStyle',
        onClick: toggleActive
      }) : null);
    }));
  };

  return MapStyleSelector;
}

var _default = MapStyleSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJkZXBzIiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJkZWZhdWx0QWN0aW9uSWNvbnMiLCJhcnJvd0Rvd24iLCJBcnJvd0Rvd24iLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiYWN0aW9uSWNvbnMiLCJPYmplY3QiLCJrZXlzIiwibWFwU3R5bGVzIiwibWFwIiwib3AiLCJjb2xsYXBzZWQiLCJzdHlsZVR5cGUiLCJpY29uIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU1BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxrQ0FBT0Msb0NBQVAsQ0FBSCxvQkFlQyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLG9CQUFoQjtBQUFBLENBZk4sQ0FBdkI7QUE0QkFDLHVCQUF1QixDQUFDQyxJQUF4QixHQUErQixDQUFDQyw2QkFBRCxDQUEvQjs7QUFFQSxTQUFTRix1QkFBVCxDQUFpQ0csaUJBQWpDLEVBQW9EO0FBQ2xELE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCQyxJQUFBQSxTQUFTLEVBQUVDO0FBRGMsR0FBM0I7O0FBR0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQ3ZCQyxRQUR1QixRQUN2QkEsUUFEdUI7QUFBQSxRQUV2QkMsUUFGdUIsUUFFdkJBLFFBRnVCO0FBQUEsUUFHdkJDLFlBSHVCLFFBR3ZCQSxZQUh1QjtBQUFBLFFBSXZCQyxXQUp1QixRQUl2QkEsV0FKdUI7QUFBQSxnQ0FLdkJDLFdBTHVCO0FBQUEsUUFLdkJBLFdBTHVCLGlDQUtUUixrQkFMUztBQUFBLHdCQU92QiwwREFDRSxnQ0FBQyw2QkFBRCxxQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRTtBQUF0QixNQURGLENBREYsRUFJR1MsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFFBQVEsQ0FBQ08sU0FBckIsRUFBZ0NDLEdBQWhDLENBQW9DLFVBQUFDLEVBQUU7QUFBQSwwQkFDckMsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxxQkFBWCxFQUFrQztBQUMzQ0MsVUFBQUEsU0FBUyxFQUFFLENBQUNQLFdBQUQsSUFBZ0JILFFBQVEsQ0FBQ1csU0FBVCxLQUF1QkY7QUFEUCxTQUFsQyxDQURiO0FBSUUsUUFBQSxHQUFHLEVBQUVBLEVBSlA7QUFLRSxRQUFBLE9BQU8sRUFBRU4sV0FBVyxHQUFHO0FBQUEsaUJBQU1GLFFBQVEsQ0FBQ1EsRUFBRCxDQUFkO0FBQUEsU0FBSCxHQUF3QlA7QUFMOUMsc0JBT0UsZ0NBQUMscUNBQUQ7QUFBb0IsUUFBQSxTQUFTLEVBQUM7QUFBOUIsc0JBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxhQUFmO0FBQTZCLFFBQUEsR0FBRyxFQUFFRixRQUFRLENBQUNPLFNBQVQsQ0FBbUJFLEVBQW5CLEVBQXVCRztBQUF6RCxRQURGLGVBRUUsZ0NBQUMsbUNBQUQ7QUFBa0IsUUFBQSxTQUFTLEVBQUM7QUFBNUIsU0FDR1osUUFBUSxDQUFDTyxTQUFULENBQW1CRSxFQUFuQixFQUF1QkksS0FEMUIsQ0FGRixDQVBGLEVBYUcsQ0FBQ1YsV0FBRCxnQkFDQyxnQ0FBQyxpQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLG9DQURaO0FBRUUsUUFBQSxFQUFFLEVBQUMsbUJBRkw7QUFHRSxRQUFBLGFBQWEsRUFBRUMsV0FBVyxDQUFDUCxTQUg3QjtBQUlFLFFBQUEsT0FBTyxFQUFFLDRCQUpYO0FBS0UsUUFBQSxPQUFPLEVBQUVLO0FBTFgsUUFERCxHQVFHLElBckJOLENBRHFDO0FBQUEsS0FBdEMsQ0FKSCxDQVB1QjtBQUFBLEdBQXpCOztBQXVDQSxTQUFPSCxnQkFBUDtBQUNEOztlQUVjUCx1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xuXG5pbXBvcnQge1xuICBQYW5lbEhlYWRlckNvbnRlbnQsXG4gIFBhbmVsSGVhZGVyVGl0bGUsXG4gIFBhbmVsTGFiZWwsXG4gIFN0eWxlZFBhbmVsSGVhZGVyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgU3R5bGVkTWFwRHJvcGRvd24gPSBzdHlsZWQoU3R5bGVkUGFuZWxIZWFkZXIpYFxuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDVzIGVhc2UtaW4sIGhlaWdodCAwLjI1cyBlYXNlLW91dDtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICB9XG5cbiAgLm1hcC10aXRsZS1ibG9jayBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIC5tYXAtcHJldmlldyB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuYDtcbk1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5XTtcblxuZnVuY3Rpb24gTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkoUGFuZWxIZWFkZXJBY3Rpb24pIHtcbiAgY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICAgIGFycm93RG93bjogQXJyb3dEb3duXG4gIH07XG4gIGNvbnN0IE1hcFN0eWxlU2VsZWN0b3IgPSAoe1xuICAgIG1hcFN0eWxlLFxuICAgIG9uQ2hhbmdlLFxuICAgIHRvZ2dsZUFjdGl2ZSxcbiAgICBpc1NlbGVjdGluZyxcbiAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21hcE1hbmFnZXIubWFwU3R5bGUnfSAvPlxuICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAge09iamVjdC5rZXlzKG1hcFN0eWxlLm1hcFN0eWxlcykubWFwKG9wID0+IChcbiAgICAgICAgPFN0eWxlZE1hcERyb3Bkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtYXAtZHJvcGRvd24tb3B0aW9uJywge1xuICAgICAgICAgICAgY29sbGFwc2VkOiAhaXNTZWxlY3RpbmcgJiYgbWFwU3R5bGUuc3R5bGVUeXBlICE9PSBvcFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGtleT17b3B9XG4gICAgICAgICAgb25DbGljaz17aXNTZWxlY3RpbmcgPyAoKSA9PiBvbkNoYW5nZShvcCkgOiB0b2dnbGVBY3RpdmV9XG4gICAgICAgID5cbiAgICAgICAgICA8UGFuZWxIZWFkZXJDb250ZW50IGNsYXNzTmFtZT1cIm1hcC10aXRsZS1ibG9ja1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtcHJldmlld1wiIHNyYz17bWFwU3R5bGUubWFwU3R5bGVzW29wXS5pY29ufSAvPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyVGl0bGUgY2xhc3NOYW1lPVwibWFwLXByZXZpZXctbmFtZVwiPlxuICAgICAgICAgICAgICB7bWFwU3R5bGUubWFwU3R5bGVzW29wXS5sYWJlbH1cbiAgICAgICAgICAgIDwvUGFuZWxIZWFkZXJUaXRsZT5cbiAgICAgICAgICA8L1BhbmVsSGVhZGVyQ29udGVudD5cbiAgICAgICAgICB7IWlzU2VsZWN0aW5nID8gKFxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1kcm9wZG93bi1vcHRpb25fX2VuYWJsZS1jb25maWdcIlxuICAgICAgICAgICAgICBpZD1cIm1hcC1lbmFibGUtY29uZmlnXCJcbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMuYXJyb3dEb3dufVxuICAgICAgICAgICAgICB0b29sdGlwPXsndG9vbHRpcC5zZWxlY3RCYXNlTWFwU3R5bGUnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVBY3RpdmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZE1hcERyb3Bkb3duPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIE1hcFN0eWxlU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5O1xuIl19