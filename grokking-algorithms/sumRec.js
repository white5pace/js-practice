function sum(arr) {
  if(!arr.length) {
    return 0
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}

console.log(sum([2, 4, 6]));
console.log(sum([]));
