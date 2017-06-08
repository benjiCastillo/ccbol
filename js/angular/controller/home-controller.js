var app = angular.module('ccbolApp.homeCtrl', []);





// controlador clientes
app.controller('homeCtrl', ['$scope', function($scope){
	
var	$tCongreso = $(".titulo-congreso");
var	$lFecha = $(".lugar-fecha");
var $titu = $(".titulo_slide_2");
var	$ima = $(".rayas");
var	$text = $(".text_slide_2");
var $timer = $(".timer");

var mySequence = [
    { e: $tCongreso, p: "transition.flipYIn",o:{ visibility:"initial"} },
    { e: $lFecha, p: "transition.bounceLeftIn",o:{ visibility:"initial"} },
	{ e: $timer, p: "transition.bounceUpIn",o:{ visibility:"initial"}},
	// animacion para salida
	// { e: $tCongreso, p: "transition.expandOut"},
	// { e: $lFecha, p: "transition.expandOut"},
	// fin animacion para salida
	{ e: $titu, p:  "transition.flipXIn",o:{ visibility:"initial",delay:4000}},
	{ e: $ima, p: "transition.flipBounceXIn",o:{ visibility:"initial"} },
    { e: $text, p: "transition.expandIn",o:{ visibility:"initial"} }
	
  ];


$.Velocity.RunSequence(mySequence);


    var timerId;


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
          new Date("September 18, 2017 12:57:30"),
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

	var interval = null
	
	interval = setInterval(function(){$(
		".button--nav-next").trigger("click");
		// console.log("va");
	}, 6000);

	$(".button--close").click(function(){
	interval = setInterval(function(){$(
			".button--nav-next").trigger("click");
			// console.log("va");
		}, 6000);
	})

	$(".button--zoom").click(function(){
		clearInterval(interval);
	 })

}])