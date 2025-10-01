import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";

const BooksCard = () => {
  return (
    <Container>
      <Row md={6}>
        {fantasy.map((book) => (
          <Col>
            <Card fluid key={book} className=" bg-warning ">
              <Card.Img className="object-fit-cover" style={{ height: `250px` }} variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                <Card.Text>{book.price}€</Card.Text>
                <Card.Text className="text-muted">{book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BooksCard;
