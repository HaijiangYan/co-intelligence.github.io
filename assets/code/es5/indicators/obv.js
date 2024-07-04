!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Karol Kolodziej
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/obv",["highcharts","modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function o(t,o,r,n){t.hasOwnProperty(o)||(t[o]=n.apply(null,r),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}o(t,"Stock/Indicators/OBV/OBVIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),n=e.seriesTypes.sma,s=t.isNumber,i=t.error,u=t.extend,a=t.merge,c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getValues=function(e,t){var o,r=e.chart.get(t.volumeSeriesID),n=e.xData,u=e.yData,a=[],c=[],p=[],l=!s(u[0]),f=[],d=1,h=0,y=0,m=0,v=0;if(r)for(o=r.yData,f=[n[0],h],m=l?u[0][3]:u[0],a.push(f),c.push(n[0]),p.push(f[1]);d<u.length;d++)y=(v=l?u[d][3]:u[d])>m?h+o[d]:v===m?h:h-o[d],f=[n[d],y],h=y,m=v,a.push(f),c.push(n[d]),p.push(f[1]);else{i("Series "+t.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,e.chart);return}return{values:a,xData:c,yData:p}},t.defaultOptions=a(n.defaultOptions,{marker:{enabled:!1},params:{index:void 0,period:void 0,volumeSeriesID:"volume"},tooltip:{valueDecimals:0}}),t}(n);return u(c.prototype,{nameComponents:void 0}),e.registerSeriesType("obv",c),c}),o(t,"masters/indicators/obv.src.js",[t["Core/Globals.js"]],function(e){return e})});