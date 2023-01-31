class A0_vsi_nivoji2 extends Phaser.Scene {
	constructor(){
		super({ key: 'A0_vsi_nivoji2' });
	}
	preload() {
	    this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
		this.load.image("cilj","assets/uvod/nivoji/cilj.png")
        this.load.image("skrivni","assets/uvod/nivoji/skrivni.png")      
		this.load.image("soon","assets/uvod/nivoji/soon.png")


        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.image("skrinja","assets/uvod/nivoji/skrinja.png")


        this.load.image("L1","assets/uvod/nivoji/L1.png")
        this.load.image("L2","assets/uvod/nivoji/L2.png")
		this.load.image("L3","assets/uvod/nivoji/L3.png")
        this.load.image("L4","assets/uvod/nivoji/L4.png")
        this.load.image("L5","assets/uvod/nivoji/L5.png")
		this.load.image("L6","assets/uvod/nivoji/L6.png")
        this.load.image("L7","assets/uvod/nivoji/L7.png")
        this.load.image("L8","assets/uvod/nivoji/L8.png")
		this.load.image("L9","assets/uvod/nivoji/L9.png")
		this.load.image("gumb","assets/uvod/gumb.png")



	   }
 create() {
    vrniNaPogoj = true
    easy = true
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

    //basic osnova
	this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    var x = 60
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

    this.nazaj = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 100, 'gumb').setInteractive();
    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.nazaj.setScale(0.8)
    this.domov.setScale(0.8)


    if (usa == true){
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 115, 'BACK',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'HOME',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
    else if (rus == true){
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 115, 'НАЗАД',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'ДОМОЙ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
    else{
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 115, 'NAZAJ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });
        this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'DOMOV',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });}

    this.nazaj.on('pointerup', () => {
        this.scene.stop('A0_vsi_nivoji2')
        this.scene.start('A0_vsi_nivoji')
        })
    this.domov.on('pointerup', () => {
        this.scene.stop('A0_vsi_nivoji2')
        this.scene.start('A0_meni')
        })


    

        var x = 300
        var y = 75
        var zaKok = 220
        var ime = 60 //zamik za texxt
        var imey = 20 //zamik za y
        this.l1 = this.add.image(x+zaKok , y,'L1')
            this.s1 = this.add.sprite(x+ zaKok,y+100 ,"cilj").setInteractive();
            this.s1.setScale(.1)
            this.add.text(x+ zaKok-ime - 10,y - imey , 'LEVEL 10',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
            this.s1.on('pointerup', () => {
                vrniNaPogoj = true
                this.scene.stop('A0_vsi_nivoji')
                this.scene.start('A9_cilj')
                })
        this.l2 = this.add.image(x+ zaKok * 2, y, 'L2')
            this.s1 = this.add.sprite(x+ zaKok * 2,y+100 ,"skrivni").setInteractive();
            this.s1.setScale(.1)
            if (usa == true){
                this.add.text(x+ zaKok * 2 -ime, y -imey -5, 'SECRET\nLEVEL',{ fontSize: '28px', fill: '#000000',  fontFamily: 'CustomFont' });    }
            else if (rus == true){
                this.add.text(x+ zaKok * 2 -ime, y -imey -5 , 'СЕКРЕТЫН\nУРОВЕНЬ',{ fontSize: '28px', fill: '#000000',  fontFamily: 'CustomFont' });  }
            else{
                this.add.text(x+ zaKok * 2 -ime, y -imey -5, 'SKRIVNI\nNIVO',{ fontSize: '28px', fill: '#000000',  fontFamily: 'CustomFont' });}
            this.s1.on('pointerup', () => {
                vrniNaPogoj = true
                this.scene.stop('A0_vsi_nivoji')
                this.scene.start('AS_skrivni')
                })
        this.l3 = this.add.image(x , y, 'L3')
            this.s1 = this.add.image(x ,y+100 ,"skrinja").setInteractive();
            this.s1.setScale(0.1)
            if (usa == true){
                this.add.text(x -ime, y -imey , 'CHEST',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
            }
            else if (rus == true){
                this.add.text(x -ime, y -imey , "СУНДУК",{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
            }
            else{
                this.add.text(x -ime, y -imey , 'SKRINJA',{ fontSize: '30px', fill: '#000000',  fontFamily: 'CustomFont' });
            }
            this.s1.on('pointerup', () => {
               vrniNaPogoj = true
                this.scene.stop('A0_vsi_nivoji')
                this.scene.start('A9_skrinja')
                })
    
           
            
        this.l1.setScale(0.8)
        this.l2.setScale(0.8)
        this.l3.setScale(0.8)
       
   

    y += 225
    this.l4 = this.add.image(x, y, 'L9')
    this.s1 = this.add.sprite(x,y+100 ,"soon").setInteractive();
    this.s1.setScale(.85)
    this.add.text(x+  -ime , y -imey -5, '???????',{ fontSize: '28px', fill: '#000000',  fontFamily: 'CustomFont' });

	

    this.l4.setScale(0.8)

    


  


    
  }
}