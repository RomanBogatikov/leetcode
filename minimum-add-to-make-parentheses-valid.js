// 921. Minimum Add to Make Parentheses Valid
// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.



// Example 1:

// Input: "())"
// Output: 1
// Example 2:

// Input: "((("
// Output: 3
// Example 3:

// Input: "()"
// Output: 0
// Example 4:

// Input: "()))(("
// Output: 4


// Note:

// S.length <= 1000
// S only consists of '(' and ')' characters.

var minAddToMakeValid = function(S) {
  let stack = [];
  let toAdd = 0;
  for (let i = 0; i < S.length; i++) {
      if (S[i] === '(') {
          stack.push(i);
      } else {
          if (stack.length === 0) {
              toAdd++;
          } else {
              stack.pop();
          }
      }
  }

  toAdd += stack.length;
  return toAdd;
};
