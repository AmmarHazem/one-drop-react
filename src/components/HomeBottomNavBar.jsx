import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  UnorderedListOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HomeBottomNavBar = () => {
  return (
    <nav className="home-bottom-nav-bar">
      <HomeBottomNavBarButton to="/" name="Home" icon={<HomeOutlined />} />
      <HomeBottomNavBarButton
        to="/my-orders"
        name="My Orders"
        icon={<UnorderedListOutlined />}
      />
      <HomeBottomNavBarButton
        to="/target"
        name="Target"
        icon={<LineChartOutlined />}
      />
      <HomeBottomNavBarButton
        to="/signup-send-email-verification"
        name="My Account"
        icon={<UserOutlined />}
      />
    </nav>
  );
};

const HomeBottomNavBarButton = ({ to, name, icon }) => {
  return (
    <NavLink className="bottom-nav-bar-btn" to={to}>
      <div className="bottom-nav-link-btn-content">
        <div className="home-bottom-nav-bar-icon">{icon}</div>
        <div className="home-bottom-nav-bar-name">{name}</div>
      </div>
    </NavLink>
  );
};

export default HomeBottomNavBar;
