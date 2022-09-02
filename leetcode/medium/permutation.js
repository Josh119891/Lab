var permutation = function (s) {
  const len = s.length;
  // 让字母跟据字母顺序排列
  const arr = Array.from(s).sort().join('');
  const visited = new Array(len).fill(false);
  const res = [];
  const dfs = (str) => {
    if (str.length === len) return res.push(str);
    for (let i = 0; i < len; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(str + arr[i]);
        visited[i] = false;
      }
    }
  }
  dfs('')
  return res;
};
