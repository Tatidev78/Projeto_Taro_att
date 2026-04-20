import { useState } from "react";
import "./ConselhoDoDia.css";

import mago from "../../assets/cartas/mago.jpg";
import sacerdotisa from "../../assets/cartas/sacerdotisa.jpg";
import sol from "../../assets/cartas/sol.jpg";
import estrela from "../../assets/cartas/estrela.jpg";
import lua from "../../assets/cartas/lua.jpg";

export default function ConselhoDoDia() {

  const cartas = [
    {
      nome: "O Mago",
      descricao: "Use seus talentos e recursos com confiança. Hoje é um convite para agir, transformar ideias em realidade e acreditar no seu poder de criação.",
      imagem: mago,
    },
    {
      nome: "A Sacerdotisa",
      descricao: "Confie na sua intuição. O silêncio e a observação revelam respostas que não estão na superfície. Escute sua voz interior antes de tomar decisões.",
      imagem: sacerdotisa,
    },
    {
      nome: "O Sol",
      descricao: "Celebre a vida e compartilhe sua luz. A clareza e a alegria estão ao seu alcance — aproveite para se conectar com pessoas e projetos que trazem felicidade.",
      imagem: sol,
    },
    {
      nome: "A Estrela",
      descricao: "Mantenha a esperança e a fé. Mesmo nos momentos de dúvida, lembre-se de que há sempre um caminho iluminado. Inspire-se e inspire os outros com sua confiança no futuro.",
      imagem: estrela,
    },
    {
      nome: "A Lua",
      descricao: "Nem tudo é o que parece. Hoje, observe com cuidado e não se deixe levar apenas pelas aparências. Use discernimento para atravessar incertezas e ilusões.",
      imagem: lua,
    },
  ];

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [carta, setCarta] = useState(null);
  const [erro, setErro] = useState("");

  const sortearCarta = (e) => {
  e.preventDefault();

  if (!nome || !data) {
    setErro("Por favor, preencha seu nome e data de nascimento");
    return;}


  const random = Math.floor(Math.random() * cartas.length);
  setCarta(cartas[random]);

  setTimeout(() => {
    setCarta(null);
    setNome("");
    setData("");
  }, 20000);
};

  return (
    <section id="conselho" className="conselho">
      <div className="conselho-container">

        <h2>Conselho do Dia</h2>

        <div  className="conselho-form" onSubmit={sortearCarta}>

          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              setErro("");
            }}
            required
          />

          <input
            type="date"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
              setErro("");
            }}
            required
          />

          <button
            className="conselho-button"
            onClick={sortearCarta}
          >
            Receber Conselho
          </button>
          {erro && <p className="erro">{erro}</p>}

        </div>

        {carta && (
          <div className="conselho-carta">

            {nome && (
              <h4 className="conselho-nome">
                Conselho para {nome}
              </h4>
            )}

            <img
              src={carta.imagem}
              alt={carta.nome}
            />

            <h3>{carta.nome}</h3>

            <p>{carta.descricao}</p>

          </div>
        )}

      </div>
    </section>
  );
}