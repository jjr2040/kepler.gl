"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileData = getTileData;
exports.decodeTile = decodeTile;
exports.vectorTileFeatureToProp = vectorTileFeatureToProp;

var _pbf = _interopRequireDefault(require("pbf"));

var _vectorTile = require("@mapbox/vector-tile");

var _viewportMercatorProject = require("viewport-mercator-project");

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* global fetch */
var TILE_SIZE = 512;
var MAPBOX_HOST = 'https://a.tiles.mapbox.com';
var MAP_SOURCE = '/v4/mapbox.mapbox-streets-v7';

function getTileData(host, token, _ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
  var mapSource = "".concat(host || MAPBOX_HOST).concat(MAP_SOURCE, "/").concat(z, "/").concat(x, "/").concat(y, ".vector.pbf?access_token=").concat(token);
  return fetch(mapSource).then(function (response) {
    return response.arrayBuffer();
  }).then(function (buffer) {
    return decodeTile(x, y, z, buffer);
  });
}

function decodeTile(x, y, z, arrayBuffer) {
  var tile = new _vectorTile.VectorTile(new _pbf["default"](arrayBuffer));
  var result = [];
  var xProj = x * TILE_SIZE;
  var yProj = y * TILE_SIZE;
  var scale = Math.pow(2, z);
  var projectFunc = project.bind(null, xProj, yProj, scale);
  /* eslint-disable guard-for-in */

  var layerName = 'building';
  var vectorTileLayer = tile.layers[layerName];

  if (!vectorTileLayer) {
    return [];
  }

  for (var i = 0; i < vectorTileLayer.length; i++) {
    var vectorTileFeature = vectorTileLayer.feature(i);
    var features = vectorTileFeatureToProp(vectorTileFeature, projectFunc);
    features.forEach(function (f) {
      f.properties.layer = layerName;

      if (f.properties.height) {
        result.push(f);
      }
    });
  }

  return result;
}

function project(x, y, scale, line, extent) {
  var sizeToPixel = extent / TILE_SIZE;

  for (var ii = 0; ii < line.length; ii++) {
    var p = line[ii]; // LNGLAT

    line[ii] = (0, _viewportMercatorProject.worldToLngLat)([x + p[0] / sizeToPixel, y + p[1] / sizeToPixel], scale);
  }
}
/* adapted from @mapbox/vector-tile/lib/vectortilefeature.js for better perf */

/* eslint-disable */


function vectorTileFeatureToProp(vectorTileFeature, project) {
  var coords = getCoordinates(vectorTileFeature);
  var type = _vectorTile.VectorTileFeature.types[vectorTileFeature.type];
  var extent = vectorTileFeature.extent;
  var i;
  var j;
  coords = classifyRings(coords);

  for (i = 0; i < coords.length; i++) {
    for (j = 0; j < coords[i].length; j++) {
      project(coords[i][j], extent);
    }
  }

  return coords.map(function (coordinates) {
    return {
      coordinates: coordinates,
      properties: vectorTileFeature.properties
    };
  });
}

function getCoordinates(vectorTileFeature) {
  var pbf = vectorTileFeature._pbf;
  pbf.pos = vectorTileFeature._geometry;
  var end = pbf.readVarint() + pbf.pos;
  var cmd = 1;
  var length = 0;
  var x = 0;
  var y = 0;
  var lines = [];
  var line;

  while (pbf.pos < end) {
    if (length <= 0) {
      var cmdLen = pbf.readVarint();
      cmd = cmdLen & 0x7;
      length = cmdLen >> 3;
    }

    length--;

    if (cmd === 1 || cmd === 2) {
      x += pbf.readSVarint();
      y += pbf.readSVarint();

      if (cmd === 1) {
        // moveTo
        if (line) lines.push(line);
        line = [];
      }

      line.push([x, y]);
    } else if (cmd === 7) {
      // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
      if (line) {
        line.push(line[0].slice()); // closePolygon
      }
    } else {
      throw new Error("unknown command ".concat(cmd));
    }
  }

  if (line) lines.push(line);
  return lines;
} // classifies an array of rings into polygons with outer rings and holes


function classifyRings(rings) {
  var len = rings.length;
  if (len <= 1) return [rings];
  var polygons = [];
  var polygon;
  var ccw;

  for (var i = 0; i < len; i++) {
    var area = signedArea(rings[i]);

    if (area === 0) {
      continue;
    }

    if (ccw === undefined) {
      ccw = area < 0;
    }

    if (ccw === area < 0) {
      if (polygon) {
        polygons.push(polygon);
      }

      polygon = [rings[i]];
    } else {
      polygon.push(rings[i]);
    }
  }

  if (polygon) {
    polygons.push(polygon);
  }

  return polygons;
}

function signedArea(ring) {
  var sum = 0;

  for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
    p1 = ring[i];
    p2 = ring[j];
    sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
  }

  return sum;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLXV0aWxzLmpzIl0sIm5hbWVzIjpbIlRJTEVfU0laRSIsIk1BUEJPWF9IT1NUIiwiTUFQX1NPVVJDRSIsImdldFRpbGVEYXRhIiwiaG9zdCIsInRva2VuIiwieCIsInkiLCJ6IiwibWFwU291cmNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsImRlY29kZVRpbGUiLCJ0aWxlIiwiVmVjdG9yVGlsZSIsIlByb3RvYnVmIiwicmVzdWx0IiwieFByb2oiLCJ5UHJvaiIsInNjYWxlIiwiTWF0aCIsInBvdyIsInByb2plY3RGdW5jIiwicHJvamVjdCIsImJpbmQiLCJsYXllck5hbWUiLCJ2ZWN0b3JUaWxlTGF5ZXIiLCJsYXllcnMiLCJpIiwibGVuZ3RoIiwidmVjdG9yVGlsZUZlYXR1cmUiLCJmZWF0dXJlIiwiZmVhdHVyZXMiLCJ2ZWN0b3JUaWxlRmVhdHVyZVRvUHJvcCIsImZvckVhY2giLCJmIiwicHJvcGVydGllcyIsImxheWVyIiwiaGVpZ2h0IiwicHVzaCIsImxpbmUiLCJleHRlbnQiLCJzaXplVG9QaXhlbCIsImlpIiwicCIsImNvb3JkcyIsImdldENvb3JkaW5hdGVzIiwidHlwZSIsIlZlY3RvclRpbGVGZWF0dXJlIiwidHlwZXMiLCJqIiwiY2xhc3NpZnlSaW5ncyIsIm1hcCIsImNvb3JkaW5hdGVzIiwicGJmIiwiX3BiZiIsInBvcyIsIl9nZW9tZXRyeSIsImVuZCIsInJlYWRWYXJpbnQiLCJjbWQiLCJsaW5lcyIsImNtZExlbiIsInJlYWRTVmFyaW50Iiwic2xpY2UiLCJFcnJvciIsInJpbmdzIiwibGVuIiwicG9seWdvbnMiLCJwb2x5Z29uIiwiY2N3IiwiYXJlYSIsInNpZ25lZEFyZWEiLCJ1bmRlZmluZWQiLCJyaW5nIiwic3VtIiwicDEiLCJwMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFv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dCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBQcm90b2J1ZiBmcm9tICdwYmYnO1xuaW1wb3J0IHtWZWN0b3JUaWxlLCBWZWN0b3JUaWxlRmVhdHVyZX0gZnJvbSAnQG1hcGJveC92ZWN0b3ItdGlsZSc7XG5pbXBvcnQge3dvcmxkVG9MbmdMYXR9IGZyb20gJ3ZpZXdwb3J0LW1lcmNhdG9yLXByb2plY3QnO1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cbmNvbnN0IFRJTEVfU0laRSA9IDUxMjtcbmNvbnN0IE1BUEJPWF9IT1NUID0gJ2h0dHBzOi8vYS50aWxlcy5tYXBib3guY29tJztcbmNvbnN0IE1BUF9TT1VSQ0UgPSAnL3Y0L21hcGJveC5tYXBib3gtc3RyZWV0cy12Nyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaWxlRGF0YShob3N0LCB0b2tlbiwge3gsIHksIHp9KSB7XG4gIGNvbnN0IG1hcFNvdXJjZSA9IGAke2hvc3QgfHxcbiAgICBNQVBCT1hfSE9TVH0ke01BUF9TT1VSQ0V9LyR7en0vJHt4fS8ke3l9LnZlY3Rvci5wYmY/YWNjZXNzX3Rva2VuPSR7dG9rZW59YDtcblxuICByZXR1cm4gZmV0Y2gobWFwU291cmNlKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgLnRoZW4oYnVmZmVyID0+IGRlY29kZVRpbGUoeCwgeSwgeiwgYnVmZmVyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUaWxlKHgsIHksIHosIGFycmF5QnVmZmVyKSB7XG4gIGNvbnN0IHRpbGUgPSBuZXcgVmVjdG9yVGlsZShuZXcgUHJvdG9idWYoYXJyYXlCdWZmZXIpKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgeFByb2ogPSB4ICogVElMRV9TSVpFO1xuICBjb25zdCB5UHJvaiA9IHkgKiBUSUxFX1NJWkU7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5wb3coMiwgeik7XG5cbiAgY29uc3QgcHJvamVjdEZ1bmMgPSBwcm9qZWN0LmJpbmQobnVsbCwgeFByb2osIHlQcm9qLCBzY2FsZSk7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gIGNvbnN0IGxheWVyTmFtZSA9ICdidWlsZGluZyc7XG4gIGNvbnN0IHZlY3RvclRpbGVMYXllciA9IHRpbGUubGF5ZXJzW2xheWVyTmFtZV07XG4gIGlmICghdmVjdG9yVGlsZUxheWVyKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjdG9yVGlsZUxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmVjdG9yVGlsZUZlYXR1cmUgPSB2ZWN0b3JUaWxlTGF5ZXIuZmVhdHVyZShpKTtcbiAgICBjb25zdCBmZWF0dXJlcyA9IHZlY3RvclRpbGVGZWF0dXJlVG9Qcm9wKHZlY3RvclRpbGVGZWF0dXJlLCBwcm9qZWN0RnVuYyk7XG4gICAgZmVhdHVyZXMuZm9yRWFjaChmID0+IHtcbiAgICAgIGYucHJvcGVydGllcy5sYXllciA9IGxheWVyTmFtZTtcbiAgICAgIGlmIChmLnByb3BlcnRpZXMuaGVpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHByb2plY3QoeCwgeSwgc2NhbGUsIGxpbmUsIGV4dGVudCkge1xuICBjb25zdCBzaXplVG9QaXhlbCA9IGV4dGVudCAvIFRJTEVfU0laRTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbGluZS5sZW5ndGg7IGlpKyspIHtcbiAgICBjb25zdCBwID0gbGluZVtpaV07XG4gICAgLy8gTE5HTEFUXG4gICAgbGluZVtpaV0gPSB3b3JsZFRvTG5nTGF0KFt4ICsgcFswXSAvIHNpemVUb1BpeGVsLCB5ICsgcFsxXSAvIHNpemVUb1BpeGVsXSwgc2NhbGUpO1xuICB9XG59XG5cbi8qIGFkYXB0ZWQgZnJvbSBAbWFwYm94L3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlZmVhdHVyZS5qcyBmb3IgYmV0dGVyIHBlcmYgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gdmVjdG9yVGlsZUZlYXR1cmVUb1Byb3AodmVjdG9yVGlsZUZlYXR1cmUsIHByb2plY3QpIHtcbiAgbGV0IGNvb3JkcyA9IGdldENvb3JkaW5hdGVzKHZlY3RvclRpbGVGZWF0dXJlKTtcbiAgY29uc3QgdHlwZSA9IFZlY3RvclRpbGVGZWF0dXJlLnR5cGVzW3ZlY3RvclRpbGVGZWF0dXJlLnR5cGVdO1xuICBjb25zdCBleHRlbnQgPSB2ZWN0b3JUaWxlRmVhdHVyZS5leHRlbnQ7XG4gIGxldCBpO1xuICBsZXQgajtcblxuICBjb29yZHMgPSBjbGFzc2lmeVJpbmdzKGNvb3Jkcyk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBwcm9qZWN0KGNvb3Jkc1tpXVtqXSwgZXh0ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29vcmRzLm1hcChjb29yZGluYXRlcyA9PiAoe1xuICAgIGNvb3JkaW5hdGVzLFxuICAgIHByb3BlcnRpZXM6IHZlY3RvclRpbGVGZWF0dXJlLnByb3BlcnRpZXNcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyh2ZWN0b3JUaWxlRmVhdHVyZSkge1xuICBjb25zdCBwYmYgPSB2ZWN0b3JUaWxlRmVhdHVyZS5fcGJmO1xuICBwYmYucG9zID0gdmVjdG9yVGlsZUZlYXR1cmUuX2dlb21ldHJ5O1xuXG4gIGNvbnN0IGVuZCA9IHBiZi5yZWFkVmFyaW50KCkgKyBwYmYucG9zO1xuICBsZXQgY21kID0gMTtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuXG4gIGNvbnN0IGxpbmVzID0gW107XG4gIGxldCBsaW5lO1xuXG4gIHdoaWxlIChwYmYucG9zIDwgZW5kKSB7XG4gICAgaWYgKGxlbmd0aCA8PSAwKSB7XG4gICAgICBjb25zdCBjbWRMZW4gPSBwYmYucmVhZFZhcmludCgpO1xuICAgICAgY21kID0gY21kTGVuICYgMHg3O1xuICAgICAgbGVuZ3RoID0gY21kTGVuID4+IDM7XG4gICAgfVxuXG4gICAgbGVuZ3RoLS07XG5cbiAgICBpZiAoY21kID09PSAxIHx8IGNtZCA9PT0gMikge1xuICAgICAgeCArPSBwYmYucmVhZFNWYXJpbnQoKTtcbiAgICAgIHkgKz0gcGJmLnJlYWRTVmFyaW50KCk7XG5cbiAgICAgIGlmIChjbWQgPT09IDEpIHtcbiAgICAgICAgLy8gbW92ZVRvXG4gICAgICAgIGlmIChsaW5lKSBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICBsaW5lID0gW107XG4gICAgICB9XG5cbiAgICAgIGxpbmUucHVzaChbeCwgeV0pO1xuICAgIH0gZWxzZSBpZiAoY21kID09PSA3KSB7XG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcG5pay12ZWN0b3ItdGlsZS9pc3N1ZXMvOTBcbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGxpbmUucHVzaChsaW5lWzBdLnNsaWNlKCkpOyAvLyBjbG9zZVBvbHlnb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGNvbW1hbmQgJHtjbWR9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuXG4vLyBjbGFzc2lmaWVzIGFuIGFycmF5IG9mIHJpbmdzIGludG8gcG9seWdvbnMgd2l0aCBvdXRlciByaW5ncyBhbmQgaG9sZXNcblxuZnVuY3Rpb24gY2xhc3NpZnlSaW5ncyhyaW5ncykge1xuICBjb25zdCBsZW4gPSByaW5ncy5sZW5ndGg7XG5cbiAgaWYgKGxlbiA8PSAxKSByZXR1cm4gW3JpbmdzXTtcblxuICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuICBsZXQgcG9seWdvbjtcbiAgbGV0IGNjdztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYXJlYSA9IHNpZ25lZEFyZWEocmluZ3NbaV0pO1xuICAgIGlmIChhcmVhID09PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2N3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNjdyA9IGFyZWEgPCAwO1xuICAgIH1cblxuICAgIGlmIChjY3cgPT09IGFyZWEgPCAwKSB7XG4gICAgICBpZiAocG9seWdvbikge1xuICAgICAgICBwb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuICAgICAgfVxuICAgICAgcG9seWdvbiA9IFtyaW5nc1tpXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvbHlnb24ucHVzaChyaW5nc1tpXSk7XG4gICAgfVxuICB9XG4gIGlmIChwb2x5Z29uKSB7XG4gICAgcG9seWdvbnMucHVzaChwb2x5Z29uKTtcbiAgfVxuXG4gIHJldHVybiBwb2x5Z29ucztcbn1cblxuZnVuY3Rpb24gc2lnbmVkQXJlYShyaW5nKSB7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmluZy5sZW5ndGgsIGogPSBsZW4gLSAxLCBwMSwgcDI7IGkgPCBsZW47IGogPSBpKyspIHtcbiAgICBwMSA9IHJpbmdbaV07XG4gICAgcDIgPSByaW5nW2pdO1xuICAgIHN1bSArPSAocDJbMF0gLSBwMVswXSkgKiAocDFbMV0gKyBwMlsxXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cbiJdfQ==