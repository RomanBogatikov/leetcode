// 961. N-Repeated Element in Size 2N Array

// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.



// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5


// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

var repeatedNTimes = function(A) {
  let set = new Set()
  for (let element of A) {
      if (!set.has(element)) {
          set.add(element)
      } else {
          return element;
      }
  }
};

var repeatedNTimes = function(A) {
    for (let i = 1; i <= 3; i++) {
        for (let k = 0; k < A.length - i; k++) {
            if (A[k] === A[k + i]) return A[k]
        }
    }
};