'use strict'
class Dog {
  constructor(name) {
    this.name = name;
  }
  print(){
    console.log(`My name is ${this.name}`);
  }
}

class GoodDog extends Dog{
  constructor(name, color){
    super(name);
    this.color = color;
  }
  print(){
    super.print();
    console.log(`My name is ${this.name}, and my color is ${this.color}`);
  }
}

var dog1 = new GoodDog("Alex","black");
dog1.print();
