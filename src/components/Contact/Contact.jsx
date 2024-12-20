import { Row, Col, Container, Modal } from "react-bootstrap";
import "./Contact.css";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="contact-background ">
        <Container fluid="xs">
          <section id="contact" aria-label="Contact Section">
            <Row className="contact justify-content-center">
              <Col xs="12" lg="12" className="contact-title text-center">
                <h1>Contacto</h1>
                <h2>
                  <a href="https://api.whatsapp.com/send?phone=00">
                    <img
                      src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/ynpdtsaqljmrrf3iuuwh"
                      alt="Phone Icon"
                      className="contact-phone-icon"
                    />
                  </a>
                  <a href="tel:00"></a>
                </h2>
                <h2>
                  <a href="https://api.whatsapp.com/send?phone=00">
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/er26xxeyhz5bysgkvpgw"
                      alt="Whatsapp Icon"
                      className="contact-whatsapp-icon"
                    />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=00"></a>
                </h2>

                <h2>
                  <a href="mailto:instrusteril.es">
                    <img
                      src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/sfqupboic0b9xzboktab"
                      alt="Email Icon"
                      className="contact-email-icon"
                    />
                  </a>
                  <a href="mailto:instrusteril.es"></a>
                </h2>

                <div>
                  <button onClick={openModal} className="btn mt-4">
                    <span role="img" aria-label="Email">
                      <img
                        src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/gx9au2t9mv0vxigps5np"
                        alt="Contact now icon"
                      />
                    </span>{" "}
                    Contactar ahora
                  </button>
                  <Modal
                    centered
                    show={showModal}
                    onHide={closeModal}
                    size="lg"
                  >
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
      </div>
    </>
  );
};
export default Contact;
