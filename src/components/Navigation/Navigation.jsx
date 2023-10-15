import { Col, Container, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const targetElement = document.getElementById('hero');

        if (scrollY > 40) {
            targetElement.classList.add('scrolled-down');
        } else {
            targetElement.classList.remove('scrolled-down');
        }
    });



    return (
        <>
            <Container className='nav-lg' id='hero'>
                <Row className='align-items-center pt-2'>
                    <Col xs='12' lg='3' className='nav-title d-flex ps-4' >
                        <div className='text-center'>
                            <a href="#">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697307692/uzu2gdul3daxcgotqi5o.png" alt="" />
                                <h3><span>INSTRU</span>STERIL</h3>
                            </a>
                        </div>
                    </Col>
                    <Col lg='9' className='nav-sections text-end pe-5'>
                        <a className='me-3 ms-3' href="#servicios">SERVICIOS</a>
                        <a className='me-3' href="#sobre-nosotros">QUIENES SOMOS</a>
                        <a className='me-3 ms-3' href="#tarifas">TARIFAS</a>
                        <a className='ms-3' href="#contacto">CONTACTO</a>
                    </Col>
                </Row >
            </Container >

            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" checked={isMenuOpen}
                onChange={() => setIsMenuOpen(!isMenuOpen)} />
            <label className='nav-label' htmlFor="menu-icon"></label>

            <nav className="nav">
                <ul>
                    <li>
                        <a href="#servicios"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            SERVICIOS
                        </a>
                    </li>
                    <li>  <a href="#sobre-nosotros"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        QUIENES SOMOS
                    </a>
                    </li>

                    <li>
                        <a href="#tarifas"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            TARIFAS
                        </a>
                    </li>
                    <li>
                        <a href="#contacto"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            CONTACTO
                        </a>
                    </li>

                </ul>
            </nav>
            <div className="overlay"></div>
        </>
    )
}
export default Navigation