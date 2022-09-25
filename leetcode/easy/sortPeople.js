var sortPeople = function (names, heights) {
  return names.map((name, index) => [name, heights[index]]).sort((a, b) => b[1] - a[1]).map((i) => i[0])

};