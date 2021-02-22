function mathMax(arr) {
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return arr[0];
    } else {
      return arr[1];
    }
  } else if (!arr.length) {
    return 'Array is empty';
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let subMax = mathMax(arr.slice(1));
    if (arr[0] > subMax) {
      return arr[0];
    } else {
      return subMax;
    }
  }
}

console.log(mathMax([0, 16, 32, 2, 4, 8]));
console.log(mathMax([0]));
console.log(mathMax([]));