define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    '../collections/project-collection',
    '../models/project-model',
    'text!templates/projects.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    ProjectCollection,
    ProjectModel,
    projectsTemplate
) {
    var ProjectsView = Backbone.View.extend({

        template: Handlebars.compile(projectsTemplate),

        collection: ProjectCollection.getInstance(),

        initialize: function() {
            var self = this;
            this.collection.fetch({
                success: function() {
                    self.render();
                },
            });
        },

        render: function() {
            var self = this;
            this.$el.html(this.template(this.collection.toJSON()));
            return this;
        }
    });
    return ProjectsView;
});