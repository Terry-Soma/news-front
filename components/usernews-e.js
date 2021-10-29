
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Button, Spinner } from 'react-bootstrap';
const UserNews = ({ news, loading, handleEdit, handleDelete }) => {

    return (
        <  >
            <div className="w-3 pad">
                <div className="flex-aside">
                    <div className="flex-aside-image-con">
                        {/* {loading ? <Spinner animation="border" variant="primary" /> : null} */}
                        <a> <img src={news && news.image.url} className="image" /> </a>
                    </div>
                    <div className="flex-aside-content">
                        <a><p className="small">{news.title}</p></a>
                        <div className="flex">
                            <p className="time">{moment(news.Ognoo).fromNow()}</p>
                            <Button variant="info" onClick={handleEdit}>
                                <EditOutlined className="mx-2 py-1" />
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                <DeleteOutlined className="mx-2 py-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserNews;
