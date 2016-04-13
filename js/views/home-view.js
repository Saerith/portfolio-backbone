define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/home.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    homeTemplate
) {
    var HomeView = Backbone.View.extend({
        template: Handlebars.compile(homeTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return HomeView;
});