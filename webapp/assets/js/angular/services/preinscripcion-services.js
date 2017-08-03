var app = angular.module('ccbolApp.preincripcionServices',[])

app.factory('preincripcionServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={

				insertar : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.1.6/Web/jscrum/api/public/usuario/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_nombre:datos.name,
								_apellidos:datos.lastname,
								_email:datos.email,
								_login:datos.nick,
								_password:datos.password,
								_profesion:datos.profession
						}
                    	})
                        .then(function successCallback(response) {
                                // ok
                                // self.cargado		= true;
    							// self.cargando		= false;
								self.response 	= response.data;
								// console.log("Service"+response);
								return d.resolve()	
                            }, function errorCallback(response) {
								
								self.response 	= response.data
								return d.resolve();
                        });
                       return d.promise;	 
	
				}
}


	return self;
}])