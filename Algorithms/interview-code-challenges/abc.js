// A string containing only the letters "A," "B," and "C" is given. The string can be transformed by removing
//one occurrence of "AA," "BB," or "CC."
//Transformation of the string is the process of removing letters from it, based on the rules described above.
//As long as at least one rule can be applied, the process should be repeated. If more than one rule can be
//used, any one of them could be chosen.

let sample = "ABCBCCBCBA";

let oneRule = string => {
  if (string.length <= 1) return string;
  let i = 0,
    j = 1;
  while (j < string.length) {
    if (string[i] === string[j]) {
      string = string.substr(0, i) + string.substr(j + 1);
      i = 0;
      j = 1;
    } else {
      i++;
      j++;
    }
  }
  return string;
};

//test the conditional!
