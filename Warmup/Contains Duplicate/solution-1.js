function containsDuplicate(nums) {
  return [...new Set(nums)].length !== nums.length;
}
