/* global describe: true, before: true, it: true */

require('!file?name=[name].[ext]!./view-test.html');
require('../src/static.js');

var chai = require('chai');
var assert = chai.assert;

var jQuery = require('jquery');
var module = require('../src/imagemapchart.js');

function waitFor(testFx, doneFx, millis) {
    var timeout = millis ? millis : 3000; // Default Max Timout is 10s
    var start = new Date().getTime();

    var interval = setInterval(function() {
        var condition = testFx();

        if (condition) {
            clearInterval(interval);
            doneFx();
        } else if ((new Date().getTime() - start >= timeout)) {
            clearInterval(interval);
            doneFx(new Error('timeout occurred'));
        }
    }, 250); //< repeat check every 250ms
}

describe('ImageMapChartApp', function() {
    var app;

    before(function() {
        var elt = jQuery('.infographic');
        assert.isDefined(elt);
        jQuery(elt).html('');

        app = module.ImageMapChartApp.initialize();
    });
});
