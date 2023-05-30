import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../resources/javeriana-logo.png';
import lupa from './../resources/lupa.png';
import './css/search.css';
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton, Pagination, MenuItem, Select, FormControl, InputLabel, InputAdornment } from '@mui/material';
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
    if (searchCriteria != "" && searchCriteria != null && searchCriteria != undefined && searchCriteria.replace(/\s/g, '').length) {
      window.location.href = "/search?query=" + searchCriteria;
    }
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
          <div className="Input-row">
            <div style={{ textAlign: "right", width: "100%", lineHeight: 6, marginTop: "6rem" }}>
              <TextField onKeyPress={handleKeyPress} value={searchCriteria} onChange={e => setSearchCriteria(e.target.value)} InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => search()} size="medium" >
                      <SearchIcon fontSize="medium" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
                label="Buscar" style={{ width: "700px", marginBottom: "2rem", marginTop: "2rem" }} variant="filled" />
            </div>
          </div>
          <img src={logo} className="Javeriana-logo" style={{ position: "absolute", bottom: 20 }} alt="Logo" />
        </div>
      </body>
    </div>
  );
}

export default Search;