"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterAnimationControllerFactory = FilterAnimationControllerFactory;
exports.LayerAnimationControllerFactory = LayerAnimationControllerFactory;
exports["default"] = BottomWidgetFactory;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _timeWidget = _interopRequireDefault(require("./filters/time-widget"));

var _animationControl = _interopRequireDefault(require("./common/animation-control/animation-control"));

var _animationController = _interopRequireDefault(require("./common/animation-control/animation-controller"));

var _constants = require("../constants");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  width: ", "px;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  filters: _propTypes["default"].arrayOf(_propTypes["default"].object),
  datasets: _propTypes["default"].object,
  uiState: _propTypes["default"].object,
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
  animationConfig: _propTypes["default"].object,
  visStateActions: _propTypes["default"].object,
  sidePanelWidth: _propTypes["default"].number,
  containerW: _propTypes["default"].number
};
var maxWidth = 1080;

var BottomWidgetContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.hasPadding ? props.theme.bottomWidgetPaddingTop : 0;
}, function (props) {
  return props.hasPadding ? props.theme.bottomWidgetPaddingRight : 0;
}, function (props) {
  return props.hasPadding ? props.theme.bottomWidgetPaddingBottom : 0;
}, function (props) {
  return props.hasPadding ? props.theme.bottomWidgetPaddingLeft : 0;
}, function (props) {
  return props.width;
});

FilterAnimationControllerFactory.deps = [_animationController["default"]];

function FilterAnimationControllerFactory(AnimationController) {
  var FilterAnimationController = function FilterAnimationController(_ref) {
    var _ref$filter = _ref.filter,
        filter = _ref$filter === void 0 ? {} : _ref$filter,
        filterIdx = _ref.filterIdx,
        setFilterAnimationTime = _ref.setFilterAnimationTime,
        children = _ref.children;
    var intervalBins = (0, _react.useMemo)(function () {
      var bins = filter && filter.bins;
      var interval = filter.plotType && filter.plotType.interval;
      return bins && Object.keys(bins).length && Object.values(bins)[0][interval];
    }, [filter]);
    var steps = (0, _react.useMemo)(function () {
      return intervalBins ? intervalBins.map(function (x) {
        return x.x0;
      }) : null;
    }, [intervalBins]);
    var updateAnimation = (0, _react.useCallback)(function (value) {
      switch (filter.animationWindow) {
        case _constants.ANIMATION_WINDOW.interval:
          var idx = value[1];
          setFilterAnimationTime(filterIdx, 'value', [intervalBins[idx].x0, intervalBins[idx].x1 - 1]);
          break;

        default:
          setFilterAnimationTime(filterIdx, 'value', value);
          break;
      }
    }, [filterIdx, intervalBins, filter.animationWindow, setFilterAnimationTime]);
    return /*#__PURE__*/_react["default"].createElement(AnimationController, {
      key: "filter-control",
      value: filter.value,
      domain: filter.domain,
      speed: filter.speed,
      isAnimating: filter.isAnimating,
      animationWindow: filter.animationWindow,
      steps: steps,
      updateAnimation: updateAnimation,
      children: children
    });
  };

  return FilterAnimationController;
}

LayerAnimationControllerFactory.deps = [_animationController["default"]];

function LayerAnimationControllerFactory(AnimationController) {
  var LayerAnimationController = function LayerAnimationController(_ref2) {
    var animationConfig = _ref2.animationConfig,
        setLayerAnimationTime = _ref2.setLayerAnimationTime,
        children = _ref2.children;
    return /*#__PURE__*/_react["default"].createElement(AnimationController, {
      key: "layer-control",
      value: animationConfig.currentTime,
      domain: animationConfig.domain,
      speed: animationConfig.speed,
      isAnimating: animationConfig.isAnimating,
      updateAnimation: setLayerAnimationTime,
      steps: animationConfig.timeSteps,
      animationWindow: animationConfig.timeSteps ? _constants.ANIMATION_WINDOW.interval : _constants.ANIMATION_WINDOW.point,
      children: children
    });
  };

  return LayerAnimationController;
}

BottomWidgetFactory.deps = [_timeWidget["default"], _animationControl["default"], FilterAnimationControllerFactory, LayerAnimationControllerFactory];

function BottomWidgetFactory(TimeWidget, AnimationControl, FilterAnimationController, LayerAnimationController) {
  var BottomWidget = function BottomWidget(props) {
    var datasets = props.datasets,
        filters = props.filters,
        animationConfig = props.animationConfig,
        visStateActions = props.visStateActions,
        containerW = props.containerW,
        uiState = props.uiState,
        sidePanelWidth = props.sidePanelWidth,
        layers = props.layers;
    var activeSidePanel = uiState.activeSidePanel,
        readOnly = uiState.readOnly;
    var isOpen = Boolean(activeSidePanel);
    var enlargedFilterIdx = (0, _react.useMemo)(function () {
      return filters.findIndex(function (f) {
        return f.enlarged && f.type === _constants.FILTER_TYPES.timeRange;
      });
    }, [filters]);
    var animatedFilter = (0, _react.useMemo)(function () {
      return filters.find(function (f) {
        return f.isAnimating;
      });
    }, [filters]);
    var enlargedFilterWidth = isOpen ? containerW - sidePanelWidth : containerW; // show playback control if layers contain trip layer & at least one trip layer is visible

    var animatableLayer = (0, _react.useMemo)(function () {
      return layers.filter(function (l) {
        return l.config.animation && l.config.animation.enabled && l.config.isVisible;
      });
    }, [layers]);
    var readyToAnimation = Array.isArray(animationConfig.domain) && Number.isFinite(animationConfig.currentTime); // if animation control is showing, hide time display in time slider

    var showFloatingTimeDisplay = !animatableLayer.length;
    var showAnimationControl = animatableLayer.length && readyToAnimation;
    var showTimeWidget = enlargedFilterIdx > -1 && Object.keys(datasets).length > 0;
    return /*#__PURE__*/_react["default"].createElement(BottomWidgetContainer, {
      width: Math.min(maxWidth, enlargedFilterWidth),
      className: "bottom-widget--container",
      hasPadding: showAnimationControl || showTimeWidget
    }, /*#__PURE__*/_react["default"].createElement(LayerAnimationController, {
      animationConfig: animationConfig,
      setLayerAnimationTime: visStateActions.setLayerAnimationTime
    }, function (animationControlProps) {
      return showAnimationControl ? /*#__PURE__*/_react["default"].createElement(AnimationControl, {
        animationConfig: animationConfig,
        setLayerAnimationTime: visStateActions.setLayerAnimationTime,
        updateAnimationSpeed: visStateActions.updateLayerAnimationSpeed,
        toggleAnimation: visStateActions.toggleLayerAnimation,
        isAnimatable: !animatedFilter,
        animationControlProps: animationControlProps
      }) : null;
    }), /*#__PURE__*/_react["default"].createElement(FilterAnimationController
    /* pass if filter is not animating, pass in 
     enlarged filter here because animation controller needs to call reset on it
     we can */
    , {
      filter: animatedFilter || filters[enlargedFilterIdx],
      filterIdx: enlargedFilterIdx,
      setFilterAnimationTime: visStateActions.setFilterAnimationTime
    }, function (animationControlProps) {
      return showTimeWidget ? /*#__PURE__*/_react["default"].createElement(TimeWidget, {
        filter: filters[enlargedFilterIdx],
        index: enlargedFilterIdx,
        isAnyFilterAnimating: Boolean(animatedFilter),
        datasets: datasets,
        readOnly: readOnly,
        showTimeDisplay: showFloatingTimeDisplay,
        setFilterPlot: visStateActions.setFilterPlot,
        setFilter: visStateActions.setFilter,
        setFilterAnimationTime: visStateActions.setFilterAnimationTime,
        setFilterAnimationWindow: visStateActions.setFilterAnimationWindow,
        toggleAnimation: visStateActions.toggleFilterAnimation,
        updateAnimationSpeed: visStateActions.updateFilterAnimationSpeed,
        enlargeFilter: visStateActions.enlargeFilter,
        animationControlProps: animationControlProps,
        isAnimatable: !animationConfig || !animationConfig.isAnimating
      }) : null;
    }));
  };

  BottomWidget.propTypes = propTypes;
  return BottomWidget;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2JvdHRvbS13aWRnZXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiZmlsdGVycyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJkYXRhc2V0cyIsInVpU3RhdGUiLCJsYXllcnMiLCJhbmltYXRpb25Db25maWciLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaWRlUGFuZWxXaWR0aCIsIm51bWJlciIsImNvbnRhaW5lclciLCJtYXhXaWR0aCIsIkJvdHRvbVdpZGdldENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGFzUGFkZGluZyIsInRoZW1lIiwiYm90dG9tV2lkZ2V0UGFkZGluZ1RvcCIsImJvdHRvbVdpZGdldFBhZGRpbmdSaWdodCIsImJvdHRvbVdpZGdldFBhZGRpbmdCb3R0b20iLCJib3R0b21XaWRnZXRQYWRkaW5nTGVmdCIsIndpZHRoIiwiRmlsdGVyQW5pbWF0aW9uQ29udHJvbGxlckZhY3RvcnkiLCJkZXBzIiwiQW5pbWF0aW9uQ29udHJvbGxlckZhY3RvcnkiLCJBbmltYXRpb25Db250cm9sbGVyIiwiRmlsdGVyQW5pbWF0aW9uQ29udHJvbGxlciIsImZpbHRlciIsImZpbHRlcklkeCIsInNldEZpbHRlckFuaW1hdGlvblRpbWUiLCJjaGlsZHJlbiIsImludGVydmFsQmlucyIsImJpbnMiLCJpbnRlcnZhbCIsInBsb3RUeXBlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInZhbHVlcyIsInN0ZXBzIiwibWFwIiwieCIsIngwIiwidXBkYXRlQW5pbWF0aW9uIiwidmFsdWUiLCJhbmltYXRpb25XaW5kb3ciLCJBTklNQVRJT05fV0lORE9XIiwiaWR4IiwieDEiLCJkb21haW4iLCJzcGVlZCIsImlzQW5pbWF0aW5nIiwiTGF5ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSIsIkxheWVyQW5pbWF0aW9uQ29udHJvbGxlciIsInNldExheWVyQW5pbWF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwidGltZVN0ZXBzIiwicG9pbnQiLCJCb3R0b21XaWRnZXRGYWN0b3J5IiwiVGltZVdpZGdldEZhY3RvcnkiLCJBbmltYXRpb25Db250cm9sRmFjdG9yeSIsIlRpbWVXaWRnZXQiLCJBbmltYXRpb25Db250cm9sIiwiQm90dG9tV2lkZ2V0IiwiYWN0aXZlU2lkZVBhbmVsIiwicmVhZE9ubHkiLCJpc09wZW4iLCJCb29sZWFuIiwiZW5sYXJnZWRGaWx0ZXJJZHgiLCJmaW5kSW5kZXgiLCJmIiwiZW5sYXJnZWQiLCJ0eXBlIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwiYW5pbWF0ZWRGaWx0ZXIiLCJmaW5kIiwiZW5sYXJnZWRGaWx0ZXJXaWR0aCIsImFuaW1hdGFibGVMYXllciIsImwiLCJjb25maWciLCJhbmltYXRpb24iLCJlbmFibGVkIiwiaXNWaXNpYmxlIiwicmVhZHlUb0FuaW1hdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsIk51bWJlciIsImlzRmluaXRlIiwic2hvd0Zsb2F0aW5nVGltZURpc3BsYXkiLCJzaG93QW5pbWF0aW9uQ29udHJvbCIsInNob3dUaW1lV2lkZ2V0IiwiTWF0aCIsIm1pbiIsImFuaW1hdGlvbkNvbnRyb2xQcm9wcyIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWQiLCJ0b2dnbGVMYXllckFuaW1hdGlvbiIsInNldEZpbHRlclBsb3QiLCJzZXRGaWx0ZXIiLCJzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3ciLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZCIsImVubGFyZ2VGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FETztBQUVoQkMsRUFBQUEsUUFBUSxF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IFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGltZVdpZGdldEZhY3RvcnkgZnJvbSAnLi9maWx0ZXJzL3RpbWUtd2lkZ2V0JztcbmltcG9ydCBBbmltYXRpb25Db250cm9sRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbCc7XG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlckZhY3RvcnkgZnJvbSAnLi9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvYW5pbWF0aW9uLWNvbnRyb2xsZXInO1xuaW1wb3J0IHtBTklNQVRJT05fV0lORE9XLCBGSUxURVJfVFlQRVN9IGZyb20gJ2NvbnN0YW50cyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1aVN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBhbmltYXRpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2lkZVBhbmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbnRhaW5lclc6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbmNvbnN0IG1heFdpZHRoID0gMTA4MDtcblxuY29uc3QgQm90dG9tV2lkZ2V0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogJHtwcm9wcyA9PiAocHJvcHMuaGFzUGFkZGluZyA/IHByb3BzLnRoZW1lLmJvdHRvbVdpZGdldFBhZGRpbmdUb3AgOiAwKX1weDtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGFzUGFkZGluZyA/IHByb3BzLnRoZW1lLmJvdHRvbVdpZGdldFBhZGRpbmdSaWdodCA6IDApfXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaGFzUGFkZGluZyA/IHByb3BzLnRoZW1lLmJvdHRvbVdpZGdldFBhZGRpbmdCb3R0b20gOiAwKX1weDtcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5oYXNQYWRkaW5nID8gcHJvcHMudGhlbWUuYm90dG9tV2lkZ2V0UGFkZGluZ0xlZnQgOiAwKX1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG5gO1xuXG5GaWx0ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeS5kZXBzID0gW0FuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5XTtcbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeShBbmltYXRpb25Db250cm9sbGVyKSB7XG4gIGNvbnN0IEZpbHRlckFuaW1hdGlvbkNvbnRyb2xsZXIgPSAoe1xuICAgIGZpbHRlciA9IHt9LFxuICAgIGZpbHRlcklkeCxcbiAgICBzZXRGaWx0ZXJBbmltYXRpb25UaW1lLFxuICAgIGNoaWxkcmVuXG4gIH0pID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbEJpbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IGJpbnMgPSBmaWx0ZXIgJiYgZmlsdGVyLmJpbnM7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IGZpbHRlci5wbG90VHlwZSAmJiBmaWx0ZXIucGxvdFR5cGUuaW50ZXJ2YWw7XG4gICAgICByZXR1cm4gYmlucyAmJiBPYmplY3Qua2V5cyhiaW5zKS5sZW5ndGggJiYgT2JqZWN0LnZhbHVlcyhiaW5zKVswXVtpbnRlcnZhbF07XG4gICAgfSwgW2ZpbHRlcl0pO1xuICAgIGNvbnN0IHN0ZXBzID0gdXNlTWVtbygoKSA9PiAoaW50ZXJ2YWxCaW5zID8gaW50ZXJ2YWxCaW5zLm1hcCh4ID0+IHgueDApIDogbnVsbCksIFtcbiAgICAgIGludGVydmFsQmluc1xuICAgIF0pO1xuXG4gICAgY29uc3QgdXBkYXRlQW5pbWF0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgICB2YWx1ZSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyLmFuaW1hdGlvbldpbmRvdykge1xuICAgICAgICAgIGNhc2UgQU5JTUFUSU9OX1dJTkRPVy5pbnRlcnZhbDpcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHZhbHVlWzFdO1xuICAgICAgICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uVGltZShmaWx0ZXJJZHgsICd2YWx1ZScsIFtcbiAgICAgICAgICAgICAgaW50ZXJ2YWxCaW5zW2lkeF0ueDAsXG4gICAgICAgICAgICAgIGludGVydmFsQmluc1tpZHhdLngxIC0gMVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uVGltZShmaWx0ZXJJZHgsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2ZpbHRlcklkeCwgaW50ZXJ2YWxCaW5zLCBmaWx0ZXIuYW5pbWF0aW9uV2luZG93LCBzZXRGaWx0ZXJBbmltYXRpb25UaW1lXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFuaW1hdGlvbkNvbnRyb2xsZXJcbiAgICAgICAga2V5PVwiZmlsdGVyLWNvbnRyb2xcIlxuICAgICAgICB2YWx1ZT17ZmlsdGVyLnZhbHVlfVxuICAgICAgICBkb21haW49e2ZpbHRlci5kb21haW59XG4gICAgICAgIHNwZWVkPXtmaWx0ZXIuc3BlZWR9XG4gICAgICAgIGlzQW5pbWF0aW5nPXtmaWx0ZXIuaXNBbmltYXRpbmd9XG4gICAgICAgIGFuaW1hdGlvbldpbmRvdz17ZmlsdGVyLmFuaW1hdGlvbldpbmRvd31cbiAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICB1cGRhdGVBbmltYXRpb249e3VwZGF0ZUFuaW1hdGlvbn1cbiAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuICByZXR1cm4gRmlsdGVyQW5pbWF0aW9uQ29udHJvbGxlcjtcbn1cblxuTGF5ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeS5kZXBzID0gW0FuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5XTtcbmV4cG9ydCBmdW5jdGlvbiBMYXllckFuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5KEFuaW1hdGlvbkNvbnRyb2xsZXIpIHtcbiAgY29uc3QgTGF5ZXJBbmltYXRpb25Db250cm9sbGVyID0gKHthbmltYXRpb25Db25maWcsIHNldExheWVyQW5pbWF0aW9uVGltZSwgY2hpbGRyZW59KSA9PiAoXG4gICAgPEFuaW1hdGlvbkNvbnRyb2xsZXJcbiAgICAgIGtleT1cImxheWVyLWNvbnRyb2xcIlxuICAgICAgdmFsdWU9e2FuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZX1cbiAgICAgIGRvbWFpbj17YW5pbWF0aW9uQ29uZmlnLmRvbWFpbn1cbiAgICAgIHNwZWVkPXthbmltYXRpb25Db25maWcuc3BlZWR9XG4gICAgICBpc0FuaW1hdGluZz17YW5pbWF0aW9uQ29uZmlnLmlzQW5pbWF0aW5nfVxuICAgICAgdXBkYXRlQW5pbWF0aW9uPXtzZXRMYXllckFuaW1hdGlvblRpbWV9XG4gICAgICBzdGVwcz17YW5pbWF0aW9uQ29uZmlnLnRpbWVTdGVwc31cbiAgICAgIGFuaW1hdGlvbldpbmRvdz17XG4gICAgICAgIGFuaW1hdGlvbkNvbmZpZy50aW1lU3RlcHMgPyBBTklNQVRJT05fV0lORE9XLmludGVydmFsIDogQU5JTUFUSU9OX1dJTkRPVy5wb2ludFxuICAgICAgfVxuICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgIC8+XG4gICk7XG4gIHJldHVybiBMYXllckFuaW1hdGlvbkNvbnRyb2xsZXI7XG59XG5cbkJvdHRvbVdpZGdldEZhY3RvcnkuZGVwcyA9IFtcbiAgVGltZVdpZGdldEZhY3RvcnksXG4gIEFuaW1hdGlvbkNvbnRyb2xGYWN0b3J5LFxuICBGaWx0ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgTGF5ZXJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeVxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdHRvbVdpZGdldEZhY3RvcnkoXG4gIFRpbWVXaWRnZXQsXG4gIEFuaW1hdGlvbkNvbnRyb2wsXG4gIEZpbHRlckFuaW1hdGlvbkNvbnRyb2xsZXIsXG4gIExheWVyQW5pbWF0aW9uQ29udHJvbGxlclxuKSB7XG4gIGNvbnN0IEJvdHRvbVdpZGdldCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBhbmltYXRpb25Db25maWcsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICBjb250YWluZXJXLFxuICAgICAgdWlTdGF0ZSxcbiAgICAgIHNpZGVQYW5lbFdpZHRoLFxuICAgICAgbGF5ZXJzXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbCwgcmVhZE9ubHl9ID0gdWlTdGF0ZTtcbiAgICBjb25zdCBpc09wZW4gPSBCb29sZWFuKGFjdGl2ZVNpZGVQYW5lbCk7XG5cbiAgICBjb25zdCBlbmxhcmdlZEZpbHRlcklkeCA9IHVzZU1lbW8oXG4gICAgICAoKSA9PiBmaWx0ZXJzLmZpbmRJbmRleChmID0+IGYuZW5sYXJnZWQgJiYgZi50eXBlID09PSBGSUxURVJfVFlQRVMudGltZVJhbmdlKSxcbiAgICAgIFtmaWx0ZXJzXVxuICAgICk7XG4gICAgY29uc3QgYW5pbWF0ZWRGaWx0ZXIgPSB1c2VNZW1vKCgpID0+IGZpbHRlcnMuZmluZChmID0+IGYuaXNBbmltYXRpbmcpLCBbZmlsdGVyc10pO1xuICAgIGNvbnN0IGVubGFyZ2VkRmlsdGVyV2lkdGggPSBpc09wZW4gPyBjb250YWluZXJXIC0gc2lkZVBhbmVsV2lkdGggOiBjb250YWluZXJXO1xuXG4gICAgLy8gc2hvdyBwbGF5YmFjayBjb250cm9sIGlmIGxheWVycyBjb250YWluIHRyaXAgbGF5ZXIgJiBhdCBsZWFzdCBvbmUgdHJpcCBsYXllciBpcyB2aXNpYmxlXG4gICAgY29uc3QgYW5pbWF0YWJsZUxheWVyID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIGxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5hbmltYXRpb24gJiYgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiYgbC5jb25maWcuaXNWaXNpYmxlKSxcbiAgICAgIFtsYXllcnNdXG4gICAgKTtcblxuICAgIGNvbnN0IHJlYWR5VG9BbmltYXRpb24gPVxuICAgICAgQXJyYXkuaXNBcnJheShhbmltYXRpb25Db25maWcuZG9tYWluKSAmJiBOdW1iZXIuaXNGaW5pdGUoYW5pbWF0aW9uQ29uZmlnLmN1cnJlbnRUaW1lKTtcbiAgICAvLyBpZiBhbmltYXRpb24gY29udHJvbCBpcyBzaG93aW5nLCBoaWRlIHRpbWUgZGlzcGxheSBpbiB0aW1lIHNsaWRlclxuICAgIGNvbnN0IHNob3dGbG9hdGluZ1RpbWVEaXNwbGF5ID0gIWFuaW1hdGFibGVMYXllci5sZW5ndGg7XG4gICAgY29uc3Qgc2hvd0FuaW1hdGlvbkNvbnRyb2wgPSBhbmltYXRhYmxlTGF5ZXIubGVuZ3RoICYmIHJlYWR5VG9BbmltYXRpb247XG4gICAgY29uc3Qgc2hvd1RpbWVXaWRnZXQgPSBlbmxhcmdlZEZpbHRlcklkeCA+IC0xICYmIE9iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggPiAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3R0b21XaWRnZXRDb250YWluZXJcbiAgICAgICAgd2lkdGg9e01hdGgubWluKG1heFdpZHRoLCBlbmxhcmdlZEZpbHRlcldpZHRoKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0tY29udGFpbmVyXCJcbiAgICAgICAgaGFzUGFkZGluZz17c2hvd0FuaW1hdGlvbkNvbnRyb2wgfHwgc2hvd1RpbWVXaWRnZXR9XG4gICAgICA+XG4gICAgICAgIDxMYXllckFuaW1hdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cbiAgICAgICAgICBzZXRMYXllckFuaW1hdGlvblRpbWU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRMYXllckFuaW1hdGlvblRpbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7YW5pbWF0aW9uQ29udHJvbFByb3BzID0+XG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uQ29udHJvbCA/IChcbiAgICAgICAgICAgICAgPEFuaW1hdGlvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Db25maWc9e2FuaW1hdGlvbkNvbmZpZ31cbiAgICAgICAgICAgICAgICBzZXRMYXllckFuaW1hdGlvblRpbWU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRMYXllckFuaW1hdGlvblRpbWV9XG4gICAgICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVMYXllckFuaW1hdGlvblNwZWVkfVxuICAgICAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUxheWVyQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIGlzQW5pbWF0YWJsZT17IWFuaW1hdGVkRmlsdGVyfVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNvbnRyb2xQcm9wcz17YW5pbWF0aW9uQ29udHJvbFByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvTGF5ZXJBbmltYXRpb25Db250cm9sbGVyPlxuICAgICAgICA8RmlsdGVyQW5pbWF0aW9uQ29udHJvbGxlclxuICAgICAgICAgIC8qIHBhc3MgaWYgZmlsdGVyIGlzIG5vdCBhbmltYXRpbmcsIHBhc3MgaW4gXG4gICAgICAgICAgIGVubGFyZ2VkIGZpbHRlciBoZXJlIGJlY2F1c2UgYW5pbWF0aW9uIGNvbnRyb2xsZXIgbmVlZHMgdG8gY2FsbCByZXNldCBvbiBpdFxuICAgICAgICAgICB3ZSBjYW4gKi9cbiAgICAgICAgICBmaWx0ZXI9e2FuaW1hdGVkRmlsdGVyIHx8IGZpbHRlcnNbZW5sYXJnZWRGaWx0ZXJJZHhdfVxuICAgICAgICAgIGZpbHRlcklkeD17ZW5sYXJnZWRGaWx0ZXJJZHh9XG4gICAgICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uVGltZT17dmlzU3RhdGVBY3Rpb25zLnNldEZpbHRlckFuaW1hdGlvblRpbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7YW5pbWF0aW9uQ29udHJvbFByb3BzID0+XG4gICAgICAgICAgICBzaG93VGltZVdpZGdldCA/IChcbiAgICAgICAgICAgICAgPFRpbWVXaWRnZXRcbiAgICAgICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcnNbZW5sYXJnZWRGaWx0ZXJJZHhdfVxuICAgICAgICAgICAgICAgIGluZGV4PXtlbmxhcmdlZEZpbHRlcklkeH1cbiAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17Qm9vbGVhbihhbmltYXRlZEZpbHRlcil9XG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICBzaG93VGltZURpc3BsYXk9e3Nob3dGbG9hdGluZ1RpbWVEaXNwbGF5fVxuICAgICAgICAgICAgICAgIHNldEZpbHRlclBsb3Q9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXJQbG90fVxuICAgICAgICAgICAgICAgIHNldEZpbHRlcj17dmlzU3RhdGVBY3Rpb25zLnNldEZpbHRlcn1cbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJBbmltYXRpb25UaW1lPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyQW5pbWF0aW9uVGltZX1cbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3c9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3d9XG4gICAgICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRmlsdGVyQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt2aXNTdGF0ZUFjdGlvbnMudXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17dmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udHJvbFByb3BzPXthbmltYXRpb25Db250cm9sUHJvcHN9XG4gICAgICAgICAgICAgICAgaXNBbmltYXRhYmxlPXshYW5pbWF0aW9uQ29uZmlnIHx8ICFhbmltYXRpb25Db25maWcuaXNBbmltYXRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9GaWx0ZXJBbmltYXRpb25Db250cm9sbGVyPlxuICAgICAgPC9Cb3R0b21XaWRnZXRDb250YWluZXI+XG4gICAgKTtcbiAgfTtcblxuICBCb3R0b21XaWRnZXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG4gIHJldHVybiBCb3R0b21XaWRnZXQ7XG59XG4iXX0=