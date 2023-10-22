import { Row, Col, Container } from 'react-bootstrap'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <Container>
                <section id="about-us" aria-label="About Us Section">
                    <Row className="about-us justify-content-center">
                        <Col lg="6" xs="12" className="about-us-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/oagen9poohek5baf4ber"
                                alt="Image of our team"
                                role="img"
                                loading="lazy"
                            />
                        </Col>
                        <Col lg="6" xs="12">
                            <h3>Quiénes Somos</h3>
                            <p>
                                Somos una empresa en Valencia, especializada en la esterilización
                                del instrumental quirúrgico empleado en las clínicas y consultas
                                médicas.
                            </p>
                            <p>
                                Además llevamos a cabo rigurosas revisiones y nos encargamos de
                                reemplazar el instrumental deteriorado con el objetivo de asegurar a
                                nuestros clientes y a sus pacientes una seguridad y calidad óptima.
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default AboutUs