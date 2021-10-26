
import { Container } from "react-bootstrap";
import PubNav from './nav-p';
import { UserContext } from "context/_userProvider";
import { useContext } from "react";
const Layout = ({ children }) => {
    const [state, setState] = useContext(UserContext);

    return (
        <Container>
            <PubNav />
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

export default Layout;