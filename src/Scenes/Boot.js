import 'phaser'

export default class Boot extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        // this.load.image('logo', 'assets/preload.png')
    }

    create() {
        this.scene.start('Preload')
    }
}
