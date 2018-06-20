/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Joshua Arrants
; Description: This program uses a forEach() function to output 
;              array like object collections. 
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

 // output header
 console.log(header.display("Joshua", "Arrants", "Exercise 5.3"));
 console.log('\n');

// start program

//variable
var composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven", 
        Genre: "Classical", 
        Rating: 8
    },
    {
        firstName: "Wolfgang Anadeus",
        lastName: "Mozart", 
        Genre: "Classical", 
        Rating: 10
    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach", 
        Genre: "Classical", 
        Rating: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn", 
        Genre: "Classical", 
        Rating: 6
    },
    {   
        firstName: "Franz",
        lastName: "Schubert", 
        Genre: "Classical", 
        Rating: 5
    }
];

console.log("-- COMPOSERS --");

//function
composers.forEach(function(composer) {
    console.log(
        "Last Name: " + composer.lastName + ", " + "Genre: " + composer.Genre + ", " + "Rating: " + composer.Rating);
})

// end program