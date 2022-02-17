import { Card } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";
import renderHTML from 'react-render-html';

const GridItem = ({ news }) => {
    // moment.locale("mn");
    return (
        <Card className="fj-card">
            <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                    <img
                        src={news.journalist.imageUrl}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar"
                    />
                    <div>
                        <Card.Title className="mb-1">
                            {news.title}
                        </Card.Title>
                        {/* <Card.Text className="card-date">{news.Ognoo}</Card.Text> */}
                        <Card.Text className="card-date">{moment(news.Ognoo).format()}</Card.Text>
                    </div>
                </Card.Header>
                <Link href={`/${news.uniqueUrl}`} >
                    <a>
                        <div className="">
                            {news.image ? (<Card.Img
                                src={news.image.url}
                                alt="Card image cap"
                            />) : ''}
                        </div>
                        <Card.Body>
                            <Card.Title className="card-small-title">
                                {renderHTML(news.content)}
                            </Card.Title>
                            {/* <Card.Text>{news.category.name}</Card.Text> */}
                        </Card.Body>
                    </a>
                </Link>

            </div>
        </Card>
    );
};
export default GridItem;