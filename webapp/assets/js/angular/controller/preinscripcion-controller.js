var app = angular.module('ccbolApp.preinscripcionCtrl',[]);

app.controller('preinscripcionCtrl', ['$scope','preincripcionServices',function($scope,preincripcionServices){
    $scope.cityList = {nombre:["Santa Cruz de la Sierra","El Alto","La Paz","Cochabamba","Oruro","Sucre","Tarija","Potosí","Sacaba","Quillacollo","Montero","Trinidad","Riberalta","Warnes","La Guardia","Viacha","Yacuiba","Colcapirhua","Tiquipaya","Cobija","Vinto","Guayaramerín","Villazón","Villa Yapacaní","Villa Montes","Bermejo","Camiri","Tupiza","Llallagua","San Ignacio de Velasco","San Julián","Huanuni",
]
};
    $scope.collegeList = { nombre: ["(UMSS) Universidad Mayor de San Simón","(UMSA) Universidad Mayor de San Andrés","(UCB) Universidad Católica Boliviana","(USFX) Universidad Mayor de San Francisco Xavier","(UPSA) Universidad Privada de Santa Cruz de la Sierra","(UAGRM) Universidad Autónoma Gabriel René Moreno","(UPB) Universidad Privada Boliviana","(UNIVALLE) Universidad Privada del Valle","(UDABOL) Universidad de Aquino Bolivia","(UAJMS) Universidad Autónoma Juan Misael Saracho","Universidad Nur","(UASB) Universidad Andina Simón Bolivar","(UTO) Universidad Técnica de Oruro","(UPAL) Universidad Privada Abierta Latinoamericana",   "(UATF) Universidad Autónoma Tomás Frías","(USALESIANA) Universidad Salesiana de Bolivia","(UPDS) Universidad Privada Domingo Savio","(EMI) Escuela Militar de Ingeniería","(UTEPSA) Universidad Tecnológica Privada de Santa Cruz","(UAB) Universidad Adventista de Bolivia","Universidad Loyola","(UNIFRANZ) Universidad Privada Franz Tamayo","(UNSLP) Universidad Privada Nuestra Señora de La Paz","(UNICEN) Universidad Central","(UABJB) Universidad Autónoma del Beni José Ballivián","(UTB) Universidad Tecnológica Boliviana","(UNSXX) Universidad Nacional de Siglo XX","(UEB) Universidad Evangélica Boliviana","(UPEA) Universidad Pública de El Alto",    "(UECOLOGIA) Universidad Nacional Ecológica",   "(USFA) Universidad Privada San Francisco de Asís", "(UCEBOL) Universidad Cristiana de Bolivia",    "(UAP) Universidad Amazónica de Pando", "(UNITEPC) Universidad Técnica Privada Cosmos", "(UCORDILLERA) Universidad de la Cordillera","(ULS) Universidad La Salle",   "(UREAL) Universidad Real", "(UPIEB) Universidad para la Investigación Estratégica en Bolivia",  "(UDELOSANDES) Universidad de los Andes", "(UNO) Universidad Nacional del Oriente", "Universidad Privada Cumbre", "(UCATEC) Universidad Privada de Ciencias Administrativas y Tecnológicas","(USIP) Universidad Simón I. Patiño", "(UDI) Universidad para el Desarrollo y la Innovación",  "(UB) Universidad Unión Bolivariana", "(UNIOR) Universidad Privada de Oruro",  "(UNIBETH) Universidad Bethesda", "(ULAT) Universidad Latinoamericana",    "(UBI) Universidad Boliviana de Informática", "Universidad Unidad","(USP) Universidad Saint Paul"]};

    $scope.completeCity = function(string){
        if(string) {
            $scope.hidethis = false;
            var output = [];
            angular.forEach($scope.cityList.nombre, function(city){ 
                if(city.toLowerCase().indexOf(string.toLowerCase()) >= 0)  {
                    output.push(city);
                }
            });
            $scope.filterCity = output;
        } else
            $scope.filterCity = [];
    };
    $scope.fillTextboxCity = function(string){
       $scope.userSel._city = string;
       $scope.hidethis = true;
    };



    $scope.completeCollege = function(string){
        if(string) {
            $scope.hidethisCollege = false;
            var outputC = [];
            angular.forEach($scope.collegeList.nombre, function(college){ 
                if(college.toLowerCase().indexOf(string.toLowerCase()) >= 0)  {
                    outputC.push(college);
                }
            });
            $scope.filterCollege = outputC;
        }
        else
            $scope.filterCollege = [];
    };
    $scope.fillTextboxCollege = function(string){
       $scope.userSel._college = string;
       $scope.hidethisCollege = true;
    };

    $scope.guardar = function(data,type,frmUser) {
        console.log(type);
        if(type=='vest') {
            preincripcionServices.guardarEst( data ).then(function(){
                // codigo cuando se insertó
                $scope.userSel = {};
                //frmUser.autoValidateFormOptions.resetForm();
            });
        } else {
            if(type=='vprof') {
                preincripcionServices.guardarProf( data ).then(function(){
                    // codigo cuando se insertó
                    $scope.userSel = {};
                    //frmUser.autoValidateFormOptions.resetForm();
                });
            }
        }
    };
}]) 
