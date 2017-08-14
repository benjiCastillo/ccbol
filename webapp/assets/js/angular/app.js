var app = angular.module('ccbolApp',
	['ngRoute',
    'jcs-autoValidate',
	'ccbolApp.homeCtrl',
    'ccbolApp.ubicacionCtrl',
    'ccbolApp.expositoresCtrl',
    'ccbolApp.programaCtrl',
    'ccbolApp.preinscripcionCtrl',
    'ccbolApp.preincripcionServices'
    ]
	).run([
        'defaultErrorMessageResolver',
        function (defaultErrorMessageResolver) {
            // To change the root resource file path
            defaultErrorMessageResolver.setI18nFileRootPath('assets/js');
            defaultErrorMessageResolver.setCulture('es-co');

            /*defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
              errorMessages['coincide'] = 'Su contraseña no coincide';
              errorMessages['parse'] = 'Debe ingresar la nueva contraseña';
            });*/
        }
    ]);

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

     var head = document.getElementsByTagName('head')[0];

        // Save the original method
        var insertBefore = head.insertBefore;

        // Replace it!
        head.insertBefore = function (newElement, referenceElement) {

            if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {

                // console.info('Prevented Roboto from loading!');
                return;
            }

            insertBefore.call(head, newElement, referenceElement);
        };

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
        templateUrl: 'assets/js/angular/pages/programa.html',
        controller: 'programaCtrl'
    })
    .when('/expositores', {
        templateUrl: 'assets/js/angular/pages/expositores.html',
        controller: 'expositoresCtrl'
	})
	.when('/pre-inscripcion', {
		templateUrl: 'assets/js/angular/pages/preinscripcion.html',
        controller: 'preinscripcionCtrl'
	})
    .when('/registro-exitoso', {
        templateUrl: 'assets/js/angular/pages/registroExitoso.html',
        controller: 'preinscripcionCtrl'
    })
	.when('/ubicacion', {
		templateUrl: 'assets/js/angular/pages/ubicacion.html',
        controller:'ubicacionCtrl'
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



app.run(function($rootScope,$location) {
    var routespermission = ['/ccbol'];
    $rootScope.$on('$routeChangeStart',function() {
        if( !(routespermission.indexOf($location.path()) != -1) ) {
            if( typeof timerId != 'undefined' )
                window.clearInterval(timerId);
            //console.log('Otros enlaces');
        } 
    });
});