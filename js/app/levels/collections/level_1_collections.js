define([
    'backbone'
], function (Backbone) {
    var NewLevelsCollection = Backbone.Collection.extend({
        url: 'level-1-data.json',

        parse: function(response){
            return response.levels;
        }
        //model : LevelModel
    });
    return NewLevelsCollection;
});



