function getIndex(arr) {
  return arr.reduce((pre, cur, index, array) => {
    if (cur > 0) {
      return cur > array[pre] ? pre : index;
    }
    return pre;
  }, null)
}