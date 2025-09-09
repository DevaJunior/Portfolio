import React from 'react';
// Importando os ícones que vamos usar
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Interessado em saber mais sobre o meu trabalho?</h2>
      <p>Entre em contato e vamos tomar um chá.</p>
      <div className="social-links">
        <a href="mailto:contatodevairjunior@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/devair-junior-b9937a280" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DevaJunior" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="footer-copy">
        <p>&copy; 2025 Devair Junior. Todos os direitos reservados.</p>
      </div>
    </section>
  );
};

export default Contact;