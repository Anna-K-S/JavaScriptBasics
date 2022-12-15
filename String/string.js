let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
let age = 25;
const greeting = 'Hello';


result = 'Jack'; //Jack
result = 'Jack' + ' ' + 'Brown'; //Jack Brown
result = firstName + space + lastName; //Jack Brown
result = greeting + space + 'My name is' + space + firstName + ' ' + lastName + ". I'm " +  age + 'years old';

//Properties and methods

result = 'Hello!'.length; //6
result = firstName.concat(space, lastName); // Jack Brown

result = result.toLocaleUpperCase; // JACK BROWN
result = lastName.toLocaleLowerCase; //brown

result = firstName[0]; //J
result = 'Hello!'.indexOf('e'); //[1]
result = firstName.charAt(0); //J
const longString = 'Hi, I\'m long String';
result = longString.charAt(longString.length -1); //g

result = firstName.slice(1,3); //ac
result = firstName.slice(-3);
//slice() - extracts a part of a string and returns the extracted part in a new string.

result = lastName.substring(1,3); //ro
//is similar to slice()
//The difference is that start and end values less than 0 are treated as 0 in substring()

result = longString.replace('long', 'short');
//method replaces a specified value with another value in a string
result = longString.split(' '); //['Hi,', "I'm", 'long', 'String']
//converted to an array

result = longString.includes('long'); //true
//return true or false
console.log(result);

//Template Literals(Strings)
const brand = 'Volvo';
const model = 'V90';
const color = 'black';
const year = '2010';

let carHtml;

//before ES6
// carHtml = '<h3>' + 'Car Description' + '</h3>' + 
// '<ul>' +
// '<li>Brand: ' + brand + '</li>' +
// '<li>Model: ' + model + '</li>' +
// '<li>Color: ' + color + '</li>' +
// '<li>Year: ' + year + '</li>'
'</ul>';
//New approach
carHtml = `
<h3>Car Description</h3>
<ul>
<li>Brand: ${brand}</li>
<li>Model: ${model}</li>
<li>Color: ${color}</li>
<li>Year: ${year}</li>
<li>Doors: ${getDoorsNumber()} </li>
</ul>
`

function getDoorsNumber(){
  return 4;
}
document.body.innerHTML = carHtml;
