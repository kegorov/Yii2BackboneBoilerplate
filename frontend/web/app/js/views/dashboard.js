/**
 * DashboardPageView
 *
 * Renders dashboard page
 *
 * @author Antonio Ramirez <antonio@clevertech.biz>
 */
define([
    'backboneMarionette',
    'text!templates/dashboard.html'
], function (Marionette, DashboardPageTemplate) {
	return Marionette.ItemView.extend({
		template:DashboardPageTemplate
	});
});