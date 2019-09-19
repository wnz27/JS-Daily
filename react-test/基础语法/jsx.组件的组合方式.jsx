import React from 'react';
import ReactDOM from 'react-dom';

// 组件的组合方式
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '27',
            age : 18
        };
    }
    handleClick(){
        this.setState({
            age: this.state.age + 1
        })
    }
    onValueChange(e){
        this.setState({
            age : e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                {/*另一种事件绑定方法*/}
                <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
                <input type="text" onChange={(e) => {this.onValueChange(e)}}/>
            </div>
        )
    }
}

class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(props) {
        return <h1>{this.props.title}</h1>
    }
}

class App extends React.Component{
    render() {
        return (
            <div className="">
                {/* 容器式组件 */}
                <Title>
                    <span>App Span</span>
                    <a href="">link</a>
                </Title>
                <hr/>
                {/* 单纯组件 */}
                <Component/>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);
