import React, { useEffect, useState } from 'react';
import map from './../resources/map.jpg';
import './css/result-content.css';
import leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import Swal from 'sweetalert2';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, Chip, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox, ListItemText } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";
import { useSearchParams } from 'react-router-dom'

let DefaultIcon = leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

function ProjectContent() {
    const [project, setProject] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [projectTopKResults, setProjectTopKResults] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    const openProject = (id) => {
        window.location.href = "project-content?project-id=" + id;
    }

    useEffect(() => {
        const loadData = async () => {
            Swal.fire({ title: "Cargando", allowOutsideClick: false })
            Swal.showLoading();
            if (window.sessionStorage.getItem('project') != null && (JSON.parse(window.sessionStorage.getItem('project')).project.id == searchParams.get('project-id'))) {
                setProject(JSON.parse(window.sessionStorage.getItem('project')).project ? JSON.parse(window.sessionStorage.getItem('project')).project : null);
                setProjectTopKResults(JSON.parse(window.sessionStorage.getItem('project')).topK ? JSON.parse(window.sessionStorage.getItem('project')).topK : null);
                setCoordinates(JSON.parse(window.sessionStorage.getItem('project')).coordinates ? JSON.parse(window.sessionStorage.getItem('project')).coordinates : null);
                Swal.close();
            } else {
                let rawProject = await fetch(`https://back.klariff.com/proyectos/${searchParams.get('project-id')}`)
                let projectResponse = await rawProject.json();
                if (!projectResponse.id) {
                    setProject(null);
                    Swal.fire({
                        title: 'Error',
                        text: 'No se encontró el proyecto de investigación',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                        
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "search?query=" + JSON.parse(sessionStorage.getItem('results')).query;
                        }
                    })
                } else {
                    let rawProjectsTopK = await fetch(`https://back.klariff.com/search/proyectos/{titulo}/topk?query=${projectResponse.titulo}&num=10&inicio=0`)
                    let projectsTopK = await rawProjectsTopK.json();
                    setProjectTopKResults(projectsTopK[0] ? projectsTopK : null);
                    let saved = { project: projectResponse ? projectResponse : null, topK: projectsTopK[0] ? projectsTopK : null }
                    if (projectResponse.ubicaciones[0] != 'nan') {
                        let auxCoordinates = []
                        projectResponse.ubicaciones.forEach(location => {
                            let parsedLocation = location.split(";");
                            auxCoordinates.push({ title: parsedLocation[0], lat: parsedLocation[1], lon: parsedLocation[2] })
                        })
                        saved.coordinates = auxCoordinates;
                        setCoordinates(auxCoordinates)
                    }
                    if (!saved.coordinates) saved.coordinates = null;
                    setProject(projectResponse);
                    window.sessionStorage.setItem('project', JSON.stringify(saved));
                    Swal.close();
                }
            }
        }
        loadData();
    }, []);

    const isNull = (value) => {
        if (value == "NaN" || value == "NAN" || value == "nan" || value == "null" || value == "Null" || value == "NULL" || value == null || value == undefined || value == "" || value == "NNA" || value == "nna" || value == "Nna") {
            return true;
        } else {
            return false;
        }
    }

    const openGroup = (id) => {
        window.location.href = "group-content?group-id=" + id;
    }

    const openResearcher = (id) => {
        window.location.href = "researcher-content?researcher-id=" + id;
    }

    const formatDate = (date) => {
        let parsedDate = new Date(date);
        let day = parsedDate.getDate();
        let month = parsedDate.getMonth() + 1;
        let year = parsedDate.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return day + "/" + month + "/" + year;
    }

    return (
        <div className="Results-body">
            {
                (project && projectTopKResults) != null && (
                    <div className="Main-column">
                        <div style={{ marginBottom: "0rem" }} className="SearchBar-row">
                            <h1>{project.titulo[0]}</h1>
                        </div>
                        <div style={{ marginLeft: "3rem", marginBottom: "2rem", cursor: "pointer" }} onClick={() => window.history.back()} className="SearchBar-row">
                            <Typography style={{ fontWeight: "500", textDecoration: "underline" }}>Regresar</Typography>
                        </div>
                        <div className="Results-section-row">
                            <div className="Results-group-column">

                                <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }} component={'span'}>Grupo</Typography>
                                {
                                    project.grupo && !isNull(project.grupo) && (
                                        <Stack style={{ marginTop: "0.5rem", marginBottom: "1rem" }} direction="row" spacing={1}>
                                            {
                                                project.grupo.map((grupo, index) => {
                                                    if (!isNull(grupo.nombre)) {
                                                        return (
                                                            <Chip onClick={(e) => openGroup(grupo.id)} style={{ backgroundColor: "#F8CD00", color: "black", cursor: "pointer" }} key={"author_" + index} label={grupo.nombre.charAt(0).toUpperCase() + grupo.nombre.slice(1)} color="primary" />
                                                        )
                                                    }
                                                })
                                            }
                                        </Stack>
                                    )
                                }
                                <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }} component={'span'}>Miembros</Typography>
                                {
                                    project.grupo && !isNull(project.grupo) && (
                                        <Stack style={{ marginTop: "0.5rem", marginBottom: "1rem" }} direction="row" spacing={1}>
                                            {
                                                project.miembros.map((miembro, index) => {
                                                    if (!isNull(miembro.nombre) && index < 3) {
                                                        return (
                                                            <Chip onClick={(e) => openResearcher(miembro.id)} style={{ backgroundColor: "#F8CD00", color: "black", cursor: "pointer" }} key={"author_" + index} label={miembro.nombre} color="primary" />
                                                        )
                                                    }
                                                })
                                            }
                                        </Stack>
                                    )
                                }
                                {
                                    project.propuesta && !isNull(project.propuesta) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }} >Tipo de propuesta</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.propuesta}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.descripcion && !isNull(project.descripcion) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Descripción</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.descripcion}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.pertinencia && !isNull(project.pertinencia) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Pertinencia</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.pertinencia}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.obj_general && !isNull(project.obj_general) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Objetivo general</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.obj_general}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.obj_especifico && !isNull(project.obj_especifico) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Objetivos específicos</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.obj_especifico}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.metodologia && !isNull(project.metodologia) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Metodología</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{project.metodologia}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.fecha_inicio && !isNull(project.fecha_inicio) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Fecha de inicio</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{formatDate(project.fecha_inicio)}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    project.fecha_fin && !isNull(project.fecha_fin) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Fecha de finalización</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{formatDate(project.fecha_fin)}</Typography>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="Right-section" style={{ width: "20%" }}>
                                <div className="Right-panel">
                                </div>
                                {
                                    !isNull(project.comunidades[0]) && (
                                        <div style={{ marginBottom: "2rem" }}>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", color: "#2C5697" }} component={'span'}>Comunidades</Typography>

                                            <Stack style={{ marginTop: "1rem" }} direction="row" spacing={1}>
                                                {
                                                    project.comunidades.map((community, index) => {
                                                        if (!isNull(community)) {
                                                            return (
                                                                <Chip label={community.charAt(0).toUpperCase() + community.slice(1)} variant="outlined" color="primary" />
                                                            )
                                                        }
                                                    })
                                                }
                                            </Stack>
                                        </div>
                                    )
                                }

                                {
                                    !isNull(project.sujeto_investigacion[0]) && (
                                        <div style={{ marginBottom: "2rem" }}>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", color: "#2C5697" }} component={'span'}>Términos clave</Typography>

                                            <Stack style={{ marginTop: "1rem" }} direction="row" spacing={1}>
                                                {
                                                    project.sujeto_investigacion.map((sujeto, index) => {
                                                        if (!isNull(sujeto)) {
                                                            return (
                                                                <Chip label={sujeto.charAt(0).toUpperCase() + sujeto.slice(1)} variant="outlined" color="primary" />
                                                            )
                                                        }
                                                    })
                                                }
                                            </Stack>
                                        </div>
                                    )
                                }
                                {
                                    coordinates && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", color: "#2C5697" }} component={'span'}>Ubicación identificada</Typography>
                                            <div className="generic-container" style={{ marginTop: "2rem" }}>
                                                <MapContainer center={[4.570868, -74.297333]} id="map" style={{ height: "300px" }} zoom={1} scrollWheelZoom={false}>
                                                    <TileLayer
                                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    />
                                                    {
                                                        coordinates.map((item, index) => {
                                                            return (
                                                                <Marker position={[item.lat, item.lon]} id={'marker_' + index} key={index}>
                                                                    <Popup>
                                                                        <b>{item.title}</b>
                                                                    </Popup>
                                                                </Marker>
                                                            )
                                                        })
                                                    }

                                                </MapContainer>
                                            </div>
                                        </div>
                                    )
                                }



                                {
                                    projectTopKResults && (
                                        <div style={{ marginBottom: "2rem" }}>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Proyectos similares</Typography>
                                            {
                                                projectTopKResults.map((item, index) => {
                                                    return (
                                                        <div key={"topk_" + index} className="Result-group">
                                                            <Typography onClick={(e) => {
                                                                openProject(item.id)
                                                            }} style={{ fontWeight: "400", cursor: "pointer", marginBottom: "1rem", textDecoration: "underline", textDecorationThickness: "0.5px" }}>{item.titulo}</Typography>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                        <ScrollToTop smooth color="#2C5697" width='20' />
                    </div>
                )
            }


        </div>
    );
}

export default ProjectContent;