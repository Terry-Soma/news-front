import Link from "next/link";
import moment from "moment";
import renderHTML from "react-render-html";
import { Card } from "react-bootstrap";
const NewsItem = ({ news }) => {
    moment.locale("mn")
    return (
        <>

            <div className="grid">
                <div className="grid-img">
                    <Link href={`/${news.uniqueUrl}`} >
                        <a><img src={news.image.url} /> </a>
                    </Link>
                </div>

                <Link href={`/${news.uniqueUrl}`} >
                    <div className="grid-content">
                        <div className="flex-content" >
                            {/* category id -gaar sort */}
                            {/* <Link href={`/${news.category.Id}`} > */}
                            <a href="#" >Эрүүл мэнд</a>
                            <h2>{moment(news.Ognoo).format("lll")}</h2>
                        </div>
                        <article>
                            <a><h2 className="">{news.title}</h2>
                                <p>{(renderHTML(news.content))[0].props.children}</p>
                            </a>
                            {/* </Link> */}
                        </article>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default NewsItem;