var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  if (!this.outStack.length) {
    if (!this.inStack.length) {
      return -1;
    }
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop())
    }
  }
  return this.outStack.pop();



};