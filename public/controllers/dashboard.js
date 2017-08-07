'use strict';
angular.module('exercise.dashboard', ['ngRoute'])
.controller('dashboardController', function($scope,service) {
	service.getJSONData().then(function(JSONdata){
		$scope.jsonData = JSONdata.data.data;
	});    
});