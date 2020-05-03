import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart';
import Country from './Components/Country/Country';
import {dataFetch} from './api';

class App extends React.Component{
  async componentDidMount(){
    const data = await dataFetch();
    console.log(data);
  }
  render(){
  return (
    <div className={styles.container}>
      <Cards />
      <Country />
      <Chart />
    </div>
  );
}
}

export default App;
