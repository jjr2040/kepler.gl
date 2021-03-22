"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVertices = getVertices;
exports.getCentroid = getCentroid;
exports.idToPolygonGeo = idToPolygonGeo;
Object.defineProperty(exports, "h3GetResolution", {
  enumerable: true,
  get: function get() {
    return _h3Js.h3GetResolution;
  }
});
Object.defineProperty(exports, "h3IsValid", {
  enumerable: true,
  get: function get() {
    return _h3Js.h3IsValid;
  }
});
exports.getHexFields = exports.isHexField = void 0;

var _h3Js = require("h3-js");

var _defaultSettings = require("../../constants/default-settings");

var _dataUtils = require("../../utils/data-utils");

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
// get vertices should return [lon, lat]
function getVertices(_ref) {
  var id = _ref.id;
  // always reverse it
  return (0, _h3Js.h3ToGeoBoundary)(id, true);
} // get centroid should return [lon, lat]


function getCentroid(_ref2) {
  var id = _ref2.id;
  // always reverse it to [lng, lat]
  return (0, _h3Js.h3ToGeo)(id).reverse();
}

function idToPolygonGeo(_ref3, properties) {
  var object = _ref3.object;

  if (!object || !object.id) {
    return null;
  }

  var vertices = getVertices(object);
  return {
    geometry: {
      coordinates: vertices,
      type: 'LineString'
    },
    properties: properties
  };
}

var isHexField = function isHexField(field, fieldIdx, allData) {
  if (!field.type === _defaultSettings.ALL_FIELD_TYPES.string) {
    return false;
  }

  var firstDP = allData.find(function (d) {
    return (0, _dataUtils.notNullorUndefined)(d[fieldIdx]);
  });
  return firstDP && (0, _h3Js.h3IsValid)(firstDP[fieldIdx]);
};

exports.isHexField = isHexField;

var getHexFields = function getHexFields(fields, allData) {
  return fields.filter(function (f, i) {
    return isHexField(f, i, allData);
  });
};

exports.getHexFields = getHexFields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy11dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRWZXJ0aWNlcyIsImlkIiwiZ2V0Q2VudHJvaWQiLCJyZXZlcnNlIiwiaWRUb1BvbHlnb25HZW8iLCJwcm9wZXJ0aWVzIiwib2JqZWN0IiwidmVydGljZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwidHlwZSIsImlzSGV4RmllbGQiLCJmaWVsZCIsImZpZWxkSWR4IiwiYWxsRGF0YSIsIkFMTF9GSUVMRF9UWVBFUyIsInN0cmluZyIsImZpcnN0RFAiLCJmaW5kIiwiZCIsImdldEhleEZpZWxkcyIsImZpZWxkcyIsImZpbHRlciIsImYiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ08sU0FBU0EsV0FBVCxPQUEyQjtBQUFBLE1BQUxDLEVBQUssUUFBTEEsRUFBSztBQUNoQztBQUNBLFNBQU8sMkJBQWdCQSxFQUFoQixFQUFvQixJQUFwQixDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDTyxTQUFTQyxXQUFULFFBQTJCO0FBQUEsTUFBTEQsRUFBSyxTQUFMQSxFQUFLO0FBQ2hDO0FBQ0EsU0FBTyxtQkFBUUEsRUFBUixFQUFZRSxPQUFaLEVBQVA7QUFDRDs7QUFFTSxTQUFTQyxjQUFULFFBQWtDQyxVQUFsQyxFQUE4QztBQUFBLE1BQXJCQyxNQUFxQixTQUFyQkEsTUFBcUI7O0FBQ25ELE1BQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ0wsRUFBdkIsRUFBMkI7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTU0sUUFBUSxHQUFHUCxXQUFXLENBQUNNLE1BQUQsQ0FBNUI7QUFFQSxTQUFPO0FBQ0xFLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxXQUFXLEVBQUVGLFFBREw7QUFFUkcsTUFBQUEsSUFBSSxFQUFFO0FBRkUsS0FETDtBQUtMTCxJQUFBQSxVQUFVLEVBQVZBO0FBTEssR0FBUDtBQU9EOztBQUVNLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsT0FBbEIsRUFBOEI7QUFDdEQsTUFBSSxDQUFDRixLQUFLLENBQUNGLElBQVAsS0FBZ0JLLGlDQUFnQkMsTUFBcEMsRUFBNEM7QUFDMUMsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFBQyxDQUFDO0FBQUEsV0FBSSxtQ0FBbUJBLENBQUMsQ0FBQ04sUUFBRCxDQUFwQixDQUFKO0FBQUEsR0FBZCxDQUFoQjtBQUNBLFNBQU9JLE9BQU8sSUFBSSxxQkFBVUEsT0FBTyxDQUFDSixRQUFELENBQWpCLENBQWxCO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBU1AsT0FBVDtBQUFBLFNBQXFCTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVYixVQUFVLENBQUNZLENBQUQsRUFBSUMsQ0FBSixFQUFPVixPQUFQLENBQXBCO0FBQUEsR0FBZCxDQUFyQjtBQUFBLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoM0dldFJlc29sdXRpb24sIGgzSXNWYWxpZCwgaDNUb0dlbywgaDNUb0dlb0JvdW5kYXJ5fSBmcm9tICdoMy1qcyc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5leHBvcnQge2gzR2V0UmVzb2x1dGlvbiwgaDNJc1ZhbGlkfTtcblxuLy8gZ2V0IHZlcnRpY2VzIHNob3VsZCByZXR1cm4gW2xvbiwgbGF0XVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnRpY2VzKHtpZH0pIHtcbiAgLy8gYWx3YXlzIHJldmVyc2UgaXRcbiAgcmV0dXJuIGgzVG9HZW9Cb3VuZGFyeShpZCwgdHJ1ZSk7XG59XG5cbi8vIGdldCBjZW50cm9pZCBzaG91bGQgcmV0dXJuIFtsb24sIGxhdF1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50cm9pZCh7aWR9KSB7XG4gIC8vIGFsd2F5cyByZXZlcnNlIGl0IHRvIFtsbmcsIGxhdF1cbiAgcmV0dXJuIGgzVG9HZW8oaWQpLnJldmVyc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkVG9Qb2x5Z29uR2VvKHtvYmplY3R9LCBwcm9wZXJ0aWVzKSB7XG4gIGlmICghb2JqZWN0IHx8ICFvYmplY3QuaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHZlcnRpY2VzID0gZ2V0VmVydGljZXMob2JqZWN0KTtcblxuICByZXR1cm4ge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICBjb29yZGluYXRlczogdmVydGljZXMsXG4gICAgICB0eXBlOiAnTGluZVN0cmluZydcbiAgICB9LFxuICAgIHByb3BlcnRpZXNcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzSGV4RmllbGQgPSAoZmllbGQsIGZpZWxkSWR4LCBhbGxEYXRhKSA9PiB7XG4gIGlmICghZmllbGQudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBmaXJzdERQID0gYWxsRGF0YS5maW5kKGQgPT4gbm90TnVsbG9yVW5kZWZpbmVkKGRbZmllbGRJZHhdKSk7XG4gIHJldHVybiBmaXJzdERQICYmIGgzSXNWYWxpZChmaXJzdERQW2ZpZWxkSWR4XSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGV4RmllbGRzID0gKGZpZWxkcywgYWxsRGF0YSkgPT4gZmllbGRzLmZpbHRlcigoZiwgaSkgPT4gaXNIZXhGaWVsZChmLCBpLCBhbGxEYXRhKSk7XG4iXX0=