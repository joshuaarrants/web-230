/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 7 June 2018
; Modified By: Joshua Arrants
; Description: This program uses a for and while loop
;              to compare two numbers 10 times.           
;======
*/

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// output header
console.log(header.display("Joshua", "Arrants", "Assignment 3.4"));
console.log('\n'); 

// test variable
var test = 6;

// for loop
console.log("-- Displaying for loop --");
for(var count=0; count < 10; count++) {
    var rnd = randomNumber();
if (match(test,rnd)) {
    logMatch(test,rnd);
} else {
    logMismatch(test,rnd);
}
}
// while loop
console.log("\n-- Displaying while loop --"); 
var count1 = 0;
while(count1 < 10) {
    var rnd1 = randomNumber();
    if (match(test,rnd1)) {
        logMatch(test,rnd1);
    } else {
        logMismatch(test,rnd1);
    }
    count1++;
}

// Reused functions from exercise-3.2.js
function match(arg1,arg2) {
    if (arg1===arg2)
        return true;
    else 
        return false;
} 

function logMismatch(arg1,arg2) {
    console.log(arg1 + " does not match " + arg2 + "!");
}

function logMatch(arg1,arg2) {
    console.log(arg1 + " does match " + arg2 + "!");
}

// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

