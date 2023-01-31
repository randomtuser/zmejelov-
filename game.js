
const GAME_HEIGHT = 740
const GAME_WIDTH = 1200
var cursors;
var pogoj = true //samo ta prvic izpise glinena vojska
var stSmrti = 0
var stZivljenj = 0
var EasterEgg = 0
var StEasterEgg = 3 //kok vse skp
var zaprto = false  //zapre vhod jame
var slo = true   //jeziki
var usa = false
var rus = false
var easy = true  //gamemode
var zmaga = false   //ce zmagamo skrvini nivo bo true
var trenutnaScena = "" //na kero sceno vrnt, ce odklene easter egg za smrt
var checkpoint = false
var pogojSmrtLevel = 25 //pogoj za aktivacijo easter egga 

var spawnP = false  //pogoj za spown point A8_plavanje 
var spawn6 = false  //pogoj za spown point lvl6 
var cheatZaHard = 1 //hard level, če opravi težk nivo dobi en spawn point 1 brez aka default, 0 ali 2  nastavljen

var vrniNa = "" //pove na keri nivo naj vrne igralca, za free play
var vrniNaPogoj = false //ce gremo freeplay
var muska = 1 //da ne ponavla muske vsakic ko gres na main
var enkratt = 1 //ce je 1 je default, pomeni pa da odklenemo 2 easter egg na 4 nivoju
var smrtEnkrattt = 0 //da se ob 50 smrti ne bo se kr en ester egg


var vrstaTeksta = "" //vrze na en page, da bo zgodba bolj pregledna
var vrsta_smrt = false //ce umre
var stSmrtiPrVojski = 0

var isMute = false //mute/unmute

//SPAWN 6 FALSE ZMAGA FALSE



if (easy == true){
var zaprto = true
var checkpoint = true

}



if (zmaga == true){
  var checkpoint = true}




const gameState = {
  speed: 240,
 ups: 380,
 width: 2000,
 height: 600,
};
const config = {
    type: Phaser.AUTO,
  height:  GAME_HEIGHT, 
  width: GAME_WIDTH ,  
	 scene:[A0_meni,A0_zahvale , A0_intro, vrsta, A9_skrinja_uvod, A9_skrinja, A9_skrinja_konec, A0_QnA, film, A0_vsi_nivoji, A0_vsi_nivoji2, A0_uvod, A0_tezavnost, A7_droperTroll, A0_osnova, AS_jama, AS_skrivni,AS_jamaKonec  , A1_scena1, A2_scena2, A3_scena3 ,A4_scena4,A5_scena5, A6_scena6, A7_droperUvod, A7_droper, smrt ,A8_plavanje, A9_cilj, A10_outro, A10_konec],
	 physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
			enableBody: true,
      debug: false
    }
  }
  
};
const game = new Phaser.Game(config)

