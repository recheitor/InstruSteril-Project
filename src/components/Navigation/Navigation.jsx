import { Col, Row, } from 'react-bootstrap'
import './Navigation.css'
import { useEffect, useState } from 'react'
const Navigation_copy = () => {



    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>

            <div>
                <div >
                    <Row className={`navi justify-content-between align-items-center ${scrolling ? 'scroll-down' : ''}`} role="navigation" aria-label="Main Navigation">
                        <Col xs="2" lg="3" className="text-start">
                            <div className="nav-head">
                                <div className="nav-head-link d-flex">
                                    <img
                                        src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/uzu2gdul3daxcgotqi5o"
                                        alt="InstruSteril Logo"
                                    />
                                    <a href="#">
                                        <h2 aria-label="InstruSteril">
                                            <span>INSTRU</span>STERIL
                                        </h2>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <input
                        className={`menu-icon ${scrolling ? 'scroll-down' : ''}`}
                        type="checkbox"
                        id="menu-icon"
                        name="menu-icon"
                        checked={isMenuOpen}
                        onChange={() => setIsMenuOpen(!isMenuOpen)}
                        role="checkbox"
                        aria-label="Menu Icon"
                    />
                    <label className="nav-label" htmlFor="menu-icon"></label>


                    <nav className="nav" role="navigation" aria-label="Mobile Navigation">
                        <ul>
                            <li>
                                <a
                                    href="#servicios"
                                    style={{ textDecoration: "none" }}
                                    onClick={closeMenu}
                                    role="menuitem"
                                >
                                    SERVICIOS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sobre-nosotros"
                                    style={{ textDecoration: "none" }}
                                    onClick={closeMenu}
                                    role="menuitem"
                                >
                                    QUIENES SOMOS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tarifas"
                                    style={{ textDecoration: "none" }}
                                    onClick={closeMenu}
                                    role="menuitem"
                                >
                                    TARIFAS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacto"
                                    style={{ textDecoration: "none" }}
                                    onClick={closeMenu}
                                    role="menuitem"
                                >
                                    CONTACTO
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="overlay" role="presentation"></div>
                </div>

            </div>
        </>
    )
}
export default Navigation_copy