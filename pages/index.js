import { Row, Col, Spinner } from "react-bootstrap";
import Layout from "components/layout";
import Intro from "components/intro-e";
import ListItem from "components/list-item-e";
import { getAllNews } from "lib/_api";
import NewsItem from "components/news-item-e";
import AsideNews from "components/aside-news-e";
import { useState } from "react";
import axios from "axios";

export default function Home({ news }) {
  const [asideNews, setAsideNews] = useState(news.data); /* initial data */
  const [loading, setLoading] = useState(false);
  const Jak = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/v1/news/s"
      ); /* superior */
      setAsideNews(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const Rival = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/v1/news/t"
      ); /* trend */
      /* 1980 */
      setAsideNews(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
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
      {/* <pre>{JSON.stringify(news.data, null, 4)}</pre> */}

      <Row>
        <Col key={news.data.id} md="8">
          {news.data.map((medee) => (
            <NewsItem news={medee} key={medee.id} />
          ))}
        </Col>
        <Col md="4">
          <div className="border border-danger mh-1920">
            <div className="flex-item">
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={Jak}
                    className="btn btn-primary"
                  >
                    Шинэ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={Rival}
                    className="btn btn-light"
                  >
                    Онцлох мэдээ
                  </button>
                </li>
              </ul>
            </div>
            {loading ? <Spinner animation="border" className="absolute" /> : ""}
            {asideNews.map((medee) => (
              <AsideNews news={medee} />
            ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const news = await getAllNews();
  console.log("index.html build   =======>>>>>");
  return {
    props: {
      news,
    },
  };
};
