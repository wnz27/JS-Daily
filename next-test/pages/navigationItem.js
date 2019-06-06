import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 205px;
  height: 55px;
`;

export default class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Nav>
        <div>新品上市</div>
        <div>丶目DIY</div>
        <div>潮流时尚</div>
        <Img src="/static/zhumulogo.png" alt="zhumulogo" />
        <div>系列分类</div>
        <div>探索丶目</div>
        <div>登录</div>
      </Nav>
    );
  }
}
