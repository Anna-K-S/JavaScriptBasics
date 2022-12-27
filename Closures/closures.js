//A closure is a function having access to the parent scope, even after the parent function has closed.


function getFullName(firstName,lastName){
  return function(){
    return`${firstName} ${lastName}`;
  };
}

const getName = getFullName('John', 'Smith');
console.log(getName());

function updValue(val = 0){
  let x = val;
  return function(num = 0){
    return (x += num);
  };
}
const updVal = updValue(2);
const updVal2 = updValue(4);
console.log(updVal(1)); //3
console.log(updVal(0)); //3
console.log(updVal2(2)); //6
console.log(updVal2(0)); //6

function checkCred(){
  const log = 'test';
  const pas = 'somePassword';
  
  return {
    chekLog(value){
     return log === value;
    },
    checkPas(value){
     return pas === value;
    },
  };

}
const check = checkCred();
console.log(check.chekLog('test')); //true
console.log(check.checkPas(897987)); //false

function closuresEx(){
  const arrFunc = [];
  let value = '';

  for(let i = 0; i < 10; i++){
    value += i;
    arrFunc.push(function(){
      console.log(value, i);
    });
  }
  return arrFunc;
}
const res = closuresEx();
res[0]();
res[3]();

//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.