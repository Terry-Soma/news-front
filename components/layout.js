
import { Container } from "react-bootstrap";
import MyNav from "./nav-e";
const layout = ({ children }) => {
    return (
        <Container>
            <MyNav />
            <div className="news-detail-page">
                <div className={`page-wrapper`}>{children}</div>
            </div>

            <footer className="page-footer">
                <div>
                    <a href="#">нүүр</a>
                    {" | "}
                    <a href="#">Мэдээ </a>
                    {" | "}
                    <a href="#">Холбогдох</a>
                </div>
            </footer>
        </Container>

    );
};

export default layout;