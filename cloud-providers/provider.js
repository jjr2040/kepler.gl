"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FILE_CONFLICT_MSG = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _icons = require("../components/common/icons");

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
var NAME = 'cloud-provider';
var DISPLAY_NAME = 'Cloud Provider';
var THUMBNAIL = {
  width: 300,
  height: 200
};
var ICON = _icons.Upload;
var FILE_CONFLICT_MSG = 'file_conflict';
/**
 * The default provider class
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.displayName
 * @param {React.Component} props.icon - React element
 * @param {object} props.thumbnail - thumbnail size object
 * @param {number} props.thumbnail.width - thumbnail width in pixels
 * @param {number} props.thumbnail.height - thumbnail height in pixels
 * @public
 * @example
 *
 * const myProvider = new Provider({
 *  name: 'foo',
 *  displayName: 'Foo Storage'
 *  icon: Icon,
 *  thumbnail: {width: 300, height: 200}
 * })
 */

exports.FILE_CONFLICT_MSG = FILE_CONFLICT_MSG;

var Provider = /*#__PURE__*/function () {
  function Provider(props) {
    (0, _classCallCheck2["default"])(this, Provider);
    this.name = props.name || NAME;
    this.displayName = props.displayName || DISPLAY_NAME;
    this.icon = props.icon || ICON;
    this.thumbnail = props.thumbnail || THUMBNAIL;
  }
  /**
   * Whether this provider support upload map to a private storage. If truthy, user will be displayed with the storage save icon on the top right of the side bar.
   * @returns {boolean}
   * @public
   */


  (0, _createClass2["default"])(Provider, [{
    key: "hasPrivateStorage",
    value: function hasPrivateStorage() {
      return true;
    }
    /**
     * Whether this provider support share map via a public url, if truthy, user will be displayed with a share map via url under the export map option on the top right of the side bar
     * @returns {boolean}
     * @public
     */

  }, {
    key: "hasSharingUrl",
    value: function hasSharingUrl() {
      return true;
    }
    /**
     * This method is called after user share a map, to display the share url.
     * @param {boolean} fullUrl - Whether to return the full url with domain, or just the location
     * @returns {string} shareUrl
     * @public
     */

  }, {
    key: "getShareUrl",
    value: function getShareUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return '';
    }
    /**
     * This method is called by kepler.gl demo app to pushes a new location to history, becoming the current location.
     * @param {boolean} fullURL - Whether to return the full url with domain, or just the location
     * @returns {string} mapUrl
     * @public
     */

  }, {
    key: "getMapUrl",
    value: function getMapUrl() {
      var fullURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return '';
    }
    /**
     * This method is called to determine whether user already logged in to this provider
     * @public
     * @returns {boolean} true if a user already logged in
     */

  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return true;
    }
    /**
     * This method is called to get the user name of the current user. It will be displayed in the cloud provider tile.
     * @public
     * @returns {string} true if a user already logged in
     */

  }, {
    key: "getUserName",
    value: function getUserName() {
      return '';
    }
    /**
     * This return a standard error that will trigger the overwrite map modal
     */

  }, {
    key: "getFileConflictError",
    value: function getFileConflictError() {
      return new Error(FILE_CONFLICT_MSG);
    }
    /**
     * This method will be called when user click the login button in the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLoginSuccess - callbacks to be called after login success
     * @public
     */

  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(onCloudLoginSuccess) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                onCloudLoginSuccess();
                return _context.abrupt("return");

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * This method will be called when user click the logout button under the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLogoutSuccess - callbacks to be called after logout success
     * @public
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(onCloudLogoutSuccess) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onCloudLogoutSuccess();
                return _context2.abrupt("return");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function logout(_x2) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * This method will be called to upload map for saving and sharing. Kepler.gl will package map data, config, title, description and thumbnail for upload to storage.
     * With the option to overwrite already saved map, and upload as private or public map.
     *
     * @param {Object} param
     * @param {Object} param.mapData - the map object
     * @param {Object} param.mapData.map - {datasets. config, info: {title, description}}
     * @param {Blob} param.mapData.thumbnail - A thumbnail of current map. thumbnail size can be defined by provider by this.thumbnail
     * @param {object} [param.options]
     * @param {boolean} [param.options.overwrite] - whether user choose to overwrite already saved map under the same name
     * @param {boolean} [param.options.isPublic] - whether user wish to share the map with others. if isPublic is truthy, kepler will call this.getShareUrl() to display an URL they can share with others
     * @public
     */

  }, {
    key: "uploadMap",
    value: function () {
      var _uploadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref) {
        var mapData, _ref$options, options;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mapData = _ref.mapData, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
                return _context3.abrupt("return");

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function uploadMap(_x3) {
        return _uploadMap.apply(this, arguments);
      }

      return uploadMap;
    }()
    /**
     * This method is called to get a list of maps saved by the current logged in user.
     * @returns visualizations an array of Viz objects
     * @public
     * @example
     *  async listMaps() {
     *    return [
     *      {
     *        id: 'a',
     *        title: 'My map',
     *        description: 'My first kepler map',
     *        imageUrl: 'http://',
     *        lastModification: 1582677787000,
     *        privateMap: false,
     *        loadParams: {}
     *      }
     *    ];
     *  }
     */

  }, {
    key: "listMaps",
    value: function () {
      var _listMaps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", []);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function listMaps() {
        return _listMaps.apply(this, arguments);
      }

      return listMaps;
    }()
    /**
     * This method will be called when user select a map to load from the storage map viewer
     * @param {*} loadParams - the loadParams property of each visualization object
     * @returns mapResponse - the map object containing dataset config info and format option
     * @public
     * @example
     * async downloadMap(loadParams) {
     *  const mockResponse = {
     *    map: {
     *      datasets: [],
     *      config: {},
     *      info: {
     *        app: 'kepler.gl',
     *        created_at: ''
     *        title: 'test map',
     *        description: 'Hello this is my test dropbox map'
     *      }
     *    },
     *    // pass csv here if your provider currently only support save / load file as csv
     *    format: 'keplergl'
     *  };
     *
     *  return downloadMap;
     * }
     */

  }, {
    key: "downloadMap",
    value: function () {
      var _downloadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(loadParams) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return");

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function downloadMap(_x4) {
        return _downloadMap.apply(this, arguments);
      }

      return downloadMap;
    }()
    /**
     * @typedef {Object} Viz
     * @property {string} id - An unique id
     * @property {string} title - The title of the map
     * @property {string} description - The description of the map
     * @property {string} imageUrl - The imageUrl of the map
     * @property {number} lastModification - An epoch timestamp in milliseconds
     * @property {boolean} privateMap - Optional, whether if this map is private to the user, or can be accessed by others via URL
     * @property {*} loadParams - A property to be passed to `downloadMap`
     * @public
     */

    /**
     * The returned object of `downloadMap`. The response object should contain: datasets: [], config: {}, and info: {}
     * each dataset object should be {info: {id, label}, data: {...}}
     * to inform how kepler should process your data object, pass in `format`
     * @typedef {Object} MapResponse
     * @property {Object} map
     * @property {Array<Object>} map.datasets
     * @property {Object} map.config
     * @property {Object} map.info
     * @property {string} format - one of 'csv': csv file string, 'geojson': geojson object, 'row': row object, 'keplergl': datasets array saved using KeplerGlSchema.save
     * @public
     */

  }]);
  return Provider;
}();

exports["default"] = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC1wcm92aWRlcnMvcHJvdmlkZXIuanMiXSwibmFtZXMiOlsiTkFNRSIsIkRJU1BMQVlfTkFNRSIsIlRIVU1CTkFJTCIsIndpZHRoIiwiaGVpZ2h0IiwiSUNPTiIsIlVwbG9hZCIsIkZJTEVfQ09ORkxJQ1RfTVNHIiwiUHJvdmlkZXIiLCJwcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImljb24iLCJ0aHVtYm5haWwiLCJmdWxsVXJsIiwiZnVsbFVSTCIsIkVycm9yIiwib25DbG91ZExvZ2luU3VjY2VzcyIsIm9uQ2xvdWRMb2dvdXRTdWNjZXNzIiwibWFwRGF0YSIsIm9wdGlvbnMiLCJsb2FkUGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxJQUFJLEdBQUcsZ0JBQWI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsZ0JBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQUNDLEVBQUFBLEtBQUssRUFBRSxHQUFSO0FBQWFDLEVBQUFBLE1BQU0sRUFBRTtBQUFyQixDQUFsQjtBQUNBLElBQU1DLElBQUksR0FBR0MsYUFBYjtBQUNPLElBQU1DLGlCQUFpQixHQUFHLGVBQTFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFDcUJDLFE7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUNqQixTQUFLQyxJQUFMLEdBQVlELEtBQUssQ0FBQ0MsSUFBTixJQUFjVixJQUExQjtBQUNBLFNBQUtXLFdBQUwsR0FBbUJGLEtBQUssQ0FBQ0UsV0FBTixJQUFxQlYsWUFBeEM7QUFDQSxTQUFLVyxJQUFMLEdBQVlILEtBQUssQ0FBQ0csSUFBTixJQUFjUCxJQUExQjtBQUNBLFNBQUtRLFNBQUwsR0FBaUJKLEtBQUssQ0FBQ0ksU0FBTixJQUFtQlgsU0FBcEM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O3dDQUNzQjtBQUNsQixhQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7b0NBQ2tCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7a0NBQytCO0FBQUEsVUFBakJZLE9BQWlCLHVFQUFQLEtBQU87QUFDM0IsYUFBTyxFQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Z0NBQzRCO0FBQUEsVUFBaEJDLE9BQWdCLHVFQUFOLElBQU07QUFDeEIsYUFBTyxFQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O3FDQUNtQjtBQUNmLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztrQ0FDZ0I7QUFDWixhQUFPLEVBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OzsyQ0FDeUI7QUFDckIsYUFBTyxJQUFJQyxLQUFKLENBQVVULGlCQUFWLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0hBQ2NVLG1COzs7OztBQUNWQSxnQkFBQUEsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O29IQUNlQyxvQjs7Ozs7QUFDWEEsZ0JBQUFBLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUNtQkMsZ0JBQUFBLE8sUUFBQUEsTyxzQkFBU0MsTyxFQUFBQSxPLDZCQUFVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O2tEQUVXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7eUhBQ29CQyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1VwbG9hZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5jb25zdCBOQU1FID0gJ2Nsb3VkLXByb3ZpZGVyJztcbmNvbnN0IERJU1BMQVlfTkFNRSA9ICdDbG91ZCBQcm92aWRlcic7XG5jb25zdCBUSFVNQk5BSUwgPSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDB9O1xuY29uc3QgSUNPTiA9IFVwbG9hZDtcbmV4cG9ydCBjb25zdCBGSUxFX0NPTkZMSUNUX01TRyA9ICdmaWxlX2NvbmZsaWN0Jztcbi8qKlxuICogVGhlIGRlZmF1bHQgcHJvdmlkZXIgY2xhc3NcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5kaXNwbGF5TmFtZVxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnR9IHByb3BzLmljb24gLSBSZWFjdCBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMudGh1bWJuYWlsIC0gdGh1bWJuYWlsIHNpemUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMudGh1bWJuYWlsLndpZHRoIC0gdGh1bWJuYWlsIHdpZHRoIGluIHBpeGVsc1xuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnRodW1ibmFpbC5oZWlnaHQgLSB0aHVtYm5haWwgaGVpZ2h0IGluIHBpeGVsc1xuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBteVByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKHtcbiAqICBuYW1lOiAnZm9vJyxcbiAqICBkaXNwbGF5TmFtZTogJ0ZvbyBTdG9yYWdlJ1xuICogIGljb246IEljb24sXG4gKiAgdGh1bWJuYWlsOiB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAyMDB9XG4gKiB9KVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBOQU1FO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZSB8fCBESVNQTEFZX05BTUU7XG4gICAgdGhpcy5pY29uID0gcHJvcHMuaWNvbiB8fCBJQ09OO1xuICAgIHRoaXMudGh1bWJuYWlsID0gcHJvcHMudGh1bWJuYWlsIHx8IFRIVU1CTkFJTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcHJvdmlkZXIgc3VwcG9ydCB1cGxvYWQgbWFwIHRvIGEgcHJpdmF0ZSBzdG9yYWdlLiBJZiB0cnV0aHksIHVzZXIgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCB0aGUgc3RvcmFnZSBzYXZlIGljb24gb24gdGhlIHRvcCByaWdodCBvZiB0aGUgc2lkZSBiYXIuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHVibGljXG4gICAqL1xuICBoYXNQcml2YXRlU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcHJvdmlkZXIgc3VwcG9ydCBzaGFyZSBtYXAgdmlhIGEgcHVibGljIHVybCwgaWYgdHJ1dGh5LCB1c2VyIHdpbGwgYmUgZGlzcGxheWVkIHdpdGggYSBzaGFyZSBtYXAgdmlhIHVybCB1bmRlciB0aGUgZXhwb3J0IG1hcCBvcHRpb24gb24gdGhlIHRvcCByaWdodCBvZiB0aGUgc2lkZSBiYXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGhhc1NoYXJpbmdVcmwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHVzZXIgc2hhcmUgYSBtYXAsIHRvIGRpc3BsYXkgdGhlIHNoYXJlIHVybC5cbiAgICogQHBhcmFtIHtib29sZWFufSBmdWxsVXJsIC0gV2hldGhlciB0byByZXR1cm4gdGhlIGZ1bGwgdXJsIHdpdGggZG9tYWluLCBvciBqdXN0IHRoZSBsb2NhdGlvblxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzaGFyZVVybFxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRTaGFyZVVybChmdWxsVXJsID0gZmFsc2UpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IGtlcGxlci5nbCBkZW1vIGFwcCB0byBwdXNoZXMgYSBuZXcgbG9jYXRpb24gdG8gaGlzdG9yeSwgYmVjb21pbmcgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnVsbFVSTCAtIFdoZXRoZXIgdG8gcmV0dXJuIHRoZSBmdWxsIHVybCB3aXRoIGRvbWFpbiwgb3IganVzdCB0aGUgbG9jYXRpb25cbiAgICogQHJldHVybnMge3N0cmluZ30gbWFwVXJsXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldE1hcFVybChmdWxsVVJMID0gdHJ1ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdXNlciBhbHJlYWR5IGxvZ2dlZCBpbiB0byB0aGlzIHByb3ZpZGVyXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSB1c2VyIGFscmVhZHkgbG9nZ2VkIGluXG4gICAqL1xuICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdG8gZ2V0IHRoZSB1c2VyIG5hbWUgb2YgdGhlIGN1cnJlbnQgdXNlci4gSXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNsb3VkIHByb3ZpZGVyIHRpbGUuXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge3N0cmluZ30gdHJ1ZSBpZiBhIHVzZXIgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICovXG4gIGdldFVzZXJOYW1lKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJldHVybiBhIHN0YW5kYXJkIGVycm9yIHRoYXQgd2lsbCB0cmlnZ2VyIHRoZSBvdmVyd3JpdGUgbWFwIG1vZGFsXG4gICAqL1xuICBnZXRGaWxlQ29uZmxpY3RFcnJvcigpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKEZJTEVfQ09ORkxJQ1RfTVNHKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHVzZXIgY2xpY2sgdGhlIGxvZ2luIGJ1dHRvbiBpbiB0aGUgY2xvdWQgcHJvdmlkZXIgdGlsZS5cbiAgICogVXBvbiBsb2dpbiBzdWNjZXNzLCBgb25DbG91ZExvZ2luU3VjY2Vzc2AgaGFzIHRvIGJlIGNhbGxlZCB0byBub3RpZnkga2VwbGVyLmdsIFVJXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2xvdWRMb2dpblN1Y2Nlc3MgLSBjYWxsYmFja3MgdG8gYmUgY2FsbGVkIGFmdGVyIGxvZ2luIHN1Y2Nlc3NcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYXN5bmMgbG9naW4ob25DbG91ZExvZ2luU3VjY2Vzcykge1xuICAgIG9uQ2xvdWRMb2dpblN1Y2Nlc3MoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrIHRoZSBsb2dvdXQgYnV0dG9uIHVuZGVyIHRoZSBjbG91ZCBwcm92aWRlciB0aWxlLlxuICAgKiBVcG9uIGxvZ2luIHN1Y2Nlc3MsIGBvbkNsb3VkTG9naW5TdWNjZXNzYCBoYXMgdG8gYmUgY2FsbGVkIHRvIG5vdGlmeSBrZXBsZXIuZ2wgVUlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25DbG91ZExvZ291dFN1Y2Nlc3MgLSBjYWxsYmFja3MgdG8gYmUgY2FsbGVkIGFmdGVyIGxvZ291dCBzdWNjZXNzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIGxvZ291dChvbkNsb3VkTG9nb3V0U3VjY2Vzcykge1xuICAgIG9uQ2xvdWRMb2dvdXRTdWNjZXNzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHRvIHVwbG9hZCBtYXAgZm9yIHNhdmluZyBhbmQgc2hhcmluZy4gS2VwbGVyLmdsIHdpbGwgcGFja2FnZSBtYXAgZGF0YSwgY29uZmlnLCB0aXRsZSwgZGVzY3JpcHRpb24gYW5kIHRodW1ibmFpbCBmb3IgdXBsb2FkIHRvIHN0b3JhZ2UuXG4gICAqIFdpdGggdGhlIG9wdGlvbiB0byBvdmVyd3JpdGUgYWxyZWFkeSBzYXZlZCBtYXAsIGFuZCB1cGxvYWQgYXMgcHJpdmF0ZSBvciBwdWJsaWMgbWFwLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtLm1hcERhdGEgLSB0aGUgbWFwIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0ubWFwRGF0YS5tYXAgLSB7ZGF0YXNldHMuIGNvbmZpZywgaW5mbzoge3RpdGxlLCBkZXNjcmlwdGlvbn19XG4gICAqIEBwYXJhbSB7QmxvYn0gcGFyYW0ubWFwRGF0YS50aHVtYm5haWwgLSBBIHRodW1ibmFpbCBvZiBjdXJyZW50IG1hcC4gdGh1bWJuYWlsIHNpemUgY2FuIGJlIGRlZmluZWQgYnkgcHJvdmlkZXIgYnkgdGhpcy50aHVtYm5haWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbS5vcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbS5vcHRpb25zLm92ZXJ3cml0ZV0gLSB3aGV0aGVyIHVzZXIgY2hvb3NlIHRvIG92ZXJ3cml0ZSBhbHJlYWR5IHNhdmVkIG1hcCB1bmRlciB0aGUgc2FtZSBuYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtLm9wdGlvbnMuaXNQdWJsaWNdIC0gd2hldGhlciB1c2VyIHdpc2ggdG8gc2hhcmUgdGhlIG1hcCB3aXRoIG90aGVycy4gaWYgaXNQdWJsaWMgaXMgdHJ1dGh5LCBrZXBsZXIgd2lsbCBjYWxsIHRoaXMuZ2V0U2hhcmVVcmwoKSB0byBkaXNwbGF5IGFuIFVSTCB0aGV5IGNhbiBzaGFyZSB3aXRoIG90aGVyc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyB1cGxvYWRNYXAoe21hcERhdGEsIG9wdGlvbnMgPSB7fX0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHRvIGdldCBhIGxpc3Qgb2YgbWFwcyBzYXZlZCBieSB0aGUgY3VycmVudCBsb2dnZWQgaW4gdXNlci5cbiAgICogQHJldHVybnMgdmlzdWFsaXphdGlvbnMgYW4gYXJyYXkgb2YgVml6IG9iamVjdHNcbiAgICogQHB1YmxpY1xuICAgKiBAZXhhbXBsZVxuICAgKiAgYXN5bmMgbGlzdE1hcHMoKSB7XG4gICAqICAgIHJldHVybiBbXG4gICAqICAgICAge1xuICAgKiAgICAgICAgaWQ6ICdhJyxcbiAgICogICAgICAgIHRpdGxlOiAnTXkgbWFwJyxcbiAgICogICAgICAgIGRlc2NyaXB0aW9uOiAnTXkgZmlyc3Qga2VwbGVyIG1hcCcsXG4gICAqICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly8nLFxuICAgKiAgICAgICAgbGFzdE1vZGlmaWNhdGlvbjogMTU4MjY3Nzc4NzAwMCxcbiAgICogICAgICAgIHByaXZhdGVNYXA6IGZhbHNlLFxuICAgKiAgICAgICAgbG9hZFBhcmFtczoge31cbiAgICogICAgICB9XG4gICAqICAgIF07XG4gICAqICB9XG4gICAqL1xuICBhc3luYyBsaXN0TWFwcygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB1c2VyIHNlbGVjdCBhIG1hcCB0byBsb2FkIGZyb20gdGhlIHN0b3JhZ2UgbWFwIHZpZXdlclxuICAgKiBAcGFyYW0geyp9IGxvYWRQYXJhbXMgLSB0aGUgbG9hZFBhcmFtcyBwcm9wZXJ0eSBvZiBlYWNoIHZpc3VhbGl6YXRpb24gb2JqZWN0XG4gICAqIEByZXR1cm5zIG1hcFJlc3BvbnNlIC0gdGhlIG1hcCBvYmplY3QgY29udGFpbmluZyBkYXRhc2V0IGNvbmZpZyBpbmZvIGFuZCBmb3JtYXQgb3B0aW9uXG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogYXN5bmMgZG93bmxvYWRNYXAobG9hZFBhcmFtcykge1xuICAgKiAgY29uc3QgbW9ja1Jlc3BvbnNlID0ge1xuICAgKiAgICBtYXA6IHtcbiAgICogICAgICBkYXRhc2V0czogW10sXG4gICAqICAgICAgY29uZmlnOiB7fSxcbiAgICogICAgICBpbmZvOiB7XG4gICAqICAgICAgICBhcHA6ICdrZXBsZXIuZ2wnLFxuICAgKiAgICAgICAgY3JlYXRlZF9hdDogJydcbiAgICogICAgICAgIHRpdGxlOiAndGVzdCBtYXAnLFxuICAgKiAgICAgICAgZGVzY3JpcHRpb246ICdIZWxsbyB0aGlzIGlzIG15IHRlc3QgZHJvcGJveCBtYXAnXG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICAvLyBwYXNzIGNzdiBoZXJlIGlmIHlvdXIgcHJvdmlkZXIgY3VycmVudGx5IG9ubHkgc3VwcG9ydCBzYXZlIC8gbG9hZCBmaWxlIGFzIGNzdlxuICAgKiAgICBmb3JtYXQ6ICdrZXBsZXJnbCdcbiAgICogIH07XG4gICAqXG4gICAqICByZXR1cm4gZG93bmxvYWRNYXA7XG4gICAqIH1cbiAgICovXG4gIGFzeW5jIGRvd25sb2FkTWFwKGxvYWRQYXJhbXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gVml6XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZCAtIEFuIHVuaXF1ZSBpZFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1hcFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZGVzY3JpcHRpb24gLSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIG1hcFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaW1hZ2VVcmwgLSBUaGUgaW1hZ2VVcmwgb2YgdGhlIG1hcFxuICAgKiBAcHJvcGVydHkge251bWJlcn0gbGFzdE1vZGlmaWNhdGlvbiAtIEFuIGVwb2NoIHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBwcml2YXRlTWFwIC0gT3B0aW9uYWwsIHdoZXRoZXIgaWYgdGhpcyBtYXAgaXMgcHJpdmF0ZSB0byB0aGUgdXNlciwgb3IgY2FuIGJlIGFjY2Vzc2VkIGJ5IG90aGVycyB2aWEgVVJMXG4gICAqIEBwcm9wZXJ0eSB7Kn0gbG9hZFBhcmFtcyAtIEEgcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGBkb3dubG9hZE1hcGBcbiAgICogQHB1YmxpY1xuICAgKi9cblxuICAvKipcbiAgICogVGhlIHJldHVybmVkIG9iamVjdCBvZiBgZG93bmxvYWRNYXBgLiBUaGUgcmVzcG9uc2Ugb2JqZWN0IHNob3VsZCBjb250YWluOiBkYXRhc2V0czogW10sIGNvbmZpZzoge30sIGFuZCBpbmZvOiB7fVxuICAgKiBlYWNoIGRhdGFzZXQgb2JqZWN0IHNob3VsZCBiZSB7aW5mbzoge2lkLCBsYWJlbH0sIGRhdGE6IHsuLi59fVxuICAgKiB0byBpbmZvcm0gaG93IGtlcGxlciBzaG91bGQgcHJvY2VzcyB5b3VyIGRhdGEgb2JqZWN0LCBwYXNzIGluIGBmb3JtYXRgXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE1hcFJlc3BvbnNlXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtYXBcbiAgICogQHByb3BlcnR5IHtBcnJheTxPYmplY3Q+fSBtYXAuZGF0YXNldHNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1hcC5jb25maWdcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1hcC5pbmZvXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmb3JtYXQgLSBvbmUgb2YgJ2Nzdic6IGNzdiBmaWxlIHN0cmluZywgJ2dlb2pzb24nOiBnZW9qc29uIG9iamVjdCwgJ3Jvdyc6IHJvdyBvYmplY3QsICdrZXBsZXJnbCc6IGRhdGFzZXRzIGFycmF5IHNhdmVkIHVzaW5nIEtlcGxlckdsU2NoZW1hLnNhdmVcbiAgICogQHB1YmxpY1xuICAgKi9cbn1cbiJdfQ==