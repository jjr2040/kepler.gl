"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldListItemFactoryFactory = FieldListItemFactoryFactory;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _dropdownList = require("./item-selector/dropdown-list");

var _utils = require("../../utils/utils");

var _dataUtils = require("../../utils/data-utils");

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  line-height: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 ", "px 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fieldTokenRightMargin;
});

var StyledFieldListItem = _styledComponents["default"].div(_templateObject2());

FieldListItemFactoryFactory.deps = [_fieldToken["default"]]; // custom list Item

function FieldListItemFactoryFactory(FieldToken) {
  var FieldListItemFactory = function FieldListItemFactory() {
    var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var FieldListItem = function FieldListItem(_ref) {
      var value = _ref.value,
          _ref$displayOption = _ref.displayOption,
          displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
      return /*#__PURE__*/_react["default"].createElement(StyledFieldListItem, {
        className: "field-selector_list-item"
      }, showToken ? /*#__PURE__*/_react["default"].createElement(StyledToken, null, /*#__PURE__*/_react["default"].createElement(FieldToken, {
        type: value.type
      })) : null, /*#__PURE__*/_react["default"].createElement("span", {
        className: _dropdownList.classList.listItemAnchor
      }, displayOption(value)));
    };

    return FieldListItem;
  };

  return FieldListItemFactory;
}

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].shape({
  name: _propTypes["default"].string,
  format: _propTypes["default"].string
})), _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  tableFieldIndex: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

function FieldSelectorFactory(FieldListItemFactory) {
  var FieldSelector = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FieldSelector, _Component);

    var _super = _createSuper(FieldSelector);

    function FieldSelector() {
      var _this;

      (0, _classCallCheck2["default"])(this, FieldSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredFieldsSelector", function (props) {
        return props.fields.filter(function (field) {
          return !(0, _utils.toArray)(props.value).find(function (d) {
            return d.name ? d.name === field.name : d === field.name;
          });
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
        return props.value;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
        return props.filterFieldTypes;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
        return props.showToken;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
        return (0, _utils.toArray)(value).map(function (d) {
          return fields.find(function (f) {
            return (0, _dataUtils.notNullorUndefined)(d) && d.name ? d.name === defaultDisplayOption(f) : d === defaultDisplayOption(f);
          });
        }).filter(function (d) {
          return d;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.filteredFieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
        if (!filterFieldTypes) {
          return fields;
        }

        var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
        return fields.filter(function (f) {
          return filters.includes(f.type);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
      return _this;
    }

    (0, _createClass2["default"])(FieldSelector, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "field-selector"
        }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
          getOptionValue: function getOptionValue(d) {
            return d;
          },
          closeOnSelect: this.props.closeOnSelect,
          displayOption: defaultDisplayOption,
          filterOption: "name",
          fixedOptions: this.props.suggested,
          inputTheme: this.props.inputTheme,
          size: this.props.size,
          isError: this.props.error,
          selectedItems: this.selectedItemsSelector(this.props),
          erasable: this.props.erasable,
          options: this.fieldOptionsSelector(this.props),
          multiSelect: this.props.multiSelect,
          placeholder: this.props.placeholder,
          placement: this.props.placement,
          onChange: this.props.onSelect,
          DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
          DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null,
          CustomChickletComponent: this.props.CustomChickletComponent
        }));
      }
    }]);
    return FieldSelector;
  }(_react.Component);

  (0, _defineProperty2["default"])(FieldSelector, "propTypes", {
    fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
    onSelect: _propTypes["default"].func.isRequired,
    placement: _propTypes["default"].string,
    value: FieldType,
    filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
    inputTheme: _propTypes["default"].string,
    placeholder: _propTypes["default"].string,
    erasable: _propTypes["default"].bool,
    error: _propTypes["default"].bool,
    multiSelect: _propTypes["default"].bool,
    closeOnSelect: _propTypes["default"].bool,
    showToken: _propTypes["default"].bool,
    suggested: _propTypes["default"].arrayOf(_propTypes["default"].any),
    CustomChickletComponent: _propTypes["default"].func
  });
  (0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
    erasable: true,
    error: false,
    fields: [],
    onSelect: function onSelect() {},
    placement: 'bottom',
    value: null,
    multiSelect: false,
    closeOnSelect: true,
    showToken: true,
    placeholder: 'placeholder.selectField'
  });
  return FieldSelector;
}

FieldSelectorFactory.deps = [FieldListItemFactoryFactory];
var _default = FieldSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZmllbGRUb2tlblJpZ2h0TWFyZ2luIiwiU3R5bGVkRmllbGRMaXN0SXRlbSIsIkZpZWxkTGlzdEl0ZW1GYWN0b3J5RmFjdG9yeSIsImRlcHMiLCJGaWVsZFRva2VuRmFjdG9yeSIsIkZpZWxkVG9rZW4iLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImZvcm1hdCIsImlkIiwidGFibGVGaWVsZEluZGV4IiwibnVtYmVyIiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJGaWVsZFNlbGVjdG9yIiwiZmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJmaW5kIiwiZmlsdGVyRmllbGRUeXBlcyIsImZpZWxkc1NlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsIm1hcCIsImYiLCJmaWx0ZXJlZEZpZWxkc1NlbGVjdG9yIiwiZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yIiwiZmlsdGVycyIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwic2hvd1Rva2VuU2VsZWN0b3IiLCJjbG9zZU9uU2VsZWN0Iiwic3VnZ2VzdGVkIiwiaW5wdXRUaGVtZSIsInNpemUiLCJlcnJvciIsInNlbGVjdGVkSXRlbXNTZWxlY3RvciIsImVyYXNhYmxlIiwiZmllbGRPcHRpb25zU2VsZWN0b3IiLCJtdWx0aVNlbGVjdCIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50Iiwib25TZWxlY3QiLCJmaWVsZExpc3RJdGVtU2VsZWN0b3IiLCJDdXN0b21DaGlja2xldENvbXBvbmVudCIsIkNvbXBvbmVudCIsImFycmF5IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsSUFBTjtBQUFBLENBQTlCOztBQUVBLElBQU1DLFdBQVcsR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxxQkFBaEI7QUFBQSxDQUZGLENBQWpCOztBQUlBLElBQU1DLG1CQUFtQixHQUFHTCw2QkFBT0MsR0FBVixvQkFBekI7O0FBSUFLLDJCQUEyQixDQUFDQyxJQUE1QixHQUFtQyxDQUFDQyxzQkFBRCxDQUFuQyxDLENBQ0E7O0FBQ08sU0FBU0YsMkJBQVQsQ0FBcUNHLFVBQXJDLEVBQWlEO0FBQ3RELE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBc0I7QUFBQSxRQUFyQkMsU0FBcUIsdUVBQVQsSUFBUzs7QUFDakQsUUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFVBQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLG9DQUFTQyxhQUFUO0FBQUEsVUFBU0EsYUFBVCxtQ0FBeUJsQixvQkFBekI7QUFBQSwwQkFDcEIsZ0NBQUMsbUJBQUQ7QUFBcUIsUUFBQSxTQUFTLEVBQUM7QUFBL0IsU0FDR2UsU0FBUyxnQkFDUixnQ0FBQyxXQUFELHFCQUNFLGdDQUFDLFVBQUQ7QUFBWSxRQUFBLElBQUksRUFBRUUsS0FBSyxDQUFDRTtBQUF4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akJrQyxJQUFBQSxXQUFXLEVBQUVwQyxzQkFBVUUsTUFQTjtBQVFqQitCLElBQUFBLFFBQVEsRUFBRWpDLHNCQUFVNkMsSUFSSDtBQVNqQmQsSUFBQUEsS0FBSyxFQUFFL0Isc0JBQVU2QyxJQVRBO0FBVWpCVixJQUFBQSxXQUFXLEVBQUVuQyxzQkFBVTZDLElBVk47QUFXakJsQixJQUFBQSxhQUFhLEVBQUUzQixzQkFBVTZDLElBWFI7QUFZakJ0RCxJQUFBQSxTQUFTLEVBQUVTLHNCQUFVNkMsSUFaSjtBQWFqQmpCLElBQUFBLFNBQVMsRUFBRTVCLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVThDLEdBQTVCLENBYk07QUFjakJOLElBQUFBLHVCQUF1QixFQUFFeEMsc0JBQVUyQztBQWRsQixHQUY2QjtBQUFBLG1DQUM1Q2pDLGFBRDRDLGtCQW1CMUI7QUFDcEJ1QixJQUFBQSxRQUFRLEVBQUUsSUFEVTtBQUVwQkYsSUFBQUEsS0FBSyxFQUFFLEtBRmE7QUFHcEJwQixJQUFBQSxNQUFNLEVBQUUsRUFIWTtBQUlwQjJCLElBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSkU7QUFLcEJELElBQUFBLFNBQVMsRUFBRSxRQUxTO0FBTXBCNUMsSUFBQUEsS0FBSyxFQUFFLElBTmE7QUFPcEIwQyxJQUFBQSxXQUFXLEVBQUUsS0FQTztBQVFwQlIsSUFBQUEsYUFBYSxFQUFFLElBUks7QUFTcEJwQyxJQUFBQSxTQUFTLEVBQUUsSUFUUztBQVVwQjZDLElBQUFBLFdBQVcsRUFBRTtBQVZPLEdBbkIwQjtBQWtHbEQsU0FBTzFCLGFBQVA7QUFDRDs7QUFFREQsb0JBQW9CLENBQUN0QixJQUFyQixHQUE0QixDQUFDRCwyQkFBRCxDQUE1QjtlQUNldUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHt0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgRmllbGRUb2tlbkZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL2ZpZWxkLXRva2VuJztcblxuY29uc3QgZGVmYXVsdERpc3BsYXlPcHRpb24gPSBkID0+IGQubmFtZTtcblxuY29uc3QgU3R5bGVkVG9rZW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZpZWxkVG9rZW5SaWdodE1hcmdpbn1weCAwIDA7XG5gO1xuY29uc3QgU3R5bGVkRmllbGRMaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGxpbmUtaGVpZ2h0OiAwO1xuYDtcblxuRmllbGRMaXN0SXRlbUZhY3RvcnlGYWN0b3J5LmRlcHMgPSBbRmllbGRUb2tlbkZhY3RvcnldO1xuLy8gY3VzdG9tIGxpc3QgSXRlbVxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkTGlzdEl0ZW1GYWN0b3J5RmFjdG9yeShGaWVsZFRva2VuKSB7XG4gIGNvbnN0IEZpZWxkTGlzdEl0ZW1GYWN0b3J5ID0gKHNob3dUb2tlbiA9IHRydWUpID0+IHtcbiAgICBjb25zdCBGaWVsZExpc3RJdGVtID0gKHt2YWx1ZSwgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5T3B0aW9ufSkgPT4gKFxuICAgICAgPFN0eWxlZEZpZWxkTGlzdEl0ZW0gY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JfbGlzdC1pdGVtXCI+XG4gICAgICAgIHtzaG93VG9rZW4gPyAoXG4gICAgICAgICAgPFN0eWxlZFRva2VuPlxuICAgICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dmFsdWUudHlwZX0gLz5cbiAgICAgICAgICA8L1N0eWxlZFRva2VuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XG4gICAgICA8L1N0eWxlZEZpZWxkTGlzdEl0ZW0+XG4gICAgKTtcbiAgICByZXR1cm4gRmllbGRMaXN0SXRlbTtcbiAgfTtcbiAgcmV0dXJuIEZpZWxkTGlzdEl0ZW1GYWN0b3J5O1xufVxuXG5jb25zdCBTdWdnZXN0ZWRGaWVsZEhlYWRlciA9ICgpID0+IDxkaXY+U3VnZ2VzdGVkIEZpZWxkPC9kaXY+O1xuXG5jb25zdCBGaWVsZFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgKSxcbiAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsZUZpZWxkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxuICB9KVxuXSk7XG5cbmZ1bmN0aW9uIEZpZWxkU2VsZWN0b3JGYWN0b3J5KEZpZWxkTGlzdEl0ZW1GYWN0b3J5KSB7XG4gIGNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWVsZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmFycmF5T2YoRmllbGRUeXBlKV0pLFxuICAgICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogRmllbGRUeXBlLFxuICAgICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNob3dUb2tlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzdWdnZXN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBlcmFzYWJsZTogdHJ1ZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGZpZWxkczogW10sXG4gICAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgICAgc2hvd1Rva2VuOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlci5zZWxlY3RGaWVsZCdcbiAgICB9O1xuXG4gICAgZmllbGRzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWVsZHM7XG4gICAgZmlsdGVyZWRGaWVsZHNTZWxlY3RvciA9IHByb3BzID0+XG4gICAgICBwcm9wcy5maWVsZHMuZmlsdGVyKFxuICAgICAgICBmaWVsZCA9PlxuICAgICAgICAgICF0b0FycmF5KHByb3BzLnZhbHVlKS5maW5kKGQgPT4gKGQubmFtZSA/IGQubmFtZSA9PT0gZmllbGQubmFtZSA6IGQgPT09IGZpZWxkLm5hbWUpKVxuICAgICAgKTtcbiAgICB2YWx1ZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudmFsdWU7XG4gICAgZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVyRmllbGRUeXBlcztcbiAgICBzaG93VG9rZW5TZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnNob3dUb2tlbjtcblxuICAgIHNlbGVjdGVkSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICAgIHRoaXMudmFsdWVTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIHZhbHVlKSA9PlxuICAgICAgICB0b0FycmF5KHZhbHVlKVxuICAgICAgICAgIC5tYXAoZCA9PlxuICAgICAgICAgICAgZmllbGRzLmZpbmQoZiA9PlxuICAgICAgICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQoZCkgJiYgZC5uYW1lXG4gICAgICAgICAgICAgICAgPyBkLm5hbWUgPT09IGRlZmF1bHREaXNwbGF5T3B0aW9uKGYpXG4gICAgICAgICAgICAgICAgOiBkID09PSBkZWZhdWx0RGlzcGxheU9wdGlvbihmKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICApO1xuXG4gICAgZmllbGRPcHRpb25zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMuZmlsdGVyZWRGaWVsZHNTZWxlY3RvcixcbiAgICAgIHRoaXMuZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yLFxuICAgICAgKGZpZWxkcywgZmlsdGVyRmllbGRUeXBlcykgPT4ge1xuICAgICAgICBpZiAoIWZpbHRlckZpZWxkVHlwZXMpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlckZpZWxkVHlwZXMpID8gZmlsdGVyRmllbGRUeXBlcyA6IFtmaWx0ZXJGaWVsZFR5cGVzXTtcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5maWx0ZXIoZiA9PiBmaWx0ZXJzLmluY2x1ZGVzKGYudHlwZSkpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBmaWVsZExpc3RJdGVtU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLnNob3dUb2tlblNlbGVjdG9yLCBGaWVsZExpc3RJdGVtRmFjdG9yeSk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXNlbGVjdG9yXCI+XG4gICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2QgPT4gZH1cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e3RoaXMucHJvcHMuY2xvc2VPblNlbGVjdH1cbiAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2RlZmF1bHREaXNwbGF5T3B0aW9ufVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPVwibmFtZVwiXG4gICAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuc3VnZ2VzdGVkfVxuICAgICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgICAgc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuICAgICAgICAgICAgaXNFcnJvcj17dGhpcy5wcm9wcy5lcnJvcn1cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMuc2VsZWN0ZWRJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmZpZWxkT3B0aW9uc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgbXVsdGlTZWxlY3Q9e3RoaXMucHJvcHMubXVsdGlTZWxlY3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdH1cbiAgICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e3RoaXMuZmllbGRMaXN0SXRlbVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGVkID8gU3VnZ2VzdGVkRmllbGRIZWFkZXIgOiBudWxsfVxuICAgICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e3RoaXMucHJvcHMuQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gRmllbGRTZWxlY3Rvcjtcbn1cblxuRmllbGRTZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtGaWVsZExpc3RJdGVtRmFjdG9yeUZhY3RvcnldO1xuZXhwb3J0IGRlZmF1bHQgRmllbGRTZWxlY3RvckZhY3Rvcnk7XG4iXX0=