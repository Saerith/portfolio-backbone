define([
    'backbone',
    'strings'
], function(
    Backbone,
    strings
) {
    var ProjectModel = Backbone.Model.extend({
        url : 'http://localhost:63342/portfolio-backbone/getHTMLdata.json'

    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new ProjectModel();
            return this.instance;
        }
    });

    return ProjectModel;
});