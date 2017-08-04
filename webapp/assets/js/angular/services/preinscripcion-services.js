var app = angular.module('ccbolApp.preincripcionServices',[])

app.factory('preincripcionServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

	var self ={
		response : [],
		guardarEst : function(datos) {
			var d = $q.defer();
			console.log(datos);
		    $http({
		      method: 'POST',
			  	url: 'http://10.0.0.9/ccbol/api/public/user/insertStudent/',
		        data: datos
		    	})
		        .then(function successCallback(response) {
						self.response 	= response.data;
						console.log(response);
						if ( response.data.error == 'not' ) {
							self.response 	= response.data;
							//swal("CORRECTO", "¡"+response.msj+"!", "success");
						} else 
						if ( response.data.error == 'yes' )
							console.log("Error normal: "+response.data.message);
							//swal("ERROR", "¡"+response.msj+"!", "error");
						else
							console.log("Error del server.");
							//swal("ERROR SERVER", "¡"+response+"!", "error");
						return d.resolve();
		            }, function errorCallback(response) {
						self.response 	= response;
						return d.reject(response);
		        });
		    return d.promise;

		},
		guardarProf : function(datos) {
			var d = $q.defer();
			console.log(datos);
		    $http({
		      method: 'POST',
			  	url: 'http://10.0.0.9/ccbol/api/public/user/insertProfessional/',
		        data: datos
		    	})
		        .then(function successCallback(response) {
						self.response 	= response.data;
						console.log(response);
						if ( response.data.error == 'not' ) {
							self.response 	= response.data;
							//swal("CORRECTO", "¡"+response.msj+"!", "success");
						} else 
						if ( response.data.error == 'yes' )
							console.log("Error normal: "+response.data.message);
							//swal("ERROR", "¡"+response.msj+"!", "error");
						else
							console.log("Error del server.");
							//swal("ERROR SERVER", "¡"+response+"!", "error");
						return d.resolve();
		            }, function errorCallback(response) {
						self.response 	= response;
						return d.reject(response);
		        });
		    return d.promise;

		}
	}


	return self;
}])