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
            <Box>
              <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      marginBottom: "5px"
                  }}>
                  <Link to="/content">El desplazamiento de las abejas en los últimos 20 años</Link>
              </Box>
              <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    marginBottom: "20px"
                }}>
                  <Typography
                      sx={{
                          fontWeight: 500,
                          fontSize: {
                              xs: '1.0rem',
                              sm: '1.0rem',
                              md: '1.0rem',
                              lg: '1.0rem',
                              xl: '1.0rem'
                          },
                          letterSpacing: '0.08px',
                          maxLines:'4'
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      marginBottom: "5px"
                  }}>
                  <Link to="/content">El desplazamiento de las abejas en los últimos 20 años</Link>
              </Box>
              <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    marginBottom: "20px"
                }}>
                  <Typography
                      sx={{
                          fontWeight: 500,
                          fontSize: {
                              xs: '1.0rem',
                              sm: '1.0rem',
                              md: '1.0rem',
                              lg: '1.0rem',
                              xl: '1.0rem'
                          },
                          letterSpacing: '0.08px',
                          maxLines:'4'
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        marginBottom: "5px"
                    }}>
                    <Link to="/content">Biotecnología Ambiental e Industrial - GBAI</Link>
                </Box>
                <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      marginBottom: "20px"
                  }}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: {
                                xs: '1.0rem',
                                sm: '1.0rem',
                                md: '1.0rem',
                                lg: '1.0rem',
                                xl: '1.0rem'
                            },
                            letterSpacing: '0.08px',
                            maxLines:'4'
                        }}>
                        Se producen inoculantes microbianos, enzimas, biocontroladores, para uso agroindustrial. Se trabaja en sistemas de calidad (alimentos, cosmética y farmacéutica); desarrollo, puesta a punto y validación de las técnicas de laboratorio para el control de proceso y de calidad. Utiliza sistemas biológicos indicadores de calidad de aguas y lodos, consultorías, asesoramiento e investigación. Trabaja en la eliminación de contaminantes e inactivación de microrganismos a través de técnicas biológicas y físicas (procesos de oxidación avanzados, plasma y fotocatálisis). Organismos recombinantes (bacterias, levaduras) para la producción de proteínas y enzimas de uso farmacéutico, cosmético y ambiental y diagnóstico de micoorganismos emergentes en alimentos.
                    </Typography>
                </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        marginBottom: "5px"
                    }}>
                    <Link to="/content">Miguel Angel Díaz Ramirez</Link>
                </Box>
                <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'left',
                      marginBottom: "20px"
                  }}>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: {
                                xs: '1.0rem',
                                sm: '1.0rem',
                                md: '1.0rem',
                                lg: '1.0rem',
                                xl: '1.0rem'
                            },
                            letterSpacing: '0.08px',
                            maxLines:'4'
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>
            </Box>
          </TabPanel>
        </div>
      </body>
    </div>
  );
}

export default Results;