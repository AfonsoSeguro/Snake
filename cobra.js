
class Cobra{
	
	constructor(){
		this.inicioCobra();
	}
	
	inicioCobra(){
		canvas.clearRect(0,0,500,500);
		this.cabeca = new Ponto(10, 10);
		this.corpo = [new Ponto(10, 11), new Ponto(10, 12), new Ponto(10, 13), new Ponto(10, 14)];
		this.direcao = 119;
		this.aumenta = false;
	}
	
	mudarDirecao(direcao){
		if(this.direcao == 119 && direcao != 115)this.direcao = direcao;
		else if(this.direcao == 97 && direcao != 100)this.direcao = direcao;
		else if(this.direcao == 115 && direcao != 119)this.direcao = direcao;
		else if(this.direcao == 100 && direcao != 97)this.direcao = direcao;
	}
	
	mover(){
		this.moverCabeca();
		this.moverCorpo();
	}
	
	moverCabeca(){
		canvas.fillStyle = "#ff9900";
		this.corpo.unshift(new Ponto(this.cabeca.x, this.cabeca.y));
		if(this.direcao == 119)this.cabeca.y--;
		else if(this.direcao == 97)this.cabeca.x--;
		else if(this.direcao == 115)this.cabeca.y++;
		else if(this.direcao == 100)this.cabeca.x++;
		canvas.fillRect(this.cabeca.x * 25, this.cabeca.y * 25, 25 ,25);
		if(this.bateu()){
			this.inicioCobra();
			maca = new Maca(this.corpo);
			pontuacao = 0;
			sco.innerHtML = pontuacao;
		}
	}
	
	moverCorpo(){
		if(!this.aumenta){
			canvas.clearRect(this.corpo[this.corpo.length - 1].x * 25, this.corpo[this.corpo.length - 1].y * 25, 25 ,25);
			this.corpo.pop();
		}
		this.aumenta = false;
	}
	
	bateu(){
		if(this.cabeca.x < 0 || this.cabeca.x > 19)return true;
		if(this.cabeca.y < 0 || this.cabeca.y > 19)return true;
		for(var i = 0; i < this.corpo.length; i++){
			if(this.cabeca.x == this.corpo[i].x && this.cabeca.y == this.corpo[i].y)return true;
		}
		return false;
	}
	
}