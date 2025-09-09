import './styles.css';
import React from 'react';
import Header from './../../components/Fragments/Header/index';
import Hero from '../../components/Fragments/Hero';
import Portfolio from '../../components/Fragments/Portifolio';

import About from '../../components/Fragments/About';
import Skills from '../../components/Fragments/Skills';
import Contact from '../../components/Fragments/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;