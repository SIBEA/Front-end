import React from 'react';
import logo from './../resources/javeriana-logo.png';
import img from './../resources/img.jpg';
import map from './../resources/map.jpg';
import './content.css';
import Header from '../header/header.js'

function Content() {

    return (
        <div>
          <header>
            <Header />
          </header>
          <hr></hr>
          <body className="profile-body">
            <div className="column-div">
              <h1 className="main-title">Desplazamiento de las abejas en los últimos 20 años</h1>
              <div class="row">
                    <div class="column">
                        <img src={img} className="image" alt="Imagen"/>
                    </div>
                    <div class="column">
                        <div class="sub-row">
                        <h3 class="subtitle">Descripción:</h3>
                        </div>
                        <p class="basic-p">La próxima vez que una abeja zumbe a tu
                                            alrededor, recuerda que muchos de nuestros
                                            alimentos dependen en gran medida de
                                            la polinización natural intermediada por
                                            insectos: un servicio clave que abejas y otros
                                            polinizadores prestan al ecosistema. 
                                            Sin la polinización entomófila (realizada por insectos)
                                            aproximadamente un tercio de los cultivos que
                                            consumimos tendrían que ser polinizados por otros
                                            medios o producirían una cantidad de alimento
                                            significativamente menor. Bajaría la productividad de
                                            hasta un 75% de nuestras cosechas. Sin duda, los
                                            cultivos más nutritivos e interesantes para nuestra dieta
                                            –entre ellos, muchas frutas y verduras, así como ciertos
                                            cultivos forrajeros utilizados para la producción de carne
                                            y lácteos– se verían afectados de manera grave por un
                                            descenso en las poblaciones de insectos polinizadores;
                                            sufriría, en particular, la producción de manzanas, fresas,
                                            tomates y almendras. </p>
                        <div class="sub-row">
                            <h3 class="subtitle">Año:</h3>
                            <p class="basic-p2">2018</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <h3 class="subtitle">Autores:</h3>
                        <div class="sub-row">
                            <a href="otra_pagina.html">Juan Camilo Peña Triana</a>
                        </div>
                        <p class="basic-p">Experto en animales y geografía</p>
                        <p class="basic-p">Pontificia Universidad Javeriana</p>
                        <div class="sub-row">
                            <a href="otra_pagina.html">Juliana Rodríguez Peña</a>
                        </div>
                        <p class="basic-p">Profesora de cátedra de Biología</p>
                        <p class="basic-p">Universidad de los Andés</p>
                        <div class="sub-row">
                            <a href="otra_pagina.html">Julián Andrés Rivera Montenegro</a>
                        </div>
                        <p class="basic-p">Investigador Senior de Biología y Fauna</p>
                        <p class="basic-p">Universidad de los Andés</p>
                    </div>
                    <div class="column">
                        <h3 class="subtitle">Impacto Regional:</h3>
                        <img src={map} className="image" alt="Mapa"/>
                    </div>
                    <div class="column">
                        <div class="sub-row">
                            <p class="main-p">Zonas de mayor impacto:</p> 
                        </div>
                        <ul>
                            <li> Amazonas</li>
                            <li> Putumayo </li>
                        </ul>
                    </div>
                </div>
            </div>
          </body>
        </div>
      );
}

export default Content;