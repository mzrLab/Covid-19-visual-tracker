import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart';
import Country from './Components/Country/Country';
import {dataFetch} from './api';

function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Country />
      <Chart />
    </div>
  );
}

export default App;
