/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 26 June 2018
; Modified By: Joshua Arrants
; Description: This program outputs the properties of the
;              variable ticket. 
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// output header
   console.log(header.display("Joshua", "Arrants", "Exercise 6.3"));
   console.log('\n');

// start program

// variable
var ticket = {
    // ticket properties
    ticketId: "1",
    ticketName: "Help",
    requester: "Josh Arrants"
};
// output ticket properties
console.log("id: " + ticket.ticketId + " name: " + ticket.ticketName + " requester: " + ticket.requester);


// end program