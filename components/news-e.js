import renderHTML from "react-render-html";

import moment from "moment";
const News = ({ news }) => {
    moment.locale("mn");
    return (
        <>
            <div id="news-detail">
                <h2 className="title">{news.title}</h2>
                <div className="flex-item">
                    <div className="sub-flex">
                        <img
                            src={news.journalist.imageUrl}
                            className="rounded-circle mr-3"
                            height="50px"
                            width="50px"
                        />
                        <h3 >{news.journalist.name}</h3>
                    </div>
                    <p className="warning-text">{moment(news.date).format('lll')}</p>
                </div>
                <div className="img">
                    <img src={news.image.url} />
                </div>
                <div className="content">{renderHTML(news.content)}</div>
            </div>
        </>)
}

export default News;