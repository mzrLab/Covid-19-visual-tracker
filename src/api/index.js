import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const dataFetch = async()=>{
    try{
        const response = await axios.get(url);
        return(response);
    }catch(error){

    }
}