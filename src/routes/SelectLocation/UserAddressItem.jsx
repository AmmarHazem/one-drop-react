import { Button } from "antd";
import { EnvironmentOutlined, BookOutlined } from "@ant-design/icons";

const UserAddressItem = ({ address, onClick, isSaved = true }) => {
  return (
    <div className="user-address-item">
      <div className="leading-icon" onClick={onClick}>
        <EnvironmentOutlined />
      </div>
      <div className="details" onClick={onClick}>
        <div className="name">{address.name}</div>
        <div className="address">{address.address}</div>
      </div>
      <Button
        onClick={() => {
          console.log("--- unsave");
        }}
        className={`save-btn ${isSaved ? "saved" : ""}`}
        type="text"
      >
        <BookOutlined />
      </Button>
    </div>
  );
};

export default UserAddressItem;
