controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
bubble.tossBubble()
bubble.load_bubble()
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
