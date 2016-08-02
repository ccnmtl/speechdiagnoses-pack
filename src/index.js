/* global jQuery: true */

require('!file?name=[name].[ext]!../static/index.html');
require('./static.js');

// load and apply css
require('!style!css!bootstrap/dist/css/bootstrap.min.css');
require('../static/css/common.css');
require('../static/css/imagemapchart.css');

var jQuery = require('jquery');
var module = require('imagemapchart/src/index.js');

jQuery(document).ready(function() {
    module.ImageMapChartApp.initialize({
        el: jQuery('.infographic'),
        template: require('../static/templates/page.html'),
        items: require('../static/json/items.json')
    });
});
