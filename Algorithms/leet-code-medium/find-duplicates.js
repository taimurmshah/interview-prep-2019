//https://leetcode.com/problems/find-all-duplicates-in-an-array/

let test = [4, 3, 2, 7, 8, 2, 3, 1];

let returnDuplicates = array => {
  let currentElement,
    displaced,
    replacement = array.length + 1;
  for (let i = 0; i < array.length; i++) {
    currentElement = Math.abs(array[i]);

    //check if this number is in the right spot. if so, increment the loop.

    if (currentElement === i + 1 || currentElement === replacement) continue;

    //put replacement value in:
    array[i] = replacement;

    //save the "displaced" value:
    displaced = array[currentElement - 1];

    //now the array looks like: [9, 3, 2, 7, 8, 2, 3, 1],
    //with currentElement = 4, displaced = 7.
    //now I have to start the process of putting shit in the right place.
    // 4 goes to i = 3; 7 goes to i = 6; 3 goes to i = 2, etc.
    //to break out of the loop, currentElement either needs to equal displaced or traveller.
    while (currentElement !== displaced && currentElement !== replacement) {
      //put the number in it's right place
      array[currentElement - 1] = currentElement;
      //now the array looks like: [9, 3, 2, 4, 8, 2, 3, 1], with displaced === 7.

      //update the value of current element
      currentElement = Math.abs(displaced);

      //get the new value of displaced; what is at currentElement's correct spot?
      displaced =
        currentElement < replacement ? array[currentElement - 1] : replacement;
    }

    //check if the value at where currentElement should go === currentElement.
    if (displaced === currentElement && currentElement < replacement)
      array[currentElement - 1] = -currentElement;
  }

  return array.filter(n => n < 0).map(n => -n);
};

// console.log(returnDuplicates(test));

const findDuplicates2 = function(nums) {
  const dups = [];
  let i = 0;
  while (i < nums.length) {
    const n = nums[i];
    if (n === 0 || n === i + 1) {
      i++;
    } else if (nums[n - 1] === n) {
      nums[i] = 0;
      dups.push(n);
      i++;
    } else {
      nums[i] = nums[n - 1];
      nums[n - 1] = n;
    }
  }
  return dups;
};
