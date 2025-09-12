import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './styles.css';

import Card_Project from '../../Cards/Card_Project';

import img1 from '../../../images/wpp/wpp-app-portifolio.png';
import img2 from '../../../images/wpp/wpp-app-spotted.png';
import img3 from '../../../images/wpp/wpp-app-biogen.png';
import img4 from '../../../images/wpp/wpp-app-omni-2.png';
import img5 from '../../../images/wpp/wpp-app-trackmoney.png';

const projects = [
  {
    title: 'P O R T I F Ó L I O',
    description: 'Oi, eu sou Goku! kkk Brincadeiras a parte, esta página é destinada para aqueles que querem saber um pouco sobre mim, bem como minha história, habilidades e sonhos.',
    technologies: 'React • HTML e CSS • TypeScript • Github',
    imageUrl: img1,
  },
  {
    title: 'T R A C K . M O N E Y',
    description: 'O TrackMoney é uma solução inteligente de gestão financeira pessoal, desenvolvida para simplificar o controle do seu dinheiro e ajudar na construção de hábitos mais saudáveis de consumo. Muito além de um simples app de anotações de gastos, ele oferece recursos interativos de acompanhamento em tempo real, categorização automática de despesas e visualização clara por meio de gráficos e relatórios. Pensado para estudantes, profissionais e famílias, o TrackMoney coloca a organização financeira literalmente na palma da mão, promovendo autonomia, planejamento e tomada de decisão consciente no dia a dia.',
    technologies: 'React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: img5,
  },
  {
    title: 'S P O T T E D',
    description: 'O Spotted é uma plataforma inovadora que visa transformar a experiência universitária, especialmente para os novos estudantes. Pensado para ser um verdadeiro guia na palma da mão, o Spotted oferece uma série de funcionalidades que vão muito além do básico, facilitando a vida acadêmica e social de seus usuários ...',
    technologies: 'React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: img2,
  },
  {
    title: 'B I O G E N . L A B',
    description: 'App Android para análise de dados laboratoriais baseado na lógica Fuzzy. Esta ferramenta baseis-se na inserção de dados pós cultura in-vitro e micropropagação de células vegetais para identificar desvios e erros, bem como apontar e sugerir correções ao longo das etapas.',
    technologies: 'Fuzzy • Android • Kotlin • Firebase • Github • Biotecnologia',
    imageUrl: img3,
  },
  {
    title: 'Omni',
    description: '...',
    technologies: 'Biotecnologia • Fuzzy • Python • React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: img4,
  },
  {
    title: '...',
    description: 'Descrição...',
    technologies: '...',
    imageUrl: "",
  },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const getItemsPerPage = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      return 1;
    } else if (width <= 768) {
      return 2;
    } else if (width <= 950) {
      return 3;
    }
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + itemsPerPage, projects.length - itemsPerPage);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - itemsPerPage, 0);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="projects" className="portfolio-container">
      {/* <h2>PORTFÓLIO</h2> */}
      <h2>PROJETOS</h2>
      <div className="carousel-wrapper">
        <button
          className="carousel-arrow prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="carousel-item" key={index}>
                <Card_Project
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow next"
          onClick={handleNext}
          disabled={currentIndex >= projects.length - itemsPerPage}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;