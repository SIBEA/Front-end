import React, { useEffect } from 'react';
import './css/search-results.css';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, Chip, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox, ListItemText, tabScrollButtonClasses } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectResultItem from '../components/project-result-item';
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from '@mui/material/styles';
import ReactWordcloud from 'react-wordcloud';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor:  [12, 40],
  popupAnchor: [0, -40],
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

function Results() {

  const ROWS_PER_PAGE = 10;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const openProject = (id) => {
    window.location.href = "project-content?project-id=" + id;
  }

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [tab, setTab] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCriteria, setSearchCriteria] = React.useState("");
  const [projectResults, setProjectResults] = React.useState(null);
  const [groupResults, setGroupResults] = React.useState(null);
  const [projectTopKResults, setProjectTopKResults] = React.useState(null);
  const [communities, setCommunities] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [researcherResults, setResearcherResults] = React.useState(null);
  const [propuestaSearch, setPropuestaSearch] = React.useState(null);
  const [estadoSearch, setEstadoSearch] = React.useState(null);
  const [comunidadSearch, setComunidadSearch] = React.useState(null);



  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);


  const handleChange = async (event, newTab) => {
    setTab(newTab);
    Swal.fire({ title: "Cargando", allowOutsideClick: false })
    Swal.showLoading();
    setPage(1);
    let saved = JSON.parse(window.sessionStorage.getItem('results'));
    switch (newTab) {
      case 0:
        let rawProjects = await fetch(`https://back.klariff.com/search/proyectos/${searchParams.get('query')}?num=10&inicio=0`)
        let rawTotalProjects = await fetch(`https://back.klariff.com/proyectos/${searchParams.get('query')}/total`)
        let projectsResponse = await rawProjects.json();
        saved.pageCount = Math.ceil(await rawTotalProjects.json() / ROWS_PER_PAGE);
        saved.tab = newTab;
        saved.projectResults = projectsResponse
        setProjectResults(projectsResponse);
        break;
      case 1:
        let rawGroups = await fetch(`https://back.klariff.com/search/grupos/${searchParams.get('query')}?num=10&inicio=0`)
        let rawTotalGroups = await fetch(`https://back.klariff.com/grupos/${searchParams.get('query')}/total`)
        let groupsResponse = await rawGroups.json();
        saved.pageCount = Math.ceil(await rawTotalGroups.json() / ROWS_PER_PAGE);
        saved.tab = newTab;
        saved.groupResults = groupsResponse;
        setGroupResults(groupsResponse);
        break;
      case 2:
        let rawResearchers = await fetch(`https://back.klariff.com/search/investigadores/${searchParams.get('query')}?num=10&inicio=0`)
        let rawTotalResearchers = await fetch(`https://back.klariff.com/investigadores/${searchParams.get('query')}/total`)
        let researchersResponse = await rawResearchers.json();
        saved.pageCount = Math.ceil(await rawTotalResearchers.json() / ROWS_PER_PAGE);
        saved.tab = newTab;
        saved.researcherResults = researchersResponse;
        setResearcherResults(researchersResponse);
        break;
    }
    window.sessionStorage.setItem('results', JSON.stringify(saved));
    Swal.close();
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const optionsWordCloud = {
    rotations: 1,
    rotationAngles: [0, 0],
    spiral: "rectangular",
  };

  useEffect(() => {
    setSearchCriteria(searchParams.get('query'));
    window.sessionStorage.removeItem('project');

    async function fetchAPI() {
      try {
        Swal.fire({ title: "Cargando", allowOutsideClick: false })
        Swal.showLoading();
        let rawProjects = await fetch(`https://back.klariff.com/search/proyectos/${searchParams.get('query')}?num=10&inicio=0`)
        let rawProjectsTopK = await fetch(`https://back.klariff.com/search/proyectos/topk/${searchParams.get('query')}?num=10&inicio=0`)
        let rawCoordinates = await fetch(`https://back.klariff.com/search/proyectos/coordinates/${searchParams.get('query')}`)
        let rawCommunities = await fetch(`https://back.klariff.com/search/proyectos/communities/${searchParams.get('query')}`)
        let rawTotalRows = await fetch(`https://back.klariff.com/proyectos/${searchParams.get('query')}/total`)

        let responseProjects = await rawProjects.json();
        let responseProjectsTopK = await rawProjectsTopK.json();
        let responseCoordinates = await rawCoordinates.json();
        let responseCommunities = await rawCommunities.json();
        let responseTotalRows = await rawTotalRows.json();

        window.sessionStorage.removeItem('results');

        let saved = { query: searchParams.get('query'), projectResults: responseProjects, projectTopKResults: responseProjectsTopK, coordinates: responseCoordinates, communities: responseCommunities, pageCount: Math.ceil(responseTotalRows / ROWS_PER_PAGE) }
        window.sessionStorage.setItem('results', JSON.stringify(saved));
        setProjectResults(responseProjects ? responseProjects : null);
        setProjectTopKResults(responseProjectsTopK[0] ? responseProjectsTopK : null);
        setCoordinates(responseCoordinates[0] ? responseCoordinates : null);
        setCommunities(responseCommunities[0] ? responseCommunities : null);
        setPageCount(Math.ceil(responseTotalRows / ROWS_PER_PAGE));
        Swal.close();
      } catch (error) {
        console.error(error);
      }
    }
    if (window.sessionStorage.getItem('results') != null && (JSON.parse(window.sessionStorage.getItem('results')).query == searchParams.get('query'))) {
      setPageCount(JSON.parse(window.sessionStorage.getItem('results')).pageCount ? JSON.parse(window.sessionStorage.getItem('results')).pageCount : 1);
      setProjectResults(JSON.parse(window.sessionStorage.getItem('results')).projectResults ? JSON.parse(window.sessionStorage.getItem('results')).projectResults : null);
      setProjectTopKResults(JSON.parse(window.sessionStorage.getItem('results')).projectTopKResults[0] ? JSON.parse(window.sessionStorage.getItem('results')).projectTopKResults : null);
      setCoordinates(JSON.parse(window.sessionStorage.getItem('results')).coordinates[0] ? JSON.parse(window.sessionStorage.getItem('results')).coordinates : null);
      setCommunities(JSON.parse(window.sessionStorage.getItem('results')).communities[0] ? JSON.parse(window.sessionStorage.getItem('results')).communities : null);
      setPage(JSON.parse(window.sessionStorage.getItem('results')).page ? JSON.parse(window.sessionStorage.getItem('results')).page : 1);
      setTab(JSON.parse(window.sessionStorage.getItem('results')).tab ? JSON.parse(window.sessionStorage.getItem('results')).tab : 0);
      setGroupResults(JSON.parse(window.sessionStorage.getItem('results')).groupResults ? JSON.parse(window.sessionStorage.getItem('results')).groupResults : null);
      setResearcherResults(JSON.parse(window.sessionStorage.getItem('results')).researcherResults ? JSON.parse(window.sessionStorage.getItem('results')).researcherResults : null);
    } else {
      fetchAPI()
    }
  }, []);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function addEllipsis(text) {
    if (text.length > 150) {
      return text.slice(0, 150) + '...';
    }
    return text;
  }

  async function handlePagination(event, value) {
    Swal.fire({ title: "Cargando", allowOutsideClick: false, didClose: () => { window.scrollTo({ top: 0, behavior: "smooth" }) } })
    Swal.showLoading();
    let rawProjects = await fetch(`https://back.klariff.com/search/proyectos/${searchParams.get('query')}?num=10&inicio=${(value - 1) * 10}${propuestaSearch ? '&propuesta="' + propuestaSearch+'"' : ''}${estadoSearch ? '&estado="' + estadoSearch+'"' : ''}&comunidades=${comunidadSearch ? comunidadSearch : '"sin_filtrar"'}`)
    let projectsResponse = await rawProjects.json();
    setProjectResults(projectsResponse ? projectsResponse : null);
    let saved = JSON.parse(window.sessionStorage.getItem('results'));
    saved.projectResults = projectsResponse;
    saved.page = value;
    window.sessionStorage.setItem('results', JSON.stringify(saved));
    setPage(value);
    Swal.close();
  }

  const handleChangeEstado = (event) => {
    setEstadoSearch(event.target.value);
  };

  const handleChangePropuesta = (event) => {
    setPropuestaSearch(event.target.value);
  };

  const handleChangeComunidades = (event) => {
    setComunidadSearch(event.target.value);
  };

  const getDataFiltered = async () => {
    Swal.fire({ title: "Cargando", allowOutsideClick: false })
    Swal.showLoading();
    let rawProjects = await fetch(`https://back.klariff.com/search/proyectos/${searchParams.get('query')}?num=10&inicio=0${propuestaSearch ? '&propuesta="' + propuestaSearch+'"' : ''}${estadoSearch ? '&estado="' + estadoSearch+'"' : ''}&comunidades=${comunidadSearch ? comunidadSearch : '"sin_filtrar"'}`)
    let rawTotalRows = await fetch(`https://back.klariff.com/proyectos/${searchParams.get('query')}/total?${propuestaSearch ? 'propuesta="' + propuestaSearch+'"' : ''}${estadoSearch ? '&estado="' + estadoSearch+'"' : ''}&comunidades=${comunidadSearch ? comunidadSearch : '"sin_filtrar"'}`)
    let responseTotalRows = await rawTotalRows.json();
    let saved = JSON.parse(window.sessionStorage.getItem('results'));
    let projectsResponse = await rawProjects.json();
    saved.projectResults = projectsResponse
    setProjectResults(projectsResponse);
    setPageCount(Math.ceil(responseTotalRows / ROWS_PER_PAGE));
    setPage(1);
    setTab(0);
    window.sessionStorage.setItem('results', JSON.stringify(saved));
    Swal.close();
  }

  return (
    <div className="Results-body">
      <div className="Main-column">
        <div className="SearchBar-row">
          <h1>Resultados para: {searchCriteria}</h1>
        </div>
        <div className="Results-section-row">
          <div className="Results-group-column">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Proyectos de Investigación" {...a11yProps(0)} />
                <Tab label="Grupos de Investigación" {...a11yProps(1)} />
                <Tab label="Investigadores" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={tab} index={0}>
              {
                projectResults &&
                projectResults.map((item, index) =>
                  <div className="Result-group">
                    <ProjectResultItem title={item.titulo} description={item.descripcion} authors={item.grupo} communities={item.comunidades} id={item.id} type="project" />
                  </div>
                )
              }
              {
                (projectResults && projectResults.length == 0) && (<Typography>No se encontraron proyectos de investigación</Typography>)
              }
            </TabPanel>
            <TabPanel value={tab} index={1}>
              {
                groupResults &&
                groupResults.map((item, index) =>
                  <div className="Result-group">
                    <ProjectResultItem title={item.nombre} id={item.id} type="group" />
                  </div>
                )
              }
              {
                (groupResults && groupResults.length == 0) && (<Typography>No se encontraron grupos de investigación</Typography>)
              }
            </TabPanel>
            <TabPanel value={tab} index={2}>
              {
                researcherResults &&
                researcherResults.map((item, index) =>
                  <div className="Result-group">
                    <ProjectResultItem title={item.nombre} id={item.id} type="researcher" />
                  </div>
                )
              }
              {
                (researcherResults && researcherResults.length == 0) && (<Typography>No se encontraron investigadores</Typography>)
              }
            </TabPanel>
          </div>
          <div className="Right-section" style={{ width: "20%" }}>
            <div className="Right-panel">
              <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }} component={'span'}>Filtros</Typography>
              <div style={{ width: "100%", display: "grid", placeItems: "center", marginBottom: "3rem"}}>
              <div style={{width: "300px"}}>
                <div style={{marginBottom: "1rem"}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo de propuesta</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Estado del proyecto"
                      onChange={handleChangePropuesta}
                    >
                      <MenuItem value={null}>Seleccionar</MenuItem>
                      <MenuItem value={"Proyecto de investigación: Investigación"}>Proyecto de investigación: Investigación</MenuItem>
                      <MenuItem value={"Actividad de investigación: Apoyo a nuevas publicaciones"}>Actividad de investigación: Apoyo a nuevas publicaciones</MenuItem>
                      <MenuItem value={"Proyecto de innovación: Spin-Off"}>Proyecto de innovación: Spin-Off</MenuItem>
                      <MenuItem value={"Actividad de investigación: Movilidad-Internacional"}>Actividad de investigación: Movilidad-Internacional</MenuItem>
                      <MenuItem value={"Actividad de investigación: Otros apoyos"}>Actividad de investigación: Otros apoyos</MenuItem>
                      <MenuItem value={"Proyecto de innovación: Prueba concepto"}>Proyecto de innovación: Prueba concepto</MenuItem>
                      <MenuItem value={"Proyecto de innovación: Universidad empresa"}>Proyecto de innovación: Universidad empresa</MenuItem>
                      <MenuItem value={"Proyecto de innovación: Innovación"}>Proyecto de innovación: Innovación</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{marginBottom: "1rem"}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado del proyecto</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Estado del proyecto"
                      onChange={handleChangeEstado}
                    >
                      <MenuItem value={null}>Seleccionar</MenuItem>
                      <MenuItem value={"Terminado"}>Terminado</MenuItem>
                      <MenuItem value={"Pendiente Compromiso"}>Pendiente Compromiso</MenuItem>
                      <MenuItem value={"En Liquidación"}>En Liquidación</MenuItem>
                      <MenuItem value={"En Ejecución"}>En Liquidación</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Incluye comunidades</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Estado del proyecto"
                      onChange={handleChangeComunidades}
                    >
                      <MenuItem value={null}>Seleccionar</MenuItem>
                      <MenuItem value={"con_comunidades"}>Si</MenuItem>
                      <MenuItem value={"sin_comunidades"}>No</MenuItem>

                    </Select>
                  </FormControl>
                </div>
              </div>
              <Button style={{ width: "60%", marginTop: "1rem" }} onClick={() => getDataFiltered()} variant="outlined">Aplicar</Button>
              </div>
            </div>
            {
              projectTopKResults && (
                <div style={{ marginBottom: "2rem" }}>
                  <Typography style={{ fontWeight: "700", fontSize: "15pt", marginBottom: "1.5rem", color: "#2C5697" }}>Proyectos sugeridos</Typography>
                  {
                    projectTopKResults.map((item, index) => {
                      return (
                        <div className="Result-group">
                          <Typography onClick={(e) => {
                            openProject(item.id)
                          }} style={{ fontWeight: "400", cursor: "pointer", marginBottom: "1rem", textDecoration: "underline", textDecorationThickness: "0.5px" }}>{addEllipsis(item.titulo[0])}</Typography>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
            {
              communities && (
                <div style={{ marginBottom: "2rem" }}>
                  <Typography style={{ fontWeight: "700", fontSize: "15pt", color: "#2C5697" }} component={'span'}>Comunidades</Typography>
                  <div className="generic-container" style={{ marginTop: "2rem" }}>
                    <ReactWordcloud words={communities} options={optionsWordCloud} />
                  </div>
                </div>
              )
            }
            {
              coordinates && (
                <div>
                  <Typography style={{ fontWeight: "700", fontSize: "15pt", color: "#2C5697" }} component={'span'}>Ubicaciones</Typography>
                  <div className="generic-container" style={{ marginTop: "2rem" }}>
                    <MapContainer center={[4.570868, -74.297333]} id="map" style={{ height: "300px" }} zoom={1} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {
                        coordinates.map((item, index) => {
                          return (
                            <Marker position={[item.lat, item.lon]} key={index}>
                              <Popup>
                                <b style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => openProject(item.id)}>{item.proyecto[0]}</b>
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
          </div>
        </div>
        {
          projectResults && (
            <div style={{ width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
              <Pagination count={pageCount} color="primary" page={page} onChange={handlePagination} />
            </div>
          )
        }
      </div>
      <ScrollToTop smooth color="#2C5697" width='20' />

    </div>
  );
}

export default Results;