define([
    'backbone',
    'strings',
    'moment'
], function(
    Backbone,
    strings,
    moment
) {
    var PostModel = Backbone.Model.extend({
        defaults: {
            url: strings.baseServerUrl + 'posts/'
        },
        apiUrl: function() {return strings.baseServerUrl + 'posts/' + this.id + '/';}

    });

    return PostModel;
});