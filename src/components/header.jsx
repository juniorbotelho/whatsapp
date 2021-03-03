const Header = () => (
  <header className="component_header">
    <div className="header_container">
      <div className="header_logo">
        <a href="/" className="header_link">
          <img
            src="/img/whatsapp-logo.png"
            alt="WhatsApp Inc."
            className="header_img"
          />

          <h1 className="header_line">
            WhatsApp
          </h1>
        </a>
      </div>
      <div className="header_navbar">
        <nav className="header_navigation">
          <ul className="header_list">
            <li className="header_item">WhatsApp Web</li>
            <li className="header_item">Recursos</li>
            <li className="header_item">Download</li>
            <li className="header_item">Segurança</li>
            <li className="header_item">Central de Ajuda</li>
          </ul>
        </nav>
      </div>
      <div className="header_intl">
        <button>
          <img src="" alt="Language" />
        </button>
      </div>
    </div>
  </header>
)

export default Header
