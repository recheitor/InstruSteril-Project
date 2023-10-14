
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/sobre-nosotros'} element={<AboutUsPage />} />
        </Routes>
    )
}
export default AppRoutes