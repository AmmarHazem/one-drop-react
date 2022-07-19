import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeTabWashTypeCard from "./HomeTabWashTypeCard";
import { setWashTypeAction } from "../../redux/createOrderReducer";

const HomeTabNewWashSection = ({ washTypes }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onWashTypeClicked = (washType) => {
    dispatch(setWashTypeAction(washType));
    navigate("/select-location-map");
  };

  return (
    <section className="new-wash-section">
      <Row>
        <Col span={24}>
          <h2 className="title">Order new wash</h2>
        </Col>
        <Col span={24}>
          <div className="wash-types">
            {washTypes.map((item) => {
              return (
                <HomeTabWashTypeCard
                  onClick={() => onWashTypeClicked(item)}
                  key={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HomeTabNewWashSection;
