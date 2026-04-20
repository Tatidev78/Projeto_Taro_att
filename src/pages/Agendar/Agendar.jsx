import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { psychicsData } from "../../data/psychicsData";
import "./Agendar.css";

export default function Agendar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, addAppointment } = useContext(AuthContext);

  const psychic = psychicsData.find(
    (p) => p.id === Number(id)
  );

  const [form, setForm] = useState({
    date: "",
    time: "",
    duration: "15",
    question: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    const appointment = {
      psychicName: psychic.name,
      date: form.date,
      time: form.time,
      duration: form.duration,
      question: form.question
    };

    addAppointment(appointment);

    alert("Agendamento realizado com sucesso!");
    navigate("/dashboard");
  }

  return (
    <section className="agendar">
      <div className="agendar-container">

        <h2>Agendar com {psychic.name}</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <select
            name="duration"
            value={form.duration}
            onChange={handleChange}
          >
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="60">60 min</option>
          </select>

          <textarea
            name="question"
            value={form.question}
            placeholder="Sua pergunta"
            onChange={handleChange}
          />

          <button type="submit">
            Confirmar Agendamento
          </button>

        </form>

      </div>
    </section>
  );
}