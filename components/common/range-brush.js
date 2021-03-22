"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

var _dataUtils = require("../../utils/data-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    fill-opacity: ", ";\n  }\n  .handle {\n    fill: ", ";\n    fill-opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledG = _styledComponents["default"].g(_templateObject(), function (props) {
  return props.isRanged ? props.theme.rangeBrushBgd : props.theme.BLUE2;
}, function (props) {
  return props.isRanged ? 0.3 : 1;
}, function (props) {
  return props.theme.BLUE2;
});

function moveRight(startSel, selection) {
  var _startSel = (0, _slicedToArray2["default"])(startSel, 1),
      startSel0 = _startSel[0];

  var _selection = (0, _slicedToArray2["default"])(selection, 1),
      sel0 = _selection[0];

  return Boolean(startSel0 === sel0);
} // style brush resize handle
// https://github.com/crossfilter/crossfilter/blob/gh-pages/index.html#L466


var getHandlePath = function getHandlePath(props) {
  return function brushResizePath(d) {
    var e = Number(d.type === 'e');
    var x = e ? 1 : -1;
    var h = 39;
    var w = 4.5;
    var y = (props.height - h) / 2;
    return "M".concat(0.5 * x, ",").concat(y, "c").concat(2.5 * x, ",0,").concat(w * x, ",2,").concat(w * x, ",").concat(w, "v").concat(h - w * 2, "c0,2.5,").concat(-2 * x, ",").concat(w, ",").concat(-w * x, ",").concat(w, "V").concat(y, "z");
  };
};

function RangeBrushFactory() {
  var RangeBrush = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeBrush, _Component);

    var _super = _createSuper(RangeBrush);

    function RangeBrush() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeBrush);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootContainer", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_brushed", function (evt) {
        var _this2;

        // Ignore brush events which don't have an underlying sourceEvent
        if (!evt.sourceEvent) return;

        var _evt$selection = (0, _slicedToArray2["default"])(evt.selection, 2),
            sel0 = _evt$selection[0],
            sel1 = _evt$selection[1];

        var right = moveRight(_this._startSel, evt.selection);

        var _this$props = _this.props,
            _this$props$range = (0, _slicedToArray2["default"])(_this$props.range, 2),
            min = _this$props$range[0],
            max = _this$props$range[1],
            step = _this$props.step,
            width = _this$props.width,
            marks = _this$props.marks,
            isRanged = _this$props.isRanged;

        var invert = function invert(x) {
          return x * (max - min) / width + min;
        };

        var d0 = invert(sel0);
        var d1 = invert(sel1);
        d0 = (0, _dataUtils.normalizeSliderValue)(d0, min, step, marks);
        d1 = (0, _dataUtils.normalizeSliderValue)(d1, min, step, marks);
        if (isRanged) _this._move(d0, d1);else (_this2 = _this)._move.apply(_this2, (0, _toConsumableArray2["default"])(right ? [d1, d1] : [d0, d0]));
        if (isRanged) _this._onBrush(d0, d1);else _this._onBrush(right ? d1 : d0);
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeBrush, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        // We want the React app to respond to brush state and vice-versa
        // but d3-brush fires the same events for both user-initiated brushing
        // and programmatic brushing (brush.move). We need these flags to
        // distinguish between the uses.
        //
        // We don't use state because that would trigger another `componentDidUpdate`
        var _this$props2 = this.props,
            theme = _this$props2.theme,
            isRanged = _this$props2.isRanged,
            onMouseoverHandle = _this$props2.onMouseoverHandle,
            onMouseoutHandle = _this$props2.onMouseoutHandle;
        this.brushing = false;
        this.moving = false;
        this.root = (0, _d3Selection.select)(this.rootContainer.current);
        this.brush = (0, _d3Brush.brushX)().handleSize(3).on('start', function (event) {
          if (typeof _this3.props.onBrushStart === 'function') _this3.props.onBrushStart();
          _this3._startSel = event.selection;
        }).on('brush', function (event) {
          if (_this3.moving) {
            return;
          }

          if (event.selection) {
            _this3.brushing = true;

            _this3._brushed(event);
          }
        }).on('end', function (event) {
          if (!_this3.brushing && _this3._startSel && !event.selection) {
            // handle click
            _this3._click(_this3._startSel);
          }

          if (typeof _this3.props.onBrushEnd === 'function') _this3.props.onBrushEnd();
          _this3.brushing = false;
          _this3.moving = false;
        });
        this.root.call(this.brush);
        var brushResizePath = getHandlePath(this.props);
        this.handle = this.root.selectAll('.handle--custom').data([{
          type: 'w'
        }, {
          type: 'e'
        }]).enter().append('path').attr('class', 'handle--custom').attr('display', isRanged ? null : 'none').attr('fill', theme ? theme.sliderHandleColor : '#D3D8E0').attr('cursor', 'ew-resize').attr('d', brushResizePath).on('mouseover', function () {
          if (onMouseoverHandle) onMouseoverHandle();
        }).on('mouseout', function () {
          if (onMouseoutHandle) onMouseoutHandle();
        });

        var _this$props$value = (0, _slicedToArray2["default"])(this.props.value, 2),
            val0 = _this$props$value[0],
            val1 = _this$props$value[1];

        this.moving = true;

        this._move(val0, val1);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props3 = this.props,
            _this$props3$value = (0, _slicedToArray2["default"])(_this$props3.value, 2),
            val0 = _this$props3$value[0],
            val1 = _this$props3$value[1],
            width = _this$props3.width;

        var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
            prevVal0 = _prevProps$value[0],
            prevVal1 = _prevProps$value[1];

        if (prevProps.width !== width) {
          // width change should not trigger this._brushed
          this.moving = true;
          this.root.call(this.brush);

          this._move(val0, val1);
        }

        if (!this.brushing && !this.moving) {
          if (prevVal0 !== val0 || prevVal1 !== val1) {
            this.moving = true;

            this._move(val0, val1);
          }
        }

        if (!this.props.isRanged) {
          this.handle.attr('display', 'none');
        }
      }
    }, {
      key: "_click",
      value: function _click(selection) {
        // fake brush
        this.brushing = true;

        this._brushed({
          sourceEvent: {},
          selection: selection
        });
      }
    }, {
      key: "_move",
      value: function _move(val0, val1) {
        var _this$props4 = this.props,
            _this$props4$range = (0, _slicedToArray2["default"])(_this$props4.range, 2),
            min = _this$props4$range[0],
            max = _this$props4$range[1],
            width = _this$props4.width,
            isRanged = _this$props4.isRanged;

        if (width && max - min) {
          var scale = function scale(x) {
            return (x - min) * width / (max - min);
          };

          if (!isRanged) {
            // only draw a 1 pixel line
            this.brush.move(this.root, [scale(val0), scale(val0) + 1]);
          } else {
            this.brush.move(this.root, [scale(val0), scale(val1)]);
            this.handle.attr('display', null).attr('transform', function (d, i) {
              return "translate(".concat([i === 0 ? scale(val0) : scale(val1), 0], ")");
            });
          }
        }
      }
    }, {
      key: "_onBrush",
      value: function _onBrush(val0, val1) {
        var _this$props5 = this.props,
            isRanged = _this$props5.isRanged,
            _this$props5$value = (0, _slicedToArray2["default"])(_this$props5.value, 2),
            currentVal0 = _this$props5$value[0],
            currentVal1 = _this$props5$value[1];

        if (currentVal0 === val0 && currentVal1 === val1) {
          return;
        }

        if (isRanged) {
          this.props.onBrush(val0, val1);
        } else {
          this.props.onBrush(val0, val0);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var isRanged = this.props.isRanged;
        return /*#__PURE__*/_react["default"].createElement(StyledG, {
          className: "kg-range-slider__brush",
          isRanged: isRanged,
          ref: this.rootContainer
        });
      }
    }]);
    return RangeBrush;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeBrush, "propTypes", {
    onBrush: _propTypes["default"].func.isRequired,
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    width: _propTypes["default"].number.isRequired,
    isRanged: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(RangeBrush, "defaultProps", {
    isRanged: true
  });
  return (0, _styledComponents.withTheme)(RangeBrush);
}

var _default = RangeBrushFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1icnVzaC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRHIiwic3R5bGVkIiwiZyIsInByb3BzIiwiaXNSYW5nZWQiLCJ0aGVtZSIsInJhbmdlQnJ1c2hCZ2QiLCJCTFVFMiIsIm1vdmVSaWdodCIsInN0YXJ0U2VsIiwic2VsZWN0aW9uIiwic3RhcnRTZWwwIiwic2VsMCIsIkJvb2xlYW4iLCJnZXRIYW5kbGVQYXRoIiwiYnJ1c2hSZXNpemVQYXRoIiwiZCIsImUiLCJOdW1iZXIiLCJ0eXBlIiwieCIsImgiLCJ3IiwieSIsImhlaWdodCIsIlJhbmdlQnJ1c2hGYWN0b3J5IiwiUmFuZ2VCcnVzaCIsImV2dCIsInNvdXJjZUV2ZW50Iiwic2VsMSIsInJpZ2h0IiwiX3N0YXJ0U2VsIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwid2lkdGgiLCJtYXJrcyIsImludmVydCIsImQwIiwiZDEiLCJfbW92ZSIsIl9vbkJydXNoIiwib25Nb3VzZW92ZXJIYW5kbGUiLCJvbk1vdXNlb3V0SGFuZGxlIiwiYnJ1c2hpbmciLCJtb3ZpbmciLCJyb290Iiwicm9vdENvbnRhaW5lciIsImN1cnJlbnQiLCJicnVzaCIsImhhbmRsZVNpemUiLCJvbiIsImV2ZW50Iiwib25CcnVzaFN0YXJ0IiwiX2JydXNoZWQiLCJfY2xpY2siLCJvbkJydXNoRW5kIiwiY2FsbCIsImhhbmRsZSIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImFwcGVuZCIsImF0dHIiLCJzbGlkZXJIYW5kbGVDb2xvciIsInZhbHVlIiwidmFsMCIsInZhbDEiLCJwcmV2UHJvcHMiLCJwcmV2VmFsMCIsInByZXZWYWwxIiwic2NhbGUiLCJtb3ZlIiwiaSIsImN1cnJlbnRWYWwwIiwiY3VycmVudFZhbDEiLCJvbkJydXNoIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwibnVtYmVyIiwiYm9vbCJd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O0FBRUQsWUFBSWhFLFFBQUosRUFBYztBQUNaLGVBQUtELEtBQUwsQ0FBVzBFLE9BQVgsQ0FBbUJWLElBQW5CLEVBQXlCQyxJQUF6QjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtqRSxLQUFMLENBQVcwRSxPQUFYLENBQW1CVixJQUFuQixFQUF5QkEsSUFBekI7QUFDRDtBQUNGO0FBbEx3QjtBQUFBO0FBQUEsK0JBb0xoQjtBQUFBLFlBQ0EvRCxRQURBLEdBQ1ksS0FBS0QsS0FEakIsQ0FDQUMsUUFEQTtBQUVQLDRCQUNFLGdDQUFDLE9BQUQ7QUFBUyxVQUFBLFNBQVMsRUFBQyx3QkFBbkI7QUFBNEMsVUFBQSxRQUFRLEVBQUVBLFFBQXREO0FBQWdFLFVBQUEsR0FBRyxFQUFFLEtBQUs0QztBQUExRSxVQURGO0FBR0Q7QUF6THdCO0FBQUE7QUFBQSxJQUNGOEIsZ0JBREU7O0FBQUEsbUNBQ3JCcEQsVUFEcUIsZUFFTjtBQUNqQm1ELElBQUFBLE9BQU8sRUFBRUUsc0JBQVVDLElBQVYsQ0FBZUMsVUFEUDtBQUVqQmpELElBQUFBLEtBQUssRUFBRStDLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBRjFCO0FBR2pCZixJQUFBQSxLQUFLLEVBQUVhLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBSDFCO0FBSWpCN0MsSUFBQUEsS0FBSyxFQUFFMkMsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBSlA7QUFLakI3RSxJQUFBQSxRQUFRLEVBQUUyRSxzQkFBVUs7QUFMSCxHQUZNO0FBQUEsbUNBQ3JCMUQsVUFEcUIsa0JBVUg7QUFDcEJ0QixJQUFBQSxRQUFRLEVBQUU7QUFEVSxHQVZHO0FBMkwzQixTQUFPLGlDQUFVc0IsVUFBVixDQUFQO0FBQ0Q7O2VBRWNELGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7YnJ1c2hYfSBmcm9tICdkMy1icnVzaCc7XG5pbXBvcnQge25vcm1hbGl6ZVNsaWRlclZhbHVlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgU3R5bGVkRyA9IHN0eWxlZC5nYFxuICAuc2VsZWN0aW9uIHtcbiAgICBzdHJva2U6IG5vbmU7XG4gICAgZmlsbDogJHtwcm9wcyA9PiAocHJvcHMuaXNSYW5nZWQgPyBwcm9wcy50aGVtZS5yYW5nZUJydXNoQmdkIDogcHJvcHMudGhlbWUuQkxVRTIpfTtcbiAgICBmaWxsLW9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzUmFuZ2VkID8gMC4zIDogMSl9O1xuICB9XG4gIC5oYW5kbGUge1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuQkxVRTJ9O1xuICAgIGZpbGwtb3BhY2l0eTogMC4zO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBtb3ZlUmlnaHQoc3RhcnRTZWwsIHNlbGVjdGlvbikge1xuICBjb25zdCBbc3RhcnRTZWwwXSA9IHN0YXJ0U2VsO1xuICBjb25zdCBbc2VsMF0gPSBzZWxlY3Rpb247XG5cbiAgcmV0dXJuIEJvb2xlYW4oc3RhcnRTZWwwID09PSBzZWwwKTtcbn1cbi8vIHN0eWxlIGJydXNoIHJlc2l6ZSBoYW5kbGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jcm9zc2ZpbHRlci9jcm9zc2ZpbHRlci9ibG9iL2doLXBhZ2VzL2luZGV4Lmh0bWwjTDQ2NlxuY29uc3QgZ2V0SGFuZGxlUGF0aCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJydXNoUmVzaXplUGF0aChkKSB7XG4gICAgY29uc3QgZSA9IE51bWJlcihkLnR5cGUgPT09ICdlJyk7XG4gICAgY29uc3QgeCA9IGUgPyAxIDogLTE7XG4gICAgY29uc3QgaCA9IDM5O1xuICAgIGNvbnN0IHcgPSA0LjU7XG4gICAgY29uc3QgeSA9IChwcm9wcy5oZWlnaHQgLSBoKSAvIDI7XG4gICAgcmV0dXJuIGBNJHswLjUgKiB4fSwke3l9YyR7Mi41ICogeH0sMCwke3cgKiB4fSwyLCR7dyAqIHh9LCR7d312JHtoIC0gdyAqIDJ9YzAsMi41LCR7LTIgKlxuICAgICAgeH0sJHt3fSwkey13ICogeH0sJHt3fVYke3l9emA7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBSYW5nZUJydXNoRmFjdG9yeSgpIHtcbiAgY2xhc3MgUmFuZ2VCcnVzaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG9uQnJ1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaXNSYW5nZWQ6IHRydWVcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSBSZWFjdCBhcHAgdG8gcmVzcG9uZCB0byBicnVzaCBzdGF0ZSBhbmQgdmljZS12ZXJzYVxuICAgICAgLy8gYnV0IGQzLWJydXNoIGZpcmVzIHRoZSBzYW1lIGV2ZW50cyBmb3IgYm90aCB1c2VyLWluaXRpYXRlZCBicnVzaGluZ1xuICAgICAgLy8gYW5kIHByb2dyYW1tYXRpYyBicnVzaGluZyAoYnJ1c2gubW92ZSkuIFdlIG5lZWQgdGhlc2UgZmxhZ3MgdG9cbiAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gdGhlIHVzZXMuXG4gICAgICAvL1xuICAgICAgLy8gV2UgZG9uJ3QgdXNlIHN0YXRlIGJlY2F1c2UgdGhhdCB3b3VsZCB0cmlnZ2VyIGFub3RoZXIgYGNvbXBvbmVudERpZFVwZGF0ZWBcbiAgICAgIGNvbnN0IHt0aGVtZSwgaXNSYW5nZWQsIG9uTW91c2VvdmVySGFuZGxlLCBvbk1vdXNlb3V0SGFuZGxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHRoaXMuYnJ1c2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMucm9vdCA9IHNlbGVjdCh0aGlzLnJvb3RDb250YWluZXIuY3VycmVudCk7XG4gICAgICB0aGlzLmJydXNoID0gYnJ1c2hYKClcbiAgICAgICAgLmhhbmRsZVNpemUoMylcbiAgICAgICAgLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25CcnVzaFN0YXJ0ID09PSAnZnVuY3Rpb24nKSB0aGlzLnByb3BzLm9uQnJ1c2hTdGFydCgpO1xuICAgICAgICAgIHRoaXMuX3N0YXJ0U2VsID0gZXZlbnQuc2VsZWN0aW9uO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2JydXNoJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmJydXNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2JydXNoZWQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdlbmQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmJydXNoaW5nICYmIHRoaXMuX3N0YXJ0U2VsICYmICFldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBjbGlja1xuXG4gICAgICAgICAgICB0aGlzLl9jbGljayh0aGlzLl9zdGFydFNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkJydXNoRW5kID09PSAnZnVuY3Rpb24nKSB0aGlzLnByb3BzLm9uQnJ1c2hFbmQoKTtcblxuICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5yb290LmNhbGwodGhpcy5icnVzaCk7XG4gICAgICBjb25zdCBicnVzaFJlc2l6ZVBhdGggPSBnZXRIYW5kbGVQYXRoKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGUgPSB0aGlzLnJvb3RcbiAgICAgICAgLnNlbGVjdEFsbCgnLmhhbmRsZS0tY3VzdG9tJylcbiAgICAgICAgLmRhdGEoW3t0eXBlOiAndyd9LCB7dHlwZTogJ2UnfV0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnaGFuZGxlLS1jdXN0b20nKVxuICAgICAgICAuYXR0cignZGlzcGxheScsIGlzUmFuZ2VkID8gbnVsbCA6ICdub25lJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGVtZSA/IHRoZW1lLnNsaWRlckhhbmRsZUNvbG9yIDogJyNEM0Q4RTAnKVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ2V3LXJlc2l6ZScpXG4gICAgICAgIC5hdHRyKCdkJywgYnJ1c2hSZXNpemVQYXRoKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICBpZiAob25Nb3VzZW92ZXJIYW5kbGUpIG9uTW91c2VvdmVySGFuZGxlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uTW91c2VvdXRIYW5kbGUpIG9uTW91c2VvdXRIYW5kbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IFt2YWwwLCB2YWwxXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IFt2YWwwLCB2YWwxXSxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgW3ByZXZWYWwwLCBwcmV2VmFsMV0gPSBwcmV2UHJvcHMudmFsdWU7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgIC8vIHdpZHRoIGNoYW5nZSBzaG91bGQgbm90IHRyaWdnZXIgdGhpcy5fYnJ1c2hlZFxuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vdC5jYWxsKHRoaXMuYnJ1c2gpO1xuICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuYnJ1c2hpbmcgJiYgIXRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChwcmV2VmFsMCAhPT0gdmFsMCB8fCBwcmV2VmFsMSAhPT0gdmFsMSkge1xuICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc1JhbmdlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZS5hdHRyKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByb290Q29udGFpbmVyID0gY3JlYXRlUmVmKCk7XG5cbiAgICBfY2xpY2soc2VsZWN0aW9uKSB7XG4gICAgICAvLyBmYWtlIGJydXNoXG4gICAgICB0aGlzLmJydXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JydXNoZWQoe3NvdXJjZUV2ZW50OiB7fSwgc2VsZWN0aW9ufSk7XG4gICAgfVxuXG4gICAgX21vdmUodmFsMCwgdmFsMSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICByYW5nZTogW21pbiwgbWF4XSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGlzUmFuZ2VkXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHdpZHRoICYmIG1heCAtIG1pbikge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHggPT4gKCh4IC0gbWluKSAqIHdpZHRoKSAvIChtYXggLSBtaW4pO1xuICAgICAgICBpZiAoIWlzUmFuZ2VkKSB7XG4gICAgICAgICAgLy8gb25seSBkcmF3IGEgMSBwaXhlbCBsaW5lXG4gICAgICAgICAgdGhpcy5icnVzaC5tb3ZlKHRoaXMucm9vdCwgW3NjYWxlKHZhbDApLCBzY2FsZSh2YWwwKSArIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJydXNoLm1vdmUodGhpcy5yb290LCBbc2NhbGUodmFsMCksIHNjYWxlKHZhbDEpXSk7XG5cbiAgICAgICAgICB0aGlzLmhhbmRsZVxuICAgICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBudWxsKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKCR7W2kgPT09IDAgPyBzY2FsZSh2YWwwKSA6IHNjYWxlKHZhbDEpLCAwXX0pYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJ1c2hlZCA9IGV2dCA9PiB7XG4gICAgICAvLyBJZ25vcmUgYnJ1c2ggZXZlbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gdW5kZXJseWluZyBzb3VyY2VFdmVudFxuICAgICAgaWYgKCFldnQuc291cmNlRXZlbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IFtzZWwwLCBzZWwxXSA9IGV2dC5zZWxlY3Rpb247XG4gICAgICBjb25zdCByaWdodCA9IG1vdmVSaWdodCh0aGlzLl9zdGFydFNlbCwgZXZ0LnNlbGVjdGlvbik7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmFuZ2U6IFttaW4sIG1heF0sXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBtYXJrcyxcbiAgICAgICAgaXNSYW5nZWRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaW52ZXJ0ID0geCA9PiAoeCAqIChtYXggLSBtaW4pKSAvIHdpZHRoICsgbWluO1xuICAgICAgbGV0IGQwID0gaW52ZXJ0KHNlbDApO1xuICAgICAgbGV0IGQxID0gaW52ZXJ0KHNlbDEpO1xuXG4gICAgICBkMCA9IG5vcm1hbGl6ZVNsaWRlclZhbHVlKGQwLCBtaW4sIHN0ZXAsIG1hcmtzKTtcbiAgICAgIGQxID0gbm9ybWFsaXplU2xpZGVyVmFsdWUoZDEsIG1pbiwgc3RlcCwgbWFya3MpO1xuXG4gICAgICBpZiAoaXNSYW5nZWQpIHRoaXMuX21vdmUoZDAsIGQxKTtcbiAgICAgIGVsc2UgdGhpcy5fbW92ZSguLi4ocmlnaHQgPyBbZDEsIGQxXSA6IFtkMCwgZDBdKSk7XG5cbiAgICAgIGlmIChpc1JhbmdlZCkgdGhpcy5fb25CcnVzaChkMCwgZDEpO1xuICAgICAgZWxzZSB0aGlzLl9vbkJydXNoKHJpZ2h0ID8gZDEgOiBkMCk7XG4gICAgfTtcblxuICAgIF9vbkJydXNoKHZhbDAsIHZhbDEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNSYW5nZWQsXG4gICAgICAgIHZhbHVlOiBbY3VycmVudFZhbDAsIGN1cnJlbnRWYWwxXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChjdXJyZW50VmFsMCA9PT0gdmFsMCAmJiBjdXJyZW50VmFsMSA9PT0gdmFsMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1JhbmdlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzUmFuZ2VkfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRyBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2JydXNoXCIgaXNSYW5nZWQ9e2lzUmFuZ2VkfSByZWY9e3RoaXMucm9vdENvbnRhaW5lcn0gLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3aXRoVGhlbWUoUmFuZ2VCcnVzaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlQnJ1c2hGYWN0b3J5O1xuIl19