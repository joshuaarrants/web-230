/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 6 June 2018
; Modified By: Joshua Arrants
; Description:This program test 6 variables and
;             outputs if the match or don't match.
;===========================================
*/

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// six (6) test variables 
var test1 = "Truck";
var test2 = "Car";
var test3 = "Bike";
var test4 = "Bike";
var test5 = "Four";
var test6 = "Three";

// functions 
function match(arg1,arg2) {
    if (arg1=== arg2)
        return true;
    else 
        return false;
} 

function logMismatch(arg1,arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1,arg2) {
    console.log(arg1 + " and " + arg2 + " do match!")
}


// output 
console.log(header.display("Joshua", "Arrants", "Exercise 3.2"));
console.log('\n'); 

// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(test1,test2)) {
    logMatch(test1,test2);
} else {
    logMismatch(test1,test2);
}

if (match(test3,test4)) {
    logMatch(test3,test4);
}
else {
    logMismatch(test3,test4);
}

if (match(test5,test6)) {
    logMatch(test5,test6);
}
else {
    logMismatch(test5,test6)
}

//end program