'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('exercise', [
    'ui.router',    
    'exercise.dashboard',
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

app.directive("ngTree", function(service) {
    return {
        restrict: 'E',
        template: '<button class="btn btn-primary" style="margin:10px;" ng-click="showChild(myOptions)">{{myOptions.title}}</button>',
        replace: true,
        scope: {
            myOptions: '='
        },
        controller: function($scope, $element,$compile) {
            var hr_element_temp= document.createElement("hr");
            var hr_element = $compile(hr_element_temp)($scope);
            $element.parent().append(hr_element);

            $scope.showChild = function(child) {
                angular.forEach(service.getChild(child), (child) => {
                    var child_Str = JSON.stringify(child);
                    var ng_tree_temp = document.createElement("ng-tree");
                    ng_tree_temp.setAttribute('my-options',child_Str);
                    var ng_tree = $compile(ng_tree_temp)($scope);
                    $element.parent().append(ng_tree);
                });
                var hr_element_temp= document.createElement("hr");
                var hr_element = $compile(hr_element_temp)($scope);
                $element.parent().append(hr_element);
            }
        }
    }
});