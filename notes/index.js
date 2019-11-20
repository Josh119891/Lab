
function resolveAfterSeconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1500)
  }
}
  
  async function f1() {
    var x = await resolveAfterSeconds(10);
    console.log(x); // 10
  }
  
  f1();
`
  1.Vue
        怎么使用Vue(刷视频和实操COMP)
  2.学习资源
        https://cnodejs.org/topic/56ef3edd532839c33a99d00e
  3.Bing API接口
        https://blog.csdn.net/xuaho0907/article/details/74393010
  6.Babel
        http://www.ruanyifeng.com/blog/2016/01/babel.html
  7.Vuex
        https://www.jianshu.com/p/a804606ad8e9
  8.Vue部署步骤
        https://www.jianshu.com/p/ce8766f3e68d
`