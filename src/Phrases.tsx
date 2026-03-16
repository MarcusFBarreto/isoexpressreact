import React from 'react';
import './Phrases.css';

const phrases = [
  { text: 'Cortes precisos para o seu projeto.', angle: 30 },
  { text: 'EPS na medida que você precisa.', angle: 90 },
  { text: 'Pequenas ou grandes quantidades.', angle: 150 },
  { text: 'Do seu jeito, no tamanho certo.', angle: 210 },
  { text: 'Soluções em EPS sob medida.', angle: 270 },
  { text: 'Grandes formatos sem complicação.', angle: 330 },
];

const Phrases: React.FC = () => {
  const radius = 40; // Adjusted radius for percentage-based positioning

  return (
    <div className="phrases-container">
      {
        phrases.map((phrase, index) => {
          const angleInRadians = (phrase.angle * Math.PI) / 180;
          const top = 50 - radius * Math.sin(angleInRadians);
          const left = 50 + radius * Math.cos(angleInRadians);

          return (
            <span
              key={index}
              className="phrase"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-50%, -50%)`
              }}
            >
              {phrase.text}
            </span>
          )
        })
      }
    </div>
  )
}

export default Phrases;