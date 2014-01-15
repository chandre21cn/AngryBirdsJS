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
                console.log(levels);
                console.log(MainLayouts.levelsRegion);
                MainLayouts.levelsRegion.show(levels);
            },

            getLevelsView : function () {
                this.collection = new LevelsCollection();
                this.collection.fetch();
                return new LevelsView.CreateLevelsView({
                    collection: this.collection
                });
            }
        };

        App.vent.on("create:levels", function () {
            RequisitionAppController.levelListShow();
        });
        /*
        var that = this;
        this.layout = new LevelsView.Layouts();
        this.layout.on('show', function () {
            that.showRequisitionRegions();
        });

        MainLayout.trayRegion.show(this.layout);

        this.itemsCollection = new RequisitionCollection();*/

        return RequisitionAppController;
    });