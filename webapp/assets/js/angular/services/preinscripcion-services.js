var app = angular.module('ccbolApp.preincripcionServices',[])

app.factory('preincripcionServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

	var self ={
		guardarEst : function(datos){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://grupo-ciencia.com/api-ccbol/public/user/insertStudent/',
 						data: datos
                    	})
                        .then(function successCallback(response) {

								self.response 	= response.data;
								return d.resolve()	
                            }, function errorCallback(response) {
								
								self.response 	= response.data
								return d.resolve();
                        });
                       return d.promise;	 
		},	
		guardarProf : function(datos){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
			  		  url: 'http://grupo-ciencia.com/api-ccbol/public/user/insertProfessional/',
 						data: datos
                    	})
                        .then(function successCallback(response) {

								self.response 	= response.data;
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