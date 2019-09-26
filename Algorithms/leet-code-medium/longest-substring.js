//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//this is a beautiful algorithm, really make sure you understand it.
let lengthOfLongestSubstring = s => {
  let length = 0;
  let map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    length = Math.max(length, j - i + 1);
  }
  return length;
};
