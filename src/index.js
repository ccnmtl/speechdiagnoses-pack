/* global jQuery: true */

require('!file-loader?name=[name].[ext]!../static/index.html');
require('./static.js');

// load and apply css
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('!style-loader!css-loader!../static/css/common.css');
require('!style-loader!css-loader!../static/css/imagemapchart.css');

var jQuery = require('jquery');
var module = require('imagemapchart/src/index.js');

jQuery(document).ready(function() {
    module.ImageMapChartApp.initialize({
        el: jQuery('.infographic'),
        template: require('../static/templates/page.html'),
        items: require('../static/json/items.json')
    });
});
