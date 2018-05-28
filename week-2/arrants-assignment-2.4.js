/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 28 May 2018
; Modified By: Joshua Arrants
; Description: This program defines and invokes functions
;              for specific output. 
;===========================================
*/

// variable declaration and assignment goes here ...
var header = require('../header.js');

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(f,l) {
    return f + l;
}

function dateWriter(y,m,d) {
    return new Date(y,m,d);
}

function formatNumber(n,f) {
    return n.toFixed(f);

}

function convertToInt(i) {
    return parseInt(i);
}

function convertToFloat(d) {
    return parseFloat(d);
}

// output 
console.log(header.display("Joshua", "Arrants", "Assignment 2.4"));
console.log('\n'); 
console.log("Hello my name is " + fullName("Joshua ", "Arrants") + "!");
console.log('\n');
console.log("Today's date is " + dateWriter(2018,4,28)  + " and the current temperature is " + formatNumber(85,1));
console.log('\n');
console.log("I am " + convertToInt("27") +" years old and my savings account goal is " + convertToFloat("10000.00") + " dollars.")
// end program 