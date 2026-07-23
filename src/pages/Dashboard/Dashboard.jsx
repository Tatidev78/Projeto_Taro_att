import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { psychicsData } from "../../data/psychicsData";
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const hasAppointments = user?.appointments?.length > 0;

  return (
    <section className="dashboard">
      <div className="dashboard-container">

        <h1>Meu Espaço</h1>

        <h2>Olá, {user?.name}! 👋</h2>

        {hasAppointments ? (
          <p className="welcome-message">
            É um prazer ter você de volta ao seu espaço.
          </p>
        ) : (
          <p className="welcome-message">
            Você ainda não possui consultas agendadas.
            <br />
            Escolha um de nossos especialistas para iniciar sua jornada.
          </p>
        )}

        {hasAppointments ? (
          <>
            <h3>📅 Próximo Agendamento</h3>

            {user.appointments.map((appointment, index) => (
              <div key={index} className="appointment-card">

                <p>
                  <strong>Especialista:</strong>{" "}
                  {appointment.psychicName}
                </p>

                <p>
                  <strong>Data:</strong>{" "}
                  {appointment.date}
                </p>

                <p>
                  <strong>Horário:</strong>{" "}
                  {appointment.time}
                </p>

                <p>
                  <strong>Duração:</strong>{" "}
                  {appointment.duration} minutos
                </p>

                <p>
                  <strong>Pergunta:</strong>{" "}
                  {appointment.question}
                </p>

              </div>
            ))}

            <button className="new-appointment-btn">
              ➕ Agendar Nova Consulta
            </button>

          </>
        ) : (
          <>
            <h3>Nossos Especialistas</h3>

            <div className="psychics-preview">

              {psychicsData.map((psychic) => (

                <div key={psychic.id} className="psychic-card">

                  <img
                    src={psychic.img}
                    alt={psychic.name}
                    className="psychic-photo"
                  />

                  <h4>{psychic.name}</h4>

                  <p>{psychic.desc}</p>

                  <p className="psychic-rating">
                    ⭐ {psychic.price}
                  </p>

                  <button className="schedule-btn">
                    Agendar Consulta
                  </button>

                </div>

              ))}

            </div>

          </>
        )}

      </div>
    </section>
  );
}