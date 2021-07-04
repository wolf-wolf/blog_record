## [算法](https://wolf-wolf.github.io/blog_record/article/algorithm/index)

*2021-05*

1、[程序员必须掌握哪些算法？](https://www.zhihu.com/question/23148377)

文章的回答中针对算法进行了总结，包括六大基本算法思想、空间/时间复杂度计算方式，同时对算法进行了脑图拆解，并给出了一些兴趣资源

2、[看动画轻松理解时间复杂度（一）](https://www.cxyxiaowu.com/1996.html)
[看动画轻松理解时间复杂度（二）](https://www.cxyxiaowu.com/1984.html)

文章（一）中讲解了基础的时间复杂度的计算方式和由来，并针对常用的时间复杂度量级进行了基本介绍，包括如下： 常数阶O(1)、 线性阶O(n)、平方阶O(n²)、对数阶O(logn)、线性对数阶O(nlogn)；
在文章（二）中介绍了递归的时间复杂度，最好最坏时间复杂度，平均情况时间复杂度以及均摊复杂度的计算方式


## [应用](https://wolf-wolf.github.io/blog_record/article/apply/index)

*2021-05*

1、[前端架构演进 - 从单体到微前端（理论篇）](https://mp.weixin.qq.com/s/eNC69rNqSR8XtXDmw66bVQ)

本文明确的观点是无论何种技术都是为了解决问题而存在。以作者自身项目为例，拆分了技术/框架变更的操作过程，包括了发现问题、变更时机、目标、技术选型（使用single-spa，但并未深入讲解）、后备方案、任务拆分等。

*2021-06*

1、[浅谈 JS 防抖和节流](https://segmentfault.com/a/1190000018428170)

本文讲解了对防抖和节流的理解及使用：
- 防抖：对于短时间内连续触发的事件，防抖的含义就是让某个时间期限内，事件处理函数只执行一次。
- 节流：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
*2021-07*

1、[Best Frontend Frameworks of 2021 for Web Development](https://www.simform.com/best-frontend-frameworks/#section8)

本文介绍了2021年排行较前的前端框架，Top 3：Vue，React，Angular，新进框架：Svelte，EmberJs。并针对各个框架的特点及适用情况进行了详细的对比与讲解

## [面试](https://wolf-wolf.github.io/blog_record/article/interview/index)

*2021-05*

1、[如何一步步 get 大厂前端 offer，或许你可以参考这份成长经历。](https://mp.weixin.qq.com/s/35GC0FHQ47GjQ7GwbFYtUQ)

本文以QA方式介绍了面试的基本准备，重点说明了框架技术的学习步骤、明确适可而止的学习边界。并提供了部分TS、React、《算法》等博客和书籍，可自行查阅。

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

## [工具](https://wolf-wolf.github.io/blog_record/article/tools/index)

*2021-05*

1、[JavaScript Visualizer 9000](https://www.jsv9000.app/)

用于查看JavaScript的内部事件循环，微任务，宏任务的可视化示例

2、[Can I use](https://caniuse.com/)

用于查看JS，CSS的特性在各浏览器的兼容性
