"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverwriteMapModal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _statusPanel = require("./status-panel");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _localization = require("../../localization");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 12px;\n  min-height: 220px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 600;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @typedef {import('./overwrite-map-modal').OverwriteMapModalProps} OverwriteMapModalProps */
var StyledMsg = _styledComponents["default"].div(_templateObject());

var StyledTitle = _styledComponents["default"].span(_templateObject2());

var StyledIcon = _styledComponents["default"].div(_templateObject3());

var StyledOverwriteMapModal = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject4());

var OverwriteMapModalFactory = function OverwriteMapModalFactory() {
  /**
   * @type {React.FunctionComponent<OverwriteMapModalProps>}
   */
  var OverwriteMapModal = function OverwriteMapModal(_ref) {
    var mapSaved = _ref.mapSaved,
        title = _ref.title,
        currentProvider = _ref.currentProvider,
        cloudProviders = _ref.cloudProviders,
        isProviderLoading = _ref.isProviderLoading,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        cleanupExportImage = _ref.cleanupExportImage;
    var provider = cloudProviders.find(function (cp) {
      return cp.name === currentProvider;
    });
    return /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledOverwriteMapModal, {
      className: "overwrite-map-modal"
    }, isProviderLoading ? /*#__PURE__*/_react["default"].createElement(StyledMsg, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.overwriteMap.title'
    })), /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledIcon, null, provider && provider.icon ? /*#__PURE__*/_react["default"].createElement(provider.icon, {
      height: "64px"
    }) : null), /*#__PURE__*/_react["default"].createElement(StyledMsg, {
      className: "overwrite-map-msg"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, title, " "), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.overwriteMap.alreadyExists',
      values: {
        mapSaved: mapSaved
      }
    })))));
  };

  return OverwriteMapModal;
};

var OverwriteMapModal = OverwriteMapModalFactory();
exports.OverwriteMapModal = OverwriteMapModal;
var _default = OverwriteMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1zZyIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFRpdGxlIiwic3BhbiIsIlN0eWxlZEljb24iLCJTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCIsIkNlbnRlclZlcnRpY2FsRmxleGJveCIsIk92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSIsIk92ZXJ3cml0ZU1hcE1vZGFsIiwibWFwU2F2ZWQiLCJ0aXRsZSIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsImNsZWFudXBFeHBvcnRJbWFnZSIsInByb3ZpZGVyIiwiZmluZCIsImNwIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQWY7O0FBS0EsSUFBTUMsV0FBVyxHQUFHRiw2QkFBT0csSUFBVixvQkFBakI7O0FBS0EsSUFBTUMsVUFBVSxHQUFHSiw2QkFBT0MsR0FBVixvQkFBaEI7O0FBSUEsSUFBTUksdUJBQXVCLEdBQUcsa0NBQU9DLHdDQUFQLENBQUgsb0JBQTdCOztBQUtBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQztBQUNGO0FBQ0E7QUFDRSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BUXBCO0FBQUEsUUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsUUFOSkMsS0FNSSxRQU5KQSxLQU1JO0FBQUEsUUFMSkMsZUFLSSxRQUxKQSxlQUtJO0FBQUEsUUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsUUFISkMsaUJBR0ksUUFISkEsaUJBR0k7QUFBQSxRQUZKQyxvQkFFSSxRQUZKQSxvQkFFSTtBQUFBLFFBREpDLGtCQUNJLFFBREpBLGtCQUNJO0FBQ0osUUFBTUMsUUFBUSxHQUFHSixjQUFjLENBQUNLLElBQWYsQ0FBb0IsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ0MsSUFBSCxLQUFZUixlQUFoQjtBQUFBLEtBQXRCLENBQWpCO0FBQ0Esd0JBQ0UsZ0NBQUMsK0JBQUQ7QUFDRSxNQUFBLGVBQWUsRUFBRUEsZUFEbkI7QUFFRSxNQUFBLGNBQWMsRUFBRUMsY0FGbEI7QUFHRSxNQUFBLG9CQUFvQixFQUFFRSxvQkFIeEI7QUFJRSxNQUFBLGtCQUFrQixFQUFFQztBQUp0QixvQkFNRSxnQ0FBQyx1QkFBRDtBQUF5QixNQUFBLFNBQVMsRUFBQztBQUFuQyxPQUNHRixpQkFBaUIsZ0JBQ2hCLGdDQUFDLFNBQUQscUJBQ0UsZ0NBQUMsV0FBRCxxQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRTtBQUF0QixNQURGLENBREYsZUFJRSxnQ0FBQyw0QkFBRDtBQUFpQixNQUFBLElBQUksRUFBRUcsUUFBUSxJQUFJQSxRQUFRLENBQUNJO0FBQTVDLE1BSkYsQ0FEZ0IsZ0JBUWhCLCtFQUNFLGdDQUFDLFVBQUQsUUFDR0osUUFBUSxJQUFJQSxRQUFRLENBQUNJLElBQXJCLGdCQUE0QixnQ0FBQyxRQUFELENBQVUsSUFBVjtBQUFlLE1BQUEsTUFBTSxFQUFDO0FBQXRCLE1BQTVCLEdBQThELElBRGpFLENBREYsZUFJRSxnQ0FBQyxTQUFEO0FBQVcsTUFBQSxTQUFTLEVBQUM7QUFBckIsb0JBQ0UsZ0NBQUMsV0FBRCxRQUFjVixLQUFkLE1BREYsZUFFRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRSxrQ0FBdEI7QUFBMEQsTUFBQSxNQUFNLEVBQUU7QUFBQ0QsUUFBQUEsUUFBUSxFQUFSQTtBQUFEO0FBQWxFLE1BRkYsQ0FKRixDQVRKLENBTkYsQ0FERjtBQTZCRCxHQXZDRDs7QUF3Q0EsU0FBT0QsaUJBQVA7QUFDRCxDQTdDRDs7QUErQ08sSUFBTUEsaUJBQWlCLEdBQUdELHdCQUF3QixFQUFsRDs7ZUFDUUEsd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0NlbnRlclZlcnRpY2FsRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtVcGxvYWRBbmltYXRpb259IGZyb20gJy4vc3RhdHVzLXBhbmVsJztcbmltcG9ydCBJbWFnZU1vZGFsQ29udGFpbmVyIGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vb3ZlcndyaXRlLW1hcC1tb2RhbCcpLk92ZXJ3cml0ZU1hcE1vZGFsUHJvcHN9IE92ZXJ3cml0ZU1hcE1vZGFsUHJvcHMgKi9cblxuY29uc3QgU3R5bGVkTXNnID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuYDtcblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGJsYWNrO1xuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDI0cHg7XG5gO1xuXG5jb25zdCBTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCA9IHN0eWxlZChDZW50ZXJWZXJ0aWNhbEZsZXhib3gpYFxuICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuYDtcblxuY29uc3QgT3ZlcndyaXRlTWFwTW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xuICAvKipcbiAgICogQHR5cGUge1JlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PE92ZXJ3cml0ZU1hcE1vZGFsUHJvcHM+fVxuICAgKi9cbiAgY29uc3QgT3ZlcndyaXRlTWFwTW9kYWwgPSAoe1xuICAgIG1hcFNhdmVkLFxuICAgIHRpdGxlLFxuICAgIGN1cnJlbnRQcm92aWRlcixcbiAgICBjbG91ZFByb3ZpZGVycyxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZyxcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZyxcbiAgICBjbGVhbnVwRXhwb3J0SW1hZ2VcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gY2xvdWRQcm92aWRlcnMuZmluZChjcCA9PiBjcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2VNb2RhbENvbnRhaW5lclxuICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cbiAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17b25VcGRhdGVJbWFnZVNldHRpbmd9XG4gICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17Y2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkT3ZlcndyaXRlTWFwTW9kYWwgY2xhc3NOYW1lPVwib3ZlcndyaXRlLW1hcC1tb2RhbFwiPlxuICAgICAgICAgIHtpc1Byb3ZpZGVyTG9hZGluZyA/IChcbiAgICAgICAgICAgIDxTdHlsZWRNc2c+XG4gICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLm92ZXJ3cml0ZU1hcC50aXRsZSd9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgIDxVcGxvYWRBbmltYXRpb24gaWNvbj17cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvU3R5bGVkTXNnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbiA/IDxwcm92aWRlci5pY29uIGhlaWdodD1cIjY0cHhcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvU3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgPFN0eWxlZE1zZyBjbGFzc05hbWU9XCJvdmVyd3JpdGUtbWFwLW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9IDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5vdmVyd3JpdGVNYXAuYWxyZWFkeUV4aXN0cyd9IHZhbHVlcz17e21hcFNhdmVkfX0gLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRNc2c+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0eWxlZE92ZXJ3cml0ZU1hcE1vZGFsPlxuICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBPdmVyd3JpdGVNYXBNb2RhbDtcbn07XG5cbmV4cG9ydCBjb25zdCBPdmVyd3JpdGVNYXBNb2RhbCA9IE92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSgpO1xuZXhwb3J0IGRlZmF1bHQgT3ZlcndyaXRlTWFwTW9kYWxGYWN0b3J5O1xuIl19