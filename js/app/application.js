define([
    'backbone',
    'app',
    'js/app/main_router',
    'js/app/levels/levels_app'
],

    function (Backbone, App, Router, LevelsApp) {
        var profile = {};

        App.addRegions({
            mainContainer: '.main-page'
        });

        App.on("initialize:before", function () {
            //profile = JSON.stringify(new LoadProfile);
            //console.log(profile);
        });

        App.on('start', function () {
            this.router = new Router();
            this.router.showHome();
            // start tracking routes
            if (Backbone.history) {
                Backbone.history.start();
            }
            console.log("application started");
            //App.vent.trigger("create:levels");
            //Start.runStartPage(profile);
        });
        App.on("start::new::level", function(level){
            LevelsApp.startNewLevel(level);
        });

        return App;
    });
