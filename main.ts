input.onButtonPressed(Button.A, function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
input.onButtonPressed(Button.AB, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
})
basic.forever(function () {
    if (90 < input.soundLevel()) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
