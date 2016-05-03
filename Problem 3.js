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
	for (let i = 1; i <= n; i++) {
	  if (isPrime(i)) {
		primes.push(i);
	  }
	}
	return primes;
}

const primeFactors = (n) => {
	let factors = []
	for (let i = 2; i <= n; i++) {
		while (n % i === 0) {
			n = n/i
			factors.push(i);
		}
	}
	return factors
}


const getHighestPF = (n) => {
	const primes = primeFactors(n)
	return primes[primes.length -1]
}
console.log(getHighestPF(600851475143));




