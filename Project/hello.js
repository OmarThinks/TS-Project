"use strict";
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
const myFn = (someArg) => {
    return someArg > 5;
};
myFn.description = 'checks if arg is greater than 5';
doSomething(myFn);
