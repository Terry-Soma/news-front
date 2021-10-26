import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useContext } from "react";
import { Card } from 'react-bootstrap';
import "react-quill/dist/quill.snow.css";
import { Avatar } from 'antd';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
function CreatePost({ content, setContent, postSubmit, handleImage, image, uploading, title, setTitle }) {

    return (
        <>
            <Card className="text-black">
                <div className="card-body pb-3">
                    <form className="form-group">
                        <div className="form-group mb-5">
                            <label className="dark-text"
                                htmlFor="exampleFormControlInput1">Гарчиг</label>
                            <textarea className="form-control" onChange={e => setTitle(e.target.value)}
                                value={title} id="exampleFormControlInput1" placeholder="Гарчигаа оруулна уу" />
                        </div>
                        {/* {JSON.stringify(state)} */}
                        <label className="dark-text"
                            htmlFor="exampleFormControlInput1">Агуулга</label>
                        <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={e => setContent(e)}
                            className="form-control"
                            placeholder="Мэдээ бичнэ үү ...." />
                        <label className="warning-text"
                            htmlFor="exampleFormControlInput1">Нийтлэх товчийг дарахаас өмнө сайн бодоорой</label>
                        <div className="card-footer d-flex justify-content-between text-muted">
                            <button
                                disabled={!content || !title}
                                onClick={postSubmit}
                                className="btn btn-primary btn-sm mt-1"
                            >
                                Нийтлэх
                            </button>
                            <label className="dark-text"
                                htmlFor="exampleFormControlInput1">Зургаа оруулахдаа сайн бодоорой</label>
                            <label>
                                {image && image.url ? (
                                    <Avatar size={30} src={image.url} className="mt-1" />
                                ) : uploading ? (
                                    <LoadingOutlined className="mt-2" />
                                ) : (
                                    <CameraOutlined className="mt-2" />
                                )}
                                <input onChange={handleImage}
                                    type="file" accept="images/*" hidden />
                            </label>
                            {/* Зураг сонгох */}
                        </div>
                    </form>
                </div>
            </Card>
        </>
    );
}

export default CreatePost;