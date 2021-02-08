一, css 左中右布局  300_自适应_400 实现方式有几种说下实现细节 //
1. 第一种方案 flex
2. 第二种方案 float
3. 第三种方案 定位
4. 第四种方案 table 布局
5. 网格布局 grid

二, css 定位 相关 以及用到过那些 css3 // 了解

三, js 数据类型分那两种 区别是什么 // 了解

四, ajax 发送请求 的流程和原理以及 onreadystatechange 回调中 从0 到 4 发生了什么 不太熟
let xhr = new XMLHttpRequest()

xhr.open('GET', url, true)
xhr.onload = function(e) {
  if(this.status === 200) {
    let result = JSON.parse(this.responseText);
    resolve(result)
  }
}
xhr.onerror = function(err) {
  reject(err)
}
xhr.send()

0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪

五, 数组中用过的方法大概说一下以及如何使用

六, 对面向对象理解, 继承, 构造函数 原型对象 原型链 三者之间的关系  // 了解
1> 构造函数Fn身上有属性prototype为原型对象，原型对象内有constructor属性指向当前prototype所在的构造函数Fn
2> 在new执行构造函数Fn时，创造了一个实例对象f，实例对象f的__proto__指向构造函数Fn的原型prototype
3> 因为实例对象f的__proto__指向构造函数Fn的原型prototype，所以实例对象f可以间接访问到Fn原型prototype的方法

七, let const var 区别 以及 说一下闭包    // 了解

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i) // i 分别打印几
  })
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i) // i 分别打印几
  })
}

七, dom 事件委托原理以 // 了解

八, react 生命周期函数 // 了解 不够深入

九, ES6 工作中用到的那些 // 了解

十, 简要说一下js 的工作流程原理（js 事件循环）// 了解

十一, 当前项在数组中的项数并且以该项数组成一个新的数组（js题）
var arr = [1, 2, 3, 1, 1, 3, 4, 5, 6, 4, 5, 10, 1, 2, 2, 3];


// 发散题：
// 1. 遇到过哪些技术难题？如何解决的？
// 2. 平时的一些学习方法？以及如何平衡工作和学习上的关系？目前关注哪些技术方向（技术栈）
// 3. 简单描述下你对前端的看法，以及自身的发展方向（职业规划）



setTimeout(() => {
  console.log(2)
}, 0);
console.log(1);


// 总结 css js 基础还 算可以吧，都了解,
// 你好


// 一面总结 一些常用基础的 css js 掌握的还算可以，还在学校学习，
// 技术栈 vue， react 在自学，没有项目经验，git 不太会用，最后看骥哥面吧


// 一面席媛媛总结：
// 对于 css左中右两边固定中间自适应布局很了解说出来了5种方案
// ，对于相对定位搞不清，js 原生dom 方法属性不是很了解， 对js基础掌握的不够熟练，最后的js题没做出来，说中途有事，面试过程可能是信号不太好，听不太清楚她说的话，（一面面试没通过）


// 周莉同学面试总结：
// css 布局还不错  js 基础 还算可以吧，将一维数组切分成二维数组 js题目没做出来，实践能力不足， 目前在校学习 自学 vue 自己做过一些项目，react 了解一些也在自学， git 不了解 没用过，没有项目经验，一面没能过。