"use strict";
const product1 = {
    id: 1, name: "Hi"
};
const product2 = {
    id: 1, name: "Hi", description: "Good Product"
};
const myFunction = (p) => {
    console.log(p);
};
myFunction(product1);
myFunction(product2);
