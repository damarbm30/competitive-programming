function shortestDistance(words, word1, word2) {
  let pos1 = -1,
    pos2 = -1;
  let distance = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) pos1 = i;
    if (words[i] === word2) pos2 = i;

    if (pos1 !== -1 && pos2 !== -1) distance = Math.min(distance, Math.abs(pos1 - pos2));

    if (distance === 1) break;
  }

  return distance;
}
