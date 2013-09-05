$(document).ready(function(){

	tres.empezar();

	$('.cuadrado').on('click', tres.pulsar);

	$('.limpiar').on('click', tres.constructor);

});

var tres = {
	tamano: 3,
	ganador: -1,
	contar: 0,

	matriz: [],

	constructor: function() {
		$('.cuadrado').each(function(){
			$(this).removeClass('o');
			$(this).removeClass('x');
			$(this).text("");
		});

		tres.empezar();
	},

	empezar: function() {
		
		for(var i = 0; i < tres.tamano; i++) {
			tres.matriz[i] = []
			for(var j = 0; j < tres.tamano; j++) {
				tres.matriz[i][j] = -1;
			}
		}

		tres.ganador = -1;

		console.log(tres.matriz);
	},

	pulsar: function() {
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

		tres.ganar();

		console.log(tres.matriz);
	},

	ganar: function() {
		if(tres.matriz[0][0] != -1 && tres.matriz[0][0] == tres.matriz[1][1] && tres.matriz[0][0] == tres.matriz[2][2]) {
			return tres.matriz[0][0];
		}
		if(tres.matriz[0][2] != -1 && tres.matriz[0][2] == tres.matriz[1][1] && tres.matriz[0][2] == tres.matriz[2][0]) {
			return tres.matriz[0][2];
		}
		for (var i = 0; i < tres.tamano; i++) {
			if(tres.matriz[i][2] == -1 && tres.matriz[i][2]==tres.matriz[i][1] && tres.matriz[i][2]==tres.matriz[i][0] ) {
				return tres.matriz[i][2];
			}
			if(tres.matriz[0][i] == -1 && tres.matriz[0][i]==tres.matriz[1][i] && tres.matriz[0][i]==tres.matriz[2][i] ) {
				return tres.matriz[0][i];
			}
		}
		return -1;
	},

	tableroCompleto: function() {
		for (var i = 0; i < tres.tamano; i++)
			for (var j = 0; j < tres.tamano; j++)
				if (tres.matriz[i][j]==-1) 
					return false;
		return true;
	},

	finPartida: function() {
		return tableroCompleto | tres.ganar != -1;
	},

	ponerFichaPC: function() {
		if (!finPartida) {
			var f = 0,
				c = 0,
				v = -1;

			for(var i = 0; i < tres.tamano; i++ ) {
				for(var j = 0; j < tres.tamano; j++ ) {
					if ( matriz[i][j] == -1 ) {
						matriz[i][j] == 1;
						var aux = tres.min();
						if (aux > v) {
							v = aux;
							f = i;
							c = j;
						}
						tres.matriz[i][j] = -1;
					}
					tres.matrizo[i][j] = 1;
				}
			}
			matriz[f][c] = 1;
		}
		ganador = ganar();
	}
};


