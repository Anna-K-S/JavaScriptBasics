const fruits = ['apple', ['grape', 'chery'],'banana', 'orange', 'lemon'];
console.log(fruits);
console.log(fruits[1][1]);

const colors = new Array('red', 'black', 'green');
console.log(colors[2]);
colors[3] = 'white';
console.log(colors);
colors[0] = 'pink';
console.log(colors);

const numbers = [2, 3, 6, 7, 8,45];
let value;
value = numbers.length;
value = Array.isArray(numbers);
value = numbers.indexOf(3);
value = numbers.push(-34); //adding an element to the end of an array
value = numbers.pop(); //removing an element from the end of an array
value = numbers.unshift(122); //adding an element from the beginning of an array
value = numbers.shift(); //removing an element from the beginning of an array
value = numbers.slice(0,3);
value = numbers.splice(1, 4, 'one', 'two', 'three', 'four');
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
value = numbers.reverse(); //elements order in the array will be turned towards the opposite direction 
value = numbers.join(' ');
//method creates and returns a new string by concatenating all of the elements in an array
value = 'Sonya Chipizdrik from Chipizdropolis'.split(' '); // splits a string into an array of substrings
console.log(value, numbers);
//forEach
//filter
//map
//reduce
//some/every
//sort
//find
const usersInfo = [{
  firstName: 'Den',
  secondName: 'Ivanov',
  age: 34,
  gender: 'male',
  email: 'denIvanov@jopa.com',
  phoneNumber: '+7 (777) 077 45 56' 
},{
  firstName: 'Olga',
  secondName: 'Ivanova',
  age: 24,
  gender: 'female',
  email: 'olyaIvanova@jopa.com',
  phoneNumber: '+7 (777) 077 45 44' 
},
{
  firstName: 'Ivan',
  secondName: 'Petrov',
  age: 55,
  gender: 'male',
  email: 'petrovIvan@jopa.com',
  phoneNumber: '+7 (999) 077 45 56' 
}];
let info;
//forEach
//executes a provided function once for each array element
info = usersInfo.forEach((user, i, arr)=>{
  console.log(user, i, arr);
});

//filter
//creates a new array filled with elements that pass a test provided by a function.
info = usersInfo.filter(user => user.age <50);
console.log(info);

//Map
//creates a new array populated with the results of calling a provided function on every element in the calling array
info = usersInfo.map(user => user.firstName);
info = usersInfo.map(user => ({firstName: user.firstName, age: user.age}));
console.log(info);

//reduce
//Reduce the values of an array to a single value (going left-to-right)
info = usersInfo.reduce((acc, user) => {
  console.log(acc);
  return acc += user.age;
}, 0);
console.log(info);
info = usersInfo.reduce((acc, user) => {acc[user.phoneNumber] = user;
return acc;}, {});
console.log(info);

//some
//Checks if any of the elements in an array pass a test
info = usersInfo.some(user => user.gender === 'female');
console.log(info);
//every
//Checks if every element in an array pass a test
info = usersInfo.every(user => user.gender === 'male');
console.log(info);
info = usersInfo.every(user => user.age > 18);
console.log(info);

//find
//Returns the value of the first element in an array that pass a test

info = usersInfo.find(user => user.secondName === 'Petrov');
console.log(info);

//sort
//sorts the elements of an array in place and returns the reference to the same array, now sorted.
info = usersInfo.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(info);

const numbersArr = [34, 5, 10, 7, 89];
numbersArr.sort((prev, next) => {console.log(prev, next);});
numbersArr.sort((prev, next) => prev - next);
console.log(numbersArr);