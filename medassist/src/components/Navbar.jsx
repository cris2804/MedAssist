import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para desplazamiento suave
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} style={{ width: '50px' }} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Ícono de menú */}
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>Inicio</a></li>
        <li><a href="#entregables" onClick={(e) => scrollToSection(e, '#entregables')}>Entregables</a></li>
        <li><a href="#sobre-nosotros" onClick={(e) => scrollToSection(e, '#sobre-nosotros')}>Sobre Nosotros</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
