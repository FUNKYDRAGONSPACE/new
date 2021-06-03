controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Find the exit", DialogLayout.Full)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    music.buzzer.play()
    game.showLongText("oh no", DialogLayout.Bottom)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.stopAllSounds()
    music.powerUp.play()
    scene.cameraShake(4, 1000)
    game.showLongText("yey!", DialogLayout.Bottom)
    game.over(true)
})
scene.setBackgroundColor(3)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c 2 2 2 2 2 2 c c f . . 
    . . f c 2 f f f f f f 2 c f . . 
    . . f f f f c c c c f f f f . . 
    . f f c f b f 6 6 f b f c f f . 
    . f c c 9 1 f 1 1 f 1 9 c c f . 
    . . f c c 1 1 1 1 1 1 c c f . . 
    . . . f c c 9 9 9 9 c c f . . . 
    . . e 9 f 2 2 6 6 2 2 f 9 c . . 
    . . 9 d f 2 2 6 2 2 2 f d 9 . . 
    . . 9 9 f 9 9 6 6 9 9 f 9 9 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
game.showLongText("Find the exit", DialogLayout.Bottom)
info.startCountdown(60)
forever(function () {
    music.setVolume(60)
    music.playMelody("A A - A A - A A - F C5 A A - F C5 A A A A - E5 E5 - E5 E5 - E5 E5 - F5 C5 A A - F C5 A A - A A -  ", 260)
})
