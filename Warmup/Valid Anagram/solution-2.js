function isAnagram(s, t) {
  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of t) {
    charCount[char] = (charCount[char] || 0) - 1;
  }

  return Object.values(charCount).every((count) => count === 0);
}
