'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('school', [
'ui.router',
'school.dashboard',
]);
app.config( function($locationProvider, $stateProvider, $urlRouterProvider) {
	
  $urlRouterProvider.otherwise('/dashboard');
  
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: './views/dashboard.html',
    controller: 'dashboardController'
  })

});

app.run(function($rootScope, $http, $state) {
  $.getJSON("InstitutionsData.json", function(jsonData) {
    $rootScope.jsonData = jsonData.data;
  });    
});

app.directive("user", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.child = attrs.child;
            scope.parent = attrs.parent;
            
        },
        template: '<button type="button" class="btn btn-primary">'+child.title+'</button>'
    }
})

