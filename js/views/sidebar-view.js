define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'bootstrap',
    'strings',
    'text!templates/sidebar.html'
],function(
    Backbone,
    $,
    _,
    Handlebars,
    Bootstrap,
    strings,
    sidebarTemplate
) {
    var SidebarView = Backbone.View.extend({
        template: Handlebars.compile(sidebarTemplate),

        events: {
            'click #btn-home': 'home',
            'click #btn-about': 'about',
            'click #btn-projects': 'projects',
            'click #btn-blog': 'blog'
        },
        
        initialize: function() {

        },
        
        render: function() {
            this.$el.html(this.template());
            return this;

        },

        home: function() {
            Backbone.history.navigate('home', {trigger: true});
        },

        about: function() {
            Backbone.history.navigate('about', {trigger: true});
        },

        projects: function() {
            Backbone.history.navigate('projects', {trigger: true});
        },

        blog: function() {
            Backbone.history.navigate('blog', {trigger: true});
        }

    });
    return SidebarView;
});