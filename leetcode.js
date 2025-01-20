/**
//  * @param {string} s
//  * @return {number}
 */
// var romanToInt = function (s) {
//   let result = 0;
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   for (let i = 0; i < s.length; i++) {
//     if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
//       result -= roman[s[i]];
//     } else {
//       result += roman[s[i]];
//     }
//   }
//   console.log(result);
// };

// romanToInt("III");

// var romanToInt = function (s) {
//   const data = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let roman = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (i < s.length && data[s[i]] < data[s[i + 1]]) {
//       roman -= data[s[i]];
//     } else {
//       roman += data[s[i]];
//     }
//   }
//   return roman;
// };

// console.log(romanToInt("IV"));

var longestCommonPrefix = function (strs) {
  if (!strs) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
};
let input = ["flower", "flow", "cat"];
console.log(longestCommonPrefix(input));
