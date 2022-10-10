function hardestWorker(n: number, logs: number[][]): number {
  let id = logs[0][0];
  let max = logs[0][1];
  for (let i = 1; i < logs.length; i++) {
    let time = logs[i][1] - logs[i - 1][1];
    if (time > max || (time === max && logs[i][0] < id)) {
      id = logs[i][0];
      max = time;
    }
  }
  return id;
}
