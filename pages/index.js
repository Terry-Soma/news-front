import {
  Row,
  Col,
} from "react-bootstrap";
import Layout from 'components/layout';
import Intro from "components/intro-e";
import ListItem from "components/list-item-e";
import { getAllNews } from "lib/_api";
import NewsItem from "components/news-item-e";
import AsideNews from "components/aside-news-e";

export default function Home({ news }) {
  
  return (
    <Layout>
      <Row>
        <Col md="6">
          <Intro />
        </Col>
      </Row>

      <hr />
      <Row className="mb-5">
        <Col md="8">
          <ListItem />
        </Col>
        <Col md="4">
          <ListItem />
        </Col>
      </Row>
      <pre>{JSON.stringify(news.data, null, 4)}</pre>

      <Row >
        <Col key={news.data.id} md="8">
          {news.data.map(medee => (
            <NewsItem news={medee} key={medee.id} />
          ))}
        </Col>
        <Col md="4" >
          <div className="border border-danger">
            <div className="flex-item">
              <ul>
                <li>
                  <button type="button" onClick={console.log("jak")} className="btn btn-primary" >Jak</button>
                </li>
                <li>
                  <button type="button" onClick={console.log("Rival")} className="btn btn-light">Rival</button>
                </li>
              </ul>
            </div>
            {news.data.map(medee => <AsideNews news={medee} key={medee.id} />)}
          </div>
        </Col>
      </Row>
    </Layout >
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
