/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   21 May 2018
; Modified By: Joshua Arrants
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

/*
    Expected output:
    
    First name
    Last name
    Middle name
    Street
    City
    State 
    Pay rate
    Hire date 
*/ 

// variable declaration and assignment goes here ...
var firstName1 = "Joshua";
var lastName1 = "Arrants";
var middleName1 = "Wayne";
var Street1 = "1607 Seaton Park";
var City1 = "Montgomery";
var State1 = "AL";
var payRate1 = 10;
var hireDate1 = new Date(2015,4,21);

var firstName2 = "Bob";
var lastName2 = "Smith";
var middleName2 = "Tyler";
var Street2 = "505 Main Street";
var City2 = "Omaha";
var State2 = "NE";
var payRate2 = 10.50;
var hireDate2 = new Date (2016,5,22);

var firstName3 = "Alexa";
var lastName3 = "Perez";
var middleName3 = "Rae";
var Street3 = "5290 Maple Rd";
var City3 = "Kearney";
var State3 = "NE";
var payRate3 = 9;
var hireDate3 = new Date (2017,2,12);

var firstName4 = "Sam";
var lastName4 = "Parker";
var middleName4 = "Travis";
var Street4 = "5111 Selma Hwy";
var City4 = "Dallas";
var State4 = "TX";
var payRate4 = 25;
var hireDate4 = new Date (1990,2,1);

var firstName5 = "McKayla";
var lastName5 = "Roth";
var middleName5 = "Ann";
var Street5 = "512 May Ave";
var City5 = "Gibbon";
var State5 = "NE";
var payRate5 = 35;
var hireDate5 = new Date (1985,6,20);

//output
console.log("First Name:",firstName1);
console.log("Last Name:",lastName1);
console.log("Middle Name:",middleName1);
console.log("Address:",Street1, City1 + ",", State1);
console.log("Pay Rate:","$",payRate1.toFixed(2));
console.log("Hire Date:",hireDate1.getMonth() + "/" + hireDate1.getDate() + "/" + hireDate1.getFullYear());

console.log("First Name:",firstName2);
console.log("Last Name:",lastName2);
console.log("Middle Name:",middleName2);
console.log("Address:",Street2, City2 + ",", State2);
console.log("Pay Rate:","$",payRate2.toFixed(2));
console.log("Hire Date:",hireDate2.getMonth() + "/" + hireDate2.getDate() + "/" + hireDate2.getFullYear());

console.log("First Name:",firstName3);
console.log("Last Name:",lastName3);
console.log("Middle Name:",middleName3);
console.log("Address:",Street3, City3 + ",", State3);
console.log("Pay Rate:","$",payRate3.toFixed(2));
console.log("Hire Date:",hireDate3.getMonth() + "/" + hireDate3.getDate() + "/" + hireDate3.getFullYear());

console.log("First Name:",firstName4);
console.log("Last Name:",lastName4);
console.log("Middle Name:",middleName4);
console.log("Address:",Street4, City4 + ",", State4);
console.log("Pay Rate:","$",payRate4.toFixed(2));
console.log("Hire Date:",hireDate4.getMonth() + "/" + hireDate4.getDate() + "/" + hireDate4.getFullYear());

console.log("First Name:",firstName5);
console.log("Last Name:",lastName5);
console.log("Middle Name:",middleName5);
console.log("Address:",Street5, City5 + ",", State5);
console.log("Pay Rate:","$",payRate5.toFixed(2));
console.log("Hire Date:",hireDate5.getMonth() + "/" + hireDate5.getDate() + "/" + hireDate5.getFullYear());

// end of program 