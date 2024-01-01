function checkIfPangram(sentence) {
  const mySet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));

  return mySet.size === 26;
}
