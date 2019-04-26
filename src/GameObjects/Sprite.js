export default class Sprite extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, scene.cameras.main.width, scene.cameras.main.height, 'sprite')
        scene.physics.world.enable(this)
        scene.add.existing(this)
    }
}
