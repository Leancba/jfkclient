import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navegacion from "./components/navegacion/navegacion";
import Especialidad from "./components/especialidad/especialidad";
import Novedades from "./components/novedades/novedades";
import Footer from "./components/footer/footer";
import PrivateRoute from "./components/adminLogin/adminPrivateRoute";
import AdminLogin from "./components/adminLogin/adminLogin";
import AdminPanel from "./components/adminLogin/adminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navegacion />
                <Especialidad />
                <Novedades />
                <Footer />
              </>
            }
          />
          <Route path="/Admin" element={<AdminLogin />} />
          <Route
            path="/panel"
            element={
           <PrivateRoute>
              <AdminPanel />
          </PrivateRoute>}
          />

          
          {/* <Route path="/alumnos" element={<Home />} /> */}
          {/* <Route path="/profesore" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
