var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    const targetSum = -nums[i];

    let left = i + 1,
      right = nums.length - 1,
      tempArr = [];

    while (left < right) {
      if (nums[left] + nums[right] < targetSum) left++;
      else if (nums[left] + nums[right] > targetSum) right--;
      else {
        if (JSON.stringify([nums[i], nums[left], nums[right]]) !== JSON.stringify(tempArr)) {
          result.push([nums[i], nums[left], nums[right]]);
          tempArr = [nums[i], nums[left], nums[right]];
        }
        left++;
        right--;
      }
    }
  }

  return result;
};
