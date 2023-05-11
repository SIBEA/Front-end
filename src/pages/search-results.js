import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './css/search-results.css';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, Chip, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectResultItem from '../components/project-result-item';
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from '@mui/material/styles';

function Results() {

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

  const [value, setValue] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCriteria, setSearchCriteria] = React.useState("");
  const [results, setResults] = React.useState([]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeChip = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  useEffect(() => {
    setSearchCriteria(searchParams.get('query'));
    async function fetchAPI() {
      try {
        Swal.fire({ title: "Cargando", allowOutsideClick: false })
        Swal.showLoading();
        let response = await fetch(`https://back.klariff.com/search/model_multilingual_mpnet,${searchParams.get('query')},_cosine?percentage=0`)
        let responses = await response.json();
        window.sessionStorage.removeItem('results');
        let saved = { query: searchParams.get('query'), results: responses.response.docs }
        window.sessionStorage.setItem('results', JSON.stringify(saved));
        setResults(responses.response.docs);
        Swal.close();
      } catch (error) {
        console.log(error);
      }
    }
    if (window.sessionStorage.getItem('results') != null && (JSON.parse(window.sessionStorage.getItem('results')).query == searchParams.get('query'))) {
      console.log("Carga en memoria")
      setResults(JSON.parse(window.sessionStorage.getItem('results')).results);
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

  return (
    <div className="Results-body">
      <div className="Main-column">
        <div className="SearchBar-row">
          <h1>Resultados para: {searchCriteria}</h1>
        </div>
        <div className="Results-section-row">
          <div className="Results-group-column">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Proyectos de Investigación" {...a11yProps(0)} />
                <Tab label="Grupos de Investigación" {...a11yProps(1)} />
                <Tab label="Investigadores" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {
                results.map((item, index) =>
                  <div className="Result-group">
                    <ProjectResultItem title={item.titulo} description={item.resumen} authors={item.departamento} type="project" />
                  </div>
                )
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
              WIP
            </TabPanel>
            <TabPanel value={value} index={2}>
              WIP
            </TabPanel>
          </div>
          <div className="Right-section">
            <div className="Right-panel">
              <Typography component={'span'}>Filtros</Typography>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">Departamentos</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    label="Departamentos"
                    multiple
                    value={personName}
                    onChange={handleChangeChip}
                    input={<OutlinedInput label="Departamentos" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">Estado del proyecto</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    label="Estado del proyecto"
                    multiple
                    value={personName}
                    onChange={handleChangeChip}
                    input={<OutlinedInput label="Estado del proyecto" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">Organizar por</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    label="Organizar por"
                    multiple
                    value={personName}
                    onChange={handleChangeChip}
                    input={<OutlinedInput label="Organizar por" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">Tipo de propuesta</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    label="Tipo de propuesta"
                    multiple
                    value={personName}
                    onChange={handleChangeChip}
                    input={<OutlinedInput label="Tipo de propuesta" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div style={{width: "100%", textAlign: "center", marginTop: "1rem"}}>
            <Button style={{width: "60%"}} variant="outlined">Aplicar</Button>
            </div>
          </div>
          <Outlet />
        </div>
        <div style={{ width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
          <Pagination count={5} color="primary" />
        </div>
      </div>
      <ScrollToTop smooth color="#2C5697" width='20' />

    </div>
  );
}

export default Results;