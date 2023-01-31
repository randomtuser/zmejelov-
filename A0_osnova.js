 class A0_osnova extends Phaser.Scene {
    constructor(key) {
        super({
            key: key
        })
    }
	preload() {
		this.load.atlas("coolGuy","assets/najdela/najdela.png","assets/najdela/najdela.json")
		this.load.atlas("sovraznik","assets/enemy/enemy1.png","assets/enemy/enemy1.json")

	 
	   }
	 create() {

	gameState.active = true;


	
	
	this.anims.create({
			key: 'walk',
			frames: [
				{ key: 'coolGuy',frame:"Wraith_03_Moving Forward_000.png" },],
			frameRate: 8,
			repeat: -1
		});
	
	this.anims.create({
			key: 'stoji',
			frames: [
				{ key: 'coolGuy',frame:"Wraith_03_Idle_000.png" },],
			frameRate: 8,
			repeat: -1
		});
	this.anims.create({
			key: 'umre',
			frames: [
				{ key: 'coolGuy',frame:"assets/lvl2/Wraith_03_Dying_000.png" },],
			frameRate: 8,
			repeat: -1
		});

		this.anims.create({
			key: 'sovraznik',
			frames: [
			{ key: 'sovraznik',frame:"assets/enemy/Wraith_02_Idle Blinking_003.png" },],  /////////////////////////////////////////CGANGEEEEEEEEEEEEEEEEEEEEE
			frameRate: 10,
			repeat: -1
			});


		

	gameState.cursors = this.input.keyboard.createCursorKeys();
	
	
	
	
	
	


	  }

update(arg) {
	if (arg == "basic"){
	if (gameState.active) {
		if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
						gameState.junak.anims.play('stoji', true);
						gameState.junak.setVelocityY(-650);}
		else if(gameState.cursors.right.isDown) {
			gameState.junak.setVelocityX(500)
			gameState.junak.anims.play('walk', true)
			gameState.junak.flipX = false;}
		else if ( gameState.cursors.left.isDown) {
			gameState.junak.setVelocityX(-500);
			gameState.junak.anims.play('walk', true);
			gameState.junak.flipX = true;}
		else {
			gameState.junak.setVelocityX(0);
			// Plays the idle animation if no arrow keys are pressed
			gameState.junak.anims.play('stoji', true);}

}
}
if (arg == "mrtev"){
	if (gameState.active) {
		if ((gameState.cursors.up.isDown) && gameState.junak.body.touching.down) {
						gameState.junak.anims.play('umre', true);
						gameState.junak.setVelocityY(-650);}
		else if(gameState.cursors.right.isDown) {
			gameState.junak.setVelocityX(500)
			gameState.junak.anims.play('umre', true)
			gameState.junak.flipX = false;}
		else if ( gameState.cursors.left.isDown) {
			gameState.junak.setVelocityX(-500);
			gameState.junak.anims.play('umre', true);
			gameState.junak.flipX = true;}
		else {
			gameState.junak.setVelocityX(0);
			// Plays the idle animation if no arrow keys are pressed
			gameState.junak.anims.play('umre', true);}

}
}



}






} 