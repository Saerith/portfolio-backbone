define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'text!templates/about.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    aboutTemplate
) {
    var AboutView = Backbone.View.extend({
        template: Handlebars.compile(aboutTemplate),

        initialize: function() {

        },

        events: {
            //'click #sidebar-toggle': 'sidebarToggle'
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        // sidebarToggle: function(e) {
        //         e.preventDefault();
        //         $("#wrapper").toggleClass("toggled");
        //
        // }
    });
    return AboutView;
});