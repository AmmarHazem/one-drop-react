import { useState } from "react";
import { Input } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useSearchAddressByText from "../../customHooks/useSearchAddressByText";
import { setAddressAction } from "../../redux/createOrderReducer";
import ODHeader from "../../components/ODHeader";
import UserAddressItem from "./UserAddressItem";
import Loading from "../../components/Loading";

const SelectLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState();
  const [searchResults, setSearchResults] = useState(null);
  const [loading, searchAddressByText] = useSearchAddressByText();
  const { user } = useSelector((state) => state.auth);
  const { washType } = useSelector((state) => state.createOrder);
  const addresses = user?.addresses || [];

  const onAddressClicked = (item) => {
    // dispatch(setAddressAction({ ...item, lat: 40.714224, lng: -73.961452 }));
    dispatch(setAddressAction(item));
    navigate("/select-location-map", { replace: true });
  };

  const onSearchClicked = async (value) => {
    // console.log("--- search locaiton", value);
    if (!value?.trim()) return;
    const address = value.trim();
    const res = await searchAddressByText({ address });
    setSearchText(address);
    if (res) {
      setSearchResults(res);
    }
  };

  if (!washType) {
    return <Navigate to="/" replace />;
  }

  let content;
  if (loading) {
    content = (
      <div className="d-flex justify-content-center align-items-center pt-5">
        <Loading />
      </div>
    );
  } else if (searchText && searchResults?.length === 0) {
    content = (
      <div className="d-flex justify-content-center align-items-center pt-5">
        <h3>
          No results found for <strong>{searchText}</strong>
        </h3>
      </div>
    );
  } else if (searchResults) {
    content = (
      <>
        <div className="saved-locations-header">Found Locations</div>
        {searchResults.map((item) => {
          return (
            <UserAddressItem
              key={item.id}
              address={item}
              isSaved={false}
              onClick={() => onAddressClicked(item)}
            />
          );
        })}
      </>
    );
  } else {
    content = (
      <>
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
      </>
    );
  }

  return (
    <div className="select-location">
      <ODHeader title="Select Location" />
      <main>
        <div className="search-input">
          <Input.Search
            size="large"
            placeholder="input search text"
            onSearch={onSearchClicked}
            allowClear
            enterButton
          />
        </div>
        {content}
      </main>
    </div>
  );
};

export default SelectLocation;
