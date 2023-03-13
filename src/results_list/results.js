import React from 'react';
import Header from './../header/header.js';
import lupa from './../resources/lupa.png';
import image from './../resources/results-image-template.png';
import './results.css';

function Results() {

  const [texto, setTexto] = React.useState('');
 
    return (
      <div>

        <header>
            <Header />
        </header>
        <body className="Results-body">
          <div className="Main-column">
            <div className="SearchBar-row">
              <h1>Resultados para: Abejas</h1>
              <div className="Input-row">
                <input 
                  type="text" 
                  value={texto} 
                  onChange={event => setTexto(event.target.value)} 
                  placeholder="Search" 
                  className="Input-search" 
                  />
                <img src={lupa} class="Search-icon" alt="Lupa"></img>
              </div>
            </div>
            <div className="Results-section-row">
              <div className="Results-group-column">
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                  </div>
                </div>
              </div>
              <div className="Right-section">
                <div className="Right-panel">
                  <h3>Búsquedas relacionadas</h3>
                  <a href="otra_pagina.html">Panales de abejas</a>
                  <a href="otra_pagina.html">Reina abeja</a>
                  <a href="otra_pagina.html">Migracion de abejas</a>
                  <a href="otra_pagina.html">Miel de abejas</a>
                </div>
                <div className="Right-panel">
                <h3>Investigadores relacionados</h3>
                <a href="otra_pagina.html">Miguel Angel Díaz Ramirez</a>
                  <a href="otra_pagina.html">Alejandra Mora Martinez</a>
                  <a href="otra_pagina.html">Nicolas Azuero Gomez</a>
                  <a href="otra_pagina.html">Natalia Salazar Rodriguez</a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }

export default Results;