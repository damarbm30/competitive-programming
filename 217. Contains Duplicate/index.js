var containsDuplicate = function (nums) {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) return true;
    hash[num] = true;
  }

  return false;
};
