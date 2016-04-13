define([
    'backbone',
    'underscore',
    // 'backbonepaginator',
    'strings',
    '../models/project-model'
], function(
    Backbone,
    _,
    // Backbonepaginator,
    strings,
    ProjectModel
) {
    var ProjectCollection = Backbone.Collection.extend({
        model: ProjectModel,

        url: 'http://localhost:63342/portfolio-backbone/getHTMLdata.json',

    }, {
        instance: null,

        getInstance: function() {
            this.instance = this.instance || new ProjectCollection();
            return this.instance;
        },

    });
    return ProjectCollection;
});
