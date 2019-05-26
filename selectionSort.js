function selectionSort(arr) {
  let min, temp;
  for (let i = 0; i < arr.length; i++) {
    //Store the first element as the smallest value
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      //Compare this item to the next element in the array until you find a smaller value
      if (arr[j] < arr[min]) {
        //update value of smallest variable if there is one
        min = j;
      }
    }
    //if the min is not the value you initially started with, then swap
    //if not then that means elements are already in order
    if (i !== min) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
