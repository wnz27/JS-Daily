import React, { Component } from "react";
import PostItem from "./PostItem";

// 真实项目中，帖子列表数据一般从服务器端获取
// 这里我们通过定义常量data存储列表数据
const data = [
  { title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00" },
  { title: "前端框架，你最爱哪一个", author: "李四", date: "2018-08-03 09:00" },
  { title: "Web App的时代已经到来", author: "王五", date: "2019-04-02 14:00" }
];
class PostList extends Component {
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {data.map(item => (
            <PostItem
              title={item.title}
              author={item.author}
              date={item.date}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
