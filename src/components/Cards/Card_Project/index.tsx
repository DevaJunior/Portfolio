import React from 'react';
import './styles.css';

type Card_ProjectProps = {
  title: string;
  description: string;
  technologies: string;
  imageUrl?: string; // Imagem pode ser opcional para este card
  isFeatured?: boolean; // Nova prop para o card principal
};

const Card_Project: React.FC<Card_ProjectProps> = ({ title, description, technologies, imageUrl, isFeatured }) => {
  return (
    <div className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}>
      {/* Se for o card principal, o layout é diferente */}
      {isFeatured ? (
        <div className="featured-card-content">
          <div className="featured-header">
            <h3>{title}</h3>
            <p className="featured-subtitle">Pessoal</p>
          </div>
          {/* O "minicard" interno com a imagem e texto "Hi, nice to meet you!" */}
          <div className="mini-card">
            {imageUrl && <img src={imageUrl} alt="Mini Card" className="mini-card-image" />}
            <div className="mini-card-text">
                <p className="mini-card-greeting">Hi, nice to meet you!</p>
                <p className="mini-card-name">I'm Devair Junior.</p>
            </div>
          </div>
          <div className="featured-description-block">
            <p className="featured-description">{description}</p>
            <p className="featured-tech">{technologies}</p>
          </div>
        </div>
      ) : (
        // Layout padrão para os outros cards
        <>
          {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
          <div className="project-content">
            <h4>{title}</h4>
            <p className="project-description">{description}</p>
            <p className="project-tech">{technologies}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card_Project;