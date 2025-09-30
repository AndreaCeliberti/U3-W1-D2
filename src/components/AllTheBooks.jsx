import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";
const BooksCard = () => {
  console.log(fantasy);
  return fantasy.map((book) => (
    <>
      <Col>
        <Card fluid key={book} className=" bg-warning " style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}€</Card.Text>
            <Card.Text className="text-muted">{book.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  ));
};

export default BooksCard;
