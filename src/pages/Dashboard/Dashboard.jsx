import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <section className="dashboard">

      <div className="dashboard-container">

        <h2>Olá, {user?.name} 👋</h2>

        <h3>Meus Agendamentos</h3>

        {user?.appointments?.length > 0 ? (
          user.appointments.map((a, index) => (
            <div key={index} className="appointment-card">

              <p><strong>Psychic:</strong> {a.psychicName}</p>
              <p><strong>Data:</strong> {a.date}</p>
              <p><strong>Hora:</strong> {a.time}</p>
              <p><strong>Duração:</strong> {a.duration} min</p>
              <p><strong>Pergunta:</strong> {a.question}</p>

            </div>
          ))
        ) : (
          <p>Você ainda não tem agendamentos.</p>
        )}

      </div>

    </section>
  );
}