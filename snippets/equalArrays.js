
function equalArrays(a, b) {
  if (a === b) return true; //考虑两个声明指向同一个对象
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;

  }
  return true;
}

function equalArrays(a, b) {
  return a === b || (a.length === b.length && a.every((item, index) => item === b[index]));
}