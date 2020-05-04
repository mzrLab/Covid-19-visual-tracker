import React from 'react';
import styles from './App.module.css';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart';
import Country from './Components/Country/Country';
import {dataFetch} from './api';


class App extends React.Component{
  state = {
    data:{},
    country:'',
  }
  async componentDidMount(){
    const FetchedData = await dataFetch();
    this.setState({data:FetchedData});
  }
  handleCountryChange = async (country) => {
    const FetchedData = await dataFetch(country);
    this.setState({data:FetchedData , country:country});
  }
  render(){
    const {data} = this.state;
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <Country handleCountryChange={this.handleCountryChange} />
      <Chart />
    </div>
  );
}
}

export default App;
