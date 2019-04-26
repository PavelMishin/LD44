import 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    preload() {
    }

    create() {
        this._createLevel()
        this._initInput()

    }

    _createLevel() {

    }

    _initInput() {

    }
}
