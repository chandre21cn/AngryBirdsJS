define([
    'backbone',
    'app',
    'js/app/profile/profile_app',
    'js/app/start/start_app',
    'js/app/main_router'
],

    function (Backbone, App, LoadProfile, Start, Router) {
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
            //Start.runStartPage(profile);
        });

        return App;
    });
