import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ size = 30 }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: size,
          }}
          spin
        />
      }
    />
  );
};

export default Loading;
