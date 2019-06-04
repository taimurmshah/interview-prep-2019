function stringIncludesLetter(string, letter) {
  let matches;
  for (let i = 0; i < string.length; i++) {
    console.log("this round:", i);
    if (string[i] === letter) {
      matches = true;
      break;
    }
  }
  return !!matches;
}

function sumUpTo(n) {
  if (n > 1) {
    sumUpTo(n - 1) + n;
    return true;
  }
  return 1;
}

function printString(string) {
  console.log(string[0]);
  if (string.length > 0) {
    const substring = string.substring(1, string.length);
    printString(substring);
    return true;
  }
  return true;
}

//both are strings, trying to match
//characters, and return number of
// matched characters.
//I could probably do this way better.
//but it's good to get the brain churning.
let numJewelsInStones = (J, S) => {
  let jArray = J.split("");
  let sArray = S.split("");
  let count = 0;
  jArray.forEach(j => {
    for (var i = 0; i < sArray.length; i++) {
      if (j === sArray[i]) {
        count++;
      }
    }
  });
  return count;
};

//input is an array of characters,
//return a reversed array, WITHOUT
//creating a new array in the fn.
let reverseString = a => {
  for (let i = 0; i < a.length; i++) {
    a.splice(i, 0, a[a.length - 1]);
    a.pop();
  }
  return a;
};

//counting unique values in an array using multiple pointers

let pointers = array => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return (i += 1);
};

let uniqueCounter = array => {
  if (array.length < 1) {
    return false;
  }
  let count = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    count[element] ? null : (count[element] = true);
  }
  return Object.keys(count).length;
};

//find largest sum of consecutive numbers
//in array, determined by number passed in as
//argument
//Test: consecutiveSum([1, 3, 5, 8, 4, 1, 4, 6, 8, 1, 9, 1, 2, 1], 3)
let consecutiveSum = (array, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
    console.log("here's the maxSum:", maxSum);
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    console.log("in the second loop; here is tempSum:", tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

let sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  let count = {};
  for (let i = 0; i < num1.length; i++) {
    let digit = num1[i];
    count[digit] ? count[digit]++ : (count[digit] = 1);
  }
  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i];
    if (count[digit]) {
      count[digit]--;
    } else {
      return false;
    }
  }
  return true;
};

//variable arguments using arguments obj does NOT work with arrow functions
function areThereDuplicates() {
  if (arguments.length < 1) {
    return false;
  }
  let count = {};
  for (let i = 0; i < arguments.length; i++) {
    if (count[arguments[i]]) {
      return true;
    } else {
      count[arguments[i]] = 1;
    }
  }
  return false;
}
function areThereDuplicatesTwo() {
  return new Set(arguments).size !== arguments.length;
}

//this solution works BECAUSE a sorted array is being passed in.
//it takes the average of the highest and lowest sum.
//if the avg is too large, lower the higher value
//if the avg is too small, raise the lower value
//this is O(n), because only one while loop
//is needed
let averagePair = (array, num) => {
  if (array.length < 1) {
    return false;
  }
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

let isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      console.log("i", i);
      console.log("str1 length", str1.length);
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
};

let maxSubarraySum = (array, number) => {
  if (array.length < number) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

let minSubArrayLen = (array, number) => {
  let startOfWindow = 0;
  let endOfWindow = 0;
  let totalSum = 0;
  let minimumLength = array.length + 1;
  while (startOfWindow < array.length) {
    if (totalSum < number && endOfWindow < array.length) {
      totalSum += array[endOfWindow];
      endOfWindow++;
    } else if (totalSum >= number) {
      minimumLength = Math.min(minimumLength, endOfWindow - startOfWindow);
      totalSum -= array[startOfWindow];
      startOfWindow++;
    } else {
      break;
    }
  }
  return minimumLength === array.length + 1 ? 0 : minimumLength;
};

let findLongestSubstring = string => {
  if (!string) return 0;
  let start = 0;
  let end = 0;
  let length = 0;
  let count = {};
  while (start < string.length) {
    if (!count[string[end]] && end < string.length) {
      count[string[end]] = 1;
      end++;
      length = Math.max(length, end - start);
    } else if (count[string[end]]) {
      delete count[string[start]];
      start++;
    } else {
      //break is needed bc, in the final round of the if,
      //end === string.length, therefore neither condition
      //can be met (as count[string[end]] is undefined),
      //so there needs to be a break statement when neither
      //conditon can be met. either a break statement,
      //or start++; we need to get out of the loop some how.
      //what ends up happening is that the while loop keeps
      //on running, again and again and again.
      break;
    }
  }
  return length;
};

//review this one
let findLongestSubstringTwo = string => {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};

//starting recursion
let countdown = num => {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};

let sumRange = num => {
  if (num === 1) return 1;
  else {
    return num + sumRange(num - 1);
  }
};

let factorial = num => {
  if (num === 1 || num === 0) return 1;
  else return num * factorial(num - 1);
};

let power = (base, exp) => {
  if (exp === 0) return 1;
  else if (exp === 1) return base;
  else return base * power(base, exp - 1);
};

let productOfArray = array => {
  if (array.length < 1) return 1;
  else return array[0] * productOfArray(array.slice(1));
};

let recursiveRange = num => {
  if (num === 1) return 1;
  else if (num === 0) return 0;
  else return num + recursiveRange(num - 1);
};

let fib = number => {
  let fibStarter = [0, 1];
  let fibHelper = amount => {
    if (amount === 1) return;
    else {
      fibStarter.push(
        fibStarter[fibStarter.length - 1] + fibStarter[fibStarter.length - 2]
      );
      amount--;
      fibHelper(amount);
    }
  };
  fibHelper(number);
  console.log(fibStarter);
  return fibStarter[number];
};

let fib2 = n => {
  console.log("here is n:", n);
  if (n < 2) return n;
  else return fib2(n - 1) + fib2(n - 2);
};

let reverse = string => {
  let newString = "";
  let helper = str => {
    if (str.length < 1) return;
    else if (str.length > 1 && newString === "") {
      newString = str[str.length - 1];
      helper(str.substring(0, str.length - 1));
    } else {
      newString = newString + str[str.length - 1];
      helper(str.substring(0, str.length - 1));
    }
  };
  helper(string);
  return newString;
};

let reverse2 = str => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

let isPalindrome = str => {
  if (str.length <= 1) return true;
  else if (str[0] === str[str.length - 1]) {
    return !!isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
};

const isOdd = val => val % 2 !== 0;

let someRecursive = (array, callback) => {
  if (!!callback(array[0]) === true && !!array[0]) {
    return true;
  } else if (!!callback[0] === false && array.length > 0) {
    return someRecursive(array.slice(1), callback);
  } else {
    return false;
  }
};

let someRecursive2 = (array, callback) => {
  if (array.length === 0) {
    return false;
  } else if (callback(array[0])) {
    return true;
  } else {
    return someRecursive(array.slice(1), callback);
  }
};

let capitalizeFirst = array => {
  let newArray = [];
  let helper = arr => {
    if (arr.length === 0) {
      return;
    } else {
      newArray.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
      helper(arr.slice(1));
    }
  };
  helper(array);
  return newArray;
};

let capitalizeWord = array => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } else {
    let res = capitalizeWord(array.slice(0, -1));
    //calling the function on the array without the final element
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
  }
};

let linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

let binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  let i = parseInt((right - left) / 2, 10);
  while (left < right) {
    if (array[i] < value) {
      left = i;
      i = left + Math.round((right - left) / 2);
    } else if (array[i] > value) {
      right = i;
      i = left + Math.round((right - left) / 2);
    } else {
      return i;
    }
  }
  return -1;
};

let sentenceCreator = () => {
  let word = "";
  let yara = () => {
    word = word + Math.round(Math.random() * 10);
    return word;
  };
  return yara;
};

let mooj = sentenceCreator();
let one = mooj();
let two = mooj();
let three = mooj();
