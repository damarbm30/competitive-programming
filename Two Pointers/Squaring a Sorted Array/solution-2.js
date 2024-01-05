function makeSquares(arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;
  let highestSquare = right;
  let squares = Array(n).fill(0);

  while (left <= right) {
    const leftSq = arr[left] * arr[left];
    const rightSq = arr[right] * arr[right];

    if (leftSq >= rightSq) {
      left++;
      squares[highestSquare] = leftSq;
    } else {
      right--;
      squares[highestSquare] = rightSq;
    }

    highestSquare -= 1;
  }

  return squares;
}
