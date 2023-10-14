
import { Container } from 'react-bootstrap'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
function App() {


  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;500;800&display=swap" rel="stylesheet" />
      <Navigation />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </>
  )
}

export default App
