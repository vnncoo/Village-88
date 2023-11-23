function noNeg(arr){
	// Enter code below
	let length = arr.length;

	for (let i = 0; i < length; i++){

		if (arr[i] < 1){

		        arr[i] = 0;

		}
	}
	return arr;
}