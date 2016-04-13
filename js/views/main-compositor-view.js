define([
    'backbone',
    'jquery',
    'underscore',
    'handlebars',
    'views/sidebar-view',
    'text!templates/main-compositor.html'
], function(
    Backbone,
    $,
    _,
    Handlebars,
    SidebarView,
    mainCompositorTemplate
) {
    var MainCompositorView = Backbone.View.extend({
        // init here so it only compiles once
        template: Handlebars.compile(mainCompositorTemplate),

        sidebar: new SidebarView(),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            this.$('#sidebar').html(this.sidebar.render().el);
            return this;
        },

        // renders the view of #content with a sidebar
        renderContentView: function() {
            this.contentView && this.$('#content').html(this.contentView.render().el);
        },

        // sets the view of #content to view param and its title with helper functions
        setContentView: function(title, view) {
            this.contentView = view;
            title && this.setTitle(title);
            this.renderContentView();

        },

        // sets the view's title and #title
        setTitle: function(title) {
            this.title = title;
            $('title').text(title);
        },

    }, {
        getInstance: function() {

            this.instance = this.instance || new MainCompositorView();
            return this.instance;
        }
    });
    return MainCompositorView;
});
