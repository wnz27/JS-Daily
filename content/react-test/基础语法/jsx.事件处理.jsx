import React from 'react';
import ReactDOM from 'react-dom';

// 事件处理方式
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '27',
            age : 18
        };
        this.handleClick = this.handleClick.bind(this) // 把this.handleClick绑定到组件上
    }
    handleClick(){
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={this.handleClick}>加一岁</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Component/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);

// 另一种事件绑定方法
class Component1 extends React.Component{
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
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                {/*另一种事件绑定方法*/}
                <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
            </div>
        )
    }
}

// 事件处理方式2
class Component3 extends React.Component{
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

ReactDOM.render(
    <div>
        <Component/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);

