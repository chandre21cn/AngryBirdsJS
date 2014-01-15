define([
    'marionette',
    'text!templates/game.html'
], function (Marionette, MainPageTemplate) {

    var MainLayout = Marionette.Layout.extend({
        template: MainPageTemplate,
        regions : {
            infoRegion  : '.info-block',
            levelsRegion: '.levels-block',
            gameRegion  : '.game-block'
        }
    });

    return new MainLayout();
});
