import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Inicio from "./components/inicio";
import Entregas from "./pages/entregas";
import Iniciar from "./components/iniciar";

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Inicio />} >
                        <Route path="/entregas" element={<Iniciar />} />
                        {/* <Route path="/valores" element={<Entregas />} /> */}
                        {/* <Route path="/soft-skills" element={<Entregas />} /> */}
                        {/* <Route path="/feedbacks" element={<Entregas />} /> */}
                        {/* <Route path="/trajetoria" element={<Entregas />} /> */}
                        {/* <Route path="/relacionamentos" element={<Entregas />} /> */}
                    </Route>
                    <Route path="/*" element={<Inicio />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRoutes;