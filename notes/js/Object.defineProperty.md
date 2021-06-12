

```javascript
const object = {};
Object.defineProperty(object, 'a',// 字段名
    {
        enumerable: false, //true显示在for循环中
        writable: false, //true可以被重写
 
        value: 1
    });

```

