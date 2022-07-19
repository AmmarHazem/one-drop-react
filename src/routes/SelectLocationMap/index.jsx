import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { Wrapper } from "@googlemaps/react-wrapper";
import BackButton from "../../components/BackButton";
import GoogleMap, { Marker } from "../../components/GoogleMap";
import trimText from "../../helpers/trimText";
import useSearchAddressByText from "../../customHooks/useSearchAddressByText";
import RenderMapStatus from "./RenderMapStatus";
import { setAddressAction } from "../../redux/createOrderReducer";
import Loading from "../../components/Loading";

const SelectLocationMap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, searchAddressByText] = useSearchAddressByText();
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(3);
  const { googleAPIKey } = useSelector((state) => state.config);
  const { washType, address } = useSelector((state) => state.createOrder);

  useEffect(() => {
    if (!address) return;
    setMapCenter({ lat: address.lat, lng: address.lng });
    setMapZoom(16);
  }, [address]);

  const onClick = async (e) => {
    const prevCenter = { ...mapCenter };
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMapCenter({ lat, lng });
    const res = await searchAddressByText({ latlng: `${lat},${lng}` });
    if (!res || res.length === 0) {
      setMapCenter(prevCenter);
      return message.error("Error finding your selected address");
    }
    dispatch(setAddressAction(res[0]));
  };

  const onLocationSearchClicked = () => {
    navigate("/select-location");
  };

  if (!washType) {
    return <Navigate to="/" replace />;
  }

  if (!googleAPIKey) {
    return (
      <div className="d-flex justify-content-center pt-5">
        <h3>Something went wrong</h3>
      </div>
    );
  }

  let content = (
    <Wrapper render={RenderMapStatus} apiKey={googleAPIKey}>
      <GoogleMap onClick={onClick} zoom={mapZoom} center={mapCenter}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </Wrapper>
  );

  if (loading) {
    content = <Loading>{content}</Loading>;
  }

  return (
    <div className="select-location-map">
      <main className="map-wrapper">
        <BackButton />
        {content}
        <div className="location-search">
          <h3>Select your location</h3>
          {address ? (
            <>
              <div
                onClick={onLocationSearchClicked}
                className="user-address-item"
              >
                <div>
                  <div className="leading-icon" onClick={onClick}>
                    <EnvironmentOutlined />
                  </div>
                </div>
                <div className="details" onClick={onClick}>
                  <div className="name">{address.name}</div>
                  <div className="address">
                    {trimText({ text: address.address })}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="confirm-address-btn" type="primary">
                  Confirm Address
                </Button>
              </div>
            </>
          ) : (
            <div
              onClick={onLocationSearchClicked}
              className="search-location-btn"
            >
              <SearchOutlined />
              <div>Enter your location or select from saved ones</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SelectLocationMap;
