
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Scrolleffect from '../components/scrolleffect/scroll'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/scroll'} element={<Scrolleffect />} />

        </Routes>
    )
}
export default AppRoutes