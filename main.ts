music.rest(music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (poitch2.testSwitch(DigitalPin.P5)) {
        watchfont.showNumber2(5)
        music.ringTone(262)
    } else if (poitch2.testSwitch(DigitalPin.P8)) {
        watchfont.showNumber2(8)
        music.ringTone(294)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        watchfont.showNumber2(1)
        music.ringTone(330)
    } else if (poitch2.testSwitch(DigitalPin.P12)) {
        watchfont.showNumber2(12)
        music.ringTone(349)
    } else if (poitch2.testSwitch(DigitalPin.P13)) {
        watchfont.showNumber2(13)
        music.ringTone(392)
    } else if (poitch2.testSwitch(DigitalPin.P11)) {
        watchfont.showNumber2(11)
        music.ringTone(440)
    } else {
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
