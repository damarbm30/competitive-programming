function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = s.split("");

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && vowels.indexOf(s[left]) === -1) left++;
    while (left < right && vowels.indexOf(s[right]) === -1) right--;

    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s.join("");
}
