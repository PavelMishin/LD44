import 'phaser';
import config from './Config/config'
import BootScene from './Scenes/Boot'
import PreloadScene from './Scenes/Preload'
import GameScene from './Scenes/Game'

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Boot', BootScene)
        this.scene.add('Preload', PreloadScene)
        this.scene.add('Game', GameScene)

        this.scene.start('Boot')
    }

}

new Game();
