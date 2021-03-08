/*
 * @Author: josh119891
 * @Date: 2021-01-20 10:29:04
 * @LastEditors: josh119891
 * @LastEditTime: 2021-01-20 10:36:39
 * @Description: file content
 */

class Queue {
  constructor() {
    this.container = [];
  }
  print() {
    console.log(this.container);
  }

  enqueue(item) {
    return this.container.push(item);
  }

  dequeue() {
    return this.container.shift()
  }

  size() {
    return this.container.length;
  }

  isEmpty() {
    return this.container.length === 0;
  }
}

const queue = new Queue();
console.log(queue.enqueue("sf"))
console.log(queue.dequeue())
console.log(queue.size())
