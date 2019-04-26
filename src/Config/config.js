import 'phaser';

export default {
    type: Phaser.AUTO,
    parent: 'game-name',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 640,
    },
    render: {
        // pixelArt: true,
        // transparent: true,
        // antialias: false,
        // roundPixels: true
    },
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: {y: 300},
    //         // debug: true
    //     }
    // },
    // physics: {
    //     default: 'matter',
    //     matter: {
    //         gravity: {y: 2},
    //         // debug: true
    //     }
    // },
};
