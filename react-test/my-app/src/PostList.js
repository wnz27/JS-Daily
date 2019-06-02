import React, { Component } from "react";
import PostItem from "./PostItem";
import "./PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null; // 定时器
    this.handleVote = this.handleVote.bind(this); // ES 6的class中，必须手动绑定方法this的指向
  }
  componentDidMount() {
    // 用setTimeout 模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张三",
            date: "2017-09-01 10:00",
            vote: 0
          },
          {
            id: 2,
            title: "前端框架，你最爱哪一个",
            author: "李四",
            date: "2018-08-03 09:00",
            vote: 0
          },
          {
            id: 3,
            title: "Web App的时代已经到来",
            author: "王五",
            date: "2019-04-02 14:00",
            vote: 0
          }
        ]
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer); // 清除定时器
    }
  }
  handleVote(id) {
    // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    // 使用新的posts对象设置
    this.setState({
      posts: posts
    });
  }
  render() {
    return (
      <div className="container">
        <h2>帖子列表：</h2>
        <ul>
          {this.state.posts.map(item => (
            // 将id值付给key属性，作为唯一标识
            <PostItem key={item.id} post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
