"use strict"

const fibEven = (maxNum) => {
	let fib = [0, 1]
	let feSum = 0;
	for (let i = 1; i < 40; i++) {
		const fibCurr = fib[i] + fib[i-1]
		fib.push(fibCurr)
		if (fibCurr % 2 === 0 && fibCurr <= maxNum) {
			feSum += fibCurr
		}
	}
	return feSum
}

console.log(fibEven(4000000));