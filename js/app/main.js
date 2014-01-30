/*global require*/
'use strict';
require.config({
    baseUrl: "./",
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: 'js/libs/jquery/jquery-2.0.3.min',
        underscore: 'js/libs/underscore/underscore-min',
        bootstrap: 'js/libs/bootstrap/js/bootstrap.min',
        backbone: 'js/libs/backbone/backbone',
        text: 'js/libs/requirejs/text',
        marionette: 'js/libs/backbone/plugins/marionette/backbone.marionette.min',

        app: 'js/app/app'
    }
});

require([
    'js/app/application'
],

    function (App) {
        // Application start
        App.start();
    }
);