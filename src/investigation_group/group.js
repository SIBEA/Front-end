import React from 'react';
import Header from './../header/header.js';
import foto from './../resources/foto.jpg';
import './group.css';

function Group() {
    return (
        <div>
            <body className="Group-group-body">
                <h1 className="Main-title">Looking for Robots - Grupo de Investigación</h1>
                <div className="Body-row">
                    <div className="Left-section">
                        <h2>Integrantes:</h2>
                        <div className="Profile-group">
                            <img src={foto} className="Profile-image-template" alt="Investigation group image template"/>
                            <div className="Profile-information">
                                <a href="otra_pagina.html">Juan Camilo Peña Triana</a>
                                <p>Investigador del área de ingeniería electrónica</p>
                                <p>39 años</p>
                                <p>Perú</p>
                                <p>Pontificia Universidad Javeriana</p>
                            </div>
                        </div>
                        <div className="Profile-group">
                            <img src={foto} className="Profile-image-template" alt="Investigation group image template"/>
                            <div className="Result-information">
                                <a href="otra_pagina.html">Juliana Rodríguez Peña</a>
                                <p>Profesora de cátedra de ingeniería de sistemas</p>
                                <p>43 años</p>
                                <p>Colombia</p>
                                <p>Universidad de Los Andes</p>
                            </div>
                        </div>
                        <div className="Profile-group">
                            <img src={foto} className="Profile-image-template" alt="Investigation group image template"/>
                            <div className="Result-information">
                                <a href="otra_pagina.html">Armando Rios Hurtado</a>
                                <p>Profesor de cátedra de ingeniería de sistemas</p>
                                <p>39 años</p>
                                <p>Colombia</p>
                                <p>Pontificia Universidad Javeriana</p>
                            </div>
                        </div>
                    </div>
                    <div className="Group-right-section">
                        <h2>Participaciones:</h2>
                        <div className="Participation-group">
                            <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación superior</a>
                            <p>El objetivo de este trabajo es explicar y analizar...</p>
                            <p>todo esto para tener una visión más amplia y c...</p>
                        </div>
                        <div className="Participation-group">
                            <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación superior</a>
                            <p>El objetivo de este trabajo es explicar y analizar...</p>
                            <p>todo esto para tener una visión más amplia y c...</p>
                        </div>
                        <div className="Participation-group">
                            <a href="otra_pagina.html">Robótica e inteligencia artificial para la educación superior</a>
                            <p>El objetivo de este trabajo es explicar y analizar...</p>
                            <p>todo esto para tener una visión más amplia y c...</p>
                        </div>
                        <div className="Similar-groups">
                            <h2>Grupos similares:</h2>
                            <a href="otra_pagina.html">Robotica Investigativa</a>
                            <a href="otra_pagina.html">Systems solutions</a>
                            <a href="otra_pagina.html">Interconnection</a>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Group;