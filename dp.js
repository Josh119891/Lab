/**
 * Recursive tips
 * 1. Visualize questions as tree
 * 2. implement tree using recursion, with a memo obj
 * 3. if adding a memo obj, store return values into the memo
 * 
 * */
const fibRecur = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n2);
}

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  return memo[n];
}
const fibLoop = (n) => {
  const arr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    arr[i + 2] = arr[i] + arr[i + 1]
  }
  return arr[n]
}


const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}


const gridTravelerMemo = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key];
}

const gridTravelerLoop = (m, n) => {
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const cur = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += cur;
      if (i + 1 <= m) table[i + 1][j] += cur;
    }
  }
  return table[m][n]
}
