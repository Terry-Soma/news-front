import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Layout from 'components/layout-p';
import { useRouter } from "next/router";
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import "react-quill/dist/quill.snow.css";
import CreatePost from "components/post-form-e";
import { UserContext } from 'context/_userProvider';
import UserNews from 'components/usernews-e';
import { ConsoleSqlOutlined } from "@ant-design/icons";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategory] = useState([]);
  const [categoryId, setCat] = useState('');
  const [image, setImage] = useState({});
  const [state, setState] = useContext(UserContext);
  const [uploading, setUploading] = useState(false);
  const [userNews, setUserNews] = useState([]);
  /* done */
  const postSubmit = async (e) => {
    e.preventDefault();
    let dog = content.replace(/<img .*?>/g, "");
    try {
      const { data } = await axios.post('http://localhost:5001/api/v1/news/', { title, image, dog, categoryId }, {
        headers: {
          Authorization: `Bearer ${state}`
        },
      });
      console.log("response ====>>>>", data);
    } catch (err) {
      console.log(err);
    }
  }
  /* done */
  const handleCategory = (e) => {
    setCat(e.target.value);
  }
  /* done */
  useEffect(() => {/* information of category */
    try {

      axios.get("http://localhost:5001/api/v1/categories/publisher").then(({ data }) => setCategory(data.data)).catch(err => console.log(err));
      setLoading(true);
      axios.post("http://localhost:5001/api/v1/user/news", {}, {
        headers: {
          Authorization: `Bearar ${state}`
        }
      }).then(({ data }) => setUserNews(data.data)).catch(error => console.log(error.message));
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  }, [state]);

  /* done */
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post('http://localhost:5001/api/v1/news/upload-image', formData);
      // const data = {
      // url: "https://res.cloudinary.com/example-ddd/image/upload/v1634708297/potjm7pfnt0h9figmks9.jpg",
      // public_id: "potjm7pfnt0h9figmks9"
      // }
      // debugger
      setImage({ url: data.url, public_id: data.public_id });
      setContent(content + `<img src="${data.url}" alt="title" />`);
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  const handleEdit = async () => {
    console.log("jak")
  };
  const handleDelete = async () => {
    console.log("del")
  };

  return (
    <Layout >
      <Row>
        <Col md="8">
          <CreatePost
            content={content}
            setContent={setContent}
            postSubmit={postSubmit}
            handleImage={handleImage}
            image={image}
            uploading={uploading}
            title={title}
            setTitle={setTitle}
            categories={categories}
            handleCategory={handleCategory}
          />
        </Col>
        <Col md="4" >
          <Card className="text-black con">
            {loading ? <Spinner animation="border" variant="success" /> : null}
            {userNews && userNews.map(news => <UserNews news={news} loading={loading} key={news._id} handleEdit={handleEdit} handleDelete={handleDelete} />)}
          </Card>
        </Col>
      </Row>
    </Layout >
  )

};
export default Home;
