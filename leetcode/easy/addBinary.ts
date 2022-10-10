function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let bonus = 0;
  let ans = "";
  while (i >= 0 || j >= 0) {
    let numA = parseInt(a[i] || "0", 10);
    let numB = parseInt(b[j] || "0", 10);
    let curNum = numA + numB + bonus;
    if (curNum >= 2) {
      bonus = 1;
      curNum = curNum % 2;
    } else {
      bonus = 0;
    }
    ans = curNum.toString() + ans;
    i--;
    j--;
  }
  if (bonus === 1) {
    ans = "1" + ans;
  }
  return ans;
}
