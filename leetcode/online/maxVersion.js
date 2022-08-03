let versions = [`1.0.20.3`, `2.0.3`, `3.6.27.1`, `3.14.5`];


const maxVersion = (versions) => {
  if (!Array.isArray(versions) || versions.length === 0) return -1;
  let temp = versions.map((version) => version.split('.'));
  for (let i = 0; i < 10; i++) {
    const cur = temp.map((arr) => arr[i]);
    let max = Math.max(...cur);
    temp = temp.filter(arr => parseInt(arr[i]) === max);
    if (temp.length === 1) {
      return temp[0].join('.')
    }
  }

  return temp[0].join('.')

}








console.log(maxVersion(versions));