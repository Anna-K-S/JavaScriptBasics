//The destructuring in JavaScript expression make it possible to unpack values from arrays, or properties from objects, into distinct variables.
const user = {
  firstName : 'John',
  lastName : 'Smith',
  age: 40,
  info: {
    work: 'Ya',
    skills: ['html, css'],
  },
}

const{firstName: name1, lastName, age = 30} = user;
const { info: {work, skills}} = user;

console.log(firstName, lastName, age);
console.log(name1);
console.log(work, skills);

const color = ['red', 'black', 'blue'];
const [r, b, blue, g ='green'] = color;
console.log(r, b, blue, g);

const fruits = ['apple', 'banana', 'orange'];
const [n1, ...oterN] = fruits;
console.log(n1, oterN);

const nestedArr = [ 'hello', ['key', 'value']];
const [, [key, value] ] = nestedArr;
console.log(key, value);

const [...newN] = fruits;
const newN2 = [...fruits];
console.log(newN);
console.log(...newN2);

const colorFr = [...color, ...fruits];
console.log(colorFr);

const newUser = {...user, age: 30};
console.log(newUser);

const { info:{
  skills:[html, css]
},
} = newUser;
console.log(html, css);

function myFun({
  lastName,
  firstName,
  age,
  info:{skills} = {}
} = {}){
console.log(lastName, firstName, age, skills);
}

// function myFun({lastName = '0', firstName = '*', age = 67} = {}){
//   console.log(lastName, firstName, age);
//   }
// myFun();
myFun(newUser);

function foo(x, y, ...others){
  const[...args] = arguments;
  console.log(args);
  console.log(others);
}
foo(1,2, 5, 6, 7, 88);

const numbers = [1,2];
function foo2 (x, y){
  console.log(x, y);
}

foo2(...numbers);