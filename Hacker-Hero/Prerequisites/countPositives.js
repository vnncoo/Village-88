function countPositives(arr){
  // Enter code below
  /*let length = arr.length;

  let sum = 0;

  for (i = 0; i < length; i++){
      if (arr[i] > 0){
          sum += arr[i];
      }
  }
  arr[length - 1] = sum;
  return (arr);
  */
  //I thought we're adding all positive values. So the objective is to count how many positives are in the array. GOTCHA!
  let length = arr.length;
  
  let count = 0; 
  
  for (i = 0; i < length; i++){
      if (arr[i] > 0){
          count ++;
      }
  }
  arr[length - 1] = count;
  return arr;
}
