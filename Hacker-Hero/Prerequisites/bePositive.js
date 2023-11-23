function bePositive(arr){
	// Enter code below
	length = arr.length;
	for (let i = 0; i < length; i++){
		if (arr[i] < 0){
			arr[i] = arr[i] * -1;
		}
	}
return arr;}
}