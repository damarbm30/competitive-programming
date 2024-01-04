function search(arr, targetSum) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[targetSum - arr[i]] !== undefined) return [hash[targetSum - arr[i]], i];
    hash[arr[i]] = i;
  }

  return [-1, -1];
}
