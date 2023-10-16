import { Row, Col, Container } from 'react-bootstrap'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>

            <Container>
                <Row className='hero justify-content-center'>
                    <Col xs='11' lg='10' className='hero-title text-center'>
                        <h1>Esterilización y reposición</h1>
                        <h1>de instrumental quirúrgico</h1>
                        <Row className='hero-logo justify-content-center'>
                            <div className='text-center'>
                                <a href="#">
                                    <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/uzu2gdul3daxcgotqi5o" alt="" />
                                    <h3><span>INSTRU</span>STERIL</h3>
                                </a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>



        </>
    )
}
export default Hero