[<< 返回首页](https://wolf-wolf.github.io/blog_record)

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

3、[React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

本文发于2018年，以可视化的方式讲解了React Hook的基本机制和原理
*2021-06*

1、[彻底理解浏览器的缓存机制（http缓存机制）](https://www.cnblogs.com/chengxs/p/10396066.html)

文章根据Http头，分别介绍了浏览器的强制缓存和协商缓存的方法

2、[A deep dive into React Fiber internals](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/)

文章主要讲解一下内容：

- React中元素的分类
- 帧率
- JS引擎工作流程
- fiber node的数据结构及含义
- fiber的更新算法

3、[精读《Webpack5 新特性 - 模块联邦》](https://zhuanlan.zhihu.com/p/115403616)

文章讲解了模块联邦（ModuleFederationPlugin）的基本原理及针对模块复用的应用方式

4、[阔别两年，webpack 5 正式发布了！](https://juejin.cn/post/6882663278712094727)

文章详细介绍了webpack 5相对于之前版本的更新内容

*2021-07*

1、[Deep dive: How do React hooks really work?](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)

文章介绍了React Hook基于闭包的基本实现原理，并且简易的模拟了`useState`和`useEffect`的实现方式，重点如下：

- hook的实现基于闭包，闭包数据存储了上次的状态数据，并存储了数据对应的索引，因此在hook的规则中要求：hook需要保证执行顺序，不可卸载条件判断或循环中
- 在每次进行render时，会重置数据索引，并按照之前各个hook的执行顺序进行新老数据diff，从而进行更新

