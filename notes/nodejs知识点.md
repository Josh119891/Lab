# js知识点



## 闭包

>  a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

闭包让你可以在一个内层函数中访问到其外层函数的作用域， 换句话说， 一个函数与其词法环境绑定在一起，当这个函数被调用的时候，调用这函数的词法作用域，也将其词法环境。

| 好处               | 坏处                   |
| ------------------ | ---------------------- |
| 变量长期存在内存中 | 占据内存空间，影响性能 |
| 避免全局变量的污染 | 可能导致内存泄漏       |



## 引入方式

常见的引用方式有两种, commonJs和es6的

1. 在nodejs已原生支持es6语法，只需以*.mjs为文件后缀
2. commonJs 语法的话，是以*.cjs 特指

但，为了实现业务场景，大部分采用babel以便混用

|      | commonJs                                                     | es6                                         |
| ---- | :----------------------------------------------------------- | ------------------------------------------- |
| 导出 | module.exports /exports                                      | import                                      |
| 引入 | const fs = require("fs")                                     | export                                      |
|      | 代码运行时同步阻塞性地加载模块 动态                          | 静态                                        |
|      | 缓存可以解决重复查找和重复执行的问题,有就使用，没有就找然后写入缓存 | export 的变量被改动了，会影响 import 的结果 |



### 用require引用包裹 x 的顶层逻辑

```javascript
const x = require("x")
/**
 * 1. 如果 x 是内置模块， return 
 * 2. 如果 x 是文件，根据绝对路径，依次查找 [x,x.js,x.json.x.node] 文件, if found, return
 * 3. 如果 x 是文件夹，依次查找 [/package.json, /index.js, /index.json, /index.node], if found, return
 * 4. x不带路径，在node_modules中装载
 * 5. 抛出 “not found”
 */
```



### 每个模块实例都有 require 方法

```javascript
Module._load = function(request, parent, isMain) {

  //  计算绝对路径
  var filename = Module._resolveFilename(request, parent);

  //  第一步：如果有缓存，取出缓存
  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;

  // 第二步：是否为内置模块
  if (NativeModule.exists(filename)) {
    return NativeModule.require(filename);
  }

  // 第三步：生成模块实例，存入缓存
  var module = new Module(filename, parent);
  Module._cache[filename] = module;

  // 第四步：加载模块
  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }

  // 第五步：输出模块的exports属性
  return module.exports;
};
```



### GC & Memory leak

> Memory leaks happen when expected short lived objects are attached to long lived ones。

```javascript
// example: request are expected to short live, but the top level map is long lived.
const requests = new Map();
app.get('/',(req,res)=>{
	requests.set(req.id,req);
	res.status(200).send('hello world');
})
```

## nodejs 垃圾回收

原理： 分辨已分配了的内存，对死去的内存重新分配，若其指向根对象，则始终保持活跃状态

Node程序运行中，此进程占用的所有内存称为**常驻内存**（Resident Set）。

 常驻内存 rss 由以下部分组成:

1. 代码区 Code Segement：存放即将执行的代码片段
2. 栈 Stack: 存放局部变量和指针
3. 堆 Heap: 存放对象，闭包上下文
4. 堆外内存：不通过V8分配，也不受V8管理。Buffer对象的数据就存放于此。

除堆外内存，其余部分均由V8管理。

- 栈（Stack）的分配与回收: 当程序离开某作用域后，其栈指针下移（回退），整个作用域的局部变量都会出栈，内存收回。
- 堆（Heap）的管理 则由 Scavenge算法(负责新生代),  Mark-Sweep算法 和 Mark-compact算法 (负责老生态） 

### 堆 heap

V8将heap分为 **新生代** 和 **老生代**

#### 新生代中运行**Scavenge**算法

1. 将 新生代的空间分成两个 semi-space, 活跃状态的称为 from-space 和 闲置状态的称为 to-space.
2. from-space 快满的时候触发 scavenge
3. 检查 from-sapce 中的对象，若对象存活，检查是否能晋升老生代，满足则晋升，不满足移动到 to-space
4. 如果对象不存活，则释放其内存使用空间
5. 完成上述工作，反转 from-sapce 和 to-space的角色

#### 晋升条件

1. 对象是否经历过 Scavenge 回收。如果已经经历过一次 Scavenge，则将对象晋升到老生代，否则复制到 To 空间。
2. To 空间的使用率是否超过限制（25%）。如果超过 25%的限制，则直接分配至老生代。设置 25% 的原因是，如果反转 semiplace 之后，空间占用比过高，会影响后续内存分配。



#### 老生代中运行**Mark-Sweep**算法和**Mark-Compact**算法

**Mark-Sweep**算法

1. 分别标记和清除2个阶段，在标记阶段遍历堆中所有的对象，并标记存活的对象，
2. 在随后的清理阶段，只清除标记之外的对象。

原理:

1. 在标记阶段，核心是**深度优先**. 状态共有三色
   1. 白: 未被 GC 发现
   2. 灰: 已经被 GC 发现, 但仍未处理完毕
   3. 黑: 不仅已被 GC 发现，且所有接邻对象已都处理完毕

**Mark-Compact**算法

为了解决 Mark-Sweep 算法的内存碎片问题， 将已标记的活的对象往一边移动，清除边界外的内存，从而获得连续的内存空间

**增量标记**: 

因为 **Mark-Compact**算法和**Mark-Sweep**算法是全停顿的,所以引入**增量标记** 和 **惰性清理**

将标记阶段分为若干小步骤，每个步骤控制在5ms内，每运行一段时间标记动作，就让JavaScript程序执行一会儿，如此交替，明显地提高了程序流畅性，一定程度上避免了长时间卡顿。

##### 为什么不用 Scavenge 算法？

1. 老生代内存活对象比例高，时间长， 复制存活对象的操作会很多
2. 老生代的空间远大于新生代，会造成空间损失


