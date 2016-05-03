"use strict"

const isEven = (n) => n % 2 === 0

const isPrime = (n) => {
  if (!isEven(n) || n === 2) {
    for (let i = 3; i*i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const createPrimeArray = (n) => {
	let primes = []
	let i = 0
	while (primes.length <= n) {
		if (isPrime(i)) {
			primes.push(i);
		}
		i++
	}
	return primes;
}

const arr = createPrimeArray(10001)

const getLastPrime = (arr) => arr[arr.length-1]

console.log(getLastPrime(arr));
