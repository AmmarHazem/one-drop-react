import { SearchOutlined } from "@ant-design/icons";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import GoogleMap, { Marker } from "../../components/GoogleMap";

const SelectLocationMap = () => {
  const navigate = useNavigate();
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const { googleAPIKey } = useSelector((state) => state.config);
  const { washType } = useSelector((state) => state.createOrder);

  const onClick = (e) => {
    // console.log("--- map click", e);
    setMapCenter(e.latLng);
  };

  // const onIdle = (e) => {
  //   console.log("--- map idle", e);
  // };

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

  return (
    <div className="select-location-map">
      <main className="map-wrapper">
        <BackButton />
        <Wrapper render={renderMapStatus} apiKey={googleAPIKey}>
          <GoogleMap onClick={onClick} zoom={3} center={mapCenter}>
            <Marker position={mapCenter} />
          </GoogleMap>
        </Wrapper>
        <div className="location-search">
          <h3>Select your location</h3>
          <div
            onClick={() => {
              navigate("/select-location");
            }}
            className="search-location-btn"
          >
            <SearchOutlined />
            <div>Enter your location or select from saved ones</div>
          </div>
        </div>
      </main>
    </div>
  );
};

const renderMapStatus = (status) => {
  if (status === "FAILURE") {
    return (
      <div className="d-flex justify-content-center pt-5">
        <h3>Something went wrong</h3>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center pt-5">
      <Loading size={60} />
    </div>
  );
};

export default SelectLocationMap;
