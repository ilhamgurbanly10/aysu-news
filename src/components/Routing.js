import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Results from '../pages/Results';
import Error404 from '../pages/Error_404';

function Routing() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="results" element={<Results />} />
            <Route path="*" element={<Error404 />} />
        </Routes>    
    );
}

export default Routing;
