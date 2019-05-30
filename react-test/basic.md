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
