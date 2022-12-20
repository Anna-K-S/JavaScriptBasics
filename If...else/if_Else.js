//if...else
let age = 17;
const isAdult = age >=18;
if (isAdult){
console.log('You can watch this video')
} else{
  const yearsLeft = 18 - age;
  console.log(`You are too young. You can watch this video after ${yearsLeft} years later.`)
};

let yearBirth = 2015;
let yearNow = 2022;
let s = yearNow - yearBirth;

if(s >= 16){
  console.log(' You are not baby')
} else{
  g = 16 - s;
  console.log(`After ${g} years, you\'ll be not a baby`)
}

//swich...case

let number = 200;
switch(number){
  case 300:
    console.log('-');
    break;
  case 200:
    console.log('-');
    break;
  case 100:
    console.log('correct')    
    break
  default:
    console.log('try again');
    break;  

}

const income = 0;
switch(income){
 
    case 100 :
    case 200 :
        console.log('Income is 100 or 200');
        break;
    case 300 : 
        console.log('Income is 300');
        break;
    case 0:
      console.log('You have no money');
      break;
    default:
      console.log('Other money sum.');
      break;

}