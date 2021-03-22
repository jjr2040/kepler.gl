"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

var _localization = require("../../../localization");

var _utils = require("../../../utils/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject());

var StyledLayerGroupItem = _styledComponents["default"].div(_templateObject2());

var LayerLabel = (0, _styledComponents["default"])(_styledComponents2.PanelLabelBold)(_templateObject3(), function (props) {
  return props.active ? props.theme.textColor : props.theme.labelColor;
});
LayerGroupSelectorFactory.deps = [_panelHeaderAction["default"]];

function LayerGroupSelectorFactory(PanelHeaderAction) {
  var defaultActionIcons = {
    visible: _icons.EyeSeen,
    hidden: _icons.EyeUnseen
  };

  var LayerGroupSelector = function LayerGroupSelector(_ref) {
    var layers = _ref.layers,
        editableLayers = _ref.editableLayers,
        onChange = _ref.onChange,
        topLayers = _ref.topLayers,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons;
    return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
      className: "map-style__layer-group__selector"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer-group__header"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'mapLayers.title'
    }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelContent, {
      className: "map-style__layer-group"
    }, editableLayers.map(function (slug) {
      return /*#__PURE__*/_react["default"].createElement(StyledLayerGroupItem, {
        className: "layer-group__select",
        key: slug
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
        className: "layer-group__visibility-toggle",
        id: "".concat(slug, "-toggle"),
        tooltip: layers[slug] ? 'tooltip.hide' : 'tooltip.show',
        onClick: function onClick() {
          return onChange({
            visibleLayerGroups: _objectSpread(_objectSpread({}, layers), {}, (0, _defineProperty2["default"])({}, slug, !layers[slug]))
          });
        },
        IconComponent: layers[slug] ? actionIcons.visible : actionIcons.hidden,
        active: layers[slug],
        flush: true
      }), /*#__PURE__*/_react["default"].createElement(LayerLabel, {
        active: layers[slug]
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: "mapLayers.".concat((0, _utils.camelize)(slug))
      }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "layer-group__bring-top"
      }, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
        id: "".concat(slug, "-top"),
        tooltip: "tooltip.moveToTop",
        disabled: !layers[slug],
        IconComponent: _icons.Upload,
        active: topLayers[slug],
        onClick: function onClick() {
          return onChange({
            topLayerGroups: _objectSpread(_objectSpread({}, topLayers), {}, (0, _defineProperty2["default"])({}, slug, !topLayers[slug]))
          });
        }
      })));
    })));
  };

  return LayerGroupSelector;
}

var _default = LayerGroupSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGF5ZXJHcm91cEl0ZW0iLCJMYXllckxhYmVsIiwiUGFuZWxMYWJlbEJvbGQiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsIkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkiLCJkZXBzIiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJkZWZhdWx0QWN0aW9uSWNvbnMiLCJ2aXNpYmxlIiwiRXllU2VlbiIsImhpZGRlbiIsIkV5ZVVuc2VlbiIsIkxheWVyR3JvdXBTZWxlY3RvciIsImxheWVycyIsImVkaXRhYmxlTGF5ZXJzIiwib25DaGFuZ2UiLCJ0b3BMYXllcnMiLCJhY3Rpb25JY29ucyIsIm1hcCIsInNsdWciLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJVcGxvYWQiLCJ0b3BMYXllckdyb3VwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUE1Qjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBR0YsNkJBQU9DLEdBQVYsb0JBQTFCOztBQWNBLElBQU1FLFVBQVUsR0FBRyxrQ0FBT0MsaUNBQVAsQ0FBSCxxQkFDTCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUEzQixHQUF1Q0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLFVBQXhEO0FBQUEsQ0FEQSxDQUFo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eXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5pbXBvcnQge0V5ZVNlZW4sIEV5ZVVuc2VlbiwgVXBsb2FkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFBhbmVsQ29udGVudCxcbiAgUGFuZWxMYWJlbEJvbGQsXG4gIFBhbmVsTGFiZWxXcmFwcGVyLFxuICBDZW50ZXJGbGV4Ym94XG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuY29uc3QgU3R5bGVkSW50ZXJhY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJHcm91cEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmxheWVyLWdyb3VwX192aXNpYmlsaXR5LXRvZ2dsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5gO1xuXG5jb25zdCBMYXllckxhYmVsID0gc3R5bGVkKFBhbmVsTGFiZWxCb2xkKWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvciA6IHByb3BzLnRoZW1lLmxhYmVsQ29sb3IpfTtcbmA7XG5cbkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnldO1xuXG5mdW5jdGlvbiBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5KFBhbmVsSGVhZGVyQWN0aW9uKSB7XG4gIGNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgICB2aXNpYmxlOiBFeWVTZWVuLFxuICAgIGhpZGRlbjogRXllVW5zZWVuXG4gIH07XG4gIGNvbnN0IExheWVyR3JvdXBTZWxlY3RvciA9ICh7XG4gICAgbGF5ZXJzLFxuICAgIGVkaXRhYmxlTGF5ZXJzLFxuICAgIG9uQ2hhbmdlLFxuICAgIHRvcExheWVycyxcbiAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9KSA9PiAoXG4gICAgPFN0eWxlZEludGVyYWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwibWFwLXN0eWxlX19sYXllci1ncm91cF9fc2VsZWN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21hcExheWVycy50aXRsZSd9IC8+XG4gICAgICAgIDwvUGFuZWxMYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJtYXAtc3R5bGVfX2xheWVyLWdyb3VwXCI+XG4gICAgICAgIHtlZGl0YWJsZUxheWVycy5tYXAoc2x1ZyA9PiAoXG4gICAgICAgICAgPFN0eWxlZExheWVyR3JvdXBJdGVtIGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX19zZWxlY3RcIiBrZXk9e3NsdWd9PlxuICAgICAgICAgICAgPFBhbmVsTGFiZWxXcmFwcGVyPlxuICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1ncm91cF9fdmlzaWJpbGl0eS10b2dnbGVcIlxuICAgICAgICAgICAgICAgIGlkPXtgJHtzbHVnfS10b2dnbGVgfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9e2xheWVyc1tzbHVnXSA/ICd0b29sdGlwLmhpZGUnIDogJ3Rvb2x0aXAuc2hvdyd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUxheWVyR3JvdXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIFtzbHVnXTogIWxheWVyc1tzbHVnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtsYXllcnNbc2x1Z10gPyBhY3Rpb25JY29ucy52aXNpYmxlIDogYWN0aW9uSWNvbnMuaGlkZGVufVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bGF5ZXJzW3NsdWddfVxuICAgICAgICAgICAgICAgIGZsdXNoXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMYXllckxhYmVsIGFjdGl2ZT17bGF5ZXJzW3NsdWddfT5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YG1hcExheWVycy4ke2NhbWVsaXplKHNsdWcpfWB9IC8+XG4gICAgICAgICAgICAgIDwvTGF5ZXJMYWJlbD5cbiAgICAgICAgICAgIDwvUGFuZWxMYWJlbFdyYXBwZXI+XG4gICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJsYXllci1ncm91cF9fYnJpbmctdG9wXCI+XG4gICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtzbHVnfS10b3BgfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJ0b29sdGlwLm1vdmVUb1RvcFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllcnNbc2x1Z119XG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17VXBsb2FkfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17dG9wTGF5ZXJzW3NsdWddfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcExheWVyR3JvdXBzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4udG9wTGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIFtzbHVnXTogIXRvcExheWVyc1tzbHVnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICA8L1N0eWxlZExheWVyR3JvdXBJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvUGFuZWxDb250ZW50PlxuICAgIDwvU3R5bGVkSW50ZXJhY3Rpb25QYW5lbD5cbiAgKTtcblxuICByZXR1cm4gTGF5ZXJHcm91cFNlbGVjdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5O1xuIl19