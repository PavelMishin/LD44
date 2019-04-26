import UIConfig from '../Config/ui'

export default class Text extends Phaser.GameObjects.BitmapText {
    constructor(scene, x, y, type, text) {

        const style = UIConfig[type].text

        super(scene, x, y, style.font, text)

        this.setFontSize(style.size)
        this.setTint(style.color)
    }
}
