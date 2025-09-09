import React from 'react';
import './styles.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">SOBRE</h2>
      <div className="about-text">
        <p>
          Desenvolvedor front-end React (TypeScript & JavaScript), grande entusiasta pelo desenvolvimento de componentes responsivos e reutilizáveis, possuo experiência em projetos gerenciados por metodologias ágeis e versionamento de código, principalmente em modelagem estatística para lógica Fuzzy em Biotec 4.0.
        </p>
        <p>
          Atualmente mestrando em Biotecnologia e graduando em Análise e Desenvolvimento de Sistemas.
        </p>
      </div>
    </section>
  );
};

export default About;