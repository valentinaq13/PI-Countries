import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useParams, Link } from "react-router-dom";
import styles from "./Countries.module.css"
import style from "./Detail.module.css"

function Detail() {

    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])


    console.log(detail)
    var count = 0
    return (
        <div>
            <div key={detail?.id} className={style.card}>
                
                <img src={detail?.flag} alt="no flag founded" width="100%" className={styles.detail}/>
                <h2>Country Name: {detail?.name}</h2>
                <h3>Continent: {detail?.continent}</h3>
                <p>Capital: {detail?.capital}</p>
                <p>Subregion: {detail?.subregion}</p>
                <p>Area: {detail?.area} km2</p>
                <p>Population: {detail?.population}</p>
                <p>Activity Information: </p>
                {detail.activities?.length ? detail.activities.map((ele) => (<div key={count++}>Name: {ele.name}
                <p>Difficulty: {ele.difficulty}</p>
                <p>Duration: {ele.duration}</p>
                <p>Season: {ele.season}</p></div>
                )) : <p>No activities</p>}

            </div>

            <Link to="/home">
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default Detail
