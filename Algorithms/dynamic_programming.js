// O(2^n)... terrible
let fibonacci = n => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//memoization -- storing the results of
//expensive function calls and returning
// the cached result when the same inputs
// occur again

let betterFib = (n, memo = []) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 2) return 1;
  let res = betterFib(n - 1, memo) + betterFib(n - 2, memo);
  memo[n] = res;
  return res;
};
