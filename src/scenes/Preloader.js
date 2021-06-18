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

        
    }

    create()
    {
        this.scene.start('game');
    }
}
