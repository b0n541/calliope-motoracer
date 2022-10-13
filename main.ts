input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    auto.change(LedSpriteProperty.X, -1)
})
function spielende () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    geschwindigkeit = 500
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    auto.change(LedSpriteProperty.X, 1)
})
let hindernis: game.LedSprite = null
let geschwindigkeit = 0
let auto: game.LedSprite = null
auto = game.createSprite(2, 4)
geschwindigkeit = 500
basic.forever(function () {
    hindernis = game.createSprite(randint(0, 4), 0)
    basic.pause(geschwindigkeit)
    while (hindernis.get(LedSpriteProperty.Y) < 4) {
        hindernis.change(LedSpriteProperty.Y, 1)
        basic.pause(geschwindigkeit)
        if (auto.isTouching(hindernis)) {
            spielende()
        }
    }
    hindernis.delete()
    geschwindigkeit += -20
})
