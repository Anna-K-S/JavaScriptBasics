//JS falsy values
//0, '', undefined, null, NaN 

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean(23)); //true
console.log(Boolean('Hi')); //true
console.log(Boolean('0')); //true


const age = 3;
if(age){
  console.log('the person was born');
}else{
  console.log('person was not born yet');
}

let y = new Boolean(5);
console.log(y);


if(age){
  console.log('+')
}else{
  console.log('-');
}


//boolean logical operators

//AND(&&)

console.log(true && true); //true
console.log(true && false); //false
console.log(false && false);//false

//OR(||)
console.log(true || true); //true
console.log(true || false);//true
console.log(false || false);//false

//NOT
console.log(!true); //false
console.log(!false); //true


// const hasMoney = true;
// const isAdult = false;

// if(hasMoney && isAdult){
//   console.log('you can buy the drink')
// }else{
//   console.log('you can not bue the drink');
// }


// const hasMoney =false;
// const isWithParents = true;

// if(hasMoney || isWithParents){
//   console.log('you can buy the juice')
// }else{
//   console.log('you can not buy the juice');
// }


const hasMoney = true;
const isAdult = false;

if(hasMoney && !isAdult){
  console.log('you can buy the drink')
}else{
  console.log('you can not bue the drink');
}