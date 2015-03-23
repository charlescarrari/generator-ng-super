(function() {
	'use strict';

	angular
		.module('app.<%= module %>')
		.directive('<%= component %>', <%= component %> );

	/* @ngInject */
	function <%= component %> () {

		var directive = {
			link: link,
			restrict: 'EA',
			template: '<div></div>',
			scope: {

			}
		};

		return directive;

		/////////////////////

		function link(scope, elem, attrs) {
			console.info('This is a link function of the directive');
		}
	}
}());
