var isPalindrome = function (s) {
  if (s.length === 0) return true;
  const result = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0,
    right = result.length - 1;

  while (left < right) {
    if (result[left] !== result[right]) return false;
    left++;
    right--;
  }

  return true;
};
