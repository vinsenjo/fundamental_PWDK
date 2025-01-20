//Array.diff
function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a.splice(i, 1);
      i--;
    }
  }

  return a;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
