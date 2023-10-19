import { Row, Col, Container } from 'react-bootstrap'
import './Hero_copy.css'
import ScrollingWords from './../Scroll/Scroll'
const Hero = () => {
    return (
        <>
            <div className='hero-background '>

                <Container>
                    <section className="hero" aria-label="Hero Section">
                        <Row className="justify-content-center">
                            <Col xs="11" lg="12" className="hero-title text-center">
                                <h1>Esterilización y reposición</h1>
                                <h1>de instrumental quirúrgico</h1>
                                <Row className='justify-content-center'>
                                    <Col lg='5'>
                                        <ScrollingWords />
                                        <div className='contact-us-form-button'>
                                            <a href='#'>
                                                PIDE MÁS INFORMACIÓN
                                            </a>
                                        </div>
                                        <section className="hero-logo" aria-label="Hero Logo">
                                            <div className="text-center">
                                                <img
                                                    src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/t7zngvn1iwu1hdjw012o"
                                                    alt="InstruSteril Background"
                                                />
                                            </div>
                                        </section>

                                    </Col>


                                </Row>

                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>

        </>
    )
}
export default Hero