import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import { sortFunction, getCountries } from '../../actions';
import styles from "./FiltActivity.module.css"

function AscDes() {
    const dispatch = useDispatch();
   
//    const [orden, setOrden] = useState("")

   useEffect(() => { dispatch(sortFunction())}, [dispatch])
    

    function handleFilter(e){
        e.preventDefault()
        dispatch(sortFunction(e.target.value))
        //console.log(e.target.value + "HOLAAA")

        // setOrden(e.target.value)
    }
     
    return (
        <div>
            <p>You can:</p>
           <select onChange={ e => handleFilter(e)}>
                <option value="asc"> from A to Z</option>
                <option value="desc"> from Z to A</option>
            </select>
            <p>Population</p>
            <select onChange={e => handleFilter(e)} >
                <option value="max">Ascendent</option>
                <option value="min">Descendent</option>
            </select>
        </div>
    )
}

export default AscDes
