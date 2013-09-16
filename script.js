$('document').ready(function() {

	var width = $('.cuadrado').width();
	$('.cuadrado').height(width);

});



function TresEnRaya(){
	this.tam = 3;
	this.tablero = [];
	this.ganador = -1;
	this.contar = 0;

	this.constructor=function(){
		this.empezarPartida();
		this.contar = 0;
	}

	this.getGanador=function(){
		return this.ganador;
	}

	this.empezarPartida=function(){
		for(var i = 0; i < this.tam; i++) {
			this.tablero[i] = []
			for(var j = 0; j < this.tam; j++) {
				this.tablero[i][j] = -1;
			}
		}
		this.ganador = -1;
	}
		
	this.pulsaBoton=function(n,m){
		
		if (this.tablero[n][m]==-1){
			if(this.ganador == -1){
				this.tablero[n][m]=0;
				this.ganador = this.ganaPartida();
				this.ponerFichaPC();
			}
		}
	}

	this.ganaPartida=function(){
		if(this.tablero[0][0] != -1 && this.tablero[0][0] == this.tablero[1][1] && this.tablero[0][0] == this.tablero[2][2]){
			return this.tablero[0][0];
		}
		if(this.tablero[0][2] != -1 && this.tablero[0][2] == this.tablero[1][1] && this.tablero[0][2] == this.tablero[2][0]){
			return this.tablero[0][2];
		}
		for (var i = 0; i < this.tam; i++) {
			if (this.tablero[i][2] != -1 && this.tablero[i][2] == this.tablero[i][1] && this.tablero[i][2]==this.tablero[i][0]){
				return this.tablero[i][2];
			}
			if (this.tablero[0][i] != -1 && this.tablero[0][i] == this.tablero[1][i] && this.tablero[0][i]==this.tablero[2][i]){
				return this.tablero[0][i];
			}	
		}
		return -1;
	}

	this.ponerFichaPC=function(){
		if(!this.finPartida()){
			var f = 0 , c = 0 , v = -1;
			for(var i=0 ; i<this.tam ; i++){
				for(var j=0; j<this.tam; j++){
					if(this.tablero[i][j] == -1){
						this.tablero[i][j] = 1;
						var aux = this.min();
						if(aux>v){
							v = aux;
							f = i;
							c = j;
						}
						this.tablero[i][j] = -1;
					}
				}
			}
			this.tablero[f][c] = 1;
			
			$('.cuadrado').each(function(){
				if ($(this).data('fila') == f && $(this).data('columna') == c){
 					var d = $(this.firstElementChild.firstElementChild);
				    d.attr("src","pc.png")
				}
			});
		}
		this.ganador = this.ganaPartida();
	}

	this.finPartida=function(){
		return this.tableroCompleto() || this.ganaPartida() != -1;
	}

	this.tableroCompleto=function(){
		for(var i=0 ; i<this.tam; i++)
			for(var j = 0 ; j<this.tam; j++){
				if(this.tablero[i][j] == -1)
					return false;
			}
				
		return true;
	}

	this.min=function(){
		if(this.finPartida()){
			if(this.ganaPartida() != -1)
				return 1;
			else
				return 0;
		}
		var v = 99;
		for(var i = 0; i<this.tam; i++){
			for(var j=0 ; j<this.tam; j++){
				if(this.tablero[i][j] == -1){
					this.tablero[i][j] = 0;
					var aux = this.max();
					if (aux < v)
						v = aux;
					this.tablero[i][j] = -1;
				}
			}
		}
		return v;
	}

	this.max=function(){
		if(this.finPartida()){
			if(this.ganaPartida() != -1)
				return -1;
			else
				return 0;
		}
		var v = -1;
		for(var i = 0; i<this.tam; i++){
			for(var j = 0; j<this.tam; j++){
				if(this.tablero[i][j] == -1){
					this.tablero[i][j] = 1;
					var aux = this.min();
					if (aux > v)
						v = aux;
					this.tablero[i][j] = -1;
				}
			}
		}
		return v;
	}

	
}