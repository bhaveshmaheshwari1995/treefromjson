angular.module('exercise')
.service('service',['$http',function($http){
    return {
        getChild:function(parent){
            return parent.children
        },
        getJSONData:function(){
        	return $http.get("InstitutionsData.json")
        }
    }
}])

