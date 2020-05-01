import React from 'react';
import ReactDOM from 'react-dom';

// props 用法
class Component extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        // setTimeout(() => {
        //     this.setState({
        //         name : '尼玛嗨！！！'
        //     })
        // }, 2000);
        return <h1>I am {this.props.name}   in  react!</h1>
    }
}

ReactDOM.render(
    <div>
        <Component name="272727"/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);
