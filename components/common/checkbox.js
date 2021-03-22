"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  min-height: ", "px;\n  margin-left: ", "px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledSwitchInput = _styledComponents["default"].label(_templateObject(), function (props) {
  return props.secondary ? props.theme.secondarySwitch : props.theme.inputSwitch;
});

var StyledCheckboxInput = _styledComponents["default"].label(_templateObject2(), function (props) {
  return props.theme.inputCheckbox;
});

var StyledRadiuInput = _styledComponents["default"].label(_templateObject3(), function (props) {
  return props.theme.inputRadio;
});

var HiddenInput = _styledComponents["default"].input(_templateObject4());

var StyledCheckbox = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.switchHeight;
}, function (props) {
  return props.type === 'radio' ? 0 : props.theme.switchLabelMargin;
});

var Checkbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      focused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (args) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(args);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (args) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur(args);
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var inputProps = _objectSpread(_objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'id', 'onChange', 'value'])), {}, {
        type: 'checkbox',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });

      var labelProps = _objectSpread(_objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'secondary'])), {}, {
        htmlFor: this.props.id
      });

      var LabelElement = this.props.type === 'checkbox' ? StyledCheckboxInput : this.props.type === 'radio' ? StyledRadiuInput : StyledSwitchInput;
      return /*#__PURE__*/_react["default"].createElement(StyledCheckbox, {
        type: this.props.type,
        className: (0, _classnames["default"])('kg-checkbox', this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(HiddenInput, inputProps), /*#__PURE__*/_react["default"].createElement(LabelElement, (0, _extends2["default"])({
        className: "kg-checkbox__label"
      }, labelProps), this.props.label));
    }
  }]);
  return Checkbox;
}(_react.Component);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "propTypes", {
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  value: _propTypes["default"].oneOf([true, false, 'indeterminate']),
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].string,
  "switch": _propTypes["default"].bool,
  activeColor: _propTypes["default"].string,
  secondary: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  disabled: false,
  checked: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  label: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJub29wIiwiU3R5bGVkU3dpdGNoSW5wdXQiLCJzdHlsZWQiLCJsYWJlbCIsInByb3BzIiwic2Vjb25kYXJ5IiwidGhlbWUiLCJzZWNvbmRhcnlTd2l0Y2giLCJpbnB1dFN3aXRjaCIsIlN0eWxlZENoZWNrYm94SW5wdXQiLCJpbnB1dENoZWNrYm94IiwiU3R5bGVkUmFkaXVJbnB1dCIsImlucHV0UmFkaW8iLCJIaWRkZW5JbnB1dCIsImlucHV0IiwiU3R5bGVkQ2hlY2tib3giLCJkaXYiLCJzd2l0Y2hIZWlnaHQiLCJ0eXBlIiwic3dpdGNoTGFiZWxNYXJnaW4iLCJDaGVja2JveCIsImZvY3VzZWQiLCJhcmdzIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwib25CbHVyIiwiaW5wdXRQcm9wcyIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImxhYmVsUHJvcHMiLCJodG1sRm9yIiwiaWQiLCJMYWJlbEVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsInZhbHVlIiwib25lT2YiLCJjaGVja2VkIiwiYm9vbCIsImRpc2FibGVkIiwiZXJyb3IiLCJhY3RpdmVDb2xvciIsImZ1bmMiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxLQUFWLG9CQUNuQixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxTQUFOLEdBQWtCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsZUFBOUIsR0FBZ0RILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxXQUFqRTtBQUFBLENBRGMsQ0FBdkI7O0FBSUEsSUFBTUMsbUJBQW1CLEdBQUdQLDZCQUFPQyxLQUFWLHFCQUNyQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlJLGFBQWhCO0FBQUEsQ0FEZ0IsQ0FBekI7O0FBSUEsSUFBTUMsZ0JBQWdCLEdBQUdULDZCQUFPQyxLQUFWLHFCQUNsQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlNLFVBQWhCO0FBQUEsQ0FEYSxDQUF0Qjs7QUFJQSxJQUFNQyxXQUFXLEdBQUdYLDZCQUFPWSxLQUFWLG9CQUFqQjs7QUFLQSxJQUFNQyxjQUFjLEdBQUdiLDZCQUFPYyxHQUFWLHFCQUVKLFVBQUFaLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWVcsWUFBaEI7QUFBQSxDQUZELEVBR0gsVUFBQWIsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ2MsSUFBTixLQUFlLE9BQWYsR0FBeUIsQ0FBekIsR0FBNkJkLEtBQUssQ0FBQ0UsS0FBTixDQUFZYSxpQkFBOUM7QUFBQSxDQUhGLENBQXBCOztJQU1xQkMsUTs7Ozs7Ozs7Ozs7Ozs7OzhGQTBCWDtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLO29HQUlNLFVBQUFDLElBQUksRUFBSTtBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFBQ0YsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBZDs7QUFDQSxZQUFLakIsS0FBTCxDQUFXb0IsT0FBWCxDQUFtQkYsSUFBbkI7QUFDRCxLO21HQUVZLFVBQUFBLElBQUksRUFBSTtBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFBQ0YsUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBZDs7QUFDQSxZQUFLakIsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkgsSUFBbEI7QUFDRCxLOzs7Ozs7NkJBRVE7QUFDUCxVQUFNSSxVQUFVLG1DQUNYLHdCQUFLLEtBQUt0QixLQUFWLEVBQWlCLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsSUFBeEIsRUFBOEIsVUFBOUIsRUFBMEMsT0FBMUMsQ0FBakIsQ0FEVztBQUVkYyxRQUFBQSxJQUFJLEVBQUUsVUFGUTtBQUdkTSxRQUFBQSxPQUFPLEVBQUUsS0FBS0csV0FIQTtBQUlkRixRQUFBQSxNQUFNLEVBQUUsS0FBS0c7QUFKQyxRQUFoQjs7QUFPQSxVQUFNQyxVQUFVLG1DQUNYLHdCQUFLLEtBQUt6QixLQUFWLEVBQWlCLENBQUMsU0FBRCxFQUFZLFVBQVosRUFBd0IsV0FBeEIsQ0FBakIsQ0FEVztBQUVkMEIsUUFBQUEsT0FBTyxFQUFFLEtBQUsxQixLQUFMLENBQVcyQjtBQUZOLFFBQWhCOztBQUtBLFVBQU1DLFlBQVksR0FDaEIsS0FBSzVCLEtBQUwsQ0FBV2MsSUFBWCxLQUFvQixVQUFwQixHQUNJVCxtQkFESixHQUVJLEtBQUtMLEtBQUwsQ0FBV2MsSUFBWCxLQUFvQixPQUFwQixHQUNBUCxnQkFEQSxHQUVBVixpQkFMTjtBQU9BLDBCQUNFLGdDQUFDLGNBQUQ7QUFDRSxRQUFBLElBQUksRUFBRSxLQUFLRyxLQUFMLENBQVdjLElBRG5CO0FBRUUsUUFBQSxTQUFTLEVBQUUsNEJBQVcsYUFBWCxFQUEwQixLQUFLZCxLQUFMLENBQVc2QixTQUFyQztBQUZiLHNCQUlFLGdDQUFDLFdBQUQsRUFBaUJQLFVBQWpCLENBSkYsZUFLRSxnQ0FBQyxZQUFEO0FBQWMsUUFBQSxTQUFTLEVBQUM7QUFBeEIsU0FBaURHLFVBQWpELEdBQ0csS0FBS3pCLEtBQUwsQ0FBV0QsS0FEZCxDQUxGLENBREY7QUFXRDs7O0VBdkVtQytCLGdCOzs7aUNBQWpCZCxRLGVBQ0E7QUFDakJXLEVBQUFBLEVBQUUsRUFBRUksc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFakJsQyxFQUFBQSxLQUFLLEVBQUVnQyxzQkFBVUcsSUFGQTtBQUdqQkMsRUFBQUEsS0FBSyxFQUFFSixzQkFBVUssS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsZUFBZCxDQUFoQixDQUhVO0FBSWpCQyxFQUFBQSxPQUFPLEVBQUVOLHNCQUFVTyxJQUpGO0FBS2pCQyxFQUFBQSxRQUFRLEVBQUVSLHNCQUFVTyxJQUxIO0FBT2pCRSxFQUFBQSxLQUFLLEVBQUVULHNCQUFVQyxNQVBBO0FBUWpCLFlBQVFELHNCQUFVTyxJQVJEO0FBU2pCRyxFQUFBQSxXQUFXLEVBQUVWLHNCQUFVQyxNQVROO0FBVWpCL0IsRUFBQUEsU0FBUyxFQUFFOEIsc0JBQVVPLElBVko7QUFXakJqQixFQUFBQSxNQUFNLEVBQUVVLHNCQUFVVyxJQVhEO0FBWWpCQyxFQUFBQSxRQUFRLEVBQUVaLHNCQUFVVyxJQVpIO0FBYWpCdEIsRUFBQUEsT0FBTyxFQUFFVyxzQkFBVVc7QUFiRixDO2lDQURBMUIsUSxrQkFpQkc7QUFDcEJ1QixFQUFBQSxRQUFRLEVBQUUsS0FEVTtBQUVwQkYsRUFBQUEsT0FBTyxFQUFFLEtBRlc7QUFHcEJoQixFQUFBQSxNQUFNLEVBQUV6QixJQUhZO0FBSXBCK0MsRUFBQUEsUUFBUSxFQUFFL0MsSUFKVTtBQUtwQndCLEVBQUFBLE9BQU8sRUFBRXhCLElBTFc7QUFNcEJHLEVBQUFBLEtBQUssRUFBRTtBQU5hLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuY29uc3QgU3R5bGVkU3dpdGNoSW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICR7cHJvcHMgPT4gKHByb3BzLnNlY29uZGFyeSA/IHByb3BzLnRoZW1lLnNlY29uZGFyeVN3aXRjaCA6IHByb3BzLnRoZW1lLmlucHV0U3dpdGNoKX07XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveElucHV0ID0gc3R5bGVkLmxhYmVsYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q2hlY2tib3h9O1xuYDtcblxuY29uc3QgU3R5bGVkUmFkaXVJbnB1dCA9IHN0eWxlZC5sYWJlbGBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFJhZGlvfTtcbmA7XG5cbmNvbnN0IEhpZGRlbklucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoSGVpZ2h0fXB4O1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ3JhZGlvJyA/IDAgOiBwcm9wcy50aGVtZS5zd2l0Y2hMYWJlbE1hcmdpbil9cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgZmFsc2UsICdpbmRldGVybWluYXRlJ10pLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN3aXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG9uQmx1cjogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkZvY3VzOiBub29wLFxuICAgIGxhYmVsOiAnJ1xuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSBhcmdzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5vbkZvY3VzKGFyZ3MpO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSBhcmdzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pO1xuICAgIHRoaXMucHJvcHMub25CbHVyKGFyZ3MpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgLi4ucGljayh0aGlzLnByb3BzLCBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnaWQnLCAnb25DaGFuZ2UnLCAndmFsdWUnXSksXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyXG4gICAgfTtcblxuICAgIGNvbnN0IGxhYmVsUHJvcHMgPSB7XG4gICAgICAuLi5waWNrKHRoaXMucHJvcHMsIFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdzZWNvbmRhcnknXSksXG4gICAgICBodG1sRm9yOiB0aGlzLnByb3BzLmlkXG4gICAgfTtcblxuICAgIGNvbnN0IExhYmVsRWxlbWVudCA9XG4gICAgICB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCdcbiAgICAgICAgPyBTdHlsZWRDaGVja2JveElucHV0XG4gICAgICAgIDogdGhpcy5wcm9wcy50eXBlID09PSAncmFkaW8nXG4gICAgICAgID8gU3R5bGVkUmFkaXVJbnB1dFxuICAgICAgICA6IFN0eWxlZFN3aXRjaElucHV0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDaGVja2JveFxuICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG4gICAgICA+XG4gICAgICAgIDxIaWRkZW5JbnB1dCB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgPExhYmVsRWxlbWVudCBjbGFzc05hbWU9XCJrZy1jaGVja2JveF9fbGFiZWxcIiB7Li4ubGFiZWxQcm9wc30+XG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgIDwvTGFiZWxFbGVtZW50PlxuICAgICAgPC9TdHlsZWRDaGVja2JveD5cbiAgICApO1xuICB9XG59XG4iXX0=