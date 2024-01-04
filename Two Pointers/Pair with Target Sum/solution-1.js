function search(arr, targetSum) {
  let p1 = 0,
    p2 = arr.length - 1;

  while (p1 < p2) {
    if (arr[p1] + arr[p2] > targetSum) p2--;
    if (arr[p1] + arr[p2] < targetSum) p1++;
    if (arr[p1] + arr[p2] === targetSum && p1 < p2) return [p1, p2];
  }

  return [-1, -1];
}
