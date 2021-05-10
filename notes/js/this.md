# This

在绝大多数情况下， `this` 的值（运行时绑定）取决于函数的调用方式

1. 默认绑定：取决于strict mode, this会绑定到全局对象或者undefined

```javascript
// this 并不指向函数自身
function foo(num){
  console.log(`foo: `+num);
  this.count++; // 这个等于count =count+1; 根据LHS原理，他会向上查找知道，直到在顶层作用域中找不到，会创建一个全局变量count
}
foo.count =0; //直接指向具名函数的方法名 是更好的指向自身
for(let i =0;i<5;i++){
  foo(i);
}
console.log(foo.count); //0
// 非strict mode的话, 默认绑定才能绑定到全局对象
// 这里可以用globalThis.count调出这个this.count的值来验证

```



2. 隐式绑定： 绑定到上下文对象, 且在对象属性引用链中只有最近一层在调用位置上起作用

```javascript
function foo(){
  console.log(this.a);
}
const obj2={
  a:2,
  foo,
}
obj2.foo() // 2
// 无论声明还是引用属性，函数都不属于obj对象，但this在这里有上下文，就绑定了上去

const obj1={
  a:1,
  obj2,
}
obj1.obj2.foo()  //2
// 对象属性引用链中只有最近一层在调用位置上起作用

// 隐性丢失
const test = obj2.foo;
test() //undefined or global
```

**隐性丢失**：当隐性绑定到函数，失去绑定对象，将会使用默认绑定。



3. 显式绑定： 通过call和apply强制指定this的绑定对象

```javascript
function foo(sth){
  console.log(this.a, sth);
  return this.a + sth;
}

const obj ={ a:2 };

const bar = function(){
  return foo.apply(obj,arguments);
}
const b= bar(3); // 2 3
console.log(b) //5
```



4. new 绑定： 通过new 来创建新对象并绑定到this上

```javascript
function foo(a){
  this.a = a;
}
const bar = new foo(2);
console.log(bar.a); // 2

//在new 一个新的对象过程中
1. 创建一个全新的对象
2. 这个新的对象会被执行[[Prototype]]连接
3. 这个新的对象会绑定到函数调用的this
4. 如果这个函数没有返回其他对象， 那么new表达式中的函数会自动返回这个新对象
```



**绑定的优先级**: new绑定 > 显性绑定 > 隐性绑定 > 默认绑定

**箭头函数和this** : 箭头函数中的this 是根据外层作用域来定义

```JavaScript
function foo(){
  setTimeout(()=>{
    // 这里的this 在词法上继承自foo()
    console.log(this.a)
  },100);
}
function bar(){
  const self =this;
  setTimeout(function(){
    console.log(self.a);
  },100);
}
const obj ={a:2};
foo.call(obj); //2
bar.call(obj); // bar 和 foo 基本一样

```

