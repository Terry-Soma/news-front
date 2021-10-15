
import React, { useState } from "react";
import Layout from 'components/layout';

import { useQuill } from 'react-quilljs';
import renderHTML from 'react-render-html';
import 'quill/dist/quill.snow.css';
const Home = () => {
  const { quill, quillRef } = useQuill();
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
    }
  }, [quill]);
  const [value, setValue] = useState('');
  //   console.log(quill.root.innerHTML);
  return (
    <>
      <Layout>

        <div style={{ width: 1000, height: 300 }}>
          <div ref={quillRef} onChange={console.log()} />
        </div>
        {/* <ReactQui={{ll
                theme="snow"
                value={content}
                onChange={console.log(e.target.value)}
                className="form-control"
                placeholder="Write something..."
            /> */}
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
      </Layout >
      <button onClick={() => console.log(quill.root.innerHTML)}> TOo</button>

      {/* <button onClick={setValue(quill.root.innerHTML)}></button> */}
      <div>{renderHTML(quill.root.innerHTML)}</div>
    </>

  )
}
export default Home;
