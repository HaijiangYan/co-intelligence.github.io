/**
 * @license Highcharts JS v11.4.4 (2024-07-02)
 * @module highcharts/modules/marker-clusters
 * @requires highcharts
 *
 * Marker clusters module for Highcharts
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import MarkerClusters from '../../Extensions/MarkerClusters/MarkerClusters.js';
import MarkerClusterSymbols from '../../Extensions/MarkerClusters/MarkerClusterSymbols.js';
const G = Highcharts;
MarkerClusters.compose(G.Axis, G.Chart, G.defaultOptions, G.Series);
MarkerClusterSymbols.compose(G.SVGRenderer);
export default Highcharts;
