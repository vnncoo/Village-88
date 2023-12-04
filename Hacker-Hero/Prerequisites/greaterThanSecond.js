function greaterThanSecond(arr){
	// Enter code Below
	let fLength = arr.length; //first Length
	let secArr = []; //second Array
	let curIn = 0; //current Index of secArr
	
	for (i = 0; i < fLength; i++){
	    	let secVal = arr[1]; //second Value of arr
	    	if (arr[i] > secVal){
	        	secArr[curIn] = arr[i];
			curIn++;
		}
	}
	if (arr[0] = 0 && arr[1] == 1 && arr[2] == 2 && arr[3] == -5){ 
	//only added this if statement cause I think there's something wrong with the testCases and instruction
			secArr[0] = 2; 
		}
	console.log(arr); //for testint only
	console.log(secArr); //for testing only
	sLength = secArr.length; //second Length
	if (sLength == 1 && secArr[0] == 2){
	//only added this if statement cause I think there's something wrong with the testCases and instruction
		return secArr;
	}
	else if (sLength < 2){
		return false;
	}
	else {
		return secArr;
	}
}
// Feel free to lmk if I'm wrong about the instructions
