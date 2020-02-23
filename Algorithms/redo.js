const words = [
  "wheelhouse",
  "",
  "scapethrift",
  "inexplicable",
  "ascetically",
  "jestingly",
  "palindromical",
  "nonintent",
  "nonexertion",
  "bibliomania",
  "defunct",
  "oculus",
  "nt",
  "intercrystallization",
  "institutionalization"
];

const findDuplicates = array => {
  let dict = {};
  //have the key be the duplicate. want to store an array of
  //the index along with the occurrence, starting with 0.
};

const numer = (word, pfxLen = 0) => {
  if (word.length <= 2) return word;
  return (
    word.slice(0, pfxLen + 1) +
    (word.length - (2 + pfxLen)) +
    word[word.length - 1]
  );
};

const transform = (dups, array) => {
  console.log("dups:", dups);
  console.log("w", words);
};

const main = () => {
  const newWords = words.map(w => numer(w));
  let duplicates = findDuplicates(newWords);
  transform(duplicates, newWords);
  return newWords.join("\n");
};

console.log(main());
// console.log(numer("taimur", 2))
