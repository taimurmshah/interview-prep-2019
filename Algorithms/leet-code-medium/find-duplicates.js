const findDuplicates = function(nums) {
  debugger;

  let empty = nums.length + 1,
    currentElement,
    next;

  for (let i = 0; i < nums.length; ++i) {
    currentElement = Math.abs(nums[i]);

    if (currentElement === i + 1 || currentElement === empty) continue; //Step 1 -- this check is of whether the currentElement is in it's right place OR (if it's not in it's right place, if it's been replaced by one greater)

    //number is not in it's right place; replace it with 9
    nums[i] = empty; //Step 2

    //value = currentElement, so if the currentElement is not at it's correct place, then we want to set the value of
    //next to the number @ currentElement's correct position
    next = Math.abs(nums[currentElement - 1]);

    //Step 3 -
    while (currentElement !== empty && currentElement !== next) {
      //putting the number at it's correct place
      nums[currentElement - 1] = currentElement;

      //next saves the value that we just replaced.
      //we set currentElement to the value of next
      currentElement = Math.abs(next);

      //when is current value NOT less than empty?
      next =
        currentElement < empty ? Math.abs(nums[currentElement - 1]) : empty;
    }

    //this is confusing... gonna run through this now in debugger
    if (currentElement < empty) nums[currentElement - 1] = -currentElement; //Step 4
  }

  //Filter out negative nums and make them positive for answer.
  return nums.filter(e => e < 0).map(e => -e);
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

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
