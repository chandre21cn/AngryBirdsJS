define([
    'app',
    'jquery',
    'marionette',
    'js/app/levels/levels_app',
    'text!templates/level.html',
    'text!templates/levels.html',
    'text!templates/generateLevels.html'

], function (App, $, Marionette, LevelApp, LevelTemplate, LevelsTemplate, GenerateLevelTemplate) {

    var Views = {};
    Views.LevelView = Marionette.ItemView.extend({
        template: LevelTemplate,

        events: {
            'click': 'start'
        },
        start: function () {
            var element = $(this.el).find(".level-number");
            var elementOpen = element.attr("data-open");
            if (elementOpen === "true") {
                var elementLevel = element.attr("data-level");
                App.trigger("start::new::level", elementLevel);
            }
        },
        initialize: function(){
            this.el.className = "js-start-" + this.model.attributes.open;
        }
    });
    Views.CreateLevelsView = Marionette.CompositeView.extend({
        template: LevelsTemplate,
        itemView: Views.LevelView,
        itemViewContainer: '.levels',
        initialize: function () {
            this.collection.fetch();
        }
    });
    Views.GenerateLevel = Marionette.CompositeView.extend({
        template: GenerateLevelTemplate,
        initialize: function () {
            this.collection.fetch();
        }
    });

    return Views;
})
;