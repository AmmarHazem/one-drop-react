import React from "react";

const HomeTabWashTypeCard = ({ name, description, image }) => {
  return (
    <div className="wash-type-card">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default HomeTabWashTypeCard;
