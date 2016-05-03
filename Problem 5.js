//function gcd(a, b) {
//	var t;
//	while (b !=0) {
//		t = b;
//		b = a % b;
//		a = t;
//	}
//	return a;
//}

function gcd(a, b) {
	if (b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

function lowestMultiple(a, b) {
	return (a * b / gcd(a, b));
}

function lowestMultpleArray(arr) {
	if(arr.length === 2){
		return lowestMultiple(arr[0], arr[1]);
	} else {
		var arr0 = arr[0];
		arr.shift();
		return lowestMultiple(arr0, lowestMultpleArray(arr));
	}
}

function buildArray(num) {
	var arr = [];
	for(var i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

var arr = buildArray(20);
console.log(arr);

console.log(lowestMultpleArray(arr));
