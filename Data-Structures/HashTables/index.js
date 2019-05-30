//problems with below hashing algorithm:
// 1. only accepts strings
// 2. not constant time
// 3. data can be clustered quite easily
//
// I don't fully understand what the arrayLen argument is for.
// Need to understand...
//
let hash;
hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

//shitty optimization of above
//the math.min just means at most,
//the loop will run 100 times.
//i'm still not really sure what
//is going on.

hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 32;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  //this method is money, not sure how it works...
  onlyUnique(value, index, self) {
    console.log("value:", value);
    console.log("index:", index);
    console.log("self:", self);
    return self.indexOf(value) === index;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        keys.push(this.keyMap[i]);
      }
    }
    keys = keys.flat();
    keys = keys.map(ele => {
      return ele[0];
    });
    return keys;
  }

  //should return an array of unique values.
  values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        values.push(this.keyMap[i]);
      }
    }
    values = values.flat();
    values = values.map(ele => {
      return ele[1];
    });
    let uniq = values.filter(this.onlyUnique);
    return uniq;
  }
}

let ht = new HashTable(4);
ht.set("taimur", "shah");
ht.set("maahnoor", "shah");
ht.set("talat", "shah");
ht.set("mansoor", "shah");
