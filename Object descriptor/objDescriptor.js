/*
Object.defineProperty(obj, prop, descriptor)
obj - the object on which to define the property

prop - the name or Symbol of the property to be defined or modified

descriptor - the descriptor for the property being defined or modified. */

const car = {
  brand: 'BMW',
  year: 2020,
   get age(){
    return `Car is ${this.year} year`;
  },
};

Object.defineProperty(car, 'year', {
  configurable:false, 
//if true, then the property can be removed and also changed later with new calls to defineProperty. The default is false.
  enumerable:false,
  //if true, then the property is looked up in the for..in loop and the Object.keys() method. The default is false.
  writable: false,
  //  // – property value can be changed if true. The default is false.
  
});

const user = {
  name: 'John',
  age: 25,
  bYear: 1990,
 
};

Object.defineProperty(user, 'name', {
  configurable: true,
  enumerable: false,
  writable: true
});

Object.defineProperty(user, 'bYear', {
  value: 1990,
  writable: false,
  configurable: false
});

Object.defineProperty(user, 'nameAge', {
  get: function(){
    return `name ${this.name} age ${this.age}`;
  },
});
 

