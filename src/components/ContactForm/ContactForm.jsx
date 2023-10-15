
import './ContactForm.css'
import { Col, Row, Modal } from 'react-bootstrap'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';





const ContactForm = () => {
    const [state, handleSubmit] = useForm("xzblydjk");
    const [hasContacted, setHasContacted] = useState(undefined)
    if (!hasContacted && state.succeeded) {
        setHasContacted(
            'Se ha enviado tu mensaje. Te contactaré lo antes posible :)'
        )
    }

    return (
        <Row className='justify-content-center' >
            <Col lg='10' xs='12' className='text-center'>
                <div>
                    <h3>Contactar</h3>
                    {
                        !state.succeeded ?
                            <form onSubmit={handleSubmit} className='form-group'>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-style "
                                    placeholder='Tu email'
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    style={{ overflow: 'hidden', paddingBottom: '170px' }}
                                    className="form-style mt-3"
                                    placeholder='¿En que te puedo ayudar?'
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} className="btn mt-4 mb-2">
                                    Enviar
                                </button>
                            </form>
                            :
                            <div className='form-style pt-2 pb-5'>{hasContacted}</div>
                    }
                </div>
            </Col>
        </Row >








    )
}




export default ContactForm
