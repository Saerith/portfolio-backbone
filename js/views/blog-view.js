define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/blog.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    blogTemplate
) {
    var BlogView = Backbone.View.extend({
        template: Handlebars.compile(blogTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return BlogView;
});