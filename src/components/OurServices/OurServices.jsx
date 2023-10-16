import { Row, Col, Container } from 'react-bootstrap'
import './OurServices.css'
import { Link } from 'react-router-dom'
const OurServices = () => {
    return (
        <>
            <Container>

                <Row className='services justify-content-evenly mt-3'>

                    <Col xs='12' lg='5' className='text-center'>
                        <div className='services-img '>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697384156/lborfgkjr5elvlowtgqo.png" alt="" />

                        </div>
                        <div className='services-text d-flex flex-column justify-content-center align-items-center'>
                            <h3>RECOGIDA</h3>
                            <p>Directamente en tu clínica,
                                dentro del horario
                                acordado para no influir en
                                la actividad diaria de la
                                consulta.</p>
                        </div>
                    </Col>
                    <Col xs='12' lg='5' className='text-center'>
                        <div className='services-img '>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697384156/qp3eptxlvswmjmk6crxo.png" alt="" />
                        </div>
                        <div className='services-text d-flex flex-column justify-content-center align-items-center'>
                            <h3>REVISIÓN Y REPOSICIÓN</h3>
                            <p>Nos encargamos de revisar el instrumental
                                en el proceso de lavado, si detectamos
                                anomalías, podríamos reemplazar la pieza
                                deteriorada. Así siempre estaría el instrumental completo.</p>
                        </div>
                    </Col>
                    <Col xs='12' lg='5' className='text-center'>
                        <div className='services-img '>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697384156/lwrkbe7ckfw6udwst1xh.png" alt="" />
                        </div>
                        <div className='services-text d-flex flex-column justify-content-center align-items-center'>
                            <h3>ESTERILIZADO Y
                                EMPAQUETADO</h3>
                            <p>El proceso de esterilización
                                se realiza con nuestro
                                autoclave de calor húmedo,
                                con etiquetado del proceso,
                                y su doble empaquetado
                                con la identificación de la
                                clínica correspondiente.</p>
                        </div>
                    </Col>
                    <Col xs='12' lg='5' className='text-center'>
                        <div className='services-img '>
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697384156/gxxyznbssiusuz9o763x.png" alt="" />
                        </div>
                        <div className='services-text d-flex flex-column justify-content-center align-items-center'>
                            <h3>ENTREGA</h3>
                            <p>Se realiza de nuevo en la propia
                                clínica, se entrega en un paquete
                                sellado e identificado y
                                proporcionamos material para
                                almacenar el instrumental ya utilizado
                                y así tenerlo preparado para su
                                próxima recogida.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default OurServices