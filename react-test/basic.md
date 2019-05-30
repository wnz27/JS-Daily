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
