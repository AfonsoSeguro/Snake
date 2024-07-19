
class Maca{	

	constructor(cobra){
		this.maca = this.geraMaca(cobra);
	}
	
	geraMacaVer(cobra){
		for(var i = 0; i < cobra.length; i++){
			if(this.maca.x == cobra[i].x && this.maca.y == cobra[i].y)return false;
		}
		return true;
	}
	
	geraMaca(cobra){
		this.maca = new Ponto(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
		while(!this.geraMacaVer(cobra)){
			this.maca = new Ponto(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20));
		}
		x = this.maca.x;
		y = this.maca.y;
		canvas.fillStyle = "#ff0000";
		canvas.fillRect(this.maca.x * 25, this.maca.y * 25, 25 ,25);
	}
	
}