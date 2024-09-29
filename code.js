function flip (array, n) {
  let i = 0;
  let mid = Math.floor(n / 2);

  if (n >= array.length) {
    array.reverse();
    return array;
  }

  for (i; i < mid; i++) {
    let tmp = array[i];
    array[i] = array[n-1];
    array[n-1] = tmp;
  }

  return array;
}

// Use only flip() here to manipulate the array
function pancakeSort (array) {
    let mi = array.length;
    
    return array
}
