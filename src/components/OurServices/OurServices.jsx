import { Row, Col, Container } from 'react-bootstrap'
import './OurServices.css'
import { Link } from 'react-router-dom'
const OurServices = () => {
    return (
        <>
            <Container role="main" aria-label="Services">
                <Row className="services justify-content-evenly mt-3" role="region" aria-label="Service Details">
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/lborfgkjr5elvlowtgqo"
                                alt="Service Image"
                                aria-label="Recogida"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">RECOGIDA</h3>
                            <p aria-label="Service Description">
                                Nos desplazamos hasta tu clínica para la recogida del instrumental. El horario será acordado
                                previamente para no alterar la actividad diaria de la consulta. Recogeremos el instrumental
                                utilizado en bolsas proporcionadas por InstruSteril, identificadas con el nombre de la clínica de origen.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/qp3eptxlvswmjmk6crxo"
                                alt="Service Image"
                                aria-label="Revisión y Reposición"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">REVISIÓN Y REPOSICIÓN</h3>
                            <p aria-label="Service Description">
                                Nos encargamos de la revisión del instrumental. En el proceso de limpieza manual, lubricamos las piezas móviles con aceites especiales para nuestro autoclave, así alargamos la durabilidad del instrumental. En caso de anomalías, reemplazamos la pieza dañada.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/lwrkbe7ckfw6udwst1xh"
                                alt="Service Image"
                                aria-label="Esterilizado y Empaquetado"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">ESTERILIZADO Y EMPAQUETADO</h3>
                            <p aria-label="Service Description">
                                El proceso de esterilización se realiza con nuestro autoclave de calor húmedo, con etiquetado del proceso, y su doble empaquetado con la identificación de la clínica correspondiente.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/gxxyznbssiusuz9o763x"
                                alt="Service Image"
                                aria-label="Entrega"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">ENTREGA</h3>
                            <p aria-label="Service Description">
                                Se realiza de nuevo en la propia clínica, se entrega en un paquete sellado e identificado y proporcionamos material para almacenar el instrumental ya utilizado y así tenerlo preparado para su próxima recogida.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default OurServices