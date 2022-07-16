import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const Loading = ({ size = 30, children }) => {
  return (
    <Spin
      className="loading-spin"
      indicator={
        <Loading3QuartersOutlined
          style={{
            fontSize: size,
          }}
          spin
        />
      }
    >
      {children}
    </Spin>
  );
};

export default Loading;
