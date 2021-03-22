"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableSection = exports.Container = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _optionDropdown = _interopRequireDefault(require("./option-dropdown"));

var _grid = _interopRequireDefault(require("./grid"));

var _button = _interopRequireDefault(require("./button"));

var _icons = require("../icons");

var _dataUtils = require("../../../utils/data-utils");

var _cellSize = require("./cell-size");

var _defaultSettings = require("../../../constants/default-settings");

var _fieldToken = _interopRequireDefault(require("../field-token"));

var _fieldToAlignRight;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 11px;\n  flex-grow: 1;\n  color: ", ";\n  width: 100%;\n\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n\n  .cell {\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  .results-table-wrapper {\n    position: relative;\n    min-height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    overflow: hidden;\n    border-top: none;\n\n    .scroll-in-ui-thread::after {\n      content: '';\n      height: 100%;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      width: 100%;\n    }\n\n    .grid-row {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n    }\n    .grid-column {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 auto;\n    }\n    .pinned-grid-container {\n      flex: 0 0 75px;\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-right: 2px solid ", ";\n    }\n\n    .header-grid {\n      overflow: hidden !important;\n    }\n\n    .body-grid {\n      overflow: overlay !important;\n    }\n\n    .pinned-grid {\n      overflow: overlay !important;\n    }\n\n    .even-row {\n      background-color: ", ";\n    }\n    .odd-row {\n      background-color: ", ";\n    }\n    .cell,\n    .header-cell {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: center;\n      overflow: hidden;\n\n      .n-sort-idx {\n        font-size: 9px;\n      }\n    }\n    .cell {\n      border-bottom: 1px solid ", ";\n      border-right: 1px solid ", ";\n      white-space: nowrap;\n      overflow: auto;\n      padding: 0 ", "px;\n      font-size: ", "px;\n\n      .result-link {\n        text-decoration: none;\n      }\n    }\n    .cell.end-cell,\n    .header-cell.end-cell {\n      border-right: none;\n      padding-right: ", "px;\n    }\n    .cell.first-cell,\n    .header-cell.first-cell {\n      padding-left: ", "px;\n    }\n    .cell.bottom-cell {\n      border-bottom: none;\n    }\n    .cell.align-right {\n      align-items: flex-end;\n    }\n    .header-cell {\n      border-bottom: 1px solid ", ";\n      border-top: 1px solid ", ";\n      padding-top: ", "px;\n      padding-right: 0;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      align-items: center;\n      justify-content: space-between;\n      display: flex;\n      flex-direction: row;\n      background-color: ", ";\n\n      &:hover {\n        .more {\n          color: ", ";\n        }\n      }\n      .n-sort-idx {\n        font-size: 9px;\n      }\n      .details {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        height: 100%;\n        overflow: hidden;\n        flex-grow: 1;\n        .col-name {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n\n          .col-name__left {\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            svg {\n              margin-left: 6px;\n            }\n          }\n          .col-name__name {\n            overflow: hidden;\n            white-space: nowrap;\n          }\n          .col-name__sort {\n            cursor: pointer;\n          }\n        }\n      }\n\n      .more {\n        color: transparent;\n        margin-left: 5px;\n      }\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultHeaderRowHeight = 55;
var defaultRowHeight = 32;
var overscanColumnCount = 10;
var overscanRowCount = 10;
var fieldToAlignRight = (_fieldToAlignRight = {}, (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.integer, true), (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.real, true), _fieldToAlignRight);

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dataTableTextColor;
}, function (props) {
  return props.theme.pinnedGridBorderColor;
}, function (props) {
  return props.theme.evenRowBackground;
}, function (props) {
  return props.theme.oddRowBackground;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.cellFontSize;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerPaddingTop;
}, function (props) {
  return props.theme.headerPaddingBottom;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.headerCellBackground;
}, function (props) {
  return props.theme.headerCellIconColor;
});

exports.Container = Container;
var defaultColumnWidth = 200;

var columnWidthFunction = function columnWidthFunction(columns, cellSizeCache, ghost) {
  return function (_ref) {
    var index = _ref.index;
    return (columns[index] || {}).ghost ? ghost : cellSizeCache[columns[index]] || defaultColumnWidth;
  };
};
/*
 * This is an accessor method used to generalize getting a cell from a data row
 */


var getRowCell = function getRowCell(_ref2) {
  var rows = _ref2.rows,
      columns = _ref2.columns,
      column = _ref2.column,
      colMeta = _ref2.colMeta,
      rowIndex = _ref2.rowIndex,
      sortColumn = _ref2.sortColumn,
      sortOrder = _ref2.sortOrder;
  var rowIdx = sortOrder && sortOrder.length ? (0, _lodash["default"])(sortOrder, rowIndex) : rowIndex;
  var type = colMeta[column];
  return (0, _dataUtils.parseFieldValue)((0, _lodash["default"])(rows, [rowIdx, columns.indexOf(column)], 'Err'), type);
};

var TableSection = function TableSection(_ref3) {
  var classList = _ref3.classList,
      isPinned = _ref3.isPinned,
      columns = _ref3.columns,
      headerGridProps = _ref3.headerGridProps,
      fixedWidth = _ref3.fixedWidth,
      _ref3$fixedHeight = _ref3.fixedHeight,
      fixedHeight = _ref3$fixedHeight === void 0 ? undefined : _ref3$fixedHeight,
      onScroll = _ref3.onScroll,
      scrollTop = _ref3.scrollTop,
      dataGridProps = _ref3.dataGridProps,
      columnWidth = _ref3.columnWidth,
      setGridRef = _ref3.setGridRef,
      headerCellRender = _ref3.headerCellRender,
      dataCellRender = _ref3.dataCellRender,
      _ref3$scrollLeft = _ref3.scrollLeft,
      scrollLeft = _ref3$scrollLeft === void 0 ? undefined : _ref3$scrollLeft;
  return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
    var width = _ref4.width,
        height = _ref4.height;
    var gridDimension = {
      columnCount: columns.length,
      columnWidth: columnWidth,
      width: fixedWidth || width
    };
    var dataGridHeight = fixedHeight || height;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.header)
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: headerCellRender
    }, headerGridProps, gridDimension, {
      scrollLeft: scrollLeft
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.rows),
      style: {
        top: headerGridProps.height
      }
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: dataCellRender
    }, dataGridProps, gridDimension, {
      className: isPinned ? 'pinned-grid' : 'body-grid',
      height: dataGridHeight - headerGridProps.height,
      onScroll: onScroll,
      scrollTop: scrollTop,
      setGridRef: setGridRef
    }))));
  });
};

exports.TableSection = TableSection;
DataTableFactory.deps = [_fieldToken["default"]];

function DataTableFactory(FieldToken) {
  var DataTable = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(DataTable, _Component);

    var _super = _createSuper(DataTable);

    function DataTable() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        cellSizeCache: {},
        moreOptionsColumn: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", function (props) {
        return props.columns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedColumns", function (props) {
        return props.pinnedColumns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedColumns", (0, _reselect.createSelector)(_this.columns, _this.pinnedColumns, function (columns, pinnedColumns) {
        return !Array.isArray(pinnedColumns) ? columns : columns.filter(function (c) {
          return !pinnedColumns.includes(c);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMoreOptions", function (moreOptionsColumn) {
        return _this.setState({
          moreOptionsColumn: _this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCellSizeCache", function () {
        var _this$props = _this.props,
            propsCache = _this$props.cellSizeCache,
            fixedWidth = _this$props.fixedWidth,
            pinnedColumns = _this$props.pinnedColumns;

        var unpinnedColumns = _this.unpinnedColumns(_this.props);

        var width = fixedWidth ? fixedWidth : _this.root.current ? _this.root.current.clientWidth : 0; // pin column border is 2 pixel vs 1 pixel

        var adjustWidth = pinnedColumns.length ? width - 1 : width;

        var _adjustCellsToContain = (0, _cellSize.adjustCellsToContainer)(adjustWidth, propsCache, pinnedColumns, unpinnedColumns),
            cellSizeCache = _adjustCellsToContain.cellSizeCache,
            ghost = _adjustCellsToContain.ghost;

        return {
          cellSizeCache: cellSizeCache,
          ghost: ghost
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScaleCellsToWidth", function () {
        _this.setState(_this.getCellSizeCache());
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleCellsToWidth", (0, _lodash2["default"])(_this.doScaleCellsToWidth, 300));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHeaderCell", function (columns, isPinned, props, toggleMoreOptions, moreOptionsColumn, TokenComponent) {
        // eslint-disable-next-line react/display-name
        return function (cellInfo) {
          var _classnames;

          var columnIndex = cellInfo.columnIndex,
              key = cellInfo.key,
              style = cellInfo.style;
          var colMeta = props.colMeta,
              sortColumn = props.sortColumn,
              _sortTableColumn = props.sortTableColumn,
              unsortColumn = props.unsortColumn,
              _pinTableColumn = props.pinTableColumn,
              _copyTableColumn = props.copyTableColumn,
              dataId = props.dataId;
          var column = columns[columnIndex];
          var isGhost = column.ghost;
          var isSorted = sortColumn[column];
          var firstCell = columnIndex === 0;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames3["default"])('header-cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "column-".concat(columnIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-header-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), _classnames)),
            key: key,
            style: style,
            onClick: function onClick(e) {
              e.shiftKey ? _sortTableColumn(dataId, column) : null;
            },
            onDoubleClick: function onDoubleClick() {
              return _sortTableColumn(dataId, column);
            },
            title: column
          }, isGhost ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
            className: "details"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name__left"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name__name"
          }, column), /*#__PURE__*/_react["default"].createElement(_button["default"], {
            className: "col-name__sort",
            onClick: function onClick() {
              return _sortTableColumn(dataId, column);
            }
          }, isSorted ? isSorted === _defaultSettings.SORT_ORDER.ASCENDING ? /*#__PURE__*/_react["default"].createElement(_icons.ArrowUp, {
            height: "14px"
          }) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
            height: "14px"
          }) : null)), /*#__PURE__*/_react["default"].createElement(_button["default"], {
            className: "more",
            onClick: function onClick() {
              return toggleMoreOptions(column);
            }
          }, /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
            height: "14px"
          }))), /*#__PURE__*/_react["default"].createElement(FieldToken, {
            type: colMeta[column]
          })), /*#__PURE__*/_react["default"].createElement("section", {
            className: "options"
          }, /*#__PURE__*/_react["default"].createElement(_optionDropdown["default"], {
            isOpened: moreOptionsColumn === column,
            type: colMeta[column],
            column: column,
            toggleMoreOptions: toggleMoreOptions,
            sortTableColumn: function sortTableColumn(mode) {
              return _sortTableColumn(dataId, column, mode);
            },
            sortMode: sortColumn && sortColumn[column],
            pinTableColumn: function pinTableColumn() {
              return _pinTableColumn(dataId, column);
            },
            copyTableColumn: function copyTableColumn() {
              return _copyTableColumn(dataId, column);
            },
            isSorted: isSorted,
            isPinned: isPinned,
            unsortColumn: unsortColumn
          }))));
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderDataCell", function (columns, isPinned, props) {
        return function (cellInfo) {
          var _classnames2;

          var columnIndex = cellInfo.columnIndex,
              key = cellInfo.key,
              style = cellInfo.style,
              rowIndex = cellInfo.rowIndex;
          var rows = props.rows,
              colMeta = props.colMeta;
          var column = columns[columnIndex];
          var isGhost = column.ghost;
          var rowCell = isGhost ? '' : getRowCell(_objectSpread(_objectSpread({}, props), {}, {
            column: column,
            rowIndex: rowIndex
          }));
          var type = isGhost ? null : colMeta[column];
          var endCell = columnIndex === columns.length - 1;
          var firstCell = columnIndex === 0;
          var bottomCell = rowIndex === rows.length - 1;
          var alignRight = fieldToAlignRight[type];

          var cell = /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames3["default"])('cell', (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, rowIndex % 2 === 0 ? 'even-row' : 'odd-row', true), (0, _defineProperty2["default"])(_classnames2, "row-".concat(rowIndex), true), (0, _defineProperty2["default"])(_classnames2, 'pinned-cell', isPinned), (0, _defineProperty2["default"])(_classnames2, 'first-cell', firstCell), (0, _defineProperty2["default"])(_classnames2, 'end-cell', endCell), (0, _defineProperty2["default"])(_classnames2, 'bottom-cell', bottomCell), (0, _defineProperty2["default"])(_classnames2, 'align-right', alignRight), _classnames2)),
            key: key,
            style: style,
            title: isGhost ? undefined : rowCell
          }, "".concat(rowCell).concat(endCell ? '\n' : '\t'));

          return cell;
        };
      });
      return _this;
    }

    (0, _createClass2["default"])(DataTable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.scaleCellsToWidth);
        this.scaleCellsToWidth();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.cellSizeCache !== prevProps.cellSizeCache || this.props.pinnedColumns !== prevProps.pinnedColumns) {
          this.scaleCellsToWidth();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.scaleCellsToWidth);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            rows = _this$props2.rows,
            pinnedColumns = _this$props2.pinnedColumns,
            _this$props2$theme = _this$props2.theme,
            theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
            fixedWidth = _this$props2.fixedWidth,
            fixedHeight = _this$props2.fixedHeight;
        var unpinnedColumns = this.unpinnedColumns(this.props);
        var _this$state = this.state,
            cellSizeCache = _this$state.cellSizeCache,
            moreOptionsColumn = _this$state.moreOptionsColumn,
            ghost = _this$state.ghost;
        var unpinnedColumnsGhost = ghost ? [].concat((0, _toConsumableArray2["default"])(unpinnedColumns), [{
          ghost: true
        }]) : unpinnedColumns;
        var pinnedColumnsWidth = pinnedColumns.reduce(function (acc, val) {
          return acc + (0, _lodash["default"])(cellSizeCache, val, 0);
        }, 0);
        var hasPinnedColumns = Boolean(pinnedColumns.length);
        var _theme$headerRowHeigh = theme.headerRowHeight,
            headerRowHeight = _theme$headerRowHeigh === void 0 ? defaultHeaderRowHeight : _theme$headerRowHeigh,
            _theme$rowHeight = theme.rowHeight,
            rowHeight = _theme$rowHeight === void 0 ? defaultRowHeight : _theme$rowHeight;
        var headerGridProps = {
          cellSizeCache: cellSizeCache,
          className: 'header-grid',
          height: headerRowHeight,
          rowCount: 1,
          rowHeight: headerRowHeight
        };
        var dataGridProps = {
          cellSizeCache: cellSizeCache,
          overscanColumnCount: overscanColumnCount,
          overscanRowCount: overscanRowCount,
          rowCount: (rows || []).length,
          rowHeight: rowHeight
        };
        return /*#__PURE__*/_react["default"].createElement(Container, {
          className: "data-table-container",
          ref: this.root
        }, Object.keys(cellSizeCache).length && /*#__PURE__*/_react["default"].createElement(_reactVirtualized.ScrollSync, null, function (_ref5) {
          var _onScroll = _ref5.onScroll,
              scrollLeft = _ref5.scrollLeft,
              scrollTop = _ref5.scrollTop;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "results-table-wrapper"
          }, hasPinnedColumns && /*#__PURE__*/_react["default"].createElement("div", {
            key: "pinned-columns",
            className: "pinned-columns grid-row"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: {
              header: 'pinned-columns--header pinned-grid-container',
              rows: 'pinned-columns--rows pinned-grid-container'
            },
            isPinned: true,
            columns: pinnedColumns,
            headerGridProps: headerGridProps,
            fixedWidth: pinnedColumnsWidth,
            onScroll: function onScroll(args) {
              return _onScroll(_objectSpread(_objectSpread({}, args), {}, {
                scrollLeft: scrollLeft
              }));
            },
            scrollTop: scrollTop,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(pinnedGrid) {
              return _this2.pinnedGrid = pinnedGrid;
            },
            columnWidth: columnWidthFunction(pinnedColumns, cellSizeCache),
            headerCellRender: _this2.renderHeaderCell(pinnedColumns, true, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this2.renderDataCell(pinnedColumns, true, _this2.props)
          })), /*#__PURE__*/_react["default"].createElement("div", {
            key: "unpinned-columns",
            style: {
              marginLeft: "".concat(hasPinnedColumns ? "".concat(pinnedColumnsWidth, "px") : '0')
            },
            className: "unpinned-columns grid-column"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: {
              header: 'unpinned-columns--header unpinned-grid-container',
              rows: 'unpinned-columns--rows unpinned-grid-container'
            },
            isPinned: false,
            columns: unpinnedColumnsGhost,
            headerGridProps: headerGridProps,
            fixedWidth: fixedWidth,
            fixedHeight: fixedHeight,
            onScroll: _onScroll,
            scrollTop: scrollTop,
            scrollLeft: scrollLeft,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(unpinnedGrid) {
              return _this2.unpinnedGrid = unpinnedGrid;
            },
            columnWidth: columnWidthFunction(unpinnedColumnsGhost, cellSizeCache, ghost),
            headerCellRender: _this2.renderHeaderCell(unpinnedColumnsGhost, false, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this2.renderDataCell(unpinnedColumnsGhost, false, _this2.props)
          })));
        }));
      }
    }]);
    return DataTable;
  }(_react.Component);

  (0, _defineProperty2["default"])(DataTable, "defaultProps", {
    rows: [],
    pinnedColumns: [],
    colMeta: {},
    cellSizeCache: {},
    sortColumn: {},
    fixedWidth: null,
    fixedHeight: null,
    theme: {}
  });
  return (0, _styledComponents.withTheme)(DataTable);
}

var _default = DataTableFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRIZWFkZXJSb3dIZWlnaHQiLCJkZWZhdWx0Um93SGVpZ2h0Iiwib3ZlcnNjYW5Db2x1bW5Db3VudCIsIm92ZXJzY2FuUm93Q291bnQiLCJmaWVsZFRvQWxpZ25SaWdodCIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImRhdGFUYWJsZVRleHRDb2xvciIsInBpbm5lZEdyaWRCb3JkZXJDb2xvciIsImV2ZW5Sb3dCYWNrZ3JvdW5kIiwib2RkUm93QmFja2dyb3VuZCIsImNlbGxCb3JkZXJDb2xvciIsImNlbGxQYWRkaW5nU2lkZSIsImNlbGxGb250U2l6ZSIsImVkZ2VDZWxsUGFkZGluZ1NpZGUiLCJoZWFkZXJDZWxsQm9yZGVyQ29sb3IiLCJoZWFkZXJQYWRkaW5nVG9wIiwiaGVhZGVyUGFkZGluZ0JvdHRvbSIsImhlYWRlckNlbGxCYWNrZ3JvdW5kIiwiaGVhZGVyQ2VsbEljb25Db2xvciIsImRlZmF1bHRDb2x1bW5XaWR0aCIsImNvbHVtbldpZHRoRnVuY3Rpb24iLCJjb2x1bW5zIiwiY2VsbFNpemVDYWNoZSIsImdob3N0IiwiaW5kZXgiLCJnZXRSb3dDZWxsIiwicm93cyIsImNvbHVtbiIsImNvbE1ldGEiLCJyb3dJbmRleCIsInNvcnRDb2x1bW4iLCJzb3J0T3JkZXIiLCJyb3dJZHgiLCJsZW5ndGgiLCJ0eXBlIiwiaW5kZXhPZiIsIlRhYmxlU2VjdGlvbiIsImNsYXNzTGlzdCIsImlzUGlubmVkIiwiaGVhZGVyR3JpZFByb3BzIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0IiwidW5kZWZpbmVkIiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJkYXRhR3JpZFByb3BzIiwiY29sdW1uV2lkdGgiLCJzZXRHcmlkUmVmIiwiaGVhZGVyQ2VsbFJlbmRlciIsImRhdGFDZWxsUmVuZGVyIiwic2Nyb2xsTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JpZERpbWVuc2lvbiIsImNvbHVtbkNvdW50IiwiZGF0YUdyaWRIZWlnaHQiLCJoZWFkZXIiLCJ0b3AiLCJEYXRhVGFibGVGYWN0b3J5IiwiZGVwcyIsIkZpZWxkVG9rZW5GYWN0b3J5IiwiRmllbGRUb2tlbiIsIkRhdGFUYWJsZSIsIm1vcmVPcHRpb25zQ29sdW1uIiwicGlubmVkQ29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwic3RhdGUiLCJwcm9wc0NhY2hlIiwidW5waW5uZWRDb2x1bW5zIiwicm9vdCIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImFkanVzdFdpZHRoIiwiZ2V0Q2VsbFNpemVDYWNoZSIsImRvU2NhbGVDZWxsc1RvV2lkdGgiLCJ0b2dnbGVNb3JlT3B0aW9ucyIsIlRva2VuQ29tcG9uZW50IiwiY2VsbEluZm8iLCJjb2x1bW5JbmRleCIsImtleSIsInN0eWxlIiwic29ydFRhYmxlQ29sdW1uIiwidW5zb3J0Q29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJkYXRhSWQiLCJpc0dob3N0IiwiaXNTb3J0ZWQiLCJmaXJzdENlbGwiLCJlIiwic2hpZnRLZXkiLCJTT1JUX09SREVSIiwiQVNDRU5ESU5HIiwibW9kZSIsInJvd0NlbGwiLCJlbmRDZWxsIiwiYm90dG9tQ2VsbCIsImFsaWduUmlnaHQiLCJjZWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjYWxlQ2VsbHNUb1dpZHRoIiwicHJldlByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVucGlubmVkQ29sdW1uc0dob3N0IiwicGlubmVkQ29sdW1uc1dpZHRoIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaGFzUGlubmVkQ29sdW1ucyIsIkJvb2xlYW4iLCJoZWFkZXJSb3dIZWlnaHQiLCJyb3dIZWlnaHQiLCJjbGFzc05hbWUiLCJyb3dDb3VudCIsIk9iamVjdCIsImtleXMiLCJhcmdzIiwicGlubmVkR3JpZCIsInJlbmRlckhlYWRlckNlbGwiLCJyZW5kZXJEYXRhQ2VsbCIsIm1hcmdpbkxlZnQiLCJ1bnBpbm5lZEdyaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxFQUEvQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsRUFBNUI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLElBQU1DLGlCQUFpQixrRkFDcEJDLGlDQUFnQkMsT0FESSxFQUNNLElBRE4sd0RBRXBCRCxpQ0FBZ0JFLElBRkksRUFFRyxJQUZILHNCQUF2Qjs7QUFLTyxJQUFNQyxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUlYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsa0JBQWhCO0FBQUEsQ0FKTSxFQTBEVSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBMURmLEVBMEVJLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsaUJBQWhCO0FBQUEsQ0ExRVQsRUE2RUksVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQTdFVCxFQStGVyxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGVBQWhCO0FBQUEsQ0EvRmhCLEVBZ0dVLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFL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MUI7QUFlRSxZQUFBLFdBQVcsRUFBRTNHLG1CQUFtQixDQUM5QnlGLG9CQUQ4QixFQUU5QnZGLGFBRjhCLEVBRzlCQyxLQUg4QixDQWZsQztBQW9CRSxZQUFBLGdCQUFnQixFQUFFLE1BQUksQ0FBQ3FHLGdCQUFMLENBQ2hCZixvQkFEZ0IsRUFFaEIsS0FGZ0IsRUFHaEIsTUFBSSxDQUFDekcsS0FIVyxFQUloQixNQUFJLENBQUM0RSxpQkFKVyxFQUtoQmpCLGlCQUxnQixDQXBCcEI7QUEyQkUsWUFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDOEQsY0FBTCxDQUNkaEIsb0JBRGMsRUFFZCxLQUZjLEVBR2QsTUFBSSxDQUFDekcsS0FIUztBQTNCbEIsWUFQRixDQTVCRixDQURGO0FBd0VELFNBMUVILENBRkosQ0FERjtBQWtGRDtBQTFUaUM7QUFBQTtBQUFBLElBQ1o0SCxnQkFEWTs7QUFBQSxtQ0FDOUJsRSxTQUQ4QixrQkFFWjtBQUNwQnBDLElBQUFBLElBQUksRUFBRSxFQURjO0FBRXBCc0MsSUFBQUEsYUFBYSxFQUFFLEVBRks7QUFHcEJwQyxJQUFBQSxPQUFPLEVBQUUsRUFIVztBQUlwQk4sSUFBQUEsYUFBYSxFQUFFLEVBSks7QUFLcEJRLElBQUFBLFVBQVUsRUFBRSxFQUxRO0FBTXBCVSxJQUFBQSxVQUFVLEVBQUUsSUFOUTtBQU9wQkMsSUFBQUEsV0FBVyxFQUFFLElBUE87QUFRcEJwQyxJQUFBQSxLQUFLLEVBQUU7QUFSYSxHQUZZO0FBNlRwQyxTQUFPLGlDQUFVeUQsU0FBVixDQUFQO0FBQ0Q7O2VBRWNKLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2Nyb2xsU3luYywgQXV0b1NpemVyfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuaW1wb3J0IE9wdGlvbkRyb3Bkb3duIGZyb20gJy4vb3B0aW9uLWRyb3Bkb3duJztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHtBcnJvd1VwLCBBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7VmVydFRocmVlRG90c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHthZGp1c3RDZWxsc1RvQ29udGFpbmVyfSBmcm9tICcuL2NlbGwtc2l6ZSc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgRmllbGRUb2tlbkZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtdG9rZW4nO1xuXG5jb25zdCBkZWZhdWx0SGVhZGVyUm93SGVpZ2h0ID0gNTU7XG5jb25zdCBkZWZhdWx0Um93SGVpZ2h0ID0gMzI7XG5jb25zdCBvdmVyc2NhbkNvbHVtbkNvdW50ID0gMTA7XG5jb25zdCBvdmVyc2NhblJvd0NvdW50ID0gMTA7XG5jb25zdCBmaWVsZFRvQWxpZ25SaWdodCA9IHtcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogdHJ1ZSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxleC1ncm93OiAxO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYXRhVGFibGVUZXh0Q29sb3J9O1xuICB3aWR0aDogMTAwJTtcblxuICAuUmVhY3RWaXJ0dWFsaXplZF9fR3JpZDpmb2N1cyxcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLmNlbGwge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIC5yZXN1bHRzLXRhYmxlLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbiAgICAuc2Nyb2xsLWluLXVpLXRocmVhZDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZ3JpZC1yb3cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5ncmlkLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICAucGlubmVkLWdyaWQtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDAgMCA3NXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5waW5uZWRHcmlkQm9yZGVyQ29sb3J9O1xuICAgIH1cblxuICAgIC5oZWFkZXItZ3JpZCB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJvZHktZ3JpZCB7XG4gICAgICBvdmVyZmxvdzogb3ZlcmxheSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5waW5uZWQtZ3JpZCB7XG4gICAgICBvdmVyZmxvdzogb3ZlcmxheSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ldmVuLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmV2ZW5Sb3dCYWNrZ3JvdW5kfTtcbiAgICB9XG4gICAgLm9kZC1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5vZGRSb3dCYWNrZ3JvdW5kfTtcbiAgICB9XG4gICAgLmNlbGwsXG4gICAgLmhlYWRlci1jZWxsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgLm4tc29ydC1pZHgge1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbEJvcmRlckNvbG9yfTtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbEJvcmRlckNvbG9yfTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGV9cHg7XG4gICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbEZvbnRTaXplfXB4O1xuXG4gICAgICAucmVzdWx0LWxpbmsge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5jZWxsLmVuZC1jZWxsLFxuICAgIC5oZWFkZXItY2VsbC5lbmQtY2VsbCB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZSArIHByb3BzLnRoZW1lLmVkZ2VDZWxsUGFkZGluZ1NpZGV9cHg7XG4gICAgfVxuICAgIC5jZWxsLmZpcnN0LWNlbGwsXG4gICAgLmhlYWRlci1jZWxsLmZpcnN0LWNlbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZSArIHByb3BzLnRoZW1lLmVkZ2VDZWxsUGFkZGluZ1NpZGV9cHg7XG4gICAgfVxuICAgIC5jZWxsLmJvdHRvbS1jZWxsIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICAgIC5jZWxsLmFsaWduLXJpZ2h0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmhlYWRlci1jZWxsIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyUGFkZGluZ1RvcH1weDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJQYWRkaW5nQm90dG9tfXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyQ2VsbEJhY2tncm91bmR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLm1vcmUge1xuICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxJY29uQ29sb3J9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubi1zb3J0LWlkeCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgfVxuICAgICAgLmRldGFpbHMge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAuY29sLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAuY29sLW5hbWVfX2xlZnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbC1uYW1lX19uYW1lIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sLW5hbWVfX3NvcnQge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubW9yZSB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IGRlZmF1bHRDb2x1bW5XaWR0aCA9IDIwMDtcblxuY29uc3QgY29sdW1uV2lkdGhGdW5jdGlvbiA9IChjb2x1bW5zLCBjZWxsU2l6ZUNhY2hlLCBnaG9zdCkgPT4gKHtpbmRleH0pID0+IHtcbiAgcmV0dXJuIChjb2x1bW5zW2luZGV4XSB8fCB7fSkuZ2hvc3QgPyBnaG9zdCA6IGNlbGxTaXplQ2FjaGVbY29sdW1uc1tpbmRleF1dIHx8IGRlZmF1bHRDb2x1bW5XaWR0aDtcbn07XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGFjY2Vzc29yIG1ldGhvZCB1c2VkIHRvIGdlbmVyYWxpemUgZ2V0dGluZyBhIGNlbGwgZnJvbSBhIGRhdGEgcm93XG4gKi9cbmNvbnN0IGdldFJvd0NlbGwgPSAoe3Jvd3MsIGNvbHVtbnMsIGNvbHVtbiwgY29sTWV0YSwgcm93SW5kZXgsIHNvcnRDb2x1bW4sIHNvcnRPcmRlcn0pID0+IHtcbiAgY29uc3Qgcm93SWR4ID0gc29ydE9yZGVyICYmIHNvcnRPcmRlci5sZW5ndGggPyBnZXQoc29ydE9yZGVyLCByb3dJbmRleCkgOiByb3dJbmRleDtcbiAgY29uc3QgdHlwZSA9IGNvbE1ldGFbY29sdW1uXTtcblxuICByZXR1cm4gcGFyc2VGaWVsZFZhbHVlKGdldChyb3dzLCBbcm93SWR4LCBjb2x1bW5zLmluZGV4T2YoY29sdW1uKV0sICdFcnInKSwgdHlwZSk7XG59O1xuXG5leHBvcnQgY29uc3QgVGFibGVTZWN0aW9uID0gKHtcbiAgY2xhc3NMaXN0LFxuICBpc1Bpbm5lZCxcbiAgY29sdW1ucyxcbiAgaGVhZGVyR3JpZFByb3BzLFxuICBmaXhlZFdpZHRoLFxuICBmaXhlZEhlaWdodCA9IHVuZGVmaW5lZCxcbiAgb25TY3JvbGwsXG4gIHNjcm9sbFRvcCxcbiAgZGF0YUdyaWRQcm9wcyxcbiAgY29sdW1uV2lkdGgsXG4gIHNldEdyaWRSZWYsXG4gIGhlYWRlckNlbGxSZW5kZXIsXG4gIGRhdGFDZWxsUmVuZGVyLFxuICBzY3JvbGxMZWZ0ID0gdW5kZWZpbmVkXG59KSA9PiAoXG4gIDxBdXRvU2l6ZXI+XG4gICAgeyh7d2lkdGgsIGhlaWdodH0pID0+IHtcbiAgICAgIGNvbnN0IGdyaWREaW1lbnNpb24gPSB7XG4gICAgICAgIGNvbHVtbkNvdW50OiBjb2x1bW5zLmxlbmd0aCxcbiAgICAgICAgY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoIHx8IHdpZHRoXG4gICAgICB9O1xuICAgICAgY29uc3QgZGF0YUdyaWRIZWlnaHQgPSBmaXhlZEhlaWdodCB8fCBoZWlnaHQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGwtaW4tdWktdGhyZWFkJywgY2xhc3NMaXN0LmhlYWRlcil9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXtoZWFkZXJDZWxsUmVuZGVyfVxuICAgICAgICAgICAgICB7Li4uaGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICB7Li4uZ3JpZERpbWVuc2lvbn1cbiAgICAgICAgICAgICAgc2Nyb2xsTGVmdD17c2Nyb2xsTGVmdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGwtaW4tdWktdGhyZWFkJywgY2xhc3NMaXN0LnJvd3MpfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdG9wOiBoZWFkZXJHcmlkUHJvcHMuaGVpZ2h0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNlbGxSZW5kZXJlcj17ZGF0YUNlbGxSZW5kZXJ9XG4gICAgICAgICAgICAgIHsuLi5kYXRhR3JpZFByb3BzfVxuICAgICAgICAgICAgICB7Li4uZ3JpZERpbWVuc2lvbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc1Bpbm5lZCA/ICdwaW5uZWQtZ3JpZCcgOiAnYm9keS1ncmlkJ31cbiAgICAgICAgICAgICAgaGVpZ2h0PXtkYXRhR3JpZEhlaWdodCAtIGhlYWRlckdyaWRQcm9wcy5oZWlnaHR9XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxUb3B9XG4gICAgICAgICAgICAgIHNldEdyaWRSZWY9e3NldEdyaWRSZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfX1cbiAgPC9BdXRvU2l6ZXI+XG4pO1xuRGF0YVRhYmxlRmFjdG9yeS5kZXBzID0gW0ZpZWxkVG9rZW5GYWN0b3J5XTtcbmZ1bmN0aW9uIERhdGFUYWJsZUZhY3RvcnkoRmllbGRUb2tlbikge1xuICBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICByb3dzOiBbXSxcbiAgICAgIHBpbm5lZENvbHVtbnM6IFtdLFxuICAgICAgY29sTWV0YToge30sXG4gICAgICBjZWxsU2l6ZUNhY2hlOiB7fSxcbiAgICAgIHNvcnRDb2x1bW46IHt9LFxuICAgICAgZml4ZWRXaWR0aDogbnVsbCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBudWxsLFxuICAgICAgdGhlbWU6IHt9XG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgY2VsbFNpemVDYWNoZToge30sXG4gICAgICBtb3JlT3B0aW9uc0NvbHVtbjogbnVsbFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKTtcbiAgICAgIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJvcHMuY2VsbFNpemVDYWNoZSAhPT0gcHJldlByb3BzLmNlbGxTaXplQ2FjaGUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5waW5uZWRDb2x1bW5zICE9PSBwcmV2UHJvcHMucGlubmVkQ29sdW1uc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKTtcbiAgICB9XG4gICAgcm9vdCA9IGNyZWF0ZVJlZigpO1xuICAgIGNvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5jb2x1bW5zO1xuICAgIHBpbm5lZENvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5waW5uZWRDb2x1bW5zO1xuICAgIHVucGlubmVkQ29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY29sdW1ucywgdGhpcy5waW5uZWRDb2x1bW5zLCAoY29sdW1ucywgcGlubmVkQ29sdW1ucykgPT5cbiAgICAgICFBcnJheS5pc0FycmF5KHBpbm5lZENvbHVtbnMpID8gY29sdW1ucyA6IGNvbHVtbnMuZmlsdGVyKGMgPT4gIXBpbm5lZENvbHVtbnMuaW5jbHVkZXMoYykpXG4gICAgKTtcblxuICAgIHRvZ2dsZU1vcmVPcHRpb25zID0gbW9yZU9wdGlvbnNDb2x1bW4gPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3JlT3B0aW9uc0NvbHVtbjpcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vcmVPcHRpb25zQ29sdW1uID09PSBtb3JlT3B0aW9uc0NvbHVtbiA/IG51bGwgOiBtb3JlT3B0aW9uc0NvbHVtblxuICAgICAgfSk7XG5cbiAgICBnZXRDZWxsU2l6ZUNhY2hlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2NlbGxTaXplQ2FjaGU6IHByb3BzQ2FjaGUsIGZpeGVkV2lkdGgsIHBpbm5lZENvbHVtbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMudW5waW5uZWRDb2x1bW5zKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCB3aWR0aCA9IGZpeGVkV2lkdGggPyBmaXhlZFdpZHRoIDogdGhpcy5yb290LmN1cnJlbnQgPyB0aGlzLnJvb3QuY3VycmVudC5jbGllbnRXaWR0aCA6IDA7XG5cbiAgICAgIC8vIHBpbiBjb2x1bW4gYm9yZGVyIGlzIDIgcGl4ZWwgdnMgMSBwaXhlbFxuICAgICAgY29uc3QgYWRqdXN0V2lkdGggPSBwaW5uZWRDb2x1bW5zLmxlbmd0aCA/IHdpZHRoIC0gMSA6IHdpZHRoO1xuICAgICAgY29uc3Qge2NlbGxTaXplQ2FjaGUsIGdob3N0fSA9IGFkanVzdENlbGxzVG9Db250YWluZXIoXG4gICAgICAgIGFkanVzdFdpZHRoLFxuICAgICAgICBwcm9wc0NhY2hlLFxuICAgICAgICBwaW5uZWRDb2x1bW5zLFxuICAgICAgICB1bnBpbm5lZENvbHVtbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBnaG9zdFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZG9TY2FsZUNlbGxzVG9XaWR0aCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRDZWxsU2l6ZUNhY2hlKCkpO1xuICAgIH07XG5cbiAgICBzY2FsZUNlbGxzVG9XaWR0aCA9IGRlYm91bmNlKHRoaXMuZG9TY2FsZUNlbGxzVG9XaWR0aCwgMzAwKTtcblxuICAgIHJlbmRlckhlYWRlckNlbGwgPSAoXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNQaW5uZWQsXG4gICAgICBwcm9wcyxcbiAgICAgIHRvZ2dsZU1vcmVPcHRpb25zLFxuICAgICAgbW9yZU9wdGlvbnNDb2x1bW4sXG4gICAgICBUb2tlbkNvbXBvbmVudFxuICAgICkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgcmV0dXJuIGNlbGxJbmZvID0+IHtcbiAgICAgICAgY29uc3Qge2NvbHVtbkluZGV4LCBrZXksIHN0eWxlfSA9IGNlbGxJbmZvO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY29sTWV0YSxcbiAgICAgICAgICBzb3J0Q29sdW1uLFxuICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbixcbiAgICAgICAgICB1bnNvcnRDb2x1bW4sXG4gICAgICAgICAgcGluVGFibGVDb2x1bW4sXG4gICAgICAgICAgY29weVRhYmxlQ29sdW1uLFxuICAgICAgICAgIGRhdGFJZFxuICAgICAgICB9ID0gcHJvcHM7XG5cbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IGlzR2hvc3QgPSBjb2x1bW4uZ2hvc3Q7XG4gICAgICAgIGNvbnN0IGlzU29ydGVkID0gc29ydENvbHVtbltjb2x1bW5dO1xuICAgICAgICBjb25zdCBmaXJzdENlbGwgPSBjb2x1bW5JbmRleCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2hlYWRlci1jZWxsJywge1xuICAgICAgICAgICAgICBbYGNvbHVtbi0ke2NvbHVtbkluZGV4fWBdOiB0cnVlLFxuICAgICAgICAgICAgICAncGlubmVkLWhlYWRlci1jZWxsJzogaXNQaW5uZWQsXG4gICAgICAgICAgICAgICdmaXJzdC1jZWxsJzogZmlyc3RDZWxsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGUuc2hpZnRLZXkgPyBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pIDogbnVsbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxuICAgICAgICAgICAgdGl0bGU9e2NvbHVtbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNHaG9zdCA/IChcbiAgICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5hbWVfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1uYW1lX19uYW1lXCI+e2NvbHVtbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbmFtZV9fc29ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTb3J0ZWQgPT09IFNPUlRfT1JERVIuQVNDRU5ESU5HID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1VwIGhlaWdodD1cIjE0cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd24gaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFRva2VuIHR5cGU9e2NvbE1ldGFbY29sdW1uXX0gLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8T3B0aW9uRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuZWQ9e21vcmVPcHRpb25zQ29sdW1uID09PSBjb2x1bW59XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2NvbE1ldGFbY29sdW1uXX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmVPcHRpb25zPXt0b2dnbGVNb3JlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXttb2RlID0+IHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbiwgbW9kZSl9XG4gICAgICAgICAgICAgICAgICAgIHNvcnRNb2RlPXtzb3J0Q29sdW1uICYmIHNvcnRDb2x1bW5bY29sdW1uXX1cbiAgICAgICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49eygpID0+IHBpblRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKX1cbiAgICAgICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXsoKSA9PiBjb3B5VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxuICAgICAgICAgICAgICAgICAgICBpc1NvcnRlZD17aXNTb3J0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGlzUGlubmVkPXtpc1Bpbm5lZH1cbiAgICAgICAgICAgICAgICAgICAgdW5zb3J0Q29sdW1uPXt1bnNvcnRDb2x1bW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVuZGVyRGF0YUNlbGwgPSAoY29sdW1ucywgaXNQaW5uZWQsIHByb3BzKSA9PiB7XG4gICAgICByZXR1cm4gY2VsbEluZm8gPT4ge1xuICAgICAgICBjb25zdCB7Y29sdW1uSW5kZXgsIGtleSwgc3R5bGUsIHJvd0luZGV4fSA9IGNlbGxJbmZvO1xuICAgICAgICBjb25zdCB7cm93cywgY29sTWV0YX0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IGlzR2hvc3QgPSBjb2x1bW4uZ2hvc3Q7XG5cbiAgICAgICAgY29uc3Qgcm93Q2VsbCA9IGlzR2hvc3QgPyAnJyA6IGdldFJvd0NlbGwoey4uLnByb3BzLCBjb2x1bW4sIHJvd0luZGV4fSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBpc0dob3N0ID8gbnVsbCA6IGNvbE1ldGFbY29sdW1uXTtcblxuICAgICAgICBjb25zdCBlbmRDZWxsID0gY29sdW1uSW5kZXggPT09IGNvbHVtbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgZmlyc3RDZWxsID0gY29sdW1uSW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGJvdHRvbUNlbGwgPSByb3dJbmRleCA9PT0gcm93cy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBhbGlnblJpZ2h0ID0gZmllbGRUb0FsaWduUmlnaHRbdHlwZV07XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2NlbGwnLCB7XG4gICAgICAgICAgICAgIFtyb3dJbmRleCAlIDIgPT09IDAgPyAnZXZlbi1yb3cnIDogJ29kZC1yb3cnXTogdHJ1ZSxcbiAgICAgICAgICAgICAgW2Byb3ctJHtyb3dJbmRleH1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgJ3Bpbm5lZC1jZWxsJzogaXNQaW5uZWQsXG4gICAgICAgICAgICAgICdmaXJzdC1jZWxsJzogZmlyc3RDZWxsLFxuICAgICAgICAgICAgICAnZW5kLWNlbGwnOiBlbmRDZWxsLFxuICAgICAgICAgICAgICAnYm90dG9tLWNlbGwnOiBib3R0b21DZWxsLFxuICAgICAgICAgICAgICAnYWxpZ24tcmlnaHQnOiBhbGlnblJpZ2h0XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgdGl0bGU9e2lzR2hvc3QgPyB1bmRlZmluZWQgOiByb3dDZWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtgJHtyb3dDZWxsfSR7ZW5kQ2VsbCA/ICdcXG4nIDogJ1xcdCd9YH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgIH07XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7cm93cywgcGlubmVkQ29sdW1ucywgdGhlbWUgPSB7fSwgZml4ZWRXaWR0aCwgZml4ZWRIZWlnaHR9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMudW5waW5uZWRDb2x1bW5zKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCB7Y2VsbFNpemVDYWNoZSwgbW9yZU9wdGlvbnNDb2x1bW4sIGdob3N0fSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB1bnBpbm5lZENvbHVtbnNHaG9zdCA9IGdob3N0ID8gWy4uLnVucGlubmVkQ29sdW1ucywge2dob3N0OiB0cnVlfV0gOiB1bnBpbm5lZENvbHVtbnM7XG4gICAgICBjb25zdCBwaW5uZWRDb2x1bW5zV2lkdGggPSBwaW5uZWRDb2x1bW5zLnJlZHVjZShcbiAgICAgICAgKGFjYywgdmFsKSA9PiBhY2MgKyBnZXQoY2VsbFNpemVDYWNoZSwgdmFsLCAwKSxcbiAgICAgICAgMFxuICAgICAgKTtcblxuICAgICAgY29uc3QgaGFzUGlubmVkQ29sdW1ucyA9IEJvb2xlYW4ocGlubmVkQ29sdW1ucy5sZW5ndGgpO1xuICAgICAgY29uc3Qge2hlYWRlclJvd0hlaWdodCA9IGRlZmF1bHRIZWFkZXJSb3dIZWlnaHQsIHJvd0hlaWdodCA9IGRlZmF1bHRSb3dIZWlnaHR9ID0gdGhlbWU7XG5cbiAgICAgIGNvbnN0IGhlYWRlckdyaWRQcm9wcyA9IHtcbiAgICAgICAgY2VsbFNpemVDYWNoZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGVyLWdyaWQnLFxuICAgICAgICBoZWlnaHQ6IGhlYWRlclJvd0hlaWdodCxcbiAgICAgICAgcm93Q291bnQ6IDEsXG4gICAgICAgIHJvd0hlaWdodDogaGVhZGVyUm93SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXRhR3JpZFByb3BzID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBvdmVyc2NhbkNvbHVtbkNvdW50LFxuICAgICAgICBvdmVyc2NhblJvd0NvdW50LFxuICAgICAgICByb3dDb3VudDogKHJvd3MgfHwgW10pLmxlbmd0aCxcbiAgICAgICAgcm93SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRhdGEtdGFibGUtY29udGFpbmVyXCIgcmVmPXt0aGlzLnJvb3R9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhjZWxsU2l6ZUNhY2hlKS5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPFNjcm9sbFN5bmM+XG4gICAgICAgICAgICAgIHsoe29uU2Nyb2xsLCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3B9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy10YWJsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNQaW5uZWRDb2x1bW5zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInBpbm5lZC1jb2x1bW5zXCIgY2xhc3NOYW1lPVwicGlubmVkLWNvbHVtbnMgZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAncGlubmVkLWNvbHVtbnMtLWhlYWRlciBwaW5uZWQtZ3JpZC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6ICdwaW5uZWQtY29sdW1ucy0tcm93cyBwaW5uZWQtZ3JpZC1jb250YWluZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGlubmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3Bpbm5lZENvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckdyaWRQcm9wcz17aGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZFdpZHRoPXtwaW5uZWRDb2x1bW5zV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXthcmdzID0+IG9uU2Nyb2xsKHsuLi5hcmdzLCBzY3JvbGxMZWZ0fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhR3JpZFByb3BzPXtkYXRhR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHcmlkUmVmPXtwaW5uZWRHcmlkID0+ICh0aGlzLnBpbm5lZEdyaWQgPSBwaW5uZWRHcmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg9e2NvbHVtbldpZHRoRnVuY3Rpb24ocGlubmVkQ29sdW1ucywgY2VsbFNpemVDYWNoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNlbGxSZW5kZXI9e3RoaXMucmVuZGVySGVhZGVyQ2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckRhdGFDZWxsKHBpbm5lZENvbHVtbnMsIHRydWUsIHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT1cInVucGlubmVkLWNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtoYXNQaW5uZWRDb2x1bW5zID8gYCR7cGlubmVkQ29sdW1uc1dpZHRofXB4YCA6ICcwJ31gXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bnBpbm5lZC1jb2x1bW5zIGdyaWQtY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICd1bnBpbm5lZC1jb2x1bW5zLS1oZWFkZXIgdW5waW5uZWQtZ3JpZC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAndW5waW5uZWQtY29sdW1ucy0tcm93cyB1bnBpbm5lZC1ncmlkLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bpbm5lZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt1bnBpbm5lZENvbHVtbnNHaG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckdyaWRQcm9wcz17aGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRXaWR0aD17Zml4ZWRXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0PXtmaXhlZEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdD17c2Nyb2xsTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFHcmlkUHJvcHM9e2RhdGFHcmlkUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHcmlkUmVmPXt1bnBpbm5lZEdyaWQgPT4gKHRoaXMudW5waW5uZWRHcmlkID0gdW5waW5uZWRHcmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoPXtjb2x1bW5XaWR0aEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBpbm5lZENvbHVtbnNHaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFNpemVDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckhlYWRlckNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVucGlubmVkQ29sdW1uc0dob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3JlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZU9wdGlvbnNDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2VsbFJlbmRlcj17dGhpcy5yZW5kZXJEYXRhQ2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zR2hvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvU2Nyb2xsU3luYz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhUaGVtZShEYXRhVGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVGYWN0b3J5O1xuIl19