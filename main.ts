let y2 = 0
let y1 = 0
let y = 0
let x = 0
basic.forever(function () {
    y2 = -2
    y1 = -1
    y = 0
    x = randint(0, 4)
    basic.pause(300)
    while (y2 != 5) {
        led.plot(x, y2)
        led.plot(x, y1)
        led.plot(x, y)
        basic.pause(300)
        led.unplot(x, y2)
        led.unplot(x, y1)
        led.unplot(x, y)
        y2 += 1
        y1 += 1
        y += 1
    }
})
