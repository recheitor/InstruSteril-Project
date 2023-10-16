import { Container } from 'react-bootstrap'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
function App() {


  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" aria-hidden="true" />
      <link rel="preconnect" href="https://fonts.gstatic.com" aria-hidden="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500;700&display=swap"
        rel="stylesheet"
        as="style"
        media="print"
        onload="this.onload=null;this.rel='stylesheet'"
        role="style"
        aria-label="Fonts for the website"
        crossOrigin="anonymous"
      />
      <nav>
        <Navigation aria-label="Main navigation" />
      </nav>
      <main>
        <AppRoutes role="region" aria-label="Main content" />
      </main>
      <footer>
        <Footer role="contentinfo" />
      </footer>
    </>
  )
}

export default App
