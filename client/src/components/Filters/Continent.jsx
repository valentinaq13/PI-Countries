import React from 'react';
import { filterByContinent } from "../../actions";
import { useDispatch } from "react-redux";
import styles from "./FiltActivity.module.css"


function Continent() {
    const dispatch = useDispatch();

    function handleContinent(e) {
        dispatch(filterByContinent(e.target.value))
    }


    return (
        <div className={styles.navBar}>

            <select onChange={e => handleContinent(e)}>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
            </select>

        </div>
    )
}

export default Continent
