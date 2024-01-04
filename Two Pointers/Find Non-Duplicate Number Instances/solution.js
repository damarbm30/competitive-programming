function remove(arr) {
  const map = {};

  for (let el of arr) if (!map[el]) map[el] = true;

  return Object.keys(map).length;
}
