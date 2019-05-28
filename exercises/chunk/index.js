// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	var chunked=[];
	var chunk=[];
	for(var i = 0; i<array.length; i++){
		chunk=[];
		if((i+1)%size==0){
			chunk.push(array[i]);
			chunked.push(chunk);
		}
		else{
		
		chunk.push(array[i]);
	}
}
if(array.length%size!=0){
	chunked.push(chunk);
}
	return chunked;
}

module.exports = chunk;
