"use strict"

const multiplesThreeFive = (n) => {
	let arr = []
	for (let i = 0; i < n; i++) {
		if (i % 3 === 0 || i % 5 ===0 ) {
				arr.push(i)
		}
	}
	return arr
}

const sumArray = (arr) => {
	let sum = 0
	arr.forEach((n) => {
		sum += n
	});
	return sum
}

const arr = multiplesThreeFive(1000)
const sum = sumArray(arr)

console.log(sum)

// Functional 1 liner
let fsum = Array.apply(null, Array(1000)).map((x, i) => (i % 3 === 0 || i % 5 === 0) ? i : 0).reduce((total, num) => total + num)
console.log(fsum)
