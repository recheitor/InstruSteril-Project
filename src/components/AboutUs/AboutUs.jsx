import { Row, Col } from 'react-bootstrap'
import './AboutUs.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <>
            <Row className='about-us justify-content-start mt-3'>
                <Col lg='7' xs='12'>
                    <h2>Quienes somos</h2>
                    <h3>Somos una empresa en Valencia, especializada
                        en la esterilización del instrumental quirúrgico
                        empleado en las clínicas y consultas medicas.
                        Ademas llevamos a cabo rigurosas revisiones y
                        nos encargamos de reemplazar el instrumental
                        deteriorado con el objetivo de asegurar una
                        seguridad óptima.</h3>
                </Col>

            </Row>

        </>
    )
}
export default AboutUs