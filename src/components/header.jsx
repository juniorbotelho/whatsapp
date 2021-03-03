import { VscGlobe } from 'react-icons/vsc'
import { RiArrowDownSFill } from 'react-icons/ri'

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
            <li className="header_item item">WhatsApp Web</li>
            <li className="header_item item">Recursos</li>
            <li className="header_item item">Download</li>
            <li className="header_item item">Segurança</li>
            <li className="header_item item">Central de Ajuda</li>
          </ul>
        </nav>
      </div>
      <div className="header_intl">
        <button className="header_button">
          <VscGlobe 
            className="header_globe" 
            size={18}
            color="fff" />
        </button>
        <h2 className="header_locale item">
          PT (BR)
        </h2>
        <button className="header_button">
          <RiArrowDownSFill
            className="header_globe"
            size={18} 
            color="fff" />
        </button>
      </div>
    </div>
  </header>
)

export default Header
