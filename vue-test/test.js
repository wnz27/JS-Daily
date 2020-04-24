var app = new Vue({
  el: "#app",
  data: {
    seen: true,
  },
});

//app.seen = false

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "学习 JavaScript" },
      { text: "学习 Vue" },
      { text: "整个牛项目" },
    ],
  },
});

app4.todos.push({ text: "新项目" });

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    // a: 'true',
    // b: 'false',
    toggle: 'true'
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    radio:''
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    selected: '1',
    options: [
      {text: '跑步', value: '1'},
      {text: '瑜伽', value: '2'},
      {text: '读书', value: '3'}
    ],
    methods:{
      switchSelect(optionValue){
        this.selected = optionValue
      } 
    }
  }
})
