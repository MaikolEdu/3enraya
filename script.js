$(document).ready(function(){

	$('.cuadrado').on('click', pintar);
	$('.limpiar').on('click', limpiar);

});

function pintar() {
	$this = $(this);

	if ( $this.text() == '' ) {
		$this.text('o');
		$this.addClass('o');
	}

}

function limpiar() {
	$('.cuadrado').each(function(i){
		$(this).removeClass('o');
		$(this).removeClass('x');
		$(this).text("");
	});
}