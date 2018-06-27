/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 26 June 2018
; Modified By: Joshua Arrants
; Description: This program outputs both the ticket and person properites
;              for the variable ticket. 
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */
// output header
console.log(header.display("Joshua", "Arrants", "Assignment 6.4"));
console.log('\n');

// start program

// variable 
var ticket = {
    // ticket properties
    id: "1",
    name:"Help",
    dateCreated: "06/26/2018",
    priority: "High",
    personId: "52960",

    person: {
    // person properties
    id: "52960",
    firstName: "Josh",
    lastName: "Arrants",
    jobTitle:"Database Administrator"

    }
};

//output ticket and person properties
console.log("Ticket "+ ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")" + ".");


// end program