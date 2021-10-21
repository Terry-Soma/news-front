import {
  Row,
  Col,
} from "react-bootstrap";
import Layout from 'components/layout';
import Intro from "components/intro-e";
import ListItem from "components/list-item-e";
import GridItem from "components/grid-item-e";
import { getAllNews } from "lib/_api";

export default function Home({ news }) {
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <Row className="mb-5">
        <Col md="10">
          <ListItem />
        </Col>
      </Row>
      <pre>{JSON.stringify(news.data, null, 2)}</pre>
      <Row className="mb-5">
        {news.data.map(medee => (
          <Col key={medee.id} md="4">
            <GridItem news={medee} key={medee.id} />
          </Col>
        ))}



      </Row>
    </Layout>





  );
}

export const getStaticProps = async () => {
  const news = await getAllNews();
  console.log("index.html build   =======>>>>>");
  return {
    props: {
      news
    }
  }

}