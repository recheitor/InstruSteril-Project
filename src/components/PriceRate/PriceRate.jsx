import { Row, Col, Container } from 'react-bootstrap'
import './PriceRate.css'
import { Link } from 'react-router-dom'
const PriceRate = () => {
    return (
        <>

            <div className='background-image-PriceRate'>
                <Container>
                    <Row className='PriceRate justify-content-center'>
                        <Col xs='12' lg='10' className='PriceRate-title text-center'>
                            <h1>Tarifa InstruSteril</h1>
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
export default PriceRate