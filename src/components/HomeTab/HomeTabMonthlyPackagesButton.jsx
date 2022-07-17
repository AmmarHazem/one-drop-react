import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import image from "../../assets/images/7.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const HomeTabMonthlyPackagesButton = () => {
  return (
    <section className="monthly-packages-btn">
      <Row className="justify-content-center">
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
          <Link to="/monthly-packages">
            <div className="btn-container">
              <img src={image} alt="Monthly packges" />
              <div className="text">Monthly Packges</div>
              <div className="trailing-btn">
                <ArrowRightOutlined />
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default HomeTabMonthlyPackagesButton;
