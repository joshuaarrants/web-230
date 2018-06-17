/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Joshua Arrants
; Description: This program uses the sort and filtr method on an array.
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

 // output header
  console.log(header.display("Joshua", "Arrants", "Assignment 4.4"));
  console.log('\n'); 

// start program

//variable
var states = ["Alabama","Nebraska","Iowa","California","Nevada"];


// function
function getValue(x,val) {
    return val%2==0;
}  
// Output



//Output
console.log("-- ORIGINAL ARRAY --");
for(var h = 0; h < states.length; h++) {
    console.log(states[h]);
}

//new line
console.log("");

//Output
console.log(" -- SORTED ARRAY --");
for(var i = 0; i < states.length; i++) {
    states.sort();
    console.log(states[i]);
}

//new line
console.log("");
filterStates = states.filter(getValue);
console.log("-- SELECTED VALUE --");
console.log(filterStates[1]);


// end program