var app = angular.module( 'ccbolApp',[ 
		'ngRoute','ccbolApp.homeCtrl'
		]);

app.controller('mainCtrl',  function(){
	

});
// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'pages/home.html',
			controller: 'homeCtrl'
		})
		// .when('/form1',{
		// 	templateUrl: 'pages/form1.html',
		// 	controller : 'form1Ctrl'
		// })
		.otherwise({
			templateUrl: 'pages/building.html',
		})

}]);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


