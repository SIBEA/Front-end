import React from 'react';
import foto from './../resources/foto.jpg';
import './profile.css';

function Profile() {
    //const [texto, setTexto] = React.useState('');

  return (
    <div>
      <body className="profile-body">
        <div className="row">
          <div className="main-div">
            <h1 className="main-title">Armando Ríos Hurtado</h1>
            <div className="row2">
              <div className="column1">
                  <img src={foto} className="image" alt="Foto"/>
              </div>
              <div className="column2">
                <div className="sub-row">
                  <p className="main-p">Profesión:</p> 
                  <p className="basic-p">Profesor de cátedra de ingeniería de sistemas</p>
                </div>
                <div className="sub-row">
                  <p className="main-p">Edad:</p> 
                  <p className="basic-p">39 años</p>
                </div>
                <div className="sub-row">
                  <p className="main-p">Nacionalidad:</p> 
                  <p className="basic-p">Colombiano</p>
                </div>
                <div className="sub-row">
                  <p className="main-p">Nombre en citaciones:</p> 
                  <p className="basic-p">Ríos Hurtado Armando</p>
                </div>
                <div className="sub-row">
                  <p className="main-p">Temas de interés:</p> 
                  <p className="basic-p">Robótica, inteligencia artificial, redes</p>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="sub-column">
                <h3 className="subtitle">Formación Académica:</h3>
                <div className="sub-row">
                  <p className="main-p">Pregrado:</p> 
                  <p className="basic-p">Ingeniería de Sistemas</p>
                </div>
                <p className="basic-p">Pontificia Universidad Javeriana - Junio de 2005</p>
                <div className="sub-row">
                  <p className="main-p">Maestría:</p> 
                  <p className="basic-p">Maestría en Ingeniería de Sistemas y Computación</p>
                </div>
                <p className="basic-p">Pontificia Universidad Javeriana - Abril de 2008</p>
                <div className="sub-row">
                  <p className="main-p">Doctorado:</p> 
                  <p className="basic-p">Doctorado en Ingeniería</p>
                </div>
                <p className="basic-p">Universidad de los Andés - Septiembre de 2012</p>
              </div>
            </div>
          </div>
          <div className="second-div">
              <div className="column">
                <h3 className="subtitle">Participaciones:</h3>
                <div className="sub-row">
                  <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación</a>
                </div>
                <p className="basic-p">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                  est laborum."

                </p>
                <div className="sub-row">
                  <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación</a>
                </div>
                <p className="basic-p">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                  est laborum."
                </p>
              </div>
              <div className="column">
                <h3 className="subtitle">Ha trabajado con:</h3>
                <div className="sub-row">
                  <a href="otra_pagina.html">Juan Camilo Peña Triana</a>
                </div>
                <p className="basic-p">Investigador senior del área de ingeniería electrónica</p>
                <p className="basic-p">Pontificia Universidad Javeriana</p>
                <div className="sub-row">
                  <a href="otra_pagina.html">Juliana Rodríguez Peña</a>
                </div>
                <p className="basic-p">Profesora de cátedra de ingeniería de sistemas</p>
                <p className="basic-p">Universidad de los Andés</p>
              </div>
              <div className="column">
                <h3 className="subtitle">Grupo investigativo:</h3>
                <div className="sub-row">
                  <a href="otra_pagina.html">Looking for Robots</a>
                </div>
              </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Profile;