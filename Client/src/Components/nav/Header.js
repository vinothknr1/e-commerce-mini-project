import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const { SubMenu, Item } = Menu;
const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let history = useNavigate();
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const Logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history("/login");
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <SubMenu icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">0ption 1</Item>
        <Item key="setting:2">0ption 2</Item>
        <Item icon={<UserOutlined />} onClick={Logout}>
          Logout
        </Item>
      </SubMenu>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
    </Menu>
  );
};
export default Header;
