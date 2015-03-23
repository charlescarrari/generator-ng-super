(function() {
	'use strict';

	angular
		.module('app.<%= module %>', [])
		.config(configuration);

	/* @ngInject */
	function configuration($stateProvider) {

		//add your state mappings here
		$stateProvider
			.state('<%= module %>', {
				url: '/<%= module %>',
				templateUrl: 'src/<%= module %>/<%= module %>.html',
				controller: '<%= component %>',
				controllerAs: '<%= module %>',
				id: '<%= module %>',
				title: '<%= component %>',
				requiresLogin: false
			});
	}
}());
