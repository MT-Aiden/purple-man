sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.spray, 500)
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . 1 1 . . . . 
    . . . . . . . . . 2 2 1 . . . . 
    . . . . . . . . 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . 3 2 2 2 2 2 . . . . . 
    . . . . . . 3 3 2 2 2 . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . 3 . . 3 . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . 3 . . 3 3 . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . 3 . 3 3 . . . . . 
    . . . . . 3 3 . . . 3 3 . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 0)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let EnemyGuy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f a a a a a a a f . . . . 
    . . f a a a a a a a a a f . . . 
    . f a a f f a a a f f a a f . . 
    . f a f 2 2 f a f 2 2 f a f . . 
    . f a a a a a a a a a a a f . . 
    . f a a a a a a a a a a a f . . 
    . f a f a a a a a a a f a f . . 
    . f a a f a a a a a f a a f . . 
    . f a a a f f f f f a a a f . . 
    . . f a a a a a a a a a f . . . 
    . . . f a a a a a a a f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
EnemyGuy.follow(mySprite, 80)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
