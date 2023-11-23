function findMin(arr){
	// Enter code below
	let length = arr.length;
	let numMin = 100;
	for (let i = 0; i < length; i ++){
		if (arr[i] < numMin){
			numMin = arr[i];
		}
	}
	return numMin;
}