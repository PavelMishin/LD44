import Text from './Text'

export default class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y, texture, text, textType, enabled = false) {
        super(scene, x, y)

        this.background = new Phaser.GameObjects.Image(scene, 0, 0, texture)
        this.add(this.background)
        this.setSize(this.background.width, this.background.height)

        const label = new Text(scene, 0, 0, textType, text).setOrigin(0.5)

        this.add(label)

        this.background.setScale(window.devicePixelRatio)

        if (enabled) {
            this.setInteractive()
            this.on('pointerover', this.hover)
            this.on('pointerout', this.leave)
        } else {
            this.background.setTint(0x666666)
        }
    }

    hover() {
        this.setAlpha(0.9)
        // this.background.setTint(0x99aaff)
        // this.background.setTexture('buttonRectHover')
    }

    leave() {
        this.setAlpha(1)
        // this.background.clearTint()
    }

}
