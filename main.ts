function spielStart () {
    geschwindigkeit = 20
    game.setScore(0)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    auto.change(LedSpriteProperty.X, -1)
})
function spielende () {
    game.pause()
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showNumber(game.score())
    spielStart()
    game.resume()
}
function neuesHindernis () {
    hindernis = game.createSprite(randint(0, 4), 0)
    hindernis.set(LedSpriteProperty.Brightness, 10)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    auto.change(LedSpriteProperty.X, 1)
})
let hindernis: game.LedSprite = null
let geschwindigkeit = 0
let auto: game.LedSprite = null
auto = game.createSprite(2, 4)
spielStart()
basic.forever(function () {
    neuesHindernis()
    basic.pause(500 - geschwindigkeit)
    while (hindernis.get(LedSpriteProperty.Y) < 4) {
        hindernis.change(LedSpriteProperty.Y, 1)
        basic.pause(500 - geschwindigkeit)
    }
    if (auto.isTouching(hindernis)) {
        spielende()
    } else {
        game.pause()
        game.addScore(1)
        game.resume()
        geschwindigkeit += 20
    }
    hindernis.delete()
})
