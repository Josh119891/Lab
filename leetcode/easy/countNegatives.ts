function countNegatives(grid: number[][]): number {
  return grid.flat().filter((i) => +i < 0).length;
}
