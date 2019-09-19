import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';


// 基础jsx、样式
let style = {
    color: 'r' + 'ed'
};

let jsx1 = <div className='jsx' style={style}>jsx....</div>;
ReactDOM.render(
    jsx1,
    document.getElementById('app')
);

// 数据逻辑处理
let name = '27';
let names = ['27', 'Tom', 'Jerry'];
let flag = false;
let jsx2 = (
    <div>
        {/* 变量的使用 */}
        <p>I am {name}</p>
        {/* 条件判断 */}
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }
        {/* 数组使用 */}
        {names.map((name, index) => <p key={index}>Hello, I am {name}</p>)}
    </div>
);
ReactDOM.render(
    jsx2,
    document.getElementById('app')
);
