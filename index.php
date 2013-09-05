<?php
require("TresEnRaya.class.php");
session_start();
?>
<html>
<head>
	<title>Juego 3 en Raya - Lutry Edition</title>
	<style type="text/css">
		body {color: #880000; text-align: center;}
		a {color: #FF8800; font-siye:20px;}
		a.casilla {color: #FFFFFF; font-family: courier new; font-size: 70px;}
		a.ficha0 {color: #FF0000; font-family: courier new; font-size: 70px;}
		a.ficha1 {color: #0000FF; font-family: courier new; font-size: 70px;}
		h5 {color: #008800; font-size: 50px;}
	</style>
</head>
<body>
<h1>Juego 3 en Raya</h1>
<hr noshade size="-1" color="blue">
<h2>Lutry Edition</h2>
<?php
if (empty($_SESSION['Juego'])) { 
	$_SESSION['Juego'] = new TresEnRaya();
}
$ter = $_SESSION['Juego'];

if (isset($_GET["accion"])) {
	if ($_GET["accion"]=="pulsa") {
		$n = $_GET["fil"];
		$m = $_GET["col"];
		$ter->pulsaBoton($n, $m);
	} elseif ($_GET["accion"]=="empezar") {
		$ter->empezarPartida();
	}
}

$nTablero = $ter->getTablero();
$sFiguras = array("O", "O", "X");

echo '<center><table border=1 width=500>';
for ($n=0; $n<3; $n++) {
	echo '<tr>';
	for ($m=0; $m<3; $m++) {
		echo '<td align="center">';
		if ($nTablero[$n][$m]==-1) {
			echo '<a class="casilla" href="index.php?accion=pulsa&fil=' . $n . '&col=' . $m . '">';
		} else {
			echo '<a class="ficha' . $nTablero[$n][$m] . '">';
		}
		echo $sFiguras[$nTablero[$n][$m]+1];
		echo '</a>';
		echo '</td>';
	}
	echo '</tr>';
}
echo '</table></center>';

echo '<a href="index.php?accion=empezar">Empezar partida</a>';

$nGanador = $ter->getGanador();
if ($nGanador==0) echo '<h5>Has ganado</h5>'; 
if ($nGanador==1) echo '<h5>Has perdido</h5>'; 

?>
<hr noshade size="-1" color="blue">
2013 &copy; Alex MARIN &trade;
</body>
</html>