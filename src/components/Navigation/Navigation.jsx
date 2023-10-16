import { Col, Container, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <Row className='navi justify-content-between align-items-center'>
                <Col xs='2' lg='3' className='text-start' >
                    <div className='nav-head'>
                        <a href="#">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/uzu2gdul3daxcgotqi5o" alt="" />
                        </a>
                    </div>
                </Col>
            </Row >

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