/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Joshua Arrants
; Description: This program uses the map method to output 
;              a list of ratings and genre's by composers. 
======
*/

var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

  // output header
  console.log(header.display("Joshua", "Arrants", "Assignment 5.4"));
  console.log('\n'); 

// start program

var famousComposers = [
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

var comnposersByRating = famousComposers.map(function(composer) {
  return "Rating: " + composer.Rating + "\nComposer: " + composer.lastName;
});

var composersByGenre = famousComposers.map(function(composer) {
  return "Genre: " + composer.Genre + "\nComposer: " + composer.lastName;
});

console.log("-- COMPOSER BY RATING --");
comnposersByRating.forEach(function(composer) {
    console.log(composer + "\n");
});


console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(composer) {
    console.log(composer + "\n");
})



// end program