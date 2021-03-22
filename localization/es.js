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
    weight: 'peso',
    label: 'etiqueta',
    fillColor: 'color de relleno',
    color: 'color',
    coverage: 'cobertura',
    strokeColor: 'color de trazo',
    radius: 'radio',
    outline: 'contorno',
    stroke: 'trazo',
    density: 'densidad',
    height: 'altura',
    sum: 'suma',
    pointCount: 'Recuento de puntos'
  },
  placeholder: {
    search: 'Busqueda',
    selectField: 'Selecciona un campo',
    yAxis: 'Eje Y',
    selectType: 'Selecciona un Tipo',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'vacio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores en',
    valueEquals: 'Valor igual a',
    dataSource: 'Fuente de datos',
    brushRadius: 'Radio del pincel (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capas del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edificio',
    water: 'Agua',
    land: 'Tierra',
    '3dBuilding': 'Edificio 3D'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Tamaño de fuente',
      fontColor: 'Color de fuente',
      textAnchor: 'Anclaje del texto',
      alignment: 'Alineación',
      addMoreLabel: 'Añadir más etiquetas'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capas',
      filter: 'Filtros',
      interaction: 'Interacciones',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerido*',
    radius: 'Radio',
    color: 'Color',
    fillColor: 'Color de relleno',
    outline: 'Contorno',
    weight: 'Grueso',
    propertyBasedOn: '{property} basado en',
    coverage: 'Cobertura',
    stroke: 'Trazo',
    strokeWidth: 'Grosor de trazo',
    strokeColor: 'Color de trazo',
    basic: 'Básico',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Numero de segundos hasta que desaparezca el camino',
    newLayer: 'nueva capa',
    elevationByDescription: 'Si desactivado, la altura se basa en el recuento de puntos',
    colorByDescription: 'Si desactivado, el color se basa en el recuento de puntos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opciones del modelo 3D',
    type: {
      point: 'punto',
      arc: 'arco',
      line: 'línea',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icono',
      heatmap: 'concentración',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viaje',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Ángulo',
    strokeWidth: 'Ancho del trazo',
    strokeWidthRange: 'Rango del ancho del trazo',
    radius: 'Radio',
    fixedRadius: 'Radio fijo a medir',
    fixedRadiusDescription: 'Ajustar el radio al radio absoluto en metros, p.e. 5 a 5 metros',
    radiusRange: 'Rango de radio',
    clusterRadius: 'Radio del cluster en píxeles',
    radiusRangePixels: 'Rango del radio en píxeles',
    opacity: 'Opacidad',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Rango de color',
    stroke: 'Trazo',
    strokeColor: 'Color de trazo',
    strokeColorRange: 'Rango de color de trazo',
    targetColor: 'Color destino',
    colorAggregation: 'Agregación de color',
    heightAggregation: 'Agregación de la altura',
    resolutionRange: 'Rango de resolución',
    sizeScale: 'Medida de escala',
    worldUnitSize: 'Medida de la unidad mundial',
    elevationScale: 'Escala de elevación',
    heightScale: 'Escala de altura',
    coverageRange: 'Rango de cobertura',
    highPrecisionRendering: 'Representación de alta precisión',
    highPrecisionRenderingDescription: 'La precisión alta tendrá un rendimiento más bajo',
    height: 'Altura',
    heightDescription: 'Haz clic en el botón de arriba a la derecha del mapa per cambiar a vista 3D',
    fill: 'Rellenar',
    enablePolygonHeight: 'Activar la altura del polígono',
    showWireframe: 'Muestra esquemàtico',
    weightIntensity: 'Intensidad de peso',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rango de alturas'
  },
  layerManager: {
    addData: 'Añadir datos',
    addLayer: 'Añadir capa',
    layerBlending: 'Combinar capas'
  },
  mapManager: {
    mapStyle: 'Estilo de mapa',
    addMapStyle: 'Añadir estilo de mapa',
    '3dBuildingColor': 'Color edificios 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} según el campo seleccionado',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Añadir filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostar la tabla de datos',
    removeDataset: 'Eliminar conjunto de datos'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'Ocultar la capa',
    showLayer: 'Mostrar la capa',
    hideFeature: 'Ocultar el objeto',
    showFeature: 'Mostrar el objeto',
    hide: 'Ocultar',
    show: 'Mostrar',
    removeLayer: 'Eliminar capa',
    layerSettings: 'Configuración de capa',
    closePanel: 'Cerrar el panel actual',
    switchToDualView: 'Cambiar a la vista de mapa dual',
    showLegend: 'Mostrar leyenda',
    disable3DMap: 'Desactivar mapa 3D',
    DrawOnMap: 'Dibujar en el mapa',
    selectLocale: 'Seleccionar configuración regional',
    hideLayerPanel: 'Ocultar la tabla de capas',
    showLayerPanel: 'Mostrar la tabla  de capas',
    moveToTop: 'Desplazar arriba de las capas de datos',
    selectBaseMapStyle: 'Seleccionar estilo de mapa base',
    "delete": 'Borrar',
    timePlayback: 'Reproducción de tiempo',
    cloudStorage: 'Almacenaje en la nube',
    '3DMap': 'Mapa 3D',
    animationByWindow: 'Ventana Temporal Móvil',
    animationByIncremental: 'Ventana Temporal Incremental',
    speed: 'velocidad',
    play: 'iniciar',
    pause: 'pausar',
    reset: 'reiniciar'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar imagen',
    exportData: 'Exportar datos',
    exportMap: 'Exportar mapa',
    shareMapURL: 'Compartir el enlace del mapa',
    saveMap: 'Guardar mapa',
    select: 'selecciona',
    polygon: 'polígono',
    rectangle: 'rectángulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Borrar conjunto de datos',
      addDataToMap: 'Añadir datos al mapa',
      exportImage: 'Exportar imagen',
      exportData: 'Exportar datos',
      exportMap: 'Exportar mapa',
      addCustomMapboxStyle: 'Añadir estilo de Mapbox propio',
      saveMap: 'Guardar mapa',
      shareURL: 'Compartir enlace'
    },
    button: {
      "delete": 'Borrar',
      download: 'Descargar',
      "export": 'Exportar',
      addStyle: 'Añadir estilo',
      save: 'Guardar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Esoger ratio por diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolución',
      resolutionDescription: 'Una alta resolución es mejor para las impresiones.',
      mapLegendTitle: 'Leyenda del mapa',
      mapLegendAdd: 'Añadir leyenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de datos',
      datasetSubtitle: 'Escoger los conjuntos de datos a exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de datos',
      dataTypeSubtitle: 'Escoger el tipo de datos a exportar',
      filterDataTitle: 'Filtrar datos',
      filterDataSubtitle: 'Se puede escoger exportar los datos originales o filtrados',
      filteredData: 'Datos filtrados',
      unfilteredData: 'Datos sin filtrar',
      fileCount: '{fileCount} Archivos',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: 'estás a punto de borrar este conjunto de datos. Afectará a {length} capas'
    },
    addStyle: {
      publishTitle: '1. Publicar tu estilo en Mapbox o proporcionar el token de acceso',
      publishSubtitle1: 'Puedes crear el tu propio estilo de mapa en',
      publishSubtitle2: 'y',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'lo.',
      publishSubtitle5: 'Para utilizar un estilo privado, engancha tu',
      publishSubtitle6: 'token de acceso',
      publishSubtitle7: 'aquí. *kepler.gl es una aplicación cliente, los datos quedan en tu navegador..',
      exampleToken: 'p.e. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Engancha el enlace del estilo',
      pasteSubtitle1: 'Qué es un',
      pasteSubtitle2: 'enlace del estilo',
      namingTitle: '3. Poner nombre a tu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartir el enlace del mapa',
      shareUriSubtitle: 'Generar un enlace del mapa para compartir con otros',
      cloudTitle: 'Almacenage en la nube',
      cloudSubtitle: 'Acceder y cargar datos del mapa a tu almacenage a la nube personal',
      shareDisclaimer: 'kepler.gl guardará los datos del mapa en el almacenage de tu nube personal, sólo quien tenga el enlace podra acceder al mapa y a los datos . ' + 'Puedes editar/borrar el archivo de datos en tu cuenta en la nube en cualquier momento.',
      gotoPage: 'Ves a la página de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Cargar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Almacentage en la nube',
      subtitle: 'Acceder para guardar el mapa en teu almacenage en la nube'
    },
    exportMap: {
      formatTitle: 'Formato de mapa',
      formatSubtitle: 'Escoger el formato al que se desea exportar el mapa',
      html: {
        selection: 'Exportar tu mapa como un archivo HTML interactivo.',
        tokenTitle: 'Token de acceso de Mapbox',
        tokenSubtitle: 'Utilizar tu token de acceso a Mapbox al archivo HTML (opcional)',
        tokenPlaceholder: 'Enganchar tu token de acceso a Mapbox',
        tokenMisuseWarning: '* Si no proporcionas tu propio token, el mapa podría fallar en cualquier momento cuando reemplacemos nuestro token para evitar abusos. ',
        tokenDisclaimer: 'Puedes cambiar el token de Mapbox posteriormente utilizando estas instrucciones: ',
        tokenUpdate: 'Como actualitzar un token preexistente.',
        modeTitle: 'Modo mapa',
        modeSubtitle1: 'Seleccionar modo app. Más ',
        modeSubtitle2: 'información',
        modeDescription: 'Permmite a los usuarios {modo} el mapa',
        read: 'leer',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuración del mapa',
        configDisclaimer: 'La configuración del mapa será incluida en el archivo Json. Si utilitzas kepler.gl en tu propia app puedes copiar esta configuración y pasarla a  ',
        selection: 'Exportar los datos del mapa y la configuración en un solo archivo Json. Posteriormente puedes abrir este mismo mapa cargando este mismo archivo a kepler.gl.',
        disclaimer: '* La configuración del mapa se combina con los conjuntos de datos cargados. ‘dataId’ se utiliza para vincular capas, filtros y sugerencias a un conjunto de datos específico. ' + 'Cuando pases esta configuración a addDataToMap, asegura que el identificador del conjunto de datos coincida con los ‘dataId’ de esta configuración.'
      }
    },
    loadingDialog: {
      loading: 'Cargando...'
    },
    loadData: {
      upload: 'Cargar archivos',
      storage: 'Cargar desde almacenage'
    },
    tripInfo: {
      title: 'Como habilitar la animación de viaje',
      description1: 'Para animar la ruta, los datos geoJSON han de contener `LineString` en su geometría y las coordenadas de LineString deben tener 4 elementos en los formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'y el último elemento debe ser la marca del tiempo. Los formatos válidos para la marca de tiempo incluyen Unix en segundos como `1564184363` o en milisegundos como `1564184363000`.',
      example: 'Ejemplo:'
    },
    iconInfo: {
      title: 'Como dibujar íconos',
      description1: 'En tu CSV crea una columna y pon el nombre del ícono que quieres dibujar. Puedes dejar la celda vacía cuando no quieras que se muestre para ciertos puntos. Cuando la columna se llama',
      code: 'ícono',
      description2: ' kepler.gl automáticamente creará una capa de ícono.',
      example: 'Ejemplo:',
      icons: 'Iconos'
    },
    storageMapViewer: {
      lastModified: 'Última modificación hace {lastUpdated}',
      back: 'Atrás'
    },
    overwriteMap: {
      title: 'Guardando el mapa...',
      alreadyExists: 'ja existe en {mapSaved}. Lo quieres sobreescrivir?'
    },
    loadStorageMap: {
      back: 'Atrás',
      goToPage: 'Ves a la página {displayName} de Kepler.gl',
      storageMaps: 'Almancenage / Mapas',
      noSavedMaps: 'No hay ningún mapa guardado todavía'
    }
  },
  header: {
    visibleLayers: 'Capas visibles',
    layerLegend: 'Capa de leyenda'
  },
  interactions: {
    tooltip: 'Sugerencias',
    brush: 'Pincel',
    coordinate: 'Coordenadas',
    geocoder: 'Geocodificador'
  },
  layerBlending: {
    title: 'Combinación de capas',
    additive: 'aditiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altura',
    icon: 'ícono',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destino',
      lng1: 'lng destino'
    },
    grid: {
      worldUnitSize: 'Tamaño de la malla (km)'
    },
    hexagon: {
      worldUnitSize: 'Radio de hexágono (km)'
    },
    hex_id: 'id hex'
  },
  color: {
    customPalette: 'Paleta personalizada',
    steps: 'pasos',
    type: 'tipo',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de medidas',
    strokeScale: 'Escala de trazo',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arrastra y suelta el archivo aquí',
    chromeMessage: '*usuario de Chrome: la medida máxima son 250mb, si debes cargar un archivo más grande utiliza Safari',
    disclaimer: '*kepler.gl es una aplicación al lado cliente que no utiliza ningún servidor. Los datos sólo existen en tu máquina/navegador. ' + 'No se envian datos ni mapas a ningún servidor.',
    configUploadMessage: 'Cargar {fileFormatNames} o un mapa guardado en **Json**. Más información sobre [**supported file formats**]',
    browseFiles: 'navega por tus archivos',
    uploading: 'Cargando',
    fileNotSupported: 'El archivo {errorFiles} no es compatible.',
    or: 'o'
  },
  geocoder: {
    title: 'Introduce una dirección'
  },
  fieldSelector: {
    clearAll: 'Quitar todos',
    formatting: 'Formato'
  },
  compare: {
    modeLabel: 'Modo Comparación',
    typeLabel: 'Tipo de Comparación',
    types: {
      absolute: 'Absoluta',
      relative: 'Relativa'
    }
  },
  mapPopover: {
    primary: 'Principal'
  },
  density: 'densidad',
  'Bug Report': 'Informe de errores',
  'User Guide': 'Guía de usuario',
  Save: 'Guadar',
  Share: 'Compartir'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZXMuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImxheWVyTWFuYWdlciIsImFkZERhdGEiLCJhZGRMYXllciIsImxheWVyQmxlbmRpbmciLCJtYXBNYW5hZ2VyIiwibWFwU3R5bGUiLCJhZGRNYXBTdHlsZSIsImxheWVyQ29uZmlndXJhdGlvbiIsImRlZmF1bHREZXNjcmlwdGlvbiIsImhvd1RvIiwiZmlsdGVyTWFuYWdlciIsImFkZEZpbHRlciIsImRhdGFzZXRUaXRsZSIsInNob3dEYXRhVGFibGUiLCJyZW1vdmVEYXRhc2V0IiwiZGF0YXNldEluZm8iLCJyb3dDb3VudCIsInRvb2x0aXAiLCJoaWRlTGF5ZXIiLCJzaG93TGF5ZXIiLCJoaWRlRmVhdHVyZSIsInNob3dGZWF0dXJlIiwiaGlkZSIsInNob3ciLCJyZW1vdmVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwiYW5pbWF0aW9uQnlXaW5kb3ciLCJhbmltYXRpb25CeUluY3JlbWVudGFsIiwic3BlZWQiLCJwbGF5IiwicGF1c2UiLCJyZXNldCIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJhbHRpdHVkZSIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxNQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxrQkFISDtBQUlSQyxJQUFBQSxLQUFLLEVBQUUsT0FKQztBQUtSQyxJQUFBQSxRQUFRLEVBQUUsV0FMRjtBQU1SQyxJQUFBQSxXQUFXLEVBQUUsZ0JBTkw7QUFPUkMsSUFBQUEsTUFBTSxFQUFFLE9BUEE7QUFRUkMsSUFBQUEsT0FBTyxFQUFFLFVBUkQ7QUFTUkMsSUFBQUEsTUFBTSxFQUFFLE9BVEE7QUFVUkMsSUFBQUEsT0FBTyxFQUFFLFVBVkQ7QUFXUkMsSUFBQUEsTUFBTSxFQUFFLFFBWEE7QUFZUkMsSUFBQUEsR0FBRyxFQUFFLE1BWkc7QUFhUkMsSUFBQUEsVUFBVSxFQUFFO0FBYkosR0FERztBQWdCYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxVQURHO0FBRVhDLElBQUFBLFdBQVcsRUFBRSxxQkFGRjtBQUdYQyxJQUFBQSxLQUFLLEVBQUUsT0FISTtBQUlYQyxJQUFBQSxVQUFVLEVBQUUsb0JBSkQ7QUFLWEMsSUFBQUEsV0FBVyxFQUFFLHFCQUxGO0FBTVhDLElBQUFBLFVBQVUsRUFBRSxnQkFORDtBQU9YQyxJQUFBQSxLQUFLLEVBQUU7QUFQSSxHQWhCQTtBQXlCYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEVBQUUsRUFBRSxFQURBO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxZQUZOO0FBR0pDLElBQUFBLFdBQVcsRUFBRSxlQUhUO0FBSUpDLElBQUFBLFVBQVUsRUFBRSxpQkFKUjtBQUtKQyxJQUFBQSxXQUFXLEVBQUUsdUJBTFQ7QUFNSk4sSUFBQUEsS0FBSyxFQUFFO0FBTkgsR0F6Qk87QUFpQ2JPLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxLQUFLLEVBQUUsZ0JBREU7QUFFVDNCLElBQUFBLEtBQUssRUFBRSxVQUZFO0FBR1Q0QixJQUFBQSxJQUFJLEVBQUUsV0FIRztBQUlUQyxJQUFBQSxNQUFNLEVBQUUsVUFKQztBQUtUQyxJQUFBQSxRQUFRLEVBQUUsVUFMRDtBQU1UQyxJQUFBQSxLQUFLLEVBQUUsTUFORTtBQU9UQyxJQUFBQSxJQUFJLEVBQUUsUUFQRztBQVFULGtCQUFjO0FBUkwsR0FqQ0U7QUEyQ2JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFDSmxDLE1BQUFBLEtBQUssRUFBRSxVQURIO0FBRUptQyxNQUFBQSxXQUFXLEVBQUUsb0JBRlQ7QUFHSkMsTUFBQUEsUUFBUSxFQUFFLGtCQUhOO0FBSUpDLE1BQUFBLFNBQVMsRUFBRSxpQkFKUDtBQUtKQyxNQUFBQSxVQUFVLEVBQUUsbUJBTFI7QUFNSkMsTUFBQUEsU0FBUyxFQUFFLFlBTlA7QUFPSkMsTUFBQUEsWUFBWSxFQUFFO0FBUFY7QUFERCxHQTNDTTtBQXNEYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxNQUFBQSxNQUFNLEVBQUUsU0FGRjtBQUdOQyxNQUFBQSxXQUFXLEVBQUUsZUFIUDtBQUlOQyxNQUFBQSxPQUFPLEVBQUU7QUFKSDtBQURELEdBdERJO0FBOERiSCxFQUFBQSxLQUFLLEVBQUU7QUFDTEksSUFBQUEsUUFBUSxFQUFFLFlBREw7QUFFTDFDLElBQUFBLE1BQU0sRUFBRSxPQUZIO0FBR0xILElBQUFBLEtBQUssRUFBRSxPQUhGO0FBSUxELElBQUFBLFNBQVMsRUFBRSxrQkFKTjtBQUtMSyxJQUFBQSxPQUFPLEVBQUUsVUFMSjtBQU1MUCxJQUFBQSxNQUFNLEVBQUUsUUFOSDtBQU9MaUQsSUFBQUEsZUFBZSxFQUFFLHNCQVBaO0FBUUw3QyxJQUFBQSxRQUFRLEVBQUUsV0FSTDtBQVNMSSxJQUFBQSxNQUFNLEVBQUUsT0FUSDtBQVVMMEMsSUFBQUEsV0FBVyxFQUFFLGlCQVZSO0FBV0w3QyxJQUFBQSxXQUFXLEVBQUUsZ0JBWFI7QUFZTDhDLElBQUFBLEtBQUssRUFBRSxRQVpGO0FBYUxDLElBQUFBLFdBQVcsRUFBRSxtQkFiUjtBQWNMQyxJQUFBQSxzQkFBc0IsRUFBRSxvREFkbkI7QUFlTEMsSUFBQUEsUUFBUSxFQUFFLFlBZkw7QUFnQkxDLElBQUFBLHNCQUFzQixFQUFFLDREQWhCbkI7QUFpQkxDLElBQUFBLGtCQUFrQixFQUFFLDJEQWpCZjtBQWtCTEMsSUFBQUEsV0FBVyxFQUFFLHNCQWxCUjtBQW1CTCxlQUFXLFdBbkJOO0FBb0JMLHNCQUFrQix3QkFwQmI7QUFxQkxDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxNQUFBQSxHQUFHLEVBQUUsTUFGRDtBQUdKQyxNQUFBQSxJQUFJLEVBQUUsT0FIRjtBQUlKQyxNQUFBQSxJQUFJLEVBQUUsT0FKRjtBQUtKQyxNQUFBQSxNQUFNLEVBQUUsUUFMSjtBQU1KQyxNQUFBQSxPQUFPLEVBQUUsVUFOTDtBQU9KQyxNQUFBQSxPQUFPLEVBQUUsU0FQTDtBQVFKQyxNQUFBQSxPQUFPLEVBQUUsU0FSTDtBQVNKQyxNQUFBQSxJQUFJLEVBQUUsT0FURjtBQVVKQyxNQUFBQSxPQUFPLEVBQUUsZUFWTDtBQVdKQyxNQUFBQSxPQUFPLEVBQUUsVUFYTDtBQVlKQyxNQUFBQSxTQUFTLEVBQUUsSUFaUDtBQWFKQyxNQUFBQSxJQUFJLEVBQUUsT0FiRjtBQWNKQyxNQUFBQSxFQUFFLEVBQUUsSUFkQTtBQWVKLFlBQU07QUFmRjtBQXJCRCxHQTlETTtBQXFHYkMsRUFBQUEsZUFBZSxFQUFFO0FBQ2ZDLElBQUFBLEtBQUssRUFBRSxRQURRO0FBRWZ4QixJQUFBQSxXQUFXLEVBQUUsaUJBRkU7QUFHZnlCLElBQUFBLGdCQUFnQixFQUFFLDJCQUhIO0FBSWZyRSxJQUFBQSxNQUFNLEVBQUUsT0FKTztBQUtmc0UsSUFBQUEsV0FBVyxFQUFFLG9CQUxFO0FBTWZDLElBQUFBLHNCQUFzQixFQUFFLGlFQU5UO0FBT2ZDLElBQUFBLFdBQVcsRUFBRSxnQkFQRTtBQVFmQyxJQUFBQSxhQUFhLEVBQUUsOEJBUkE7QUFTZkMsSUFBQUEsaUJBQWlCLEVBQUUsNEJBVEo7QUFVZkMsSUFBQUEsT0FBTyxFQUFFLFVBVk07QUFXZjdFLElBQUFBLFFBQVEsRUFBRSxXQVhLO0FBWWZHLElBQUFBLE9BQU8sRUFBRSxVQVpNO0FBYWYyRSxJQUFBQSxVQUFVLEVBQUUsZ0JBYkc7QUFjZjFFLElBQUFBLE1BQU0sRUFBRSxPQWRPO0FBZWZILElBQUFBLFdBQVcsRUFBRSxnQkFmRTtBQWdCZjhFLElBQUFBLGdCQUFnQixFQUFFLHlCQWhCSDtBQWlCZkMsSUFBQUEsV0FBVyxFQUFFLGVBakJFO0FBa0JmQyxJQUFBQSxnQkFBZ0IsRUFBRSxxQkFsQkg7QUFtQmZDLElBQUFBLGlCQUFpQixFQUFFLHlCQW5CSjtBQW9CZkMsSUFBQUEsZUFBZSxFQUFFLHFCQXBCRjtBQXFCZkMsSUFBQUEsU0FBUyxFQUFFLGtCQXJCSTtBQXNCZkMsSUFBQUEsYUFBYSxFQUFFLDZCQXRCQTtBQXVCZkMsSUFBQUEsY0FBYyxFQUFFLHFCQXZCRDtBQXdCZkMsSUFBQUEsV0FBVyxFQUFFLGtCQXhCRTtBQXlCZkMsSUFBQUEsYUFBYSxFQUFFLG9CQXpCQTtBQTBCZkMsSUFBQUEsc0JBQXNCLEVBQUUsa0NBMUJUO0FBMkJmQyxJQUFBQSxpQ0FBaUMsRUFBRSxrREEzQnBCO0FBNEJmcEYsSUFBQUEsTUFBTSxFQUFFLFFBNUJPO0FBNkJmcUYsSUFBQUEsaUJBQWlCLEVBQUUsNkVBN0JKO0FBOEJmQyxJQUFBQSxJQUFJLEVBQUUsVUE5QlM7QUErQmZDLElBQUFBLG1CQUFtQixFQUFFLGdDQS9CTjtBQWdDZkMsSUFBQUEsYUFBYSxFQUFFLHFCQWhDQTtBQWlDZkMsSUFBQUEsZUFBZSxFQUFFLG9CQWpDRjtBQWtDZkMsSUFBQUEsU0FBUyxFQUFFLGdCQWxDSTtBQW1DZkMsSUFBQUEsV0FBVyxFQUFFO0FBbkNFLEdBckdKO0FBMEliQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsT0FBTyxFQUFFLGNBREc7QUFFWkMsSUFBQUEsUUFBUSxFQUFFLGFBRkU7QUFHWkMsSUFBQUEsYUFBYSxFQUFFO0FBSEgsR0ExSUQ7QUErSWJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxRQUFRLEVBQUUsZ0JBREE7QUFFVkMsSUFBQUEsV0FBVyxFQUFFLHVCQUZIO0FBR1YsdUJBQW1CO0FBSFQsR0EvSUM7QUFvSmJDLEVBQUFBLGtCQUFrQixFQUFFO0FBQ2xCQyxJQUFBQSxrQkFBa0IsRUFBRSxpREFERjtBQUVsQkMsSUFBQUEsS0FBSyxFQUFFO0FBRlcsR0FwSlA7QUF3SmJDLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxTQUFTLEVBQUU7QUFERSxHQXhKRjtBQTJKYkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pDLElBQUFBLGFBQWEsRUFBRSwwQkFESDtBQUVaQyxJQUFBQSxhQUFhLEVBQUU7QUFGSCxHQTNKRDtBQStKYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLFFBQVEsRUFBRTtBQURDLEdBL0pBO0FBa0tiQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyxFQUFFLGlCQURKO0FBRVBDLElBQUFBLFNBQVMsRUFBRSxpQkFGSjtBQUdQQyxJQUFBQSxXQUFXLEVBQUUsbUJBSE47QUFJUEMsSUFBQUEsV0FBVyxFQUFFLG1CQUpOO0FBS1BDLElBQUFBLElBQUksRUFBRSxTQUxDO0FBTVBDLElBQUFBLElBQUksRUFBRSxTQU5DO0FBT1BDLElBQUFBLFdBQVcsRUFBRSxlQVBOO0FBUVBDLElBQUFBLGFBQWEsRUFBRSx1QkFSUjtBQVNQQyxJQUFBQSxVQUFVLEVBQUUsd0JBVEw7QUFVUEMsSUFBQUEsZ0JBQWdCLEVBQUUsaUNBVlg7QUFXUEMsSUFBQUEsVUFBVSxFQUFFLGlCQVhMO0FBWVBDLElBQUFBLFlBQVksRUFBRSxvQkFaUDtBQWFQQyxJQUFBQSxTQUFTLEVBQUUsb0JBYko7QUFjUEMsSUFBQUEsWUFBWSxFQUFFLG9DQWRQO0FBZVBDLElBQUFBLGNBQWMsRUFBRSwyQkFmVDtBQWdCUEMsSUFBQUEsY0FBYyxFQUFFLDRCQWhCVDtBQWlCUEMsSUFBQUEsU0FBUyxFQUFFLHdDQWpCSjtBQWtCUEMsSUFBQUEsa0JBQWtCLEVBQUUsaUNBbEJiO0FBbUJQLGNBQVEsUUFuQkQ7QUFvQlBDLElBQUFBLFlBQVksRUFBRSx3QkFwQlA7QUFxQlBDLElBQUFBLFlBQVksRUFBRSx1QkFyQlA7QUFzQlAsYUFBUyxTQXRCRjtBQXVCUEMsSUFBQUEsaUJBQWlCLEVBQUUsd0JBdkJaO0FBd0JQQyxJQUFBQSxzQkFBc0IsRUFBRSw4QkF4QmpCO0FBeUJQQyxJQUFBQSxLQUFLLEVBQUUsV0F6QkE7QUEwQlBDLElBQUFBLElBQUksRUFBRSxTQTFCQztBQTJCUEMsSUFBQUEsS0FBSyxFQUFFLFFBM0JBO0FBNEJQQyxJQUFBQSxLQUFLLEVBQUU7QUE1QkEsR0FsS0k7QUFnTWJDLEVBQUFBLE9BQU87QUFDTEMsSUFBQUEsV0FBVyxFQUFFLGlCQURSO0FBRUxDLElBQUFBLFVBQVUsRUFBRSxnQkFGUDtBQUdMQyxJQUFBQSxTQUFTLEVBQUUsZUFITjtBQUlMQyxJQUFBQSxXQUFXLEVBQUUsOEJBSlI7QUFLTEMsSUFBQUEsT0FBTyxFQUFFLGNBTEo7QUFNTEMsSUFBQUEsTUFBTSxFQUFFLFlBTkg7QUFPTHhGLElBQUFBLE9BQU8sRUFBRSxVQVBKO0FBUUx5RixJQUFBQSxTQUFTLEVBQUUsWUFSTjtBQVNMN0IsSUFBQUEsSUFBSSxFQUFFLFVBVEQ7QUFVTEMsSUFBQUEsSUFBSSxFQUFFO0FBVkQsS0FXRjZCLGdCQVhFLENBaE1NO0FBNk1iQyxFQUFBQSxLQUFLLEVBQUU7QUFDTC9ILElBQUFBLEtBQUssRUFBRTtBQUNMZ0ksTUFBQUEsYUFBYSxFQUFFLDBCQURWO0FBRUxDLE1BQUFBLFlBQVksRUFBRSxzQkFGVDtBQUdMVixNQUFBQSxXQUFXLEVBQUUsaUJBSFI7QUFJTEMsTUFBQUEsVUFBVSxFQUFFLGdCQUpQO0FBS0xDLE1BQUFBLFNBQVMsRUFBRSxlQUxOO0FBTUxTLE1BQUFBLG9CQUFvQixFQUFFLGdDQU5qQjtBQU9MUCxNQUFBQSxPQUFPLEVBQUUsY0FQSjtBQVFMUSxNQUFBQSxRQUFRLEVBQUU7QUFSTCxLQURGO0FBV0xDLElBQUFBLE1BQU0sRUFBRTtBQUNOLGdCQUFRLFFBREY7QUFFTkMsTUFBQUEsUUFBUSxFQUFFLFdBRko7QUFHTixnQkFBUSxVQUhGO0FBSU5DLE1BQUFBLFFBQVEsRUFBRSxlQUpKO0FBS05DLE1BQUFBLElBQUksRUFBRSxTQUxBO0FBTU5DLE1BQUFBLGFBQWEsRUFBRSxVQU5UO0FBT05DLE1BQUFBLGNBQWMsRUFBRTtBQVBWLEtBWEg7QUFvQkxsQixJQUFBQSxXQUFXLEVBQUU7QUFDWG1CLE1BQUFBLFVBQVUsRUFBRSxPQUREO0FBRVhDLE1BQUFBLGdCQUFnQixFQUFFLGlDQUZQO0FBR1hDLE1BQUFBLG1CQUFtQixFQUFFLG1CQUhWO0FBSVhDLE1BQUFBLFdBQVcsRUFBRSxlQUpGO0FBS1hDLE1BQUFBLFFBQVEsRUFBRSxLQUxDO0FBTVhDLE1BQUFBLFNBQVMsRUFBRSxNQU5BO0FBT1hDLE1BQUFBLGVBQWUsRUFBRSxZQVBOO0FBUVhDLE1BQUFBLHFCQUFxQixFQUFFLG9EQVJaO0FBU1hDLE1BQUFBLGNBQWMsRUFBRSxrQkFUTDtBQVVYQyxNQUFBQSxZQUFZLEVBQUU7QUFWSCxLQXBCUjtBQWdDTDNCLElBQUFBLFVBQVUsRUFBRTtBQUNWbEMsTUFBQUEsWUFBWSxFQUFFLG1CQURKO0FBRVY4RCxNQUFBQSxlQUFlLEVBQUUsMkNBRlA7QUFHVkMsTUFBQUEsV0FBVyxFQUFFLE9BSEg7QUFJVkMsTUFBQUEsYUFBYSxFQUFFLGVBSkw7QUFLVkMsTUFBQUEsZ0JBQWdCLEVBQUUscUNBTFI7QUFNVkMsTUFBQUEsZUFBZSxFQUFFLGVBTlA7QUFPVkMsTUFBQUEsa0JBQWtCLEVBQUUsNERBUFY7QUFRVkMsTUFBQUEsWUFBWSxFQUFFLGlCQVJKO0FBU1ZDLE1BQUFBLGNBQWMsRUFBRSxtQkFUTjtBQVVWQyxNQUFBQSxTQUFTLEVBQUUsc0JBVkQ7QUFXVmxFLE1BQUFBLFFBQVEsRUFBRTtBQVhBLEtBaENQO0FBNkNMbUUsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLE1BQUFBLE9BQU8sRUFBRTtBQURDLEtBN0NQO0FBZ0RMeEIsSUFBQUEsUUFBUSxFQUFFO0FBQ1J5QixNQUFBQSxZQUFZLEVBQUUsbUVBRE47QUFFUkMsTUFBQUEsZ0JBQWdCLEVBQUUsNkNBRlY7QUFHUkMsTUFBQUEsZ0JBQWdCLEVBQUUsR0FIVjtBQUlSQyxNQUFBQSxnQkFBZ0IsRUFBRSxVQUpWO0FBS1JDLE1BQUFBLGdCQUFnQixFQUFFLEtBTFY7QUFNUkMsTUFBQUEsZ0JBQWdCLEVBQUUsOENBTlY7QUFPUkMsTUFBQUEsZ0JBQWdCLEVBQUUsaUJBUFY7QUFRUkMsTUFBQUEsZ0JBQWdCLEVBQ2QsZ0ZBVE07QUFVUkMsTUFBQUEsWUFBWSxFQUFFLHdCQVZOO0FBV1JDLE1BQUFBLFVBQVUsRUFBRSxrQ0FYSjtBQVlSQyxNQUFBQSxjQUFjLEVBQUUsV0FaUjtBQWFSQyxNQUFBQSxjQUFjLEVBQUUsbUJBYlI7QUFjUkMsTUFBQUEsV0FBVyxFQUFFO0FBZEwsS0FoREw7QUFnRUxDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxhQUFhLEVBQUUsOEJBRFA7QUFFUkMsTUFBQUEsZ0JBQWdCLEVBQUUscURBRlY7QUFHUkMsTUFBQUEsVUFBVSxFQUFFLHVCQUhKO0FBSVJDLE1BQUFBLGFBQWEsRUFBRSxvRUFKUDtBQUtSQyxNQUFBQSxlQUFlLEVBQ2Isa0pBQ0Esd0ZBUE07QUFRUkMsTUFBQUEsUUFBUSxFQUFFO0FBUkYsS0FoRUw7QUEwRUxDLElBQUFBLFdBQVcsRUFBRTtBQUNYQyxNQUFBQSxZQUFZLEVBQUUsZ0JBREg7QUFFWEMsTUFBQUEsS0FBSyxFQUFFO0FBRkksS0ExRVI7QUE4RUwxRCxJQUFBQSxPQUFPLEVBQUU7QUFDUDNILE1BQUFBLEtBQUssRUFBRSx3QkFEQTtBQUVQc0wsTUFBQUEsUUFBUSxFQUFFO0FBRkgsS0E5RUo7QUFrRkw3RCxJQUFBQSxTQUFTLEVBQUU7QUFDVDhELE1BQUFBLFdBQVcsRUFBRSxpQkFESjtBQUVUQyxNQUFBQSxjQUFjLEVBQUUscURBRlA7QUFHVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFNBQVMsRUFBRSxvREFEUDtBQUVKQyxRQUFBQSxVQUFVLEVBQUUsMkJBRlI7QUFHSkMsUUFBQUEsYUFBYSxFQUFFLGlFQUhYO0FBSUpDLFFBQUFBLGdCQUFnQixFQUFFLHVDQUpkO0FBS0pDLFFBQUFBLGtCQUFrQixFQUNoQix5SUFORTtBQU9KQyxRQUFBQSxlQUFlLEVBQUUsbUZBUGI7QUFRSkMsUUFBQUEsV0FBVyxFQUFFLHlDQVJUO0FBU0pDLFFBQUFBLFNBQVMsRUFBRSxXQVRQO0FBVUpDLFFBQUFBLGFBQWEsRUFBRSw0QkFWWDtBQVdKQyxRQUFBQSxhQUFhLEVBQUUsYUFYWDtBQVlKQyxRQUFBQSxlQUFlLEVBQUUsd0NBWmI7QUFhSkMsUUFBQUEsSUFBSSxFQUFFLE1BYkY7QUFjSkMsUUFBQUEsSUFBSSxFQUFFO0FBZEYsT0FIRztBQW1CVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFdBQVcsRUFBRSx3QkFEVDtBQUVKQyxRQUFBQSxnQkFBZ0IsRUFDZCxvSkFIRTtBQUlKZixRQUFBQSxTQUFTLEVBQ1AsOEpBTEU7QUFNSmdCLFFBQUFBLFVBQVUsRUFDUixtTEFDQTtBQVJFO0FBbkJHLEtBbEZOO0FBZ0hMQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsT0FBTyxFQUFFO0FBREksS0FoSFY7QUFtSExDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxNQUFNLEVBQUUsaUJBREE7QUFFUkMsTUFBQUEsT0FBTyxFQUFFO0FBRkQsS0FuSEw7QUF1SExDLElBQUFBLFFBQVEsRUFBRTtBQUNSaE4sTUFBQUEsS0FBSyxFQUFFLHNDQURDO0FBRVJpTixNQUFBQSxZQUFZLEVBQ1YsZ0tBSE07QUFJUkMsTUFBQUEsSUFBSSxFQUFFLDhDQUpFO0FBS1JDLE1BQUFBLFlBQVksRUFDVixxTEFOTTtBQU9SQyxNQUFBQSxPQUFPLEVBQUU7QUFQRCxLQXZITDtBQWdJTEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JyTixNQUFBQSxLQUFLLEVBQUUscUJBREM7QUFFUmlOLE1BQUFBLFlBQVksRUFDVix3TEFITTtBQUlSQyxNQUFBQSxJQUFJLEVBQUUsT0FKRTtBQUtSQyxNQUFBQSxZQUFZLEVBQUUsc0RBTE47QUFNUkMsTUFBQUEsT0FBTyxFQUFFLFVBTkQ7QUFPUkUsTUFBQUEsS0FBSyxFQUFFO0FBUEMsS0FoSUw7QUF5SUxDLElBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxNQUFBQSxZQUFZLEVBQUUsd0NBREU7QUFFaEJDLE1BQUFBLElBQUksRUFBRTtBQUZVLEtBekliO0FBNklMQyxJQUFBQSxZQUFZLEVBQUU7QUFDWjFOLE1BQUFBLEtBQUssRUFBRSxzQkFESztBQUVaMk4sTUFBQUEsYUFBYSxFQUFFO0FBRkgsS0E3SVQ7QUFpSkxDLElBQUFBLGNBQWMsRUFBRTtBQUNkSCxNQUFBQSxJQUFJLEVBQUUsT0FEUTtBQUVkSSxNQUFBQSxRQUFRLEVBQUUsNENBRkk7QUFHZEMsTUFBQUEsV0FBVyxFQUFFLHFCQUhDO0FBSWRDLE1BQUFBLFdBQVcsRUFBRTtBQUpDO0FBakpYLEdBN01NO0FBcVdiQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsYUFBYSxFQUFFLGdCQURUO0FBRU5DLElBQUFBLFdBQVcsRUFBRTtBQUZQLEdBcldLO0FBeVdiQyxFQUFBQSxZQUFZLEVBQUU7QUFDWnhJLElBQUFBLE9BQU8sRUFBRSxhQURHO0FBRVp5SSxJQUFBQSxLQUFLLEVBQUUsUUFGSztBQUdaQyxJQUFBQSxVQUFVLEVBQUUsYUFIQTtBQUlaQyxJQUFBQSxRQUFRLEVBQUU7QUFKRSxHQXpXRDtBQStXYnpKLEVBQUFBLGFBQWEsRUFBRTtBQUNiN0UsSUFBQUEsS0FBSyxFQUFFLHNCQURNO0FBRWJ1TyxJQUFBQSxRQUFRLEVBQUUsU0FGRztBQUdiQyxJQUFBQSxNQUFNLEVBQUUsUUFISztBQUliQyxJQUFBQSxXQUFXLEVBQUU7QUFKQSxHQS9XRjtBQXFYYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1AxTyxJQUFBQSxLQUFLLEVBQUUsVUFEQTtBQUVQMk8sSUFBQUEsR0FBRyxFQUFFLEtBRkU7QUFHUEMsSUFBQUEsR0FBRyxFQUFFLEtBSEU7QUFJUEMsSUFBQUEsUUFBUSxFQUFFLFFBSkg7QUFLUHRNLElBQUFBLElBQUksRUFBRSxPQUxDO0FBTVBGLElBQUFBLE9BQU8sRUFBRSxTQU5GO0FBT1BMLElBQUFBLEdBQUcsRUFBRTtBQUNIOE0sTUFBQUEsSUFBSSxFQUFFLFlBREg7QUFFSEMsTUFBQUEsSUFBSSxFQUFFLGFBRkg7QUFHSEMsTUFBQUEsSUFBSSxFQUFFLGFBSEg7QUFJSEMsTUFBQUEsSUFBSSxFQUFFO0FBSkgsS0FQRTtBQWFQL00sSUFBQUEsSUFBSSxFQUFFO0FBQ0oyQixNQUFBQSxhQUFhLEVBQUU7QUFEWCxLQWJDO0FBZ0JQcEIsSUFBQUEsT0FBTyxFQUFFO0FBQ1BvQixNQUFBQSxhQUFhLEVBQUU7QUFEUixLQWhCRjtBQW1CUHFMLElBQUFBLE1BQU0sRUFBRTtBQW5CRCxHQXJYSTtBQTBZYjNRLEVBQUFBLEtBQUssRUFBRTtBQUNMNFEsSUFBQUEsYUFBYSxFQUFFLHNCQURWO0FBRUxDLElBQUFBLEtBQUssRUFBRSxPQUZGO0FBR0x0TixJQUFBQSxJQUFJLEVBQUUsTUFIRDtBQUlMdU4sSUFBQUEsUUFBUSxFQUFFO0FBSkwsR0ExWU07QUFnWmJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxVQUFVLEVBQUUsaUJBRFA7QUFFTDNMLElBQUFBLFNBQVMsRUFBRSxtQkFGTjtBQUdMNEwsSUFBQUEsV0FBVyxFQUFFLGlCQUhSO0FBSUxGLElBQUFBLEtBQUssRUFBRTtBQUpGLEdBaFpNO0FBc1piRyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsT0FBTyxFQUFFLG1DQURHO0FBRVpDLElBQUFBLGFBQWEsRUFDWCxzR0FIVTtBQUlaakQsSUFBQUEsVUFBVSxFQUNSLGtJQUNBLGdEQU5VO0FBT1prRCxJQUFBQSxtQkFBbUIsRUFDakIsNkdBUlU7QUFTWkMsSUFBQUEsV0FBVyxFQUFFLHlCQVREO0FBVVpDLElBQUFBLFNBQVMsRUFBRSxVQVZDO0FBV1pDLElBQUFBLGdCQUFnQixFQUFFLDJDQVhOO0FBWVpDLElBQUFBLEVBQUUsRUFBRTtBQVpRLEdBdFpEO0FBb2FiMUIsRUFBQUEsUUFBUSxFQUFFO0FBQ1J0TyxJQUFBQSxLQUFLLEVBQUU7QUFEQyxHQXBhRztBQXVhYmlRLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxRQUFRLEVBQUUsY0FERztBQUViQyxJQUFBQSxVQUFVLEVBQUU7QUFGQyxHQXZhRjtBQTJhYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFNBQVMsRUFBRSxrQkFESjtBQUVQQyxJQUFBQSxTQUFTLEVBQUUscUJBRko7QUFHUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLFFBQVEsRUFBRTtBQUZMO0FBSEEsR0EzYUk7QUFtYmJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQW5iQztBQXNiYjlSLEVBQUFBLE9BQU8sRUFBRSxVQXRiSTtBQXViYixnQkFBYyxvQkF2YkQ7QUF3YmIsZ0JBQWMsaUJBeGJEO0FBeWJiK1IsRUFBQUEsSUFBSSxFQUFFLFFBemJPO0FBMGJiQyxFQUFBQSxLQUFLLEVBQUU7QUExYk0sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi9sb2NhbGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wZXJ0eToge1xuICAgIHdlaWdodDogJ3Blc28nLFxuICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgIGZpbGxDb2xvcjogJ2NvbG9yIGRlIHJlbGxlbm8nLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY29iZXJ0dXJhJyxcbiAgICBzdHJva2VDb2xvcjogJ2NvbG9yIGRlIHRyYXpvJyxcbiAgICByYWRpdXM6ICdyYWRpbycsXG4gICAgb3V0bGluZTogJ2NvbnRvcm5vJyxcbiAgICBzdHJva2U6ICd0cmF6bycsXG4gICAgZGVuc2l0eTogJ2RlbnNpZGFkJyxcbiAgICBoZWlnaHQ6ICdhbHR1cmEnLFxuICAgIHN1bTogJ3N1bWEnLFxuICAgIHBvaW50Q291bnQ6ICdSZWN1ZW50byBkZSBwdW50b3MnXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgc2VhcmNoOiAnQnVzcXVlZGEnLFxuICAgIHNlbGVjdEZpZWxkOiAnU2VsZWNjaW9uYSB1biBjYW1wbycsXG4gICAgeUF4aXM6ICdFamUgWScsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjY2lvbmEgdW4gVGlwbycsXG4gICAgc2VsZWN0VmFsdWU6ICdTZWxlY2Npb25hIHVuIFZhbG9yJyxcbiAgICBlbnRlclZhbHVlOiAnRW50cmEgdW4gdmFsb3InLFxuICAgIGVtcHR5OiAndmFjaW8nXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICdWYWxvcmVzIGVuJyxcbiAgICB2YWx1ZUVxdWFsczogJ1ZhbG9yIGlndWFsIGEnLFxuICAgIGRhdGFTb3VyY2U6ICdGdWVudGUgZGUgZGF0b3MnLFxuICAgIGJydXNoUmFkaXVzOiAnUmFkaW8gZGVsIHBpbmNlbCAoa20pJyxcbiAgICBlbXB0eTogJyAnXG4gIH0sXG4gIG1hcExheWVyczoge1xuICAgIHRpdGxlOiAnQ2FwYXMgZGVsIG1hcGEnLFxuICAgIGxhYmVsOiAnRXRpcXVldGEnLFxuICAgIHJvYWQ6ICdDYXJyZXRlcmEnLFxuICAgIGJvcmRlcjogJ0Zyb250ZXJhJyxcbiAgICBidWlsZGluZzogJ0VkaWZpY2lvJyxcbiAgICB3YXRlcjogJ0FndWEnLFxuICAgIGxhbmQ6ICdUaWVycmEnLFxuICAgICczZEJ1aWxkaW5nJzogJ0VkaWZpY2lvIDNEJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdFdGlxdWV0YSB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdUYW1hw7FvIGRlIGZ1ZW50ZScsXG4gICAgICBmb250Q29sb3I6ICdDb2xvciBkZSBmdWVudGUnLFxuICAgICAgdGV4dEFuY2hvcjogJ0FuY2xhamUgZGVsIHRleHRvJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaW5lYWNpw7NuJyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0HDsWFkaXIgbcOhcyBldGlxdWV0YXMnXG4gICAgfVxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcGFuZWxzOiB7XG4gICAgICBsYXllcjogJ0NhcGFzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRyb3MnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjY2lvbmVzJyxcbiAgICAgIGJhc2VtYXA6ICdNYXBhIGJhc2UnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnUmVxdWVyaWRvKicsXG4gICAgcmFkaXVzOiAnUmFkaW8nLFxuICAgIGNvbG9yOiAnQ29sb3InLFxuICAgIGZpbGxDb2xvcjogJ0NvbG9yIGRlIHJlbGxlbm8nLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgd2VpZ2h0OiAnR3J1ZXNvJyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2FkbyBlbicsXG4gICAgY292ZXJhZ2U6ICdDb2JlcnR1cmEnLFxuICAgIHN0cm9rZTogJ1RyYXpvJyxcbiAgICBzdHJva2VXaWR0aDogJ0dyb3NvciBkZSB0cmF6bycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmF6bycsXG4gICAgYmFzaWM6ICdCw6FzaWNvJyxcbiAgICB0cmFpbExlbmd0aDogJ0xvbmdpdHVkIGRlIHBpc3RhJyxcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTnVtZXJvIGRlIHNlZ3VuZG9zIGhhc3RhIHF1ZSBkZXNhcGFyZXpjYSBlbCBjYW1pbm8nLFxuICAgIG5ld0xheWVyOiAnbnVldmEgY2FwYScsXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogJ1NpIGRlc2FjdGl2YWRvLCBsYSBhbHR1cmEgc2UgYmFzYSBlbiBlbCByZWN1ZW50byBkZSBwdW50b3MnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1NpIGRlc2FjdGl2YWRvLCBlbCBjb2xvciBzZSBiYXNhIGVuIGVsIHJlY3VlbnRvIGRlIHB1bnRvcycsXG4gICAgYWdncmVnYXRlQnk6ICd7ZmllbGR9IGFncmVnYWRvIHBvcicsXG4gICAgJzNETW9kZWwnOiAnTW9kZWxvIDNEJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnT3BjaW9uZXMgZGVsIG1vZGVsbyAzRCcsXG4gICAgdHlwZToge1xuICAgICAgcG9pbnQ6ICdwdW50bycsXG4gICAgICBhcmM6ICdhcmNvJyxcbiAgICAgIGxpbmU6ICdsw61uZWEnLFxuICAgICAgZ3JpZDogJ21hbGxhJyxcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXG4gICAgICBwb2x5Z29uOiAncG9sw61nb25vJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdjbHVzdGVyJyxcbiAgICAgIGljb246ICdpY29ubycsXG4gICAgICBoZWF0bWFwOiAnY29uY2VudHJhY2nDs24nLFxuICAgICAgaGV4YWdvbjogJ2hleMOhZ29ubycsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndmlhamUnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfVxuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBhbmdsZTogJ8OBbmd1bG8nLFxuICAgIHN0cm9rZVdpZHRoOiAnQW5jaG8gZGVsIHRyYXpvJyxcbiAgICBzdHJva2VXaWR0aFJhbmdlOiAnUmFuZ28gZGVsIGFuY2hvIGRlbCB0cmF6bycsXG4gICAgcmFkaXVzOiAnUmFkaW8nLFxuICAgIGZpeGVkUmFkaXVzOiAnUmFkaW8gZmlqbyBhIG1lZGlyJyxcbiAgICBmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uOiAnQWp1c3RhciBlbCByYWRpbyBhbCByYWRpbyBhYnNvbHV0byBlbiBtZXRyb3MsIHAuZS4gNSBhIDUgbWV0cm9zJyxcbiAgICByYWRpdXNSYW5nZTogJ1JhbmdvIGRlIHJhZGlvJyxcbiAgICBjbHVzdGVyUmFkaXVzOiAnUmFkaW8gZGVsIGNsdXN0ZXIgZW4gcMOteGVsZXMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFuZ28gZGVsIHJhZGlvIGVuIHDDrXhlbGVzJyxcbiAgICBvcGFjaXR5OiAnT3BhY2lkYWQnLFxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcbiAgICBvdXRsaW5lOiAnQ29udG9ybm8nLFxuICAgIGNvbG9yUmFuZ2U6ICdSYW5nbyBkZSBjb2xvcicsXG4gICAgc3Ryb2tlOiAnVHJhem8nLFxuICAgIHN0cm9rZUNvbG9yOiAnQ29sb3IgZGUgdHJhem8nLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdSYW5nbyBkZSBjb2xvciBkZSB0cmF6bycsXG4gICAgdGFyZ2V0Q29sb3I6ICdDb2xvciBkZXN0aW5vJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQWdyZWdhY2nDs24gZGUgY29sb3InLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnQWdyZWdhY2nDs24gZGUgbGEgYWx0dXJhJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSYW5nbyBkZSByZXNvbHVjacOzbicsXG4gICAgc2l6ZVNjYWxlOiAnTWVkaWRhIGRlIGVzY2FsYScsXG4gICAgd29ybGRVbml0U2l6ZTogJ01lZGlkYSBkZSBsYSB1bmlkYWQgbXVuZGlhbCcsXG4gICAgZWxldmF0aW9uU2NhbGU6ICdFc2NhbGEgZGUgZWxldmFjacOzbicsXG4gICAgaGVpZ2h0U2NhbGU6ICdFc2NhbGEgZGUgYWx0dXJhJyxcbiAgICBjb3ZlcmFnZVJhbmdlOiAnUmFuZ28gZGUgY29iZXJ0dXJhJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnUmVwcmVzZW50YWNpw7NuIGRlIGFsdGEgcHJlY2lzacOzbicsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAnTGEgcHJlY2lzacOzbiBhbHRhIHRlbmRyw6EgdW4gcmVuZGltaWVudG8gbcOhcyBiYWpvJyxcbiAgICBoZWlnaHQ6ICdBbHR1cmEnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnSGF6IGNsaWMgZW4gZWwgYm90w7NuIGRlIGFycmliYSBhIGxhIGRlcmVjaGEgZGVsIG1hcGEgcGVyIGNhbWJpYXIgYSB2aXN0YSAzRCcsXG4gICAgZmlsbDogJ1JlbGxlbmFyJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnQWN0aXZhciBsYSBhbHR1cmEgZGVsIHBvbMOtZ29ubycsXG4gICAgc2hvd1dpcmVmcmFtZTogJ011ZXN0cmEgZXNxdWVtw6B0aWNvJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdJbnRlbnNpZGFkIGRlIHBlc28nLFxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkZSB6b29tJyxcbiAgICBoZWlnaHRSYW5nZTogJ1JhbmdvIGRlIGFsdHVyYXMnXG4gIH0sXG4gIGxheWVyTWFuYWdlcjoge1xuICAgIGFkZERhdGE6ICdBw7FhZGlyIGRhdG9zJyxcbiAgICBhZGRMYXllcjogJ0HDsWFkaXIgY2FwYScsXG4gICAgbGF5ZXJCbGVuZGluZzogJ0NvbWJpbmFyIGNhcGFzJ1xuICB9LFxuICBtYXBNYW5hZ2VyOiB7XG4gICAgbWFwU3R5bGU6ICdFc3RpbG8gZGUgbWFwYScsXG4gICAgYWRkTWFwU3R5bGU6ICdBw7FhZGlyIGVzdGlsbyBkZSBtYXBhJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJ0NvbG9yIGVkaWZpY2lvcyAzRCdcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXIge3Byb3BlcnR5fSBzZWfDum4gZWwgY2FtcG8gc2VsZWNjaW9uYWRvJyxcbiAgICBob3dUbzogJ0hvdyB0bydcbiAgfSxcbiAgZmlsdGVyTWFuYWdlcjoge1xuICAgIGFkZEZpbHRlcjogJ0HDsWFkaXIgZmlsdHJvJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnTW9zdGFyIGxhIHRhYmxhIGRlIGRhdG9zJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnRWxpbWluYXIgY29uanVudG8gZGUgZGF0b3MnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGZpbGVzJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnT2N1bHRhciBsYSBjYXBhJyxcbiAgICBzaG93TGF5ZXI6ICdNb3N0cmFyIGxhIGNhcGEnLFxuICAgIGhpZGVGZWF0dXJlOiAnT2N1bHRhciBlbCBvYmpldG8nLFxuICAgIHNob3dGZWF0dXJlOiAnTW9zdHJhciBlbCBvYmpldG8nLFxuICAgIGhpZGU6ICdPY3VsdGFyJyxcbiAgICBzaG93OiAnTW9zdHJhcicsXG4gICAgcmVtb3ZlTGF5ZXI6ICdFbGltaW5hciBjYXBhJyxcbiAgICBsYXllclNldHRpbmdzOiAnQ29uZmlndXJhY2nDs24gZGUgY2FwYScsXG4gICAgY2xvc2VQYW5lbDogJ0NlcnJhciBlbCBwYW5lbCBhY3R1YWwnLFxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdDYW1iaWFyIGEgbGEgdmlzdGEgZGUgbWFwYSBkdWFsJyxcbiAgICBzaG93TGVnZW5kOiAnTW9zdHJhciBsZXllbmRhJyxcbiAgICBkaXNhYmxlM0RNYXA6ICdEZXNhY3RpdmFyIG1hcGEgM0QnLFxuICAgIERyYXdPbk1hcDogJ0RpYnVqYXIgZW4gZWwgbWFwYScsXG4gICAgc2VsZWN0TG9jYWxlOiAnU2VsZWNjaW9uYXIgY29uZmlndXJhY2nDs24gcmVnaW9uYWwnLFxuICAgIGhpZGVMYXllclBhbmVsOiAnT2N1bHRhciBsYSB0YWJsYSBkZSBjYXBhcycsXG4gICAgc2hvd0xheWVyUGFuZWw6ICdNb3N0cmFyIGxhIHRhYmxhICBkZSBjYXBhcycsXG4gICAgbW92ZVRvVG9wOiAnRGVzcGxhemFyIGFycmliYSBkZSBsYXMgY2FwYXMgZGUgZGF0b3MnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjY2lvbmFyIGVzdGlsbyBkZSBtYXBhIGJhc2UnLFxuICAgIGRlbGV0ZTogJ0JvcnJhcicsXG4gICAgdGltZVBsYXliYWNrOiAnUmVwcm9kdWNjacOzbiBkZSB0aWVtcG8nLFxuICAgIGNsb3VkU3RvcmFnZTogJ0FsbWFjZW5hamUgZW4gbGEgbnViZScsXG4gICAgJzNETWFwJzogJ01hcGEgM0QnLFxuICAgIGFuaW1hdGlvbkJ5V2luZG93OiAnVmVudGFuYSBUZW1wb3JhbCBNw7N2aWwnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICdWZW50YW5hIFRlbXBvcmFsIEluY3JlbWVudGFsJyxcbiAgICBzcGVlZDogJ3ZlbG9jaWRhZCcsXG4gICAgcGxheTogJ2luaWNpYXInLFxuICAgIHBhdXNlOiAncGF1c2FyJyxcbiAgICByZXNldDogJ3JlaW5pY2lhcidcbiAgfSxcbiAgdG9vbGJhcjoge1xuICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YXIgaW1hZ2VuJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgZGF0b3MnLFxuICAgIGV4cG9ydE1hcDogJ0V4cG9ydGFyIG1hcGEnLFxuICAgIHNoYXJlTWFwVVJMOiAnQ29tcGFydGlyIGVsIGVubGFjZSBkZWwgbWFwYScsXG4gICAgc2F2ZU1hcDogJ0d1YXJkYXIgbWFwYScsXG4gICAgc2VsZWN0OiAnc2VsZWNjaW9uYScsXG4gICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXG4gICAgcmVjdGFuZ2xlOiAncmVjdMOhbmd1bG8nLFxuICAgIGhpZGU6ICdlc2NvbmRlcicsXG4gICAgc2hvdzogJ21vc3RyYXInLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0JvcnJhciBjb25qdW50byBkZSBkYXRvcycsXG4gICAgICBhZGREYXRhVG9NYXA6ICdBw7FhZGlyIGRhdG9zIGFsIG1hcGEnLFxuICAgICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBpbWFnZW4nLFxuICAgICAgZXhwb3J0RGF0YTogJ0V4cG9ydGFyIGRhdG9zJyxcbiAgICAgIGV4cG9ydE1hcDogJ0V4cG9ydGFyIG1hcGEnLFxuICAgICAgYWRkQ3VzdG9tTWFwYm94U3R5bGU6ICdBw7FhZGlyIGVzdGlsbyBkZSBNYXBib3ggcHJvcGlvJyxcbiAgICAgIHNhdmVNYXA6ICdHdWFyZGFyIG1hcGEnLFxuICAgICAgc2hhcmVVUkw6ICdDb21wYXJ0aXIgZW5sYWNlJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdCb3JyYXInLFxuICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0YXInLFxuICAgICAgYWRkU3R5bGU6ICdBw7FhZGlyIGVzdGlsbycsXG4gICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYXInXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ1JhdGlvJyxcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdFc29nZXIgcmF0aW8gcG9yIGRpdmVyc29zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdQYW50YWxsYSBvcmlnaW5hbCcsXG4gICAgICByYXRpb0N1c3RvbTogJ1BlcnNvbmFsaXphZG8nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHVjacOzbicsXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdVbmEgYWx0YSByZXNvbHVjacOzbiBlcyBtZWpvciBwYXJhIGxhcyBpbXByZXNpb25lcy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdMZXllbmRhIGRlbCBtYXBhJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0HDsWFkaXIgbGV5ZW5kYSBhbCBtYXBhJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnQ29uanVudG8gZGUgZGF0b3MnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjb2dlciBsb3MgY29uanVudG9zIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxuICAgICAgYWxsRGF0YXNldHM6ICdUb2RvcycsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnVGlwbyBkZSBkYXRvcycsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnRXNjb2dlciBlbCB0aXBvIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdHJhciBkYXRvcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdTZSBwdWVkZSBlc2NvZ2VyIGV4cG9ydGFyIGxvcyBkYXRvcyBvcmlnaW5hbGVzIG8gZmlsdHJhZG9zJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhdG9zIGZpbHRyYWRvcycsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ0RhdG9zIHNpbiBmaWx0cmFyJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEFyY2hpdm9zJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICdlc3TDoXMgYSBwdW50byBkZSBib3JyYXIgZXN0ZSBjb25qdW50byBkZSBkYXRvcy4gQWZlY3RhcsOhIGEge2xlbmd0aH0gY2FwYXMnXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gUHVibGljYXIgdHUgZXN0aWxvIGVuIE1hcGJveCBvIHByb3BvcmNpb25hciBlbCB0b2tlbiBkZSBhY2Nlc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1B1ZWRlcyBjcmVhciBlbCB0dSBwcm9waW8gZXN0aWxvIGRlIG1hcGEgZW4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMjogJ3knLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1YmxpY2FyJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdsby4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1BhcmEgdXRpbGl6YXIgdW4gZXN0aWxvIHByaXZhZG8sIGVuZ2FuY2hhIHR1JyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICd0b2tlbiBkZSBhY2Nlc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2FxdcOtLiAqa2VwbGVyLmdsIGVzIHVuYSBhcGxpY2FjacOzbiBjbGllbnRlLCBsb3MgZGF0b3MgcXVlZGFuIGVuIHR1IG5hdmVnYWRvci4uJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ3AuZS4gcGsuYWJjZGVmZy54eHh4eHgnLFxuICAgICAgcGFzdGVUaXRsZTogJzIuIEVuZ2FuY2hhIGVsIGVubGFjZSBkZWwgZXN0aWxvJyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnUXXDqSBlcyB1bicsXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ2VubGFjZSBkZWwgZXN0aWxvJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gUG9uZXIgbm9tYnJlIGEgdHUgZXN0aWxvJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdDb21wYXJ0aXIgZWwgZW5sYWNlIGRlbCBtYXBhJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdHZW5lcmFyIHVuIGVubGFjZSBkZWwgbWFwYSBwYXJhIGNvbXBhcnRpciBjb24gb3Ryb3MnLFxuICAgICAgY2xvdWRUaXRsZTogJ0FsbWFjZW5hZ2UgZW4gbGEgbnViZScsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQWNjZWRlciB5IGNhcmdhciBkYXRvcyBkZWwgbWFwYSBhIHR1IGFsbWFjZW5hZ2UgYSBsYSBudWJlIHBlcnNvbmFsJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbCBndWFyZGFyw6EgbG9zIGRhdG9zIGRlbCBtYXBhIGVuIGVsIGFsbWFjZW5hZ2UgZGUgdHUgbnViZSBwZXJzb25hbCwgc8OzbG8gcXVpZW4gdGVuZ2EgZWwgZW5sYWNlIHBvZHJhIGFjY2VkZXIgYWwgbWFwYSB5IGEgbG9zIGRhdG9zIC4gJyArXG4gICAgICAgICdQdWVkZXMgZWRpdGFyL2JvcnJhciBlbCBhcmNoaXZvIGRlIGRhdG9zIGVuIHR1IGN1ZW50YSBlbiBsYSBudWJlIGVuIGN1YWxxdWllciBtb21lbnRvLicsXG4gICAgICBnb3RvUGFnZTogJ1ZlcyBhIGxhIHDDoWdpbmEgZGUge2N1cnJlbnRQcm92aWRlcn0gZGUgS2VwbGVyLmdsJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ0NhcmdhciB1biBtYXBhJyxcbiAgICAgIGVycm9yOiAnRXJyb3InXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0FsbWFjZW50YWdlIGVuIGxhIG51YmUnLFxuICAgICAgc3VidGl0bGU6ICdBY2NlZGVyIHBhcmEgZ3VhcmRhciBlbCBtYXBhIGVuIHRldSBhbG1hY2VuYWdlIGVuIGxhIG51YmUnXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnRm9ybWF0byBkZSBtYXBhJyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnRXNjb2dlciBlbCBmb3JtYXRvIGFsIHF1ZSBzZSBkZXNlYSBleHBvcnRhciBlbCBtYXBhJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YXIgdHUgbWFwYSBjb21vIHVuIGFyY2hpdm8gSFRNTCBpbnRlcmFjdGl2by4nLFxuICAgICAgICB0b2tlblRpdGxlOiAnVG9rZW4gZGUgYWNjZXNvIGRlIE1hcGJveCcsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVdGlsaXphciB0dSB0b2tlbiBkZSBhY2Nlc28gYSBNYXBib3ggYWwgYXJjaGl2byBIVE1MIChvcGNpb25hbCknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnRW5nYW5jaGFyIHR1IHRva2VuIGRlIGFjY2VzbyBhIE1hcGJveCcsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBTaSBubyBwcm9wb3JjaW9uYXMgdHUgcHJvcGlvIHRva2VuLCBlbCBtYXBhIHBvZHLDrWEgZmFsbGFyIGVuIGN1YWxxdWllciBtb21lbnRvIGN1YW5kbyByZWVtcGxhY2Vtb3MgbnVlc3RybyB0b2tlbiBwYXJhIGV2aXRhciBhYnVzb3MuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ1B1ZWRlcyBjYW1iaWFyIGVsIHRva2VuIGRlIE1hcGJveCBwb3N0ZXJpb3JtZW50ZSB1dGlsaXphbmRvIGVzdGFzIGluc3RydWNjaW9uZXM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnQ29tbyBhY3R1YWxpdHphciB1biB0b2tlbiBwcmVleGlzdGVudGUuJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTW9kbyBtYXBhJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjY2lvbmFyIG1vZG8gYXBwLiBNw6FzICcsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTI6ICdpbmZvcm1hY2nDs24nLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICdQZXJtbWl0ZSBhIGxvcyB1c3VhcmlvcyB7bW9kb30gZWwgbWFwYScsXG4gICAgICAgIHJlYWQ6ICdsZWVyJyxcbiAgICAgICAgZWRpdDogJ2VkaXRhcidcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnQ29uZmlndXJhY2nDs24gZGVsIG1hcGEnLFxuICAgICAgICBjb25maWdEaXNjbGFpbWVyOlxuICAgICAgICAgICdMYSBjb25maWd1cmFjacOzbiBkZWwgbWFwYSBzZXLDoSBpbmNsdWlkYSBlbiBlbCBhcmNoaXZvIEpzb24uIFNpIHV0aWxpdHphcyBrZXBsZXIuZ2wgZW4gdHUgcHJvcGlhIGFwcCBwdWVkZXMgY29waWFyIGVzdGEgY29uZmlndXJhY2nDs24geSBwYXNhcmxhIGEgICcsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0YXIgbG9zIGRhdG9zIGRlbCBtYXBhIHkgbGEgY29uZmlndXJhY2nDs24gZW4gdW4gc29sbyBhcmNoaXZvIEpzb24uIFBvc3Rlcmlvcm1lbnRlIHB1ZWRlcyBhYnJpciBlc3RlIG1pc21vIG1hcGEgY2FyZ2FuZG8gZXN0ZSBtaXNtbyBhcmNoaXZvIGEga2VwbGVyLmdsLicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgJyogTGEgY29uZmlndXJhY2nDs24gZGVsIG1hcGEgc2UgY29tYmluYSBjb24gbG9zIGNvbmp1bnRvcyBkZSBkYXRvcyBjYXJnYWRvcy4g4oCYZGF0YUlk4oCZIHNlIHV0aWxpemEgcGFyYSB2aW5jdWxhciBjYXBhcywgZmlsdHJvcyB5IHN1Z2VyZW5jaWFzIGEgdW4gY29uanVudG8gZGUgZGF0b3MgZXNwZWPDrWZpY28uICcgK1xuICAgICAgICAgICdDdWFuZG8gcGFzZXMgZXN0YSBjb25maWd1cmFjacOzbiBhIGFkZERhdGFUb01hcCwgYXNlZ3VyYSBxdWUgZWwgaWRlbnRpZmljYWRvciBkZWwgY29uanVudG8gZGUgZGF0b3MgY29pbmNpZGEgY29uIGxvcyDigJhkYXRhSWTigJkgZGUgZXN0YSBjb25maWd1cmFjacOzbi4nXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnQ2FyZ2FuZG8uLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAnQ2FyZ2FyIGFyY2hpdm9zJyxcbiAgICAgIHN0b3JhZ2U6ICdDYXJnYXIgZGVzZGUgYWxtYWNlbmFnZSdcbiAgICB9LFxuICAgIHRyaXBJbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbW8gaGFiaWxpdGFyIGxhIGFuaW1hY2nDs24gZGUgdmlhamUnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUGFyYSBhbmltYXIgbGEgcnV0YSwgbG9zIGRhdG9zIGdlb0pTT04gaGFuIGRlIGNvbnRlbmVyIGBMaW5lU3RyaW5nYCBlbiBzdSBnZW9tZXRyw61hIHkgbGFzIGNvb3JkZW5hZGFzIGRlIExpbmVTdHJpbmcgZGViZW4gdGVuZXIgNCBlbGVtZW50b3MgZW4gbG9zIGZvcm1hdHMgZGUgJyxcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICd5IGVsIMO6bHRpbW8gZWxlbWVudG8gZGViZSBzZXIgbGEgbWFyY2EgZGVsIHRpZW1wby4gTG9zIGZvcm1hdG9zIHbDoWxpZG9zIHBhcmEgbGEgbWFyY2EgZGUgdGllbXBvIGluY2x1eWVuIFVuaXggZW4gc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2M2AgbyBlbiBtaWxpc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2MzAwMGAuJyxcbiAgICAgIGV4YW1wbGU6ICdFamVtcGxvOidcbiAgICB9LFxuICAgIGljb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbW8gZGlidWphciDDrWNvbm9zJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0VuIHR1IENTViBjcmVhIHVuYSBjb2x1bW5hIHkgcG9uIGVsIG5vbWJyZSBkZWwgw61jb25vIHF1ZSBxdWllcmVzIGRpYnVqYXIuIFB1ZWRlcyBkZWphciBsYSBjZWxkYSB2YWPDrWEgY3VhbmRvIG5vIHF1aWVyYXMgcXVlIHNlIG11ZXN0cmUgcGFyYSBjaWVydG9zIHB1bnRvcy4gQ3VhbmRvIGxhIGNvbHVtbmEgc2UgbGxhbWEnLFxuICAgICAgY29kZTogJ8OtY29ubycsXG4gICAgICBkZXNjcmlwdGlvbjI6ICcga2VwbGVyLmdsIGF1dG9tw6F0aWNhbWVudGUgY3JlYXLDoSB1bmEgY2FwYSBkZSDDrWNvbm8uJyxcbiAgICAgIGV4YW1wbGU6ICdFamVtcGxvOicsXG4gICAgICBpY29uczogJ0ljb25vcydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ8OabHRpbWEgbW9kaWZpY2FjacOzbiBoYWNlIHtsYXN0VXBkYXRlZH0nLFxuICAgICAgYmFjazogJ0F0csOhcydcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdHdWFyZGFuZG8gZWwgbWFwYS4uLicsXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnamEgZXhpc3RlIGVuIHttYXBTYXZlZH0uIExvIHF1aWVyZXMgc29icmVlc2NyaXZpcj8nXG4gICAgfSxcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xuICAgICAgYmFjazogJ0F0csOhcycsXG4gICAgICBnb1RvUGFnZTogJ1ZlcyBhIGxhIHDDoWdpbmEge2Rpc3BsYXlOYW1lfSBkZSBLZXBsZXIuZ2wnLFxuICAgICAgc3RvcmFnZU1hcHM6ICdBbG1hbmNlbmFnZSAvIE1hcGFzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTm8gaGF5IG5pbmfDum4gbWFwYSBndWFyZGFkbyB0b2RhdsOtYSdcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHZpc2libGVMYXllcnM6ICdDYXBhcyB2aXNpYmxlcycsXG4gICAgbGF5ZXJMZWdlbmQ6ICdDYXBhIGRlIGxleWVuZGEnXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIHRvb2x0aXA6ICdTdWdlcmVuY2lhcycsXG4gICAgYnJ1c2g6ICdQaW5jZWwnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGVuYWRhcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RpZmljYWRvcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnQ29tYmluYWNpw7NuIGRlIGNhcGFzJyxcbiAgICBhZGRpdGl2ZTogJ2FkaXRpdmEnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJzdHJhY3RpdmEnXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVtbmFzJyxcbiAgICBsYXQ6ICdsYXQnLFxuICAgIGxuZzogJ2xvbicsXG4gICAgYWx0aXR1ZGU6ICdhbHR1cmEnLFxuICAgIGljb246ICfDrWNvbm8nLFxuICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICBhcmM6IHtcbiAgICAgIGxhdDA6ICdsYXQgb3JpZ2VuJyxcbiAgICAgIGxuZzA6ICdsbmcgb3JpZ2VuICcsXG4gICAgICBsYXQxOiAnbGF0IGRlc3Rpbm8nLFxuICAgICAgbG5nMTogJ2xuZyBkZXN0aW5vJ1xuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgd29ybGRVbml0U2l6ZTogJ1RhbWHDsW8gZGUgbGEgbWFsbGEgKGttKSdcbiAgICB9LFxuICAgIGhleGFnb246IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdSYWRpbyBkZSBoZXjDoWdvbm8gKGttKSdcbiAgICB9LFxuICAgIGhleF9pZDogJ2lkIGhleCdcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBjdXN0b21QYWxldHRlOiAnUGFsZXRhIHBlcnNvbmFsaXphZGEnLFxuICAgIHN0ZXBzOiAncGFzb3MnLFxuICAgIHR5cGU6ICd0aXBvJyxcbiAgICByZXZlcnNlZDogJ2ludmVydGlkYSdcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICBjb2xvclNjYWxlOiAnRXNjYWxhIGRlIGNvbG9yJyxcbiAgICBzaXplU2NhbGU6ICdFc2NhbGEgZGUgbWVkaWRhcycsXG4gICAgc3Ryb2tlU2NhbGU6ICdFc2NhbGEgZGUgdHJhem8nLFxuICAgIHNjYWxlOiAnRXNjYWxhJ1xuICB9LFxuICBmaWxlVXBsb2FkZXI6IHtcbiAgICBtZXNzYWdlOiAnQXJyYXN0cmEgeSBzdWVsdGEgZWwgYXJjaGl2byBhcXXDrScsXG4gICAgY2hyb21lTWVzc2FnZTpcbiAgICAgICcqdXN1YXJpbyBkZSBDaHJvbWU6IGxhIG1lZGlkYSBtw6F4aW1hIHNvbiAyNTBtYiwgc2kgZGViZXMgY2FyZ2FyIHVuIGFyY2hpdm8gbcOhcyBncmFuZGUgdXRpbGl6YSBTYWZhcmknLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCBlcyB1bmEgYXBsaWNhY2nDs24gYWwgbGFkbyBjbGllbnRlIHF1ZSBubyB1dGlsaXphIG5pbmfDum4gc2Vydmlkb3IuIExvcyBkYXRvcyBzw7NsbyBleGlzdGVuIGVuIHR1IG3DoXF1aW5hL25hdmVnYWRvci4gJyArXG4gICAgICAnTm8gc2UgZW52aWFuIGRhdG9zIG5pIG1hcGFzIGEgbmluZ8O6biBzZXJ2aWRvci4nLFxuICAgIGNvbmZpZ1VwbG9hZE1lc3NhZ2U6XG4gICAgICAnQ2FyZ2FyIHtmaWxlRm9ybWF0TmFtZXN9IG8gdW4gbWFwYSBndWFyZGFkbyBlbiAqKkpzb24qKi4gTcOhcyBpbmZvcm1hY2nDs24gc29icmUgWyoqc3VwcG9ydGVkIGZpbGUgZm9ybWF0cyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICduYXZlZ2EgcG9yIHR1cyBhcmNoaXZvcycsXG4gICAgdXBsb2FkaW5nOiAnQ2FyZ2FuZG8nLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdFbCBhcmNoaXZvIHtlcnJvckZpbGVzfSBubyBlcyBjb21wYXRpYmxlLicsXG4gICAgb3I6ICdvJ1xuICB9LFxuICBnZW9jb2Rlcjoge1xuICAgIHRpdGxlOiAnSW50cm9kdWNlIHVuYSBkaXJlY2Npw7NuJ1xuICB9LFxuICBmaWVsZFNlbGVjdG9yOiB7XG4gICAgY2xlYXJBbGw6ICdRdWl0YXIgdG9kb3MnLFxuICAgIGZvcm1hdHRpbmc6ICdGb3JtYXRvJ1xuICB9LFxuICBjb21wYXJlOiB7XG4gICAgbW9kZUxhYmVsOiAnTW9kbyBDb21wYXJhY2nDs24nLFxuICAgIHR5cGVMYWJlbDogJ1RpcG8gZGUgQ29tcGFyYWNpw7NuJyxcbiAgICB0eXBlczoge1xuICAgICAgYWJzb2x1dGU6ICdBYnNvbHV0YScsXG4gICAgICByZWxhdGl2ZTogJ1JlbGF0aXZhJ1xuICAgIH1cbiAgfSxcbiAgbWFwUG9wb3Zlcjoge1xuICAgIHByaW1hcnk6ICdQcmluY2lwYWwnXG4gIH0sXG4gIGRlbnNpdHk6ICdkZW5zaWRhZCcsXG4gICdCdWcgUmVwb3J0JzogJ0luZm9ybWUgZGUgZXJyb3JlcycsXG4gICdVc2VyIEd1aWRlJzogJ0d1w61hIGRlIHVzdWFyaW8nLFxuICBTYXZlOiAnR3VhZGFyJyxcbiAgU2hhcmU6ICdDb21wYXJ0aXInXG59O1xuIl19