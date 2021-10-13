import { Card } from "react-bootstrap";

const GridItem = ({ news }) => {
    return (
        <Card className={`fj-card`}>
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
                        <Card.Title className="font-weight-bold mb-1">
                            {news.title}
                        </Card.Title>
                        <Card.Text className="card-date">2021 оны 3 сарын 2</Card.Text>
                    </div>
                </Card.Header>
                <div className="view overlay">
                    <Card.Img
                        src={`https://mgl.gogo.mn/newsn/thumbnail/200${news.smallPicUrl}`}
                        alt="Card image cap"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="card-small-title">
                        {news.content}
                    </Card.Title>
                    <Card.Text>{news.category.name}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};
export default GridItem;