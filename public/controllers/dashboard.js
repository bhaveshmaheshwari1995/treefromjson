'use strict';
angular.module('school.dashboard', ['ngRoute'])
.controller('dashboardController', function($scope,$rootScope, $http,$timeout,service) {

    $scope.getChild = function(jsonData){
    console.log('dashboard called');

    console.log(jsonData);
    service.getChild(jsonData).forEach(function(child) {
        var newChild = service.getChild(child);
        document.getElementById("show_tree").innerHTML += '<button style="margin:10px; float:left" type="button" class="btn btn-primary" ng-click = "getChild('+newChild+')">'+child.title+'</button>';
    });
    document.getElementById("show_tree").innerHTML += '<br><br><br>';
    $scope.apply();

    }
    
});