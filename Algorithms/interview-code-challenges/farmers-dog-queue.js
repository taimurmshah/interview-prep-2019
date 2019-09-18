// return a promise resolving (or rejecting) in *time*
const delay = (() => {
  let counter = 0; // incremental job id
  let progress = {}; // keeps job ids that are being resolved

  return time => {
    counter++;

    // job start
    console.log("BEING PROCESSED: " + Object.keys(progress).length);
    console.log(`+ ${counter} START job`);
    progress[counter] = true;

    return new Promise((resolve, reject) => {
      setTimeout(
        (i => {
          // job stop
          console.log(`- ${i} END job`);
          delete progress[i];

          const threshold = 1; // should it resolve or not?
          if (Math.random() <= threshold) return resolve(i);
          // yes
          else return reject(i); // no
        }).bind(this, counter),
        time || Math.random() * 2000
      ); // wait 0-2000ms
    });
  };
})();

// return an array of jobs
const jobs = number => {
  return [...Array(number).keys()].map(() => delay);
};

// write a class that throttles the concurrency and responds
// to the following interface

class Queue {
  constructor(obj) {
    this.jobs = [];
    this.concurrency = obj.concurrency;
  }

  add(...jobs) {
    this.jobs = [...this.jobs, ...jobs];
  }

  start() {
    for (let i = 0; i <= this.concurrency; i++) {
      this.jobs
        .shift()()
        .then(() => {
          this.keepGoing();
        });
    }
  }

  keepGoing() {
    if (this.jobs.length === 0) return;
    this.jobs
      .shift()()
      .then(() => {
        this.keepGoing();
      });
  }
}

let queue = new Queue({ concurrency: 10 });

// queue.onFinish.then(() => console.log('All done!'));

// queue.add(...jobs(100));
// queue.add(...jobs(10));
// queue.start();

/*---------------array stuff----------------*/

let array1 = [1, 3, 5, 6, 9, 2, 5, 10, 8, 9];

// let removeDups = array => {
// //   let count = {};
// //
// //   for (let i = 0; i < array.length; i++) {
// //     if (!count[array[i]]) {
// //       count[array[i]] = array[i];
// //     }
// //   }
// //   return Object.values(count);
// // };

// Array.prototype.removeDups = function() {
//   let count = {};
//
//   for (let i = 0; i < this.length; i++) {
//     if (!count[this[i]]) {
//       count[this[i]] = this[i];
//     }
//   }
//   return Object.values(count);
// };

// Object.defineProperty(Array.prototype, "removeDups", {
//   get() {
//     let count = {};
//
//     for (let i = 0; i < this.length; i++) {
//       if (!count[this[i]]) {
//         count[this[i]] = this[i];
//       }
//     }
//     return Object.values(count);
//   }
// });

// console.log(array1.removeDups);
