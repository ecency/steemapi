'use strict';

module.exports = function(config) {
  config.set({
    frameworks: [ 'mocha', 'sinon-chai' ],

    'plugins' : [
        'karma-mocha',
        'karma-sinon-chai',
        'karma-phantomjs-launcher'
    ],

    files: [
      'docs/lib/jquery-1.8.0.min.js',
      'docs/lib/jquery.slideto.min.js',
      'docs/lib/jquery.wiggle.min.js',
      'docs/lib/jquery.ba-bbq.min.js',
      'docs/lib/handlebars-2.0.0.js',
      'docs/lib/js-yaml.min.js',
      'docs/lib/lodash.min.js',
      'docs/lib/backbone-min.js',
      'docs/swagger-ui.js',
      'docs/lib/highlight.9.1.0.pack.js',
      'docs/lib/highlight.9.1.0.pack_extended.js',
      'docs/lib/jsoneditor.min.js',
      'docs/lib/marked.js',
      'docs/lib/swagger-oauth.js',
      'test/unit/mock.js',
      'test/unit/**/*.js'
    ],

    //singleRun: true,

    browsers: [ 'PhantomJS'/*,  'Chrome' */]
  });
};
