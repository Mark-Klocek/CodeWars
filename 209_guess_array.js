// In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

// f(a, b)

// where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

// The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

// Your goal is to figure out the correct array.

// The whole procedure is:

//     You are given f and the length of the array n.
//     Ask f for any element sums you want.
//     Create and return the correct array according to the answers.

// The array will always have at least 3 elements.

function guess(f, n) {
  let res = new Array(n);

  // Get first three
  let a01 = f(0, 1);
  let a12 = f(1, 2);
  let a02 = f(0, 2);

  res[0] = (a01 + a02 - a12) / 2;
  res[1] = a01 - res[0];
  res[2] = a02 - res[0];

  // Remaining
  for (let i = 3; i < n; i++) {
    res[i] = f(i - 1, i) - res[i - 1];
  }

  return res;
}
