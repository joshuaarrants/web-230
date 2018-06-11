/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Joshua Arrants
; Description: This program will output an array of elements.   
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

 // output header
console.log(header.display("Joshua", "Arrants", "Exercise 4.2"));
console.log('\n'); 

// start program

//variable
var fruits = ["Apple","Orange","Banana","Mango","Pear"];


// function
function getFruit(arr) {
    for(var k=0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}


// Output from the getFruit() function
getFruit(fruits);




// end program