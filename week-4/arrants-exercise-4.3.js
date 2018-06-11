/*
============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Joshua Arrants
; Description: This program outputs elements in an array
;              and outputs a selected element within the array.
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

 // output header
 console.log(header.display("Joshua", "Arrants", "Exercise 4.3"));
 console.log('\n'); 

// start program

//variable
var vehicles = ["Car","Truck","Motorcycle","Airplane","Bus"];

// function
function getValue(arr, val) {
    for(var k=0; k < arr.length; k++) {
        if (arr[k] === val) {
            console.log(arr[k]);
        }
    }
}


//Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for(var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}

//new line
console.log("");

//Output
console.log("-- SELECTED VALUE --");
getValue(vehicles,"Motorcycle");

//new line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles,"Bus");

// end program