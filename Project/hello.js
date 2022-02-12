"use strict";
function map(arr, func) {
    return arr.map(func);
}
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    return b;
}
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
combine([1, 2, 3], ["Hello"]);
