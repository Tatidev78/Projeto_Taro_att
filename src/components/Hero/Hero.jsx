import "./Hero.css";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h2>
            Entenda o que o destino reserva para vocês
          </h2>
          <p>As cartas revelam sentimentos, intenções e caminhos.
            Entenda o que ele sente por você.</p>
          
          <button 
            className="hero-button"
            onClick={() => {
              document.getElementById("psychics").scrollIntoView({ 
                behavior: "smooth" 
              });
            }}
          >
            Fale com um de nossos especialistas
          </button>
        </div>

        {/* <div className="hero-image">
          <img src={casal} alt="Casal feliz na praia" />
        </div> */}

      </div>
    </section>
  );
}