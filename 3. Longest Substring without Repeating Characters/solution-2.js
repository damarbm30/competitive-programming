var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let start = 0,
    maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[start]);
      start++;
    }

    set.set(s[i]);

    maxCount = Math.max(maxCount, i - start + 1);
  }

  return maxCount;
};
