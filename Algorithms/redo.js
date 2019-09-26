const lengthOfLongestSubstring = s => {
  let map = new Map();
  let length = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[i])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    map.set(s[j], j);
    length = Math.max(length, j - i + 1);
  }
  return length;
};

console.log(lengthOfLongestSubstring("abca"));
