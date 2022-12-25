//while
let i = 1;
while(i < 10){
console.log(i);
i++;
}

let i1 = 0;
while(i1++ < 10){
  console.log(i1);
}

let i2 = 10;
while(i2--){
  console.log(i2);
}

//do while

do {
  console.log('Hello');
} while(i < 5);

do{ 
  console.log(i);
  i++
} while(i <= 10);

//for
for (let t = 0; t < 10; t++){
  if ( t == 5){
    continue;
  }
  console.log(t);
}

let str = 'Hello';
let res = '';
for (let y = 0; y < str.length; y++){
  console.log(str[y], '!');
res += str[y] + '*';
}
console.log(res);

let colors = ['red', 'green', 'blue', 'black']; 
for(let r = 0; r < colors.length; r++){
  console.log(colors[r]);
  colors[r] = colors[r].toUpperCase();
}
console.log(colors);

const users = [
  {
    name1: 'Den',
    age: 30
  },
  {
    name1: 'Olga',
    age: 15
  },
  {
    name1: 'Jora',
    age: 25
  },
  {
    name1: 'Kate',
    age: 35
  }
];


const usersObj = {};
for (let d = 0; d < users.length; d++){
  console.log(users[d].age);
  usersObj[users[d].name1] = users[d];
}
//for in
for (const key in usersObj) {
 console.log(key);
 console.log(usersObj[key]);
}
console.log(usersObj);
console.log(usersObj['Den']);

//for in

const user = {
  name: 'Sonya',
  age: 7
};
for (const key in user) {
  console.log(key);
  console.log(user[key]);
}

//for of
for (const value of users) {
  console.log(value);
}

