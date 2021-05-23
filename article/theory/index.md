## [理论](https://wolf-wolf.github.io/blog_record/article/theory/index)

*2021-05*

1、[node基础面试事件环？微任务、宏任务？一篇带你飞](https://blog.csdn.net/eeewwwddd/article/details/80862682)

本文简述了node的概念（运行时）和特性，并与`java`进行了对比：
 - `node` 有更好的并发处理性能，能更快地I/O操作（操作数据库）
 - `node` 不适用于大型密集CPU预算的服务。

2、[A deep dive into queues in Node.js](https://blog.logrocket.com/a-deep-dive-into-queues-in-node-js/)

本文深度讲述了`node`的事件循环机制，将其拆解为三个模块概念，分为为 `Call Stack`，`Event loop`，`Callback Queue`，其中将`Callback Queue`拆解为以下几部分：
 - `microtask callback queue (process.nextTick)`，
 - `microtask callback queue (promises)`，
 - `timer callback queue`，
 - `I/O callback queue`，
 - `check callback queue`，
 - `close callback queue`，

并针对各个队列的应用以及整体的先后顺序进行了详细介绍
*index*

## [理论](https://wolf-wolf.github.io/blog_record/article/theory)

*2021-05*

1、[node基础面试事件环？微任务、宏任务？一篇带你飞](https://blog.csdn.net/eeewwwddd/article/details/80862682)

本文简述了node的概念（运行时）和特性，并与`java`进行了对比：
 - `node` 有更好的并发处理性能，能更快地I/O操作（操作数据库）
 - `node` 不适用于大型密集CPU预算的服务。

2、[A deep dive into queues in Node.js](https://blog.logrocket.com/a-deep-dive-into-queues-in-node-js/)

本文深度讲述了`node`的事件循环机制，将其拆解为三个模块概念，分为为 `Call Stack`，`Event loop`，`Callback Queue`，其中将`Callback Queue`拆解为以下几部分：
 - `microtask callback queue (process.nextTick)`，
 - `microtask callback queue (promises)`，
 - `timer callback queue`，
 - `I/O callback queue`，
 - `check callback queue`，
 - `close callback queue`，

并针对各个队列的应用以及整体的先后顺序进行了详细介绍
*index*

## 理论

*2021-05*

1、[node基础面试事件环？微任务、宏任务？一篇带你飞](https://blog.csdn.net/eeewwwddd/article/details/80862682)

本文简述了node的概念（运行时）和特性，并与`java`进行了对比：
 - `node` 有更好的并发处理性能，能更快地I/O操作（操作数据库）
 - `node` 不适用于大型密集CPU预算的服务。

2、[A deep dive into queues in Node.js](https://blog.logrocket.com/a-deep-dive-into-queues-in-node-js/)

本文深度讲述了`node`的事件循环机制，将其拆解为三个模块概念，分为为 `Call Stack`，`Event loop`，`Callback Queue`，其中将`Callback Queue`拆解为以下几部分：
 - `microtask callback queue (process.nextTick)`，
 - `microtask callback queue (promises)`，
 - `timer callback queue`，
 - `I/O callback queue`，
 - `check callback queue`，
 - `close callback queue`，

并针对各个队列的应用以及整体的先后顺序进行了详细介绍


