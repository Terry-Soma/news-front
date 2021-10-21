import axios from 'lib/_axios';
import React, { useState } from "react";
import Layout from 'components/layout';
import "react-quill/dist/quill.snow.css";
import CreatePost from "components/post-form-e";
import { SecurityScanTwoTone } from '@ant-design/icons';
const Home = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  // const [news, setNews] = useState([]);

  const [image, setImage] = useState({});

  const [uploading, setUploading] = useState(false)
  const postSubmit = async (e) => {
    e.preventDefault();
    let dog = content.replace(/<img .*?>/g, "");
    // console.log("post => ", content);
    try {
      const { data } = await axios.post('http://localhost:5001/api/v1/news/', { title, image, dog });
      console.log("response ====>>>>", data);

    } catch (err) {
      console.log(err);
    }
  }

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      // const { data } = await axios.post('http://localhost:5001/api/v1/news/upload-image', formData);
      // console.log(data);
      const data = {
        url: "https://res.cloudinary.com/example-ddd/image/upload/v1634708297/potjm7pfnt0h9figmks9.jpg",
        public_id: "potjm7pfnt0h9figmks9"
      }

      // debugger
      /* data-to-image-set */
      setImage({ url: data.url, public_id: data.public_id });
      setContent(content + `<img src="${data.url}" alt="title" />`);
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  return (
    <>
      <Layout>
        <CreatePost
          content={content}
          setContent={setContent}
          postSubmit={postSubmit}
          handleImage={handleImage}
          image={image}
          uploading={uploading}
          title={title}
          setTitle={setTitle}
        />
      </Layout >
    </>
  )

};
export default Home;
