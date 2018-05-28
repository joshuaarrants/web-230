/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 28 May 2018
; Modified By: Joshua Arrants
; Description: This program calls a function to output a name.
;===========================================
*/

// variable declaration and assignment goes here ...
var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.fullName = "Joshua Arrants"

// function 
function myName() {
    return myName.fullName;
}

// output 
console.log(header.display("Joshua", "Arrants", "Exercise 2.3"));
console.log('\n'); 
console.log("Hello " + myName() + "!");

// end program 