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

            <Row className='contact justify-content-center'>

                <Col xs='12' lg='12' className='contact-title text-center'>

                    <h1>Contacto</h1>
                    <h2><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697411333/ynpdtsaqljmrrf3iuuwh.png" alt="" />618 069 336</h2>
                    <h2><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697411333/sfqupboic0b9xzboktab.png" alt="" />info@instrusteril.es</h2>

                    <div>
                        <button onClick={openModal} className="btn mt-4 ">
                            <h3> ✉️ Contactar ahora</h3>
                        </button>

                        <Modal centered show={showModal} onHide={closeModal} size="lg" >
                            <Modal.Header closeButton >
                            </Modal.Header>
                            <Modal.Body >
                                <ContactForm />
                            </Modal.Body>
                        </Modal>
                    </div>
                </Col>
            </Row>




        </>
    )
}
export default Contact