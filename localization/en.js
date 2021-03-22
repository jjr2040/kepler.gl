"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locales = require("./locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  property: {
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    }
  },
  layer: {
    required: 'Required*',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Add Filter'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows'
  },
  tooltip: {
    hideLayer: 'hide layer',
    showLayer: 'show layer',
    hideFeature: 'Hide Feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select Base Map Style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: 'speed',
    play: 'play',
    pause: 'pause',
    reset: 'reset'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'select',
    polygon: 'polygon',
    rectangle: 'rectangle',
    hide: 'hide',
    show: 'show'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Mapbox Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows'
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '1. Publish your style at mapbox or provide access token',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Paste style url',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1: 'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: 'Example:'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Layer Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'icon',
    geojson: 'geojson',
    arc: {
      lat0: 'source lat',
      lng0: 'source lng',
      lat1: 'target lat',
      lng1: 'target lng'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    steps: 'steps',
    type: 'type',
    reversed: 'reversed'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload {fileFormatNames} or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  geocoder: {
    title: 'Enter an Address'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  compare: {
    modeLabel: 'Comparison Mode',
    typeLabel: 'Comparison Type',
    types: {
      absolute: 'Absolute',
      relative: 'Relative'
    }
  },
  mapPopover: {
    primary: 'Primary'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZW4uanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImxheWVyTWFuYWdlciIsImFkZERhdGEiLCJhZGRMYXllciIsImxheWVyQmxlbmRpbmciLCJtYXBNYW5hZ2VyIiwibWFwU3R5bGUiLCJhZGRNYXBTdHlsZSIsImxheWVyQ29uZmlndXJhdGlvbiIsImRlZmF1bHREZXNjcmlwdGlvbiIsImhvd1RvIiwiZmlsdGVyTWFuYWdlciIsImFkZEZpbHRlciIsImRhdGFzZXRUaXRsZSIsInNob3dEYXRhVGFibGUiLCJyZW1vdmVEYXRhc2V0IiwiZGF0YXNldEluZm8iLCJyb3dDb3VudCIsInRvb2x0aXAiLCJoaWRlTGF5ZXIiLCJzaG93TGF5ZXIiLCJoaWRlRmVhdHVyZSIsInNob3dGZWF0dXJlIiwiaGlkZSIsInNob3ciLCJyZW1vdmVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwiYW5pbWF0aW9uQnlXaW5kb3ciLCJhbmltYXRpb25CeUluY3JlbWVudGFsIiwic3BlZWQiLCJwbGF5IiwicGF1c2UiLCJyZXNldCIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJhbHRpdHVkZSIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxRQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxPQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxPQUpDO0FBS1JDLElBQUFBLFFBQVEsRUFBRSxVQUxGO0FBTVJDLElBQUFBLFdBQVcsRUFBRSxjQU5MO0FBT1JDLElBQUFBLE1BQU0sRUFBRSxRQVBBO0FBUVJDLElBQUFBLE9BQU8sRUFBRSxTQVJEO0FBU1JDLElBQUFBLE1BQU0sRUFBRSxRQVRBO0FBVVJDLElBQUFBLE9BQU8sRUFBRSxTQVZEO0FBV1JDLElBQUFBLE1BQU0sRUFBRSxRQVhBO0FBWVJDLElBQUFBLEdBQUcsRUFBRSxLQVpHO0FBYVJDLElBQUFBLFVBQVUsRUFBRTtBQWJKLEdBREc7QUFnQmJDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsUUFERztBQUVYQyxJQUFBQSxXQUFXLEVBQUUsZ0JBRkY7QUFHWEMsSUFBQUEsS0FBSyxFQUFFLFFBSEk7QUFJWEMsSUFBQUEsVUFBVSxFQUFFLGVBSkQ7QUFLWEMsSUFBQUEsV0FBVyxFQUFFLGdCQUxGO0FBTVhDLElBQUFBLFVBQVUsRUFBRSxlQU5EO0FBT1hDLElBQUFBLEtBQUssRUFBRTtBQVBJLEdBaEJBO0FBeUJiQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsRUFBRSxFQUFFLEVBREE7QUFFSkMsSUFBQUEsUUFBUSxFQUFFLFdBRk47QUFHSkMsSUFBQUEsV0FBVyxFQUFFLGNBSFQ7QUFJSkMsSUFBQUEsVUFBVSxFQUFFLGFBSlI7QUFLSkMsSUFBQUEsV0FBVyxFQUFFLG1CQUxUO0FBTUpOLElBQUFBLEtBQUssRUFBRTtBQU5ILEdBekJPO0FBaUNiTyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsS0FBSyxFQUFFLFlBREU7QUFFVDNCLElBQUFBLEtBQUssRUFBRSxPQUZFO0FBR1Q0QixJQUFBQSxJQUFJLEVBQUUsTUFIRztBQUlUQyxJQUFBQSxNQUFNLEVBQUUsUUFKQztBQUtUQyxJQUFBQSxRQUFRLEVBQUUsVUFMRDtBQU1UQyxJQUFBQSxLQUFLLEVBQUUsT0FORTtBQU9UQyxJQUFBQSxJQUFJLEVBQUUsTUFQRztBQVFULGtCQUFjO0FBUkwsR0FqQ0U7QUEyQ2JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFDSmxDLE1BQUFBLEtBQUssRUFBRSxPQURIO0FBRUptQyxNQUFBQSxXQUFXLEVBQUUsaUJBRlQ7QUFHSkMsTUFBQUEsUUFBUSxFQUFFLFdBSE47QUFJSkMsTUFBQUEsU0FBUyxFQUFFLFlBSlA7QUFLSkMsTUFBQUEsVUFBVSxFQUFFLGFBTFI7QUFNSkMsTUFBQUEsU0FBUyxFQUFFLFdBTlA7QUFPSkMsTUFBQUEsWUFBWSxFQUFFO0FBUFY7QUFERCxHQTNDTTtBQXNEYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsUUFERDtBQUVOQyxNQUFBQSxNQUFNLEVBQUUsU0FGRjtBQUdOQyxNQUFBQSxXQUFXLEVBQUUsY0FIUDtBQUlOQyxNQUFBQSxPQUFPLEVBQUU7QUFKSDtBQURELEdBdERJO0FBOERiSCxFQUFBQSxLQUFLLEVBQUU7QUFDTEksSUFBQUEsUUFBUSxFQUFFLFdBREw7QUFFTDFDLElBQUFBLE1BQU0sRUFBRSxRQUZIO0FBR0xILElBQUFBLEtBQUssRUFBRSxPQUhGO0FBSUxELElBQUFBLFNBQVMsRUFBRSxZQUpOO0FBS0xLLElBQUFBLE9BQU8sRUFBRSxTQUxKO0FBTUxQLElBQUFBLE1BQU0sRUFBRSxRQU5IO0FBT0xpRCxJQUFBQSxlQUFlLEVBQUUscUJBUFo7QUFRTDdDLElBQUFBLFFBQVEsRUFBRSxVQVJMO0FBU0xJLElBQUFBLE1BQU0sRUFBRSxRQVRIO0FBVUwwQyxJQUFBQSxXQUFXLEVBQUUsY0FWUjtBQVdMN0MsSUFBQUEsV0FBVyxFQUFFLGNBWFI7QUFZTDhDLElBQUFBLEtBQUssRUFBRSxPQVpGO0FBYUxDLElBQUFBLFdBQVcsRUFBRSxjQWJSO0FBY0xDLElBQUFBLHNCQUFzQixFQUFFLHFEQWRuQjtBQWVMQyxJQUFBQSxRQUFRLEVBQUUsV0FmTDtBQWdCTEMsSUFBQUEsc0JBQXNCLEVBQUUsOENBaEJuQjtBQWlCTEMsSUFBQUEsa0JBQWtCLEVBQUUsNkNBakJmO0FBa0JMQyxJQUFBQSxXQUFXLEVBQUUsc0JBbEJSO0FBbUJMLGVBQVcsVUFuQk47QUFvQkwsc0JBQWtCLGtCQXBCYjtBQXFCTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLEtBQUssRUFBRSxPQURIO0FBRUpDLE1BQUFBLEdBQUcsRUFBRSxLQUZEO0FBR0pDLE1BQUFBLElBQUksRUFBRSxNQUhGO0FBSUpDLE1BQUFBLElBQUksRUFBRSxNQUpGO0FBS0pDLE1BQUFBLE1BQU0sRUFBRSxRQUxKO0FBTUpDLE1BQUFBLE9BQU8sRUFBRSxTQU5MO0FBT0pDLE1BQUFBLE9BQU8sRUFBRSxTQVBMO0FBUUpDLE1BQUFBLE9BQU8sRUFBRSxTQVJMO0FBU0pDLE1BQUFBLElBQUksRUFBRSxNQVRGO0FBVUpDLE1BQUFBLE9BQU8sRUFBRSxTQVZMO0FBV0pDLE1BQUFBLE9BQU8sRUFBRSxTQVhMO0FBWUpDLE1BQUFBLFNBQVMsRUFBRSxJQVpQO0FBYUpDLE1BQUFBLElBQUksRUFBRSxNQWJGO0FBY0pDLE1BQUFBLEVBQUUsRUFBRSxJQWRBO0FBZUosWUFBTTtBQWZGO0FBckJELEdBOURNO0FBcUdiQyxFQUFBQSxlQUFlLEVBQUU7QUFDZkMsSUFBQUEsS0FBSyxFQUFFLE9BRFE7QUFFZnhCLElBQUFBLFdBQVcsRUFBRSx1QkFGRTtBQUdmeUIsSUFBQUEsZ0JBQWdCLEVBQUUsb0JBSEg7QUFJZnJFLElBQUFBLE1BQU0sRUFBRSxRQUpPO0FBS2ZzRSxJQUFBQSxXQUFXLEVBQUUsdUJBTEU7QUFNZkMsSUFBQUEsc0JBQXNCLEVBQUUsNkRBTlQ7QUFPZkMsSUFBQUEsV0FBVyxFQUFFLGNBUEU7QUFRZkMsSUFBQUEsYUFBYSxFQUFFLDBCQVJBO0FBU2ZDLElBQUFBLGlCQUFpQixFQUFFLHdCQVRKO0FBVWZDLElBQUFBLE9BQU8sRUFBRSxTQVZNO0FBV2Y3RSxJQUFBQSxRQUFRLEVBQUUsVUFYSztBQVlmRyxJQUFBQSxPQUFPLEVBQUUsU0FaTTtBQWFmMkUsSUFBQUEsVUFBVSxFQUFFLGFBYkc7QUFjZjFFLElBQUFBLE1BQU0sRUFBRSxRQWRPO0FBZWZILElBQUFBLFdBQVcsRUFBRSxjQWZFO0FBZ0JmOEUsSUFBQUEsZ0JBQWdCLEVBQUUsb0JBaEJIO0FBaUJmQyxJQUFBQSxXQUFXLEVBQUUsY0FqQkU7QUFrQmZDLElBQUFBLGdCQUFnQixFQUFFLG1CQWxCSDtBQW1CZkMsSUFBQUEsaUJBQWlCLEVBQUUsb0JBbkJKO0FBb0JmQyxJQUFBQSxlQUFlLEVBQUUsa0JBcEJGO0FBcUJmQyxJQUFBQSxTQUFTLEVBQUUsWUFyQkk7QUFzQmZDLElBQUFBLGFBQWEsRUFBRSxpQkF0QkE7QUF1QmZDLElBQUFBLGNBQWMsRUFBRSxpQkF2QkQ7QUF3QmZDLElBQUFBLFdBQVcsRUFBRSxjQXhCRTtBQXlCZkMsSUFBQUEsYUFBYSxFQUFFLGdCQXpCQTtBQTBCZkMsSUFBQUEsc0JBQXNCLEVBQUUsMEJBMUJUO0FBMkJmQyxJQUFBQSxpQ0FBaUMsRUFBRSxrREEzQnBCO0FBNEJmcEYsSUFBQUEsTUFBTSxFQUFFLFFBNUJPO0FBNkJmcUYsSUFBQUEsaUJBQWlCLEVBQUUsMkRBN0JKO0FBOEJmQyxJQUFBQSxJQUFJLEVBQUUsTUE5QlM7QUErQmZDLElBQUFBLG1CQUFtQixFQUFFLHVCQS9CTjtBQWdDZkMsSUFBQUEsYUFBYSxFQUFFLGdCQWhDQTtBQWlDZkMsSUFBQUEsZUFBZSxFQUFFLGtCQWpDRjtBQWtDZkMsSUFBQUEsU0FBUyxFQUFFLFlBbENJO0FBbUNmQyxJQUFBQSxXQUFXLEVBQUU7QUFuQ0UsR0FyR0o7QUEwSWJDLEVBQUFBLFlBQVksRUFBRTtBQUNaQyxJQUFBQSxPQUFPLEVBQUUsVUFERztBQUVaQyxJQUFBQSxRQUFRLEVBQUUsV0FGRTtBQUdaQyxJQUFBQSxhQUFhLEVBQUU7QUFISCxHQTFJRDtBQStJYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFFBQVEsRUFBRSxXQURBO0FBRVZDLElBQUFBLFdBQVcsRUFBRSxlQUZIO0FBR1YsdUJBQW1CO0FBSFQsR0EvSUM7QUFvSmJDLEVBQUFBLGtCQUFrQixFQUFFO0FBQ2xCQyxJQUFBQSxrQkFBa0IsRUFBRSw4Q0FERjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFO0FBRlcsR0FwSlA7QUF3SmJDLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxTQUFTLEVBQUU7QUFERSxHQXhKRjtBQTJKYkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pDLElBQUFBLGFBQWEsRUFBRSxpQkFESDtBQUVaQyxJQUFBQSxhQUFhLEVBQUU7QUFGSCxHQTNKRDtBQStKYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLFFBQVEsRUFBRTtBQURDLEdBL0pBO0FBa0tiQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyxFQUFFLFlBREo7QUFFUEMsSUFBQUEsU0FBUyxFQUFFLFlBRko7QUFHUEMsSUFBQUEsV0FBVyxFQUFFLGNBSE47QUFJUEMsSUFBQUEsV0FBVyxFQUFFLGNBSk47QUFLUEMsSUFBQUEsSUFBSSxFQUFFLE1BTEM7QUFNUEMsSUFBQUEsSUFBSSxFQUFFLE1BTkM7QUFPUEMsSUFBQUEsV0FBVyxFQUFFLGNBUE47QUFRUEMsSUFBQUEsYUFBYSxFQUFFLGdCQVJSO0FBU1BDLElBQUFBLFVBQVUsRUFBRSxxQkFUTDtBQVVQQyxJQUFBQSxnQkFBZ0IsRUFBRSx5QkFWWDtBQVdQQyxJQUFBQSxVQUFVLEVBQUUsYUFYTDtBQVlQQyxJQUFBQSxZQUFZLEVBQUUsZ0JBWlA7QUFhUEMsSUFBQUEsU0FBUyxFQUFFLGFBYko7QUFjUEMsSUFBQUEsWUFBWSxFQUFFLGVBZFA7QUFlUEMsSUFBQUEsY0FBYyxFQUFFLGtCQWZUO0FBZ0JQQyxJQUFBQSxjQUFjLEVBQUUsa0JBaEJUO0FBaUJQQyxJQUFBQSxTQUFTLEVBQUUsNEJBakJKO0FBa0JQQyxJQUFBQSxrQkFBa0IsRUFBRSx1QkFsQmI7QUFtQlAsY0FBUSxRQW5CRDtBQW9CUEMsSUFBQUEsWUFBWSxFQUFFLGVBcEJQO0FBcUJQQyxJQUFBQSxZQUFZLEVBQUUsZUFyQlA7QUFzQlAsYUFBUyxRQXRCRjtBQXVCUEMsSUFBQUEsaUJBQWlCLEVBQUUsb0JBdkJaO0FBd0JQQyxJQUFBQSxzQkFBc0IsRUFBRSx5QkF4QmpCO0FBeUJQQyxJQUFBQSxLQUFLLEVBQUUsT0F6QkE7QUEwQlBDLElBQUFBLElBQUksRUFBRSxNQTFCQztBQTJCUEMsSUFBQUEsS0FBSyxFQUFFLE9BM0JBO0FBNEJQQyxJQUFBQSxLQUFLLEVBQUU7QUE1QkEsR0FsS0k7QUFnTWJDLEVBQUFBLE9BQU87QUFDTEMsSUFBQUEsV0FBVyxFQUFFLGNBRFI7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLGFBRlA7QUFHTEMsSUFBQUEsU0FBUyxFQUFFLFlBSE47QUFJTEMsSUFBQUEsV0FBVyxFQUFFLGVBSlI7QUFLTEMsSUFBQUEsT0FBTyxFQUFFLFVBTEo7QUFNTEMsSUFBQUEsTUFBTSxFQUFFLFFBTkg7QUFPTHhGLElBQUFBLE9BQU8sRUFBRSxTQVBKO0FBUUx5RixJQUFBQSxTQUFTLEVBQUUsV0FSTjtBQVNMN0IsSUFBQUEsSUFBSSxFQUFFLE1BVEQ7QUFVTEMsSUFBQUEsSUFBSSxFQUFFO0FBVkQsS0FXRjZCLGdCQVhFLENBaE1NO0FBNk1iQyxFQUFBQSxLQUFLLEVBQUU7QUFDTC9ILElBQUFBLEtBQUssRUFBRTtBQUNMZ0ksTUFBQUEsYUFBYSxFQUFFLGdCQURWO0FBRUxDLE1BQUFBLFlBQVksRUFBRSxpQkFGVDtBQUdMVixNQUFBQSxXQUFXLEVBQUUsY0FIUjtBQUlMQyxNQUFBQSxVQUFVLEVBQUUsYUFKUDtBQUtMQyxNQUFBQSxTQUFTLEVBQUUsWUFMTjtBQU1MUyxNQUFBQSxvQkFBb0IsRUFBRSx5QkFOakI7QUFPTFAsTUFBQUEsT0FBTyxFQUFFLFVBUEo7QUFRTFEsTUFBQUEsUUFBUSxFQUFFO0FBUkwsS0FERjtBQVdMQyxJQUFBQSxNQUFNLEVBQUU7QUFDTixnQkFBUSxRQURGO0FBRU5DLE1BQUFBLFFBQVEsRUFBRSxVQUZKO0FBR04sZ0JBQVEsUUFIRjtBQUlOQyxNQUFBQSxRQUFRLEVBQUUsV0FKSjtBQUtOQyxNQUFBQSxJQUFJLEVBQUUsTUFMQTtBQU1OQyxNQUFBQSxhQUFhLEVBQUUsUUFOVDtBQU9OQyxNQUFBQSxjQUFjLEVBQUU7QUFQVixLQVhIO0FBb0JMbEIsSUFBQUEsV0FBVyxFQUFFO0FBQ1htQixNQUFBQSxVQUFVLEVBQUUsT0FERDtBQUVYQyxNQUFBQSxnQkFBZ0IsRUFBRSxzQ0FGUDtBQUdYQyxNQUFBQSxtQkFBbUIsRUFBRSxpQkFIVjtBQUlYQyxNQUFBQSxXQUFXLEVBQUUsUUFKRjtBQUtYQyxNQUFBQSxRQUFRLEVBQUUsS0FMQztBQU1YQyxNQUFBQSxTQUFTLEVBQUUsTUFOQTtBQU9YQyxNQUFBQSxlQUFlLEVBQUUsWUFQTjtBQVFYQyxNQUFBQSxxQkFBcUIsRUFBRSx1Q0FSWjtBQVNYQyxNQUFBQSxjQUFjLEVBQUUsWUFUTDtBQVVYQyxNQUFBQSxZQUFZLEVBQUU7QUFWSCxLQXBCUjtBQWdDTDNCLElBQUFBLFVBQVUsRUFBRTtBQUNWbEMsTUFBQUEsWUFBWSxFQUFFLFNBREo7QUFFVjhELE1BQUFBLGVBQWUsRUFBRSx3Q0FGUDtBQUdWQyxNQUFBQSxXQUFXLEVBQUUsS0FISDtBQUlWQyxNQUFBQSxhQUFhLEVBQUUsV0FKTDtBQUtWQyxNQUFBQSxnQkFBZ0IsRUFBRSw0Q0FMUjtBQU1WQyxNQUFBQSxlQUFlLEVBQUUsYUFOUDtBQU9WQyxNQUFBQSxrQkFBa0IsRUFBRSx5REFQVjtBQVFWQyxNQUFBQSxZQUFZLEVBQUUsZUFSSjtBQVNWQyxNQUFBQSxjQUFjLEVBQUUsaUJBVE47QUFVVkMsTUFBQUEsU0FBUyxFQUFFLG1CQVZEO0FBV1ZsRSxNQUFBQSxRQUFRLEVBQUU7QUFYQSxLQWhDUDtBQTZDTG1FLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxPQUFPLEVBQUU7QUFEQyxLQTdDUDtBQWdETHhCLElBQUFBLFFBQVEsRUFBRTtBQUNSeUIsTUFBQUEsWUFBWSxFQUFFLHlEQUROO0FBRVJDLE1BQUFBLGdCQUFnQixFQUFFLHNDQUZWO0FBR1JDLE1BQUFBLGdCQUFnQixFQUFFLEtBSFY7QUFJUkMsTUFBQUEsZ0JBQWdCLEVBQUUsU0FKVjtBQUtSQyxNQUFBQSxnQkFBZ0IsRUFBRSxLQUxWO0FBTVJDLE1BQUFBLGdCQUFnQixFQUFFLGtDQU5WO0FBT1JDLE1BQUFBLGdCQUFnQixFQUFFLGNBUFY7QUFRUkMsTUFBQUEsZ0JBQWdCLEVBQ2QsNkVBVE07QUFVUkMsTUFBQUEsWUFBWSxFQUFFLHdCQVZOO0FBV1JDLE1BQUFBLFVBQVUsRUFBRSxvQkFYSjtBQVlSQyxNQUFBQSxjQUFjLEVBQUUsV0FaUjtBQWFSQyxNQUFBQSxjQUFjLEVBQUUsV0FiUjtBQWNSQyxNQUFBQSxXQUFXLEVBQUU7QUFkTCxLQWhETDtBQWdFTEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLGFBQWEsRUFBRSxlQURQO0FBRVJDLE1BQUFBLGdCQUFnQixFQUFFLHlDQUZWO0FBR1JDLE1BQUFBLFVBQVUsRUFBRSxlQUhKO0FBSVJDLE1BQUFBLGFBQWEsRUFBRSwwREFKUDtBQUtSQyxNQUFBQSxlQUFlLEVBQ2IsOEhBQ0Esa0VBUE07QUFRUkMsTUFBQUEsUUFBUSxFQUFFO0FBUkYsS0FoRUw7QUEwRUxDLElBQUFBLFdBQVcsRUFBRTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsZUFESDtBQUVYQyxNQUFBQSxLQUFLLEVBQUU7QUFGSSxLQTFFUjtBQThFTDFELElBQUFBLE9BQU8sRUFBRTtBQUNQM0gsTUFBQUEsS0FBSyxFQUFFLGVBREE7QUFFUHNMLE1BQUFBLFFBQVEsRUFBRTtBQUZILEtBOUVKO0FBa0ZMN0QsSUFBQUEsU0FBUyxFQUFFO0FBQ1Q4RCxNQUFBQSxXQUFXLEVBQUUsWUFESjtBQUVUQyxNQUFBQSxjQUFjLEVBQUUseUNBRlA7QUFHVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFNBQVMsRUFBRSxnREFEUDtBQUVKQyxRQUFBQSxVQUFVLEVBQUUscUJBRlI7QUFHSkMsUUFBQUEsYUFBYSxFQUFFLHlEQUhYO0FBSUpDLFFBQUFBLGdCQUFnQixFQUFFLGdDQUpkO0FBS0pDLFFBQUFBLGtCQUFrQixFQUNoQix3SEFORTtBQU9KQyxRQUFBQSxlQUFlLEVBQUUsMEVBUGI7QUFRSkMsUUFBQUEsV0FBVyxFQUFFLHNDQVJUO0FBU0pDLFFBQUFBLFNBQVMsRUFBRSxVQVRQO0FBVUpDLFFBQUFBLGFBQWEsRUFBRSw0QkFWWDtBQVdKQyxRQUFBQSxhQUFhLEVBQUUsTUFYWDtBQVlKQyxRQUFBQSxlQUFlLEVBQUUsK0JBWmI7QUFhSkMsUUFBQUEsSUFBSSxFQUFFLE1BYkY7QUFjSkMsUUFBQUEsSUFBSSxFQUFFO0FBZEYsT0FIRztBQW1CVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFdBQVcsRUFBRSxZQURUO0FBRUpDLFFBQUFBLGdCQUFnQixFQUNkLG9JQUhFO0FBSUpmLFFBQUFBLFNBQVMsRUFDUCxrSUFMRTtBQU1KZ0IsUUFBQUEsVUFBVSxFQUNSLGlJQUNBO0FBUkU7QUFuQkcsS0FsRk47QUFnSExDLElBQUFBLGFBQWEsRUFBRTtBQUNiQyxNQUFBQSxPQUFPLEVBQUU7QUFESSxLQWhIVjtBQW1ITEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLE1BQU0sRUFBRSxZQURBO0FBRVJDLE1BQUFBLE9BQU8sRUFBRTtBQUZELEtBbkhMO0FBdUhMQyxJQUFBQSxRQUFRLEVBQUU7QUFDUmhOLE1BQUFBLEtBQUssRUFBRSw4QkFEQztBQUVSaU4sTUFBQUEsWUFBWSxFQUNWLHVMQUhNO0FBSVJDLE1BQUFBLElBQUksRUFBRSw4Q0FKRTtBQUtSQyxNQUFBQSxZQUFZLEVBQ1YsMkpBTk07QUFPUkMsTUFBQUEsT0FBTyxFQUFFO0FBUEQsS0F2SEw7QUFnSUxDLElBQUFBLFFBQVEsRUFBRTtBQUNSck4sTUFBQUEsS0FBSyxFQUFFLG1CQURDO0FBRVJpTixNQUFBQSxZQUFZLEVBQ1YsMkxBSE07QUFJUkMsTUFBQUEsSUFBSSxFQUFFLE1BSkU7QUFLUkMsTUFBQUEsWUFBWSxFQUFFLDREQUxOO0FBTVJDLE1BQUFBLE9BQU8sRUFBRSxVQU5EO0FBT1JFLE1BQUFBLEtBQUssRUFBRTtBQVBDLEtBaElMO0FBeUlMQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkMsTUFBQUEsWUFBWSxFQUFFLGlDQURFO0FBRWhCQyxNQUFBQSxJQUFJLEVBQUU7QUFGVSxLQXpJYjtBQTZJTEMsSUFBQUEsWUFBWSxFQUFFO0FBQ1oxTixNQUFBQSxLQUFLLEVBQUUsZUFESztBQUVaMk4sTUFBQUEsYUFBYSxFQUFFO0FBRkgsS0E3SVQ7QUFpSkxDLElBQUFBLGNBQWMsRUFBRTtBQUNkSCxNQUFBQSxJQUFJLEVBQUUsTUFEUTtBQUVkSSxNQUFBQSxRQUFRLEVBQUUseUNBRkk7QUFHZEMsTUFBQUEsV0FBVyxFQUFFLGdCQUhDO0FBSWRDLE1BQUFBLFdBQVcsRUFBRTtBQUpDO0FBakpYLEdBN01NO0FBcVdiQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsYUFBYSxFQUFFLGdCQURUO0FBRU5DLElBQUFBLFdBQVcsRUFBRTtBQUZQLEdBcldLO0FBeVdiQyxFQUFBQSxZQUFZLEVBQUU7QUFDWnhJLElBQUFBLE9BQU8sRUFBRSxTQURHO0FBRVp5SSxJQUFBQSxLQUFLLEVBQUUsT0FGSztBQUdaQyxJQUFBQSxVQUFVLEVBQUUsYUFIQTtBQUlaQyxJQUFBQSxRQUFRLEVBQUU7QUFKRSxHQXpXRDtBQStXYnpKLEVBQUFBLGFBQWEsRUFBRTtBQUNiN0UsSUFBQUEsS0FBSyxFQUFFLGdCQURNO0FBRWJ1TyxJQUFBQSxRQUFRLEVBQUUsVUFGRztBQUdiQyxJQUFBQSxNQUFNLEVBQUUsUUFISztBQUliQyxJQUFBQSxXQUFXLEVBQUU7QUFKQSxHQS9XRjtBQXFYYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1AxTyxJQUFBQSxLQUFLLEVBQUUsU0FEQTtBQUVQMk8sSUFBQUEsR0FBRyxFQUFFLEtBRkU7QUFHUEMsSUFBQUEsR0FBRyxFQUFFLEtBSEU7QUFJUEMsSUFBQUEsUUFBUSxFQUFFLFVBSkg7QUFLUHRNLElBQUFBLElBQUksRUFBRSxNQUxDO0FBTVBGLElBQUFBLE9BQU8sRUFBRSxTQU5GO0FBT1BMLElBQUFBLEdBQUcsRUFBRTtBQUNIOE0sTUFBQUEsSUFBSSxFQUFFLFlBREg7QUFFSEMsTUFBQUEsSUFBSSxFQUFFLFlBRkg7QUFHSEMsTUFBQUEsSUFBSSxFQUFFLFlBSEg7QUFJSEMsTUFBQUEsSUFBSSxFQUFFO0FBSkgsS0FQRTtBQWFQL00sSUFBQUEsSUFBSSxFQUFFO0FBQ0oyQixNQUFBQSxhQUFhLEVBQUU7QUFEWCxLQWJDO0FBZ0JQcEIsSUFBQUEsT0FBTyxFQUFFO0FBQ1BvQixNQUFBQSxhQUFhLEVBQUU7QUFEUixLQWhCRjtBQW1CUHFMLElBQUFBLE1BQU0sRUFBRTtBQW5CRCxHQXJYSTtBQTBZYjNRLEVBQUFBLEtBQUssRUFBRTtBQUNMNFEsSUFBQUEsYUFBYSxFQUFFLGdCQURWO0FBRUxDLElBQUFBLEtBQUssRUFBRSxPQUZGO0FBR0x0TixJQUFBQSxJQUFJLEVBQUUsTUFIRDtBQUlMdU4sSUFBQUEsUUFBUSxFQUFFO0FBSkwsR0ExWU07QUFnWmJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxVQUFVLEVBQUUsYUFEUDtBQUVMM0wsSUFBQUEsU0FBUyxFQUFFLFlBRk47QUFHTDRMLElBQUFBLFdBQVcsRUFBRSxjQUhSO0FBSUxGLElBQUFBLEtBQUssRUFBRTtBQUpGLEdBaFpNO0FBc1piRyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsT0FBTyxFQUFFLCtCQURHO0FBRVpDLElBQUFBLGFBQWEsRUFDWCxtRkFIVTtBQUlaakQsSUFBQUEsVUFBVSxFQUNSLDhHQUNBLG1EQU5VO0FBT1prRCxJQUFBQSxtQkFBbUIsRUFDakIsOEZBUlU7QUFTWkMsSUFBQUEsV0FBVyxFQUFFLG1CQVREO0FBVVpDLElBQUFBLFNBQVMsRUFBRSxXQVZDO0FBV1pDLElBQUFBLGdCQUFnQixFQUFFLHFDQVhOO0FBWVpDLElBQUFBLEVBQUUsRUFBRTtBQVpRLEdBdFpEO0FBb2FiMUIsRUFBQUEsUUFBUSxFQUFFO0FBQ1J0TyxJQUFBQSxLQUFLLEVBQUU7QUFEQyxHQXBhRztBQXVhYmlRLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxRQUFRLEVBQUUsV0FERztBQUViQyxJQUFBQSxVQUFVLEVBQUU7QUFGQyxHQXZhRjtBQTJhYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFNBQVMsRUFBRSxpQkFESjtBQUVQQyxJQUFBQSxTQUFTLEVBQUUsaUJBRko7QUFHUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLFFBQVEsRUFBRTtBQUZMO0FBSEEsR0EzYUk7QUFtYmJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQW5iQztBQXNiYjlSLEVBQUFBLE9BQU8sRUFBRSxTQXRiSTtBQXViYixnQkFBYyxZQXZiRDtBQXdiYixnQkFBYyxZQXhiRDtBQXliYitSLEVBQUFBLElBQUksRUFBRSxNQXpiTztBQTBiYkMsRUFBQUEsS0FBSyxFQUFFO0FBMWJNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICd3ZWlnaHQnLFxuICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgIGZpbGxDb2xvcjogJ2ZpbGwgY29sb3InLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICAgIHN0cm9rZUNvbG9yOiAnc3Ryb2tlIGNvbG9yJyxcbiAgICByYWRpdXM6ICdyYWRpdXMnLFxuICAgIG91dGxpbmU6ICdvdXRsaW5lJyxcbiAgICBzdHJva2U6ICdzdHJva2UnLFxuICAgIGRlbnNpdHk6ICdkZW5zaXR5JyxcbiAgICBoZWlnaHQ6ICdoZWlnaHQnLFxuICAgIHN1bTogJ3N1bScsXG4gICAgcG9pbnRDb3VudDogJ1BvaW50IENvdW50J1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgc2VsZWN0RmllbGQ6ICdTZWxlY3QgYSBmaWVsZCcsXG4gICAgeUF4aXM6ICdZIEF4aXMnLFxuICAgIHNlbGVjdFR5cGU6ICdTZWxlY3QgQSBUeXBlJyxcbiAgICBzZWxlY3RWYWx1ZTogJ1NlbGVjdCBBIFZhbHVlJyxcbiAgICBlbnRlclZhbHVlOiAnRW50ZXIgYSB2YWx1ZScsXG4gICAgZW1wdHk6ICdlbXB0eSdcbiAgfSxcbiAgbWlzYzoge1xuICAgIGJ5OiAnJyxcbiAgICB2YWx1ZXNJbjogJ1ZhbHVlcyBpbicsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWx1ZSBlcXVhbHMnLFxuICAgIGRhdGFTb3VyY2U6ICdEYXRhIFNvdXJjZScsXG4gICAgYnJ1c2hSYWRpdXM6ICdCcnVzaCBSYWRpdXMgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ01hcCBMYXllcnMnLFxuICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgIHJvYWQ6ICdSb2FkJyxcbiAgICBib3JkZXI6ICdCb3JkZXInLFxuICAgIGJ1aWxkaW5nOiAnQnVpbGRpbmcnLFxuICAgIHdhdGVyOiAnV2F0ZXInLFxuICAgIGxhbmQ6ICdMYW5kJyxcbiAgICAnM2RCdWlsZGluZyc6ICczZCBCdWlsZGluZydcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgIGxhYmVsV2l0aElkOiAnTGFiZWwge2xhYmVsSWR9JyxcbiAgICAgIGZvbnRTaXplOiAnRm9udCBzaXplJyxcbiAgICAgIGZvbnRDb2xvcjogJ0ZvbnQgY29sb3InLFxuICAgICAgdGV4dEFuY2hvcjogJ1RleHQgYW5jaG9yJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaWdubWVudCcsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGQgTW9yZSBMYWJlbCdcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBwYW5lbHM6IHtcbiAgICAgIGxheWVyOiAnTGF5ZXJzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRlcnMnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjdGlvbnMnLFxuICAgICAgYmFzZW1hcDogJ0Jhc2UgbWFwJ1xuICAgIH1cbiAgfSxcbiAgbGF5ZXI6IHtcbiAgICByZXF1aXJlZDogJ1JlcXVpcmVkKicsXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcbiAgICBjb2xvcjogJ0NvbG9yJyxcbiAgICBmaWxsQ29sb3I6ICdGaWxsIENvbG9yJyxcbiAgICBvdXRsaW5lOiAnT3V0bGluZScsXG4gICAgd2VpZ2h0OiAnV2VpZ2h0JyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2VkIG9uJyxcbiAgICBjb3ZlcmFnZTogJ0NvdmVyYWdlJyxcbiAgICBzdHJva2U6ICdTdHJva2UnLFxuICAgIHN0cm9rZVdpZHRoOiAnU3Ryb2tlIFdpZHRoJyxcbiAgICBzdHJva2VDb2xvcjogJ1N0cm9rZSBDb2xvcicsXG4gICAgYmFzaWM6ICdCYXNpYycsXG4gICAgdHJhaWxMZW5ndGg6ICdUcmFpbCBMZW5ndGgnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygc2Vjb25kcyBmb3IgYSBwYXRoIHRvIGNvbXBsZXRlbHkgZmFkZSBvdXQnLFxuICAgIG5ld0xheWVyOiAnbmV3IGxheWVyJyxcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnV2hlbiBvZmYsIGhlaWdodCBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1doZW4gb2ZmLCBjb2xvciBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGFnZ3JlZ2F0ZUJ5OiAnQWdncmVnYXRlIHtmaWVsZH0gYnknLFxuICAgICczRE1vZGVsJzogJzNEIE1vZGVsJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnM0QgTW9kZWwgT3B0aW9ucycsXG4gICAgdHlwZToge1xuICAgICAgcG9pbnQ6ICdwb2ludCcsXG4gICAgICBhcmM6ICdhcmMnLFxuICAgICAgbGluZTogJ2xpbmUnLFxuICAgICAgZ3JpZDogJ2dyaWQnLFxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcbiAgICAgIHBvbHlnb246ICdwb2x5Z29uJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdjbHVzdGVyJyxcbiAgICAgIGljb246ICdpY29uJyxcbiAgICAgIGhlYXRtYXA6ICdoZWF0bWFwJyxcbiAgICAgIGhleGFnb246ICdoZXhhZ29uJyxcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcbiAgICAgIHRyaXA6ICd0cmlwJyxcbiAgICAgIHMyOiAnUzInLFxuICAgICAgJzNkJzogJzNEJ1xuICAgIH1cbiAgfSxcbiAgbGF5ZXJWaXNDb25maWdzOiB7XG4gICAgYW5nbGU6ICdBbmdsZScsXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGggKFBpeGVscyknLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdTdHJva2UgV2lkdGggUmFuZ2UnLFxuICAgIHJhZGl1czogJ1JhZGl1cycsXG4gICAgZml4ZWRSYWRpdXM6ICdGaXhlZCBSYWRpdXMgdG8gbWV0ZXInLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXG4gICAgcmFkaXVzUmFuZ2U6ICdSYWRpdXMgUmFuZ2UnLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICdDbHVzdGVyIFJhZGl1cyBpbiBQaXhlbHMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFkaXVzIFJhbmdlIGluIHBpeGVscycsXG4gICAgb3BhY2l0eTogJ09wYWNpdHknLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICBjb2xvclJhbmdlOiAnQ29sb3IgcmFuZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdTdHJva2UgQ29sb3IgcmFuZ2UnLFxuICAgIHRhcmdldENvbG9yOiAnVGFyZ2V0IENvbG9yJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQ29sb3IgQWdncmVnYXRpb24nLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnSGVpZ2h0IEFnZ3JlZ2F0aW9uJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSZXNvbHV0aW9uIHJhbmdlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnV29ybGQgVW5pdCBTaXplJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgaGVpZ2h0U2NhbGU6ICdIZWlnaHQgU2NhbGUnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdDb3ZlcmFnZSBSYW5nZScsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ0hpZ2ggUHJlY2lzaW9uIFJlbmRlcmluZycsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAnSGlnaCBwcmVjaXNpb24gd2lsbCByZXN1bHQgaW4gc2xvd2VyIHBlcmZvcm1hbmNlJyxcbiAgICBoZWlnaHQ6ICdIZWlnaHQnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnQ2xpY2sgYnV0dG9uIGF0IHRvcCByaWdodCBvZiB0aGUgbWFwIHRvIHN3aXRjaCB0byAzZCB2aWV3JyxcbiAgICBmaWxsOiAnRmlsbCcsXG4gICAgZW5hYmxlUG9seWdvbkhlaWdodDogJ0VuYWJsZSBQb2x5Z29uIEhlaWdodCcsXG4gICAgc2hvd1dpcmVmcmFtZTogJ1Nob3cgV2lyZWZyYW1lJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdXZWlnaHQgSW50ZW5zaXR5JyxcbiAgICB6b29tU2NhbGU6ICdab29tIFNjYWxlJyxcbiAgICBoZWlnaHRSYW5nZTogJ0hlaWdodCBSYW5nZSdcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ0FkZCBEYXRhJyxcbiAgICBhZGRMYXllcjogJ0FkZCBMYXllcicsXG4gICAgbGF5ZXJCbGVuZGluZzogJ0xheWVyIEJsZW5kaW5nJ1xuICB9LFxuICBtYXBNYW5hZ2VyOiB7XG4gICAgbWFwU3R5bGU6ICdNYXAgc3R5bGUnLFxuICAgIGFkZE1hcFN0eWxlOiAnQWRkIE1hcCBTdHlsZScsXG4gICAgJzNkQnVpbGRpbmdDb2xvcic6ICczRCBCdWlsZGluZyBDb2xvcidcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXRlIHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGQnLFxuICAgIGhvd1RvOiAnSG93IHRvJ1xuICB9LFxuICBmaWx0ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRmlsdGVyOiAnQWRkIEZpbHRlcidcbiAgfSxcbiAgZGF0YXNldFRpdGxlOiB7XG4gICAgc2hvd0RhdGFUYWJsZTogJ1Nob3cgZGF0YSB0YWJsZScsXG4gICAgcmVtb3ZlRGF0YXNldDogJ1JlbW92ZSBkYXRhc2V0J1xuICB9LFxuICBkYXRhc2V0SW5mbzoge1xuICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSByb3dzJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnaGlkZSBsYXllcicsXG4gICAgc2hvd0xheWVyOiAnc2hvdyBsYXllcicsXG4gICAgaGlkZUZlYXR1cmU6ICdIaWRlIEZlYXR1cmUnLFxuICAgIHNob3dGZWF0dXJlOiAnU2hvdyBmZWF0dXJlJyxcbiAgICBoaWRlOiAnaGlkZScsXG4gICAgc2hvdzogJ3Nob3cnLFxuICAgIHJlbW92ZUxheWVyOiAnUmVtb3ZlIGxheWVyJyxcbiAgICBsYXllclNldHRpbmdzOiAnTGF5ZXIgc2V0dGluZ3MnLFxuICAgIGNsb3NlUGFuZWw6ICdDbG9zZSBjdXJyZW50IHBhbmVsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnU3dpdGNoIHRvIGR1YWwgbWFwIHZpZXcnLFxuICAgIHNob3dMZWdlbmQ6ICdzaG93IGxlZ2VuZCcsXG4gICAgZGlzYWJsZTNETWFwOiAnRGlzYWJsZSAzRCBNYXAnLFxuICAgIERyYXdPbk1hcDogJ0RyYXcgb24gbWFwJyxcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY3QgbG9jYWxlJyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0hpZGUgbGF5ZXIgcGFuZWwnLFxuICAgIHNob3dMYXllclBhbmVsOiAnU2hvdyBsYXllciBwYW5lbCcsXG4gICAgbW92ZVRvVG9wOiAnTW92ZSB0byB0b3Agb2YgZGF0YSBsYXllcnMnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjdCBCYXNlIE1hcCBTdHlsZScsXG4gICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICB0aW1lUGxheWJhY2s6ICdUaW1lIFBsYXliYWNrJyxcbiAgICBjbG91ZFN0b3JhZ2U6ICdDbG91ZCBTdG9yYWdlJyxcbiAgICAnM0RNYXAnOiAnM0QgTWFwJyxcbiAgICBhbmltYXRpb25CeVdpbmRvdzogJ01vdmluZyBUaW1lIFdpbmRvdycsXG4gICAgYW5pbWF0aW9uQnlJbmNyZW1lbnRhbDogJ0luY3JlbWVudGFsIFRpbWUgV2luZG93JyxcbiAgICBzcGVlZDogJ3NwZWVkJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcmVzZXQ6ICdyZXNldCdcbiAgfSxcbiAgdG9vbGJhcjoge1xuICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0IEltYWdlJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgIGV4cG9ydE1hcDogJ0V4cG9ydCBNYXAnLFxuICAgIHNoYXJlTWFwVVJMOiAnU2hhcmUgTWFwIFVSTCcsXG4gICAgc2F2ZU1hcDogJ1NhdmUgTWFwJyxcbiAgICBzZWxlY3Q6ICdzZWxlY3QnLFxuICAgIHBvbHlnb246ICdwb2x5Z29uJyxcbiAgICByZWN0YW5nbGU6ICdyZWN0YW5nbGUnLFxuICAgIGhpZGU6ICdoaWRlJyxcbiAgICBzaG93OiAnc2hvdycsXG4gICAgLi4uTE9DQUxFU1xuICB9LFxuICBtb2RhbDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBkZWxldGVEYXRhc2V0OiAnRGVsZXRlIERhdGFzZXQnLFxuICAgICAgYWRkRGF0YVRvTWFwOiAnQWRkIERhdGEgVG8gTWFwJyxcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0IEltYWdlJyxcbiAgICAgIGV4cG9ydERhdGE6ICdFeHBvcnQgRGF0YScsXG4gICAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWRkIEN1c3RvbSBNYXBib3ggU3R5bGUnLFxuICAgICAgc2F2ZU1hcDogJ1NhdmUgTWFwJyxcbiAgICAgIHNoYXJlVVJMOiAnU2hhcmUgVVJMJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICBleHBvcnQ6ICdFeHBvcnQnLFxuICAgICAgYWRkU3R5bGU6ICdBZGQgU3R5bGUnLFxuICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgZGVmYXVsdENhbmNlbDogJ0NhbmNlbCcsXG4gICAgICBkZWZhdWx0Q29uZmlybTogJ0NvbmZpcm0nXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ1JhdGlvJyxcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdDaG9vc2UgdGhlIHJhdGlvIGZvciB2YXJpb3VzIHVzYWdlcy4nLFxuICAgICAgcmF0aW9PcmlnaW5hbFNjcmVlbjogJ09yaWdpbmFsIFNjcmVlbicsXG4gICAgICByYXRpb0N1c3RvbTogJ0N1c3RvbScsXG4gICAgICByYXRpbzRfMzogJzQ6MycsXG4gICAgICByYXRpbzE2Xzk6ICcxNjo5JyxcbiAgICAgIHJlc29sdXRpb25UaXRsZTogJ1Jlc29sdXRpb24nLFxuICAgICAgcmVzb2x1dGlvbkRlc2NyaXB0aW9uOiAnSGlnaCByZXNvbHV0aW9uIGlzIGJldHRlciBmb3IgcHJpbnRzLicsXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ01hcCBMZWdlbmQnLFxuICAgICAgbWFwTGVnZW5kQWRkOiAnQWRkIGxlZ2VuZCBvbiBtYXAnXG4gICAgfSxcbiAgICBleHBvcnREYXRhOiB7XG4gICAgICBkYXRhc2V0VGl0bGU6ICdEYXRhc2V0JyxcbiAgICAgIGRhdGFzZXRTdWJ0aXRsZTogJ0Nob29zZSB0aGUgZGF0YXNldHMgeW91IHdhbnQgdG8gZXhwb3J0JyxcbiAgICAgIGFsbERhdGFzZXRzOiAnQWxsJyxcbiAgICAgIGRhdGFUeXBlVGl0bGU6ICdEYXRhIFR5cGUnLFxuICAgICAgZGF0YVR5cGVTdWJ0aXRsZTogJ0Nob29zZSB0aGUgdHlwZSBvZiBkYXRhIHlvdSB3YW50IHRvIGV4cG9ydCcsXG4gICAgICBmaWx0ZXJEYXRhVGl0bGU6ICdGaWx0ZXIgRGF0YScsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdZb3UgY2FuIGNob29zZSBleHBvcnRpbmcgb3JpZ2luYWwgZGF0YSBvciBmaWx0ZXJlZCBkYXRhJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0ZpbHRlcmVkIGRhdGEnLFxuICAgICAgdW5maWx0ZXJlZERhdGE6ICdVbmZpbHRlcmVkIERhdGEnLFxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gRmlsZXMnLFxuICAgICAgcm93Q291bnQ6ICd7cm93Q291bnR9IFJvd3MnXG4gICAgfSxcbiAgICBkZWxldGVEYXRhOiB7XG4gICAgICB3YXJuaW5nOiAneW91IGFyZSBnb2luZyB0byBkZWxldGUgdGhpcyBkYXRhc2V0LiBJdCB3aWxsIGFmZmVjdCB7bGVuZ3RofSBsYXllcnMnXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gUHVibGlzaCB5b3VyIHN0eWxlIGF0IG1hcGJveCBvciBwcm92aWRlIGFjY2VzcyB0b2tlbicsXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAnWW91IGNhbiBjcmVhdGUgeW91ciBvd24gbWFwIHN0eWxlIGF0JyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdhbmQnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1Ymxpc2gnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNDogJ2l0LicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU1OiAnVG8gdXNlIHByaXZhdGUgc3R5bGUsIHBhc3RlIHlvdXInLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogJ2FjY2VzcyB0b2tlbicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAnaGVyZS4gKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uLCBkYXRhIHN0YXlzIGluIHlvdXIgYnJvd3Nlci4uJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ2UuZy4gcGsuYWJjZGVmZy54eHh4eHgnLFxuICAgICAgcGFzdGVUaXRsZTogJzIuIFBhc3RlIHN0eWxlIHVybCcsXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1doYXQgaXMgYScsXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ3N0eWxlIFVSTCcsXG4gICAgICBuYW1pbmdUaXRsZTogJzMuIE5hbWUgeW91ciBzdHlsZSdcbiAgICB9LFxuICAgIHNoYXJlTWFwOiB7XG4gICAgICBzaGFyZVVyaVRpdGxlOiAnU2hhcmUgTWFwIFVybCcsXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhdGUgYSBtYXAgdXJsIHRvIHNoYXJlIHdpdGggb3RoZXJzJyxcbiAgICAgIGNsb3VkVGl0bGU6ICdDbG91ZCBzdG9yYWdlJyxcbiAgICAgIGNsb3VkU3VidGl0bGU6ICdMb2dpbiBhbmQgdXBsb2FkIG1hcCBkYXRhIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZScsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgd2lsbCBzYXZlIHlvdXIgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlLCBvbmx5IHBlb3BsZSB3aXRoIHRoZSBVUkwgY2FuIGFjY2VzcyB5b3VyIG1hcCBhbmQgZGF0YS4gJyArXG4gICAgICAgICdZb3UgY2FuIGVkaXQvZGVsZXRlIHRoZSBkYXRhIGZpbGUgaW4geW91ciBjbG91ZCBhY2NvdW50IGFueXRpbWUuJyxcbiAgICAgIGdvdG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0gcGFnZSdcbiAgICB9LFxuICAgIHN0YXR1c1BhbmVsOiB7XG4gICAgICBtYXBVcGxvYWRpbmc6ICdNYXAgVXBsb2FkaW5nJyxcbiAgICAgIGVycm9yOiAnRXJyb3InXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgc3VidGl0bGU6ICdMb2dpbiB0byBzYXZlIG1hcCB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UnXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnTWFwIGZvcm1hdCcsXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0Nob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bycsXG4gICAgICBodG1sOiB7XG4gICAgICAgIHNlbGVjdGlvbjogJ0V4cG9ydCB5b3VyIG1hcCBpbnRvIGFuIGludGVyYWN0aXZlIGh0bWwgZmlsZS4nLFxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVc2UgeW91ciBvd24gTWFwYm94IGFjY2VzcyB0b2tlbiBpbiB0aGUgaHRtbCAob3B0aW9uYWwpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ1Bhc3RlIHlvdXIgTWFwYm94IGFjY2VzcyB0b2tlbicsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBJZiB5b3UgZG8gbm90IHByb3ZpZGUgeW91ciBvd24gdG9rZW4sIHRoZSBtYXAgbWF5IGZhaWwgdG8gZGlzcGxheSBhdCBhbnkgdGltZSB3aGVuIHdlIHJlcGxhY2Ugb3VycyB0byBhdm9pZCBtaXN1c2UuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ1lvdSBjYW4gY2hhbmdlIHRoZSBNYXBib3ggdG9rZW4gbGF0ZXIgdXNpbmcgdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvbnM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnSG93IHRvIHVwZGF0ZSBhbiBleGlzdGluZyBtYXAgdG9rZW4uJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTWFwIE1vZGUnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWN0IHRoZSBhcHAgbW9kZS4gTW9yZSAnLFxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mbycsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ0FsbG93IHVzZXJzIHRvIHttb2RlfSB0aGUgbWFwJyxcbiAgICAgICAgcmVhZDogJ3JlYWQnLFxuICAgICAgICBlZGl0OiAnZWRpdCdcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnTWFwIENvbmZpZycsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgJ01hcCBjb25maWcgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgSnNvbiBmaWxlLiBJZiB5b3UgYXJlIHVzaW5nIGtlcGxlci5nbCBpbiB5b3VyIG93biBhcHAuIFlvdSBjYW4gY29weSB0aGlzIGNvbmZpZyBhbmQgcGFzcyBpdCB0byAnLFxuICAgICAgICBzZWxlY3Rpb246XG4gICAgICAgICAgJ0V4cG9ydCBjdXJyZW50IG1hcCBkYXRhIGFuZCBjb25maWcgaW50byBhIHNpbmdsZSBKc29uIGZpbGUuIFlvdSBjYW4gbGF0ZXIgb3BlbiB0aGUgc2FtZSBtYXAgYnkgdXBsb2FkaW5nIHRoaXMgZmlsZSB0byBrZXBsZXIuZ2wuJyxcbiAgICAgICAgZGlzY2xhaW1lcjpcbiAgICAgICAgICAnKiBNYXAgY29uZmlnIGlzIGNvdXBsZWQgd2l0aCBsb2FkZWQgZGF0YXNldHMuIOKAmGRhdGFJZOKAmSBpcyB1c2VkIHRvIGJpbmQgbGF5ZXJzLCBmaWx0ZXJzLCBhbmQgdG9vbHRpcHMgdG8gYSBzcGVjaWZpYyBkYXRhc2V0LiAnICtcbiAgICAgICAgICAnV2hlbiBwYXNzaW5nIHRoaXMgY29uZmlnIHRvIGFkZERhdGFUb01hcCwgbWFrZSBzdXJlIHRoZSBkYXRhc2V0IGlkIG1hdGNoZXMgdGhlIGRhdGFJZC9zIGluIHRoaXMgY29uZmlnLidcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRpbmdEaWFsb2c6IHtcbiAgICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJ1xuICAgIH0sXG4gICAgbG9hZERhdGE6IHtcbiAgICAgIHVwbG9hZDogJ0xvYWQgRmlsZXMnLFxuICAgICAgc3RvcmFnZTogJ0xvYWQgZnJvbSBTdG9yYWdlJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnSG93IHRvIGVuYWJsZSB0cmlwIGFuaW1hdGlvbicsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdJbiBvcmRlciB0byBhbmltYXRlIHRoZSBwYXRoLCB0aGUgZ2VvSlNPTiBkYXRhIG5lZWRzIHRvIGNvbnRhaW4gYExpbmVTdHJpbmdgIGluIGl0cyBmZWF0dXJlIGdlb21ldHJ5LCBhbmQgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBMaW5lU3RyaW5nIG5lZWQgdG8gaGF2ZSA0IGVsZW1lbnRzIGluIHRoZSBmb3JtYXRzIG9mJyxcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICd3aXRoIHRoZSBsYXN0IGVsZW1lbnQgYmVpbmcgYSB0aW1lc3RhbXAuIFZhbGlkIHRpbWVzdGFtcCBmb3JtYXRzIGluY2x1ZGUgdW5peCBpbiBzZWNvbmRzIHN1Y2ggYXMgYDE1NjQxODQzNjNgIG9yIGluIG1pbGxpc2Vjb25kcyBzdWNoIGFzIGAxNTY0MTg0MzYzMDAwYC4nLFxuICAgICAgZXhhbXBsZTogJ0V4YW1wbGU6J1xuICAgIH0sXG4gICAgaWNvbkluZm86IHtcbiAgICAgIHRpdGxlOiAnSG93IHRvIGRyYXcgaWNvbnMnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnSW4geW91ciBjc3YsIGNyZWF0ZSBhIGNvbHVtbiwgcHV0IHRoZSBuYW1lIG9mIHRoZSBpY29uIHlvdSB3YW50IHRvIGRyYXcgaW4gaXQuIFlvdSBjYW4gbGVhdmUgdGhlIGNlbGwgZW1wdHkgaWYgeW91IGRvIG5vdCB3YW50IHRoZSBpY29uIHRvIHNob3cgZm9yIHNvbWUgcG9pbnRzLiBXaGVuIHRoZSBjb2x1bW4gaXMgbmFtZWQnLFxuICAgICAgY29kZTogJ2ljb24nLFxuICAgICAgZGVzY3JpcHRpb24yOiAnIGtlcGxlci5nbCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgaWNvbiBsYXllciBmb3IgeW91LicsXG4gICAgICBleGFtcGxlOiAnRXhhbXBsZTonLFxuICAgICAgaWNvbnM6ICdJY29ucydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ0xhc3QgbW9kaWZpZWQge2xhc3RVcGRhdGVkfSBhZ28nLFxuICAgICAgYmFjazogJ0JhY2snXG4gICAgfSxcbiAgICBvdmVyd3JpdGVNYXA6IHtcbiAgICAgIHRpdGxlOiAnU2F2aW5nIG1hcC4uLicsXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnYWxyZWFkeSBleGlzdHMgaW4geW91ciB7bWFwU2F2ZWR9LiBXb3VsZCB5b3UgbGlrZSB0byBvdmVyd3JpdGUgaXQ/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdCYWNrJyxcbiAgICAgIGdvVG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2Rpc3BsYXlOYW1lfSBwYWdlJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnU3RvcmFnZSAvIE1hcHMnLFxuICAgICAgbm9TYXZlZE1hcHM6ICdObyBzYXZlZCBtYXBzIHlldCdcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHZpc2libGVMYXllcnM6ICdWaXNpYmxlIGxheWVycycsXG4gICAgbGF5ZXJMZWdlbmQ6ICdMYXllciBMZWdlbmQnXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIHRvb2x0aXA6ICdUb29sdGlwJyxcbiAgICBicnVzaDogJ0JydXNoJyxcbiAgICBjb29yZGluYXRlOiAnQ29vcmRpbmF0ZXMnLFxuICAgIGdlb2NvZGVyOiAnR2VvY29kZXInXG4gIH0sXG4gIGxheWVyQmxlbmRpbmc6IHtcbiAgICB0aXRsZTogJ0xheWVyIEJsZW5kaW5nJyxcbiAgICBhZGRpdGl2ZTogJ2FkZGl0aXZlJyxcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIHN1YnRyYWN0aXZlOiAnc3VidHJhY3RpdmUnXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVtbnMnLFxuICAgIGxhdDogJ2xhdCcsXG4gICAgbG5nOiAnbG9uJyxcbiAgICBhbHRpdHVkZTogJ2FsdGl0dWRlJyxcbiAgICBpY29uOiAnaWNvbicsXG4gICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgIGFyYzoge1xuICAgICAgbGF0MDogJ3NvdXJjZSBsYXQnLFxuICAgICAgbG5nMDogJ3NvdXJjZSBsbmcnLFxuICAgICAgbGF0MTogJ3RhcmdldCBsYXQnLFxuICAgICAgbG5nMTogJ3RhcmdldCBsbmcnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnR3JpZCBTaXplIChrbSknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnSGV4YWdvbiBSYWRpdXMgKGttKSdcbiAgICB9LFxuICAgIGhleF9pZDogJ2hleCBpZCdcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBjdXN0b21QYWxldHRlOiAnQ3VzdG9tIFBhbGV0dGUnLFxuICAgIHN0ZXBzOiAnc3RlcHMnLFxuICAgIHR5cGU6ICd0eXBlJyxcbiAgICByZXZlcnNlZDogJ3JldmVyc2VkJ1xuICB9LFxuICBzY2FsZToge1xuICAgIGNvbG9yU2NhbGU6ICdDb2xvciBTY2FsZScsXG4gICAgc2l6ZVNjYWxlOiAnU2l6ZSBTY2FsZScsXG4gICAgc3Ryb2tlU2NhbGU6ICdTdHJva2UgU2NhbGUnLFxuICAgIHNjYWxlOiAnU2NhbGUnXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6ICdEcmFnICYgRHJvcCBZb3VyIEZpbGUocykgSGVyZScsXG4gICAgY2hyb21lTWVzc2FnZTpcbiAgICAgICcqQ2hyb21lIHVzZXI6IExpbWl0IGZpbGUgc2l6ZSB0byAyNTBtYiwgaWYgbmVlZCB0byB1cGxvYWQgbGFyZ2VyIGZpbGUsIHRyeSBTYWZhcmknLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uIHdpdGggbm8gc2VydmVyIGJhY2tlbmQuIERhdGEgbGl2ZXMgb25seSBvbiB5b3VyIG1hY2hpbmUvYnJvd3Nlci4gJyArXG4gICAgICAnTm8gaW5mb3JtYXRpb24gb3IgbWFwIGRhdGEgaXMgc2VudCB0byBhbnkgc2VydmVyLicsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICdVcGxvYWQge2ZpbGVGb3JtYXROYW1lc30gb3Igc2F2ZWQgbWFwICoqSnNvbioqLiBSZWFkIG1vcmUgYWJvdXQgWyoqc3VwcG9ydGVkIGZpbGUgZm9ybWF0cyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICdicm93c2UgeW91ciBmaWxlcycsXG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nJyxcbiAgICBmaWxlTm90U3VwcG9ydGVkOiAnRmlsZSB7ZXJyb3JGaWxlc30gaXMgbm90IHN1cHBvcnRlZC4nLFxuICAgIG9yOiAnb3InXG4gIH0sXG4gIGdlb2NvZGVyOiB7XG4gICAgdGl0bGU6ICdFbnRlciBhbiBBZGRyZXNzJ1xuICB9LFxuICBmaWVsZFNlbGVjdG9yOiB7XG4gICAgY2xlYXJBbGw6ICdDbGVhciBBbGwnLFxuICAgIGZvcm1hdHRpbmc6ICdGb3JtYXR0aW5nJ1xuICB9LFxuICBjb21wYXJlOiB7XG4gICAgbW9kZUxhYmVsOiAnQ29tcGFyaXNvbiBNb2RlJyxcbiAgICB0eXBlTGFiZWw6ICdDb21wYXJpc29uIFR5cGUnLFxuICAgIHR5cGVzOiB7XG4gICAgICBhYnNvbHV0ZTogJ0Fic29sdXRlJyxcbiAgICAgIHJlbGF0aXZlOiAnUmVsYXRpdmUnXG4gICAgfVxuICB9LFxuICBtYXBQb3BvdmVyOiB7XG4gICAgcHJpbWFyeTogJ1ByaW1hcnknXG4gIH0sXG4gIGRlbnNpdHk6ICdkZW5zaXR5JyxcbiAgJ0J1ZyBSZXBvcnQnOiAnQnVnIFJlcG9ydCcsXG4gICdVc2VyIEd1aWRlJzogJ1VzZXIgR3VpZGUnLFxuICBTYXZlOiAnU2F2ZScsXG4gIFNoYXJlOiAnU2hhcmUnXG59O1xuIl19