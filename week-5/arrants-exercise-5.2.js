/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Joshua Arrants
; Description: This program uses the forEach() method
;              to ouput an array of food items. 
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */
 
 // output header
 console.log(header.display("Joshua", "Arrants", "Exercise 5.2"));
 console.log('\n'); 

// start program

//variable
var foods = ["Oysters","Shrimp","Steak","Tacos","Sushi"];

//function
foods.forEach(function(food) {
    console.log(food);
});

// end program