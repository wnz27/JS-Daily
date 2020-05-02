#### el

创建的 Vue 实例中，el 选项用于指定一个页面中已经存在的 DOM 元素来挂在 Vue 实例，
它可以是**HTMLElement，也可以是 CSS 选择器。**

#### data

data 选项用声明应用内需要双向绑定的数据。建议所有会用到的数据都预先在 data 中声明，
这样不至于将数据散落在业务逻辑中，难以维护。

#### Object.freeze()

这个方法可以东街一个对象，一个被冻结的对象再也不能被修改。冻结了一个对象后不能向这个对象添加新的属性，
不能删除已有属性，不能修改对象已有属性的可枚举性、可配置性、可写性，也不能修改已有属性的值。
此外，冻结一个对象的原型也不能被修改。

#### 前缀\$

除了数据属性之外，Vue 还有一些有用的实例属性与方法。它们都有前缀\$，以便于读者自定义的属性区分开来。

### 实例的生命周期

每个 Vue 实例在被创建的时候，都要经历一系列的初始化过程。例如，需要设置数据监听、编译模板、将实例挂载到 DOM，
并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了开发者在不同阶段添加自己代码的机会。

#### 常用生命周期钩子的函数：

- beforeCreate -- 在 Vue 实例创建之前执行的函数
- created -- 实例创建之后调用
- beforeMount -- 在 Vue 实例创建之后，数据未渲染时负责接管 DOM 之前执行的函数
- mounted -- el 挂载到实例上后调用，一般我们的第一个业务逻辑会在这里开始
- beforeDestory -- 实例销毁之前调用。主要解绑一些使用 addEventListener 监听的事件
- destroyed -- Vue 实例在执行 vm.destroyed()命令之后，销毁之后执行的函数
- beforeUpdate -- 在 Vue 实例数据更新之前执行的函数
- updated -- 在 Vue 实例数据更新之后执行的函数

> 这些钩子和 el 以及 data 类似，也是作为选项写入 Vue 实例内，并且钩子的 this 指向它的 Vue 实例。

### 模板语法

Vue 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据上。
所有 Vue 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 奖模板编译成虚拟 DOM 渲染函数。结合响应系统，
Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

#### 插值

###### 1、文本

最常见的是使用“Mustache”语法（双大括号）的文本插值：

```
<span>Message: {{ message }}</span>
```

Mustache 标签将会被替代为对应数据对象上 message 属性的值。无论何时，
绑定的数据对象上 message 属性发生了改变，插值处的内容都会更新。

通过`v-once`指令，也能执行一次性的插值，当数据改变时，插值处的内容不会更新。
但这会影响到该节点上的其他数据绑定：

```
<span v-once>这个将不会改变: {{ message }}</span>
```

###### 2、原始 HTML

双大括号会将数据解释为普通文本，而非 HTML 代码，为了输出真正的 HTML，我们需要`v-html`指令。
这个指令会把你插入的 html 的字符串渲染到页面上，而双大括号会把这个 html 字符串原样显示在页面上。

> 不能使用 v-html 来符合局部模板，因为 Vue 不是基于字符串的模板引擎。
> 对于用户界面（UI），组件更适合作为可重用和可组合的基本单位。

注意：！！！！！！！

> 站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。
> 请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

###### 3、使用 JavaScript 表达式

在模板中，一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定，Vue 都提供了完全的**JavaScript 表达式**支持。

```
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
```

上面这些**表达式**会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。
【限制就是，每个绑定都只能包含单个表达式】所以下面的例子不会生效：

```
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}
<!-- 控制流也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

正确使用 JavaScript 表达式

```
<div id="app">
    <p>3个27总共{{ fish * number + data }}元</p>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            fish: 3,
            number: 10,
            data: 10
        }
    })
</script>
```

会显示出`3条鱼总共310元`

#### 指令

指令（Directives）是带有“v-”前缀的体术特性。指令特性的值预期是单个 JavaScript 表达式（v-for 是例外情况）。
指令的职责是，当表达式的值改变时，将其产生的连带影响响应式的作用于 DOM。

```
<p v-if="boole">现在你看到我了</p>
```

上面的代码中，v-if 指令将根据表达式布尔值（boole）的真假来插入或者移除`<p>`元素。

###### 1、参数

**一些指令能够接受一个“参数”，在指令名称之后以冒号表示。**
例如，v-bind 指令可以用于响应式地更新 HTML 特性：

```
<a v-bind:href="url">...</a>
```

在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。
v-on 指令用于监听 DOM 事件，例如下面代码：

```
<a v-on:click="doSomething">...</a>
```

参数 click 是监听的事件名。

###### 2、修饰符

修饰符（modifier）是以半角句点“.”指明的特殊后缀，用于指出一个指令应该以特殊的方式绑定。
例如，.prevent 修饰符告诉 v-on 指令对于触发的时间调用`event.preventDfault()`：

```
<form v-on:submit.prevent="onSubmit">...</form>
```

#### 缩写

“v-”前缀作为一种视觉提示，用来识别模板中 Vue 特定的特性。在使用 Vue 为现有标签添加动态时，“v-”前缀很有帮助。
然而，对于一些频繁用到的指令来说，就会感到使用起来很繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序
（SPA-Single page application）时，“v-”前缀也变得没那么重要了。因此，Vue 为`v-bind`和`v-on`这两个
最常用的指令提供了特定简写。

###### 1、v-bind 缩写

```
<!-- 完整语法 -->
<a v-bind:href="url>...</a>
<!-- 缩写 -->
<a :href="url>...</a>
```

###### 2、v-on 缩写

```
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>
```

这俩字符在所有支持 Vue 的浏览器都可以被正确的解析，而且不会出现在最终的渲染标记里。

#### 计算属性
计算属性在computed选项中定义。计算属性就是当其依赖属性的值发生变化时，这个属性的值会自动更新，
与之相关的DOM也会同步更新。这里的依赖属性值是data中定义的属性。

下面是一个反转字符串的示例，定义了一个reversedMessage计算属性，在input输入框中输入字符串时，
绑定的message属性值发生变化，触发reversedMessage计算属性，执行对应的函数，使字符串反转。
```
<div id="compute">
    输入内容：<input type="text" v-model="message"><br />
    反转内容：{{ reversedMessage }}
</div>
var compute = new Vue({
    el: '#compute',
    data: {
      message: ''
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
})
```
计算属性的写法和方法相似，完全可以在methods中定义一个方法来实现相同的功能。如
```
<div id="compute">
    输入内容：<input type="text" v-model="message"><br />
    反转内容：{{ reversedMessage() }}  //注意这里
</div>
var compute = new Vue({
    el: '#compute',
    data: {
      message: ''
    },
    methods: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
})
```
计算属性本质就是一个方法，只不过在使用计算属性的时候，把计算属性的名称直接作为属性来使用，
并不会把计算属性作为一个方法去调用。

###### 为什么还要用计算属性而不是去定义一个方法呢？？？
计算属性时基于它们的依赖进行缓存的，即只有在相关依赖发生改变时它们才会重新求值。

例如在上面的例子中，只要message没有发生变化，多次访问reversedMessage计算属性会立即返回之前的计算结果，
而不必再次执行函数。
反之，如果使用方法的形式实现，当使用到reversedMessage方法时，无论message属性是否发生改变，
方法都会重新执行一次，无形之中增加了系统开销。

在某些情况下，计算属性和方法可以实现相同的功能，但有一个重要的不同点：
**在调用methods中的一个方法时，所有方法都会被调用。**

使用计算属性则不同，计算属性相当于优化了的方法，使用时只会使用对应的计算属性。

> Attention：计算属性的调用不能使用括号，调用方法要加上括号。

计算属性相比较于方法更加优化，但并不是什么时候都适合使用计算属性，在触发事件时还是使用对应的方法。
计算属性一般在数据量比较大、比较耗时的情况下使用。
