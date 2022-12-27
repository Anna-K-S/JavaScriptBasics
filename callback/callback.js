const arr = ['Den', 'Olya', 'Sonya', 'Kolya'];
let names;
names = arr.map(name => name.length);
console.log(names);

const names1 = ['Den', 'Olya', 'Sonya', 'Kolya'];
function mapArr(arr,fn){
  const res = [];
  for(let i = 0; i < arr.lenght; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLenght(el){
  console.log(el);
  return el.lenght();
}

function nameToUpperCase(el){
  return el.toUpperCase();
}

const result = mapArr(names, nameLenght); 
const res2 = mapArr(names, nameToUpperCase);
console.log(result);
console.log(res2);

const doHomerwork = (subject) => {console.log(`Starting my ${subject} homerwork`);
};
doHomerwork('math');

const doHomerwork1 = (subject, callback) => {console.log(`Starting my ${subject} homerwork`);
callback();
};
doHomerwork('math', () => {
  console.log('Finished my hw');
});

function greeting(firstName){
  return function(lastName){
    return `Hello, ${firstName} ${lastName}`
  };
};
const test = greeting('Sonya');
const fullName = test('Chipiz');
console.log(fullName);
const fullName1 = greeting('Sonya')('Chipiz');
console.log(fullName1);
function question(job){
  if(job === 'dev'){
    return function(name){
      return`${name}, what is JS?`;
    };
  }else if(job === 'teacher'){
return function(name){
  return `${name}, what subject do you teach?`;
};
  }
}
const devQue = question('dev');
console.log(devQue('Sonya'));
const teaQue = question('teacher');
console.log(teaQue('Olya'));

function question(job){
  const jobDic = {
    dev:'what is JS?`',
    teacher: 'what subject do you teach?'
  };
  return function(name){
  return `${name}, ${jobDic[job]}`;
};
  }

  //keyword this
  function getYear(aa = []){
    console.log(aa + this.year);
    return this;
  }
  function getName(a = ' *'){
    console.log(a + this.name);
    return this;
  }

  function getThis(){
    console.log(this);
  }
  getThis();
  console.log(window.getThis);

  const prod1 = {
    name: 'Intel',
    price: 100,
    year: 2020,
    getPrice: function(){
    console.log(this.price);
    },
    getYear,
    info: {
      information: ['2.3ghz'],
      getInfo: function(){
        console.log(this.information);
      },
    },
  };
  prod1.getPrice();
  prod1.info.getInfo();
  prod1.getYear();

  const prod2 = {
    name: 'AMD',
    price: 50,
    year : 2012,
    getYear,
    getName(){
      console.log(this.name);
    }
  };
 
prod2.getYear(); //2012
prod2.getName(); //AMD
prod1.getName = prod2.getName;
prod1.getName(); //Intel
prod2.getPrice = prod1.getPrice;
prod2.getPrice(); //50

let str =  'Sonya Chipizdrik';
const reversStr = str
.split('')
.reverse()
.join('');
console.log(reversStr); //kirdzipihC aynoS


const prod3 = {
  name:'ARM',
  price: 500,
  year: 2021,
  getName,
  getYear
};
// prod3
// .getName() //undefined
// .getYear(); //undefined.getYear()

prod3
.getName() //prod3
.getYear(); //prod.getYear()

const prod4 = {
  name: 'AGR',
  year: 2001
}
//.call takes arguments separately
getName.call(prod4, '**');

//.apply takes arguments as an array
getYear.apply(prod4, ['***']);

