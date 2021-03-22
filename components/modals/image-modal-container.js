"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultSettings = require("../../constants/default-settings");

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/** @typedef {import('./image-modal-container').ImageModalContainerProps} ImageModalContainerProps */

/**
 * A wrapper component in modals contain a image preview of the map with cloud providers
 * It sets export image size based on provider thumbnail size
 * @type {React.FunctionComponent<ImageModalContainerProps>}
 */
var ImageModalContainer = function ImageModalContainer(_ref) {
  var onUpdateImageSetting = _ref.onUpdateImageSetting,
      cleanupExportImage = _ref.cleanupExportImage,
      cloudProviders = _ref.cloudProviders,
      currentProvider = _ref.currentProvider,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    onUpdateImageSetting({
      exporting: true
    });
    return function () {
      cleanupExportImage();
    };
  }, [onUpdateImageSetting, cleanupExportImage]);
  (0, _react.useEffect)(function () {
    if (currentProvider && cloudProviders.length) {
      var provider = cloudProviders.find(function (p) {
        return p.name === currentProvider;
      });

      if (provider && provider.thumbnail) {
        onUpdateImageSetting({
          mapW: (0, _lodash["default"])(provider, ['thumbnail', 'width']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
          mapH: (0, _lodash["default"])(provider, ['thumbnail', 'height']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
          ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
          legend: false
        });
      }
    } else {
      onUpdateImageSetting({
        mapW: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
        mapH: _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
        ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
        legend: false
      });
    }
  }, [currentProvider, cloudProviders, onUpdateImageSetting]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

ImageModalContainer.defaultProps = {
  cloudProviders: [],
  currentProvider: null
};
var _default = ImageModalContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9pbWFnZS1tb2RhbC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiSW1hZ2VNb2RhbENvbnRhaW5lciIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiY2xvdWRQcm92aWRlcnMiLCJjdXJyZW50UHJvdmlkZXIiLCJjaGlsZHJlbiIsImV4cG9ydGluZyIsImxlbmd0aCIsInByb3ZpZGVyIiwiZmluZCIsInAiLCJuYW1lIiwidGh1bWJuYWlsIiwibWFwVyIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwid2lkdGgiLCJtYXBIIiwiaGVpZ2h0IiwicmF0aW8iLCJFWFBPUlRfSU1HX1JBVElPUyIsIkNVU1RPTSIsImxlZ2VuZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BTXRCO0FBQUEsTUFMSkMsb0JBS0ksUUFMSkEsb0JBS0k7QUFBQSxNQUpKQyxrQkFJSSxRQUpKQSxrQkFJSTtBQUFBLE1BSEpDLGNBR0ksUUFISkEsY0FHSTtBQUFBLE1BRkpDLGVBRUksUUFGSkEsZUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLHdCQUFVLFlBQU07QUFDZEosSUFBQUEsb0JBQW9CLENBQUM7QUFBQ0ssTUFBQUEsU0FBUyxFQUFFO0FBQVosS0FBRCxDQUFwQjtBQUNBLFdBQU8sWUFBTTtBQUNYSixNQUFBQSxrQkFBa0I7QUFDbkIsS0FGRDtBQUdELEdBTEQsRUFLRyxDQUFDRCxvQkFBRCxFQUF1QkMsa0JBQXZCLENBTEg7QUFPQSx3QkFBVSxZQUFNO0FBQ2QsUUFBSUUsZUFBZSxJQUFJRCxjQUFjLENBQUNJLE1BQXRDLEVBQThDO0FBQzVDLFVBQU1DLFFBQVEsR0FBR0wsY0FBYyxDQUFDTSxJQUFmLENBQW9CLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBV1AsZUFBZjtBQUFBLE9BQXJCLENBQWpCOztBQUVBLFVBQUlJLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxTQUF6QixFQUFvQztBQUNsQ1gsUUFBQUEsb0JBQW9CLENBQUM7QUFDbkJZLFVBQUFBLElBQUksRUFBRSx3QkFBSUwsUUFBSixFQUFjLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FBZCxLQUF5Q00seUNBQXdCQyxLQURwRDtBQUVuQkMsVUFBQUEsSUFBSSxFQUFFLHdCQUFJUixRQUFKLEVBQWMsQ0FBQyxXQUFELEVBQWMsUUFBZCxDQUFkLEtBQTBDTSx5Q0FBd0JHLE1BRnJEO0FBR25CQyxVQUFBQSxLQUFLLEVBQUVDLG1DQUFrQkMsTUFITjtBQUluQkMsVUFBQUEsTUFBTSxFQUFFO0FBSlcsU0FBRCxDQUFwQjtBQU1EO0FBQ0YsS0FYRCxNQVdPO0FBQ0xwQixNQUFBQSxvQkFBb0IsQ0FBQztBQUNuQlksUUFBQUEsSUFBSSxFQUFFQyx5Q0FBd0JDLEtBRFg7QUFFbkJDLFFBQUFBLElBQUksRUFBRUYseUNBQXdCRyxNQUZYO0FBR25CQyxRQUFBQSxLQUFLLEVBQUVDLG1DQUFrQkMsTUFITjtBQUluQkMsUUFBQUEsTUFBTSxFQUFFO0FBSlcsT0FBRCxDQUFwQjtBQU1EO0FBQ0YsR0FwQkQsRUFvQkcsQ0FBQ2pCLGVBQUQsRUFBa0JELGNBQWxCLEVBQWtDRixvQkFBbEMsQ0FwQkg7QUFzQkEsc0JBQU8sa0VBQUdJLFFBQUgsQ0FBUDtBQUNELENBckNEOztBQXVDQUwsbUJBQW1CLENBQUNzQixZQUFwQixHQUFtQztBQUNqQ25CLEVBQUFBLGNBQWMsRUFBRSxFQURpQjtBQUVqQ0MsRUFBQUEsZUFBZSxFQUFFO0FBRmdCLENBQW5DO2VBS2VKLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQge01BUF9USFVNQk5BSUxfRElNRU5TSU9OLCBFWFBPUlRfSU1HX1JBVElPU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9pbWFnZS1tb2RhbC1jb250YWluZXInKS5JbWFnZU1vZGFsQ29udGFpbmVyUHJvcHN9IEltYWdlTW9kYWxDb250YWluZXJQcm9wcyAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBjb21wb25lbnQgaW4gbW9kYWxzIGNvbnRhaW4gYSBpbWFnZSBwcmV2aWV3IG9mIHRoZSBtYXAgd2l0aCBjbG91ZCBwcm92aWRlcnNcbiAqIEl0IHNldHMgZXhwb3J0IGltYWdlIHNpemUgYmFzZWQgb24gcHJvdmlkZXIgdGh1bWJuYWlsIHNpemVcbiAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJbWFnZU1vZGFsQ29udGFpbmVyUHJvcHM+fVxuICovXG5jb25zdCBJbWFnZU1vZGFsQ29udGFpbmVyID0gKHtcbiAgb25VcGRhdGVJbWFnZVNldHRpbmcsXG4gIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgY2xvdWRQcm92aWRlcnMsXG4gIGN1cnJlbnRQcm92aWRlcixcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7ZXhwb3J0aW5nOiB0cnVlfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFudXBFeHBvcnRJbWFnZSgpO1xuICAgIH07XG4gIH0sIFtvblVwZGF0ZUltYWdlU2V0dGluZywgY2xlYW51cEV4cG9ydEltYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFByb3ZpZGVyICYmIGNsb3VkUHJvdmlkZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBjbG91ZFByb3ZpZGVycy5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xuXG4gICAgICBpZiAocHJvdmlkZXIgJiYgcHJvdmlkZXIudGh1bWJuYWlsKSB7XG4gICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nKHtcbiAgICAgICAgICBtYXBXOiBnZXQocHJvdmlkZXIsIFsndGh1bWJuYWlsJywgJ3dpZHRoJ10pIHx8IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRoLFxuICAgICAgICAgIG1hcEg6IGdldChwcm92aWRlciwgWyd0aHVtYm5haWwnLCAnaGVpZ2h0J10pIHx8IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLmhlaWdodCxcbiAgICAgICAgICByYXRpbzogRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NLFxuICAgICAgICAgIGxlZ2VuZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nKHtcbiAgICAgICAgbWFwVzogTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04ud2lkdGgsXG4gICAgICAgIG1hcEg6IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLmhlaWdodCxcbiAgICAgICAgcmF0aW86IEVYUE9SVF9JTUdfUkFUSU9TLkNVU1RPTSxcbiAgICAgICAgbGVnZW5kOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY3VycmVudFByb3ZpZGVyLCBjbG91ZFByb3ZpZGVycywgb25VcGRhdGVJbWFnZVNldHRpbmddKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcblxuSW1hZ2VNb2RhbENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3VkUHJvdmlkZXJzOiBbXSxcbiAgY3VycmVudFByb3ZpZGVyOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGFsQ29udGFpbmVyO1xuIl19