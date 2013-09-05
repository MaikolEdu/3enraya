$(document).ready(function(){

	$('.cuadrado').on('click', tres.pulsar);

	$('.limpiar').on('click', tres.constructor);

});

var tres = {
	tamano: 3,
	ganador: -1,
	contar: 0,

	matriz: [],

	constructor: function limpiar() {
		$('.cuadrado').each(function(){
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
	},

	pulsar: function pulsaBoton() {
		$fila = $(this).data('fila');
		$columna = $(this).data('columna');

		$this = $(this);

		if ( $this.text() == '' ) {

			$('.limpiar').on('click', tres.constructor);
			$this.text('o');
			$this.addClass('o');
		}

		console.log($(this).data());
	}
};


