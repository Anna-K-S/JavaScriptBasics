//Ternary Operator
const money = 150;
const cost = 100;
// money >= cost ? console.log('You can buy it') : console.log('you can not buy it');

// const canYouBuyIt = money >= cost ? 'You can buy it' : 'you can not buy it';
// console.log(canYouBuyIt);


let canYouBuy;
if(money >= cost){
  canYouBuy = 'you can buy it';
}else{
  canYouBuy = 'you can not buy it';
}
console.log(canYouBuy);

let age = 16;
const minAge = 18;
const canWatch = age < minAge ? 'Not now' : 'you can watch';
console.log(canWatch);

//nullish coalescing operator(??=)
let text = null;
// let text = 'Some text';
// let message = 'Some message';
let message1 = 'Some message';
// text ??= message;
text ??= message1;
// console.log(text); //'Some text'
console.log(text); //'Some message'
//If the left operand is 'null' and 'undefined', then the value of the right operand is assigned. Otherwise, the left operand retains its value.


const age1 = prompt('Enter your age');
const buyAlcohol = age1 >=18 ? 'You can buy alcohol' : 'You can not buy alcohol';
console.log(buyAlcohol);
alert(buyAlcohol);
