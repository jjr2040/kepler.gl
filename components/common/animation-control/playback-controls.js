"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AnimationWindowControl = exports.IconButton = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../styled-components");

var _animationSpeedSlider = _interopRequireDefault(require("./animation-speed-slider"));

var _icons = require("../icons");

var _constants = require("../../../constants");

var _dataUtils = require("../../../utils/data-utils");

var _DEFAULT_ANIMATE_ITEM;

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: 32px;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 4px;\n  margin-left: 7px;\n  border: 0;\n  padding: 0;\n\n  .__react_component_tooltip {\n    font-family: ", ";\n  }\n  svg {\n    margin: 0;\n  }\n  &.active {\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n\n  .animation-control__speed-slider {\n    left: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n\n  &.disabled {\n    opacity: 0.4;\n    pointer-events: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DELAY_SHOW = 500;
var DEFAULT_BUTTON_HEIGHT = '20px';

var StyledAnimationControls = _styledComponents["default"].div(_templateObject());

var StyledSpeedControl = _styledComponents["default"].div(_templateObject2());

var IconButton = (0, _styledComponents["default"])(_styledComponents2.Button)(_templateObject3(), function (props) {
  return props.collapsed ? 0 : 32;
}, function (props) {
  return props.theme.playbackButtonColor;
}, function (props) {
  return props.theme.playbackButtonBgColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.playbackButtonActBgColor;
});
exports.IconButton = IconButton;

function nop() {}

var DEFAULT_ICONS = {
  /* eslint-disable react/display-name */
  reset: function reset() {
    return /*#__PURE__*/_react["default"].createElement(_icons.Reset, {
      height: "18px"
    });
  },
  play: function play() {
    return /*#__PURE__*/_react["default"].createElement(_icons.Play, {
      height: "18px"
    });
  },
  pause: function pause() {
    return /*#__PURE__*/_react["default"].createElement(_icons.Pause, {
      height: "18px"
    });
  },

  /* eslint-enable react/display-name */
  speed: _icons.Rocket,
  animationFree: _icons.FreeWindow,
  animationIncremental: _icons.AnchorWindow
};
var DEFAULT_ANIMATE_ITEMS = (_DEFAULT_ANIMATE_ITEM = {}, (0, _defineProperty2["default"])(_DEFAULT_ANIMATE_ITEM, _constants.ANIMATION_WINDOW.free, {
  id: _constants.ANIMATION_WINDOW.free,
  icon: DEFAULT_ICONS.animationFree,
  tooltip: 'tooltip.animationByWindow'
}), (0, _defineProperty2["default"])(_DEFAULT_ANIMATE_ITEM, _constants.ANIMATION_WINDOW.incremental, {
  id: _constants.ANIMATION_WINDOW.incremental,
  icon: DEFAULT_ICONS.animationIncremental,
  tooltip: 'tooltip.animationByIncremental'
}), _DEFAULT_ANIMATE_ITEM);

var AnimationWindowControl = function AnimationWindowControl(_ref) {
  var _onClick = _ref.onClick,
      selected = _ref.selected,
      onHide = _ref.onHide,
      height = _ref.height,
      animationItems = _ref.animationItems,
      _ref$btnStyle = _ref.btnStyle,
      btnStyle = _ref$btnStyle === void 0 ? {} : _ref$btnStyle;
  return /*#__PURE__*/_react["default"].createElement("div", null, Object.values(animationItems).filter(function (item) {
    return item.id !== selected;
  }).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      key: item.id,
      "data-tip": true,
      "data-for": "".concat(item.id, "-tooltip"),
      className: "playback-control-button",
      onClick: function onClick() {
        _onClick(item.id);

        onHide();
      }
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(item.icon, {
      height: height
    }), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "".concat(item.id, "-tooltip"),
      effect: "solid",
      place: "top"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: item.tooltip
    })) : null);
  }));
};

exports.AnimationWindowControl = AnimationWindowControl;
PlaybackControlsFactory.deps = [_animationSpeedSlider["default"]];

function PlaybackControlsFactory(AnimationSpeedSlider) {
  // eslint-disable-next-line complexity
  var PlaybackControls = function PlaybackControls(_ref2) {
    var _ref2$isAnimatable = _ref2.isAnimatable,
        isAnimatable = _ref2$isAnimatable === void 0 ? true : _ref2$isAnimatable,
        isAnimating = _ref2.isAnimating,
        width = _ref2.width,
        speed = _ref2.speed,
        _ref2$animationWindow = _ref2.animationWindow,
        animationWindow = _ref2$animationWindow === void 0 ? _constants.ANIMATION_WINDOW.free : _ref2$animationWindow,
        setFilterAnimationWindow = _ref2.setFilterAnimationWindow,
        updateAnimationSpeed = _ref2.updateAnimationSpeed,
        _ref2$pauseAnimation = _ref2.pauseAnimation,
        pauseAnimation = _ref2$pauseAnimation === void 0 ? nop : _ref2$pauseAnimation,
        _ref2$resetAnimation = _ref2.resetAnimation,
        resetAnimation = _ref2$resetAnimation === void 0 ? nop : _ref2$resetAnimation,
        _ref2$startAnimation = _ref2.startAnimation,
        startAnimation = _ref2$startAnimation === void 0 ? nop : _ref2$startAnimation,
        _ref2$playbackIcons = _ref2.playbackIcons,
        playbackIcons = _ref2$playbackIcons === void 0 ? DEFAULT_ICONS : _ref2$playbackIcons,
        _ref2$animationItems = _ref2.animationItems,
        animationItems = _ref2$animationItems === void 0 ? DEFAULT_ANIMATE_ITEMS : _ref2$animationItems,
        _ref2$buttonStyle = _ref2.buttonStyle,
        buttonStyle = _ref2$buttonStyle === void 0 ? 'secondary' : _ref2$buttonStyle,
        _ref2$buttonHeight = _ref2.buttonHeight,
        buttonHeight = _ref2$buttonHeight === void 0 ? DEFAULT_BUTTON_HEIGHT : _ref2$buttonHeight;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        showSpeedControl = _useState2[0],
        toggleSpeedControl = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        showAnimationWindowControl = _useState4[0],
        setShowAnimationWindowControl = _useState4[1];

    var toggleAnimationWindowControl = (0, _react.useCallback)(function () {
      setShowAnimationWindowControl(!showAnimationWindowControl);
    }, [showAnimationWindowControl, setShowAnimationWindowControl]);
    var btnStyle = buttonStyle ? (0, _defineProperty2["default"])({}, buttonStyle, true) : {};
    return /*#__PURE__*/_react["default"].createElement(StyledAnimationControls, {
      className: (0, _classnames["default"])('playback-controls', {
        disabled: !isAnimatable
      }),
      style: {
        width: "".concat(width, "px")
      }
    }, setFilterAnimationWindow ? /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-window",
      className: (0, _classnames["default"])('playback-control-button', {
        active: showAnimationWindowControl
      }),
      onClick: toggleAnimationWindowControl
    }, btnStyle), function () {
      if (animationItems[animationWindow]) {
        return /*#__PURE__*/_react["default"].createElement(animationItems[animationWindow].icon, {
          height: buttonHeight
        });
      }

      return null;
    }(), animationItems[animationWindow] && animationItems[animationWindow].tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-window",
      place: "top",
      delayShow: 500,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: animationItems[animationWindow].tooltip
    })) : null) : null, showAnimationWindowControl ? /*#__PURE__*/_react["default"].createElement(AnimationWindowControl, {
      onClick: setFilterAnimationWindow,
      selected: animationWindow,
      onHide: toggleAnimationWindowControl,
      height: buttonHeight,
      btnStyle: btnStyle,
      animationItems: animationItems
    }) : null, showAnimationWindowControl || !updateAnimationSpeed ? null : /*#__PURE__*/_react["default"].createElement(StyledSpeedControl, {
      onClick: function onClick() {
        toggleSpeedControl(!showSpeedControl);
      }
    }, /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-speed",
      className: "playback-control-button",
      onClick: nop
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(playbackIcons.speed, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-speed",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _dataUtils.preciseRound)(speed, 1), "x"))), showSpeedControl ? /*#__PURE__*/_react["default"].createElement(AnimationSpeedSlider, {
      onHide: function onHide() {
        toggleSpeedControl(false);
      },
      updateAnimationSpeed: updateAnimationSpeed,
      speed: speed
    }) : null), showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-reset",
      className: "playback-control-button",
      onClick: resetAnimation
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(playbackIcons.reset, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-reset",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "tooltip.reset"
    }))), showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-play-pause",
      className: (0, _classnames["default"])('playback-control-button', {
        active: isAnimating
      }),
      onClick: isAnimating ? pauseAnimation : startAnimation,
      hide: showSpeedControl
    }, btnStyle), isAnimating ? /*#__PURE__*/_react["default"].createElement(playbackIcons.pause, {
      height: buttonHeight
    }) : /*#__PURE__*/_react["default"].createElement(playbackIcons.play, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-play-pause",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: isAnimating ? 'tooltip.pause' : 'tooltip.play'
    }))));
  };

  return PlaybackControls;
}

var _default = PlaybackControlsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9wbGF5YmFjay1jb250cm9scy5qcyJdLCJuYW1lcyI6WyJERUxBWV9TSE9XIiwiREVGQVVMVF9CVVRUT05fSEVJR0hUIiwiU3R5bGVkQW5pbWF0aW9uQ29udHJvbHMiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRTcGVlZENvbnRyb2wiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwicHJvcHMiLCJjb2xsYXBzZWQiLCJ0aGVtZSIsInBsYXliYWNrQnV0dG9uQ29sb3IiLCJwbGF5YmFja0J1dHRvbkJnQ29sb3IiLCJmb250RmFtaWx5IiwicGxheWJhY2tCdXR0b25BY3RCZ0NvbG9yIiwibm9wIiwiREVGQVVMVF9JQ09OUyIsInJlc2V0IiwicGxheSIsInBhdXNlIiwic3BlZWQiLCJSb2NrZXQiLCJhbmltYXRpb25GcmVlIiwiRnJlZVdpbmRvdyIsImFuaW1hdGlvbkluY3JlbWVudGFsIiwiQW5jaG9yV2luZG93IiwiREVGQVVMVF9BTklNQVRFX0lURU1TIiwiQU5JTUFUSU9OX1dJTkRPVyIsImZyZWUiLCJpZCIsImljb24iLCJ0b29sdGlwIiwiaW5jcmVtZW50YWwiLCJBbmltYXRpb25XaW5kb3dDb250cm9sIiwib25DbGljayIsInNlbGVjdGVkIiwib25IaWRlIiwiaGVpZ2h0IiwiYW5pbWF0aW9uSXRlbXMiLCJidG5TdHlsZSIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJtYXAiLCJQbGF5YmFja0NvbnRyb2xzRmFjdG9yeSIsImRlcHMiLCJBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkiLCJBbmltYXRpb25TcGVlZFNsaWRlciIsIlBsYXliYWNrQ29udHJvbHMiLCJpc0FuaW1hdGFibGUiLCJpc0FuaW1hdGluZyIsIndpZHRoIiwiYW5pbWF0aW9uV2luZG93Iiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJwYXVzZUFuaW1hdGlvbiIsInJlc2V0QW5pbWF0aW9uIiwic3RhcnRBbmltYXRpb24iLCJwbGF5YmFja0ljb25zIiwiYnV0dG9uU3R5bGUiLCJidXR0b25IZWlnaHQiLCJzaG93U3BlZWRDb250cm9sIiwidG9nZ2xlU3BlZWRDb250cm9sIiwic2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJzZXRTaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCIsInRvZ2dsZUFuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJkaXNhYmxlZCIsImFjdGl2ZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLE1BQTlCOztBQUVBLElBQU1DLHVCQUF1QixHQUFHQyw2QkFBT0MsR0FBVixtQkFBN0I7O0FBVUEsSUFBTUMsa0JBQWtCLEdBQUdGLDZCQUFPQyxHQUFWLG9CQUF4Qjs7QUFTTyxJQUFNRSxVQUFVLEdBQUcsa0NBQU9DLHlCQUFQLENBQUgscUJBQ1osVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixDQUFsQixHQUFzQixFQUEzQjtBQUFBLENBRE8sRUFHWixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLG1CQUFoQjtBQUFBLENBSE8sRUFJRCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBSkosRUFXSixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlHLFVBQWhCO0FBQUEsQ0FYRCxFQWlCQyxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlJ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cUI7QUFBdEQsTUFERixDQWJGLENBM0ZKLENBREY7QUFnSEQsR0F2SUQ7O0FBd0lBLFNBQU9GLGdCQUFQO0FBQ0Q7O2VBRWNKLHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtCdXR0b24sIFRvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkgZnJvbSAnLi9hbmltYXRpb24tc3BlZWQtc2xpZGVyJztcbmltcG9ydCB7UmVzZXQsIFBsYXksIFBhdXNlLCBSb2NrZXQsIEFuY2hvcldpbmRvdywgRnJlZVdpbmRvd30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtBTklNQVRJT05fV0lORE9XfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IHtwcmVjaXNlUm91bmR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBERUxBWV9TSE9XID0gNTAwO1xuY29uc3QgREVGQVVMVF9CVVRUT05fSEVJR0hUID0gJzIwcHgnO1xuXG5jb25zdCBTdHlsZWRBbmltYXRpb25Db250cm9scyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNwZWVkQ29udHJvbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1zbGlkZXIge1xuICAgIGxlZnQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5jb2xsYXBzZWQgPyAwIDogMzIpfXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBsYXliYWNrQnV0dG9uQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBsYXliYWNrQnV0dG9uQmdDb2xvcn07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIC5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgfVxuICBzdmcge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wbGF5YmFja0J1dHRvbkFjdEJnQ29sb3J9O1xuICB9XG5gO1xuXG5mdW5jdGlvbiBub3AoKSB7fVxuY29uc3QgREVGQVVMVF9JQ09OUyA9IHtcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXG4gIHJlc2V0OiAoKSA9PiA8UmVzZXQgaGVpZ2h0PVwiMThweFwiIC8+LFxuICBwbGF5OiAoKSA9PiA8UGxheSBoZWlnaHQ9XCIxOHB4XCIgLz4sXG4gIHBhdXNlOiAoKSA9PiA8UGF1c2UgaGVpZ2h0PVwiMThweFwiIC8+LFxuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xuICBzcGVlZDogUm9ja2V0LFxuICBhbmltYXRpb25GcmVlOiBGcmVlV2luZG93LFxuICBhbmltYXRpb25JbmNyZW1lbnRhbDogQW5jaG9yV2luZG93XG59O1xuXG5jb25zdCBERUZBVUxUX0FOSU1BVEVfSVRFTVMgPSB7XG4gIFtBTklNQVRJT05fV0lORE9XLmZyZWVdOiB7XG4gICAgaWQ6IEFOSU1BVElPTl9XSU5ET1cuZnJlZSxcbiAgICBpY29uOiBERUZBVUxUX0lDT05TLmFuaW1hdGlvbkZyZWUsXG4gICAgdG9vbHRpcDogJ3Rvb2x0aXAuYW5pbWF0aW9uQnlXaW5kb3cnXG4gIH0sXG4gIFtBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsXToge1xuICAgIGlkOiBBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsLFxuICAgIGljb246IERFRkFVTFRfSUNPTlMuYW5pbWF0aW9uSW5jcmVtZW50YWwsXG4gICAgdG9vbHRpcDogJ3Rvb2x0aXAuYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCdcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbldpbmRvd0NvbnRyb2wgPSAoe1xuICBvbkNsaWNrLFxuICBzZWxlY3RlZCxcbiAgb25IaWRlLFxuICBoZWlnaHQsXG4gIGFuaW1hdGlvbkl0ZW1zLFxuICBidG5TdHlsZSA9IHt9XG59KSA9PiAoXG4gIDxkaXY+XG4gICAge09iamVjdC52YWx1ZXMoYW5pbWF0aW9uSXRlbXMpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gc2VsZWN0ZWQpXG4gICAgICAubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgIGRhdGEtZm9yPXtgJHtpdGVtLmlkfS10b29sdGlwYH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5YmFjay1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgb25DbGljayhpdGVtLmlkKTtcbiAgICAgICAgICAgIG9uSGlkZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLmJ0blN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgPGl0ZW0uaWNvbiBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgICB7aXRlbS50b29sdGlwID8gKFxuICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LXRvb2x0aXBgfSBlZmZlY3Q9XCJzb2xpZFwiIHBsYWNlPVwidG9wXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtpdGVtLnRvb2x0aXB9IC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICkpfVxuICA8L2Rpdj5cbik7XG5cblBsYXliYWNrQ29udHJvbHNGYWN0b3J5LmRlcHMgPSBbQW5pbWF0aW9uU3BlZWRTbGlkZXJGYWN0b3J5XTtcbmZ1bmN0aW9uIFBsYXliYWNrQ29udHJvbHNGYWN0b3J5KEFuaW1hdGlvblNwZWVkU2xpZGVyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGNvbnN0IFBsYXliYWNrQ29udHJvbHMgPSAoe1xuICAgIGlzQW5pbWF0YWJsZSA9IHRydWUsXG4gICAgaXNBbmltYXRpbmcsXG4gICAgd2lkdGgsXG4gICAgc3BlZWQsXG4gICAgYW5pbWF0aW9uV2luZG93ID0gQU5JTUFUSU9OX1dJTkRPVy5mcmVlLFxuICAgIHNldEZpbHRlckFuaW1hdGlvbldpbmRvdyxcbiAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICBwYXVzZUFuaW1hdGlvbiA9IG5vcCxcbiAgICByZXNldEFuaW1hdGlvbiA9IG5vcCxcbiAgICBzdGFydEFuaW1hdGlvbiA9IG5vcCxcbiAgICBwbGF5YmFja0ljb25zID0gREVGQVVMVF9JQ09OUyxcbiAgICBhbmltYXRpb25JdGVtcyA9IERFRkFVTFRfQU5JTUFURV9JVEVNUyxcbiAgICBidXR0b25TdHlsZSA9ICdzZWNvbmRhcnknLFxuICAgIGJ1dHRvbkhlaWdodCA9IERFRkFVTFRfQlVUVE9OX0hFSUdIVFxuICB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dTcGVlZENvbnRyb2wsIHRvZ2dsZVNwZWVkQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dBbmltYXRpb25XaW5kb3dDb250cm9sLCBzZXRTaG93QW5pbWF0aW9uV2luZG93Q29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldFNob3dBbmltYXRpb25XaW5kb3dDb250cm9sKCFzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCk7XG4gICAgfSwgW3Nob3dBbmltYXRpb25XaW5kb3dDb250cm9sLCBzZXRTaG93QW5pbWF0aW9uV2luZG93Q29udHJvbF0pO1xuICAgIGNvbnN0IGJ0blN0eWxlID0gYnV0dG9uU3R5bGUgPyB7W2J1dHRvblN0eWxlXTogdHJ1ZX0gOiB7fTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkQW5pbWF0aW9uQ29udHJvbHNcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwbGF5YmFjay1jb250cm9scycsIHtcbiAgICAgICAgICBkaXNhYmxlZDogIWlzQW5pbWF0YWJsZVxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cbiAgICAgID5cbiAgICAgICAgey8qKiBXaW5kb3cgKi99XG4gICAgICAgIHtzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3cgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgICBkYXRhLWZvcj1cImFuaW1hdGUtd2luZG93XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncGxheWJhY2stY29udHJvbC1idXR0b24nLCB7YWN0aXZlOiBzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbH0pfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbH1cbiAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkl0ZW1zW2FuaW1hdGlvbldpbmRvd10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChhbmltYXRpb25JdGVtc1thbmltYXRpb25XaW5kb3ddLmljb24sIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAge2FuaW1hdGlvbkl0ZW1zW2FuaW1hdGlvbldpbmRvd10gJiYgYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS50b29sdGlwID8gKFxuICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cImFuaW1hdGUtd2luZG93XCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9ezUwMH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS50b29sdGlwfSAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHtzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCA/IChcbiAgICAgICAgICA8QW5pbWF0aW9uV2luZG93Q29udHJvbFxuICAgICAgICAgICAgb25DbGljaz17c2V0RmlsdGVyQW5pbWF0aW9uV2luZG93fVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2FuaW1hdGlvbldpbmRvd31cbiAgICAgICAgICAgIG9uSGlkZT17dG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbH1cbiAgICAgICAgICAgIGhlaWdodD17YnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgYnRuU3R5bGU9e2J0blN0eWxlfVxuICAgICAgICAgICAgYW5pbWF0aW9uSXRlbXM9e2FuaW1hdGlvbkl0ZW1zfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHsvKiogU3BlZWQgKi99XG4gICAgICAgIHtzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCB8fCAhdXBkYXRlQW5pbWF0aW9uU3BlZWQgPyBudWxsIDogKFxuICAgICAgICAgIDxTdHlsZWRTcGVlZENvbnRyb2xcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlU3BlZWRDb250cm9sKCFzaG93U3BlZWRDb250cm9sKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICAgICAgZGF0YS1mb3I9XCJhbmltYXRlLXNwZWVkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheWJhY2stY29udHJvbC1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtub3B9XG4gICAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBsYXliYWNrSWNvbnMuc3BlZWQgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XG4gICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiYW5pbWF0ZS1zcGVlZFwiIHBsYWNlPVwidG9wXCIgZGVsYXlTaG93PXtERUxBWV9TSE9XfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntwcmVjaXNlUm91bmQoc3BlZWQsIDEpfXg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIHtzaG93U3BlZWRDb250cm9sID8gKFxuICAgICAgICAgICAgICA8QW5pbWF0aW9uU3BlZWRTbGlkZXJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVNwZWVkQ29udHJvbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgICAgICAgc3BlZWQ9e3NwZWVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9TdHlsZWRTcGVlZENvbnRyb2w+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qKiBSZXNldCAqL31cbiAgICAgICAge3Nob3dBbmltYXRpb25XaW5kb3dDb250cm9sID8gbnVsbCA6IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICAgIGRhdGEtZm9yPVwiYW5pbWF0ZS1yZXNldFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5YmFjay1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtyZXNldEFuaW1hdGlvbn1cbiAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGxheWJhY2tJY29ucy5yZXNldCBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz5cbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiYW5pbWF0ZS1yZXNldFwiIHBsYWNlPVwidG9wXCIgZGVsYXlTaG93PXtERUxBWV9TSE9XfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInRvb2x0aXAucmVzZXRcIiAvPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyoqIFBsYXkgYW5kIHBhdXNlICovfVxuICAgICAgICB7c2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wgPyBudWxsIDogKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgZGF0YS1mb3I9XCJhbmltYXRlLXBsYXktcGF1c2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwbGF5YmFjay1jb250cm9sLWJ1dHRvbicsIHthY3RpdmU6IGlzQW5pbWF0aW5nfSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtpc0FuaW1hdGluZyA/IHBhdXNlQW5pbWF0aW9uIDogc3RhcnRBbmltYXRpb259XG4gICAgICAgICAgICBoaWRlPXtzaG93U3BlZWRDb250cm9sfVxuICAgICAgICAgICAgey4uLmJ0blN0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0FuaW1hdGluZyA/IChcbiAgICAgICAgICAgICAgPHBsYXliYWNrSWNvbnMucGF1c2UgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cGxheWJhY2tJY29ucy5wbGF5IGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiYW5pbWF0ZS1wbGF5LXBhdXNlXCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9e0RFTEFZX1NIT1d9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtpc0FuaW1hdGluZyA/ICd0b29sdGlwLnBhdXNlJyA6ICd0b29sdGlwLnBsYXknfSAvPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkQW5pbWF0aW9uQ29udHJvbHM+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIFBsYXliYWNrQ29udHJvbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXliYWNrQ29udHJvbHNGYWN0b3J5O1xuIl19