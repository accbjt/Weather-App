define([
	'jquery',
	'underscore',
	'backbone'

	], function ($, _, Backbone) {

		'use strict';

		var Router = Backbone.Router.extend({
			routes: {
				'' : 'goToDash',
				'dash': 'goToDash',
				'about': 'goToAbout0'
			},

		
		});

		return Router;

	});