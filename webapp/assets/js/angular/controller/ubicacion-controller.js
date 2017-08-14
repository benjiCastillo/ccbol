var app = angular.module('ccbolApp.ubicacionCtrl',[]);

app.controller('ubicacionCtrl', ['$scope',function($scope){
              var cities = [
              {
                  place : 'Facultad de Tecnologia',
                  desc : 'Calle Regimientos Campos y Ricardo Andrade',
                  lat : -19.039966,
                  long : -65.257055
              },
              {
                  place : 'Terminal de Buses Sucre',
                  desc : 'Av. Otria Gutierrez',
                  lat : -19.0397963,
                  long : -65.2471213
              },
              {
                  place : 'Casa de la Cultura',
                  desc : 'Calle Aniceto Arce entre Ravelo y Arenales',
                  lat :-19.0466111,
                  long : -65.2593696
              },
              {
                  place : 'Teatro gran Mariscal',
                  desc : 'Teatro',
                  lat : -19.0438658,
                  long : -65.263148
              },
                {
                  place : 'Complejo Senac',
                  desc : 'Julio Pinkas',
                  lat : -19.056539,
                  long :-65.2618196
              },
             {
                  place : 'Sib Chiquisaca',
                  desc : 'Destacamento 111',
                  lat : -19.0462359,
                  long :-65.263711
              }

          ];

              var mapOptions = {
                  zoom: 15  ,
                  center: new google.maps.LatLng(-19.042133,-65.2563777),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.place
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);

                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }
            console.log($scope.markers)


        $scope.locations = [
              {   id:'1',  
                  title : 'Facultad de Tecnologia',
                  desc : 'Calle Regimientos Campos y Ricardo Andrade',
                  portada : 'tecnologia-min.jpg',
                  long : -65.257055
              },

              {   id:'2',  
                  title : 'Teatro Gran Mariscal',
                  desc : 'Calle Km 7, Arenales y Pilinco',
                  portada : 'teatro-min.jpg',
                  long : -65.263148
              },
             {    id:'3',  
                  title : 'Casa de la Cultura Universitaria',
                  desc : 'Calle Aniceto Arce entre Ravelo y Arenales',
                  portada : 'casadelacultura-min.jpg',
                  long : -65.2593696
              }
          ];
}]) 
