"use strict"

const palindromeFinder = (high, low) => {
	let pal = 0
	for (let i = high; i > low; i--) {
		for (let j = high; j > low; j--) {
			const mult = i*j
			const arr = mult.toString().split("")
			const arrSliceA = arr.slice(0, 3)
			const arrSliceB = arr.slice(3, 6)
			if (arrSliceB.reverse().join('') === arrSliceA.join('')) {
				if (mult > pal) {
					pal = mult
				}
			}
		}
	}
	return pal
}


console.log(palindromeFinder(999, 100));