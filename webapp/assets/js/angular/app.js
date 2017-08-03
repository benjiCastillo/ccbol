var app = angular.module('ccbolApp',
	['ngRoute',
	'ccbolApp.homeCtrl'
    ]
	);
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    /* Hammer js para el swip */
    var menu = $('#main-container')[0];

    var mc = new Hammer(menu);
    var conPanright = 0;
    var conPanleft = 0;
        mc.on("panleft panright tap press", function(ev) {
            if(ev.type == 'panright'){
                conPanright ++;

            }
            if(ev.type == 'panleft'){
                conPanleft++;
            }
            // console.log(conPanright);
            if(conPanright == 5){
                // console.log('abrir');
                $('#menu-xs-sm').css("left", "0px");
                $('#menu-xs-sm').attr("data-active","true");
                conPanright = 0;
            }
            // console.log(conPanleft);
            if(conPanleft == 5){
                //  console.log('cerrar');
                $('#menu-xs-sm').css("left", "-200px");
                $('#menu-xs-sm').attr("data-active","false");
                conPanleft = 0;
            }
        });
     $scope.closeMenu = function(){
            $('#menu-xs-sm').css("left", "-200px");
            $('#menu-xs-sm').attr("data-active","false");
     }   
}]);

 app.config( function ($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'assets/js/angular/pages/home.html',
        controller: 'homeCtrl'
	})
	.when('/ccbol', {
		templateUrl: 'assets/js/angular/pages/home.html',
        controller: 'homeCtrl'
	})
	.when('/programa', {
		templateUrl: 'assets/js/angular/pages/building.html'
	})
	.when('/pre-inscripcion', {
		templateUrl: 'assets/js/angular/pages/building.html'
	}) 
	.when('/ubicacion', {
		templateUrl: 'assets/js/angular/pages/building.html'
	})       
    .when('/noticias', {
		templateUrl: 'assets/js/angular/pages/building.html'
	})               
	.otherwise({ 
		redirectTo: '/', 
	});
});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);