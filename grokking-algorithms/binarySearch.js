function binarySearch(list, item) {
  let guessIndex = Math.floor((list.length - 1) / 2);
  while (list[guessIndex] !== item) {
    if (list[guessIndex] > item) {
      guessIndex = Math.floor(guessIndex / 2);
    } else {
      guessIndex = Math.floor(guessIndex + Math.ceil((list.length - 1 - guessIndex) / 2));
    }
  }
  return guessIndex;
}

console.log(binarySearch([1, 3, 6, 8, 10, 12, 16, 20, 44, 55, 90, 100, 300], 6));


