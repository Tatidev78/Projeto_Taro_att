import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="grid">

          {/* Logo */}
          <div>
            <h3 className="title-logo">
              Tarot Online
            </h3>
            <p className="text">
              Leituras espirituais e orientação intuitiva.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="title-section">
              Links
            </h3>

            <ul className="list">
              <li>Sobre</li>
              {/* <li>Blog</li> */}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="title-section">
              Contato
            </h3>

            <p className="text">
              contato@tarotonline.com
            </p>
          </div>

        </div>

        {/* Direitos */}
        <div className="bottom">
          © 2026 Tarot Online - Todos os direitos reservados
        </div>

      </div>
    </footer>
  );
}