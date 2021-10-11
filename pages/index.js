import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import MyNav from "components/nav-e";
import Intro from "components/intro-e";
import ListItem from "components/list-item-e";
import GridItem from "components/grid-item-e";

export default function Home() {
  return (
    <Container>
      <MyNav />
      <div className="news-detail-page">
        <Row>
          <Col md="12">
            <Intro />
          </Col>
        </Row>

        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <ListItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">Мэдээ </a>
          {" | "}
          <a href="#">Холбогдох</a>
        </div>
      </footer>
    </Container>
  );
}
