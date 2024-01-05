function makeSquares(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }

  return arr.sort((a, b) => a - b);
}
