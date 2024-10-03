function flip (array, n) {
  a1 = array.slice(0, n)
  a1 = a1.reverse()
  a1 = a1.concat(array.slice(n))

  return a1
}

// Use only flip() here to manipulate the array
function pancakeSort (array) {
  for (let outerloop = 0; outerloop < array.length; outerloop++) {
    let max = outerloop
    for (let innerloop = outerloop + 1; innerloop < array.length; innerloop++) {
      if (array[innerloop] > array[max]) {
        max = innerloop
      }
    }

    array = flip(flip(array, max), max + 1)
  }
  return array
}
