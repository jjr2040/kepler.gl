"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ItemSelectorListen = exports.StyledDropdownSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _utils = require("../../../utils/utils");

var _reactIntl = require("react-intl");

var _localization = require("../../../localization");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 6px;\n  display: flex;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  .list__item {\n    ", ";\n  }\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  height: ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledDropdownSelect = _styledComponents["default"].div.attrs({
  className: 'item-selector__dropdown'
})(_templateObject(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.inputTheme === 'light' ? props.theme.inputLT : props.theme.input;
}, function (props) {
  return props.size === 'small' ? props.theme.inputBoxHeightSmall : props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

exports.StyledDropdownSelect = StyledDropdownSelect;

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2(), function (props) {
  return props.hasPlaceholder && props.inputTheme === 'light' ? props.theme.selectColorPlaceHolderLT : props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.inputTheme === 'light' ? props.theme.selectColorLT : props.theme.selectColor;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListItemLT : props.theme.dropdownListItem;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListAnchorLT : props.theme.dropdownListAnchor;
});

var DropdownSelectActionRight = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

var DropdownWrapper = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
}, function (props) {
  return props.placement === 'top' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
});

var ItemSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  var _super = _createSuper(ItemSelector);

  function ItemSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function (e) {
      e.stopPropagation();

      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown(intl) {
      return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: this.props.typeaheadPlaceholder || intl ? intl.formatMessage({
          id: 'placeholder.search'
        }) : 'Search',
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        light: this.props.inputTheme === 'light'
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        onFocus: this._showPopover,
        error: this.props.isError,
        inputTheme: this.props.inputTheme,
        size: this.props.size
      };
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "item-selector"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem,
        CustomChickletComponent: this.props.CustomChickletComponent,
        inputTheme: this.props.inputTheme
      })) : /*#__PURE__*/_react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, /*#__PURE__*/_react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        inputTheme: this.props.inputTheme,
        className: "item-selector__dropdown__value"
      }, hasValue ? /*#__PURE__*/_react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0],
        light: this.props.inputTheme === 'light'
      }) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: this.props.placeholder
      })), this.props.erasable && hasValue ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : this.props.showArrow ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
        height: "14px",
        onClick: this._showTypeahead
      })) : null), this.state.showTypeahead && this._renderDropdown(intl)));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  showArrow: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  typeaheadPlaceholder: _propTypes["default"].string,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func,
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  showArrow: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'placeholder.enterValue',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});
var ItemSelectorListen = (0, _reactOnclickoutside["default"])(ItemSelector);
exports.ItemSelectorListen = ItemSelectorListen;

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside["default"])(ItemSelector));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dExUIiwiaW5wdXQiLCJzaXplIiwiaW5wdXRCb3hIZWlnaHRTbWFsbCIsImlucHV0Qm94SGVpZ2h0IiwiZHJvcGRvd25MaXN0QW5jaG9yIiwiRHJvcGRvd25TZWxlY3RWYWx1ZSIsInNwYW4iLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXJMVCIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvckxUIiwic2VsZWN0Q29sb3IiLCJkcm9wZG93bkxpc3RJdGVtTFQiLCJkcm9wZG93bkxpc3RJdGVtIiwiZHJvcGRvd25MaXN0QW5jaG9yTFQiLCJEcm9wZG93blNlbGVjdEFjdGlvblJpZ2h0Iiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImRyb3Bkb3duV2FwcGVyTWFyZ2luIiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpdGVtcyIsInNsaWNlIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJfb25CbHVyIiwiZ2V0VmFsdWUiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiLCJnZXRPcHRpb25WYWx1ZSIsImRpc3BsYXlPcHRpb24iLCJwcmV2aW91c1NlbGVjdGVkIiwibXVsdGlTZWxlY3QiLCJjb25jYXQiLCJkaXNhYmxlZCIsImludGwiLCJyZXN1bHRzIiwibGlzdEl0ZW0iLCJsaXN0QW5jaG9yIiwib3B0aW9ucyIsImZpbHRlck9wdGlvbiIsImZpeGVkT3B0aW9ucyIsInR5cGVhaGVhZFBsYWNlaG9sZGVyIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWxlY3RlZCIsImhhc1ZhbHVlIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsInN0YXRlIiwib25DbGljayIsIl9zaG93VHlwZWFoZWFkIiwib25Gb2N1cyIsIl9zaG93UG9wb3ZlciIsImVycm9yIiwiaXNFcnJvciIsInBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJfcmVtb3ZlSXRlbSIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiZXJhc2FibGUiLCJfb25FcmFzZSIsInNob3dBcnJvdyIsIl9yZW5kZXJEcm9wZG93biIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImRyb3Bkb3duSGVhZGVyIiwiRHJvcGRvd25MaXN0IiwiTGlzdEl0ZW0iLCJJdGVtU2VsZWN0b3JMaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFF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QUF0QixDQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1bmlxQnkgZnJvbSAnbG9kYXNoLnVuaXFieSc7XG5pbXBvcnQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnLi9hY2Nlc3Nvcic7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4vY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4vdHlwZWFoZWFkJztcbmltcG9ydCB7RGVsZXRlLCBBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBEcm9wZG93bkxpc3QsIHtMaXN0SXRlbX0gZnJvbSAnLi9kcm9wZG93bi1saXN0JztcblxuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge2luamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRHJvcGRvd25TZWxlY3QgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24nXG59KWBcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0XG4gICAgICA6IHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRMVFxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dH07XG5cbiAgaGVpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJyA/IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0U21hbGwgOiBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodH07XG5cbiAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3J9O1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93blNlbGVjdFZhbHVlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXIgJiYgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J1xuICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyTFRcbiAgICAgIDogcHJvcHMuaGFzUGxhY2Vob2xkZXJcbiAgICAgID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlclxuICAgICAgOiBwcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnXG4gICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yTFRcbiAgICAgIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAubGlzdF9faXRlbSB7XG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0JyA/IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEl0ZW1MVCA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEl0ZW19O1xuICB9XG5cbiAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J1xuICAgICAgICA/IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEFuY2hvckxUXG4gICAgICAgIDogcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RBY3Rpb25SaWdodCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJafTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodCA6ICdhdXRvJyl9O1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+XG4gICAgcHJvcHMucGxhY2VtZW50ID09PSAnYm90dG9tJyA/IGAke3Byb3BzLnRoZW1lLmRyb3Bkb3duV2FwcGVyTWFyZ2lufXB4YCA6ICdhdXRvJ307XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5wbGFjZW1lbnQgPT09ICd0b3AnID8gYCR7cHJvcHMudGhlbWUuZHJvcGRvd25XYXBwZXJNYXJnaW59cHhgIDogJ2F1dG8nfTtcbmA7XG5cbmNsYXNzIEl0ZW1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gcmVxdWlyZWQgcHJvcGVydGllc1xuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuXG4gICAgLy8gb3B0aW9uYWwgcHJvcGVydGllc1xuICAgIGZpeGVkT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZXJhc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dBcnJvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBnZXRPcHRpb25WYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHR5cGVhaGVhZFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlcmFzYWJsZTogZmFsc2UsXG4gICAgc2hvd0Fycm93OiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGRpc3BsYXlPcHRpb246IG51bGwsXG4gICAgZ2V0T3B0aW9uVmFsdWU6IG51bGwsXG4gICAgZmlsdGVyT3B0aW9uOiBudWxsLFxuICAgIGZpeGVkT3B0aW9uczogbnVsbCxcbiAgICBpbnB1dFRoZW1lOiAncHJpbWFyeScsXG4gICAgbXVsdGlTZWxlY3Q6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlci5lbnRlclZhbHVlJyxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgZHJvcGRvd25IZWFkZXI6IG51bGwsXG4gICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ6IG51bGwsXG4gICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ6IERyb3Bkb3duTGlzdCxcbiAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50OiBMaXN0SXRlbVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dUeXBlYWhlYWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgIHRoaXMuX2hpZGVUeXBlYWhlYWQoKTtcbiAgfTtcblxuICBfaGlkZVR5cGVhaGVhZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgIHRoaXMuX29uQmx1cigpO1xuICB9XG5cbiAgX29uQmx1ciA9ICgpID0+IHtcbiAgICAvLyBub3RlOiBjaGlja2xldGVkIGlucHV0IGlzIG5vdCBhIHJlYWwgZm9ybSBlbGVtZW50IHNvIHdlIGNhbGwgb25CbHVyKClcbiAgICAvLyB3aGVuIHdlIGZlZWwgdGhlIGV2ZW50cyBhcmUgYXBwcm9wcmlhdGVcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW1vdmVJdGVtID0gKGl0ZW0sIGUpID0+IHtcbiAgICAvLyBvbmx5IHVzZWQgd2hlbiBtdWx0aVNlbGVjdCA9IHRydWVcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7c2VsZWN0ZWRJdGVtc30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgodCA9PiB0ID09PSBpdGVtKTtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgLi4uc2VsZWN0ZWRJdGVtcy5zbGljZShpbmRleCArIDEsIHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgIF07XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3NlbGVjdEl0ZW0gPSBpdGVtID0+IHtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IEFjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IoXG4gICAgICB0aGlzLnByb3BzLmdldE9wdGlvblZhbHVlIHx8IHRoaXMucHJvcHMuZGlzcGxheU9wdGlvblxuICAgICk7XG5cbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdW5pcUJ5KHByZXZpb3VzU2VsZWN0ZWQuY29uY2F0KHRvQXJyYXkoaXRlbSkpLCBnZXRWYWx1ZSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShnZXRWYWx1ZShpdGVtKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcbiAgICAgIHRoaXMuX29uQmx1cigpO1xuICAgIH1cbiAgfTtcblxuICBfb25FcmFzZSA9IGUgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgfTtcblxuICBfc2hvd1R5cGVhaGVhZCA9IGUgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1R5cGVhaGVhZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW5kZXJEcm9wZG93bihpbnRsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bldyYXBwZXIgcGxhY2VtZW50PXt0aGlzLnByb3BzLnBsYWNlbWVudH0+XG4gICAgICAgIDxUeXBlYWhlYWRcbiAgICAgICAgICBjdXN0b21DbGFzc2VzPXt7XG4gICAgICAgICAgICByZXN1bHRzOiAnbGlzdC1zZWxlY3RvcicsXG4gICAgICAgICAgICBpbnB1dDogJ3R5cGVhaGVhZF9faW5wdXQnLFxuICAgICAgICAgICAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcbiAgICAgICAgICAgIGxpc3RBbmNob3I6ICdsaXN0X19pdGVtX19hbmNob3InXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XG4gICAgICAgICAgZmlsdGVyT3B0aW9uPXt0aGlzLnByb3BzLmZpbHRlck9wdGlvbn1cbiAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuZml4ZWRPcHRpb25zfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZWFoZWFkUGxhY2Vob2xkZXIgfHwgaW50bFxuICAgICAgICAgICAgICA/IGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdwbGFjZWhvbGRlci5zZWFyY2gnfSlcbiAgICAgICAgICAgICAgOiAnU2VhcmNoJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLl9zZWxlY3RJdGVtfVxuICAgICAgICAgIGN1c3RvbUxpc3RDb21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcERvd25SZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wZG93bkhlYWRlckNvbXBvbmVudH1cbiAgICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e0FjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IodGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uKX1cbiAgICAgICAgICBzZWFyY2hhYmxlPXt0aGlzLnByb3BzLnNlYXJjaGFibGV9XG4gICAgICAgICAgc2hvd09wdGlvbnNXaGVuRW1wdHlcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyl9XG4gICAgICAgICAgbGlnaHQ9e3RoaXMucHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J31cbiAgICAgICAgLz5cbiAgICAgIDwvRHJvcGRvd25XcmFwcGVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgY29uc3QgaGFzVmFsdWUgPSBzZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgZGlzcGxheU9wdGlvbiA9IEFjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IodGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0UHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoe1xuICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuc2hvd1R5cGVhaGVhZFxuICAgICAgfSksXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX3Nob3dUeXBlYWhlYWQsXG4gICAgICBvbkZvY3VzOiB0aGlzLl9zaG93UG9wb3ZlcixcbiAgICAgIGVycm9yOiB0aGlzLnByb3BzLmlzRXJyb3IsXG4gICAgICBpbnB1dFRoZW1lOiB0aGlzLnByb3BzLmlucHV0VGhlbWUsXG4gICAgICBzaXplOiB0aGlzLnByb3BzLnNpemVcbiAgICB9O1xuICAgIGNvbnN0IGludGwgPSB0aGlzLnByb3BzLmludGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdG9yXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBsYWJlbCAqL31cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tdWx0aVNlbGVjdCA/IChcbiAgICAgICAgICAgIDxDaGlja2xldGVkSW5wdXRcbiAgICAgICAgICAgICAgey4uLmRyb3Bkb3duU2VsZWN0UHJvcHN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2Rpc3BsYXlPcHRpb259XG4gICAgICAgICAgICAgIHJlbW92ZUl0ZW09e3RoaXMuX3JlbW92ZUl0ZW19XG4gICAgICAgICAgICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50PXt0aGlzLnByb3BzLkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50fVxuICAgICAgICAgICAgICBpbnB1dFRoZW1lPXt0aGlzLnByb3BzLmlucHV0VGhlbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8U3R5bGVkRHJvcGRvd25TZWxlY3Qgey4uLmRyb3Bkb3duU2VsZWN0UHJvcHN9PlxuICAgICAgICAgICAgICA8RHJvcGRvd25TZWxlY3RWYWx1ZVxuICAgICAgICAgICAgICAgIGhhc1BsYWNlaG9sZGVyPXshaGFzVmFsdWV9XG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGFzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2Rpc3BsYXlPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFswXX1cbiAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e3RoaXMucHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RWYWx1ZT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJhc2FibGUgJiYgaGFzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXt0aGlzLl9vbkVyYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RBY3Rpb25SaWdodD5cbiAgICAgICAgICAgICAgKSA6IHRoaXMucHJvcHMuc2hvd0Fycm93ID8gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEFjdGlvblJpZ2h0PlxuICAgICAgICAgICAgICAgICAgPEFycm93RG93biBoZWlnaHQ9XCIxNHB4XCIgb25DbGljaz17dGhpcy5fc2hvd1R5cGVhaGVhZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQ+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9TdHlsZWREcm9wZG93blNlbGVjdD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBidWlsdCB0aGUgbGlzdCAqL31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VHlwZWFoZWFkICYmIHRoaXMuX3JlbmRlckRyb3Bkb3duKGludGwpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEl0ZW1TZWxlY3Rvckxpc3RlbiA9IGxpc3RlbnNUb0NsaWNrT3V0c2lkZShJdGVtU2VsZWN0b3IpO1xuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChsaXN0ZW5zVG9DbGlja091dHNpZGUoSXRlbVNlbGVjdG9yKSk7XG4iXX0=