import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'

import './HomePage.css'
import OurServices from '../../components/OurServices/OurServices'
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

        </>
    )
}
export default HomePage