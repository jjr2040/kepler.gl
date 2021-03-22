"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _components = require("./components");

var _defaultSettings = require("../../../constants/default-settings");

var _userGuides = require("../../../constants/user-guides");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _localization = require("../../../localization");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: unset;\n  width: unset;\n  img {\n    width: 180px;\n    height: 120px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  color: ", ";\n  height: ", ";\n  outline: 0;\n  font-size: ", ";\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    outline: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .disclaimer {\n    font-size: ", ";\n    color: ", ";\n    margin-top: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./export-html-map').ExportHtmlMapProps} ExportHtmlMapProps */
var ExportMapStyledExportSection = (0, _styledComponents2["default"])(_styledComponents.StyledExportSection)(_templateObject(), function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputColor;
});

var StyledInput = _styledComponents2["default"].input(_templateObject2(), function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? 'red' : props.theme.titleColorLT;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputFontSize;
});

var BigStyledTile = (0, _styledComponents2["default"])(_styledComponents.StyledType)(_templateObject3());
var exportHtmlPropTypes = {
  options: _propTypes["default"].object,
  onEditUserMapboxAccessToken: _propTypes["default"].func.isRequired
};

function ExportHtmlMapFactory() {
  /**
   * @type {React.FunctionComponent<ExportHtmlMapProps>}
   */
  var ExportHtmlMap = function ExportHtmlMap(_ref) {
    var _ref$onChangeExportMa = _ref.onChangeExportMapHTMLMode,
        onChangeExportMapHTMLMode = _ref$onChangeExportMa === void 0 ? function (mode) {} : _ref$onChangeExportMa,
        _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
        onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? function (token) {} : _ref$onEditUserMapbox,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options,
        intl = _ref.intl;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.selection'
    }))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, {
      className: "export-map-modal__html-options"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(StyledInput, {
      onChange: function onChange(e) {
        return onEditUserMapboxAccessToken(e.target.value);
      },
      type: "text",
      placeholder: intl.formatMessage({
        id: 'modal.exportMap.html.tokenPlaceholder'
      }),
      value: options ? options.userMapboxToken : ''
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "disclaimer"
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenMisuseWarning'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenDisclaimer'
    }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
      href: _userGuides.EXPORT_HTML_MAP_DOC
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenUpdate'
    }))))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeSubtitle1'
    }), /*#__PURE__*/_react["default"].createElement("a", {
      href: _userGuides.EXPORT_HTML_MAP_MODES_DOC
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeSubtitle2'
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, _defaultSettings.EXPORT_HTML_MAP_MODE_OPTIONS.map(function (mode) {
      return /*#__PURE__*/_react["default"].createElement(BigStyledTile, {
        key: mode.id,
        selected: options.mode === mode.id,
        available: mode.available,
        onClick: function onClick() {
          return mode.available && onChangeExportMapHTMLMode(mode.id);
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: mode.url,
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: 'modal.exportMap.html.modeDescription',
        values: {
          mode: intl.formatMessage({
            id: mode.label
          })
        }
      })), options.mode === mode.id && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null));
    }))));
  };

  ExportHtmlMap.propTypes = exportHtmlPropTypes;
  ExportHtmlMap.displayName = 'ExportHtmlMap';
  return (0, _reactIntl.injectIntl)(ExportHtmlMap);
}

var _default = ExportHtmlMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1odG1sLW1hcC5qcyJdLCJuYW1lcyI6WyJFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uIiwiU3R5bGVkRXhwb3J0U2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJpbnB1dEZvbnRTaXplIiwiaW5wdXRDb2xvciIsIlN0eWxlZElucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJpbnB1dFBhZGRpbmciLCJlcnJvciIsInRpdGxlQ29sb3JMVCIsImlucHV0Qm94SGVpZ2h0IiwiQmlnU3R5bGVkVGlsZSIsIlN0eWxlZFR5cGUiLCJleHBvcnRIdG1sUHJvcFR5cGVzIiwib3B0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiRXhwb3J0SHRtbE1hcEZhY3RvcnkiLCJFeHBvcnRIdG1sTWFwIiwib25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSIsIm1vZGUiLCJ0b2tlbiIsImludGwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJ1c2VyTWFwYm94VG9rZW4iLCJFWFBPUlRfSFRNTF9NQVBfRE9DIiwiRVhQT1JUX0hUTUxfTUFQX01PREVTX0RPQyIsIkVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMiLCJtYXAiLCJhdmFpbGFibGUiLCJ1cmwiLCJsYWJlbCIsInByb3BUeXBlcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLDRCQUE0QixHQUFHLG1DQUFPQyxxQ0FBUCxDQUFILG9CQUVqQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxD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SSxDQUFDSSxhQUFMLENBQW1CO0FBQUNDLFlBQUFBLEVBQUUsRUFBRVAsSUFBSSxDQUFDZTtBQUFWLFdBQW5CO0FBQVA7QUFGVixRQURGLENBUEYsRUFhR3hCLE9BQU8sQ0FBQ1MsSUFBUixLQUFpQkEsSUFBSSxDQUFDTyxFQUF0QixpQkFBNEIsZ0NBQUMsMkJBQUQsT0FiL0IsQ0FEb0M7QUFBQSxLQUFyQyxDQURILENBWkYsQ0FsQ0YsQ0FOb0I7QUFBQSxHQUF0Qjs7QUEyRUFULEVBQUFBLGFBQWEsQ0FBQ2tCLFNBQWQsR0FBMEIxQixtQkFBMUI7QUFDQVEsRUFBQUEsYUFBYSxDQUFDbUIsV0FBZCxHQUE0QixlQUE1QjtBQUVBLFNBQU8sMkJBQVduQixhQUFYLENBQVA7QUFDRDs7ZUFFY0Qsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbiwgU3R5bGVkVHlwZSwgQ2hlY2tNYXJrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1N0eWxlZEV4cG9ydE1hcFNlY3Rpb24sIFN0eWxlZFdhcm5pbmcsIEV4cG9ydE1hcExpbmt9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQge0VYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7RVhQT1JUX0hUTUxfTUFQX0RPQywgRVhQT1JUX0hUTUxfTUFQX01PREVTX0RPQ30gZnJvbSAnY29uc3RhbnRzL3VzZXItZ3VpZGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXhwb3J0LWh0bWwtbWFwJykuRXhwb3J0SHRtbE1hcFByb3BzfSBFeHBvcnRIdG1sTWFwUHJvcHMgKi9cblxuY29uc3QgRXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcbiAgLmRpc2NsYWltZXIge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQYWRkaW5nfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmVycm9yID8gJ3JlZCcgOiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFQpfTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0fTtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Rm9udFNpemV9O1xuXG4gIDphY3RpdmUsXG4gIDpmb2N1cyxcbiAgJi5mb2N1cyxcbiAgJi5hY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEJpZ1N0eWxlZFRpbGUgPSBzdHlsZWQoU3R5bGVkVHlwZSlgXG4gIGhlaWdodDogdW5zZXQ7XG4gIHdpZHRoOiB1bnNldDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuYDtcblxuY29uc3QgZXhwb3J0SHRtbFByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5mdW5jdGlvbiBFeHBvcnRIdG1sTWFwRmFjdG9yeSgpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxFeHBvcnRIdG1sTWFwUHJvcHM+fVxuICAgKi9cbiAgY29uc3QgRXhwb3J0SHRtbE1hcCA9ICh7XG4gICAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZSA9IG1vZGUgPT4ge30sXG4gICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuID0gdG9rZW4gPT4ge30sXG4gICAgb3B0aW9ucyA9IHt9LFxuICAgIGludGxcbiAgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC5zZWxlY3Rpb24nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgIDxFeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtbW9kYWxfX2h0bWwtb3B0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblRpdGxlJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuU3VidGl0bGUnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuUGxhY2Vob2xkZXInfSl9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucyA/IG9wdGlvbnMudXNlck1hcGJveFRva2VuIDogJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICAgIDxTdHlsZWRXYXJuaW5nPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuTWlzdXNlV2FybmluZyd9IC8+XG4gICAgICAgICAgICA8L1N0eWxlZFdhcm5pbmc+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuRGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICA8RXhwb3J0TWFwTGluayBocmVmPXtFWFBPUlRfSFRNTF9NQVBfRE9DfT5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC50b2tlblVwZGF0ZSd9IC8+XG4gICAgICAgICAgICA8L0V4cG9ydE1hcExpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgPEV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVUaXRsZSd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC5tb2RlU3VidGl0bGUxJ30gLz5cbiAgICAgICAgICAgIDxhIGhyZWY9e0VYUE9SVF9IVE1MX01BUF9NT0RFU19ET0N9PlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVTdWJ0aXRsZTInfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICB7RVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUy5tYXAobW9kZSA9PiAoXG4gICAgICAgICAgICA8QmlnU3R5bGVkVGlsZVxuICAgICAgICAgICAgICBrZXk9e21vZGUuaWR9XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb25zLm1vZGUgPT09IG1vZGUuaWR9XG4gICAgICAgICAgICAgIGF2YWlsYWJsZT17bW9kZS5hdmFpbGFibGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vZGUuYXZhaWxhYmxlICYmIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUobW9kZS5pZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXttb2RlLnVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZURlc2NyaXB0aW9uJ31cbiAgICAgICAgICAgICAgICAgIHZhbHVlcz17e21vZGU6IGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IG1vZGUubGFiZWx9KX19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICB7b3B0aW9ucy5tb2RlID09PSBtb2RlLmlkICYmIDxDaGVja01hcmsgLz59XG4gICAgICAgICAgICA8L0JpZ1N0eWxlZFRpbGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FeHBvcnRNYXBTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIEV4cG9ydEh0bWxNYXAucHJvcFR5cGVzID0gZXhwb3J0SHRtbFByb3BUeXBlcztcbiAgRXhwb3J0SHRtbE1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRIdG1sTWFwJztcblxuICByZXR1cm4gaW5qZWN0SW50bChFeHBvcnRIdG1sTWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SHRtbE1hcEZhY3Rvcnk7XG4iXX0=