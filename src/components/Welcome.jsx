import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading></Alert.Heading>
        <h1>Welcome to our Book-Store!</h1>

        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-warning">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Welcome</Button>}
    </>
  );
}

export default Welcome;
