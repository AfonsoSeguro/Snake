

var canvas, sco, cobra, fps = 0;
var x,y, pontuacao = 0;


function inic(){
	canvas = document.getElementById("tela").getContext("2d");
	sco = document.getElementById("score");
	cobra = new Cobra();
	maca = new Maca(cobra.corpo);
	window.requestAnimationFrame(render);
	
}

function render(){		
	
		if(fps % 8 == 0){
			cobra.mover();
			if(cobra.cabeca.x == x && cobra.cabeca.y == y){
				maca = new Maca(cobra.corpo);
				cobra.aumenta = true;
				pontuacao++;
				sco.innerHTML = pontuacao;
			}
		}
		fps++;
		window.requestAnimationFrame(render);
	
}

function act(){
	
	document.body.onkeypress = function(){
		cobra.mudarDirecao(event.keyCode);
	}
	
}
