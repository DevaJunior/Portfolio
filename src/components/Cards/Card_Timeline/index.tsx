// src/components/Card_Timeline.tsx
import React from 'react';
import './styles.css'; // Estilos específicos para este card

interface CardTimelineProps {
  year: string;
  icon: React.ReactNode;
  title: string;
  profissao: string;
  description: string;
  gradientClass: string; // Ex: "icon-purple", "icon-cyan"
}

const Card_Timeline: React.FC<CardTimelineProps> = ({ year, icon, title, profissao, description, gradientClass }) => {
  return (
    <div className="timeline-step">
      <div className="step-header">
        <span className="step-year">{year}</span>
      </div>
      <div className={`step-icon-wrapper ${gradientClass}`}>
        {icon}
      </div>
      <div className="step-content">
        <h3>{title}</h3>
        <p className="step-profession">{profissao}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card_Timeline;