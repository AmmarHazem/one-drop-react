import BackButton from "./BackButton";

const ODHeader = ({ title, showBackButton = true }) => {
  return (
    <header className="od-header">
      {showBackButton && <BackButton />}
      <div className="title-container">
        <h2 className="title">{title}</h2>
      </div>
    </header>
  );
};

export default ODHeader;
