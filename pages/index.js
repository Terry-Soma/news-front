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
      <Row classname="mb-1">
        {news.data.map(medee => (
          <Col md="4">
            <GridItem news={medee} />
          </Col>
        ))}



      </Row>
    </Layout>





  );
}

export const getStaticProps = async () => {
  const news = await getAllNews();

  return {
    props: {
      news
    }
  }

}