// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var dict = {};
	let max = 0;
    let maxdict = '';
	for(var i = 0; i< str.length; i++){
		if (dict[str[i]]!=null){
			dict[str[i]]+=1;
		}
		else{
			dict[str[i]]=1;
		}
	}

	for (let char in dict) {
	    if (dict[char] > max) {
	      max = dict[char];
	      maxdict = char;
	    }
  }
  
  return maxdict
	console.log(dict);
}

module.exports = maxChar;
