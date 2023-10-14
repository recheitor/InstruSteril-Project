import { Row, Col } from 'react-bootstrap'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <Row className='hero justify-content-center mt-3'>
                <Col xs='12' lg='6' className='hero-title text-center' >
                    <h1>Esterilización y reposición</h1>
                    <h1>de instrumental quirúrgico</h1>
                    <Row className='justify-content-center'>
                        <Col lg='12' className='text-center m-3'>
                            <Link class="custom-link" to='#'>Nuestros Servicios</Link>
                        </Col>
                        <Col lg='12' className='text-center'>
                            <Link class="custom-link" to='#'>Tarifas</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}
export default Hero