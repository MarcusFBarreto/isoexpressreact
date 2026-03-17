import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation-menu">
      <button className="nav-button">Cortamos Isopor</button>
      <button className="nav-button">Estoque Padrão</button>
      <button className="nav-button">Orçamentos</button>
    </nav>
  );
}

export default Navigation;
