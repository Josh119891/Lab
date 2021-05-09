# Prototype

js中的对象有一个特殊的[[Prototype]]内置属性，也就是其他对象的引用。

```javascript
const a = Object.create(b); // b的[[prototype]]赋值给了a
```

