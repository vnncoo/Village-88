function swapFirstLast(arr){
  // Enter code below
  let length = arr.length;
  
  let first = arr[0];
  let last = arr[length-1];
  arr.shift();
  arr.pop();
  arr.unshift(last);
  arr.push(first);
  return arr;
}
