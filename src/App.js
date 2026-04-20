import { Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ConselhoDoDia from "./components/ConselhoDoDia/ConselhoDoDia";
import Psychics from "./components/Psychics/Psychics";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Agendar from "./pages/Agendar/Agendar";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ConselhoDoDia />
              <Psychics />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agendar/:id" element={<Agendar />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;