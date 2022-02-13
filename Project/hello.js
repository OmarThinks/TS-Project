"use strict";
let myShape = { style: "My Style" };
console.log(myShape);
myShape = Object.assign(Object.assign({}, myShape), { style: "Hi" });
console.log(myShape);
