// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var reversed="";
	var i=0;
	for(i = str.length-1;i>=0;i-- ){
		reversed+=str[i]
	}
	return reversed;
}

module.exports = reverse;
