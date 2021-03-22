"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _datasetTitle = _interopRequireDefault(require("./dataset-title"));

var _datasetInfo = _interopRequireDefault(require("./dataset-info"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SourceDataCatalogWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.transition;
});

SourceDataCatalogFactory.deps = [_datasetTitle["default"], _datasetInfo["default"]];

function SourceDataCatalogFactory(DatasetTitle, DatasetInfo) {
  var SourceDataCatalog = function SourceDataCatalog(_ref) {
    var datasets = _ref.datasets,
        showDatasetTable = _ref.showDatasetTable,
        removeDataset = _ref.removeDataset,
        onTitleClick = _ref.onTitleClick,
        _ref$showDeleteDatase = _ref.showDeleteDataset,
        showDeleteDataset = _ref$showDeleteDatase === void 0 ? false : _ref$showDeleteDatase;
    return /*#__PURE__*/_react["default"].createElement(SourceDataCatalogWrapper, {
      className: "source-data-catalog"
    }, Object.values(datasets).map(function (dataset, index) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, {
        key: dataset.id
      }, /*#__PURE__*/_react["default"].createElement(DatasetTitle, {
        showDatasetTable: showDatasetTable,
        showDeleteDataset: showDeleteDataset,
        removeDataset: removeDataset,
        dataset: dataset,
        onTitleClick: onTitleClick
      }), showDatasetTable ? /*#__PURE__*/_react["default"].createElement(DatasetInfo, {
        dataset: dataset
      }) : null);
    }));
  };

  return SourceDataCatalog;
}

var _default = SourceDataCatalogFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL3NvdXJjZS1kYXRhLWNhdGFsb2cuanMiXSwibmFtZXMiOlsiU291cmNlRGF0YUNhdGFsb2dXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkiLCJkZXBzIiwiRGF0YXNldFRpdGxlRmFjdG9yeSIsIkRhdGFzZXRJbmZvRmFjdG9yeSIsIkRhdGFzZXRUaXRsZSIsIkRhdGFzZXRJbmZvIiwiU291cmNlRGF0YUNhdGFsb2ciLCJkYXRhc2V0cyIsInNob3dEYXRhc2V0VGFibGUiLCJyZW1vdmVEYXRhc2V0Iiwib25UaXRsZUNsaWNrIiwic2hvd0RlbGV0ZURhdGFzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJkYXRhc2V0IiwiaW5kZXgiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHQyw2QkFBT0MsR0FBVixvQkFDZCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FEUyxDQUE5Qjs7QUFJQUMsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLHdCQUFELEVBQXNCQyx1QkFBdEIsQ0FBaEM7O0FBRUEsU0FBU0gsd0JBQVQsQ0FBa0NJLFlBQWxDLEVBQWdEQyxXQUFoRCxFQUE2RDtBQUMzRCxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsUUFDeEJDLFFBRHdCLFFBQ3hCQSxRQUR3QjtBQUFBLFFBRXhCQyxnQkFGd0IsUUFFeEJBLGdCQUZ3QjtBQUFBLFFBR3hCQyxhQUh3QixRQUd4QkEsYUFId0I7QUFBQSxRQUl4QkMsWUFKd0IsUUFJeEJBLFlBSndCO0FBQUEscUNBS3hCQyxpQkFMd0I7QUFBQSxRQUt4QkEsaUJBTHdCLHNDQUtKLEtBTEk7QUFBQSx3QkFPeEIsZ0NBQUMsd0JBQUQ7QUFBMEIsTUFBQSxTQUFTLEVBQUM7QUFBcEMsT0FDR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLFFBQWQsRUFBd0JPLEdBQXhCLENBQTRCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDBCQUMzQixnQ0FBQyxtQ0FBRDtBQUFrQixRQUFBLEdBQUcsRUFBRUQsT0FBTyxDQUFDRTtBQUEvQixzQkFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxnQkFBZ0IsRUFBRVQsZ0JBRHBCO0FBRUUsUUFBQSxpQkFBaUIsRUFBRUcsaUJBRnJCO0FBR0UsUUFBQSxhQUFhLEVBQUVGLGFBSGpCO0FBSUUsUUFBQSxPQUFPLEVBQUVNLE9BSlg7QUFLRSxRQUFBLFlBQVksRUFBRUw7QUFMaEIsUUFERixFQVFHRixnQkFBZ0IsZ0JBQUcsZ0NBQUMsV0FBRDtBQUFhLFFBQUEsT0FBTyxFQUFFTztBQUF0QixRQUFILEdBQXVDLElBUjFELENBRDJCO0FBQUEsS0FBNUIsQ0FESCxDQVB3QjtBQUFBLEdBQTFCOztBQXVCQSxTQUFPVCxpQkFBUDtBQUNEOztlQUVjTix3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGF0YXNldFRpdGxlRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGl0bGUnO1xuaW1wb3J0IERhdGFzZXRJbmZvRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtaW5mbyc7XG5cbmNvbnN0IFNvdXJjZURhdGFDYXRhbG9nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG5gO1xuXG5Tb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkuZGVwcyA9IFtEYXRhc2V0VGl0bGVGYWN0b3J5LCBEYXRhc2V0SW5mb0ZhY3RvcnldO1xuXG5mdW5jdGlvbiBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkoRGF0YXNldFRpdGxlLCBEYXRhc2V0SW5mbykge1xuICBjb25zdCBTb3VyY2VEYXRhQ2F0YWxvZyA9ICh7XG4gICAgZGF0YXNldHMsXG4gICAgc2hvd0RhdGFzZXRUYWJsZSxcbiAgICByZW1vdmVEYXRhc2V0LFxuICAgIG9uVGl0bGVDbGljayxcbiAgICBzaG93RGVsZXRlRGF0YXNldCA9IGZhbHNlXG4gIH0pID0+IChcbiAgICA8U291cmNlRGF0YUNhdGFsb2dXcmFwcGVyIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWNhdGFsb2dcIj5cbiAgICAgIHtPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoKGRhdGFzZXQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uIGtleT17ZGF0YXNldC5pZH0+XG4gICAgICAgICAgPERhdGFzZXRUaXRsZVxuICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgIHNob3dEZWxldGVEYXRhc2V0PXtzaG93RGVsZXRlRGF0YXNldH1cbiAgICAgICAgICAgIHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICBkYXRhc2V0PXtkYXRhc2V0fVxuICAgICAgICAgICAgb25UaXRsZUNsaWNrPXtvblRpdGxlQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/IDxEYXRhc2V0SW5mbyBkYXRhc2V0PXtkYXRhc2V0fSAvPiA6IG51bGx9XG4gICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICkpfVxuICAgIDwvU291cmNlRGF0YUNhdGFsb2dXcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiBTb3VyY2VEYXRhQ2F0YWxvZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5O1xuIl19