input.onButtonPressed(Button.A, function () {
    eureka_plotter_car.polygon(3, 10)
})
input.onButtonPressed(Button.B, function () {
    eureka_plotter_car.polygon(5, 10)
})
eureka_plotter_car.microbit_version_info(microbit_version.Version2)
eureka_plotter_car.plottercar_pen(pen_onoff.up)
basic.forever(function () {
	
})
