var largestAltitude = function (gain) {
  const temp = [0]
  for (let i = 0; i < gain.length; i++) {
    temp.push(gain[i] + temp[i])
  }
  return Math.max(...temp)
}

var largestAltitude = function (gain) {
  return Math.max(
    ...gain.reduce(
      (pre, cur, i, arr) => {
        return [...pre, pre[pre.length - 1] + cur];
      },
      [0]
    )
  );
};

