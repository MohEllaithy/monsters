import "./card.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://www.robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;