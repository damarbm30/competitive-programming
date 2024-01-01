function containsDuplicate(nums) {
  const seen = {};

  for (let num of nums) {
    // if value equals true, duplicate exists
    if (seen[num]) return true;
    // marks every number as seen
    seen[num] = true;
  }

  return false;
}
