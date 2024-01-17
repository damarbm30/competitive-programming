var groupAnagrams = function (strs) {
  const result = new Map();

  strs.forEach((str) => {
    const sorted = str.split("").sort().join("");
    if (!result.has(sorted)) result.set(sorted, [str]);
    else result.set(sorted, [...result.get(sorted), str]);
  });

  return [...result.values()];
};
