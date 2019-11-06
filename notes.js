
function resolveAfterSeconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1500);
  }
}
  
  async function f1() {
    var x = await resolveAfterSeconds(10);
    console.log(x); // 10
  }
  
  f1();
`
  oct-31
  1.async/await
      await只是返回一个promise，但若想得到具体数值,promise里要写resolve(value)

  nov-5
  1.Vue
      怎么使用Vue(刷视频和实操COMP)
  2.学习资源
      https://cnodejs.org/topic/56ef3edd532839c33a99d00e
  3.Bing API接口
      https://blog.csdn.net/xuaho0907/article/details/74393010

`