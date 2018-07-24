var app=angular.module('sample',['ngRoute']);


app.config(function($routeProvider)
	{
		$routeProvider.when('/firstlist',{

			templateUrl:'templates/first.htm',
			controller:'firstcontroller'

			}).when('/secondlist',{

				templateUrl:'templates/second.htm',
				controller:'secondcontroller'

			});
	});

app.controller('firstcontroller',['$scope','$http',function($scope,$http)
	{

			$http({
				url:'first.json',
				method:'GET'
			}).then(function(res)
			{
				$scope.data=res.data;
			},function(err)
			{
				console.log(err);
			});

	}]);


app.controller('secondcontroller',['$scope','$http',function($scope,$http)
	{

			$http({
				url:'https://jsonplaceholder.typicode.com/posts',
				method:'GET'
			}).then(function(res)
			{
				$scope.data=res.data;
			},function(err)
			{
				console.log(err);
			});

	}]);