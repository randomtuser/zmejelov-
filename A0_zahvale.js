class A0_zahvale extends Phaser.Scene {
	constructor(){
		super({ key: 'A0_zahvale' });
	}
preload(){
    this.load.image("zmeja","assets/uvod/zmeja.png")

}
 create() {
  this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    var x = 75
    var y = 125
    var font = "80px"
    this.add.text(x, y, 'Z', { fontSize:  font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y + 60, 'M',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+120, 'E',{ fontSize: font,fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+180, 'J',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+240, 'E',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+300, 'L',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+360, 'O',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });
    this.add.text(x, y+420, 'V',{ fontSize: '80px',fill: '#B637BF',  fontFamily: 'CustomFont' });




  if (usa == true){
    this.add.text(250, 200, 'I would like to thank my brain\nfor giving me all the ideas\nand then helping\nme implement them.',{ fontSize: '30px', fill: '#A996BC' });
  }
  else if (rus == true){
    this.add.text(250, 200, 'Я хотел бы поблагодарить своему мозгу\nза то, что дал мне все идеи \nи затем помог мне их реализовать.',{ fontSize: '30px', fill: '#A996BC' });
  }
  else{
    this.add.text(250, 200, 'Največje zahvale gredo\nmojemu možganu, ki je prispeval\nvse ideje, ter jih potem\ntudi pomagal implementirati.',{ fontSize: '30px', fill: '#A996BC' });
  }


    //gumbi za naprej, domov plus text za njih
  this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
  this.domov.setScale(0.8)
  if (usa == true){
    this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'HOME',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
  else if (rus == true){
      this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'ДОМОЙ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
  else{
      this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'DOMOV',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });}

     
      this.domov.on('pointerup', () => {
        this.scene.stop('A0_zahvale')
        this.scene.start('A0_meni')
        })
  }
}