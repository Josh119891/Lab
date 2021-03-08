/*
 * @Author: josh119891
 * @Date: 2021-01-20 09:40:48
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-20 09:50:44
 * @Description: file content
 */

class Stack {
  constructor() {
    this.container = [];
    this.count = 0;
  }

  push(item) {
    this.container[this.count] = item;
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    if (this.count == 0) return undefined
    this.count -= 1;
    const temp = this.container[this.count];
    delete this.container[this.count];
    return temp;
  }

  peek() {
    if (this.count == 0) return undefined

    return this.container[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.container = [];
    return this.container;
  }

}

const stack = new Stack();


console.log(stack.push(1));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack.push(1));
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.clear());
console.log(stack);