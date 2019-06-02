// O(2^n)... terrible
let fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//memoization -- storing the results of
//expensive function calls and returning
// the cached result when the same inputs
// occur again

//roughly O(n)
//huge space-complexity
let memoFib = (n, memo = []) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 2) return 1;
  let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  memo[n] = res;
  return res;
};

//also roughly O(n) -- one loop
let tabFib = n => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};
