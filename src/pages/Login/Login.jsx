import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro no servidor");
      }

      const data = await response.json();

      if (!data || data.success === false) {
        alert(data.message || "Usuário não encontrado ou senha inválida");
        return;
      }

      login({
        name: data.name,
        email: data.email,
      });

      alert(`Bem-vindo, ${data.name}!`);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    }
  }

  return (
    <section className="login">
      <div className="login-container">
        <h2>Entrar</h2>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit">Entrar</button>
        </form>

        <p className="register-link">
          Não tem conta?
          <Link to="/register" className="register-link-C">Cadastre-se</Link>
        </p>
      </div>
    </section>
  );
}