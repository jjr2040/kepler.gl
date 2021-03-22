"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDataButtonFactory = AddDataButtonFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSortableHoc = require("react-sortable-hoc");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

var _dataUtils = require("../../utils/data-utils");

var _layerPanel = _interopRequireDefault(require("./layer-panel/layer-panel"));

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _icons = require("../common/icons");

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: ", ";\n\n  &.sorting {\n    pointer-events: none;\n  }\n\n  &.sorting-layers .layer-panel__header {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n    .layer__drag-handle {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending,
      intl = _ref.intl;
  var labeledLayerBlendings = Object.keys(_defaultSettings.LAYER_BLENDINGS).reduce(function (acc, current) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[current].label
    }), current));
  }, {});
  var onChange = (0, _react.useCallback)(function (blending) {
    return updateLayerBlending(labeledLayerBlendings[blending]);
  }, [updateLayerBlending, labeledLayerBlendings]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "layerBlending.title"
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[layerBlending].label
    }),
    options: Object.keys(labeledLayerBlendings),
    multiSelect: false,
    searchable: false,
    onChange: onChange
  }));
}; // make sure the element is always visible while is being dragged
// item being dragged is appended in body, here to reset its global style


var SortableStyledItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.textColorHl;
});

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      className: "add-data-button",
      onClick: onClick,
      isInactive: !isInactive,
      width: "105px",
      secondary: true
    }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
      height: "12px"
    }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'layerManager.addData'
    }));
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel["default"], _sourceDataCatalog["default"]];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref3) {
    var children = _ref3.children,
        isSorting = _ref3.isSorting;
    return /*#__PURE__*/_react["default"].createElement(SortableStyledItem, {
      className: (0, _classnames["default"])('sortable-layer-items', {
        sorting: isSorting
      })
    }, children);
  });
  var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  });

  var LayerManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    var _super = _createSuper(LayerManager);

    function LayerManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSorting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerClassSelector", function (props) {
        return props.layerClasses;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerTypeOptionsSelector", (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon,
            requireData: layer.requireData
          };
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addEmptyNewLayer", function () {
        _this.props.addLayer();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSort", function (_ref5) {
        var oldIndex = _ref5.oldIndex,
            newIndex = _ref5.newIndex;

        _this.props.updateLayerOrder((0, _dataUtils.arrayMove)(_this.props.layerOrder, oldIndex, newIndex));

        _this.setState({
          isSorting: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
        _this.setState({
          isSorting: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateBeforeSortStart", function (_ref6) {
        var index = _ref6.index;
        // if layer config is active, close it
        var _this$props = _this.props,
            layerOrder = _this$props.layerOrder,
            layers = _this$props.layers,
            layerConfigChange = _this$props.layerConfigChange;
        var layerIdx = layerOrder[index];

        if (layers[layerIdx].config.isConfigActive) {
          layerConfigChange(layers[layerIdx], {
            isConfigActive: false
          });
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            layers = _this$props2.layers,
            datasets = _this$props2.datasets,
            layerOrder = _this$props2.layerOrder,
            openModal = _this$props2.openModal,
            intl = _this$props2.intl;
        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);
        var layerActions = {
          layerColorUIChange: this.props.layerColorUIChange,
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          layerTextLabelChange: this.props.layerTextLabelChange,
          removeLayer: this.props.removeLayer
        };
        var panelProps = {
          datasets: datasets,
          openModal: openModal,
          layerTypeOptions: layerTypeOptions
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "layer-manager"
        }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable,
          removeDataset: this.props.removeDataset,
          showDeleteDataset: true
        }), /*#__PURE__*/_react["default"].createElement(AddDataButton, {
          onClick: this.props.showAddDataModal,
          isInactive: !defaultDataset
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(SortableContainer, {
          onSortEnd: this._handleSort,
          onSortStart: this._onSortStart,
          updateBeforeSortStart: this._updateBeforeSortStart,
          lockAxis: "y",
          helperClass: "sorting-layers",
          useDragHandle: true
        }, layerOrder.map(function (layerIdx, index) {
          return !layers[layerIdx].config.hidden && /*#__PURE__*/_react["default"].createElement(SortableItem, {
            key: "layer-".concat(layerIdx),
            index: index,
            isSorting: _this2.state.isSorting
          }, /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
            sortData: layerIdx,
            key: layers[layerIdx].id,
            idx: layerIdx,
            layer: layers[layerIdx]
          })));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, defaultDataset ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          className: "add-layer-button",
          onClick: this._addEmptyNewLayer,
          width: "105px"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'layerManager.addLayer'
        })) : null), /*#__PURE__*/_react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: this.props.updateLayerBlending,
          intl: intl
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerManager, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    // functions
    addLayer: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTextLabelChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    showDatasetTable: _propTypes["default"].func.isRequired,
    updateLayerBlending: _propTypes["default"].func.isRequired,
    updateLayerOrder: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(LayerManager);
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJMYXllckJsZW5kaW5nU2VsZWN0b3IiLCJsYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsImludGwiLCJsYWJlbGVkTGF5ZXJCbGVuZGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiTEFZRVJfQkxFTkRJTkdTIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJibGVuZGluZyIsIlNvcnRhYmxlU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bldyYXBwZXJaIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRDb2xvckhsIiwiQWRkRGF0YUJ1dHRvbkZhY3RvcnkiLCJBZGREYXRhQnV0dG9uIiwib25DbGljayIsImlzSW5hY3RpdmUiLCJMYXllck1hbmFnZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiTGF5ZXJQYW5lbCIsIlNvdXJjZURhdGFDYXRhbG9nIiwiU29ydGFibGVJdGVtIiwiY2hpbGRyZW4iLCJpc1NvcnRpbmciLCJzb3J0aW5nIiwiU29ydGFibGVDb250YWluZXIiLCJMYXllck1hbmFnZXIiLCJsYXllckNsYXNzZXMiLCJsYXllckNsYXNzU2VsZWN0b3IiLCJtYXAiLCJrZXkiLCJsYXllciIsIm5hbWUiLCJpY29uIiwibGF5ZXJJY29uIiwicmVxdWlyZURhdGEiLCJhZGRMYXllciIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJ1cGRhdGVMYXllck9yZGVyIiwibGF5ZXJPcmRlciIsInNldFN0YXRlIiwiaW5kZXgiLCJsYXllcnMiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVySWR4IiwiY29uZmlnIiwiaXNDb25maWdBY3RpdmUiLCJkYXRhc2V0cyIsIm9wZW5Nb2RhbCIsImRlZmF1bHREYXRhc2V0IiwibGF5ZXJUeXBlT3B0aW9ucyIsImxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciIsImxheWVyQWN0aW9ucyIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJyZW1vdmVMYXllciIsInBhbmVsUHJvcHMiLCJzaG93RGF0YXNldFRhYmxlIiwicmVtb3ZlRGF0YXNldCIsInNob3dBZGREYXRhTW9kYWwiLCJfaGFuZGxlU29ydCIsIl9vblNvcnRTdGFydCIsIl91cGRhdGVCZWZvcmVTb3J0U3RhcnQiLCJoaWRkZW4iLCJzdGF0ZSIsIl9hZGRFbXB0eU5ld0xheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFnRDtBQUFBLE1BQTlDQyxhQUE4QyxRQUE5Q0EsYUFBOEM7QUFBQSxNQUEvQkMsbUJBQStCLFFBQS9CQSxtQkFBK0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDNUUsTUFBTUMscUJBQXFCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxnQ0FBWixFQUE2QkMsTUFBN0IsQ0FDNUIsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOO0FB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QVYsQ0FBZUosVUFacEI7QUFhakJ4QixJQUFBQSxTQUFTLEVBQUVzQixzQkFBVU0sSUFBVixDQUFlSixVQWJUO0FBY2pCZCxJQUFBQSxXQUFXLEVBQUVZLHNCQUFVTSxJQUFWLENBQWVKLFVBZFg7QUFlakJYLElBQUFBLGFBQWEsRUFBRVMsc0JBQVVNLElBQVYsQ0FBZUosVUFmYjtBQWdCakJaLElBQUFBLGdCQUFnQixFQUFFVSxzQkFBVU0sSUFBVixDQUFlSixVQWhCaEI7QUFpQmpCeEYsSUFBQUEsbUJBQW1CLEVBQUVzRixzQkFBVU0sSUFBVixDQUFlSixVQWpCbkI7QUFrQmpCbEMsSUFBQUEsZ0JBQWdCLEVBQUVnQyxzQkFBVU0sSUFBVixDQUFlSjtBQWxCaEIsR0FoQm9EO0FBeUp6RSxTQUFPLDJCQUFXL0MsWUFBWCxDQUFQO0FBQ0Q7O2VBRWNYLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUVsZW1lbnR9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7aW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQge2FycmF5TW92ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmltcG9ydCBMYXllclBhbmVsRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsJztcbmltcG9ydCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkgZnJvbSAnLi9jb21tb24vc291cmNlLWRhdGEtY2F0YWxvZyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBQYW5lbExhYmVsLFxuICBTaWRlUGFuZWxEaXZpZGVyLFxuICBTaWRlUGFuZWxTZWN0aW9uXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtMQVlFUl9CTEVORElOR1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTGF5ZXJCbGVuZGluZ1NlbGVjdG9yID0gKHtsYXllckJsZW5kaW5nLCB1cGRhdGVMYXllckJsZW5kaW5nLCBpbnRsfSkgPT4ge1xuICBjb25zdCBsYWJlbGVkTGF5ZXJCbGVuZGluZ3MgPSBPYmplY3Qua2V5cyhMQVlFUl9CTEVORElOR1MpLnJlZHVjZShcbiAgICAoYWNjLCBjdXJyZW50KSA9PiAoe1xuICAgICAgLi4uYWNjLFxuICAgICAgW2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IExBWUVSX0JMRU5ESU5HU1tjdXJyZW50XS5sYWJlbH0pXTogY3VycmVudFxuICAgIH0pLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhibGVuZGluZyA9PiB1cGRhdGVMYXllckJsZW5kaW5nKGxhYmVsZWRMYXllckJsZW5kaW5nc1tibGVuZGluZ10pLCBbXG4gICAgdXBkYXRlTGF5ZXJCbGVuZGluZyxcbiAgICBsYWJlbGVkTGF5ZXJCbGVuZGluZ3NcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImxheWVyQmxlbmRpbmcudGl0bGVcIiAvPlxuICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBMQVlFUl9CTEVORElOR1NbbGF5ZXJCbGVuZGluZ10ubGFiZWx9KX1cbiAgICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMobGFiZWxlZExheWVyQmxlbmRpbmdzKX1cbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuXG4vLyBtYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgYWx3YXlzIHZpc2libGUgd2hpbGUgaXMgYmVpbmcgZHJhZ2dlZFxuLy8gaXRlbSBiZWluZyBkcmFnZ2VkIGlzIGFwcGVuZGVkIGluIGJvZHksIGhlcmUgdG8gcmVzZXQgaXRzIGdsb2JhbCBzdHlsZVxuY29uc3QgU29ydGFibGVTdHlsZWRJdGVtID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bldyYXBwZXJaICsgMX07XG5cbiAgJi5zb3J0aW5nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICYuc29ydGluZy1sYXllcnMgLmxheWVyLXBhbmVsX19oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHR9O1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodH07XG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGREYXRhQnV0dG9uRmFjdG9yeSgpIHtcbiAgY29uc3QgQWRkRGF0YUJ1dHRvbiA9ICh7b25DbGljaywgaXNJbmFjdGl2ZX0pID0+IChcbiAgICA8QnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJhZGQtZGF0YS1idXR0b25cIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGlzSW5hY3RpdmU9eyFpc0luYWN0aXZlfVxuICAgICAgd2lkdGg9XCIxMDVweFwiXG4gICAgICBzZWNvbmRhcnlcbiAgICA+XG4gICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllck1hbmFnZXIuYWRkRGF0YSd9IC8+XG4gICAgPC9CdXR0b24+XG4gICk7XG5cbiAgcmV0dXJuIEFkZERhdGFCdXR0b247XG59XG5cbkxheWVyTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtBZGREYXRhQnV0dG9uRmFjdG9yeSwgTGF5ZXJQYW5lbEZhY3RvcnksIFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeV07XG5cbmZ1bmN0aW9uIExheWVyTWFuYWdlckZhY3RvcnkoQWRkRGF0YUJ1dHRvbiwgTGF5ZXJQYW5lbCwgU291cmNlRGF0YUNhdGFsb2cpIHtcbiAgLy8gQnkgd3JhcHBpbmcgbGF5ZXIgcGFuZWwgdXNpbmcgYSBzb3J0YWJsZSBlbGVtZW50IHdlIGRvbid0IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBkcmFnIGFuZCBkcm9wIGxvZ2ljIGludG8gdGhlIHBhbmVsIGl0c2VsZjtcbiAgLy8gRGV2ZWxvcGVycyBjYW4gcHJvdmlkZSBhbnkgbGF5ZXIgcGFuZWwgaW1wbGVtZW50YXRpb24gYW5kIGl0IHdpbGwgc3RpbGwgYmUgc29ydGFibGVcbiAgY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KCh7Y2hpbGRyZW4sIGlzU29ydGluZ30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlU3R5bGVkSXRlbSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3NvcnRhYmxlLWxheWVyLWl0ZW1zJywge3NvcnRpbmc6IGlzU29ydGluZ30pfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Tb3J0YWJsZVN0eWxlZEl0ZW0+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgU29ydGFibGVDb250YWluZXIgPSBzb3J0YWJsZUNvbnRhaW5lcigoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XG4gIH0pO1xuXG4gIGNsYXNzIExheWVyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIC8vIGZ1bmN0aW9uc1xuICAgICAgYWRkTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZURhdGFzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93RGF0YXNldFRhYmxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuICAgIHN0YXRlID0ge1xuICAgICAgaXNTb3J0aW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBsYXllckNsYXNzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllckNsYXNzZXM7XG4gICAgbGF5ZXJUeXBlT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5sYXllckNsYXNzU2VsZWN0b3IsIGxheWVyQ2xhc3NlcyA9PlxuICAgICAgT2JqZWN0LmtleXMobGF5ZXJDbGFzc2VzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW2tleV0oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIGxhYmVsOiBsYXllci5uYW1lLFxuICAgICAgICAgIGljb246IGxheWVyLmxheWVySWNvbixcbiAgICAgICAgICByZXF1aXJlRGF0YTogbGF5ZXIucmVxdWlyZURhdGFcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIF9hZGRFbXB0eU5ld0xheWVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5hZGRMYXllcigpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlU29ydCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVMYXllck9yZGVyKGFycmF5TW92ZSh0aGlzLnByb3BzLmxheWVyT3JkZXIsIG9sZEluZGV4LCBuZXdJbmRleCkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTb3J0aW5nOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBfb25Tb3J0U3RhcnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NvcnRpbmc6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgX3VwZGF0ZUJlZm9yZVNvcnRTdGFydCA9ICh7aW5kZXh9KSA9PiB7XG4gICAgICAvLyBpZiBsYXllciBjb25maWcgaXMgYWN0aXZlLCBjbG9zZSBpdFxuICAgICAgY29uc3Qge2xheWVyT3JkZXIsIGxheWVycywgbGF5ZXJDb25maWdDaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGxheWVySWR4ID0gbGF5ZXJPcmRlcltpbmRleF07XG4gICAgICBpZiAobGF5ZXJzW2xheWVySWR4XS5jb25maWcuaXNDb25maWdBY3RpdmUpIHtcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2UobGF5ZXJzW2xheWVySWR4XSwge2lzQ29uZmlnQWN0aXZlOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXJzLCBkYXRhc2V0cywgbGF5ZXJPcmRlciwgb3Blbk1vZGFsLCBpbnRsfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKVswXTtcbiAgICAgIGNvbnN0IGxheWVyVHlwZU9wdGlvbnMgPSB0aGlzLmxheWVyVHlwZU9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xuICAgICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJDb2xvclVJQ2hhbmdlLFxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxuICAgICAgICByZW1vdmVMYXllcjogdGhpcy5wcm9wcy5yZW1vdmVMYXllclxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGFuZWxQcm9wcyA9IHtcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgbGF5ZXJUeXBlT3B0aW9uc1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1tYW5hZ2VyXCI+XG4gICAgICAgICAgPFNvdXJjZURhdGFDYXRhbG9nXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICByZW1vdmVEYXRhc2V0PXt0aGlzLnByb3BzLnJlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICBzaG93RGVsZXRlRGF0YXNldFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFkZERhdGFCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkRGF0YU1vZGFsfSBpc0luYWN0aXZlPXshZGVmYXVsdERhdGFzZXR9IC8+XG4gICAgICAgICAgPFNpZGVQYW5lbERpdmlkZXIgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDxTb3J0YWJsZUNvbnRhaW5lclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMuX2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgIG9uU29ydFN0YXJ0PXt0aGlzLl9vblNvcnRTdGFydH1cbiAgICAgICAgICAgICAgdXBkYXRlQmVmb3JlU29ydFN0YXJ0PXt0aGlzLl91cGRhdGVCZWZvcmVTb3J0U3RhcnR9XG4gICAgICAgICAgICAgIGxvY2tBeGlzPVwieVwiXG4gICAgICAgICAgICAgIGhlbHBlckNsYXNzPVwic29ydGluZy1sYXllcnNcIlxuICAgICAgICAgICAgICB1c2VEcmFnSGFuZGxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYXllck9yZGVyLm1hcChcbiAgICAgICAgICAgICAgICAobGF5ZXJJZHgsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgIWxheWVyc1tsYXllcklkeF0uY29uZmlnLmhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BsYXllci0ke2xheWVySWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGlzU29ydGluZz17dGhpcy5zdGF0ZS5pc1NvcnRpbmd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJQYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnBhbmVsUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydERhdGE9e2xheWVySWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYXllcnNbbGF5ZXJJZHhdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWR4PXtsYXllcklkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcnNbbGF5ZXJJZHhdfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU29ydGFibGVJdGVtPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Tb3J0YWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICB7ZGVmYXVsdERhdGFzZXQgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLWxheWVyLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuX2FkZEVtcHR5TmV3TGF5ZXJ9IHdpZHRoPVwiMTA1cHhcIj5cbiAgICAgICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbGF5ZXJNYW5hZ2VyLmFkZExheWVyJ30gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPExheWVyQmxlbmRpbmdTZWxlY3RvclxuICAgICAgICAgICAgbGF5ZXJCbGVuZGluZz17dGhpcy5wcm9wcy5sYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZz17dGhpcy5wcm9wcy51cGRhdGVMYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgaW50bD17aW50bH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmplY3RJbnRsKExheWVyTWFuYWdlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTWFuYWdlckZhY3Rvcnk7XG4iXX0=