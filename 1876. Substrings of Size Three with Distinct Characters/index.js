var countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const substr = s.substring(i, i + 3);
    const seen = new Set(substr);

    if (seen.size === 3) count++;
  }

  return count;
};
