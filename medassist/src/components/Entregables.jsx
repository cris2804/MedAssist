import React from 'react';
import { Icon } from '@iconify/react';
import filePdf from '@iconify-icons/mdi/file-pdf'; // Ícono de PDF

function Entregables() {
  return (
    <section id="entregables" className="entregables">
      <h2>Entregables</h2>
      <ul className="lista-informes">
        <li>
          <a href="https://unipe-my.sharepoint.com/:w:/g/personal/andrei_trujillo_a_uni_pe/EWdH87z9989DhwUMIvLp9IgBIyg2QfiAE7oxnDyQIxb38g?e=8H8kmQ" target="_blank" rel="noopener noreferrer" className="informe-link">
            <Icon icon={filePdf} width="24" height="24" style={{ marginRight: '8px' }} />
            Informe del Proyecto 1
          </a>
        </li>
        {/* Puedes agregar más informes de la misma manera */}
      </ul>
    </section>
  );
}

export default Entregables;
