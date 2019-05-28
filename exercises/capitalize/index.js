// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var cap;
	cap = str[0].toUpperCase();
    for (var i = 1; i < str.length; i++){
        if(str[i]==" "){
        	cap+=str[i];
            cap+=str[i+1].toUpperCase();
            i+=1
        }
        else{
        	cap+=str[i];
        }
    }
    return cap;
}

module.exports = capitalize;
