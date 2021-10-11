import { Card } from "react-bootstrap";

const ListItem = () => (
    <Card className={`fj-card fj-card-list`}>
        <div className="card-body-wrapper">
            <Card.Header className="d-flex flex-row">
                {/* <img
                    src={"https://source.unsplash.com/user/erondu/150x150"}
                    // className="rounded-circle mr-3"
                    height="150px"
                    width="150px"
                    alt="avatar"
                /> */}
                <div>
                    <Card.Title className="font-weight-bold mb-1">
                        Онцлох мэдээ
                    </Card.Title>
                    <Card.Text className="card-date">2021 оны 3 сарын 21</Card.Text>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="card-main-title">
                    Нийгэм
                </Card.Title>
                <Card.Text>АНУ-ын зэвсгийн технологийг гадаад улсад зарах гэсэн этгээд эхнэрийн хамт баривчлагджээ</Card.Text>
            </Card.Body>
        </div>
    </Card >
);

export default ListItem;