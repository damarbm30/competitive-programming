var moveZeroes = function (nums) {
  let zero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]];
      zero++;
    }
  }

  return nums;
};
