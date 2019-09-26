//test = "1 2 3"
//input is string
//return nth element in fibonacci sequence

let solution = input => {
  let array = input.split(" ");

  let num = parseInt(array[array.length - 1]);

  let fibonacci = n => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n < 1) return;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return fibonacci(num);
};

console.log(solution("1 2 6"));

let reverseSolution = s => {
  return s
    .split("\n")
    .splice(1)
    .map(phrase =>
      phrase
        .split(" ")
        .reverse()
        .join(" ")
    )
    .join("\n");
};

let string = "3\nHello World\nBye World\nUseless World";

console.log(reverseSolution(string));
