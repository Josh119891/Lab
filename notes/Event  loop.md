

## why nodejs could run asynchronously with single thread?

1. 单线程是描述用JS语言的，因为JS runtime有event loop也叫主线程
2. nodejs can be asynchronous and have non-blocking I/O becasuse its event loop design
3. nodejs 是把js 代码 通过 V8, c++ binding (js2c.py, GYP编译方式)等来桥接上层的 JavaScript 代码与下层 C/C++类库 (如thread pool)

##  call stack

The event loop continuously checks the **call stack** to see if there's any function that needs to run.

While doing so, it adds any function call it finds to the call stack and executes each one in order.

## Message Queue

 setTimeout()  put the callback function in the message queue.

**The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.**

## ES6 Job Queue

ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It's a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack

## Node.js REPL(交互式解释器)

模拟电脑环境，通过终端交互, 例子 chrome的console

## Event loop

![loopOverview](/Users/josh/WorkStation/Lab/assets/loopOverview.png)

- **timers**: 要被执行的临界点，回调将会在指定时间后尽早执行 setTimeout()` and `setInterval()
- **pending callbacks**: executes I/O callbacks deferred to the next loop iteration.
- **idle, prepare**: only used internally.
- **poll**: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`); node will block here when appropriate.
- **check**: `setImmediate()` callbacks are invoked here.
- **close callbacks**: some close callbacks, e.g. `socket.on('close', ...)`.