/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 02 July 2018
; Modified By: Joshua Arrants
; Description: This program creates an employee 
;              object constructor with four parameters
;              and uses an arry to populate 5 new
;              employee objects. The program uses a for loop
;              function to loop through the employees and output 
;              the employee properties. 
======
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

 // output header
console.log(header.display("Joshua", "Arrants", "Exercise 7.2"));
console.log('\n');

// start program

//function 

function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

//variable
var employees = [
    new Employee("1", " Thomas", " Edison", " Software Engineer"),
    new Employee("2", " Benjamin", " Franklin", " Programmer"),
    new Employee("3", " Nikola", " Tesla", " Project Manager"),
    new Employee("4", " Charles", " Babbage", " Product Manager"),
    new Employee("5", " Alexander", " Bell", " Business Analyst")
];


//function to loop through employess
function getEmployees(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i].id + arr[i].firstName + arr[i].lastName + arr[i].title);
    }
}

//output employees 
getEmployees(employees);

// end program