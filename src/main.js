import Phaser from 'phaser';

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: true
		}
	},
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)
