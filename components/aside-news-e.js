
import { FieldTimeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';

import moment from 'moment';
const AsideNews = ({ news }) => {
    return (
        <>
            <div className="flex-aside">
                <div className="flex-aside-image-con">
                    <a> <img src={news.image.url} className="image" /> </a>
                </div>
                <div className="flex-aside-content">
                    <a><p className="small">{news.title}</p></a>
                    <div className="flex">
                        <div className="flex jc">

                            <FieldTimeOutlined className="mx-1 " />
                            <p className="time">{moment(news.Ognoo).fromNow()}</p>
                        </div>
                        <CommentOutlined className="mx-2" />
                        <ShareAltOutlined className="mx-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AsideNews;
