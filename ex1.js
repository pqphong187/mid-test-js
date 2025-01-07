function printChristmasTree(n, character) {
  let space = " ";
  if (n < 0 || n > 100 || isNaN(n) || character.length > 1) {
    return "Invalid";
  }
  for (i = 0; i < n; i++) {
    console.log(space.replace(n - i) + character.replace(i));
  }
}

console.log(printChristmasTree(5, "x"));
