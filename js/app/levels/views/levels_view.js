define([
    'marionette',
    'text!templates/levels.html',
    'text!templates/level.html'

], function (Marionette, LevelTemplate, LevelsTemplate) {

    var Views = {};

    Views.CreateLevelView = Marionette.CompositeView.extend({
        template   : LevelTemplate,
        className  : '.leeeeeeee',
        attributes : {
            "data-level-number" : "123456" // TODO get level number
        },
        events        : {
            'click .js-start-game': 'startLevel'
        },

        startLevel: function (level) {
            console.log(level);
        }

    });

    Views.CreateLevelsView = Marionette.CompositeView.extend({
        template          : LevelsTemplate,
        regions       : {
            startGame: '.levels-block'
        }
    });

    return Views;
});