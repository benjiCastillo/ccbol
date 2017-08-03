var app = angular.module('ccbolApp.homeCtrl',[]);

app.controller('homeCtrl', ['$scope',function($scope){
    //animations
    setTimeout(function(){
        $('.img-port-slide').addClass('animated visible flipInX');
    },0);
    setTimeout(function(){
        $('.titulo-ccbol').addClass('animated visible fadeInDown');
    },600);
    setTimeout(function(){
        $('.sub-titulo').addClass('animated visible slideInUp');
    },1200);
    setTimeout(function(){
        $('.timer-container').addClass('animated visible bounceInUp');
    },1800);



//timer 
    countdown.setLabels(
    ' milisegundo| s| m :| hr| día| semana| mes| año| decada| siglo| milenio',
    ' milisegundos| s| m :| hrs| días| semanas| meses| años| decadas| siglos| milenios',
    ' ',
    ' : ',
    '',
    function(n){ return n.toString(); });
    timerId =
      countdown(
        //   actualizarReloj(),
          new Date("September 11, 2017 09:00:00"),
        function(ts) {
        //    console.log(ts.toString());
		   var dia = ts.days.toString();	
		   var hora = ts.hours.toString();
		   var minuto = ts.minutes.toString()
		   var segundo = ts.seconds.toString();
		//    console.log(ts)	
          if(ts.toString() == ""){

			// console.log(ts)

            /*document.next.submit();*/
            window.clearInterval(timerId);
          }
        //   document.getElementById('pagerTimer').innerHTML = ts.toHTML("span");
		document.getElementById('hora').innerHTML = hora;
		document.getElementById('minuto').innerHTML = minuto;
		document.getElementById('segundo').innerHTML = segundo;
		document.getElementById('dia').innerHTML = dia;
		
        //   document.getElementById('pagerTimer2').innerHTML = ts.toHTML("strong");
        },
        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
    // later on this timer may be stopped
    //window.clearInterval(timerId); 
    
}]) 
