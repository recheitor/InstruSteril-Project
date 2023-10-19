import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import Navigation_copy from './components/Navigation_copy/Navigation_copy'
function App() {

  return (
    <>
      <nav>
        <Navigation_copy aria-label="Main navigation" />
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
