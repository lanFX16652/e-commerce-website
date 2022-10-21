import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Information.module.css";

function Information() {
  return (
    <div className={classes.information_container}>
      <Container>
        <Row>
          <Col className={classes.information_column} sm>
            <h4>FREE SHIPPING</h4>
            <p>Free shipping worldwide</p>
          </Col>
          <Col className={classes.information_column} sm>
            <h4>24 X 7 SERVICE</h4>
            <p>Free shipping worldwide</p>
          </Col>
          <Col className={classes.information_column} sm>
            <h4>FESTIVAL OFFER</h4>
            <p>Free shipping worldwide</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Information;
