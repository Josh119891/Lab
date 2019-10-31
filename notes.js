
function resolveAfterSeconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1500);
    });
  }
  
  async function f1() {
    var x = await resolveAfterSeconds(10);
    console.log(x); // 10
  }
  
  f1();
`
  oct-31
  1.
  await只是返回一个proise，但若想用await返回具体数值
  promise里面要写resolve
  2.
`