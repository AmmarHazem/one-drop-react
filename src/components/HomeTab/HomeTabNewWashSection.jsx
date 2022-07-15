import { Row, Col } from "antd";
import HomeTabWashTypeCard from "./HomeTabWashTypeCard";

const HomeTabNewWashSection = ({ washTypes }) => {
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
