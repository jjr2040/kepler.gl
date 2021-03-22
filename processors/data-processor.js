"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsvData = processCsvData;
exports.parseRowsByFields = parseRowsByFields;
exports.getSampleForTypeAnalyze = getSampleForTypeAnalyze;
exports.parseCsvRowsByFieldType = parseCsvRowsByFieldType;
exports.getFieldsFromData = getFieldsFromData;
exports.renameDuplicateFields = renameDuplicateFields;
exports.analyzerTypeToFieldType = analyzerTypeToFieldType;
exports.processRowObject = processRowObject;
exports.processGeojson = processGeojson;
exports.formatCsv = formatCsv;
exports.validateInputData = validateInputData;
exports.processKeplerglJSON = processKeplerglJSON;
exports.processKeplerglDataset = processKeplerglDataset;
exports.Processors = exports.DATASET_HANDLERS = exports.PARSE_FIELD_VALUE_FROM_STRING = exports.CSV_NULLS = exports.ACCEPTED_ANALYZER_TYPES = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Dsv = require("d3-dsv");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _assert = _interopRequireDefault(require("assert"));

var _typeAnalyzer = require("type-analyzer");

var _geojsonNormalize = _interopRequireDefault(require("@mapbox/geojson-normalize"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _userGuides = require("../constants/user-guides");

var _utils = require("../utils/utils");

var _PARSE_FIELD_VALUE_FR, _DATASET_HANDLERS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, _typeAnalyzer.DATA_TYPES.TIME, _typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, _typeAnalyzer.DATA_TYPES.BOOLEAN, _typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT]; // if any of these value occurs in csv, parse it to null;
// const CSV_NULLS = ['', 'null', 'NULL', 'Null', 'NaN', '/N'];
// matches empty string

exports.ACCEPTED_ANALYZER_TYPES = ACCEPTED_ANALYZER_TYPES;
var CSV_NULLS = /^(null|NULL|Null|NaN|\/N||)$/;
exports.CSV_NULLS = CSV_NULLS;
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === 'boolean';
  },
  parse: function parse(d) {
    return d === 'true' || d === 'True' || d === '1';
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return ['x', 'X'].includes(field.format) ? typeof d === 'number' : typeof d === 'string';
  },
  parse: function parse(d, field) {
    return ['x', 'X'].includes(field.format) ? Number(d) : d;
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  // Note this will result in NaN for some string
  parse: parseFloat
}), _PARSE_FIELD_VALUE_FR);
/**
 * Process csv data, output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData raw csv string
 * @returns  data object `{fields: [], rows: []}` can be passed to addDataToMaps
 * @type {typeof import('./data-processor').processCsvData}
 * @public
 * @example
 * import {processCsvData} from 'kepler.gl/processors';
 *
 * const testData = `gps_data.utc_timestamp,gps_data.lat,gps_data.lng,gps_data.types,epoch,has_result,id,time,begintrip_ts_utc,begintrip_ts_local,date
 * 2016-09-17 00:09:55,29.9900937,31.2590542,driver_analytics,1472688000000,False,1,2016-09-23T00:00:00.000Z,2016-10-01 09:41:39+00:00,2016-10-01 09:41:39+00:00,2016-09-23
 * 2016-09-17 00:10:56,29.9927699,31.2461142,driver_analytics,1472688000000,False,2,2016-09-23T00:00:00.000Z,2016-10-01 09:46:37+00:00,2016-10-01 16:46:37+00:00,2016-09-23
 * 2016-09-17 00:11:56,29.9907261,31.2312742,driver_analytics,1472688000000,False,3,2016-09-23T00:00:00.000Z,,,2016-09-23
 * 2016-09-17 00:12:58,29.9870074,31.2175827,driver_analytics,1472688000000,False,4,2016-09-23T00:00:00.000Z,,,2016-09-23`
 *
 * const dataset = {
 *  info: {id: 'test_data', label: 'My Csv'},
 *  data: processCsvData(testData)
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: [dataset],
 *  options: {centerMap: true, readOnly: true}
 * }));
 */

exports.PARSE_FIELD_VALUE_FROM_STRING = PARSE_FIELD_VALUE_FROM_STRING;

function processCsvData(rawData, header) {
  var rows;
  var headerRow;

  if (typeof rawData === 'string') {
    var _parsedRows = (0, _d3Dsv.csvParseRows)(rawData);

    if (!Array.isArray(_parsedRows) || _parsedRows.length < 2) {
      // looks like an empty file, throw error to be catch
      throw new Error('process Csv Data Failed: CSV is empty');
    }

    headerRow = _parsedRows[0];
    rows = _parsedRows.slice(1);
  } else if (Array.isArray(rawData) && rawData.length) {
    rows = rawData;
    headerRow = header;

    if (!Array.isArray(headerRow)) {
      // if data is passed in as array of rows and missing header
      // assume first row is header
      headerRow = rawData[0];
      rows = rawData.slice(1);
    }
  }

  if (!rows || !headerRow) {
    throw new Error('invalid input passed to processCsvData');
  } // here we assume the csv file that people uploaded will have first row
  // as name of the column


  cleanUpFalsyCsvValue(rows); // No need to run type detection on every data point
  // here we get a list of none null values to run analyze on

  var sample = getSampleForTypeAnalyze({
    fields: headerRow,
    allData: rows
  });
  var fields = getFieldsFromData(sample, headerRow);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Parse rows of csv by analyzed field types. So that `'1'` -> `1`, `'True'` -> `true`
 * @param {Array<Array>} rows
 * @param {Array<Object>} fields
 */


function parseRowsByFields(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === '_geojson';
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}
/**
 * Getting sample data for analyzing field type.
 *
 * @type {typeof import('./data-processor').getSampleForTypeAnalyze}
 */


function getSampleForTypeAnalyze(_ref) {
  var fields = _ref.fields,
      allData = _ref.allData,
      _ref$sampleCount = _ref.sampleCount,
      sampleCount = _ref$sampleCount === void 0 ? 50 : _ref$sampleCount;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = (0, _d3Array.range)(0, total, 1).map(function (d) {
    return {};
  }); // collect sample data for each field

  fields.forEach(function (field, fieldIdx) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if ((0, _dataUtils.notNullorUndefined)(allData[i][fieldIdx])) {
        sample[j][field] = allData[i][fieldIdx];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}
/**
 * Convert falsy value in csv including `'', 'null', 'NULL', 'Null', 'NaN'` to `null`,
 * so that type-analyzer won't detect it as string
 *
 * @param {Array<Array>} rows
 */


function cleanUpFalsyCsvValue(rows) {
  var re = new RegExp(CSV_NULLS, 'g');

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      // analyzer will set any fields to 'string' if there are empty values
      // which will be parsed as '' by d3.csv
      // here we parse empty data as null
      // TODO: create warning when deltect `CSV_NULLS` in the data
      if (typeof rows[i][j] === 'string' && rows[i][j].match(re)) {
        rows[i][j] = null;
      }
    }
  }
}
/**
 * Process uploaded csv file to parse value by field type
 *
 * @param rows
 * @param geoFieldIdx field index
 * @param field
 * @param i
 * @type {typeof import('./data-processor').parseCsvRowsByFieldType}
 */


function parseCsvRowsByFieldType(rows, geoFieldIdx, field, i) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return (0, _dataUtils.notNullorUndefined)(r[i]);
    });

    if (!first || parser.valid(first[i], field)) {
      return;
    }

    rows.forEach(function (row) {
      // parse string value based on field type
      if (row[i] !== null) {
        row[i] = parser.parse(row[i], field);

        if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
          row[geoFieldIdx].properties[field.name] = row[i];
        }
      }
    });
  }
}
/**
 * Analyze field types from data in `string` format, e.g. uploaded csv.
 * Assign `type`, `tableFieldIndex` and `format` (timestamp only) to each field
 *
 * @param data array of row object
 * @param fieldOrder array of field names as string
 * @returns formatted fields
 * @type {typeof import('./data-processor').getFieldsFromData}
 * @public
 * @example
 *
 * import {getFieldsFromData} from 'kepler.gl/processors';
 * const data = [{
 *   time: '2016-09-17 00:09:55',
 *   value: '4',
 *   surge: '1.2',
 *   isTrip: 'true',
 *   zeroOnes: '0'
 * }, {
 *   time: '2016-09-17 00:30:08',
 *   value: '3',
 *   surge: null,
 *   isTrip: 'false',
 *   zeroOnes: '1'
 * }, {
 *   time: null,
 *   value: '2',
 *   surge: '1.3',
 *   isTrip: null,
 *   zeroOnes: '1'
 * }];
 *
 * const fieldOrder = ['time', 'value', 'surge', 'isTrip', 'zeroOnes'];
 * const fields = getFieldsFromData(data, fieldOrder);
 * // fields = [
 * // {name: 'time', format: 'YYYY-M-D H:m:s', tableFieldIndex: 1, type: 'timestamp'},
 * // {name: 'value', format: '', tableFieldIndex: 4, type: 'integer'},
 * // {name: 'surge', format: '', tableFieldIndex: 5, type: 'real'},
 * // {name: 'isTrip', format: '', tableFieldIndex: 6, type: 'boolean'},
 * // {name: 'zeroOnes', format: '', tableFieldIndex: 7, type: 'integer'}];
 *
 */


function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [{
    regex: /.*geojson|all_points/g,
    dataType: 'GEOMETRY'
  }, {
    regex: /.*census/g,
    dataType: 'STRING'
  }], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.map(function (field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref2 = fieldMeta || {},
        type = _ref2.type,
        format = _ref2.format;

    return {
      name: name,
      format: format,
      tableFieldIndex: index + 1,
      type: analyzerTypeToFieldType(type),
      analyzerType: type
    };
  });
  return result;
}
/**
 * pass in an array of field names, rename duplicated one
 * and return a map from old field index to new name
 *
 * @param {Array} fieldOrder
 * @returns {Object} new field name by index
 */


function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}
/**
 * Convert type-analyzer output to kepler.gl field types
 *
 * @param aType
 * @returns corresponding type in `ALL_FIELD_TYPES`
 * @type {typeof import('./data-processor').analyzerTypeToFieldType}}
 */

/* eslint-disable complexity */


function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return _defaultSettings.ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      return _defaultSettings.ALL_FIELD_TYPES.timestamp;

    case FLOAT:
      return _defaultSettings.ALL_FIELD_TYPES.real;

    case INT:
      return _defaultSettings.ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return _defaultSettings.ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return _defaultSettings.ALL_FIELD_TYPES.geojson;

    case NUMBER:
    case STRING:
    case ZIPCODE:
      return _defaultSettings.ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return _defaultSettings.ALL_FIELD_TYPES.string;
  }
}
/* eslint-enable complexity */

/**
 * Process data where each row is an object, output can be passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData an array of row object, each object should have the same number of keys
 * @returns dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processRowObject}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processRowObject} from 'kepler.gl/processors';
 *
 * const data = [
 *  {lat: 31.27, lng: 127.56, value: 3},
 *  {lat: 31.22, lng: 126.26, value: 1}
 * ];
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {label: 'My Data', id: 'my_data'},
 *    data: processRowObject(data)
 *  }
 * }));
 */


function processRowObject(rawData) {
  if (!Array.isArray(rawData) || !rawData.length) {
    return null;
  }

  var keys = Object.keys(rawData[0]);
  var rows = rawData.map(function (d) {
    return keys.map(function (key) {
      return d[key];
    });
  }); // row object an still contain values like `Null` or `N/A`

  cleanUpFalsyCsvValue(rows);
  return processCsvData(rows, keys);
}
/**
 * Process GeoJSON [`FeatureCollection`](http://wiki.geojson.org/GeoJSON_draft_version_6#FeatureCollection),
 * output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 *
 * @param  rawData raw geojson feature collection
 * @returns  dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processGeojson}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processGeojson} from 'kepler.gl/processors';
 *
 * const geojson = {
 * 	"type" : "FeatureCollection",
 * 	"features" : [{
 * 		"type" : "Feature",
 * 		"properties" : {
 * 			"capacity" : "10",
 * 			"type" : "U-Rack"
 * 		},
 * 		"geometry" : {
 * 			"type" : "Point",
 * 			"coordinates" : [ -71.073283, 42.417500 ]
 * 		}
 * 	}]
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {
 *      label: 'Sample Taxi Trips in New York City',
 *      id: 'test_trip_data'
 *    },
 *    data: processGeojson(geojson)
 *  }
 * }));
 */


function processGeojson(rawData) {
  var normalizedGeojson = (0, _geojsonNormalize["default"])(rawData);

  if (!normalizedGeojson || !Array.isArray(normalizedGeojson.features)) {
    var error = new Error("Read File Failed: File is not a valid GeoJSON. Read more about [supported file format](".concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")"));
    throw error; // fail to normalize geojson
  } // getting all feature fields


  var allDataRows = [];

  for (var i = 0; i < normalizedGeojson.features.length; i++) {
    var f = normalizedGeojson.features[i];

    if (f.geometry) {
      allDataRows.push(_objectSpread({
        // add feature to _geojson field
        _geojson: f
      }, f.properties || {}));
    }
  } // get all the field


  var fields = allDataRows.reduce(function (prev, curr) {
    Object.keys(curr).forEach(function (key) {
      if (!prev.includes(key)) {
        prev.push(key);
      }
    });
    return prev;
  }, []); // make sure each feature has exact same fields

  allDataRows.forEach(function (d) {
    fields.forEach(function (f) {
      if (!(f in d)) {
        d[f] = null;
        d._geojson.properties[f] = null;
      }
    });
  });
  return processRowObject(allDataRows);
}
/**
 * On export data to csv
 * @param {Array<Array>} data `dataset.allData` or filtered data `dataset.data`
 * @param {Array<Object>} fields `dataset.fields`
 * @returns {string} csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  data.forEach(function (row) {
    formattedData.push(row.map(function (d, i) {
      return (0, _dataUtils.parseFieldValue)(d, fields[i].type);
    }));
  });
  return (0, _d3Dsv.csvFormatRows)(formattedData);
}
/**
 * Validate input data, adding missing field types, rename duplicate columns
 * @type {typeof import('./data-processor').validateInputData}
 */


function validateInputData(data) {
  if (!(0, _utils.isPlainObject)(data)) {
    (0, _assert["default"])('addDataToMap Error: dataset.data cannot be null');
    return null;
  } else if (!Array.isArray(data.fields)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.fields to be an array');
    return null;
  } else if (!Array.isArray(data.rows)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.rows to be an array');
    return null;
  }

  var fields = data.fields,
      rows = data.rows; // check if all fields has name, format and type

  var allValid = fields.every(function (f, i) {
    if (!(0, _utils.isPlainObject)(f)) {
      (0, _assert["default"])("fields needs to be an array of object, but find ".concat((0, _typeof2["default"])(f)));
      fields[i] = {};
    }

    if (!f.name) {
      (0, _assert["default"])("field.name is required but missing in ".concat(JSON.stringify(f))); // assign a name

      fields[i].name = "column_".concat(i);
    }

    if (!_defaultSettings.ALL_FIELD_TYPES[f.type]) {
      (0, _assert["default"])("unknown field type ".concat(f.type));
      return false;
    }

    if (!fields.every(function (field) {
      return field.analyzerType;
    })) {
      (0, _assert["default"])('field missing analyzerType');
      return false;
    } // check time format is correct based on first 10 not empty element


    if (f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
      var sample = findNonEmptyRowsAtField(rows, i, 10).map(function (r) {
        return {
          ts: r[i]
        };
      });

      var analyzedType = _typeAnalyzer.Analyzer.computeColMeta(sample)[0];

      return analyzedType && analyzedType.category === 'TIME' && analyzedType.format === f.format;
    }

    return true;
  });

  if (allValid) {
    return {
      rows: rows,
      fields: fields
    };
  } // if any field has missing type, recalculate it for everyone
  // because we simply lost faith in humanity


  var sampleData = getSampleForTypeAnalyze({
    fields: fields.map(function (f) {
      return f.name;
    }),
    allData: rows
  });
  var fieldOrder = fields.map(function (f) {
    return f.name;
  });
  var meta = getFieldsFromData(sampleData, fieldOrder);
  var updatedFields = fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      type: meta[i].type,
      format: meta[i].format,
      analyzerType: meta[i].analyzerType
    });
  });
  return {
    fields: updatedFields,
    rows: rows
  };
}

function findNonEmptyRowsAtField(rows, fieldIdx, total) {
  var sample = [];
  var i = 0;

  while (sample.length < total && i < rows.length) {
    if ((0, _dataUtils.notNullorUndefined)(rows[i][fieldIdx])) {
      sample.push(rows[i]);
    }

    i++;
  }

  return sample;
}
/**
 * Process saved kepler.gl json to be pass to [`addDataToMap`](../actions/actions.md#adddatatomap).
 * The json object should contain `datasets` and `config`.
 * @param {Object} rawData
 * @param {Array} rawData.datasets
 * @param {Object} rawData.config
 * @returns {Object} datasets and config `{datasets: {}, config: {}}`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processKeplerglJSON} from 'kepler.gl/processors';
 *
 * dispatch(addDataToMap(processKeplerglJSON(keplerGlJson)));
 */


function processKeplerglJSON(rawData) {
  return rawData ? _schemas["default"].load(rawData.datasets, rawData.config) : null;
}
/**
 * Parse a single or an array of datasets saved using kepler.gl schema
 * @param {Array | Array<Object>} rawData
 */


function processKeplerglDataset(rawData) {
  if (!rawData) {
    return null;
  }

  var results = _schemas["default"].parseSavedData((0, _utils.toArray)(rawData));

  if (!results) {
    return null;
  }

  return Array.isArray(rawData) ? results : results[0];
}

var DATASET_HANDLERS = (_DATASET_HANDLERS = {}, (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.row, processRowObject), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.geojson, processGeojson), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.csv, processCsvData), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.keplergl, processKeplerglDataset), _DATASET_HANDLERS);
exports.DATASET_HANDLERS = DATASET_HANDLERS;
var Processors = {
  processGeojson: processGeojson,
  processCsvData: processCsvData,
  processRowObject: processRowObject,
  processKeplerglJSON: processKeplerglJSON,
  processKeplerglDataset: processKeplerglDataset,
  analyzerTypeToFieldType: analyzerTypeToFieldType,
  getFieldsFromData: getFieldsFromData,
  parseCsvRowsByFieldType: parseCsvRowsByFieldType,
  formatCsv: formatCsv
};
exports.Processors = Processors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIkFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTIiwiQW5hbHl6ZXJEQVRBX1RZUEVTIiwiREFURSIsIlRJTUUiLCJEQVRFVElNRSIsIk5VTUJFUiIsIklOVCIsIkZMT0FUIiwiQk9PTEVBTiIsIlNUUklORyIsIkdFT01FVFJZIiwiR0VPTUVUUllfRlJPTV9TVFJJTkciLCJQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HIiwiWklQQ09ERSIsIkFSUkFZIiwiT0JKRUNUIiwiQ1NWX05VTExTIiwiSUdOT1JFX0RBVEFfVFlQRVMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwidHlwZSIsImluY2x1ZGVzIiwiUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkciLCJBTExfRklFTERfVFlQRVMiLCJ2YWxpZCIsImQiLCJwYXJzZSIsImludGVnZXIiLCJwYXJzZUludCIsInRpbWVzdGFtcCIsImZpZWxkIiwiZm9ybWF0IiwiTnVtYmVyIiwicmVhbCIsInBhcnNlRmxvYXQiLCJwcm9jZXNzQ3N2RGF0YSIsInJhd0RhdGEiLCJoZWFkZXIiLCJyb3dzIiwiaGVhZGVyUm93IiwicGFyc2VkUm93cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkVycm9yIiwic2xpY2UiLCJjbGVhblVwRmFsc3lDc3ZWYWx1ZSIsInNhbXBsZSIsImdldFNhbXBsZUZvclR5cGVBbmFseXplIiwiZmllbGRzIiwiYWxsRGF0YSIsImdldEZpZWxkc0Zyb21EYXRhIiwicGFyc2VSb3dzQnlGaWVsZHMiLCJnZW9qc29uRmllbGRJZHgiLCJmaW5kSW5kZXgiLCJmIiwibmFtZSIsImZvckVhY2giLCJwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZSIsImJpbmQiLCJzYW1wbGVDb3VudCIsInRvdGFsIiwiTWF0aCIsIm1pbiIsIm1hcCIsImZpZWxkSWR4IiwiaSIsImoiLCJyZSIsIlJlZ0V4cCIsIm1hdGNoIiwiZ2VvRmllbGRJZHgiLCJwYXJzZXIiLCJmaXJzdCIsImZpbmQiLCJyIiwicm93IiwicHJvcGVydGllcyIsImRhdGEiLCJmaWVsZE9yZGVyIiwibWV0YWRhdGEiLCJBbmFseXplciIsImNvbXB1dGVDb2xNZXRhIiwicmVnZXgiLCJkYXRhVHlwZSIsImlnbm9yZWREYXRhVHlwZXMiLCJyZW5hbWVEdXBsaWNhdGVGaWVsZHMiLCJmaWVsZEJ5SW5kZXgiLCJyZXN1bHQiLCJpbmRleCIsImZpZWxkTWV0YSIsIm0iLCJrZXkiLCJ0YWJsZUZpZWxkSW5kZXgiLCJhbmFseXplclR5cGVUb0ZpZWxkVHlwZSIsImFuYWx5emVyVHlwZSIsInJlZHVjZSIsImFjY3UiLCJhbGxOYW1lcyIsImZpZWxkTmFtZSIsImNvdW50ZXIiLCJwdXNoIiwiYVR5cGUiLCJkYXRlIiwiZ2VvanNvbiIsInN0cmluZyIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwicHJvY2Vzc1Jvd09iamVjdCIsInByb2Nlc3NHZW9qc29uIiwibm9ybWFsaXplZEdlb2pzb24iLCJmZWF0dXJlcyIsImVycm9yIiwiR1VJREVTX0ZJTEVfRk9STUFUX0RPQyIsImFsbERhdGFSb3dzIiwiZ2VvbWV0cnkiLCJfZ2VvanNvbiIsInByZXYiLCJjdXJyIiwiZm9ybWF0Q3N2IiwiY29sdW1ucyIsImZvcm1hdHRlZERhdGEiLCJ2YWxpZGF0ZUlucHV0RGF0YSIsImFsbFZhbGlkIiwiZXZlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmluZE5vbkVtcHR5Um93c0F0RmllbGQiLCJ0cyIsImFuYWx5emVkVHlwZSIsImNhdGVnb3J5Iiwic2FtcGxlRGF0YSIsIm1ldGEiLCJ1cGRhdGVkRmllbGRzIiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsIktlcGxlckdsU2NoZW1hIiwibG9hZCIsImRhdGFzZXRzIiwiY29uZmlnIiwicHJvY2Vzc0tlcGxlcmdsRGF0YXNldCIsInJlc3VsdHMiLCJwYXJzZVNhdmVkRGF0YSIsIkRBVEFTRVRfSEFORExFUlMiLCJEQVRBU0VUX0ZPUk1BVFMiLCJj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RyxPQUFPLEdBQUdMLG9CQUFlTSxjQUFmLENBQThCLG9CQUFRekcsT0FBUixDQUE5QixDQUFoQjs7QUFDQSxNQUFJLENBQUN3RyxPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPbkcsS0FBSyxDQUFDQyxPQUFOLENBQWNOLE9BQWQsSUFBeUJ3RyxPQUF6QixHQUFtQ0EsT0FBTyxDQUFDLENBQUQsQ0FBakQ7QUFDRDs7QUFFTSxJQUFNRSxnQkFBZ0IsZ0ZBQzFCQyxpQ0FBZ0JuRSxHQURVLEVBQ0pnQyxnQkFESSx1REFFMUJtQyxpQ0FBZ0J2QyxPQUZVLEVBRUFLLGNBRkEsdURBRzFCa0MsaUNBQWdCQyxHQUhVLEVBR0o3RyxjQUhJLHVEQUkxQjRHLGlDQUFnQkUsUUFKVSxFQUlDTixzQkFKRCxxQkFBdEI7O0FBT0EsSUFBTU8sVUFBVSxHQUFHO0FBQ3hCckMsRUFBQUEsY0FBYyxFQUFkQSxjQUR3QjtBQUV4QjFFLEVBQUFBLGNBQWMsRUFBZEEsY0FGd0I7QUFHeEJ5RSxFQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUh3QjtBQUl4QjBCLEVBQUFBLG1CQUFtQixFQUFuQkEsbUJBSndCO0FBS3hCSyxFQUFBQSxzQkFBc0IsRUFBdEJBLHNCQUx3QjtBQU14QjdDLEVBQUFBLHVCQUF1QixFQUF2QkEsdUJBTndCO0FBT3hCM0MsRUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFQd0I7QUFReEJPLEVBQUFBLHVCQUF1QixFQUF2QkEsdUJBUndCO0FBU3hCNkQsRUFBQUEsU0FBUyxFQUFUQTtBQVR3QixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3N2UGFyc2VSb3dzLCBjc3ZGb3JtYXRSb3dzfSBmcm9tICdkMy1kc3YnO1xuaW1wb3J0IHtyYW5nZX0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtjb25zb2xlIGFzIGdsb2JhbENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtBbmFseXplciwgREFUQV9UWVBFUyBhcyBBbmFseXplckRBVEFfVFlQRVN9IGZyb20gJ3R5cGUtYW5hbHl6ZXInO1xuaW1wb3J0IG5vcm1hbGl6ZSBmcm9tICdAbWFwYm94L2dlb2pzb24tbm9ybWFsaXplJztcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBEQVRBU0VUX0ZPUk1BVFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkLCBwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xuaW1wb3J0IHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IHtpc1BsYWluT2JqZWN0LCB0b0FycmF5fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBBQ0NFUFRFRF9BTkFMWVpFUl9UWVBFUyA9IFtcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkRBVEUsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5USU1FLFxuICBBbmFseXplckRBVEFfVFlQRVMuREFURVRJTUUsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5OVU1CRVIsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5JTlQsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5GTE9BVCxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkJPT0xFQU4sXG4gIEFuYWx5emVyREFUQV9UWVBFUy5TVFJJTkcsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5HRU9NRVRSWSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkdFT01FVFJZX0ZST01fU1RSSU5HLFxuICBBbmFseXplckRBVEFfVFlQRVMuUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlpJUENPREUsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5BUlJBWSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLk9CSkVDVFxuXTtcblxuLy8gaWYgYW55IG9mIHRoZXNlIHZhbHVlIG9jY3VycyBpbiBjc3YsIHBhcnNlIGl0IHRvIG51bGw7XG4vLyBjb25zdCBDU1ZfTlVMTFMgPSBbJycsICdudWxsJywgJ05VTEwnLCAnTnVsbCcsICdOYU4nLCAnL04nXTtcbi8vIG1hdGNoZXMgZW1wdHkgc3RyaW5nXG5leHBvcnQgY29uc3QgQ1NWX05VTExTID0gL14obnVsbHxOVUxMfE51bGx8TmFOfFxcL058fCkkLztcblxuY29uc3QgSUdOT1JFX0RBVEFfVFlQRVMgPSBPYmplY3Qua2V5cyhBbmFseXplckRBVEFfVFlQRVMpLmZpbHRlcihcbiAgdHlwZSA9PiAhQUNDRVBURURfQU5BTFlaRVJfVFlQRVMuaW5jbHVkZXModHlwZSlcbik7XG5cbmV4cG9ydCBjb25zdCBQQVJTRV9GSUVMRF9WQUxVRV9GUk9NX1NUUklORyA9IHtcbiAgW0FMTF9GSUVMRF9UWVBFUy5ib29sZWFuXToge1xuICAgIHZhbGlkOiBkID0+IHR5cGVvZiBkID09PSAnYm9vbGVhbicsXG4gICAgcGFyc2U6IGQgPT4gZCA9PT0gJ3RydWUnIHx8IGQgPT09ICdUcnVlJyB8fCBkID09PSAnMSdcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXToge1xuICAgIHZhbGlkOiBkID0+IHBhcnNlSW50KGQsIDEwKSA9PT0gZCxcbiAgICBwYXJzZTogZCA9PiBwYXJzZUludChkLCAxMClcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXBdOiB7XG4gICAgdmFsaWQ6IChkLCBmaWVsZCkgPT5cbiAgICAgIFsneCcsICdYJ10uaW5jbHVkZXMoZmllbGQuZm9ybWF0KSA/IHR5cGVvZiBkID09PSAnbnVtYmVyJyA6IHR5cGVvZiBkID09PSAnc3RyaW5nJyxcbiAgICBwYXJzZTogKGQsIGZpZWxkKSA9PiAoWyd4JywgJ1gnXS5pbmNsdWRlcyhmaWVsZC5mb3JtYXQpID8gTnVtYmVyKGQpIDogZClcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXToge1xuICAgIHZhbGlkOiBkID0+IHBhcnNlRmxvYXQoZCkgPT09IGQsXG4gICAgLy8gTm90ZSB0aGlzIHdpbGwgcmVzdWx0IGluIE5hTiBmb3Igc29tZSBzdHJpbmdcbiAgICBwYXJzZTogcGFyc2VGbG9hdFxuICB9XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgY3N2IGRhdGEsIG91dHB1dCBhIGRhdGEgb2JqZWN0IHdpdGggYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gLlxuICogVGhlIGRhdGEgb2JqZWN0IGNhbiBiZSB3cmFwcGVkIGluIGEgYGRhdGFzZXRgIGFuZCBwYXNzIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcbiAqIEBwYXJhbSByYXdEYXRhIHJhdyBjc3Ygc3RyaW5nXG4gKiBAcmV0dXJucyAgZGF0YSBvYmplY3QgYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gIGNhbiBiZSBwYXNzZWQgdG8gYWRkRGF0YVRvTWFwc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzQ3N2RGF0YX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3Byb2Nlc3NDc3ZEYXRhfSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG4gKlxuICogY29uc3QgdGVzdERhdGEgPSBgZ3BzX2RhdGEudXRjX3RpbWVzdGFtcCxncHNfZGF0YS5sYXQsZ3BzX2RhdGEubG5nLGdwc19kYXRhLnR5cGVzLGVwb2NoLGhhc19yZXN1bHQsaWQsdGltZSxiZWdpbnRyaXBfdHNfdXRjLGJlZ2ludHJpcF90c19sb2NhbCxkYXRlXG4gKiAyMDE2LTA5LTE3IDAwOjA5OjU1LDI5Ljk5MDA5MzcsMzEuMjU5MDU0Mixkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsMSwyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosMjAxNi0xMC0wMSAwOTo0MTozOSswMDowMCwyMDE2LTEwLTAxIDA5OjQxOjM5KzAwOjAwLDIwMTYtMDktMjNcbiAqIDIwMTYtMDktMTcgMDA6MTA6NTYsMjkuOTkyNzY5OSwzMS4yNDYxMTQyLGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSwyLDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwyMDE2LTEwLTAxIDA5OjQ2OjM3KzAwOjAwLDIwMTYtMTAtMDEgMTY6NDY6MzcrMDA6MDAsMjAxNi0wOS0yM1xuICogMjAxNi0wOS0xNyAwMDoxMTo1NiwyOS45OTA3MjYxLDMxLjIzMTI3NDIsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDMsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLCwsMjAxNi0wOS0yM1xuICogMjAxNi0wOS0xNyAwMDoxMjo1OCwyOS45ODcwMDc0LDMxLjIxNzU4MjcsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDQsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLCwsMjAxNi0wOS0yM2BcbiAqXG4gKiBjb25zdCBkYXRhc2V0ID0ge1xuICogIGluZm86IHtpZDogJ3Rlc3RfZGF0YScsIGxhYmVsOiAnTXkgQ3N2J30sXG4gKiAgZGF0YTogcHJvY2Vzc0NzdkRhdGEodGVzdERhdGEpXG4gKiB9O1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XG4gKiAgZGF0YXNldHM6IFtkYXRhc2V0XSxcbiAqICBvcHRpb25zOiB7Y2VudGVyTWFwOiB0cnVlLCByZWFkT25seTogdHJ1ZX1cbiAqIH0pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NDc3ZEYXRhKHJhd0RhdGEsIGhlYWRlcikge1xuICBsZXQgcm93cztcbiAgbGV0IGhlYWRlclJvdztcblxuICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcGFyc2VkUm93cyA9IGNzdlBhcnNlUm93cyhyYXdEYXRhKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJzZWRSb3dzKSB8fCBwYXJzZWRSb3dzLmxlbmd0aCA8IDIpIHtcbiAgICAgIC8vIGxvb2tzIGxpa2UgYW4gZW1wdHkgZmlsZSwgdGhyb3cgZXJyb3IgdG8gYmUgY2F0Y2hcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHJvY2VzcyBDc3YgRGF0YSBGYWlsZWQ6IENTViBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBoZWFkZXJSb3cgPSBwYXJzZWRSb3dzWzBdO1xuICAgIHJvd3MgPSBwYXJzZWRSb3dzLnNsaWNlKDEpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmF3RGF0YSkgJiYgcmF3RGF0YS5sZW5ndGgpIHtcbiAgICByb3dzID0gcmF3RGF0YTtcbiAgICBoZWFkZXJSb3cgPSBoZWFkZXI7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGVhZGVyUm93KSkge1xuICAgICAgLy8gaWYgZGF0YSBpcyBwYXNzZWQgaW4gYXMgYXJyYXkgb2Ygcm93cyBhbmQgbWlzc2luZyBoZWFkZXJcbiAgICAgIC8vIGFzc3VtZSBmaXJzdCByb3cgaXMgaGVhZGVyXG4gICAgICBoZWFkZXJSb3cgPSByYXdEYXRhWzBdO1xuICAgICAgcm93cyA9IHJhd0RhdGEuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyb3dzIHx8ICFoZWFkZXJSb3cpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5wdXQgcGFzc2VkIHRvIHByb2Nlc3NDc3ZEYXRhJyk7XG4gIH1cblxuICAvLyBoZXJlIHdlIGFzc3VtZSB0aGUgY3N2IGZpbGUgdGhhdCBwZW9wbGUgdXBsb2FkZWQgd2lsbCBoYXZlIGZpcnN0IHJvd1xuICAvLyBhcyBuYW1lIG9mIHRoZSBjb2x1bW5cblxuICBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKTtcbiAgLy8gTm8gbmVlZCB0byBydW4gdHlwZSBkZXRlY3Rpb24gb24gZXZlcnkgZGF0YSBwb2ludFxuICAvLyBoZXJlIHdlIGdldCBhIGxpc3Qgb2Ygbm9uZSBudWxsIHZhbHVlcyB0byBydW4gYW5hbHl6ZSBvblxuICBjb25zdCBzYW1wbGUgPSBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7ZmllbGRzOiBoZWFkZXJSb3csIGFsbERhdGE6IHJvd3N9KTtcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlLCBoZWFkZXJSb3cpO1xuICBjb25zdCBwYXJzZWRSb3dzID0gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKTtcblxuICByZXR1cm4ge2ZpZWxkcywgcm93czogcGFyc2VkUm93c307XG59XG5cbi8qKlxuICogUGFyc2Ugcm93cyBvZiBjc3YgYnkgYW5hbHl6ZWQgZmllbGQgdHlwZXMuIFNvIHRoYXQgYCcxJ2AgLT4gYDFgLCBgJ1RydWUnYCAtPiBgdHJ1ZWBcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSByb3dzXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKSB7XG4gIC8vIEVkaXQgcm93cyBpbiBwbGFjZVxuICBjb25zdCBnZW9qc29uRmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSAnX2dlb2pzb24nKTtcbiAgZmllbGRzLmZvckVhY2gocGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUuYmluZChudWxsLCByb3dzLCBnZW9qc29uRmllbGRJZHgpKTtcblxuICByZXR1cm4gcm93cztcbn1cbi8qKlxuICogR2V0dGluZyBzYW1wbGUgZGF0YSBmb3IgYW5hbHl6aW5nIGZpZWxkIHR5cGUuXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5nZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHMsIGFsbERhdGEsIHNhbXBsZUNvdW50ID0gNTB9KSB7XG4gIGNvbnN0IHRvdGFsID0gTWF0aC5taW4oc2FtcGxlQ291bnQsIGFsbERhdGEubGVuZ3RoKTtcbiAgLy8gY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xuICBjb25zdCBzYW1wbGUgPSByYW5nZSgwLCB0b3RhbCwgMSkubWFwKGQgPT4gKHt9KSk7XG5cbiAgLy8gY29sbGVjdCBzYW1wbGUgZGF0YSBmb3IgZWFjaCBmaWVsZFxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQsIGZpZWxkSWR4KSA9PiB7XG4gICAgLy8gZGF0YSBjb3VudGVyXG4gICAgbGV0IGkgPSAwO1xuICAgIC8vIHNhbXBsZSBjb3VudGVyXG4gICAgbGV0IGogPSAwO1xuXG4gICAgd2hpbGUgKGogPCB0b3RhbCkge1xuICAgICAgaWYgKGkgPj0gYWxsRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gaWYgZGVwbGV0ZWQgZGF0YSBwb29sXG4gICAgICAgIHNhbXBsZVtqXVtmaWVsZF0gPSBudWxsO1xuICAgICAgICBqKys7XG4gICAgICB9IGVsc2UgaWYgKG5vdE51bGxvclVuZGVmaW5lZChhbGxEYXRhW2ldW2ZpZWxkSWR4XSkpIHtcbiAgICAgICAgc2FtcGxlW2pdW2ZpZWxkXSA9IGFsbERhdGFbaV1bZmllbGRJZHhdO1xuICAgICAgICBqKys7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzYW1wbGU7XG59XG5cbi8qKlxuICogQ29udmVydCBmYWxzeSB2YWx1ZSBpbiBjc3YgaW5jbHVkaW5nIGAnJywgJ251bGwnLCAnTlVMTCcsICdOdWxsJywgJ05hTidgIHRvIGBudWxsYCxcbiAqIHNvIHRoYXQgdHlwZS1hbmFseXplciB3b24ndCBkZXRlY3QgaXQgYXMgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcbiAqL1xuZnVuY3Rpb24gY2xlYW5VcEZhbHN5Q3N2VmFsdWUocm93cykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoQ1NWX05VTExTLCAnZycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3NbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGFuYWx5emVyIHdpbGwgc2V0IGFueSBmaWVsZHMgdG8gJ3N0cmluZycgaWYgdGhlcmUgYXJlIGVtcHR5IHZhbHVlc1xuICAgICAgLy8gd2hpY2ggd2lsbCBiZSBwYXJzZWQgYXMgJycgYnkgZDMuY3N2XG4gICAgICAvLyBoZXJlIHdlIHBhcnNlIGVtcHR5IGRhdGEgYXMgbnVsbFxuICAgICAgLy8gVE9ETzogY3JlYXRlIHdhcm5pbmcgd2hlbiBkZWx0ZWN0IGBDU1ZfTlVMTFNgIGluIHRoZSBkYXRhXG4gICAgICBpZiAodHlwZW9mIHJvd3NbaV1bal0gPT09ICdzdHJpbmcnICYmIHJvd3NbaV1bal0ubWF0Y2gocmUpKSB7XG4gICAgICAgIHJvd3NbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFByb2Nlc3MgdXBsb2FkZWQgY3N2IGZpbGUgdG8gcGFyc2UgdmFsdWUgYnkgZmllbGQgdHlwZVxuICpcbiAqIEBwYXJhbSByb3dzXG4gKiBAcGFyYW0gZ2VvRmllbGRJZHggZmllbGQgaW5kZXhcbiAqIEBwYXJhbSBmaWVsZFxuICogQHBhcmFtIGlcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykucGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZShyb3dzLCBnZW9GaWVsZElkeCwgZmllbGQsIGkpIHtcbiAgY29uc3QgcGFyc2VyID0gUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkdbZmllbGQudHlwZV07XG4gIGlmIChwYXJzZXIpIHtcbiAgICAvLyBjaGVjayBmaXJzdCBub3QgbnVsbCB2YWx1ZSBvZiBpdCdzIGFscmVhZHkgcGFyc2VkXG4gICAgY29uc3QgZmlyc3QgPSByb3dzLmZpbmQociA9PiBub3ROdWxsb3JVbmRlZmluZWQocltpXSkpO1xuICAgIGlmICghZmlyc3QgfHwgcGFyc2VyLnZhbGlkKGZpcnN0W2ldLCBmaWVsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAvLyBwYXJzZSBzdHJpbmcgdmFsdWUgYmFzZWQgb24gZmllbGQgdHlwZVxuICAgICAgaWYgKHJvd1tpXSAhPT0gbnVsbCkge1xuICAgICAgICByb3dbaV0gPSBwYXJzZXIucGFyc2Uocm93W2ldLCBmaWVsZCk7XG4gICAgICAgIGlmIChnZW9GaWVsZElkeCA+IC0xICYmIHJvd1tnZW9GaWVsZElkeF0gJiYgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzW2ZpZWxkLm5hbWVdID0gcm93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbmFseXplIGZpZWxkIHR5cGVzIGZyb20gZGF0YSBpbiBgc3RyaW5nYCBmb3JtYXQsIGUuZy4gdXBsb2FkZWQgY3N2LlxuICogQXNzaWduIGB0eXBlYCwgYHRhYmxlRmllbGRJbmRleGAgYW5kIGBmb3JtYXRgICh0aW1lc3RhbXAgb25seSkgdG8gZWFjaCBmaWVsZFxuICpcbiAqIEBwYXJhbSBkYXRhIGFycmF5IG9mIHJvdyBvYmplY3RcbiAqIEBwYXJhbSBmaWVsZE9yZGVyIGFycmF5IG9mIGZpZWxkIG5hbWVzIGFzIHN0cmluZ1xuICogQHJldHVybnMgZm9ybWF0dGVkIGZpZWxkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5nZXRGaWVsZHNGcm9tRGF0YX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtnZXRGaWVsZHNGcm9tRGF0YX0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuICogY29uc3QgZGF0YSA9IFt7XG4gKiAgIHRpbWU6ICcyMDE2LTA5LTE3IDAwOjA5OjU1JyxcbiAqICAgdmFsdWU6ICc0JyxcbiAqICAgc3VyZ2U6ICcxLjInLFxuICogICBpc1RyaXA6ICd0cnVlJyxcbiAqICAgemVyb09uZXM6ICcwJ1xuICogfSwge1xuICogICB0aW1lOiAnMjAxNi0wOS0xNyAwMDozMDowOCcsXG4gKiAgIHZhbHVlOiAnMycsXG4gKiAgIHN1cmdlOiBudWxsLFxuICogICBpc1RyaXA6ICdmYWxzZScsXG4gKiAgIHplcm9PbmVzOiAnMSdcbiAqIH0sIHtcbiAqICAgdGltZTogbnVsbCxcbiAqICAgdmFsdWU6ICcyJyxcbiAqICAgc3VyZ2U6ICcxLjMnLFxuICogICBpc1RyaXA6IG51bGwsXG4gKiAgIHplcm9PbmVzOiAnMSdcbiAqIH1dO1xuICpcbiAqIGNvbnN0IGZpZWxkT3JkZXIgPSBbJ3RpbWUnLCAndmFsdWUnLCAnc3VyZ2UnLCAnaXNUcmlwJywgJ3plcm9PbmVzJ107XG4gKiBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHNGcm9tRGF0YShkYXRhLCBmaWVsZE9yZGVyKTtcbiAqIC8vIGZpZWxkcyA9IFtcbiAqIC8vIHtuYW1lOiAndGltZScsIGZvcm1hdDogJ1lZWVktTS1EIEg6bTpzJywgdGFibGVGaWVsZEluZGV4OiAxLCB0eXBlOiAndGltZXN0YW1wJ30sXG4gKiAvLyB7bmFtZTogJ3ZhbHVlJywgZm9ybWF0OiAnJywgdGFibGVGaWVsZEluZGV4OiA0LCB0eXBlOiAnaW50ZWdlcid9LFxuICogLy8ge25hbWU6ICdzdXJnZScsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNSwgdHlwZTogJ3JlYWwnfSxcbiAqIC8vIHtuYW1lOiAnaXNUcmlwJywgZm9ybWF0OiAnJywgdGFibGVGaWVsZEluZGV4OiA2LCB0eXBlOiAnYm9vbGVhbid9LFxuICogLy8ge25hbWU6ICd6ZXJvT25lcycsIGZvcm1hdDogJycsIHRhYmxlRmllbGRJbmRleDogNywgdHlwZTogJ2ludGVnZXInfV07XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRzRnJvbURhdGEoZGF0YSwgZmllbGRPcmRlcikge1xuICAvLyBhZGQgYSBjaGVjayBmb3IgZXBvY2ggdGltZXN0YW1wXG4gIGNvbnN0IG1ldGFkYXRhID0gQW5hbHl6ZXIuY29tcHV0ZUNvbE1ldGEoXG4gICAgZGF0YSxcbiAgICBbXG4gICAgICB7cmVnZXg6IC8uKmdlb2pzb258YWxsX3BvaW50cy9nLCBkYXRhVHlwZTogJ0dFT01FVFJZJ30sXG4gICAgICB7cmVnZXg6IC8uKmNlbnN1cy9nLCBkYXRhVHlwZTogJ1NUUklORyd9XG4gICAgXSxcbiAgICB7aWdub3JlZERhdGFUeXBlczogSUdOT1JFX0RBVEFfVFlQRVN9XG4gICk7XG5cbiAgY29uc3Qge2ZpZWxkQnlJbmRleH0gPSByZW5hbWVEdXBsaWNhdGVGaWVsZHMoZmllbGRPcmRlcik7XG5cbiAgY29uc3QgcmVzdWx0ID0gZmllbGRPcmRlci5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBmaWVsZEJ5SW5kZXhbaW5kZXhdO1xuXG4gICAgY29uc3QgZmllbGRNZXRhID0gbWV0YWRhdGEuZmluZChtID0+IG0ua2V5ID09PSBmaWVsZCk7XG4gICAgY29uc3Qge3R5cGUsIGZvcm1hdH0gPSBmaWVsZE1ldGEgfHwge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIHRhYmxlRmllbGRJbmRleDogaW5kZXggKyAxLFxuICAgICAgdHlwZTogYW5hbHl6ZXJUeXBlVG9GaWVsZFR5cGUodHlwZSksXG4gICAgICBhbmFseXplclR5cGU6IHR5cGVcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIHBhc3MgaW4gYW4gYXJyYXkgb2YgZmllbGQgbmFtZXMsIHJlbmFtZSBkdXBsaWNhdGVkIG9uZVxuICogYW5kIHJldHVybiBhIG1hcCBmcm9tIG9sZCBmaWVsZCBpbmRleCB0byBuZXcgbmFtZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkT3JkZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5ldyBmaWVsZCBuYW1lIGJ5IGluZGV4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVEdXBsaWNhdGVGaWVsZHMoZmllbGRPcmRlcikge1xuICByZXR1cm4gZmllbGRPcmRlci5yZWR1Y2UoXG4gICAgKGFjY3UsIGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCB7YWxsTmFtZXN9ID0gYWNjdTtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBmaWVsZDtcblxuICAgICAgLy8gYWRkIGEgY291bnRlciB0byBkdXBsaWNhdGVkIG5hbWVzXG4gICAgICBpZiAoYWxsTmFtZXMuaW5jbHVkZXMoZmllbGQpKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKGFsbE5hbWVzLmluY2x1ZGVzKGAke2ZpZWxkfS0ke2NvdW50ZXJ9YCkpIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGROYW1lID0gYCR7ZmllbGR9LSR7Y291bnRlcn1gO1xuICAgICAgfVxuXG4gICAgICBhY2N1LmZpZWxkQnlJbmRleFtpXSA9IGZpZWxkTmFtZTtcbiAgICAgIGFjY3UuYWxsTmFtZXMucHVzaChmaWVsZE5hbWUpO1xuXG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9LFxuICAgIHthbGxOYW1lczogW10sIGZpZWxkQnlJbmRleDoge319XG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydCB0eXBlLWFuYWx5emVyIG91dHB1dCB0byBrZXBsZXIuZ2wgZmllbGQgdHlwZXNcbiAqXG4gKiBAcGFyYW0gYVR5cGVcbiAqIEByZXR1cm5zIGNvcnJlc3BvbmRpbmcgdHlwZSBpbiBgQUxMX0ZJRUxEX1RZUEVTYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5hbmFseXplclR5cGVUb0ZpZWxkVHlwZX19XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplclR5cGVUb0ZpZWxkVHlwZShhVHlwZSkge1xuICBjb25zdCB7XG4gICAgREFURSxcbiAgICBUSU1FLFxuICAgIERBVEVUSU1FLFxuICAgIE5VTUJFUixcbiAgICBJTlQsXG4gICAgRkxPQVQsXG4gICAgQk9PTEVBTixcbiAgICBTVFJJTkcsXG4gICAgR0VPTUVUUlksXG4gICAgR0VPTUVUUllfRlJPTV9TVFJJTkcsXG4gICAgUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyxcbiAgICBaSVBDT0RFLFxuICAgIEFSUkFZLFxuICAgIE9CSkVDVFxuICB9ID0gQW5hbHl6ZXJEQVRBX1RZUEVTO1xuXG4gIC8vIFRPRE86IHVuIHJlY29nbml6ZWQgdHlwZXNcbiAgLy8gQ1VSUkVOQ1kgUEVSQ0VOVCBOT05FXG4gIHN3aXRjaCAoYVR5cGUpIHtcbiAgICBjYXNlIERBVEU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLmRhdGU7XG4gICAgY2FzZSBUSU1FOlxuICAgIGNhc2UgREFURVRJTUU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDtcbiAgICBjYXNlIEZMT0FUOlxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5yZWFsO1xuICAgIGNhc2UgSU5UOlxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyO1xuICAgIGNhc2UgQk9PTEVBTjpcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuYm9vbGVhbjtcbiAgICBjYXNlIEdFT01FVFJZOlxuICAgIGNhc2UgR0VPTUVUUllfRlJPTV9TVFJJTkc6XG4gICAgY2FzZSBQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HOlxuICAgIGNhc2UgQVJSQVk6XG4gICAgY2FzZSBPQkpFQ1Q6XG4gICAgICAvLyBUT0RPOiBjcmVhdGUgYSBuZXcgZGF0YSB0eXBlIGZvciBvYmplY3RzIGFuZCBhcnJheXNcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuZ2VvanNvbjtcbiAgICBjYXNlIE5VTUJFUjpcbiAgICBjYXNlIFNUUklORzpcbiAgICBjYXNlIFpJUENPREU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZztcbiAgICBkZWZhdWx0OlxuICAgICAgZ2xvYmFsQ29uc29sZS53YXJuKGBVbnN1cHBvcnRlZCBhbmFseXplciB0eXBlOiAke2FUeXBlfWApO1xuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIFByb2Nlc3MgZGF0YSB3aGVyZSBlYWNoIHJvdyBpcyBhbiBvYmplY3QsIG91dHB1dCBjYW4gYmUgcGFzc2VkIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcbiAqIEBwYXJhbSByYXdEYXRhIGFuIGFycmF5IG9mIHJvdyBvYmplY3QsIGVhY2ggb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBrZXlzXG4gKiBAcmV0dXJucyBkYXRhc2V0IGNvbnRhaW5pbmcgYGZpZWxkc2AgYW5kIGByb3dzYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzUm93T2JqZWN0fVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQge3Byb2Nlc3NSb3dPYmplY3R9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbiAqXG4gKiBjb25zdCBkYXRhID0gW1xuICogIHtsYXQ6IDMxLjI3LCBsbmc6IDEyNy41NiwgdmFsdWU6IDN9LFxuICogIHtsYXQ6IDMxLjIyLCBsbmc6IDEyNi4yNiwgdmFsdWU6IDF9XG4gKiBdO1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XG4gKiAgZGF0YXNldHM6IHtcbiAqICAgIGluZm86IHtsYWJlbDogJ015IERhdGEnLCBpZDogJ215X2RhdGEnfSxcbiAqICAgIGRhdGE6IHByb2Nlc3NSb3dPYmplY3QoZGF0YSlcbiAqICB9XG4gKiB9KSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUm93T2JqZWN0KHJhd0RhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpIHx8ICFyYXdEYXRhLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJhd0RhdGFbMF0pO1xuICBjb25zdCByb3dzID0gcmF3RGF0YS5tYXAoZCA9PiBrZXlzLm1hcChrZXkgPT4gZFtrZXldKSk7XG5cbiAgLy8gcm93IG9iamVjdCBhbiBzdGlsbCBjb250YWluIHZhbHVlcyBsaWtlIGBOdWxsYCBvciBgTi9BYFxuICBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKTtcblxuICByZXR1cm4gcHJvY2Vzc0NzdkRhdGEocm93cywga2V5cyk7XG59XG5cbi8qKlxuICogUHJvY2VzcyBHZW9KU09OIFtgRmVhdHVyZUNvbGxlY3Rpb25gXShodHRwOi8vd2lraS5nZW9qc29uLm9yZy9HZW9KU09OX2RyYWZ0X3ZlcnNpb25fNiNGZWF0dXJlQ29sbGVjdGlvbiksXG4gKiBvdXRwdXQgYSBkYXRhIG9iamVjdCB3aXRoIGB7ZmllbGRzOiBbXSwgcm93czogW119YC5cbiAqIFRoZSBkYXRhIG9iamVjdCBjYW4gYmUgd3JhcHBlZCBpbiBhIGBkYXRhc2V0YCBhbmQgcGFzcyB0byBbYGFkZERhdGFUb01hcGBdKC4uL2FjdGlvbnMvYWN0aW9ucy5tZCNhZGRkYXRhdG9tYXApXG4gKlxuICogQHBhcmFtICByYXdEYXRhIHJhdyBnZW9qc29uIGZlYXR1cmUgY29sbGVjdGlvblxuICogQHJldHVybnMgIGRhdGFzZXQgY29udGFpbmluZyBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnByb2Nlc3NHZW9qc29ufVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQge3Byb2Nlc3NHZW9qc29ufSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG4gKlxuICogY29uc3QgZ2VvanNvbiA9IHtcbiAqIFx0XCJ0eXBlXCIgOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gKiBcdFwiZmVhdHVyZXNcIiA6IFt7XG4gKiBcdFx0XCJ0eXBlXCIgOiBcIkZlYXR1cmVcIixcbiAqIFx0XHRcInByb3BlcnRpZXNcIiA6IHtcbiAqIFx0XHRcdFwiY2FwYWNpdHlcIiA6IFwiMTBcIixcbiAqIFx0XHRcdFwidHlwZVwiIDogXCJVLVJhY2tcIlxuICogXHRcdH0sXG4gKiBcdFx0XCJnZW9tZXRyeVwiIDoge1xuICogXHRcdFx0XCJ0eXBlXCIgOiBcIlBvaW50XCIsXG4gKiBcdFx0XHRcImNvb3JkaW5hdGVzXCIgOiBbIC03MS4wNzMyODMsIDQyLjQxNzUwMCBdXG4gKiBcdFx0fVxuICogXHR9XVxuICogfTtcbiAqXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAoe1xuICogIGRhdGFzZXRzOiB7XG4gKiAgICBpbmZvOiB7XG4gKiAgICAgIGxhYmVsOiAnU2FtcGxlIFRheGkgVHJpcHMgaW4gTmV3IFlvcmsgQ2l0eScsXG4gKiAgICAgIGlkOiAndGVzdF90cmlwX2RhdGEnXG4gKiAgICB9LFxuICogICAgZGF0YTogcHJvY2Vzc0dlb2pzb24oZ2VvanNvbilcbiAqICB9XG4gKiB9KSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzR2VvanNvbihyYXdEYXRhKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRHZW9qc29uID0gbm9ybWFsaXplKHJhd0RhdGEpO1xuXG4gIGlmICghbm9ybWFsaXplZEdlb2pzb24gfHwgIUFycmF5LmlzQXJyYXkobm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXMpKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICBgUmVhZCBGaWxlIEZhaWxlZDogRmlsZSBpcyBub3QgYSB2YWxpZCBHZW9KU09OLiBSZWFkIG1vcmUgYWJvdXQgW3N1cHBvcnRlZCBmaWxlIGZvcm1hdF0oJHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSlgXG4gICAgKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgICAvLyBmYWlsIHRvIG5vcm1hbGl6ZSBnZW9qc29uXG4gIH1cblxuICAvLyBnZXR0aW5nIGFsbCBmZWF0dXJlIGZpZWxkc1xuICBjb25zdCBhbGxEYXRhUm93cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vcm1hbGl6ZWRHZW9qc29uLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZiA9IG5vcm1hbGl6ZWRHZW9qc29uLmZlYXR1cmVzW2ldO1xuICAgIGlmIChmLmdlb21ldHJ5KSB7XG4gICAgICBhbGxEYXRhUm93cy5wdXNoKHtcbiAgICAgICAgLy8gYWRkIGZlYXR1cmUgdG8gX2dlb2pzb24gZmllbGRcbiAgICAgICAgX2dlb2pzb246IGYsXG4gICAgICAgIC4uLihmLnByb3BlcnRpZXMgfHwge30pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IGFsbCB0aGUgZmllbGRcbiAgY29uc3QgZmllbGRzID0gYWxsRGF0YVJvd3MucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoY3VycikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFwcmV2LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgcHJldi5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIFtdKTtcblxuICAvLyBtYWtlIHN1cmUgZWFjaCBmZWF0dXJlIGhhcyBleGFjdCBzYW1lIGZpZWxkc1xuICBhbGxEYXRhUm93cy5mb3JFYWNoKGQgPT4ge1xuICAgIGZpZWxkcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgaWYgKCEoZiBpbiBkKSkge1xuICAgICAgICBkW2ZdID0gbnVsbDtcbiAgICAgICAgZC5fZ2VvanNvbi5wcm9wZXJ0aWVzW2ZdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2Nlc3NSb3dPYmplY3QoYWxsRGF0YVJvd3MpO1xufVxuXG4vKipcbiAqIE9uIGV4cG9ydCBkYXRhIHRvIGNzdlxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGRhdGEgYGRhdGFzZXQuYWxsRGF0YWAgb3IgZmlsdGVyZWQgZGF0YSBgZGF0YXNldC5kYXRhYFxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHMgYGRhdGFzZXQuZmllbGRzYFxuICogQHJldHVybnMge3N0cmluZ30gY3N2IHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3N2KGRhdGEsIGZpZWxkcykge1xuICBjb25zdCBjb2x1bW5zID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBbY29sdW1uc107XG5cbiAgLy8gcGFyc2UgZ2VvanNvbiBvYmplY3QgYXMgc3RyaW5nXG4gIGRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgIGZvcm1hdHRlZERhdGEucHVzaChyb3cubWFwKChkLCBpKSA9PiBwYXJzZUZpZWxkVmFsdWUoZCwgZmllbGRzW2ldLnR5cGUpKSk7XG4gIH0pO1xuXG4gIHJldHVybiBjc3ZGb3JtYXRSb3dzKGZvcm1hdHRlZERhdGEpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGlucHV0IGRhdGEsIGFkZGluZyBtaXNzaW5nIGZpZWxkIHR5cGVzLCByZW5hbWUgZHVwbGljYXRlIGNvbHVtbnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykudmFsaWRhdGVJbnB1dERhdGF9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0RGF0YShkYXRhKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGFzc2VydCgnYWRkRGF0YVRvTWFwIEVycm9yOiBkYXRhc2V0LmRhdGEgY2Fubm90IGJlIG51bGwnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmZpZWxkcykpIHtcbiAgICBhc3NlcnQoJ2FkZERhdGFUb01hcCBFcnJvcjogZXhwZWN0IGRhdGFzZXQuZGF0YS5maWVsZHMgdG8gYmUgYW4gYXJyYXknKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnJvd3MpKSB7XG4gICAgYXNzZXJ0KCdhZGREYXRhVG9NYXAgRXJyb3I6IGV4cGVjdCBkYXRhc2V0LmRhdGEucm93cyB0byBiZSBhbiBhcnJheScpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qge2ZpZWxkcywgcm93c30gPSBkYXRhO1xuXG4gIC8vIGNoZWNrIGlmIGFsbCBmaWVsZHMgaGFzIG5hbWUsIGZvcm1hdCBhbmQgdHlwZVxuICBjb25zdCBhbGxWYWxpZCA9IGZpZWxkcy5ldmVyeSgoZiwgaSkgPT4ge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChmKSkge1xuICAgICAgYXNzZXJ0KGBmaWVsZHMgbmVlZHMgdG8gYmUgYW4gYXJyYXkgb2Ygb2JqZWN0LCBidXQgZmluZCAke3R5cGVvZiBmfWApO1xuICAgICAgZmllbGRzW2ldID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmLm5hbWUpIHtcbiAgICAgIGFzc2VydChgZmllbGQubmFtZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyBpbiAke0pTT04uc3RyaW5naWZ5KGYpfWApO1xuICAgICAgLy8gYXNzaWduIGEgbmFtZVxuICAgICAgZmllbGRzW2ldLm5hbWUgPSBgY29sdW1uXyR7aX1gO1xuICAgIH1cblxuICAgIGlmICghQUxMX0ZJRUxEX1RZUEVTW2YudHlwZV0pIHtcbiAgICAgIGFzc2VydChgdW5rbm93biBmaWVsZCB0eXBlICR7Zi50eXBlfWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZmllbGRzLmV2ZXJ5KGZpZWxkID0+IGZpZWxkLmFuYWx5emVyVHlwZSkpIHtcbiAgICAgIGFzc2VydCgnZmllbGQgbWlzc2luZyBhbmFseXplclR5cGUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayB0aW1lIGZvcm1hdCBpcyBjb3JyZWN0IGJhc2VkIG9uIGZpcnN0IDEwIG5vdCBlbXB0eSBlbGVtZW50XG4gICAgaWYgKGYudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xuICAgICAgY29uc3Qgc2FtcGxlID0gZmluZE5vbkVtcHR5Um93c0F0RmllbGQocm93cywgaSwgMTApLm1hcChyID0+ICh7dHM6IHJbaV19KSk7XG4gICAgICBjb25zdCBhbmFseXplZFR5cGUgPSBBbmFseXplci5jb21wdXRlQ29sTWV0YShzYW1wbGUpWzBdO1xuICAgICAgcmV0dXJuIGFuYWx5emVkVHlwZSAmJiBhbmFseXplZFR5cGUuY2F0ZWdvcnkgPT09ICdUSU1FJyAmJiBhbmFseXplZFR5cGUuZm9ybWF0ID09PSBmLmZvcm1hdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKGFsbFZhbGlkKSB7XG4gICAgcmV0dXJuIHtyb3dzLCBmaWVsZHN9O1xuICB9XG5cbiAgLy8gaWYgYW55IGZpZWxkIGhhcyBtaXNzaW5nIHR5cGUsIHJlY2FsY3VsYXRlIGl0IGZvciBldmVyeW9uZVxuICAvLyBiZWNhdXNlIHdlIHNpbXBseSBsb3N0IGZhaXRoIGluIGh1bWFuaXR5XG4gIGNvbnN0IHNhbXBsZURhdGEgPSBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7XG4gICAgZmllbGRzOiBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKSxcbiAgICBhbGxEYXRhOiByb3dzXG4gIH0pO1xuICBjb25zdCBmaWVsZE9yZGVyID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XG4gIGNvbnN0IG1ldGEgPSBnZXRGaWVsZHNGcm9tRGF0YShzYW1wbGVEYXRhLCBmaWVsZE9yZGVyKTtcbiAgY29uc3QgdXBkYXRlZEZpZWxkcyA9IGZpZWxkcy5tYXAoKGYsIGkpID0+ICh7XG4gICAgLi4uZixcbiAgICB0eXBlOiBtZXRhW2ldLnR5cGUsXG4gICAgZm9ybWF0OiBtZXRhW2ldLmZvcm1hdCxcbiAgICBhbmFseXplclR5cGU6IG1ldGFbaV0uYW5hbHl6ZXJUeXBlXG4gIH0pKTtcblxuICByZXR1cm4ge2ZpZWxkczogdXBkYXRlZEZpZWxkcywgcm93c307XG59XG5cbmZ1bmN0aW9uIGZpbmROb25FbXB0eVJvd3NBdEZpZWxkKHJvd3MsIGZpZWxkSWR4LCB0b3RhbCkge1xuICBjb25zdCBzYW1wbGUgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoc2FtcGxlLmxlbmd0aCA8IHRvdGFsICYmIGkgPCByb3dzLmxlbmd0aCkge1xuICAgIGlmIChub3ROdWxsb3JVbmRlZmluZWQocm93c1tpXVtmaWVsZElkeF0pKSB7XG4gICAgICBzYW1wbGUucHVzaChyb3dzW2ldKTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiBzYW1wbGU7XG59XG4vKipcbiAqIFByb2Nlc3Mgc2F2ZWQga2VwbGVyLmdsIGpzb24gdG8gYmUgcGFzcyB0byBbYGFkZERhdGFUb01hcGBdKC4uL2FjdGlvbnMvYWN0aW9ucy5tZCNhZGRkYXRhdG9tYXApLlxuICogVGhlIGpzb24gb2JqZWN0IHNob3VsZCBjb250YWluIGBkYXRhc2V0c2AgYW5kIGBjb25maWdgLlxuICogQHBhcmFtIHtPYmplY3R9IHJhd0RhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IHJhd0RhdGEuZGF0YXNldHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByYXdEYXRhLmNvbmZpZ1xuICogQHJldHVybnMge09iamVjdH0gZGF0YXNldHMgYW5kIGNvbmZpZyBge2RhdGFzZXRzOiB7fSwgY29uZmlnOiB7fX1gXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIGltcG9ydCB7cHJvY2Vzc0tlcGxlcmdsSlNPTn0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcChwcm9jZXNzS2VwbGVyZ2xKU09OKGtlcGxlckdsSnNvbikpKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NLZXBsZXJnbEpTT04ocmF3RGF0YSkge1xuICByZXR1cm4gcmF3RGF0YSA/IEtlcGxlckdsU2NoZW1hLmxvYWQocmF3RGF0YS5kYXRhc2V0cywgcmF3RGF0YS5jb25maWcpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBkYXRhc2V0cyBzYXZlZCB1c2luZyBrZXBsZXIuZ2wgc2NoZW1hXG4gKiBAcGFyYW0ge0FycmF5IHwgQXJyYXk8T2JqZWN0Pn0gcmF3RGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0tlcGxlcmdsRGF0YXNldChyYXdEYXRhKSB7XG4gIGlmICghcmF3RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0cyA9IEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWREYXRhKHRvQXJyYXkocmF3RGF0YSkpO1xuICBpZiAoIXJlc3VsdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gQXJyYXkuaXNBcnJheShyYXdEYXRhKSA/IHJlc3VsdHMgOiByZXN1bHRzWzBdO1xufVxuXG5leHBvcnQgY29uc3QgREFUQVNFVF9IQU5ETEVSUyA9IHtcbiAgW0RBVEFTRVRfRk9STUFUUy5yb3ddOiBwcm9jZXNzUm93T2JqZWN0LFxuICBbREFUQVNFVF9GT1JNQVRTLmdlb2pzb25dOiBwcm9jZXNzR2VvanNvbixcbiAgW0RBVEFTRVRfRk9STUFUUy5jc3ZdOiBwcm9jZXNzQ3N2RGF0YSxcbiAgW0RBVEFTRVRfRk9STUFUUy5rZXBsZXJnbF06IHByb2Nlc3NLZXBsZXJnbERhdGFzZXRcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzb3JzID0ge1xuICBwcm9jZXNzR2VvanNvbixcbiAgcHJvY2Vzc0NzdkRhdGEsXG4gIHByb2Nlc3NSb3dPYmplY3QsXG4gIHByb2Nlc3NLZXBsZXJnbEpTT04sXG4gIHByb2Nlc3NLZXBsZXJnbERhdGFzZXQsXG4gIGFuYWx5emVyVHlwZVRvRmllbGRUeXBlLFxuICBnZXRGaWVsZHNGcm9tRGF0YSxcbiAgcGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUsXG4gIGZvcm1hdENzdlxufTtcbiJdfQ==