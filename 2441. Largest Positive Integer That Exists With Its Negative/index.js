var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);

  const negativeHash = {};

  let left = 0,
    right = nums.length - 1;

  while (nums[left] < 0) {
    negativeHash[nums[left]] = true;
    left++;
  }

  while (nums[right] > 0) {
    if (negativeHash[-nums[right]]) return nums[right];
    right--;
  }

  return -1;
};

const nums = [-1, 2, -3, 100, -90, -50, -2];

console.log(findMaxK(nums));
