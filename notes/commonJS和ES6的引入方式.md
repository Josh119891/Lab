## commonJS和ES6的引入方式

|      | commonJs                                                     | es6                                      |
| ---- | ------------------------------------------------------------ | ---------------------------------------- |
| 导出 | module.exports /exports                                      | import                                   |
| 引入 | const fs = require("fs")                                     | export                                   |
|      | 代码运行时同步阻塞性地加载模块 动态                          | 静态                                     |
|      | 缓存可以解决重复查找和重复执行的问题,有就使用，没有就找然后写入缓存 | export的变量被改动了，会影响import的结果 |

## commmonJs的require

当 Node 遇到 require(X) 时，顶层逻辑

1. 如果 X 是内置模块
   1. 返回模块
   2. 不再继续执行
2. 如果X是文件，根据绝对路径， 依次查找 X, X.js, X.json, X.node，一旦有就返回
3.如果X是目录, 依次查找下面文件，/package.json,/index.js, /index.json, /index.node，一旦有返回
4. X不带路径，在目录中装载
5. 抛出 "not found"

### 每个模块实例都有require方法
```javascript
Module.prototype.require = function(path) {
  return Module._load(path, this);
};
```

### 找到对应module后执行的底层逻辑, Module._load源码

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

