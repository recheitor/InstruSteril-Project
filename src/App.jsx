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
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;500;700&display=swap" rel="stylesheet" />

      <Navigation />
      <AppRoutes />
      <Footer />


    </>
  )
}

export default App
