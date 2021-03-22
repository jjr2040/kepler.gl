"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewDatasetColor = getNewDatasetColor;
exports.createNewDataEntry = createNewDataEntry;
exports.removeSuffixAndDelimiters = removeSuffixAndDelimiters;
exports.findPointFieldPairs = findPointFieldPairs;
exports.sortDatasetByColumn = sortDatasetByColumn;
exports.datasetColorMaker = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _colorUtils = require("./color-utils");

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _defaultSettings = require("../constants/default-settings");

var _utils = require("./utils");

var _dataProcessor = require("../processors/data-processor");

var _gpuFilterUtils = require("./gpu-filter-utils");

var _d3Array = require("d3-array");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

// apply a color for each dataset
// to use as label colors
var datasetColors = ['#8F2FBF', '#005CFF', '#C06C84', '#F8B195', '#547A82', '#3EACA8', '#A2D4AB'].map(_colorUtils.hexToRgb);
/**
 * Random color generator
 * @return {Generator<import('reducers/types').RGBColor>}
 */

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < datasetColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === datasetColors.length) {
            index = 0;
          }

          _context.next = 5;
          return datasetColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var datasetColorMaker = generateColor();
/** @type {typeof import('./dataset-utils').getNewDatasetColor} */

exports.datasetColorMaker = datasetColorMaker;

function getNewDatasetColor(datasets) {
  var presetColors = datasetColors.map(String);
  var usedColors = (0, _lodash["default"])(Object.values(datasets).map(function (d) {
    return String(d.color);
  })).filter(function (c) {
    return presetColors.includes(c);
  });

  if (usedColors.length === presetColors.length) {
    // if we already depleted the pool of color
    return datasetColorMaker.next().value;
  }

  var color = datasetColorMaker.next().value;

  while (usedColors.includes(String(color))) {
    color = datasetColorMaker.next().value;
  }

  return color;
}
/**
 * Take datasets payload from addDataToMap, create datasets entry save to visState
 * @type {typeof import('./dataset-utils').createNewDataEntry}
 */


function createNewDataEntry(_ref) {
  var info = _ref.info,
      data = _ref.data,
      metadata = _ref.metadata;
  var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var validatedData = (0, _dataProcessor.validateInputData)(data);

  if (!validatedData) {
    return {};
  }

  var allData = validatedData.rows;

  var datasetInfo = _objectSpread({
    id: (0, _utils.generateHashId)(4),
    label: 'new dataset'
  }, info || {});

  var dataId = datasetInfo.id; // add tableFieldIndex and id to fields
  // TODO: don't need id and name and tableFieldIndex anymore
  // Add value accessor instead

  var fields = validatedData.fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      id: f.name,
      tableFieldIndex: i + 1
    });
  });
  var allIndexes = allData.map(function (_, i) {
    return i;
  });
  var defaultMetadata = {
    id: datasetInfo.id,
    format: datasetInfo.format || '',
    label: datasetInfo.label || ''
  };
  return (0, _defineProperty2["default"])({}, dataId, _objectSpread(_objectSpread({}, datasetInfo), {}, {
    color: datasetInfo.color || getNewDatasetColor(datasets),
    id: dataId,
    allData: allData,
    allIndexes: allIndexes,
    filteredIndex: allIndexes,
    filteredIndexForDomain: allIndexes,
    fieldPairs: findPointFieldPairs(fields),
    fields: fields,
    gpuFilter: (0, _gpuFilterUtils.getGpuFilterProps)([], dataId, fields),
    metadata: _objectSpread(_objectSpread({}, defaultMetadata), metadata)
  }));
}

function removeSuffixAndDelimiters(layerName, suffix) {
  return layerName.replace(new RegExp(suffix, 'ig'), '').replace(/[_,.]+/g, ' ').trim();
}
/**
 * Find point fields pairs from fields
 *
 * @param fields
 * @returns found point fields
 * @type {typeof import('./dataset-utils').findPointFieldPairs}
 */


function findPointFieldPairs(fields) {
  var allNames = fields.map(function (f) {
    return f.name.toLowerCase();
  }); // get list of all fields with matching suffixes

  return allNames.reduce(function (carry, fieldName, idx) {
    // This search for pairs will early exit if found.
    var _iterator = _createForOfIteratorHelper(_defaultSettings.TRIP_POINT_FIELDS),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var suffixPair = _step.value;

        // match first suffix```
        if (fieldName.endsWith(suffixPair[0])) {
          var _ret = function () {
            // match second suffix
            var otherPattern = new RegExp("".concat(suffixPair[0], "$"));
            var partner = fieldName.replace(otherPattern, suffixPair[1]);
            var partnerIdx = allNames.findIndex(function (d) {
              return d === partner;
            });

            if (partnerIdx > -1) {
              var defaultName = removeSuffixAndDelimiters(fieldName, suffixPair[0]);
              carry.push({
                defaultName: defaultName,
                pair: {
                  lat: {
                    fieldIdx: idx,
                    value: fields[idx].name
                  },
                  lng: {
                    fieldIdx: partnerIdx,
                    value: fields[partnerIdx].name
                  }
                },
                suffix: suffixPair
              });
              return {
                v: carry
              };
            }
          }();

          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return carry;
  }, []);
}
/**
 *
 * @param dataset
 * @param column
 * @param mode
 * @type {typeof import('./dataset-utils').sortDatasetByColumn}
 */


function sortDatasetByColumn(dataset, column, mode) {
  var allIndexes = dataset.allIndexes,
      fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIndex < 0) {
    return dataset;
  }

  var sortBy = _defaultSettings.SORT_ORDER[mode] || _defaultSettings.SORT_ORDER.ASCENDING;

  if (sortBy === _defaultSettings.SORT_ORDER.UNSORT) {
    return _objectSpread(_objectSpread({}, dataset), {}, {
      sortColumn: {},
      sortOrder: null
    });
  }

  var sortFunction = sortBy === _defaultSettings.SORT_ORDER.ASCENDING ? _d3Array.ascending : _d3Array.descending;
  var sortOrder = allIndexes.slice().sort(function (a, b) {
    return sortFunction(allData[a][fieldIndex], allData[b][fieldIndex]);
  });
  return _objectSpread(_objectSpread({}, dataset), {}, {
    sortColumn: (0, _defineProperty2["default"])({}, column, sortBy),
    sortOrder: sortOrder
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kYXRhc2V0LXV0aWxzLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29sb3IiLCJkYXRhc2V0Q29sb3JzIiwibWFwIiwiaGV4VG9SZ2IiLCJpbmRleCIsImxlbmd0aCIsImRhdGFzZXRDb2xvck1ha2VyIiwiZ2V0TmV3RGF0YXNldENvbG9yIiwiZGF0YXNldHMiLCJwcmVzZXRDb2xvcnMiLCJTdHJpbmciLCJ1c2VkQ29sb3JzIiwiT2JqZWN0IiwidmFsdWVzIiwiZCIsImNvbG9yIiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwibmV4dCIsInZhbHVlIiwiY3JlYXRlTmV3RGF0YUVudHJ5IiwiaW5mbyIsImRhdGEiLCJtZXRhZGF0YSIsInZhbGlkYXRlZERhdGEiLCJhbGxEYXRhIiwicm93cyIsImRhdGFzZXRJbmZvIiwiaWQiLCJsYWJlbCIsImRhdGFJZCIsImZpZWxkcyIsImYiLCJpIiwibmFtZSIsInRhYmxlRmllbGRJbmRleCIsImFsbEluZGV4ZXMiLCJfIiwiZGVmYXVsdE1ldGFkYXRhIiwiZm9ybWF0IiwiZmlsdGVyZWRJbmRleCIsImZpbHRlcmVkSW5kZXhGb3JEb21haW4iLCJmaWVsZFBhaXJzIiwiZmluZFBvaW50RmllbGRQYWlycyIsImdwdUZpbHRlciIsInJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMiLCJsYXllck5hbWUiLCJzdWZmaXgiLCJyZXBsYWNlIiwiUmVnRXhwIiwidHJpbSIsImFsbE5hbWVzIiwidG9Mb3dlckNhc2UiLCJyZWR1Y2UiLCJjYXJyeSIsImZpZWxkTmFtZSIsImlkeCIsIlRSSVBfUE9JTlRfRklFTERTIiwic3VmZml4UGFpciIsImVuZHNXaXRoIiwib3RoZXJQYXR0ZXJuIiwicGFydG5lciIsInBhcnRuZXJJZHgiLCJmaW5kSW5kZXgiLCJkZWZhdWx0TmFtZSIsInB1c2giLCJwYWlyIiwibGF0IiwiZmllbGRJZHgiLCJsbmciLCJzb3J0RGF0YXNldEJ5Q29sdW1uIiwiZGF0YXNldCIsImNvbHVtbiIsIm1vZGUiLCJmaWVsZEluZGV4Iiwic29ydEJ5IiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIlVOU09SVCIsInNvcnRDb2x1bW4iLCJzb3J0T3JkZXIiLCJzb3J0RnVuY3Rpb24iLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwic2xpY2UiLCJzb3J0IiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7d0RBaUJVQSxhOztBQWhCVjtBQUNBO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQ3BCLFNBRG9CLEVBRXBCLFNBRm9CLEVBR3BCLFNBSG9CLEVBSXBCLFNBSm9CLEVBS3BCLFNBTG9CLEVBTXBCLFNBTm9CLEVBT3BCLFNBUG9CLEVBUXBCQyxHQVJvQixDQVFoQkMsb0JBUmdCLENBQXRCO0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBVUgsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTUksVUFBQUEsS0FETixHQUNjLENBRGQ7O0FBQUE7QUFBQSxnQkFFU0EsS0FBSyxHQUFHSCxhQUFhLENBQUNJLE1BQWQsR0FBdUIsQ0FGeEM7QUFBQTtBQUFBO0FBQUE7O0FBR0ksY0FBSUQsS0FBSyxLQUFLSCxhQUFhLENBQUNJLE1BQTVCLEVBQW9DO0FBQ2xDRCxZQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUxMO0FBTUksaUJBQU1ILGFBQWEsQ0FBQ0csS0FBSyxFQUFOLENBQW5COztBQU5KO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVTyxJQUFNRSxpQkFBaUIsR0FBR04sYUFBYSxFQUF2QztBQUVQOzs7O0FBQ08sU0FBU08sa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQzNDLE1BQU1DLFlBQVksR0FBR1IsYUFBYSxDQUFDQyxHQUFkLENBQWtCUSxNQUFsQixDQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyx3QkFB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Q25COEMsT0FEbUIsQ0FDOUI5QyxPQUQ4QjtBQUV6RCxNQUFNaUQsVUFBVSxHQUFHM0MsTUFBTSxDQUFDZ0MsU0FBUCxDQUFpQixVQUFBL0IsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0UsSUFBRixLQUFXc0MsTUFBZjtBQUFBLEdBQWxCLENBQW5COztBQUNBLE1BQUlFLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQixXQUFPSCxPQUFQO0FBQ0Q7O0FBRUQsTUFBTUksTUFBTSxHQUFHQyw0QkFBV0gsSUFBWCxLQUFvQkcsNEJBQVdDLFNBQTlDOztBQUVBLE1BQUlGLE1BQU0sS0FBS0MsNEJBQVdFLE1BQTFCLEVBQWtDO0FBQ2hDLDJDQUNLUCxPQURMO0FBRUVRLE1BQUFBLFVBQVUsRUFBRSxFQUZkO0FBR0VDLE1BQUFBLFNBQVMsRUFBRTtBQUhiO0FBS0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHTixNQUFNLEtBQUtDLDRCQUFXQyxTQUF0QixHQUFrQ0ssa0JBQWxDLEdBQThDQyxtQkFBbkU7QUFDQSxNQUFNSCxTQUFTLEdBQUc1QyxVQUFVLENBQ3pCZ0QsS0FEZSxHQUVmQyxJQUZlLENBRVYsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVU4sWUFBWSxDQUFDeEQsT0FBTyxDQUFDNkQsQ0FBRCxDQUFQLENBQVdaLFVBQVgsQ0FBRCxFQUF5QmpELE9BQU8sQ0FBQzhELENBQUQsQ0FBUCxDQUFXYixVQUFYLENBQXpCLENBQXRCO0FBQUEsR0FGVSxDQUFsQjtBQUlBLHlDQUNLSCxPQURMO0FBRUVRLElBQUFBLFVBQVUsdUNBQ1BQLE1BRE8sRUFDRUcsTUFERixDQUZaO0FBS0VLLElBQUFBLFNBQVMsRUFBVEE7QUFMRjtBQU9EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5pbXBvcnQge1RSSVBfUE9JTlRfRklFTERTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7dmFsaWRhdGVJbnB1dERhdGF9IGZyb20gJ3Byb2Nlc3NvcnMvZGF0YS1wcm9jZXNzb3InO1xuaW1wb3J0IHtnZXRHcHVGaWx0ZXJQcm9wc30gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge2FzY2VuZGluZywgZGVzY2VuZGluZ30gZnJvbSAnZDMtYXJyYXknO1xuLy8gYXBwbHkgYSBjb2xvciBmb3IgZWFjaCBkYXRhc2V0XG4vLyB0byB1c2UgYXMgbGFiZWwgY29sb3JzXG5jb25zdCBkYXRhc2V0Q29sb3JzID0gW1xuICAnIzhGMkZCRicsXG4gICcjMDA1Q0ZGJyxcbiAgJyNDMDZDODQnLFxuICAnI0Y4QjE5NScsXG4gICcjNTQ3QTgyJyxcbiAgJyMzRUFDQTgnLFxuICAnI0EyRDRBQidcbl0ubWFwKGhleFRvUmdiKTtcblxuLyoqXG4gKiBSYW5kb20gY29sb3IgZ2VuZXJhdG9yXG4gKiBAcmV0dXJuIHtHZW5lcmF0b3I8aW1wb3J0KCdyZWR1Y2Vycy90eXBlcycpLlJHQkNvbG9yPn1cbiAqL1xuZnVuY3Rpb24qIGdlbmVyYXRlQ29sb3IoKSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IGRhdGFzZXRDb2xvcnMubGVuZ3RoICsgMSkge1xuICAgIGlmIChpbmRleCA9PT0gZGF0YXNldENvbG9ycy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgeWllbGQgZGF0YXNldENvbG9yc1tpbmRleCsrXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YXNldENvbG9yTWFrZXIgPSBnZW5lcmF0ZUNvbG9yKCk7XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhc2V0LXV0aWxzJykuZ2V0TmV3RGF0YXNldENvbG9yfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0RhdGFzZXRDb2xvcihkYXRhc2V0cykge1xuICBjb25zdCBwcmVzZXRDb2xvcnMgPSBkYXRhc2V0Q29sb3JzLm1hcChTdHJpbmcpO1xuICBjb25zdCB1c2VkQ29sb3JzID0gdW5pcShPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZCA9PiBTdHJpbmcoZC5jb2xvcikpKS5maWx0ZXIoYyA9PlxuICAgIHByZXNldENvbG9ycy5pbmNsdWRlcyhjKVxuICApO1xuXG4gIGlmICh1c2VkQ29sb3JzLmxlbmd0aCA9PT0gcHJlc2V0Q29sb3JzLmxlbmd0aCkge1xuICAgIC8vIGlmIHdlIGFscmVhZHkgZGVwbGV0ZWQgdGhlIHBvb2wgb2YgY29sb3JcbiAgICByZXR1cm4gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB9XG5cbiAgbGV0IGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB3aGlsZSAodXNlZENvbG9ycy5pbmNsdWRlcyhTdHJpbmcoY29sb3IpKSkge1xuICAgIGNvbG9yID0gZGF0YXNldENvbG9yTWFrZXIubmV4dCgpLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yO1xufVxuXG4vKipcbiAqIFRha2UgZGF0YXNldHMgcGF5bG9hZCBmcm9tIGFkZERhdGFUb01hcCwgY3JlYXRlIGRhdGFzZXRzIGVudHJ5IHNhdmUgdG8gdmlzU3RhdGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGFzZXQtdXRpbHMnKS5jcmVhdGVOZXdEYXRhRW50cnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdEYXRhRW50cnkoe2luZm8sIGRhdGEsIG1ldGFkYXRhfSwgZGF0YXNldHMgPSB7fSkge1xuICBjb25zdCB2YWxpZGF0ZWREYXRhID0gdmFsaWRhdGVJbnB1dERhdGEoZGF0YSk7XG4gIGlmICghdmFsaWRhdGVkRGF0YSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IGFsbERhdGEgPSB2YWxpZGF0ZWREYXRhLnJvd3M7XG4gIGNvbnN0IGRhdGFzZXRJbmZvID0ge1xuICAgIGlkOiBnZW5lcmF0ZUhhc2hJZCg0KSxcbiAgICBsYWJlbDogJ25ldyBkYXRhc2V0JyxcbiAgICAuLi4oaW5mbyB8fCB7fSlcbiAgfTtcbiAgY29uc3QgZGF0YUlkID0gZGF0YXNldEluZm8uaWQ7XG5cbiAgLy8gYWRkIHRhYmxlRmllbGRJbmRleCBhbmQgaWQgdG8gZmllbGRzXG4gIC8vIFRPRE86IGRvbid0IG5lZWQgaWQgYW5kIG5hbWUgYW5kIHRhYmxlRmllbGRJbmRleCBhbnltb3JlXG4gIC8vIEFkZCB2YWx1ZSBhY2Nlc3NvciBpbnN0ZWFkXG4gIGNvbnN0IGZpZWxkcyA9IHZhbGlkYXRlZERhdGEuZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcbiAgICAuLi5mLFxuICAgIGlkOiBmLm5hbWUsXG4gICAgdGFibGVGaWVsZEluZGV4OiBpICsgMVxuICB9KSk7XG5cbiAgY29uc3QgYWxsSW5kZXhlcyA9IGFsbERhdGEubWFwKChfLCBpKSA9PiBpKTtcbiAgY29uc3QgZGVmYXVsdE1ldGFkYXRhID0ge1xuICAgIGlkOiBkYXRhc2V0SW5mby5pZCxcbiAgICBmb3JtYXQ6IGRhdGFzZXRJbmZvLmZvcm1hdCB8fCAnJyxcbiAgICBsYWJlbDogZGF0YXNldEluZm8ubGFiZWwgfHwgJydcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBbZGF0YUlkXToge1xuICAgICAgLi4uZGF0YXNldEluZm8sXG4gICAgICBjb2xvcjogZGF0YXNldEluZm8uY29sb3IgfHwgZ2V0TmV3RGF0YXNldENvbG9yKGRhdGFzZXRzKSxcbiAgICAgIGlkOiBkYXRhSWQsXG4gICAgICBhbGxEYXRhLFxuICAgICAgYWxsSW5kZXhlcyxcbiAgICAgIGZpbHRlcmVkSW5kZXg6IGFsbEluZGV4ZXMsXG4gICAgICBmaWx0ZXJlZEluZGV4Rm9yRG9tYWluOiBhbGxJbmRleGVzLFxuICAgICAgZmllbGRQYWlyczogZmluZFBvaW50RmllbGRQYWlycyhmaWVsZHMpLFxuICAgICAgZmllbGRzLFxuICAgICAgZ3B1RmlsdGVyOiBnZXRHcHVGaWx0ZXJQcm9wcyhbXSwgZGF0YUlkLCBmaWVsZHMpLFxuICAgICAgbWV0YWRhdGE6IHsuLi5kZWZhdWx0TWV0YWRhdGEsIC4uLm1ldGFkYXRhfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMobGF5ZXJOYW1lLCBzdWZmaXgpIHtcbiAgcmV0dXJuIGxheWVyTmFtZVxuICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoc3VmZml4LCAnaWcnKSwgJycpXG4gICAgLnJlcGxhY2UoL1tfLC5dKy9nLCAnICcpXG4gICAgLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBGaW5kIHBvaW50IGZpZWxkcyBwYWlycyBmcm9tIGZpZWxkc1xuICpcbiAqIEBwYXJhbSBmaWVsZHNcbiAqIEByZXR1cm5zIGZvdW5kIHBvaW50IGZpZWxkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YXNldC11dGlscycpLmZpbmRQb2ludEZpZWxkUGFpcnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUG9pbnRGaWVsZFBhaXJzKGZpZWxkcykge1xuICBjb25zdCBhbGxOYW1lcyA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgLy8gZ2V0IGxpc3Qgb2YgYWxsIGZpZWxkcyB3aXRoIG1hdGNoaW5nIHN1ZmZpeGVzXG4gIHJldHVybiBhbGxOYW1lcy5yZWR1Y2UoKGNhcnJ5LCBmaWVsZE5hbWUsIGlkeCkgPT4ge1xuICAgIC8vIFRoaXMgc2VhcmNoIGZvciBwYWlycyB3aWxsIGVhcmx5IGV4aXQgaWYgZm91bmQuXG4gICAgZm9yIChjb25zdCBzdWZmaXhQYWlyIG9mIFRSSVBfUE9JTlRfRklFTERTKSB7XG4gICAgICAvLyBtYXRjaCBmaXJzdCBzdWZmaXhgYGBcbiAgICAgIGlmIChmaWVsZE5hbWUuZW5kc1dpdGgoc3VmZml4UGFpclswXSkpIHtcbiAgICAgICAgLy8gbWF0Y2ggc2Vjb25kIHN1ZmZpeFxuICAgICAgICBjb25zdCBvdGhlclBhdHRlcm4gPSBuZXcgUmVnRXhwKGAke3N1ZmZpeFBhaXJbMF19XFwkYCk7XG4gICAgICAgIGNvbnN0IHBhcnRuZXIgPSBmaWVsZE5hbWUucmVwbGFjZShvdGhlclBhdHRlcm4sIHN1ZmZpeFBhaXJbMV0pO1xuXG4gICAgICAgIGNvbnN0IHBhcnRuZXJJZHggPSBhbGxOYW1lcy5maW5kSW5kZXgoZCA9PiBkID09PSBwYXJ0bmVyKTtcbiAgICAgICAgaWYgKHBhcnRuZXJJZHggPiAtMSkge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHROYW1lID0gcmVtb3ZlU3VmZml4QW5kRGVsaW1pdGVycyhmaWVsZE5hbWUsIHN1ZmZpeFBhaXJbMF0pO1xuXG4gICAgICAgICAgY2FycnkucHVzaCh7XG4gICAgICAgICAgICBkZWZhdWx0TmFtZSxcbiAgICAgICAgICAgIHBhaXI6IHtcbiAgICAgICAgICAgICAgbGF0OiB7XG4gICAgICAgICAgICAgICAgZmllbGRJZHg6IGlkeCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGRzW2lkeF0ubmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsbmc6IHtcbiAgICAgICAgICAgICAgICBmaWVsZElkeDogcGFydG5lcklkeCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGRzW3BhcnRuZXJJZHhdLm5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4UGFpclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjYXJyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2Fycnk7XG4gIH0sIFtdKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGRhdGFzZXRcbiAqIEBwYXJhbSBjb2x1bW5cbiAqIEBwYXJhbSBtb2RlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhc2V0LXV0aWxzJykuc29ydERhdGFzZXRCeUNvbHVtbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnREYXRhc2V0QnlDb2x1bW4oZGF0YXNldCwgY29sdW1uLCBtb2RlKSB7XG4gIGNvbnN0IHthbGxJbmRleGVzLCBmaWVsZHMsIGFsbERhdGF9ID0gZGF0YXNldDtcbiAgY29uc3QgZmllbGRJbmRleCA9IGZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XG4gIGlmIChmaWVsZEluZGV4IDwgMCkge1xuICAgIHJldHVybiBkYXRhc2V0O1xuICB9XG5cbiAgY29uc3Qgc29ydEJ5ID0gU09SVF9PUkRFUlttb2RlXSB8fCBTT1JUX09SREVSLkFTQ0VORElORztcblxuICBpZiAoc29ydEJ5ID09PSBTT1JUX09SREVSLlVOU09SVCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhc2V0LFxuICAgICAgc29ydENvbHVtbjoge30sXG4gICAgICBzb3J0T3JkZXI6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc29ydEZ1bmN0aW9uID0gc29ydEJ5ID09PSBTT1JUX09SREVSLkFTQ0VORElORyA/IGFzY2VuZGluZyA6IGRlc2NlbmRpbmc7XG4gIGNvbnN0IHNvcnRPcmRlciA9IGFsbEluZGV4ZXNcbiAgICAuc2xpY2UoKVxuICAgIC5zb3J0KChhLCBiKSA9PiBzb3J0RnVuY3Rpb24oYWxsRGF0YVthXVtmaWVsZEluZGV4XSwgYWxsRGF0YVtiXVtmaWVsZEluZGV4XSkpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uZGF0YXNldCxcbiAgICBzb3J0Q29sdW1uOiB7XG4gICAgICBbY29sdW1uXTogc29ydEJ5XG4gICAgfSxcbiAgICBzb3J0T3JkZXJcbiAgfTtcbn1cbiJdfQ==