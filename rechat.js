/**
 * @file Exercise for rechat
 * @author Juan Pablo Almonacid <jpalmonacidv@gmail.com>
 *
 * Assumptions made:
 *   - map args are valid types
 */
const map = (coll, iteratee, callback) => {
  // Implement this function.
  // coll, the first argument, is an array of data
  // iteratee, the second argument, is an async worker function
  // Your `map` function has to run every element in the `coll` through `iteratee`
  // When all elements all called, the result should be an array sent to `callback`

  // Bonus points if you do NOT use promises.

  // Basically we want you to implement this function: https://caolan.github.io/async/v3/docs.html#map
  const results = new Map();
  let errorTriggered = false;
  coll.forEach((element, index, array) => {
    iteratee(element, (err, result) => {
      if (errorTriggered) return;
      if (err) {
        errorTriggered = true;
        callback(err, null);
        return;
      }
      results.set(index, result)
      if (results.size === array.length) {
        callback(null, [...results.entries()].sort().map(entry => entry[1]))
      }
    });
  });
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a2 = [1, 2, 3, 0, 4, 5, 0];

const worker = (n, cb) => {
  setTimeout(() => {
    if (n === 0) return cb("6 Error");

    return cb(null, n*2);
  }, 1000 - (n * 100));
};

const callback = (err, results) => {
  console.log(err, results);
};

map(a1, worker, callback);
map(a2, worker, callback);
