"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./export-image-modal').ExportImageModalProps} ExportImageModalProps */
var ImageOptionList = _styledComponents["default"].div(_templateObject());

var ExportImageModalFactory = function ExportImageModalFactory() {
  /**
   * @type {React.FunctionComponent<ExportImageModalProps>}
   */
  var ExportImageModal = function ExportImageModal(_ref) {
    var mapW = _ref.mapW,
        mapH = _ref.mapH,
        exportImage = _ref.exportImage,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        cleanupExportImage = _ref.cleanupExportImage,
        intl = _ref.intl;
    var legend = exportImage.legend,
        ratio = exportImage.ratio,
        resolution = exportImage.resolution;
    (0, _react.useEffect)(function () {
      onUpdateImageSetting({
        exporting: true
      });
      return cleanupExportImage;
    }, [onUpdateImageSetting, cleanupExportImage]);
    (0, _react.useEffect)(function () {
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        onUpdateImageSetting({
          mapH: mapH,
          mapW: mapW
        });
      }
    }, [mapH, mapW, exportImage, onUpdateImageSetting]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
      className: "export-image-modal"
    }, /*#__PURE__*/_react["default"].createElement(ImageOptionList, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_ratio"
    }, _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
      return !op.hidden;
    }).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: ratio === op.id,
        onClick: function onClick() {
          return onUpdateImageSetting({
            ratio: op.id
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: op.label
      }), ratio === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_resolution"
    }, _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: resolution === op.id,
        onClick: function onClick() {
          return op.available && onUpdateImageSetting({
            resolution: op.id
          });
        }
      }, op.label, resolution === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.mapLegendTitle'
    })), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      type: "checkbox",
      id: "add-map-legend",
      checked: legend,
      label: intl.formatMessage({
        id: 'modal.exportImage.mapLegendAdd'
      }),
      onChange: function onChange() {
        return onUpdateImageSetting({
          legend: !legend
        });
      }
    }))), /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
      exportImage: exportImage
    }));
  };

  return (0, _reactIntl.injectIntl)(ExportImageModal);
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnRJbWFnZU1vZGFsIiwibWFwVyIsIm1hcEgiLCJleHBvcnRJbWFnZSIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiaW50bCIsImxlZ2VuZCIsInJhdGlvIiwicmVzb2x1dGlvbiIsImV4cG9ydGluZyIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImZpbHRlciIsIm9wIiwiaGlkZGVuIiwibWFwIiwiaWQiLCJsYWJlbCIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwiZm9ybWF0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFyQjs7QUF3QkEsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3BDO0FBQ0Y7QUFDQTtBQUNFLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FPbkI7QUFBQSxRQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxRQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxRQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxRQUhKQyxvQkFHSSxRQUhKQSxvQkFHSTtBQUFBLFFBRkpDLGtCQUVJLFFBRkpBLGtCQUVJO0FBQUEsUUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQUEsUUFDR0MsTUFESCxHQUNnQ0osV0FEaEMsQ0FDR0ksTUFESDtBQUFBLFFBQ1dDLEtBRFgsR0FDZ0NMLFdBRGhDLENBQ1dLLEtBRFg7QUFB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QUEsS0FBcEMsQ0FESCxDQUxGLENBbkJGLGVBcUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsa0JBQUQ7QUFDRSxNQUFBLElBQUksRUFBQyxVQURQO0FBRUUsTUFBQSxFQUFFLEVBQUMsZ0JBRkw7QUFHRSxNQUFBLE9BQU8sRUFBRVQsTUFIWDtBQUlFLE1BQUEsS0FBSyxFQUFFRCxJQUFJLENBQUNjLGFBQUwsQ0FBbUI7QUFBQ0osUUFBQUEsRUFBRSxFQUFFO0FBQUwsT0FBbkIsQ0FKVDtBQUtFLE1BQUEsUUFBUSxFQUFFO0FBQUEsZUFBTVosb0JBQW9CLENBQUM7QUFBQ0csVUFBQUEsTUFBTSxFQUFFLENBQUNBO0FBQVYsU0FBRCxDQUExQjtBQUFBO0FBTFosTUFKRixDQXJDRixDQURGLGVBbURFLGdDQUFDLHdCQUFEO0FBQWMsTUFBQSxXQUFXLEVBQUVKO0FBQTNCLE1BbkRGLENBREY7QUF1REQsR0FqRkQ7O0FBbUZBLFNBQU8sMkJBQVdILGdCQUFYLENBQVA7QUFDRCxDQXhGRDs7ZUEwRmVELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW1hZ2UtcHJldmlldyc7XG5cbmltcG9ydCB7RVhQT1JUX0lNR19SQVRJT19PUFRJT05TLCBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1N0eWxlZE1vZGFsQ29udGVudCwgU2VsZWN0aW9uQnV0dG9uLCBDaGVja01hcmt9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcbmltcG9ydCB7aW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2V4cG9ydC1pbWFnZS1tb2RhbCcpLkV4cG9ydEltYWdlTW9kYWxQcm9wc30gRXhwb3J0SW1hZ2VNb2RhbFByb3BzICovXG5cbmNvbnN0IEltYWdlT3B0aW9uTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMjUwcHg7XG5cbiAgLmltYWdlLW9wdGlvbi1zZWN0aW9uIHtcbiAgICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSA9ICgpID0+IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxFeHBvcnRJbWFnZU1vZGFsUHJvcHM+fVxuICAgKi9cbiAgY29uc3QgRXhwb3J0SW1hZ2VNb2RhbCA9ICh7XG4gICAgbWFwVyxcbiAgICBtYXBILFxuICAgIGV4cG9ydEltYWdlLFxuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nLFxuICAgIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgICBpbnRsXG4gIH0pID0+IHtcbiAgICBjb25zdCB7bGVnZW5kLCByYXRpbywgcmVzb2x1dGlvbn0gPSBleHBvcnRJbWFnZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgIGV4cG9ydGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2xlYW51cEV4cG9ydEltYWdlO1xuICAgIH0sIFtvblVwZGF0ZUltYWdlU2V0dGluZywgY2xlYW51cEV4cG9ydEltYWdlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKG1hcEggIT09IGV4cG9ydEltYWdlLm1hcEggfHwgbWFwVyAhPT0gZXhwb3J0SW1hZ2UubWFwVykge1xuICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgICAgbWFwSCxcbiAgICAgICAgICBtYXBXXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFttYXBILCBtYXBXLCBleHBvcnRJbWFnZSwgb25VcGRhdGVJbWFnZVNldHRpbmddKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1pbWFnZS1tb2RhbFwiPlxuICAgICAgICA8SW1hZ2VPcHRpb25MaXN0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yYXRpb1RpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yYXRpb0Rlc2NyaXB0aW9uJ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxpc3RcIiBpZD1cImV4cG9ydC1pbWFnZS1tb2RhbF9fb3B0aW9uX3JhdGlvXCI+XG4gICAgICAgICAgICAgIHtFWFBPUlRfSU1HX1JBVElPX09QVElPTlMuZmlsdGVyKG9wID0+ICFvcC5oaWRkZW4pLm1hcChvcCA9PiAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyYXRpbyA9PT0gb3AuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZUltYWdlU2V0dGluZyh7cmF0aW86IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e29wLmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgICAge3JhdGlvID09PSBvcC5pZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yZXNvbHV0aW9uVGl0bGUnfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLnJlc29sdXRpb25EZXNjcmlwdGlvbid9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCIgaWQ9XCJleHBvcnQtaW1hZ2UtbW9kYWxfX29wdGlvbl9yZXNvbHV0aW9uXCI+XG4gICAgICAgICAgICAgIHtFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVzb2x1dGlvbiA9PT0gb3AuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcC5hdmFpbGFibGUgJiYgb25VcGRhdGVJbWFnZVNldHRpbmcoe3Jlc29sdXRpb246IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgICAge3Jlc29sdXRpb24gPT09IG9wLmlkICYmIDxDaGVja01hcmsgLz59XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZFRpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImFkZC1tYXAtbGVnZW5kXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxuICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZEFkZCd9KX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uVXBkYXRlSW1hZ2VTZXR0aW5nKHtsZWdlbmQ6ICFsZWdlbmR9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW1hZ2VPcHRpb25MaXN0PlxuICAgICAgICA8SW1hZ2VQcmV2aWV3IGV4cG9ydEltYWdlPXtleHBvcnRJbWFnZX0gLz5cbiAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGluamVjdEludGwoRXhwb3J0SW1hZ2VNb2RhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeTtcbiJdfQ==