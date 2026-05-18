import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    city: "",
    time: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
        birthDate: form.birthDate,
        city: form.city,
        time: form.time,
         };

      // CONEXÃO FRONT → BACKEND
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      // valida se deu certo no backend
      if (!response.ok) {
        throw new Error("Erro ao criar conta no backend");
      }

      // consome resposta (sem warning do ESLint)
      await response.json();

      alert("Conta criada com sucesso!");
      navigate("/login");

    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao conectar com o servidor");
    }
  }

  return (
    <section className="register">
      <div className="register-container">

        <h2>Criar Conta</h2>

        <form className="register-form" onSubmit={handleSubmit}>

          <input
            name="name"
            value={form.name}
            placeholder="Nome completo"
            onChange={handleChange}
          />

          <input
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="Senha"
            onChange={handleChange}
          />

          <input
            name="phone"
            value={form.phone}
            type="tel"
            placeholder="Telefone"
            onChange={handleChange}
          />

          <input
            name="birthDate"
            value={form.birthDate}
            type="date"
            onChange={handleChange}
          />

          <input
            name="city"
            value={form.city}
            placeholder="Cidade de nascimento"
            onChange={handleChange}
          />

          <input
            name="time"
            value={form.time}
            type="time"
            onChange={handleChange}
          />

          <button type="submit">
            Criar conta
          </button>

        </form>

      </div>
    </section>
  );
}