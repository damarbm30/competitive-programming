var topKFrequent = function (nums, k) {
  const result = [];
  const hash = {};

  for (let num of nums) hash[num] = (hash[num] ?? 0) + 1;
  const sortedHash = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  sortedHash.forEach((el) => result.push(el[0]));

  return result.slice(0, k);
};
