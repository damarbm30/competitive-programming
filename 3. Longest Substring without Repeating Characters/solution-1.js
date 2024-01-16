var lengthOfLongestSubstring = function (s) {
  const hash = new Map();
  let start = 0,
    maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    while (hash.has(s[i])) {
      hash.delete(s[start]);
      start++;
    }

    hash.set(s[i], true);

    maxCount = Math.max(maxCount, i - start + 1);
  }

  return maxCount;
};
