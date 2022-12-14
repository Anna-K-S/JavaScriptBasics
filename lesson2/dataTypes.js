/* Primitive data types:
String
Number
Boolean
Null
Undefined
Symbol */
//Primitive data types
let x = 'some string';
console.log(x);

x = 3.4;
console.log(x);

//String 
const someText = 'some text';
console.log(typeof someText); //String

//Number
const someNumber = 45;
console.log(typeof someNumber); // Number 

const someNumber1 = 34.5;
console.log(typeof someNumber1); //Number 

//Boolean 
const someBoolean = true;
console.log(typeof someBoolean); //True

const someBoolean1 = false;
console.log(typeof someBoolean); //False

// Null

const someNull = null;
console.log(typeof someNull); //Object (null) ошибка js 

// Underfined

const someUnderfined = undefined;
console.log(typeof someUnderfined); //Underfined 

// Symbol

const someSymbol = Symbol();
console.log(typeof someSymbol); // Symbol




/* Reference data tytypes:
Array
Object literal
Function
Date */

//Array

const someArray = [1, 2, 3, 4, 5];
console.log(typeof someArray); //Object

// Object Literal 
// JavaScript objects are written with curly braces {}
const someObjectLiteral = {
  first: '12',
  second:23,
  third:'something'
};
console.log(typeof someObjectLiteral); // Object

//Function

const someFunction = new Function();
console.log(typeof someFunction); //Function

//Date
const someDate = new Date();
console.log(typeof someDate); // Object



let g = 15 + 'String';
console.log(typeof g); // string 
//When adding a number and a string, JavaScript will treat the number as a string.

let a = 378980548094080458854058390409374538485458945;
console.log(typeof a); // Number

let b = BigInt('378980548094080458854058390409374538485458945');
console.log(typeof b);  // BigInt('')
//Is a new data type that can be used to store integer values that are too big
