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
				'about': 'goToAbout'
			},

		initialize: function (view) {
			this.appView = view;
		},

		gotToDash: function () {
			this.appView.setPage ('dash');
		},

		gotToAbout: function () {
			this.appView.setPage ('about');
		}

		});

		return Router;

	});