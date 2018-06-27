/*
============================================
; Title: Exercise 6.2
; Author: Professor Krasso
; Date: 26 June 2018
; Modified By: Joshua Arrants
; Description: This program uses javascripts exception 
;              handling statments try/catch/finally.
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

  // output header
  console.log(header.display("Joshua", "Arrants", "Exercise 6.2"));
  console.log('\n');

// start program

//exeption handling example
try {

    var x = 'A';


if (x != 'B' ) throw x + " Is Not Equal To B!";

    console.log(x + " Is Equal To " + x + "!");

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause: End of program ...");

}

// end program