$(document).ready(function(){

	tres.empezar();

	$('.cuadrado').on('click', tres.pulsar);

	$('.limpiar').on('click', tres.empezar);

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

		tres.empezar();
	},

	empezar: function empezarPartida() {
		
		for(var i = 0; i < tres.tamano; i++) {
			tres.matriz[i] = []
			for(var j = 0; j < tres.tamano; j++) {
				tres.matriz[i][j] = -1;
			}
		}

		tres.ganador = -1;

		console.log(tres.matriz);
	},

	pulsar: function pulsaBoton(event) {
		$fila = $(this).data('fila');
		$columna = $(this).data('columna');

		$this = $(this);

		if ( $this.text() == '' ) {
			// event.preventDefault();
			$this.text('o');
			$this.addClass('o');
		}

		if ( tres.ganador == -1 ) {
			tres.matriz[$fila][$columna] = 0;
		}

		ganar();

		console.log(tres.matriz);
	},

	ganar: function() {
		
	}
};


