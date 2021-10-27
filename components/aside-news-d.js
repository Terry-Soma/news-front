
import { getAllNews } from 'lib/_api';
import { FieldTimeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';

import moment from 'moment';
const AsideNews = ({ aside }) => {
    return (
        <>
            <div className="flex-aside">
                <div className="flex-aside-image-con">
                    {/* <a> <img src={news.image.url} className="image" /> </a> */}
                </div>
                <div className="flex-aside-content">
                    <a><p>{aside.title}</p></a>
                    <div className="flex">
                        <div className="flex jc">
                            <FieldTimeOutlined className="mx-1 " />
                            <p className="time">{moment(aside.Ognoo).fromNow()}</p>
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


export const getServerSideProps = async () => {
    console.log("jak");
    const { data } = await getAllNews();
    console.log(data);
    console.log("asidenews  build   =======>>>>>");
    return {
        props: {
            aside: data
        }
    }
}