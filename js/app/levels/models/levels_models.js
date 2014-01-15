define([
    'backbone'
], function (Backbone) {
    var NewItemModel = Backbone.Model.extend({
        defaults  : {
            "level": 0,
            "open": false,
            "stars": 0,
            "score": 0
        },
        initialize: function () {
            // TODO
        }
    });

    return NewItemModel;
});