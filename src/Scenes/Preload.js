import 'phaser'

export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }

    init() {
    }

    preload() {
        // this.add.image(this.cameras.main.width, this.cameras.main.height, 'preload')
    }

    create() {
        this.scene.start('Game')
    }

}


