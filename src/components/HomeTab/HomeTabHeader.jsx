import React from "react";
import { Link } from "react-router-dom";
import { BellOutlined } from "@ant-design/icons";

const HomeTabHeader = () => {
  return (
    <header className="home-tab-header">
      <div className="title">Welcome</div>
      <div className="trailing">
        <Link className="notifications-btn" to="/notifications">
          <BellOutlined />
        </Link>
      </div>
    </header>
  );
};

export default HomeTabHeader;
