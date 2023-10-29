import { Row, Col, Container, Modal } from 'react-bootstrap'
import './Hero.css'
import ScrollingWords from './../ScrollingWords/ScrollingWords'
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';



const Hero = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className='hero-background '>

                <section aria-label="Hero Section">
                    <Row className="hero justify-content-center">
                        <Col xs="11" lg="6" className="hero-title text-center">
                            <h1>Esterilización y reposición<br />de instrumental quirúrgico</h1>

                            <ScrollingWords />
                            <div className='contact-us-form-button'>
                                <Modal centered show={showModal} onHide={closeModal} size="lg">
                                    <Modal.Header closeButton />
                                    <Modal.Body>
                                        <ContactForm />
                                    </Modal.Body>
                                </Modal>
                                <button onClick={openModal} >
                                    TE LLAMAMOS
                                </button>
                            </div>

                        </Col>
                        <Col xs="11" lg="6" className="hero-title">
                            <section className="hero-logo" aria-label="Hero Logo">
                                <img
                                    src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/t7zngvn1iwu1hdjw012o"
                                    alt="InstruSteril Background"
                                    className="big-image"
                                />
                                <img
                                    src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/b1fo8gmzrwrlg7kuzwuq"
                                    alt="Alternate Photo"
                                    role="img"
                                    aria-label="Alternate Photo"
                                    className="small-image"
                                />

                            </section>


                        </Col>
                    </Row>
                </section>
            </div >

        </>
    )
}
export default Hero