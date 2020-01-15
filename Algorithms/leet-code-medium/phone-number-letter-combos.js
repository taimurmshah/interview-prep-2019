//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

let letterCombinations = digits => {
  if (digits.length === 0) return [];
  let dict = {};
  dict["2"] = "abc";
  dict["3"] = "def";
  dict["4"] = "ghi";
  dict["5"] = "jkl";
  dict["6"] = "mno";
  dict["7"] = "pqrs";
  dict["8"] = "tuv";
  dict["9"] = "wxyz";

  let results = [];

  //i think idx means index, but what's pfx? prefix?
  const dfs = (prefix, index) => {
    let digit = digits[index];
    if (digit in dict) {
      //if it's the last number in the argument passed in
      dict[digit].split("").forEach(letter => {
        if (index === digits.length - 1) {
          results.push(prefix.concat(letter).join(""));
        } else {
          dfs(prefix.concat(letter), index + 1);
        }
      });
    }
  };

  dfs([], 0);

  return results;
};

function segment(x, array) {
  if (x === 1) return Math.max(...array);
  let values = [];
  let i = 0,
    j = x + i - 1;
  while (j < array.length) {
    let subArray = array.slice(i, j + 1);
    let minVal = 0;
    values.push(Math.min(...subArray));
    i++;
    j++;
  }
  return Math.max(...values);
}
