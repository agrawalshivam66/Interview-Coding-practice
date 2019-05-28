// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	var reversed=0;
	var flag=0;
	if (n<0){
		n=-n;
		flag=1;
	}

	while(n>=1){
		var last = n % 10;
		n = parseInt(n / 10);
		reversed*=10;
		reversed+=last;
	}
	if (flag==1){
		reversed=-reversed;
	}

	return reversed;
}

module.exports = reverseInt;
