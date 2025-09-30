import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";
const BooksCard = () => {
  console.log(fantasy);
  return fantasy.map((book) => (
    <>
      <Container className="d-flex justify-content-around">
        <Row>
          <Col>
            <Card className=" bg-warning " style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}€</Card.Text>
                <Card.Text className="text-muted">{book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  ));
};

export default BooksCard;
