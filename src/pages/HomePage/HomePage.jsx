import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'

import './HomePage.css'
import OurServices from '../../components/OurServices/OurServices'
import PriceRate from '../../components/PriceRate/PriceRate'
import Contact from '../../components/Contact/Contact'
const HomePage = () => {
    return (
        <>
            <div id='hero'>
                <Hero />
            </div>

            <div id='servicios'>
                <OurServices />
            </div>
            <div id='sobre-nosotros'>
                <AboutUs />
            </div>
            <div id='tarifas'>
                <PriceRate />
            </div>

            <div id='contacto'>
                <Contact />
            </div>
        </>
    )
}
export default HomePage