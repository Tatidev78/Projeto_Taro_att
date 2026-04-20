import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo22.jpg";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");

    // espera a navegação acontecer e sobe o scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 50);
  }

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo-container">
          <img src={logo} alt="Tarot Online" className="logo" />
        </div>

        <nav className="nav">

          {/* 🔥 Início com scroll ao topo */}
          <button onClick={goHome} className="link-button">
            Início
          </button>

          <a href="#conselho">Conselho do Dia</a>
          <a href="#psychics">Nossos Psychics</a>

          <Link to="/register">Cadastrar</Link>
          <Link to="/login">Log In</Link>

        </nav>

      </div>
    </header>
  );
}