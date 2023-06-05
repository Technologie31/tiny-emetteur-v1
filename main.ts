input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
basic.showString("E")
radio.setGroup(1)
