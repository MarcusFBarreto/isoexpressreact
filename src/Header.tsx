import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        <span className="iso">Iso</span><span className="express">Express</span>
        <span className="subtitle">Placas de <span className="bold-subtitle">EPS</span> sob medida.</span>
      </h1>
    </header>
  );
}

export default Header;