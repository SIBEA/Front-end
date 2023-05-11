import React, { useEffect } from 'react';
import logo from './../resources/javeriana-logo-horizontal.png';
import './header.css'
import { Box, Tab, Tabs, Typography, TextField, Button, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom'


function Header() {

  const [searchCriteria, setSearchCriteria] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    setSearchCriteria(searchParams.get('query'));
  }, []);

  const goToHome = (e) => {
    window.location.href = "/";
  }

  const search = (e) => {
    window.location.href = "/search?query=" + searchCriteria;
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      search();
    }
  }

  return (
    <div>
      <header className="General-header">
        <img onClick={() => goToHome()} src={logo} style={{pointerEvents: "all", cursor: "pointer"}} className="logo" alt="Logo" />
        <ThemeProvider theme={darkTheme}>
          <div style={{ textAlign: "right", marginRight: "1.5rem", width: "100%", lineHeight: 2.5 }}>
            <TextField onKeyPress={handleKeyPress} value={searchCriteria} onChange={e => setSearchCriteria(e.target.value)} label="Buscar" style={{ marginLeft: "2rem", width: "350px" }} variant="filled" />
            <IconButton onClick={() => search()} size="medium" style={{ marginLeft: "1rem" }}>
              <SearchIcon fontSize="medium" />
            </IconButton>
          </div>
        </ThemeProvider>
      </header>
      <hr></hr>
    </div>
  );
}

export default Header;