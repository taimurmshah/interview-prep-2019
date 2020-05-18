//https://leetcode.com/problems/asteroid-collision/
//this solution wasn't my original; i should try to do this again.

const asteroidCollision = array => {
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
    while (
      stack.length > 1 &&
      stack[stack.length - 2] > 0 &&
      stack[stack.length - 1] < 0
    ) {
      let r = stack.pop();
      let l = stack.pop();
      if (l < -r) stack.push(r);
      else if (-l < r) stack.push(l);
    }
  }
  return stack;
};
