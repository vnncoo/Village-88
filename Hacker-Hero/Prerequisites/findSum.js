function findSum(arr){
	// Enter code below
	length = arr.length;
	let sum = 0;
	for (let i = 0; i < length; i ++){
		sum = sum + arr[i];
	}
	return sum;
}