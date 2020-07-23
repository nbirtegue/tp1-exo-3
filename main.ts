let y2 = 0
let y1 = 0
let y = 0
let x = 0
basic.forever(function () {
    y2 = -2
    y1 = -1
    y = 0
    x = randint(0, 4)
    basic.pause(50)
    while (y2 != 5) {
        led.plot(x, y2)
        led.plot(x, y1)
        led.plot(x, y)
        led.plotBrightness(x, y, 255)
        led.plotBrightness(x, y1, 185)
        led.plotBrightness(x, y2, 115)
        basic.pause(50)
        led.unplot(x, y2)
        led.unplot(x, y1)
        led.unplot(x, y)
        y2 += 1
        y1 += 1
        y += 1
    }
})
