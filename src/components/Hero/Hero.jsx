import { Row, Col, Container } from 'react-bootstrap'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>

            <div className='background-image-hero'>
                <Container>
                    <Row className='hero justify-content-center'>
                        <Col xs='12' lg='10' className='hero-title text-center'>
                            <h1>Esterilización y reposición</h1>
                            <h1>de instrumental quirúrgico</h1>
                            <Row className='justify-content-center'>
                                <Col lg='12' className='text-center m-3'>
                                    <a className="custom-link" href='#servicios'>Nuestros Servicios</a>
                                </Col>
                                <Col lg='12' className='text-center'>
                                    <Link className="custom-link" to='#'>Tarifas</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    )
}
export default Hero