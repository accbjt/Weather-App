require.config({

	path: {
		'jquery': 'libs/jquery-1.11.0.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap'
	},

	shim: {
		'underscore': {
			export: '_'
		},
		'backbone': {
			deps: [
			'underscore',
			'jquery'
			],
			export: 'Backbone'
		},
		'bootstrap': {
			deps: [
			'jquery'
			]
		}
	}
});

require([
		'backbone',
		'app/app'
	], function (Backbone, App) {
		'use strict';

		App.initialize();
		console.log(App);
	});
