function findMax(arr){
	// Enter code below
	let length = arr.length;
	maxNum = -100;

	for (let i = 0; i < length; i++){
		if (arr[i] > maxNum){
			maxNum = arr[i];
		}    
	}
	return maxNum;
}