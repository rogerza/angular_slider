var SliderModule = angular.module("SliderModule", []);
SliderModule.directive("dateslider", function(){
    return {
	restrict: "A",
	require: "^ngController",
	link: function(scope, elem, attr, ctrl){
	    elem.slider({
		range: true,
		min: scope.datemin,
		max: scope.datemax,
		values: [scope.datemin, scope.datemax],
		slide: function(event, ui){
		    scope.$apply(function(){
			ctrl.set_date_range(ui.values);
		    });
		}
	    });
	}
    }
});

var app = angular.module("app", ["SliderModule"]);

app.controller("MyCtrl", function($scope){
    $scope.datemin = 1990;
    $scope.datemax = 2012;
    $scope.daterange = [$scope.datemin, $scope.datemax];
    $scope.data = { message: "Hi!"};
    this.set_date_range = function(values){
	$scope.daterange = values;
    }
});