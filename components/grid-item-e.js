import { Card } from "react-bootstrap";

const GridItem = () => {
    return (
        <Card className={`fj-card`}>
            <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                    {/* <img
                        src={"https://source.unsplash.com/user/erondu/150x150"}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar"
                    /> */}
                    <div>
                        <Card.Title className="font-weight-bold mb-1">
                            Филиппиний
                        </Card.Title>
                        <Card.Text className="card-date">2021 оны 3 сарын 2</Card.Text>
                    </div>
                </Card.Header>
                <div className="view overlay">
                    <Card.Img
                        src="https://source.unsplash.com/user/erondu/250x250"
                        alt="Card image cap"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="card-small-title">
                        Филиппиний ерөнхийлөгчийн сонгуульд дарангуйлагчийн хүү, мэргэжлийн боксчин, алдартай жүжигчин өрсөлдөхөөр боллоо
                    </Card.Title>
                    <Card.Text>Улс төр</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};
export default GridItem;