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

function GroupContent() {
    const [project, setProject] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [group, setGroup] = useState(null);

    const openProject = (id) => {
        window.location.href = "project-content?project-id=" + id;
    }

    useEffect(() => {
        const loadData = async () => {
            Swal.fire({ title: "Cargando", allowOutsideClick: false })
            Swal.showLoading();
            if (window.sessionStorage.getItem('group') != null && (JSON.parse(window.sessionStorage.getItem('group')).group.id == searchParams.get('group-id'))) {
                setGroup(JSON.parse(window.sessionStorage.getItem('group')).group ? JSON.parse(window.sessionStorage.getItem('group')).group : null);
                Swal.close();
            } else {
                let rawGroup = await fetch(`https://back.klariff.com/grupos/${searchParams.get('group-id')}`)
                let groupResponse = await rawGroup.json();
                if (!groupResponse.docs) {
                    setGroup(null);
                    Swal.fire({
                        title: 'Error',
                        text: 'No se encontró el grupo de investigación',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                        
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "search?query=" + JSON.parse(sessionStorage.getItem('results')).query;
                        }
                    })
                } else {
                    let saved = { group: groupResponse.docs[0] ? groupResponse.docs[0] : null }
                    setGroup(groupResponse.docs[0]);
                    window.sessionStorage.setItem('group', JSON.stringify(saved));
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

    const openResearcher = (id) => {
        window.location.href = "researcher-content?researcher-id=" + id;
    }

    return (
        <div className="Results-body">
            {
                (group) != null && (
                    <div className="Main-column">
                        <div style={{ marginBottom: "0rem" }} className="SearchBar-row">
                            <h1>{group.nombre}</h1>
                        </div>
                        <div style={{ marginLeft: "3rem", marginBottom: "2rem", cursor: "pointer" }} onClick={() => window.history.back()} className="SearchBar-row">
                            <Typography style={{ fontWeight: "500", textDecoration: "underline" }}>Regresar</Typography>
                        </div>
                        <div className="Results-section-row">
                            <div className="Results-group-column">
                                {
                                    group.lider && !isNull(group.lider) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Líder</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{group.lider}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    group.email_lider && !isNull(group.email_lider) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Email líder</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{group.email_lider}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    group.url_gruplac && !isNull(group.url_gruplac) && (
                                        <div>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>URL GrupLAC</Typography>
                                            <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.open(group.url_gruplac)}>{group.url_gruplac}</Typography>
                                        </div>
                                    )
                                }
                                {
                                    group.proyectos && (
                                        <div style={{ marginBottom: "2rem" }}>
                                            <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Proyectos de investigación</Typography>

                                            {
                                                group.proyectos.map((proyecto, index) => {
                                                    return (
                                                        <div key={"topk_" + index} className="Result-group">
                                                            <Typography onClick={(e) => {
                                                                openProject(proyecto.id)
                                                            }} style={{ fontWeight: "400", cursor: "pointer", marginBottom: "1rem", textDecoration: "underline", textDecorationThickness: "0.5px" }}>{proyecto.titulo}</Typography>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }

                            </div>
                            <div className="Right-section" style={{ width: "20%" }}>
                                <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Colaboradores</Typography>
                                <div className="Right-panel">
                                    {
                                        group.investigadores && (
                                            <div style={{ marginBottom: "2rem" }}>
                                                {
                                                    group.investigadores.map((investigador, index) => {
                                                        return (
                                                            <div key={"topk_" + index} className="Result-group">
                                                                <Typography onClick={(e) => {
                                                                    openResearcher(investigador.id)
                                                                }} style={{ fontWeight: "400", cursor: "pointer", marginBottom: "1rem", textDecoration: "underline", textDecorationThickness: "0.5px" }}>{investigador.nombre}</Typography>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <ScrollToTop smooth color="#2C5697" width='20' />
                    </div>
                )
            }


        </div>
    );
}

export default GroupContent;