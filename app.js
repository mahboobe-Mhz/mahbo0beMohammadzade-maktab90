"use strict";
//^^^^^^^^^^^^^^^^^^^^^^^سوال -3 ^^^^^^^^^^^^^^^^^
let arr = [
  {
    name: "mahboob",
    age: 30,
  },
  {
    name: "jack",
    age: 21,
  },
  {
    name: "jon",
    age: 13,
  },
  {
    name: "sina",
    age: 40,
  },
];

function sorting(arr) {
  arr.sort((a, b) => a.age - b.age);
  return arr;
}

sorting(arr);
