input.onButtonPressed(Button.A, function () {
    eureka_plotter_car.polygon(3, 10)
})
input.onButtonPressed(Button.B, function () {
    eureka_plotter_car.polygon(5, 10)
})
led.enable(false)
eureka_plotter_car.plottercar_pen(pen_onoff.up)
basic.forever(function () {
	
})
