var apt=
{
    "apartments": [
        {
        	"name": "The Pavilion on Berry",
        	"image": "my favourite 1.jpg",
        	"price": 512,
        	"popularity": 4,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": "fitness center included",
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {        	
        	"name": "Radius @15th",
        	"image": "my favourite 3.jpg",
        	"price": 492,
        	"popularity": 5,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "416 Lofts",
        	"image": "my favourite 2.jpg",
        	"price": 460,
        	"popularity": 3,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "Edge on Oak",
        	"image": "my favourite 5.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": "fitness center included",
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
		{
        	"name": "The Pavilion on Berry",
        	"image": "my favourite 1.jpg",
        	"price": 512,
        	"popularity": 4,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {        	
        	"name": "Radius @15th",
        	"image": "my favourite 3.jpg",
        	"price": 492,
        	"popularity": 5,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": "fitness center included",
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "416 Lofts",
        	"image": "my favourite 2.jpg",
        	"price": 460,
        	"popularity": 3,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "Edge on Oak",
        	"image": "my favourite 5.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
		{
        	"name": "The Pavilion on Berry",
        	"image": "my favourite 1.jpg",
        	"price": 512,
        	"popularity": 4,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {        	
        	"name": "Radius @15th",
        	"image": "my favourite 3.jpg",
        	"price": 492,
        	"popularity": 5,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "416 Lofts",
        	"image": "my favourite 2.jpg",
        	"price": 460,
        	"popularity": 3,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": "fitness center included",
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        },
        {

        	"name": "Edge on Oak",
        	"image": "my favourite 5.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities",
			"State": "Minneapolis, MN",
			"car": "3 mins drive to school",
			"walk": "15 mins walk to school",
			"fit": null,
			"detail": "Apartment detail here! Apartment detail here! Apartment detail here! "
        }
		
    ]
};
var app = angular.module('myApp', []);
app.controller('ApartmentList', ['$scope', 'orderByFilter', function($scope, orderBy) {
	$scope.current = 0;
	/*$scope.total= apt.apartments.length;
	$scope.number = Math.ceil($scope.total / 5 );*/
	$scope.max = 5;
	$scope.value=true;
	$scope.propertyName = 'popularity';
	$scope.reverse = true;
	$scope.apartments = orderBy(apt.apartments, $scope.propertyName, $scope.reverse);
	$scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== "" && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
	$scope.apartments = orderBy(apt.apartments, $scope.propertyName, $scope.reverse);
  };
	$scope.prev = function () {
        if ($scope.current > 0) {
            $scope.current--;
		}
    };
	$scope.next = function () {
        if ($scope.current < 3) {
            $scope.current++;
		}
    };
	
	//update pagination
	$scope.$watch('$scope.current+1+$scope.max', function () {
		var begin = (($scope.current - 1) * $scope.max)
    , end = begin + $scope.max;
    $scope.filteredTodos = $scope.apartments.slice(begin, end);
	}, true);
}]);
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

