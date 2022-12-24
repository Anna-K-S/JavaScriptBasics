function printText(){
  console.log('Some text');

}
printText();

function colorizer(item, color, colorCode){
// console.log(item, color, colorCode);
const colorizerItem = `The ${item}
is ${color}. The code of the color is ${colorCode}.`;
// console.log(colorizerItem);
return colorizerItem;

}
const messageFromColorize = colorizer('apple','red', 99);
console.log(`We have the following message: ${messageFromColorize}`);
const messageFromColorize2 = colorizer('dog', 'brown',2364);
console.log(`We have the following message: ${messageFromColorize2}`);

printText(56);

let car = {
  color1 : 'red',
  };

let car2 = {
  color1: 'green'
};

colorReset();

console.log(car.color1);
car.color1 = 'black';
console.log(car.color1);

function colorReset(){
  car.color1 = 'red';
  console.log(car.color1);
}
colorChange(car);
colorChange(car2);

function colorChange(theCar){
  theCar.color1 = 'blue';
}
console.log(`Car: ${car.color1}`);
console.log(`Car2: ${car2.color1}`);

let car3 = {
  maxSpeed: 240,
};
console.log(`Max speed of the car was ${car3.maxSpeed}`);

speedChange();
function speedChange(){
  car3.maxSpeed = 300;
  console.log(`Max speed of the car became ${car3.maxSpeed}`);
}

multiplicationOfNumbers(2,4);
function multiplicationOfNumbers(num1, num2){
  const result = num1 * num2;
  console.log(result);
}
//Func Return
console.log(myFunction(4, 3));   

function myFunction(a, b) {
  return a * b;            
}

//Func.Declaration vs. Expression

//Declaration
console.log(getAge(1996, 2022));
function getAge(birthYear, yearNow){
return yearNow - birthYear;
}

//Expression
 let myAge = function(birthYear, yearNow){
  return yearNow - birthYear;
 }
 console.log(myAge(1996, 2022));

 //anonymous function
  let color = getColor;
 color();
 color('green');

 function getColor(color = 'red'){
  if(color == 'ret'){
    return;
  }
  console.log(color);

 }

 //Arrow Funcrions 
const subtcaction = function(number1, number2){
  return number1 - number2;
}
const result = subtcaction(14,56);
console.log(result);
console.log(subtcaction(14,56));

const subtcaction1 = (number1, number2) => number1 - number2;

const result1 = subtcaction1(14,56);
console.log(result1);
console.log(subtcaction1(14,56));


const canBuyAlcohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPersonAdult = age >= 21 ? true: false;
  return isPersonAdult;
}
console.log(canBuyAlcohol(1996,2022));
console.log(canBuyAlcohol(2010,2022));

//anonymous function
let anonFunc= function(){
  console.log('Anon func1');
}
anonFunc();

let anonFunc2 = function fun(){
  console.log('Anon func2');
}
anonFunc2();

(function(){
  console.log('Anon func3');
})();

let anonFunc4 = () => console.log('Anon func 4');
anonFunc4();

let anonFunc5 = () => 'Anon func 5';
console.log(anonFunc5());