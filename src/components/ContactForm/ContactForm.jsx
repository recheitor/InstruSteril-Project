
import './ContactForm.css'
import { Col, Row } from 'react-bootstrap'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("mwkdygwz");
    const [hasContacted, setHasContacted] = useState(undefined)
    if (!hasContacted && state.succeeded) {
        setHasContacted(
            'Se ha enviado tu mensaje. Te contactaremos con la mayor brevedad posible. Gracias.'
        )
    }

    return (
        <Row className="justify-content-center">
            <Col lg="10" xs="12" className="text-center">
                <section id="contact-form" aria-label="Contact Form">
                    <h3>Contactar</h3>
                    {!state.succeeded ? (
                        <form onSubmit={handleSubmit} className="form-group">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Tu email"
                                aria-label="Tu email"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                            <input
                                id="phone"
                                type="phone number"
                                name="phone"
                                className="form-style mt-3"
                                placeholder="Tu teléfono"
                                aria-label="Tu teléfono"
                            />
                            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                            <textarea
                                id="message"
                                name="message"
                                style={{ overflow: 'hidden', paddingBottom: '170px' }}
                                className="form-style mt-3"
                                placeholder="¿En qué te puedo ayudar?"
                                aria-label="Mensaje"
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="btn mt-4 mb-2"
                                aria-label="Enviar"
                            >
                                Enviar
                            </button>
                        </form>
                    ) : (
                        <div className="form-style pt-2 pb-5" aria-label="Mensaje enviado">
                            {hasContacted}
                        </div>
                    )}
                </section>
            </Col>
        </Row>
    )
}




export default ContactForm
