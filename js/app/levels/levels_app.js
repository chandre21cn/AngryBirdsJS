define([
    'app',
    'js/app//main_layout',
    'js/app/levels/views/levels_view',
    'js/app/levels/models/levels_models',
    'js/app/levels/collections/levels_collections'
],

    function (App, MainLayouts, LevelsView, LevelsModel, LevelsCollection) {
        var RequisitionAppController;
        _.extend(RequisitionAppController, Backbone.Events);
        RequisitionAppController = {
            levelListShow : function () {
                var levels = this.getLevelsView();
            },
            getLevelsView : function () {
                var levelsCollection = new LevelsCollection();
                var levelsView = new LevelsView.CreateLevelsView({
                    collection: levelsCollection
                });
                levelsView.on("open:new:level", function () {
                    //console.log("11111111111");
                    console.log("0000000000000000");
                });
                return levelsView;
            }
        };

        return RequisitionAppController;
    });