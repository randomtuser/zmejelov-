class A0_QnA extends Phaser.Scene {
	constructor(){
		super({ key: 'A0_QnA' });
	}
	preload() {
		this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("zmeja","assets/uvod/zmeja.png")
        this.load.image("gumb","assets/uvod/gumb.png")
        this.load.image("ozadje","assets/uvod/zmejelovOdzadje.png")

	   }
 create() {


  this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#2A282E");

  this.add.image(GAME_WIDTH-200,GAME_HEIGHT - 400,"zmeja");
    var x = 70
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


    this.domov = this.add.sprite(GAME_WIDTH-200,GAME_HEIGHT - 175, 'gumb').setInteractive();
    this.domov.setScale(0.8)
  if (usa == true){
    this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'HOME',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
  else if (rus == true){
      this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'ДОМОЙ',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });    }
  else{
      this.add.text(GAME_WIDTH-265,GAME_HEIGHT - 190, 'DOMOV',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });}

   

  //tip == t
  var odmik = 390
  var y = 50
  if (usa == true){
      this.add.text(GAME_WIDTH/2-odmik,y , 'HOW DO I UNLOCK EASTER EGGS?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+40 , 'To unlock the first one, you need to die ' + pogojSmrtLevel +"x",{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+80 , 'To unlock the second one, you need to go\nto the opening on level 4 aka cave, on TILEN difficulty',{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+140 , 'To unlock the third one you need to touch the ruins on level4',{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     


    }
    else if (rus == true){
      this.add.text(GAME_WIDTH/2-odmik,y , 'КАК РАЗБЛОКИРОВАТЬ CEKRETNЫЕ ВЕЩИ?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+40 , 'Чтобы разблокировать первую, вам нужно умереть ' + pogojSmrtLevel +" раз",{ fontSize: '25px', fill: '#A996BC' ,  fontFamily: 'CustomFont'});     
      this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Чтобы разблокировать второй, вам нужно войти в\nк пишеру, на уровне 4, на сложности ТИЛЕН',{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+140 , 'Чтобы разблокировать третий, вам нужно коснуться руин на уровне 4.',{ fontSize: '25px', fill: '#A996BC' ,  fontFamily: 'CustomFont'});     


        }
    else{
      this.add.text(GAME_WIDTH/2-odmik,y , 'KAKO ODKLENEM SKRITE ZADEVE?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' }); 
      this.add.text(GAME_WIDTH/2-odmik,y+40 , '1 je povezana s št. smrti. Treba ti je umreti ' + pogojSmrtLevel +" x",{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+80 , '2 odkleneš tako, da na nivoju 4, na TILEN\ntežavnosti, greš v odprtino, ki je pod sovražnikom/jamo',{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+140 , '3 odkleneš tako, da se na nivoju 4 dotakneš ruševin ',{ fontSize: '25px', fill: '#A996BC',  fontFamily: 'CustomFont' });     

      }       


    //2
    y += 175
    if (usa == true){
    this.add.text(GAME_WIDTH/2-odmik,y , 'WHAT DOES THE BACKGROUND\nON LEVEL3 REPRESENT?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
    this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Zmeja being in the chest' ,{ fontSize: '25px', fill: '#A996BC' });     
    }
    else if (rus == true){
      this.add.text(GAME_WIDTH/2-odmik,y , 'ЧТО ПРЕДСТАВЛЯЕТ ФОН НА\nУРОВНЕ 3?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Змею в сундуке' ,{ fontSize: '25px', fill: '#A996BC' });     
      }
    else{
      this.add.text(GAME_WIDTH/2-odmik,y , 'KAJ PREDSTAVLJA OZADJE\nNA NIVOJU 3?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' }); 
      this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Zmejo v skrinji ' ,{ fontSize: '25px', fill: '#A996BC' });     
      }
    //3
    y += 115
    if (usa == true){
      this.add.text(GAME_WIDTH/2-odmik,y , 'WHY DO I RESPAWN AT LEVEL4?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+40 , 'Because you are playing on TILEN difficulty,\nand you have not discovered secrets of the cave',{ fontSize: '25px', fill: '#A996BC' });     
    }
    else if (rus == true){
      this.add.text(GAME_WIDTH/2-odmik,y , 'ПОЧЕМУ Я ВОЗРОЖДАЮСЬ\nНА УРОВНЕ 4?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
      this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Потому что вы играете на уровне сложности TILEN,\nи не открыли тайны пещеры' ,{ fontSize: '25px', fill: '#A996BC' });     
        }
    else{
      this.add.text(GAME_WIDTH/2-odmik,y , 'ZAKAJ, KO UMREM,\nSE PONOVNO POJAVIM\nNA NIVOJU 4?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' }); 
      this.add.text(GAME_WIDTH/2-odmik,y+120 , 'Ker igraš na TILEN težavnosti\nin nisi odkril skrivnosti jame',{ fontSize: '25px', fill: '#A996BC' });     

      }
      //4
      y += 180
      if (usa == true){
        this.add.text(GAME_WIDTH/2-odmik,y -80 , 'WHAT TO DO IF MY GAME\nGLITCHES OUT?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
        this.add.text(GAME_WIDTH/2-odmik,y , 'Reset the game or try restarting\nlevel by dying',{ fontSize: '25px', fill: '#A996BC' });     
      }
      else if (rus == true){
        this.add.text(GAME_WIDTH/2-odmik,y -40, 'ЧТО ДЕЛАТЬ, ЕСЛИ МОЯ\nИГРА ВЫГЛАШАЕТ?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' });     
        this.add.text(GAME_WIDTH/2-odmik,y+40 , 'Сбросьте игру или попробуйте\nперезапустить уровень, умерев' ,{ fontSize: '25px', fill: '#A996BC' });     
          }
      else{
        this.add.text(GAME_WIDTH/2-odmik,y , 'KAJ NAREDITI, ČE IGRICA\n"ZAGLIČA"?',{ fontSize: '40px',fill: '#B637BF',  fontFamily: 'CustomFont' }); 
        this.add.text(GAME_WIDTH/2-odmik,y+80 , 'Ponovno naloži stran,\nali pa samo umri na tistem nivoju',{ fontSize: '25px', fill: '#A996BC' });     
  
        }
      
        this.domov.on('pointerup', () => {
          this.scene.stop('A0_QnA')
          this.scene.start('A0_meni')
          })



    
  }
}