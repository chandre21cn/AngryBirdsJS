define([
    'backbone',
    'js/configurations/baseRouter',
    // Controllers
    'js/app/main_app'
    ], function (Backbone, BaseRouter, MainAppController) {

        var Router = BaseRouter.extend({
            routes: {
                'home'    : 'showHome',
                '*path'   : 'show404'
            },

            showHome: function() {
                MainAppController.showHomePage();
            },

            show404: function() {
                Backbone.history.navigate('home', {trigger: true});
            }
        });

        return Router;
    });