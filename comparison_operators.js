const x = 10;
const y = 3;
let isXMoreThanY = x > y;


console.log(isXMoreThanY);
//equal to
let a = 3;
let b = 7;
let c = a == b;
console.log(c); //false
// Increment
let d = 4;
let e = ++d;
console.log(e); //5

// Decrement
let d1 = 3;
let f = --d1;
console.log(f); //2

//greater/less than or equal to

const g = 3;
const h = 5;
let res = g <= h; //true
let res1 = g >= h; //false

console.log(res, res1);

//	not equal
let k = d != b; //true
console.log(k);

//	not equal value or not equal type
let v = g !== d1; //true

const text = 'Hi';
const text2 = 'Hello';
let res2 = text !== text2; //true
let res3 = text !== 'Hi'; //false
console.log(v, res2, res3);

//equal value and equal type
let res4 = g === 3; //true
let res5 = g === '3'; //false
console.log(res4, res5);

//Operator Precedence

const n = 2 + 10 / 2; //7
let res6 = (2 + 10) / 2; //6
const m = 10 + n >= 15 - n; //true
console.log(n, res6,m);

let u = 5;
u += 6; //11
u -= 4; //7
u *= 2; //14
u /= 7; //2
u++;
console.log(u);