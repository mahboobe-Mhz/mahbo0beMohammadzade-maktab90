"use strict";
//^^^^^^^^^سوال - 1 ^^^^^^^^^^^^^^^^^
let user = {
  name: "John",
  age: 30,

  sayHello() {
    console.log(`Hello ${this.name}`);
  },
};

user.sayHello();
