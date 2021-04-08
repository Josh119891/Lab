# TypeScript 装饰器

装饰器是基于强类型语言而生成的特殊声明。 可作用于

- class 
-  property
- method
- accessors
- parameter

### Class Decorator

``` typescript
const initBus = (target:Function)=>{
  // target = class constructor
  return class extends target {
    occupied = 1;
    running = true,
  }
}
@initBus
class Bus{}
```

### Method Decorator

```typescript
const underMaxOccupied = (num: number) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) =>  {
  //  target = class 
  //  propertyKey = method name 
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
   if(this.occupied < this.number){
       originalMethod.apply(this, args);
   }else{
     	console.log("no more passengers")
   }
  };
  return descriptor;
}

class Bus {
  @underMaxOccupied(50)
  drive() {
    console.log("drive 2 next stop");
  }
}

```



### field decorators	

```typescript

const changeValue = (value) => (target: Object, propertyKey: string) => {
  Object.defineProperty(target, propertyKey, { value });
};
```





### REFERENCE

https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/

https://www.youtube.com/watch?v=O6A-u_FoEX8&ab_channel=Fireship

https://www.youtube.com/watch?v=bRAcWk9S-6g&ab_channel=BenAwad