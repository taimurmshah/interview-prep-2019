/* https://www.algoexpert.io/questions/Levenshtein%20Distance */

const levenshteinDistance = (str1, str2) => {
  let edits = [];
  for (let i = 0; i <= str1.length; i++) {
    edits.push([]);
  }
  for (let r = 0; r <= str1.length; r++) {
    for (let c = 0; c <= str2.length; c++) {
      if (r === 0) edits[r].push(c);
      else if (c === 0) edits[r].push(r);
      else if (str1[r - 1] === str2[c - 1]) edits[r][c] = edits[r - 1][c - 1];
      else if (str1[r - 1] !== str2[c - 1])
        edits[r].push(
          Math.min(edits[r - 1][c], edits[r - 1][c - 1], edits[r][c - 1]) + 1
        );
    }
  }
  return edits[str1.length][str2.length];
};

// console.log(levenshteinDistance("abc", "yabd"));
