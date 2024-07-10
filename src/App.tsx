import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin/page';
import Researcher from './pages/researcher/page';
import Veterinary from './pages/veterinary/page';
import Dashboard from './pages/dashboard/page';
import Navbars from './components/Navbars';

function App() {
    return (
        <Router>
            <Navbars/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/researcher" element={<Researcher />} />
                <Route path="/veterinary" element={<Veterinary />} />
            </Routes>
        </Router>
    );
}

export default App;
