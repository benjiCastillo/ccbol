var app = angular.module('ccbolApp.sintesisCtrl',[]);

app.controller('sintesisCtrl', ['$scope',function($scope){

        $scope.expositores = [
              {   id:'1',  
                  name : 'José Daniel Alberto Constan ',
                  image : 'CONSTAN.png',
                  titulo : 'Conferencia 1: “El Internet de Todo – IoE (IdT)”',
                  contenido : 'Síntesis: ¿Que es el Internet de Todo? Personas, Procesos, Datos y Objetos. Conexión de objetos para los consumidores. Programación. Transición de IdT. Conexiones IdT. Creación de modelos de IdT.'
              },
                {   id:'2',  
                  name : 'Salvador Crespo',
                  image : 'CRESPO.png',
                  titulo : 'Conferencia 2: “Desarrollo e Implementación incremental de soluciones de infraestructura de IoE/IoT”',
                  contenido : 'Síntesis: Los caminos más certeros para lograr el desarrollo e implementación incremental de soluciones de infraestructura de IoE mediante canales de integradores de TI, fabricantes de soluciones de IoT y mediante la infraestructura de los ISP / IXP'
              },
              {   id:'3',  
                  name : 'Said Eduardo Pérez Poppe',
                  image : 'PEREZ.png',
                  titulo : 'Conferencia 3: “Visión por Computador y Boots --- Las Cosas y Objetos hablándote por Internet “',
                  contenido : 'Síntesis: Panorama del estado arte en cuanto a software, herramientas y estándares actuales que tienen la finalidad de brindar a sistemas IoT la opción de reconocer objetos, formas y personas, además de poder comunicarse con los usuarios en un lenguaje amigable mediante la creación de boots.'
              },
              {   id:'4',  
                  name : 'Patricio Raúl Carranza',
                  image : 'CARRANZA.png',
                  titulo : 'Conferencia 4: “Impacto social de IoT”',
                  contenido : 'Síntesis: Con la llegada de Internet de las Cosas (IoT), la interconexión de todas las "cosas", la aplicación de nuevos procesos y la generación de volúmenes impensables de datos, Internet deja de ser un servicio de comunicaciones para convertirse en el territorio en el que vivimos. Internet de las Cosas (IoT) transforma las necesidades educativas de una manera innovadora y disruptiva: La mayoría de los empleos que conocemos hoy dejarán de existir en los próximos 10 años. Debemos imaginar el futuro y construir un nuevo sistema educativo para los habitantes de este nuevo territorio; Un sistema educativo que prepara a los ciudadanos de 2030. Empezando hoy.'
              },
              {   id:'5',  
                  name : 'Jorge Miguel Cuéllar Rendón',
                  image : 'CUELLAR.png',
                  titulo : 'Conferencia 5:“El rol de la dirección de arte en los dibujos animados y videojuegos”',
                  contenido : 'Síntesis: Importancia del Diseño, ilustración, animación y creación de personajes en la dirección de arte de proyectos audiovisuales e interactivos, por medio de una cronología de proyectos y la experiencia profesional de Jorge Cuéllar en la industria argentina de animación y videojuegos.'
              },
                {   id:'6',  
                  name : 'Juan Gabriel Gomila Salas',
                  image : 'GOMILA.png',
                  titulo : 'Conferencia 6: “Reglas de Oro para ser un buen Game Designer”',
                  contenido : 'Síntesis: La labor de un game designer no es nada fácil: debe saber de matemáticas, de informática, de psicología, de interiorismo, de topografía, de arquitectura y por si no fuera poco de nuevas tendencias, estar al día de la competencia y saber combinar el lenguaje del marketing, el del arte y el del desarrollo... vamos, que necesitaríamos unos 30 años para ser unos buenos game designers. Se verán algunos trucos que, aplicados correctamente, pueden llevar a un juego del montón a ser una maquina total de enganchar al jugador y monetizar el producto. Las 15 reglas de oro para ser unos buenos game designers y que esa idea que tanto ha costado concebir se vea plasmada en un producto con garantías de éxito.'
              },
              {   id:'7',  
                  name : 'Cesar Jesús Chávez Martínez',
                  image : 'CHAVEZ.png',
                  titulo : 'Conferencia 7: “Los riesgos del IoT”',
                  contenido : 'Síntesis: La constante evolución de la informática, ha conllevado al crecimiento y facilidad de acceso a tecnologías programables, con la proliferación del internet de las cosas, la ciencia ficción ha acortado la distancia a la realidad, de dicha forma diversos artefactos del hogar han pasado de ser objetos interactivos, a programables y actualizables mediante la conexión a internet, lo cual ha elevado los riesgos de intrusiones informáticas, incrementándose casos contra la privacidad a niveles jamás antes vistos en la historia. Se señalaran casos sobre los peligros del IoT indicando las soluciones a los problemas relacionados, dando consejos al usuario de cómo implementar controles para su seguridad.'
              },
              {   id:'8',  
                  name : 'Carlos Guillermo Bran',
                  image : 'BRAM.png',
                  titulo : 'Conferencia 8: “Seguridad embebida, desafíos para el despliegue del IoT”',
                  contenido : 'Síntesis: El despliegue de la infraestructura de nodos para Internet de las cosas y su modelo integrado hacia el Internet del Todo, demanda de nuevas estrategias para garantizar la seguridad lo que implica romper un enfoque tradicional, ya que la necesidad de flexibilidad para el acceso de los dispositivos de campo implica un mayor número de vulnerabilidades. Esto plantea preguntas sobre hacia qué modelo apuntar la seguridad para dispositivos pequeños con limitaciones de consumo de potencia, capacidad de procesamiento y memoria, además de que partes de las especificaciones de seguridad se deben de procesar en la niebla (built-in) y que partes deben procesarse en la nube. Se analizaran las nuevas características que demandan los servicios en el Internet del Todo, los desafíos y riesgos que implica para discutir los modelos que se proponen tanto desde el sector corporativo como académico para afrontar estos desafíos, para luego proponer un enfoque de seguridad embebida, y la forma de acelerarla usando hardware configurable.'
              },        
              {   id:'9',  
                  name : 'Cesar Jesús Chávez Martínez',
                  image : 'CHAVEZ.png',
                  titulo : 'Conferencia 9: “Análisis de ataques informáticos desarrollados con apoyo del IoT”',
                  contenido : 'Síntesis: Los ataques mediante dispositivos IoT han sido dinámicos, colapsando internet a nivel mundial, mediante la exposición se explicara cómo se desarrollaron los ataques, que dispositivos son los más empleados para ello, como actúan los criminales cibernéticos, que es un ataques informático. Conocerán cómo funcionan los ataques, método de prevención, principales lugares de alerta de vulnerabilidades de dispositivos, 0 days entre otros.'
              },
              {   id:'10',  
                  name : 'Carlos Guillermo Bran',
                  image : 'BRAM.png',
                  titulo : 'Conferencia 10: “Estrategia de diseño HLS para el prototipado rápido de alta complejidad”',
                  contenido : 'Síntesis: La competitividad de las empresas de tecnología se basa en la reducción del tiempo que tarda un producto desde su concepción hasta su venta, este indicador se conoce como TTM (Time To Market) y su mayor porcentaje se consume en la fase desarrollo del producto; por lo que para lograr menores valores de TTM es necesario enfocar una estrategia de diseño de hardware y software de manera integral donde la descripción del modelo de concepto de una arquitectura se lleve de manera rápida a prototipo. Se analizaran las estrategias de diseño de arquitecturas desde el enfoque tradicional RTL hasta el enfoque basado en alto nivel HL y la forma como esta nueva técnica puede acelerar el proceso de prototipado con las nuevas potencialidades que brindan las herramientas EDA.'
              },
              {   id:'11',  
                  name : 'Carlos Olivera Terrazas',
                  image : 'OLIVERA.png',
                  titulo : 'Conferencia 11:“Real Time Web como el sistema nervioso central del IoE“',
                  contenido : 'Síntesis: Para poder contar con un universo de dispositivos y personas interconectadas, implica desarrollar plataformas de software donde el flujo de información ocurra en tiempo real. Necesitamos conocer e implementar el stack necesario que nos permita: llegar desde servicios en la nube, a bases de datos y dispositivos de manera óptima. Hoy en día el programar a un nivel de librerías de sockets, es simplemente: Reinventar la rueda.  Existen diferentes propuestas a la hora de implementar este tipo de comunicación. ¿Cuáles son las opciones? ¿Oportunidades y debilidades de cada una?, ¿Existen ejemplos exitosos en producción? Estas y otras preguntas se irán respondiendo con la activa participación de la audiencia.'
              },
                {   id:'12',  
                  name : 'Oswaldo Gerardo Velásquez Aroni',
                  image : 'VELASQUEZ.png',
                  titulo : 'Tutorial 1: “The Constrained Application Protocol (CoAP) “',
                  contenido : 'Síntesis: Tutorial enfocado en experimentar CoAP, protocolo a nivel de aplicación diseñado  para trabajar con sensores y redes de baja capacidad y que permite una sencilla interconexión con HTTP (Hypertext Transfer Protocol) para una fácil integración en la Web.'
              },
              {   id:'13',  
                  name : 'Juan Gabriel Gomila Salas',
                  image : 'GOMILA.png',
                  titulo : 'Tutorial 2: “Crea tu propio videojuego 3D en solamente una hora con unity 5”.',
                  contenido : 'Síntesis: Que tienen en común Crossy Road, Temple Run, Assassins Creed Identity, Digimon World Next Order o Deux Ex The fall? Además de ser juegos muy conocidos tanto de panorama móvil como de PC y consola, se trata de juegos creados con el popular motor gratuito Unity 5. Y es que hacer un juego en 3D suele involucrar a mucha gente: CD project necesito 365 empleados para the witcher 3, Final Fantasy XV tuvo cerca de 500 durante más de 10 años de desarrollo. Se observará cómo usando Unity 5 se pueden hacer videojuegos al nivel de los antes citados y sin necesidad de tener un estudio grande de juegos ni tantos empleados en nuestro haber.'
              },
              {   id:'14',  
                  name : 'Carlos Olivera Terrazas',
                  image : 'OLIVERA.png',
                  titulo : 'Tutorial 3: “Real Time Web con MongoDB, MeteorJS y Arduino “',
                  contenido : 'Síntesis: Tutorial enfocado en experimentar el proceso de construcción de un sistema para el monitoreo remoto de sensores, usando JavaScript, MongoDB y MeteorJS'
              }, 
              {   id:'15',  
                  name : 'Jorge Cuellar Rendón',
                  image : 'CUELLAR.png',
                  titulo : 'Taller Especial: “Diseño de personajes y Arte para proyectos animados y videojuegos”',
                  contenido : 'Síntesis: Taller enfocado en experimentar el proceso creativo en el desarrollo visual para un proyecto original de videojuego o animación, desde la idea, el público objetivo, técnica de animación, estilo visual, concept art y game art.  Este taller servirá mucho para aquellos que quieren desarrollar un videojuego propio o ya están en la etapa de desarrollo, entendiendo la importancia de los aspectos visuales.',
                  parte1:'Parte 1: Diseño para Técnicas de animación (Tradional, pixelart, cut out esqueletal, stopmotion y 3D low y high poly) - Diferencias entre medio audiovisual de un medio interactivo. (Diseño, ilustración, animación y Render) - Estilo visual: Realista, estilizado, cartoon, cute - Características psicológicas y fisiológicas de un personaje: Formas, proporciones, vestuario y Silueta - Diferencia y características entre productos crossmedia y transmedia - Público objetivo: clases de usuarios y clases de juegos - Creación de un brief de un proyecto: referencias y jugabilidad, (concepto: Estilo gráfico, tipo de juego, historia de trasfondo, personalidad del personajes, temática visual de la interface, proporciones y escalas de un nivel prototipo)',
                  parte2:'Parte 2: Conceptuales de personajes y entornos (Contexto de la historia y el juego) - Game art, Diseño de personajes y entornos en función a un nivel - Pitchig: Exposición de la propuesta visual para cada proyecto.'  
                }                                                                                    
          ];
}]) 
