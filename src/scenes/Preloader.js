import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader');
    }
    
    preload()
    {
        this.load.image('background', 'assets/bg_layer1.png');
        this.load.image('carrot', 'assets/carrot.png');
        this.load.image('platform', 'assets/ground_grass.png');
        this.load.image('bunny-stand', 'assets/bunny2_stand.png');
        this.load.image('bunny-jump', 'assets/bunny2_jump.png');

        this.load.audio('jump', 'assets/sfx/phaseJump1.ogg');
        this.load.audio('tone', 'assets/sfx/tone1.ogg');
    }

    create()
    {
        this.scene.start('game');
    }
}
