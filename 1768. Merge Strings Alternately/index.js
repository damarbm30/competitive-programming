var mergeAlternately = function (word1, word2) {
  let i = 0,
    result = "";

  while (i < Math.max(word1.length, word2.length)) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
    i++;
  }

  return result;
};
