define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/about'
	
	], function ($, _, Backbone, AboutView) {

		'use strict';

		var AppView = Backbone.View.extend({
			id: 'app-view',

			html: [ 
			'<div class="navbar navbar-default">',
			'<a class="navbar-brand" href="#">Bill Weather Watcher</a>',
			'<ul class ="nav navbar-nav">',
			'<li id="nav-dash"><a href="#dash">Dashboard</li>',
			'<li id="nav-about"><a href="#about">About</li>',
			'</ul>',
			'</div>',
			'<div id="content"></div>'
			].join(''),

			events: {

			},

			views: {},

			initialize: function() {
				this.views['about'] = new AboutView({
					id: 'page-about',
					className: 'page-view'
				});

				this.views['dash'] = new DashView({
					id: 'page-dash',
					className: 'page-view'
				});

				this.$el.append(this.html);

				this.$('#content').append(this.views['about'].render().el);
				this.$('#content').append(this.views['dash'].render().el);
			},

			onNavAbout: function (e) {
				alert('About button clicked');
			},

			onNavDash: function (e) {
				alert('Dash button clicked');
			}
		});

		return AppView;

	});