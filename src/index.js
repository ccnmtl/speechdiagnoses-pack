/* global jQuery: true */

import './static.js';
require('!file-loader?name=[name].[ext]!../static/index.html');

// load and apply css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/common.css';
import '../static/css/imagemapchart.css';

import jQuery from 'jquery';
import module from 'imagemapchart/src/index.js';

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

jQuery(document).ready(function() {

    if (!getUrlParameter('parent')) {
        jQuery('#cu-privacy-notice').addClass('required');
    }

    module.ImageMapChartApp.initialize({
        el: jQuery('.infographic'),
        template: require('../static/templates/page.html'),
        items: require('../static/json/items.json')
    });
});
