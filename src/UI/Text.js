import UIConfig from '../Config/ui'

export default class Text extends Phaser.GameObjects.Text {
    constructor(scene, x, y, type, text) {
        const style = UIConfig[type].text

        super(scene, x, y, text, {
            font: style.font,
            fill: style.color
        })

        this.setOrigin(0.5)

        scene.add.existing(this)
    }
}
