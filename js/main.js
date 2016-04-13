require.config({
    paths: {
        backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
        handlebars: 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars',
        jquery: 'https://code.jquery.com/jquery-1.12.3.min',
        underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});