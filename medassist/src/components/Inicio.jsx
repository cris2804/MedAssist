import React from 'react';
import doctor from '../assets/doctor.svg';
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/mdi/github"; // Ejemplo de ícono
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div id='slogan' >
        <div className='tit-MedAssist'>MedAssist</div>
        <div className='cont-cuerpo'>
          <div className='inicio-cuerpo'>El proyecto propone el desarrollo de una plataforma de atención médica a distancia que utiliza inteligencia artificial para brindar diagnósticos precisos, triaje inicial, análisis de imágenes médicas y asistencia en la prescripción de medicamentos, todo de manera personalizada y accesible. Esta solución busca superar las limitaciones de la atención médica tradicional, especialmente en áreas remotas, ofreciendo a los pacientes un sistema que, mediante una interfaz de
            voz y un historial médico electrónico,
            les permita describir sus síntomas, recibir
            recomendaciones y acceder a su información
            médica de forma continua y segura.
            La plataforma se construirá utilizando tecnología gratuita,
            minimizando los costos de producción y garantizando una implementación eficiente.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',padding: '10px' }}>
          <div className='boton-page'>
            <p style={{ marginRight: '10px' }}>Empezar</p>
            <FaRegArrowAltCircleRight />
          </div>
          <div style={{ marginLeft: '10px',backgroundColor: '#7283F7', borderRadius: '10px', cursor: 'pointer' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a 
            href="https://github.com/cris2804/MedAssist" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
          <Icon icon={githubIcon} width="32" height="32" />
          </a>
          </div>
        </div>
      </div>
      <div>
        <img className='doctor' src={doctor} alt="Doctor" />
      </div>
    </section>
  );
}

export default Inicio;
