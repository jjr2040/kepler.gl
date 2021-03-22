"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _reactDom = require("react-dom");

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _document = _interopRequireDefault(require("global/document"));

var _defaultSettings = require("../constants/default-settings");

var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));

var _exportUtils = require("../utils/export-utils");

var _mapInfoUtils = require("../utils/map-info-utils");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));

var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));

var _mediaBreakpoints = require("../styles/media-breakpoints");

var _keyevent = _interopRequireDefault(require("../constants/keyevent"));

var _visStateSelectors = require("../reducers/vis-state-selectors");

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", "\n            "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 80px;\n  padding: 32px 0 0 0;\n  width: 90vw;\n  max-width: 90vw;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject(), _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()));
var smallModalCss = (0, _styledComponents.css)(_templateObject4());
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5());
var DefaultStyle = (0, _styledComponents.css)(_templateObject6());
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  /** @typedef {import('./modal-container').ModalContainerProps} ModalContainerProps */

  /** @augments React.Component<ModalContainerProps> */
  var ModalContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ModalContainer, _Component);

    var _super = _createSuper(ModalContainer);

    function ModalContainer() {
      var _this;

      (0, _classCallCheck2["default"])(this, ModalContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
        _document["default"].addEventListener('keyup', _this._onKeyUp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cloudProviders", function (props) {
        return props.cloudProviders;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithStorage", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasPrivateStorage();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithShare", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasSharingUrl();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyUp", function (event) {
        var keyCode = event.keyCode;

        if (keyCode === _keyevent["default"].DOM_VK_ESCAPE) {
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (fileList) {
        _this.props.visStateActions.loadFiles(fileList);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.processing) {
          (0, _exportUtils.exportImage)(_this.props);

          _this.props.uiStateActions.cleanupExportImage();

          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        (0, _exportUtils.exportData)(_this.props, _this.props.uiState.exportData);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _defaultSettings.EXPORT_MAP_FORMATS.HTML ? _exportUtils.exportHtml : _exportUtils.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
            isPublic = _ref.isPublic,
            overwrite = _ref.overwrite,
            closeModal = _ref.closeModal;
        var toSave = (0, _exportUtils.exportMap)(_this.props);

        _this.props.providerActions.exportFileToCloud({
          // @ts-ignore
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSaveMap", function () {
        var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentProvider = _this.props.providerState.currentProvider; // @ts-ignore

        var provider = _this.props.cloudProviders.find(function (p) {
          return p.name === currentProvider;
        });

        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOverwriteMap", function () {
        _this._onSaveMap(true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread(_objectSpread({}, payload), {}, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _document["default"].removeEventListener('keyup', this._onKeyUp);
      }
    }, {
      key: "render",

      /* eslint-disable complexity */
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerW = _this$props.containerW,
            containerH = _this$props.containerH,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            rootNode = _this$props.rootNode,
            visStateActions = _this$props.visStateActions,
            uiStateActions = _this$props.uiStateActions,
            providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {}; // TODO - currentModal is a string
        // @ts-ignore

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          // @ts-ignore
          template = /*#__PURE__*/_react["default"].createElement(currentModal.template, null); // @ts-ignore

          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              var width = containerW * 0.9;
              template = /*#__PURE__*/_react["default"].createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable,
                sortTableColumn: visStateActions.sortTableColumn,
                pinTableColumn: visStateActions.pinTableColumn,
                copyTableColumn: visStateActions.copyTableColumn
              }); // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw

              modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7(), DataTableModalStyle, _mediaBreakpoints.media.palm(_templateObject8(), width));
              break;

            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = /*#__PURE__*/_react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'modal.title.deleteDataset',
                  cssStyle: smallModalCss,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'modal.button.delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _defaultSettings.ADD_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onLoadCloudMap: this._onLoadCloudMap,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                getSavedMaps: this.props.providerActions.getSavedMaps,
                loadFiles: uiState.loadFiles,
                fileLoading: visState.fileLoading,
                fileLoadingProgress: visState.fileLoadingProgress,
                fileFormatNames: (0, _visStateSelectors.getFileFormatNames)(this.props.visState),
                fileExtensions: (0, _visStateSelectors.getFileExtensions)(this.props.visState)
              }));
              modalProps = {
                title: 'modal.title.addDataToMap',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage
              });
              modalProps = {
                title: 'modal.title.exportImage',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing,
                  children: 'modal.button.download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                supportedDataTypes: _defaultSettings.EXPORT_DATA_TYPE_OPTIONS,
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onClose: this._closeModal,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'modal.title.exportData',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.EXPORT_MAP_ID:
              var keplerGlConfig = visState.schema.getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });
              template = /*#__PURE__*/_react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
              });
              modalProps = {
                title: 'modal.title.exportMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = /*#__PURE__*/_react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'modal.title.addCustomMapboxStyle',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'modal.button.addStyle'
                }
              };
              break;

            case _defaultSettings.SAVE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.saveMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: function onConfirm() {
                  return _this2._onSaveMap(false);
                },
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider,
                  children: 'modal.button.save'
                }
              };
              break;

            case _defaultSettings.OVERWRITE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                cloudProviders: this.props.cloudProviders,
                title: (0, _lodash["default"])(visState, ['mapInfo', 'title']),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: true,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal,
                confirmButton: {
                  large: true,
                  children: 'Yes',
                  disabled: uiState.exportImage.processing || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider
                }
              };
              break;

            case _defaultSettings.SHARE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                isReady: !uiState.exportImage.processing,
                cloudProviders: this.providerWithShare(this.props),
                onExport: this._onShareMapUrl,
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.shareURL',
                cssStyle: '',
                onCancel: this._onCloseSaveMap
              };
              break;

            default:
              break;
          }
        }

        return this.props.rootNode ? /*#__PURE__*/_react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle)
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(ModalContainer, "propTypes", {
    rootNode: _propTypes["default"].object,
    containerW: _propTypes["default"].number,
    containerH: _propTypes["default"].number,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    mapState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    visState: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    onSaveToStorage: _propTypes["default"].func,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  return ModalContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxDb250YWluZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlVcCIsInByb3BzIiwiY2xvdWRQcm92aWRlcnMiLCJmaWx0ZXIiLCJwIiwiaGFzUHJpdmF0ZVN0b3JhZ2UiLCJoYXNTaGFyaW5nVXJsIiwiZXZlbnQiLCJrZXlDb2RlIiwiS2V5RXZlbnQiLCJET01fVktfRVNDQVBFIiwiX2Nsb3NlTW9kYWwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwia2V5IiwidmlzU3RhdGVBY3Rpb25zIiwicmVtb3ZlRGF0YXNldCIsIm1hcFN0eWxlQWN0aW9ucyIsImFkZEN1c3RvbU1hcFN0eWxlIiwiZmlsZUxpc3QiLCJsb2FkRmlsZXMiLCJ1aVN0YXRlIiwiZXhwb3J0SW1hZ2UiLCJwcm9jZXNzaW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImZvcm1hdCIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsInByb3ZpZGVyIiwiaXNQdWJsaWMiLCJvdmVyd3JpdGUiLCJjbG9zZU1vZGFsIiwidG9TYXZlIiwicHJvdmlkZXJBY3Rpb25zIiwiZXhwb3J0RmlsZVRvQ2xvdWQiLCJtYXBEYXRhIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsIm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MiLCJvbkVycm9yIiwib25FeHBvcnRUb0Nsb3VkRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlclN0YXRlIiwiZmluZCIsIm5hbWUiLCJfZXhwb3J0RmlsZVRvQ2xvdWQiLCJfb25TYXZlTWFwIiwicmVzZXRQcm92aWRlclN0YXR1cyIsInBheWxvYWQiLCJsb2FkQ2xvdWRNYXAiLCJvbkxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcEVycm9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lclciLCJjb250YWluZXJIIiwibWFwU3R5bGUiLCJtYXBTdGF0ZSIsInZpc1N0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJkYXRhc2V0cyIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJEQVRBX1RBQkxFX0lEIiwid2lkdGgiLCJzaG93RGF0YXNldFRhYmxlIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJjc3NTdHlsZSIsIkRFTEVURV9EQVRBX0lEIiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJfZGVsZXRlRGF0YXNldCIsIm9uQ2FuY2VsIiwiY29uZmlybUJ1dHRvbiIsIm5lZ2F0aXZlIiwibGFyZ2UiLCJjaGlsZHJlbiIsIkFERF9EQVRBX0lEIiwiX29uRmlsZVVwbG9hZCIsIl9vbkxvYWRDbG91ZE1hcCIsInByb3ZpZGVyV2l0aFN0b3JhZ2UiLCJzZXRDbG91ZFByb3ZpZGVyIiwiZ2V0U2F2ZWRNYXBzIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwiRVhQT1JUX0lNQUdFX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwiX29uRXhwb3J0SW1hZ2UiLCJkaXNhYmxlZCIsIkVYUE9SVF9EQVRBX0lEIiwiRVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TIiwiYXBwbHlDUFVGaWx0ZXIiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsInNjaGVtYSIsImdldENvbmZpZ1RvU2F2ZSIsInNldEV4cG9ydE1hcEZvcm1hdCIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsInNldEV4cG9ydEhUTUxNYXBNb2RlIiwiX29uRXhwb3J0TWFwIiwiQUREX01BUF9TVFlMRV9JRCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiaW5wdXRTdHlsZSIsImlucHV0TWFwU3R5bGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJfb25BZGRDdXN0b21NYXBTdHlsZSIsInN0eWxlIiwiU0FWRV9NQVBfSUQiLCJtYXBJbmZvIiwic2V0TWFwSW5mbyIsIk9WRVJXUklURV9NQVBfSUQiLCJfb25PdmVyd3JpdGVNYXAiLCJTSEFSRV9NQVBfSUQiLCJwcm92aWRlcldpdGhTaGFyZSIsIl9vblNoYXJlTWFwVXJsIiwiX29uQ2xvc2VTYXZlTWFwIiwiQm9vbGVhbiIsImNvbmNhdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm51bWJlciIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvblNhdmVUb1N0b3JhZ2UiLCJmdW5jIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBZ0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsT0FBR0MscUJBQUgscUJBTXJCQyx3QkFBTUMsUUFOZSxzQkFVckJELHdCQUFNRSxJQVZlLHFCQUF6QjtBQWVBLElBQU1DLGFBQWEsT0FBR0oscUJBQUgscUJBQW5CO0FBS0EsSUFBTUssa0JBQWtCLE9BQUdMLHFCQUFILHFCQUF4QjtBQUlBLElBQU1NLFlBQVksT0FBR04scUJBQUgscUJBQWxCO0FBSUFPLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUMzQkMsMkJBRDJCLEVBRTNCQyw2QkFGMkIsRUFHM0JDLDBCQUgyQixFQUkzQkMseUJBSjJCLEVBSzNCQyw0QkFMMkIsRUFNM0JDLDJCQU4yQixFQU8zQkMsMEJBUDJCLEVBUTNCQyw0QkFSMkIsRUFTM0JDLHVCQVQyQixFQVUzQkMsd0JBVjJCLEVBVzNCQyx5QkFYMkIsQ0FBN0I7O0FBY2UsU0FBU1oscUJBQVQsQ0FDYmEsa0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsY0FIYSxFQUliQyxhQUphLEVBS2JDLGdCQUxhLEVBTWJDLGVBTmEsRUFPYkMsY0FQYSxFQVFiQyxnQkFSYSxFQVNiQyxXQVRhLEVBVWJD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Ii8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQge0VYUE9SVF9EQVRBX1RZUEVfT1BUSU9OU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IE1vZGFsRGlhbG9nRmFjdG9yeSBmcm9tICcuL21vZGFscy9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHtleHBvcnRKc29uLCBleHBvcnRIdG1sLCBleHBvcnREYXRhLCBleHBvcnRJbWFnZSwgZXhwb3J0TWFwfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xuaW1wb3J0IHtpc1ZhbGlkTWFwSW5mb30gZnJvbSAndXRpbHMvbWFwLWluZm8tdXRpbHMnO1xuXG4vLyBtb2RhbHNcbmltcG9ydCBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2RlbGV0ZS1kYXRhLW1vZGFsJztcbmltcG9ydCBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvb3ZlcndyaXRlLW1hcC1tb2RhbCc7XG5pbXBvcnQgRGF0YVRhYmxlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2RhdGEtdGFibGUtbW9kYWwnO1xuaW1wb3J0IExvYWREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2xvYWQtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsJztcbmltcG9ydCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbC9leHBvcnQtbWFwLW1vZGFsJztcbmltcG9ydCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsJztcbmltcG9ydCBTYXZlTWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL3NhdmUtbWFwLW1vZGFsJztcbmltcG9ydCBTaGFyZU1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9zaGFyZS1tYXAtbW9kYWwnO1xuXG4vLyBCcmVha3BvaW50c1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuLy8gVGVtcGxhdGVcbmltcG9ydCB7XG4gIEFERF9EQVRBX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBERUxFVEVfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX01BUF9JRCxcbiAgQUREX01BUF9TVFlMRV9JRCxcbiAgU0FWRV9NQVBfSUQsXG4gIFNIQVJFX01BUF9JRCxcbiAgT1ZFUldSSVRFX01BUF9JRFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0VYUE9SVF9NQVBfRk9STUFUU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IEtleUV2ZW50IGZyb20gJ2NvbnN0YW50cy9rZXlldmVudCc7XG5pbXBvcnQge2dldEZpbGVGb3JtYXROYW1lcywgZ2V0RmlsZUV4dGVuc2lvbnN9IGZyb20gJy4uL3JlZHVjZXJzL3Zpcy1zdGF0ZS1zZWxlY3RvcnMnO1xuXG5jb25zdCBEYXRhVGFibGVNb2RhbFN0eWxlID0gY3NzYFxuICB0b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDMycHggMCAwIDA7XG4gIHdpZHRoOiA5MHZ3O1xuICBtYXgtd2lkdGg6IDkwdnc7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBwYWRkaW5nOiAwO1xuICBgfVxuXG4gICR7bWVkaWEucGFsbWBcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICBgfVxuYDtcbmNvbnN0IHNtYWxsTW9kYWxDc3MgPSBjc3NgXG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAzMnB4IDQwcHg7XG5gO1xuXG5jb25zdCBMb2FkRGF0YU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNjBweDtcbmA7XG5cbmNvbnN0IERlZmF1bHRTdHlsZSA9IGNzc2BcbiAgbWF4LXdpZHRoOiA5NjBweDtcbmA7XG5cbk1vZGFsQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW1xuICBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5LFxuICBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnksXG4gIERhdGFUYWJsZU1vZGFsRmFjdG9yeSxcbiAgTG9hZERhdGFNb2RhbEZhY3RvcnksXG4gIEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5LFxuICBFeHBvcnREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRNYXBNb2RhbEZhY3RvcnksXG4gIEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5LFxuICBNb2RhbERpYWxvZ0ZhY3RvcnksXG4gIFNhdmVNYXBNb2RhbEZhY3RvcnksXG4gIFNoYXJlTWFwTW9kYWxGYWN0b3J5XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENvbnRhaW5lckZhY3RvcnkoXG4gIERlbGV0ZURhdGFzZXRNb2RhbCxcbiAgT3ZlcldyaXRlTWFwTW9kYWwsXG4gIERhdGFUYWJsZU1vZGFsLFxuICBMb2FkRGF0YU1vZGFsLFxuICBFeHBvcnRJbWFnZU1vZGFsLFxuICBFeHBvcnREYXRhTW9kYWwsXG4gIEV4cG9ydE1hcE1vZGFsLFxuICBBZGRNYXBTdHlsZU1vZGFsLFxuICBNb2RhbERpYWxvZyxcbiAgU2F2ZU1hcE1vZGFsLFxuICBTaGFyZU1hcE1vZGFsXG4pIHtcbiAgLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbW9kYWwtY29udGFpbmVyJykuTW9kYWxDb250YWluZXJQcm9wc30gTW9kYWxDb250YWluZXJQcm9wcyAqL1xuICAvKiogQGF1Z21lbnRzIFJlYWN0LkNvbXBvbmVudDxNb2RhbENvbnRhaW5lclByb3BzPiAqL1xuICBjbGFzcyBNb2RhbENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gVE9ETyAtIHJlbW92ZSB3aGVuIHByb3AgdHlwZXMgYXJlIGZ1bGx5IGV4cG9ydGVkXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHJvb3ROb2RlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgY29udGFpbmVyVzogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGNvbnRhaW5lckg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbWFwYm94QXBpVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB1aVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB1aVN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBvblNhdmVUb1N0b3JhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgY2xvdWRQcm92aWRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG4gICAgfTtcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgfVxuXG4gICAgY2xvdWRQcm92aWRlcnMgPSBwcm9wcyA9PiBwcm9wcy5jbG91ZFByb3ZpZGVycztcbiAgICBwcm92aWRlcldpdGhTdG9yYWdlID0gY3JlYXRlU2VsZWN0b3IodGhpcy5jbG91ZFByb3ZpZGVycywgY2xvdWRQcm92aWRlcnMgPT5cbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSlcbiAgICApO1xuICAgIHByb3ZpZGVyV2l0aFNoYXJlID0gY3JlYXRlU2VsZWN0b3IodGhpcy5jbG91ZFByb3ZpZGVycywgY2xvdWRQcm92aWRlcnMgPT5cbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxuICAgICk7XG5cbiAgICBfb25LZXlVcCA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgICAgaWYgKGtleUNvZGUgPT09IEtleUV2ZW50LkRPTV9WS19FU0NBUEUpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwobnVsbCk7XG4gICAgfTtcblxuICAgIF9kZWxldGVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uQWRkQ3VzdG9tTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5hZGRDdXN0b21NYXBTdHlsZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25GaWxlVXBsb2FkID0gZmlsZUxpc3QgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMubG9hZEZpbGVzKGZpbGVMaXN0KTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nKSB7XG4gICAgICAgIGV4cG9ydEltYWdlKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZSgpO1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydERhdGEgPSAoKSA9PiB7XG4gICAgICBleHBvcnREYXRhKHRoaXMucHJvcHMsIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnREYXRhKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0TWFwID0gKCkgPT4ge1xuICAgICAgY29uc3Qge3VpU3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtmb3JtYXR9ID0gdWlTdGF0ZS5leHBvcnRNYXA7XG4gICAgICAoZm9ybWF0ID09PSBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTCA/IGV4cG9ydEh0bWwgOiBleHBvcnRKc29uKShcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydE1hcFtmb3JtYXRdIHx8IHt9XG4gICAgICApO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfZXhwb3J0RmlsZVRvQ2xvdWQgPSAoe3Byb3ZpZGVyLCBpc1B1YmxpYywgb3ZlcndyaXRlLCBjbG9zZU1vZGFsfSkgPT4ge1xuICAgICAgY29uc3QgdG9TYXZlID0gZXhwb3J0TWFwKHRoaXMucHJvcHMpO1xuXG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5leHBvcnRGaWxlVG9DbG91ZCh7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbWFwRGF0YTogdG9TYXZlLFxuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGlzUHVibGljLFxuICAgICAgICAgIG92ZXJ3cml0ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1vZGFsLFxuICAgICAgICBvblN1Y2Nlc3M6IHRoaXMucHJvcHMub25FeHBvcnRUb0Nsb3VkU3VjY2VzcyxcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRFcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9vblNhdmVNYXAgPSAob3ZlcndyaXRlID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHtjdXJyZW50UHJvdmlkZXJ9ID0gdGhpcy5wcm9wcy5wcm92aWRlclN0YXRlO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcik7XG4gICAgICB0aGlzLl9leHBvcnRGaWxlVG9DbG91ZCh7XG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBpc1B1YmxpYzogZmFsc2UsXG4gICAgICAgIG92ZXJ3cml0ZSxcbiAgICAgICAgY2xvc2VNb2RhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9vbk92ZXJ3cml0ZU1hcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX29uU2F2ZU1hcCh0cnVlKTtcbiAgICB9O1xuXG4gICAgX29uU2hhcmVNYXBVcmwgPSBwcm92aWRlciA9PiB7XG4gICAgICB0aGlzLl9leHBvcnRGaWxlVG9DbG91ZCh7cHJvdmlkZXIsIGlzUHVibGljOiB0cnVlLCBvdmVyd3JpdGU6IGZhbHNlLCBjbG9zZU1vZGFsOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBfb25DbG9zZVNhdmVNYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5yZXNldFByb3ZpZGVyU3RhdHVzKCk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkxvYWRDbG91ZE1hcCA9IHBheWxvYWQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMubG9hZENsb3VkTWFwKHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgb25TdWNjZXNzOiB0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwU3VjY2VzcyxcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkxvYWRDbG91ZE1hcEVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyVyxcbiAgICAgICAgY29udGFpbmVySCxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHByb3ZpZGVyU3RhdGVcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2N1cnJlbnRNb2RhbCwgZGF0YXNldEtleVRvUmVtb3ZlfSA9IHVpU3RhdGU7XG4gICAgICBjb25zdCB7ZGF0YXNldHMsIGxheWVycywgZWRpdGluZ0RhdGFzZXR9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IG51bGw7XG4gICAgICBsZXQgbW9kYWxQcm9wcyA9IHt9O1xuXG4gICAgICAvLyBUT0RPIC0gY3VycmVudE1vZGFsIGlzIGEgc3RyaW5nXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpZiAoY3VycmVudE1vZGFsICYmIGN1cnJlbnRNb2RhbC5pZCAmJiBjdXJyZW50TW9kYWwudGVtcGxhdGUpIHtcbiAgICAgICAgLy8gaWYgY3VycmVudE1kb2FsIHRlbXBsYXRlIGlzIGFscmVhZHkgcHJvdmlkZWRcbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjaGVjayB3aGV0aGVyIHRlbXBsYXRlIGlzIHZhbGlkXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGVtcGxhdGUgPSA8Y3VycmVudE1vZGFsLnRlbXBsYXRlIC8+O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG1vZGFsUHJvcHMgPSBjdXJyZW50TW9kYWwubW9kYWxQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudE1vZGFsKSB7XG4gICAgICAgICAgY2FzZSBEQVRBX1RBQkxFX0lEOlxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXICogMC45O1xuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVNb2RhbFxuICAgICAgICAgICAgICAgIHdpZHRoPXtjb250YWluZXJXICogMC45fVxuICAgICAgICAgICAgICAgIGhlaWdodD17Y29udGFpbmVySCAqIDAuODV9XG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZWRpdGluZ0RhdGFzZXR9XG4gICAgICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dmlzU3RhdGVBY3Rpb25zLnNob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMuc29ydFRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMucGluVGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMuY29weVRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byBtYWtlIHRoaXMgd2lkdGggY29uc2lzdGVudCB3aXRoIHRoZSBjc3MgcnVsZSBkZWZpbmVkIG1vZGFsLmpzOjMyIG1heC13aWR0aDogNzB2d1xuICAgICAgICAgICAgbW9kYWxQcm9wcy5jc3NTdHlsZSA9IGNzc2BcbiAgICAgICAgICAgICAgJHtEYXRhVGFibGVNb2RhbFN0eWxlfTtcbiAgICAgICAgICAgICAgJHttZWRpYS5wYWxtYFxuICAgICAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgREVMRVRFX0RBVEFfSUQ6XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoZGF0YXNldEtleVRvUmVtb3ZlICYmIGRhdGFzZXRzICYmIGRhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV0pIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbCBkYXRhc2V0PXtkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdfSBsYXllcnM9e2xheWVyc30gLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmRlbGV0ZURhdGFzZXQnLFxuICAgICAgICAgICAgICAgIGNzc1N0eWxlOiBzbWFsbE1vZGFsQ3NzLFxuICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZGVsZXRlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrOyAvLyBpbiBjYXNlIHdlIGFkZCBhIG5ldyBjYXNlIGFmdGVyIHRoaXMgb25lXG4gICAgICAgICAgY2FzZSBBRERfREFUQV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8TG9hZERhdGFNb2RhbFxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlclN0YXRlfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgb25GaWxlVXBsb2FkPXt0aGlzLl9vbkZpbGVVcGxvYWR9XG4gICAgICAgICAgICAgICAgb25Mb2FkQ2xvdWRNYXA9e3RoaXMuX29uTG9hZENsb3VkTWFwfVxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIGdldFNhdmVkTWFwcz17dGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuZ2V0U2F2ZWRNYXBzfVxuICAgICAgICAgICAgICAgIGxvYWRGaWxlcz17dWlTdGF0ZS5sb2FkRmlsZXN9XG4gICAgICAgICAgICAgICAgZmlsZUxvYWRpbmc9e3Zpc1N0YXRlLmZpbGVMb2FkaW5nfVxuICAgICAgICAgICAgICAgIGZpbGVMb2FkaW5nUHJvZ3Jlc3M9e3Zpc1N0YXRlLmZpbGVMb2FkaW5nUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgZmlsZUZvcm1hdE5hbWVzPXtnZXRGaWxlRm9ybWF0TmFtZXModGhpcy5wcm9wcy52aXNTdGF0ZSl9XG4gICAgICAgICAgICAgICAgZmlsZUV4dGVuc2lvbnM9e2dldEZpbGVFeHRlbnNpb25zKHRoaXMucHJvcHMudmlzU3RhdGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuYWRkRGF0YVRvTWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6IExvYWREYXRhTW9kYWxTdHlsZSxcbiAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9jbG9zZU1vZGFsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfSU1BR0VfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17dWlTdGF0ZS5leHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBtYXBXPXtjb250YWluZXJXfVxuICAgICAgICAgICAgICAgIG1hcEg9e2NvbnRhaW5lckh9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmV4cG9ydEltYWdlJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0SW1hZ2UsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRvd25sb2FkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfREFUQV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0RGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWREYXRhVHlwZXM9e0VYUE9SVF9EQVRBX1RZUEVfT1BUSU9OU31cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgYXBwbHlDUFVGaWx0ZXI9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmFwcGx5Q1BVRmlsdGVyfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RGF0YVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRGaWx0ZXJlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmV4cG9ydERhdGEnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfTUFQX0lEOlxuICAgICAgICAgICAgY29uc3Qga2VwbGVyR2xDb25maWcgPSB2aXNTdGF0ZS5zY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHtcbiAgICAgICAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgICAgICAgIHZpc1N0YXRlLFxuICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgdWlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydE1hcE1vZGFsXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0TWFwRm9ybWF0fVxuICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17dWlTdGF0ZUFjdGlvbnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0TWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBBRERfTUFQX1NUWUxFX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3RoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXt0aGlzLnByb3BzLm1hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXttYXBTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgIGlucHV0TWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmlucHV0TWFwU3R5bGV9XG4gICAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGRDdXN0b21NYXBib3hTdHlsZScsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkFkZEN1c3RvbU1hcFN0eWxlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFtYXBTdHlsZS5pbnB1dFN0eWxlLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmFkZFN0eWxlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTQVZFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8U2F2ZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgbWFwSW5mbz17dmlzU3RhdGUubWFwSW5mb31cbiAgICAgICAgICAgICAgICBvblNldE1hcEluZm89e3Zpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvfVxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5zYXZlTWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX29uU2F2ZU1hcChmYWxzZSksXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZyB8fFxuICAgICAgICAgICAgICAgICAgIWlzVmFsaWRNYXBJbmZvKHZpc1N0YXRlLm1hcEluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uc2F2ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1ZFUldSSVRFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8T3ZlcldyaXRlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVyc31cbiAgICAgICAgICAgICAgICB0aXRsZT17Z2V0KHZpc1N0YXRlLCBbJ21hcEluZm8nLCAndGl0bGUnXSl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgICAgY2xlYW51cEV4cG9ydEltYWdlPXt1aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdPdmVyd3JpdGUgRXhpc3RpbmcgRmlsZT8nLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uT3ZlcndyaXRlTWFwLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnWWVzJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZyB8fFxuICAgICAgICAgICAgICAgICAgIWlzVmFsaWRNYXBJbmZvKHZpc1N0YXRlLm1hcEluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU0hBUkVfTUFQX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxTaGFyZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgaXNSZWFkeT17IXVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZ31cbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm92aWRlcldpdGhTaGFyZSh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICBvbkV4cG9ydD17dGhpcy5fb25TaGFyZU1hcFVybH1cbiAgICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLnNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgY2xlYW51cEV4cG9ydEltYWdlPXt1aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLnNoYXJlVVJMJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fb25DbG9zZVNhdmVNYXBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucm9vdE5vZGUgPyAoXG4gICAgICAgIDxNb2RhbERpYWxvZ1xuICAgICAgICAgIHBhcmVudFNlbGVjdG9yPXsoKSA9PiBmaW5kRE9NTm9kZShyb290Tm9kZSl9XG4gICAgICAgICAgaXNPcGVuPXtCb29sZWFuKGN1cnJlbnRNb2RhbCl9XG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgY3NzU3R5bGU9e0RlZmF1bHRTdHlsZS5jb25jYXQobW9kYWxQcm9wcy5jc3NTdHlsZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGVtcGxhdGV9XG4gICAgICAgIDwvTW9kYWxEaWFsb2c+XG4gICAgICApIDogbnVsbDtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG4gIH1cblxuICByZXR1cm4gTW9kYWxDb250YWluZXI7XG59XG4iXX0=