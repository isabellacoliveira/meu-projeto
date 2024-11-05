import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Inicio from "./components/inicio";
import Iniciar from "./components/iniciar";
import Valores from "./components/valores";
import Trajetoria from "./components/trajetoria";
import Skills from "./components/skills";

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Inicio />} >
                        <Route path="/entregas" element={<Iniciar />} />
                        <Route path="/valores" element={<Valores />} />
                        <Route path="/skills" element={<Skills />} />
                        {/* <Route path="/feedbacks" element={<Entregas />} /> */}
                        <Route path="/trajetoria" element={<Trajetoria />} />
                    </Route>
                    <Route path="/*" element={<Inicio />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRoutes;