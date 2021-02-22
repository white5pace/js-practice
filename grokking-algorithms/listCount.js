function listCount(list) {
  if(!list.length) {
    return 0;
  } else {
    return 1 + listCount(list.slice(1))
  }
}

console.log(listCount([1, 2, 3, 4, 5, 6]));