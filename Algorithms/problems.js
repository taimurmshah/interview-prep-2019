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

//tracking closures
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

//from technical interview:
const myIngredients = ["elk", "butter", "coconut oil"];
const storeInventory = [
  "oil",
  "steak",
  "onions",
  "butter",
  "cheese",
  "elk",
  "chocolate",
  "spinach",
  "coconut oil"
];

let shopping = (ingredients, inventory) => {
  if (
    ingredients.length < 1 ||
    inventory.length < 1 ||
    inventory.length < ingredients.length
  ) {
    return false;
  }
  let groceryList = {};
  for (let i = 0; i < ingredients.length; i++) {
    if (!groceryList[ingredients[i]]) {
      groceryList[ingredients[i]] = 1;
    } else {
      groceryList[ingredients[i]]++;
    }
  }
  for (let j = 0; j < inventory.length; j++) {
    if (groceryList[inventory[j]]) {
      groceryList[inventory[j]]--;
      if (groceryList[inventory[j]] === 0) {
        delete groceryList[inventory[j]];
      }
    }
  }
  return !Object.keys(groceryList).length;
};

// console.log(shopping(myIngredients, storeInventory));

/*
 *Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * */

//test:
//threeSum([-1, 0, 1, 2, -1, -4])

let threeSum = array => {
  let answer = [];
  if (array.length < 3) return undefined;
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 3; i++) {
    if (array[i] > 0) return answer;
    if (i > 0 && array[i] === array[i - 1]) continue;
    for (let j = i + 1, k = array.length - 1; j < k; ) {
      while (j < k) {
        if (array[i] + array[j] + array[k] === 0) {
          answer.push([array[i], array[j], array[k]]);
          j++;
          k--;
          while (j < k && array[j] === array[j - 1]) j++;
          while (j < k && array[k] === array[k + 1]) k--;
        } else if (array[i] + array[j] + array[k] > 0) k--;
        else j++;
      }
    }
  }
  return answer;
};

//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

let getCenter = (string, index) => {
  let left = index,
    right = index;
  while (string[left] === string[right + 1] && right < string.length) {
    right++;
  }
  return [left, right];
};

let expandAroundCenter = (string, left, right) => {
  let l = left,
    r = right;

  while (l >= 0 && r < string.length && string[l] === string[r]) {
    l--;
    r++;
  }
  return [++l, --r];
};

let longestPalindrome = string => {
  let start = 0,
    end = 0;
  let center;
  let bounds;
  for (let i = 0; i < string.length; i++) {
    center = getCenter(string, i);
    bounds = expandAroundCenter(string, center[0], center[1]);
    let left = bounds[0],
      right = bounds[1];
    if (right - left >= end - start) {
      start = left;
      end = right;
    }
    i = center[1];
  }
  return string.substring(start, end + 1);
};

//array anagram mapping. two arrays of positive integers are arguments of a function.
//the arrays are anagrams of each other; they are duplicates, but not the same order.
//return an array that is a map of what location the items in array1 appear in array2

let anagramMappings = (a, b) => {
  if (a.length !== b.length) return null;
  let map = {};
  let result = [];
  for (let i = 0; i < b.length; i++) {
    if (!map[b[i]]) {
      map[b[i]] = [i];
    } else {
      map[b[i]].push(i);
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]].length > 1) {
      result.push(map[a[i]].pop());
    } else {
      result.push(map[a[i]][0]);
    }
  }
  return result;
};

///soldiers
//given an array of numbers, return the number of times x + 1 exists.
let soldiers = ranks => {
  if (ranks.length <= 1) return undefined;
  let counter = { number: 0 };
  let num;
  //i need to find if x + 1 exists. but, i don't want to create x + 1
  for (let i = 0; i < ranks.length; i++) {
    num = ranks[i];
    //right now, i know the first one exists. if either x - 1 or x + 1, set them to true.
    if (!counter[num]) {
      counter[num] = true;
    }
  }

  for (let k = 0; k < ranks.length; k++) {
    num = ranks[k] + 1;
    if (counter[num]) {
      ++counter["number"];
    }
  }

  return counter["number"];
};

/*WORD SEARCH*/
//https://leetcode.com/problems/word-search/

let capitalize = word => {
  word = word.split("");
  word = word.map(letter => letter.toUpperCase());
  return word.join("");
};

let makeTable = board => {
  let table = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let currentLetter = board[i][j];
      if (!table[currentLetter]) {
        table[currentLetter] = [[i, j]];
      } else table[currentLetter].push([i, j]);
    }
  }
  return table;
};

let adjacent = (pos1, pos2) => {
  const x1 = pos1[0];
  const x2 = pos2[0];
  const y1 = pos1[1];
  const y2 = pos2[1];
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (distance === 1 || distance === 0) return true;
  else return false;
};

let areEqual = (pos1, pos2) => {
  if (pos1.length !== pos2.length) return false;
  for (let i = 0; i < pos1.length; i++) {
    if (pos1[i] !== pos2[i]) return false;
  }
  return true;
};

let removeCoordinate = (table, key, position) => {
  let objClone = { ...table };
  objClone[key] = table[key].filter(pair => {
    return !areEqual(pair, position);
  });

  return objClone;
};

let wordSearch = (board, word) => {
  let letterTable = makeTable(board);
  let currentLetter = word[0];

  let recursiveDFS = (table, word, position) => {
    word = capitalize(word);
    let currentLetter = word[0];
    if (word.length === 0) return true;
    if (!table[currentLetter]) return false;
    for (let i = 0; i < table[currentLetter].length; i++) {
      if (adjacent(position, table[currentLetter][i])) {
        let currentCoordinates = table[currentLetter][i];
        let newTable = removeCoordinate(
          table,
          currentLetter,
          currentCoordinates
        );
        let subString = word.substr(1, word.length - 1);
        if (recursiveDFS(newTable, subString, currentCoordinates)) {
          return true;
        }
      }
    }
    return false;
  };
  for (let i = 0; i < letterTable[currentLetter].length; i++) {
    if (recursiveDFS(letterTable, word, letterTable[currentLetter][i])) {
      return true;
    }
  }
  return false;
};

/*
 * extremely fast solution: */
let exist = function(board, word) {
  let length = word.length;
  word = word.split("");

  let verify = function(i, j, board, index) {
    debugger;
    if (
      i < 0 || //if i is less than 0
      i >= board.length || //or i is greater than or equal to the length of the board
      j < 0 || //if j is less than 0
      j >= board[0].length || //if j is greater than or equal to the length of the board
      board[i][j] != word[index] || //if board[i][j] does not equal word[index]
      index >= length // or if index is greater than length, which === word.length
    ) {
      return false;
    }

    index++;
    board[i][j] = "#";
    if (index === length) {
      return true;
    }
    if (verify(i + 1, j, board, index)) {
      return true;
    }
    if (verify(i - 1, j, board, index)) {
      return true;
    }
    if (verify(i, j + 1, board, index)) {
      return true;
    }
    if (verify(i, j - 1, board, index)) {
      return true;
    }
    board[i][j] = word[--index];
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (verify(i, j, board, 0)) {
        return true;
      }
    }
  }
  return false;
};

/*WORD SEARCH*/
