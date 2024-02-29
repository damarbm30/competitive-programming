var maxArea = function (height) {
  let p1 = 0,
    p2 = height.length - 1;
  let maxCap = 0;

  while (p1 < p2) {
    const w = p2 - p1;
    const h = Math.min(height[p1], height[p2]);
    maxCap = Math.max(maxCap, w * h);

    if (height[p1] < height[p2]) p1++;
    else p2--;
  }

  return maxCap;
};
