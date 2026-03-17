import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="main-menu">
      <button className="menu-button">Cortamos Isopor</button>
      <button className="menu-button">Estoque Padrão</button>
      <button className="menu-button">Orçamentos</button>
    </nav>
  );
}

export default Menu;
