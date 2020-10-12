/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

const twoSort = (s) => {
  let sorted = s.sort(function(a, b) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
  let finalString = '';
  for(let i = 0; i < sorted[0].length; i++) {
    finalString += sorted[0][i];
    if(i < sorted[0].length - 1) {
      finalString += '***';
    }
  }

  return finalString;
}