import { Row, Col, Container } from 'react-bootstrap'
import './PriceRate.css'
const PriceRate = () => {
    return (
        <>
            <Container>
                <section id="price-rate" aria-label="Price rate Section">
                    <Row className="price-rate justify-content-center">
                        <Col lg="6" xs="12" className="price-rate-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/p77nw2wqxyapbegxy5ja"
                                alt="Image of medical instruments"
                                role="img"
                                loading="lazy"
                            />
                        </Col>
                        <Col lg="6" xs="12">
                            <h3>Tarifa InstruSteril</h3>
                            <h4>30€</h4>
                            <p>El precio esta estipulado por servicio
                                puesto que depende de la actividad
                                de nuestros clientes, al final de cada
                                mes InstruSteril emite la factura
                                correspondiente a los servicios
                                realizados mensualmente.</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default PriceRate