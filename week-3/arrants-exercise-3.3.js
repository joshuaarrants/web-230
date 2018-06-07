/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 6 June 2018
; Modified By: Joshua Arrants
; Description: This program demonstrates the use of case statements            
;======
*/

var header = require('../header.js')

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// output header
console.log(header.display("Joshua", "Arrants", "Exercise 3.3"));
console.log('\n'); 

// variable declaration and assignment goes here ..
var eventKeyCode = 13;

// Multiway branch of if statements (replace with a switch statement)

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed"); 
        break;
    case 16:
        console.log("The shift key was pressed"); 
        break;
    case 32:
        console.log("The spacebar key was pressed")
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press");
        break;
}

// end program 