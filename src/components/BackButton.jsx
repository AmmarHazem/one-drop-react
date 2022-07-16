import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="back-btn"
      onClick={() => {
        navigate(-1);
      }}
      type="text"
    >
      <ArrowRightOutlined />
    </Button>
  );
};

export default BackButton;
