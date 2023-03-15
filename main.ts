input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . . # .
        . . . # .
        `)
})
basic.forever(function () {
    basic.showString("federico")
    basic.showIcon(IconNames.QuarterNote)
    basic.pause(1000)
    basic.clearScreen()
})
