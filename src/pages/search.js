import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../resources/javeriana-logo.png';
import lupa from './../resources/lupa.png';
import './css/search.css';

function Search() {

  const [texto, setTexto] = React.useState('');

  return (
    <div>
      <body className="Search-body">
        <div className="Column-div">
          <h1 className="Main-title">Sistema Inteligente de Búsqueda <br></br>y Exploración Académica</h1>
          <img src={logo} className="Javeriana-logo" alt="Logo"/>
          <div className="Input-row">
            <input 
              type="text" 
              value={texto} 
              onChange={event => setTexto(event.target.value)} 
              placeholder="Search" 
              className="Input-search" 
              />
              <button><img className="search-icon" src={lupa} alt="Lupa"/></button>
              <Outlet />
          </div>
          <div className="Selector-row">
            <div className="Selector-column">
              <p className="Selector-title">Departamento</p>
              <select className="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div className="Selector-column">
              <p className="Selector-title">Área de estudio</p>
              <select className="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div className="Selector-column">
              <p className="Selector-title">Organizar por</p>
              <select className="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
          </div>
          <div className="Selector-column">
            <p className="Selector-title">Tipo de búsqueda</p>
              <select className="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Search;