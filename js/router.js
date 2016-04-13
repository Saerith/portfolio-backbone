define([
    'backbone',
    'jquery',
    'views/about-view',
    'views/home-view',
    'views/main-compositor-view',
    'views/projects-view',
    'views/blog-view'

], function(
    Backbone,
    $,
    AboutView,
    HomeView,
    MainCompositorView,
    ProjectsView,
    BlogView

) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            'about': 'about',
            'home': 'home',
            'projects': 'projects',
            'blog': 'blog',
            '' : 'getProjects',
            '*splat': 'home'
        },

        initialize: function() {
            this.mainCompositorView = MainCompositorView.getInstance();
            $('body').html(this.mainCompositorView.render().el);
        },

        /* Routes */

        about: function() {
            this.mainCompositorView.setContentView('AI About', new AboutView());
        },

        home: function() {
            this.mainCompositorView.setContentView('AI Home', new HomeView());
        },

        projects: function() {
            this.mainCompositorView.setContentView('AI Projects', new ProjectsView());
        },

        blog: function() {
            this.mainCompositorView.setContentView('AI Blog', new BlogView());
        },

        getProjects: function() {
            
        }

    });

    return {
        initialize: function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        }
    };
});