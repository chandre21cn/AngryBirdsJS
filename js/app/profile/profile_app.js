define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    var Profile = Backbone.Model.extend({
        defaults: {
            "levels": [
                {"level1": [true, 3, 400]},
                {"level2": [true, 1, 200]},
                {"level3": [true, 2, 300]},
                {"level4": [true, 0, 100]},
                {"level5": [false, 0, 0]}
            ]
        },
        validation: function(){
            // if level false stars == 0 and score == 0
        },
        initialize: function () {
            // load profile from localStorage
        }
    });
    return Profile;
});