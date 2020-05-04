import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart';
import Country from './Components/Country/Country';
import {dataFetch} from './api';


class App extends React.Component{
  state = {
    data:{},
  }
  async componentDidMount(){
    const FetchedData = await dataFetch();
    this.setState({data:FetchedData});
  }
  render(){
    const {data} = this.state;
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <Country />
      <Chart />
    </div>
  );
}
}

export default App;
