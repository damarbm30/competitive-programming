function numGoodPairs(nums) {
  let pairCount = 0;
  const map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
    pairCount += map[num] || 0 - 1;
  }

  return pairCount;
}
