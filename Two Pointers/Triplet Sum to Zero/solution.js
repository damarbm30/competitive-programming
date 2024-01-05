function searchTriplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    const target = -arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (target > sum) {
        left++;
      } else if (target < sum) {
        right--;
      } else {
        triplets.push([-target, arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }

  return triplets;
}
