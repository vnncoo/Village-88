function findMinMax(arr){

	// Enter code below
	let length = arr.length;

	let minVal = 100;
	let maxVal = -100;

	for (i = 0; i < length; i++){
		if (arr[i] < minVal){
			minVal = arr[i];
		}
		if (arr[i] > maxVal){
			maxVal = arr[i];
		}
	}
	let minMax = [minVal, maxVal];
	// I took my time cause I thought changing the invoked value in the variables 
	//will change the value in the array that I initiated with the variable
	// I soon then realized that I must invoke the array later on 
	//so that the values of the min/maxVal are updated in the array
	return minMax;
} 