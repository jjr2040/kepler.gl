"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _layerTypeDropdownList = _interopRequireDefault(require("./layer-type-dropdown-list"));

var _layerTypeListItem = _interopRequireDefault(require("./layer-type-list-item"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject());

LayerTypeSelectorFactory.deps = [_layerTypeListItem["default"], _layerTypeDropdownList["default"]];

var getDisplayOption = function getDisplayOption(op) {
  return op.label;
};

var getOptionValue = function getOptionValue(op) {
  return op.id;
};

function LayerTypeSelectorFactory(LayerTypeListItem, LayerTypeDropdownList) {
  var LayerTypeSelector = function LayerTypeSelector(_ref) {
    var layer = _ref.layer,
        layerTypeOptions = _ref.layerTypeOptions,
        onSelect = _ref.onSelect,
        datasets = _ref.datasets;
    var hasData = (0, _react.useMemo)(function () {
      return Boolean(Object.keys(datasets).length);
    }, [datasets]);
    var typeOptions = (0, _react.useMemo)(function () {
      return layerTypeOptions.map(function (op) {
        return _objectSpread(_objectSpread({}, op), {}, {
          disabled: !hasData && op.requireData !== false
        });
      });
    }, [hasData, layerTypeOptions]);
    var selectedItems = (0, _react.useMemo)(function () {
      return typeOptions.find(function (op) {
        return op.id === layer.type;
      });
    }, [typeOptions, layer.type]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(StyledLayerTypeSelector, {
      className: "layer-config__type"
    }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      selectedItems: selectedItems,
      options: typeOptions,
      multiSelect: false,
      placeholder: "placeholder.selectType",
      onChange: onSelect,
      getOptionValue: getOptionValue,
      filterOption: "label",
      displayOption: getDisplayOption,
      DropDownLineItemRenderComponent: LayerTypeListItem,
      DropDownRenderComponent: LayerTypeDropdownList
    })));
  };

  LayerTypeSelector.propTypes = propTypes;
  return (0, _styledComponents.withTheme)(LayerTypeSelector);
}

var _default = LayerTypeSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJsYXllciIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvblNlbGVjdCIsImZ1bmMiLCJTdHlsZWRMYXllclR5cGVTZWxlY3RvciIsInN0eWxlZCIsImRpdiIsIkxheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSIsImRlcHMiLCJMYXllclR5cGVMaXN0SXRlbUZhY3RvcnkiLCJMYXllclR5cGVEcm9wZG93bkxpc3RGYWN0b3J5IiwiZ2V0RGlzcGxheU9wdGlvbiIsIm9wIiwibGFiZWwiLCJnZXRPcHRpb25WYWx1ZSIsImlkIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJMYXllclR5cGVEcm9wZG93bkxpc3QiLCJMYXllclR5cGVTZWxlY3RvciIsImxheWVyVHlwZU9wdGlvbnMiLCJkYXRhc2V0cyIsImhhc0RhdGEiLCJCb29sZWFuIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInR5cGVPcHRpb25zIiwibWFwIiwiZGlzYWJsZWQiLCJyZXF1aXJlRGF0YSIsInNlbGVjdGVkSXRlbXMiLCJmaW5kIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRWhCQyxFQUFBQSxRQUFRLEVBQUVILHNCQUFVSSxJQUFWLENBQWVGO0FBRlQsQ0FBbEI7O0FBS0EsSUFBTUcsdUJBQXVCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUE3Qjs7QUFNQUMsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLDZCQUFELEVBQTJCQyxpQ0FBM0IsQ0FBaEM7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxFQUFFO0FBQUEsU0FBSUEsRUFBRSxDQUFDQyxLQUFQO0FBQUEsQ0FBM0I7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBRixFQUFFO0FBQUEsU0FBSUEsRUFBRSxDQUFDRyxFQUFQO0FBQUEsQ0FBekI7O0FBRUEsU0FBU1Isd0JBQVQsQ0FBa0NTLGlCQUFsQyxFQUFxREMscUJBQXJELEVBQTRFO0FBQzFFLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBbUQ7QUFBQSxRQUFqRHBCLEtBQWlELFFBQWpEQSxLQUFpRDtBQUFBLFFBQTFDcUIsZ0JBQTBDLFFBQTFDQSxnQkFBMEM7QUFBQSxRQUF4QmpCLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLFFBQWRrQixRQUFjLFFBQWRBLFFBQWM7QUFDM0UsUUFBTUMsT0FBTyxHQUFHLG9CQUFRO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosUUFBWixFQUFzQkssTUFBdkIsQ0FBYjtBQUFBLEtBQVIsRUFBcUQsQ0FBQ0wsUUFBRCxDQUFyRCxDQUFoQjtBQUNBLFFBQU1NLFdBQVcsR0FBRyxvQkFDbEI7QUFBQSxhQUNFUCxnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQWYsRUFBRTtBQUFBLCtDQUNsQkEsRUFEa0I7QUFFckJnQixVQUFBQSxRQUFRLEVBQUUsQ0FBQ1AsT0FBRCxJQUFZVCxFQUFFLENBQUNpQixXQUFILEtBQW1CO0FBRnBCO0FBQUEsT0FBdkIsQ0FERjtBQUFBLEtBRGtCLEVBTWxCLENBQUNSLE9BQUQsRUFBVUYsZ0JBQVYsQ0FOa0IsQ0FBcEI7QUFTQSxRQUFNVyxhQUFhLEdBQUcsb0JBQVE7QUFBQSxhQUFNSixXQUFXLENBQUNLLElBQVosQ0FBaUIsVUFBQW5CLEVBQUU7QUFBQSxlQUFJQSxFQUFFLENBQUNHLEVBQUgsS0FBVWpCLEtBQUssQ0FBQ2tDLElBQXBCO0FBQUEsT0FBbkIsQ0FBTjtBQUFBLEtBQVIsRUFBNEQsQ0FDaEZOLFdBRGdGLEVBRWhGNUIsS0FBSyxDQUFDa0MsSUFGMEUsQ0FBNUQsQ0FBdEI7QUFLQSx3QkFDRSxnQ0FBQyxtQ0FBRCxxQkFDRSxnQ0FBQyx1QkFBRDtBQUF5QixNQUFBLFNBQVMsRUFBQztBQUFuQyxvQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLE1BQUEsYUFBYSxFQUFFRixhQURqQjtBQUVFLE1BQUEsT0FBTyxFQUFFSixXQUZYO0FBR0UsTUFBQSxXQUFXLEVBQUUsS0FIZjtBQUlFLE1BQUEsV0FBVyxFQUFDLHdCQUpkO0FBS0UsTUFBQSxRQUFRLEVBQUV4QixRQUxaO0FBTUUsTUFBQSxjQUFjLEVBQUVZLGNBTmxCO0FBT0UsTUFBQSxZQUFZLEVBQUMsT0FQZjtBQVFFLE1BQUEsYUFBYSxFQUFFSCxnQkFSakI7QUFTRSxNQUFBLCtCQUErQixFQUFFSyxpQkFUbkM7QUFVRSxNQUFBLHVCQUF1QixFQUFFQztBQVYzQixNQURGLENBREYsQ0FERjtBQWtCRCxHQWxDRDs7QUFvQ0FDLEVBQUFBLGlCQUFpQixDQUFDckIsU0FBbEIsR0FBOEJBLFNBQTlCO0FBRUEsU0FBTyxpQ0FBVXFCLGlCQUFWLENBQVA7QUFDRDs7ZUFFY1gsd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTGF5ZXJUeXBlRHJvcGRvd25MaXN0RmFjdG9yeSBmcm9tICcuL2xheWVyLXR5cGUtZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQgTGF5ZXJUeXBlTGlzdEl0ZW1GYWN0b3J5IGZyb20gJy4vbGF5ZXItdHlwZS1saXN0LWl0ZW0nO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgU3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxuICAuaXRlbS1zZWxlY3RvciAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAycHg7XG4gIH1cbmA7XG5cbkxheWVyVHlwZVNlbGVjdG9yRmFjdG9yeS5kZXBzID0gW0xheWVyVHlwZUxpc3RJdGVtRmFjdG9yeSwgTGF5ZXJUeXBlRHJvcGRvd25MaXN0RmFjdG9yeV07XG5cbmNvbnN0IGdldERpc3BsYXlPcHRpb24gPSBvcCA9PiBvcC5sYWJlbDtcbmNvbnN0IGdldE9wdGlvblZhbHVlID0gb3AgPT4gb3AuaWQ7XG5cbmZ1bmN0aW9uIExheWVyVHlwZVNlbGVjdG9yRmFjdG9yeShMYXllclR5cGVMaXN0SXRlbSwgTGF5ZXJUeXBlRHJvcGRvd25MaXN0KSB7XG4gIGNvbnN0IExheWVyVHlwZVNlbGVjdG9yID0gKHtsYXllciwgbGF5ZXJUeXBlT3B0aW9ucywgb25TZWxlY3QsIGRhdGFzZXRzfSkgPT4ge1xuICAgIGNvbnN0IGhhc0RhdGEgPSB1c2VNZW1vKCgpID0+IEJvb2xlYW4oT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCksIFtkYXRhc2V0c10pO1xuICAgIGNvbnN0IHR5cGVPcHRpb25zID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIGxheWVyVHlwZU9wdGlvbnMubWFwKG9wID0+ICh7XG4gICAgICAgICAgLi4ub3AsXG4gICAgICAgICAgZGlzYWJsZWQ6ICFoYXNEYXRhICYmIG9wLnJlcXVpcmVEYXRhICE9PSBmYWxzZVxuICAgICAgICB9KSksXG4gICAgICBbaGFzRGF0YSwgbGF5ZXJUeXBlT3B0aW9uc11cbiAgICApO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHVzZU1lbW8oKCkgPT4gdHlwZU9wdGlvbnMuZmluZChvcCA9PiBvcC5pZCA9PT0gbGF5ZXIudHlwZSksIFtcbiAgICAgIHR5cGVPcHRpb25zLFxuICAgICAgbGF5ZXIudHlwZVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICA8U3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX190eXBlXCI+XG4gICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRJdGVtc31cbiAgICAgICAgICAgIG9wdGlvbnM9e3R5cGVPcHRpb25zfVxuICAgICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci5zZWxlY3RUeXBlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtnZXRPcHRpb25WYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj1cImxhYmVsXCJcbiAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2dldERpc3BsYXlPcHRpb259XG4gICAgICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVMaXN0SXRlbX1cbiAgICAgICAgICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50PXtMYXllclR5cGVEcm9wZG93bkxpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRMYXllclR5cGVTZWxlY3Rvcj5cbiAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIExheWVyVHlwZVNlbGVjdG9yLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuICByZXR1cm4gd2l0aFRoZW1lKExheWVyVHlwZVNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJUeXBlU2VsZWN0b3JGYWN0b3J5O1xuIl19