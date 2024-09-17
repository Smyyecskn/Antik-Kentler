import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { data } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AntikCard from "./AntikCard";
import { useState } from "react";

const GeziCard = () => {
  //   console.log("data", data);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);
  return (
    <>
      <Form.Control
        onChange={handleSearch}
        placeholder="Search a Ancient City"
        className="w-50 m-auto"
        type="search"
      />
      <Container className="rounded-3 my-4 p-3 card-container">
        <Row className="justify-content-center g-4">
          {data // inputtakı arama işlevini filter ile yaptık.
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((item, i) => (
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
