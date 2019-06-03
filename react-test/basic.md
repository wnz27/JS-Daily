#开头说明

> 此篇笔记来源于拜读这本书：《React 进阶之路》，作者：徐超，清华大学出版社。

# ES6 语法简介

## 1、let、const

let,const 都是块级作用域，let 声明的变量只在 let 命令所在的代码块内有效，const 声明一个只读的常量。
// let 示例

```
{
    var a = 1;
    let b = 2
}
a    // 1
b    // ReferenceError: b is not defined.
```

// const 示例

```
const c = 3;
c = 4   // TypeError: Assignment to constant variable
```

## 2、箭头函数

ES 6 允许使用“箭头”（=>）定义函数。这种方式创建的函数不需要 **function** 关键字， 并且还可以**省略 return**关键字

**箭头函数内的 this 指向函数定义时所在的上下文对象，而不是函数执行时上下文对象。**例如

```
var f = a => a +1;
// 等价于
var f = function(a){
    return a + 1;
}

function foo(){
    this.bar = 1;
    this.f = (a) => a + this.bar;
}
// 等价于
function foo(){
    this.bar = 1;
    this.f = (function(a){
        return a + this.bar
    }).bind(this);
}
```

如果箭头函数的参数多余 1 个或者不需要参数，就需要使用一个圆括号代表参数部分。例如

```
var f = () => 1;
var f = (a, b) => a + b;
```

如果函数体内包含的语句多余一条，就需要使用大括号将函数体括起来，使用 return 语句返回。例如

```
var f = (x, y) => {
    x++;
    y--;
    return x + y;
}
```

## 3、模板字符串

模板字符串是增强版字符串，用反引号(\`\`)标识字符串。除了可以当做普通字符串使用外

他还可以用来定义多行字符串，以及在字符串中嵌入变量，功能很强大。例如

```
// 普通字符串
`react is wonderful !`

// 多行字符串
`JS is wonderful !
React is wonderful ! `

// 字符串中嵌入变量
var name = "React";
`Hello, ${name} ! `
```

## 4、解构赋值

ES 6 允许按照一定的模式从**数组和对象**中提取值，对变量进行赋值，这被称为解构。例如

```
// 数组解构
let [a, b, c] = [1, 2, 3];
a   // 1
b   // 2
c   // 3

// 对象解构
let name = "Lily";
let age = 4;
let person = {name, age};
person      // Object{name: "Lily", age: 4}

// 对象解构的另一种形式
let person = {name: "Lily", age: 4};
let {name, age} = person;
name    // "Lily"
age     // 4
```

函数的参数也可以使用解构赋值。

```
// 数组参数解构
function sum([x, y]){
    return x + y;
}
sum([1,2]);         // 3

// 对象参数解构
fucntion sum({x, y}){
    return x + y;
}
sum({x:1, y:2});    // 3
```

解构同样适用于嵌套结构的数组或对象。例如

```
// 嵌套结构的对象解构
let {person:{name, age}, foo} = {person:{name: "Lily", age: 4}, foo: 'foo'};
name    // "Lily"
age     // 4
foo     // "foo"
```

## 5、rest 参数

ES 6 引入 rest 参数**（形式为...变量名）**用于获取函数的多余参数，以代替 arguments 对象的使用。

rest 参数是一个数组，数组中的元素是多余的参数。注意，**rest 参数之后不能再有其他参数**。例如。

```
function languages(lang, ...types){
    console.log(types);
}
languages('JavaScript', 'Java', 'Python');  //["Java", "Pyhton"]
```

## 6、扩展运算符

扩展运算符是三个点**(...)**，它将一个**数组转为用逗号分隔的参数序列**，类似 rest 的逆运算。

- rest：多余参数序列转化为数组
- 扩展运算符：数组转化为参数序列

例如。

```
function sum(a, b, c){
    return a + b + c;
}
let numbers = [1, 2, 3]
sum(...numbers);    // 6
```

扩展运算符还常用于合并数组以及解构赋值结合使用，例如：

```
// 合并数组
let arr1 = ['a'];
let arr2 = ['b', 'c'];
let arr3 = ['d', 'e'];
[...att1, ...arr2, ...arr3];        //['a', 'b', 'c', 'd', 'e'];

// 与解构赋值结合
let [a, ...rest] = ['a', 'b', 'c'];
rest        // ['b', 'c']
```

扩展运算符还可以用于取出参数对象的所有可遍历属性，**复制**到当前对象之中，例如

```
let bar = {a: 1, b: 2};
let foo = {...bar};
foo             // Object{a: 1, b: 2};
foo === bar     // false
```

## 7、class

ES 6 引入了 class（类）这个概念，新的 class 写法让对象原型的写法更加清晰，也更像传统面向对象编程语言的写法。例如

```
// 定义一个类
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
}

// 根据类创建对象
let man = new Man('Jack', 20);
```

## 8、import、export

ES 6 实现了自己的模块化标准，ES 6 模块功能主要由两个关键字构成：export 和 import。

- export 用于规定模块对外暴露接口
- import 用于引入其他模块提供的接口

例如

```
// a.js，导出默认接口和普通接口
const foo = () => 'foo';
const bar = () => 'bar';
export default foo;     // 导出默认接口
export {bar};           // 导出普通接口

// b.js（与a.js在同一目录下），导入a.js中的接口
// 注意默认接口和普通接口导入写法的区别
import foo, {bar} from './a';
foo();          // "foo"
bar();          // "bar"
```

# JSX 简介

JSX 是一种用于描述**UI 的 JavaScript 扩展语法**，React 使用这种语法描述组件的 UI。

UI 和数据分离一直是前端领域的一个重要关注点。

为了解决这个问题，前端领域发明了模板，将 UI 的定义放入模板文件，将数据逻辑维护在 JS 代码中，然后通过模板引擎，根据数据和模板文件渲染出最终的 HTML 文件或代码片段。

React 致力于通过**组件**的概念将页面进行拆分并实现组件复用。

React 认为，一个组件应该是具备 UI 描述和 UI 数据的完整体，不应该将他们分开处理，于是发明了 JSX，作为**UI 描述和 UI 数据之间的桥梁。**

这样在组件内部可以使用类似 HTML 的标签描述组件的 UI，让 UI 结构直观清晰，同时因为 JSX 的本质上仍然是 JavaScript，所以可以使用更多的 JS 语法，构建更加复杂的 UI 结构

# JSX 语法

## 1、基本语法

JSX 的基本语法和 XML 语法相同，都是使用成对的标签构成一个树状结构的数据， 例如

```
const element = (
    <div>
        <h1>Hello, world!</h1>
    </div>
)
```

## 2、标签类型

在 JSX 语法中，使用的标签类型有两种：

- DOM 类型的标签（div、span 等）
  - 标签首字母必须小写
- React 类型的标签
  - 组件名称的首字母必须大写

React 正是**通过首字母大小写**判断渲染的是一个 DOM 类型的标签还是一个 React 组件类型的标签。例如

```
// DOM类型标签
const element = <h1>hello, world!</h1>

// React组件类型标签
const element = <HelloWorld />

// 二者可以互相嵌套使用
const element = (
    <div>
        <HelloWorld />
    </div>
)
```

## 3、JavaScript 表达式

JSX 可以使用 JavaScript 表达式，因为 JSX 本质上仍然是 JavaScript。

在 JSX 中使用 JavaScript 表达式需要将表达式用大括号“{}”包起来。

表达式在 JSX 中的使用场景主要有两个：

- 通过表达式给标签属性赋值
- 通过表达式定义子组件

例如

```
// 通过表达式给标签属性赋值
const element = <MyComponent foo={ 1 + 2 } />

// 通过表达式定义子组件（map虽然是函数， 但它的返回值是JavaScript表达式）
const todos = ['item1', 'item2', 'item3'];
const element = (
    <ul>
      {todos.map(message => <Item key={message} message=
      {message} />)}
    </ul>
);
```

JSX 中只能使用 JavaScript 表达式，而不能使用多行 JavaScript 语句

不过，JSX 中可以使用三目运算符或逻辑与（&&）运算符代替 if 语句的作用，例如

```
// 正确
let complete;
const element = (
    <div>
        {
          complete ? <CompletedList /> : null
        }
    </div>
)

// 正确
let complete;
const element = (
    <div>
        {
          complete && <CompletedList />
        }
    </div>
)
```

## 4、标签属性

### 当 JSX 标签是 DOM 类型的标签时，对应 DOM 标签支持的属性 JSX 也支持，例如：id、class、style、onclick 等。

但是部分属性的名称会有所改变，主要变化有：class 要写成 className

事件属性名采用驼峰格式，例如 onclick 要写成 onClick。

原因是：

- class 是 JavaScript 的关键字，所以改为 className
- React 对 DOM 标签支持的时间重新做了封装，封装时采用了更常用的驼峰命名法命名事件

例如

```
<div id='content' className='foo' onClick={() =>
{console.log('Hello, React')}} />
```

### 当 JSX 标签是 React 组件类型时， 可以任意自定义标签的属性名。

例如

```
<User name='React' age='4' address='America' >
```

## 5、注释

JSX 中的注释需要用大括号“{}”将/\*\*/包裹起来。例如

```
const element = (
    <div>
        {/* 这是一个注释 */}
        <span>React</span>
    </div>
)
```

<a id="JSX不是必须的"></a>

# JSX 不是必须的

> JSX 语法对使用 React 来说并不是必须的

JSX 语法只是 React.createElement(component, props, ...children)语法糖

所有的 JSX 语法最终都会被转换成对这个方法的调用。例如

```
// JSX语法
const element = <div className='foo'>Hello, React</div>

// 转换后
const element = React.createElement('div', {className:
'foo'}, 'Hello, React')
```

**虽然 JSX 只是一个语法糖，但使用它创建界面元素更加清晰简洁，在项目使用中应该首选 JSX 语法**

# 组件

## 组件定义

组件是 React 的核心概念，是 React 应用程序的基石。

组件将应用的 UI 拆分成独立的、可复用的模块，React 应用程序正是由一个一个组件搭建而成的。

定义组件的两种方式：

- 使用 ES 6class（类组件）
- 使用函数（函数组件）

使用 class 定义组件必须要满足两个条件：

- class 继承自 React.Component。
- class 内部必须定义 render 方法，render 方法返回代表该组件 UI 的 React 元素

使用 creat-react-app 新建一个简易的 BBS 项目， 在这个项目中定义一个组件 PostList， 用于展示 BBS 的帖子列表。

PostList 的定义如下：

```
// PostList.js
import React, { Component } from "react";
class PostList extends Component {
  render(){
    return(
      <div>
        帖子列表：
        <ul>
          <li>大家一起来讨论React吧</li>
          <li>前端框架，你最爱哪一个</li>
          <li>Web App的时代已经到来</li>
        </ul>
      </div>
    );
  }
}

export default PostList;
```

定义组件后，使用 ES 6 export 将 PostList 作为默认模块导出，从而可以在其他 JS 文件中导入 PostList 使用。

现在页面上还无法显示出 PostList 组件，因为我们还没有将 PostList 挂载到页面的 DOM 节点上。
需要使用 ReactDOM.render()完成这一工作

```
// index.js
import React from "react";
import ReactDOM from "react-dom";
import PostList from "./PostList";

ReactDOM.render(<PostList />, document.getElementById("root"));
```

使用 ReactDOM.render() 需要先导入 react-dom 库，这个库会完成**组件所代表的虚拟 DOM 节点到浏览器的 DOM 节点的转换**

## 组件的 props

在上一节中，PostList 中的每一个帖子都使用一个标签直接包裹

但一个帖子不仅包含帖子的标题，还会包含帖子的创建人、帖子创建时间等信息，这时候标签下的结构就会变得复杂，而且每一个帖子都需要重写一次这个复杂结构。

我们完全可以封装一个 PostItem 组件负责展示每一个帖子的展示，然后再 PostList 中直接使用 PostItem 组件，这样在 PostList 中就不需要为每一个帖子重复写一堆 JSX 标签。

但帖子列表的数据依然存在于 PostList 中，如何将数据传递给每一个 PostItem 组件？

这时候就要用到组件的 props 属性。**组件的 props 用于把父组件中的数据或者方法传递给子组件，供子组件使用。**

props 是一个简单结构的对象，它包含的属性正是由组件作为 JSX 标签时使用的属性组成。

例如下面是一个使用 User 组件作为 JSX 标签的声明：`<User name='React' age='4' address='America' >`

此时 User 组件的 props 结构如下：

```
props = {
    name: 'React',
    age: '4',
    address: 'America'
}
```

现在我们利用 props 定义 PostItem 组件：

```
// PostItem.js
import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { title, author, date } = this.props;
    return (
      <li>
        <div>{title}</div>
        <div>
          创建人：<span>{author}</span>
        </div>
        <div>
          创建时间：<span>{date}</span>
        </div>
      </li>
    );
  }
}

export default PostItem;
```

然后再 PostList 中使用 PostItem：

```
// PostList.js
import PostItem from "./PostItem";

// 真实项目中，帖子列表数据一般从服务器端获取
// 这里我们通过定义常量data存储列表数据
const data = [
  { title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00" },
  { title: "前端框架，你最爱哪一个", author: "李四", date: "2018-08-03 09:00" },
  { title: "Web App的时代已经到来", author: "王五", date: "2019-04-02 14:00" }
];
class PostList extends Component {
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {data.map(item => (
            <PostItem
              title={item.title}
              author={item.author}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
```

## 组件的 state

组件的 state 是组件内部的状态，state 的变化最终将反应到组件 UI 的变化上。

我们在组件的构造方法 constructor 中通过`this.state`定义组件的初始状态，并通过调用`this.setState`方法改变组件状态

`this.setState`方法是改变组件状态的唯一方法，调用之后组件 UI 也会随之重新渲染

我们来改造一下之前的项目。我们为每个帖子增加一个“点赞”按钮，每点击一次，该帖子的点赞数增加 1。

点赞数是会发生变化的，它的变化也会影响到组件 UI， 因此我们将点赞数 vote 作为 PostItem 的一个状态定义到它的 state 内。

```
// PostItem.js
import React, { Component } from "react";

class PostItem extends Component {
  // 构造方法
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    };
  }
  // 处理点赞逻辑
  handleClick() {
    let vote = this.state.vote;
    vote++;
    this.setState({
      vote: vote
    });
  }
  render() {
    const { title, author, date } = this.props;
    return (
      <li>
        <div>{title}</div>
        <div>
          创建人：<span>{author}</span>
        </div>
        <div>
          创建时间：<span>{date}</span>
        </div>
        <div>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            点赞
          </button>
          &nbsp;
          <span>{this.state.vote}</span>
        </div>
      </li>
    );
  }
}
export default PostItem;
```

这里有三个需要注意的地方：

1. 在组件的构造方法 constructor 内，首先要调用`super(props)`， 这一步实际上是调用了`React.Component`这个 class 的 constructor 方法，用来完成组件的初始化工作。
2. 在 constructor 中，通过`this.state`定义了组件的状态
3. 在 render 方法中，我们为标签定义了处理点击事件的响应函数，在响应函数内部会调用`this.setState`更新组件的点赞数

## 小结

前两节讲的 props 和 state 都会直接影响组件的 UI。

事实上可以将 React 组件看作是一个函数，函数的输入是`props`和`state`，函数的输出是组件的 UI。

```
UI = Component(props, state)
```

React 组件正是由 props 和 state 两种类型的数据驱动渲染出组件 UI。

- props 是组件对外的接口，组件通过 props 接受**外部传入的数据（包括方法）**。
- state 是组件对内的接口，组件内部状态的变化通过 state 来反映。

注意：

- props 是**只读的**，不能在组件内部修改 props
- state 是**可变的**，组件状态的变化通过修改 state 来实现。

## 有状态组件和无状态组件

定义无状态组件除了使用 ES 6class 的方式外，还可以使用函数定义。

一个函数组件接受 props 作为参数，返回代表这个组件 UI 的 React 元素结构。例如，下面一个简单地函数组件

```
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

可以看出函数组件的写法比类组件的写法要简洁的多，在使用无状态组件的时候，尽量将其定义成函数组件

在开发 React 应用时，要先思考哪些组件应设计成有状态组件，哪些设计成无状态组件。

应尽可能多的使用无状态组件，无状态组件不用关心状态的变化，只**聚焦于 UI 的展示，因为更容易被复用。**

React 应用组件设计的一般思路是：通过定义少数的有状态组件管理整个应用的状态变化，

并且将状态通过 props 传递给其余的无状态组件，由无状态组件完成页面绝大部分的 UI 的渲染工作。

总之

- 有状态组件主要关注处理状态变化的业务逻辑
- 无状态组件主要关注组件 UI 的渲染

#### 项目分析

来复盘下之前 BBS 项目的组件设计。当前设计不太合适，主要体现在：

1. 帖子列表通过一个常量 data 保存在组件之外，但帖子列表的数据是会改变的，新帖子的赠加或原有帖子的删除都会导致帖子列表数据的变化。
2. 每一个 PostItem 都维持一个 vote 状态，但除了 vote 以外，帖子其他的信息（如标题、创建人等）都保存在 PostList 中，这显然也不合理。

我们针对这两个组件进行重新设计

- 将 PostList 设计为有状态组件，负责帖子列表数据的获取，以及点赞行为的处理。
- 将 PostItem 设计为无状态组件，只负责每一个帖子的展示。

此时 PostList 和 PostItem 重构如下：

```
//PostList.js
import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null; // 定时器
    this.handleVote = this.handleVote.bind(this); // ES 6的class中，必须手动绑定方法this的指向
  }
  componentDidMount() {
    // 用setTimeout 模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张三",
            date: "2017-09-01 10:00",
            vote: 0
          },
          {
            id: 2,
            title: "前端框架，你最爱哪一个",
            author: "李四",
            date: "2018-08-03 09:00",
            vote: 0
          },
          {
            id: 3,
            title: "Web App的时代已经到来",
            author: "王五",
            date: "2019-04-02 14:00",
            vote: 0
          }
        ]
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer); // 清除定时器
    }
  }
  handleVote(id) {
    // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    // 使用新的posts对象设置
    this.setState({
      posts: posts
    });
  }
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {this.state.posts.map(item => (
            <PostItem post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;

// PostItem.js
import React from "react";

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li>
      <div>{post.title}</div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div>
        <button onClick={handleClick}>点赞</button>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

export default PostItem;
```

主要的修改有：

1. 帖子列表数据定义为 PostList 组建的一个状态。
2. 在 componentDidMount 生命周期方法中，通过 setTimeout 设置一个延时，模拟从服务器端获取数据，然后调用 setState 更新组件状态
3. 将帖子的多个属性（ID、标题、创建人、创建时间、点赞数）合并成一个 post 对象，通过 props 传递给 PostItem。
4. 在 PostList 内定义 handleVote 方法，处理点赞逻辑，并将该方法通过 props 传递给 PostItem。
5. PostItem 定义为一个函数组件，根据 PostList 传递的 post 属性渲染 UI。当发生点赞行为时，调用 props.onVote 方法将点赞逻辑交给 PostList 中的 handleVote 方法处理。

这样修改的好处与解释：

PostItem 只关注如何展示帖子，至于帖子的数据从何而来以及点赞逻辑如何处理，统统交给 PostList 处理。

组件之间解耦更加彻底，PostItem 组件更容易被复用

## 属性校验和默认属性

props 是一个组件对外暴露的接口，但到目前为止

组件内部没有明显地声明它暴露出哪些接口，以及这些接口的类型是什么，这不利于组件的复用

但 React 提供了 PropTypes 这个对象，用于校验组件属性的类型。

PropTypes 包含组件属性所有可能的类型，我们通过定义一个对象（对象的 key 是组件的属性名，value 是对应属性的类型）实现组件属性类型的校验。例如

```
import PropTypes from 'prop-types';

class PostItem extends React.Component{
    // .......
}
PostItem.propTypes = {
    post: PropTypes.object,
    onVote: PropTypes.func
};
```

PropTypes 可以校验的组件属性类型见下表：

| 组件类型                                                                     | PropTypes 对应属性 |
| :--------------------------------------------------------------------------- | :----------------- |
| String                                                                       | PropTypes.string   |
| Number                                                                       | PropTypes.number   |
| Boolean                                                                      | PropTypes.bool     |
| Function                                                                     | PropTypes.func     |
| Object                                                                       | PropTypes.object   |
| Array                                                                        | PropTypes.array    |
| Symbol                                                                       | PropTypes.symbol   |
| Element（React 元素）                                                        | PropTypes.element  |
| Node（可被渲染的节点：数字、字符串、React 元素或由这些类型的数据组成的数组） | PropTypes.node     |

当使用 PropTypes.object 或 proTypes.array 校验属性类型时，我们只知道这个属性是一个对象或者一个数组，至于对象的结构或数组元素的类型是什么样的，无从得知。

这种情况下更好的做法是使用 PropTypes.shape 或 PropTypes.arrayOf 例如。

```
style: PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
}),
sequence: PropTypes.arrayOf(PropTypes.number)
```

表示 style 是一个对象，对象有 color 和 fontSize 两个属性，color 是字符串类型，fontSize 是数字类型；sequence 是一个数组，数组的元素是数字。

如果属性是组件的必须属性，也就是当使用某个组件时，必须传入的属性，就需要在 PropTypes 的类型属性上调用`isRequired`。

在 BBS 项目中，对于 PostItem 组件，post 和 onVote 都是必须属性，PostItem 的 propTypes 定义如下：

```
import PropTypes from 'prop-types';

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
}
```

React 还提供了为**组件属性指定默认值的特性**，这个特性通过组件的`defaultProps`实现。

当组件属性未被赋值时，组件会使用 defaultProps 定义的默认属性。例如

```
function Welcome(props){
  return <h1 className='foo'>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
    name: 'Stranger'
};
```

# 组件样式

为组件添加样式的方法有两种：

- 外部 CSS 样式表
- 内联样式

## 外部 CSS 样式表

这种方式和平时我们开发 web 应用时使用外部 CSS 文件相同，CSS 样式表中根据 HTML 标签类型、ID、class 等选择器定义元素的样式。

唯一的区别是，React 元素要使用 className 来代替 class 作为选择器。例如，为 Welcome 组件的根节点设置一个 className='foo'的属性：

```
function Welcome(props){
    return <h1 className='foo'>Hello, {props.name}</h1>
}
```

然后再 CSS 样式表中通过 class 选择器定义 Welcome 组件的样式：

```
// style.css
.foo {
    width:100%;
    height:50px;
    background-color:blue;
    font-size:20px;
}
```

样式标的引入方式有两种，一种是在使用组件的 HTML 页面中通过标签引入

```
<link rel="stylesheet" type="text/css" href="style.css">
```

另一种是把样式表文件当做一个模块，在使用该样式表的组件中，像导入其他组件一样导入样式表文件：

```
import './style.css';       // 要保证相对路径设置正确

function Welcome(props){
    return return <h1 className='foo'>Hello, {props.name}</h1>
}
```

- 第一种引入样式表的方式常用于该样式表文件作用于整个应用的所有组件（一般是基础样式表）
- 第二种引入样式表的方式常用于该样式表作用于某个组件（相当于组件的私有样式）
- 所以，全局的基础样式表也可以使用第二种方式引入，一般在应用入口 JS 文件中引入。

#### 补充说明

使用 CSS 样式表经常遇到的一个问题是 class 名称冲突。业内解决这个问题的一个常用方案是使用 CSS Modules

CSS Modules 会对样式文件中的 class 名称进行重新命名从而保证其唯一性，但 CSS Modules 并不是必须的，**create-react-app 创建的项目，默认配置不支持这一特性。**

CSS Modules 的使用不复杂，想了解可自行了解： [CSS Modules](http://github.com/css-modules/css-modules)。

## 内联样式

内联样式实际上是一种 CSS in JS 的写法：将 CSS 样式写到 JS 文件中，用 JS 对象表示 CSS 样式

**然后通过 DOM 类型节点的 style 属性引用相应样式对象。**依然使用 Welcome 组件举例：

```
function Welcome(props){
  return(
    <h1 style={{
      width: "100%",
      height: "50px",
      backgroudColor: "blue",
      fontSize: "20px"
    }}>
      Hello, {props.name}
    </h1>
  );
}
```

注意：

> style 使用了两个大括号，这可能会让你感到迷惑。其实，第一个大括号表示 style 的值是一个 JavaScript 表达式，第二个大括号表示这个 JavaScript 表达式是一个对象。

换一种写法：

```
function Welcome(props){
    const style = {
      width: "100%",
      height: "50px",
      backgroudColor: "blue",
      fontSize: "20px"
    }
  return <h1 style={style}>Hello, {props.name}</h1>
}
```

#### 注意

格式的属性名必须使用驼峰格式的命名。所以，在 Welcome 组件中

`background-color`写成`backgroundColor`，`font-size`写成`fontSize`。

#### 回归 BBS 项目

创建 style.css、PostList.css 和 PostItem.css 三个样式文件，这样引入：

| CSS 文件     | CSS 文件引入位置 | CSS 导入语句(注意路径正误即可) | CSS 文件位置 |
| :----------- | :--------------- | :----------------------------- | :----------- |
| style.css    |                  | 无需导入                       | public       |
| PostList.css | PostList.js      | import "./PostList.css"        | src          |
| PostItem.css | PostItem.js      | import "./PostItem.css"        | src          |

> create-react-app 将 public 下的文件配置成可以在 HTML 页面中直接引用，因此我们将 style.css 放置在 public 文件夹下。
> 而 PostList.css 和 PostItem.css 是以模块的方式在 JS 文件中被导入的，因此放在 src 文件夹下。

```
// style.css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

ul {
  list-style: none;
}

h2 {
  text-align: center;
}

// PostList.css
.container {
  width: 900px;
  margin: 20px auto;
}

// PostItem.css
.item {
  border-top: 1px solid grey;
  padding: 15px;
  font-size: 14px;
  color: grey;
  line-height: 21px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  color: #009a61;
}

.like {
  width: 100%;
  height: 20px;
}

.like img {
  width: 20px;
  height: 20px;
}

.like span {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  display: table-cell;
}
```

我们还可以将 PostItem 中的点赞按钮换成图标，图标也可以作为一个模块被 JS 文件导入，如 PostItem.js 所示：

```
// PostItem.js

import React from "react";
import "./PostItem.css";
import like from "./images/like-default.png";  //图标作为模块被导入

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const { post } = props;
  return (
    <li className="item">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author}</span>
      </div>
      <div>
        创建时间：<span>{post.date}</span>
      </div>
      <div className="like">
        <span>
          <img src={like} onClick={handleClick} alt="vote" />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

export default PostItem;
```

## 组件和元素

> React 组件和元素这两个概念很容易混淆。

React 元素是一个普通的 JavaScript 对象，这个对象通过 DOM 节点或 React 组件描述界面是什么样子的。

JSX 语法就是用来创建 React 元素的，还记得 JSX 语法实际上是调用了[`React.createElement`方法](#JSX不是必须的)。例如

```
// Button是一个自定义的React组件

<div className='foo'>
  <Button color='blue'>
    OK
  </Button>
</div>
```

上面的 JSX 代码会创建下面的 React 元素：

```
{
  type: 'div',
  props: {
    className: 'foo',
    children:{
      type: 'Button',
      props:{
        color: 'blue',
        children: 'OK'
      }
    }
  }
}
```

React 组件是一个**class**或者**函数**，它接收一些属性作为输入，返回一个 React 元素。React 组件是由若干 React 元素组建而成的。

用下面例子解释 React 组件与 React 元素之间的关系：

```
// Button是一个React组件
class Button extends React.Component {
  render(){
    return (<button>OK</button>);
  }
}

// 在JSX中使用组件Button，button是一个代表Button的React元素
const button = <Button />;

// 在组件Page中使用React元素button
class Page extends React.Component {
  reder(){
    return(
      <div>
        {button}
      </div>
    );
  }
}

// 上面的Page写法等于下面这种写法：
class Page extends React.Component {
  reder(){
    return(
      <div>
        <Button />
      </div>
    );
  }
}
```

# 组件的生命周期

组件从被创建到被销毁的过程称为组建的生命周期。

React 为组件在不同的生命周期提供不同的生命周期方法，让开发者可以在组件的生命周期过程中更好地控制组件的行为。

组件的生命周期可以分为三个阶段：

- 挂载阶段

  1. `constructor`
  2. `componentWillMount`
  3. `render`
  4. `componentDidMount`

- 更新阶段
- 卸载阶段

## 挂载阶段

这个阶段组件被创建，执行初始化，并被挂在到 DOM 中，完成组件的第一次渲染。**依次调用**的声明周期方法有：

1. `constructor`
2. `componentWillMount`
3. `render`
4. `componentDidMount`

### 1、constructor

这是 ES 6 class 的构造方法，组件被创建时，会首先调用组件的构造方法。

这个构造方法接收一个 props 参数，props 是从父组件中传入的属性对象，如果父组件中没有传入属性而组件自身定义了默认属性，那么这个 props 指向的就是组件的默认属性。

**你必须在这个方法中首先调用`super(props)`才能保证 props 被传入组件中。**

constructor 通常用于**初始化组件的 state**以及**绑定事件处理方法**等。

### 2、componentWillMount

这个方法在组件被挂载到 DOM 前调用，且只会被调用一次。

这个方法在实际项目中很少被用到，因为可以在该方法中执行的工作都可以提前到 constructor 中。

**在这个方法中调用`this.setState`不会引起组件的重新渲染**

### 3、render

这是定义组件时唯一必要的方法（组件的其他生命周期方法都可以省略）。

这个方法中，根据组件的 props 和 state 返回一个 React 元素，用于描述组件的 UI，通常 React 元素使用 JSX 语法定义。

需要注意的是，render 并不负责组件的实际渲染工作，**render 只是返回一个 UI 的描述**，真正的渲染出页面 DOM 的工作由 React 自身负责。

render 是一个纯函数，在这个方法中不能执行任何有副作用的操作，所以**不能在 render 函数中调用`this.setState`**，这会改变组件的状态。

#### 个人理解

render 是返回一个 UI 描述，所谓 UI 描述不就是返回页面的元素，而你`this.setState`方法不就是重新设置页面元素吗，所以肯定不能在你返回页面元素的同时改变页面元素，这不合理。

### 4、componentDidMount

在组件被挂载到 DOM 后调用，且只会被调用一次。这时候已经可以获取到 DOM 结构，因此依赖 DOM 节点的操作可以放到这个方法中。

**这个方法通常会用于向服务器端请求数据。**

**在这个方法中调用 this.setState 会引起组件的重新渲染。**

## 更新阶段

组件被挂载到 DOM 后，组件的 props 或 state 可以引起组件更新。props 引起的组件更新，本质上是由渲染该组件的父组件引起的。

也就是当父组件的 render 方法被调用时，组件会发生更新过程，这个时候组件 props 的值可能变也可能不变，因为父组件可以使用相同的对象或值为组件的 props 赋值。

但无论 props 是否改变，父组件的 render 每调用一次，都会导致组件更新。

State 引起组件更新，是通过 this.setState 修改组件 state 来触发的。

组件更新阶段，**依次调用**的生命周期方法有：

1. componentWillReceiveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate

## 1、componentWillReceiveProps(nextProps)

这个方法只在 props 引起的组件更新过程中，才会被调用。state 引起的组件更新并不会触发该方法的执行。

方法的参数 nextProps 是父组件传递给当前组件的新 props。

因为 render 不保证 props 发生变化，也就是说 nextProps 的值可能和子组件当前 props 的值相等

因此往往需要比较 nextProps 的和 this.props 来决定是否执行 props 发生变化后的逻辑

比如根据新的 props 调用 this.setState 触发组件的重新渲染。

### 注意

1. componentWillReceiveProps 中调用 setState，只有在组件 render 以及其之后的方法中，this.state 指向的才是更新后的 state，render 之前的两个方法，this.state 依然指向的是更新前的 state。
2. 通过调用 setState 更新组件状态并不会触发 componentWillReceiveProps 的调用，否则可能会进入死循环：componentWillReceiveProps --> this.setState --> componentWillReceiveProps，因为我们一般会在 componentWillReceiveProps 中去调用 setState

## 2、shouldComponentUpdate(nextProps, nextState)

该方法决定组件是否继续执行更新过程。当方法返回 true 时（该方法默认返回 true）组件会继续更新过程。

当返回 false 时，组件更新过程停止，后续的三个方法不会再被调用。一般通过比较 nextProps 和 nextState 和组件当前的 props 和 state 决定这个方法的返回结果。

这个方法是用来减少组件不必要的渲染，从而优化组件的性能。

## 3、componentWillUpdate(nextProps, nextState)

这个方法在 render 调用前执行，可以作为组件更新发生前执行某些工作的地方，一般很少用。

### 注意

在 shouldComponentUpdate 和 componentWillUpdate 中都不能调用 setState，否则会引起循环调用问题，render 永远不会被调用，组件也无法正常渲染。

## 5、componentDidUpdate(prevProps, prevState)

组件更新后被调用，可以作为**操作更新后的 DOM 的地方**。两个参数是代表更新前 props 和 state

# 卸载阶段

组件从 DOM 中被卸载的过程，这个过程中只有一个生命周期方法：

- componentWillUnmount
  这个方法在组件被卸载前调用，可以在**执行一些清理工作**：

比如清除组件使用的定时器，清除 componentDidMount 中手动创建的 DOM 元素等，以避免引起内存泄漏。

### 注意

**只有类组件才有生命周期，函数组件是没有生命周期方法的**

# 列表和 Keys

在组件渲染列表数据是非常常见的场景，例如 PostList 组件就需要根据列表数据 posts 进行渲染：

```
render() {
    return (
      <div className="container">
        <h2>帖子列表：</h2>
        <ul>
          {this.state.posts.map(item => (
            <PostItem post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
}
```

然后我们用浏览器打开控制台，会有警告：**应该为列表中每个元素添加一个名为 key 的属性。**

### 这个属性有什么作用呢？

React 使用 key 属性来标记列表中的每个元素，当列表数据发生改变时，React 就可以通过 key 直到哪些元素发生了改变，从而只重新渲染发生变化的元素，提高渲染效率。

一般只是用列表数据的 ID 作为 key 值即可，例如可以使用帖子的 ID 作为每一个 PostItem 的 key：

```
render() {
    return (
      <div className="container">
        <h2>帖子列表：</h2>
        <ul>
          {this.state.posts.map(item =>
            // 将id值付给key属性，作为唯一标识
            <PostItem key={item.id} post={item} onVote={this.handleVote} />
          )}
        </ul>
      </div>
    );
}
```

再次运行，警告就不存在了。

虽然列表元素的 key 不能重复，但这个唯一性仅限于在当前列表中，而不是全局唯一。可以在一个组件中两次使用 post.id 作为列表数据的 key。在两个不同的列表里。

# 事件处理

在 React 元素中绑定时间有两点需要注意

1. 在 React 中，事件的命名采用驼峰命名方式，而不是 DOM 元素中的小写字母命名方式。如，onclick 要写成 onClick， onchange 要写成 onChange
2. 处理事件（图片引用也是对象）的响应函数**要以对象的形式赋值给事件属性**，而不是 DOM 中的字符串形式。例如，在 DOM 中绑定一个点击事件这样写：

```
<button onclick="clickButton()">
  Click
</button>
```

而在 React 元素中绑定一个点击事件变成这种形式：

```
<button onClick={clickButton}>
  Click
</button>
```

React 中的时间是合成时间，并不是原生的 DOM 时间。React 根据 W3C 规范定义了一套兼容各个浏览器的事件对象。

在 DOM 事件中，可以通过处理函数返回 false 来阻止事件的默认行为。但在 React 事件中，必须显式的调用事件对象的 preventDefault 方法来阻止事件的默认行为。

除了这一点外，DOM 事件和 React 事件在使用上并无差别。

如果在某些场景下必须使用 DOM 提供的原生事件，可以通过 React 事件对象的 nativeEvent 属性获取。

### 注意

在 React 组件中处理事件最容易出错的地方是在事件处理函数中**this 的指向问题**因为 ES6 class 并**不会为方法自动绑定 this 到当前对象**。

React 事件处理函数的写法主要有**三种方式，不同的写法解决 this 指向问题的方式也不同**

## 使用箭头函数

直接在 React 元素中采用箭头函数定义事件的处理函数，例如

```
class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {number: 0};
  }
}
  render(){
    return(
      <button onClick={(event) =>
      {console.log(this.state.number);}}>
      </button>
    );
  }
```

因为箭头函数中的 this 指向的是函数定义时的对象，所以可以保证 this 总是指向当前组件的实例对象。

当事件处理逻辑比较复杂时，如果把所有的逻辑直接写在 onClick 的大括号内，就会导致 render 函数变得臃肿，不容易直观地看出组件的 UI 结构，代码的可读性也不好。

这时，可以把逻辑封装成组件的一个方法，然后再箭头函数中调用这个方法。

```
class MyComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  // 每点击一次Button，state中的number增加1
  handleClick(event) {
    const nubmer = ++this.state.number;
    this.setState({
      number: number
    });
  }
  render(){
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={(event) =>
        {this.handleClick(event);}}>
          Click
        </button>
      </div>
    );
  }
}
```

直接在 render 方法中为元素事件定义事件处理函数，最大的问题是每次 render 调用时，都会创建一个新的事件处理函数，带来额外的性能开销，组件所处层级越低，这种开销就越大，因为任何一个上层足迹建的变化都可能会触发这个组件的 render 方法。当然在大多数情况下，这点性能损失是可以不必在意的。

## 使用组件方法

直接将组件的方法赋值给元素的时间属性，同时在类的构造函数中，将这个方法的 this 绑定到当前对象。例如

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  // 每点击一次Button，state中的number增加1
  handleClick(event) {
    const nubmer = ++this.state.number;
    this.setState({
      number: number
    });
  render(){
    return (
      <div>
        <div>{this.state.number}</div>
          <button onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}
```

这种方式的好处是每次 render 不会重新创建一个回调函数，没有额外的性能损失。但在构造函数中，为事件处理函数绑定 this，尤其是存在多个时间处理函数需要绑定时，这种模板式的代码还是会显得繁琐。

有些开发者还习惯在为元素的事件属性赋值时，同时为事件处理函数绑定 this。例如

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number:0}
  }
  // 每点击一次Button，state中的number增加1
  handleClick(event) {
    const nubmer = ++this.state.number;
    this.setState({
      number: number
    });
  render(){
    return (
      <div>
        <div>{this.state.number}</div>
          // 事件属性赋值和this绑定同时进行
          <button onClick={this.handleClick.bind(this)}>
          Click
        </button>
      </div>
    );
  }
}
```

使用 bind 会创建一个新的函数，因此这种写法依然存在每次 render 都会创建一个新函数的问题。

但在需要**为处理函数传递额外参数**时，这个方法就有了用武之地。例如，下面列子需要为 handleClick 传入参数 item：

```
class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[1, 2, 3, 4],
      current: 1
    };
  }
  // 点击每一项时，将点击项设置为当前选中项，因此需要把点击项作为参数传递
  handleClick(item,event) {
    this.setState({
      current: item
    });
  }
  render(){
    return (
      <ul>
        {this.state.list.map(
          (item) => (
            // bind除了绑定this，还绑定item作为参数，供handleClick使用
            <li className={this.state.current === item ? 'current':''} onClick={this.handleClick.bind(this,item)}>
              {item}
            </li>
          )
        )}
      </ul>
    );
  }
}
```

## 属性初始化语法（property initializer syntax）

使用 ES 7 的 property initializers 会自动为 class 中定义的方法绑定 this。例如：

```
class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {number: 0};
  }
  // ES7的初始化语法，实际上也是使用了箭头函数
  handleClick = (event) => {
    const number = ++this.state.number;
    this.setState({
      number:number
    });
  }
  render(){
    return (
      <div>
        <div>{this.state.number}</div>
          <button onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}
```

这种方式既不需要在构造函数中手动绑定 this，也不需要担心组件重复渲染导致的函数重复创建问题。

但是 property initializers 这个特性还处于试验阶段，默认是不支持的。不过使用官方脚手架 Create React App 创建的项目默认是支持这个特性的。

你也可以自行在项目中引入 babel 的 transform-class-properties 插件来获取这个特性支持。

# 表单

和其他元素相比，表单元素在 React 中的工作方式存在一些不同。

像 div、p、span 等非表单元素只需要根据组件的属性或者状态进行渲染即可，但表单元素自身维护一些状态，而这些状态默认情况下是不受 React 控制的。

例如，input 元素会根据用户的输入自动改变显示内容，而不是从组件的状态中获取显示的内容。我们称这类状态不受 React 控制的表单元素为**非受控组件**

在 React 中，状态的修改必须通过组件的 state，非受控组件的行为显然有悖于这一原则。为了让**表单元素状态的变更也能通过组件的 state 管理**，React 采用**受控组件的技术**达到这一目的。

## 受控组件

> 如果一个表单元素的值是由 React 来管理的，那么它就是一个受控组件。

React 组件渲染表单元素，并在用户和表单元素发生交互时控制表单元素的行为，从而保证组件的 state 成为界面上所有元素状态的唯一来源。

对于不用的表单元素，React 的控制方式略有不同。下面我们就看一下三类常用表单元素的控制方式。

### 1、文本框

文本框包含类型为 text 的 input 元素和 textarea 元素。它们受控的主要原理是

- 通过表单元素的 value 属性设置表单元素的值
- 通过表单元素的 onChange 事件监听值的变化，并将变化同步到 React 组件的 state 中。

例如

```
class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 监听用户名和密码两个imput值的变化
  hadleChange(event){
    const target = event.target;
    this.setState({[target.name]: target.value});
  }
  // 表单提交的响应函数
  handleSubmit(event){
    console.log('login successfully');
    event.preventDefault();
  }

  render(){
    return (
      <form>
        <label>
          用户名：
          // 通过value设置input显示内容，通过onChange监听value的变化
          <input type="text" name="name value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          密码：
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="登录" />
      </form>
    );
  }
}
```

用户名和密码两个表单元素的值是从组件的 state 中获取，当用户更改表单元素的值时，onChange 事件会被触发，

对应的 handleChange 处理函数会把变化同步到组件的 state，新的 state 又会触发表单元素重新渲染，从而实现对表单元素状态的控制。

#### 技巧

这个例子还包含一个处理多个表单元素的技巧：通过为两个 input 元素分别指定 name 属性，

使用同一个函数 handleChange 处理元素值的变化，在处理函数中根据元素的 name 属性区分事件的来源。

这样的写法比为每一个 input 元素指定一个处理函数简洁得多。

### textarea

> **textarea 的使用方式和 input 几乎一致。**

### 2、文本框
