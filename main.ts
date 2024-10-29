/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Mohammed Afheej
* Created on: Oct 2024
* This program allows the sorvo to move back and forth
*/
// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 34)
    basic.clearScreen()
    basic.showString('30')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()                                              
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 160)
    basic.clearScreen()
    basic.showString('160')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
