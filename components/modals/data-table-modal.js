"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _dataTable = _interopRequireDefault(require("../common/data-table"));

var _reselect = require("reselect");

var _cellSize = require("../common/data-table/cell-size");

var _canvas = _interopRequireDefault(require("../common/data-table/canvas"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-height: 100%;\n  max-height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: ", " ", " 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 70vh;\n  overflow: hidden;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dgSettings = {
  sidePadding: '38px',
  verticalPadding: '16px',
  height: '36px'
};

var StyledModal = _styledComponents["default"].div(_templateObject());

var DatasetCatalog = _styledComponents["default"].div(_templateObject2(), dgSettings.verticalPadding, dgSettings.sidePadding);

var DatasetModalTab = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.active ? 'black' : 'transparent';
});

exports.DatasetModalTab = DatasetModalTab;

var DatasetTabsUnmemoized = function DatasetTabsUnmemoized(_ref) {
  var activeDataset = _ref.activeDataset,
      datasets = _ref.datasets,
      showDatasetTable = _ref.showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return /*#__PURE__*/_react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
};

var DatasetTabs = /*#__PURE__*/_react["default"].memo(DatasetTabsUnmemoized);

exports.DatasetTabs = DatasetTabs;
DatasetTabs.displayName = 'DatasetTabs';
DataTableModalFactory.deps = [_dataTable["default"]];

var TableContainer = _styledComponents["default"].div(_templateObject4());

function DataTableModalFactory(DataTable) {
  var DataTableModal = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(DataTableModal, _React$Component);

    var _super = _createSuper(DataTableModal);

    function DataTableModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTableModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetCellSizeCache", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataId", function (props) {
        return props.dataId;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasets", function (props) {
        return props.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fields", function (props) {
        return (props.datasets[props.dataId] || {}).fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.map(function (f) {
          return f.name;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colMeta", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.reduce(function (acc, _ref2) {
          var name = _ref2.name,
              type = _ref2.type;
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, name, type));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cellSizeCache", (0, _reselect.createSelector)(_this.dataId, _this.datasets, function (dataId, datasets) {
        if (!_this.props.datasets[dataId]) {
          return {};
        }

        var _this$props$datasets$ = _this.props.datasets[dataId],
            fields = _this$props$datasets$.fields,
            allData = _this$props$datasets$.allData;
        var showCalculate = null;

        if (!_this.datasetCellSizeCache[dataId]) {
          showCalculate = true;
        } else if (_this.datasetCellSizeCache[dataId].fields !== fields || _this.datasetCellSizeCache[dataId].allData !== allData) {
          showCalculate = true;
        }

        if (!showCalculate) {
          return _this.datasetCellSizeCache[dataId].cellSizeCache;
        }

        var cellSizeCache = fields.reduce(function (acc, field, colIdx) {
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, field.name, (0, _cellSize.renderedSize)({
            text: {
              rows: allData,
              column: field.name
            },
            colIdx: colIdx,
            type: field.type,
            fontSize: _this.props.theme.cellFontSize,
            font: _this.props.theme.fontFamily
          })));
        }, {}); // save it to cache

        _this.datasetCellSizeCache[dataId] = {
          cellSizeCache: cellSizeCache,
          fields: fields,
          allData: allData
        };
        return cellSizeCache;
      }));
      return _this;
    }

    (0, _createClass2["default"])(DataTableModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            dataId = _this$props.dataId,
            showDatasetTable = _this$props.showDatasetTable,
            showTab = _this$props.showTab;

        if (!datasets || !dataId) {
          return null;
        }

        var activeDataset = datasets[dataId];
        var columns = this.columns(this.props);
        var colMeta = this.colMeta(this.props);
        var cellSizeCache = this.cellSizeCache(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledModal, {
          className: "dataset-modal",
          id: "dataset-modal"
        }, /*#__PURE__*/_react["default"].createElement(_canvas["default"], null), /*#__PURE__*/_react["default"].createElement(TableContainer, null, showTab ? /*#__PURE__*/_react["default"].createElement(DatasetTabs, {
          activeDataset: activeDataset,
          datasets: datasets,
          showDatasetTable: showDatasetTable
        }) : null, datasets[dataId] ? /*#__PURE__*/_react["default"].createElement(DataTable, {
          key: dataId,
          dataId: dataId,
          columns: columns,
          colMeta: colMeta,
          cellSizeCache: cellSizeCache,
          rows: activeDataset.allData,
          pinnedColumns: activeDataset.pinnedColumns,
          sortOrder: activeDataset.sortOrder,
          sortColumn: activeDataset.sortColumn,
          copyTableColumn: this.props.copyTableColumn,
          pinTableColumn: this.props.pinTableColumn,
          sortTableColumn: this.props.sortTableColumn
        }) : null));
      }
    }]);
    return DataTableModal;
  }(_react["default"].Component);

  DataTableModal.defaultProps = {
    showTab: true
  };
  return (0, _styledComponents.withTheme)(DataTableModal);
}

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzVW5tZW1vaXplZCIsImFjdGl2ZURhdGFzZXQiLCJkYXRhc2V0cyIsInNob3dEYXRhc2V0VGFibGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJkYXRhc2V0IiwiaWQiLCJEYXRhc2V0VGFicyIsIlJlYWN0IiwibWVtbyIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFUYWJsZUZhY3RvcnkiLCJUYWJsZUNvbnRhaW5lciIsIkRhdGFUYWJsZSIsIkRhdGFUYWJsZU1vZGFsIiwiZGF0YUlkIiwiZmllbGRzIiwiZiIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJ0eXBlIiwiYWxsRGF0YSIsInNob3dDYWxjdWxhdGUiLCJkYXRhc2V0Q2VsbFNpemVDYWNoZSIsImNlbGxTaXplQ2FjaGUiLCJmaWVsZCIsImNvbElkeCIsInRleHQiLCJyb3dzIiwiY29sdW1uIiwiZm9udFNpemUiLCJ0aGVtZSIsImNlbGxGb250U2l6ZSIsImZvbnQiLCJmb250RmFtaWx5Iiwic2hvd1RhYiIsImNvbHVtbnMiLCJjb2xNZXRhIiwicGlubmVkQ29sdW1ucyIsInNvcnRPcmRlciIsInNvcnRDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJwaW5UYWJsZUNvbHVtbiIsInNvcnRUYWJsZUNvbHVtbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNB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LGNBQVYsQ0FBUDtBQUNEOztlQUVjTCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGF0YXNldExhYmVsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGFzZXQtbGFiZWwnO1xuaW1wb3J0IERhdGFUYWJsZUZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YS10YWJsZSc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge3JlbmRlcmVkU2l6ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YS10YWJsZS9jZWxsLXNpemUnO1xuaW1wb3J0IENhbnZhc0hhY2sgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YS10YWJsZS9jYW52YXMnO1xuXG5jb25zdCBkZ1NldHRpbmdzID0ge1xuICBzaWRlUGFkZGluZzogJzM4cHgnLFxuICB2ZXJ0aWNhbFBhZGRpbmc6ICcxNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCdcbn07XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IERhdGFzZXRDYXRhbG9nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogJHtkZ1NldHRpbmdzLnZlcnRpY2FsUGFkZGluZ30gJHtkZ1NldHRpbmdzLnNpZGVQYWRkaW5nfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRNb2RhbFRhYiA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyAnYmxhY2snIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgcGFkZGluZzogMCA1cHg7XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IERhdGFzZXRUYWJzVW5tZW1vaXplZCA9ICh7YWN0aXZlRGF0YXNldCwgZGF0YXNldHMsIHNob3dEYXRhc2V0VGFibGV9KSA9PiAoXG4gIDxEYXRhc2V0Q2F0YWxvZyBjbGFzc05hbWU9XCJkYXRhc2V0LW1vZGFsLWNhdGFsb2dcIj5cbiAgICB7T2JqZWN0LnZhbHVlcyhkYXRhc2V0cykubWFwKGRhdGFzZXQgPT4gKFxuICAgICAgPERhdGFzZXRNb2RhbFRhYlxuICAgICAgICBjbGFzc05hbWU9XCJkYXRhc2V0LW1vZGFsLXRhYlwiXG4gICAgICAgIGFjdGl2ZT17ZGF0YXNldCA9PT0gYWN0aXZlRGF0YXNldH1cbiAgICAgICAga2V5PXtkYXRhc2V0LmlkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93RGF0YXNldFRhYmxlKGRhdGFzZXQuaWQpfVxuICAgICAgPlxuICAgICAgICA8RGF0YXNldExhYmVsIGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gICAgICA8L0RhdGFzZXRNb2RhbFRhYj5cbiAgICApKX1cbiAgPC9EYXRhc2V0Q2F0YWxvZz5cbik7XG5cbmV4cG9ydCBjb25zdCBEYXRhc2V0VGFicyA9IFJlYWN0Lm1lbW8oRGF0YXNldFRhYnNVbm1lbW9pemVkKTtcblxuRGF0YXNldFRhYnMuZGlzcGxheU5hbWUgPSAnRGF0YXNldFRhYnMnO1xuXG5EYXRhVGFibGVNb2RhbEZhY3RvcnkuZGVwcyA9IFtEYXRhVGFibGVGYWN0b3J5XTtcblxuY29uc3QgVGFibGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG5gO1xuXG5mdW5jdGlvbiBEYXRhVGFibGVNb2RhbEZhY3RvcnkoRGF0YVRhYmxlKSB7XG4gIGNsYXNzIERhdGFUYWJsZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBkYXRhc2V0Q2VsbFNpemVDYWNoZSA9IHt9O1xuICAgIGRhdGFJZCA9IHByb3BzID0+IHByb3BzLmRhdGFJZDtcbiAgICBkYXRhc2V0cyA9IHByb3BzID0+IHByb3BzLmRhdGFzZXRzO1xuICAgIGZpZWxkcyA9IHByb3BzID0+IChwcm9wcy5kYXRhc2V0c1twcm9wcy5kYXRhSWRdIHx8IHt9KS5maWVsZHM7XG4gICAgY29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRzLCBmaWVsZHMgPT4gZmllbGRzLm1hcChmID0+IGYubmFtZSkpO1xuICAgIGNvbE1ldGEgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmZpZWxkcywgZmllbGRzID0+XG4gICAgICBmaWVsZHMucmVkdWNlKFxuICAgICAgICAoYWNjLCB7bmFtZSwgdHlwZX0pID0+ICh7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtuYW1lXTogdHlwZVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICApO1xuICAgIGNlbGxTaXplQ2FjaGUgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmRhdGFJZCwgdGhpcy5kYXRhc2V0cywgKGRhdGFJZCwgZGF0YXNldHMpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhc2V0c1tkYXRhSWRdKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtmaWVsZHMsIGFsbERhdGF9ID0gdGhpcy5wcm9wcy5kYXRhc2V0c1tkYXRhSWRdO1xuXG4gICAgICBsZXQgc2hvd0NhbGN1bGF0ZSA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXSkge1xuICAgICAgICBzaG93Q2FsY3VsYXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5maWVsZHMgIT09IGZpZWxkcyB8fFxuICAgICAgICB0aGlzLmRhdGFzZXRDZWxsU2l6ZUNhY2hlW2RhdGFJZF0uYWxsRGF0YSAhPT0gYWxsRGF0YVxuICAgICAgKSB7XG4gICAgICAgIHNob3dDYWxjdWxhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNob3dDYWxjdWxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5jZWxsU2l6ZUNhY2hlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsU2l6ZUNhY2hlID0gZmllbGRzLnJlZHVjZShcbiAgICAgICAgKGFjYywgZmllbGQsIGNvbElkeCkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW2ZpZWxkLm5hbWVdOiByZW5kZXJlZFNpemUoe1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICByb3dzOiBhbGxEYXRhLFxuICAgICAgICAgICAgICBjb2x1bW46IGZpZWxkLm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xJZHgsXG4gICAgICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMudGhlbWUuY2VsbEZvbnRTaXplLFxuICAgICAgICAgICAgZm9udDogdGhpcy5wcm9wcy50aGVtZS5mb250RmFtaWx5XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgICAgLy8gc2F2ZSBpdCB0byBjYWNoZVxuICAgICAgdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGFsbERhdGFcbiAgICAgIH07XG4gICAgICByZXR1cm4gY2VsbFNpemVDYWNoZTtcbiAgICB9KTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgZGF0YUlkLCBzaG93RGF0YXNldFRhYmxlLCBzaG93VGFifSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIWRhdGFzZXRzIHx8ICFkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVEYXRhc2V0ID0gZGF0YXNldHNbZGF0YUlkXTtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnModGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBjb2xNZXRhID0gdGhpcy5jb2xNZXRhKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgY2VsbFNpemVDYWNoZSA9IHRoaXMuY2VsbFNpemVDYWNoZSh0aGlzLnByb3BzKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1vZGFsIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWxcIiBpZD1cImRhdGFzZXQtbW9kYWxcIj5cbiAgICAgICAgICA8Q2FudmFzSGFjayAvPlxuICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtzaG93VGFiID8gKFxuICAgICAgICAgICAgICA8RGF0YXNldFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVEYXRhc2V0PXthY3RpdmVEYXRhc2V0fVxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7ZGF0YXNldHNbZGF0YUlkXSA/IChcbiAgICAgICAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgICAgICAgIGtleT17ZGF0YUlkfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZGF0YUlkfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgY29sTWV0YT17Y29sTWV0YX1cbiAgICAgICAgICAgICAgICBjZWxsU2l6ZUNhY2hlPXtjZWxsU2l6ZUNhY2hlfVxuICAgICAgICAgICAgICAgIHJvd3M9e2FjdGl2ZURhdGFzZXQuYWxsRGF0YX1cbiAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zPXthY3RpdmVEYXRhc2V0LnBpbm5lZENvbHVtbnN9XG4gICAgICAgICAgICAgICAgc29ydE9yZGVyPXthY3RpdmVEYXRhc2V0LnNvcnRPcmRlcn1cbiAgICAgICAgICAgICAgICBzb3J0Q29sdW1uPXthY3RpdmVEYXRhc2V0LnNvcnRDb2x1bW59XG4gICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXt0aGlzLnByb3BzLmNvcHlUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBwaW5UYWJsZUNvbHVtbj17dGhpcy5wcm9wcy5waW5UYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBzb3J0VGFibGVDb2x1bW49e3RoaXMucHJvcHMuc29ydFRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRNb2RhbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIERhdGFUYWJsZU1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93VGFiOiB0cnVlXG4gIH07XG4gIHJldHVybiB3aXRoVGhlbWUoRGF0YVRhYmxlTW9kYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVNb2RhbEZhY3Rvcnk7XG4iXX0=