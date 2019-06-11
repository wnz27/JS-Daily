import React, { Component } from "react";
import styled from "styled-components";

export default class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Nav = styled.nav`
      display: flex;
      justify-content: space-around;
      align-items: center;
    `;

    const Img = styled.img`
      width: 205px;
      height: 55px;
    `;

    const Button = styled.button`
      font-size: 16px;
      background-color: transparent;
      border: 0;
      outline: none;
    `;

    return (
      <Nav>
        <Button>新品上市</Button>
        <Button>丶目DIY</Button>
        <Button>潮流时尚</Button>
        <Img src="../static/zhumulogo.png" alt="zhumulogo" />
        <Button>系列分类</Button>
        <Button>探索丶目</Button>
        <Button>登录</Button>
      </Nav>
    );
  }
}
