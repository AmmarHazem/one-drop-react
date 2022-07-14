import { Row, Col } from "antd";
import image from "../../assets/images/1.svg";

const HomeTabMainTopCard = () => {
  return (
    <section className="main-top-card">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 14 }}>
          <div className="title">
            Washing your car is easier than any time before
          </div>
          <div className="subtitle">Book your next appointment easily</div>
          <div className="image">
            <img src={image} alt="One Drop" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HomeTabMainTopCard;
