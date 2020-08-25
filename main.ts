sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    if (info.score() == 3) {
        game.over(true)
    } else {
        if (info.score() == 0) {
            bun.destroy()
            info.changeScoreBy(1)
            cake = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
                . . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
                . . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
                . . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
                . . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
                . . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
                . . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
                . . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
                . . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
                . . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
                b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
                b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
                b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
                b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
                b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
                b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
                b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
                b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
                b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
                b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
                b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
                b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
                b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
                b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
                b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
                . . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
                . . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
                . . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
                . . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
                . . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
                . . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
                `, SpriteKind.Food)
            cake.setPosition(randint(0, 160), randint(0, 120))
        } else {
            cake.destroy()
            info.changeScoreBy(1)
            pizza = sprites.create(img`
                . . . . . . b b b b . . . . . . 
                . . . . . . b 4 4 4 b . . . . . 
                . . . . . . b b 4 4 4 b . . . . 
                . . . . . b 4 b b b 4 4 b . . . 
                . . . . b d 5 5 5 4 b 4 4 b . . 
                . . . . b 3 2 3 5 5 4 e 4 4 b . 
                . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                . . . b 5 3 2 3 5 5 5 5 e e e e 
                . . b d 7 5 5 5 3 2 3 5 5 e e e 
                . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                b d 3 2 d 5 5 5 d d d 4 4 . . . 
                b 5 5 5 5 d d 4 4 4 4 . . . . . 
                4 d d d 4 4 4 . . . . . . . . . 
                4 4 4 4 . . . . . . . . . . . . 
                `, SpriteKind.Food)
            pizza.setPosition(randint(0, 160), randint(0, 120))
        }
    }
})
let pizza: Sprite = null
let cake: Sprite = null
let bun: Sprite = null
info.setScore(0)
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
controller.moveSprite(mySprite, 30, 30)
bun = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    . . e e b 4 4 4 4 4 4 b e e . . 
    . . . e e e e e e e e e e . . . 
    e 4 4 . . . . . . . . . . . 4 e 
    e c 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e b 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
