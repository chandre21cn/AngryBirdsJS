define([
    'jquery',
    'marionette',
    'text!templates/level.html',
    'text!templates/levels.html'

], function ($, Marionette, LevelTemplate, LevelsTemplate) {

    var Views = {};

    Views.LevelView = Marionette.ItemView.extend({
        template: LevelTemplate,

        events: {
            'click': 'start'
        },
        start: function () {
            var element = $(this.el).find(".level-number");
            var elementOpen = element.attr("data-open");
            if (elementOpen) {
                var elementLevel = element.attr("data-level");
                this.trigger("open:new:level");
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
            this.trigger("open:new:level");
        }
    });

    return Views;
})
;