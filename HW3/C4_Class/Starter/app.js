"use strict"
class Dog {
  constructor(name) {
    this.name = name;
  }
  print(){
    console.log(`My name is ${this.name}`);
  }
}

var dog1 = new Dog('Alex');
dog1.print();
