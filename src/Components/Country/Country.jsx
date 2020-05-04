import React, {useState , useEffect} from "react";
import {NativeSelect , FormControl} from '@material-ui/core';

import styles from './Country.module.css';
import {fetchCountriesData} from '../../api';

const Country= ({handleCountryChange})=> {

    const [fetchedCountries , setFetchCountries] = useState([]);
    useEffect(()=>{
        const fetchCountries = async ()=>{
            setFetchCountries(await fetchCountriesData());
        }
        fetchCountries();
    });

    //console.log(fetchedCountries);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country , i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;