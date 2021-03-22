"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileExtensions = exports.getFileFormatNames = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reselect = require("reselect");

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
// NOTE: default formats must match file-handler.js
var DEFAULT_FILE_EXTENSIONS = ['csv', 'json', 'geojson'];
var DEFAULT_FILE_FORMATS = ['CSV', 'Json', 'GeoJSON'];
var getFileFormatNames = (0, _reselect.createSelector)(function (state) {
  return state.loaders;
}, function (loaders) {
  return [].concat(DEFAULT_FILE_FORMATS, (0, _toConsumableArray2["default"])(loaders.map(function (loader) {
    return loader.name;
  })));
});
exports.getFileFormatNames = getFileFormatNames;
var getFileExtensions = (0, _reselect.createSelector)(function (state) {
  return state.loaders;
}, function (loaders) {
  return [].concat(DEFAULT_FILE_EXTENSIONS, (0, _toConsumableArray2["default"])(loaders.flatMap(function (loader) {
    return loader.extensions;
  })));
});
exports.getFileExtensions = getFileExtensions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRklMRV9FWFRFTlNJT05TIiwiREVGQVVMVF9GSUxFX0ZPUk1BVFMiLCJnZXRGaWxlRm9ybWF0TmFtZXMiLCJzdGF0ZSIsImxvYWRlcnMiLCJtYXAiLCJsb2FkZXIiLCJuYW1lIiwiZ2V0RmlsZUV4dGVuc2lvbnMiLCJmbGF0TWFwIiwiZXh0ZW5zaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQSxJQUFNQSx1QkFBdUIsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCLENBQWhDO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQixDQUE3QjtBQUVPLElBQU1DLGtCQUFrQixHQUFHLDhCQUNoQyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFWO0FBQUEsQ0FEMkIsRUFFaEMsVUFBQUEsT0FBTztBQUFBLG1CQUFRSCxvQkFBUixzQ0FBaUNHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUFDLE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNDLElBQVg7QUFBQSxHQUFsQixDQUFqQztBQUFBLENBRnlCLENBQTNCOztBQUtBLElBQU1DLGlCQUFpQixHQUFHLDhCQUMvQixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFWO0FBQUEsQ0FEMEIsRUFFL0IsVUFBQUEsT0FBTztBQUFBLG1CQUFRSix1QkFBUixzQ0FBb0NJLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFBSCxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDSSxVQUFYO0FBQUEsR0FBdEIsQ0FBcEM7QUFBQSxDQUZ3QixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuLy8gTk9URTogZGVmYXVsdCBmb3JtYXRzIG11c3QgbWF0Y2ggZmlsZS1oYW5kbGVyLmpzXG5jb25zdCBERUZBVUxUX0ZJTEVfRVhURU5TSU9OUyA9IFsnY3N2JywgJ2pzb24nLCAnZ2VvanNvbiddO1xuY29uc3QgREVGQVVMVF9GSUxFX0ZPUk1BVFMgPSBbJ0NTVicsICdKc29uJywgJ0dlb0pTT04nXTtcblxuZXhwb3J0IGNvbnN0IGdldEZpbGVGb3JtYXROYW1lcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5sb2FkZXJzLFxuICBsb2FkZXJzID0+IFsuLi5ERUZBVUxUX0ZJTEVfRk9STUFUUywgLi4ubG9hZGVycy5tYXAobG9hZGVyID0+IGxvYWRlci5uYW1lKV1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlRXh0ZW5zaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzdGF0ZSA9PiBzdGF0ZS5sb2FkZXJzLFxuICBsb2FkZXJzID0+IFsuLi5ERUZBVUxUX0ZJTEVfRVhURU5TSU9OUywgLi4ubG9hZGVycy5mbGF0TWFwKGxvYWRlciA9PiBsb2FkZXIuZXh0ZW5zaW9ucyldXG4pO1xuIl19