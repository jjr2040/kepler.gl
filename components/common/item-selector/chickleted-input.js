"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChickletTag = exports.ChickletButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

var _localization = require("../../../localization");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n      \n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};

var ChickletButton = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.inputTheme === 'light' ? props.theme.chickletBgdLT : props.theme.chickletBgd;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.textColorLT : props.theme.textColor;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.textColorHlLT : props.theme.textColorHl;
});

exports.ChickletButton = ChickletButton;

var ChickletTag = _styledComponents["default"].span(_templateObject2());

exports.ChickletTag = ChickletTag;

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove,
      inputTheme = _ref.inputTheme;
  return /*#__PURE__*/_react["default"].createElement(ChickletButton, {
    inputTheme: inputTheme
  }, /*#__PURE__*/_react["default"].createElement(ChickletTag, null, name), /*#__PURE__*/_react["default"].createElement(_delete["default"], {
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.inputTheme === 'light' ? props.theme.chickletedInputLT : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme,
      CustomChickletComponent = _ref2.CustomChickletComponent;
  return /*#__PURE__*/_react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    var chickletProps = {
      inputTheme: inputTheme,
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    };
    return CustomChickletComponent ? /*#__PURE__*/_react["default"].createElement(CustomChickletComponent, chickletProps) : /*#__PURE__*/_react["default"].createElement(Chicklet, chickletProps);
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: placeholder
  })));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjaGlja2xldEJnZExUIiwiY2hpY2tsZXRCZ2QiLCJ0ZXh0Q29sb3JMVCIsInRleHRDb2xvciIsInRleHRDb2xvckhsTFQiLCJ0ZXh0Q29sb3JIbCIsIkNoaWNrbGV0VGFnIiwic3BhbiIsIkNoaWNrbGV0IiwibmFtZSIsInJlbW92ZSIsIkNoaWNrbGV0ZWRJbnB1dENvbnRhaW5lciIsInNlY29uZGFyeUNoaWNrbGV0ZWRJbnB1dCIsImNoaWNrbGV0ZWRJbnB1dExUIiwiY2hpY2tsZXRlZElucHV0IiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJDaGlja2xldGVkSW5wdXQiLCJjbGFzc05hbWUiLCJkIiwiQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImNoaWNrbGV0UHJvcHMiLCJrZXkiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEI7QUFDQUMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsSUFBVixDQUFlQyxVQUZSO0FBR2hCQyxFQUFB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QUFjQSxhQUFkLENBSEY7QUFLRCxHQWJELENBREQsZ0JBZ0JDO0FBQU0sSUFBQSxTQUFTLFlBQUtQLFNBQUw7QUFBZixrQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTNCO0FBQXRCLElBREYsQ0F6QkosQ0Fic0I7QUFBQSxDQUF4Qjs7QUE2Q0EwQixlQUFlLENBQUN4QyxTQUFoQixHQUE0QkEsU0FBNUI7ZUFFZXdDLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uL2ljb25zL2RlbGV0ZSc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLy8gcmVxdWlyZWQgcHJvcGVydGllc1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8vIG9wdGlvbmFsIHByb3BlcnRpZXNcbiAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGNvbnN0IENoaWNrbGV0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCcgPyBwcm9wcy50aGVtZS5jaGlja2xldEJnZExUIDogcHJvcHMudGhlbWUuY2hpY2tsZXRCZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0JyA/IHByb3BzLnRoZW1lLnRleHRDb2xvckxUIDogcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA0cHggMTBweCA0cHggM3B4O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0JyA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsTFQgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGlja2xldFRhZyA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICA6aG92ZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5gO1xuXG5jb25zdCBDaGlja2xldCA9ICh7ZGlzYWJsZWQsIG5hbWUsIHJlbW92ZSwgaW5wdXRUaGVtZX0pID0+IChcbiAgPENoaWNrbGV0QnV0dG9uIGlucHV0VGhlbWU9e2lucHV0VGhlbWV9PlxuICAgIDxDaGlja2xldFRhZz57bmFtZX08L0NoaWNrbGV0VGFnPlxuICAgIDxEZWxldGUgb25DbGljaz17ZGlzYWJsZWQgPyBudWxsIDogcmVtb3ZlfSAvPlxuICA8L0NoaWNrbGV0QnV0dG9uPlxuKTtcblxuY29uc3QgQ2hpY2tsZXRlZElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUNoaWNrbGV0ZWRJbnB1dFxuICAgICAgOiBwcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnXG4gICAgICA/IHByb3BzLnRoZW1lLmNoaWNrbGV0ZWRJbnB1dExUXG4gICAgICA6IHByb3BzLnRoZW1lLmNoaWNrbGV0ZWRJbnB1dH1cbiAgICAgIFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlciA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IENoaWNrbGV0ZWRJbnB1dCA9ICh7XG4gIGZvY3VzLFxuICBkaXNhYmxlZCxcbiAgZXJyb3IsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuICBwbGFjZWhvbGRlciA9ICcnLFxuICByZW1vdmVJdGVtLFxuICBkaXNwbGF5T3B0aW9uID0gZCA9PiBkLFxuICBpbnB1dFRoZW1lLFxuICBDdXN0b21DaGlja2xldENvbXBvbmVudFxufSkgPT4gKFxuICA8Q2hpY2tsZXRlZElucHV0Q29udGFpbmVyXG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNoaWNrbGV0ZWQtaW5wdXRgfVxuICAgIGZvY3VzPXtmb2N1c31cbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgZXJyb3I9e2Vycm9yfVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cbiAgICBoYXNQbGFjZWhvbGRlcj17IXNlbGVjdGVkSXRlbXMgfHwgIXNlbGVjdGVkSXRlbXMubGVuZ3RofVxuICA+XG4gICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCA/IChcbiAgICAgIHNlbGVjdGVkSXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWNrbGV0UHJvcHMgPSB7XG4gICAgICAgICAgaW5wdXRUaGVtZSxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBrZXk6IGAke2Rpc3BsYXlPcHRpb24oaXRlbSl9XyR7aX1gLFxuICAgICAgICAgIG5hbWU6IGRpc3BsYXlPcHRpb24oaXRlbSksXG4gICAgICAgICAgcmVtb3ZlOiBlID0+IHJlbW92ZUl0ZW0oaXRlbSwgZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50ID8gKFxuICAgICAgICAgIDxDdXN0b21DaGlja2xldENvbXBvbmVudCB7Li4uY2hpY2tsZXRQcm9wc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2hpY2tsZXQgey4uLmNoaWNrbGV0UHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dF9fcGxhY2Vob2xkZXJgfT5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPC9zcGFuPlxuICAgICl9XG4gIDwvQ2hpY2tsZXRlZElucHV0Q29udGFpbmVyPlxuKTtcblxuQ2hpY2tsZXRlZElucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgQ2hpY2tsZXRlZElucHV0O1xuIl19