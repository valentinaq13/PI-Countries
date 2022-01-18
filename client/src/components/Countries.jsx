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
    const [currentPage, setCurrentPage] = useState(1)//1ro mi pagina actual y un estado q setee mi pag actual
    // const [countriesPerPage, setCountriesPerPage] = useState(10)//setea cant personajes x pag
    var countriesPerPage = 0;
    if (currentPage === 1) { countriesPerPage = 9 }
    if (currentPage >= 2) { countriesPerPage = 10 }
    const lastCountry = currentPage * countriesPerPage//10
    const firstCountry = lastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(firstCountry, lastCountry)//ésta constante tiene los personajes que estan en la pagina actual

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]) //si no lo pongo, me genera un loop infinito

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());

    }
    return (
        <div >

            <hr />
            <div>

                <button onClick={e => { handleClick(e) }}>Volver a cargar todos los países</button>
            </div>
            <div className={styles.cards}>
                {
                    currentCountries.map(el => {
                        return (
                            <div key={el.id}>
                                <Link to={"/home/" + el.id} style={{ paddingLeft: 13, textDecoration: 'none', color: 'gray' }}>
                                    <Card name={el.name} flag={el.flag} continent={el.continent} />
                                </Link>
                            </div>
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
