function maxInArray(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i + 1] = arr[i];
    }
  }
  return arr[arr.length - 1];
}

console.log(maxInArray([50, 2, 1, 20, 2, 4]));
