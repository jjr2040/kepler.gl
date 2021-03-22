"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzy = _interopRequireDefault(require("fuzzy"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _window = require("global/window");

var _accessor = _interopRequireDefault(require("./accessor"));

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _icons = require("../icons");

var _keyevent = _interopRequireDefault(require("../../../constants/keyevent"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 15px;\n  top: 14px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DEFAULT_CLASS = 'typeahead';
/**
 * Copied mostly from 'react-typeahead', an auto-completing text input
 *
 * Renders an text input that shows options nearby that you can use the
 * keyboard or mouse to select.
 */

var TypeaheadWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.light ? props.theme.dropdownListBgdLT : props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
});

var InputBox = _styledComponents["default"].div.attrs({
  className: 'typeahead__input_box'
})(_templateObject2());

var TypeaheadInput = _styledComponents["default"].input(_templateObject3(), function (props) {
  return props.light ? props.theme.inputLT : props.theme.secondaryInput;
}, function (props) {
  return props.light ? props.theme.selectBackgroundLT : props.theme.secondaryInputBgd;
});

var InputIcon = _styledComponents["default"].div.attrs({
  className: 'typeahead__input_icon'
})(_templateObject4(), function (props) {
  return props.theme.inputPlaceholderColor;
});

function generateSearchFunction(props) {
  var searchOptions = props.searchOptions,
      filterOption = props.filterOption;

  if (typeof searchOptions === 'function') {
    if (filterOption !== null) {
      _window.console.warn('searchOptions prop is being used, filterOption prop will be ignored');
    }

    return searchOptions;
  } else if (typeof filterOption === 'function') {
    // use custom filter option
    return function (value, options) {
      return options.filter(function (o) {
        return filterOption(value, o);
      });
    };
  }

  var mapper = typeof filterOption === 'string' ? _accessor["default"].generateAccessor(filterOption) : _accessor["default"].IDENTITY_FN;
  return function (value, options) {
    return _fuzzy["default"].filter(value, options, {
      extract: mapper
    }).map(function (res) {
      return options[res.index];
    });
  };
}

function getOptionsForValue(value, props, state) {
  var options = props.options,
      showOptionsWhenEmpty = props.showOptionsWhenEmpty;

  if (!props.searchable) {
    // directly pass through options if can not be searched
    return options;
  }

  if (shouldSkipSearch(value, state, showOptionsWhenEmpty)) {
    return options;
  }

  var searchOptions = generateSearchFunction(props);
  return searchOptions(value, options);
}

function shouldSkipSearch(input, state, showOptionsWhenEmpty) {
  var emptyValue = !input || input.trim().length === 0; // this.state must be checked because it may not be defined yet if this function
  // is called from within getInitialState

  var isFocused = state && state.isFocused;
  return !(showOptionsWhenEmpty && isFocused) && emptyValue;
}

var Typeahead = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Typeahead, _Component);

  var _super = _createSuper(Typeahead);

  (0, _createClass2["default"])(Typeahead, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      //  invoked after a component is instantiated as well as before it is re-rendered
      var searchResults = getOptionsForValue(state.entryValue, props, state);
      return {
        searchResults: searchResults
      };
    }
  }]);

  function Typeahead(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Typeahead);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entry", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      if (_this.entry.current) {
        _this.entry.current.focus();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_hasCustomValue", function () {
      return _this.props.allowCustomValues > 0 && _this.state.entryValue.length >= _this.props.allowCustomValues && _this.state.searchResults.indexOf(_this.state.entryValue) < 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getCustomValue", function () {
      return _this._hasCustomValue() ? _this.state.entryValue : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOptionSelected", function (option, event) {
      if (_this.props.searchable) {
        // reset entry input
        _this.setState({
          searchResults: getOptionsForValue('', _this.props, _this.state),
          selection: '',
          entryValue: ''
        });
      }

      return _this.props.onOptionSelected(option, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTextEntryUpdated", function () {
      if (_this.props.searchable) {
        var value = _this.entry.current.value;

        _this.setState({
          searchResults: getOptionsForValue(value, _this.props, _this.state),
          selection: '',
          entryValue: value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEnter", function (event) {
      var selection = _this.getSelection();

      if (!selection) {
        return _this.props.onKeyDown(event);
      }

      return _this._onOptionSelected(selection, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEscape", function () {
      _this.setState({
        selectionIndex: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTab", function (event) {
      var selection = _this.getSelection();

      var option = selection ? selection : _this.state.searchResults.length > 0 ? _this.state.searchResults[0] : null;

      if (option === null && _this._hasCustomValue()) {
        option = _this._getCustomValue();
      }

      if (option !== null) {
        return _this._onOptionSelected(option, event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventMap", function (event) {
      var events = {};
      events[_keyevent["default"].DOM_VK_UP] = _this.navUp;
      events[_keyevent["default"].DOM_VK_DOWN] = _this.navDown;
      events[_keyevent["default"].DOM_VK_RETURN] = events[_keyevent["default"].DOM_VK_ENTER] = _this._onEnter;
      events[_keyevent["default"].DOM_VK_ESCAPE] = _this._onEscape;
      events[_keyevent["default"].DOM_VK_TAB] = _this._onTab;
      return events;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nav", function (delta) {
      if (!_this._hasHint()) {
        return;
      }

      var newIndex = _this.state.selectionIndex === null ? delta === 1 ? 0 : delta : _this.state.selectionIndex + delta;
      var length = _this.props.maxVisible ? _this.state.searchResults.slice(0, _this.props.maxVisible).length : _this.state.searchResults.length;

      if (_this._hasCustomValue()) {
        length += 1;
      }

      if (newIndex < 0) {
        newIndex += length;
      } else if (newIndex >= length) {
        newIndex -= length;
      }

      _this.setState({
        selectionIndex: newIndex
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navDown", function () {
      _this._nav(1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navUp", function () {
      _this._nav(-1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }

      _this._onTextEntryUpdated();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyDown", function (event) {
      // If there are no visible elements, don't perform selector navigation.
      // Just pass this up to the upstream onKeydown handler.
      // Also skip if the user is pressing the shift key, since none of our handlers are looking for shift
      if (!_this._hasHint() || event.shiftKey) {
        return _this.props.onKeyDown(event);
      }

      var handler = _this.eventMap()[event.keyCode];

      if (handler) {
        handler(event);
      } else {
        return _this.props.onKeyDown(event);
      } // Don't propagate the keystroke back to the DOM/browser


      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      if (_this.props.onFocus) {
        return _this.props.onFocus(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function (event) {
      _this.setState({
        isFocused: false
      });

      if (_this.props.onBlur) {
        return _this.props.onBlur(event);
      }
    });
    _this.state = {
      searchResults: [],
      // This should be called something else, 'entryValue'
      entryValue: _this.props.value || _this.props.initialValue,
      // A valid typeahead value
      selection: _this.props.value,
      // Index of the selection
      selectionIndex: null,
      // Keep track of the focus state of the input element, to determine
      // whether to show options when empty (if showOptionsWhenEmpty is true)
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Typeahead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // call focus on entry or div to trigger key events listener
      if (this.entry.current) {
        this.entry.current.focus();
      } else {
        this.root.current.focus();
      }
    }
  }, {
    key: "_renderIncrementalSearchResults",
    value: function _renderIncrementalSearchResults() {
      return /*#__PURE__*/_react["default"].createElement(this.props.customListComponent, {
        fixedOptions: this.props.fixedOptions,
        options: this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible) : this.state.searchResults,
        areResultsTruncated: this.props.maxVisible && this.state.searchResults.length > this.props.maxVisible,
        resultsTruncatedMessage: this.props.resultsTruncatedMessage,
        onOptionSelected: this._onOptionSelected,
        allowCustomValues: this.props.allowCustomValues,
        customValue: this._getCustomValue(),
        customClasses: this.props.customClasses,
        customListItemComponent: this.props.customListItemComponent,
        customListHeaderComponent: this.props.customListHeaderComponent,
        selectionIndex: this.state.selectionIndex,
        defaultClassNames: this.props.defaultClassNames,
        displayOption: this.props.displayOption,
        selectedItems: this.props.selectedItems,
        light: this.props.light
      });
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var index = this.state.selectionIndex;

      if (this._hasCustomValue()) {
        if (index === 0) {
          return this.state.entryValue;
        }

        index--;
      }

      if (this._hasFixedOptions()) {
        return index < this.props.fixedOptions.length ? this.props.fixedOptions[index] : this.state.searchResults[index - this.props.fixedOptions.length];
      }

      return this.state.searchResults[index];
    }
  }, {
    key: "_renderHiddenInput",
    value: function _renderHiddenInput() {
      if (!this.props.name) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.state.selection
      });
    }
  }, {
    key: "_hasHint",
    value: function _hasHint() {
      return this.state.searchResults.length > 0 || this._hasCustomValue();
    }
  }, {
    key: "_hasFixedOptions",
    value: function _hasFixedOptions() {
      return Array.isArray(this.props.fixedOptions) && this.props.fixedOptions.length;
    }
  }, {
    key: "render",
    value: function render() {
      var inputClasses = {};
      inputClasses[this.props.customClasses.input] = Boolean(this.props.customClasses.input);
      var inputClassList = (0, _classnames["default"])(inputClasses);
      var classes = (0, _defineProperty2["default"])({}, DEFAULT_CLASS, this.props.defaultClassNames);
      classes[this.props.className] = Boolean(this.props.className);
      var classList = (0, _classnames["default"])(classes);
      return /*#__PURE__*/_react["default"].createElement(TypeaheadWrapper, {
        className: classList,
        ref: this.root,
        tabIndex: "0",
        onKeyDown: this._onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        onFocus: this._onFocus,
        light: this.props.light
      }, this._renderHiddenInput(), this.props.searchable ? /*#__PURE__*/_react["default"].createElement(InputBox, null, /*#__PURE__*/_react["default"].createElement(TypeaheadInput, (0, _extends2["default"])({
        ref: this.entry,
        type: "text",
        disabled: this.props.disabled
      }, this.props.inputProps, {
        placeholder: this.props.placeholder,
        className: inputClassList,
        value: this.state.entryValue,
        onChange: this._onChange,
        onBlur: this._onBlur,
        light: this.props.light
      })), /*#__PURE__*/_react["default"].createElement(InputIcon, null, /*#__PURE__*/_react["default"].createElement(this.props.inputIcon, {
        height: "18px"
      }))) : null, this._renderIncrementalSearchResults());
    }
  }]);
  return Typeahead;
}(_react.Component);

(0, _defineProperty2["default"])(Typeahead, "propTypes", {
  name: _propTypes["default"].string,
  customClasses: _propTypes["default"].object,
  maxVisible: _propTypes["default"].number,
  resultsTruncatedMessage: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  initialValue: _propTypes["default"].string,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  textarea: _propTypes["default"].bool,
  inputProps: _propTypes["default"].object,
  onOptionSelected: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  searchOptions: _propTypes["default"].func,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  inputDisplayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  formInputOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  defaultClassNames: _propTypes["default"].bool,
  customListComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  showOptionsWhenEmpty: _propTypes["default"].bool,
  searchable: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Typeahead, "defaultProps", {
  options: [],
  customClasses: {},
  allowCustomValues: 0,
  initialValue: '',
  value: '',
  placeholder: '',
  disabled: false,
  textarea: false,
  inputProps: {},
  onOptionSelected: function onOptionSelected(option) {},
  onChange: function onChange(event) {},
  onKeyDown: function onKeyDown(event) {},
  onKeyPress: function onKeyPress(event) {},
  onKeyUp: function onKeyUp(event) {},
  onFocus: function onFocus(event) {},
  onBlur: function onBlur(event) {},
  filterOption: null,
  searchOptions: null,
  inputDisplayOption: null,
  defaultClassNames: true,
  customListComponent: _dropdownList["default"],
  customListItemComponent: _dropdownList.ListItem,
  inputIcon: _icons.Search,
  customListHeaderComponent: null,
  showOptionsWhenEmpty: true,
  searchable: true,
  resultsTruncatedMessage: null
});
(0, _reactLifecyclesCompat.polyfill)(Typeahead);
var _default = Typeahead;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0NMQVNTIiwiVHlwZWFoZWFkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwibGlnaHQiLCJ0aGVtZSIsImRyb3Bkb3duTGlzdEJnZExUIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0U2hhZG93IiwiSW5wdXRCb3giLCJhdHRycyIsImNsYXNzTmFtZSIsIlR5cGVhaGVhZElucHV0IiwiaW5wdXQiLCJpbnB1dExUIiwic2Vjb25kYXJ5SW5wdXQiLCJzZWxlY3RCYWNrZ3JvdW5kTFQiLCJzZWNvbmRhcnlJbnB1dEJnZCIsIklucHV0SWNvbiIsImlucHV0UGxhY2Vob2xkZXJDb2xvciIsImdlbmVyYXRlU2VhcmNoRnVuY3Rpb24iLCJzZWFyY2hPcHRpb25zIiwiZmlsdGVyT3B0aW9uIiwiQ29uc29sZSIsIndhcm4iLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvIiwibWFwcGVyIiwiQWNjZXNzb3IiLCJnZW5lcmF0ZUFjY2Vzc29yIiwiSURFTlRJVFlfRk4iLCJmdXp6eSIsImV4dHJhY3QiLCJtYXAiLCJyZXMiLCJpbmRleCIsImdldE9wdGlvbnNGb3JWYWx1ZSIsInN0YXRlIiwic2hvd09wdGlvbnNXaGVuRW1wdHkiLCJzZWFyY2hhYmxlIiwic2hvdWxkU2tpcFNlYXJjaCIsImVtcHR5VmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwiaXNGb2N1c2VkIiwiVHlwZWFoZWFkIiwic2VhcmNoUmVzdWx0cyIsImVudHJ5VmFsdWUiLCJlbnRyeSIsImN1cnJlbnQiLCJmb2N1cyIsImFsbG93Q3VzdG9tVmFsdWVzIiwiaW5kZXhPZiIsIl9oYXNDdXN0b21WYWx1ZSIsIm9wdGlvbiIsImV2ZW50Iiwic2V0U3RhdGUiLCJzZWxlY3Rpb24iLCJvbk9wdGlvblNlbGVjdGVkIiwiZ2V0U2VsZWN0aW9uIiwib25LZXlEb3duIiwiX29uT3B0aW9uU2VsZWN0ZWQiLCJzZWxlY3Rpb25JbmRleCIsIl9nZXRDdXN0b21WYWx1ZSIsImV2ZW50cyIsIktleUV2ZW50IiwiRE9NX1ZLX1VQIiwibmF2VXAiLCJET01fVktfRE9XTiIsIm5hdkRvd24iLCJET01fVktfUkVUVVJOIiwiRE9NX1ZLX0VOVEVSIiwiX29uRW50ZXIiLCJET01fVktfRVNDQVBFIiwiX29uRXNjYXBlIiwiRE9NX1ZLX1RBQiIsIl9vblRhYiIsImRlbHRhIiwiX2hhc0hpbnQiLCJuZXdJbmRleCIsIm1heFZpc2libGUiLCJzbGljZSIsIl9uYXYiLCJvbkNoYW5nZSIsIl9vblRleHRFbnRyeVVwZGF0ZWQiLCJzaGlmdEtleSIsImhhbmRsZXIiLCJldmVudE1hcCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJpbml0aWFsVmFsdWUiLCJyb290IiwiZml4ZWRPcHRpb25zIiwicmVzdWx0c1RydW5jYXRlZE1lc3NhZ2UiLCJjdXN0b21DbGFzc2VzIiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50IiwiZGVmYXVsdENsYXNzTmFtZXMiLCJkaXNwbGF5T3B0aW9uIiwic2VsZWN0ZWRJdGVtcyIsIl9oYXNGaXhlZE9wdGlvbnMiLCJuYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5wdXRDbGFzc2VzIiwiQm9vbGVhbiIsImlucHV0Q2xhc3NMaXN0IiwiY2xhc3NlcyIsImNsYXNzTGlzdCIsIl9vbktleURvd24iLCJvbktleVByZXNzIiwib25LZXlVcCIsIl9vbkZvY3VzIiwiX3JlbmRlckhpZGRlbklucHV0IiwiZGlzYWJsZWQiLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJfb25DaGFuZ2UiLCJfb25CbHVyIiwiX3JlbmRlckluY3JlbWVudGFsU2VhcmNoUmVzdWx0cyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsIm51bWJlciIsImFycmF5T2YiLCJhbnkiLCJib29sIiwidGV4dGFyZWEiLCJmdW5jIiwib25lT2ZUeXBlIiwiaW5wdXREaXNwbGF5T3B0aW9uIiwiZm9ybUlucHV0T3B0aW9uIiwiY3VzdG9tTGlzdENvbXBvbmVudCIsImVsZW1lbnQiLCJEcm9wZG93bkxpc3QiLCJMaXN0SXRlbSIsImlucHV0SWNvbiIsIlNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsV0FBdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUdBLFVBQUFDLEtBQUs7QUFBQSxTQUN2QkEsS0FBSyxDQUFDQyxLQUFOLEdBQWNELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxpQkFBMUIsR0FBOENILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxlQURuQztBQUFBLENBSEwsRUFLTixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlHLGtCQUFoQjtBQUFBLENBTEMsQ0FBdEI7O0FBWUEsSUFBTUMsUUFBUSxHQUFHUiw2QkFBT0MsR0FBUCxDQUFXUSxLQUFYLENBQWlCO0FBQ2hDQyxFQUFBQSxTQUFTLEVBQUU7QUFEcUIsQ0FBakIsQ0FBSCxvQkFBZDs7QUFNQSxJQUFNQyxjQUFjLEdBQUdYLDZCQUFPWSxLQUFWLHFCQUNoQixVQUFBVixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxLQUFOLEdBQWNELEtBQUssQ0FBQ0UsS0FBTixDQUFZUyxPQUExQixHQUFvQ1gsS0FBSyxDQUFDRSxLQUFOLENBQVlVLGNBQXJEO0FBQUEsQ0FEVyxFQUdJLFVBQUFaLEtBQUs7QUFBQSxTQUN2QkEsS0FB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QUFFLENBZEc7QUFlcEJtQyxFQUFBQSxPQWZvQixtQkFlWm5DLEtBZlksRUFlTCxDQUFFLENBZkc7QUFnQnBCb0MsRUFBQUEsTUFoQm9CLGtCQWdCYnBDLEtBaEJhLEVBZ0JOLENBQUUsQ0FoQkk7QUFpQnBCbkMsRUFBQUEsWUFBWSxFQUFFLElBakJNO0FBa0JwQkQsRUFBQUEsYUFBYSxFQUFFLElBbEJLO0FBbUJwQmtILEVBQUFBLGtCQUFrQixFQUFFLElBbkJBO0FBb0JwQmxDLEVBQUFBLGlCQUFpQixFQUFFLElBcEJDO0FBcUJwQm9DLEVBQUFBLG1CQUFtQixFQUFFRSx3QkFyQkQ7QUFzQnBCeEMsRUFBQUEsdUJBQXVCLEVBQUV5QyxzQkF0Qkw7QUF1QnBCQyxFQUFBQSxTQUFTLEVBQUVDLGFBdkJTO0FBd0JwQjFDLEVBQUFBLHlCQUF5QixFQUFFLElBeEJQO0FBeUJwQjVELEVBQUFBLG9CQUFvQixFQUFFLElBekJGO0FBMEJwQkMsRUFBQUEsVUFBVSxFQUFFLElBMUJRO0FBMkJwQndELEVBQUFBLHVCQUF1QixFQUFFO0FBM0JMLEM7QUFxVnhCLHFDQUFTbEQsU0FBVDtlQUVlQSxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZnV6enkgZnJvbSAnZnV6enknO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4vYWNjZXNzb3InO1xuaW1wb3J0IERyb3Bkb3duTGlzdCwge0xpc3RJdGVtfSBmcm9tICcuL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBLZXlFdmVudCBmcm9tICdjb25zdGFudHMva2V5ZXZlbnQnO1xuXG5jb25zdCBERUZBVUxUX0NMQVNTID0gJ3R5cGVhaGVhZCc7XG4vKipcbiAqIENvcGllZCBtb3N0bHkgZnJvbSAncmVhY3QtdHlwZWFoZWFkJywgYW4gYXV0by1jb21wbGV0aW5nIHRleHQgaW5wdXRcbiAqXG4gKiBSZW5kZXJzIGFuIHRleHQgaW5wdXQgdGhhdCBzaG93cyBvcHRpb25zIG5lYXJieSB0aGF0IHlvdSBjYW4gdXNlIHRoZVxuICoga2V5Ym9hcmQgb3IgbW91c2UgdG8gc2VsZWN0LlxuICovXG5cbmNvbnN0IFR5cGVhaGVhZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMubGlnaHQgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2RMVCA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3R5cGVhaGVhZF9faW5wdXRfYm94J1xufSlgXG4gIHBhZGRpbmc6IDhweDtcbmA7XG5cbmNvbnN0IFR5cGVhaGVhZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IChwcm9wcy5saWdodCA/IHByb3BzLnRoZW1lLmlucHV0TFQgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCl9IDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmxpZ2h0ID8gcHJvcHMudGhlbWUuc2VsZWN0QmFja2dyb3VuZExUIDogcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2R9O1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dEljb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAndHlwZWFoZWFkX19pbnB1dF9pY29uJ1xufSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckNvbG9yfTtcbmA7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2VhcmNoRnVuY3Rpb24ocHJvcHMpIHtcbiAgY29uc3Qge3NlYXJjaE9wdGlvbnMsIGZpbHRlck9wdGlvbn0gPSBwcm9wcztcbiAgaWYgKHR5cGVvZiBzZWFyY2hPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZpbHRlck9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgQ29uc29sZS53YXJuKCdzZWFyY2hPcHRpb25zIHByb3AgaXMgYmVpbmcgdXNlZCwgZmlsdGVyT3B0aW9uIHByb3Agd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWFyY2hPcHRpb25zO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyB1c2UgY3VzdG9tIGZpbHRlciBvcHRpb25cbiAgICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiBvcHRpb25zLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbih2YWx1ZSwgbykpO1xuICB9XG5cbiAgY29uc3QgbWFwcGVyID1cbiAgICB0eXBlb2YgZmlsdGVyT3B0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgPyBBY2Nlc3Nvci5nZW5lcmF0ZUFjY2Vzc29yKGZpbHRlck9wdGlvbilcbiAgICAgIDogQWNjZXNzb3IuSURFTlRJVFlfRk47XG5cbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT5cbiAgICBmdXp6eS5maWx0ZXIodmFsdWUsIG9wdGlvbnMsIHtleHRyYWN0OiBtYXBwZXJ9KS5tYXAocmVzID0+IG9wdGlvbnNbcmVzLmluZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNGb3JWYWx1ZSh2YWx1ZSwgcHJvcHMsIHN0YXRlKSB7XG4gIGNvbnN0IHtvcHRpb25zLCBzaG93T3B0aW9uc1doZW5FbXB0eX0gPSBwcm9wcztcblxuICBpZiAoIXByb3BzLnNlYXJjaGFibGUpIHtcbiAgICAvLyBkaXJlY3RseSBwYXNzIHRocm91Z2ggb3B0aW9ucyBpZiBjYW4gbm90IGJlIHNlYXJjaGVkXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgaWYgKHNob3VsZFNraXBTZWFyY2godmFsdWUsIHN0YXRlLCBzaG93T3B0aW9uc1doZW5FbXB0eSkpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaE9wdGlvbnMgPSBnZW5lcmF0ZVNlYXJjaEZ1bmN0aW9uKHByb3BzKTtcbiAgcmV0dXJuIHNlYXJjaE9wdGlvbnModmFsdWUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTa2lwU2VhcmNoKGlucHV0LCBzdGF0ZSwgc2hvd09wdGlvbnNXaGVuRW1wdHkpIHtcbiAgY29uc3QgZW1wdHlWYWx1ZSA9ICFpbnB1dCB8fCBpbnB1dC50cmltKCkubGVuZ3RoID09PSAwO1xuXG4gIC8vIHRoaXMuc3RhdGUgbXVzdCBiZSBjaGVja2VkIGJlY2F1c2UgaXQgbWF5IG5vdCBiZSBkZWZpbmVkIHlldCBpZiB0aGlzIGZ1bmN0aW9uXG4gIC8vIGlzIGNhbGxlZCBmcm9tIHdpdGhpbiBnZXRJbml0aWFsU3RhdGVcbiAgY29uc3QgaXNGb2N1c2VkID0gc3RhdGUgJiYgc3RhdGUuaXNGb2N1c2VkO1xuICByZXR1cm4gIShzaG93T3B0aW9uc1doZW5FbXB0eSAmJiBpc0ZvY3VzZWQpICYmIGVtcHR5VmFsdWU7XG59XG5cbmNsYXNzIFR5cGVhaGVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21DbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1heFZpc2libGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZml4ZWRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbml0aWFsVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHRleHRhcmVhOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyT3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHNlYXJjaE9wdGlvbnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgaW5wdXREaXNwbGF5T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGZvcm1JbnB1dE9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VzdG9tTGlzdENvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHNob3dPcHRpb25zV2hlbkVtcHR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXG4gICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0ZXh0YXJlYTogZmFsc2UsXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgb25PcHRpb25TZWxlY3RlZChvcHRpb24pIHt9LFxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7fSxcbiAgICBvbktleURvd24oZXZlbnQpIHt9LFxuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHt9LFxuICAgIG9uS2V5VXAoZXZlbnQpIHt9LFxuICAgIG9uRm9jdXMoZXZlbnQpIHt9LFxuICAgIG9uQmx1cihldmVudCkge30sXG4gICAgZmlsdGVyT3B0aW9uOiBudWxsLFxuICAgIHNlYXJjaE9wdGlvbnM6IG51bGwsXG4gICAgaW5wdXREaXNwbGF5T3B0aW9uOiBudWxsLFxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiB0cnVlLFxuICAgIGN1c3RvbUxpc3RDb21wb25lbnQ6IERyb3Bkb3duTGlzdCxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogTGlzdEl0ZW0sXG4gICAgaW5wdXRJY29uOiBTZWFyY2gsXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogbnVsbCxcbiAgICBzaG93T3B0aW9uc1doZW5FbXB0eTogdHJ1ZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlOiBudWxsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyAgaW52b2tlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgYXMgd2VsbCBhcyBiZWZvcmUgaXQgaXMgcmUtcmVuZGVyZWRcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZ2V0T3B0aW9uc0ZvclZhbHVlKHN0YXRlLmVudHJ5VmFsdWUsIHByb3BzLCBzdGF0ZSk7XG5cbiAgICByZXR1cm4ge3NlYXJjaFJlc3VsdHN9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUmVzdWx0czogW10sXG5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBzb21ldGhpbmcgZWxzZSwgJ2VudHJ5VmFsdWUnXG4gICAgICBlbnRyeVZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlLFxuXG4gICAgICAvLyBBIHZhbGlkIHR5cGVhaGVhZCB2YWx1ZVxuICAgICAgc2VsZWN0aW9uOiB0aGlzLnByb3BzLnZhbHVlLFxuXG4gICAgICAvLyBJbmRleCBvZiB0aGUgc2VsZWN0aW9uXG4gICAgICBzZWxlY3Rpb25JbmRleDogbnVsbCxcblxuICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgZm9jdXMgc3RhdGUgb2YgdGhlIGlucHV0IGVsZW1lbnQsIHRvIGRldGVybWluZVxuICAgICAgLy8gd2hldGhlciB0byBzaG93IG9wdGlvbnMgd2hlbiBlbXB0eSAoaWYgc2hvd09wdGlvbnNXaGVuRW1wdHkgaXMgdHJ1ZSlcbiAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY2FsbCBmb2N1cyBvbiBlbnRyeSBvciBkaXYgdG8gdHJpZ2dlciBrZXkgZXZlbnRzIGxpc3RlbmVyXG4gICAgaWYgKHRoaXMuZW50cnkuY3VycmVudCkge1xuICAgICAgdGhpcy5lbnRyeS5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdC5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcm9vdCA9IGNyZWF0ZVJlZigpO1xuICBlbnRyeSA9IGNyZWF0ZVJlZigpO1xuXG4gIGZvY3VzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmVudHJ5LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuZW50cnkuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfaGFzQ3VzdG9tVmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXMgPiAwICYmXG4gICAgICB0aGlzLnN0YXRlLmVudHJ5VmFsdWUubGVuZ3RoID49IHRoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXMgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5pbmRleE9mKHRoaXMuc3RhdGUuZW50cnlWYWx1ZSkgPCAwXG4gICAgKTtcbiAgfTtcblxuICBfZ2V0Q3VzdG9tVmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkgPyB0aGlzLnN0YXRlLmVudHJ5VmFsdWUgOiBudWxsO1xuICB9O1xuXG4gIF9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RDb21wb25lbnRcbiAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLmZpeGVkT3B0aW9uc31cbiAgICAgICAgb3B0aW9ucz17XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXhWaXNpYmxlXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5zbGljZSgwLCB0aGlzLnByb3BzLm1heFZpc2libGUpXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1xuICAgICAgICB9XG4gICAgICAgIGFyZVJlc3VsdHNUcnVuY2F0ZWQ9e1xuICAgICAgICAgIHRoaXMucHJvcHMubWF4VmlzaWJsZSAmJiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXhWaXNpYmxlXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U9e3RoaXMucHJvcHMucmVzdWx0c1RydW5jYXRlZE1lc3NhZ2V9XG4gICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX29uT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVzPXt0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzfVxuICAgICAgICBjdXN0b21WYWx1ZT17dGhpcy5fZ2V0Q3VzdG9tVmFsdWUoKX1cbiAgICAgICAgY3VzdG9tQ2xhc3Nlcz17dGhpcy5wcm9wcy5jdXN0b21DbGFzc2VzfVxuICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudH1cbiAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5jdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50fVxuICAgICAgICBzZWxlY3Rpb25JbmRleD17dGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleH1cbiAgICAgICAgZGVmYXVsdENsYXNzTmFtZXM9e3RoaXMucHJvcHMuZGVmYXVsdENsYXNzTmFtZXN9XG4gICAgICAgIGRpc3BsYXlPcHRpb249e3RoaXMucHJvcHMuZGlzcGxheU9wdGlvbn1cbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zfVxuICAgICAgICBsaWdodD17dGhpcy5wcm9wcy5saWdodH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4O1xuXG4gICAgaWYgKHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5lbnRyeVZhbHVlO1xuICAgICAgfVxuICAgICAgaW5kZXgtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0ZpeGVkT3B0aW9ucygpKSB7XG4gICAgICByZXR1cm4gaW5kZXggPCB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgICAgPyB0aGlzLnByb3BzLmZpeGVkT3B0aW9uc1tpbmRleF1cbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbaW5kZXggLSB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGhdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzW2luZGV4XTtcbiAgfVxuXG4gIF9vbk9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICAvLyByZXNldCBlbnRyeSBpbnB1dFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IGdldE9wdGlvbnNGb3JWYWx1ZSgnJywgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSksXG4gICAgICAgIHNlbGVjdGlvbjogJycsXG4gICAgICAgIGVudHJ5VmFsdWU6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKG9wdGlvbiwgZXZlbnQpO1xuICB9O1xuXG4gIC8vIHVzZSAoKSA9PiB7fSB0byBhdm9pZCBiaW5kaW5nICd0aGlzJ1xuICBfb25UZXh0RW50cnlVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbnRyeS5jdXJyZW50LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VhcmNoUmVzdWx0czogZ2V0T3B0aW9uc0ZvclZhbHVlKHZhbHVlLCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSxcbiAgICAgICAgc2VsZWN0aW9uOiAnJyxcbiAgICAgICAgZW50cnlWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfb25FbnRlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb25PcHRpb25TZWxlY3RlZChzZWxlY3Rpb24sIGV2ZW50KTtcbiAgfTtcblxuICBfb25Fc2NhcGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb25JbmRleDogbnVsbFxuICAgIH0pO1xuICB9O1xuXG4gIF9vblRhYiA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGxldCBvcHRpb24gPSBzZWxlY3Rpb25cbiAgICAgID8gc2VsZWN0aW9uXG4gICAgICA6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwXG4gICAgICA/IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1swXVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKG9wdGlvbiA9PT0gbnVsbCAmJiB0aGlzLl9oYXNDdXN0b21WYWx1ZSgpKSB7XG4gICAgICBvcHRpb24gPSB0aGlzLl9nZXRDdXN0b21WYWx1ZSgpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vbk9wdGlvblNlbGVjdGVkKG9wdGlvbiwgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBldmVudE1hcCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB7fTtcblxuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfVVBdID0gdGhpcy5uYXZVcDtcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX0RPV05dID0gdGhpcy5uYXZEb3duO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfUkVUVVJOXSA9IGV2ZW50c1tLZXlFdmVudC5ET01fVktfRU5URVJdID0gdGhpcy5fb25FbnRlcjtcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX0VTQ0FQRV0gPSB0aGlzLl9vbkVzY2FwZTtcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX1RBQl0gPSB0aGlzLl9vblRhYjtcblxuICAgIHJldHVybiBldmVudHM7XG4gIH07XG5cbiAgX25hdiA9IGRlbHRhID0+IHtcbiAgICBpZiAoIXRoaXMuX2hhc0hpbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbmV3SW5kZXggPVxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleCA9PT0gbnVsbFxuICAgICAgICA/IGRlbHRhID09PSAxXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBkZWx0YVxuICAgICAgICA6IHRoaXMuc3RhdGUuc2VsZWN0aW9uSW5kZXggKyBkZWx0YTtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5wcm9wcy5tYXhWaXNpYmxlXG4gICAgICA/IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5zbGljZSgwLCB0aGlzLnByb3BzLm1heFZpc2libGUpLmxlbmd0aFxuICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoO1xuICAgIGlmICh0aGlzLl9oYXNDdXN0b21WYWx1ZSgpKSB7XG4gICAgICBsZW5ndGggKz0gMTtcbiAgICB9XG5cbiAgICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCArPSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgIG5ld0luZGV4IC09IGxlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpb25JbmRleDogbmV3SW5kZXh9KTtcbiAgfTtcblxuICBuYXZEb3duID0gKCkgPT4ge1xuICAgIHRoaXMuX25hdigxKTtcbiAgfTtcblxuICBuYXZVcCA9ICgpID0+IHtcbiAgICB0aGlzLl9uYXYoLTEpO1xuICB9O1xuXG4gIF9vbkNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25UZXh0RW50cnlVcGRhdGVkKCk7XG4gIH07XG5cbiAgX29uS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBlbGVtZW50cywgZG9uJ3QgcGVyZm9ybSBzZWxlY3RvciBuYXZpZ2F0aW9uLlxuICAgIC8vIEp1c3QgcGFzcyB0aGlzIHVwIHRvIHRoZSB1cHN0cmVhbSBvbktleWRvd24gaGFuZGxlci5cbiAgICAvLyBBbHNvIHNraXAgaWYgdGhlIHVzZXIgaXMgcHJlc3NpbmcgdGhlIHNoaWZ0IGtleSwgc2luY2Ugbm9uZSBvZiBvdXIgaGFuZGxlcnMgYXJlIGxvb2tpbmcgZm9yIHNoaWZ0XG4gICAgaWYgKCF0aGlzLl9oYXNIaW50KCkgfHwgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZXZlbnRNYXAoKVtldmVudC5rZXlDb2RlXTtcblxuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgcHJvcGFnYXRlIHRoZSBrZXlzdHJva2UgYmFjayB0byB0aGUgRE9NL2Jyb3dzZXJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIF9vbkZvY3VzID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzRm9jdXNlZDogdHJ1ZX0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBfb25CbHVyID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzRm9jdXNlZDogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW5kZXJIaWRkZW5JbnB1dCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3Rpb259IC8+O1xuICB9XG5cbiAgX2hhc0hpbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwIHx8IHRoaXMuX2hhc0N1c3RvbVZhbHVlKCk7XG4gIH1cblxuICBfaGFzRml4ZWRPcHRpb25zKCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZml4ZWRPcHRpb25zKSAmJiB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGg7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRDbGFzc2VzID0ge307XG4gICAgaW5wdXRDbGFzc2VzW3RoaXMucHJvcHMuY3VzdG9tQ2xhc3Nlcy5pbnB1dF0gPSBCb29sZWFuKHRoaXMucHJvcHMuY3VzdG9tQ2xhc3Nlcy5pbnB1dCk7XG4gICAgY29uc3QgaW5wdXRDbGFzc0xpc3QgPSBjbGFzc05hbWVzKGlucHV0Q2xhc3Nlcyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0RFRkFVTFRfQ0xBU1NdOiB0aGlzLnByb3BzLmRlZmF1bHRDbGFzc05hbWVzXG4gICAgfTtcbiAgICBjbGFzc2VzW3RoaXMucHJvcHMuY2xhc3NOYW1lXSA9IEJvb2xlYW4odGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZXMoY2xhc3Nlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFR5cGVhaGVhZFdyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc0xpc3R9XG4gICAgICAgIHJlZj17dGhpcy5yb290fVxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBvbktleURvd249e3RoaXMuX29uS2V5RG93bn1cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5wcm9wcy5vbktleVByZXNzfVxuICAgICAgICBvbktleVVwPXt0aGlzLnByb3BzLm9uS2V5VXB9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuX29uRm9jdXN9XG4gICAgICAgIGxpZ2h0PXt0aGlzLnByb3BzLmxpZ2h0fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5fcmVuZGVySGlkZGVuSW5wdXQoKX1cbiAgICAgICAge3RoaXMucHJvcHMuc2VhcmNoYWJsZSA/IChcbiAgICAgICAgICA8SW5wdXRCb3g+XG4gICAgICAgICAgICA8VHlwZWFoZWFkSW5wdXRcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmVudHJ5fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzTGlzdH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW50cnlWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuX29uQmx1cn1cbiAgICAgICAgICAgICAgbGlnaHQ9e3RoaXMucHJvcHMubGlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0SWNvbj5cbiAgICAgICAgICAgICAgPHRoaXMucHJvcHMuaW5wdXRJY29uIGhlaWdodD1cIjE4cHhcIiAvPlxuICAgICAgICAgICAgPC9JbnB1dEljb24+XG4gICAgICAgICAgPC9JbnB1dEJveD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHt0aGlzLl9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMoKX1cbiAgICAgIDwvVHlwZWFoZWFkV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbnBvbHlmaWxsKFR5cGVhaGVhZCk7XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVhaGVhZDtcbiJdfQ==