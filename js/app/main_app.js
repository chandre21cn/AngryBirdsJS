define([
    'app',
    'js/app/main_layout'

],
    function (App, MainLayout, InfoController, LevelsController, GameController) {

        var MainAppController = {
            showHomePage: function () {
                // switch main container to show home page instead of login form
                App.mainContainer.show(MainLayout);

                // render core application using appropriate controllers
                /*InfoController.showHeader();
                LevelsController.showNavigation();
                GameController.showMainContent();*/
            }
        };

        return MainAppController;
    });
