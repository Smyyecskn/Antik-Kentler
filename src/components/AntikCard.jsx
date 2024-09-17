import { useState } from "react";
import { Card } from "react-bootstrap";

const AntikCard = ({ name, history, img }) => {
  const [showImage, setShowImage] = useState(true);
  // console.log(showImage);
  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <Card
      className="rounded-3 card"
      role="button"
      // onClick={() => setShowImage(!showImage)}
      onClick={handleClick}
    >
      {showImage ? (
        <Card.Img className="card-img" variant="top" src={img} />
      ) : (
        <ul className="list-group list-group-flush">
          {history.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default AntikCard;
