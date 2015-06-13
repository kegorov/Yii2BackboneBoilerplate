/**
 * main configuration file
 */
// Use ECMAScript 5 Strict Mode
"use strict";

// Define jQuery as AMD module
define.amd.jQuery = true;

// Require.js allows us to configure mappings to paths
// as demonstrated below:
// TODO: Load minified version of the libs or use Require.js's JS compiler (R)
require.config({
    paths:{

		<?=$paths ?>,
		// + underscore:'libs/marionette/underscore',
        //underscoreString:'libs/underscore/underscore.string',

        /* backbone */
		// + backbone:'libs/marionette/backbone',
        //backboneRelational:'libs/backbone/backbone-relational',
        //backboneBinder:'libs/backbone/backbone.model-binder',
        //backboneValidation:'libs/backbone/backbone.validation',
        // + backboneMarionette: 'libs/marionette/backbone.marionette',


        /* requirejs plugins*/
        //text:'libs/requirejs/text',
        //domReady:'libs/requirejs/domReady',

        /* utility libraries */
        //json:'libs/utils/json2',
        //parser:'libs/utils/parser',
        //session:'libs/utils/session',
        http:'libs/utils/http',
        /* a shortcut to have the templates outside of the js directory */
        templates:'../templates'
    },
    shim : {
        backbone : {
            exports : 'Backbone',
            deps : ['underscore']
        },
        backboneMarionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        underscore : {
            exports : '_'
        }
    },
    deps : ['underscore'],
    waitSeconds:15
})
;

// Let's kick off the application
require([
    'app',
    'router'
], function (App, Router) {

    /* attach router to the app */
    App.router = Router;

    App.start();

    Backbone.history.start();
});
