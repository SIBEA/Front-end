import React from 'react';
import logo from './../resources/javeriana-logo.png';
import lupa from './../resources/lupa.png';
import './search.css';
import Header from '../header/header.js'

function Search() {

  const [texto, setTexto] = React.useState('');

  return (
    <div>
      <header>
        <Header />
      </header>
      <hr></hr>
      <body className="Search-body">
        <div className="Column-div">
          <h1 className="Main-title">Sistema Inteligente de Búsqueda <br></br>y Exploración Académica</h1>
          <img src={logo} className="Javeriana-logo" alt="Logo"/>
          <div class="Input-row">
            <input 
              type="text" 
              value={texto} 
              onChange={event => setTexto(event.target.value)} 
              placeholder="Search" 
              className="Input-search" 
              />
            <img src={lupa} class="Search-icon" alt="Lupa"></img>
          </div>
          <div class="Selector-row">
            <div class="Selector-column">
              <p class="Selector-title">Departamento</p>
              <select class="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div class="Selector-column">
              <p class="Selector-title">Área de estudio</p>
              <select class="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div class="Selector-column">
              <p class="Selector-title">Organizar por</p>
              <select class="Selector">
                <option value="0"></option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
          </div>
          <div class="Selector-column">
            <p class="Selector-title">Tipo de búsqueda</p>
              <select class="Selector">
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