class A7_droperTroll extends Phaser.Scene{
    constructor() {
        super({
          key: 'A7_droperTroll',
          physics: {
            default: 'arcade',
            arcade: { 
              gravity: { y: 20 }
            }
          }
        });}
  preload() {
    this.load.image("ozadje7","assets/droper/blue-sea-sky-background-calm-sea-surface-sky-clouds-vector-illustration_625536-133.png")
    this.load.image("platformO1","assets/droper/Smoke VFX B2.png")
    this.load.image("platformO2" ,"assets/droper/Smoke VFX C1.png")
    this.load.image("platformO3", "assets/droper/Smoke VFX A1.png")
    this.load.image("platformO4","assets/droper/Smoke VFX B1.png")
    this.load.image("tla" ,"assets/Tile (15).png")
    this.load.image("izhod", "assets/Sign_01.png")
    this.load.image("tla7", "assets/scena6/Brick_02.png")
    this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
    this.load.atlas("zmejaDT","assets/najdela/najdela.png","assets/najdela/najdela.json")
    this.load.image("zaklad","assets/Chest_01_Locked.png")
    this.load.image("sovraznik","assets/enemy/Wraith_02_Idle Blinking_003.png")
    this.load.image("spaceship","assets/scena6/spaceship.png")
    this.load.image("znak","assets/Sign_01.png")
    this.load.image("trava", "assets/deco/Grass_01.png")
    this.load.image("rusevine", "assets/deco/Decor_Ruins_02.png")
    this.load.audio('zmaga', ['assets/uvod/zmaga.mp3',"assets/uvod/zmaga.ogg"]);
    this.load.audio('poraz', ['assets/uvod/smrt.mp3',"assets/uvod/smrt.ogg"]);


   }
  create(){
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.active = true;
    const visina = 24000
    const dolzina =1250

    if(easy == true ){
        trenutnaScena = "A7_droperTroll"
        }
    else  if((zmaga == true &&cheatZaHard == 0 )  ){
        trenutnaScena = "A6_scena6"
    }
    else{
        trenutnaScena = "A4_scena4"
    }
    if (easy == true){
        stZivljenj = 4
        }
      else{
      stZivljenj = 3}

    //ozadje full screen
    this.bg = this.add.image(dolzina / 2, visina / 2, 'ozadje7');
    this.bg.setDisplaySize(dolzina, visina)
  
  
    gameState.junak  = this.physics.add.sprite(dolzina/2,0, "zmejaDT")
    gameState.junak.setScale(.2)// pomanjsa
    

    var spaceship = this.add.image(gameState.junak.x,gameState.junak.y+165, "spaceship")
 

  
    this.camera = this.cameras.main.setBounds(0,0,dolzina,visina)
	this.physics.world.setBounds(0,0,dolzina,visina)
	this.cameras.main.startFollow(gameState.junak)
    this.camera.zoomTo(  
        1, //zoom distance   
        10000 // duration/speed of zoom
        );
    //oblacki
    var oblacki = ["platformO1", "platformO2", "platformO3","platformO4"] 
    const platforms = this.physics.add.staticGroup(); //128*128
    gameState.junak.setCollideWorldBounds(true)
    const plosce = []
    var manjsa = 1000
    var pogoj = 0
    plus = 0
    while (pogoj <  800 && manjsa < (visina-6500)){
        //razlika med oblakoma 
        //vedno 2 oblaka
        var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
        var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
        var  zaY =  Math.floor(Math.random() * 100); 
        var plus = Math.floor(Math.random() * dolzina/3)
        var oblak =  Math.floor(Math.random() * 4);
        const podenj =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
        podenj.setScale(2.6)
        plosce.push(podenj)
        var  st =  Math.floor(Math.random() * 11); 
        if(st > 4){
        var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
        var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
        var  zaY =  Math.floor(Math.random() * 100); 
        var plus = Math.floor(Math.random() * dolzina/3)
        var oblak =  Math.floor(Math.random() * 4);
        var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
        podenj2.setScale(2.6)
        plosce.push(podenj2)}
        var  st =  Math.floor(Math.random() * 12); 
        //se en
        if(pogoj > 12 && st > 2){
            var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
            var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
            var  zaY =  Math.floor(Math.random() * 100); 
            var plus = Math.floor(Math.random() * dolzina/3)
            var oblak =  Math.floor(Math.random() * 4);
            var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
            podenj2.setScale(2.6)
            plosce.push(podenj2)
        }
        //se en
        var  st =  Math.floor(Math.random() * 8); 
        if(pogoj > 50 && st > 3){
            var  kordinata =  Math.floor(Math.random() * (dolzina+50)); 
            var  dolzinaO =  Math.floor(Math.random() * (dolzina)/3); 
            var  zaY =  Math.floor(Math.random() * 100); 
            var plus = Math.floor(Math.random() * dolzina/3)
            var oblak =  Math.floor(Math.random() * 4);
            var podenj2 =  platforms.create(kordinata, manjsa - zaY ,  oblacki[oblak])
            podenj2.setScale(2.6)
            plosce.push(podenj2)
        }

       
    

    var  razlika =  Math.floor(Math.random() * 500)+350; 
    pogoj += 1
    manjsa += razlika
        
    }
    
	var naPol = dolzina/2-380



    var tla =  []
    for (let x = 0; x < dolzina +115; x = x + 115){
		const podenj =  platforms.create(x, visina-5500 , 'tla')
        const podenj2 =  platforms.create(x, visina-5480 , 'tla')
        const podenj3 =  platforms.create(x, visina- 5400, 'tla')
        const podenj4 =  platforms.create(x, visina-5380 , 'tla')
        const podenj5 =  platforms.create(x, visina-5300 , 'tla')
        const podenj6 =  platforms.create(x, visina- 5280, 'tla')
        const podenj7 =  platforms.create(x, visina- 5200, 'tla')
        const podenj8 =  platforms.create(x, visina- 5180, 'tla')
        tla.push(podenj7)
        tla.push(podenj8)
        tla.push(podenj3)
		tla.push(podenj)
        tla.push(podenj2)
        tla.push(podenj6)
		tla.push(podenj5)
        tla.push(podenj4)

	}
    const atlantida = this.physics.add.sprite(200,visina-6000, "trava")
    const sovraznik = this.physics.add.sprite(500,visina-6000, "rusevine")
    sovraznik.setScale(.3)
    const zaklad = this.physics.add.sprite(850,visina-6000, "trava")
    const izhod = this.physics.add.sprite(1100,visina-6000, "trava")

    this.physics.add.collider(tla, izhod)
    this.physics.add.collider(tla, zaklad)
	this.physics.add.collider(tla, sovraznik)
	this.physics.add.collider(tla, atlantida)


    this.anims.create({
            key: 'stoji',
            frames: [
                { key: 'zmejaDT',frame:"Wraith_03_Idle_000.png" },],
            frameRate: 8,
            repeat: -1
        });
    this.anims.create({
        key: 'umre',
        frames: [
            { key: 'zmejaDT',frame:"assets/lvl2/Wraith_03_Dying_000.png" },],
        frameRate: 8,
        repeat: -1
    });
	this.physics.add.overlap(gameState.junak, tla, () => {
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stSmrti += 1
          this.anims.pauseAll();
          gameState.active = false;
          vrstaTeksta = "level_7_konecTroll"
          vrsta_smrt  =true
          this.scene.stop('A7_droperTroll')
          this.scene.start('vrsta')
            })
    


    this.physics.add.overlap(gameState.junak, plosce, () => {
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        if (stZivljenj > 0) {
            gameState.junak.y = gameState.junak.y +150 
            stZivljenj -= 1
            if (usa == true){
                this.add.text(gameState.junak.x, gameState.junak.y , stZivljenj +' lifes remaining ',{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}
            else if (rus == true){
                this.add.text(gameState.junak.x, gameState.junak.y , 'Ещё '+ stZivljenj+ " жизнь",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}
            else{
                this.add.text(gameState.junak.x, gameState.junak.y , 'še ' + stZivljenj+ " življenj",{ fontSize: '40px',fill: '#A996BC',  fontFamily: 'CustomFont' });}
           }
        if (stZivljenj == 0) {
        this.titleMusic = this.sound.add('poraz', { volume: 0.1, loop: false });   
        this.titleMusic.play(); 
        stSmrti += 1
          this.anims.pauseAll();
          gameState.active = false;
          vrstaTeksta = "padec"
          vrsta_smrt  =true
          this.scene.stop('A7_droperTroll')
          this.scene.start('vrsta')
        }
        });

    
  }

update(){
    if (gameState.active) {
        /*if ((gameState.cursors.down.isDown) ) {
                        gameState.junak.anims.play('stoji', true);
                        gameState.junak.setVelocityY(650);}*/
         if(gameState.cursors.right.isDown) {
            gameState.junak.setVelocityX(500)
            gameState.junak.anims.play('stoji', true)
            gameState.junak.flipX = false;}
        else if ( gameState.cursors.left.isDown) {
            gameState.junak.setVelocityX(-500);
            gameState.junak.anims.play('stoji', true);
            gameState.junak.flipX = true;}
        else {
            gameState.junak.setVelocityX(0);
            // Plays the idle animation if no arrow keys are pressed
            gameState.junak.anims.play('stoji', true);}

}
  
  
  
  
  }
  }
  
  
  
  
  
  