import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { data } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntikCard from "./AntikCard";

const GeziCard = () => {
  //   console.log("data", data);
  return (
    <>
      <Form.Control
        placeholder="Search a Ancient City"
        className="w-50 m-auto"
      />
      <Container className="rounded my-4 p-3 card-container">
        <Row className="justify-content-center g-4">
          {data.map((item, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <AntikCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GeziCard;
