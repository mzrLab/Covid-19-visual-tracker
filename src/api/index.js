import axios from 'axios';
import Country from '../Components/Country/Country';

const url = "https://covid19.mathdro.id/api";

export const dataFetch = async()=>{
    try{
        const {data:{confirmed , recovered , deaths , lastUpdate}} = await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate};
    }catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        const mofifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return mofifiedData;
        
    }catch(error){
        console.log(error)
    }
}

export const fetchCountriesData = async()=>{
    try{

        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);

    }catch(error){
        console.log(error)
    }
}