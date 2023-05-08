import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import lupa from './../resources/lupa.png';
import image from './../resources/pic2.png';
import './css/search-results.css';
import { Box, Tab, Tabs, Typography } from '@mui/material';


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
          <Typography>{children}</Typography>
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


function Results() {

  const [texto, setTexto] = React.useState('');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <body className="Results-body">
        <div className="Main-column">
          <div className="SearchBar-row">
            <h1>Resultados para: Abejas</h1>
            <div className="Input-row">
              <input
                type="text"
                value={texto}
                onChange={event => setTexto(event.target.value)}
                placeholder="Search"
                className="Input-search"
              />
              <img src={lupa} className="search-icon" alt="Lupa"></img>
            </div>
          </div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Proyectos de Investigación" {...a11yProps(0)} />
              <Tab label="Grupos de Investigación" {...a11yProps(1)} />
              <Tab label="Investigadores" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <div className="Results-section-row">
            <div className="Results-group-column">
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <Link to="/content">El desplazamiento de las abejas en los últimos 20 años</Link>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
              <div className="Result-group">
                <img src={image} className="Image-template" alt="Results image template" />
                <div className="Result-information">
                  <a href="otra_pagina.html">El desplazamiento de las abejas en los últimos 20 años</a>
                  <p>El objetivo de este trabajo es explicar y analizar el compo...</p>
                  <p>de las últimas dos décadas para así demostrar...</p>
                  <a href="otra_pagina.html">Andrés Felipe Paez Ordoñez, Adrián Solano Rincón, Laura Tatiana Salamanca Saenz</a>
                </div>
              </div>
            </div>
            <div className="Right-section">
              <div className="Right-panel">
                <h3>Búsquedas relacionadas</h3>
                <a href="otra_pagina.html">Panales de abejas</a>
                <a href="otra_pagina.html">Reina abeja</a>
                <a href="otra_pagina.html">Migracion de abejas</a>
                <a href="otra_pagina.html">Miel de abejas</a>
              </div>
              <div className="Right-panel">
                <h3>Investigadores relacionados</h3>
                <a href="otra_pagina.html">Miguel Angel Díaz Ramirez</a>
                <a href="otra_pagina.html">Alejandra Mora Martinez</a>
                <a href="otra_pagina.html">Nicolas Azuero Gomez</a>
                <a href="otra_pagina.html">Natalia Salazar Rodriguez</a>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Results;