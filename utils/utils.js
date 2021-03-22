"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHashId = generateHashId;
exports.isChrome = isChrome;
exports.isPlainObject = isPlainObject;
exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.camelToTitle = camelToTitle;
exports.getHTMLMapModeTileUrl = getHTMLMapModeTileUrl;
exports.toArray = toArray;
exports.isObject = isObject;
exports.getError = getError;
exports.arrayInsert = arrayInsert;
exports.set = exports.insertValue = exports.camelize = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _window = _interopRequireDefault(require("global/window"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Generate a hash string based on number of character
 * @param {number} count
 * @returns {string} hash string
 */
function generateHashId() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  return Math.random().toString(36).substr(count);
}
/**
 * Detect chrome
 * @returns {boolean} - yes or no
 */


function isChrome() {
  // Chrome 1+
  return _window["default"].chrome && _window["default"].chrome.webstore;
}
/**
 * whether is an object
 * @returns {boolean} - yes or no
 */


function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}
/**
 * Capitalize first letter of a string
 * @param {string} str
 * @returns {string}
 */


function capitalizeFirstLetter(str) {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
/**
 * Convert camel style names to title
 * strokeColor -> Stroke Color
 * @param {string} str
 * @returns {string}
 */


function camelToTitle(str) {
  var breakWord = str.replace(/([A-Z])/g, ' $1');
  return capitalizeFirstLetter(breakWord);
}
/**
 * Convert names to camel style
 * Stroke Color -> strokeColor
 * @param {string} str
 * @returns {string}
 */


var camelize = function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (Number(match) === 0) return ''; // or if (/\s+/.test(match)) for white spaces

    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
/**
 * Returns the img url for a given map export option
 * @param mode export option
 * @return {string} url
 */


exports.camelize = camelize;

function getHTMLMapModeTileUrl(mode) {
  return "https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/documentation/map-".concat(mode.toLowerCase(), "-mode.png");
}
/**
 * Converts non-arrays to arrays.  Leaves arrays alone.  Converts
 * undefined values to empty arrays ([] instead of [undefined]).
 * Otherwise, just returns [item] for non-array items.
 *
 * @param {*} item
 * @returns {array} boom! much array. very indexed. so useful.
 */


function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  if (typeof item === 'undefined' || item === null) {
    return [];
  }

  return [item];
}
/**
 * immutably insert value to an Array or Object
 * @param {Array|Object} obj
 * @param {Number|String} key
 * @param {*} value
 * @returns {Array|Object}
 */


var insertValue = function insertValue(obj, key, value) {
  if (Array.isArray(obj) && typeof key === 'number') {
    return [].concat((0, _toConsumableArray2["default"])(obj.slice(0, key)), [value], (0, _toConsumableArray2["default"])(obj.slice(key + 1, obj.length)));
  }

  return _objectSpread(_objectSpread({}, obj), {}, (0, _defineProperty2["default"])({}, key, value));
};
/**
 * check if value is a loose object including a plain object, array, function
 * @param {*} value
 */


exports.insertValue = insertValue;

function isObject(value) {
  return value !== null && ((0, _typeof2["default"])(value) === 'object' || typeof value === 'function');
}

var setPath = function setPath(_ref, value, obj) {
  var _ref2 = (0, _toArray2["default"])(_ref),
      key = _ref2[0],
      next = _ref2.slice(1);

  // is Object allows js object, array and function
  if (!isObject(obj)) {
    return obj;
  }

  if (next.length === 0) {
    return insertValue(obj, key, value);
  } // @ts-ignore


  return insertValue(obj, key, setPath(next, value, obj.hasOwnProperty(key) ? obj[key] : {}));
};
/**
 * Immutable version of _.set
 * @param {Array<String|Number>} path
 * @param {*} value
 * @param {Object} obj
 * @returns {Object}
 */
// @ts-ignore


var set = function set(path, value, obj) {
  return obj === null ? obj : setPath(path, value, obj);
};
/**
 * Get error information of unknown type
 * Extracts as much human readable information as possible
 * Ensure result is an Error object suitable for throw or promise rejection
 *
 * @private
 * @param {*}  err - Unknown error
 * @return {string} - human readable error msg
 */


exports.set = set;

function getError(err) {
  if (!err) {
    return 'Something went wrong';
  }

  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  } else if ((0, _typeof2["default"])(err) === 'object') {
    return err.error ? getError(err.error) : err.err ? getError(err.err) : err.message ? getError(err.message) : JSON.stringify(err);
  } // @ts-ignore


  return null;
}

function arrayInsert(arr, index, val) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  return [].concat((0, _toConsumableArray2["default"])(arr.slice(0, index)), [val], (0, _toConsumableArray2["default"])(arr.slice(index)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUhhc2hJZCIsImNvdW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiaXNDaHJvbWUiLCJ3aW5kb3ciLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FtZWxUb1RpdGxlIiwiYnJlYWtXb3JkIiwicmVwbGFjZSIsImNhbWVsaXplIiwibWF0Y2giLCJpbmRleCIsIk51bWJlciIsInRvTG93ZXJDYXNlIiwiZ2V0SFRNTE1hcE1vZGVUaWxlVXJsIiwibW9kZSIsInRvQXJyYXkiLCJpdGVtIiwiaW5zZXJ0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImxlbmd0aCIsImlzT2JqZWN0Iiwic2V0UGF0aCIsIm5leHQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldCIsInBhdGgiLCJnZXRFcnJvciIsImVyciIsIkVycm9yIiwibWVzc2FnZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImFycmF5SW5zZXJ0IiwiYXJyIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxjQUFULEdBQW1DO0FBQUEsTUFBWEMsS0FBVyx1RUFBSCxDQUFHO0FBQ3hDLFNBQU9DLElBQUksQ0FBQ0MsTUFBTCxHQUNKQyxRQURJLENBQ0ssRUFETCxFQUVKQyxNQUZJLENBRUdKLEtBRkgsQ0FBUDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNLLFFBQVQsR0FBb0I7QUFDekI7QUFDQSxTQUFPQyxtQkFBT0MsTUFBUCxJQUFpQkQsbUJBQU9DLE1BQVAsQ0FBY0MsUUFBdEM7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TUFFTyxJQUFJQSxHQUFHLFlBQVlDLEtBQW5CLEVBQTBCO0FBQy9CLFdBQU9ELEdBQUcsQ0FBQ0UsT0FBWDtBQUNELEdBRk0sTUFFQSxJQUFJLHlCQUFPRixHQUFQLE1BQWUsUUFBbkIsRUFBNkI7QUFDbEMsV0FBT0EsR0FBRyxDQUFDRyxLQUFKLEdBQ0hKLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRyxLQUFMLENBREwsR0FFSEgsR0FBRyxDQUFDQSxHQUFKLEdBQ0FELFFBQVEsQ0FBQ0MsR0FBRyxDQUFDQSxHQUFMLENBRFIsR0FFQUEsR0FBRyxDQUFDRSxPQUFKLEdBQ0FILFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRSxPQUFMLENBRFIsR0FFQUUsSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQWYsQ0FOSjtBQU9ELEdBakIyQixDQW1CNUI7OztBQUNBLFNBQU8sSUFBUDtBQUNEOztBQUVNLFNBQVNNLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCekIsS0FBMUIsRUFBaUMwQixHQUFqQyxFQUFzQztBQUMzQyxNQUFJLENBQUN0QyxLQUFLLENBQUNDLE9BQU4sQ0FBY29DLEdBQWQsQ0FBTCxFQUF5QjtBQUN2QixXQUFPQSxHQUFQO0FBQ0Q7O0FBRUQsdURBQVdBLEdBQUcsQ0FBQy9CLEtBQUosQ0FBVSxDQUFWLEVBQWFNLEtBQWIsQ0FBWCxJQUFnQzBCLEdBQWhDLHVDQUF3Q0QsR0FBRyxDQUFDL0IsS0FBSixDQUFVTSxLQUFWLENBQXhDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgaGFzaCBzdHJpbmcgYmFzZWQgb24gbnVtYmVyIG9mIGNoYXJhY3RlclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBoYXNoIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoSWQoY291bnQgPSA2KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zdWJzdHIoY291bnQpO1xufVxuXG4vKipcbiAqIERldGVjdCBjaHJvbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHllcyBvciBub1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gIC8vIENocm9tZSAxK1xuICByZXR1cm4gd2luZG93LmNocm9tZSAmJiB3aW5kb3cuY2hyb21lLndlYnN0b3JlO1xufVxuXG4vKipcbiAqIHdoZXRoZXIgaXMgYW4gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogc3RyO1xufVxuXG4vKipcbiAqIENvbnZlcnQgY2FtZWwgc3R5bGUgbmFtZXMgdG8gdGl0bGVcbiAqIHN0cm9rZUNvbG9yIC0+IFN0cm9rZSBDb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZShzdHIpIHtcbiAgY29uc3QgYnJlYWtXb3JkID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJyAkMScpO1xuICByZXR1cm4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJyZWFrV29yZCk7XG59XG5cbi8qKlxuICogQ29udmVydCBuYW1lcyB0byBjYW1lbCBzdHlsZVxuICogU3Ryb2tlIENvbG9yIC0+IHN0cm9rZUNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3fFxccyspL2csIChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICBpZiAoTnVtYmVyKG1hdGNoKSA9PT0gMCkgcmV0dXJuICcnOyAvLyBvciBpZiAoL1xccysvLnRlc3QobWF0Y2gpKSBmb3Igd2hpdGUgc3BhY2VzXG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gbWF0Y2gudG9Mb3dlckNhc2UoKSA6IG1hdGNoLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbWcgdXJsIGZvciBhIGdpdmVuIG1hcCBleHBvcnQgb3B0aW9uXG4gKiBAcGFyYW0gbW9kZSBleHBvcnQgb3B0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SFRNTE1hcE1vZGVUaWxlVXJsKG1vZGUpIHtcbiAgcmV0dXJuIGBodHRwczovL2QxYTNmNHNwYXp6cnA0LmNsb3VkZnJvbnQubmV0L2tlcGxlci5nbC9kb2N1bWVudGF0aW9uL21hcC0ke21vZGUudG9Mb3dlckNhc2UoKX0tbW9kZS5wbmdgO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIG5vbi1hcnJheXMgdG8gYXJyYXlzLiAgTGVhdmVzIGFycmF5cyBhbG9uZS4gIENvbnZlcnRzXG4gKiB1bmRlZmluZWQgdmFsdWVzIHRvIGVtcHR5IGFycmF5cyAoW10gaW5zdGVhZCBvZiBbdW5kZWZpbmVkXSkuXG4gKiBPdGhlcndpc2UsIGp1c3QgcmV0dXJucyBbaXRlbV0gZm9yIG5vbi1hcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqIEByZXR1cm5zIHthcnJheX0gYm9vbSEgbXVjaCBhcnJheS4gdmVyeSBpbmRleGVkLiBzbyB1c2VmdWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGl0ZW0pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCcgfHwgaXRlbSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBbaXRlbV07XG59XG5cbi8qKlxuICogaW1tdXRhYmx5IGluc2VydCB2YWx1ZSB0byBhbiBBcnJheSBvciBPYmplY3RcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgaW5zZXJ0VmFsdWUgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikgJiYgdHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gWy4uLm9iai5zbGljZSgwLCBrZXkpLCB2YWx1ZSwgLi4ub2JqLnNsaWNlKGtleSArIDEsIG9iai5sZW5ndGgpXTtcbiAgfVxuXG4gIHJldHVybiB7Li4ub2JqLCBba2V5XTogdmFsdWV9O1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiB2YWx1ZSBpcyBhIGxvb3NlIG9iamVjdCBpbmNsdWRpbmcgYSBwbGFpbiBvYmplY3QsIGFycmF5LCBmdW5jdGlvblxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmNvbnN0IHNldFBhdGggPSAoW2tleSwgLi4ubmV4dF0sIHZhbHVlLCBvYmopID0+IHtcbiAgLy8gaXMgT2JqZWN0IGFsbG93cyBqcyBvYmplY3QsIGFycmF5IGFuZCBmdW5jdGlvblxuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGluc2VydFZhbHVlKG9iaiwga2V5LCB2YWx1ZSk7XG4gIH1cblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBpbnNlcnRWYWx1ZShvYmosIGtleSwgc2V0UGF0aChuZXh0LCB2YWx1ZSwgb2JqLmhhc093blByb3BlcnR5KGtleSkgPyBvYmpba2V5XSA6IHt9KSk7XG59O1xuXG4vKipcbiAqIEltbXV0YWJsZSB2ZXJzaW9uIG9mIF8uc2V0XG4gKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3Qgc2V0ID0gKHBhdGgsIHZhbHVlLCBvYmopID0+IChvYmogPT09IG51bGwgPyBvYmogOiBzZXRQYXRoKHBhdGgsIHZhbHVlLCBvYmopKTtcblxuLyoqXG4gKiBHZXQgZXJyb3IgaW5mb3JtYXRpb24gb2YgdW5rbm93biB0eXBlXG4gKiBFeHRyYWN0cyBhcyBtdWNoIGh1bWFuIHJlYWRhYmxlIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlXG4gKiBFbnN1cmUgcmVzdWx0IGlzIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3cgb3IgcHJvbWlzZSByZWplY3Rpb25cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSAgZXJyIC0gVW5rbm93biBlcnJvclxuICogQHJldHVybiB7c3RyaW5nfSAtIGh1bWFuIHJlYWRhYmxlIGVycm9yIG1zZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IoZXJyKSB7XG4gIGlmICghZXJyKSB7XG4gICAgcmV0dXJuICdTb21ldGhpbmcgd2VudCB3cm9uZyc7XG4gIH1cblxuICBpZiAodHlwZW9mIGVyciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGVyci5lcnJvclxuICAgICAgPyBnZXRFcnJvcihlcnIuZXJyb3IpXG4gICAgICA6IGVyci5lcnJcbiAgICAgID8gZ2V0RXJyb3IoZXJyLmVycilcbiAgICAgIDogZXJyLm1lc3NhZ2VcbiAgICAgID8gZ2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICA6IEpTT04uc3RyaW5naWZ5KGVycik7XG4gIH1cblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlJbnNlcnQoYXJyLCBpbmRleCwgdmFsKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHJldHVybiBbLi4uYXJyLnNsaWNlKDAsIGluZGV4KSwgdmFsLCAuLi5hcnIuc2xpY2UoaW5kZXgpXTtcbn1cbiJdfQ==