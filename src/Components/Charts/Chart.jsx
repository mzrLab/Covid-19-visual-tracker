import React , {useState , useEffect} from "react";
import {fetchDailyData} from '../../api';
import styles from './Chart.module.css';
import { Line } from "react-chartjs-2";

const Chart= ()=> {
    const [dailyData , setDailyData] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            setDailyData(await fetchDailyData());
        }
    fetchApi();
    });
    const lineChart = (
        dailyData.length ? (<Line 
        data={{
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:'true'
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:'true'
            }],
            labels:dailyData.map(({date})=>date),
        }}
        />):null
    );
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;