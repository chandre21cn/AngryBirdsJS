define([
        'backbone',
        'app'
       ],

        function (Backbone, App) {

        App.addRegions({
            mainContainer : '.main-page'
        });

        App.on('start', function () {
            console.log("application started");
        });

        return App;
});
