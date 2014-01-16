define([
    'marionette',
    'text!templates/level.html',
    'text!templates/levels.html'

], function (Marionette, LevelTemplate, LevelsTemplate) {

    var Views = {};

    Views.LevelView = Marionette.ItemView.extend({
        template  : LevelTemplate,
        className: "level span2",
        events    : {
            'click .js-start-game': 'startLevel'
        },
        startLevel: function (level) {
            console.log(level);
        }
    });

    Views.CreateLevelsView = Marionette.CompositeView.extend({
        template  : LevelsTemplate,
        itemView  : Views.LevelView,
        itemViewContainer:'.levels',
        initialize: function () {
            this.collection.fetch();
        }
    });

    return Views;
});