import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import image1 from './../resources/pic.jpg';
import map from './../resources/map.jpg';
import './css/result-content.css';
import leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

let DefaultIcon = leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

leaflet.Marker.prototype.options.icon = DefaultIcon;


function ProjectContent() {

    return (
        <div>
            <body className="profile-body">
                <div className="main-div">
                    <h1 className="main-title">Desplazamiento de las abejas en los últimos 20 años</h1>
                    <div className="row">
                        <div className="column">
                        </div>
                        <div className="column">
                            <div className="sub-row">
                                <h3 className="subtitle">Descripción:</h3>
                            </div>
                            <p className="basic-p">La próxima vez que una abeja zumbe a tu
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
                            <div className="sub-row">
                                <p className="basic-p2"><bold>Año:</bold>2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <h3 className="subtitle">Autores:</h3>
                            <div className="sub-row">
                                <Link to="/juancamilopenatriana">Juan Camilo Peña Triana</Link>
                            </div>
                            <p className="basic-p">Experto en animales y geografía</p>
                            <p className="basic-p">Pontificia Universidad Javeriana</p>
                            <div className="sub-row">
                                <a href="otra_pagina.html">Juliana Rodríguez Peña</a>
                            </div>
                            <p className="basic-p">Profesora de cátedra de Biología</p>
                            <p className="basic-p">Universidad de los Andés</p>
                            <div className="sub-row">
                                <a href="otra_pagina.html">Julián Andrés Rivera Montenegro</a>
                            </div>
                            <p className="basic-p">Investigador Senior de Biología y Fauna</p>
                            <p className="basic-p">Universidad de los Andés</p>
                        </div>
                        <div className="column" style={{width: "30%"}}>
                            <h3 className="subtitle">Impacto Regional:</h3>
                            <MapContainer center={[4.73253233955141, -74.05789293139074]} style={{ height: 536 }} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[4.73253233955141, -74.05789293139074]}>
                                    <Popup>
                                        <b>Universidad de los Andes</b>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <Outlet />
                    </div>
                </div>
            </body>
        </div>
    );
}

export default ProjectContent;