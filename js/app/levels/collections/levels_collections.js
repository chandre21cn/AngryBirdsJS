define([
    'backbone',
    'js/app/levels/models/levels_models'
], function (Backbone, LevelModel) {
    var NewLevelsCollection = Backbone.Collection.extend({
        url: 'levels-data.json',

        parse: function(response){
            return response.levels;
        }
        //model : LevelModel
    });
    return NewLevelsCollection;
});



