/*
    _       _ _ _      _                               _
   | |_ _ _|_| | |_   | |_ _ _    ___ ___ ___ ___    _| |___ _ _
   | . | | | | |  _|  | . | | |  |  _| .'|  _|_ -|  | . | -_| | |
   |___|___|_|_|_|    |___|_  |  |___|__,|_| |___|  |___|___|\_/
                          |___|                     (aww yeah!!)
*/

// simple config
__SUBDIR__ = window.location.pathname || '/cars-sg';

require.config({
  /**
   * By default load any module IDs from /core/js/
   * - remove absolute domain to run in local environment
   */
  baseUrl: 'http://www.cars.com/core/js',
  urlArgs: 'cb=' + Math.random(),
  //define key lib locations - some for Cars libs, some for styleguide only (starts with slash)
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
    can: "libs/canjs/1.1.4/amd.build/can", // AMD friendly version - CJ
    cars: "libs/cars/cars",
    jquerycookie: "libs/jquery/jquery.cookie", // custom AMD friendly version - CJ
    jquerytools: "libs/jquery/jquery.tools.min", // custom AMD friendly version - CJ
    domReady: "libs/requirejs/domReady",
    text: "libs/requirejs/text",
    showdown: __SUBDIR__+"/js/libs/showdown/showdown",
    highlight: __SUBDIR__+"/js/libs/highlight.js/highlight.pack"
  },
  shim: {
    'can': ['jquery'],
    'highlight': ['jquery']
  },
  waitSeconds: 15,
  /** map jquery loading to internal/no-conflict cache method */
  map : {
    '*' : { 'jquery' : 'jquery-nc' },
    'jquery-nc' : { 'jquery' : 'jquery' }
  }
});
/**
 * loader to prevent jquery from trouncing on-page jquery
 */
define('jquery-nc', ['jquery'], function($){
  return $.noConflict(true);  // requirejs will cache the returned value
});

/**
 * kickoff main application logic
 */
require([__SUBDIR__+'/js/app.js'], function(app) {
  var router = new app.router(window);
});
