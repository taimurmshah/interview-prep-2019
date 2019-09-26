const maxArea = height => {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (i < j) {
    area = Math.max(area, calculateArea(i, j, height[i], height[j]));
    if (height[i] < height[j]) i++;
    else if (height[i] > height[j]) j--;
    else {
      j--;
      i++;
    }
  }
  return area;
};

let calculateArea = (i, j, left, right) => {
  return (j - i) * Math.min(left, right);
};

console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));
