import Hero from '../../components/Hero/Hero'
import AboutUs from '../../components/AboutUs/AboutUs'
import './HomePage.css'
import OurServices from '../../components/OurServices/OurServices'
import PriceRate from '../../components/PriceRate/PriceRate'
import Hero_copy from '../../components/Hero_copy/Hero_copy'
import Contact from '../../components/Contact/Contact'

const HomePage = () => {
    return (
        <>
            <main>
                <section id="hero" aria-label="Hero Section">
                    <Hero_copy />
                </section>
                <section id="servicios" aria-label="Services Section">
                    <OurServices />
                </section>
                <section id="sobre-nosotros" aria-label="About Us Section">
                    <AboutUs />
                </section>
                <section id="tarifas" aria-label="Price Rates Section">
                    <PriceRate />
                </section>
                <section id="contacto" aria-label="Contact Section">
                    <Contact />
                </section>
            </main>
        </>
    )
}
export default HomePage