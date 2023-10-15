import { Row, Col, Container } from 'react-bootstrap'
import './AboutUs.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <>
            <Container>

                <Row className='about-us justify-content-center'>
                    <Col lg='6' xs='12' className='about-us-img'>
                        <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697387885/bearurxcxkxyg3junyhp.png" alt="" />
                    </Col>
                    <Col lg='6' xs='12'>
                        <h2>QUIENES SOMOS</h2>
                        <h3>Somos una empresa en Valencia, especializada
                            en la esterilización del instrumental quirúrgico
                            empleado en las clínicas y consultas medicas.</h3>
                        <h3>Ademas llevamos a cabo rigurosas revisiones y
                            nos encargamos de reemplazar el instrumental
                            deteriorado con el objetivo de asegurar una
                            seguridad óptima.</h3>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default AboutUs