<?php
class TresEnRaya {
	private $_TAM = 3;
	private $_nTablero;
	private $_nGanador = -1;
	private $_nContar = 0;
	
	public function __construct() {
		$this->empezarPartida();
		$this->_nContar = 0;
	}
	public function getTablero() {
		return $this->_nTablero;
	}
	public function empezarPartida() {
		for ($n=0; $n<$this->_TAM; $n++) {
			for ($m=0; $m<$this->_TAM; $m++) {
				$this->_nTablero[$n][$m] = -1;
			}
		}
		$this->_nGanador = -1;
	}
	public function pulsaBoton($n, $m) {
		if (($n>=0) && ($m>=0) && ($n<$this->_TAM) && ($m<$this->_TAM) && ($this->_nTablero[$n][$m]==-1)) {
			if ($this->_nGanador==-1) {
				$this->_nTablero[$n][$m]=0;
				$this->_nGanador = $this->ganaPartida();
				$this->ponerFichaPC();
			}
		}
	}
	public function ganaPartida() {
		if ($this->_nTablero[0][0] != -1 && $this->_nTablero[0][0] == $this->_nTablero[1][1]
				&& $this->_nTablero[0][0] == $this->_nTablero[2][2])
			return $this->_nTablero[0][0];
		if ($this->_nTablero[0][2] != -1 && $this->_nTablero[0][2] == $this->_nTablero[1][1]
				&& $this->_nTablero[0][2] == $this->_nTablero[2][0])
			return $this->_nTablero[0][2];
		for ($n=0; $n<$this->_TAM; $n++) {
			if ($this->_nTablero[$n][2] != -1 && $this->_nTablero[$n][2] == $this->_nTablero[$n][1]
					&& $this->_nTablero[$n][2] == $this->_nTablero[$n][0])
				return $this->_nTablero[$n][2];
			if ($this->_nTablero[0][$n] != -1 && $this->_nTablero[0][$n] == $this->_nTablero[1][$n]
					&& $this->_nTablero[0][$n] == $this->_nTablero[2][$n])
				return $this->_nTablero[0][$n];
		}
		return -1;
	}
	public function getGanador() {
		return $this->_nGanador;
	}
	
	//Algoritmo minimax
	private function tableroCompleto() {
		for ($n=0; $n<$this->_TAM; $n++)
			for ($m=0; $m<$this->_TAM; $m++)
				if ($this->_nTablero[$n][$m]==-1) 
					return false;
		return true;
	}
	private function finPartida() {
		return $this->tableroCompleto() or $this->ganaPartida()!=-1;
	}
	private function ponerFichaPC() {
		if (!$this->finPartida()) {
			$f=0; $c=0;
			$v=-1;
			for ($n=0; $n<$this->_TAM; $n++) {
				for ($m=0; $m<$this->_TAM; $m++) {
					if ($this->_nTablero[$n][$m]==-1) {
						$this->_nTablero[$n][$m] = 1;
						$aux = $this->min();
						if ($aux>$v) {
							$v = $aux;
							$f = $n;
							$c = $m;
						}
						$this->_nTablero[$n][$m] = -1;
					}
				}
			}
			$this->_nTablero[$f][$c]=1;
		}
		$this->_nGanador = $this->ganaPartida();
	}
	private function max() {
		if ($this->finPartida()) {
			if ($this->ganaPartida()!=-1) return -1;
			else return 0;
		}
		$v=-1;
		for ($n=0; $n<$this->_TAM; $n++) {
			for ($m=0; $m<$this->_TAM; $m++) {
				if ($this->_nTablero[$n][$m]==-1) {
					$this->_nTablero[$n][$m] = 1;
					$aux = $this->min();
					if ($aux>$v) $v=$aux;
					$this->_nTablero[$n][$m] = -1;
				}
			}
		}
		return $v;
	}
	private function min() {
		if ($this->finPartida()) {
			if ($this->ganaPartida()!=-1) return 1;
			else return 0;
		}
		$v=99;
		for ($n=0; $n<$this->_TAM; $n++) {
			for ($m=0; $m<$this->_TAM; $m++) {
				if ($this->_nTablero[$n][$m]==-1) {
					$this->_nTablero[$n][$m] = 0;
					$aux = $this->max();
					if ($aux<$v) $v=$aux;
					$this->_nTablero[$n][$m] = -1;
				}
			}
		}
		return $v;
	}
}
?>