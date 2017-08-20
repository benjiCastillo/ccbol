var app = angular.module('ccbolApp.preincripcionServices',[])

app.factory('preincripcionServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

	var self ={
		guardarEst : function(datos){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://grupo-ciencia.com/api-ccbol-2/public/user/insertStudent/',
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
			  		  url: 'http://grupo-ciencia.com/api-ccbol-2/public/user/insertProfessional/',
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
		dataUser : function(datos){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
			  		  url: 'http://grupo-ciencia.com/api-ccbol-2/public/user/datauser/',
 						data: datos
                    	})
                        .then(function successCallback(response) {
								console.log(response.data);
								self.response 	= response.data;
								return d.resolve()	
                            }, function errorCallback(response) {
								
								self.response 	= response.data
								return d.resolve();
                        });
                       return d.promise;	 
		},			
		countUser : function(){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://grupo-ciencia.com/api-ccbol-2/public/user/countUser/'
                    	})
                        .then(function successCallback(response) {
								console.log(response.data);
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