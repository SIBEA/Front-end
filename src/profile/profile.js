import React from 'react';
import logo from './../resources/javeriana-logo.png';
import foto from './../resources/foto.jpg';
import './profile.css';
import Header from '../header/header.js'

function Profile() {
    const [texto, setTexto] = React.useState('');

  return (
    <div>
      <header>
        <Header />
      </header>
      <hr></hr>
      <body className="profile-body">
        <div className="column-div">
          <h1 className="main-title">Armando Ríos Hurtado</h1>
          <div class="row">
            <div class="column">
                <img src={foto} className="image" alt="Foto"/>
            </div>
            <div class="column">
              <div class="sub-row">
                <p class="main-p">Profesión:</p> 
                <p class="basic-p">Profesor de cátedra</p>
              </div>
              <p class="basic-p">de ingeniería de sistemas</p>
              <div class="sub-row">
                <p class="main-p">Edad:</p> 
                <p class="basic-p">39 años</p>
              </div>
              <div class="sub-row">
                <p class="main-p">Nacionalidad:</p> 
                <p class="basic-p">Colombiano</p>
              </div>
              <div class="sub-row">
                <p class="main-p">Nombre en citaciones:</p> 
                <p class="basic-p">Ríos </p>
              </div>
              <p class="basic-p">Hurtado Armando</p>
              <div class="sub-row">
                <p class="main-p">Temas de interés:</p> 
                <p class="basic-p">Robótica, </p>
              </div>
              <p class="basic-p">inteligencia artificial, redes</p>
            </div>
          </div>
            <div class="sub-column">
              <h3 class="subtitle">Formación Académica:</h3>
              <div class="sub-row">
                <p class="main-p">Pregrado:</p> 
                <p class="basic-p">Ingeniería de Sistemas</p>
              </div>
              <p class="basic-p">Pontificia Universidad Javeriana - Junio de 2005</p>
              <div class="sub-row">
                <p class="main-p">Maestría:</p> 
                <p class="basic-p">Maestría en Ingeniería de Sistemas y Computación</p>
              </div>
              <p class="basic-p">Pontificia Universidad Javeriana - Abril de 2008</p>
              <div class="sub-row">
                <p class="main-p">Doctorado:</p> 
                <p class="basic-p">Doctorado en Ingeniería</p>
              </div>
              <p class="basic-p">Universidad de los Andés - Septiembre de 2012</p>
            </div>
        </div>
        <div className="column-div">
            <div class="sub-column">
              <h3 class="subtitle">Participaciones:</h3>
              <div class="sub-row">
                <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación</a>
              </div>
              <p class="basic-p">El objetivo de este trabajo es explicar y analizar...</p>
              <div class="sub-row">
                <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación</a>
              </div>
              <p class="basic-p">El objetivo de este trabajo es explicar y analizar...</p>
            </div>
            <div class="sub-column">
              <h3 class="subtitle">Ha trabajado con:</h3>
              <div class="sub-row">
                <a href="otra_pagina.html">Juan Camilo Peña Triana</a>
              </div>
              <p class="basic-p">Investigador senior del área de ingeniería elec...</p>
              <p class="basic-p">Pontificia Universidad Javeriana</p>
              <div class="sub-row">
                <a href="otra_pagina.html">Juliana Rodríguez Peña</a>
              </div>
              <p class="basic-p">Profesora de cátedra de ingeniería de sistemas</p>
              <p class="basic-p">Universidad de los Andés</p>
            </div>
            <div class="sub-column">
              <h3 class="subtitle">Grupo investigativo:</h3>
              <div class="sub-row">
                <a href="otra_pagina.html">Looking for Robots</a>
              </div>
            </div>
        </div>
      </body>
    </div>
  );
}

export default Profile;