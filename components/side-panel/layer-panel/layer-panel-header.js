"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTitleSectionFactory = LayerTitleSectionFactory;
exports["default"] = exports.LayerLabelEditor = exports.DragHandle = exports.defaultProps = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

var _localization = require("../../../localization");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 4px;\n\n    .layer__title__type {\n      color: ", ";\n      font-size: 10px;\n      line-height: 12px;\n      letter-spacing: 0.37px;\n      text-transform: capitalize;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required
  layerId: _propTypes["default"].string.isRequired,
  isVisible: _propTypes["default"].bool.isRequired,
  onToggleVisibility: _propTypes["default"].func.isRequired,
  onUpdateLayerLabel: _propTypes["default"].func.isRequired,
  onToggleEnableConfig: _propTypes["default"].func.isRequired,
  onRemoveLayer: _propTypes["default"].func.isRequired,
  isConfigActive: _propTypes["default"].bool.isRequired,
  // optional
  showRemoveLayer: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layerType: _propTypes["default"].string,
  isDragNDropEnabled: _propTypes["default"].bool,
  labelRCGColorValues: _propTypes["default"].arrayOf(_propTypes["default"].number)
};
var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
exports.defaultProps = defaultProps;
var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.layerPanelHeaderHeight;
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject3());

var StyledDragHandle = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.textColorHl;
});

var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});
exports.DragHandle = DragHandle;

var LayerLabelEditor = function LayerLabelEditor(_ref2) {
  var layerId = _ref2.layerId,
      label = _ref2.label,
      onEdit = _ref2.onEdit;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: onEdit,
    id: "".concat(layerId, ":input-layer-label")
  });
};

exports.LayerLabelEditor = LayerLabelEditor;

function LayerTitleSectionFactory() {
  var StyledLayerTitleSection = _styledComponents["default"].div(_templateObject5(), function (props) {
    return props.theme.subtextColor;
  });

  var LayerTitleSection = function LayerTitleSection(_ref3) {
    var layerType = _ref3.layerType,
        layerId = _ref3.layerId,
        label = _ref3.label,
        onUpdateLayerLabel = _ref3.onUpdateLayerLabel;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerTitleSection, {
      className: "layer__title"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(LayerLabelEditor, {
      layerId: layerId,
      label: label,
      onEdit: onUpdateLayerLabel
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer__title__type"
    }, layerType && /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "layer.type.".concat(layerType.toLowerCase())
    }))));
  };

  return LayerTitleSection;
}

LayerPanelHeaderFactory.deps = [LayerTitleSectionFactory, _panelHeaderAction["default"]];
var defaultActionIcons = {
  remove: _icons.Trash,
  visible: _icons.EyeSeen,
  hidden: _icons.EyeUnseen,
  enableConfig: _icons.ArrowDown
};

function LayerPanelHeaderFactory(LayerTitleSection, PanelHeaderAction) {
  var LayerPanelHeader = function LayerPanelHeader(_ref4) {
    var isConfigActive = _ref4.isConfigActive,
        isDragNDropEnabled = _ref4.isDragNDropEnabled,
        isVisible = _ref4.isVisible,
        label = _ref4.label,
        layerId = _ref4.layerId,
        layerType = _ref4.layerType,
        labelRCGColorValues = _ref4.labelRCGColorValues,
        onToggleVisibility = _ref4.onToggleVisibility,
        onUpdateLayerLabel = _ref4.onUpdateLayerLabel,
        onToggleEnableConfig = _ref4.onToggleEnableConfig,
        onRemoveLayer = _ref4.onRemoveLayer,
        showRemoveLayer = _ref4.showRemoveLayer,
        _ref4$actionIcons = _ref4.actionIcons,
        actionIcons = _ref4$actionIcons === void 0 ? defaultActionIcons : _ref4$actionIcons;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isOpen = _useState2[0],
        setOpen = _useState2[1];

    var toggleLayerConfigurator = function toggleLayerConfigurator(e) {
      setOpen(!isOpen);
      onToggleEnableConfig(e);
    };

    return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
      className: (0, _classnames["default"])('layer-panel__header', {
        'sort--handle': !isConfigActive
      }),
      active: isConfigActive,
      labelRCGColorValues: labelRCGColorValues,
      onClick: toggleLayerConfigurator
    }, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
      className: "layer-panel__header__content"
    }, isDragNDropEnabled && /*#__PURE__*/_react["default"].createElement(DragHandle, {
      className: "layer__drag-handle"
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
      height: "20px"
    })), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
      layerId: layerId,
      label: label,
      onUpdateLayerLabel: onUpdateLayerLabel,
      layerType: layerType
    })), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
      className: "layer-panel__header__actions"
    }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__remove-layer",
      id: layerId,
      tooltip: 'tooltip.removeLayer',
      onClick: onRemoveLayer,
      tooltipType: "error",
      IconComponent: actionIcons.remove
    }) : null, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__visibility-toggle",
      id: layerId,
      tooltip: isVisible ? 'tooltip.hideLayer' : 'tooltip.showLayer',
      onClick: onToggleVisibility,
      IconComponent: isVisible ? actionIcons.visible : actionIcons.hidden
    }), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: (0, _classnames["default"])('layer__enable-config ', {
        'is-open': isOpen
      }),
      id: layerId,
      tooltip: 'tooltip.layerSettings',
      onClick: toggleLayerConfigurator,
      IconComponent: actionIcons.enableConfig
    })));
  };

  LayerPanelHeader.propTypes = propTypes;
  LayerPanelHeader.defaultProps = defaultProps;
  return LayerPanelHeader;
}

var _default = LayerPanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImxheWVySWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaXNWaXNpYmxlIiwiYm9vbCIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsImZ1bmMiLCJvblVwZGF0ZUxheWVyTGFiZWwiLCJvblRvZ2dsZUVuYWJsZUNvbmZpZyIsIm9uUmVtb3ZlTGF5ZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsInNob3dSZW1vdmVMYXllciIsImxhYmVsIiwibGF5ZXJUeXBlIiwiaXNEcmFnTkRyb3BFbmFibGVkIiwibGFiZWxSQ0dDb2xvclZhbHVlcyIsImFycmF5T2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJTdHlsZWRMYXllclBhbmVsSGVhZGVyIiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJwcm9wcyIsInRoZW1lIiwibGF5ZXJQYW5lbEhlYWRlckhlaWdodCIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiSGVhZGVyTGFiZWxTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGV4dENvbG9yIiwiSGVhZGVyQWN0aW9uU2VjdGlvbiIsIlN0eWxlZERyYWdIYW5kbGUiLCJ0ZXh0Q29sb3JIbCIsIkRyYWdIYW5kbGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIkxheWVyTGFiZWxFZGl0b3IiLCJvbkVkaXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiTGF5ZXJUaXRsZVNlY3Rpb25GYWN0b3J5IiwiU3R5bGVkTGF5ZXJUaXRsZVNlY3Rpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMYXllclRpdGxlU2VjdGlvbiIsInRvTG93ZXJDYXNlIiwiTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJkZXBzIiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiZGVmYXVsdEFjdGlvbkljb25zIiwicmVtb3ZlIiwiVHJhc2giLCJ2aXNpYmxlIiwiRXllU2VlbiIsImhpZGRlbiIsIkV5ZVVuc2VlbiIsImVuYWJsZUNvbmZpZyIsIkFycm93RG93biIsIlBhbmVsSGVhZGVyQWN0aW9uIiwiTGF5ZXJQYW5lbEhlYWRlciIsImFjdGlvbkljb25zIiwiaXNPcGVuIiwic2V0T3BlbiIsInRvZ2dsZUxheWVyQ29uZmlndXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlY7QUFHaEJDLEVBQUFBLFNBQVMsRUFBRUgsc0JBQVVJLElBQVYsQ0FBZUYsVUFIVjtBQUloQkcsRUFBQUEsa0JBQWtCLEVBQUVMLHNCQUFVTSxJQUFWLENBQWVKLFVBSm5CO0FBS2hCSyxFQUFBQSxrQkFBa0IsRUFBRVAsc0JBQVVNLElBQVYsQ0FBZUosVUFMbkI7QUFNaEJNLEVBQUFBLG9CQUFvQixFQUFFUixzQkFBVU0sSUFBVixDQUFlSixVQU5yQjtBQU9oQk8sRUFBQUEsYUFBYSxFQUFFVCxzQkFBVU0sSUFBVixDQUFlSixVQVBkO0FBUWhCUSxFQUFBQSxjQUFjLEVBQUVWLHNCQUFVSSxJQUFWLENBQWVGLFVBUmY7QUFVaEI7QUFDQVMsRUFBQUEsZUFBZSxFQUFFWCxzQkFBVUksSUFYWDtBQVloQlEsRUFBQUEsS0FBSyxFQUFFWixzQkFBVUMsTUFaRDtBQWFoQlksRUFBQUEsU0FBUyxFQUFFYixzQkFBVUMsTUFiTDtBQWNoQmEsRUFBQUEsa0JBQWtCLEVBQUVkLHNCQUFVSSxJQWRkO0FBZWhCVyxFQUFBQSxtQkFBbUIsRUFBRWYsc0JBQVVnQixPQUFWLENBQWtCaEIsc0JBQVVpQixNQUE1QjtBQWZMLENBQWxCO0FBa0JPLElBQU1D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LEVBQW9DO0FBQzdDLG1CQUFXTztBQURrQyxPQUFwQyxDQURiO0FBSUUsTUFBQSxFQUFFLEVBQUU1RCxPQUpOO0FBS0UsTUFBQSxPQUFPLEVBQUUsdUJBTFg7QUFNRSxNQUFBLE9BQU8sRUFBRThELHVCQU5YO0FBT0UsTUFBQSxhQUFhLEVBQUVILFdBQVcsQ0FBQ0o7QUFQN0IsTUFsQkYsQ0FyQkYsQ0FERjtBQW9ERCxHQXhFRDs7QUEwRUFHLEVBQUFBLGdCQUFnQixDQUFDM0QsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0EyRCxFQUFBQSxnQkFBZ0IsQ0FBQ3ZDLFlBQWpCLEdBQWdDQSxZQUFoQztBQUVBLFNBQU91QyxnQkFBUDtBQUNEOztlQUVjYix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7c29ydGFibGVIYW5kbGV9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7QXJyb3dEb3duLCBFeWVTZWVuLCBFeWVVbnNlZW4sIFRyYXNoLCBWZXJ0RG90c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQge0lubGluZUlucHV0LCBTdHlsZWRQYW5lbEhlYWRlcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8vIHJlcXVpcmVkXG4gIGxheWVySWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvblRvZ2dsZVZpc2liaWxpdHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uVXBkYXRlTGF5ZXJMYWJlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVFbmFibGVDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uUmVtb3ZlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQ29uZmlnQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8vIG9wdGlvbmFsXG4gIHNob3dSZW1vdmVMYXllcjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXllclR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsUkNHQ29sb3JWYWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBpc0RyYWdORHJvcEVuYWJsZWQ6IHRydWUsXG4gIHNob3dSZW1vdmVMYXllcjogdHJ1ZVxufTtcblxuY29uc3QgU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclBhbmVsSGVhZGVySGVpZ2h0fXB4O1xuICAubGF5ZXJfX3JlbW92ZS1sYXllciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcblxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubGF5ZXJfX3JlbW92ZS1sYXllciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyTGFiZWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbmA7XG5cbmNvbnN0IEhlYWRlckFjdGlvblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgU3R5bGVkRHJhZ0hhbmRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEcmFnSGFuZGxlID0gc29ydGFibGVIYW5kbGUoKHtjbGFzc05hbWUsIGNoaWxkcmVufSkgPT4gKFxuICA8U3R5bGVkRHJhZ0hhbmRsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkRHJhZ0hhbmRsZT5cbikpO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJMYWJlbEVkaXRvciA9ICh7bGF5ZXJJZCwgbGFiZWwsIG9uRWRpdH0pID0+IChcbiAgPElubGluZUlucHV0XG4gICAgdHlwZT1cInRleHRcIlxuICAgIGNsYXNzTmFtZT1cImxheWVyX190aXRsZV9fZWRpdG9yXCJcbiAgICB2YWx1ZT17bGFiZWx9XG4gICAgb25DbGljaz17ZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH19XG4gICAgb25DaGFuZ2U9e29uRWRpdH1cbiAgICBpZD17YCR7bGF5ZXJJZH06aW5wdXQtbGF5ZXItbGFiZWxgfVxuICAvPlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyVGl0bGVTZWN0aW9uRmFjdG9yeSgpIHtcbiAgY29uc3QgU3R5bGVkTGF5ZXJUaXRsZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG5cbiAgICAubGF5ZXJfX3RpdGxlX190eXBlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM3cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IExheWVyVGl0bGVTZWN0aW9uID0gKHtsYXllclR5cGUsIGxheWVySWQsIGxhYmVsLCBvblVwZGF0ZUxheWVyTGFiZWx9KSA9PiAoXG4gICAgPFN0eWxlZExheWVyVGl0bGVTZWN0aW9uIGNsYXNzTmFtZT1cImxheWVyX190aXRsZVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPExheWVyTGFiZWxFZGl0b3IgbGF5ZXJJZD17bGF5ZXJJZH0gbGFiZWw9e2xhYmVsfSBvbkVkaXQ9e29uVXBkYXRlTGF5ZXJMYWJlbH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllcl9fdGl0bGVfX3R5cGVcIj5cbiAgICAgICAgICB7bGF5ZXJUeXBlICYmIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtgbGF5ZXIudHlwZS4ke2xheWVyVHlwZS50b0xvd2VyQ2FzZSgpfWB9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkTGF5ZXJUaXRsZVNlY3Rpb24+XG4gICk7XG4gIHJldHVybiBMYXllclRpdGxlU2VjdGlvbjtcbn1cblxuTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtMYXllclRpdGxlU2VjdGlvbkZhY3RvcnksIFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeV07XG5jb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gIHJlbW92ZTogVHJhc2gsXG4gIHZpc2libGU6IEV5ZVNlZW4sXG4gIGhpZGRlbjogRXllVW5zZWVuLFxuICBlbmFibGVDb25maWc6IEFycm93RG93blxufTtcbmZ1bmN0aW9uIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5KExheWVyVGl0bGVTZWN0aW9uLCBQYW5lbEhlYWRlckFjdGlvbikge1xuICBjb25zdCBMYXllclBhbmVsSGVhZGVyID0gKHtcbiAgICBpc0NvbmZpZ0FjdGl2ZSxcbiAgICBpc0RyYWdORHJvcEVuYWJsZWQsXG4gICAgaXNWaXNpYmxlLFxuICAgIGxhYmVsLFxuICAgIGxheWVySWQsXG4gICAgbGF5ZXJUeXBlLFxuICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXMsXG4gICAgb25Ub2dnbGVWaXNpYmlsaXR5LFxuICAgIG9uVXBkYXRlTGF5ZXJMYWJlbCxcbiAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZyxcbiAgICBvblJlbW92ZUxheWVyLFxuICAgIHNob3dSZW1vdmVMYXllcixcbiAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTGF5ZXJDb25maWd1cmF0b3IgPSBlID0+IHtcbiAgICAgIHNldE9wZW4oIWlzT3Blbik7XG4gICAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZyhlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJQYW5lbEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheWVyLXBhbmVsX19oZWFkZXInLCB7XG4gICAgICAgICAgJ3NvcnQtLWhhbmRsZSc6ICFpc0NvbmZpZ0FjdGl2ZVxuICAgICAgICB9KX1cbiAgICAgICAgYWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgbGFiZWxSQ0dDb2xvclZhbHVlcz17bGFiZWxSQ0dDb2xvclZhbHVlc31cbiAgICAgICAgb25DbGljaz17dG9nZ2xlTGF5ZXJDb25maWd1cmF0b3J9XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXJMYWJlbFNlY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXItcGFuZWxfX2hlYWRlcl9fY29udGVudFwiPlxuICAgICAgICAgIHtpc0RyYWdORHJvcEVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgPERyYWdIYW5kbGUgY2xhc3NOYW1lPVwibGF5ZXJfX2RyYWctaGFuZGxlXCI+XG4gICAgICAgICAgICAgIDxWZXJ0RG90cyBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgIDwvRHJhZ0hhbmRsZT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxMYXllclRpdGxlU2VjdGlvblxuICAgICAgICAgICAgbGF5ZXJJZD17bGF5ZXJJZH1cbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIG9uVXBkYXRlTGF5ZXJMYWJlbD17b25VcGRhdGVMYXllckxhYmVsfVxuICAgICAgICAgICAgbGF5ZXJUeXBlPXtsYXllclR5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkZXJMYWJlbFNlY3Rpb24+XG4gICAgICAgIDxIZWFkZXJBY3Rpb25TZWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLXBhbmVsX19oZWFkZXJfX2FjdGlvbnNcIj5cbiAgICAgICAgICB7c2hvd1JlbW92ZUxheWVyID8gKFxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyX19yZW1vdmUtbGF5ZXJcIlxuICAgICAgICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAucmVtb3ZlTGF5ZXInfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZUxheWVyfVxuICAgICAgICAgICAgICB0b29sdGlwVHlwZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMucmVtb3ZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyX192aXNpYmlsaXR5LXRvZ2dsZVwiXG4gICAgICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICd0b29sdGlwLmhpZGVMYXllcicgOiAndG9vbHRpcC5zaG93TGF5ZXInfVxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17aXNWaXNpYmxlID8gYWN0aW9uSWNvbnMudmlzaWJsZSA6IGFjdGlvbkljb25zLmhpZGRlbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXllcl9fZW5hYmxlLWNvbmZpZyAnLCB7XG4gICAgICAgICAgICAgICdpcy1vcGVuJzogaXNPcGVuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAubGF5ZXJTZXR0aW5ncyd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMYXllckNvbmZpZ3VyYXRvcn1cbiAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWRlckFjdGlvblNlY3Rpb24+XG4gICAgICA8L1N0eWxlZExheWVyUGFuZWxIZWFkZXI+XG4gICAgKTtcbiAgfTtcblxuICBMYXllclBhbmVsSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiAgTGF5ZXJQYW5lbEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgcmV0dXJuIExheWVyUGFuZWxIZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxIZWFkZXJGYWN0b3J5O1xuIl19