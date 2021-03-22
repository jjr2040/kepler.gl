"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _ = require("../..");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _visStateMerger = require("../../../reducers/vis-state-merger");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 75%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 25%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ColumnRow = _styledComponents["default"].div(_templateObject());

var ColumnName = _styledComponents["default"].div(_templateObject2());

var ColumnSelect = _styledComponents["default"].div(_templateObject3());

ColumnSelectorFactory.deps = [_fieldSelector["default"]];

function ColumnSelectorFactory(FieldSelector) {
  var ColumnSelector = function ColumnSelector(_ref) {
    var column = _ref.column,
        columns = _ref.columns,
        label = _ref.label,
        allFields = _ref.allFields,
        onSelect = _ref.onSelect,
        fieldPairs = _ref.fieldPairs;
    return /*#__PURE__*/_react["default"].createElement(ColumnRow, {
      className: "layer-config__column__selector"
    }, /*#__PURE__*/_react["default"].createElement(ColumnName, {
      className: "layer-config__column__name"
    }, /*#__PURE__*/_react["default"].createElement(_.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "columns.".concat(label)
    })), !column.optional ? /*#__PURE__*/_react["default"].createElement(_.PanelLabel, null, "  *") : null), /*#__PURE__*/_react["default"].createElement(ColumnSelect, {
      className: "layer-config__column__select"
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      suggested: fieldPairs,
      error: !(0, _visStateMerger.validateColumn)(column, columns, allFields),
      fields: allFields,
      value: column.value,
      erasable: Boolean(column.optional),
      onSelect: onSelect
    })));
  };

  return ColumnSelector;
}

var _default = ColumnSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sdW1uLXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIkNvbHVtblJvdyIsInN0eWxlZCIsImRpdiIsIkNvbHVtbk5hbWUiLCJDb2x1bW5TZWxlY3QiLCJDb2x1bW5TZWxlY3RvckZhY3RvcnkiLCJkZXBzIiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJGaWVsZFNlbGVjdG9yIiwiQ29sdW1uU2VsZWN0b3IiLCJjb2x1bW4iLCJjb2x1bW5zIiwibGFiZWwiLCJhbGxGaWVsZHMiLCJvblNlbGVjdCIsImZpZWxkUGFpcnMiLCJvcHRpb25hbCIsInZhbHVlIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixtQkFBZjs7QUFNQSxJQUFNQyxVQUFVLEdBQUdGLDZCQUFPQyxHQUFWLG9CQUFoQjs7QUFJQSxJQUFNRSxZQUFZLEdBQUdILDZCQUFPQyxHQUFWLG9CQUFsQjs7QUFJQUcscUJBQXFCLENBQUNDLElBQXRCLEdBQTZCLENBQUNDLHlCQUFELENBQTdCOztBQUVBLFNBQVNGLHFCQUFULENBQStCRyxhQUEvQixFQUE4QztBQUM1QyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsUUFBbUJDLEtBQW5CLFFBQW1CQSxLQUFuQjtBQUFBLFFBQTBCQyxTQUExQixRQUEwQkEsU0FBMUI7QUFBQSxRQUFxQ0MsUUFBckMsUUFBcUNBLFFBQXJDO0FBQUEsUUFBK0NDLFVBQS9DLFFBQStDQSxVQUEvQztBQUFBLHdCQUNyQixnQ0FBQyxTQUFEO0FBQVcsTUFBQSxTQUFTLEVBQUM7QUFBckIsb0JBQ0UsZ0NBQUMsVUFBRDtBQUFZLE1BQUEsU0FBUyxFQUFDO0FBQXRCLG9CQUNFLGdDQUFDLFlBQUQscUJBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLG9CQUFhSCxLQUFiO0FBQXBCLE1BREYsQ0FERixFQUlHLENBQUNGLE1BQU0sQ0FBQ00sUUFBUixnQkFBbUIsZ0NBQUMsWUFBRCxjQUFuQixHQUFzRCxJQUp6RCxDQURGLGVBT0UsZ0NBQUMsWUFBRDtBQUFjLE1BQUEsU0FBUyxFQUFDO0FBQXhCLG9CQUNFLGdDQUFDLGFBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRUQsVUFEYjtBQUVFLE1BQUEsS0FBSyxFQUFFLENBQUMsb0NBQWVMLE1BQWYsRUFBdUJDLE9BQXZCLEVBQWdDRSxTQUFoQyxDQUZWO0FBR0UsTUFBQSxNQUFNLEVBQUVBLFNBSFY7QUFJRSxNQUFBLEtBQUssRUFBRUgsTUFBTSxDQUFDTyxLQUpoQjtBQUtFLE1BQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNSLE1BQU0sQ0FBQ00sUUFBUixDQUxuQjtBQU1FLE1BQUEsUUFBUSxFQUFFRjtBQU5aLE1BREYsQ0FQRixDQURxQjtBQUFBLEdBQXZCOztBQW9CQSxTQUFPTCxjQUFQO0FBQ0Q7O2VBRWNKLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtQYW5lbExhYmVsfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgRmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IHt2YWxpZGF0ZUNvbHVtbn0gZnJvbSAncmVkdWNlcnMvdmlzLXN0YXRlLW1lcmdlcic7XG5cbmNvbnN0IENvbHVtblJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENvbHVtbk5hbWUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjUlO1xuYDtcblxuY29uc3QgQ29sdW1uU2VsZWN0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDc1JTtcbmA7XG5cbkNvbHVtblNlbGVjdG9yRmFjdG9yeS5kZXBzID0gW0ZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcblxuZnVuY3Rpb24gQ29sdW1uU2VsZWN0b3JGYWN0b3J5KEZpZWxkU2VsZWN0b3IpIHtcbiAgY29uc3QgQ29sdW1uU2VsZWN0b3IgPSAoe2NvbHVtbiwgY29sdW1ucywgbGFiZWwsIGFsbEZpZWxkcywgb25TZWxlY3QsIGZpZWxkUGFpcnN9KSA9PiAoXG4gICAgPENvbHVtblJvdyBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtbl9fc2VsZWN0b3JcIj5cbiAgICAgIDxDb2x1bW5OYW1lIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19uYW1lXCI+XG4gICAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtgY29sdW1ucy4ke2xhYmVsfWB9IC8+XG4gICAgICAgIDwvUGFuZWxMYWJlbD5cbiAgICAgICAgeyFjb2x1bW4ub3B0aW9uYWwgPyA8UGFuZWxMYWJlbD57YCAgKmB9PC9QYW5lbExhYmVsPiA6IG51bGx9XG4gICAgICA8L0NvbHVtbk5hbWU+XG4gICAgICA8Q29sdW1uU2VsZWN0IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RcIj5cbiAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICBzdWdnZXN0ZWQ9e2ZpZWxkUGFpcnN9XG4gICAgICAgICAgZXJyb3I9eyF2YWxpZGF0ZUNvbHVtbihjb2x1bW4sIGNvbHVtbnMsIGFsbEZpZWxkcyl9XG4gICAgICAgICAgZmllbGRzPXthbGxGaWVsZHN9XG4gICAgICAgICAgdmFsdWU9e2NvbHVtbi52YWx1ZX1cbiAgICAgICAgICBlcmFzYWJsZT17Qm9vbGVhbihjb2x1bW4ub3B0aW9uYWwpfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uU2VsZWN0PlxuICAgIDwvQ29sdW1uUm93PlxuICApO1xuICByZXR1cm4gQ29sdW1uU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblNlbGVjdG9yRmFjdG9yeTtcbiJdfQ==