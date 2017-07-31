angular.module('school')
.service('service',['$rootScope',function($rootScope){
    return {
        getChild:function(parent){
            return parent.children
        }
    }
}])