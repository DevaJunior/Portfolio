import React from 'react';
import './styles.css';
// import HeroGraphic from '../../assets/hero-graphic.png'; // Salve o gráfico </> como uma imagem

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-text">
        <h1>Hi, welcome!</h1>
        <h1>I'm Goku.</h1>
        <p>Dev Front-end Bio-IT</p>
      </div>
      <div className="hero-graphic">
        {/* <img src={HeroGraphic} alt="Code Graphic" /> */}
        {/* Por enquanto, usando texto para simular a imagem */}
        <span>&lt;/&gt;</span>
      </div>
    </section>
  );
};

export default Hero;