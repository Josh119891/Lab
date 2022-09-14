function isPerfectSquare(num: number): boolean {
  let i = 1;
  while (Math.pow(i, 2) < num) {
    i++;
  }
  return Math.pow(i, 2) === num;
}
