function firstPlusLength(arr){
	// Enter code below
	let length = arr.length;
	
	let sum = 0;
	
	for (i = 0; i < length; i++){
		// secVal/second value is index of 1
		let secVal = arr[1];
		if (arr[i] > secVal){
			console.log(arr[i]);
	        	sum += arr[i];
		}
	}   
	return sum;
}
