"use strict"

const isEven = (n) => n % 2 === 0

const isPrime = (n) => {
	if (!isEven(n)) {
		for (let i = 3; i*i <= n; i++) {
			if (n % i === 0) {
				return false
			}
		}
		return true
	} else {
		return false
	}
}

const sumPrimes = (n) => {
	let sum = 2
	for (let i = 3; i <= n; i++) {
		if (isPrime(i)) {
			sum += i
		}
	}
	return sum
}

console.log(sumPrimes(2000000));