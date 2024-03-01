var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) return false;

  let start = 0;
  const hash = new Set();

  for (let end = 0; end < nums.length; end++) {
    if (end - start > k) {
      hash.delete(nums[start]);
      start++;
    }
    if (hash.has(nums[end])) return true;

    hash.add(nums[end]);
  }

  return false;
};
