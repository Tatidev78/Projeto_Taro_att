import "./Psychics.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Psychics() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleAgendar(id) {
    if (!user) {
      alert("Você precisa estar logado para agendar.");
      navigate("/login");
      return;
    }

    navigate(`/dashboard`);
  }

  return (
    <section id="psychics" className="psychics">
      <div className="container">

        <h2 className="title">
          Nossos Psychics
        </h2>

        <div className="grid">

          {/* Psychic 1 */}
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Psychic"
              className="avatar"
            />

            <h3 className="name">Maria Luz</h3>

            <p className="desc">
              Especialista em amor e relacionamentos
            </p>

            <p className="price">
              R$ 4,50 / min
            </p>

            <button className="btn" onClick={() => handleAgendar(1)}>
              Agendar
            </button>
          </div>

          {/* Psychic 2 */}
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Psychic"
              className="avatar"
            />

            <h3 className="name">João Tarot</h3>

            <p className="desc">
              Caminho espiritual e propósito
            </p>

            <p className="price">
              R$ 4,50 / min
            </p>

            <button className="btn" onClick={() => handleAgendar(2)}>
              Agendar
            </button>
          </div>

          {/* Psychic 3 */}
          <div className="card">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Psychic"
              className="avatar"
            />

            <h3 className="name">Ana Intuitiva</h3>

            <p className="desc">
              Tarot intuitivo e energético
            </p>

            <p className="price">
              R$ 5,00 / min
            </p>

            <button className="btn" onClick={() => handleAgendar(3)}>
              Agendar
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}