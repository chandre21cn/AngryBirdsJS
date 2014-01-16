/*global require*/
'use strict';
require.config({
    baseUrl :"./",
    shim    :{
        underscore            :{
            exports :'_'
        },
        backbone              :{
            deps    :[
                'underscore',
                'jquery'
            ],
            exports :'Backbone'
        },
        backboneLocalstorage  :{
            deps    :['backbone'],
            exports :'LocalStorage'
        },
        marionette            :{
            deps    :['backbone'],
            exports :'Marionette'
        },
        bootstrap             :{
            deps :['jquery']
        },

        // shims for bootstrap (some have internal deps on top of jQuery)
        'bootstrap/bootstrap-transition' :['jquery'],
        'bootstrap/bootstrap-dropdown'   :['jquery'],
        'bootstrap/bootstrap-affix'      :['jquery'],
        'bootstrap/bootstrap-button'     :['jquery'],
        'bootstrap/bootstrap-scrollspy'  :['jquery'],
        'bootstrap/bootstrap-typeahead'  :['jquery'],
        'bootstrap/bootstrap-alert'      :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-carousel'   :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-collapse'   :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-modal'      :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-tab'        :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-tooltip'    :['jquery', 'bootstrap/bootstrap-transition'],
        'bootstrap/bootstrap-popover'    :['jquery', 'bootstrap/bootstrap-tooltip']
    },
    paths   :{
        jquery                           :'js/libs/jquery/jquery-2.0.3.min',
        jqueryCookie                     :'js/libs/jquery/jquery.cookie',
        jasmineJquery                    :'js/libs/jquery/jasmine-jquery',
        underscore                       :'js/libs/underscore/underscore-min',
        bootstrap                        :'js/libs/bootstrap/js/bootstrap.min',

        'bootstrap/bootstrap-transition' :'js/libs/bootstrap/js/bootstrap-transition',
        'bootstrap/bootstrap-dropdown'   :'js/libs/bootstrap/js/bootstrap-dropdown',
        'bootstrap/bootstrap-affix'      :'js/libs/bootstrap/js/bootstrap-affix',
        'bootstrap/bootstrap-button'     :'js/libs/bootstrap/js/bootstrap-button',
        'bootstrap/bootstrap-scrollspy'  :'js/libs/bootstrap/js/bootstrap-scrollspy',
        'bootstrap/bootstrap-typeahead'  :'js/libs/bootstrap/js/bootstrap-typeahead',
        'bootstrap/bootstrap-alert'      :'js/libs/bootstrap/js/bootstrap-alert',
        'bootstrap/bootstrap-carousel'   :'js/libs/bootstrap/js/bootstrap-carousel',
        'bootstrap/bootstrap-collapse'   :'js/libs/bootstrap/js/bootstrap-collapse',
        'bootstrap/bootstrap-modal'      :'js/libs/bootstrap/js/bootstrap-modal',
        'bootstrap/bootstrap-tab'        :'js/libs/bootstrap/js/bootstrap-tab',
        'bootstrap/bootstrap-tooltip'    :'js/libs/bootstrap/js/bootstrap-tooltip',
        'bootstrap/bootstrap-popover'    :'js/libs/bootstrap/js/bootstrap-popover',
        // This section should be defined in this way, because the same aliases PLSC/UX team is using
        backbone                         :'js/libs/backbone/backbone',
        text                             :'js/libs/requirejs/text',
        marionette                       :'js/libs/backbone/plugins/marionette/backbone.marionette.min',
        // Supply Chain UX part
        app      : 'js/app/app'
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