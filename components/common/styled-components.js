"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMark = exports.TruncatedTitleText = exports.StyledFilterContent = exports.MapControlButton = exports.BottomWidgetInner = exports.WidgetContainer = exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledAttrbution = exports.StyledMapContainer = exports.StyledModalInputFootnote = exports.StyledModalSection = exports.StyledModalVerticalPanel = exports.StyledModalContent = exports.Table = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.TextAreaLight = exports.TextArea = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.SBFlexboxNoMargin = exports.SBFlexboxItem = exports.SpaceBetweenFlexbox = exports.CenterVerticalFlexbox = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _mediaBreakpoints = require("../../styles/media-breakpoints");

var _classnames = _interopRequireDefault(require("classnames"));

function _templateObject48() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-top-left-radius: 2px;\n\n  :after {\n    position: absolute;\n    display: table;\n    border: 1px solid #fff;\n    border-top: 0;\n    border-left: 0;\n    transform: rotate(45deg) scale(1) translate(-50%, -50%);\n    opacity: 1;\n    content: ' ';\n    top: 40%;\n    left: 30%;\n    width: 3.2px;\n    height: 6.22px;\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  border-radius: 0;\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n  }\n  svg {\n    margin-right: 0;\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: ", ";\n  position: relative;\n  margin-top: ", "px;\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 1;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  .filter-option-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filter-option-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n  color: ", ";\n  font-size: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n\n  .description {\n    width: 185px;\n    .title {\n      font-weight: 500;\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n  .warning {\n    color: ", ";\n    font-weight: 500;\n  }\n  .description.full {\n    width: 100%;\n  }\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image: linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image: linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  display: block;\n  margin: 0 10px 2px;\n  z-index: 0;\n\n  .attrition-logo {\n    display: flex;\n    font-size: 10px;\n    justify-content: flex-end;\n    align-items: center;\n    color: ", ";\n    margin-bottom: -4px;\n\n    a.mapboxgl-ctrl-logo {\n      width: 72px;\n      margin-left: 6px;\n    }\n  }\n  a {\n    font-size: 10px;\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-map {\n    .mapboxgl-missing-css {\n      display: none;\n    }\n    .mapboxgl-ctrl-attrib {\n      display: none;\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  color: ", ";\n  font-size: 10px;\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n\n  .modal-section-title {\n    font-weight: 500;\n  }\n  .modal-section-subtitle {\n    color: ", ";\n  }\n\n  input {\n    margin-top: 8px;\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 0;\n    "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n\n  .modal-section:first-child {\n    margin-top: 24px;\n    ", ";\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    padding: 16px ", ";\n    margin: 0 -", ";\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  padding: 24px ", ";\n  margin: 0 -", ";\n  justify-content: space-between;\n  ", ";\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n    tr td {\n      border-bottom: ", ";\n      padding: 12px;\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  background-color: ", ";\n\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 16px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(", ");\n  margin-right: 12px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ", ";\n  transition: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " height: auto;\n  white-space: pre-wrap;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  font-family: ", ";\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  border: ", ";\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: ", ";\n    font-weight: 400;\n    padding: 7px 18px;\n    box-shadow: ", ";\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: ", " solid\n    ", ";\n  margin-bottom: ", "px;\n  height: ", "px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-left: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: -16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", ";\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectText = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});

exports.SelectText = SelectText;
var SelectTextBold = (0, _styledComponents["default"])(SelectText)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
exports.SelectTextBold = SelectTextBold;

var IconRoundSmall = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});

exports.IconRoundSmall = IconRoundSmall;

var CenterFlexbox = _styledComponents["default"].div(_templateObject4());

exports.CenterFlexbox = CenterFlexbox;

var CenterVerticalFlexbox = _styledComponents["default"].div(_templateObject5());

exports.CenterVerticalFlexbox = CenterVerticalFlexbox;

var SpaceBetweenFlexbox = _styledComponents["default"].div(_templateObject6());

exports.SpaceBetweenFlexbox = SpaceBetweenFlexbox;

var SBFlexboxItem = _styledComponents["default"].div(_templateObject7());

exports.SBFlexboxItem = SBFlexboxItem;

var SBFlexboxNoMargin = _styledComponents["default"].div(_templateObject8());

exports.SBFlexboxNoMargin = SBFlexboxNoMargin;

var PanelLabel = _styledComponents["default"].label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject9(), function (props) {
  return props.theme.labelColor;
});

exports.PanelLabel = PanelLabel;

var PanelLabelWrapper = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject10());

exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = (0, _styledComponents["default"])(PanelLabel)(_templateObject11());
exports.PanelLabelBold = PanelLabelBold;

var PanelHeaderTitle = _styledComponents["default"].span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject12(), function (props) {
  return props.theme.textColor;
});

exports.PanelHeaderTitle = PanelHeaderTitle;

var PanelHeaderContent = _styledComponents["default"].div(_templateObject13(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});

exports.PanelHeaderContent = PanelHeaderContent;

var PanelContent = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject14(), function (props) {
  return props.theme.panelContentBackground;
});

exports.PanelContent = PanelContent;

var SidePanelSection = _styledComponents["default"].div.attrs({
  className: 'side-panel-section'
})(_templateObject15(), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

exports.SidePanelSection = SidePanelSection;

var SidePanelDivider = _styledComponents["default"].div.attrs({
  className: 'side-panel-divider'
})(_templateObject16(), function (props) {
  return props.theme.sidepanelDividerBorder;
}, function (props) {
  return props.theme.panelBorderColor;
}, function (props) {
  return props.theme.sidepanelDividerMargin;
}, function (props) {
  return props.theme.sidepanelDividerHeight;
});

exports.SidePanelDivider = SidePanelDivider;
var Tooltip = (0, _styledComponents["default"])(_reactTooltip["default"])(_templateObject17(), function (props) {
  return props.theme.tooltipFontSize;
}, function (props) {
  return props.theme.tooltipBoxShadow;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});
exports.Tooltip = Tooltip;

var Button = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('button', props.className)
  };
})(_templateObject18(), function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.floating ? props.theme.floatingBtnBgd : props.cta ? props.theme.ctaBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.floating ? props.theme.floatingBtnColor : props.cta ? props.theme.ctaBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? props.theme.primaryBtnFontSizeLarge : props.small ? props.theme.primaryBtnFontSizeSmall : props.theme.primaryBtnFontSizeDefault;
}, function (props) {
  return props.theme.btnFontFamily;
}, function (props) {
  return props.large ? '14px 32px' : props.small ? '6px 9px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.secondary ? props.theme.secondaryBtnBorder : props.floating ? props.theme.floatingBtnBorder : props.link ? props.theme.linkBtnBorder : props.theme.primaryBtnBorder;
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.floating ? props.theme.floatingBtnBgdHover : props.cta ? props.theme.ctaBtnBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.floating ? props.theme.floatingBtnActColor : props.cta ? props.theme.ctaBtnActColor : props.theme.primaryBtnActColor;
}, function (props) {
  return props.large ? '10px' : props.small ? '6px' : '8px';
});

exports.Button = Button;

var Input = _styledComponents["default"].input(_templateObject19(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.Input = Input;

var InputLight = _styledComponents["default"].input(_templateObject20(), function (props) {
  return props.theme.inputLT;
});

exports.InputLight = InputLight;

var TextArea = _styledComponents["default"].textarea(_templateObject21(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.TextArea = TextArea;

var TextAreaLight = _styledComponents["default"].textarea(_templateObject22(), function (props) {
  return props.theme.inputLT;
});

exports.TextAreaLight = TextAreaLight;
var InlineInput = (0, _styledComponents["default"])(Input)(_templateObject23(), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;

var StyledPanelHeader = _styledComponents["default"].div(_templateObject24(), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.panelHeaderBorderRadius;
}, function (props) {
  return props.theme.transition;
});

exports.StyledPanelHeader = StyledPanelHeader;

var StyledPanelDropdown = _styledComponents["default"].div(_templateObject25(), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.type === 'light' ? props.theme.modalDropdownBackground : props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});

exports.StyledPanelDropdown = StyledPanelDropdown;

var ButtonGroup = _styledComponents["default"].div(_templateObject26(), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});

exports.ButtonGroup = ButtonGroup;

var DatasetSquare = _styledComponents["default"].div(_templateObject27(), function (props) {
  return props.color.join(',');
});

exports.DatasetSquare = DatasetSquare;

var SelectionButton = _styledComponents["default"].div(_templateObject28(), function (props) {
  return props.selected ? props.theme.selectionBtnBorderActColor : props.theme.selectionBtnBorderColor;
}, function (props) {
  return props.selected ? props.theme.selectionBtnActColor : props.theme.selectionBtnColor;
}, function (props) {
  return props.selected ? props.theme.selectionBtnActBgd : props.theme.selectionBtnBgd;
}, function (props) {
  return props.theme.selectionBtnActColor;
}, function (props) {
  return props.theme.selectionBtnBorderActColor;
});

exports.SelectionButton = SelectionButton;

var Table = _styledComponents["default"].table(_templateObject29(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});

exports.Table = Table;

var StyledModalContent = _styledComponents["default"].div(_templateObject30(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.modalLateralPadding;
}, function (props) {
  return props.theme.modalLateralPadding;
}, _mediaBreakpoints.media.portable(_templateObject31(), function (props) {
  return props.theme.modalPortableLateralPadding;
}, function (props) {
  return props.theme.modalPortableLateralPadding;
}));

exports.StyledModalContent = StyledModalContent;

var StyledModalVerticalPanel = _styledComponents["default"].div.attrs({
  className: 'modal-vertical-panel'
})(_templateObject32(), _mediaBreakpoints.media.palm(_templateObject33()));

exports.StyledModalVerticalPanel = StyledModalVerticalPanel;

var StyledModalSection = _styledComponents["default"].div.attrs({
  className: 'modal-section'
})(_templateObject34(), function (props) {
  return props.theme.subtextColorLT;
}, _mediaBreakpoints.media.portable(_templateObject35()), _mediaBreakpoints.media.palm(_templateObject36()));

exports.StyledModalSection = StyledModalSection;

var StyledModalInputFootnote = _styledComponents["default"].div.attrs({
  className: 'modal-input__footnote'
})(_templateObject37(), function (props) {
  return props.error ? props.theme.errorColor : props.theme.subtextColorLT;
});
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */


exports.StyledModalInputFootnote = StyledModalInputFootnote;

var StyledMapContainer = _styledComponents["default"].div(_templateObject38());

exports.StyledMapContainer = StyledMapContainer;

var StyledAttrbution = _styledComponents["default"].div.attrs({
  className: 'mapbox-attribution-container'
})(_templateObject39(), function (props) {
  return props.theme.labelColor;
});

exports.StyledAttrbution = StyledAttrbution;

var StyledExportSection = _styledComponents["default"].div(_templateObject40(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.disabled ? 0.3 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.errorColor;
});

exports.StyledExportSection = StyledExportSection;
var StyledFilteredOption = (0, _styledComponents["default"])(SelectionButton)(_templateObject41(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.subtextColorLT;
});
exports.StyledFilteredOption = StyledFilteredOption;
var StyledType = (0, _styledComponents["default"])(SelectionButton)(_templateObject42());
exports.StyledType = StyledType;

var WidgetContainer = _styledComponents["default"].div(_templateObject43());

exports.WidgetContainer = WidgetContainer;

var BottomWidgetInner = _styledComponents["default"].div(_templateObject44(), function (props) {
  return props.theme.bottomWidgetBgd;
}, function (props) {
  return "".concat(props.theme.bottomInnerPdVert, "px ").concat(props.theme.bottomInnerPdSide, "px");
}, function (props) {
  return props.theme.bottomPanelGap;
});

exports.BottomWidgetInner = BottomWidgetInner;
var MapControlButton = (0, _styledComponents["default"])(Button).attrs({
  className: 'map-control-button'
})(_templateObject45(), function (props) {
  return props.active ? props.theme.floatingBtnBgdHover : props.theme.floatingBtnBgd;
}, function (props) {
  return props.active ? props.theme.floatingBtnActColor : props.theme.floatingBtnColor;
}, function (props) {
  return props.active ? props.theme.floatingBtnBorderHover : props.theme.floatingBtnBorder;
}, function (props) {
  return props.theme.floatingBtnBgdHover;
}, function (props) {
  return props.theme.floatingBtnActColor;
}, function (props) {
  return props.theme.floatingBtnBorderHover;
});
exports.MapControlButton = MapControlButton;

var StyledFilterContent = _styledComponents["default"].div(_templateObject46(), function (props) {
  return props.theme.panelContentBackground;
});

exports.StyledFilterContent = StyledFilterContent;

var TruncatedTitleText = _styledComponents["default"].div(_templateObject47());

exports.TruncatedTitleText = TruncatedTitleText;

var CheckMark = _styledComponents["default"].span.attrs({
  className: 'checkbox-inner'
})(_templateObject48(), function (props) {
  return props.theme.selectionBtnBorderActColor;
});

exports.CheckMark = CheckMark;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJDZW50ZXJWZXJ0aWNhbEZsZXhib3giLCJTcGFjZUJldHdlZW5GbGV4Ym94IiwiU0JGbGV4Ym94SXRlbSIsIlNCRmxleGJveE5vTWFyZ2luIiwiUGFuZWxMYWJlbCIsImxhYmVsIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJQYW5lbExhYmVsV3JhcHBlciIsIlBhbmVsTGFiZWxCb2xkIiwiUGFuZWxIZWFkZXJUaXRsZSIsIlBhbmVsSGVhZGVyQ29udGVudCIsIlBhbmVsQ29udGVudCIsInBhbmVsQ29udGVudEJhY2tncm91bmQiLCJTaWRlUGFuZWxTZWN0aW9uIiwiZGlzYWJsZWQiLCJTaWRlUGFuZWxEaXZpZGVyIiwic2lkZXBhbmVsRGl2aWRlckJvcmRlciIsInBhbmVsQm9yZGVyQ29sb3IiLCJzaWRlcGFuZWxEaXZpZGVyTWFyZ2luIiwic2lkZXBhbmVsRGl2aWRlckhlaWdodCIsIlRvb2x0aXAiLCJSZWFjdFRvb2x0aXAiLCJ0b29sdGlwRm9udFNpemUiLCJ0b29sdGlwQm94U2hhZG93IiwidG9vbHRpcEJnIiwidG9vbHRpcENvbG9yIiwiQnV0dG9uIiwibmVnYXRpdmUiLCJuZWdhdGl2ZUJ0bkJnZCIsInNlY29uZGFyeSIsInNlY29uZGFyeUJ0bkJnZCIsImxpbmsiLCJsaW5rQnRuQmdkIiwiZmxvYXRpbmciLCJmbG9hdGluZ0J0bkJnZCIsImN0YSIsImN0YUJ0bkJnZCIsInByaW1hcnlCdG5CZ2QiLCJwcmltYXJ5QnRuUmFkaXVzIiwibmVnYXRpdmVCdG5Db2xvciIsImxpbmtCdG5Db2xvciIsImZsb2F0aW5nQnRuQ29sb3IiLCJjdGFCdG5Db2xvciIsInByaW1hcnlCdG5Db2xvciIsImxhcmdlIiwicHJpbWFyeUJ0bkZvbnRTaXplTGFyZ2UiLCJzbWFsbCIsInByaW1hcnlCdG5Gb250U2l6ZVNtYWxsIiwicHJpbWFyeUJ0bkZvbnRTaXplRGVmYXVsdCIsImJ0bkZvbnRGYW1pbHkiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJzZWNvbmRhcnlCdG5Cb3JkZXIiLCJmbG9hdGluZ0J0bkJvcmRlciIsImxpbmtCdG5Cb3JkZXIiLCJwcmltYXJ5QnRuQm9yZGVyIiwibmVnYXRpdmVCdG5CZ2RIb3ZlciIsImxpbmtCdG5BY3RCZ2RIb3ZlciIsImZsb2F0aW5nQnRuQmdkSG92ZXIiLCJjdGFCdG5CZ2RIb3ZlciIsInByaW1hcnlCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQWN0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsImxpbmtCdG5BY3RDb2xvciIsImZsb2F0aW5nQnRuQWN0Q29sb3IiLCJjdGFCdG5BY3RDb2xvciIsInByaW1hcnlCdG5BY3RDb2xvciIsIklucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsIklucHV0TGlnaHQiLCJpbnB1dExUIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRBcmVhTGlnaHQiLCJJbmxpbmVJbnB1dCIsImlubGluZUlucHV0IiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJhY3RpdmUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsInBhbmVsQmFja2dyb3VuZCIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJqb2luIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJwYW5lbEhlYWRlckJvcmRlclJhZGl1cyIsIlN0eWxlZFBhbmVsRHJvcGRvd24iLCJwYW5lbERyb3Bkb3duU2Nyb2xsQmFyIiwidHlwZSIsIm1vZGFsRHJvcGRvd25CYWNrZ3JvdW5kIiwicGFuZWxCb3hTaGFkb3ciLCJwYW5lbEJvcmRlclJhZGl1cyIsIkJ1dHRvbkdyb3VwIiwiRGF0YXNldFNxdWFyZSIsImNvbG9yIiwiU2VsZWN0aW9uQnV0dG9uIiwic2VsZWN0ZWQiLCJzZWxlY3Rpb25CdG5Cb3JkZXJBY3RDb2xvciIsInNlbGVjdGlvbkJ0bkJvcmRlckNvbG9yIiwic2VsZWN0aW9uQnRuQWN0Q29sb3IiLCJzZWxlY3Rpb25CdG5Db2xvciIsInNlbGVjdGlvbkJ0bkFjdEJnZCIsInNlbGVjdGlvbkJ0bkJnZCIsIlRhYmxlIiwidGFibGUiLCJwYW5lbEJhY2tncm91bmRMVCIsInRpdGxlQ29sb3JMVCIsInBhbmVsQm9yZGVyTFQiLCJTdHlsZWRNb2RhbENvbnRlbnQiLCJ0ZXh0Q29sb3JMVCIsIm1vZGFsTGF0ZXJhbFBhZGRpbmciLCJtZWRpYSIsInBvcnRhYmxlIiwibW9kYWxQb3J0YWJsZUxhdGVyYWxQYWRkaW5nIiwiU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsIiwicGFsbSIsIlN0eWxlZE1vZGFsU2VjdGlvbiIsInN1YnRleHRDb2xvckxUIiwiU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlIiwiZXJyb3IiLCJlcnJvckNvbG9yIiwiU3R5bGVkTWFwQ29udGFpbmVyIiwiU3R5bGVkQXR0cmJ1dGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRGaWx0ZXJlZE9wdGlvbiIsIlN0eWxlZFR5cGUiLCJXaWRnZXRDb250YWluZXIiLCJCb3R0b21XaWRnZXRJbm5lciIsImJvdHRvbVdpZGdldEJnZCIsImJvdHRvbUlubmVyUGRWZXJ0IiwiYm90dG9tSW5uZXJQZFNpZGUiLCJib3R0b21QYW5lbEdhcCIsIk1hcENvbnRyb2xCdXR0b24iLCJmbG9hdGluZ0J0bkJvcmRlckhvdmVyIiwiU3R5bGVkRmlsdGVyQ29udGVudCIsIlRydW5jYXRlZFRpdGxlVGV4dCIsIkNoZWNrTWFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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S0FBSyxDQUFDQyxLQUFOLENBQVlxRSxtQkFBaEI7QUFBQSxDQW5CQSxFQW9CaEIsVUFBQXRFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWTJFLG1CQUFoQjtBQUFBLENBcEJXLEVBcUJmLFVBQUE1RSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVkrSSxzQkFBaEI7QUFBQSxDQXJCVSxDQUF0Qjs7O0FBNEJBLElBQU1DLG1CQUFtQixHQUFHbkosNkJBQU9TLEdBQVYsc0JBQ1YsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZdUIsc0JBQWhCO0FBQUEsQ0FESyxDQUF6Qjs7OztBQUtBLElBQU0wSCxrQkFBa0IsR0FBR3BKLDZCQUFPUyxHQUFWLHFCQUF4Qjs7OztBQU1BLElBQU00SSxTQUFTLEdBQUdySiw2QkFBT0MsSUFBUCxDQUFZa0IsS0FBWixDQUFrQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWxCLENBQUgsc0JBR0EsVUFBQWxCLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWTJHLDBCQUFoQjtBQUFBLENBSEwsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250U2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dEJvbGQgPSBzdHlsZWQoU2VsZWN0VGV4dClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvblJvdW5kU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJ9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5Db2xvcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJ9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyRmxleGJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyVmVydGljYWxGbGV4Ym94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFjZUJldHdlZW5GbGV4Ym94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU0JGbGV4Ym94SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU0JGbGV4Ym94Tm9NYXJnaW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbCA9IHN0eWxlZC5sYWJlbC5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2xhYmVsJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbExhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbC13cmFwcGVyJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWxCb2xkID0gc3R5bGVkKFBhbmVsTGFiZWwpYFxuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyVGl0bGUgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2hlYWRlcl9fdGl0bGUnXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG5cbiAgLmljb24ge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fY29udGVudCdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQ29udGVudEJhY2tncm91bmR9O1xuICBwYWRkaW5nOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpZGVQYW5lbFNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1zZWN0aW9uJ1xufSlgXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjQgOiAxKX07XG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLWRpdmlkZXInXG59KWBcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlcGFuZWxEaXZpZGVyQm9yZGVyfSBzb2xpZFxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZXBhbmVsRGl2aWRlck1hcmdpbn1weDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVwYW5lbERpdmlkZXJIZWlnaHR9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IHN0eWxlZChSZWFjdFRvb2x0aXApYFxuICAmLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwRm9udFNpemV9O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogN3B4IDE4cHg7XG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQm94U2hhZG93fTtcblxuICAgICYudHlwZS1kYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gICAgICAmLnBsYWNlLWJvdHRvbSB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucGxhY2UtdG9wIHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1yaWdodCB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1sZWZ0IHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ2J1dHRvbicsIHByb3BzLmNsYXNzTmFtZSlcbn0pKWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQmdkXG4gICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RcbiAgICAgIDogcHJvcHMubGlua1xuICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQmdkXG4gICAgICA6IHByb3BzLmZsb2F0aW5nXG4gICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkXG4gICAgICA6IHByb3BzLmN0YVxuICAgICAgPyBwcm9wcy50aGVtZS5jdGFCdG5CZ2RcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMubmVnYXRpdmVcbiAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5Db2xvclxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3JcbiAgICAgIDogcHJvcHMubGlua1xuICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQ29sb3JcbiAgICAgIDogcHJvcHMuZmxvYXRpbmdcbiAgICAgID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5Db2xvclxuICAgICAgOiBwcm9wcy5jdGFcbiAgICAgID8gcHJvcHMudGhlbWUuY3RhQnRuQ29sb3JcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkNvbG9yfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgcHJvcHMubGFyZ2VcbiAgICAgID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkZvbnRTaXplTGFyZ2VcbiAgICAgIDogcHJvcHMuc21hbGxcbiAgICAgID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkZvbnRTaXplU21hbGxcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkZvbnRTaXplRGVmYXVsdH07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJ0bkZvbnRGYW1pbHl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiAocHJvcHMubGFyZ2UgPyAnMTRweCAzMnB4JyA6IHByb3BzLnNtYWxsID8gJzZweCA5cHgnIDogJzlweCAxMnB4Jyl9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoIHx8ICdhdXRvJ307XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuICBib3JkZXI6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWNvbmRhcnlcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQm9yZGVyXG4gICAgICA6IHByb3BzLmZsb2F0aW5nXG4gICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQm9yZGVyXG4gICAgICA6IHByb3BzLmxpbmtcbiAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkJvcmRlclxuICAgICAgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQm9yZGVyfTtcbiAgOmhvdmVyLFxuICA6Zm9jdXMsXG4gIDphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQmdkSG92ZXJcbiAgICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3ZlclxuICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQWN0QmdkSG92ZXJcbiAgICAgICAgOiBwcm9wcy5mbG9hdGluZ1xuICAgICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkSG92ZXJcbiAgICAgICAgOiBwcm9wcy5jdGFcbiAgICAgICAgPyBwcm9wcy50aGVtZS5jdGFCdG5CZ2RIb3ZlclxuICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3Zlcn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdENvbG9yXG4gICAgICAgIDogcHJvcHMubGlua1xuICAgICAgICA/IHByb3BzLnRoZW1lLmxpbmtCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLmZsb2F0aW5nXG4gICAgICAgID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLmN0YVxuICAgICAgICA/IHByb3BzLnRoZW1lLmN0YUJ0bkFjdENvbG9yXG4gICAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkFjdENvbG9yfTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5sYXJnZSA/ICcxMHB4JyA6IHByb3BzLnNtYWxsID8gJzZweCcgOiAnOHB4Jyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICR7cHJvcHMgPT4gKHByb3BzLnNlY29uZGFyeSA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0IDogcHJvcHMudGhlbWUuaW5wdXQpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dExpZ2h0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICAke3Byb3BzID0+IChwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XG5gO1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhTGlnaHQgPSBzdHlsZWQudGV4dGFyZWFgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRMVH0gaGVpZ2h0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5saW5lSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlubGluZUlucHV0fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3ZlciA6IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWRcbiAgICByZ2IoXG4gICAgICAke3Byb3BzID0+IChwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzID8gcHJvcHMubGFiZWxSQ0dDb2xvclZhbHVlcy5qb2luKCcsJykgOiAndHJhbnNwYXJlbnQnKX1cbiAgICApO1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJIZWlnaHR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckJvcmRlclJhZGl1c307XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUGFuZWxEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxEcm9wZG93blNjcm9sbEJhcn1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLnR5cGUgPT09ICdsaWdodCcgPyBwcm9wcy50aGVtZS5tb2RhbERyb3Bkb3duQmFja2dyb3VuZCA6IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3hTaGFkb3d9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyUmFkaXVzfTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICB9XG4gIC5idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldFNxdWFyZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigke3Byb3BzID0+IHByb3BzLmNvbG9yLmpvaW4oJywnKX0pO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5Cb3JkZXJBY3RDb2xvclxuICAgICAgICA6IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkJvcmRlckNvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkFjdENvbG9yIDogcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5BY3RCZ2QgOiBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5CZ2R9O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQWN0Q29sb3J9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQm9yZGVyQWN0Q29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcblxuICB0aGVhZCB7XG4gICAgdHIgdGgge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuICAgICAgcGFkZGluZzogMThweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIHRyIHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJMVH07XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMjRweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsTGF0ZXJhbFBhZGRpbmd9O1xuICBtYXJnaW46IDAgLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxMYXRlcmFsUGFkZGluZ307XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDE2cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFBvcnRhYmxlTGF0ZXJhbFBhZGRpbmd9O1xuICAgIG1hcmdpbjogMCAtJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFBvcnRhYmxlTGF0ZXJhbFBhZGRpbmd9O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWwgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtdmVydGljYWwtcGFuZWwnXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICAubW9kYWwtc2VjdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAke21lZGlhLnBhbG1gXG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGB9O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxTZWN0aW9uID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ21vZGFsLXNlY3Rpb24nXG59KWBcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICAubW9kYWwtc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAubW9kYWwtc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbElucHV0Rm9vdG5vdGUgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtaW5wdXRfX2Zvb3Rub3RlJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3IgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVCl9O1xuICBmb250LXNpemU6IDEwcHg7XG5gO1xuLyoqXG4gKiBOZXdlciB2ZXJzaW9ucyBvZiBtYXBib3guZ2wgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGJhbm5lciBvbiB0b3Agb2YgdGhlIG1hcCBieSBkZWZhdWx0XG4gKiB3aGljaCB3aWxsIGNhdXNlIHRoZSBtYXAgdG8gZGlzcGxheSBwb2ludHMgaW4gdGhlIHdyb25nIGxvY2F0aW9uc1xuICogVGhpcyB3b3JrYXJvdW5kIHdpbGwgaGlkZSB0aGUgZXJyb3IgYmFubmVyLlxuICovXG5leHBvcnQgY29uc3QgU3R5bGVkTWFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLm1hcGJveGdsLW1hcCB7XG4gICAgLm1hcGJveGdsLW1pc3NpbmctY3NzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tYXBib3hnbC1jdHJsLWF0dHJpYiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEF0dHJidXRpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lcidcbn0pYFxuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAycHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgLmF0dHJpdGlvbi1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcblxuICAgIGEubWFwYm94Z2wtY3RybC1sb2dvIHtcbiAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICB9XG4gIH1cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMzVweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC4zIDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDE4NXB4O1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxuICAud2FybmluZyB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuZGVzY3JpcHRpb24uZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cbiAgICBzZWxlY3Qge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG5cbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBncmF5IDUwJSksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGdyYXkgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksXG4gICAgICAgIGNhbGMoMTAwJSAtIDIuNWVtKSA0LjVlbTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG5cbiAgICBzZWxlY3Q6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBncmVlbiA1MCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JlZW4gNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDE1cHgpIDFlbSwgY2FsYygxMDAlIC0gMjBweCkgMWVtLCBjYWxjKDEwMCUgLSAyLjVlbSkgNC41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWx0ZXJlZE9wdGlvbiA9IHN0eWxlZChTZWxlY3Rpb25CdXR0b24pYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB3aWR0aDogMTQwcHg7XG5cbiAgLmZpbHRlci1vcHRpb24tdGl0bGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuZmlsdGVyLW9wdGlvbi1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFR5cGUgPSBzdHlsZWQoU2VsZWN0aW9uQnV0dG9uKWBcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgV2lkZ2V0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb3R0b21XaWRnZXRJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm90dG9tV2lkZ2V0QmdkfTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBgJHtwcm9wcy50aGVtZS5ib3R0b21Jbm5lclBkVmVydH1weCAke3Byb3BzLnRoZW1lLmJvdHRvbUlubmVyUGRTaWRlfXB4YH07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3R0b21QYW5lbEdhcH1weDtcbmA7XG5cbmV4cG9ydCBjb25zdCBNYXBDb250cm9sQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdtYXAtY29udHJvbC1idXR0b24nXG59KWBcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZEhvdmVyIDogcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5CZ2R9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQWN0Q29sb3IgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkNvbG9yfTtcbiAgYm9yZGVyOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5Cb3JkZXJIb3ZlciA6IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQm9yZGVyfTtcblxuICA6aG92ZXIsXG4gIDpmb2N1cyxcbiAgOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5CZ2RIb3Zlcn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5BY3RDb2xvcn07XG4gICAgYm9yZGVyOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQm9yZGVySG92ZXJ9O1xuICB9XG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxDb250ZW50QmFja2dyb3VuZH07XG4gIHBhZGRpbmc6IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVHJ1bmNhdGVkVGl0bGVUZXh0ID0gc3R5bGVkLmRpdmBcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tNYXJrID0gc3R5bGVkLnNwYW4uYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjaGVja2JveC1pbm5lcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkJvcmRlckFjdENvbG9yfTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuXG4gIDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29udGVudDogJyAnO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMy4ycHg7XG4gICAgaGVpZ2h0OiA2LjIycHg7XG4gIH1cbmA7XG4iXX0=