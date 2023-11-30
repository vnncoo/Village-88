function printEven4to22(){
	// Enter code below
	let startingNum = 2;
	let returNum = 0;
	for (let i = 0; i < 10; i++){
		startingNum = startingNum + 2;
		console.log(startingNum)
		returNum = returNum + startingNum;
	}
	return returNum;
}
// Could be better smh
