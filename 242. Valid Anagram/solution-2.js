var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hash = {};

  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let char of t) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
};
