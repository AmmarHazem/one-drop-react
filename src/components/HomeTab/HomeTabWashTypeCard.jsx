import trimText from "../../helpers/trimText";

const HomeTabWashTypeCard = ({ name, description, image, onClick }) => {
  return (
    <div onClick={onClick} className="wash-type-card">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="description">
        {trimText({ text: description, length: 80 })}
      </div>
    </div>
  );
};

export default HomeTabWashTypeCard;
