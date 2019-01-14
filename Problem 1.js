"use strict"
const sum = [...Array(1000).keys()].filter(n => n % 3 === 0 || n % 5 === 0).reduce((total, n) => total + n);
console.log(sum);
