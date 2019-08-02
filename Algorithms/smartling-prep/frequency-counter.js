//write a function called sameFrequency.
let sameFrequency = (one, two) => {
  one = one.toString();
  two = two.toString();
  if (one.length !== two.length) return false;
  let count = {};
  let digit;
  for (let i = 0; i < one.length; i++) {
    digit = one[i];
    if (!count[digit]) {
      count[digit] = 1;
    } else ++count[digit];
  }
  for (let i = 0; i < two.length; i++) {
    digit = two[i];
    if (!count[digit]) return false;
    else --count[digit];
  }
  return true;
};

//Implement a function called areThereDuplicates which
//accepts a variable number of arguments, and checks
//whether there are any duplicate among the arguments
//passed in.
let areThereDuplicates = () => {
  if (arguments.length === 0) return false;
  let count = {};
  for (let i = 0; i < arguments.length; i++) {
    current = arguments[i];
    if (count[current]) return true;
    else count[current] = 1;
  }
  return false;
};
