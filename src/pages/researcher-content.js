import React, { useEffect, useState } from 'react';
import './css/result-content.css';
import Swal from 'sweetalert2';
import { Typography } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";
import { useSearchParams } from 'react-router-dom'

function ResearcherContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [researcher, setResearcher] = useState(null);

  const openProject = (id) => {
    window.location.href = "project-content?project-id=" + id;
  }

  useEffect(() => {
    const loadData = async () => {
      Swal.fire({ title: "Cargando", allowOutsideClick: false })
      Swal.showLoading();
      if (window.sessionStorage.getItem('researcher') != null && (JSON.parse(window.sessionStorage.getItem('researcher')).researcher.id == searchParams.get('researcher-id'))) {
        setResearcher(JSON.parse(window.sessionStorage.getItem('researcher')).researcher ? JSON.parse(window.sessionStorage.getItem('researcher')).researcher : null);
        Swal.close();
      } else {
        let rawResearcher = await fetch(`https://back.klariff.com/investigadores/${searchParams.get('researcher-id')}`)
        let researcherResponse = await rawResearcher.json();
        if (researcherResponse == "No se encontraron resultados para la busqueda") {
          Swal.fire({
            title: 'Error',
            text: 'No se encontró el investigador',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        } else {
          let saved = { researcher: researcherResponse ? researcherResponse : null }
          setResearcher(researcherResponse);
          window.sessionStorage.setItem('researcher', JSON.stringify(saved));
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

  return (
    <div className="Results-body">
      {
        (researcher) != null && (
          <div className="Main-column">
            <div style={{ marginBottom: "0rem" }} className="SearchBar-row">
              <h1>{researcher.nombre}</h1>
            </div>
            <div style={{ marginLeft: "3rem", marginBottom: "2rem", cursor: "pointer" }} onClick={() => window.history.back()} className="SearchBar-row">
              <Typography style={{ fontWeight: "500", textDecoration: "underline" }}>Regresar</Typography>
            </div>
            <div className="Results-section-row">
              <div className="Results-group-column">
                {
                  researcher.unidad_negocio && !isNull(researcher.unidad_negocio) && (
                    <div>
                      <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Unidad de negocio</Typography>
                      <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{researcher.unidad_negocio}</Typography>
                    </div>
                  )
                }
                {
                  researcher.departamento && !isNull(researcher.departamento) && (
                    <div>
                      <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Departamento</Typography>
                      <Typography style={{ fontWeight: "500", fontSize: "13pt", marginBottom: "1.5rem", textAlign: "justify" }}>{researcher.departamento}</Typography>
                    </div>
                  )
                }
                {
                  researcher.proyectos && (
                    <div style={{ marginBottom: "2rem" }}>
                      <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Proyectos de investigación</Typography>
                      {
                        researcher.proyectos.map((proyecto, index) => {
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
                <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Grupos de investigación</Typography>
                <div className="Right-panel">
                  {
                    researcher.grupos && (
                      <div style={{ marginBottom: "2rem" }}>
                        {
                          researcher.grupos.map((grupo, index) => {
                            return (
                              <div key={"topk_" + index} className="Result-group">
                                <Typography onClick={(e) => {
                                  openGroup(grupo.id)
                                }} style={{ fontWeight: "400", cursor: "pointer", marginBottom: "1rem", textDecoration: "underline", textDecorationThickness: "0.5px" }}>{grupo.nombre}</Typography>
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

export default ResearcherContent;