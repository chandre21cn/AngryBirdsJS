define([
    'jquery',
    'underscore',
    'marionette',
    'backbone',
    'app',
    'js/app//main_layout',
    'js/app/levels/views/levels_view',
    'js/app/levels/models/levels_models',
    'js/app/levels/collections/levels_collections',
    'js/app/levels/collections/level_1_collections'
],

    function ($, _, Marionette, Backbone, App, MainLayouts, LevelsView, LevelsModel, LevelsCollection, Level_1_Collection) {

        var RequisitionAppController= {
            levelListShow : function () {
                var levels = this.getLevelsView();
            },
            getLevelsView : function () {

                var levelsCollection = new LevelsCollection();
                var levelsView = new LevelsView.CreateLevelsView({
                    collection: levelsCollection
                });

                return levelsView;
            },
            startNewLevel: function(level){
                this.closeLevelList();
                var levelCollection = this.getLevelCollection(level);
                LevelsView.GenerateLevel({
                    collection: levelCollection
                });
            },
            getLevelCollection: function(level){
                if (level) {
                    var col = new Level_1_Collection();
                    console.log(col)
                    return col;
                }
            },
            closeLevelList: function(){
                 $(".levels-block").hide(500);
            }
        };
        return RequisitionAppController;
    });