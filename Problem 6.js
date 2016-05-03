"use strict"

const square = (n) => n * n

const sumOfNum = (n) => {
	let sum = 0
	for (let i = 0; i <= n; i++) {
		sum += i
	}
	return sum
}

const sumOfSquares = (n) => {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		sum += square(i)
	}
	return sum
}

const sumSqDiff = (n) => square(sumOfNum(n)) - sumOfSquares(n)

console.log(sumSqDiff(100));
