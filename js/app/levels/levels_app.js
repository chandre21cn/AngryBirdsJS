define([
    'app',
    'js/app//main_layout',
    'js/app/levels/views/levels_view',
    'js/app/levels/models/levels_models',
    'js/app/levels/collections/levels_collections'
],

    function (App, MainLayouts, LevelsView, LevelsModel, LevelsCollection) {

        var RequisitionAppController = {
            levelListShow : function () {
                var levels = this.getLevelsView();
                //console.log(levels);
                //MainLayouts.levelsRegion.show(levels);
            },

            getLevelsView : function () {
                var levelsCollection = new LevelsCollection();
                return new LevelsView.CreateLevelsView({
                    collection: levelsCollection
                });
            }

        };

        return RequisitionAppController;
    });