import { Card } from "react-bootstrap";

const AntikCard = ({ name, history, img }) => {
  return (
    <Card className="rounded-3 card ">
      <Card.Img className="card-img" variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default AntikCard;
