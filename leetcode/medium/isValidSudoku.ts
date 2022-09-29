function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let square = new Set();
    for (let j = 0; j < 9; j++) {
      let rowItem = board[i][j];
      let colItem = board[j][i];
      let squareItem =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (rowItem !== ".") {
        if (row.has(rowItem)) return false;
        row.add(rowItem);
      }
      if (colItem !== ".") {
        if (col.has(colItem)) return false;
        col.add(colItem);
      }
      if (squareItem !== ".") {
        if (square.has(squareItem)) return false;
        square.add(squareItem);
      }
    }
    console.log(square);
  }
  return true;
}
