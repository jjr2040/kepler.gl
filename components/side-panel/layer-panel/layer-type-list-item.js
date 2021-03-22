"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTypeListItemFactory = LayerTypeListItemFactory;
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaultSettings = require("../../../constants/default-settings");

var _classnames = _interopRequireDefault(require("classnames"));

var _localization = require("../../../localization");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px\n        ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px\n      ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 50,
  small: 28
};

var StyledListItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.layerTypeIconSizeSM;
}, function (props) {
  return props.theme.layerTypeIconSizeSM;
}, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), function (props) {
  return props.theme.layerTypeIconSizeL;
}, function (props) {
  return props.theme.layerTypeIconSizeL;
}, function (props) {
  return props.theme.selectColor;
});

function LayerTypeListItemFactory() {
  var LayerTypeListItem = function LayerTypeListItem(_ref) {
    var value = _ref.value,
        isTile = _ref.isTile;
    return /*#__PURE__*/_react["default"].createElement(StyledListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item__inner', {
        list: !isTile
      })
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer-type-selector__item__icon"
    }, /*#__PURE__*/_react["default"].createElement(value.icon, {
      height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer-type-selector__item__label"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "layer.type.".concat(value.label.toLowerCase()),
      defaultMessage: value.label
    })));
  };

  return LayerTypeListItem;
}

var _default = LayerTypeListItemFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1saXN0LWl0ZW0uanMiXSwibmFtZXMiOlsiSVRFTV9TSVpFIiwibGFyZ2UiLCJzbWFsbCIsIlN0eWxlZExpc3RJdGVtIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwibGF5ZXJUeXBlSWNvblNpemVTTSIsImxhYmVsQ29sb3IiLCJDTE9VREZST05UIiwibGF5ZXJUeXBlSWNvblNpemVMIiwic2VsZWN0Q29sb3IiLCJMYXllclR5cGVMaXN0SXRlbUZhY3RvcnkiLCJMYXllclR5cGVMaXN0SXRlbSIsInZhbHVlIiwiaXNUaWxlIiwibGlzdCIsImxhYmVsIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBRlMsQ0FBbEI7O0FBS0EsSUFBTUMsY0FBYyxHQUFHQyw2QkFBT0MsR0FBVixvQkFNTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FOQSxFQU9LLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsbUJBQWhCO0FBQUEsQ0FQVixFQVFWLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsbUJBQWhCO0FBQUEsQ0FSSyxFQWNQLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsVUFBaEI7QUFBQSxDQWRFLFlBZ0JXQywyQkFoQlgsbUNBaUJHLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssa0JBQWhCO0FBQUEsQ0FqQlIsRUFrQlosVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxrQkFBaEI7QUFBQSxDQWxCTyxFQXlCUCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBQWhCO0FBQUEsQ0F6QkUsQ0FBcEI7O0FBNkJPLFNBQVNDLHdCQUFULEdBQW9DO0FBQ3pDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxRQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxRQUFTQyxNQUFULFFBQVNBLE1BQVQ7QUFBQSx3QkFDeEIsZ0NBQUMsY0FBRDtBQUNFLE1BQUEsU0FBUyxFQUFFLDRCQUFXLGtDQUFYLEVBQStDO0FBQ3hEQyxRQUFBQSxJQUFJLEVBQUUsQ0FBQ0Q7QUFEaUQsT0FBL0M7QUFEYixvQkFLRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsS0FBRCxDQUFPLElBQVA7QUFBWSxNQUFBLE1BQU0sWUFBS0EsTUFBTSxHQUFHakIsU0FBUyxDQUFDQyxLQUFiLEdBQXFCRCxTQUFTLENBQUNFLEtBQTFDO0FBQWxCLE1BREYsQ0FMRixlQVFFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyw4QkFBRDtBQUNFLE1BQUEsRUFBRSx1QkFBZ0JjLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxXQUFaLEVBQWhCLENBREo7QUFFRSxNQUFBLGNBQWMsRUFBRUosS0FBSyxDQUFDRztBQUZ4QixNQURGLENBUkYsQ0FEd0I7QUFBQSxHQUExQjs7QUFrQkEsU0FBT0osaUJBQVA7QUFDRDs7ZUFFY0Qsd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0NMT1VERlJPTlR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5jb25zdCBJVEVNX1NJWkUgPSB7XG4gIGxhcmdlOiA1MCxcbiAgc21hbGw6IDI4XG59O1xuXG5jb25zdCBTdHlsZWRMaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gICYubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25TaXplU019cHhcbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uU2l6ZVNNfXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Ake0NMT1VERlJPTlR9L2tlcGxlci5nbC1sYXllci1pY29uLWJnLnBuZ2B9KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblNpemVMfXB4XG4gICAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25TaXplTH1weDtcbiAgfVxuXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RDb2xvcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXllclR5cGVMaXN0SXRlbUZhY3RvcnkoKSB7XG4gIGNvbnN0IExheWVyVHlwZUxpc3RJdGVtID0gKHt2YWx1ZSwgaXNUaWxlfSkgPT4gKFxuICAgIDxTdHlsZWRMaXN0SXRlbVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pbm5lcicsIHtcbiAgICAgICAgbGlzdDogIWlzVGlsZVxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uXCI+XG4gICAgICAgIDx2YWx1ZS5pY29uIGhlaWdodD17YCR7aXNUaWxlID8gSVRFTV9TSVpFLmxhcmdlIDogSVRFTV9TSVpFLnNtYWxsfXB4YH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbFwiPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgIGlkPXtgbGF5ZXIudHlwZS4ke3ZhbHVlLmxhYmVsLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17dmFsdWUubGFiZWx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZExpc3RJdGVtPlxuICApO1xuXG4gIHJldHVybiBMYXllclR5cGVMaXN0SXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJUeXBlTGlzdEl0ZW1GYWN0b3J5O1xuIl19