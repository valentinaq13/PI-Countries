import React from 'react';
import{useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountries, sortFunction} from "../actions";
import Card from './Card';
import styles from "./Countries.module.css"
import Paginado from './paginado/Paginado';
import { NavLink, Link } from "react-router-dom"


function Countries() {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const[orden, setOrden] = useState("")
    const [currentPage, setCurrentPage] = useState(1)//1ro mi pagina actual y un estado q setee mi pag actual
    const [countriesPerPage, setCountriesPerPage] = useState(10)//setea cant personajes x pag
    const lastCountry = currentPage * countriesPerPage//10
    const firstCountry = lastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(firstCountry,lastCountry)//ésta constante tiene los personajes que estan en la pagina actual
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]) //si no lo pongo, me genera un loop infinito

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
        
    }
    function handleFilter(e) {
        e.preventDefault()
        dispatch(sortFunction(e.target.value))
        console.log(e.target.value + "HOLAAA")
        // setOrden(e.target.value)
        setCurrentPage(1); 
        setOrden(`Ordenado ${e.target.value}`) //para lo unico que lo uso, es para que me haga la modificacion en el renderizado
    }
    return (
        <div >
            <div>
            <p>You can order:</p>
            <select onChange={e => handleFilter(e)}>
                <option value="asc"> from A to Z</option>
                <option value="desc"> from Z to A</option>
                <option value="max">+ Population</option>
                <option value="min">-Population</option>
            </select>
        </div>
        <hr />
        <div>
               
               <button onClick={e => { handleClick(e) }}>Volver a cargar todos los países</button>
           </div>
            <div className={styles.cards}>
            {
                currentCountries.map(el => {
                    return (
                        <fragment>
                            <Link to={"/home/" + el.id} style={{paddingLeft: 13, textDecoration: 'none', color: 'gray'}}>
                                <Card name={el.name} flag={el.flag} continent={el.continent} id={el.id} />
                            </Link>
                        </fragment>
                    )
                })
            }
            </div>
           
            <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />
        </div>
    )
}

export default Countries
