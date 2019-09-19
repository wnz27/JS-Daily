import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from 'react-router-dom';

// hash router
    class A extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>Component A</div>
        )
    }
}

class B extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>Component B</div>
        )
    }
}

class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a">组件A</Link>
                <br/>
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>, // 只能写一个组件，如果想同时使用两个就用一个标签包起来
    document.getElementById('app')
);

