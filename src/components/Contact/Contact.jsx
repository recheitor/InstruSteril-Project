import { Row, Col, Container, Modal, Button } from 'react-bootstrap'
import './Contact.css'
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';




const Contact = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);


    return (
        <>
            <Container fluid="xs">
                <section id="contact" aria-label="Contact Section">
                    <Row className="contact justify-content-center">
                        <Col xs="12" lg="12" className="contact-title text-center">
                            <h1>Contacto</h1>
                            <h2>
                                <img
                                    src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/ynpdtsaqljmrrf3iuuwh"
                                    alt="Phone Icon"
                                    className="contact-icon"
                                />
                                <a href="tel:+34618069336">618 069 336</a>
                            </h2>
                            <h2>
                                <img
                                    src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/sfqupboic0b9xzboktab"
                                    alt="Email Icon"
                                    className="contact-icon"
                                />
                                <a href="mailto:info@instrusteril.es">info@instrusteril.es</a>
                            </h2>

                            <div>
                                <button onClick={openModal} className="btn mt-4" aria-label="Contactar ahora">
                                    <span role="img" aria-label="Email">✉️</span> Contactar ahora
                                </button>
                                <Modal centered show={showModal} onHide={closeModal} size="lg">
                                    <Modal.Header closeButton />
                                    <Modal.Body>
                                        <ContactForm />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>



        </>
    )
}
export default Contact