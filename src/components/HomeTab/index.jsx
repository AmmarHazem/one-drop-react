import "../../assets/styles/home_tab.scss";
import HomeTabHeader from "./HomeTabHeader";
import HomeTabMainTopCard from "./HomeTabMainTopCard";
import HomeTabNewWashSection from "./HomeTabNewWashSection";
import HomeTabMonthlyPackagesButton from "./HomeTabMonthlyPackagesButton";
import useWashTypes from "../../customHooks/useWashTypes";
import Loading from "../Loading";

const HomeTab = () => {
  const [washTypes, loadingWashTypes] = useWashTypes();

  let content;
  if (loadingWashTypes) {
    content = <Loading size={60} />;
  } else if (!washTypes) {
    content = <h3>Something went wrong</h3>;
  } else if (washTypes.length === 0) {
    content = <h3>No wash types found</h3>;
  } else {
    content = (
      <>
        <HomeTabMainTopCard />
        <HomeTabNewWashSection washTypes={washTypes} />
        <HomeTabMonthlyPackagesButton />
      </>
    );
  }

  return (
    <div className="home-tab">
      <HomeTabHeader />
      <main className="home-tab-content">{content}</main>
    </div>
  );
};

export default HomeTab;
