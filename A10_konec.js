class A10_konec extends Phaser.Scene {
	constructor(){
		super({ key: 'A10_konec' });
	}
	preload() {
	
		this.load.image("zmentures","assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
		this.load.image("rage","assets/uvod/rage.png")
		this.load.image("basic","assets/uvod/basic.png")
	}
  create() {
	this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

	var verzija = Math.floor(Math.random() * 4)

	if(verzija == 1){
		this.video = this.add.video(GAME_WIDTH/2-40, GAME_HEIGHT/2-220, 'video');
		this.video.setScale(1.6)
		this.video.x
		this.video.play()
		this.video.setLoop()
	}
	else if(verzija == 0){

		var zmentures = this.add.image(GAME_WIDTH/2,100,"zmentures");
		zmentures.setScale(.5)
	}
	else if(verzija == 2){
		var rage = this.add.image(GAME_WIDTH/2,100,"rage");
		rage.setScale(.5)
	}
	else {
		var basic = this.add.image(GAME_WIDTH/2,100,"basic");
		basic.setScale(.5)
	}



	if (usa == true){
		this.add.text(10, 400, 'Hooray Zmeja has found a way home\n thanks for playing :)',{ fontSize: '60px', fill: '#A996BC' , fontFamily: 'CustomFont'});
		this.add.text(10, 570, 'You died '+ stSmrti+ "x times 😲, not bad 😝...", { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
		this.add.text(10, 650, "You have found "+ EasterEgg+ "/"+StEasterEgg+" easter eggs.", { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
	}
	else if (rus == true){
		this.add.text(10, 400, 'Змея нашла дорогу домой, спасипо за играние :)', { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
		this.add.text(10, 570, 'Ты умер '+ stSmrti+ " x 😲, не плохо 😝...", { fontSize: '60px', fill: '#A996BC' , fontFamily: 'CustomFont'});
		this.add.text(10, 650, "Ты нашел "+ EasterEgg+ "/"+StEasterEgg+" секретов.", { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
	}
	else{
		this.add.text(15, 400, 'Jej! Zmeja je našla pot domov!\nhvala za igranje :)', { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
		this.add.text(15, 570, 'Umrl si '+ stSmrti+ "x 😲, ni slabo 😝... ", { fontSize: '60px', fill:'#A996BC', fontFamily: 'CustomFont' });
		this.add.text(15, 650, "Odkril si "+ EasterEgg+ "/"+StEasterEgg+" skrivnosti.", { fontSize: '60px', fill: '#A996BC', fontFamily: 'CustomFont' });
	}


	this.input.on('pointerup', () => {
		this.scene.stop('A10_konec')
		this.scene.start('A0_zahvale')
	  });

		 
  }
}
