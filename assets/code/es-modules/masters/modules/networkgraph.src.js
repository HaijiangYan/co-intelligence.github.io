/**
 * @license Highcharts JS v11.4.4 (2024-07-02)
 * @module highcharts/modules/networkgraph
 * @requires highcharts
 *
 * Force directed graph module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import NetworkgraphSeries from '../../Series/Networkgraph/NetworkgraphSeries.js';
const G = Highcharts;
NetworkgraphSeries.compose(G.Chart);
export default Highcharts;
