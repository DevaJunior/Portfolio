import React, { useState, useEffect } from 'react'; // 1. Importe o useEffect
import { FaUsers, FaTrophy, FaDna, FaRocket, FaAward, FaFlask, FaGraduationCap } from 'react-icons/fa';
import Card_Timeline from '../../Cards/Card_Timeline'; // Ajuste o caminho se necessário
import './styles.css';

const timelineData = [
  { year: "2015", icon: <FaGraduationCap />, title: "Ciência da Computação", profissao: "Incompleto", description: "UNIFAL - Início da jornada acadêmica e primeiro contato com lógica de programação e algoritmos.", gradientClass: "icon-purple" },
  { year: "2018", icon: <FaRocket />, title: "Incubadora de Empresas", profissao: "Projeto Mentorado", description: "UNIFAL (NidusTec) - Desenvolvimento de um projeto de base tecnológica com mentoria de negócios.", gradientClass: "icon-cyan" },
  { year: "2019", icon: <FaUsers />, title: "Centro Acadêmico", profissao: "Gestão e Representação", description: "UNIFAL (DARF) - Atuação na representação estudantil e organização de eventos acadêmicos.", gradientClass: "icon-cyan" },
  { year: "2019", icon: <FaTrophy />, title: "Atlética de Biotecnologia", profissao: "Diretoria e Eventos", description: "UNIFAL (A.A.B.U.) - Participação na fundação e diretoria, promovendo integração e esporte.", gradientClass: "icon-cyan" },
  { year: "2023", icon: <FaAward />, title: "DEV. Front-end", profissao: "Curso Intensivo", description: "TRYBE - Formação completa em desenvolvimento front-end com React, Redux, e testes automatizados.", gradientClass: "icon-pink" },
  { year: "2024", icon: <FaAward />, title: "Dev Full-Stack", profissao: "Curso de Especialização", description: "ALURA - Aprofundamento em tecnologias back-end como Node.js, Java e bancos de dados.", gradientClass: "icon-pink" },
  { year: "2023", icon: <FaFlask />, title: "Controle de Qualidade", profissao: "Analista de QC", description: "UNIFAL (NCQ) - Experiência com análises físico-químicas e instrumentação analítica em laboratório.", gradientClass: "icon-pink" },
  { year: "2024", icon: <FaDna />, title: "Lab. Biogen", profissao: "Iniciação Científica", description: "UNIFAL (Bolsa: FAPEMIG) - Pesquisa em biotecnologia com foco em genética e biologia molecular.", gradientClass: "icon-pink" },
  { year: "2024", icon: <FaGraduationCap />, title: "Biotecnologia", profissao: "Bacharel", description: "UNIFAL - Conclusão da graduação com sólida base em ciências biológicas e tecnológicas.", gradientClass: "icon-pink" },
  { year: "2025", icon: <FaGraduationCap />, title: "Biotecnologia", profissao: "Mestrando", description: "UNIFAL - Continuidade da pesquisa acadêmica em nível de pós-graduação.", gradientClass: "icon-pink" },
  { year: "2025", icon: <FaGraduationCap />, title: "Análise e Dev. de Sistemas", profissao: "Tecnólogo", description: "Graduação focada em desenvolvimento de software, banco de dados e engenharia de sistemas.", gradientClass: "icon-pink" }
];

const itemsPerPage = 3;

const About: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(timelineData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = timelineData.slice(startIndex, startIndex + itemsPerPage);

  // 2. Adicione o useEffect para controlar o temporizador
  useEffect(() => {
    // Cria um temporizador que executa a cada 5 segundos
    const timer = setInterval(() => {
      // Avança para a próxima página. O operador de módulo (%) faz com que
      // ele volte para 0 (primeira página) após chegar na última.
      setCurrentPage(prevPage => (prevPage + 1) % totalPages);
    }, 100000); //8000

    // 3. Função de limpeza: será executada antes de o efeito rodar novamente
    // ou quando o componente for desmontado. Isso evita vazamentos de memória.
    return () => {
      clearInterval(timer);
    };
  }, [currentPage, totalPages]); // 4. Dependências: O efeito será reiniciado se a página atual
                                 // ou o total de páginas mudar. Isso faz com que o timer de 5s
                                 // seja resetado quando o usuário clica em um "dot".

  return (
    <>
      <section id="about" className="about-section-container">
        <h2 className="about-title">SOBRE</h2>
        <div className="about-text">
          <p>
            Desenvolvedor front-end React (TypeScript & JavaScript), grande entusiasta pelo desenvolvimento de componentes responsivos e reutilizáveis, possuo experiência em projetos gerenciados por metodologias ágeis e versionamento de código, principalmente em modelagem estatística para lógica Fuzzy em Biotecnologia 4.0.
          </p>
          <p>
            Atualmente mestrando em Biotecnologia e graduando em Análise e Desenvolvimento de Sistemas.
          </p>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2 className="how-it-works-title">Formação</h2>
        <div className="horizontal-timeline">
          {currentItems.map((item, index) => (
            <React.Fragment key={item.title + index}>
              <Card_Timeline {...item} />
              {index < currentItems.length - 1 && <div className="timeline-connector"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="pagination-controls">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Ir para a página ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;