"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MapInfoPanel = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _statusPanel = _interopRequireWildcard(require("./status-panel"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _localization = require("../../localization");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .save-map-modal-content {\n    min-height: 400px;\n    flex-direction: column;\n  }\n\n  .description {\n    width: 300px;\n  }\n\n  .image-preview-panel {\n    width: 300px;\n\n    .image-preview {\n      padding: 0;\n    }\n  }\n\n  .map-info-panel {\n    flex-direction: column;\n  }\n\n  .save-map-modal-description {\n    .modal-section-subtitle {\n      margin-left: 6px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./save-map-modal').SaveMapModalProps} SaveMapModalProps */
var StyledSaveMapModal = _styledComponents["default"].div.attrs({
  className: 'save-map-modal'
})(_templateObject());

var nop = function nop() {};

var MapInfoPanel = function MapInfoPanel(_ref) {
  var _ref$mapInfo = _ref.mapInfo,
      mapInfo = _ref$mapInfo === void 0 ? {
    description: '',
    title: ''
  } : _ref$mapInfo,
      characterLimits = _ref.characterLimits,
      onChangeInput = _ref.onChangeInput;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection map-info-panel"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, {
    className: "save-map-modal-name"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Name*"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    id: "map-title",
    type: "text",
    value: mapInfo.title,
    onChange: function onChange(e) {
      return onChangeInput('title', e);
    },
    placeholder: "Type map title"
  }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "save-map-modal-description",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-subtitle"
  }, "(optional)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.TextAreaLight, {
    rows: "3",
    id: "map-description",
    style: {
      resize: 'none'
    },
    value: mapInfo.description,
    onChange: function onChange(e) {
      return onChangeInput('description', e);
    },
    placeholder: "Type map description"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalInputFootnote, {
    className: "save-map-modal-description__footnote",
    error: characterLimits.description && mapInfo.description.length > characterLimits.description
  }, mapInfo.description.length, "/", characterLimits.description || _defaultSettings.MAP_INFO_CHARACTER.description, ' ', "characters")));
};

exports.MapInfoPanel = MapInfoPanel;

function SaveMapModalFactory() {
  /**
   * @type {React.FunctionComponent<SaveMapModalProps>}
   */
  var SaveMapModal = function SaveMapModal(_ref2) {
    var mapInfo = _ref2.mapInfo,
        exportImage = _ref2.exportImage,
        _ref2$characterLimits = _ref2.characterLimits,
        characterLimits = _ref2$characterLimits === void 0 ? {} : _ref2$characterLimits,
        cloudProviders = _ref2.cloudProviders,
        isProviderLoading = _ref2.isProviderLoading,
        currentProvider = _ref2.currentProvider,
        providerError = _ref2.providerError,
        onSetCloudProvider = _ref2.onSetCloudProvider,
        onUpdateImageSetting = _ref2.onUpdateImageSetting,
        cleanupExportImage = _ref2.cleanupExportImage,
        onSetMapInfo = _ref2.onSetMapInfo;

    var onChangeInput = function onChangeInput(key, _ref3) {
      var value = _ref3.target.value;
      onSetMapInfo((0, _defineProperty2["default"])({}, key, value));
    };

    var provider = currentProvider ? cloudProviders.find(function (p) {
      return p.name === currentProvider;
    }) : null;
    return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
      onSetCloudProvider: onSetCloudProvider,
      cloudProviders: cloudProviders,
      currentProvider: currentProvider
    }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledSaveMapModal, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
      className: "save-map-modal-content"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      disabled: isProviderLoading
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.saveMap.title'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.saveMap.subtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, cloudProviders.map(function (cloudProvider) {
      return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
        key: cloudProvider.name,
        onSelect: function onSelect() {
          return onSetCloudProvider(cloudProvider.name);
        },
        onSetCloudProvider: onSetCloudProvider,
        cloudProvider: cloudProvider,
        isSelected: cloudProvider.name === currentProvider,
        isConnected: Boolean(cloudProvider.getAccessToken && cloudProvider.getAccessToken())
      });
    }))), provider && provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      style: {
        margin: '2px 0'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      key: 1,
      href: provider.getManagementUrl(),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: 'underline'
      }
    }, "Go to your Kepler.gl ", provider.displayName, " page"))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description image-preview-panel"
    }, /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
      exportImage: exportImage,
      width: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
      showDimension: false
    })), isProviderLoading ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection map-saving-animation"
    }, /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(MapInfoPanel, {
      mapInfo: mapInfo,
      characterLimits: characterLimits,
      onChangeInput: onChangeInput
    })), providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
      isLoading: false,
      error: providerError,
      providerIcon: provider && provider.icon
    }) : null))));
  };

  SaveMapModal.defaultProps = {
    characterLimits: _defaultSettings.MAP_INFO_CHARACTER,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    isProviderLoading: false,
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  };
  return SaveMapModal;
}

var _default = SaveMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zYXZlLW1hcC1tb2RhbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTYXZlTWFwTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIm5vcCIsIk1hcEluZm9QYW5lbCIsIm1hcEluZm8iLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiY2hhcmFjdGVyTGltaXRzIiwib25DaGFuZ2VJbnB1dCIsImUiLCJkaXNwbGF5IiwicmVzaXplIiwibGVuZ3RoIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNhdmVNYXBNb2RhbCIsImV4cG9ydEltYWdlIiwiY2xvdWRQcm92aWRlcnMiLCJpc1Byb3ZpZGVyTG9hZGluZyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyRXJyb3IiLCJvblNldENsb3VkUHJvdmlkZXIiLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsImNsZWFudXBFeHBvcnRJbWFnZSIsIm9uU2V0TWFwSW5mbyIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJtYXAiLCJjbG91ZFByb3ZpZGVyIiwiQm9vbGVhbiIsImdldEFjY2Vzc1Rva2VuIiwiZ2V0TWFuYWdlbWVudFVybCIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiZGlzcGxheU5hbWUiLCJNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiIsIndpZHRoIiwiaWNvbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQVFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzFDQyxFQUFBQSxTQUFTLEVBQUU7QUFEK0IsQ0FBakIsQ0FBSCxtQkFB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QUFDO0FBQWYsb0JBQ0UsZ0NBQUMsNEJBQUQ7QUFBaUIsTUFBQSxJQUFJLEVBQUVVLFFBQVEsSUFBSUEsUUFBUSxDQUFDYztBQUE1QyxNQURGLENBRGdCLGdCQUtoQixnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUV0QyxPQURYO0FBRUUsTUFBQSxlQUFlLEVBQUVHLGVBRm5CO0FBR0UsTUFBQSxhQUFhLEVBQUVDO0FBSGpCLE1BYkosQ0F6Q0YsRUE2REdZLGFBQWEsZ0JBQ1osZ0NBQUMsdUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRSxLQURiO0FBRUUsTUFBQSxLQUFLLEVBQUVBLGFBRlQ7QUFHRSxNQUFBLFlBQVksRUFBRVEsUUFBUSxJQUFJQSxRQUFRLENBQUNjO0FBSHJDLE1BRFksR0FNVixJQW5FTixDQURGLENBTkYsQ0FMRixDQURGO0FBc0ZELEdBeEdEOztBQTBHQTNCLEVBQUFBLFlBQVksQ0FBQzRCLFlBQWIsR0FBNEI7QUFDMUJwQyxJQUFBQSxlQUFlLEVBQUVNLG1DQURTO0FBRTFCSSxJQUFBQSxjQUFjLEVBQUUsRUFGVTtBQUcxQkUsSUFBQUEsZUFBZSxFQUFFLElBSFM7QUFJMUJDLElBQUFBLGFBQWEsRUFBRSxJQUpXO0FBSzFCRixJQUFBQSxpQkFBaUIsRUFBRSxLQUxPO0FBTTFCRyxJQUFBQSxrQkFBa0IsRUFBRW5CLEdBTk07QUFPMUJvQixJQUFBQSxvQkFBb0IsRUFBRXBCO0FBUEksR0FBNUI7QUFVQSxTQUFPYSxZQUFQO0FBQ0Q7O2VBRWNELG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENsb3VkVGlsZSBmcm9tICcuL2Nsb3VkLXRpbGUnO1xuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIgZnJvbSAnLi9pbWFnZS1tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IFByb3ZpZGVyTW9kYWxDb250YWluZXIgZnJvbSAnLi9wcm92aWRlci1tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IFN0YXR1c1BhbmVsLCB7VXBsb2FkQW5pbWF0aW9ufSBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5cbmltcG9ydCB7TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04sIE1BUF9JTkZPX0NIQVJBQ1RFUn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRNb2RhbENvbnRlbnQsXG4gIElucHV0TGlnaHQsXG4gIFRleHRBcmVhTGlnaHQsXG4gIFN0eWxlZEV4cG9ydFNlY3Rpb24sXG4gIFN0eWxlZE1vZGFsU2VjdGlvbixcbiAgU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW1hZ2UtcHJldmlldyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3NhdmUtbWFwLW1vZGFsJykuU2F2ZU1hcE1vZGFsUHJvcHN9IFNhdmVNYXBNb2RhbFByb3BzICovXG5cbmNvbnN0IFN0eWxlZFNhdmVNYXBNb2RhbCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzYXZlLW1hcC1tb2RhbCdcbn0pYFxuICAuc2F2ZS1tYXAtbW9kYWwtY29udGVudCB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmltYWdlLXByZXZpZXctcGFuZWwge1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIC5pbWFnZS1wcmV2aWV3IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hcC1pbmZvLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnNhdmUtbWFwLW1vZGFsLWRlc2NyaXB0aW9uIHtcbiAgICAubW9kYWwtc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3Qgbm9wID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBNYXBJbmZvUGFuZWwgPSAoe1xuICBtYXBJbmZvID0ge2Rlc2NyaXB0aW9uOiAnJywgdGl0bGU6ICcnfSxcbiAgY2hhcmFjdGVyTGltaXRzLFxuICBvbkNoYW5nZUlucHV0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1pbmZvLXBhbmVsXCI+XG4gICAgPFN0eWxlZE1vZGFsU2VjdGlvbiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5OYW1lKjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICBpZD1cIm1hcC10aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLnRpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ3RpdGxlJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCB0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1kZXNjcmlwdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPkRlc2NyaXB0aW9uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPihvcHRpb25hbCk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRBcmVhTGlnaHRcbiAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgaWQ9XCJtYXAtZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fVxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ2Rlc2NyaXB0aW9uJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCBkZXNjcmlwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTdHlsZWRNb2RhbElucHV0Rm9vdG5vdGVcbiAgICAgICAgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtZGVzY3JpcHRpb25fX2Zvb3Rub3RlXCJcbiAgICAgICAgZXJyb3I9e1xuICAgICAgICAgIGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiAmJiBtYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aCA+IGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHttYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aH0ve2NoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiB8fCBNQVBfSU5GT19DSEFSQUNURVIuZGVzY3JpcHRpb259eycgJ31cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9TdHlsZWRNb2RhbElucHV0Rm9vdG5vdGU+XG4gICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuZnVuY3Rpb24gU2F2ZU1hcE1vZGFsRmFjdG9yeSgpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxTYXZlTWFwTW9kYWxQcm9wcz59XG4gICAqL1xuICBjb25zdCBTYXZlTWFwTW9kYWwgPSAoe1xuICAgIG1hcEluZm8sXG4gICAgZXhwb3J0SW1hZ2UsXG4gICAgY2hhcmFjdGVyTGltaXRzID0ge30sXG4gICAgY2xvdWRQcm92aWRlcnMsXG4gICAgaXNQcm92aWRlckxvYWRpbmcsXG4gICAgY3VycmVudFByb3ZpZGVyLFxuICAgIHByb3ZpZGVyRXJyb3IsXG4gICAgb25TZXRDbG91ZFByb3ZpZGVyLFxuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nLFxuICAgIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgICBvblNldE1hcEluZm9cbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoa2V5LCB7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xuICAgICAgb25TZXRNYXBJbmZvKHtba2V5XTogdmFsdWV9KTtcbiAgICB9O1xuICAgIGNvbnN0IHByb3ZpZGVyID0gY3VycmVudFByb3ZpZGVyID8gY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcbiAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cbiAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZU1vZGFsQ29udGFpbmVyXG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXtvblVwZGF0ZUltYWdlU2V0dGluZ31cbiAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e2NsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdHlsZWRTYXZlTWFwTW9kYWw+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gZGlzYWJsZWQ9e2lzUHJvdmlkZXJMb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2F2ZU1hcC50aXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zYXZlTWFwLnN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7Y2xvdWRQcm92aWRlcnMubWFwKGNsb3VkUHJvdmlkZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWRUaWxlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjbG91ZFByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IG9uU2V0Q2xvdWRQcm92aWRlcihjbG91ZFByb3ZpZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e2Nsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17Y2xvdWRQcm92aWRlci5uYW1lID09PSBjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0ZWQ9e0Jvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuICYmIGNsb3VkUHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gc3R5bGU9e3ttYXJnaW46ICcycHggMCd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgR28gdG8geW91ciBLZXBsZXIuZ2wge3Byb3ZpZGVyLmRpc3BsYXlOYW1lfSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBpbWFnZS1wcmV2aWV3LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXtleHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e01BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRofVxuICAgICAgICAgICAgICAgICAgICBzaG93RGltZW5zaW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb24gbWFwLXNhdmluZy1hbmltYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxNYXBJbmZvUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgbWFwSW5mbz17bWFwSW5mb31cbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyTGltaXRzPXtjaGFyYWN0ZXJMaW1pdHN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlSW5wdXQ9e29uQ2hhbmdlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAge3Byb3ZpZGVyRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPFN0YXR1c1BhbmVsXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3ZpZGVyRXJyb3J9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlckljb249e3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8L1N0eWxlZFNhdmVNYXBNb2RhbD5cbiAgICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxuICAgICAgPC9Qcm92aWRlck1vZGFsQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgU2F2ZU1hcE1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGFyYWN0ZXJMaW1pdHM6IE1BUF9JTkZPX0NIQVJBQ1RFUixcbiAgICBjbG91ZFByb3ZpZGVyczogW10sXG4gICAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxuICAgIHByb3ZpZGVyRXJyb3I6IG51bGwsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIG9uU2V0Q2xvdWRQcm92aWRlcjogbm9wLFxuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBub3BcbiAgfTtcblxuICByZXR1cm4gU2F2ZU1hcE1vZGFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTYXZlTWFwTW9kYWxGYWN0b3J5O1xuIl19