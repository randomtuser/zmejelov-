    class A0_meni extends Phaser.Scene {
        constructor(){
            super({ key: 'A0_meni' });
        }
        preload() {
            this.load.audio('glavna', ['assets/uvod/glavna.mp3',"assets/uvod/glavna.ogg"]);
            this.load.image("gumb","assets/uvod/gumb.png")
            this.load.image("zmeja","assets/uvod/zmeja.png")
            this.load.video('video', 'assets/uvod/New Project.mp4');
            this.load.image("zmentures","assets/uvod/Screenshot 2023-01-27 at 16-50-18 Untitled-11.pdf.png")
            this.load.image("rage","assets/uvod/rage.png")
            this.load.image("basic","assets/uvod/basic.png")
            this.load.image("usa","assets/uvod/United_States.jpg")
            this.load.image("rus","assets/uvod/Russia.jpg")
            this.load.image("slo","assets/uvod/Slovenia.jpg")
            this.load.image("gumb2","assets/uvod/gumbVeliki.png")
            this.load.image("mute","assets/uvod/mute.png")
            this.load.image("unmute","assets/uvod/umute.png")
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
        else if(verzija == 3){
            var basic = this.add.image(GAME_WIDTH/2,100,"basic");
            basic.setScale(.5)
        }



        //zvok
        if(!isMute){
            this.unmute = this.add.sprite(GAME_WIDTH-40,GAME_HEIGHT-30,"unmute").setInteractive();;
            this.unmute.setScale(.5)
            if (muska == 1){
                this.titleMusic = this.sound.add('glavna', { volume: 0.1, loop: true });   
                this.titleMusic.play();    
                muska = 2}
          
            

            this.unmute.on('pointerup', () => {
                isMute = true
                this.scene.restart()
            })
            
        }
        else if(isMute){
            muska = 1  
            this.mute = this.add.sprite(GAME_WIDTH-40,GAME_HEIGHT-30,"mute").setInteractive();;
            this.mute.setScale(.5)
            this.titleMusic.stop()
            this.mute.on('pointerup', () => {
                isMute = false
                this.scene.restart()
            }) 
        }
        






        

       

        zaprto = false 
        vrniNaPogoj = false
        stSmrti  = 0
        checkpoint = false
        pogoj = true
        spawnP = false  //pogoj za spown point A8_plavanje 
        spawn6 = false  //pogoj za spown point lvl6 
        cheatZaHard = 1 //hard level, če opravi težk nivo dobi en spawn point 1 brez aka default, 0 ali 2  nastavljen
        enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
        zmaga = false 


       

        var odmik = 2

        var pozicija1 = 400
        var razmikMedBloki = 150
        
        this.igra = this.add.sprite(GAME_WIDTH/odmik, pozicija1, 'gumb2').setInteractive();
        this.zahvale = this.add.sprite(GAME_WIDTH/odmik-200, pozicija1+razmikMedBloki, 'gumb').setInteractive();

        this.qna = this.add.sprite(GAME_WIDTH/odmik+200, pozicija1+razmikMedBloki, 'gumb').setInteractive();
            
        
        
       

        if (usa == true){
            this.add.text(GAME_WIDTH/2-50, pozicija1-20, 'PLAY',{ fontSize: '40px', fill: '#E950F4' ,  fontFamily: 'CustomFont'});
            this.add.text(GAME_WIDTH/2-60-180, pozicija1+130, 'QnA',{ fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
            this.add.text(GAME_WIDTH/2-60+200, pozicija1+130, 'CREDITS',{ fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }
            else if (rus == true){
                this.add.text(GAME_WIDTH/2-50, pozicija1-20, 'ИГРАЙ',{ fontSize: '40px', fill: '#E950F4',  fontFamily: 'CustomFont' });
                this.add.text(GAME_WIDTH/2-60-220, pozicija1+100, "ВОПРОСЫ\nИ ОТВЕТЫ",{ fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
                this.add.text(GAME_WIDTH/2-60+200, pozicija1+130, 'КРЕДИТЫ',{ fontSize: '35px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }
            else{
            this.add.text(GAME_WIDTH/2-50, pozicija1-20, 'IGRAJ',{ fontSize: '40px', fill: '#E950F4',  fontFamily: 'CustomFont' });
            this.add.text(GAME_WIDTH/2-60-180, pozicija1+130, 'QnA',{ fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
            this.add.text(GAME_WIDTH/2-60+180, pozicija1+130, 'ZAHVALE',{ fontSize: '40px', fill: '#E950F4', fontFamily: 'CustomFont' });
        }
        



        this.igra.setScale(1)
        this.igra.on('pointerup', () => {
            this.scene.stop('A0_meni')
        this.scene.start('A0_tezavnost')
        })
      
        
        this.zahvale.setScale(1.5)
        this.zahvale.on('pointerup', () => {
            this.scene.stop('A0_meni')
        this.scene.start('A0_QnA')
        })
     
        this.qna.setScale(1.5 )
        this.qna.on('pointerup', () => {
        this.scene.stop('A0_meni')
        this.scene.start('A0_zahvale')
        })
        



        var razmak = 50
        var y = GAME_HEIGHT-20
        this.slo = this.add.sprite(25+razmak+razmak, y, 'slo').setInteractive();
        this.slo.setScale(.5)
        this.slo.on('pointerup', () => {
            slo = true
            rus = false
            usa = false
            this.scene.restart();
        })
            
        this.usa = this.add.sprite(20+razmak, y, 'usa').setInteractive();
        this.usa.setScale(.5)
        this.usa.on('pointerup', () => {
            slo = false
            rus = false
            usa = true
            this.scene.restart();
        })
    
        this.rus = this.add.sprite(20, y, 'rus').setInteractive();
        this.rus.setScale(.45)
        this.rus.on('pointerup', () => {
            slo = false
            rus = true
            usa = false
            this.scene.restart();
           
        })

        


    


        
    }
    }