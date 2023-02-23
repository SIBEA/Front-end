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
        <hr></hr>
        <body className="Results-body">
          <div className="Main-column">
            <div className="SearchBar-row">
              <h1>Resultados para: Abejas</h1>
              <div class="Input-row">
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
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                <div className="Result-group">
                  <img src={image} className="Image-template" alt="Results image template"/>
                  <div className="Result-information">
                    <p>El desplazamiento de las abejas en los últimos 20 años</p>
                    <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                    <p>de las últimas dos décadas para así demostrar...</p>
                    <p>Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz </p>
                  </div>
                </div>
                
              </div>
              <div className="Right-section">
                <div className="Right-panel">

                </div>
                <div className="Right-panel">

                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }

export default Results;