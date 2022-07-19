import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAddressAction } from "../../redux/createOrderReducer";
import ODHeader from "../../components/ODHeader";
import UserAddressItem from "./UserAddressItem";

const SelectLocation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { washType } = useSelector((state) => state.createOrder);
  const addresses = user.addresses || [];

  const onAddressClicked = (item) => {
    // console.log("--- address", item);
    dispatch(setAddressAction(item));
  };

  if (!washType) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="select-location">
      <ODHeader title="Select Location" />
      <main>
        <div className="search-input">
          <Input
            size="large"
            placeholder="Search location here"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="saved-locations-header">Saved Locations</div>
        {addresses.length === 0 && (
          <p className="no-address-found">No addresses added before</p>
        )}
        {addresses.map((item) => {
          return (
            <UserAddressItem
              onClick={() => onAddressClicked(item)}
              key={item.id}
              address={item}
            />
          );
        })}
      </main>
    </div>
  );
};

export default SelectLocation;
