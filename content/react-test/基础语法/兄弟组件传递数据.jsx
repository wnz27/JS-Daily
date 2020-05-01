import React from 'react';
import ReactDOM from 'react-dom';

// 数据传递与状态提升
class Child1 extends React.Component{
    constructor(props){
        super(props);

    }
    handleClick(){
        this.props.changeChild2Color('red');
    }
    render() {
        return (
            <div>
                <h1>Child1： {this.props.bgColor}</h1>
                <button onClick={(e) => {this.handleClick(e)}}>改变Child2的bgColor</button>
            </div>
        )
    }
}

class Child2 extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div style={{background:this.props.bgColor}}>
                <h1>Child2的背景颜色： {this.props.bgColor}</h1>
            </div>
        )
    }
}

class Father extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            child2BgColor: '#999'
        }
    }
    onChild2BgColorChange(color){
        this.setState({
            child2BgColor: color
        })
    }
    render(props) {
        return (
            <div>
                <Child1 bgColor={this.state.child2BgColor} changeChild2Color={(color) => {this.onChild2BgColorChange(color)}}/>
                <Child2 bgColor={this.state.child2BgColor}/>
            </div>
        );

    }
}

ReactDOM.render(
    <div>
        <Father/>
    </div>, // 只能写一个组件，如果想同时使用两个就用一个div包起来
    document.getElementById('app')
);
