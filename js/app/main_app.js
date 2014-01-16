define([
    'marionette',
    'app',
    'js/app/main_layout',
    'js/app/levels/levels_app'

],
    function (Marionette, App, MainLayout, LevelsController) {

        var MainAppController = {
            showHomePage: function () {
                var mainLayout = MainLayout;
                console.log(mainLayout);
                App.mainContainer.show(mainLayout);
                mainLayout.levelsRegion.show(LevelsController.getLevelsView());
            }
        };

        return MainAppController;
    });
