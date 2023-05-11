import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../resources/javeriana-logo.png';
import lupa from './../resources/lupa.png';
import './css/search.css';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {

  const [texto, setTexto] = React.useState('');
  const [searchCriteria, setSearchCriteria] = React.useState("");
  const [departamento, setDepartamento] = React.useState('');
  const [estadoProyecto, setEstadoProyecto] = React.useState('');
  const [organizar, setOrganizar] = React.useState('');
  const [tipoPropuesta, setTipoPropuesta] = React.useState('');

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const handleChangeEstadoProyecto = (event) => {
    setEstadoProyecto(event.target.value);
  };
  const handleChangeOrganizar = (event) => {
    setOrganizar(event.target.value);
  };
  const handleChangeTipoPropuesta = (event) => {
    setTipoPropuesta(event.target.value);
  };

  const search = (e) => {
    window.location.href = "/search?query=" + searchCriteria;
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  useEffect(() => {
    window.sessionStorage.removeItem('results');
  }, []);

  return (
    <div>
      <body className="Search-body">
        <div className="Column-div">
          <h1 className="Main-title">Sistema Inteligente de Búsqueda <br></br>y Exploración Académica</h1>
          <img src={logo} className="Javeriana-logo" style={{marginTop: "2.5rem"}} alt="Logo" />
          <div className="Input-row">
            <div style={{ textAlign: "right", width: "100%", lineHeight: 6 }}>
              <TextField onKeyPress={handleKeyPress} value={searchCriteria} onChange={e => setSearchCriteria(e.target.value)} label="Buscar" style={{ width: "700px", marginBottom: "2rem", marginTop: "2rem" }} variant="filled" />
              <IconButton onClick={() => search()} size="medium" style={{ marginLeft: "1rem" }}>
                <SearchIcon fontSize="medium" />
              </IconButton>
            </div>

          </div>
          <div className="Selector-row">
            <div className="Selector-column">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={departamento}
                  label="Departamento"
                  onChange={handleChangeDepartamento}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Selector-column">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estado del proyecto</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={estadoProyecto}
                  label="Estado del proyecto"
                  onChange={handleChangeEstadoProyecto}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Selector-column">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Organizar por</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={organizar}
                  label="Organizar por"
                  onChange={handleChangeOrganizar}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div style={{width: "200px", marginTop: "1rem"}} className="Selector-column">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo de propuesta</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipoPropuesta}
                label="Tipo de propuesta"
                onChange={handleChangeTipoPropuesta}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Search;