// const countSubstring = (s, ss) => {
//   let matches = s.match(new RegExp(ss, "g"));
//   return matches.length <= 1 ? 0 : matches.length;
// };
//
// const countLetters = (s, limit) => {
//   let dict = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!dict[s[i]]) dict[s[i]] = 1;
//     else dict[s[i]] += 1;
//   }
//   return Object.keys(dict).length <= limit;
// };
//
// const maxFreq = (s, maxLetters, minSize, maxSize) => {
//   debugger;
//   if (s.length <= minSize) return 0;
//   let res = 0;
//   for (let i = 0; i <= s.length - minSize; i++) {
//     let count = minSize;
//     while (count <= maxSize) {
//       let ss = s.substring(i, i + count);
//       count++;
//       if (!countLetters(ss, maxLetters)) break;
//       res = Math.max(res, countSubstring(s, ss));
//     }
//   }
//   return res;
// };
//
// console.log("Output should be 2");
//
// const maxFreq2 = function(s, maxLetters, minSize, maxSize) {
//   //creates a map
//   const occurrences = new Map();
//
//   for (let i = 0; i <= s.length - minSize; i++) {
//     const string = s.substr(i, minSize);
//     if (new Set(string).size <= maxLetters) {
//       occurrences.set(
//         string,
//         occurrences.has(string) ? occurrences.get(string) + 1 : 1
//       );
//     }
//   }
//   let array = Array.from(occurrences);
//   debugger;
//   return (Array.from(occurrences).sort((a, b) => b[1] - a[1])[0] || [])[1] || 0;
// };
//
//

// const maxFreq = (s, maxLetters, minSize, maxSize) => {
//   let tracker = new Map();
//   for (let i = 0; i <= s.length - minSize; i++) {
//     const ss = s.substring(i, i + minSize);
//     if (new Set(ss).size <= maxLetters) {
//       tracker.set(ss, tracker.has(ss) ? tracker.get(ss) + 1 : 1);
//     }
//   }
//   let res = Array.from(tracker).sort((a, b) => b[1] - a[1])[0] || [];
//
//   return res[1] || 0;
// };

const maxFreq = function(s, maxLetters, minSize, maxSize) {
  debugger;
  let chs = new Array(256);
  chs.fill(0);
  let nq = 0,
    res = 0,
    l = 0,
    cnt = new Map();

  for (let r = 0; r < s.length; r++) {
    if (chs[s.charCodeAt(r)]++ === 0) ++nq;
    if (minSize < r - l + 1) {
      if (--chs[s.charCodeAt(l++)] === 0) --nq;
    }

    if (minSize === r - l + 1 && nq <= maxLetters) {
      let curStr = s.substring(l, r + 1);
      let t = (cnt.get(curStr) || 0) + 1;
      cnt.set(curStr, t);
      if (t > res) res = t;
    }
  }
  return res;
};
//
// console.log(maxFreq("aababcaab", 2, 3, 4));
// console.log(maxFreq("abcde", 2, 3, 3));
// console.log(maxFreq("bccaabac", 2, 2, 2));
