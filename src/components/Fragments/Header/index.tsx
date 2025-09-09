import React from 'react';
import './styles.css';
//import logoIcon from '../../assets/logo-icon.svg';
const Header: React.FC = () => {
  return (
    <header className="header-section">
      <div className="container header-container">
        <div className="logo-container">
          {/* Estrutura para o logo com círculo duplo */}
          <div className="logo-icon-wrapper">
            {/* <img src={logoIcon} alt="Devair Junior Logo" className="logo-icon" /> */}
            <p>𖦹</p>
          </div>
          <span className="logo-text">Devair.Junior</span>
          <span className="logo-slash">/&gt;</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contact" className="contact-button">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;