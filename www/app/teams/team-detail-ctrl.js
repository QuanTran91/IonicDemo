(function (){
	'use strict';
	angular.module("IonicDemo").controller("teamDetailCtrl",function($stateParams,$scope){
		console.log($stateParams);
		$scope.id = $stateParams.id;
	});
})();