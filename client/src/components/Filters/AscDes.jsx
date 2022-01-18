import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { sortFunction, getCountries } from '../../actions';
import styles from "./FiltActivity.module.css"

function AscDes() {
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getCountries()) }, [dispatch])

    function handleFilter(e) {
        e.preventDefault()
        dispatch(sortFunction(e.target.value))
        console.log(e.target.value + "HOLAAA")
    }

    return (
        <div className={styles.navBar}>
            
            <select onChange={e => handleFilter(e)}>
                <option>order</option>
                <option value="asc"> from A to Z</option>
                <option value="desc"> from Z to A</option>
                <option value="max">Ascendent population</option>
                <option value="min">Descendent population</option>
            </select>
        </div>
    )
}

export default AscDes
