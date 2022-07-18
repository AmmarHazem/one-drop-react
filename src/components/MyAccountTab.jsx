import { Button } from "antd";
import useLogout from "../customHooks/useLogout";

const MyAccountTab = () => {
  const [loading, logout] = useLogout();

  return (
    <div>
      <h2>MyAccountTab</h2>
      <Button loading={loading} onClick={logout} type="primary" danger>
        Logout
      </Button>
    </div>
  );
};

export default MyAccountTab;
