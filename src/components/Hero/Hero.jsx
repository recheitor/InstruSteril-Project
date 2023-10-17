import { Row, Col, Container } from 'react-bootstrap'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <div className='hero-background '>
                <Container>
                    <section className="hero" aria-label="Hero Section">
                        <Row className="justify-content-center">
                            <Col xs="11" lg="10" className="hero-title text-center">
                                <h1>Esterilización y reposición</h1>
                                <h1>de instrumental quirúrgico</h1>
                                <section className="hero-logo" aria-label="Hero Logo">
                                    <div className="text-center">
                                        <img
                                            src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/uzu2gdul3daxcgotqi5o"
                                            alt="InstruSteril Logo"
                                        />
                                        <h2 aria-label="InstruSteril">
                                            <span>INSTRU</span>STERIL
                                        </h2>
                                    </div>
                                </section>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
        </>
    )
}
export default Hero