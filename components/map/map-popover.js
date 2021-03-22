"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapPopoverFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerHoverInfo = _interopRequireDefault(require("./layer-hover-info"));

var _coordinateInfo = _interopRequireDefault(require("./coordinate-info"));

var _icons = require("../common/icons");

var _errorBoundary = _interopRequireDefault(require("../common/error-boundary"));

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 50%;\n  transform: rotate(30deg);\n  top: 10px;\n  color: ", ";\n\n  &.popover-arrow-left {\n    left: 40%;\n    transform: rotate(0deg);\n  }\n\n  &.popover-arrow-right {\n    left: 60%;\n    transform: rotate(0deg);\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  font-size: 11px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  z-index: 1000;\n  position: absolute;\n  overflow-x: auto;\n  box-shadow: ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  .gutter {\n    height: 6px;\n    margin-bottom: 20px;\n  }\n\n  .primary-label {\n    color: ", ";\n    position: absolute;\n    right: 18px;\n    top: 10px;\n    font-size: 10px;\n  }\n\n  table {\n    margin: 2px 12px 12px 12px;\n    width: auto;\n\n    tbody {\n      border-top: transparent;\n      border-bottom: transparent;\n    }\n\n    td {\n      border-color: transparent;\n      padding: 4px;\n      color: ", ";\n    }\n\n    td.row__value {\n      text-align: right;\n      font-weight: 500;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MAX_WIDTH = 500;
var MAX_HEIGHT = 600;

var StyledMapPopover = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return "".concat(props.theme.panelBackground, "dd");
}, function (props) {
  return props.theme.notificationColors.success;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledIcon = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.linkBtnColor;
});

MapPopoverFactory.deps = [_layerHoverInfo["default"], _coordinateInfo["default"]];

function MapPopoverFactory(LayerHoverInfo, CoordinateInfo) {
  var MapPopover = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(MapPopover, _PureComponent);

    var _super = _createSuper(MapPopover);

    function MapPopover(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapPopover);
      _this = _super.call(this, props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "popover", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moveLeft", function () {
        _this.setState({
          isLeft: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moveRight", function () {
        _this.setState({
          isLeft: false
        });
      });
      _this.state = {
        width: 380,
        height: 160,
        isLeft: false
      };
      return _this;
    }

    (0, _createClass2["default"])(MapPopover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._setContainerSize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._setContainerSize();
      }
    }, {
      key: "_setContainerSize",
      value: function _setContainerSize() {
        var node = this.popover.current;

        if (!node) {
          return;
        }

        var width = Math.min(Math.round(node.scrollWidth), MAX_WIDTH);
        var height = Math.min(Math.round(node.scrollHeight), MAX_HEIGHT);

        if (width !== this.state.width || height !== this.state.height) {
          this.setState({
            width: width,
            height: height
          });
        }
      }
    }, {
      key: "_getPosition",
      value: function _getPosition(x, y, isLeft) {
        var topOffset = 20;
        var leftOffset = 20;
        var _this$props = this.props,
            mapW = _this$props.mapW,
            mapH = _this$props.mapH;
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height;
        var pos = {};

        if (x + leftOffset + width > mapW || isLeft) {
          pos.right = mapW - x + leftOffset;
        } else {
          pos.left = x + leftOffset;
        }

        if (y + topOffset + height > mapH) {
          pos.bottom = 10;
        } else {
          pos.top = y + topOffset;
        }

        return pos;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            x = _this$props2.x,
            y = _this$props2.y,
            frozen = _this$props2.frozen,
            coordinate = _this$props2.coordinate,
            layerHoverProp = _this$props2.layerHoverProp,
            isBase = _this$props2.isBase,
            zoom = _this$props2.zoom;
        var isLeft = this.state.isLeft;
        var style = Number.isFinite(x) && Number.isFinite(y) ? this._getPosition(x, y, isLeft) : {};
        return /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(StyledMapPopover, {
          ref: this.popover,
          className: "map-popover",
          style: _objectSpread(_objectSpread({}, style), {}, {
            maxWidth: MAX_WIDTH
          })
        }, frozen ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-popover__top"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "gutter"
        }), !isLeft && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
          className: "popover-arrow-left",
          onClick: this.moveLeft
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, null)), /*#__PURE__*/_react["default"].createElement(StyledIcon, {
          className: "popover-pin",
          onClick: this.props.onClose
        }, /*#__PURE__*/_react["default"].createElement(_icons.Pin, {
          height: "16px"
        })), isLeft && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
          className: "popover-arrow-right",
          onClick: this.moveRight
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, null)), isBase && /*#__PURE__*/_react["default"].createElement("div", {
          className: "primary-label"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: "mapPopover.primary"
        }))) : null, Array.isArray(coordinate) && /*#__PURE__*/_react["default"].createElement(CoordinateInfo, {
          coordinate: coordinate,
          zoom: zoom
        }), layerHoverProp && /*#__PURE__*/_react["default"].createElement(LayerHoverInfo, layerHoverProp)));
      }
    }]);
    return MapPopover;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(MapPopover, "propTypes", {
    layerHoverProp: _propTypes["default"].object,
    coordinate: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].bool]),
    frozen: _propTypes["default"].bool,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    z: _propTypes["default"].number,
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    onClose: _propTypes["default"].func.isRequired,
    isBase: _propTypes["default"].bool
  });
  return (0, _reactIntl.injectIntl)(MapPopover);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJNQVhfV0lEVEgiLCJNQVhfSEVJR0hUIiwiU3R5bGVkTWFwUG9wb3ZlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzY3JvbGxCYXIiLCJwYW5lbEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJwYW5lbEJveFNoYWRvdyIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsInN1Y2Nlc3MiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZEljb24iLCJhY3RpdmVDb2xvciIsImxpbmtCdG5Db2xvciIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVySG92ZXJJbmZvRmFjdG9yeSIsIkNvb3JkaW5hdGVJbmZvRmFjdG9yeSIsIkxheWVySG92ZXJJbmZvIiwiQ29vcmRpbmF0ZUluZm8iLCJNYXBQb3BvdmVyIiwic2V0U3RhdGUiLCJpc0xlZnQiLCJzdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3NldENvbnRhaW5lclNpemUiLCJub2RlIiwicG9wb3ZlciIsImN1cnJlbnQiLCJNYXRoIiwibWluIiwicm91bmQiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsIngiLCJ5IiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsIm1hcFciLCJtYXBIIiwicG9zIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwidG9wIiwiZnJvemVuIiwiY29vcmRpbmF0ZSIsImxheWVySG92ZXJQcm9wIiwiaXNCYXNlIiwiem9vbSIsInN0eWxlIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJfZ2V0UG9zaXRpb24iLCJtYXhXaWR0aCIsIm1vdmVMZWZ0Iiwib25DbG9zZSIsIm1vdmVSaWdodCIsIkFycmF5IiwiaXNBcnJheSIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJhcnJheSIsImJvb2wiLCJudW1iZXIiLCJ6IiwiaXNSZXF1aXJlZCIsImZ1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QixJQUFBQSxJQUFJLEVBQUV1QixzQkFBVUssTUFBVixDQUFpQkUsVUFQTjtBQVFqQjdCLElBQUFBLElBQUksRUFBRXNCLHNCQUFVSyxNQUFWLENBQWlCRSxVQVJOO0FBU2pCWixJQUFBQSxPQUFPLEVBQUVLLHNCQUFVUSxJQUFWLENBQWVELFVBVFA7QUFVakJwQixJQUFBQSxNQUFNLEVBQUVhLHNCQUFVSTtBQVZELEdBRm1EO0FBNEh4RSxTQUFPLDJCQUFXOUMsVUFBWCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXllckhvdmVySW5mb0ZhY3RvcnkgZnJvbSAnLi9sYXllci1ob3Zlci1pbmZvJztcbmltcG9ydCBDb29yZGluYXRlSW5mb0ZhY3RvcnkgZnJvbSAnLi9jb29yZGluYXRlLWluZm8nO1xuaW1wb3J0IHtQaW4sIEFycm93TGVmdCwgQXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZXJyb3ItYm91bmRhcnknO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgTUFYX1dJRFRIID0gNTAwO1xuY29uc3QgTUFYX0hFSUdIVCA9IDYwMDtcblxuY29uc3QgU3R5bGVkTWFwUG9wb3ZlciA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Nyb2xsQmFyfTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvd307XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGAke3Byb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH1kZGB9O1xuICB9XG5cbiAgLmd1dHRlciB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5wcmltYXJ5LWxhYmVsIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25Db2xvcnMuc3VjY2Vzc307XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgbWFyZ2luOiAycHggMTJweCAxMnB4IDEycHg7XG4gICAgd2lkdGg6IGF1dG87XG5cbiAgICB0Ym9keSB7XG4gICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cblxuICAgIHRkLnJvd19fdmFsdWUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuXG4gICYucG9wb3Zlci1hcnJvdy1sZWZ0IHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAmLnBvcG92ZXItYXJyb3ctcmlnaHQge1xuICAgIGxlZnQ6IDYwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gIH1cbmA7XG5cbk1hcFBvcG92ZXJGYWN0b3J5LmRlcHMgPSBbTGF5ZXJIb3ZlckluZm9GYWN0b3J5LCBDb29yZGluYXRlSW5mb0ZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBQb3BvdmVyRmFjdG9yeShMYXllckhvdmVySW5mbywgQ29vcmRpbmF0ZUluZm8pIHtcbiAgY2xhc3MgTWFwUG9wb3ZlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBsYXllckhvdmVyUHJvcDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGNvb3JkaW5hdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAgIGZyb3plbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHo6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXBXOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBtYXBIOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgaXNCYXNlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgd2lkdGg6IDM4MCxcbiAgICAgICAgaGVpZ2h0OiAxNjAsXG4gICAgICAgIGlzTGVmdDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9zZXRDb250YWluZXJTaXplKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5fc2V0Q29udGFpbmVyU2l6ZSgpO1xuICAgIH1cblxuICAgIHBvcG92ZXIgPSBjcmVhdGVSZWYoKTtcblxuICAgIF9zZXRDb250YWluZXJTaXplKCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucG9wb3Zlci5jdXJyZW50O1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbihNYXRoLnJvdW5kKG5vZGUuc2Nyb2xsV2lkdGgpLCBNQVhfV0lEVEgpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5yb3VuZChub2RlLnNjcm9sbEhlaWdodCksIE1BWF9IRUlHSFQpO1xuXG4gICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGggfHwgaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aCwgaGVpZ2h0fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldFBvc2l0aW9uKHgsIHksIGlzTGVmdCkge1xuICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gMjA7XG4gICAgICBjb25zdCBsZWZ0T2Zmc2V0ID0gMjA7XG4gICAgICBjb25zdCB7bWFwVywgbWFwSH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHBvcyA9IHt9O1xuICAgICAgaWYgKHggKyBsZWZ0T2Zmc2V0ICsgd2lkdGggPiBtYXBXIHx8IGlzTGVmdCkge1xuICAgICAgICBwb3MucmlnaHQgPSBtYXBXIC0geCArIGxlZnRPZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MubGVmdCA9IHggKyBsZWZ0T2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoeSArIHRvcE9mZnNldCArIGhlaWdodCA+IG1hcEgpIHtcbiAgICAgICAgcG9zLmJvdHRvbSA9IDEwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zLnRvcCA9IHkgKyB0b3BPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0xlZnQ6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMZWZ0OiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7eCwgeSwgZnJvemVuLCBjb29yZGluYXRlLCBsYXllckhvdmVyUHJvcCwgaXNCYXNlLCB6b29tfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7aXNMZWZ0fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGNvbnN0IHN0eWxlID0gTnVtYmVyLmlzRmluaXRlKHgpICYmIE51bWJlci5pc0Zpbml0ZSh5KSA/IHRoaXMuX2dldFBvc2l0aW9uKHgsIHksIGlzTGVmdCkgOiB7fTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPFN0eWxlZE1hcFBvcG92ZXJcbiAgICAgICAgICAgIHJlZj17dGhpcy5wb3BvdmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBNQVhfV0lEVEhcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Zyb3plbiA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fdG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndXR0ZXJcIiAvPlxuICAgICAgICAgICAgICAgIHshaXNMZWZ0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItYXJyb3ctbGVmdFwiIG9uQ2xpY2s9e3RoaXMubW92ZUxlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0IC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8U3R5bGVkSWNvbiBjbGFzc05hbWU9XCJwb3BvdmVyLXBpblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XG4gICAgICAgICAgICAgICAgICA8UGluIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgICB7aXNMZWZ0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItYXJyb3ctcmlnaHRcIiBvbkNsaWNrPXt0aGlzLm1vdmVSaWdodH0+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXNCYXNlICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIm1hcFBvcG92ZXIucHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoY29vcmRpbmF0ZSkgJiYgPENvb3JkaW5hdGVJbmZvIGNvb3JkaW5hdGU9e2Nvb3JkaW5hdGV9IHpvb209e3pvb219IC8+fVxuICAgICAgICAgICAge2xheWVySG92ZXJQcm9wICYmIDxMYXllckhvdmVySW5mbyB7Li4ubGF5ZXJIb3ZlclByb3B9IC8+fVxuICAgICAgICAgIDwvU3R5bGVkTWFwUG9wb3Zlcj5cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5qZWN0SW50bChNYXBQb3BvdmVyKTtcbn1cbiJdfQ==