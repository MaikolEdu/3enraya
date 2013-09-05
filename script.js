$(document).ready(function(){

	$('.cuadrado').on('click', tres.pulsar);

	$('.limpiar').on('click', tres.constructor);

	$('.limpiar').on('click', tres.empezar);

});

// function pintar() {
// 	$this = $(this);

// 	if ( $this.text() == '' ) {
// 		$this.text('o');
// 		$this.addClass('o');
// 	}

// }

var tres = {
	tamano: 3,
	ganador: -1,
	contar: 0,

	matriz: [],

	constructor: function limpiar() {
		$('.cuadrado').each(function(i){
			$(this).removeClass('o');
			$(this).removeClass('x');
			$(this).text("");
		});

		tres.empezar;
	},

	empezar: function empezarPartida() {
		
		for(var i = 0; i < tres.tamano; i++) {
			tres.matriz[i] = []
			for(var j = 0; j < tres.tamano; j++) {
				tres.matriz[i][j] = -1;
			}
		}

		tres.ganador = -1;

		// console.log(tres.matriz);
	},

	pulsar: function pulsaBoton() {
		$fila = $(this).data('fila');
		$columna = $(this).data('columna');
		console.log($(this).data());
	}
};


