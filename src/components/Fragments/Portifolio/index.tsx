import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ícones para as setas
import './styles.css';

// Importe as imagens dos seus projetos
import Card_Project from '../../Cards/Card_Project';

const projects = [
  // ... seu array de projetos continua o mesmo ...
  // Certifique-se de ter pelo menos 5 projetos para o scroll funcionar
  {
    title: 'P O R T I F Ó L I O',
    description: 'Oi, eu sou Goku! kkk Brincadeiras a parte, esta página é destinada para aqueles que querem saber um pouco sobre mim, bem como minha história, habilidades e sonhos.',
    technologies: 'React • HTML e CSS • TypeScript • Github',
    imageUrl: "https://devajunior.github.io/Portifolio/static/media/wpp-app-portifolio.cf0a0e86d32bfed9e066.png",
  },
  {
    title: 'T R A C K . M O N E Y',
    description: 'Plataforma de gestão financeira. Através desta ferramenta, o usuário pode inserir, editar e deletar seus gastos, criar listas de tarefas e acompanhar metas através de gráficos e relatórios.',
    technologies: 'React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: "https://devajunior.github.io/Portifolio/static/media/wpp-app-spotted.d7a9052e9fc61f4ba43f.png",
  },
  {
    title: 'S P O T T E D',
    description: 'O Spotted é uma plataforma inovadora que visa transformar a experiência universitária, especialmente para os novos estudantes. Pensado para ser um verdadeiro guia na palma da mão, o Spotted oferece uma série de funcionalidades que vão muito além do básico, facilitando a vida acadêmica e social de seus usuários ...',
    technologies: 'React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: "https://devajunior.github.io/Portifolio/static/media/wpp-app-spotted.d7a9052e9fc61f4ba43f.png",
  },
  {
    title: 'B I O G E N . L A B',
    description: 'App Android para análise de dados laboratoriais baseado na lógica Fuzzy. Esta ferramenta baseis-se na inserção de dados pós cultura in-vitro e micropropagação de células vegetais para identificar desvios e erros, bem como apontar e sugerir correções ao longo das etapas.',
    technologies: 'Fuzzy • Android • Kotlin • Firebase • Github • Biotecnologia',
    imageUrl: "https://devajunior.github.io/Portifolio/static/media/wpp-app-biogen.07b1019bd1c118fed83b.png",
  },
  {
    title: 'Omni',
    description: '...',
    technologies: 'Fuzzy • Biotecnologia • React • TypeScript • HTML e CSS • Redux • Firebase • Github',
    imageUrl: "",
  },
  {
    title: '...',
    description: 'Descrição...',
    technologies: '...',
    imageUrl: "",
  },
];

const ITEMS_PER_PAGE = 4;

const Portfolio: React.FC = () => {
  // NOVO: Estado para controlar o índice do primeiro item visível
  const [currentIndex, setCurrentIndex] = useState(0);

  // LÓGICA: Função para ir para o próximo bloco de projetos
  const handleNext = () => {
    // Calcula o próximo índice, garantindo que não ultrapasse o limite
    const nextIndex = Math.min(currentIndex + ITEMS_PER_PAGE, projects.length - ITEMS_PER_PAGE);
    setCurrentIndex(nextIndex);
  };

  // LÓGICA: Função para voltar para o bloco anterior de projetos
  const handlePrev = () => {
    // Calcula o índice anterior, garantindo que não seja menor que 0
    const prevIndex = Math.max(currentIndex - ITEMS_PER_PAGE, 0);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="projects" className="portfolio-container">
      <h2>PORTFÓLIO</h2>
      {/* NOVO: Wrapper para o carrossel e as setas */}
      <div className="carousel-wrapper">
        {/* Botão de voltar, desabilitado se estiver no início */}
        <button
          className="carousel-arrow prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>

        {/* Viewport que esconde os itens que não estão visíveis */}
        <div className="carousel-viewport">
          {/* Track que se move horizontalmente */}
          <div
            className="carousel-track"
            style={{
              // Move o track para a esquerda baseado no índice atual
              // Cada item ocupa 25% (100% / 4 itens)
              transform: `translateX(-${currentIndex * (100 / ITEMS_PER_PAGE)}%)`,
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

        {/* Botão de avançar, desabilitado se estiver no final */}
        <button
          className="carousel-arrow next"
          onClick={handleNext}
          disabled={currentIndex >= projects.length - ITEMS_PER_PAGE}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;