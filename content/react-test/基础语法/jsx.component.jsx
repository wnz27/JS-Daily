import React from 'react';
import ReactDOM from 'react-dom';

// 基础组件写法
function Component(){
    return <h1>I am lllllllll!</h1>
}

class ES6Component extends React.Component{
    render() {
        return <h1>I am lllllllll   in  react!</h1>
    }
}

ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);
