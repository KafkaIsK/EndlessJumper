import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game');
	}

	preload()
    {
        
    }

    create()
    {
        this.add.image(240, 320, 'background');
    }
    
}
