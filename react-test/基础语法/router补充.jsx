import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

// 直接把整个地址替换为/a或者/b,直接输入地址后端是找不到的
class A extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                Component A
                <Switch>
                    <Route exact path={`${this.props.match.path}`} // exact路径完全匹配，如果不加即使是选择/a/123，也会先匹配到第一个不带参数中去。
                           render={(route)=>{
                               return <div>当前组件是不带参数的A</div>
                           }}
                    />
                    <Route path={`${this.props.match.path}/sub`} // 把通配放在最后，这样一般不会出现问题。
                           render={(route)=>{
                               return <div>当前组件是sub</div>
                           }}
                    />
                    <Route path={`${this.props.match.path}/:id`}
                           render={(route)=>{
                               return <div>当前组件是带参数的A，参数是：{route.match.params.id}</div>
                           }}
                    />
                </Switch>
            </div>
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
                <hr/>
                <Link to="/a/123">带参数的组件A</Link>
                <hr/>
                <Link to="/b">组件B</Link>
                <hr/>
                <Link to="/a/sub">/a/sub</Link>{/* 像123和sub路径结构一样，如何区分哪个是参数哪个是子路径? 解决方式见上面 */}
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
