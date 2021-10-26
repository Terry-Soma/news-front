import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "context/_userProvider";
const PubNav = () => {
    const [state, setState] = useContext(UserContext);
    const logout = () => {
        localStorage.removeItem("News-token");
        setState(null);
    }
    return (
        <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
            <Navbar.Brand className="fj-navbar-brand">
                <a href="#">News</a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
                        Мэдээ
                    </Nav.Link>
                    <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
                        Dog
                    </Nav.Link>
                    <Nav.Link onClick={logout} className="fj-navbar-item fj-navbar-link" href="/publisher/login">
                        Бараздас
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default PubNav;