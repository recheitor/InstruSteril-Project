import { Col, Row, } from 'react-bootstrap'
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
            <Row className='nav-lg justify-content-between align-items-center pt-2'>
                <Col xs='12' lg='3' className='nav-title d-flex ps-4' >
                    <div className='text-center'>
                        <Link to="/">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697307692/uzu2gdul3daxcgotqi5o.png" alt="" />
                            <h3><span>INSTRU</span>STERIL</h3>
                        </Link>
                    </div>
                </Col>
                <Col lg='6' className='nav-sections '>
                    <Link className='me-3' to="/sobre-nosotros">QUIENES SOMOS</Link>
                    <Link className='me-3 ms-3' to="/servicios">SERVICIOS</Link>
                    <Link className='me-3 ms-3' to="/tarifas">TARIFAS</Link>
                    <Link className='ms-3' to="/contacto">CONTACTO</Link>
                </Col>


            </Row >


            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" checked={isMenuOpen}
                onChange={() => setIsMenuOpen(!isMenuOpen)} />
            <label className='nav-label' htmlFor="menu-icon"></label>

            <nav className="nav">
                <ul>
                    <li>  <Link to="/sobre-nosotros"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        QUIENES SOMOS
                    </Link>
                    </li>
                    <li>
                        <Link to="/servicios"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            SERVICIOS
                        </Link>
                    </li>

                    <li>
                        <Link to="/tarifas"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            TARIFAS
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto"
                            style={{ textDecoration: 'none' }}
                            onClick={closeMenu}
                        >
                            CONTACTO
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className="overlay"></div>
        </>
    )
}
export default Navigation