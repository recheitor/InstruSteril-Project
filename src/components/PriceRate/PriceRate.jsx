import { Row, Col, Container } from 'react-bootstrap'
import './PriceRate.css'
import { Link } from 'react-router-dom'
const PriceRate = () => {
    return (
        <>

            <div className='background-image-price-rate'>
                <Container>
                    <Row className='price-rate justify-content-center'>
                        <Col xs='12' lg='10' className='price-rate-title text-center'>
                        </Col>


                        <Col lg='6' xs='12' className='price-rate-img'>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697387885/qtf0gk16ogwz8p1f82vd.png" alt="" />
                        </Col>
                        <Col lg='6' xs='12'>
                            <h2>TARIFA INTRUSTERIL</h2>
                            <p>30€</p>
                            <h3>El precio esta estipulado por servicio
                                puesto que depende de la actividad
                                de nuestros clientes, a final de cada
                                mes InstruSteril emite la factura
                                correspondiente a los servicios
                                realizados mensualmente.</h3>

                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    )
}
export default PriceRate