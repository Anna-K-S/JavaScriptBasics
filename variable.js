// Var
var age = 23;
console.log(age);
age = 54;
console.log(age);

var color; //не присваиваем значение 
console.log(color);
color = 'green';
console.log(color);
var dogName = 'Sonya';
console.log(dogName);
/*JS variables names can include
letters, numbers, '$', '_' 
variables names can't start with number*/

// mainColor //camel case
// my_main_color //snake case
// my-main-color //kebab case
// MyMainColor // Pascal case

//Let
let pizza = 'Cheese';
// Variables defined with let cannot be Redeclared and must be Declared before use.

//Const 
const catName = 'Musya';
console.log(catName);
// catName = 'Pisya';
// console.log(catName); //TypeError Assignment to const variable
//Variables defined with const cannot be Redeclared and cannot be Reassigned

const user = {
  name:'Jack',
  gender:'male',
  agee:23

}
console.log(user);
user.name = 'John'; // changed value of 'name'
console.log(user);
user.hobbies = 'dance'; // adding new parameter
console.log(user);

const colors = ['red, green, white, pink'];
colors.push('blue'); //adding new element in Array with method 'push'
colors[2] = 'black'; //adding element by index
console.log(colors);
