"use strict"

const gcd = (a, b) => {
	if (b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

const lowestMultiple = (a, b) => {
	return (a * b / gcd(a, b));
}

const lowestMultpleArray = (arr) => {
	if(arr.length === 2){
		return lowestMultiple(arr[0], arr[1]);
	} else {
		var arr0 = arr[0];
		arr.shift();
		return lowestMultiple(arr0, lowestMultpleArray(arr));
	}
}

const buildArray = (num) => {
	var arr = [];
	for(var i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

var arr = buildArray(20);
console.log(lowestMultpleArray(arr));
