import React from 'react';
import{useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../actions";
import {Link} from "react-router-dom"
import Card from './Card';
import styles from "./landingpage/LandingPage.module.css";
import Paginado from './paginado/Paginado';
import { NavLink } from "react-router-dom";


function Home() {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
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
    return (
        <div>
            <div>
                <h1 className={styles.landing2}>Countries</h1>
                <hr />
                <Link to="/activity">Creá tu actividad turística</Link>
                <button onClick={e => { handleClick(e) }}>Volver a cargar todos los países</button>
            </div>
            <div>
                <p>Order by:</p>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>
            {
                currentCountries.map(el => {
                    return (
                        <fragment>
                            <NavLink to={"/home/" + el.id}>
                                <Card name={el.name} flag={el.flag} continent={el.continent} />
                            </NavLink>
                        </fragment>
                    )
                })
            }
            <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            />
        </div>
    )
}

export default Home
