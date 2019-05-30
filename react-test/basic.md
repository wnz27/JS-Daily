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
