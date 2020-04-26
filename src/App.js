import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards , Chart , Country} from './Components';

function App() {
  return (
    <div className="App">
      <Cards />
      <Country />
      <Chart />
    </div>
  );
}

export default App;
