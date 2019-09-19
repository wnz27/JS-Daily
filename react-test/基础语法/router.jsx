// 页面路由
window.location.href = "http://www.baidu.com";
history.back(); // 回退

// hash路由
window.location = '#hash';

// H5路由
// 推进一个状态
history.pushState('name','Title','/path');
// 替换一个状态
history.replaceState('name','Title','/path');
// 事件，popstate
window.onpopstate = function () {
    console.log(window.location.href); // 全路径，即全部完整的路径
    console.log(window.location.pathname); // 取绝对路径
    console.log(window.location.hash); // 取哈希
    console.log(window.location.search);
};

