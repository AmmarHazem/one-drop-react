import { Outlet } from "react-router-dom";
import "../assets/styles/home.scss";
import HomeButtomNavBar from "../components/HomeBottomNavBar";

const Home = () => {
  return (
    <section className="home-section">
      <Outlet />
      <HomeButtomNavBar />
    </section>
  );
};

export default Home;
